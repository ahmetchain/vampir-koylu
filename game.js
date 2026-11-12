'use strict';

const crypto = require('crypto');

const ROLE = {
  VAMPIRE: 'vampir',
  DOCTOR: 'doktor',
  SEER: 'kahin',
  WITCH: 'cadi',
  HUNTER: 'avci',
  MAYOR: 'muhtar',
  JESTER: 'soytari',
  VILLAGER: 'koylu',
};

// Oda sahibinin açıp kapatabildiği özel roller. Oyuncu sayısı yetmezse bu sıraya göre eklenir.
const SPECIAL_ROLES = [ROLE.DOCTOR, ROLE.SEER, ROLE.WITCH, ROLE.HUNTER, ROLE.MAYOR, ROLE.JESTER];

const ROLE_LABEL = {
  [ROLE.VAMPIRE]: 'Vampir',
  [ROLE.DOCTOR]: 'Doktor',
  [ROLE.SEER]: 'Kahin',
  [ROLE.WITCH]: 'Cadı',
  [ROLE.HUNTER]: 'Avcı',
  [ROLE.MAYOR]: 'Muhtar',
  [ROLE.JESTER]: 'Soytarı',
  [ROLE.VILLAGER]: 'Köylü',
};

const MIN_PLAYERS = 5;
const MAX_PLAYERS = 20;
const REVEAL_MS = 8000;          // rol kartlarına bakma süresi
const ALL_VOTED_MS = 10000;      // herkes oy verince kalan süre buna iner
const HUNTER_MS = 20000;         // avcının son atış süresi
const LOBBY_GRACE_MS = 30000;    // lobide bağlantısı kopan oyuncu bu süre sonunda çıkarılır
const EMPTY_ROOM_MS = 10 * 60 * 1000;
const SLEEP = 'sleep';           // gündüz "Hızlı Uyu" oyu

// Karakter görünümü: renk ve şapka sadece sıra numarasıyla tutulur, çizimi tarayıcı yapar.
const COLOR_COUNT = 20;
const HAT_COUNT = 9;

const DEFAULT_ROLES = {
  [ROLE.DOCTOR]: true,
  [ROLE.SEER]: true,
  [ROLE.WITCH]: false,
  [ROLE.HUNTER]: false,
  [ROLE.MAYOR]: false,
  [ROLE.JESTER]: false,
};
const DEFAULT_SETTINGS = { nightSec: 30, daySec: 120, revealRoles: true, roles: DEFAULT_ROLES };

