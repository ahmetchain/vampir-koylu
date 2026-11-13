'use strict';

const crypto = require('crypto');

// Hikâye motoru ("Köy Günlüğü", lib/story). İsteğe bağlıdır: yüklenemezse ya da hata verirse oyun
// v1'deki düz metinlerle sürer. Motora sadece herkese açık bilgi verilir (bkz. docs/STORY.md).
let createChronicle = null;
try {
  ({ createChronicle } = require('./lib/story'));
} catch (err) {
  console.error('Hikâye motoru yüklenemedi, düz metinlerle devam ediliyor:', err && err.message ? err.message : err);
}

// İsme iyelik eki ("Ali'nin evi"); ek yardımcısı yüklenemezse isim olduğu gibi kalır.
let genitive = (name) => name;
try {
  const { ek } = require('./lib/story/turkish');
  genitive = (name) => { try { return ek(name, 'gen'); } catch (err) { return name; } };
} catch (err) { /* düz isimle devam */ }

const { BotBrain, botName } = require('./lib/bots');

const ROLE = {
  VAMPIRE: 'vampir',
  FRAMER: 'iftiraci',
  DOCTOR: 'doktor',
  SEER: 'kahin',
  WATCHER: 'gozcu',
  JAILER: 'gardiyan',
  WITCH: 'cadi',
  HUNTER: 'avci',
  MAYOR: 'muhtar',
  JESTER: 'soytari',
  VILLAGER: 'koylu',
};

// Oda sahibinin açıp kapatabildiği köy/soytarı rolleri. Oyuncu sayısı yetmezse bu sıraya göre eklenir.
const SPECIAL_ROLES = [ROLE.DOCTOR, ROLE.SEER, ROLE.WATCHER, ROLE.JAILER, ROLE.WITCH, ROLE.HUNTER, ROLE.MAYOR, ROLE.JESTER];
// Ayarlarda açılıp kapatılabilen tüm roller (iftiracı vampir takımından, özel rollerin yerini almaz).
const OPTIONAL_ROLES = [...SPECIAL_ROLES, ROLE.FRAMER];

const ROLE_LABEL = {
  [ROLE.VAMPIRE]: 'Vampir',
  [ROLE.FRAMER]: 'İftiracı',
  [ROLE.DOCTOR]: 'Doktor',
  [ROLE.SEER]: 'Kahin',
  [ROLE.WATCHER]: 'Gözcü',
  [ROLE.JAILER]: 'Gardiyan',
  [ROLE.WITCH]: 'Cadı',
  [ROLE.HUNTER]: 'Avcı',
  [ROLE.MAYOR]: 'Muhtar',
  [ROLE.JESTER]: 'Soytarı',
  [ROLE.VILLAGER]: 'Köylü',
};

const MIN_PLAYERS = 5;
const MAX_PLAYERS = 20;
const FRAMER_MIN_PLAYERS = 7;    // iftiracı ancak bu kadar oyuncu varsa dağıtılır
const REVEAL_MS = 8000;          // rol kartlarına bakma süresi
const ALL_VOTED_MS = 10000;      // herkes oy verince kalan süre buna iner
const HUNTER_MS = 20000;         // avcının son atışı süresi
const NIGHT_WALK_MS = 4000;      // gece başında herkesin evine yürüme süresi; gece sayacı bundan sonra başlar
const TRIAL_TURN_MS = 15000;     // mahkemede her sanığın savunma süresi
const TRIAL_VOTE_MS = 20000;     // mahkemede iki sanık arasındaki yeniden oylama süresi
const TRIAL_ALL_VOTED_MS = 3000; // herkes oy verince mahkeme oylaması bu kadar sonra sonuçlanır
const LOBBY_GRACE_MS = 30000;    // lobide bağlantısı kopan oyuncu bu süre sonunda çıkarılır
const EMPTY_ROOM_MS = 10 * 60 * 1000;
const SLEEP = 'sleep';           // gündüz "Hızlı Uyu" oyu
const LOG_MAX = 250;             // oda günlüğünde tutulan son kayıt sayısı (anlatı satırları dahil)
const STORY_MAX = 400;           // anlatı/dedikodu satırı için savunma amaçlı üst sınır
const EPILOGUE_MAX = 3000;

// Sahne türleri (dünya bunlara göre sinematik oynatır). Bilinmeyen değer gelirse varsayılan kullanılır.
const SCENES = {
  hanged: ['gallows', 'exile', 'cellar'],
  bite: ['bite', 'bats', 'vanish'],
};
const HANG_VERB = { gallows: 'asıldı', exile: 'köyden sürüldü', cellar: 'mahzene kapatıldı' };

function cleanStory(value, max = STORY_MAX) {
  if (typeof value !== 'string') return '';
  const s = value.trim();
  return s.length > max ? '' : s;
}

function pickScene(value, allowed, fallback) {
  return typeof value === 'string' && allowed.includes(value) ? value : fallback;
}

// Karakter görünümü: renk, şapka ve model sadece sıra numarasıyla tutulur, çizimi tarayıcı yapar.
const COLOR_COUNT = 20;
const HAT_COUNT = 9;
const SKIN_COUNT = 12;

// Meydan koordinatları 0-1 arası; (0.5, 0.5) kamp ateşi. Karakterler ateşle evler arasındaki halkada durur.
const PLAZA = { cx: 0.5, cy: 0.5, minR: 0.10, maxR: 0.48, spawnMinR: 0.22, spawnMaxR: 0.42 };
// Serbest dolaşma sadece lobide ve oyun sonunda; gündüz herkes ateşin çevresinde sabit yerinde durur.
const MOVE_PHASES = ['lobby', 'ended'];

const DEFAULT_ROLES = {
  [ROLE.DOCTOR]: true,
  [ROLE.SEER]: true,
  [ROLE.WATCHER]: false,
  [ROLE.JAILER]: false,
  [ROLE.WITCH]: false,
  [ROLE.HUNTER]: false,
  [ROLE.MAYOR]: false,
  [ROLE.JESTER]: false,
  [ROLE.FRAMER]: false,
};
const EVENT_MODES = ['off', 'some', 'often'];
const DEFAULT_SETTINGS = { nightSec: 30, daySec: 120, revealRoles: true, events: 'off', roles: DEFAULT_ROLES };

// Gece seçimi olan roller ve tipide evden çıkamayan köy rolleri.
const NIGHT_ACTION_ROLES = new Set([ROLE.VAMPIRE, ROLE.FRAMER, ROLE.DOCTOR, ROLE.SEER, ROLE.WATCHER, ROLE.WITCH]);
const VILLAGE_NIGHT_ROLES = new Set([ROLE.DOCTOR, ROLE.SEER, ROLE.WATCHER, ROLE.WITCH]);
const FINAL_ERROR = 'Seçimini yaptın; gece seçimleri kesindir.';

// Köy olayları: tellal, etkilediği evrenin başında duyurur.
const EVENTS = {
  tipi: { id: 'tipi', phase: 'night', name: 'Tipi', desc: 'Kar fırtınası var: bu gece köylüler evlerinden çıkamaz, yalnızca vampir takımı dolaşabilir.' },
  ruzgar: { id: 'ruzgar', phase: 'night', name: 'Fırtına Rüzgârı', desc: 'Kamp ateşi söndü, köy zifiri karanlık: bu gece evlere gelenler ancak gölge olarak seçilebilir.' },
  'kisa-gece': { id: 'kisa-gece', phase: 'night', name: 'Kısa Gece', desc: 'Bu gece her zamankinin yarısı kadar sürecek.' },
  ayaz: { id: 'ayaz', phase: 'day', name: 'Ayaz', desc: 'Dondurucu soğuk: bugün gün her zamankinin yarısı kadar sürecek.' },
  sis: { id: 'sis', phase: 'day', name: 'Sis', desc: 'Sis çöktü: bugün oylar gizli. Herkes yalnızca kimin kaç oy aldığını görür.' },
  mahkeme: { id: 'mahkeme', phase: 'day', name: 'Mahkeme', desc: 'Gün sonunda en çok oy alan iki kişi savunma yapacak, sonra köy yalnızca bu ikisi arasında yeniden oy verecek.' },
};
const EVENT_GAP = { some: 3, often: 2 };        // iki olay arasında en az bu kadar tur
const EVENT_CHANCE = { some: 0.5, often: 0.75 }; // uygun bir turda olay çıkma olasılığı

// Bir tur için olay seçer (yoksa null). Saf fonksiyon: rng verilir, kurallar burada.
// - 1. turda olay yok; son olaydan bu yana en az EVENT_GAP tur geçmiş olmalı;
// - aynı olay art arda gelmez; tipi, köy tarafı vampir takımından en fazla bir fazlaysa gelmez;
// - mahkeme ancak en az 6 kişi hayattayken.
function chooseEvent({ mode, round, lastRound = 0, lastId = null, alive, evil, rng = Math.random }) {
  if (!EVENT_GAP[mode] || round < 2) return null;
  if (lastRound && round - lastRound < EVENT_GAP[mode]) return null;
  if (rng() >= EVENT_CHANCE[mode]) return null;
  const village = alive - evil;
  const options = Object.keys(EVENTS).filter((id) => id !== lastId
    && !(id === 'tipi' && village <= evil + 1)
    && !(id === 'mahkeme' && alive < 6));
  if (!options.length) return null;
  return options[Math.floor(rng() * options.length)];
}

