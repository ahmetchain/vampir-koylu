'use strict';
const { cleanBotLine } = require('../manners');
const { rolesCalled } = require('./rolecall');

// Akıllı botların oda düzeyindeki beyni. Rastgele botların (lib/bots.js BotBrain) zamanlayıcısını ve
// yedek hamlelerini kullanır: her karar bir son tarihe bağlıdır; model geç kalır, hata verir, reddeder
// ya da bozuk yanıt verirse o anda rastgele bot davranışına (ya da sessizliğe) düşülür. Oyun asla
// API'yi beklemez. İstemler yalnızca botun kendi görünümünden ve koltuğuna gelen sohbetten kurulur.

const { SYSTEM_PROMPT, buildUser } = require('./prompt');
const { resolveName, isSleepWord } = require('./schema');
const { SpeechGate, ChatPacer, readMs, typeMs } = require('./speech');
const { personaFor } = require('./personas');
const { isEvil } = require('./roles');
const { SeatRecord } = require('./record');
const { reviewView } = require('./gamerec');

const STALE_MS = 25000;             // tetikleyen mesajdan bu kadar sonra gelen model cevabı atılır
const PHASE_END_MARGIN_MS = 1200;   // satır, evrenin (ör. savunma süresinin) bitiminden en geç bu kadar önce çıkar
const NIGHT_WINDOW_MS = 7000;       // gece kararı yürüyüşün bitiminden en geç bu kadar sonra (cadı: 9 sn)
const PICK_MARGIN_MS = 1500;        // seçim süresinin bitiminden önce bırakılan pay
const HUNTER_MS = 20000;

// Model cevap veremediğinde adıyla seslenilen botun nötr cevabı (rol ya da bilgi içermez).
const FALLBACK_REPLIES = [
  'Bir saniye, toparlayıp yazacağım.',
  'Az sonra cevaplıyorum, notlarıma bakıyorum.',
  'Dur bir düşüneyim, birazdan yazarım.',
];
const FALLBACK_DEFENSE = ['Ben masumum, yanlış kişiyi seçiyorsunuz.', 'Bana değil, sessiz kalanlara bakın.'];

// Satırı kelimelere ayır (Türkçe küçük harf, noktalama yok, 2 harften kısa kelimeler atılır).
function lineWords(text) {
  return String(text || '').toLocaleLowerCase('tr').replace(/[^a-zçğıöşüâîû0-9\s]/g, ' ').split(/\s+/).filter((w) => w.length > 2);
}
// Kural kitabının yasakladığı genel gece soruları (yalnızca Gözcü görebilir; doğrulanamaz).
const BANNED_LINE = /kimse (bir ?şey|bişey|bir ses) (duydu|gördü|fark etti|duymadı|görmedi)|kim ne gördü|gece neredeydin|ilk gece neredeydin|kim nereye gitti|gece kim nereye/;

class SmartBots {
  // base: odanın BotBrain'i (zamanlayıcı + rastgele yedek hamleler). client: AiClient.
  constructor(room, base, client, { rng = Math.random, now = Date.now, logger = console, onTyping = null, onPrompt = null } = {}) {
    this.room = room;
    this.base = base;
    this.client = client;
    this.rng = rng;
    this.now = now;
    this.logger = logger;
    this.onTyping = onTyping;
    this.onPrompt = onPrompt;       // testler ve kuru çalıştırma: gönderilen istemleri görmek için
    this.gate = new SpeechGate({ rng, now });
    // Sohbet sırası: zamanlayıcıları BotBrain'in evre kuşağına bağlı (evre değişince geçersiz).
    this.pacer = new ChatPacer({ rng, now, schedule: (ms, fn) => this.schedule(ms, fn) });
    this.fallbacks = {};            // bu oyunda rastgele yedeğe düşülen kararlar (yalnızca sayılar)
    this.memory = new Map();
    this.records = new Map();       // bot -> SeatRecord (yalnızca bu oyun: zaman çizelgesi, olaylar, sohbet)
    this.gameNo = 0;                // her yeni oyunda artar; eski oyundan kalan geç cevaplar atılır
    this.dayWatch = null;           // gün/mahkeme oylarının son herkese açık fotoğrafı { phase, round, snap }
    this.ledger = client ? client.ledger() : null;
    this.pending = new Map();       // bot -> bekleyen sohbet isteği
    this.inflight = new Map();      // bot -> sürmekte olan sohbet isteği
    this.typing = new Set();
    this.nightQueued = new Set();
    this.voteDecided = new Set();
    this.lockDecided = new Set();
    this.defended = new Set();
    this.saying = null;
    this.logged = false;
    this.recordSent = false;
  }

  // ---------- durum ----------

  enabled() {
    return Boolean(this.client && this.client.available() && this.room.settings.smartBots !== false && this.client.hasBudget());
  }

  rand(a, b) { return a + (b - a) * this.rng(); }
  pick(arr) { return arr.length ? arr[Math.floor(this.rng() * arr.length)] : null; }
  player(id) { return this.room.players.get(id); }
  aliveBots() { return [...this.room.players.values()].filter((p) => p.bot && !p.left && p.alive); }

