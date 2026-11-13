'use strict';

// Hikâye motorunun oyuna bağlanması: meslekler, senaryo, anlatılı duyurular, dedikodu kaydı,
// oyun sonu günlüğü ve en önemlisi: anlatı ya da durum kimseye hak etmediği bir rolü sızdırmaz.
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  Room, ROLE, ROLE_LABEL, rolesFor, isEvil, SCENES, LOG_MAX,
} = require('../game');
const { assignJobs } = require('../lib/story');

const {
  VAMPIRE: V, FRAMER: F, DOCTOR: D, SEER: S, WATCHER: G, WITCH: W, HUNTER: H, MAYOR: M, JESTER: J, VILLAGER: K,
} = ROLE;
const SCENARIO_IDS = ['sisli-vadi', 'kanli-ay', 'hasat-senligi', 'kara-kis', 'veba-soylentisi', 'panayir'];
const PRIVATE = new Set(['seer', 'watch', 'promote']);
const NARRATED = new Set(['start', 'night', 'death', 'safe', 'hanged', 'nohang', 'sleep', 'hunter', 'shot', 'nohunt', 'left', 'win']);

function setup(count, { revealRoles = true, storySeed = 'test-tohum', roles, eventMode = 'off' } = {}) {
  const events = { announces: [], updates: 0 };
  const room = new Room({
    id: 'HIKAYE',
    name: 'Hikâye',
    settings: { revealRoles, roles, events: eventMode },
    storySeed,
    hooks: {
      update() { events.updates += 1; },
      announce(r, a, to) { events.announces.push({ ...a, to }); },
      empty() {},
      finished() {},
    },
  });
  for (let i = 0; i < count; i++) {
    room.addPlayer(`p${i}`, `Oyuncu${i}`, { userId: `u${i}` });
    room.connect(`p${i}`, `s${i}`);
  }
  return { room, events };
}

function startWithRoles(room, roles) {
  assert.equal(room.start(room.hostId), null);
  roles.forEach((role, i) => { room.players.get(`p${i}`).role = role; });
  room.startNight();
}

const of = (events, kind) => events.announces.filter((a) => a.kind === kind);

// ---------- meslekler ve senaryo ----------

test('oyun başında herkese meslek ve oyuna senaryo verilir; herkes aynısını görür; lobide temizlenir', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(8);
  assert.equal(room.viewFor('p0').players[0].job, null, 'lobide meslek yok');
  assert.equal(room.viewFor('p0').room.scenario, null);
  room.start('p0');
  const views = [...room.players.keys()].map((id) => room.viewFor(id));
  const jobs = views[0].players.map((p) => p.job);
  assert.ok(jobs.every((j) => j && typeof j.id === 'string' && typeof j.label === 'string' && j.label));
  assert.equal(new Set(jobs.map((j) => j.id)).size, 8, 'meslekler oyun içinde benzersiz');
  for (const v of views) {
    assert.deepEqual(v.players.map((p) => p.job), jobs, 'her izleyici aynı meslekleri görür');
    assert.deepEqual(v.me.job, jobs[v.me.seat]);
    assert.deepEqual(v.room.scenario, views[0].room.scenario);
  }
  const { scenario } = views[0].room;
  assert.deepEqual(Object.keys(scenario).sort(), ['id', 'intro', 'name']);
  assert.ok(SCENARIO_IDS.includes(scenario.id), scenario.id);
  assert.ok(scenario.intro.length > 0 && scenario.name.length > 0);
  const start = of(events, 'start')[0];
  assert.deepEqual(start.scenario, scenario);
  assert.equal(start.story, scenario.intro);
  assert.equal(start.title, 'Roller dağıtıldı');
  assert.equal(room.storySeed, 'test-tohum');
  assert.ok(room.log.some((e) => e.kind === 'story' && e.text === scenario.intro));

  [V, D, S, K, K, K, K, K].forEach((r, i) => { room.players.get(`p${i}`).role = r; });
  room.removePlayer('p0');
  assert.equal(room.phase, 'ended');
  assert.deepEqual(room.viewFor('p5').room.scenario, scenario, 'oyun sonunda senaryo durur');
  room.backToLobby(room.hostId);
  const lobby = room.viewFor(room.hostId);
  assert.equal(lobby.room.scenario, null);
  assert.equal(lobby.room.epilogue, null);
  assert.ok(lobby.players.every((p) => p.job === null));
  room.destroy();
});

