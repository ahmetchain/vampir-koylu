'use strict';

// Hikâye motoru ("Köy Günlüğü"): oyun olaylarını Türkçe anlatıya, dedikoduya ve sahne seçimine
// çevirir. Saf, bağımlılıksız, tohumlu. YALNIZCA herkese açık bilgi alır: roller sadece herkese
// açıksa dikkate alınır (bkz. publicRole), gece seçimleri hiçbir şekilde alınmaz.
// Ayrıntılı sözleşme: docs/STORY.md

const { T, EPI } = require('./texts');
const { SCENARIOS, SCENARIO_BY_ID } = require('./scenarios');
const { JOBS } = require('./jobs');
const { R, rumorCandidates, SLEEP } = require('./rumors');
const { makeRng, shuffled, weightedPick, Picker, compose, MAX_STORY } = require('./engine');
const { sayi, sira, ek, trUpperFirst } = require('./turkish');

const ROLE_LABEL = {
  vampir: 'Vampir', iftiraci: 'İftiracı', doktor: 'Doktor', kahin: 'Kahin', gozcu: 'Gözcü', cadi: 'Cadı',
  avci: 'Avcı', muhtar: 'Muhtar', soytari: 'Soytarı', koylu: 'Köylü',
};
const EVIL = new Set(['vampir', 'iftiraci']);
const VILLAGE = new Set(['doktor', 'kahin', 'gozcu', 'cadi', 'avci', 'muhtar', 'koylu']);
const isEvil = (r) => EVIL.has(r);
const isVillage = (r) => VILLAGE.has(r);

const HANG_SCENES = ['gallows', 'exile', 'cellar'];
const BITE_SCENES = ['bite', 'bats', 'vanish'];
const SCENE_DEFAULT = { hanged: 'gallows', death: 'bite', shot: 'arrow' };
const HANG_VERB = {
  gallows: { text: 'asıldı', winVerb: 'astı' },
  exile: { text: 'köyden sürüldü', winVerb: 'köyden sürdü' },
  cellar: { text: 'mahzene kapatıldı', winVerb: 'mahzene kapattı' },
};
// Ton katmanına göre sahne ağırlıkları: erken oyunda daha "yumuşak", geç oyunda daha sert sahneler.
const HANG_WEIGHTS = {
  early: { cellar: 4, exile: 3, gallows: 2 },
  mid: { exile: 4, gallows: 3, cellar: 2 },
  late: { gallows: 4, exile: 3, cellar: 2 },
};
const BITE_WEIGHTS = {
  early: { vanish: 4, bats: 3, bite: 2 },
  mid: { bats: 4, bite: 3, vanish: 2 },
  late: { bite: 4, bats: 3, vanish: 2 },
};

// Genel havuz anahtarı -> senaryodaki ek havuz.
const SCENARIO_MAP = {
  'night.early': 'night', 'night.mid': 'night', 'night.late': 'night',
  'safe.early': 'safe', 'safe.mid': 'safe', 'safe.late': 'safe',
  'death.coda.early': 'death.coda', 'death.coda.mid': 'death.coda', 'death.coda.late': 'death.coda',
  'day.early': 'day', 'day.mid': 'day', 'day.late': 'day',
  'hanged.coda.early': 'hanged.coda', 'hanged.coda.mid': 'hanged.coda', 'hanged.coda.late': 'hanged.coda',
  'sleep.any': 'sleep', 'nohang.novote': 'nohang', 'nohang.tieAnon': 'nohang',
  'win.koylu': 'win.koylu', 'win.vampir': 'win.vampir', 'win.soytari': 'win.soytari',
  'rumor.atmo': 'rumor', intro: 'intro', 'epi.open': 'epi.open',
};

const POOLS = { ...T, ...EPI, ...R };

// ---------- düz (olgusal) satırlar: hata anında da bunlar döner ----------
const FACT = {
  start: () => ({ title: 'Roller dağıtıldı', text: 'Kartına bak ve rolünü kimseye gösterme!' }),
  night: (round) => ({ title: `${round}. Gece`, text: 'Köy uyuyor... Gece rolleri seçimini yapsın.' }),
  safe: () => ({ title: 'Sabah oldu', text: 'Bu gece kimse ölmedi.' }),
  deathLine: (name, cause, role) => `${name} bu gece ${cause === 'zehir' ? 'zehirlenerek öldü' : 'vampir tarafından öldürüldü'}!${roleText(role)}`,
  day: (round) => ({ title: `${round}. Gün`, text: `${round}. gün başladı.` }),
  hanged: (name, n, role, scene) => ({
    title: 'Köy kararını verdi',
    text: `${name} ${n} oyla ${HANG_VERB[scene].text}!${roleText(role)}`,
  }),
  nohang: (reason) => ({
    title: 'Kimse asılmadı',
    text: `${reason === 'novote' ? 'Kimse oy vermedi' : 'Oylar eşit çıktı'}, köy bugün kimseyi asmadı.`,
  }),
  sleep: () => ({ title: 'Hızlı Uyu', text: 'Köy oy birliğiyle uyumaya karar verdi. Kimse asılmadı.' }),
  hunter: (name) => ({ title: 'Avcı düştü!', text: `${name} bir avcıydı. Son nefesinde birini vurabilir…` }),
  shot: (name, role) => ({ title: 'Avcının son atışı', text: `${name} vuruldu!${roleText(role)}` }),
  nohunt: () => ({ title: 'Avcı ıskaladı', text: 'Avcı kimseyi vurmadan gözlerini kapadı.' }),
  left: (name, role) => ({ title: 'Bir oyuncu ayrıldı', text: `${name} oyundan ayrıldı${role ? ` (${ROLE_LABEL[role]})` : ''}.` }),
  win: (winner, verb = 'astı') => {
    if (winner === 'koylu') return { title: 'Köylüler kazandı!', text: 'Tüm vampirler yok edildi. Köy kurtuldu!' };
    if (winner === 'vampir') return { title: 'Vampirler kazandı!', text: 'Köyde vampirlere karşı koyacak kimse kalmadı.' };
    return { title: 'Soytarı kazandı!', text: `Köy Soytarı'yı ${verb}… tam da onun istediği gibi!` };
  },
};