  // Evre kuşağına bağlı zamanlayıcı (BotBrain.later gibi, ama en kısa gecikme sınırı olmadan).
  schedule(ms, fn) {
    const base = this.base;
    if (base.closed) return;
    const gen = base.gen;
    const t = setTimeout(() => {
      if (base.timers) base.timers.delete(t);
      if (base.closed || gen !== base.gen) return;
      try { fn(); } catch (err) { this.logger.warn(`[${this.room.id}] Akıllı sohbet sırası hatası: ${err && err.message}`); }
    }, Math.max(0, Math.round(ms)));
    if (base.timers) base.timers.add(t);
  }

  fellBack(kind) {
    this.fallbacks[kind] = (this.fallbacks[kind] || 0) + 1;
    this.room.rec('fallback', kind);   // oyun geçmişine de yazılır (gamerec.js)
  }

  // Yeni oyun: hafıza, sohbet ve defter sıfırlanır (önceki oyunun özeti loglanır).
  resetGame() {
    this.logSummary();
    this.gameNo += 1;
    this.saidToday = new Map();
    this.memory = new Map();
    this.records = new Map();
    this.dayWatch = null;
    this.pending = new Map();
    this.pacer.reset();
    this.inflight = new Map();
    this.setTyping(null);
    this.gate.reset();
    this.ledger = this.client ? this.client.ledger() : null;
    this.fallbacks = {};
    this.logged = false;
    this.recordSent = false;
  }

  // Oyun başına tek log satırı: yalnızca sayılar (sohbet içeriği, isim yok).
  // Örnek: [ai] oyun bitti oda=ABCD model=claude-haiku-5-5 çağrı=87 başarılı=85 token: girdi=61234
  //        önbellek_okuma=148000 önbellek_yazma=1750 çıktı=6900 maliyet≈$0.0127 yedek: gece=1 oy=2 hata: timeout=2
  logSummary() {
    if (this.logged || !this.ledger) return;
    const s = this.ledger.summary();
    const fb = Object.entries(this.fallbacks).filter(([, v]) => v > 0);
    const fails = Object.entries(s.failures).filter(([, v]) => v > 0);
    if (!s.calls && !fails.length && !fb.length) return;
    this.logged = true;
    const kv = (list) => list.map(([k, v]) => `${k}=${v}`).join(' ');
    const model = s.models.length ? s.models.join('+') : (this.client && this.client.config ? this.client.config.model : '?');
    this.logger.log(`[ai] oyun bitti oda=${this.room.id} model=${model} çağrı=${s.calls} başarılı=${s.ok} `
      + `token: girdi=${s.input_tokens} önbellek_okuma=${s.cache_read_input_tokens} önbellek_yazma=${s.cache_creation_input_tokens} `
      + `çıktı=${s.output_tokens} maliyet≈$${s.costUsd.toFixed(4)} yedek: ${fb.length ? kv(fb) : 'yok'}`
      + ` hata: ${fails.length ? kv(fails) : 'yok'}`);
  }

  // BotBrain her evre değişiminde çağırır (zamanlayıcılar az önce temizlendi).
  onPhase(phase) {
    this.commitDay();
    if (phase === 'reveal') {
      this.resetGame();
      // Kayıtlar oyunun en başında kurulur (lobi kuralı o anki görünümden alınır, sonra değişmez).
      for (const b of this.aliveBots()) this.recordOf(b.id);
    }
    if (phase === 'ended') this.emitRecord();
    if (phase === 'ended' || phase === 'lobby') { this.logSummary(); this.setTyping(null); }
    this.pending = new Map();
    this.pacer.reset();   // sırada bekleyen satırlar yeni evreye taşınmaz
    this.nightQueued = new Set();
    if (phase === 'day') { this.voteDecided = new Set(); this.lockDecided = new Set(); this.defended = new Set(); this.gate.reset(); this.saidToday = new Map(); }
  }

  // Oyun bitti: en az bir gerçek model çağrısı yapıldıysa, odanın oyun geçmişinden (gamerec.js) kurulan küçük
  // inceleme görünümü sunucuya verilir (hooks.reviewReady; sunucu bunu asenkron inceletir ve geçmiş kaydına bağlar).
  // Hiçbir hata oyunu etkilemez.
  emitRecord() {
    if (this.recordSent) return;
    this.recordSent = true;
    const hooks = this.room.hooks;
    const full = this.room.recorder && this.room.recorder.record;
    if (!hooks || typeof hooks.reviewReady !== 'function' || !this.ledger || !this.ledger.ok || !full) return;
    try {
      hooks.reviewReady(this.room, reviewView(full), { logId: full.id });
    } catch (err) {
      this.logger.warn(`[${this.room.id}] Oyun kaydı kurulamadı: ${err && err.message}`);
    }
  }

  setTyping(id, on = false) {
    const before = this.typing.size;
    if (id === null) this.typing.clear();
    else if (on) this.typing.add(id);
    else this.typing.delete(id);
    if (this.onTyping && (before !== this.typing.size)) {
      try { this.onTyping([...this.typing]); } catch (err) { /* gösterge önemsiz */ }
    }
  }

  // ---------- kayıtlar ----------