test('meslekler rollerle ilişkili değildir: aynı tohumla roller ne olursa olsun aynı meslekler', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const ids = Array.from({ length: 10 }, (_, i) => `p${i}`);
  const expected = Object.fromEntries(assignJobs(ids, 'sabit').map(({ id, job }) => [id, job.id]));
  const vampires = new Set();
  for (let i = 0; i < 40; i++) {
    const { room } = setup(10, { storySeed: 'sabit', roles: { gozcu: true, iftiraci: true, cadi: true } });
    room.start('p0');
    const jobs = Object.fromEntries([...room.players.values()].map((p) => [p.id, p.job.id]));
    assert.deepEqual(jobs, expected, 'meslek sadece tohuma ve katılma sırasına bağlı');
    for (const p of room.players.values()) if (p.role === V) vampires.add(p.id);
    room.destroy();
  }
  assert.ok(vampires.size >= 4, 'roller gerçekten değişti (rastgele dağıtım)');
  // Farklı tohum farklı meslekler verir (meslek dağıtımı tohumdan gelir).
  const other = Object.fromEntries(assignJobs(ids, 'başka').map(({ id, job }) => [id, job.id]));
  assert.notDeepEqual(other, expected);
});

// ---------- anlatılı duyurular ----------

test('herkese açık duyurular anlatılır; sahneler geçerli; özel duyurular anlatısız kalır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(8, { roles: { gozcu: true, iftiraci: true, avci: true } });
  startWithRoles(room, [V, F, S, G, H, D, K, K]);
  // 1. gece: vampir p6'yı, kahin p7'yi; gözcü p6'yı izler.
  room.selectNight('p0', 'p6');
  room.selectNight('p2', 'p7');
  room.selectNight('p3', 'p6');
  room.endNight();
  const death = of(events, 'death')[0];
  assert.ok(death.story.length > 0 && death.story.length <= 220);
  assert.ok(SCENES.bite.includes(death.scene));
  assert.deepEqual(death.targets.map((x) => ({ id: x.id, cause: x.cause })), [{ id: 'p6', cause: 'vampir' }]);
  assert.equal(death.targets[0].scene, death.scene);
  assert.match(death.text, /^Oyuncu6 bu gece vampir tarafından öldürüldü! Rolü: Köylü\.$/);
  for (const a of events.announces.filter((x) => PRIVATE.has(x.kind))) {
    assert.equal(a.story, undefined, `${a.kind} anlatısız`);
    assert.equal(a.scene, undefined);
  }
  const watch = of(events, 'watch')[0];
  assert.deepEqual(Object.keys(watch).sort(), [
    'blocked', 'blockedCount', 'count', 'dark', 'deathAt', 'kind', 'ownerOut', 'ownerWent', 'targets', 'text', 'title', 'to', 'visitors',
  ]);

  // 1. gün: sabah dedikodusu, sonra p0 (vampir) çoğunlukla elenir → iftiracı dönüşür (özel, anlatısız).
  assert.equal(room.phase, 'day');
  assert.equal(room.log.filter((e) => e.kind === 'rumor').length, 1, 'her gün başında bir dedikodu');
  for (const id of ['p2', 'p3', 'p4', 'p5']) room.vote(id, 'p0');
  room.endDay();
  const hanged = of(events, 'hanged')[0];
  assert.ok(SCENES.hanged.includes(hanged.scene));
  const verb = { gallows: 'asıldı', exile: 'köyden sürüldü', cellar: 'mahzene kapatıldı' }[hanged.scene];
  assert.equal(hanged.text, `Oyuncu0 4 oyla ${verb}! Rolü: Vampir.`);
  assert.ok(room.log.some((e) => e.kind === 'death' && e.text === `1. gün Oyuncu0 4 oyla ${verb}. Rolü: Vampir.`));
  assert.ok(hanged.story.length > 0);
  assert.equal(of(events, 'promote')[0].story, undefined);

  // 2. gece: yeni vampir avcıyı öldürür → avcı son atışı.
  room.selectNight('p1', 'p4');
  room.endNight();
  assert.equal(room.phase, 'hunter');
  assert.ok(of(events, 'hunter')[0].story.length > 0);
  room.shoot('p4', 'p1');
  const shot = of(events, 'shot')[0];
  assert.equal(shot.scene, 'arrow');
  assert.equal(shot.actorId, 'p4');
  assert.equal(room.phase, 'ended');
  const win = of(events, 'win')[0];
  assert.equal(win.winner, K);
  assert.ok(win.story.length > 0);
  assert.deepEqual(Object.keys(win.epilogue).sort(), ['story', 'text', 'title']);
  assert.equal(win.epilogue.title, 'Köy Günlüğü');
  assert.ok(win.epilogue.story.length > 100);
  assert.deepEqual(room.viewFor('p2').room.epilogue, win.epilogue);
  assert.equal(room.log[room.log.length - 1].kind, 'epilogue');
  assert.equal(room.log[room.log.length - 1].text, win.epilogue.story);

  // Her anlatılı duyurunun story alanı var ve günlükte de story olarak duruyor.
  const storyLog = room.log.filter((e) => e.kind === 'story').map((e) => e.text);
  for (const a of events.announces.filter((x) => NARRATED.has(x.kind))) {
    assert.equal(typeof a.story, 'string', a.kind);
    assert.ok(storyLog.includes(a.story), `${a.kind} anlatısı günlükte`);
  }
  room.destroy();
});