function roleText(role) {
  return role && ROLE_LABEL[role] ? ` Rolü: ${ROLE_LABEL[role]}.` : '';
}

function str(v, fallback = '') {
  return typeof v === 'string' ? v : (typeof v === 'number' ? String(v) : fallback);
}

function intOr(v, fallback) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.round(n) : fallback;
}

// Meslek dağıtımı: tohuma ve oyuncu sırasına göre, oyun içinde benzersiz (32 meslek, en fazla 20 oyuncu).
function assignJobs(playerIds, seed) {
  const rng = makeRng(`${str(seed, 'jobs')}#jobs`);
  const order = shuffled(rng, JOBS);
  const out = [];
  const seen = new Set();
  let i = 0;
  for (const raw of Array.isArray(playerIds) ? playerIds : []) {
    const id = str(raw);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    const job = order[i % order.length];
    i++;
    out.push({ id, job: { id: job.id, label: job.label } });
  }
  return out;
}

class Chronicle {
  constructor(opts = {}) {
    const o = opts && typeof opts === 'object' ? opts : {};
    this.seed = o.seed !== undefined && o.seed !== null ? str(o.seed, String(o.seed)) : Math.random().toString(36).slice(2, 10);
    this.rng = makeRng(this.seed);
    this.revealRoles = o.revealRoles !== false;
    const forced = SCENARIO_BY_ID.get(str(o.scenario));
    this.scen = forced || SCENARIOS[Math.floor(this.rng() * SCENARIOS.length)];
    this.picker = new Picker(this.rng, POOLS, this.scen, SCENARIO_MAP);

    // Herkese açık kadro: id, ad, meslek, hayatta mı, herkese açık rolü (yoksa null).
    this.roster = new Map();
    const list = Array.isArray(o.players) ? o.players : [];
    const ids = [];
    for (const p of list) {
      const id = str(p && p.id);
      if (!id || this.roster.has(id)) continue;
      ids.push(id);
      this.roster.set(id, { id, name: str(p.name, 'İsimsiz') || 'İsimsiz', job: null, alive: true, role: null });
    }
    const jobById = new Map(JOBS.map((j) => [j.id, j]));
    for (const { id, job } of assignJobs(ids, this.seed)) this.roster.get(id).job = jobById.get(job.id);
    this.total = Math.max(1, this.roster.size);

    this.round = 0;
    this.days = new Map();   // round -> gün kaydı
    this.nights = new Map(); // round -> { deaths }
    this.events = [];        // epilog için kronolojik kamu olayları
    this.finalRoles = null;
    this.winner = null;
    this.firstDeath = null;
    this.quietStreak = 0;
    this.noElimStreak = 0;
    this.innocentStreak = 0;
    this.lastDawnSafe = false;
    this.lastHangScene = null;
    this.lastBiteScene = null;
    this.lastDayOutcome = null;
    this.lastRumorSubject = null;
    this.usedRumorFacts = new Set();
  }

  // ---------- yardımcılar ----------
  scenario() {
    return { id: this.scen.id, name: this.scen.name, mood: this.scen.mood };
  }

  person(id, name) {
    const p = this.roster.get(str(id));
    if (p) return { name: p.name, job: p.job, id: p.id };
    const n = str(name);
    if (n) return { name: n, job: null, id: str(id) };
    return { name: 'bir komşu', job: null, generic: true, id: str(id) };
  }

  nameOf(id, name) {
    const p = this.person(id, name);
    return p.generic ? 'Biri' : p.name;
  }

  aliveCount() {
    let n = 0;
    for (const p of this.roster.values()) if (p.alive) n++;
    return n;
  }

  tier() {
    const alive = this.aliveCount();
    const deadFrac = 1 - alive / this.total;
    if (alive <= 3 || deadFrac >= 0.5) return 'late';
    if (deadFrac >= 0.2 || this.round >= 3) return 'mid';
    return 'early';
  }

  baseVars(extra = {}) {
    const alive = this.aliveCount();
    const r = Math.max(1, this.round);
    return {
      r, rw: sayi(r), rord: sira(r), alive, alivew: sayi(alive), ...extra,
    };
  }

  ctx(persons = {}, vars = {}, list = null, jobRate) {
    const c = { persons, vars: this.baseVars(vars), list };
    if (jobRate !== undefined) c.jobRate = jobRate;
    return c;
  }

  pick(keys, ctx, opts) {
    const res = this.picker.pick(keys, ctx, opts);
    return res ? res.text : null;
  }

  // Sırayla dener: önce bağlama özgü havuz, sonra katman havuzu, sonra kardeş havuzlar; hepsi
  // tükenirse en uzun süredir kullanılmayan satır.
  pickChain(chains, ctx) {
    const list = chains.filter((k) => k && k.length);
    for (const keys of list) {
      const r = this.picker.pick(keys, ctx, { optional: true });
      if (r) return r.text;
    }
    return this.pick(list.flat(), ctx);
  }

