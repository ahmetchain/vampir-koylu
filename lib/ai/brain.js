'use strict';

// Akıllı botların oda düzeyindeki beyni. Rastgele botların (lib/bots.js BotBrain) zamanlayıcısını ve
// yedek hamlelerini kullanır: her karar bir son tarihe bağlıdır; model geç kalır, hata verir, reddeder
// ya da bozuk yanıt verirse o anda rastgele bot davranışına (ya da sessizliğe) düşülür. Oyun asla
// API'yi beklemez. İstemler yalnızca botun kendi görünümünden ve koltuğuna gelen sohbetten kurulur.

const { SYSTEM_PROMPT, buildUser } = require('./prompt');
const { resolveName, isSleepWord } = require('./schema');
const { SpeechGate } = require('./speech');
const { personaFor } = require('./personas');
const { isEvil } = require('./roles');

const CHAT_KEEP = 40;               // koltuk başına tutulan son sohbet mesajı
const STALE_MS = 25000;             // tetikleyen mesajdan bu kadar sonra gelen cevap atılır
const NIGHT_WINDOW_MS = 7000;       // gece kararı yürüyüşün bitiminden en geç bu kadar sonra (cadı: 9 sn)
const PICK_MARGIN_MS = 1500;        // seçim süresinin bitiminden önce bırakılan pay
const HUNTER_MS = 20000;