function clampInt(value, min, max, fallback) {
  const n = Number.parseInt(value, 10);
  if (Number.isNaN(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

function normalizeSettings(raw = {}) {
  const rawRoles = raw.roles && typeof raw.roles === 'object' ? raw.roles : {};
  const roles = {};
  for (const r of SPECIAL_ROLES) {
    roles[r] = rawRoles[r] === undefined ? DEFAULT_ROLES[r] : Boolean(rawRoles[r]);
  }
  return {
    nightSec: clampInt(raw.nightSec, 15, 120, DEFAULT_SETTINGS.nightSec),
    daySec: clampInt(raw.daySec, 30, 300, DEFAULT_SETTINGS.daySec),
    revealRoles: raw.revealRoles === undefined ? DEFAULT_SETTINGS.revealRoles : Boolean(raw.revealRoles),
    roles,
  };
}

function enabledSpecials(settings) {
  return SPECIAL_ROLES.filter((r) => settings.roles[r]);
}

function teamOf(role) {
  if (role === ROLE.VAMPIRE) return ROLE.VAMPIRE;
  if (role === ROLE.JESTER) return ROLE.JESTER;
  return ROLE.VILLAGER;
}

function vampireCount(playerCount) {
  if (playerCount >= 15) return 3;
  if (playerCount >= 10) return 2;
  return 1;
}

// Oyuncu sayısına göre dağıtılacak roller. En az bir sade köylü her zaman kalır.
function rolesFor(count, specials = [ROLE.DOCTOR]) {
  const vampires = vampireCount(count);
  const room = Math.max(0, count - vampires - 1);
  const chosen = specials.slice(0, room);
  const list = Array(vampires).fill(ROLE.VAMPIRE).concat(chosen);
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

// Vampirler yaşayan diğer herkese sayıca eşit ya da fazlaysa kazanır; vampir kalmazsa köy kazanır.
function winnerOf(players) {
  const alive = players.filter((p) => p.alive);
  const vampires = alive.filter((p) => p.role === ROLE.VAMPIRE).length;
  if (vampires === 0) return ROLE.VILLAGER;
  if (vampires >= alive.length - vampires) return ROLE.VAMPIRE;
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

// Lobiye giren karakter ateşin üstüne değil, meydanın çevresinde rastgele bir yere çıkar.
function lobbySpot() {
  const ang = Math.random() * Math.PI * 2;
  const r = 0.75 + Math.random() * 0.3;
  return { x: 0.5 + 0.36 * r * Math.cos(ang), y: 0.62 + 0.24 * r * Math.sin(ang) };
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
  constructor({ id, name, password, settings, hooks }) {
    this.id = id;
    this.name = name;
    this.password = password || '';
    this.settings = normalizeSettings(settings);
    this.hooks = hooks;
    this.players = new Map();
    this.hostId = null;
    this.phase = 'lobby';
    this.timer = null;
    this.emptyTimer = null;
    this.resetGame();
  }

  resetGame() {
    this.round = 0;
    this.deadline = null;
    this.winner = null;
    this.winners = [];
    this.log = [];
    this.nightVampire = new Map();
    this.nightDoctor = null;
    this.nightSeer = null;
    this.nightWitch = { heal: null, poison: null };
    this.witchUsed = { heal: false, poison: false };
    this.dayVotes = new Map();
    this.dayShortened = false;
    this.hunterId = null;
    this.hunterNext = null;
    for (const p of this.players.values()) {
      p.role = null;
      p.alive = true;
      p.notes = [];
    }
  }

  get inGame() {
    return ['reveal', 'night', 'day', 'hunter'].includes(this.phase);
  }

  // ---------- oyuncu yönetimi ----------

  // id herkese görünür; token sadece oyuncunun kendisinde durur ve yeniden bağlanmada kullanılır.
  addPlayer(id, name, token) {
    if (this.phase !== 'lobby') return 'Oyun başlamış, şu an katılamazsın.';
    if (this.players.size >= MAX_PLAYERS) return `Oda dolu (en fazla ${MAX_PLAYERS} kişi).`;
    const lower = name.toLocaleLowerCase('tr');
    for (const p of this.players.values()) {
      if (p.name.toLocaleLowerCase('tr') === lower) return 'Bu kullanıcı adı odada zaten var.';
    }
    const taken = new Set([...this.players.values()].map((p) => p.look.color));
    const free = Array.from({ length: COLOR_COUNT }, (_, i) => i).filter((c) => !taken.has(c));
    const color = free.length ? free[crypto.randomInt(free.length)] : crypto.randomInt(COLOR_COUNT);
    this.players.set(id, {
      id, name, token, role: null, alive: true, connected: true, left: false,
      socketId: null, graceTimer: null, notes: [],
      look: { color, hat: crypto.randomInt(HAT_COUNT) },
      pos: lobbySpot(),
    });
    if (!this.hostId) this.hostId = id;
    this.clearEmptyTimer();
    this.addLog(`${name} odaya katıldı.`, 'info');
    this.changed();
    return null;
  }

  findByToken(token) {
    if (!token) return null;
    return [...this.players.values()].find((p) => p.token === token && !p.left) || null;
  }

  removePlayer(id, reason = 'left') {
    const p = this.players.get(id);
    if (!p) return;
    clearTimeout(p.graceTimer);

    if (this.inGame) {
      p.left = true;
      p.connected = false;
      p.socketId = null;
      this.nightVampire.delete(id);
      this.dayVotes.delete(id);
      if (p.alive) {
        p.alive = false;
        const role = this.settings.revealRoles ? ` (${ROLE_LABEL[p.role]})` : '';
        this.addLog(`${p.name} oyundan ayrıldı${role}.`, 'death');
        this.announce('left', 'Bir oyuncu ayrıldı', `${p.name} oyundan ayrıldı${role}.`, { targets: [{ id }] });
      }
      this.ensureHost();
      if (this.phase === 'hunter' && this.hunterId === id) {
        this.resolveHunter(null);
      } else if (!this.checkWin()) {
        if (this.phase === 'day') this.checkDayProgress();
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
      p.graceTimer = setTimeout(() => this.removePlayer(id), LOBBY_GRACE_MS);
    } else if (this.phase === 'day') {
      this.checkDayProgress();
    }
    this.ensureHost();
    this.changed();
    this.checkEmpty();
  }

  // Lobide ve oyun sonunda karakterin rengi ve şapkası değiştirilebilir.
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
    p.look = next;
    this.changed();
    return null;
  }

  // Lobide karakterler meydanda serbestçe dolaşabilir (konum 0-1 arası oranlarla tutulur).
  move(byId, x, y) {
    const p = this.players.get(byId);
    if (!p) return 'Odada değilsin.';
    if (this.phase !== 'lobby') return 'Oyun sırasında dolaşamazsın.';
    const fx = Number(x);
    const fy = Number(y);
    if (!Number.isFinite(fx) || !Number.isFinite(fy)) return 'Geçersiz konum.';
    p.pos = { x: Math.min(0.95, Math.max(0.05, fx)), y: Math.min(0.95, Math.max(0.22, fy)) };
    this.changed();
    return null;
  }

  // Oda sahibi ayrılır ya da bağlantısı koparsa yetki bağlı ilk oyuncuya geçer.
  ensureHost() {
    const host = this.players.get(this.hostId);
    if (host && host.connected && !host.left) return;
    const next = [...this.players.values()].find((p) => p.connected && !p.left);
    if (next && next.id !== this.hostId) {
      this.hostId = next.id;
      this.addLog(`${next.name} artık oda sahibi.`, 'info');
    } else if (!host) {
      this.hostId = next ? next.id : null;
    }
  }

  checkEmpty() {
    const anyConnected = [...this.players.values()].some((p) => p.connected);
    if (this.players.size === 0) {
      this.destroy();
      this.hooks.empty(this);
    } else if (!anyConnected && !this.emptyTimer) {
      this.emptyTimer = setTimeout(() => {
        this.destroy();
        this.hooks.empty(this);
      }, EMPTY_ROOM_MS);
    }
  }

  clearEmptyTimer() {
    clearTimeout(this.emptyTimer);
    this.emptyTimer = null;
  }

  destroy() {
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
    const specials = enabledSpecials(this.settings);
    const roles = assignRoles([...this.players.keys()], specials);
    for (const [id, role] of roles) this.players.get(id).role = role;

    const summary = describeRoles(rolesFor(this.players.size, specials));
    this.addLog(`Oyun başladı: ${this.players.size} oyuncu (${summary}).`, 'info');
    this.setPhase('reveal', REVEAL_MS, () => this.startNight());
    this.announce('start', 'Roller dağıtıldı', 'Kartına bak ve rolünü kimseye gösterme!');
    this.changed();
    return null;
  }

  setPhase(phase, ms, onEnd) {
    clearTimeout(this.timer);
    this.phase = phase;
    this.deadline = Date.now() + ms;
    this.timer = setTimeout(onEnd, ms);
  }

  aliveWith(role) {
    return [...this.players.values()].find((p) => p.role === role && p.alive) || null;
  }

  startNight() {
    this.round += 1;
    this.nightVampire = new Map();
    this.nightDoctor = null;
    this.nightSeer = null;
    this.nightWitch = { heal: null, poison: null };
    this.setPhase('night', this.settings.nightSec * 1000, () => this.endNight());
    this.addLog(`${this.round}. gece başladı.`, 'night');
    this.announce('night', `${this.round}. Gece`, 'Köy uyuyor... Gece rolleri seçimini yapsın.');
    this.changed();
  }

  selectNight(byId, targetId, action) {
    if (this.phase !== 'night') return 'Şu an gece değil.';
    const p = this.players.get(byId);
    const target = this.players.get(targetId);
    if (!p || !p.alive) return 'Ölüler seçim yapamaz.';
    if (!target || !target.alive) return 'Bu oyuncu seçilemez.';

    switch (p.role) {
      case ROLE.VAMPIRE:
        if (targetId === byId) return 'Vampir kendini seçemez.';
        if (target.role === ROLE.VAMPIRE) return 'Diğer vampirleri seçemezsin.';
        if (this.nightVampire.get(byId) === targetId) this.nightVampire.delete(byId);
        else this.nightVampire.set(byId, targetId);
        break;
      case ROLE.DOCTOR:
        this.nightDoctor = this.nightDoctor === targetId ? null : targetId;
        break;
      case ROLE.SEER:
        if (targetId === byId) return 'Kendi geleceğine bakamazsın.';
        this.nightSeer = this.nightSeer === targetId ? null : targetId;
        break;
      case ROLE.WITCH: {
        const kind = action === 'poison' ? 'poison' : 'heal';
        const other = kind === 'heal' ? 'poison' : 'heal';
        if (this.witchUsed[kind]) return kind === 'heal' ? 'Hayat iksirini zaten kullandın.' : 'Zehri zaten kullandın.';
        if (kind === 'poison' && targetId === byId) return 'Kendini zehirleyemezsin.';
        this.nightWitch[kind] = this.nightWitch[kind] === targetId ? null : targetId;
        if (this.nightWitch[kind] && this.nightWitch[other] === targetId) this.nightWitch[other] = null;
        break;
      }
      case ROLE.VILLAGER:
        return 'Köylüler gece seçim yapamaz.';
      default:
        return 'Bu rolün gece görevi yok, sabahı bekle.';
    }
    this.changed();
    return null;
  }

  // Vampirlerin o anki ortak hedef(ler)i: geçerli seçimlerde en çok oyu alanlar.
  vampireTargets() {
    const picks = new Map();
    for (const [vampId, targetId] of this.nightVampire) {
      const vamp = this.players.get(vampId);
      const target = this.players.get(targetId);
      if (vamp && vamp.alive && target && target.alive) picks.set(vampId, targetId);
    }
    return tally(picks).top;
  }

  endNight() {
    const top = this.vampireTargets();
    const victimId = top.length ? top[crypto.randomInt(top.length)] : null;

    const protectedId = this.aliveWith(ROLE.DOCTOR) ? this.nightDoctor : null;
    const witch = this.aliveWith(ROLE.WITCH);
    const heal = witch ? this.nightWitch.heal : null;
    const poison = witch ? this.nightWitch.poison : null;
    if (heal) this.witchUsed.heal = true;
    if (poison) this.witchUsed.poison = true;

    const seer = this.aliveWith(ROLE.SEER);
    const seen = seer && this.nightSeer ? this.players.get(this.nightSeer) : null;

    // Doktorun koruduğu kişi o gece hiçbir şekilde ölmez; hayat iksiri sadece vampir saldırısını engeller.
    const deaths = [];
    if (victimId && victimId !== protectedId && victimId !== heal) deaths.push({ id: victimId, cause: 'vampir' });
    if (poison && poison !== protectedId && !deaths.some((d) => d.id === poison)) deaths.push({ id: poison, cause: 'zehir' });

    if (deaths.length) {
      const texts = deaths.map(({ id, cause }) => {
        const victim = this.players.get(id);
        victim.alive = false;
        const role = this.settings.revealRoles ? ` Rolü: ${ROLE_LABEL[victim.role]}.` : '';
        const how = cause === 'zehir' ? 'zehirlenerek öldü' : 'vampir tarafından öldürüldü';
        this.addLog(`${this.round}. gece ${victim.name} ${how}.${role}`, 'death');
        return `${victim.name} bu gece ${how}!${role}`;
      });
      this.announce('death', 'Sabah oldu', texts.join(' '), { targets: deaths });
    } else {
      // Kurtarılma ile saldırı olmaması aynı mesajı verir; kimse kimin kurtarıldığını öğrenmez.
      this.addLog(`${this.round}. gece kimse ölmedi.`, 'safe');
      this.announce('safe', 'Sabah oldu', 'Bu gece kimse ölmedi.');
    }

    if (seen && seer.alive) {
      const isVampire = seen.role === ROLE.VAMPIRE;
      const text = `${seen.name} ${isVampire ? 'bir VAMPİR!' : 'vampir değil.'}`;
      seer.notes.push({ text: `🔮 ${this.round}. gece: ${text}`, ts: Date.now() });
      this.announce('seer', 'Kristal küre konuştu', text,
        { targets: [{ id: seen.id, cause: isVampire ? 'vampir' : 'temiz' }] }, [seer.id]);
    }

    this.afterDeaths(deaths.map((d) => d.id), () => this.startDay());
  }

  // Ölenler arasında avcı varsa önce son atışını yapar, sonra kazanan kontrol edilir.
  afterDeaths(deadIds, next) {
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
    this.announce('hunter', 'Avcı düştü!', `${hunter.name} bir avcıydı. Son nefesinde birini vurabilir…`,
      { targets: [{ id: hunter.id }] });
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
      this.announce('shot', 'Avcının son atışı', `${target.name} vuruldu!${role}`,
        { targets: [{ id: target.id }], actorId: hunter ? hunter.id : null });
    } else {
      this.addLog('Avcı kimseyi vurmadı.', 'safe');
      this.announce('nohunt', 'Avcı ıskaladı', 'Avcı kimseyi vurmadan gözlerini kapadı.');
    }
    if (!this.checkWin()) next();
  }

  startDay() {
    this.dayVotes = new Map();
    this.dayShortened = false;
    this.setPhase('day', this.settings.daySec * 1000, () => this.endDay());
    this.addLog(`${this.round}. gün başladı.`, 'day');
    this.changed();
  }

  voteWeight(voterId) {
    const p = this.players.get(voterId);
    return p && p.role === ROLE.MAYOR ? 2 : 1;
  }

  vote(byId, targetId) {
    if (this.phase !== 'day') return 'Oylama sadece gündüz yapılır.';
    const p = this.players.get(byId);
    if (!p || !p.alive) return 'Ölüler oy veremez.';

    if (targetId === null || this.dayVotes.get(byId) === targetId) {
      this.dayVotes.delete(byId);
    } else if (targetId === SLEEP) {
      this.dayVotes.set(byId, SLEEP);
    } else {
      const target = this.players.get(targetId);
      if (!target || !target.alive) return 'Bu oyuncuya oy verilemez.';
      if (targetId === byId) return 'Kendine oy veremezsin.';
      this.dayVotes.set(byId, targetId);
    }
    if (!this.checkDayProgress()) this.changed();
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

  endDay(unanimousSleep = false) {
    if (unanimousSleep) {
      this.addLog(`${this.round}. gün köy oy birliğiyle uyumaya karar verdi.`, 'safe');
      this.announce('sleep', 'Hızlı Uyu', 'Köy oy birliğiyle uyumaya karar verdi. Kimse asılmadı.');
      this.startNight();
      return;
    }

    const votes = new Map();
    let sleepCount = 0;
    for (const [voterId, targetId] of this.dayVotes) {
      const voter = this.players.get(voterId);
      if (!voter || !voter.alive) continue;
      if (targetId === SLEEP) { sleepCount += this.voteWeight(voterId); continue; }
      const target = this.players.get(targetId);
      if (target && target.alive) votes.set(voterId, targetId);
    }
    const { max, top } = tally(votes, (id) => this.voteWeight(id));

    if (max > 0 && top.length === 1 && max > sleepCount) {
      const hanged = this.players.get(top[0]);
      hanged.alive = false;
      const role = this.settings.revealRoles || hanged.role === ROLE.JESTER ? ` Rolü: ${ROLE_LABEL[hanged.role]}.` : '';
      this.addLog(`${this.round}. gün ${hanged.name} ${max} oyla asıldı.${role}`, 'death');
      this.announce('hanged', 'Köy kararını verdi', `${hanged.name} ${max} oyla asıldı!${role}`,
        { targets: [{ id: hanged.id }] });
      if (hanged.role === ROLE.JESTER) {
        this.finish(ROLE.JESTER);
        return;
      }
      this.afterDeaths([hanged.id], () => this.startNight());
      return;
    }

    const why = max === 0 ? 'Kimse oy vermedi' : 'Oylar eşit çıktı';
    this.addLog(`${this.round}. gün kimse asılmadı (${why.toLocaleLowerCase('tr')}).`, 'safe');
    this.announce('nohang', 'Kimse asılmadı', `${why}, köy bu gün kimseyi asmadı.`);
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
    this.phase = 'ended';
    this.deadline = null;
    this.winner = winner;
    this.hunterId = null;
    this.hunterNext = null;
    this.winners = [...this.players.values()].filter((p) => teamOf(p.role) === winner).map((p) => p.id);
    const extra = { winner, targets: this.winners.map((id) => ({ id })) };
    if (winner === ROLE.VILLAGER) {
      this.addLog('Tüm vampirler yok edildi. Köylüler kazandı!', 'win');
      this.announce('win', 'Köylüler kazandı!', 'Tüm vampirler yok edildi. Köy kurtuldu!', extra);
    } else if (winner === ROLE.VAMPIRE) {
      this.addLog('Vampirler köyü ele geçirdi. Vampirler kazandı!', 'win');
      this.announce('win', 'Vampirler kazandı!', 'Köyde vampirlere karşı koyacak kimse kalmadı.', extra);
    } else {
      this.addLog('Soytarı asıldı ve kahkahalarla kazandı!', 'win');
      this.announce('win', 'Soytarı kazandı!', 'Köy Soytarı\'yı astı… tam da onun istediği gibi!', extra);
    }
    // Lobide olduğu gibi, bitmiş oyunda da bağlantısı kopanlar bir süre sonra çıkarılır.
    for (const p of this.players.values()) {
      if (!p.connected && !p.left) p.graceTimer = setTimeout(() => this.removePlayer(p.id), LOBBY_GRACE_MS);
    }
    this.changed();
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
  // vampirler kendi aralarında konuşur, ölüler sadece ölülerle konuşur.
  chat(fromId, rawText) {
    const p = this.players.get(fromId);
    if (!p) return { error: 'Odada değilsin.' };
    const text = String(rawText || '').replace(/\s+/g, ' ').trim().slice(0, 300);
    if (!text) return { error: 'Boş mesaj gönderilemez.' };

    const all = [...this.players.values()].filter((x) => !x.left);
    let channel = 'genel';
    let recipients = all;

    if (['night', 'day', 'hunter'].includes(this.phase)) {
      if (!p.alive) {
        channel = 'olu';
        recipients = all.filter((x) => !x.alive);
      } else if (this.phase === 'night') {
        if (p.role !== ROLE.VAMPIRE) return { error: 'Gece köy uyur, konuşamazsın.' };
        channel = 'vampir';
        recipients = all.filter((x) => x.role === ROLE.VAMPIRE && x.alive);
      }
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
    if (this.log.length > 100) this.log.shift();
  }

  // to verilirse duyuru sadece o oyunculara gider (ör. kahinin sonucu).
  announce(kind, title, text, extra = {}, to = null) {
    this.hooks.announce(this, { kind, title, text, ...extra }, to);
  }

  changed() {
    this.hooks.update(this);
  }

  publicInfo() {
    const host = this.players.get(this.hostId);
    return {
      id: this.id,
      name: this.name,
      players: [...this.players.values()].filter((p) => !p.left).length,
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
    const iAmVampire = me && me.role === ROLE.VAMPIRE;

    const players = [...this.players.values()].map((p) => {
      let role = null;
      if (p.id === viewerId || ended) role = p.role;
      else if (iAmVampire && p.role === ROLE.VAMPIRE) role = p.role;
      else if (!p.alive && this.settings.revealRoles) role = p.role;
      return {
        id: p.id, name: p.name, alive: p.alive, connected: p.connected,
        left: p.left, isHost: p.id === this.hostId, role, look: p.look, pos: p.pos,
      };
    });

    const activeCount = players.filter((p) => !p.left).length;
    const view = {
      serverNow: Date.now(),
      room: {
        id: this.id, name: this.name, phase: this.phase, round: this.round,
        deadline: this.deadline, hostId: this.hostId, settings: this.settings,
        hasPassword: Boolean(this.password), winner: this.winner, winners: this.winners,
        minPlayers: MIN_PLAYERS, maxPlayers: MAX_PLAYERS,
        vampireCount: vampireCount(activeCount),
        distribution: rolesFor(activeCount, enabledSpecials(this.settings)),
        hunterId: this.hunterId,
      },
      me: me ? {
        id: me.id, name: me.name, role: me.role, alive: me.alive, look: me.look, notes: me.notes,
      } : null,
      players,
      log: this.log,
      night: null,
      day: null,
    };

    if (this.phase === 'night' && me && me.alive) {
      if (me.role === ROLE.VAMPIRE) {
        view.night = {
          mySelection: this.nightVampire.get(viewerId) || null,
          team: [...this.nightVampire].map(([vampId, targetId]) => ({
            vampId, name: this.players.get(vampId).name, targetId,
          })),
        };
      } else if (me.role === ROLE.DOCTOR) {
        view.night = { mySelection: this.nightDoctor, team: [] };
      } else if (me.role === ROLE.SEER) {
        view.night = { mySelection: this.nightSeer, team: [] };
      } else if (me.role === ROLE.WITCH) {
        view.night = {
          mySelection: null,
          team: [],
          witch: {
            heal: this.nightWitch.heal,
            poison: this.nightWitch.poison,
            healUsed: this.witchUsed.heal,
            poisonUsed: this.witchUsed.poison,
            victims: this.vampireTargets(),
          },
        };
      }
    }

    if (this.phase === 'day') {
      const votes = {};
      const voted = [];
      const sleeping = [];
      for (const [voterId, targetId] of this.dayVotes) {
        const voter = this.players.get(voterId);
        if (!voter || !voter.alive) continue;
        voted.push(voterId);
        if (targetId === SLEEP) { sleeping.push(voterId); continue; }
        (votes[targetId] = votes[targetId] || []).push({ id: voterId, w: this.voteWeight(voterId) });
      }
      view.day = {
        votes,
        voted,
        sleeping,
        sleepers: sleeping.length,
        voters: players.filter((p) => p.alive && p.connected).length,
        myVote: this.dayVotes.get(viewerId) || null,
        shortened: this.dayShortened,
      };
    }
    return view;
  }
}

module.exports = {
  Room, ROLE, SLEEP, MIN_PLAYERS, MAX_PLAYERS, SPECIAL_ROLES, ROLE_LABEL, COLOR_COUNT, HAT_COUNT,
  vampireCount, assignRoles, rolesFor, winnerOf, tally, normalizeSettings, teamOf,
};