  // Botun bu oyunluk kaydı (yoksa kurulur ve ilk görünümle eşlenir).
  recordOf(botId) {
    let rec = this.records.get(botId);
    if (!rec) {
      rec = new SeatRecord(botId);
      this.records.set(botId, rec);
      try { rec.sync(this.room.viewFor(botId)); } catch (err) { /* görünüm yoksa ilk turda eşlenir */ }
    }
    return rec;
  }

  // BotBrain her oda değişiminde (sync) çağırır: gün/mahkeme oylarının herkese açık son fotoğrafı ve
  // gecenin gösterim aşamasında botların kendi gece görünümü (seçimi, iksirler, yürüyüş sonucu).
  observeState() {
    const r = this.room;
    if (!this.client || this.base.closed) return;
    const bots = this.aliveBots();
    if (!bots.length) return;
    try {
      if (r.phase === 'day' || (r.phase === 'trial' && r.trial && r.trial.step === 'vote')) {
        const view = r.viewFor(bots[0].id);
        const d = view.day;
        if (d) {
          const trial = r.phase === 'trial';
          this.dayWatch = {
            phase: r.phase,
            round: r.round,
            snap: {
              round: r.round,
              trial,
              accused: trial && r.trial ? [...r.trial.accused] : null,
              secret: Boolean(d.secret),
              votes: d.votes || {},
              counts: d.counts || {},
              sleeping: d.sleeping || [],
              sleepers: d.sleepers || 0,
              voted: d.secret ? null : (d.voted || []),
              alive: view.players.filter((p) => p.alive && !p.left).map((p) => p.id),
            },
          };
        }
      } else if (r.phase === 'night' && r.night && r.night.stage === 'show') {
        for (const b of bots) {
          const rec = this.recordOf(b.id);
          if (!rec.nights.has(r.round)) rec.addNight(r.viewFor(b.id));
        }
      }
    } catch (err) {
      this.logger.warn(`[${this.room.id}] Akıllı bot durumu işlenemedi: ${err && err.message}`);
    }
  }

  // Gün ya da mahkeme oylaması bittiyse son oy fotoğrafı her kayda zaman çizelgesi öğesi olarak eklenir.
  commitDay() {
    const w = this.dayWatch;
    if (!w) return;
    const r = this.room;
    if (r.phase === w.phase && r.round === w.round) return;   // aynı evre (ör. savunma sırası değişti)
    this.dayWatch = null;
    for (const rec of this.records.values()) rec.addVoteSnapshot(w.snap);
  }

  // ---------- model çağrısı ----------

  async ask(botId, task, deadline) {
    const p = this.player(botId);
    if (!p) return { ok: false, reason: 'gone' };
    let user;
    const game = this.gameNo;
    try {
      const view = this.room.viewFor(botId);
      user = buildUser({ view, rec: this.recordOf(botId), memory: this.memory.get(botId) || '', persona: personaFor(p.name), task });
    } catch (err) {
      this.logger.warn(`[${this.room.id}] Akıllı bot istemi kurulamadı: ${err && err.message}`);
      return { ok: false, reason: 'prompt' };
    }
    if (this.onPrompt) {
      try { this.onPrompt({ botId, system: SYSTEM_PROMPT, user, task: task.kind }); } catch (err) { /* yalnızca gözlem */ }
    }
    const res = await this.client.turn({ system: SYSTEM_PROMPT, user, deadline, ledger: this.ledger, botId, tier: this.room.botTier(botId) });
    // Cevap gelirken yeni oyun başladıysa (eski oyunun notu, kararı) hiçbir şey taşınmaz.
    if (game !== this.gameNo) return { ok: false, reason: 'stale' };
    if (res.ok && res.data.memory) this.memory.set(botId, res.data.memory);
    if (res.ok) this.room.rec('turn', botId, task, res.data);
    if (this.onPrompt && res.ok) {
      try { this.onPrompt({ botId, output: res.data, task: task.kind }); } catch (err) { /* yalnızca gözlem */ }
    }
    return res;
  }

  // Söz gelen sonuç hâlâ geçerli mi (evre değişmedi, bot yaşıyor)?
  current(gen, botId) {
    const p = this.player(botId);
    return !this.base.closed && this.base.gen === gen && p && p.alive && !p.left;
  }

  // ---------- sohbet ----------

