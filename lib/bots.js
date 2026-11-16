'use strict';

// Botlar: tek başına oyunu deneyebilmek için sunucu tarafında oynayan oyuncular.
// Botlar insanlarla aynı Room metotlarını kullanır (selectNight, vote, shoot, move, say); böylece
// bütün kurallar ve hikâye/dedikodu kaydı aynen uygulanır. Her bot yalnızca kendi rolünün
// bilebileceği şeye bakar (ör. vampir takımının seçimleri, cadının gördüğü kurban).
// Sohbet satırları rolden ve gece sonuçlarından tamamen bağımsız seçilir: bot sohbeti bilgi sızdırmaz.

const BOT_NAMES = [
  'Ayşe', 'Mehmet', 'Zeynep', 'Mustafa', 'Elif', 'Hasan', 'Fatma', 'Hüseyin', 'Emine', 'Murat',
  'Hatice', 'Kemal', 'Selin', 'Burak', 'Deniz', 'Cem', 'Esra', 'Oğuz', 'Gül', 'Kerem',
  'Derya', 'Tolga', 'Nur', 'Serkan', 'Leyla', 'Volkan', 'Sibel', 'Emre', 'Pınar', 'Barış',
];
const BOT_PREFIX = 'Bot';

// Gündüz sohbeti: rol adı, iddia ya da gece bilgisi içermeyen, herkesin söyleyebileceği sözler.
const BOT_LINES = [
  'Günaydın köy!',
  'Kimden şüpheleniyorsunuz?',
  'Acele etmeyelim bence.',
  'Bu sessizlik hiç hoşuma gitmiyor.',
  'Dün gece kötü bir rüya gördüm…',
  'Herkes oyunu düşünerek versin.',
  'Hmm, ilginç…',
  'Ben de emin değilim.',
  'Bir şey söyleyecek olan var mı?',
  'Oyları dağıtmayalım.',
  'Bugün kimseye güvenmiyorum.',
  'Biraz daha konuşalım mı?',
  'Kahvem soğudu, karar verelim artık.',
  'Ne diyeceğimi bilemedim.',
];
const BOT_GREETINGS = ['Selam!', 'Merhaba herkese!', 'İyi oyunlar!', 'Ben de geldim.'];

const EVIL = new Set(['vampir', 'iftiraci']);
const MIN_DELAY = 600;
const FAST_PACE = 0.35;   // hayatta insan kalmadıysa gündüz ve avcı gecikmeleri bu oranda kısalır
const HUNTER_MS = 20000;

class BotBrain {
  // rng: testlerde tohumlu rastgele sayı üreteci.
  constructor(room, { rng = Math.random } = {}) {
    this.room = room;
    this.rng = rng;
    this.timers = new Set();
    this.gen = 0;
    this.key = null;
    this.ambient = false;
    this.closed = false;
    this.inspected = new Map();   // kahin bot -> baktığı oyuncular (oyun başında sıfırlanır)
  }

  // ---------- yardımcılar ----------

  rand(a, b) { return a + (b - a) * this.rng(); }
  chance(p) { return this.rng() < p; }
  pick(arr) { return arr.length ? arr[Math.floor(this.rng() * arr.length)] : null; }
  players() { return [...this.room.players.values()]; }
  bots() { return this.players().filter((p) => p.bot && !p.left); }
  alive() { return this.players().filter((p) => p.alive); }

  // Hayatta ve bağlı bir insan varsa normal tempo; yoksa (insan öldü ya da izliyor) hızlı tempo.
  pace() {
    return this.players().some((p) => !p.bot && !p.left && p.alive && p.connected) ? 1 : FAST_PACE;
  }

  // Evre değişince geçersiz kalan zamanlayıcılar hem silinir hem de "gen" ile etkisiz kalır.
  later(ms, fn, label) {
    if (this.closed) return;
    const gen = this.gen;
    const t = setTimeout(() => {
      this.timers.delete(t);
      if (this.closed || gen !== this.gen) return;
      try {
        fn();
      } catch (err) {
        console.error(`[${this.room.id}] Bot hamlesi başarısız (${label}):`, err);
      }
    }, Math.max(MIN_DELAY, Math.round(ms)));
    this.timers.add(t);
  }