test('anlatı hatası oyunu durdurmaz: motor çökerse düz metinlerle devam edilir', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(5);
  room.start('p0');
  ['vampir', 'doktor', 'koylu', 'koylu', 'koylu'].forEach((r, i) => { room.players.get(`p${i}`).role = r; });
  // Motoru bozuk bir nesneyle değiştir: her çağrı hata fırlatır ya da saçma döner.
  room.story = new Proxy({}, { get: (o, key) => (key === 'night' ? () => ({ nope: 1 }) : () => { throw new Error('bozuk'); }) });
  room.startNight();
  assert.equal(of(events, 'night').pop().text, 'Köy uyuyor... Gece rolleri seçimini yapsın.');
  room.selectNight('p0', 'p2');
  room.endNight();
  const death = of(events, 'death').pop();
  assert.equal(death.text, 'Oyuncu2 bu gece vampir tarafından öldürüldü! Rolü: Köylü.');
  assert.equal(death.scene, 'bite');
  assert.equal(death.story, '');
  room.vote('p1', 'p0');
  room.vote('p3', 'p0');
  room.endDay();
  const hanged = of(events, 'hanged').pop();
  assert.equal(hanged.text, 'Oyuncu0 2 oyla asıldı! Rolü: Vampir.');
  assert.equal(hanged.scene, 'gallows');
  assert.equal(room.phase, 'ended');
  assert.equal(of(events, 'win').pop().epilogue, null);
  assert.equal(room.log.filter((e) => e.kind === 'story').length, 1, 'sadece bozulmadan önceki giriş anlatısı');
  room.destroy();
});

// ---------- dedikodu kaydı ----------