  // Koltuğa gelen her sohbet mesajı (insan ve bot). Botların kaydına eklenir; gerekirse cevap planlanır.
  observeChat(recipients, message) {
    if (!message) return;
    if (message.channel === 'genel') {
      this.lastChatAt = this.now();
      // Çapraz tekrar süzgeci için son satırlar (kim yazdıysa): iki bot aynı anda tetiklenince birbirini görmeden aynı şeyi söyleyebiliyor.
      if (!this.recentLines) this.recentLines = [];
      this.recentLines.push({ from: message.fromId, words: new Set(lineWords(message.text)), at: this.now() });
      if (this.recentLines.length > 4) this.recentLines.shift();
    }
    // Yalnızca oyun evrelerindeki sohbet kayda girer: lobi ve oyun sonu sohbeti hiçbir oyun turuna karışmaz.
    if (this.room.inGame) {
      for (const id of recipients || []) {
        const p = this.player(id);
        if (!p || !p.bot || !p.alive || p.left) continue;
        const rec = this.recordOf(id);
        if (rec) rec.addChat(message, this.room.viewFor(id));
      }
    }
    if (!this.enabled()) return;
    const r = this.room;
    const sender = this.player(message.fromId);
    if (!sender) return;
    const fromBot = Boolean(sender.bot);
    // İnsan konuştu: o kanalda sırada bekleyen eski tepkiler bayatlar.
    if (!fromBot) this.pacer.noteHuman(message.channel);
    const depth = this.saying && this.saying.botId === message.fromId ? this.saying.depth : 0;
    const listening = (recipients || []).map((id) => this.player(id)).filter((p) => p && p.bot && p.alive && !p.left && p.id !== sender.id);
    let decisions = [];
    if (message.channel === 'genel' && ['day', 'trial', 'hunter'].includes(r.phase)) {
      decisions = this.gate.decide({ fromId: sender.id, text: message.text, depth, fromBot }, listening);
      // Avcı anında ve mahkeme savunmasında yalnızca seslenilen cevap verir.
      if (r.phase === 'hunter' || (r.trial && r.trial.step === 'defense')) decisions = decisions.filter((d) => d.kind === 'direct');
    } else if (message.channel === 'vampir' && r.phase === 'night' && !fromBot) {
      decisions = this.gate.decide({ fromId: sender.id, text: message.text, depth: 0, fromBot: false }, listening)
        .filter((d) => d.kind === 'direct');
    }
    // Rol çağrısı: "Gözcü gözlem yaptı mı?" gibi bir mesaj o role sahip botları (gerçek rolden) konuşturur (en çok 3 bot).
    if (!fromBot && message.channel === 'genel' && r.phase === 'day') {
      const called = rolesCalled(message.text);
      if (called.size) {
        let n = 0;
        for (const p of listening) {
          if (n >= 3) break;
          if (!called.has(r.actingRole(p)) || decisions.some((d) => d.botId === p.id)) continue;
          decisions.push({ botId: p.id, kind: 'rolecall', depth: 1, fromBot: false });
          n += 1;
        }
      }
    }
    for (const d of decisions) this.requestChat(d.botId, { kind: d.kind, trigger: message, depth: d.depth, fromBot: d.fromBot });
  }

  // Bota oy verildi: kendini savunma fırsatı (kendiliğinden konuşma sınırlarına tabi).
  observeVote(voterId, targetId) {
    if (!this.enabled() || this.room.phase !== 'day') return;
    const target = this.player(targetId);
    const voter = this.player(voterId);
    if (!target || !target.bot || !target.alive || !voter || voter.id === target.id) return;
    if (voter.bot && this.rng() < 0.8) return;   // bot oyları daha az tepki çeker
    // Günde en fazla bir kendiliğinden savunma (adıyla seslenilirse yine her zaman cevap verir).
    if (this.defended.has(target.id) || !this.gate.canSpeakFree(target.id)) return;
    this.defended.add(target.id);
    this.requestChat(target.id, { kind: 'defend', trigger: null, byName: voter.name, depth: voter.bot ? 1 : 0, fromBot: voter.bot });
  }

  requestChat(botId, req) {
    const p = this.player(botId);
    if (!p || !p.alive) return;
    req.at = this.now();
    // Bu isteğin dayandığı konuşma anı: sonradan yeni bir insan mesajı gelirse kendiliğinden cevap bayatlar.
    req.seq = this.pacer.seq(this.channelNow());
    const busy = this.inflight.get(botId);
    if (busy) {
      // Cevap yazarken (ya da satırı sırada beklerken) yeni bir doğrudan seslenme geldi: sonra ona da cevap verilir.
      if (req.kind === 'direct') busy.again = req;
      return;
    }
    const waiting = this.pending.get(botId);
    if (waiting) {
      if (req.kind === 'direct' || waiting.kind !== 'direct') this.pending.set(botId, { ...req, at: waiting.at });
      return;
    }
    this.pending.set(botId, req);
    const gen = this.base.gen;
    // Okuma: tetikleyen mesajın uzunluğuna göre (mahkemede söz sırası gelen sanık hemen başlar).
    const read = req.kind === 'defense' ? this.rand(300, 700) : readMs(req.trigger && req.trigger.text, this.rng);
    this.schedule(read, () => { this.runChat(botId, gen).catch(() => {}); });
  }

  channelNow() { return this.room.phase === 'night' ? 'vampir' : 'genel'; }