  chance(p) {
    return this.rng() < p;
  }

  // Rol sadece herkese açıksa kabul edilir; böylece motor gizli bir rolü asla göremez.
  publicRole(role, { always = false } = {}) {
    const r = str(role);
    if (!ROLE_LABEL[r]) return null;
    if (this.revealRoles || always) return r;
    return null;
  }

  markDead(id, cause, role) {
    const p = this.roster.get(str(id));
    if (p) {
      p.alive = false;
      if (role) p.role = role;
    }
    if (!this.firstDeath) this.firstDeath = { id: str(id), cause, round: this.round };
  }

  pickScene(kind) {
    const tier = this.tier();
    const table = kind === 'hang' ? HANG_WEIGHTS[tier] : BITE_WEIGHTS[tier];
    const last = kind === 'hang' ? this.lastHangScene : this.lastBiteScene;
    const scenes = kind === 'hang' ? HANG_SCENES : BITE_SCENES;
    const scene = weightedPick(this.rng, scenes, (s) => table[s] * (s === last ? 0.25 : 1));
    if (kind === 'hang') this.lastHangScene = scene; else this.lastBiteScene = scene;
    return scene;
  }

  // Rolü açık bir ölünün/elenenin ardından gelecek cümlenin türüne önceden karar verir. Meslek
  // esprisi seçilirse ana cümle mesleği mutlaka anar (jobRate 1), espri havada kalmaz.
  planCoda(role, person) {
    const job = person && person.job;
    if (!role || !job) return 'role';
    if (role === 'vampir' && this.chance(0.6) && job.evil.some((l) => !this.picker.used.has(l))) return 'jobEvil';
    if (isVillage(role) && this.chance(role === 'koylu' ? 0.65 : 0.3) && job.innocent.some((l) => !this.picker.used.has(l))) return 'jobInnocent';
    if (role === 'soytari' && this.chance(0.5)) return 'jobSoytari';
    return 'role';
  }

  roleCoda(context, role, person, plan = 'role') {
    const job = person && person.job;
    const ctx = this.ctx({ a: person });
    if (plan === 'jobEvil') {
      const line = this.pickJobLine(job, 'evil');
      if (line) return line;
    }
    if (plan === 'jobInnocent') {
      const line = this.pickJobLine(job, 'innocent');
      if (line) return line;
    }
    if (plan === 'jobSoytari') {
      const line = this.pick('job.soytari', ctx, { optional: true });
      if (line) return line;
    }
    if (context === 'left') {
      if (role === 'vampir') return this.pick('left.role.vampir', ctx, { optional: true });
      return this.pick('left.role', this.ctx({ a: person }, { role: ROLE_LABEL[role].toLocaleLowerCase('tr'), Role: ROLE_LABEL[role] }), { optional: true });
    }
    const base = context === 'hanged' ? 'hanged.role.' : 'death.role.';
    return this.pick(`${base}${role}`, ctx, { optional: true });
  }

  pickJobLine(job, kind) {
    const lines = (job[kind] || []).filter((l) => !this.picker.used.has(l));
    if (!lines.length) return null;
    const line = lines[Math.floor(this.rng() * lines.length)];
    this.picker.markUsed(line);
    return line;
  }

  dayRecord(round) {
    let d = this.days.get(round);
    if (!d) {
      d = {
        round,
        aliveAtStart: [...this.roster.values()].filter((p) => p.alive).map((p) => p.id),
        ballots: new Map(), weights: new Map(), trail: [], chat: new Map(), outcome: null, closed: false, open: true,
      };
      this.days.set(round, d);
    }
    return d;
  }

  // Gün sonu oy pusulalarını kaydeder (dizi [{voter,target,w}] ya da nesne {voter: target}).
  closeDay(round, ballots, outcome) {
    const d = this.dayRecord(round);
    if (ballots) {
      d.ballots = new Map();
      d.weights = new Map();
      const entries = Array.isArray(ballots)
        ? ballots.map((b) => [b && b.voter, b && b.target, b && b.w])
        : Object.entries(ballots).map(([v, t]) => [v, t, 1]);
      for (const [v, t, w] of entries) {
        const voter = str(v);
        const target = t === SLEEP ? SLEEP : str(t);
        if (!voter || !target) continue;
        d.ballots.set(voter, target);
        d.weights.set(voter, Math.min(2, Math.max(1, intOr(w, 1))));
      }
    }
    d.outcome = outcome;
    d.closed = true;
    d.open = false;
    this.lastDayOutcome = outcome;
    return d;
  }

  tally(d) {
    const counts = new Map();
    let sleep = 0;
    for (const [v, t] of d.ballots) {
      const w = d.weights.get(v) || 1;
      if (t === SLEEP) sleep += w;
      else counts.set(t, (counts.get(t) || 0) + w);
    }
    const sorted = [...counts].sort((a, b) => b[1] - a[1]);
    return { counts, sleep, sorted };
  }

  // ---------- olaylar ----------
  start() {
    const intro = this.pick('intro', this.ctx(), {}) || '';
    this.events.push({ type: 'start' });
    return { ...FACT.start(), story: intro, scenario: { ...this.scenario(), intro } };
  }

