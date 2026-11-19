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
const { HOUSES, HOUSE_COUNT, HOUSE_MATS, HOUSE_MAT_COUNT, canUseHouse, canUseHouseMat, houseMatLockMessage, canUseItem, lockMessage } = require('./lib/houses');   // ev görünümleri (look.house), ev malzemeleri (look.houseMat) ve kilitli öğeler
const { HAT_ITEMS, ACC_ITEMS, TOP_ITEMS, BOTTOM_ITEMS, GEAR_ITEMS, resolveLook, skinBlock, OPTIONAL_FIELDS } = require('./lib/cosmetics');   // yuva (slot) kuralları
const { Banter, isOwnerName } = require('./lib/banter');   // lobi/oyun sonu muhabbeti (şablonlu, modelsiz)
const Weather = require('./public/weather-core');   // hava durumu (yalnızca görsel/ses): seçim ve şimşek tohumu
const { GameRecorder } = require('./lib/ai/gamerec');   // oyun geçmişi kaydı (docs/GAME-LOGS.md)

const ROLE = {
  VAMPIRE: 'vampir',
  DOCTOR: 'doktor',
  SEER: 'kahin',
  WATCHER: 'gozcu',
  JAILER: 'gardiyan',
  WITCH: 'cadi',
  HUNTER: 'avci',
  MAYOR: 'muhtar',
  JESTER: 'soytari',
  MAD: 'deli',
  THIEF: 'hirsiz',
  VILLAGER: 'koylu',
};

// Oda sahibinin açıp kapatabildiği köy/soytarı rolleri. Oyuncu sayısı yetmezse bu sıraya göre eklenir.
const SPECIAL_ROLES = [ROLE.DOCTOR, ROLE.SEER, ROLE.WATCHER, ROLE.JAILER, ROLE.WITCH, ROLE.HUNTER, ROLE.MAYOR, ROLE.JESTER, ROLE.MAD, ROLE.THIEF];
// Vampir yetenekleri (V2-PLAN §22): iftiracı ve temizlikçi artık rol değil; oyun başında bir vampire verilen
// yeteneklerdir. Odadaki iki anahtar (settings.roles.iftiraci / temizlikci; saklı ayarlar bozulmasın diye eski adlar)
// yetenek anahtarıdır. Her gece her vampir: öldür (varsayılan) ya da yeteneği varsa iftira / temizlik.
const ABILITY = { FRAME: 'iftira', CLEAN: 'temizlik' };
const ABILITIES = [ABILITY.FRAME, ABILITY.CLEAN];
const ABILITY_TOGGLE = { [ABILITY.FRAME]: 'iftiraci', [ABILITY.CLEAN]: 'temizlikci' };   // yetenek -> settings.roles anahtarı
const ABILITY_KIND = { [ABILITY.FRAME]: 'frame', [ABILITY.CLEAN]: 'clean' };             // yetenek -> gece eylemi
const ABILITY_LABEL = { [ABILITY.FRAME]: 'iftira yeteneği', [ABILITY.CLEAN]: 'temizlik yeteneği' };
// Ayarlarda açılıp kapatılabilen her şey: özel roller ve iki yetenek anahtarı.
const OPTIONAL_ROLES = [...SPECIAL_ROLES, ...ABILITIES.map((a) => ABILITY_TOGGLE[a])];

const ROLE_LABEL = {
  [ROLE.VAMPIRE]: 'Vampir',
  [ROLE.DOCTOR]: 'Doktor',
  [ROLE.SEER]: 'Kahin',
  [ROLE.WATCHER]: 'Gözcü',
  [ROLE.JAILER]: 'Gardiyan',
  [ROLE.WITCH]: 'Cadı',
  [ROLE.HUNTER]: 'Avcı',
  [ROLE.MAYOR]: 'Muhtar',
  [ROLE.JESTER]: 'Soytarı',
  [ROLE.MAD]: 'Deli',
  [ROLE.THIEF]: 'Hırsız',
  [ROLE.VILLAGER]: 'Köylü',
};

const MIN_PLAYERS = 5;
const MAX_PLAYERS = 20;
const ABILITY_MIN_PLAYERS = 7;   // vampir yetenekleri ancak bu kadar oyuncu varsa verilir
const THIEF_MIN_PLAYERS = 7;     // hırsız ancak bu kadar oyuncu varsa dağıtılır
// Delinin kendini sandığı rol bunlardan biridir (odada açık olanlardan; hiçbiri açık değilse kahin).
const MAD_FAKE_ROLES = ['doktor', 'kahin', 'gozcu', 'gardiyan'];
const REVEAL_MS = 8000;          // rol kartlarına bakma süresi
const ALL_VOTED_MS = 10000;      // herkes oy verince kalan süre buna iner
const HUNTER_MS = 20000;         // avcının son atışı süresi
const NIGHT_WALK_MS = 4000;      // gece başında herkesin evine yürüme süresi; gece sayacı bundan sonra başlar
const NIGHT_SHOW_MS = 20000;     // gecenin gösterim aşaması: çözülen gece herkese kendi gözünden oynatılır (yürüyüşler doğal tempoda)
const NIGHT_RESULT_MS = 14000;   // gösterim başladıktan bu kadar sonra özel sonuç duyuruları gider (ilgili sahneler bittikten sonra)
const DECOY_OPPOSITE_SHARE = 1 / 2; // kahinin şaşırtmacası bu olasılıkla karşı taraftan (§16.4)
const PICK_GRACE_MS = 1500;      // herkes seçtiyse/beklediyse seçim aşaması bu kadar sonra biter
const RANDOM_VILLAGER_SHARE = 0.2; // rastgele dağıtımda sade köylü payı
const TRIAL_TURN_MS = 15000;     // mahkemede her sanığın savunma süresi
const TRIAL_VOTE_MS = 20000;     // mahkemede iki sanık arasındaki yeniden oylama süresi
const TRIAL_ALL_VOTED_MS = 3000; // herkes oy verince mahkeme oylaması bu kadar sonra sonuçlanır
const LOBBY_GRACE_MS = 120000;   // lobide/oyun sonunda bağlantısı kopan oyuncu bu süre sonunda çıkarılır
const HOST_GRACE_MS = 60000;     // oda sahibi bu kadar süre kesintisiz bağlı değilse yetki başkasına geçer
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
const HAT_COUNT = HAT_ITEMS.length;
const SKIN_COUNT = 12;
// Aksesuar (bıyık, gözlük…), üst giysi (top), alt giysi (bottom): isteğe bağlı alanlar, 0 = yok/modelin kendi giysisi.
// 0 ise look'ta hiç tutulmaz (eski kayıtlarla aynı biçim). Tablolar ve yuva (slot) kuralları: lib/cosmetics.js.
const ACC_COUNT = ACC_ITEMS.length;   // 6 = kral tacı: yalnızca sahip hesap (lib/houses.js KING_ACC)
const TOP_COUNT = TOP_ITEMS.length;
const BOTTOM_COUNT = BOTTOM_ITEMS.length;
const GEAR_COUNT = GEAR_ITEMS.length;   // teçhizat (sırt/bel: kalkan, kılıç, sadak, sancak...)
const ITEM_COUNTS = { hat: HAT_COUNT, acc: ACC_COUNT, top: TOP_COUNT, bottom: BOTTOM_COUNT, gear: GEAR_COUNT };
const ITEM_FIELDS = Object.keys(ITEM_COUNTS);
// Puan/sahiplik istemeyen öğeler (botlar ve rastgele görünüm bunlardan seçer).
const freeItems = (list) => list.map((it, i) => i).filter((i) => i > 0 && !list[i].min && !list[i].owner);

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
  [ROLE.MAD]: false,
  [ROLE.THIEF]: false,
  iftiraci: false,    // iftira yeteneği
  temizlikci: false,  // temizlik yeteneği
};
const EVENT_MODES = ['off', 'some', 'often'];
const ROLE_MODES = ['random', 'all'];
const VAMPIRE_SETTINGS = ['auto', 1, 2, 3, 4];   // oda ayarı: vampir sayısı ('auto' = oyuncu sayısına göre)
const DEFAULT_SETTINGS = { nightSec: 20, daySec: 120, revealRoles: true, events: 'off', roleMode: 'random', vampires: 'auto', smartBots: true, botModel: 'haiku', weather: true, roles: DEFAULT_ROLES };
const BOT_MODELS = ['haiku', 'hybrid', 'sonnet'];   // 'hybrid' ve 'sonnet' yalnızca sahip hesap (lib/banter.js PEOPLE.owner) tarafından seçilebilir
// 'hybrid' (Karma) odada Sonnet'e giden gerçek roller; diğer botlar Haiku ile çalışır.
const HYBRID_SONNET_ROLES = new Set([ROLE.VAMPIRE, ROLE.WATCHER, ROLE.DOCTOR]);

// Gece seçimi olan roller ve tipide evden çıkamayan köy rolleri.
const NIGHT_ACTION_ROLES = new Set([ROLE.VAMPIRE, ROLE.DOCTOR, ROLE.SEER, ROLE.WATCHER, ROLE.WITCH, ROLE.THIEF]);
const FINAL_ERROR = 'Seçimini yaptın; gece seçimleri kesindir.';
const SHOW_ERROR = 'Seçim süresi doldu; gece oynanıyor.';
const PASSED_ERROR = 'Bu gece beklemeye karar verdin; seçim kesindir.';
const NO_PASS_ERROR = 'Bu gece yapacak bir seçimin kalmadı.';

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

// Vampir sayısı ayarı: 'auto' ya da 1–4 (sayı ya da "1".."4"); başka her şey 'auto'.
function normalizeVampires(value) {
  const n = typeof value === 'string' && /^[1-4]$/.test(value) ? Number(value) : value;
  return VAMPIRE_SETTINGS.includes(n) ? n : DEFAULT_SETTINGS.vampires;
}

function normalizeSettings(raw = {}) {
  const rawRoles = raw.roles && typeof raw.roles === 'object' ? raw.roles : {};
  const roles = {};
  for (const r of OPTIONAL_ROLES) {
    roles[r] = rawRoles[r] === undefined ? DEFAULT_ROLES[r] : Boolean(rawRoles[r]);
  }
  return {
    nightSec: clampInt(raw.nightSec, 10, 60, DEFAULT_SETTINGS.nightSec),
    daySec: clampInt(raw.daySec, 30, 300, DEFAULT_SETTINGS.daySec),
    revealRoles: raw.revealRoles === undefined ? DEFAULT_SETTINGS.revealRoles : Boolean(raw.revealRoles),
    events: EVENT_MODES.includes(raw.events) ? raw.events : DEFAULT_SETTINGS.events,
    roleMode: ROLE_MODES.includes(raw.roleMode) ? raw.roleMode : DEFAULT_SETTINGS.roleMode,
    vampires: normalizeVampires(raw.vampires),
    // Akıllı botlar (sunucuda API anahtarı varsa; V2-PLAN §17). Varsayılan açık; anahtar yoksa etkisiz.
    smartBots: raw.smartBots === undefined ? DEFAULT_SETTINGS.smartBots : Boolean(raw.smartBots),
    botModel: BOT_MODELS.includes(raw.botModel) ? raw.botModel : DEFAULT_SETTINGS.botModel,
    // Hava olayları (yağmur/fırtına): yalnızca görsel ve ses, oyun kuralını değiştirmez. Varsayılan açık.
    weather: raw.weather === undefined ? DEFAULT_SETTINGS.weather : Boolean(raw.weather),
    roles,
  };
}

function enabledSpecials(settings) {
  return OPTIONAL_ROLES.filter((r) => settings.roles[r]);
}

function teamOf(role) {
  if (role === ROLE.VAMPIRE) return ROLE.VAMPIRE;
  if (role === ROLE.JESTER) return ROLE.JESTER;
  // Hırsız çalana kadar tarafsızdır (eşitlikte köy tarafı sayılmaz ama kazanamaz da).
  if (role === ROLE.THIEF) return ROLE.THIEF;
  return ROLE.VILLAGER;
}

// Vampir takımı: vampirler (yetenekler rol değildir).
function isEvil(role) {
  return teamOf(role) === ROLE.VAMPIRE;
}

// Vampir sayısı. 'auto': 1 (10'dan az), 2 (10+), 3 (15+). Sayı verilirse köy çoğunlukta kalsın diye
// [1, floor((oyuncu−1)/2)] aralığına sıkıştırılır (5 kişide en fazla 2, 8'de 3 …).
function vampireCount(playerCount, setting = 'auto') {
  if (Number.isInteger(setting) && setting > 0) {
    return Math.max(1, Math.min(setting, Math.floor((playerCount - 1) / 2)));
  }
  if (playerCount >= 15) return 3;
  if (playerCount >= 10) return 2;
  return 1;
}

const RESERVED_VILLAGER_BELOW = 8;   // bu sayının altında en az bir sade köylü ayrılır