  async runChat(botId, gen) {
    const req = this.pending.get(botId);
    this.pending.delete(botId);
    if (!req || !this.current(gen, botId)) return;
    const forced = req.kind === 'direct' || req.kind === 'defense';
    const eager = forced || req.kind === 'rolecall';   // rol çağrısı kalabalık sınırına takılmaz ama hazır cevap (yedek) yok
    if (!eager && !this.gate.canSpeakFree(botId)) return;
    this.inflight.set(botId, req);
    // "Yazıyor…" model çağrısı sürerken gösterilmez (cevap gelmeyebilir, gereksiz yere birçok bot yazıyor
    // görünüyordu); satır hazır olunca, yazma süresi boyunca görünür (queueLine).
    const startedAt = this.now();
    let res = { ok: false };
    try {
      res = await this.ask(botId, { kind: req.kind, trigger: req.trigger, byName: req.byName }, this.now() + this.client.config.timeoutMs);
    } catch (err) {
      res = { ok: false };
    }
    const fresh = this.current(gen, botId) && this.now() - req.at <= STALE_MS;
    let line = '';
    if (fresh) {
      line = res.ok ? res.data.say : '';
      if (res.ok) this.applyDay(botId, res.data, { lock: false });
      // Adıyla seslenen insana model cevap veremezse bile kısa, nötr bir cevap gider.
      if (!line && forced && !req.fromBot) {
        line = this.pick(req.kind === 'defense' ? FALLBACK_DEFENSE : FALLBACK_REPLIES);
        this.fellBack('cevap');
      }
    }
    if (line) {
      this.queueLine(botId, line, {
        startedAt, direct: eager, depth: req.depth || 0, seq: req.kind === 'react' ? req.seq : undefined,
        done: () => this.chatDone(botId, req, gen),
      });
      return;
    }
    this.chatDone(botId, req, gen);
  }

  // Satır çıktı ya da atıldı: bot yeniden konuşabilir; arada gelen doğrudan seslenmeye sıra gelir.
  chatDone(botId, req, gen) {
    if (this.inflight.get(botId) === req) this.inflight.delete(botId);
    this.setTyping(botId, false);
    if (req && req.again && this.current(gen, botId)) {
      const again = req.again;
      req.again = null;
      this.requestChat(botId, again);
    }
  }

  // Satırı oda sırasına koyar: insan gibi yazma süresi (çağrının başından sayılır), kanalda bot satırları
  // arasında 3–5 sn. Gündüz "yazıyor…" satır çıkana kadar görünür. Seçimler/oylar bundan etkilenmez.
  queueLine(botId, text, { startedAt = this.now(), direct = false, depth = 0, seq, done = null } = {}) {
    const r = this.room;
    const channel = this.channelNow();
    let readyAt = startedAt + typeMs(text, this.rng);
    // Evre (ör. 15 sn'lik savunma) bitmeden çıkabilsin.
    if (r.deadline && r.phase !== 'night') readyAt = Math.min(readyAt, r.deadline - PHASE_END_MARGIN_MS);
    // "Yazıyor…" satır hazır olunca açılır; en az ~1,2 sn görünsün (model yavaşsa hemen düşmesin).
    readyAt = Math.max(readyAt, this.now() + (channel === 'genel' ? 1200 : 0));
    if (r.deadline && r.phase !== 'night') readyAt = Math.min(readyAt, Math.max(this.now(), r.deadline - PHASE_END_MARGIN_MS));
    if (channel === 'genel') this.setTyping(botId, true);
    const finish = () => {
      if (done) done();
      else this.setTyping(botId, false);
    };
    this.pacer.enqueue({
      botId, channel, text, readyAt, direct, seq,
      post: () => {
        try { this.say(botId, text, { depth, direct }); } finally { finish(); }
      },
      drop: () => finish(),
    });
  }

  say(botId, line, { depth = 0, direct = false } = {}) {
    const r = this.room;
    const p = this.player(botId);
    if (!p || !p.alive) return;
    const night = r.phase === 'night';
    if (!night && !['day', 'trial', 'hunter'].includes(r.phase)) return;
    if (night && !isEvil(p.role)) return;
    // Edep (lib/manners.js): "lan / valla / yemin" gibi sözler çıkarılır, hakaret içeren satır gönderilmez.
    line = cleanBotLine(line);
    if (!line) { this.fellBack('edep'); return; }
    // Kod düzeyinde koruma (gerçek oyun incelemeleri): botun bugün yazdığına çok benzeyen satır ve
    // kural kitabının yasakladığı genel sorular gönderilmez (model kurala her zaman uymuyor).
    if (!this.lineAllowed(botId, line, direct)) { this.fellBack('tekrar'); return; }
    this.saying = { botId, depth };
    try {
      if (r.say(botId, line) === null) this.gate.record(botId, { direct });
    } finally {
      this.saying = null;
    }
  }

  lineAllowed(botId, line, direct) {
    const words = lineWords(line);
    const flat = String(line || '').toLocaleLowerCase('tr').replace(/[^a-zçğıöşüâîû0-9\s]/g, ' ').replace(/\s+/g, ' ');
    if (BANNED_LINE.test(flat) && !direct) return false;   // isimle seslenilen insana cevap asla düşürülmez
    if (!this.saidToday) this.saidToday = new Map();
    const past = this.saidToday.get(botId) || [];
    const set = new Set(words);
    // İsimle seslenilen insana cevap düşürülmez (cevapsız kalmasın); yalnızca yasak sorular süzülür.
    const limit = direct ? Infinity : 0.6;
    for (const prev of past) {
      let common = 0;
      for (const w of set) if (prev.has(w)) common += 1;
      const union = set.size + prev.size - common;
      if (union && common / union >= limit) return false;
    }
    // Başkasının (bot ya da insan) son 25 sn içindeki son satırlarına çok benziyorsa gönderme: aynı fikri ikinci kez söylemek robot gibi durur.
    if (!direct && this.recentLines && this.recentLines.length) {
      const now = typeof this.now === 'function' ? this.now() : Date.now();
      for (const r of this.recentLines) {
        if (r.from === botId || now - r.at > 25000 || !r.words.size) continue;
        let common = 0;
        for (const w of set) if (r.words.has(w)) common += 1;
        const union = set.size + r.words.size - common;
        if (union && common / union >= 0.55) return false;
      }
    }
    past.push(set);
    this.saidToday.set(botId, past);
    return true;
  }