// Model cevap veremediğinde adıyla seslenilen botun nötr cevabı (rol ya da bilgi içermez).
const FALLBACK_REPLIES = [
  'Hmm, emin değilim.',
  'Bilmiyorum valla, sen ne düşünüyorsun?',
  'Bir düşüneyim…',
  'Şimdilik bir şey diyemem.',
  'Neden bana soruyorsun ki?',
  'Bakalım, biraz daha konuşalım.',
];
const FALLBACK_DEFENSE = ['Ben masumum, yanlış kişiyi seçiyorsunuz.', 'Bana değil, sessiz kalanlara bakın.'];

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
    this.memory = new Map();
    this.chat = new Map();
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
  }

  // ---------- durum ----------

  enabled() {
    return Boolean(this.client && this.client.available() && this.room.settings.smartBots !== false && this.client.hasBudget());
  }

  rand(a, b) { return a + (b - a) * this.rng(); }
  pick(arr) { return arr.length ? arr[Math.floor(this.rng() * arr.length)] : null; }
  player(id) { return this.room.players.get(id); }
  aliveBots() { return [...this.room.players.values()].filter((p) => p.bot && !p.left && p.alive); }

  // Yeni oyun: hafıza, sohbet ve defter sıfırlanır (önceki oyunun özeti loglanır).
  resetGame() {
    this.logSummary();
    this.memory = new Map();
    this.chat = new Map();
    this.pending = new Map();
    this.inflight = new Map();
    this.setTyping(null);
    this.gate.reset();
    this.ledger = this.client ? this.client.ledger() : null;
    this.logged = false;
  }

  // Oyun sonu: yalnızca sayılar (içerik yok).
  logSummary() {
    if (this.logged || !this.ledger || !this.ledger.calls) return;
    this.logged = true;
    const s = this.ledger.summary();
    const fails = Object.entries(s.failures).map(([k, v]) => `${k}:${v}`).join(' ');
    this.logger.log(`[${this.room.id}] Akıllı botlar: ${s.calls} çağrı, ${s.input_tokens} girdi + ${s.cache_read_input_tokens} önbellek + `
      + `${s.cache_creation_input_tokens} önbellek yazımı / ${s.output_tokens} çıktı token, ~$${s.costUsd.toFixed(4)}${fails ? ` (başarısız: ${fails})` : ''}`);
  }

  // BotBrain her evre değişiminde çağırır.
  onPhase(phase) {
    if (phase === 'reveal') this.resetGame();
    if (phase === 'ended' || phase === 'lobby') { this.logSummary(); this.setTyping(null); }
    this.pending = new Map();
    this.nightQueued = new Set();
    if (phase === 'day') { this.voteDecided = new Set(); this.lockDecided = new Set(); this.defended = new Set(); this.gate.reset(); }
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

  // ---------- model çağrısı ----------

  async ask(botId, task, deadline) {
    const p = this.player(botId);
    if (!p) return { ok: false, reason: 'gone' };
    let user;
    try {
      const view = this.room.viewFor(botId);
      user = buildUser({ view, chat: this.chat.get(botId) || [], memory: this.memory.get(botId) || '', persona: personaFor(p.name), task });
    } catch (err) {
      this.logger.warn(`[${this.room.id}] Akıllı bot istemi kurulamadı: ${err && err.message}`);
      return { ok: false, reason: 'prompt' };
    }
    if (this.onPrompt) {
      try { this.onPrompt({ botId, system: SYSTEM_PROMPT, user, task: task.kind }); } catch (err) { /* yalnızca gözlem */ }
    }
    const res = await this.client.turn({ system: SYSTEM_PROMPT, user, deadline, ledger: this.ledger, botId });
    if (res.ok && res.data.memory) this.memory.set(botId, res.data.memory);
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
    for (const id of recipients || []) {
      const p = this.player(id);
      if (!p || !p.bot) continue;
      if (!this.chat.has(id)) this.chat.set(id, []);
      const list = this.chat.get(id);
      list.push(message);
      if (list.length > CHAT_KEEP) list.splice(0, list.length - CHAT_KEEP);
    }
    if (!this.enabled()) return;
    const r = this.room;
    const sender = this.player(message.fromId);
    if (!sender) return;
    const fromBot = Boolean(sender.bot);
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
    const busy = this.inflight.get(botId);
    if (busy) {
      // Cevap yazarken yeni bir doğrudan seslenme geldi: bittikten sonra ona da cevap verilir.
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
    const think = req.kind === 'direct' || req.kind === 'defense' ? this.rand(500, 1300) : this.rand(1200, 3200);
    this.base.later(think, () => { this.runChat(botId, gen).catch(() => {}); }, 'akıllı sohbet');
  }

  async runChat(botId, gen) {
    const req = this.pending.get(botId);
    this.pending.delete(botId);
    if (!req || !this.current(gen, botId)) return;
    const forced = req.kind === 'direct' || req.kind === 'defense';
    if (!forced && !this.gate.canSpeakFree(botId)) return;
    this.inflight.set(botId, req);
    this.setTyping(botId, true);
    let res;
    try {
      res = await this.ask(botId, { kind: req.kind, trigger: req.trigger, byName: req.byName }, this.now() + this.client.config.timeoutMs);
    } finally {
      this.inflight.delete(botId);
      this.setTyping(botId, false);
    }
    const fresh = this.current(gen, botId) && this.now() - req.at <= STALE_MS;
    if (fresh) {
      let line = res.ok ? res.data.say : '';
      if (res.ok) this.applyDay(botId, res.data, { lock: false });
      // Adıyla seslenen insana model cevap veremezse bile kısa, nötr bir cevap gider.
      if (!line && forced && !req.fromBot) line = this.pick(req.kind === 'defense' ? FALLBACK_DEFENSE : FALLBACK_REPLIES);
      if (line) {
        const since = this.now() - req.at;
        const want = Math.min(6000, 2000 + line.length * 45);
        const say = () => this.say(botId, line, { depth: req.depth || 0, direct: forced });
        if (want - since > 600) this.base.later(want - since, say, 'akıllı sohbet satırı');
        else say();
      }
    }
    if (req.again && this.current(gen, botId)) this.requestChat(botId, req.again);
  }

  say(botId, line, { depth = 0, direct = false } = {}) {
    const r = this.room;
    const p = this.player(botId);
    if (!p || !p.alive) return;
    const night = r.phase === 'night';
    if (!night && !['day', 'trial', 'hunter'].includes(r.phase)) return;
    if (night && !isEvil(p.role)) return;
    this.saying = { botId, depth };
    try {
      if (r.say(botId, line) === null) this.gate.record(botId, { direct });
    } finally {
      this.saying = null;
    }
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
    // Cadı (kurbanı) ve Temizlikçi (takımın hedefi) vampirlerin seçimini görebilsin diye biraz sonra sorulur.
    const late = witch || role === 'temizlikci';
    // Son tarih: seçim süresi bitmeden ve insan gibi birkaç saniye içinde; sonra rastgele seçim.
    const hard = Math.max(now + 1200, Math.min(from + (witch ? 9000 : NIGHT_WINDOW_MS), pickEnd - PICK_MARGIN_MS));
    // İnsan gibi: yürüyüş bitmeden kesinleştirme yok; vampirler önce, cadı kurbanı görebilsin diye sonra.
    const earliest = Math.min(hard - 300, from + (isEvil(role) ? this.rand(1200, 3000) : this.rand(1500, 4500)));
    const startIn = late ? Math.max(0, Math.min(from + 3500, hard - 3000) - now) : this.rand(0, 400);
    let done = false;
    const fallback = () => {
      if (done) return;
      done = true;
      base.nightAct(botId);
    };
    base.later(hard - now, fallback, 'akıllı gece son tarihi');
    const run = async () => {
      if (done || !this.current(gen, botId) || !r.canActAtNight(botId)) return;
      const res = await this.ask(botId, { kind: 'night' }, hard - 200);
      if (done || !this.current(gen, botId)) return;
      const apply = () => {
        if (done || !this.current(gen, botId)) return;
        done = true;
        let ok = false;
        try { ok = res.ok && this.applyNight(botId, res.data); } catch (err) { ok = false; }
        if (!ok) base.nightAct(botId);
        else if (r.phase === 'night' && r.canActAtNight(botId)) r.passNight(botId);
      };
      const wait = earliest - this.now();
      if (wait > 0) base.later(wait, apply, 'akıllı gece');
      else apply();
    };
    base.later(startIn, () => { run().catch(() => fallback()); }, 'akıllı gece çağrısı');
  }

  // Modelin gece seçimini uygular. false: geçersiz/eksik → çağıran rastgele seçer.
  applyNight(botId, data) {
    const r = this.room;
    const p = this.player(botId);
    if (!p || !p.alive || r.phase !== 'night' || !r.canActAtNight(botId)) return true;
    const alive = [...r.players.values()].filter((x) => x.alive && !x.left);
    const target = data.target ? resolveName(data.target, alive) : null;
    const role = r.actingRole(p);
    if (data.say && isEvil(p.role)) this.say(botId, data.say, { direct: true });
    switch (role) {
      case 'vampir':
        if (r.teamTargetActive()) return true;
        return Boolean(target) && r.selectNight(botId, target.id) === null;
      case 'iftiraci':
      case 'temizlikci':
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
    for (const b of bots) {
      base.later(this.rand(0.3, 0.55) * ms, () => { this.voteTurn(b.id).catch(() => {}); }, 'akıllı oy');
      // Gün içinde konuşma ilerledikçe oy yeniden düşünülebilir.
      if (this.rng() < 0.5) base.later(this.rand(0.7, 0.82) * ms, () => { this.voteTurn(b.id, true).catch(() => {}); }, 'akıllı oy gözden geçirme');
      // Son çare: model hiç karar veremediyse rastgele oy/kilit.
      base.later(0.88 * ms, () => {
        if (!this.voteDecided.has(b.id) && r.phase === 'day' && !r.dayVotes.has(b.id)) base.vote(b.id);
        if (!this.lockDecided.has(b.id) && r.phase === 'day') {
          const p = this.player(b.id);
          if (p && p.alive && r.actingRole(p) === 'gardiyan') base.lock(b.id);
        }
      }, 'akıllı oy yedeği');
    }
  }

  async voteTurn(botId, reconsider = false) {
    const r = this.room;
    const gen = this.base.gen;
    if (r.phase !== 'day' || !this.current(gen, botId)) return;
    if (reconsider && !this.voteDecided.has(botId)) return;
    if (!reconsider && this.voteDecided.has(botId)) return;
    const res = await this.ask(botId, { kind: 'vote' }, this.now() + this.client.config.timeoutMs);
    if (!this.current(gen, botId) || r.phase !== 'day') return;
    if (!res.ok) return;   // yedek zamanlayıcı rastgele oy verir
    this.voteDecided.add(botId);
    this.applyDay(botId, res.data, { lock: true });
    if (res.data.say && this.gate.canSpeakFree(botId)) {
      const line = res.data.say;
      this.base.later(Math.min(5000, 1500 + line.length * 40), () => this.say(botId, line), 'akıllı oy satırı');
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