test('oy değişiklikleri kalan süreyle kaydedilir; sadece yaşayanların gündüz genel sohbeti sayılır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(7);
  startWithRoles(room, [V, F, D, K, K, K, K]);
  const core = room.story._core;
  // Gece: vampir kanalı sayılmaz.
  assert.equal(room.chat('p0', 'gizli').channel, 'vampir');
  room.selectNight('p0', 'p6');
  room.endNight();
  assert.equal(room.chat('p6', 'ben öldüm').channel, 'olu');
  for (let i = 0; i < 3; i++) room.chat('p2', `merhaba ${i}`);
  room.chat('p3', 'selam');
  const day = core.days.get(1);
  assert.deepEqual(Object.fromEntries(day.chat), { p2: 3, p3: 1 }, 'ölü ve gece mesajları sayılmaz');

  room.vote('p2', 'p0');
  room.vote('p2', 'p3');
  room.vote('p2', 'p3');      // aynı oy tekrar: geri alma
  room.vote('p2', null);      // zaten oy yok: değişiklik değil
  room.vote('p4', 'sleep');
  room.vote('p6', 'p0');      // ölü oy veremez: kaydedilmez
  assert.deepEqual(day.trail.map(({ voter, to }) => ({ voter, to })), [
    { voter: 'p2', to: 'p0' }, { voter: 'p2', to: 'p3' }, { voter: 'p2', to: null }, { voter: 'p4', to: 'sleep' },
  ]);
  assert.ok(day.trail.every((x) => x.msLeft > 0 && x.msLeft <= 120000));
  room.destroy();
});

test('günlük sınırı 250 kayıt', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  assert.equal(LOG_MAX, 250);
  for (let i = 0; i < 300; i++) room.addLog(`satır ${i}`, 'info');
  assert.equal(room.log.length, 250);
  assert.equal(room.log[0].text, 'satır 50');
  room.destroy();
});

// ---------- sızıntı denetimi ----------