  // Gündüz yanıtı: oy (değişebilir), gardiyan kilidi.
  applyDay(botId, data, { lock = true } = {}) {
    const r = this.room;
    const p = this.player(botId);
    if (!p || !p.alive || !['day', 'trial'].includes(r.phase)) return;
    const alive = [...r.players.values()].filter((x) => x.alive && !x.left);
    if (data.vote && (r.phase === 'day' || (r.trial && r.trial.step === 'vote'))) {
      const current = r.dayVotes.get(botId) || null;
      let target = null;
      if (isSleepWord(data.vote)) target = r.phase === 'day' ? 'sleep' : null;
      else {
        const t = resolveName(data.vote, alive);
        target = t ? t.id : null;
      }
      // Aynı oyu tekrar vermek oyu geri çeker: değişiklik yoksa dokunma.
      if (target && target !== current && target !== botId) r.vote(botId, target);
    }
    if (lock && data.target && r.actingRole(p) === 'gardiyan') {
      const t = resolveName(data.target, alive);
      if (t && r.lockHouse(botId, t.id) === null) this.lockDecided.add(botId);
    }
  }

  // ---------- gece ----------

  planNight() {
    this.nightQueued = new Set();
    this.queueNight();
  }

  queueNight() {
    const r = this.room;
    if (r.phase !== 'night' || !r.night || r.night.stage === 'show') return;
    for (const bot of this.aliveBots()) {
      if (this.nightQueued.has(bot.id) || !r.canActAtNight(bot.id)) continue;
      this.nightQueued.add(bot.id);
      this.nightFor(bot.id);
    }
  }

  nightFor(botId) {
    const r = this.room;
    const base = this.base;
    const gen = base.gen;
    const now = this.now();
    const from = Math.max(now, r.timerFrom || now);
    const pickEnd = (r.night && r.night.pickUntilFull) || r.deadline || from + 10000;
    const role = r.actingRole(this.player(botId));
    const witch = role === 'cadi';
    // Cadı (kurbanlar) ve temizlik yetenekli vampir ile ikinci/üçüncü vampir, ilk vampirin seçimini (takım seçimleri)
    // görebilsin diye biraz sonra sorulur.
    const vamps = [...r.players.values()].filter((x) => x.alive && x.role === 'vampir');
    const late = witch || (role === 'vampir' && (this.player(botId).ability === 'temizlik' || (vamps.length > 1 && vamps[0].id !== botId)));
    // Son tarih: seçim süresi bitmeden ve insan gibi birkaç saniye içinde; sonra rastgele seçim.
    const hard = Math.max(now + 1200, Math.min(from + (witch ? 9000 : NIGHT_WINDOW_MS), pickEnd - PICK_MARGIN_MS));
    // İnsan gibi: yürüyüş bitmeden kesinleştirme yok; vampirler önce, cadı kurbanı görebilsin diye sonra.
    const earliest = Math.min(hard - 300, from + (isEvil(role) ? this.rand(1200, 3000) : this.rand(1500, 4500)));
    const startIn = late ? Math.max(0, Math.min(from + 3500, hard - 3000) - now) : this.rand(0, 400);
    let done = false;
    const fallback = () => {
      if (done) return;
      done = true;
      this.fellBack('gece');
      base.nightAct(botId);
    };
    base.later(hard - now, fallback, 'akıllı gece son tarihi');
    const run = async () => {
      if (done || !this.current(gen, botId) || !r.canActAtNight(botId)) return;
      const startedAt = this.now();
      const res = await this.ask(botId, { kind: 'night' }, hard - 200);
      if (done || !this.current(gen, botId)) return;
      const apply = () => {
        if (done || !this.current(gen, botId)) return;
        done = true;
        let ok = false;
        try { ok = res.ok && this.applyNight(botId, res.data, startedAt); } catch (err) { ok = false; }
        // Kilitli kapı yüzünden reddedilen seçim hata değildir: bot kilidi öğrendi, rastgele yedeğe düşmez, tekrar denemez.
        if (!ok && r.lockTried && r.lockTried.has(botId)) ok = true;
        if (!ok) { this.fellBack('gece'); base.nightAct(botId); }
        else if (r.phase === 'night' && r.canActAtNight(botId)) r.passNight(botId);
      };
      const wait = earliest - this.now();
      if (wait > 0) base.later(wait, apply, 'akıllı gece');
      else apply();
    };
    base.later(startIn, () => { run().catch(() => fallback()); }, 'akıllı gece çağrısı');
  }