  night(input = {}) {
    const round = intOr(input.round, this.round + 1);
    this.round = round;
    for (const d of this.days.values()) d.open = false;
    const tier = this.tier();
    const prev = this.lastDayOutcome;
    let keys = [`night.${tier}`];
    if (round <= 1) keys = ['night.first'];
    else if (prev && this.chance(0.55)) {
      if (prev.type === 'hanged' && prev.role && isEvil(prev.role)) keys = ['night.afterCaught'];
      else if (prev.type === 'hanged' && prev.role && isVillage(prev.role)) keys = ['night.afterInnocent'];
      else if (prev.type !== 'hanged') keys = ['night.afterNoElim'];
    }
    this.lastDayOutcome = null;
    const ctx = this.ctx();
    const main = this.pickChain([keys, [`night.${tier}`], ['night.early', 'night.mid', 'night.late']], ctx);
    const coda = this.chance(0.35) && !main.includes(ctx.vars.alivew) ? this.pick('night.coda', ctx, { optional: true }) : null;
    this.events.push({ type: 'night', round });
    return { ...FACT.night(round), story: compose(main, [coda]) };
  }

  dawn(input = {}) {
    const round = intOr(input.round, this.round);
    this.round = round;
    const raw = Array.isArray(input.deaths) ? input.deaths : [];
    const deaths = [];
    for (const d of raw) {
      const id = str(d && d.id);
      if (!id || deaths.some((x) => x.id === id)) continue;
      deaths.push({ id, name: str(d.name), cause: d.cause === 'zehir' ? 'zehir' : 'vampir', role: this.publicRole(d.role) });
    }
    this.nights.set(round, { deaths: deaths.map(({ id, cause }) => ({ id, cause })) });

    if (!deaths.length) {
      this.quietStreak++;
      this.lastDawnSafe = true;
      this.events.push({ type: 'safe', round });
      const tier = this.tier();
      const ctx = this.ctx({}, { streakw: sayi(this.quietStreak) });
      let keys = [`safe.${tier}`];
      if (this.quietStreak >= 2 && this.chance(0.6)) keys = ['safe.streak'];
      const main = this.pickChain([keys, [`safe.${tier}`], ['safe.early', 'safe.mid', 'safe.late']], ctx);
      return { ...FACT.safe(), story: compose(main) };
    }

    this.quietStreak = 0;
    this.lastDawnSafe = false;
    const wasFirst = !this.firstDeath;
    const persons = deaths.map((d) => this.person(d.id, d.name));
    const targets = deaths.map((d) => ({
      id: d.id, cause: d.cause, scene: d.cause === 'zehir' ? 'poison' : null,
    }));
    for (const t of targets) if (!t.scene) t.scene = this.pickScene('bite');

    const texts = deaths.map((d, i) => FACT.deathLine(persons[i].generic ? 'Biri' : persons[i].name, d.cause, d.role));
    let story;
    const vi = deaths.findIndex((d) => d.cause === 'vampir');
    const pi = deaths.findIndex((d) => d.cause === 'zehir');
    if (deaths.length >= 2 && vi >= 0 && pi >= 0) {
      const ctx = this.ctx({ a: persons[vi], b: persons[pi] });
      const main = this.pick(`death.double.${targets[vi].scene}`, ctx);
      const coda = this.pick(`death.coda.${this.tierAfter(deaths.length)}`, this.ctx(), { optional: true });
      story = compose(main, [coda]);
    } else {
      const d = deaths[0];
      const t = targets[0];
      const plan = d.role ? this.planCoda(d.role, persons[0]) : 'role';
      const ctx = this.ctx({ a: persons[0] }, {}, null, plan === 'role' ? undefined : 1);
      const main = this.pick(`death.${t.scene}`, ctx);
      story = compose(main, this.deathCodas(d.role, persons[0], wasFirst, deaths.length, 'death', plan));
    }
    for (let i = 0; i < deaths.length; i++) {
      this.markDead(deaths[i].id, deaths[i].cause, deaths[i].role);
      this.events.push({ type: 'death', round, id: deaths[i].id, cause: deaths[i].cause, role: deaths[i].role });
    }
    return { title: 'Sabah oldu', text: texts.join(' '), story, scene: targets[0].scene, targets };
  }

  // Ölümler kadroya işlenmeden önce, sonraki durumun ton katmanı.
  tierAfter(deadNow) {
    const alive = this.aliveCount() - deadNow;
    const deadFrac = 1 - alive / this.total;
    if (alive <= 3 || deadFrac >= 0.5) return 'late';
    if (deadFrac >= 0.2 || this.round >= 3) return 'mid';
    return 'early';
  }

  deathCodas(role, person, wasFirst, deadNow, context, plan) {
    if (role) return [this.roleCoda(context, role, person, plan)];
    if (wasFirst && this.chance(0.8)) return [this.pick('death.first', this.ctx(), { optional: true })];
    if (this.chance(0.75)) {
      const alive = Math.max(0, this.aliveCount() - deadNow);
      return [this.pick(`death.coda.${this.tierAfter(deadNow)}`, this.ctx({}, { alive, alivew: sayi(alive) }), { optional: true })];
    }
    return [];
  }

  day(input = {}) {
    const round = intOr(input.round, this.round);
    this.round = round;
    const d = this.dayRecord(round);
    d.open = true;
    d.aliveAtStart = [...this.roster.values()].filter((p) => p.alive).map((p) => p.id);
    const tier = this.tier();
    const keys = this.lastDawnSafe && this.chance(0.5) ? ['day.afterSafe'] : [`day.${tier}`];
    const ctx = this.ctx();
    const main = this.pickChain([keys, [`day.${tier}`], ['day.early', 'day.mid', 'day.late']], ctx);
    this.events.push({ type: 'day', round });
    return { ...FACT.day(round), story: compose(main), rumor: { text: this.rumor(round) } };
  }