// Dağıtım planı ('all'): sabit roller ve rastgele kısmı. Özel roller sığıyorsa hepsi sabittir; sığmıyorsa
// hangilerinin çıkacağı oyun başına rastgele seçilir (pool = { pick, from }). Yetenekler rol dağıtımına karışmaz.
function rolePlan(count, specials = [ROLE.DOCTOR], vampireSetting = 'auto') {
  const vampires = vampireCount(count, vampireSetting);
  const village = SPECIAL_ROLES.filter((r) => specials.includes(r)
    && !(r === ROLE.THIEF && count < THIEF_MIN_PLAYERS));
  const slots = Math.max(0, count - vampires - (count < RESERVED_VILLAGER_BELOW ? 1 : 0));
  const base = Array(vampires).fill(ROLE.VAMPIRE);
  if (village.length <= slots) return { base, fixed: village, pool: null, slots };
  return { base, fixed: [], pool: slots > 0 ? { pick: slots, from: village } : null, slots };
}

// Açık köy özel rollerinden `slots` tanesini rastgele seçer (hepsi sığıyorsa hepsi);
// kahin/gözcüden en az biri (açıksa) her zaman çıkar. Dağıtım sırasıyla döner.
function drawSpecials(village, slots, rng) {
  if (village.length <= slots) return village;
  if (slots <= 0) return [];
  const must = village.filter((r) => r === ROLE.SEER || r === ROLE.WATCHER);
  const picked = [];
  if (must.length) picked.push(must[rng(must.length)]);
  const rest = village.filter((r) => !picked.includes(r));
  for (let i = rest.length - 1; i > 0; i--) {
    const j = rng(i + 1);
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  picked.push(...rest.slice(0, slots - picked.length));
  return SPECIAL_ROLES.filter((r) => picked.includes(r));
}

// Rastgele dağıtım ('random') planı: vampirler oyuncu sayısına göre; sade köylü = max(1, round(oyuncu × 0.2));
// kalan yerler açık köy özel rollerinden rastgele.
function randomPlan(count, specials, vampireSetting = 'auto') {
  const vampires = vampireCount(count, vampireSetting);
  const villagers = Math.max(1, Math.round(count * RANDOM_VILLAGER_SHARE));
  const village = SPECIAL_ROLES.filter((r) => specials.includes(r)
    && !(r === ROLE.THIEF && count < THIEF_MIN_PLAYERS));
  const slots = Math.max(0, count - vampires - villagers);
  return { vampires, villagers, village, slots };
}

// Oyuncu sayısına göre dağıtılacak roller.
// 'all': 8'den az kişide bir sade köylü ayrılır; özel roller sığmazsa rastgele seçilir (kahin/gözcüden biri kesin).
// 'random': bkz. randomPlan.
function rolesFor(count, specials = [ROLE.DOCTOR], rng = crypto.randomInt, mode = 'all', vampireSetting = 'auto') {
  if (mode === 'random') {
    const plan = randomPlan(count, specials, vampireSetting);
    const list = Array(plan.vampires).fill(ROLE.VAMPIRE);
    list.push(...drawSpecials(plan.village, plan.slots, rng));
    while (list.length < count) list.push(ROLE.VILLAGER);
    return list.slice(0, count);
  }
  const plan = rolePlan(count, specials, vampireSetting);
  const chosen = plan.pool ? drawSpecials(plan.pool.from, plan.pool.pick, rng) : plan.fixed;
  const list = [...plan.base, ...chosen];
  while (list.length < count) list.push(ROLE.VILLAGER);
  return list;
}

// Lobi önizlemesi: deterministik, oyunun gerçek çekilişini asla göstermez.
// distribution = her çekilişte kesin dağıtılan roller; rolePool = geri kalan `pick` yer: `from`'dan çıkabilecek
// özel roller; dolmayan yer köylü olur.
function distributionFor(count, specials = [ROLE.DOCTOR], mode = 'all', vampireSetting = 'auto') {
  if (mode === 'random') {
    const { vampires, villagers, village, slots } = randomPlan(count, specials, vampireSetting);
    let sure;
    if (village.length <= slots) sure = village;
    else {
      const must = village.filter((r) => r === ROLE.SEER || r === ROLE.WATCHER);
      sure = must.length === 1 && slots >= 1 ? must : [];
    }
    const koylu = villagers + (village.length <= slots ? slots - village.length : 0);
    const list = [...Array(vampires).fill(ROLE.VAMPIRE), ...sure, ...Array(koylu).fill(ROLE.VILLAGER)].slice(0, count);
    const open = count - list.length;
    return {
      distribution: list,
      rolePool: open > 0 ? { pick: open, from: village.filter((r) => !sure.includes(r)) } : null,
    };
  }
  const { base, fixed, pool } = rolePlan(count, specials, vampireSetting);
  const list = [...base, ...fixed];
  const target = count - (pool ? pool.pick : 0);
  while (list.length < target) list.push(ROLE.VILLAGER);
  return { distribution: list, rolePool: pool ? { ...pool } : null };
}

// Vampir yetenekleri: her açık yetenek (7+ oyuncuda) ayrı bir rastgele vampire gider; vampir sayısından fazla
// yetenek düşer (tek vampir ve iki yetenek açıksa ona rastgele biri verilir). Saf fonksiyon: [vampirId, yetenek] listesi.
function dealAbilities(vampireIds, specials, playerCount, rng = crypto.randomInt) {
  if (playerCount < ABILITY_MIN_PLAYERS || !vampireIds.length) return [];
  const abilities = ABILITIES.filter((a) => specials.includes(ABILITY_TOGGLE[a]));
  const mix = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) { const j = rng(i + 1); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const vamps = mix(vampireIds);
  return mix(abilities).slice(0, vamps.length).map((a, i) => [vamps[i], a]);
}

// Kahinin şaşırtmaca rolü için: bu oyunda bulunabilecek roller (köylü ve vampir dahil, deli hariç –
// deli kahine kendini sandığı rol olarak görünür).
function possibleRoles(count, settings) {
  const out = [ROLE.VAMPIRE, ROLE.VILLAGER];
  for (const r of SPECIAL_ROLES) {
    if (!settings.roles[r] || r === ROLE.MAD) continue;
    if (r === ROLE.THIEF && count < THIEF_MIN_PLAYERS) continue;
    out.push(r);
  }
  return out;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = crypto.randomInt(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function assignRoles(ids, specials = [ROLE.DOCTOR], rng = crypto.randomInt, mode = 'all', vampireSetting = 'auto') {
  const shuffled = shuffle([...ids]);
  const list = rolesFor(ids.length, specials, rng, mode, vampireSetting);
  const roles = new Map();
  shuffled.forEach((id, i) => roles.set(id, list[i]));
  return roles;
}

// Vampir takımı (yaşayan vampirler) yaşayan diğer herkese sayıca eşit ya da fazlaysa kazanır;
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
  for (const r of [ROLE.VAMPIRE, ...SPECIAL_ROLES, ROLE.VILLAGER]) {
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
  // dealRng: testlerde rol dağıtımının tohumlu üreteci (crypto.randomInt gibi: n -> 0..n-1).
  // seerRng: testlerde kahinin şaşırtmaca rolünün tohumlu üreteci (Math.random gibi).
  constructor({
    id, name, password, settings, hooks, storySeed = null, botRng = Math.random, eventRng = Math.random, weatherRng = Math.random,
    dealRng = crypto.randomInt, seerRng = null, ai = null, banterRng = Math.random, people = null,
  }) {
    this.dealRng = dealRng;
    this.weatherRng = weatherRng;
    this.weather = null;         // { kind: 'clear'|'rain'|'storm', seed, since }: faz başında sunucu seçer (null = açık)
    this.seerRng = seerRng || (() => this.rand());
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
    // ai: akıllı botların API istemcisi (lib/ai/client.js AiClient) ya da null (yalnızca rastgele botlar).
    this.ai = ai;
    this.bots = new BotBrain(this, { rng: botRng, ai });
    // Lobi ve oyun sonu muhabbeti: olaylarla tetiklenen şablonlar; kendi rastgele üreteci vardır (oyunu etkilemez).
    this.banter = new Banter(this, { rng: banterRng, people, minPlayers: MIN_PLAYERS });
    this.botRng = botRng;
    this.eventRng = eventRng;
    this.recorder = new GameRecorder(this);
    this.resetGame();
  }

  resetGame() {
    this.frameMark = null;       // { targetId, round }: gece N iftirası (gün N sonuna kadar)
    this.cleanMark = null;       // { targetId, round }: gece N temizliği (gün N sonuna kadar)
    this.round = 0;
    this.deadline = null;
    this.timerFrom = null;
    this.winner = null;
    this.winners = [];
    this.log = [];
    this.resetNight();
    this.witchUsed = { heal: false, poison: false };
    this.madDayLock = new Map();  // sahte gardiyan (deli) gündüz seçimi
    this.madLastLock = new Map(); // sahte gardiyanın dünkü kapısı
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
    this.seerPairs = new Map(); // `${kahinId}:${hedefId}` -> şaşırtmaca rol (sahte kahinde iki rol); oyun boyunca sabit
    this.gameSize = 0;
    for (const p of this.players.values()) {
      p.role = null;
      p.alive = true;
      p.notes = [];
      p.hanged = false;
      p.job = null;
      p.fakeRole = null;
      p.ability = null;       // vampir yeteneği: 'iftira' | 'temizlik' | null (yalnızca kendisi ve vampir takımı bilir)
      p.stolen = null;
      p.roleHidden = false;   // false | 'hirsiz' (soyuldu) | 'temizlikci' (izler silindi): oyun sonuna kadar gizli
      p.shownRole = null;     // iftira tuttuysa herkese görünen sahte rol ('vampir'); oyun sonunda gerçek açılır
      p.framedReveal = false;
      p.cleaned = false;
      if (p.ghostPos) p.pos = p.ghostPos;
      p.ghostPos = null;
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
    return p && this.settings.revealRoles && !p.roleHidden ? this.publicRoleOf(p) : null;
  }

  // Herkese açıklanan rol: iftira tuttuysa 'vampir', yoksa gerçek rol. Kurallar hep gerçek rolü kullanır.
  publicRoleOf(p) {
    return p.shownRole || p.role;
  }

  // İftira (§16.1): gece N'nin iftirası, o gece (her sebeple) ölen ya da gün N'de oyla elenen kişiyi
  // herkese 'vampir' gösterir (oda rolleri açıklıyorsa). İstisnalar: avcı (son atışı gerçeği söyler),
  // asılan soytarı, rolü gizli kalan (soyulan/temizlenen) ölü.
  applySlander(p) {
    const f = this.frameMark;
    if (!this.settings.revealRoles || !f || f.targetId !== p.id || f.round !== this.round) return;
    if (p.roleHidden || [ROLE.HUNTER, ROLE.JESTER, ROLE.VAMPIRE].includes(p.role)) return;
    p.shownRole = ROLE.VAMPIRE;
    p.framedReveal = true;
  }

  // Temizlik (§21): gece N'de temizlenen kişi o gece ölürse ya da gün N'de asılırsa rolü oyun sonuna kadar gizli kalır
  // (izler silinmiş). Asılan soytarı yine de herkese açıktır; avcının son atışı rolünü açıklar (startHunter).
  applyClean(p) {
    const c = this.cleanMark;
    if (!c || c.targetId !== p.id || c.round !== this.round || p.roleHidden) return;
    p.roleHidden = 'temizlikci';
    p.cleaned = true;
  }

  // Ölünün rol eki (' Rolü: X.' / gizli metinler / '').
  deathRoleText(p) {
    if (!this.settings.revealRoles) return '';
    if (p.roleHidden === 'temizlikci') return ' Rolü bilinmiyor; izler silinmiş.';
    if (p.roleHidden) return ' Rolü bilinmiyor; çalındı.';
    return ` Rolü: ${ROLE_LABEL[this.publicRoleOf(p)]}.`;
  }

  // Oyun geçmişi kaydı (lib/ai/gamerec.js): akıllı bot olsun olmasın her oyun; hiçbir hata oyunu etkilemez.
  rec(method, ...args) {
    try {
      this.recorder[method](...args);
    } catch (err) {
      if (!this.recWarned) { this.recWarned = true; console.error(`[${this.id}] Oyun kaydı hatası (${method}):`, err && err.message ? err.message : err); }
    }
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
    // Kayıtlı görünüm puanla doğrulanmış gelir (server.js profileLook); burada yalnızca sahibe özel öğeler denetlenir.
    // Sahibe özel görünümler (kral tacı, saray, kraliyet kaftanı) başkasında düşürülür.
    const who = { username: name, points: Infinity };   // botlar "Bot ..." adıyla gelir: sahip sayılmaz
    const freeHats = [0, ...freeItems(HAT_ITEMS)];
    const hat = validIndex(want.hat, HAT_COUNT) && canUseItem('hat', want.hat, who) ? want.hat : freeHats[crypto.randomInt(freeHats.length)];
    const skin = validIndex(want.skin, SKIN_COUNT) ? want.skin : crypto.randomInt(SKIN_COUNT);
    const opt = {};
    for (const f of OPTIONAL_FIELDS) {
      const v = want[f];
      if (validIndex(v, ITEM_COUNTS[f]) && v > 0 && canUseItem(f, v, who)) opt[f] = v;
    }
    const house = validIndex(want.house, HOUSE_COUNT) && canUseHouse(want.house, who) ? want.house : 0;
    const houseMat = validIndex(want.houseMat, HOUSE_MAT_COUNT) && canUseHouseMat(want.houseMat, who) ? want.houseMat : 0;
    // Yuva çakışmaları (ör. şapka + kral tacı, sakallı karakter + sakal) eski kayıtlarda da burada giderilir.
    const fixed = resolveLook({ color, hat, skin, ...opt, ...(house ? { house } : {}), ...(houseMat ? { houseMat } : {}) }).look;
    this.players.set(id, {
      id, name, userId, bot: Boolean(bot), seat: this.freeSeat(), role: null, job: null, alive: true, connected: true, left: false,
      socketId: null, graceTimer: null, notes: [],
      look: fixed,
      pos: spawnSpot(),
    });
    if (!this.hostId && !bot) this.hostId = id;
    if (!bot) this.clearEmptyTimer();
    this.addLog(`${name} odaya katıldı.`, 'info');
    this.changed();
    if (!bot) this.banterDo((b) => b.playerJoined(id));
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
    // Botlar köyde rastgele AÇIK (puansız/ucuz) bir ev görünümü alabilir; sahibe özel olan asla.
    const openHouses = HOUSES.map((h, i) => i).filter((i) => !HOUSES[i].owner && HOUSES[i].min <= 8);
    // Botlar puansız (açık) öğelerden rastgele giyinir: yarı yarıya aksesuar, üst ve alt giysi. Çakışan öğe addPlayer'da düşer.
    const look = { house: openHouses[crypto.randomInt(openHouses.length)] };
    // ev malzemesi: üçte bir olasılıkla ucuz bir malzeme (taş / kesme taş); sahibe özel asla
    const openMats = HOUSE_MATS.map((m, i) => i).filter((i) => i > 0 && !HOUSE_MATS[i].owner && HOUSE_MATS[i].min <= 12);
    if (openMats.length && crypto.randomInt(3) === 0) look.houseMat = openMats[crypto.randomInt(openMats.length)];
    for (const [f, list] of [['acc', ACC_ITEMS], ['top', TOP_ITEMS], ['bottom', BOTTOM_ITEMS], ['gear', GEAR_ITEMS]]) {
      const free = freeItems(list);
      if (free.length && crypto.randomInt(f === 'gear' ? 3 : 2) === 1) look[f] = free[crypto.randomInt(free.length)];
    }
    const error = this.addPlayer(id, name, { bot: true, look });
    if (error) return { error };
    this.banterDo((b) => b.botJoined(id));
    return { id };
  }

  // Muhabbet hatası oyunu asla bozmaz.
  banterDo(fn) {
    try { fn(this.banter); } catch (err) { console.error(`[${this.id}] Muhabbet hatası:`, err && err.message ? err.message : err); }
  }

  // Oda sahibi hesap lobide "müziği çal" düğmesine bastı (lib/banter.js playMusic).
  playEntrance(byId) {
    if (!this.isOwnerPlayer(byId)) return 'Bu düğmeyi sen kullanamazsın.';
    let err = null;
    this.banterDo((b) => { err = b.playMusic(byId); });
    return err;
  }

  // Oda sahibi hesap müziği kapattı (düğme ya da sohbet komutu).
  stopEntrance(byId) {
    if (!this.isOwnerPlayer(byId)) return 'Bu düğmeyi sen kullanamazsın.';
    let err = null;
    this.banterDo((b) => { err = b.stopMusic(byId); });
    return err;
  }

  // Sahip hesabın (lib/banter.js) odadaki koltuğu mu: güçlü bot zekâsı ayarını yalnızca o seçebilir.
  isOwnerPlayer(id) {
    const p = this.players.get(id);
    return Boolean(p && !p.bot && p.userId && isOwnerName(p.name, this.banter.people));
  }

  // Akıllı bot çağrılarının kademesi (lib/ai/config.js): oda ayarı botModel. 'hybrid'de çağrı başına botun
  // GERÇEK rolüne bakılır (hırsız çaldıktan sonra yeni rolü; kendini doktor sanan Deli 'deli' sayılır).
  botTier(botId) {
    const m = this.settings.botModel;
    if (m === 'haiku') return 'haiku';
    // Pahalı kademe yalnızca sahip hesap odadayken: sahip çıktıysa ya da ayar başka yoldan kaldıysa her bot Haiku.
    if (![...this.players.keys()].some((id) => this.isOwnerPlayer(id))) return 'haiku';
    if (m === 'sonnet') return 'sonnet';
    if (m !== 'hybrid') return 'haiku';
    const p = botId ? this.players.get(botId) : null;
    return p && HYBRID_SONNET_ROLES.has(p.role) ? 'sonnet' : 'haiku';
  }

  // Botun sohbet mesajı: insanlarla aynı kanal/evre kuralları (chat), gönderimi sunucu yapar.
  say(fromId, text) {
    const res = this.chat(fromId, text);
    if (res.error) return res.error;
    if (typeof this.hooks.chat === 'function') this.hooks.chat(this, res.recipients, res.message);
    this.observeChat(res.recipients, res.message);
    return null;
  }

  // Gönderilen her sohbet mesajı (insan ya da bot) alıcı koltuklardaki botlara da ulaşır (akıllı botlar).
  observeChat(recipients, message) {
    this.rec('chat', message);
    this.banterDo((b) => b.onChat(message));
    try {
      this.bots.observeChat(recipients, message);
    } catch (err) {
      console.error(`[${this.id}] Bot sohbeti işleyemedi:`, err && err.message ? err.message : err);
    }
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
    // Oda sahibi süre dolmadan döndü: yetki onda kalır.
    if (id === this.hostId) this.clearHostTimer();
    this.clearEmptyTimer();
    this.ensureHost();
    this.changed();
    this.banterDo((b) => b.playerConnected(id));
  }

  disconnect(id) {
    const p = this.players.get(id);
    if (!p) return;
    p.connected = false;
    p.socketId = null;
    if (id === this.hostId && !p.bot) {
      this.clearHostTimer();
      this.hostTimer = setTimeout(() => {
        this.hostTimer = null;
        if (this.closed) return;
        this.hostAwayExpired = true;
        this.ensureHost();
        this.changed();
      }, HOST_GRACE_MS);
    }
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
  // ent: { points } = bu oyuncunun sunucuda hesaplanmış puanı (ev görünümü eşikleri için); sahiplik adından bakılır.
  setLook(byId, look = {}, ent = {}) {
    const p = this.players.get(byId);
    if (!p) return 'Odada değilsin.';
    if (this.phase !== 'lobby' && this.phase !== 'ended') return 'Görünüm sadece lobide değiştirilebilir.';
    const who = { username: p.bot || !p.userId ? null : p.name, points: Number(ent.points) || 0 };
    const next = { ...p.look };
    if (look.color !== undefined) {
      const color = clampInt(look.color, 0, COLOR_COUNT - 1, p.look.color);
      const taken = [...this.players.values()].some((x) => x.id !== byId && !x.left && x.look.color === color);
      if (taken) return 'Bu renk başka bir oyuncuda.';
      next.color = color;
    }
    const changed = [];
    if (look.skin !== undefined) next.skin = clampInt(look.skin, 0, SKIN_COUNT - 1, p.look.skin);
    // Şapka/aksesuar/üst/alt/teçhizat: aralığa sıkıştırılır; kilitli (puan/sahip) değer reddedilir.
    for (const f of ITEM_FIELDS) {
      if (look[f] === undefined) continue;
      const v = clampInt(look[f], 0, ITEM_COUNTS[f] - 1, p.look[f] || 0);
      if (v !== (p.look[f] || 0) && !canUseItem(f, v, who)) {
        return f === 'acc' && ACC_ITEMS[v] && ACC_ITEMS[v].owner ? 'Bu aksesuar yalnızca sahibine özel.' : lockMessage(f, v);
      }
      if (f === 'hat') next.hat = v;
      else if (v) next[f] = v; else delete next[f];
      if (v !== (p.look[f] || 0)) changed.push(f);
    }
    // Karakterin kendi parçasıyla çakışan yeni öğe (ör. sakallı karaktere sakal) seçilemez.
    for (const f of changed) {
      const b = skinBlock(next.skin, f, next[f] | 0);
      if (b) return `Bu karakterin zaten ${b.what} var.`;
    }
    if (look.house !== undefined) {
      if (!Number.isInteger(look.house) || look.house < 0 || look.house >= HOUSE_COUNT) return 'Geçersiz ev görünümü.';
      if (!canUseHouse(look.house, who)) return HOUSES[look.house].owner ? 'Bu ev yalnızca sahibine özel.' : 'Bu ev görünümü henüz kilitli.';
      if (look.house) next.house = look.house; else delete next.house;
    }
    // Ev malzemesi (look.houseMat): ev görünümüyle aynı kural (puan eşiği / sahibe özel), 0 = evin kendi malzemesi.
    if (look.houseMat !== undefined) {
      if (!Number.isInteger(look.houseMat) || look.houseMat < 0 || look.houseMat >= HOUSE_MAT_COUNT) return 'Geçersiz ev malzemesi.';
      if (look.houseMat !== (p.look.houseMat | 0) && !canUseHouseMat(look.houseMat, who)) return houseMatLockMessage(look.houseMat);
      if (look.houseMat) next.houseMat = look.houseMat; else delete next.houseMat;
    }
    // Yuva çakışması: yeni seçilen öğe aynı yuvadaki eskisini çıkarır (ör. kral tacı -> şapka 0); karakter değişince
    // yeni karakterin kendi parçasıyla çakışan öğe çıkar.
    p.look = resolveLook(next, changed).look;
    this.changed();
    return null;
  }

  // Yaşayanlar sadece lobide ve oyun sonunda dolaşır; gündüz herkes yerinde durur. Ölüler (hayaletler)
  // oyun boyunca her evrede dolaşabilir: konumları (ghostPos) yalnızca ölülere gider, yaşayanlar ölünün
  // öldüğü andaki konumunu görür; oyun bitince herkes görür.
  move(byId, x, y) {
    const p = this.players.get(byId);
    if (!p) return 'Odada değilsin.';
    const ghost = this.inGame && !p.alive && !p.left;
    if (!MOVE_PHASES.includes(this.phase) && !ghost) return 'Şu an meydanda dolaşamazsın.';
    const fx = Number(x);
    const fy = Number(y);
    if (!Number.isFinite(fx) || !Number.isFinite(fy)) return 'Geçersiz konum.';
    if (ghost) p.ghostPos = clampToPlaza(fx, fy);
    else p.pos = clampToPlaza(fx, fy);
    this.changed('move');
    return null;
  }

  // Oda sahibi ayrılır, çıkarılır ya da HOST_GRACE_MS boyunca kesintisiz bağlı değilse yetki bağlı ilk
  // insana geçer. Kısa kopmalarda (telefon ekranı kapandı) yetki sahibinde kalır.
  ensureHost() {
    const host = this.players.get(this.hostId);
    if (host && !host.left && (host.connected || !this.hostAwayExpired)) return;
    const next = [...this.players.values()].find((p) => p.connected && !p.left && !p.bot);
    if (next && next.id !== this.hostId) {
      this.hostId = next.id;
      this.clearHostTimer();
      this.addLog(`${next.name} artık oda sahibi.`, 'info');
    } else if (!host) {
      this.hostId = next ? next.id : null;
      this.clearHostTimer();
    }
  }

  clearHostTimer() {
    clearTimeout(this.hostTimer);
    this.hostTimer = null;
    this.hostAwayExpired = false;
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
    this.rec('abandon');   // oyun sürerken herkes çıktıysa (en az bir gece) geçmişi yine de saklanır
    this.destroy();
    this.hooks.empty(this);
  }

  clearEmptyTimer() {
    clearTimeout(this.emptyTimer);
    this.emptyTimer = null;
  }

  destroy() {
    this.bots.close();
    this.banter.close();
    clearTimeout(this.timer);
    this.clearNightTimers();
    clearTimeout(this.hostTimer);
    this.clearEmptyTimer();
    for (const p of this.players.values()) clearTimeout(p.graceTimer);
  }

  // Oda sahibi lobide rol ayarlarını değiştirebilir.
  updateSettings(byId, raw = {}) {
    if (byId !== this.hostId) return 'Ayarları sadece oda sahibi değiştirebilir.';
    if (this.phase !== 'lobby') return 'Ayarlar sadece lobide değiştirilebilir.';
    // Güçlü bot zekâsı (pahalı) yalnızca sahip hesabın; başkası seçmeye çalışırsa tüm istek reddedilir.
    if ((raw.botModel === 'sonnet' || raw.botModel === 'hybrid') && !this.isOwnerPlayer(byId)) return 'Bu ayarı değiştirme yetkin yok.';
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
    const roles = assignRoles([...this.players.keys()], specials, this.dealRng, this.settings.roleMode, this.settings.vampires);
    for (const [id, role] of roles) this.players.get(id).role = role;
    this.gameSize = this.players.size;
    const vampIds = [...this.players.values()].filter((p) => p.role === ROLE.VAMPIRE).map((p) => p.id);
    for (const [id, ability] of dealAbilities(vampIds, specials, this.players.size, this.dealRng)) this.players.get(id).ability = ability;
    // Deli kendini odada açık olan gece rollerinden biri sanır (hiçbiri açık değilse kahin).
    const fakes = MAD_FAKE_ROLES.filter((r) => this.settings.roles[r]);
    for (const p of this.players.values()) {
      if (p.role === ROLE.MAD) p.fakeRole = fakes.length ? fakes[crypto.randomInt(fakes.length)] : ROLE.SEER;
    }
    this.rec('begin');

    // Günlük ve meslekler rollerden sonra kurulur ama rolleri hiç görmez.
    this.createStory();
    const n = this.narrate('start', {}, { title: 'Roller dağıtıldı', text: 'Kartına bak ve rolünü kimseye gösterme!' });
    const sc = n.scenario;
    this.scenario = sc && typeof sc.id === 'string' && sc.id
      ? { id: sc.id, name: typeof sc.name === 'string' ? sc.name : '', intro: cleanStory(sc.intro) }
      : null;

    // Host vampir sayısını seçtiyse gerçek sayı (gerekirse sıkıştırılmış) günlüğe yazılır; vampir sayısı zaten herkese açıktır.
    const asked = this.settings.vampires;
    const real = vampireCount(this.players.size, asked);
    const vampNote = asked === 'auto' ? '' : ` Vampir sayısı: ${real}${real < asked ? ` (istenen ${asked}; köy çoğunlukta kalsın diye en fazla ${real} olabildi)` : ''}.`;
    // Rastgele dağıtımda çekiliş gizli kalır: günlükte sadece oyuncu sayısı yazar.
    if (this.settings.roleMode === 'random') {
      this.addLog(`Oyun başladı: ${this.players.size} oyuncu. Roller rastgele dağıtıldı.${vampNote}`, 'info');
    } else {
      const summary = describeRoles([...this.players.values()].map((p) => p.role));
      this.addLog(`Oyun başladı: ${this.players.size} oyuncu (${summary}).${real < asked ? vampNote : ''}`, 'info');
    }
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
    this.rec('phase');
  }

  aliveWith(role) {
    return [...this.players.values()].find((p) => p.role === role && p.alive) || null;
  }

  // Gece seçimleri ve yolculuklar her gece sıfırlanır.
  resetNight() {
    this.vampActs = new Map();   // vampir -> { kind: 'kill' | 'frame' | 'clean', targetId }: her vampir kendi eylemini seçer
    this.lockTried = new Set();  // kilitli kapıdan dışarı çıkmaya çalışıp reddedilenler (kilidi ancak böyle öğrenirler)
    this.nightDoctor = null;
    this.nightSeer = null;
    this.nightWatch = null;
    this.nightFrame = null;
    this.nightClean = null;      // temizlik yeteneğinin bu geceki hedefi
    this.nightWitch = { heal: null, poison: null };
    this.nightLock = null;       // bu gece kilitli kapı { targetId, by }
    this.nightSteal = null;      // hırsızın bu geceki hedefi { by, targetId }
    this.trips = [];             // seçilen gece yolculukları { actorId, to, kind, blocked, at }
    this.nightPassed = new Set(); // bu gece "bekle" diyenler (night:pass)
    this.nightRes = null;        // gösterim aşamasının başında çözülen gece (bkz. resolveNight)
    // Deli: sahte rolünün seçimleri ayrı tutulur, gerçek etkisi yoktur.
    this.madPicks = new Map();   // deliId -> hedef (sahte doktor/kahin/gözcü)
    this.madNightLock = new Map(); // deliId -> sahte kilit hedefi (sahte gardiyan)
    this.clearNightTimers();
    this.night = null;           // { stage, walkUntil, pickUntil, pickUntilFull, showUntil, early }
  }

  clearNightTimers() {
    clearTimeout(this.walkTimer);
    clearTimeout(this.resultTimer);
    this.walkTimer = null;
    this.resultTimer = null;
  }

  // Oyuncunun kendini sandığı (ve her şeyini ona göre aldığı) rol: deli için sahte rol.
  actingRole(p) {
    return p && p.role === ROLE.MAD ? p.fakeRole : p && p.role;
  }

  // Delinin gerçek rolü açık mı (öldü ve roller açıklanıyor, ya da oyun bitti)?
  madRevealed(p) {
    return this.phase === 'ended' || (!p.alive && this.settings.revealRoles && !p.roleHidden);
  }

  // Sahte role göre gece seçimi (doktor/kahin/gözcü) – delide ayrı depodan.
  pickOf(p, role) {
    if (p.role === ROLE.MAD) return this.madPicks.get(p.id) || null;
    return { [ROLE.DOCTOR]: this.nightDoctor, [ROLE.SEER]: this.nightSeer, [ROLE.WATCHER]: this.nightWatch }[role] || null;
  }

  setPick(p, role, targetId) {
    if (p.role === ROLE.MAD) {
      this.madPicks.set(p.id, targetId);
      return;
    }
    if (role === ROLE.DOCTOR) this.nightDoctor = targetId;
    else if (role === ROLE.SEER) this.nightSeer = targetId;
    else if (role === ROLE.WATCHER) this.nightWatch = targetId;
  }

  rand() { return crypto.randomInt(1 << 30) / (1 << 30); }

  // Sahte gözcü için inandırıcı bir gece uydurur (gösterim başında): 0–2 rastgele yaşayan ziyaretçi,
  // ev sahibi bazen dışarı çıkar. Gerçek gözcünün bilgisiyle aynı biçimde (watchInfo).
  madWatchInfo(mad, targetId, dark) {
    const candidates = [...this.players.values()].filter((x) => x.alive && x.id !== targetId && x.id !== mad.id);
    const r = this.rand();
    const n = Math.min(candidates.length, r < 0.4 ? 0 : (r < 0.8 ? 1 : 2));
    const blocked = this.isLockedIn(targetId);
    const list = [];
    for (let i = 0; i < n; i++) list.push({ id: candidates.splice(crypto.randomInt(candidates.length), 1)[0].id, blocked });
    let ownerWent = null;
    if (targetId !== mad.id && !this.isLockedIn(targetId) && this.rand() < 0.35) {
      const dest = [...this.players.values()].filter((x) => x.alive && x.id !== targetId);
      if (dest.length) ownerWent = dest[crypto.randomInt(dest.length)].id;
    }
    return this.watchShape(targetId, list, ownerWent, Boolean(ownerWent), dark, this.rand() < 0.12);
  }

  watchShape(targetId, list, ownerWent, ownerOut, dark, saved = false) {
    const sorted = [...list].sort((a, b) => this.players.get(a.id).name.localeCompare(this.players.get(b.id).name, 'tr'));
    return {
      targetId,
      dark,
      visitors: dark ? sorted.map((v) => ({ id: null, blocked: v.blocked })) : sorted,
      count: sorted.length,
      blockedCount: sorted.filter((v) => v.blocked).length,
      ownerOut,
      ownerWent: ownerOut && !dark ? ownerWent : null,
      saved: Boolean(saved),
    };
  }

  eventIs(id) {
    return Boolean(this.event && this.event.id === id);
  }

  // Faz başında (gece/gündüz ayrı) hava seçer. Köy olayı sistemiyle karışmaz; tipi (kar fırtınası) varsa açık kalır.
  rollWeather() {
    const kind = Weather.choose({ enabled: this.settings.weather !== false, eventId: this.event && this.event.id, rng: this.weatherRng });
    this.weather = kind === 'clear' ? null : { kind, seed: Math.floor(this.weatherRng() * 4294967296) >>> 0, since: Date.now() };
  }

  weatherView() {
    return this.weather ? { ...this.weather } : { kind: 'clear', seed: 0, since: 0 };
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
    this.frameMark = null;       // gece N'nin iftirası gün N'nin sonuna kadar geçerlidir
    this.cleanMark = null;       // gece N'nin temizliği de (ölse ya da asılsa rolü gizli kalır)
    this.trial = null;

    // Gardiyanın gündüz seçtiği kilit gece başında uygulanır (gardiyan o an hayattaysa).
    const jailer = this.aliveWith(ROLE.JAILER);
    const lockTarget = jailer && this.dayLock ? this.players.get(this.dayLock) : null;
    this.nightLock = lockTarget && lockTarget.alive && lockTarget.id !== jailer.id
      ? { targetId: lockTarget.id, by: jailer.id } : null;
    this.lastLockTarget = this.nightLock ? this.nightLock.targetId : null;
    this.dayLock = null;
    // Sahte gardiyan (deli): kilidi kimseyi kilitlemez, sadece kendi görünümünde durur.
    for (const p of this.players.values()) {
      if (p.role !== ROLE.MAD || p.fakeRole !== ROLE.JAILER) continue;
      const t = p.alive ? this.players.get(this.madDayLock.get(p.id)) : null;
      const target = t && t.alive && t.id !== p.id ? t.id : null;
      if (target) this.madNightLock.set(p.id, target);
      this.madLastLock.set(p.id, target);
    }
    this.madDayLock = new Map();

    // Köy olayı: gece olayı hemen, gündüz olayı sabah etkinleşir.
    this.event = null;
    this.pendingDayEvent = null;
    const planned = this.scheduleEvent();
    if (planned && EVENTS[planned.id].phase === 'night') this.event = EVENTS[planned.id];
    else if (planned) this.pendingDayEvent = planned;

    this.rollWeather();
    const nightMs = this.eventIs('kisa-gece') ? Math.round(this.settings.nightSec * 500) : this.settings.nightSec * 1000;
    // Gece üç aşamalıdır: yürüyüş (eve dönüş, seçimler açık) → seçim (nightSec) → gösterim (NIGHT_SHOW_MS).
    // Görünen sayaç (timerFrom) yürüyüş bitince başlar; deadline seçimin sonu, gösterimde gösterimin sonu.
    this.setPhase('night', NIGHT_WALK_MS + nightMs, () => this.endPick());
    const now = Date.now();
    this.timerFrom = now + NIGHT_WALK_MS;
    this.night = {
      stage: 'walk', walkUntil: now + NIGHT_WALK_MS, pickUntil: this.deadline, pickUntilFull: this.deadline,
      showUntil: this.deadline + NIGHT_SHOW_MS, early: false,
    };
    // Yürüyüş bitince aşama 'pick' olur (durum yeniden gönderilir).
    this.walkTimer = setTimeout(() => {
      if (this.phase === 'night' && this.night && this.night.stage === 'walk') {
        this.night.stage = 'pick';
        this.changed();
      }
    }, NIGHT_WALK_MS);
    const n = this.narrate('night', { round: this.round },
      { title: `${this.round}. Gece`, text: 'Köy uyuyor... Gece rolleri seçimini yapsın.' });
    this.addLog(`${this.round}. gece başladı.`, 'night');
    this.storyLine(n.story);
    // Bir önceki gündüz olayının kapanış satırı (ayrı bir anlatı satırı).
    this.storyLine(cleanStory(n.eventEnd));
    this.announce('night', n.title, n.text, { story: n.story });
    if (this.event) this.announceEvent();

    // Kilitli evin sahibine önceden haber verilmez: kilidi ancak dışarı çıkmaya çalışınca (lockAttempt) ya da
    // biri kapıyı zorlayınca (rattled) öğrenir.
    this.changed();
  }

  // Bu oyuncu şu an bir gece seçimi yapabilir mi (görünüm ve botlar için)? Deli sahte rolüne göre.
  canActAtNight(id) {
    const p = this.players.get(id);
    const role = this.actingRole(p);
    if (this.phase !== 'night' || !p || !p.alive || !NIGHT_ACTION_ROLES.has(role)) return false;
    if (this.nightStage === 'show' || this.nightPassed.has(id)) return false;
    if (this.lockTried.has(id)) return false;   // kilitli ama kilidi henüz bilmeyen oyuncu normal biri gibi seçim yapabilir görünür
    if (this.eventIs('tipi') && !isEvil(role)) return false;
    switch (role) {
      case ROLE.VAMPIRE: return !this.vampActs.has(id);
      case ROLE.DOCTOR:
      case ROLE.SEER:
      case ROLE.WATCHER: return !this.pickOf(p, role);
      case ROLE.THIEF: return !this.nightSteal;
      case ROLE.WITCH:
        return (!this.witchUsed.heal && !this.nightWitch.heal) || (!this.witchUsed.poison && !this.nightWitch.poison);
      default: return false;
    }
  }

  // Gece seçimleri kesindir: onaylanan seçim değiştirilemez, geri alınamaz.
  // Deli sahte rolünün kurallarıyla ve aynı hata metinleriyle seçer; seçimi gerçek bir etki yaratmaz.
  selectNight(byId, targetId, action) {
    if (this.phase !== 'night') return 'Şu an gece değil.';
    const p = this.players.get(byId);
    const target = this.players.get(targetId);
    if (!p || !p.alive) return 'Ölüler seçim yapamaz.';
    const role = this.actingRole(p);
    if (role === ROLE.VILLAGER) return 'Köylüler gece seçim yapamaz.';
    if (role === ROLE.JAILER) return 'Gardiyan kilidini gündüz seçer; gece yapacağın bir şey yok.';
    if (!NIGHT_ACTION_ROLES.has(role)) return 'Bu rolün gece görevi yok, sabahı bekle.';
    if (this.nightStage === 'show') return SHOW_ERROR;
    if (this.eventIs('tipi') && !isEvil(role)) return 'Tipi var: bu gece köylüler evlerinden çıkamaz.';
    if (this.nightPassed.has(byId)) return PASSED_ERROR;
    if (!target || !target.alive) return 'Bu oyuncu seçilemez.';
    // Kilitli evden başka bir eve gidilemez (kendi evinde kalan seçimler: doktor kendini korur, gözcü kendi evini izler: sürer).
    if (this.isLockedIn(byId) && targetId !== byId) return this.lockAttempt(p);

    switch (role) {
      // Her vampir kendi eylemini seçer (V2-PLAN §22): öldür (varsayılan), ya da yeteneği varsa iftira / temizlik.
      // Seçtiği eve kendisi gider; iki vampir aynı kişiyi seçebilir (tek ölüm, ikisi de eve gider ve görülür).
      case ROLE.VAMPIRE: {
        const kind = action === 'frame' || action === 'clean' ? action : 'kill';
        if (kind !== 'kill' && p.ability !== (kind === 'frame' ? ABILITY.FRAME : ABILITY.CLEAN)) {
          return kind === 'frame' ? 'İftira yeteneğin yok.' : 'Temizlik yeteneğin yok.';
        }
        if (targetId === byId) return { kill: 'Vampir kendini seçemez.', frame: 'Kendine iftira atamazsın.', clean: 'Kendi izini silemezsin.' }[kind];
        if (isEvil(target.role)) {
          return { kill: 'Diğer vampirleri seçemezsin.', frame: 'Takım arkadaşına iftira atamazsın.', clean: 'Takım arkadaşının izini silemezsin.' }[kind];
        }
        if (this.vampActs.has(byId)) return FINAL_ERROR;
        this.vampActs.set(byId, { kind, targetId });
        if (kind === 'frame') this.nightFrame = targetId;
        if (kind === 'clean') this.nightClean = targetId;
        this.addTrip(byId, targetId, kind);
        break;
      }
      case ROLE.DOCTOR:
        if (this.pickOf(p, role)) return FINAL_ERROR;
        this.setPick(p, role, targetId);
        if (targetId !== byId) this.addTrip(byId, targetId, 'protect');
        break;
      case ROLE.SEER:
        if (targetId === byId) return 'Kendi geleceğine bakamazsın.';
        if (this.pickOf(p, role)) return FINAL_ERROR;
        this.setPick(p, role, targetId);
        this.addTrip(byId, targetId, 'inspect');
        break;
      case ROLE.WATCHER:
        if (this.pickOf(p, role)) return FINAL_ERROR;
        this.setPick(p, role, targetId);   // gözcü evin arkasından izler: içeri girmez, kilitten etkilenmez
        if (targetId !== byId) this.addTrip(byId, targetId, 'watch');
        break;
      case ROLE.THIEF:
        if (targetId === byId) return 'Kendinden çalamazsın.';
        if (this.nightSteal) return FINAL_ERROR;
        this.nightSteal = { by: byId, targetId };
        this.addTrip(byId, targetId, 'steal');
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
    this.rec('pick', p, role, targetId, action);
    this.changed();
    return null;
  }

  // Kilitli evin sahibi dışarı çıkmaya çalıştı: reddedilir ve KAYDEDİLİR (Gardiyanın sabah raporunda "ev sahibi de
  // çıkmak istedi" der). Oyuncu kilidi ilk kez burada öğrenir; bundan sonra seçim yapamaz (canAct false).
  lockAttempt(p) {
    const text = 'Kapın dışarıdan kilitlendi, bu gece evinden çıkamazsın.';
    if (!this.lockTried.has(p.id)) {
      this.lockTried.add(p.id);
      p.notes.push({ text: `🔒 ${this.round}. gece: ${text}`, ts: Date.now() });
      this.announce('locked', 'Kapın kilitli', text, { targets: [{ id: p.id }] }, [p.id]);
      this.changed();
    }
    return text;
  }

  // Seçilen bir eve gidiş. Kapı kilitliyse gösterimde kapıdan döner (eylemi etkisiz kalır); bunu
  // oyuncu gösterimde (show.trip.outcome 'bounced') ve 14 sn sonra 'bounced' duyurusuyla öğrenir.
  addTrip(actorId, to, kind) {
    const blocked = kind !== 'watch' && this.isLockedIn(to);
    this.trips.push({ actorId, to, kind, blocked, at: Date.now() });
  }

  get nightStage() {
    return this.phase === 'night' && this.night ? this.night.stage : null;
  }

  // "Bu gece bekle": seçim yapabilecek biri bu gece bir şey yapmamaya karar verir (kesin).
  passNight(byId) {
    if (this.phase !== 'night') return 'Şu an gece değil.';
    const p = this.players.get(byId);
    if (!p || !p.alive) return 'Ölüler seçim yapamaz.';
    const role = this.actingRole(p);
    if (role === ROLE.VILLAGER) return 'Köylüler gece seçim yapamaz.';
    if (role === ROLE.JAILER) return 'Gardiyan kilidini gündüz seçer; gece yapacağın bir şey yok.';
    if (!NIGHT_ACTION_ROLES.has(role)) return 'Bu rolün gece görevi yok, sabahı bekle.';
    if (this.nightStage === 'show') return SHOW_ERROR;
    if (this.eventIs('tipi') && !isEvil(role)) return 'Tipi var: bu gece köylüler evlerinden çıkamaz.';
    if (this.nightPassed.has(byId)) return PASSED_ERROR;
    if (!this.canActAtNight(byId)) return NO_PASS_ERROR;
    this.nightPassed.add(byId);
    this.rec('pass', p);
    this.changed();
    return null;
  }

  // Seçim aşamasında hâlâ karar vermesi beklenenler: yaşayan, kilitli olmayan, seçim yapabilecek ve
  // henüz seçmemiş/beklememiş oyuncular. Bağlantısı kopmuş insanlar beklenmez (gündüz oylamasındaki gibi).
  pendingActors() {
    return [...this.players.values()].filter((p) => p.alive && (p.bot || p.connected) && this.canActAtNight(p.id));
  }

  // Herkes seçtiyse/beklediyse seçim aşaması kısa bir payla (PICK_GRACE_MS) erken biter; biri yeniden
  // beklenir hâle gelirse (ör. oyuncu geri bağlandı) asıl süreye dönülür.
  checkPickDone() {
    const n = this.night;
    if (this.phase !== 'night' || !n || n.stage === 'show') return;
    const done = this.pendingActors().length === 0;
    const now = Date.now();
    let until = null;
    if (done && !n.early) {
      const at = Math.max(n.walkUntil, now + PICK_GRACE_MS);
      if (at >= n.pickUntilFull) return;
      n.early = true;
      until = at;
    } else if (!done && n.early) {
      n.early = false;
      until = n.pickUntilFull;
    } else return;
    n.pickUntil = until;
    n.showUntil = until + NIGHT_SHOW_MS;
    this.deadline = until;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.endPick(), Math.max(0, until - now));
  }

  // Seçim aşaması biter: gece çözülür, gösterim aşaması başlar. Ölümler sabah herkese açıklanır;
  // etkilenen oyuncular kendi gösterimlerini (state.night.show) hemen alır.
  endPick() {
    if (this.phase !== 'night' || !this.night || this.night.stage === 'show') return;
    clearTimeout(this.timer);
    this.clearNightTimers();
    const now = Date.now();
    this.night.stage = 'show';
    this.night.pickUntil = Math.min(this.night.pickUntil, now);
    this.night.showUntil = now + NIGHT_SHOW_MS;
    this.deadline = this.night.showUntil;
    this.resolveNight();
    this.timer = setTimeout(() => this.dawn(), NIGHT_SHOW_MS);
    this.resultTimer = setTimeout(() => this.sendNightResults(), NIGHT_RESULT_MS);
    this.changed();
  }

  // Geceyi hemen bitirir (testler ve yedek yol): gerekirse çözer, özel sonuçları gönderir, sabah olur.
  endNight() {
    if (this.phase !== 'night') return;
    if (this.nightStage !== 'show') this.endPick();
    if (this.phase !== 'night') return;
    this.sendNightResults();
    this.dawn();
  }

  tripOk(actorId, kind) {
    return this.trips.some((t) => t.actorId === actorId && t.kind === kind && !t.blocked);
  }

  // Vampirlerin o anki öldürme hedefleri (cadının gördüğü kurbanlar): benzersiz id listesi (vampir başına en çok bir).
  vampireTargets() {
    const out = [];
    for (const [vid, act] of this.vampActs) {
      const v = this.players.get(vid);
      const t = this.players.get(act.targetId);
      if (act.kind === 'kill' && v && v.alive && t && t.alive && !out.includes(t.id)) out.push(t.id);
    }
    return out;
  }

  // Gözcünün izlediği evle ilgili bildikleri (gerçekten olan yolculuklardan): gelenler (kapıdan
  // dönenler dahil, isme göre sıralı) ve ev sahibinin gidip gitmediği. Rüzgârda isimler yerine gölgeler.
  watchInfo(houseId, watcherId, dark, trips, saved = false) {
    const seen = new Map();
    for (const t of trips) {
      if (t.to !== houseId || t.kind === 'watch' || t.actorId === houseId || t.actorId === watcherId) continue;
      const blocked = t.outcome === 'bounced';
      if (!seen.has(t.actorId)) seen.set(t.actorId, { id: t.actorId, blocked });
      else if (!blocked) seen.get(t.actorId).blocked = false;
    }
    const ownerTrip = houseId === watcherId ? null : trips.find((t) => t.actorId === houseId && t.kind !== 'watch');
    return this.watchShape(houseId, [...seen.values()], ownerTrip ? ownerTrip.to : null, Boolean(ownerTrip), dark, saved);
  }

  // Gözcünün gördüğü evlerden (izlenen ev, ev sahibinin gittiği ev) bu gece ölüm çıkanlar.
  watchDeathAt(watch, deadIds) {
    return [watch.targetId, watch.ownerWent].filter((id, i, a) => id && a.indexOf(id) === i && deadIds.has(id));
  }

  // Geceyi çözer (gösterim aşamasının başında). Sıra:
  // 1. gardiyanın kilidi bütün gece geçerli (kilitli evin sahibi bir şey yapamaz, gelenler kapıdan döner);
  // 2. öldürmeler sırayla: vampirlerin ortak hedefi, sonra hırsız (vampirler onu öldürmediyse), sonra cadının
  //    zehri (cadı 2. adımda daha önce ölmediyse);
  // 3. doktorun koruması / cadının hayat iksiri, sahibi vampir saldırısında ölmediyse geçerlidir; koruma
  //    her öldürmeyi, iksir yalnızca vampir saldırısını durdurur;
  // 4. bu gece ölen hiç evden çıkmamıştır: öldürme dışındaki eylemi (bakma, izleme, iftira, kilit raporu,
  //    delinin sahte eylemleri; koruma/iksir için 3. kural) iptal olur – yolculuk yok, sonuç yok;
  // 5. yalnızca gerçekten olan eylemler yolculuk yaratır (gözcünün görebildiği).
  // Ölümler burada sadece belirlenir; herkese sabah (dawn) açıklanır.
  resolveNight() {
    const dark = this.eventIs('ruzgar');
    const P = (id) => this.players.get(id);
    const alive = (p) => Boolean(p && p.alive);
    const dies = new Map();        // id -> sebep, çözülme sırasıyla
    const home = new Map();        // ev sahibi -> [{ kind, result }] (o evde olanlar, sırayla; gelenler isimsiz)
    const homeAdd = (id, e) => { if (!home.has(id)) home.set(id, []); home.get(id).push(e); };
    const saved = new Map();       // koruyucu (doktor/cadı) -> kurtardığı kişi

    const doctor = this.aliveWith(ROLE.DOCTOR);
    const protectId = doctor && this.nightDoctor
      && (this.nightDoctor === doctor.id || this.tripOk(doctor.id, 'protect')) ? this.nightDoctor : null;
    const witch = this.aliveWith(ROLE.WITCH);
    const healId = witch && this.nightWitch.heal
      && (this.nightWitch.heal === witch.id || this.tripOk(witch.id, 'heal')) ? this.nightWitch.heal : null;
    const killedByVamp = (p) => Boolean(p && dies.get(p.id) === 'vampir');
    // Doktor vampir saldırısında öldüyse koruması (sonraki öldürmeler için) geçersiz; aynısı cadının iksiri için.
    const protects = (id) => Boolean(protectId && protectId === id && !killedByVamp(doctor));
    // Koruyan kendi evindeyse (kendini korudu) gösterimde ayrı bir siluet yoktur.
    const shield = (houseId, kind, byDoc, byHeal) => {
      homeAdd(houseId, { kind, result: 'saved' });
      if ((byDoc && doctor.id !== houseId) || (byHeal && witch.id !== houseId)) homeAdd(houseId, { kind: 'protect', result: 'saved' });
      if (byDoc) saved.set(doctor.id, houseId);
      if (byHeal) saved.set(witch.id, houseId);
    };

    // 2a. Vampirlerin öldürmeleri: her vampir kendi kurbanına gider. Bir kurbana ulaşan (kapıdan dönmeyen) en az bir
    // yaşayan vampir varsa saldırı olur (aynı kurbana iki vampir giderse tek ölüm). Kurbanlar sırayla çözülür; doktor ve
    // cadı kurbansa önce (öldürülürlerse korumaları/iksirleri sonrakilere geçmez).
    const killTrips = this.trips.filter((t) => t.kind === 'kill' && alive(P(t.actorId)) && P(t.actorId).role === ROLE.VAMPIRE);
    const victimIds = [];
    for (const t of killTrips) if (!t.blocked && alive(P(t.to)) && !victimIds.includes(t.to)) victimIds.push(t.to);
    const first = (id) => (doctor && id === doctor.id) || (witch && id === witch.id);
    victimIds.sort((a, b) => Number(Boolean(first(b))) - Number(Boolean(first(a))));
    const attacks = new Map();     // kurban -> 'saved' | 'died'
    for (const victimId of victimIds) {
      const byDoc = protects(victimId);
      const byHeal = healId === victimId && !killedByVamp(witch);
      if (byDoc || byHeal) {
        attacks.set(victimId, 'saved');
        shield(victimId, 'attack', byDoc, byHeal);
      } else {
        attacks.set(victimId, 'died');
        dies.set(victimId, 'vampir');
        homeAdd(victimId, { kind: 'attack', result: 'died' });
      }
    }
    // İksir kullanıldı (kapıdan dönmediyse ve cadı vampir saldırısında ölmediyse).
    if (healId && !killedByVamp(witch)) this.witchUsed.heal = true;

    // 2b. Hırsız (vampirler onu öldürmediyse). Hedef zaten öldüyse yine de rolünü alır.
    const thief = this.nightSteal ? P(this.nightSteal.by) : null;
    let steal = null;
    if (thief && alive(thief) && thief.role === ROLE.THIEF && !killedByVamp(thief)) {
      const targetId = this.nightSteal.targetId;
      if (!this.tripOk(thief.id, 'steal')) steal = { thiefId: thief.id, targetId, outcome: 'bounced' };
      else if (!alive(P(targetId)) || dies.has(targetId)) steal = { thiefId: thief.id, targetId, outcome: 'done' };
      else if (protects(targetId)) {
        steal = { thiefId: thief.id, targetId, outcome: 'foiled' };
        shield(targetId, 'steal', true, false);
      } else {
        steal = { thiefId: thief.id, targetId, outcome: 'done' };
        dies.set(targetId, 'hirsiz');
        homeAdd(targetId, { kind: 'steal', result: 'died' });
      }
    }

    // 2c. Cadının zehri (cadı bu gece daha önce öldürülmediyse).
    let poison = null;
    const poisonId = this.nightWitch.poison;
    if (witch && poisonId && !dies.has(witch.id) && this.trips.some((t) => t.actorId === witch.id && t.kind === 'poison')) {
      if (!this.tripOk(witch.id, 'poison')) poison = { targetId: poisonId, outcome: 'bounced' };
      else {
        this.witchUsed.poison = true;
        if (!alive(P(poisonId)) || dies.has(poisonId)) poison = { targetId: poisonId, outcome: 'done' };
        else if (protects(poisonId)) {
          poison = { targetId: poisonId, outcome: 'saved' };
          shield(poisonId, 'poison', true, false);
        } else {
          poison = { targetId: poisonId, outcome: 'done' };
          dies.set(poisonId, 'zehir');
          homeAdd(poisonId, { kind: 'poison', result: 'died' });
        }
      }
    }

    // 4–5. Gerçekten olan yolculuklar (seçim sırasıyla).
    const dying = (id) => dies.has(id);
    const trips = [];
    for (const t of this.trips) {
      const a = P(t.actorId);
      if (!alive(a)) continue;
      let outcome = t.blocked ? 'bounced' : 'done';
      switch (t.kind) {
        case 'kill':
          if (a.role !== ROLE.VAMPIRE) continue;
          if (!t.blocked) {
            if (!attacks.has(t.to)) continue;
            outcome = attacks.get(t.to) === 'saved' ? 'saved' : 'done';
          }
          break;
        case 'steal':
          if (!steal || steal.thiefId !== a.id) continue;
          outcome = steal.outcome;
          break;
        case 'poison':
          if (!poison || a.role !== ROLE.WITCH) continue;
          outcome = poison.outcome;
          break;
        case 'heal':
          if (a.role !== ROLE.WITCH || killedByVamp(a)) continue;
          if (!t.blocked && saved.has(a.id)) outcome = 'saved';
          break;
        case 'protect':
          if (a.role === ROLE.MAD) { if (dying(a.id)) continue; break; }
          if (a.role !== ROLE.DOCTOR || killedByVamp(a)) continue;
          if (!t.blocked && saved.has(a.id)) outcome = 'saved';
          break;
        case 'frame':
          if (a.role !== ROLE.VAMPIRE || a.ability !== ABILITY.FRAME || this.nightFrame !== t.to || dying(a.id)) continue;
          break;
        case 'clean':
          if (a.role !== ROLE.VAMPIRE || a.ability !== ABILITY.CLEAN || this.nightClean !== t.to || dying(a.id)) continue;
          break;
        default:   // inspect, watch (gerçek ya da deli)
          if (dying(a.id)) continue;
      }
      trips.push({ actorId: a.id, to: t.to, kind: t.kind, outcome });
    }

    // Kahin (dedektif): iki rol, biri gerçek. İftira yeteneği olan vampirin (yaşayan, iftirası gerçekleşen) iftirası "vampir"i katar.
    const seer = this.aliveWith(ROLE.SEER);
    const inspect = seer && trips.find((t) => t.actorId === seer.id && t.kind === 'inspect' && t.outcome === 'done');
    const frame = trips.find((t) => t.kind === 'frame' && t.outcome === 'done');
    const seerRes = inspect
      ? { seerId: seer.id, targetId: inspect.to, roles: this.seerPair(seer, P(inspect.to), Boolean(frame && frame.to === inspect.to)) }
      : null;

    const watcher = this.aliveWith(ROLE.WATCHER);
    const watchRes = watcher && this.nightWatch && !dying(watcher.id)
      ? { watcherId: watcher.id, info: this.watchInfo(this.nightWatch, watcher.id, dark, trips, (home.get(this.nightWatch) || []).some((e) => e.kind !== 'protect' && e.result === 'saved')) } : null;

    const jailer = this.aliveWith(ROLE.JAILER);
    const lock = this.nightLock;
    const lockRes = lock && jailer && jailer.id === lock.by && !dying(jailer.id) ? {
      jailerId: jailer.id,
      targetId: lock.targetId,
      count: new Set(trips.filter((t) => t.to === lock.targetId && t.outcome === 'bounced').map((t) => t.actorId)).size,
      tried: this.lockTried.has(lock.targetId),
    } : null;

    // Kilitli ev sahibi kapının zorlandığını duyar (kaç kişi; kim olduğu değil).
    const rattleCount = lock
      ? new Set(trips.filter((t) => t.to === lock.targetId && t.outcome === 'bounced').map((t) => t.actorId)).size : 0;
    const rattled = lock && rattleCount ? { ownerId: lock.targetId, count: rattleCount } : null;

    // Deliler: sahte rolüne göre uydurma sonuçlar (bu gece ölmüyorsa ve kapıdan dönmediyse).
    const mad = [];
    for (const p of this.players.values()) {
      if (p.role !== ROLE.MAD || !alive(p) || dying(p.id)) continue;
      const pick = this.madPicks.get(p.id);
      const r = { id: p.id };
      if (p.fakeRole === ROLE.SEER && pick && trips.some((t) => t.actorId === p.id && t.kind === 'inspect' && t.outcome === 'done')) {
        r.seer = { targetId: pick, roles: this.madSeerPair(p, pick) };
      }
      if (p.fakeRole === ROLE.WATCHER && pick) r.watch = this.madWatchInfo(p, pick, dark);
      if (p.fakeRole === ROLE.JAILER && this.madNightLock.get(p.id)) {
        const x = this.rand();
        r.lock = { targetId: this.madNightLock.get(p.id), count: x < 0.5 ? 0 : (x < 0.85 ? 1 : 2), tried: this.rand() < 0.4 };
      }
      mad.push(r);
    }

    this.nightRes = {
      dark, dies, home, saved, trips, steal, seer: seerRes, watch: watchRes, lock: lockRes, rattled, mad, sent: false,
      // İftira (bu gece ve ertesi gün geçerli; §16.1) ve temizlik (bu gece ölürse rol gizli; §16.2).
      framedId: frame ? frame.to : null,
      cleanedId: (trips.find((t) => t.kind === 'clean' && t.outcome === 'done') || {}).to || null,
    };
    this.frameMark = frame ? { targetId: frame.to, round: this.round } : null;
    this.cleanMark = this.nightRes.cleanedId ? { targetId: this.nightRes.cleanedId, round: this.round } : null;
    this.rec('nres');
  }

  // Gösterimin 14. saniyesinde: özel sonuç duyuruları (ve notlar). Bu gece ölenler yalnızca 'killed' alır.
  sendNightResults() {
    const res = this.nightRes;
    if (!res || res.sent || this.phase !== 'night') return;
    res.sent = true;
    clearTimeout(this.resultTimer);
    this.resultTimer = null;
    const P = (id) => this.players.get(id);
    const ok = (id) => { const p = P(id); return Boolean(p && p.alive && !res.dies.has(id)); };
    const note = (p, text) => p.notes.push({ text, ts: Date.now() });
    const deadIds = new Set(res.dies.keys());

    // Kapıdan dönenler.
    const bounced = new Set();
    for (const t of res.trips) {
      const key = `${t.actorId}>${t.to}`;
      if (t.outcome !== 'bounced' || !ok(t.actorId) || bounced.has(key)) continue;
      bounced.add(key);
      const text = `${genitive(P(t.to).name)} kapısı dışarıdan kilitliydi; eve döndün.`;
      note(P(t.actorId), `🔒 ${this.round}. gece: ${text}`);
      this.announce('bounced', 'Kapı kilitliydi', text, { targets: [{ id: t.to }] }, [t.actorId]);
    }
    // Kahin, gözcü, gardiyan; deliler aynı biçimde.
    if (res.seer && ok(res.seer.seerId)) this.sendSeer(P(res.seer.seerId), P(res.seer.targetId), res.seer.roles);
    if (res.watch && ok(res.watch.watcherId)) this.sendWatch(P(res.watch.watcherId), res.watch.info, deadIds);
    if (res.lock && ok(res.lock.jailerId)) this.sendLockReport(P(res.lock.jailerId), res.lock.targetId, res.lock.count, res.lock.tried);
    if (res.rattled && ok(res.rattled.ownerId)) {
      const text = `Bu gece kilitli kapını ${res.rattled.count} kişi zorladı.`;
      note(P(res.rattled.ownerId), `🔒 ${this.round}. gece: ${text}`);
      this.announce('rattled', 'Kapın zorlandı', text, { targets: [{ id: res.rattled.ownerId }], count: res.rattled.count }, [res.rattled.ownerId]);
    }
    for (const r of res.mad) {
      const p = P(r.id);
      if (!ok(r.id) || p.role !== ROLE.MAD) continue;
      if (r.seer) this.sendSeer(p, P(r.seer.targetId), r.seer.roles);
      if (r.watch) this.sendWatch(p, r.watch, deadIds);
      if (r.lock) this.sendLockReport(p, r.lock.targetId, r.lock.count, r.lock.tried);
    }
    // Hırsız: hedef bu gece öldüyse (sebep ne olursa olsun) ve hırsız sağ kalıyorsa rolü alır;
    // doktor koruduysa hakkı yanmaz. (Kilitli kapı 'bounced' verir.)
    const st = res.steal;
    if (st && ok(st.thiefId) && P(st.thiefId).role === ROLE.THIEF) {
      const thief = P(st.thiefId);
      const victim = P(st.targetId);
      if (st.outcome === 'done' && res.dies.has(victim.id)) this.takeOver(thief, victim);
      else if (st.outcome === 'foiled') {
        const text = `${genitive(victim.name)} evi bu gece korunuyordu; çalamadın ama hakkın yanmadı.`;
        note(thief, `🗝️ ${this.round}. gece: ${text}`);
        this.announce('stealfail', 'Soygun başarısız', text, { targets: [{ id: victim.id }] }, [thief.id]);
      }
    }
    // Koruması bir saldırıyı gerçekten durduran doktor/cadı.
    for (const [protectorId, savedId] of res.saved) {
      if (!ok(protectorId)) continue;
      const p = P(protectorId);
      const other = P(savedId);
      const self = protectorId === savedId;
      let title;
      let text;
      if (p.role === ROLE.WITCH) {
        title = 'Hayat iksiri işe yaradı';
        text = self ? 'Vampirler bu gece evine geldi; hayat iksirin seni kurtardı.'
          : `${other.name} bu gece vampirlerin saldırısına uğradı; hayat iksirin onu kurtardı.`;
      } else {
        title = 'Koruman işe yaradı';
        text = self ? 'Bu gece evine saldırı oldu; kendini korudun ve kurtuldun.'
          : `${other.name} bu gece saldırıya uğradı; senin koruman sayesinde kurtuldu.`;
      }
      note(p, `🛡️ ${this.round}. gece: ${text}`);
      this.announce('saved', title, text, { targets: [{ id: savedId }] }, [protectorId]);
    }
    // Saldırıdan kurtulan ev sahibi (kim olduğu, ne olduğu söylenmez).
    for (const [houseId, events] of res.home) {
      if (!ok(houseId) || !events.some((e) => e.kind !== 'protect' && e.result === 'saved')) continue;
      const text = 'Bu gece evinde saldırıya uğradın ama sağ kurtuldun.';
      note(P(houseId), `🛡️ ${this.round}. gece: ${text}`);
      this.announce('attacked', 'Saldırıdan kurtuldun', text, { targets: [{ id: houseId }] }, [houseId]);
    }
    // Bu gece ölenler (herkes sabah öğrenir).
    const DEATH_TEXT = {
      vampir: 'Vampirler bu gece evine girdi. Sabahı göremeyeceksin.',
      zehir: 'Bu gece zehirlendin. Sabahı göremeyeceksin.',
      hirsiz: 'Bu gece evine biri girdi, seni soydu ve canını aldı. Sabahı göremeyeceksin.',
    };
    for (const [id, cause] of res.dies) {
      const p = P(id);
      if (!p || !p.alive) continue;
      note(p, `💀 ${this.round}. gece: ${DEATH_TEXT[cause]}`);
      this.announce('killed', 'Bu gece öldün', DEATH_TEXT[cause], { targets: [{ id }], cause }, [id]);
    }
    this.changed();
  }

  // Sabah: gecenin ölümleri herkese açıklanır, sonra avcı / kazanan / gündüz.
  dawn() {
    if (this.phase !== 'night') return;
    clearTimeout(this.timer);
    if (!this.nightRes) this.resolveNight();
    this.sendNightResults();
    if (this.phase !== 'night') return;
    this.clearNightTimers();
    const res = this.nightRes;
    const deaths = [...res.dies].map(([id, cause]) => ({ id, cause }))
      .filter((d) => { const p = this.players.get(d.id); return p && p.alive; });
    this.event = this.event && this.event.phase === 'night' ? null : this.event;

    const HOW = { vampir: 'vampir tarafından öldürüldü', zehir: 'zehirlenerek öldü', hirsiz: 'soyulup öldürüldü' };
    const texts = deaths.map(({ id, cause }) => {
      const victim = this.players.get(id);
      victim.alive = false;
      // Soyulup öldürülenin rolü hırsızdadır; oyun bitene kadar kimseye açıklanmaz.
      // Temizlik yeteneğiyle gidilen ev: ölen kim olursa olsun rolü oyun sonuna kadar gizli (izler silinmiş).
      if (cause === 'hirsiz') victim.roleHidden = 'hirsiz';
      else if (res.cleanedId === id) victim.roleHidden = 'temizlikci';
      if (res.cleanedId === id) victim.cleaned = true;
      this.applySlander(victim);
      const role = this.deathRoleText(victim);
      this.addLog(`${this.round}. gece ${victim.name} ${HOW[cause]}.${role}`, 'death');
      return `${victim.name} bu gece ${HOW[cause]}!${role}`;
    });
    // Motora sadece herkese açık olanlar gider: kim, nasıl (vampir/zehir/hırsız) ve oda açıklıyorsa rolü.
    const dawn = this.narrate('dawn', {
      round: this.round,
      deaths: deaths.map(({ id, cause }) => ({ id, cause, role: this.roleIfPublic(this.players.get(id)),
        hidden: this.settings.revealRoles && this.players.get(id).roleHidden
          ? (this.players.get(id).roleHidden === 'temizlikci' ? 'temizlikci' : true) : false })),
    }, deaths.length ? { title: 'Sabah oldu', text: texts.join(' ') } : { title: 'Sabah oldu', text: 'Bu gece kimse ölmedi.' });
    if (deaths.length) {
      const sceneOf = Array.isArray(dawn.targets) ? dawn.targets : [];
      const targets = deaths.map(({ id, cause }) => {
        const t = sceneOf.find((x) => x && x.id === id);
        let scene = pickScene(t && t.scene, SCENES.bite, 'bite');
        if (cause === 'zehir') scene = 'poison';
        if (cause === 'hirsiz') scene = 'vanish';
        return { id, cause, scene };
      });
      // Motor ölüm biçiminde cevap vermediyse ya da açık bir rolü/ölüm biçimini metne yazmadıysa düz metne dön.
      const ok = Array.isArray(dawn.targets) && this.textHasRoles(dawn.text, deaths.map((d) => d.id))
        && deaths.every((d) => dawn.text.includes(HOW[d.cause]));
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
    this.night = null;
    this.afterDeaths(deaths.map((d) => d.id), () => this.startDay());
  }

  // Gösterim aşamasında izleyicinin kendi gözünden gece (state.night.show). Sadece bilmesi gerekenler.
  showFor(me) {
    const res = this.nightRes;
    if (!res || this.nightStage !== 'show') return null;
    const out = {};
    const fmt = (t) => ({
      to: t.to, kind: t.kind, outcome: t.outcome,
      interior: ['kill', 'steal', 'poison'].includes(t.kind) && t.outcome !== 'bounced',
    });
    const mine = res.trips.filter((t) => t.actorId === me.id);
    if (mine.length) {
      out.trip = fmt(mine[0]);
      if (mine.length > 1) out.trips = mine.map(fmt);
    }
    if (isEvil(me.role)) {
      const team = res.trips.filter((t) => t.actorId !== me.id && ['kill', 'frame', 'clean'].includes(t.kind)
        && isEvil(this.players.get(t.actorId).role)).map((t) => ({ id: t.actorId, to: t.to, kind: t.kind, outcome: t.outcome }));
      if (team.length) out.team = team;
    }
    const home = res.home.get(me.id);
    if (home && home.length) out.home = home.map((e) => ({ kind: e.kind, result: e.result }));
    if (res.dies.has(me.id)) out.dead = true;
    let watch = null;
    if (res.watch && res.watch.watcherId === me.id) watch = res.watch.info;
    else if (me.role === ROLE.MAD) watch = (res.mad.find((m) => m.id === me.id && m.watch) || {}).watch || null;
    if (watch) {
      out.watch = {
        houseId: watch.targetId,
        arrivals: watch.visitors.map((v) => ({ id: v.id, blocked: v.blocked })),
        ownerWent: watch.ownerWent,
        died: this.watchDeathAt(watch, new Set(res.dies.keys())).length > 0,
        saved: Boolean(watch.saved),
      };
    }
    if (res.saved.has(me.id)) out.saved = true;
    return out;
  }

  // Hırsız ölenin rolünü olduğu gibi alır (kullanılmış iksirler dahil; çalınan deli yine deli kalır
  // ve aynı sahte rolü görür). Bundan sonra o rolün takımındadır.
  takeOver(thief, victim) {
    thief.role = victim.role;
    if (victim.role === ROLE.MAD) thief.fakeRole = victim.fakeRole;
    thief.stolen = victim.id;
    const label = ROLE_LABEL[this.actingRole(thief)];
    const text = `${genitive(victim.name)} evinden rolünü çaldın. Artık rolün: ${label}.`;
    thief.notes.push({ text: `🗝️ ${this.round}. gece: ${text}`, ts: Date.now() });
    this.announce('steal', 'Rolü çaldın!', text,
      { targets: [{ id: victim.id }], role: this.actingRole(thief) }, [thief.id]);
  }

  // Kahinin şaşırtmaca rolü: (kahin, hedef) için oyun boyunca sabit, gerçek rol asla değil; bu oyunda
  // bulunabilecek rollerden (kahinin kendi rolü hariç). Hedefin rolü değişip şaşırtmacaya eşit olursa yenilenir.
  seerDecoy(seer, targetId, real) {
    const key = `${seer.id}:${targetId}`;
    let decoy = this.seerPairs.get(key);
    if (!decoy || decoy === real) {
      decoy = this.drawDecoy(real);
      this.seerPairs.set(key, decoy);
    }
    return decoy;
  }

  // Şaşırtmaca rol: 2/3 olasılıkla karşı taraftan (masum hedefe vampir, kötü hedefe bu oyunda
  // olabilecek masum bir rol), yoksa aynı taraftan; asla gerçek rol, asla "kahin". Seçilen tarafta aday
  // yoksa diğer taraftan çekilir. (seerRng: testlerde tohumlu.)
  drawDecoy(real) {
    const pool = possibleRoles(this.gameSize || this.players.size, this.settings).filter((r) => r !== real && r !== ROLE.SEER);
    const opposite = pool.filter((r) => isEvil(r) !== isEvil(real));
    const same = pool.filter((r) => isEvil(r) === isEvil(real));
    const rng = this.seerRng;
    let from = rng() < DECOY_OPPOSITE_SHARE ? opposite : same;
    if (!from.length) from = from === opposite ? same : opposite;
    if (!from.length) return real === ROLE.VILLAGER ? ROLE.VAMPIRE : ROLE.VILLAGER;
    return from[Math.min(from.length - 1, Math.floor(rng() * from.length))];
  }

  // Kahinin sonucu: biri gerçek iki rol (sırası karışık). Deli kendini sandığı rol olarak görünür;
  // iftira atılan kişide ikinci rol "vampir"dir.
  seerPair(seer, target, framed) {
    const real = this.actingRole(target);
    const other = framed && real !== ROLE.VAMPIRE ? ROLE.VAMPIRE : this.seerDecoy(seer, target.id, real);
    return this.seerRng() < 0.5 ? [real, other] : [other, real];
  }

  // Kendini kahin sanan deli: iki rastgele rol, gerçek kahin gibi (deli, hedef) için sabit.
  madSeerPair(mad, targetId) {
    const key = `${mad.id}:${targetId}`;
    let pair = this.seerPairs.get(key);
    if (!Array.isArray(pair)) {
      // Gerçek kahinin sonuçlarıyla aynı karışımda: rastgele bir "gerçek" rol ve onun şaşırtmacası.
      const pool = possibleRoles(this.gameSize || this.players.size, this.settings).filter((r) => r !== ROLE.SEER);
      const a = pool[Math.min(pool.length - 1, Math.floor(this.seerRng() * pool.length))];
      pair = [a, this.drawDecoy(a)];
      this.seerPairs.set(key, pair);
    }
    return this.seerRng() < 0.5 ? [pair[0], pair[1]] : [pair[1], pair[0]];
  }

  sendSeer(seer, seen, roles) {
    const [a, b] = roles.map((r) => ROLE_LABEL[r]);
    const text = `${seen.name} şu ikisinden biri: ${a} ya da ${b}.`;
    seer.notes.push({ text: `🔮 ${this.round}. gece: ${text}`, ts: Date.now() });
    this.announce('seer', 'Kristal küre konuştu', text, { targets: [{ id: seen.id }], roles: [...roles] }, [seer.id]);
  }

  sendWatch(watcher, watch, deadIds) {
    const dark = watch.dark;
    const deathAt = this.watchDeathAt(watch, deadIds);
    const text = this.watchText(watch, deathAt);
    const byName = (ids) => ids.map((id) => this.players.get(id)).sort((a, b) => a.name.localeCompare(b.name, 'tr')).map((p) => p.id);
    const visitors = dark ? [] : byName(watch.visitors.map((v) => v.id));
    const blocked = dark ? [] : byName(watch.visitors.filter((v) => v.blocked).map((v) => v.id));
    watcher.notes.push({ text: `👁️ ${this.round}. gece: ${text}`, ts: Date.now() });
    this.announce('watch', 'Gözcünün raporu', text, {
      targets: [{ id: watch.targetId }], visitors, blocked, count: watch.count, blockedCount: watch.blockedCount,
      ownerOut: watch.ownerOut, ownerWent: watch.ownerWent, dark, deathAt, saved: Boolean(watch.saved),
    }, [watcher.id]);
  }

  // tried: kilitli ev sahibi de evinden çıkmak istedi mi (yani gece görevi var).
  sendLockReport(jailer, targetId, tries, tried = false) {
    const owner = this.players.get(targetId);
    const knock = tries
      ? `Kilitlediğin kapıyı (${genitive(owner.name)} evi) bu gece ${tries} kişi zorladı`
      : `Kilitlediğin kapıyı (${genitive(owner.name)} evi) bu gece kimse zorlamadı`;
    const text = `${knock}; ev sahibi ${tried ? 'de dışarı çıkmak istedi' : 'evden çıkmak istemedi'}.`;
    jailer.notes.push({ text: `🗝️ ${this.round}. gece: ${text}`, ts: Date.now() });
    this.announce('lockreport', 'Gardiyanın raporu', text, { targets: [{ id: owner.id }], count: tries, tried: Boolean(tried) }, [jailer.id]);
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
    if (watch.saved) text += ' Evden yeşil ışıklar yükseldi: içeride biri saldırıya uğradı ama kurtarıldı.';
    if (deathAt.length) {
      text += ` Sabah ${deathAt.map((id) => `${genitive(this.players.get(id).name)} evinden`).join(' ve ')} ölüm haberi geldi.`;
    }
    return text;
  }

  // Oda rolleri açıklıyorsa metinde her ölünün rolü yazmalı (motor bir rolü tanımazsa düz metin kullanılır).
  textHasRoles(text, ids) {
    if (!this.settings.revealRoles) return true;
    return ids.every((id) => this.players.get(id).roleHidden
      || text.includes(`Rolü: ${ROLE_LABEL[this.publicRoleOf(this.players.get(id))]}.`));
  }

  // Ölenler arasında avcı varsa önce son atışını yapar, sonra kazanan kontrol edilir.
  afterDeaths(deadIds, next) {
    const hunter = deadIds.map((id) => this.players.get(id))
      .find((p) => p && p.role === ROLE.HUNTER && !p.left && p.roleHidden !== 'hirsiz');
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
    // Temizlenen avcı: son atışı yine olur ve avcı olduğu açıklanır.
    if (hunter.roleHidden === 'temizlikci') hunter.roleHidden = false;
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
    this.rollWeather();
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
    if (after !== before) this.rec('vote', byId, after);
    if (after !== before && !this.secretVotes) {
      this.storyRecord('vote', { voter: byId, to: after, msLeft: Math.max(0, this.deadline - Date.now()) });
    }
    const ended = inTrial ? this.checkTrialProgress() : this.checkDayProgress();
    if (!ended) this.changed();
    if (!ended && after !== before && after && after !== SLEEP) {
      try { this.bots.observeVote(byId, after); } catch (err) { /* bot tepkisi önemsiz */ }
    }
    return null;
  }

  // Gardiyan gündüz, gelecek gece kilitleyeceği kapıyı seçer (gün bitene kadar değiştirebilir; null = vazgeç).
  lockHouse(byId, targetId) {
    if (this.phase !== 'day' && this.phase !== 'trial') return 'Kilitlenecek kapı sadece gündüz seçilir.';
    const p = this.players.get(byId);
    if (!p || !p.alive) return 'Ölüler kapı kilitleyemez.';
    if (this.actingRole(p) !== ROLE.JAILER) return 'Sadece gardiyan kapı kilitleyebilir.';
    const mad = p.role === ROLE.MAD;
    if (targetId === null) {
      if (mad) this.madDayLock.delete(byId); else this.dayLock = null;
      this.rec('lock', p, null);
      this.changed();
      return null;
    }
    const target = this.players.get(targetId);
    if (!target || !target.alive) return 'Bu kapı kilitlenemez.';
    if (targetId === byId) return 'Kendi kapını kilitleyemezsin.';
    const last = mad ? this.madLastLock.get(byId) || null : this.lastLockTarget;
    if (targetId === last) return 'Aynı kapıyı iki gece üst üste kilitleyemezsin.';
    if (mad) this.madDayLock.set(byId, targetId); else this.dayLock = targetId;
    this.rec('lock', p, targetId);
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
    this.rec('tally');
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
    this.applySlander(hanged);
    this.applyClean(hanged);
    const isPublic = (this.settings.revealRoles && !hanged.roleHidden) || hanged.role === ROLE.JESTER;
    const role = isPublic ? ` Rolü: ${ROLE_LABEL[this.publicRoleOf(hanged)]}.` : this.deathRoleText(hanged);
    // Sahne (darağacı / sürgün / mahzen) motordan gelir; metin ve günlük satırı sahneye uyar.
    const n = this.narrate('hanged', {
      round: this.round, id: hanged.id, votes: max, role: isPublic ? this.publicRoleOf(hanged) : null,
      hidden: this.settings.revealRoles && hanged.roleHidden === 'temizlikci' ? 'temizlikci' : false, ballots, ...flags,
    }, { title: 'Köy kararını verdi', text: `${hanged.name} ${max} oyla asıldı!${role}`, scene: 'gallows' });
    const scene = pickScene(n.scene, SCENES.hanged, 'gallows');
    const okText = n.scene === scene && (!role || n.text.includes(role.trim()));
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
    const winner = winnerOf([...this.players.values()]);
    if (!winner) return false;
    this.finish(winner);
    return true;
  }

  finish(winner) {
    clearTimeout(this.timer);
    this.clearNightTimers();
    this.night = null;
    // Oyun bitti: hayaletlerin konumu artık herkese açık (meydandaki yerleri olur).
    for (const p of this.players.values()) {
      if (p.ghostPos) p.pos = p.ghostPos;
      p.ghostPos = null;
    }
    this.phase = 'ended';
    this.weather = null;
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
    this.rec('end');
    // Lobide olduğu gibi, bitmiş oyunda da bağlantısı kopanlar bir süre sonra çıkarılır.
    for (const p of this.players.values()) {
      if (!p.connected && !p.left) {
        clearTimeout(p.graceTimer);
        p.graceTimer = setTimeout(() => this.removePlayer(p.id), LOBBY_GRACE_MS);
      }
    }
    this.reportResults();
    this.changed();
    this.banterDo((b) => b.gameEnded());
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
    this.weather = null;
    this.resetGame();
    this.addLog('Yeni oyun için lobiye dönüldü.', 'info');
    this.changed();
    this.banterDo((b) => b.backToLobby());
    return null;
  }

  // ---------- sohbet ----------

  // Mesajın kimlere gideceğine karar verir: gece köylüler konuşamaz,
  // vampir takımı kendi arasında konuşur, ölüler sadece ölülerle konuşur.
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
    this.rec('log', text, kind);
  }

  // to verilirse duyuru sadece o oyunculara gider (ör. kahinin sonucu).
  announce(kind, title, text, extra = {}, to = null) {
    this.rec('announce', kind, title, text, extra, to);
    this.hooks.announce(this, { kind, title, text, ...extra }, to);
  }

  // kind === 'move' ise sunucu yayını seyreltebilir (sık gelen konum güncellemeleri).
  changed(kind) {
    // Seçim aşamasının erken bitişi her değişiklikte yeniden değerlendirilir (seçim, bekleme, ayrılma, bağlantı).
    if (kind !== 'move' && !this.closed) this.checkPickDone();
    this.hooks.update(this, kind);
    if (kind === 'move' || this.closed) return;
    this.banterDo((b) => b.observe());
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

  // Ayarların oyuncuya giden hâli: botModel yalnızca sahip hesaba görünür (başkalarına sızmaz).
  settingsFor(viewerId) {
    if (this.isOwnerPlayer(viewerId)) return this.settings;
    const { botModel, ...rest } = this.settings;
    return rest;
  }

  // Her oyuncuya kendi görmesi gerekeni hazırlar; başkalarının rolleri sızmaz.
  viewFor(viewerId) {
    const me = this.players.get(viewerId);
    const ended = this.phase === 'ended';
    const iAmEvil = Boolean(me && isEvil(me.role));
    const viewerDead = Boolean(me && !me.alive);

    const players = [...this.players.values()].map((p) => {
      let role = null;
      if (ended) role = p.role;
      else if (p.id === viewerId) role = p.role === ROLE.MAD && !this.madRevealed(p) ? p.fakeRole : p.role;
      else if (iAmEvil && isEvil(p.role)) role = p.role;
      else if (!p.alive && this.settings.revealRoles && !p.roleHidden) role = this.publicRoleOf(p);
      return {
        id: p.id, name: p.name, seat: p.seat, job: p.job || null, alive: p.alive, connected: p.connected,
        left: p.left, isHost: p.id === this.hostId, bot: Boolean(p.bot), role,
        // Delinin kendini sandığı rol: sadece gerçek rolü (deli) bu izleyiciye açıkken gönderilir.
        fakeRole: role === ROLE.MAD ? p.fakeRole : null,
        // Oyun sonunda: iftira yüzünden 'vampir' açıklanmıştı / izleri silinmişti (sadece 'ended').
        framed: ended && Boolean(p.framedReveal),
        cleaned: ended && Boolean(p.cleaned),
        // Hayaletin konumu sadece ölülere (oyun sonunda zaten pos'a yazılır).
        look: p.look, pos: p.ghostPos && viewerDead ? p.ghostPos : p.pos,
        // Vampir yeteneği: yalnızca kendisi ve vampir takımı (ve oyun bitince herkes) bilir.
        ability: p.role === ROLE.VAMPIRE && (ended || p.id === viewerId || iAmEvil) ? (p.ability || null) : null,
      };
    });

    const activeCount = players.filter((p) => !p.left).length;
    const view = {
      serverNow: Date.now(),
      room: {
        id: this.id, name: this.name, phase: this.phase, round: this.round,
        deadline: this.deadline, timerFrom: this.timerFrom, hostId: this.hostId, settings: this.settingsFor(viewerId),
        hasPassword: Boolean(this.password), winner: this.winner, winners: this.winners,
        // Akıllı bot seçeneği bu sunucuda var mı (API anahtarı); cevap yazan botlar (yalnızca herkese açık sohbet evrelerinde).
        aiAvailable: Boolean(this.ai && this.ai.available()),
        typing: ['day', 'trial', 'hunter'].includes(this.phase) ? this.bots.typingIds() : [],
        minPlayers: MIN_PLAYERS, maxPlayers: MAX_PLAYERS,
        vampireCount: vampireCount(activeCount, this.settings.vampires),
        ...distributionFor(activeCount, enabledSpecials(this.settings), this.settings.roleMode, this.settings.vampires),
        night: this.phase === 'night' && this.night
          ? { stage: this.night.stage, pickUntil: this.night.pickUntil, showUntil: this.night.showUntil } : null,
        hunterId: this.hunterId,
        scenario: this.scenario,
        epilogue: this.phase === 'ended' ? this.epilogue : null,
        event: this.eventView(),
        weather: this.weatherView(),
        trial: this.trial ? {
          step: this.trial.step, accused: [...this.trial.accused], counts: { ...this.trial.counts }, speaker: this.trial.speaker,
        } : null,
      },
      me: me ? {
        id: me.id, userId: me.userId, name: me.name, seat: me.seat, job: me.job || null,
        role: me.role === ROLE.MAD && !this.madRevealed(me) ? me.fakeRole : me.role, alive: me.alive,
        ability: me.role === ROLE.VAMPIRE ? (me.ability || null) : null,
        look: me.look, notes: me.notes,
        ...(this.isOwnerPlayer(viewerId) ? { canChooseBotModel: true } : {}),
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
      if (me && me.alive && this.actingRole(me) === ROLE.JAILER) {
        view.day.lock = me.role === ROLE.MAD
          ? { targetId: this.madDayLock.get(me.id) || null, lastTargetId: this.madLastLock.get(me.id) || null }
          : { targetId: this.dayLock, lastTargetId: this.lastLockTarget };
      }
    }
    return view;
  }

  // Gece görünümü: sadece izleyicinin rolünün bildikleri. Seçimler kesin olduğu için
  // gözcünün canlı bilgisi (gelenler, ev sahibinin gidişi) güvenle gönderilebilir.
  nightViewFor(me) {
    const show = this.showFor(me);
    const base = {
      mySelection: null, team: [],
      lockFound: this.lockTried.has(me.id),   // kilidi (dışarı çıkmaya çalışarak) öğrendi; önceden asla bilinmez
      canAct: this.canActAtNight(me.id),
      passed: this.nightPassed.has(me.id),
      bounced: Boolean(show && this.nightRes.trips.some((t) => t.actorId === me.id && t.outcome === 'bounced')),
      show,
    };
    const role = this.actingRole(me);
    const mad = me.role === ROLE.MAD;
    switch (role) {
      // Vampir: kendi eylemi (mySelection/myKind), yeteneği ve takımın seçimleri (herkes kendi eve gider; takım birbirinin
      // seçimini görür): team[] = { vampId, name, targetId, kind, ability } (seçmediyse targetId/kind null).
      case ROLE.VAMPIRE: {
        const mine = this.vampActs.get(me.id);
        return {
          ...base,
          mySelection: mine ? mine.targetId : null,
          myKind: mine ? mine.kind : null,
          ability: me.ability || null,
          team: [...this.players.values()].filter((p) => p.alive && p.role === ROLE.VAMPIRE).map((p) => {
            const act = this.vampActs.get(p.id);
            return { vampId: p.id, name: p.name, targetId: act ? act.targetId : null, kind: act ? act.kind : null, ability: p.ability || null };
          }),
        };
      }
      case ROLE.DOCTOR:
      case ROLE.SEER: return { ...base, mySelection: this.pickOf(me, role) };
      case ROLE.THIEF: return { ...base, mySelection: this.nightSteal ? this.nightSteal.targetId : null };
      // Gözcünün canlı paneli yok: gelenler gösterimde (show.watch) ve sabah raporunda.
      case ROLE.WATCHER: return { ...base, mySelection: this.pickOf(me, role) };
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
        if (mad) return { ...base, mySelection: this.madNightLock.get(me.id) || null };
        return { ...base, mySelection: this.nightLock && this.nightLock.by === me.id ? this.nightLock.targetId : null };
      default:
        // Gece görevi olmayanlar da gösterimde kendi evlerinde olanı görür.
        return show ? base : null;
    }
  }
}

module.exports = {
  Room, ROLE, SLEEP, MIN_PLAYERS, MAX_PLAYERS, ABILITY_MIN_PLAYERS, ABILITY, ABILITIES, ABILITY_TOGGLE, SPECIAL_ROLES, OPTIONAL_ROLES,
  DEFAULT_ROLES, ROLE_LABEL, COLOR_COUNT, HAT_COUNT, SKIN_COUNT, ACC_COUNT, TOP_COUNT, BOTTOM_COUNT, GEAR_COUNT, HOUSE_COUNT, HOUSE_MAT_COUNT, PLAZA, MOVE_PHASES,
  HOST_GRACE_MS, REVEAL_MS, ALL_VOTED_MS, HUNTER_MS, NIGHT_WALK_MS, NIGHT_SHOW_MS, NIGHT_RESULT_MS, PICK_GRACE_MS, ROLE_MODES, TRIAL_TURN_MS, TRIAL_VOTE_MS, TRIAL_ALL_VOTED_MS,
  Weather, EVENTS, EVENT_MODES, EVENT_GAP, EVENT_CHANCE, chooseEvent, LOBBY_GRACE_MS, EMPTY_ROOM_MS,
  LOG_MAX, SCENES,
  THIEF_MIN_PLAYERS, MAD_FAKE_ROLES, DECOY_OPPOSITE_SHARE,
  vampireCount, dealAbilities, assignRoles, rolesFor, rolePlan, distributionFor, possibleRoles, winnerOf, tally, normalizeSettings, teamOf, isEvil, clampToPlaza,
};