// Küçük tohumlu RNG (oyun akışını tekrarlanabilir kılar).
function mulberry(seed) {
  let a = 0;
  for (const ch of String(seed)) a = (Math.imul(a ^ ch.charCodeAt(0), 2654435761) >>> 0);
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let x = a;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

const SPECIAL_WORDS = {
  doktor: ['doktor'], kahin: ['kahin'], gozcu: ['gözcü'], cadi: ['cadı'], avci: ['avcı'],
  muhtar: ['muhtar'], soytari: ['soytarı'], iftiraci: ['iftiracı', 'iftira'], gardiyan: ['gardiyan'],
};
const LABEL_TO_ROLE = Object.fromEntries(Object.entries(ROLE_LABEL).map(([r, l]) => [l, r]));

// Bir oyunu tohumlu rastgele hamlelerle oynar ve gönderilen her şeyi denetler.
function playAndAudit(seed, revealRoles, count) {
  const rng = mulberry(seed);
  const pick = (arr) => arr[Math.floor(rng() * arr.length)];
  const problems = [];
  const knowledge = { hunter: new Set(), jester: new Set() };   // olaylarla herkese açılan roller
  let room;

  // Herkesin bildiği roller (oyuncu id -> rol).
  const publicRoles = () => {
    const out = new Map();
    for (const p of room.players.values()) {
      if (!p.role) continue;
      if (room.phase === 'ended') out.set(p.id, p.role);
      else if (!p.alive && room.settings.revealRoles) out.set(p.id, p.role);
      else if ((knowledge.hunter.has(p.id) || room.hunterId === p.id) && p.role === H) out.set(p.id, p.role);
      else if (knowledge.jester.has(p.id) || (p.hanged && p.role === J)) out.set(p.id, p.role);
    }
    return out;
  };
  // Bir izleyicinin bildiği roller: herkese açık olanlar + kendisi + (kötüyse) kötü takım.
  const knownBy = (viewerId) => {
    const out = publicRoles();
    const me = room.players.get(viewerId);
    if (me && me.role) {
      out.set(me.id, me.role);
      if (isEvil(me.role)) for (const p of room.players.values()) if (isEvil(p.role)) out.set(p.id, p.role);
    }
    return out;
  };

  function auditText(text, known, where) {
    if (typeof text !== 'string' || !text || room.phase === 'ended') return;
    const lower = text.toLocaleLowerCase('tr');
    const knownRoles = new Set(known.values());
    for (const [role, words] of Object.entries(SPECIAL_WORDS)) {
      if (words.some((w) => lower.includes(w)) && !knownRoles.has(role)) {
        problems.push(`${where}: "${role}" geçiyor ama bilinmiyor: ${text}`);
      }
    }
    // "Oyuncu3 ... Rolü: Kahin." ve "Oyuncu3 oyundan ayrıldı (Kahin)" kalıpları doğru ve bilinen kişiye ait olmalı.
    const checks = [
      // Rol eki, ondan önceki SON isme aittir ("Avcı X son atışıyla Y oyuncusunu vurdu. Rolü: …" → Y).
      ...text.matchAll(/(Oyuncu\d+)(?:(?!Oyuncu\d)[^!.])*[!.] Rolü: ([^.]+)\./g),
      ...text.matchAll(/(Oyuncu\d+) oyundan ayrıldı \(([^)]+)\)/g),
    ];
    for (const m of checks) {
      const p = [...room.players.values()].find((x) => x.name === m[1]);
      const role = LABEL_TO_ROLE[m[2]];
      if (!p || role !== p.role || known.get(p.id) !== role) problems.push(`${where}: yanlış/gizli rol eşlemesi: ${text}`);
    }
  }

  room = new Room({
    id: 'DENETIM',
    name: 'Denetim',
    settings: {
      revealRoles, events: 'often',
      roles: { gozcu: true, gardiyan: true, iftiraci: true, cadi: true, avci: true, muhtar: true, soytari: true },
    },
    storySeed: `denetim-${seed}`,
    eventRng: mulberry(`olay-${seed}`),
    hooks: {
      update(r) {
        let firstJobs = null;
        for (const viewerId of r.players.keys()) {
          const v = r.viewFor(viewerId);
          const known = knownBy(viewerId);
          for (const p of v.players) {
            if (p.role && known.get(p.id) !== p.role) problems.push(`state(${viewerId}): ${p.id} rolü ${p.role} sızdı`);
          }
          const meEvil = isEvil(v.me.role);
          if (v.night && !meEvil && (v.night.framer || v.night.team.length || v.night.teamTarget)) problems.push(`state(${viewerId}): gece seçimi sızdı`);
          // Gözcünün canlı bilgisi sadece gözcüde; rüzgârda isim yok.
          if (v.night && v.night.watch !== undefined && v.me.role !== G) problems.push(`state(${viewerId}): gözcü bilgisi sızdı`);
          if (v.night && v.night.watch && v.night.watch.dark
            && (v.night.watch.ownerWent || v.night.watch.visitors.some((x) => x.id))) problems.push(`state(${viewerId}): rüzgârda isim sızdı`);
          // Gardiyanın kilidi sadece gardiyanda.
          if (v.day && v.day.lock && v.me.role !== 'gardiyan') problems.push(`state(${viewerId}): kilit sızdı`);
          if (v.night && v.me.role !== 'gardiyan' && v.night.mySelection && r.nightLock
            && v.me.role === undefined) problems.push('kilit');
          // Sis: kimin kime oy verdiği hiçbir izleyiciye gitmez.
          if (v.day && r.event && r.event.id === 'sis' && (Object.keys(v.day.votes).length || v.day.voted.length || v.day.sleeping.length)) {
            problems.push(`state(${viewerId}): sis gününde oy veren sızdı`);
          }
          const js = JSON.stringify(v.players.map((p) => p.job));
          if (firstJobs === null) firstJobs = js;
          else if (js !== firstJobs) problems.push(`state(${viewerId}): meslekler izleyiciye göre değişiyor`);
        }
      },
      announce(r, a, to) {
        if (['seer', 'watch', 'promote', 'locked', 'bounced', 'lockreport'].includes(a.kind) && (!to || to.length !== 1)) {
          problems.push(`özel duyuru herkese gitti: ${a.kind}`);
        }
        if (['locked', 'bounced', 'lockreport'].includes(a.kind) && (a.story !== undefined)) problems.push(`kilit anlatıldı: ${a.kind}`);
        if (a.kind === 'hunter') a.targets.forEach((x) => knowledge.hunter.add(x.id));
        if (a.kind === 'hanged' && r.players.get(a.targets[0].id).role === J) knowledge.jester.add(a.targets[0].id);
        const recipients = to || [...r.players.keys()];
        for (const id of recipients) {
          const known = knownBy(id);
          for (const field of ['title', 'text', 'story']) auditText(a[field], known, `announce ${a.kind}.${field} -> ${id}`);
          if (a.epilogue) auditText(a.epilogue.story, known, `announce ${a.kind}.epilogue -> ${id}`);
        }
      },
      empty() {},
      finished() {},
    },
  });
  // Günlük herkese açık: her kayıt yazıldığı anda herkesin bildikleriyle denetlenir.
  const addLog = room.addLog.bind(room);
  room.addLog = (text, kind) => {
    if (!(kind === 'info' && text.startsWith('Oyun başladı:'))) auditText(text, publicRoles(), `log(${kind})`);
    addLog(text, kind);
  };

  for (let i = 0; i < count; i++) {
    room.addPlayer(`p${i}`, `Oyuncu${i}`, { userId: `u${i}` });
    room.connect(`p${i}`, `s${i}`);
  }
  room.start('p0');
  // Rolleri tohumdan yeniden dağıt (oyun tekrarlanabilir olsun).
  const list = rolesFor(count, [D, S, G, 'gardiyan', W, H, M, J, F]);
  const ids = [...room.players.keys()];
  for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
  ids.forEach((id, i) => { room.players.get(id).role = list[i]; });
  room.startNight();

  const alive = () => [...room.players.values()].filter((p) => p.alive);
  const kinds = new Set();
  for (let step = 0; step < 60 && room.phase !== 'ended'; step++) {
    if (room.phase === 'night') {
      for (const p of alive()) {
        for (let tries = 0; tries < 4; tries++) {
          if (room.selectNight(p.id, pick(alive()).id, rng() < 0.4 ? 'poison' : 'heal') === null) break;
        }
        if (rng() < 0.3) room.chat(p.id, 'gece fısıltısı');
      }
      if (rng() < 0.05) room.removePlayer(pick(alive()).id);
      if (room.phase === 'night') room.endNight();
    } else if (room.phase === 'day') {
      for (const p of alive()) {
        const r = rng();
        if (r < 0.15) room.vote(p.id, 'sleep');
        else if (r < 0.85) room.vote(p.id, pick(alive()).id);
        if (rng() < 0.3 && room.phase === 'day') room.vote(p.id, pick(alive()).id);
        if (rng() < 0.6) room.chat(p.id, 'bence o');
      }
      for (const p of room.players.values()) if (!p.alive && rng() < 0.3) room.chat(p.id, 'ölüler konuşur');
      for (const p of alive()) if (p.role === 'gardiyan' && room.phase === 'day') room.lockHouse(p.id, pick(alive()).id);
      if (room.phase === 'day' && rng() < 0.05) room.removePlayer(pick(alive()).id);
      if (room.phase === 'day') room.endDay();
    } else if (room.phase === 'trial') {
      if (room.trial.step === 'defense') {
        room.chat(room.trial.speaker, 'masumum');
        room.startDefense(room.trial.accused.indexOf(room.trial.speaker) + 1);
      } else {
        for (const p of alive()) room.vote(p.id, pick(room.trial.accused));
        if (room.phase === 'trial') room.endTrial();
      }
    } else if (room.phase === 'hunter') {
      if (rng() < 0.7) room.shoot(room.hunterId, pick(alive().filter((p) => p.id !== room.hunterId)).id);
      else room.resolveHunter(null);
    }
    for (const a of room.log) kinds.add(a.kind);
  }
  const result = { problems, phase: room.phase, kinds, room };
  room.destroy();
  return result;
}