  rumor(round) {
    const st = { roster: this.roster, days: this.days, nights: this.nights, isEvil, isVillage };
    let cands = [];
    try {
      cands = rumorCandidates(st, round)
        .filter((c) => !this.usedRumorFacts.has(this.factKey(c)))
        .filter((c) => c.persons.a !== this.lastRumorSubject || this.rng() < 0.2);
    } catch (err) {
      cands = [];
    }
    if (cands.length && this.chance(0.75)) {
      // Daha önce kullanılmamış aileler öne çıkar.
      const famUse = new Map();
      for (const k of this.usedRumorFacts) famUse.set(k.split(':')[0], (famUse.get(k.split(':')[0]) || 0) + 1);
      const tried = new Set();
      while (tried.size < cands.length) {
        const c = weightedPick(this.rng, cands.filter((x) => !tried.has(x)), (x) => 1 / (1 + 2 * (famUse.get(x.family) || 0)));
        tried.add(c);
        const persons = {};
        for (const [k, id] of Object.entries(c.persons)) persons[k] = this.person(id);
        const vars = { ...c.vars };
        if (vars.n !== undefined) { vars.nw = sayi(vars.n); vars.Nw = trUpperFirst(sayi(vars.n)); }
        const res = this.picker.pick(c.key, { persons, vars: this.baseVars(vars) }, { optional: true });
        if (res) {
          this.usedRumorFacts.add(this.factKey(c));
          this.lastRumorSubject = c.persons.a;
          this.lastRumorFact = c;
          return res.text;
        }
      }
    }
    this.lastRumorFact = null;
    return this.pick('rumor.atmo', this.ctx()) || '';
  }

  factKey(c) {
    return `${c.family}:${Object.values(c.persons).join(',')}:${c.fact && c.fact.day !== undefined ? c.fact.day : ''}`;
  }

  chat(id) {
    const pid = str(id);
    const p = this.roster.get(pid);
    const d = this.days.get(this.round);
    if (!p || !p.alive || !d || !d.open) return;
    d.chat.set(pid, (d.chat.get(pid) || 0) + 1);
  }

  vote(input = {}) {
    const d = this.days.get(this.round);
    if (!d || !d.open) return;
    const voter = str(input.voter);
    if (!voter || !this.roster.has(voter)) return;
    const to = input.to === null || input.to === undefined ? null : (input.to === SLEEP ? SLEEP : str(input.to) || null);
    const msLeft = Number.isFinite(Number(input.msLeft)) ? Number(input.msLeft) : null;
    if (d.trail.length < 2000) d.trail.push({ voter, to, msLeft });
  }

  hanged(input = {}) {
    const round = intOr(input.round, this.round);
    this.round = round;
    const id = str(input.id);
    const person = this.person(id, input.name);
    const role = this.publicRole(input.role, { always: input.role === 'soytari' });
    const d = this.closeDay(round, input.ballots, { type: 'hanged', id, role });
    const { counts, sleep, sorted } = this.tally(d);
    const n = intOr(input.votes, counts.get(id) || 0);
    const scene = this.pickScene('hang');
    const tier = this.tier();
    const streak = Boolean(role && isVillage(role) && this.innocentStreak >= 1 && this.chance(0.5));
    const plan = role && !streak ? this.planCoda(role, person) : 'role';
    const nv = { n, nw: sayi(n), Nw: trUpperFirst(sayi(n)) };
    const ctx = this.ctx({ a: person }, nv, null, plan === 'role' ? undefined : 1);
    const main = this.pick(`hanged.${scene}`, ctx);

    let coda = null;
    if (role) {
      if (streak) {
        coda = this.pick('hanged.streakInnocent', this.ctx({}, { streakw: sayi(this.innocentStreak + 1) }), { optional: true });
      }
      if (!coda) coda = this.roleCoda('hanged', role, person, plan);
    } else {
      const second = Math.max(sleep, sorted.length > 1 && sorted[0][0] === id ? sorted[1][1] : 0);
      const total = d.ballots.size;
      const unanimous = total >= 3 && [...d.ballots.values()].every((t) => t === id);
      if (counts.size && n - second <= 1 && this.chance(0.8)) coda = this.pick('hanged.close', ctx, { optional: true });
      else if (unanimous && this.chance(0.8)) coda = this.pick('hanged.landslide', ctx, { optional: true });
      if (!coda && this.chance(0.65)) {
        const alive = Math.max(0, this.aliveCount() - 1);
        coda = this.pick(`hanged.coda.${tier}`, this.ctx({}, { alive, alivew: sayi(alive) }), { optional: true });
      }
    }
    if (role && isVillage(role)) this.innocentStreak++;
    else this.innocentStreak = 0;
    this.noElimStreak = 0;
    this.markDead(id, 'hanged', role);
    this.events.push({ type: 'hanged', round, id, role, scene, votes: n });
    const name = person.generic ? 'Biri' : person.name;
    const fact = FACT.hanged(name, n, role, scene);
    return {
      ...fact,
      story: compose(main, [coda]),
      scene,
      log: `${round}. gün ${name} ${n} oyla ${HANG_VERB[scene].text}.${roleText(role)}`,
    };
  }