function clampInt(value, min, max, fallback) {
  const n = Number.parseInt(value, 10);
  if (Number.isNaN(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

function normalizeSettings(raw = {}) {
  const rawRoles = raw.roles && typeof raw.roles === 'object' ? raw.roles : {};
  const roles = {};
  for (const r of OPTIONAL_ROLES) {
    roles[r] = rawRoles[r] === undefined ? DEFAULT_ROLES[r] : Boolean(rawRoles[r]);
  }
  return {
    nightSec: clampInt(raw.nightSec, 15, 120, DEFAULT_SETTINGS.nightSec),
    daySec: clampInt(raw.daySec, 30, 300, DEFAULT_SETTINGS.daySec),
    revealRoles: raw.revealRoles === undefined ? DEFAULT_SETTINGS.revealRoles : Boolean(raw.revealRoles),
    events: EVENT_MODES.includes(raw.events) ? raw.events : DEFAULT_SETTINGS.events,
    roles,
  };
}

function enabledSpecials(settings) {
  return OPTIONAL_ROLES.filter((r) => settings.roles[r]);
}

function teamOf(role) {
  if (role === ROLE.VAMPIRE || role === ROLE.FRAMER) return ROLE.VAMPIRE;
  if (role === ROLE.JESTER) return ROLE.JESTER;
  return ROLE.VILLAGER;
}

// Vampir takımı: vampirler ve iftiracı.
function isEvil(role) {
  return teamOf(role) === ROLE.VAMPIRE;
}

function vampireCount(playerCount) {
  if (playerCount >= 15) return 3;
  if (playerCount >= 10) return 2;
  return 1;
}

// Oyuncu sayısına göre dağıtılacak roller. İftiracı açıksa ve en az 7 kişi varsa vampirlere ek olarak
// bir iftiracı verilir. Özel roller verilen sırayla eklenir, en az bir sade köylü her zaman kalır.
function rolesFor(count, specials = [ROLE.DOCTOR]) {
  const vampires = vampireCount(count);
  const framer = specials.includes(ROLE.FRAMER) && count >= FRAMER_MIN_PLAYERS ? 1 : 0;
  const villageSpecials = specials.filter((r) => r !== ROLE.FRAMER && r !== ROLE.VAMPIRE && r !== ROLE.VILLAGER);
  const room = Math.max(0, count - vampires - framer - 1);
  const list = Array(vampires).fill(ROLE.VAMPIRE);
  if (framer) list.push(ROLE.FRAMER);
  list.push(...villageSpecials.slice(0, room));
  while (list.length < count) list.push(ROLE.VILLAGER);
  return list;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = crypto.randomInt(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function assignRoles(ids, specials = [ROLE.DOCTOR]) {
  const shuffled = shuffle([...ids]);
  const list = rolesFor(ids.length, specials);
  const roles = new Map();
  shuffled.forEach((id, i) => roles.set(id, list[i]));
  return roles;
}

// Vampir takımı (vampirler + iftiracı) yaşayan diğer herkese sayıca eşit ya da fazlaysa kazanır;
// vampir takımından kimse kalmazsa köy kazanır.
function winnerOf(players) {
  const alive = players.filter((p) => p.alive);
  const evil = alive.filter((p) => isEvil(p.role)).length;
  if (evil === 0) return ROLE.VILLAGER;
  if (evil >= alive.length - evil) return ROLE.VAMPIRE;
  return null;
}

// Map<seçen, hedef> -> en çok seçilen hedefler. weight ile bir seçenin oyu birden fazla sayılabilir.
function tally(selections, weight = () => 1) {
  const counts = new Map();
  for (const [selector, target] of selections) {
    counts.set(target, (counts.get(target) || 0) + weight(selector));
  }
  let max = 0;
  let top = [];
  for (const [target, count] of counts) {
    if (count > max) { max = count; top = [target]; }
    else if (count === max) top.push(target);
  }
  return { counts, max, top };
}

// Konumu meydan halkasına sıkıştırır: ateşe çok yakın ya da evlerin arkasına gidilemez.
function clampToPlaza(x, y) {
  let dx = x - PLAZA.cx;
  let dy = y - PLAZA.cy;
  let d = Math.hypot(dx, dy);
  // Tam ateşin üstüne dokunulursa ateşin önüne (aşağı yöne) konur.
  const r = Math.min(PLAZA.maxR, Math.max(PLAZA.minR, d));
  if (d < 1e-9) { dx = 0; dy = 1; d = 1; }
  return { x: PLAZA.cx + (dx / d) * r, y: PLAZA.cy + (dy / d) * r };
}

// Odaya giren karakter ateşin üstüne değil, meydanın çevresinde rastgele bir yere çıkar.
function spawnSpot() {
  const ang = Math.random() * Math.PI * 2;
  const r = PLAZA.spawnMinR + Math.random() * (PLAZA.spawnMaxR - PLAZA.spawnMinR);
  return { x: PLAZA.cx + r * Math.cos(ang), y: PLAZA.cy + r * Math.sin(ang) };
}

function validIndex(value, count) {
  return Number.isInteger(value) && value >= 0 && value < count;
}

function describeRoles(list) {
  const counts = {};
  for (const r of list) counts[r] = (counts[r] || 0) + 1;
  const parts = [];
  for (const r of [ROLE.VAMPIRE, ROLE.FRAMER, ...SPECIAL_ROLES, ROLE.VILLAGER]) {
    if (!counts[r]) continue;
    parts.push(counts[r] > 1 || r === ROLE.VAMPIRE || r === ROLE.VILLAGER
      ? `${counts[r]} ${ROLE_LABEL[r].toLocaleLowerCase('tr')}`
      : ROLE_LABEL[r]);
  }
  return parts.join(', ');
}

class Room {
  // storySeed: testler için sabit hikâye tohumu (metin ya da tohum döndüren fonksiyon).
  // botRng: testlerde botların tohumlu rastgele sayı üreteci.
  // eventRng: testlerde köy olaylarının tohumlu rastgele sayı üreteci.
  constructor({ id, name, password, settings, hooks, storySeed = null, botRng = Math.random, eventRng = Math.random }) {
    this.id = id;
    this.closed = false;
    this.storySeedSource = storySeed;
    this.name = name;
    this.password = password || '';
    this.settings = normalizeSettings(settings);
    this.hooks = hooks;
    this.players = new Map();
    this.hostId = null;
    this.phase = 'lobby';
    this.timer = null;
    this.emptyTimer = null;
    this.bots = new BotBrain(this, { rng: botRng });
    this.botRng = botRng;
    this.eventRng = eventRng;
    this.resetGame();
  }

  resetGame() {
    this.round = 0;
    this.deadline = null;
    this.timerFrom = null;
    this.winner = null;
    this.winners = [];
    this.log = [];
    this.resetNight();
    this.witchUsed = { heal: false, poison: false };
    this.dayLock = null;         // gardiyanın gündüz seçtiği kapı (gelecek gece)
    this.lastLockTarget = null;  // bir önceki gece kilitlenen kapı (üst üste aynı kapı olmaz)
    this.event = null;           // etkin köy olayı { id, name, desc, phase }
    this.pendingDayEvent = null; // gece belirlenen gündüz olayı
    this.lastEventRound = 0;
    this.lastEventId = null;
    this.forcedEvent = null;     // testler için: bir sonraki olay
    this.trial = null;           // mahkeme: { step, accused, counts, speaker }
    this.dayVotes = new Map();
    this.dayShortened = false;
    this.hunterId = null;
    this.hunterNext = null;
    this.story = null;          // her oyuna yeni bir günlük (createChronicle)
    this.storySeed = null;
    this.scenario = null;       // { id, name, intro } – oyun başından lobiye dönüşe kadar
    this.epilogue = null;       // { title, text, story } – oyun bitince
    this.lastHangScene = null;
    this.hadBots = false;      // oyun başında odada bot var mıydı (varsa istatistik yazılmaz)
    for (const p of this.players.values()) {
      p.role = null;
      p.alive = true;
      p.notes = [];
      p.hanged = false;
      p.job = null;
    }
  }

  // ---------- hikâye motoru ----------

  newStorySeed() {
    const src = this.storySeedSource;
    if (typeof src === 'function') return String(src());
    if (src !== null && src !== undefined) return String(src);
    return crypto.randomBytes(8).toString('hex');
  }

  // Oyun başında günlüğü kurar, meslekleri dağıtır (sadece tohuma ve katılma sırasına bağlı,
  // rollerden bağımsız). Motor hiç kurulamazsa oyun anlatısız sürer.
  createStory() {
    this.storySeed = this.newStorySeed();
    this.story = null;
    if (!createChronicle) return;
    try {
      this.story = createChronicle({
        seed: this.storySeed,
        revealRoles: this.settings.revealRoles,
        players: [...this.players.values()].map((p) => ({ id: p.id, name: p.name })),
      });
      for (const { id, job } of this.story.jobs() || []) {
        const p = this.players.get(id);
        if (p && job && typeof job.id === 'string' && typeof job.label === 'string') p.job = { id: job.id, label: job.label };
      }
    } catch (err) {
      console.error(`[${this.id}] Hikâye motoru kurulamadı:`, err && err.message ? err.message : err);
      this.story = null;
    }
  }

  // Motoru güvenle çağırır. Çıktı bozuksa ya da motor yoksa düz metin (fallback) döner;
  // story her zaman metindir ('' olabilir).
  narrate(method, input, fallback) {
    let out = null;
    try {
      if (this.story && typeof this.story[method] === 'function') out = this.story[method](input);
    } catch (err) {
      out = null;
    }
    if (!out || typeof out !== 'object' || typeof out.title !== 'string' || typeof out.text !== 'string' || !out.text) {
      return { ...fallback, story: '' };
    }
    return { ...out, story: cleanStory(out.story) };
  }

  // Sonuç döndürmeyen kayıt çağrıları (oy değişikliği, sohbet sayımı).
  storyRecord(method, input) {
    try {
      if (this.story && typeof this.story[method] === 'function') this.story[method](input);
    } catch (err) { /* anlatı oyunu asla durdurmaz */ }
  }

  // Anlatı satırını günlüğe ekler (boşsa eklemez).
  storyLine(text, kind = 'story') {
    if (text) this.addLog(text, kind);
  }

  // Rol sadece oda rolleri açıklıyorsa motora verilir.
  roleIfPublic(p) {
    return p && this.settings.revealRoles ? p.role : null;
  }

  get inGame() {
    return ['reveal', 'night', 'day', 'trial', 'hunter'].includes(this.phase);
  }

  // ---------- oyuncu yönetimi ----------

  // id herkese görünür; userId oyuncunun hesabıdır (bir hesap odada tek koltuk alır).
  // look verilirse (hesabın kayıtlı görünümü) o kullanılır; renk doluysa boş bir renk seçilir.
  addPlayer(id, name, { userId = null, look = null, bot = false } = {}) {
    if (userId && this.findByUser(userId)) return 'Bu hesap zaten odada.';
    if (this.phase !== 'lobby') return 'Oyun başlamış, şu an katılamazsın.';
    if (this.players.size >= MAX_PLAYERS) return `Oda dolu (en fazla ${MAX_PLAYERS} kişi).`;
    const lower = name.toLocaleLowerCase('tr');
    for (const p of this.players.values()) {
      if (p.name.toLocaleLowerCase('tr') === lower) return 'Bu kullanıcı adı odada zaten var.';
    }
    const want = look || {};
    const taken = new Set([...this.players.values()].map((p) => p.look.color));
    const free = Array.from({ length: COLOR_COUNT }, (_, i) => i).filter((c) => !taken.has(c));
    let color;
    if (validIndex(want.color, COLOR_COUNT) && !taken.has(want.color)) color = want.color;
    else color = free.length ? free[crypto.randomInt(free.length)] : crypto.randomInt(COLOR_COUNT);
    const hat = validIndex(want.hat, HAT_COUNT) ? want.hat : crypto.randomInt(HAT_COUNT);
    const skin = validIndex(want.skin, SKIN_COUNT) ? want.skin : crypto.randomInt(SKIN_COUNT);
    this.players.set(id, {
      id, name, userId, bot: Boolean(bot), seat: this.freeSeat(), role: null, job: null, alive: true, connected: true, left: false,
      socketId: null, graceTimer: null, notes: [],
      look: { color, hat, skin },
      pos: spawnSpot(),
    });
    if (!this.hostId && !bot) this.hostId = id;
    if (!bot) this.clearEmptyTimer();
    this.addLog(`${name} odaya katıldı.`, 'info');
    this.changed();
    return null;
  }

  // Oda sahibi lobide bot ekler. Bot: hesabı ve soketi yok, hep bağlı, adı "Bot <ad>".
  // { id } ya da { error } döner.
  addBot(byId) {
    if (byId !== this.hostId) return { error: 'Bot ekleyebilmek için oda sahibi olmalısın.' };
    if (this.phase !== 'lobby') return { error: 'Bot sadece lobide eklenebilir.' };
    if (this.players.size >= MAX_PLAYERS) return { error: `Oda dolu (en fazla ${MAX_PLAYERS} kişi).` };
    const id = `bot-${crypto.randomUUID()}`;
    const name = botName([...this.players.values()].map((p) => p.name), this.botRng);
    const error = this.addPlayer(id, name, { bot: true });
    if (error) return { error };
    try { this.bots.greet(id); } catch (err) { /* selam vermese de olur */ }
    return { id };
  }

  // Botun sohbet mesajı: insanlarla aynı kanal/evre kuralları (chat), gönderimi sunucu yapar.
  say(fromId, text) {
    const res = this.chat(fromId, text);
    if (res.error) return res.error;
    if (typeof this.hooks.chat === 'function') this.hooks.chat(this, res.recipients, res.message);
    return null;
  }

  // Odadaki en küçük boş koltuk numarası (evlerin sırası buna göre).
  freeSeat() {
    const used = new Set([...this.players.values()].map((p) => p.seat));
    let seat = 0;
    while (used.has(seat)) seat += 1;
    return seat;
  }

  // Hesabın bu odadaki (ayrılmamış) koltuğu.
  findByUser(userId) {
    if (!userId) return null;
    return [...this.players.values()].find((p) => p.userId === userId && !p.left) || null;
  }

  removePlayer(id, reason = 'left') {
    const p = this.players.get(id);
    if (!p) return;
    clearTimeout(p.graceTimer);

    if (this.inGame) {
      p.left = true;
      p.connected = false;
      p.socketId = null;
      this.dayVotes.delete(id);
      if (p.alive) {
        p.alive = false;
        const role = this.settings.revealRoles ? ` (${ROLE_LABEL[p.role]})` : '';
        this.addLog(`${p.name} oyundan ayrıldı${role}.`, 'death');
        const n = this.narrate('left', { id, role: this.roleIfPublic(p) },
          { title: 'Bir oyuncu ayrıldı', text: `${p.name} oyundan ayrıldı${role}.` });
        this.storyLine(n.story);
        const leftOk = !role || n.text.includes(role.trim());
        this.announce('left', n.title, leftOk ? n.text : `${p.name} oyundan ayrıldı${role}.`, { targets: [{ id }], story: n.story });
      }
      this.ensureHost();
      if (this.phase === 'hunter' && this.hunterId === id) {
        this.resolveHunter(null);
      } else if (!this.checkWin()) {
        if (this.phase === 'day') this.checkDayProgress();
        if (this.phase === 'trial') this.checkTrialProgress();
        this.changed();
      }
    } else {
      this.players.delete(id);
      const text = reason === 'kicked' ? `${p.name} odadan çıkarıldı.` : `${p.name} odadan ayrıldı.`;
      this.addLog(text, 'info');
      this.ensureHost();
      this.changed();
    }
    this.checkEmpty();
  }

  kick(byId, targetId) {
    if (byId !== this.hostId) return 'Sadece oda sahibi oyuncu çıkarabilir.';
    if (this.phase !== 'lobby') return 'Oyun sırasında oyuncu çıkarılamaz.';
    if (byId === targetId) return 'Kendini çıkaramazsın.';
    if (!this.players.has(targetId)) return 'Oyuncu bulunamadı.';
    this.removePlayer(targetId, 'kicked');
    return null;
  }

  connect(id, socketId) {
    const p = this.players.get(id);
    if (!p) return;
    clearTimeout(p.graceTimer);
    p.graceTimer = null;
    p.socketId = socketId;
    p.connected = true;
    this.clearEmptyTimer();
    this.ensureHost();
    this.changed();
  }

  disconnect(id) {
    const p = this.players.get(id);
    if (!p) return;
    p.connected = false;
    p.socketId = null;
    if (this.phase === 'lobby' || this.phase === 'ended') {
      clearTimeout(p.graceTimer);
      p.graceTimer = setTimeout(() => this.removePlayer(id), LOBBY_GRACE_MS);
    } else if (this.phase === 'day') {
      this.checkDayProgress();
    } else if (this.phase === 'trial') {
      this.checkTrialProgress();
    }
    this.ensureHost();
    this.changed();
    this.checkEmpty();
  }

  // Lobide ve oyun sonunda karakterin rengi, şapkası ve modeli değiştirilebilir.
  setLook(byId, look = {}) {
    const p = this.players.get(byId);
    if (!p) return 'Odada değilsin.';
    if (this.phase !== 'lobby' && this.phase !== 'ended') return 'Görünüm sadece lobide değiştirilebilir.';
    const next = { ...p.look };
    if (look.color !== undefined) {
      const color = clampInt(look.color, 0, COLOR_COUNT - 1, p.look.color);
      const taken = [...this.players.values()].some((x) => x.id !== byId && !x.left && x.look.color === color);
      if (taken) return 'Bu renk başka bir oyuncuda.';
      next.color = color;
    }
    if (look.hat !== undefined) next.hat = clampInt(look.hat, 0, HAT_COUNT - 1, p.look.hat);
    if (look.skin !== undefined) next.skin = clampInt(look.skin, 0, SKIN_COUNT - 1, p.look.skin);
    p.look = next;
    this.changed();
    return null;
  }

  // Sadece lobide ve oyun sonunda karakterler meydanda dolaşabilir (ölüler de); gündüz herkes yerinde durur.
  move(byId, x, y) {
    const p = this.players.get(byId);
    if (!p) return 'Odada değilsin.';
    if (!MOVE_PHASES.includes(this.phase)) return 'Şu an meydanda dolaşamazsın.';
    const fx = Number(x);
    const fy = Number(y);
    if (!Number.isFinite(fx) || !Number.isFinite(fy)) return 'Geçersiz konum.';
    p.pos = clampToPlaza(fx, fy);
    this.changed('move');
    return null;
  }

  // Oda sahibi ayrılır ya da bağlantısı koparsa yetki bağlı ilk oyuncuya geçer.
  ensureHost() {
    const host = this.players.get(this.hostId);
    if (host && host.connected && !host.left) return;
    const next = [...this.players.values()].find((p) => p.connected && !p.left && !p.bot);
    if (next && next.id !== this.hostId) {
      this.hostId = next.id;
      this.addLog(`${next.name} artık oda sahibi.`, 'info');
    } else if (!host) {
      this.hostId = next ? next.id : null;
    }
  }

  // Odada (ayrılmamış) insan kalmadıysa oda hemen kapanır – botlar odayı açık tutmaz.
  // İnsanlar var ama hiçbiri bağlı değilse oda 10 dakika sonra kapanır.
  checkEmpty() {
    if (this.closed) return;
    const humans = [...this.players.values()].filter((p) => !p.bot && !p.left);
    if (humans.length === 0) {
      this.close();
    } else if (!humans.some((p) => p.connected) && !this.emptyTimer) {
      this.emptyTimer = setTimeout(() => this.close(), EMPTY_ROOM_MS);
    }
  }

  close() {
    if (this.closed) return;
    this.closed = true;
    this.destroy();
    this.hooks.empty(this);
  }

  clearEmptyTimer() {
    clearTimeout(this.emptyTimer);
    this.emptyTimer = null;
  }

  destroy() {
    this.bots.close();
    clearTimeout(this.timer);
    this.clearEmptyTimer();
    for (const p of this.players.values()) clearTimeout(p.graceTimer);
  }

  // Oda sahibi lobide rol ayarlarını değiştirebilir.
  updateSettings(byId, raw = {}) {
    if (byId !== this.hostId) return 'Ayarları sadece oda sahibi değiştirebilir.';
    if (this.phase !== 'lobby') return 'Ayarlar sadece lobide değiştirilebilir.';
    this.settings = normalizeSettings({ ...this.settings, ...raw, roles: { ...this.settings.roles, ...(raw.roles || {}) } });
    this.changed();
    return null;
  }

  // ---------- oyun akışı ----------

  start(byId) {
    if (byId !== this.hostId) return 'Oyunu sadece oda sahibi başlatabilir.';
    if (this.phase !== 'lobby') return 'Oyun zaten başladı.';
    const ready = [...this.players.values()].filter((p) => p.connected);
    if (ready.length < MIN_PLAYERS) return `Oyunu başlatmak için en az ${MIN_PLAYERS} oyuncu gerekli.`;

    // Bağlantısı kopmuş ve henüz çıkarılmamış oyuncular oyuna alınmaz.
    for (const p of [...this.players.values()]) {
      if (!p.connected) {
        clearTimeout(p.graceTimer);
        this.players.delete(p.id);
      }
    }
    this.resetGame();
    this.hadBots = [...this.players.values()].some((p) => p.bot);
    const specials = enabledSpecials(this.settings);
    const roles = assignRoles([...this.players.keys()], specials);
    for (const [id, role] of roles) this.players.get(id).role = role;

    // Günlük ve meslekler rollerden sonra kurulur ama rolleri hiç görmez.
    this.createStory();
    const n = this.narrate('start', {}, { title: 'Roller dağıtıldı', text: 'Kartına bak ve rolünü kimseye gösterme!' });
    const sc = n.scenario;
    this.scenario = sc && typeof sc.id === 'string' && sc.id
      ? { id: sc.id, name: typeof sc.name === 'string' ? sc.name : '', intro: cleanStory(sc.intro) }
      : null;

    const summary = describeRoles(rolesFor(this.players.size, specials));
    this.addLog(`Oyun başladı: ${this.players.size} oyuncu (${summary}).`, 'info');
    this.storyLine(n.story);
    this.setPhase('reveal', REVEAL_MS, () => this.startNight());
    this.announce('start', n.title, n.text, { story: n.story, scenario: this.scenario });
    this.changed();
    return null;
  }

  setPhase(phase, ms, onEnd) {
    clearTimeout(this.timer);
    this.phase = phase;
    this.timerFrom = null;
    this.deadline = Date.now() + ms;
    this.timer = setTimeout(onEnd, ms);
  }

  aliveWith(role) {
    return [...this.players.values()].find((p) => p.role === role && p.alive) || null;
  }

  // Gece seçimleri ve yolculuklar her gece sıfırlanır.
  resetNight() {
    this.teamTarget = null;      // vampir takımının ortak hedefi { targetId, by }
    this.nightDoctor = null;
    this.nightSeer = null;
    this.nightWatch = null;
    this.nightFrame = null;
    this.nightWitch = { heal: null, poison: null };
    this.nightLock = null;       // bu gece kilitli kapı { targetId, by }
    this.trips = [];             // gece yolculukları { actorId, to, kind, blocked, at }
  }

  eventIs(id) {
    return Boolean(this.event && this.event.id === id);
  }

  eventView() {
    return this.event ? { id: this.event.id, name: this.event.name, desc: this.event.desc, phase: this.event.phase } : null;
  }

  // Testler için: bir sonraki olay kurallara bakmadan bu olsun. Gece çağrılan gündüz olayı
  // ertesi sabah, diğerleri bir sonraki gece başında etkinleşir.
  forceEvent(id) {
    if (!EVENTS[id]) throw new Error(`Bilinmeyen olay: ${id}`);
    if (this.phase === 'night' && EVENTS[id].phase === 'day') {
      this.pendingDayEvent = { id, prev: { round: this.lastEventRound, id: this.lastEventId } };
      this.lastEventRound = this.round;
      this.lastEventId = id;
    } else {
      this.forcedEvent = id;
    }
  }

  isLockedIn(id) {
    return Boolean(this.nightLock && this.nightLock.targetId === id);
  }

  // Bu turun olayını belirler (gece başında). Gündüz olayı gündüz başında etkinleşir.
  scheduleEvent() {
    let id = null;
    if (this.forcedEvent) {
      id = this.forcedEvent;
      this.forcedEvent = null;
    } else {
      const alive = [...this.players.values()].filter((p) => p.alive);
      id = chooseEvent({
        mode: this.settings.events, round: this.round, lastRound: this.lastEventRound, lastId: this.lastEventId,
        alive: alive.length, evil: alive.filter((p) => isEvil(p.role)).length, rng: this.eventRng,
      });
    }
    if (!id) return null;
    const prev = { round: this.lastEventRound, id: this.lastEventId };
    this.lastEventRound = this.round;
    this.lastEventId = id;
    return { id, prev };
  }

  // Tellal duyurusu: herkese açık 'event' duyurusu, günlük ve anlatı.
  announceEvent() {
    const ev = this.event;
    const n = this.narrate('event', { round: this.round, id: ev.id, phase: ev.phase }, { title: ev.name, text: ev.desc });
    this.addLog(`${this.round}. ${ev.phase === 'night' ? 'gece' : 'gün'}: ${ev.name}. ${ev.desc}`, 'event');
    this.storyLine(n.story);
    this.announce('event', n.title, n.text, { event: this.eventView(), story: n.story });
  }

  startNight() {
    this.round += 1;
    this.resetNight();
    this.trial = null;

    // Gardiyanın gündüz seçtiği kilit gece başında uygulanır (gardiyan o an hayattaysa).
    const jailer = this.aliveWith(ROLE.JAILER);
    const lockTarget = jailer && this.dayLock ? this.players.get(this.dayLock) : null;
    this.nightLock = lockTarget && lockTarget.alive && lockTarget.id !== jailer.id
      ? { targetId: lockTarget.id, by: jailer.id } : null;
    this.lastLockTarget = this.nightLock ? this.nightLock.targetId : null;
    this.dayLock = null;

    // Köy olayı: gece olayı hemen, gündüz olayı sabah etkinleşir.
    this.event = null;
    this.pendingDayEvent = null;
    const planned = this.scheduleEvent();
    if (planned && EVENTS[planned.id].phase === 'night') this.event = EVENTS[planned.id];
    else if (planned) this.pendingDayEvent = planned;

    const nightMs = this.eventIs('kisa-gece') ? Math.round(this.settings.nightSec * 500) : this.settings.nightSec * 1000;
    // Gece süresi eve yürüme payıyla başlar: seçimler hemen açık, görünen sayaç (timerFrom) yürüyüş bitince başlar.
    this.setPhase('night', NIGHT_WALK_MS + nightMs, () => this.endNight());
    this.timerFrom = Date.now() + NIGHT_WALK_MS;
    const n = this.narrate('night', { round: this.round },
      { title: `${this.round}. Gece`, text: 'Köy uyuyor... Gece rolleri seçimini yapsın.' });
    this.addLog(`${this.round}. gece başladı.`, 'night');
    this.storyLine(n.story);
    // Bir önceki gündüz olayının kapanış satırı (ayrı bir anlatı satırı).
    this.storyLine(cleanStory(n.eventEnd));
    this.announce('night', n.title, n.text, { story: n.story });
    if (this.event) this.announceEvent();

    // Kilitli evin sahibi gece başında haberdar edilir (özel).
    if (this.nightLock) {
      const owner = this.players.get(this.nightLock.targetId);
      const text = 'Kapın dışarıdan kilitlendi. Bu gece evinden çıkamazsın.';
      owner.notes.push({ text: `🔒 ${this.round}. gece: ${text}`, ts: Date.now() });
      this.announce('locked', 'Kapın kilitli', text, { targets: [{ id: owner.id }] }, [owner.id]);
    }
    this.changed();
  }

  // Vampir takımının hedefi geçerli mi: hedefe giden ve hâlâ hayatta olan bir vampir var mı?
  teamTargetActive() {
    if (!this.teamTarget) return false;
    return this.trips.some((t) => {
      if (t.kind !== 'kill') return false;
      const v = this.players.get(t.actorId);
      return v && v.alive && v.role === ROLE.VAMPIRE;
    });
  }

  // Bu oyuncu şu an bir gece seçimi yapabilir mi (görünüm ve botlar için)?
  canActAtNight(id) {
    const p = this.players.get(id);
    if (this.phase !== 'night' || !p || !p.alive || !NIGHT_ACTION_ROLES.has(p.role)) return false;
    if (this.isLockedIn(id)) return false;
    if (this.eventIs('tipi') && VILLAGE_NIGHT_ROLES.has(p.role)) return false;
    switch (p.role) {
      case ROLE.VAMPIRE: return !this.teamTargetActive();
      case ROLE.FRAMER: return !this.nightFrame;
      case ROLE.DOCTOR: return !this.nightDoctor;
      case ROLE.SEER: return !this.nightSeer;
      case ROLE.WATCHER: return !this.nightWatch;
      case ROLE.WITCH:
        return (!this.witchUsed.heal && !this.nightWitch.heal) || (!this.witchUsed.poison && !this.nightWitch.poison);
      default: return false;
    }
  }

  // Gece seçimleri kesindir: onaylanan seçim değiştirilemez, geri alınamaz.
  selectNight(byId, targetId, action) {
    if (this.phase !== 'night') return 'Şu an gece değil.';
    const p = this.players.get(byId);
    const target = this.players.get(targetId);
    if (!p || !p.alive) return 'Ölüler seçim yapamaz.';
    if (p.role === ROLE.VILLAGER) return 'Köylüler gece seçim yapamaz.';
    if (p.role === ROLE.JAILER) return 'Gardiyan kilidini gündüz seçer; gece yapacağın bir şey yok.';
    if (!NIGHT_ACTION_ROLES.has(p.role)) return 'Bu rolün gece görevi yok, sabahı bekle.';
    if (this.isLockedIn(byId)) return 'Kapın dışarıdan kilitlendi, bu gece evinden çıkamazsın.';
    if (this.eventIs('tipi') && VILLAGE_NIGHT_ROLES.has(p.role)) return 'Tipi var: bu gece köylüler evlerinden çıkamaz.';
    if (!target || !target.alive) return 'Bu oyuncu seçilemez.';

    switch (p.role) {
      case ROLE.VAMPIRE: {
        if (targetId === byId) return 'Vampir kendini seçemez.';
        if (target.role === ROLE.VAMPIRE) return 'Diğer vampirleri seçemezsin.';
        if (target.role === ROLE.FRAMER) return 'İftiracı sizin takımınızda, onu seçemezsin.';
        if (this.teamTargetActive()) {
          const t = this.players.get(this.teamTarget.targetId);
          return `Takımın hedefi zaten belli: ${t ? t.name : 'seçildi'}. Gece seçimleri kesindir.`;
        }
        // İlk onaylayan vampir takımın hedefini belirler; evinden çıkabilen bütün vampirler oraya gider.
        this.teamTarget = { targetId, by: byId };
        for (const v of this.players.values()) {
          if (v.alive && v.role === ROLE.VAMPIRE && !this.isLockedIn(v.id)) this.addTrip(v.id, targetId, 'kill');
        }
        break;
      }
      case ROLE.FRAMER:
        if (targetId === byId) return 'Kendine iftira atamazsın.';
        if (isEvil(target.role)) return 'Takım arkadaşına iftira atamazsın.';
        if (this.nightFrame) return FINAL_ERROR;
        this.nightFrame = targetId;
        this.addTrip(byId, targetId, 'frame');
        break;
      case ROLE.DOCTOR:
        if (this.nightDoctor) return FINAL_ERROR;
        this.nightDoctor = targetId;
        if (targetId !== byId) this.addTrip(byId, targetId, 'protect');
        break;
      case ROLE.SEER:
        if (targetId === byId) return 'Kendi geleceğine bakamazsın.';
        if (this.nightSeer) return FINAL_ERROR;
        this.nightSeer = targetId;
        this.addTrip(byId, targetId, 'inspect');
        break;
      case ROLE.WATCHER:
        if (this.nightWatch) return FINAL_ERROR;
        this.nightWatch = targetId;   // gözcü evin arkasından izler: içeri girmez, kilitten etkilenmez
        if (targetId !== byId) this.addTrip(byId, targetId, 'watch');
        break;
      case ROLE.WITCH: {
        const kind = action === 'poison' ? 'poison' : 'heal';
        const other = kind === 'heal' ? 'poison' : 'heal';
        if (this.witchUsed[kind]) return kind === 'heal' ? 'Hayat iksirini zaten kullandın.' : 'Zehri zaten kullandın.';
        if (this.nightWitch[kind]) return kind === 'heal' ? 'Hayat iksirini bu gece zaten verdin; seçim kesindir.' : 'Zehri bu gece zaten verdin; seçim kesindir.';
        if (kind === 'poison' && targetId === byId) return 'Kendini zehirleyemezsin.';
        if (this.nightWitch[other] === targetId) return 'Aynı kişiye hem iksir hem zehir veremezsin.';
        this.nightWitch[kind] = targetId;
        if (targetId !== byId) this.addTrip(byId, targetId, kind);
        break;
      }
      default:
        return 'Bu rolün gece görevi yok, sabahı bekle.';
    }
    this.changed();
    return null;
  }

  // Bir eve gidiş. Kapı kilitliyse gelen hemen haber alır ve eve döner; eylemi etkisiz kalır.
  addTrip(actorId, to, kind) {
    const blocked = kind !== 'watch' && this.isLockedIn(to);
    this.trips.push({ actorId, to, kind, blocked, at: Date.now() });
    if (!blocked) return;
    const actor = this.players.get(actorId);
    const owner = this.players.get(to);
    const text = `${genitive(owner.name)} kapısı dışarıdan kilitliydi; eve döndün.`;
    actor.notes.push({ text: `🔒 ${this.round}. gece: ${text}`, ts: Date.now() });
    this.announce('bounced', 'Kapı kilitliydi', text, { targets: [{ id: to }] }, [actorId]);
  }

  tripOk(actorId, kind) {
    return this.trips.some((t) => t.actorId === actorId && t.kind === kind && !t.blocked);
  }

  // Vampirlerin o anki ortak hedefi (cadının gördüğü kurban): [] ya da [id].
  vampireTargets() {
    if (!this.teamTargetActive()) return [];
    const t = this.players.get(this.teamTarget.targetId);
    return t && t.alive ? [t.id] : [];
  }

  // Gözcünün izlediği evle ilgili bildikleri: gelenler (kapıdan dönenler dahil) ve ev sahibinin
  // gidip gitmediği. Rüzgârda isimler yerine sadece gölgeler (sayı) görülür.
  watchInfo(houseId, watcherId, dark) {
    const seen = new Map();
    for (const t of this.trips) {
      if (t.to !== houseId || t.kind === 'watch' || t.actorId === houseId || t.actorId === watcherId) continue;
      if (!seen.has(t.actorId)) seen.set(t.actorId, { id: t.actorId, blocked: t.blocked });
      else if (!t.blocked) seen.get(t.actorId).blocked = false;
    }
    const list = [...seen.values()];
    const ownerTrip = houseId === watcherId ? null : this.trips.find((t) => t.actorId === houseId && t.kind !== 'watch');
    return {
      targetId: houseId,
      dark,
      visitors: dark ? list.map((v) => ({ id: null, blocked: v.blocked })) : list,
      count: list.length,
      blockedCount: list.filter((v) => v.blocked).length,
      ownerOut: Boolean(ownerTrip),
      ownerWent: ownerTrip && !dark ? ownerTrip.to : null,
    };
  }

  endNight() {
    const dark = this.eventIs('ruzgar');

    // Seçimler sabah aynı anda çözülür: gece sonunda hayatta olan herkesin (kapıdan dönmemiş)
    // seçimi geçerlidir, o gece ölecek olsa bile.
    const victimTarget = this.teamTargetActive() ? this.players.get(this.teamTarget.targetId) : null;
    const killers = this.trips.filter((t) => t.kind === 'kill' && !t.blocked
      && this.players.get(t.actorId).alive && this.players.get(t.actorId).role === ROLE.VAMPIRE);
    const victimId = victimTarget && victimTarget.alive && killers.length ? victimTarget.id : null;

    const doctor = this.aliveWith(ROLE.DOCTOR);
    const protectedId = doctor && this.nightDoctor
      && (this.nightDoctor === doctor.id || this.tripOk(doctor.id, 'protect')) ? this.nightDoctor : null;
    const witch = this.aliveWith(ROLE.WITCH);
    const heal = witch && this.nightWitch.heal
      && (this.nightWitch.heal === witch.id || this.tripOk(witch.id, 'heal')) ? this.nightWitch.heal : null;
    const poison = witch && this.nightWitch.poison && this.tripOk(witch.id, 'poison') ? this.nightWitch.poison : null;
    if (heal) this.witchUsed.heal = true;
    if (poison) this.witchUsed.poison = true;

    const seer = this.aliveWith(ROLE.SEER);
    const seen = seer && this.nightSeer && this.tripOk(seer.id, 'inspect') ? this.players.get(this.nightSeer) : null;
    const framer = this.aliveWith(ROLE.FRAMER);
    const framedId = framer && this.nightFrame && this.tripOk(framer.id, 'frame') ? this.nightFrame : null;
    const watcher = this.aliveWith(ROLE.WATCHER);
    const watchedId = watcher ? this.nightWatch : null;
    const watch = watchedId ? this.watchInfo(watchedId, watcher.id, dark) : null;
    const jailer = this.aliveWith(ROLE.JAILER);
    const lock = this.nightLock;
    const lockTries = lock
      ? new Set(this.trips.filter((t) => t.to === lock.targetId && t.blocked).map((t) => t.actorId)).size : 0;

    // Doktorun koruduğu kişi o gece hiçbir şekilde ölmez; hayat iksiri sadece vampir saldırısını engeller.
    const deaths = [];
    if (victimId && victimId !== protectedId && victimId !== heal) deaths.push({ id: victimId, cause: 'vampir' });
    if (poison && poison !== protectedId && !deaths.some((d) => d.id === poison)) deaths.push({ id: poison, cause: 'zehir' });
    this.event = this.event && this.event.phase === 'night' ? null : this.event;

    const texts = deaths.map(({ id, cause }) => {
      const victim = this.players.get(id);
      victim.alive = false;
      const role = this.settings.revealRoles ? ` Rolü: ${ROLE_LABEL[victim.role]}.` : '';
      const how = cause === 'zehir' ? 'zehirlenerek öldü' : 'vampir tarafından öldürüldü';
      this.addLog(`${this.round}. gece ${victim.name} ${how}.${role}`, 'death');
      return `${victim.name} bu gece ${how}!${role}`;
    });
    // Motora sadece herkese açık olanlar gider: kim, nasıl (vampir/zehir) ve oda açıklıyorsa rolü.
    const dawn = this.narrate('dawn', {
      round: this.round,
      deaths: deaths.map(({ id, cause }) => ({ id, cause, role: this.roleIfPublic(this.players.get(id)) })),
    }, deaths.length ? { title: 'Sabah oldu', text: texts.join(' ') } : { title: 'Sabah oldu', text: 'Bu gece kimse ölmedi.' });
    if (deaths.length) {
      const sceneOf = Array.isArray(dawn.targets) ? dawn.targets : [];
      const targets = deaths.map(({ id, cause }) => {
        const t = sceneOf.find((x) => x && x.id === id);
        const scene = cause === 'zehir' ? 'poison' : pickScene(t && t.scene, SCENES.bite, 'bite');
        return { id, cause, scene };
      });
      // Motor ölüm biçiminde cevap vermediyse ya da açık bir rolü metne yazmadıysa düz metne dön.
      const ok = Array.isArray(dawn.targets) && this.textHasRoles(dawn.text, deaths.map((d) => d.id));
      const story = Array.isArray(dawn.targets) ? dawn.story : '';
      this.storyLine(story);
      this.announce('death', ok ? dawn.title : 'Sabah oldu', ok ? dawn.text : texts.join(' '),
        { targets, scene: targets[0].scene, story });
    } else {
      // Kurtarılma ile saldırı olmaması aynı mesajı verir; kimse kimin kurtarıldığını öğrenmez.
      this.addLog(`${this.round}. gece kimse ölmedi.`, 'safe');
      this.storyLine(dawn.story);
      this.announce('safe', dawn.title, dawn.text, { story: dawn.story });
    }
    // Gece olayının kapanış satırı, sabah anlatısından sonra ayrı satır olarak.
    this.storyLine(cleanStory(dawn.eventEnd));

    // Kahin iftiracıyı da vampir görür; iftira atılan kişiye bakarsa sonuç "VAMPİR" çıkar.
    if (seen && seer.alive) {
      const isVampire = isEvil(seen.role) || seen.id === framedId;
      const text = `${seen.name} ${isVampire ? 'bir VAMPİR!' : 'vampir değil.'}`;
      seer.notes.push({ text: `🔮 ${this.round}. gece: ${text}`, ts: Date.now() });
      this.announce('seer', 'Kristal küre konuştu', text,
        { targets: [{ id: seen.id, cause: isVampire ? 'vampir' : 'temiz' }] }, [seer.id]);
    }

    // Gözcü sabaha sağ çıkarsa gördüklerini sözle de öğrenir.
    if (watch && watcher.alive) {
      const deadIds = new Set(deaths.map((d) => d.id));
      const deathAt = [watch.targetId, watch.ownerWent].filter((id, i, a) => id && a.indexOf(id) === i && deadIds.has(id));
      const text = this.watchText(watch, deathAt);
      const byName = (ids) => ids.map((id) => this.players.get(id)).sort((a, b) => a.name.localeCompare(b.name, 'tr')).map((p) => p.id);
      const visitors = dark ? [] : byName(watch.visitors.map((v) => v.id));
      const blocked = dark ? [] : byName(watch.visitors.filter((v) => v.blocked).map((v) => v.id));
      watcher.notes.push({ text: `👁️ ${this.round}. gece: ${text}`, ts: Date.now() });
      this.announce('watch', 'Gözcünün raporu', text, {
        targets: [{ id: watch.targetId }], visitors, blocked, count: watch.count, blockedCount: watch.blockedCount,
        ownerOut: watch.ownerOut, ownerWent: watch.ownerWent, dark, deathAt,
      }, [watcher.id]);
    }

    // Gardiyan sabaha sağ çıkarsa kilitlediği kapıyı kaç kişinin zorladığını öğrenir (kim olduğunu değil).
    if (lock && jailer && jailer.alive && jailer.id === lock.by) {
      const owner = this.players.get(lock.targetId);
      const text = lockTries
        ? `Kilitlediğin kapıyı (${genitive(owner.name)} evi) bu gece ${lockTries} kişi zorladı.`
        : `Kilitlediğin kapıyı (${genitive(owner.name)} evi) bu gece kimse zorlamadı.`;
      jailer.notes.push({ text: `🗝️ ${this.round}. gece: ${text}`, ts: Date.now() });
      this.announce('lockreport', 'Gardiyanın raporu', text,
        { targets: [{ id: owner.id }], count: lockTries }, [jailer.id]);
    }

    this.afterDeaths(deaths.map((d) => d.id), () => this.startDay());
  }

  watchText(watch, deathAt) {
    const owner = this.players.get(watch.targetId);
    const house = `${genitive(owner.name)} evine`;
    let text;
    if (watch.dark) {
      text = watch.count
        ? `Rüzgârlı karanlıkta bu gece ${house} ${watch.count} gölge geldi${watch.blockedCount ? ` (${watch.blockedCount} tanesi kilitli kapıdan döndü)` : ''}.`
        : `Rüzgârlı karanlıkta bu gece ${house} kimse gelmedi.`;
      text += watch.ownerOut ? ' Ev sahibi gece dışarı çıktı.' : '';
    } else {
      const names = (list) => list.map((v) => this.players.get(v.id).name).sort((a, b) => a.localeCompare(b, 'tr'));
      const inside = names(watch.visitors.filter((v) => !v.blocked));
      const bounced = names(watch.visitors.filter((v) => v.blocked));
      if (!watch.count) text = `Bu gece ${house} kimse gelmedi.`;
      else {
        text = inside.length ? `Bu gece ${house} gelenler: ${inside.join(', ')}.` : `Bu gece ${house} gelen herkes kapıdan döndü.`;
        if (bounced.length) text += ` Kilitli kapıdan dönenler: ${bounced.join(', ')}.`;
      }
      if (watch.ownerWent) text += ` ${owner.name} gece evinden çıkıp ${genitive(this.players.get(watch.ownerWent).name)} evine gitti.`;
    }
    if (deathAt.length) {
      text += ` Sabah ${deathAt.map((id) => `${genitive(this.players.get(id).name)} evinden`).join(' ve ')} ölüm haberi geldi.`;
    }
    return text;
  }

  // Oda rolleri açıklıyorsa metinde her ölünün rolü yazmalı (motor bir rolü tanımazsa düz metin kullanılır).
  textHasRoles(text, ids) {
    if (!this.settings.revealRoles) return true;
    return ids.every((id) => text.includes(`Rolü: ${ROLE_LABEL[this.players.get(id).role]}.`));
  }

  // Hiç vampir kalmadıysa yaşayan iftiracı hemen vampire dönüşür; oyun iki yönde de bitebilsin.
  promoteFramer() {
    if (!this.inGame) return false;
    const alive = [...this.players.values()].filter((p) => p.alive);
    if (alive.some((p) => p.role === ROLE.VAMPIRE)) return false;
    const framers = alive.filter((p) => p.role === ROLE.FRAMER);
    for (const f of framers) {
      f.role = ROLE.VAMPIRE;
      f.promoted = true;
      this.nightFrame = null;
      const text = 'Son vampir de düştü. Artık sen bir vampirsin: geceleri kurbanını sen seçeceksin!';
      f.notes.push({ text: `🧛 ${this.round}. tur: Vampire dönüştün.`, ts: Date.now() });
      this.announce('promote', 'Vampire dönüştün!', text, { targets: [{ id: f.id }] }, [f.id]);
    }
    if (framers.length) this.changed();
    return framers.length > 0;
  }

  // Ölenler arasında avcı varsa önce son atışını yapar, sonra kazanan kontrol edilir.
  afterDeaths(deadIds, next) {
    this.promoteFramer();
    const hunter = deadIds.map((id) => this.players.get(id))
      .find((p) => p && p.role === ROLE.HUNTER && !p.left);
    const winner = winnerOf([...this.players.values()]);
    if (hunter && winner !== ROLE.VILLAGER) {
      this.startHunter(hunter, next);
      return;
    }
    if (!this.checkWin()) next();
  }

  startHunter(hunter, next) {
    this.hunterId = hunter.id;
    this.hunterNext = next;
    this.setPhase('hunter', HUNTER_MS, () => this.resolveHunter(null));
    this.addLog(`${hunter.name} bir avcıydı! Son atışını yapıyor.`, 'info');
    const n = this.narrate('hunter', { id: hunter.id },
      { title: 'Avcı düştü!', text: `${hunter.name} bir avcıydı. Son nefesinde birini vurabilir…` });
    this.storyLine(n.story);
    this.announce('hunter', n.title, n.text, { targets: [{ id: hunter.id }], story: n.story });
    this.changed();
  }

  shoot(byId, targetId) {
    if (this.phase !== 'hunter') return 'Şu an atış zamanı değil.';
    if (byId !== this.hunterId) return 'Sadece avcı ateş edebilir.';
    if (targetId === byId) return 'Kendini vuramazsın.';
    const target = this.players.get(targetId);
    if (!target || !target.alive) return 'Bu oyuncu vurulamaz.';
    this.resolveHunter(targetId);
    return null;
  }

  resolveHunter(targetId) {
    if (this.phase !== 'hunter') return;
    clearTimeout(this.timer);
    const hunter = this.players.get(this.hunterId);
    const next = this.hunterNext;
    this.hunterId = null;
    this.hunterNext = null;
    const target = targetId ? this.players.get(targetId) : null;
    if (target) {
      target.alive = false;
      const role = this.settings.revealRoles ? ` Rolü: ${ROLE_LABEL[target.role]}.` : '';
      this.addLog(`Avcı ${hunter ? hunter.name : ''} son atışıyla ${target.name} oyuncusunu vurdu.${role}`, 'death');
      const n = this.narrate('shot', { hunterId: hunter ? hunter.id : null, id: target.id, role: this.roleIfPublic(target) },
        { title: 'Avcının son atışı', text: `${target.name} vuruldu!${role}` });
      this.storyLine(n.story);
      const shotOk = this.textHasRoles(n.text, [target.id]);
      this.announce('shot', shotOk ? n.title : 'Avcının son atışı', shotOk ? n.text : `${target.name} vuruldu!${role}`,
        { targets: [{ id: target.id }], actorId: hunter ? hunter.id : null, scene: 'arrow', story: n.story });
    } else {
      this.addLog('Avcı kimseyi vurmadı.', 'safe');
      const n = this.narrate('noHunt', { hunterId: hunter ? hunter.id : null },
        { title: 'Avcı ıskaladı', text: 'Avcı kimseyi vurmadan gözlerini kapadı.' });
      this.storyLine(n.story);
      this.announce('nohunt', n.title, n.text, { story: n.story });
    }
    if (!this.checkWin()) next();
  }

  startDay() {
    this.dayVotes = new Map();
    this.dayShortened = false;
    this.trial = null;
    this.event = null;
    // Gece belirlenen gündüz olayı şimdi etkinleşir (mahkeme için en az 6 kişi hâlâ hayatta olmalı).
    const pending = this.pendingDayEvent;
    this.pendingDayEvent = null;
    if (pending) {
      const alive = [...this.players.values()].filter((p) => p.alive).length;
      if (pending.id === 'mahkeme' && alive < 6) {
        this.lastEventRound = pending.prev.round;
        this.lastEventId = pending.prev.id;
      } else {
        this.event = EVENTS[pending.id];
      }
    }
    const dayMs = this.eventIs('ayaz') ? Math.round(this.settings.daySec * 500) : this.settings.daySec * 1000;
    this.setPhase('day', dayMs, () => this.endDay());
    const n = this.narrate('day', { round: this.round },
      { title: `${this.round}. Gün`, text: `${this.round}. gün başladı.` });
    this.addLog(`${this.round}. gün başladı.`, 'day');
    this.storyLine(n.story);
    // Her sabah bir dedikodu (tellal): sadece herkese açık kayıttan üretilir.
    this.storyLine(cleanStory(n.rumor && n.rumor.text), 'rumor');
    if (this.event) this.announceEvent();
    this.changed();
  }

  voteWeight(voterId) {
    const p = this.players.get(voterId);
    return p && p.role === ROLE.MAYOR ? 2 : 1;
  }

  // Sis günü: kimin kime oy verdiği gizli.
  get secretVotes() {
    return this.phase === 'day' && this.eventIs('sis');
  }

  vote(byId, targetId) {
    const inTrial = this.phase === 'trial';
    if (this.phase !== 'day' && !inTrial) return 'Oylama sadece gündüz yapılır.';
    if (inTrial && this.trial.step !== 'vote') return 'Savunmalar bitmeden oy verilemez.';
    const p = this.players.get(byId);
    if (!p || !p.alive) return 'Ölüler oy veremez.';

    const before = this.dayVotes.has(byId) ? this.dayVotes.get(byId) : null;
    if (targetId === null || this.dayVotes.get(byId) === targetId) {
      this.dayVotes.delete(byId);
    } else if (targetId === SLEEP) {
      if (inTrial) return 'Mahkemede Hızlı Uyu yok; iki sanıktan birini seç.';
      this.dayVotes.set(byId, SLEEP);
    } else {
      const target = this.players.get(targetId);
      if (!target || !target.alive) return 'Bu oyuncuya oy verilemez.';
      if (targetId === byId) return 'Kendine oy veremezsin.';
      if (inTrial && !this.trial.accused.includes(targetId)) return 'Mahkemede yalnızca iki sanıktan birine oy verebilirsin.';
      this.dayVotes.set(byId, targetId);
    }
    // Oy değişikliği herkese açıktır (state.day); dedikodular için kalan süreyle kaydedilir.
    // Sis gününde kayıt tutulmaz (motor da o günün oylarını yok sayar); mahkeme oylaması kaydedilir.
    const after = this.dayVotes.has(byId) ? this.dayVotes.get(byId) : null;
    if (after !== before && !this.secretVotes) {
      this.storyRecord('vote', { voter: byId, to: after, msLeft: Math.max(0, this.deadline - Date.now()) });
    }
    const ended = inTrial ? this.checkTrialProgress() : this.checkDayProgress();
    if (!ended) this.changed();
    return null;
  }

  // Gardiyan gündüz, gelecek gece kilitleyeceği kapıyı seçer (gün bitene kadar değiştirebilir; null = vazgeç).
  lockHouse(byId, targetId) {
    if (this.phase !== 'day' && this.phase !== 'trial') return 'Kilitlenecek kapı sadece gündüz seçilir.';
    const p = this.players.get(byId);
    if (!p || !p.alive) return 'Ölüler kapı kilitleyemez.';
    if (p.role !== ROLE.JAILER) return 'Sadece gardiyan kapı kilitleyebilir.';
    if (targetId === null) {
      this.dayLock = null;
      this.changed();
      return null;
    }
    const target = this.players.get(targetId);
    if (!target || !target.alive) return 'Bu kapı kilitlenemez.';
    if (targetId === byId) return 'Kendi kapını kilitleyemezsin.';
    if (targetId === this.lastLockTarget) return 'Aynı kapıyı iki gece üst üste kilitleyemezsin.';
    this.dayLock = targetId;
    this.changed();
    return null;
  }

  // Herkes Hızlı Uyu derse gün hemen biter; herkes oy verdiyse süre kısalır.
  // Gün bittiyse true döner.
  checkDayProgress() {
    if (this.phase !== 'day') return false;
    const voters = [...this.players.values()].filter((p) => p.alive && p.connected);
    if (voters.length === 0) return false;
    const allVoted = voters.every((p) => this.dayVotes.has(p.id));
    if (!allVoted) return false;

    if (voters.every((p) => this.dayVotes.get(p.id) === SLEEP)) {
      this.endDay(true);
      return true;
    }
    if (!this.dayShortened && this.deadline - Date.now() > ALL_VOTED_MS) {
      this.dayShortened = true;
      this.setPhase('day', ALL_VOTED_MS, () => this.endDay());
      this.addLog('Herkes oy verdi, oylama 10 saniye içinde sonuçlanıyor.', 'info');
    }
    return false;
  }

  // Yaşayan oyuncuların son oyları ve sayımı.
  collectVotes() {
    const ballots = [...this.dayVotes]
      .filter(([voterId]) => { const v = this.players.get(voterId); return v && v.alive; })
      .map(([voter, target]) => ({ voter, target, w: this.voteWeight(voter) }));
    const votes = new Map();
    let sleepCount = 0;
    for (const { voter, target, w } of ballots) {
      if (target === SLEEP) { sleepCount += w; continue; }
      const t = this.players.get(target);
      if (t && t.alive) votes.set(voter, target);
    }
    const { counts, max, top } = tally(votes, (id) => this.voteWeight(id));
    return { ballots, counts, max, top, sleepCount };
  }

  endDay(unanimousSleep = false) {
    const secret = this.secretVotes;
    const { ballots: allBallots, counts, max, top, sleepCount } = this.collectVotes();
    // Sis gününde oy pusulaları hikâye motoruna da verilmez (kimin kime oy verdiği gizli kalır).
    const ballots = secret ? [] : allBallots;

    if (unanimousSleep) {
      this.addLog(`${this.round}. gün köy oy birliğiyle uyumaya karar verdi.`, 'safe');
      const n = this.narrate('sleep', { round: this.round, ballots, secret },
        { title: 'Hızlı Uyu', text: 'Köy oy birliğiyle uyumaya karar verdi. Kimse asılmadı.' });
      this.storyLine(n.story);
      this.announce('sleep', n.title, n.text, { story: n.story });
      this.startNight();
      return;
    }

    // Mahkeme günü: en çok oy alan iki kişi savunma yapar, sonra köy yalnızca ikisi arasında oylar.
    if (this.eventIs('mahkeme') && max > sleepCount) {
      const ranked = [...counts].filter(([, c]) => c > 0).sort((a, b) => b[1] - a[1]);
      if (ranked.length >= 2) {
        this.startTrial(this.pickAccused(ranked), Object.fromEntries(ranked));
        return;
      }
    }

    if (max > 0 && top.length === 1 && max > sleepCount) {
      this.hang(this.players.get(top[0]), max, ballots, { secret });
      return;
    }
    this.noHangResult(max === 0 ? 'novote' : 'tie', ballots, { secret });
  }

  // İki sanık: en çok oyu alan(lar); birinci ya da ikinci sırada eşitlik varsa eşitler arasından kura.
  pickAccused(ranked) {
    const pickFrom = (list, n) => {
      const pool = [...list];
      const out = [];
      while (out.length < n && pool.length) out.push(pool.splice(crypto.randomInt(pool.length), 1)[0]);
      return out;
    };
    const topCount = ranked[0][1];
    const first = ranked.filter(([, c]) => c === topCount).map(([id]) => id);
    if (first.length >= 2) return pickFrom(first, 2);
    const secondCount = ranked.find(([, c]) => c < topCount)[1];
    const second = ranked.filter(([, c]) => c === secondCount).map(([id]) => id);
    return [first[0], ...pickFrom(second, 1)];
  }

  startTrial(accused, counts) {
    this.trial = { step: 'defense', accused, counts, speaker: accused[0] };
    this.dayVotes = new Map();
    this.dayShortened = false;
    const [a, b] = accused.map((id) => this.players.get(id));
    const n = this.narrate('trial', { round: this.round, defendants: accused, counts },
      { title: 'Mahkeme kuruldu', text: `${a.name} ile ${b.name} savunma yapacak; ardından köy yalnızca bu ikisi arasında oy verecek.` });
    this.addLog(`${this.round}. gün mahkeme: ${a.name} ve ${b.name} yargılanıyor.`, 'info');
    this.storyLine(n.story);
    this.announce('trial', n.title, n.text, { step: 'start', targets: accused.map((id) => ({ id })), story: n.story });
    this.startDefense(0);
  }

  // Sanıklar sırayla savunma yapar (her biri TRIAL_TURN_MS); sanık ölmüş/ayrılmışsa sırası atlanır.
  startDefense(index) {
    if (!this.trial) return;
    const accused = this.trial.accused;
    let i = index;
    while (i < accused.length && !this.players.get(accused[i]).alive) i += 1;
    if (i >= accused.length) { this.startTrialVote(); return; }
    const speaker = this.players.get(accused[i]);
    this.trial.step = 'defense';
    this.trial.speaker = speaker.id;
    this.setPhase('trial', TRIAL_TURN_MS, () => this.startDefense(i + 1));
    const n = this.narrate('defense', { round: this.round, id: speaker.id },
      { title: 'Savunma', text: `Söz ${speaker.name} adlı sanıkta.` });
    this.storyLine(n.story);
    this.announce('trial', n.title, n.text, { step: 'defense', targets: [{ id: speaker.id }], story: n.story });
    this.changed();
  }

  startTrialVote() {
    if (!this.trial) return;
    this.trial.step = 'vote';
    this.trial.speaker = null;
    this.dayVotes = new Map();
    this.dayShortened = false;
    this.setPhase('trial', TRIAL_VOTE_MS, () => this.endTrial());
    const names = this.trial.accused.map((id) => this.players.get(id).name);
    this.announce('trial', 'Mahkeme oylaması', `Savunmalar bitti. Şimdi ${names[0]} ile ${names[1]} arasında oy verin.`,
      { step: 'vote', targets: this.trial.accused.map((id) => ({ id })), story: '' });
    this.changed();
  }

  // Herkes oy verince mahkeme oylaması kısa süre sonra sonuçlanır. Bittiyse true döner.
  checkTrialProgress() {
    if (this.phase !== 'trial' || !this.trial || this.trial.step !== 'vote') return false;
    const voters = [...this.players.values()].filter((p) => p.alive && p.connected);
    if (!voters.length || !voters.every((p) => this.dayVotes.has(p.id))) return false;
    if (!this.dayShortened && this.deadline - Date.now() > TRIAL_ALL_VOTED_MS) {
      this.dayShortened = true;
      this.setPhase('trial', TRIAL_ALL_VOTED_MS, () => this.endTrial());
    }
    return false;
  }

  endTrial() {
    if (!this.trial) return;
    const { ballots, max, top } = this.collectVotes();
    this.trial = null;
    if (max > 0 && top.length === 1) {
      this.hang(this.players.get(top[0]), max, ballots, { trial: true });
      return;
    }
    this.noHangResult(max === 0 ? 'novote' : 'tie', ballots, { trial: true });
  }

  // Meydan kararıyla eleme (normal gün ya da mahkeme sonucu).
  hang(hanged, max, ballots, flags = {}) {
    hanged.alive = false;
    hanged.hanged = true;   // iç bilgi: meydan kararıyla elendi (asılan soytarının rolü herkese açıktır)
    const isPublic = this.settings.revealRoles || hanged.role === ROLE.JESTER;
    const role = isPublic ? ` Rolü: ${ROLE_LABEL[hanged.role]}.` : '';
    // Sahne (darağacı / sürgün / mahzen) motordan gelir; metin ve günlük satırı sahneye uyar.
    const n = this.narrate('hanged', {
      round: this.round, id: hanged.id, votes: max, role: isPublic ? hanged.role : null, ballots, ...flags,
    }, { title: 'Köy kararını verdi', text: `${hanged.name} ${max} oyla asıldı!${role}`, scene: 'gallows' });
    const scene = pickScene(n.scene, SCENES.hanged, 'gallows');
    const okText = n.scene === scene && (!isPublic || n.text.includes(role.trim()));
    this.lastHangScene = scene;
    const log = okText && typeof n.log === 'string' && n.log
      ? n.log : `${this.round}. gün ${hanged.name} ${max} oyla ${HANG_VERB[scene]}.${role}`;
    this.addLog(log, 'death');
    this.storyLine(n.story);
    this.event = null;
    this.announce('hanged', okText ? n.title : 'Köy kararını verdi',
      okText ? n.text : `${hanged.name} ${max} oyla ${HANG_VERB[scene]}!${role}`,
      { targets: [{ id: hanged.id }], scene, story: n.story, trial: Boolean(flags.trial) });
    if (hanged.role === ROLE.JESTER) {
      this.finish(ROLE.JESTER);
      return;
    }
    this.afterDeaths([hanged.id], () => this.startNight());
  }

  noHangResult(reason, ballots, flags = {}) {
    const why = reason === 'novote' ? 'Kimse oy vermedi' : 'Oylar eşit çıktı';
    this.addLog(`${this.round}. gün kimse asılmadı (${why.toLocaleLowerCase('tr')}).`, 'safe');
    const n = this.narrate('noHang', { round: this.round, reason, ballots, ...flags },
      { title: 'Kimse asılmadı', text: `${why}, köy bugün kimseyi asmadı.` });
    this.storyLine(n.story);
    this.event = null;
    this.announce('nohang', n.title, n.text, { story: n.story, trial: Boolean(flags.trial) });
    if (!this.checkWin()) this.startNight();
  }

  // Oyun bittiyse true döner.
  checkWin() {
    if (!this.inGame) return false;
    this.promoteFramer();
    const winner = winnerOf([...this.players.values()]);
    if (!winner) return false;
    this.finish(winner);
    return true;
  }

  finish(winner) {
    clearTimeout(this.timer);
    this.phase = 'ended';
    this.deadline = null;
    this.timerFrom = null;
    this.winner = winner;
    this.hunterId = null;
    this.hunterNext = null;
    this.event = null;
    this.trial = null;
    // Oyun bitmeden ayrılanlar takımı kazansa bile kazanmış sayılmaz.
    this.winners = [...this.players.values()]
      .filter((p) => !p.left && teamOf(p.role) === winner).map((p) => p.id);
    const extra = { winner, targets: this.winners.map((id) => ({ id })) };
    let fallback;
    if (winner === ROLE.VILLAGER) {
      this.addLog('Tüm vampirler yok edildi. Köylüler kazandı!', 'win');
      fallback = { title: 'Köylüler kazandı!', text: 'Tüm vampirler yok edildi. Köy kurtuldu!' };
    } else if (winner === ROLE.VAMPIRE) {
      this.addLog('Vampirler köyü ele geçirdi. Vampirler kazandı!', 'win');
      fallback = { title: 'Vampirler kazandı!', text: 'Köyde vampirlere karşı koyacak kimse kalmadı.' };
    } else {
      const scene = this.lastHangScene || 'gallows';
      this.addLog(`Soytarı ${HANG_VERB[scene]} ve kahkahalarla kazandı!`, 'win');
      const verb = { gallows: 'astı', exile: 'köyden sürdü', cellar: 'mahzene kapattı' }[scene];
      fallback = { title: 'Soytarı kazandı!', text: `Köy Soytarı'yı ${verb}… tam da onun istediği gibi!` };
    }
    // Oyun bitti: artık bütün roller herkese açık, motor hepsini alabilir.
    const n = this.narrate('win', {
      winner,
      winners: this.winners,
      roles: Object.fromEntries([...this.players.values()].filter((p) => p.role).map((p) => [p.id, p.role])),
    }, fallback);
    this.epilogue = null;
    try {
      const e = this.story ? this.story.epilogue() : null;
      const story = e ? cleanStory(e.story, EPILOGUE_MAX) : '';
      if (story) {
        this.epilogue = {
          title: typeof e.title === 'string' && e.title ? e.title : 'Köy Günlüğü',
          text: typeof e.text === 'string' ? e.text : '',
          story,
        };
      }
    } catch (err) {
      this.epilogue = null;
    }
    this.storyLine(n.story);
    if (this.epilogue) this.storyLine(this.epilogue.story, 'epilogue');
    this.announce('win', n.title, n.text, { ...extra, story: n.story, epilogue: this.epilogue });
    // Lobide olduğu gibi, bitmiş oyunda da bağlantısı kopanlar bir süre sonra çıkarılır.
    for (const p of this.players.values()) {
      if (!p.connected && !p.left) {
        clearTimeout(p.graceTimer);
        p.graceTimer = setTimeout(() => this.removePlayer(p.id), LOBBY_GRACE_MS);
      }
    }
    this.reportResults();
    this.changed();
  }

  // Oyunun sonucunu istatistik için sunucuya bildirir; buradaki bir hata oyunu durdurmaz.
  reportResults() {
    if (typeof this.hooks.finished !== 'function') return;
    const winners = new Set(this.winners);
    const results = [...this.players.values()].filter((p) => p.role).map((p) => ({
      playerId: p.id,
      userId: p.userId || null,
      name: p.name,
      role: p.role,
      team: teamOf(p.role),
      won: winners.has(p.id),
      left: p.left,
    }));
    try {
      // Botlu oyunlar hesap istatistiklerine ve liderlik tablosuna yazılmaz.
      this.hooks.finished(this, { winner: this.winner, results, ranked: !this.hadBots });
    } catch (err) {
      console.error(`[${this.id}] Oyun sonucu kaydedilemedi:`, err);
    }
  }

  backToLobby(byId) {
    if (byId !== this.hostId) return 'Sadece oda sahibi lobiye döndürebilir.';
    if (this.phase !== 'ended') return 'Oyun henüz bitmedi.';
    for (const p of [...this.players.values()]) {
      if (p.left || !p.connected) {
        clearTimeout(p.graceTimer);
        this.players.delete(p.id);
      }
    }
    this.phase = 'lobby';
    this.resetGame();
    this.addLog('Yeni oyun için lobiye dönüldü.', 'info');
    this.changed();
    return null;
  }

  // ---------- sohbet ----------

  // Mesajın kimlere gideceğine karar verir: gece köylüler konuşamaz,
  // vampir takımı (iftiracı dahil) kendi arasında konuşur, ölüler sadece ölülerle konuşur.
  chat(fromId, rawText) {
    const p = this.players.get(fromId);
    if (!p) return { error: 'Odada değilsin.' };
    const text = String(rawText || '').replace(/\s+/g, ' ').trim().slice(0, 300);
    if (!text) return { error: 'Boş mesaj gönderilemez.' };

    const all = [...this.players.values()].filter((x) => !x.left);
    let channel = 'genel';
    let recipients = all;

    if (['night', 'day', 'trial', 'hunter'].includes(this.phase)) {
      if (!p.alive) {
        channel = 'olu';
        recipients = all.filter((x) => !x.alive);
      } else if (this.phase === 'night') {
        if (!isEvil(p.role)) return { error: 'Gece köy uyur, konuşamazsın.' };
        channel = 'vampir';
        recipients = all.filter((x) => isEvil(x.role) && x.alive);
      }
    }
    // Dedikodular için sadece yaşayanların herkese açık gündüz mesajları sayılır (vampir/ölü kanalı asla).
    if (channel === 'genel' && ['day', 'trial', 'hunter'].includes(this.phase) && p.alive) {
      this.storyRecord('chat', p.id);
    }
    return {
      channel,
      recipients: recipients.map((x) => x.id),
      message: { channel, from: p.name, fromId: p.id, text, ts: Date.now() },
    };
  }

  // ---------- yardımcılar ----------

  addLog(text, kind) {
    this.log.push({ text, kind, ts: Date.now() });
    if (this.log.length > LOG_MAX) this.log.shift();
  }

  // to verilirse duyuru sadece o oyunculara gider (ör. kahinin sonucu).
  announce(kind, title, text, extra = {}, to = null) {
    this.hooks.announce(this, { kind, title, text, ...extra }, to);
  }

  // kind === 'move' ise sunucu yayını seyreltebilir (sık gelen konum güncellemeleri).
  changed(kind) {
    this.hooks.update(this, kind);
    if (kind === 'move' || this.closed) return;
    try {
      this.bots.sync();
    } catch (err) {
      console.error(`[${this.id}] Bot planı kurulamadı:`, err);
    }
  }

  publicInfo() {
    const host = this.players.get(this.hostId);
    return {
      id: this.id,
      name: this.name,
      players: [...this.players.values()].filter((p) => !p.left).length,
      bots: [...this.players.values()].filter((p) => p.bot && !p.left).length,
      maxPlayers: MAX_PLAYERS,
      phase: this.phase,
      hasPassword: Boolean(this.password),
      hostName: host ? host.name : '',
    };
  }

  // Her oyuncuya kendi görmesi gerekeni hazırlar; başkalarının rolleri sızmaz.
  viewFor(viewerId) {
    const me = this.players.get(viewerId);
    const ended = this.phase === 'ended';
    const iAmEvil = Boolean(me && isEvil(me.role));

    const players = [...this.players.values()].map((p) => {
      let role = null;
      if (p.id === viewerId || ended) role = p.role;
      else if (iAmEvil && isEvil(p.role)) role = p.role;
      else if (!p.alive && this.settings.revealRoles) role = p.role;
      return {
        id: p.id, name: p.name, seat: p.seat, job: p.job || null, alive: p.alive, connected: p.connected,
        left: p.left, isHost: p.id === this.hostId, bot: Boolean(p.bot), role, look: p.look, pos: p.pos,
      };
    });

    const activeCount = players.filter((p) => !p.left).length;
    const view = {
      serverNow: Date.now(),
      room: {
        id: this.id, name: this.name, phase: this.phase, round: this.round,
        deadline: this.deadline, timerFrom: this.timerFrom, hostId: this.hostId, settings: this.settings,
        hasPassword: Boolean(this.password), winner: this.winner, winners: this.winners,
        minPlayers: MIN_PLAYERS, maxPlayers: MAX_PLAYERS,
        vampireCount: vampireCount(activeCount),
        distribution: rolesFor(activeCount, enabledSpecials(this.settings)),
        hunterId: this.hunterId,
        scenario: this.scenario,
        epilogue: this.phase === 'ended' ? this.epilogue : null,
        event: this.eventView(),
        trial: this.trial ? {
          step: this.trial.step, accused: [...this.trial.accused], counts: { ...this.trial.counts }, speaker: this.trial.speaker,
        } : null,
      },
      me: me ? {
        id: me.id, userId: me.userId, name: me.name, seat: me.seat, job: me.job || null, role: me.role, alive: me.alive,
        look: me.look, notes: me.notes,
      } : null,
      players,
      log: this.log,
      night: null,
      day: null,
    };

    if (this.phase === 'night' && me && me.alive) view.night = this.nightViewFor(me);

    if (this.phase === 'day' || this.phase === 'trial') {
      const secret = this.secretVotes;
      const votes = {};
      const counts = {};
      const voted = [];
      const sleeping = [];
      for (const [voterId, targetId] of this.dayVotes) {
        const voter = this.players.get(voterId);
        if (!voter || !voter.alive) continue;
        voted.push(voterId);
        if (targetId === SLEEP) { sleeping.push(voterId); continue; }
        const w = this.voteWeight(voterId);
        (votes[targetId] = votes[targetId] || []).push({ id: voterId, w });
        counts[targetId] = (counts[targetId] || 0) + w;
      }
      view.day = {
        secret,
        // Sis gününde kimin kime oy verdiği gizli: sadece kişi başına oy sayısı görünür.
        votes: secret ? {} : votes,
        counts,
        voted: secret ? [] : voted,
        sleeping: secret ? [] : sleeping,
        votedCount: voted.length,
        sleepers: sleeping.length,
        voters: players.filter((p) => p.alive && p.connected).length,
        myVote: this.dayVotes.get(viewerId) || null,
        shortened: this.dayShortened,
        lock: null,
      };
      // Gardiyan kendi seçtiği kilidi görür (gizli).
      if (me && me.alive && me.role === ROLE.JAILER) {
        view.day.lock = { targetId: this.dayLock, lastTargetId: this.lastLockTarget };
      }
    }
    return view;
  }

  // Gece görünümü: sadece izleyicinin rolünün bildikleri. Seçimler kesin olduğu için
  // gözcünün canlı bilgisi (gelenler, ev sahibinin gidişi) güvenle gönderilebilir.
  nightViewFor(me) {
    const base = {
      mySelection: null, team: [], framer: null, teamTarget: null,
      locked: this.isLockedIn(me.id),
      canAct: this.canActAtNight(me.id),
      bounced: this.trips.some((t) => t.actorId === me.id && t.blocked),
    };
    switch (me.role) {
      case ROLE.VAMPIRE:
      case ROLE.FRAMER: {
        const active = this.teamTargetActive();
        const target = active ? this.teamTarget.targetId : null;
        const went = new Set(this.trips.filter((t) => t.kind === 'kill').map((t) => t.actorId));
        const setter = active ? this.players.get(this.teamTarget.by) : null;
        return {
          ...base,
          mySelection: me.role === ROLE.VAMPIRE ? target : this.nightFrame,
          team: [...this.players.values()].filter((p) => p.alive && p.role === ROLE.VAMPIRE).map((p) => ({
            vampId: p.id, name: p.name, targetId: went.has(p.id) ? target : null,
          })),
          teamTarget: active ? { targetId: target, by: setter.id, byName: setter.name } : null,
          framer: this.nightFrame,
        };
      }
      case ROLE.DOCTOR: return { ...base, mySelection: this.nightDoctor };
      case ROLE.SEER: return { ...base, mySelection: this.nightSeer };
      case ROLE.WATCHER:
        return {
          ...base,
          mySelection: this.nightWatch,
          watch: this.nightWatch ? this.watchInfo(this.nightWatch, me.id, this.eventIs('ruzgar')) : null,
        };
      case ROLE.WITCH:
        return {
          ...base,
          witch: {
            heal: this.nightWitch.heal,
            poison: this.nightWitch.poison,
            healUsed: this.witchUsed.heal,
            poisonUsed: this.witchUsed.poison,
            victims: this.vampireTargets(),
          },
        };
      case ROLE.JAILER:
        return { ...base, mySelection: this.nightLock && this.nightLock.by === me.id ? this.nightLock.targetId : null };
      default:
        return null;
    }
  }
}

module.exports = {
  Room, ROLE, SLEEP, MIN_PLAYERS, MAX_PLAYERS, FRAMER_MIN_PLAYERS, SPECIAL_ROLES, OPTIONAL_ROLES,
  DEFAULT_ROLES, ROLE_LABEL, COLOR_COUNT, HAT_COUNT, SKIN_COUNT, PLAZA, MOVE_PHASES,
  REVEAL_MS, ALL_VOTED_MS, HUNTER_MS, NIGHT_WALK_MS, TRIAL_TURN_MS, TRIAL_VOTE_MS, TRIAL_ALL_VOTED_MS,
  EVENTS, EVENT_MODES, EVENT_GAP, EVENT_CHANCE, chooseEvent, LOBBY_GRACE_MS, EMPTY_ROOM_MS,
  LOG_MAX, SCENES,
  vampireCount, assignRoles, rolesFor, winnerOf, tally, normalizeSettings, teamOf, isEvil, clampToPlaza,
};