  // Modelin gece seçimini uygular. false: geçersiz/eksik → çağıran rastgele seçer.
  applyNight(botId, data, startedAt = this.now()) {
    const r = this.room;
    const p = this.player(botId);
    if (!p || !p.alive || r.phase !== 'night' || !r.canActAtNight(botId)) return true;
    const alive = [...r.players.values()].filter((x) => x.alive && !x.left);
    const target = data.target ? resolveName(data.target, alive) : null;
    const role = r.actingRole(p);
    // Takıma fısıltı: seçim hemen uygulanır, satır sohbet sırasına girer (insan gibi yazılır).
    if (data.say && isEvil(p.role)) this.queueLine(botId, data.say, { startedAt, direct: true });
    switch (role) {
      case 'vampir': {
        // "target": kurban adı (öldür) ya da yeteneği varsa "iftira: Ad" / "temizlik: Ad".
        const m = /^\s*(iftira|frame|temizlik|clean)\s*:\s*(.+)$/i.exec(data.target || '');
        const t = m ? resolveName(m[2], alive) : target;
        const kind = m ? (/^(iftira|frame)/i.test(m[1]) ? 'frame' : 'clean') : 'kill';
        return Boolean(t) && r.selectNight(botId, t.id, kind) === null;
      }
      case 'hirsiz':
        if (!data.target) { r.passNight(botId); return true; }
        return Boolean(target) && r.selectNight(botId, target.id) === null;
      case 'doktor':
      case 'kahin':
      case 'gozcu':
        return Boolean(target) && r.selectNight(botId, target.id) === null;
      case 'cadi': {
        if (target && r.selectNight(botId, target.id, 'heal') !== null) return false;
        const poison = data.poison ? resolveName(data.poison, alive) : null;
        if (data.poison && !poison) return false;
        if (poison && r.selectNight(botId, poison.id, 'poison') !== null) return false;
        return true;
      }
      default:
        return true;
    }
  }

  // ---------- gündüz ----------

  planDay() {
    const r = this.room;
    const base = this.base;
    const ms = Math.max(1000, (r.deadline || this.now()) - this.now()) * base.pace();
    const bots = this.aliveBots();
    const humansAlive = [...r.players.values()].some((p) => !p.bot && !p.left && p.alive && p.connected);
    // Günü birkaç bot açar.
    const openers = [...bots].sort(() => this.rng() - 0.5).slice(0, humansAlive && this.rng() < 0.5 ? 2 : 1);
    openers.forEach((b, i) => base.later(this.rand(2500, 6000) + i * 3500, () => this.requestChat(b.id, { kind: 'open', trigger: null, depth: 1, fromBot: true }), 'akıllı açılış'));
    // Girişim: sohbet bir süre sessiz kalırsa bir bot konuşmayı kendisi sürdürür (soru, baskı, bilgi, iddia).
    // Gerçek oyunlarda kimse yazmayınca botlar da susuyordu.
    this.lastChatAt = this.now();
    for (const at of [0.2, 0.33, 0.46, 0.59, 0.7]) {
      base.later((at + this.rand(-0.03, 0.03)) * ms, () => this.initiative(), 'akıllı girişim');
    }
    for (const b of bots) {
      // Erken oy turu isteğe bağlıdır (kanıt yoksa boş oy normaldir); botların yarısı bir tane alır.
      if (this.rng() < 0.5) base.later(this.rand(0.3, 0.55) * ms, () => { this.voteTurn(b.id).catch(() => {}); }, 'akıllı erken oy');
      // Bağlayıcı karar günün sonuna doğru: en iyi desteklenen şüpheli, yoksa "uyu".
      base.later(this.rand(0.78, 0.86) * ms, () => { this.voteTurn(b.id, { final: true }).catch(() => {}); }, 'akıllı son oy');
      // Son çare: model hiç karar veremediyse rastgele oy/kilit.
      base.later(0.92 * ms, () => {
        if (!this.voteDecided.has(b.id) && r.phase === 'day' && !r.dayVotes.has(b.id)) { this.fellBack('oy'); base.vote(b.id); }
        if (!this.lockDecided.has(b.id) && r.phase === 'day') {
          const p = this.player(b.id);
          if (p && p.alive && r.actingRole(p) === 'gardiyan') { this.fellBack('kilit'); base.lock(b.id); }
        }
      }, 'akıllı oy yedeği');
    }
  }

  initiative() {
    const r = this.room;
    if (r.phase !== 'day') return;
    if (this.now() - (this.lastChatAt || 0) < 12000) return;   // sohbet akıyorsa araya girmez
    const free = this.aliveBots().filter((b) => !this.inflight.has(b.id) && !this.pending.has(b.id) && this.gate.canSpeakFree(b.id));
    if (!free.length) return;
    // En az konuşmuş bot öne çıkar.
    const said = (b) => ((this.saidToday && this.saidToday.get(b.id)) || []).length;
    free.sort((a, b) => said(a) - said(b) || this.rng() - 0.5);
    this.requestChat(free[0].id, { kind: 'initiative', trigger: null, depth: 1, fromBot: true });
  }