  noHang(input = {}) {
    const round = intOr(input.round, this.round);
    this.round = round;
    const d = this.closeDay(round, input.ballots, { type: 'tie' });
    const { sorted } = this.tally(d);
    let reason = input.reason === 'novote' || input.reason === 'tie' ? input.reason : null;
    if (!reason) reason = sorted.length ? 'tie' : 'novote';
    let tied = [];
    if (sorted.length >= 2 && sorted[0][1] === sorted[1][1]) {
      tied = sorted.filter(([, c]) => c === sorted[0][1]).map(([t]) => t);
    }
    d.outcome = reason === 'tie' ? { type: 'tie', tied } : { type: 'novote' };
    this.lastDayOutcome = d.outcome;
    this.noElimStreak++;
    this.innocentStreak = this.innocentStreak; // değişmez
    const tier = this.tier();
    let main;
    if (reason === 'tie' && tied.length >= 2 && tied.length <= 3 && this.chance(0.7)) {
      main = this.pick('nohang.tie', this.ctx({}, {}, tied.map((t) => this.person(t))), { optional: true });
    }
    if (!main) main = this.pickChain([[reason === 'tie' ? 'nohang.tieAnon' : 'nohang.novote'], ['nohang.any']], this.ctx());
    const coda = this.chance(0.5) ? this.pick(`nohang.coda.${tier}`, this.ctx(), { optional: true }) : null;
    this.events.push({ type: 'nohang', round, reason });
    return { ...FACT.nohang(reason), story: compose(main, [coda]) };
  }

  sleep(input = {}) {
    const round = intOr(input.round, this.round);
    this.round = round;
    this.closeDay(round, input.ballots, { type: 'sleep' });
    const tier = this.tier();
    const ctx = this.ctx({}, { streakw: sayi(this.noElimStreak + 1) });
    const main = (this.noElimStreak >= 1 && this.chance(0.6) && this.pick('sleep.streak', ctx, { optional: true }))
      || this.pickChain([['sleep.any'], ['nohang.any']], ctx);
    const coda = this.chance(0.5) ? this.pick(`sleep.coda.${tier}`, ctx, { optional: true }) : null;
    this.noElimStreak++;
    this.events.push({ type: 'sleep', round });
    return { ...FACT.sleep(), story: compose(main, [coda]) };
  }

  hunter(input = {}) {
    const id = str(input.id);
    const person = this.person(id, input.name);
    const p = this.roster.get(id);
    if (p) p.role = 'avci'; // avcı duyurusu rolü herkese açar
    const ctx = this.ctx({ a: person });
    // Avcı az önce meydan kararıyla sürüldüyse/kapatıldıysa sahneye uygun havuz.
    const lastEv = this.events[this.events.length - 1];
    const fromHang = lastEv && lastEv.type === 'hanged' && lastEv.id === id && lastEv.scene !== 'gallows' ? lastEv.scene : null;
    const main = this.pickChain([fromHang ? [`hunter.${fromHang}`] : [], ['hunter.any']], ctx);
    const coda = this.tier() === 'late' && this.chance(0.6) ? this.pick('hunter.coda', ctx, { optional: true }) : null;
    this.events.push({ type: 'hunter', round: this.round, id });
    return { ...FACT.hunter(person.generic ? 'Biri' : person.name), story: compose(main, [coda]) };
  }

  shot(input = {}) {
    const id = str(input.id);
    const person = this.person(id, input.name);
    const hunterKnown = this.roster.has(str(input.hunterId));
    const hunter = hunterKnown ? this.person(input.hunterId) : null;
    const role = this.publicRole(input.role);
    const plan = role ? this.planCoda(role, person) : 'role';
    const ctx = this.ctx(hunter ? { a: person, b: hunter } : { a: person }, {}, null, plan === 'role' ? undefined : 1);
    const main = this.pick(hunter ? 'shot.any' : 'shot.anon', ctx) || this.pick('shot.anon', this.ctx({ a: person }));
    const codas = role ? [this.roleCoda('shot', role, person, plan)] : this.deathCodas(null, person, !this.firstDeath, 1, 'shot');
    this.markDead(id, 'shot', role);
    this.events.push({ type: 'shot', round: this.round, id, hunterId: hunterKnown ? str(input.hunterId) : null, role });
    return { ...FACT.shot(person.generic ? 'Biri' : person.name, role), story: compose(main, codas), scene: 'arrow' };
  }

  noHunt(input = {}) {
    const hid = str(input.hunterId);
    const persons = this.roster.has(hid) ? { a: this.person(hid) } : {};
    const main = this.pick('nohunt.any', this.ctx(persons));
    this.events.push({ type: 'nohunt', round: this.round });
    return { ...FACT.nohunt(), story: compose(main) };
  }

  left(input = {}) {
    const id = str(input.id);
    const person = this.person(id, input.name);
    const p = this.roster.get(id);
    if (p && !p.alive) {
      // Zaten ölü biri ayrıldı: duyuru yok, anlatı da yok.
      return { ...FACT.left(person.name, null), story: '' };
    }
    const role = this.publicRole(input.role);
    const plan = role ? this.planCoda(role, person) : 'role';
    const main = this.pick('left.any', this.ctx({ a: person }, {}, null, plan === 'role' ? undefined : 1));
    const coda = role ? this.roleCoda('left', role, person, plan) : null;
    this.markDead(id, 'left', role);
    this.events.push({ type: 'left', round: this.round, id, role });
    return { ...FACT.left(person.generic ? 'Biri' : person.name, role), story: compose(main, [coda]) };
  }