for (const revealRoles of [false, true]) {
  test(`tohumlu oyunlar (roller ${revealRoles ? 'açık' : 'gizli'}): hiçbir durum, duyuru ya da günlük hak edilmeyen rolü sızdırmaz`, (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    let ended = 0;
    const kinds = new Set();
    for (let g = 0; g < 40; g++) {
      const count = 5 + (g % 12);
      const res = playAndAudit(`oyun-${g}`, revealRoles, count);
      assert.deepEqual(res.problems.slice(0, 5), [], `oyun ${g} (${count} kişi)`);
      if (res.phase === 'ended') ended += 1;
      res.kinds.forEach((k) => kinds.add(k));
    }
    assert.ok(ended >= 30, `oyunların çoğu bitmeli (${ended})`);
    for (const k of ['story', 'rumor', 'epilogue', 'death', 'event']) assert.ok(kinds.has(k), `günlükte ${k} türü görüldü`);
  });
}

// Aynı herkese açık olaylar, farklı gizli roller: anlatı bayt bayt aynı olmalı.
function scriptedGame(roles, revealRoles) {
  const { room, events } = setup(8, { revealRoles, storySeed: 'fark-testi', roles: { gozcu: true, iftiraci: true }, eventMode: 'off' });
  startWithRoles(room, roles);
  const byRole = (r) => [...room.players.values()].find((p) => p.role === r);
  // Gece 1: vampir p7'yi öldürür; gece rolleri kimseyi kurtarmayacak şekilde seçim yapar.
  room.selectNight(byRole(V).id, 'p7');
  for (const p of room.players.values()) if (p.role !== V) room.selectNight(p.id, 'p5');
  room.endNight();
  // Gün 1: oy değişiklikleri ve sohbet, p6 elenir.
  for (const id of ['p2', 'p3', 'p4']) room.vote(id, 'p5');
  for (const id of ['p2', 'p3', 'p4', 'p5']) room.vote(id, 'p6');
  for (const id of ['p2', 'p3', 'p4', 'p5', 'p2', 'p3']) room.chat(id, 'konuşalım');
  room.endDay();
  // Gece 2: sessiz. Gün 2: Hızlı Uyu ile değil, oylar eşit.
  room.endNight();
  room.vote('p2', 'p3');
  room.vote('p3', 'p2');
  room.endDay();
  const publicOut = events.announces.filter((a) => !a.to).map((a) => JSON.stringify(a));
  const log = room.log.map((e) => `${e.kind}|${e.text}`);
  room.destroy();
  return { publicOut, log };
}

test('roller gizliyken: aynı açık olaylar, farklı gizli roller → aynı anlatı, aynı günlük', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  // p0 vampir, p1 iftiracı sabit; diğer roller yer değiştirir.
  const a = scriptedGame([V, F, D, S, G, K, K, K], false);
  const b = scriptedGame([V, F, K, G, K, D, S, K], false);
  const c = scriptedGame([V, F, S, K, D, K, G, K], false);
  assert.deepEqual(b.publicOut, a.publicOut);
  assert.deepEqual(c.publicOut, a.publicOut);
  assert.deepEqual(b.log.filter((l) => !l.startsWith('info|')), a.log.filter((l) => !l.startsWith('info|')));
  assert.deepEqual(c.log, a.log);
});

test('roller açıkken: sadece hayatta kalanların rolleri değişirse anlatı aynı kalır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  // p6 ve p7 ölür (köylü olarak açıklanır); p2-p5 arasındaki gizli roller yer değiştirir.
  const a = scriptedGame([V, F, D, S, G, K, K, K], true);
  const b = scriptedGame([V, F, G, K, D, S, K, K], true);
  assert.deepEqual(b.publicOut, a.publicOut);
  assert.deepEqual(b.log, a.log);
});