  // final: bağlayıcı karar turu (bitince rastgele yedek oy devre dışı). Erken tur yalnızca isteğe bağlı bir oydur.
  async voteTurn(botId, { final = false } = {}) {
    const r = this.room;
    const gen = this.base.gen;
    if (r.phase !== 'day' || !this.current(gen, botId)) return;
    const startedAt = this.now();
    let res = await this.ask(botId, { kind: 'vote', final }, this.now() + this.client.config.timeoutMs);
    if (!this.current(gen, botId) || r.phase !== 'day') return;
    // Son karar düşerse (zaman aşımı, kesik yanıt) ve gün bitmeden yeterli süre varsa bir kez daha sorulur:
    // rastgele yedek oy, 3 kişi kalmışken oyunu kaybettirebiliyordu.
    if (!res.ok && final && r.deadline && r.deadline - this.now() > 6000) {
      res = await this.ask(botId, { kind: 'vote', final }, Math.min(r.deadline - 1500, this.now() + this.client.config.timeoutMs));
      if (!this.current(gen, botId) || r.phase !== 'day') return;
    }
    if (!res.ok) return;   // yedek zamanlayıcı rastgele oy verir
    if (final) this.voteDecided.add(botId);
    this.applyDay(botId, res.data, { lock: true });
    // Oy hemen geçerli; yorum satırı (varsa) sohbet sırasına girer. Bot başka bir cevap yazıyorsa söylenmez.
    if (res.data.say && this.gate.canSpeakFree(botId) && !this.inflight.has(botId) && !this.pending.has(botId)) {
      const req = { kind: 'vote', at: this.now() };
      this.inflight.set(botId, req);
      this.queueLine(botId, res.data.say, {
        startedAt: Math.max(startedAt, this.now() - 1500), seq: this.pacer.seq('genel'), done: () => this.chatDone(botId, req, gen),
      });
    }
  }

  // ---------- mahkeme ----------

  planTrial() {
    const r = this.room;
    if (!r.trial) return;
    const ms = Math.max(1000, (r.deadline || this.now()) - this.now());
    if (r.trial.step === 'defense') {
      const speaker = this.player(r.trial.speaker);
      if (speaker && speaker.bot && speaker.alive) {
        this.base.later(this.rand(1000, 2500), () => this.requestChat(speaker.id, { kind: 'defense', trigger: null, depth: 0, fromBot: false }), 'akıllı savunma');
      }
      return;
    }
    for (const b of this.aliveBots()) {
      const gen = this.base.gen;
      let done = false;
      const fallback = () => {
        if (done || r.phase !== 'trial' || !r.trial || r.trial.step !== 'vote' || r.dayVotes.has(b.id)) return;
        done = true;
        this.fellBack('mahkeme');
        const target = this.pick(r.trial.accused.filter((x) => x !== b.id && this.player(x).alive));
        if (target) r.vote(b.id, target);
      };
      this.base.later(Math.min(0.7 * ms, 12000), fallback, 'akıllı mahkeme yedeği');
      this.base.later(this.rand(500, 2500), () => {
        this.ask(b.id, { kind: 'trialVote' }, this.now() + Math.min(this.client.config.timeoutMs, 0.6 * ms)).then((res) => {
          if (done || !this.current(gen, b.id) || !res.ok) return;
          const t = resolveName(res.data.vote, r.trial.accused.map((id) => this.player(id)).filter((x) => x && x.alive && x.id !== b.id));
          if (t) { done = true; r.vote(b.id, t.id); }
        }).catch(() => {});
      }, 'akıllı mahkeme oyu');
    }
  }

  // ---------- avcı ----------

  planHunter() {
    const r = this.room;
    const hunter = this.player(r.hunterId);
    if (!hunter || !hunter.bot) return;
    const gen = this.base.gen;
    let done = false;
    const shootRandom = () => {
      if (done || r.phase !== 'hunter' || r.hunterId !== hunter.id) return;
      done = true;
      this.fellBack('avcı');
      const target = this.pick([...r.players.values()].filter((x) => x.alive && !x.left && x.id !== hunter.id));
      if (target) r.shoot(hunter.id, target.id);
      else r.resolveHunter(null);
    };
    const pace = this.base.pace();
    this.base.later(0.45 * HUNTER_MS * pace, shootRandom, 'akıllı avcı yedeği');
    const started = this.now();
    this.ask(hunter.id, { kind: 'hunter' }, this.now() + Math.min(this.client.config.timeoutMs, 0.4 * HUNTER_MS * pace)).then((res) => {
      if (done || this.base.closed || this.base.gen !== gen || r.phase !== 'hunter') return;
      const alive = [...r.players.values()].filter((x) => x.alive && !x.left && x.id !== hunter.id);
      const t = res.ok ? resolveName(res.data.target, alive) : null;
      if (!t) { shootRandom(); return; }
      const wait = 3000 * pace - (this.now() - started);
      const shoot = () => {
        if (done || r.phase !== 'hunter' || r.hunterId !== hunter.id) return;
        done = true;
        if (r.shoot(hunter.id, t.id) !== null) { done = false; shootRandom(); }
      };
      if (wait > 600) this.base.later(wait, shoot, 'akıllı avcı');
      else shoot();
    }).catch(() => shootRandom());
  }
}

module.exports = { SmartBots, FALLBACK_REPLIES, FALLBACK_DEFENSE };