  // Oyun sonu: artık bütün roller herkese açık, roles (id -> rol) verilebilir.
  win(input = {}) {
    const winner = ['koylu', 'vampir', 'soytari'].includes(input.winner) ? input.winner : 'koylu';
    this.winner = winner;
    if (input.roles && typeof input.roles === 'object') {
      this.finalRoles = new Map();
      const entries = input.roles instanceof Map ? [...input.roles] : Object.entries(input.roles);
      for (const [id, r] of entries) if (ROLE_LABEL[r]) this.finalRoles.set(str(id), r);
    }
    this.winnerIds = Array.isArray(input.winners) ? input.winners.map((w) => str(w && w.id !== undefined ? w.id : w)) : [];
    const verb = HANG_VERB[this.lastHangScene || 'gallows'].winVerb;
    const alive = this.aliveCount();
    const ctx = this.ctx({}, { alive, alivew: sayi(alive) });
    const main = this.pick(`win.${winner}`, ctx);
    const coda = winner !== 'soytari' && alive > 0 && this.chance(0.5)
      ? this.pick(`win.coda.${winner}`, ctx, { optional: true }) : null;
    this.events.push({ type: 'win', winner });
    return { ...FACT.win(winner, verb), story: compose(main, [coda]) };
  }

  epilogue() {
    const nights = Math.max(1, this.round);
    const parts = [];
    const vars = { nights, nightsw: sayi(nights) };
    const add = (key, persons = {}, extra = {}, list = null) => {
      const res = this.picker.pick(key, { persons, vars: this.baseVars({ ...vars, ...extra }), list }, { maxLen: 400 });
      if (res && res.text) parts.push(res.text);
    };
    add('epi.open');

    const deaths = this.events.filter((e) => ['death', 'hanged', 'shot', 'left'].includes(e.type));
    const first = deaths[0];
    if (first) {
      const key = first.type === 'death' ? `epi.first.${first.cause}` : `epi.first.${first.type}`;
      add(key, { a: this.person(first.id) });
    }

    const roleOf = (id) => (this.finalRoles && this.finalRoles.get(id)) || (this.roster.get(id) || {}).role || null;
    const hangs = this.events.filter((e) => e.type === 'hanged');
    if (!hangs.length) add('epi.elims.none');
    else {
      add('epi.elims.some', {}, {}, hangs.map((h) => this.person(h.id)));
      const roles = hangs.map((h) => roleOf(h.id));
      if (roles.every(Boolean) && this.winner !== 'soytari') {
        const evilCount = roles.filter(isEvil).length;
        if (evilCount === hangs.length) add('epi.elims.allEvil');
        else if (evilCount === 0) add('epi.elims.noEvil');
        else add('epi.elims.someEvil', {}, { n: evilCount, nw: sayi(evilCount) });
      }
    }

    // Göze çarpanlar (en fazla iki).
    const notes = [];
    const firstId = first ? first.id : null;
    const shot = this.events.find((e) => e.type === 'shot' && e.id !== firstId);
    if (shot) notes.push(() => add('epi.shot', shot.hunterId ? { a: this.person(shot.id), b: this.person(shot.hunterId) } : { a: this.person(shot.id) }));
    const poisoned = this.events.filter((e) => e.type === 'death' && e.cause === 'zehir' && e.id !== firstId);
    if (poisoned.length) notes.push(() => add('epi.poison', {}, {}, poisoned.map((e) => this.person(e.id))));
    const quiet = this.events.filter((e) => e.type === 'safe').length;
    if (quiet >= 2) notes.push(() => add('epi.quiet', {}, { n: quiet, nw: sayi(quiet), Nw: trUpperFirst(sayi(quiet)) }));
    const nohang = this.events.filter((e) => e.type === 'nohang' || e.type === 'sleep').length;
    if (nohang >= 2) notes.push(() => add('epi.nohang', {}, { n: nohang, nw: sayi(nohang) }));
    const leavers = this.events.filter((e) => e.type === 'left' && e.id !== firstId);
    if (leavers.length) notes.push(() => add('epi.left', {}, {}, leavers.map((e) => this.person(e.id))));
    for (const f of shuffled(this.rng, notes).slice(0, 2)) f();

    // Maskeler: oyun bitince bütün roller açık; kötü taraftaki herkes meslek esprisiyle anılır.
    if (this.finalRoles) {
      const evil = [...this.finalRoles].filter(([, r]) => isEvil(r)).map(([id]) => id).filter((id) => this.roster.has(id));
      if (evil.length) {
        const persons = evil.map((id) => {
          const p = this.person(id);
          return { ...p, label: p.job ? `${p.job.noun} ${p.name}` : p.name };
        });
        add(persons.length === 1 ? 'epi.mask.one' : 'epi.mask', {}, {}, persons);
        for (const id of evil) {
          const r = this.finalRoles.get(id);
          const p = this.person(id);
          if (r === 'iftiraci' && p.job) add('epi.iftiraci', { a: p });
          else if (r === 'vampir' && p.job) {
            const line = this.pickJobLine(p.job, 'evil') || p.job.evil[0];
            if (line) parts.push(line);
          }
        }
      }
    }

    if (this.winner === 'soytari') {
      const jester = [...hangs].reverse().find((h) => roleOf(h.id) === 'soytari') || hangs[hangs.length - 1];
      if (jester) add('epi.end.soytari', { a: this.person(jester.id) });
    } else if (this.winner) add(`epi.end.${this.winner}`);
    const survivors = [...this.roster.values()].filter((p) => p.alive);
    if (survivors.length && survivors.length <= 6) add('epi.survivors', {}, {}, survivors.map((p) => this.person(p.id)));

    const deathsCount = deaths.length;
    const label = { koylu: 'Köylüler', vampir: 'Vampirler', soytari: 'Soytarı' }[this.winner];
    const text = `${nights} gece, ${deathsCount} kayıp.${label ? ` Kazanan: ${label}.` : ''}`;
    return { title: 'Köy Günlüğü', text, story: parts.join(' '), scenario: this.scenario() };
  }