  clear() {
    for (const t of this.timers) clearTimeout(t);
    this.timers.clear();
    this.gen += 1;
    this.ambient = false;
    this.nightQueued = null;
  }

  close() {
    this.clear();
    this.closed = true;
  }

  // Room her değiştiğinde çağrılır; sadece evre (ya da tur/avcı) değiştiyse yeni plan kurulur.
  sync() {
    if (this.closed) return;
    const r = this.room;
    const trial = r.trial ? `${r.trial.step}:${r.trial.speaker || ''}` : '';
    const key = `${r.phase}:${r.round}:${r.phase === 'hunter' ? r.hunterId : ''}:${trial}`;
    if (key !== this.key) {
      this.key = key;
      this.clear();
      if (r.phase === 'reveal') this.inspected = new Map();
      if (r.phase === 'night') this.planNight();
      else if (r.phase === 'day') this.planDay();
      else if (r.phase === 'hunter') this.planHunter();
      else if (r.phase === 'trial') this.planTrial();
    } else if (r.phase === 'night' && this.nightQueued) {
      this.queueNight();
    }
    if ((r.phase === 'lobby' || r.phase === 'ended') && !this.ambient && this.bots().length) this.planAmbient();
  }

  // ---------- gece ----------

  // Seçim aşamasında her bot insan gibi 2–8 sn içinde seçer ya da bekler (night:pass); böylece yalnızca
  // botların karar verdiği gecelerde seçim aşaması erken biter. Yürüyüş (timerFrom) bitmeden davranmaz.
  // Gece içinde yeniden seçebilir hâle gelen bot (ör. vampire dönüşen iftiracı) da sıraya alınır.
  planNight() {
    this.nightQueued = new Set();
    this.queueNight();
  }

  queueNight() {
    const r = this.room;
    if (r.phase !== 'night' || !r.night || r.night.stage === 'show') return;
    const now = Date.now();
    const from = Math.max(now, r.timerFrom || now);
    const pickEnd = r.night.pickUntilFull || r.deadline || from + 10000;
    const cap = Math.max(MIN_DELAY, pickEnd - from - 1500);   // seçim süresi bitmeden
    const lead = from - now;
    for (const bot of this.bots()) {
      if (this.nightQueued.has(bot.id) || !r.canActAtNight(bot.id)) continue;
      // Deli bot sahte rolünü oynar (kendini o sanır).
      const role = r.actingRole(bot);
      // Vampirler önce, cadı (kurbanı görebilsin diye) sonra davranır.
      let at = this.rand(2000, 8000);
      if (role === 'vampir' || role === 'iftiraci') at = this.rand(2000, 5000);
      else if (role === 'cadi') at = this.rand(5500, 8000);
      this.nightQueued.add(bot.id);
      this.later(lead + Math.min(at, cap), () => {
        try { this.nightAct(bot.id); } finally { this.nightQueued.delete(bot.id); }
      }, `gece ${role}`);
    }
  }

  // Bot seçer; yapacak başka bir şeyi kalmadıysa beklemeyi (pass) bildirir ki gece erken ilerlesin.
  nightAct(id) {
    const r = this.room;
    this.nightChoose(id);
    if (r.phase === 'night' && r.canActAtNight(id)) r.passNight(id);
  }