  jobs() {
    return [...this.roster.values()].map((p) => ({ id: p.id, job: p.job ? { id: p.job.id, label: p.job.label } : null }));
  }

  jobOf(id) {
    const p = this.roster.get(str(id));
    return p && p.job ? { id: p.job.id, label: p.job.label } : null;
  }
}

// ---------- güvenli cephe ----------
// Sunucu anlatı yüzünden asla çökmemeli: her çağrı try/catch içinde; hata olursa düz olgusal satır döner.
const METHODS = ['start', 'night', 'dawn', 'day', 'hanged', 'noHang', 'sleep', 'hunter', 'shot', 'noHunt', 'left', 'win', 'epilogue'];

function fallbackFor(method, input, core) {
  try {
    const i = input && typeof input === 'object' ? input : {};
    const nm = (id, name) => {
      try { return core ? core.nameOf(id, name) : (str(name) || 'Biri'); } catch (e) { return str(name) || 'Biri'; }
    };
    const pr = (role, always) => {
      try { return core ? core.publicRole(role, { always }) : null; } catch (e) { return null; }
    };
    switch (method) {
      case 'start': return { ...FACT.start(), story: '', scenario: { id: 'sisli-vadi', name: 'Sisli Vadi', mood: '', intro: '' } };
      case 'night': return { ...FACT.night(intOr(i.round, 1)), story: '' };
      case 'dawn': {
        const deaths = (Array.isArray(i.deaths) ? i.deaths : []).filter((d) => d && d.id);
        if (!deaths.length) return { ...FACT.safe(), story: '' };
        const targets = deaths.map((d) => ({ id: str(d.id), cause: d.cause === 'zehir' ? 'zehir' : 'vampir', scene: d.cause === 'zehir' ? 'poison' : 'bite' }));
        return {
          title: 'Sabah oldu',
          text: deaths.map((d) => FACT.deathLine(nm(d.id, d.name), d.cause, pr(d.role))).join(' '),
          story: '', scene: targets[0].scene, targets,
        };
      }
      case 'day': return { ...FACT.day(intOr(i.round, 1)), story: '', rumor: { text: '' } };
      case 'hanged': {
        const name = nm(i.id, i.name);
        const role = pr(i.role, i.role === 'soytari');
        const n = intOr(i.votes, 0);
        return { ...FACT.hanged(name, n, role, 'gallows'), story: '', scene: 'gallows', log: `${intOr(i.round, 1)}. gün ${name} ${n} oyla asıldı.${roleText(role)}` };
      }
      case 'noHang': return { ...FACT.nohang(i.reason === 'novote' ? 'novote' : 'tie'), story: '' };
      case 'sleep': return { ...FACT.sleep(), story: '' };
      case 'hunter': return { ...FACT.hunter(nm(i.id, i.name)), story: '' };
      case 'shot': return { ...FACT.shot(nm(i.id, i.name), pr(i.role)), story: '', scene: 'arrow' };
      case 'noHunt': return { ...FACT.nohunt(), story: '' };
      case 'left': return { ...FACT.left(nm(i.id, i.name), pr(i.role)), story: '' };
      case 'win': return { ...FACT.win(['koylu', 'vampir', 'soytari'].includes(i.winner) ? i.winner : 'koylu'), story: '' };
      case 'epilogue': return { title: 'Köy Günlüğü', text: '', story: '' };
      default: return { title: '', text: '', story: '' };
    }
  } catch (e) {
    return { title: '', text: '', story: '' };
  }
}

function createChronicle(opts = {}) {
  let core = null;
  try { core = new Chronicle(opts); } catch (err) { core = null; }
  const api = {
    get seed() { return core ? core.seed : ''; },
    get scenario() {
      try { return core ? core.scenario() : null; } catch (e) { return null; }
    },
    jobs() { try { return core ? core.jobs() : []; } catch (e) { return []; } },
    jobOf(id) { try { return core ? core.jobOf(id) : null; } catch (e) { return null; } },
    chat(id) { try { if (core) core.chat(id); } catch (e) { /* yut */ } },
    vote(input) { try { if (core) core.vote(input || {}); } catch (e) { /* yut */ } },
  };
  for (const m of METHODS) {
    api[m] = (input) => {
      try {
        if (!core) throw new Error('chronicle yok');
        const out = core[m](input && typeof input === 'object' ? input : {});
        if (!out || typeof out.text !== 'string') throw new Error('boş çıktı');
        if (typeof out.story !== 'string') out.story = '';
        return out;
      } catch (err) {
        return fallbackFor(m, input, core);
      }
    };
  }
  // Testler ve hata ayıklama için (sunucu kullanmamalı).
  Object.defineProperty(api, '_core', { value: core, enumerable: false });
  return api;
}

module.exports = {
  createChronicle, assignJobs, Chronicle, ROLE_LABEL, SCENARIOS, JOBS, MAX_STORY,
  SCENE_DEFAULT, HANG_SCENES, BITE_SCENES, FACT,
};