  nightChoose(id) {
    const r = this.room;
    const p = r.players.get(id);
    // Kilitli kapı, tipi ya da zaten verilmiş (kesin) seçim: yapacak bir şey yok.
    if (!p || !p.alive || r.phase !== 'night' || !r.canActAtNight(id)) return;
    const others = this.alive().filter((x) => x.id !== id);
    const village = others.filter((x) => !EVIL.has(x.role));
    switch (r.actingRole(p)) {   // tetiklendiği andaki rol (iftiracı dönüşmüş olabilir; deli sahte rolüyle)
      case 'vampir': {
        // Takımın hedefi belliyse bot da oraya gider (otomatik); değilse ilk seçen o olur.
        if (r.teamTargetActive()) return;
        const target = this.pick(village);
        if (target) r.selectNight(id, target.id);
        break;
      }
      case 'iftiraci': {
        const target = this.pick(village);
        if (target) r.selectNight(id, target.id);
        break;
      }
      case 'doktor': {
        const target = this.pick(this.alive());
        if (target) r.selectNight(id, target.id);
        break;
      }
      case 'kahin': {
        const seen = this.inspected.get(id) || new Set();
        const fresh = others.filter((x) => !seen.has(x.id));
        const target = this.pick(fresh.length ? fresh : others);
        if (!target) return;
        if (r.selectNight(id, target.id) === null) {
          seen.add(target.id);
          this.inspected.set(id, seen);
        }
        break;
      }
      case 'hirsiz': {
        // Hırsız bot rastgele bir gece çalar (diğer geceler bekler).
        if (!this.chance(0.35)) return;
        const target = this.pick(others);
        if (target) r.selectNight(id, target.id);
        break;
      }
      case 'gozcu': {
        const target = this.pick(others);
        if (target) r.selectNight(id, target.id);
        break;
      }
      case 'cadi': {
        // İksirler idareli kullanılır: hayat iksiri bazen kurbana, zehir nadiren rastgele birine.
        const victims = r.vampireTargets();
        let healed = null;
        if (!r.witchUsed.heal && !r.nightWitch.heal && victims.length && this.chance(0.4)) {
          healed = this.pick(victims);
          r.selectNight(id, healed, 'heal');
        }
        const healTarget = healed || r.nightWitch.heal;
        if (!r.witchUsed.poison && !r.nightWitch.poison && this.chance(0.12)) {
          const target = this.pick(others.filter((x) => x.id !== healTarget));
          if (target) r.selectNight(id, target.id, 'poison');
        }
        break;
      }
      default:
    }
  }

  // ---------- gündüz ----------

  planDay() {
    const r = this.room;
    // Günün gerçek uzunluğu (ayazda yarım gün).
    const ms = Math.max(1000, (r.deadline || Date.now()) - Date.now()) * this.pace();
    for (const bot of this.bots()) {
      if (bot.alive && r.actingRole(bot) === 'gardiyan') {
        this.later(this.rand(0.1, 0.5) * ms, () => this.lock(bot.id), 'kilit');
        if (this.chance(0.2)) this.later(this.rand(0.55, 0.8) * ms, () => this.lock(bot.id), 'kilit değişikliği');
      }
      if (bot.alive) {
        this.later(this.rand(0.15, 0.6) * ms, () => this.vote(bot.id), 'oy');
        if (this.chance(0.15)) this.later(this.rand(0.7, 0.85) * ms, () => this.changeVote(bot.id), 'oy değişikliği');
        if (this.chance(0.35)) this.later(this.rand(0.05, 0.7) * ms, () => this.say(bot.id), 'sohbet');
      }
    }
  }

  // Gardiyan bot: çoğu gün rastgele bir kapı seçer (kendi kapısı ve dünkü kapı hariç).
  lock(id) {
    const r = this.room;
    const p = r.players.get(id);
    if (!p || !p.alive || r.actingRole(p) !== 'gardiyan' || !['day', 'trial'].includes(r.phase)) return;
    if (!this.chance(0.85)) return;
    const last = p.role === 'deli' ? r.madLastLock.get(id) : r.lastLockTarget;
    const current = p.role === 'deli' ? r.madDayLock.get(id) : r.dayLock;
    const target = this.pick(this.alive().filter((x) => x.id !== id && x.id !== last && x.id !== current));
    if (target) r.lockHouse(id, target.id);
  }

  // ---------- mahkeme ----------

  planTrial() {
    const r = this.room;
    if (!r.trial) return;
    const ms = Math.max(1000, (r.deadline || Date.now()) - Date.now());
    if (r.trial.step === 'defense') {
      const speaker = r.players.get(r.trial.speaker);
      if (speaker && speaker.bot && this.chance(0.7)) this.later(this.rand(0.1, 0.5) * ms, () => this.say(speaker.id), 'savunma');
      return;
    }
    for (const bot of this.bots()) {
      if (!bot.alive) continue;
      this.later(this.rand(0.15, 0.6) * ms * this.pace(), () => {
        if (r.phase !== 'trial' || !r.trial || r.trial.step !== 'vote' || r.dayVotes.has(bot.id)) return;
        const target = this.pick(r.trial.accused.filter((x) => x !== bot.id && r.players.get(x).alive));
        if (target) r.vote(bot.id, target);
      }, 'mahkeme oyu');
    }
  }

  voteTargets(id) {
    return this.alive().filter((x) => x.id !== id);
  }

  vote(id) {
    const r = this.room;
    const p = r.players.get(id);
    if (!p || !p.alive || r.phase !== 'day' || r.dayVotes.has(id)) return;
    const target = this.chance(0.1) ? 'sleep' : (this.pick(this.voteTargets(id)) || {}).id;
    if (target) r.vote(id, target);
  }

  changeVote(id) {
    const r = this.room;
    const p = r.players.get(id);
    if (!p || !p.alive || r.phase !== 'day') return;
    const current = r.dayVotes.get(id);
    const target = this.pick(this.voteTargets(id).filter((x) => x.id !== current));
    if (target) r.vote(id, target.id);
  }

  say(id) {
    const r = this.room;
    const p = r.players.get(id);
    if (!p || !p.alive || !['day', 'trial'].includes(r.phase)) return;
    r.say(id, this.pick(BOT_LINES));
  }

  // ---------- avcı ----------

  planHunter() {
    const r = this.room;
    const hunter = r.players.get(r.hunterId);
    if (!hunter || !hunter.bot) return;
    this.later(this.rand(0.15, 0.45) * HUNTER_MS * this.pace(), () => {
      if (r.phase !== 'hunter' || r.hunterId !== hunter.id) return;
      const target = this.pick(this.alive().filter((x) => x.id !== hunter.id));
      if (target) r.shoot(hunter.id, target.id);
      else r.resolveHunter(null);
    }, 'avcı');
  }

  // ---------- lobi / oyun sonu ----------

  // Lobide ve oyun sonunda arada bir bot meydanda biraz dolaşır.
  planAmbient() {
    this.ambient = true;
    this.later(this.rand(4000, 12000), () => {
      this.ambient = false;
      const bot = this.pick(this.bots());
      if (bot) this.stroll(bot.id);
      this.sync();
    }, 'dolaşma');
  }

  stroll(id) {
    const r = this.room;
    const p = r.players.get(id);
    // Gündüz herkes yerinde durur: botlar sadece lobide ve oyun sonunda dolaşır.
    if (!p || !['lobby', 'ended'].includes(r.phase)) return;
    const ang = this.rng() * Math.PI * 2;
    const rad = this.rand(0.16, 0.42);
    r.move(id, 0.5 + rad * Math.cos(ang), 0.5 + rad * Math.sin(ang));
  }

  greet(id) {
    if (!this.chance(0.5)) return;
    this.later(this.rand(800, 2500), () => {
      if (this.room.phase === 'lobby' && this.room.players.has(id)) this.room.say(id, this.pick(BOT_GREETINGS));
    }, 'selam');
  }
}

// Odada henüz kullanılmayan bir bot adı: "Bot Ayşe". Hepsi doluysa numara eklenir.
function botName(takenNames, rng = Math.random) {
  const taken = new Set([...takenNames].map((n) => n.toLocaleLowerCase('tr')));
  const free = BOT_NAMES.map((n) => `${BOT_PREFIX} ${n}`).filter((n) => !taken.has(n.toLocaleLowerCase('tr')));
  if (free.length) return free[Math.floor(rng() * free.length)];
  for (let i = 2; ; i++) {
    const n = `${BOT_PREFIX} ${BOT_NAMES[Math.floor(rng() * BOT_NAMES.length)]} ${i}`;
    if (!taken.has(n.toLocaleLowerCase('tr'))) return n;
  }
}

module.exports = { BotBrain, botName, BOT_NAMES, BOT_LINES, BOT_GREETINGS, FAST_PACE };
