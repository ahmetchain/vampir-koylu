'use strict';

// 6. tur: iki aşamalı gece (seçim + gösterim), çözülme sırası, kişiye özel gösterim (show), bekleme
// (night:pass) ve erken bitiş, dedektif Kahin, rastgele dağıtım, botların hızlı geceleri,
// oda sahipliğinin kısa kopmalarda korunması.
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  Room, ROLE, rolesFor, distributionFor, possibleRoles, normalizeSettings, isEvil, SPECIAL_ROLES,
  NIGHT_WALK_MS, NIGHT_SHOW_MS, NIGHT_RESULT_MS, PICK_GRACE_MS, HOST_GRACE_MS, LOBBY_GRACE_MS,
} = require('../game');

const {
  VAMPIRE: V, FRAMER: F, CLEANER: C, DOCTOR: D, SEER: S, WATCHER: G, JAILER: L, WITCH: W, HUNTER: H, MAYOR: M, JESTER: J,
  MAD: X, THIEF: T, VILLAGER: K,
} = ROLE;

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

function setup(count, settings = {}, extra = {}) {
  const ev = { announces: [], finished: [] };
  const room = new Room({
    id: 'TUR6',
    name: 'Tur 6',
    settings: { events: 'off', ...settings },
    hooks: {
      update() {},
      announce(r, a, to) { ev.announces.push({ ...a, to, stage: r.night ? r.night.stage : r.phase }); },
      empty() {},
      finished(r, res) { ev.finished.push(res); },
    },
    ...extra,
  });
  for (let i = 0; i < count; i++) {
    room.addPlayer(`p${i}`, `Oyuncu${i}`, { userId: `u${i}` });
    room.connect(`p${i}`, `s${i}`);
  }
  return { room, ev };
}

function startWithRoles(room, roles) {
  assert.equal(room.start(room.hostId), null);
  roles.forEach((r, i) => {
    const p = room.players.get(`p${i}`);
    if (Array.isArray(r)) { p.role = r[0]; p.fakeRole = r[1]; } else { p.role = r; p.fakeRole = null; }
  });
  room.startNight();
}

const of = (ev, kind) => ev.announces.filter((a) => a.kind === kind);
const to = (ev, kind, id) => of(ev, kind).filter((a) => a.to && a.to.includes(id));
const clock = (t) => t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 7_000_000 });
const show = (room, id) => room.viewFor(id).night.show;
const alive = (room, id) => room.players.get(id).alive;

// ---------- çözülme sırası ----------

test('doktoru vampirler öldürürse koruması geçersiz: hırsız korunan kişiyi öldürür', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, D, T, K, K, K, K, K]);
  room.selectNight('p0', 'p1');
  room.selectNight('p1', 'p4');
  room.selectNight('p2', 'p4');
  room.endPick();
  assert.equal(alive(room, 'p1'), true, 'ölümler sabaha kadar herkese açık değil');
  assert.equal(show(room, 'p1').dead, true);
  assert.equal(show(room, 'p1').trip, undefined, 'ölen doktor evden hiç çıkmadı');
  assert.deepEqual(show(room, 'p1').home, [{ kind: 'attack', result: 'died' }]);
  assert.deepEqual(show(room, 'p4').home, [{ kind: 'steal', result: 'died' }]);
  assert.deepEqual(show(room, 'p2').trip, { to: 'p4', kind: 'steal', outcome: 'done', interior: true });
  room.endNight();
  assert.equal(alive(room, 'p1'), false);
  assert.equal(alive(room, 'p4'), false);
  assert.deepEqual(of(ev, 'death').pop().targets.map((x) => [x.id, x.cause]), [['p1', 'vampir'], ['p4', 'hirsiz']]);
  assert.equal(room.players.get('p2').role, K, 'hırsız rolü aldı');
  room.destroy();
});

test('doktoru hırsız öldürürse koruması geçerli kalır (sadece vampir saldırısı iptal eder): zehir durur', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, D, T, W, K, K, K, K]);
  room.selectNight('p1', 'p4');
  room.selectNight('p2', 'p1');
  room.selectNight('p3', 'p4', 'poison');
  room.endPick();
  assert.deepEqual(show(room, 'p1').trip, { to: 'p4', kind: 'protect', outcome: 'saved', interior: false });
  assert.equal(show(room, 'p1').dead, true);
  assert.deepEqual(show(room, 'p4').home, [{ kind: 'poison', result: 'saved' }, { kind: 'protect', result: 'saved' }]);
  assert.deepEqual(show(room, 'p3').trip, { to: 'p4', kind: 'poison', outcome: 'saved', interior: true });
  room.endNight();
  assert.equal(alive(room, 'p4'), true);
  assert.equal(alive(room, 'p1'), false);
  assert.equal(room.witchUsed.poison, true, 'zehir harcandı');
  assert.equal(to(ev, 'saved', 'p1').length, 0, 'ölen doktor sonuç almaz');
  assert.equal(to(ev, 'killed', 'p1').length, 1);
  assert.equal(to(ev, 'attacked', 'p4').length, 1);
  room.destroy();
});

test('doktor kendini korursa vampir saldırısından kurtulur; ayrı siluet yok, saved + attacked', (t) => {
  clock(t);
  const { room, ev } = setup(6);
  startWithRoles(room, [V, D, K, K, K, K]);
  room.selectNight('p1', 'p1');
  room.selectNight('p0', 'p1');
  room.endPick();
  const s = show(room, 'p1');
  assert.deepEqual(s.home, [{ kind: 'attack', result: 'saved' }]);
  assert.equal(s.saved, true);
  assert.equal(s.trip, undefined, 'kendini korumak yolculuk değil');
  assert.deepEqual(show(room, 'p0').trip, { to: 'p1', kind: 'kill', outcome: 'saved', interior: true });
  t.mock.timers.tick(NIGHT_RESULT_MS);
  assert.equal(to(ev, 'saved', 'p1')[0].text, 'Bu gece evine saldırı oldu; kendini korudun ve kurtuldun.');
  assert.equal(to(ev, 'attacked', 'p1').length, 1);
  assert.ok(of(ev, 'saved').every((a) => a.stage === 'show'));
  t.mock.timers.tick(NIGHT_SHOW_MS - NIGHT_RESULT_MS);
  assert.equal(room.phase, 'day');
  assert.equal(of(ev, 'safe').length, 1, 'kurtarılma herkese açık değil');
  room.destroy();
});

test('cadının iksiri vampir kurbanını kurtarır (yeşil artılar), hırsızı durdurmaz', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, W, K, K, K, K, K, K]);
  room.selectNight('p0', 'p4');
  room.selectNight('p1', 'p4', 'heal');
  room.endPick();
  assert.deepEqual(show(room, 'p1').trip, { to: 'p4', kind: 'heal', outcome: 'saved', interior: false });
  assert.equal(show(room, 'p1').saved, true);
  assert.deepEqual(show(room, 'p4').home, [{ kind: 'attack', result: 'saved' }, { kind: 'protect', result: 'saved' }]);
  room.endNight();
  assert.equal(alive(room, 'p4'), true);
  assert.match(to(ev, 'saved', 'p1')[0].text, /hayat iksirin onu kurtardı/);
  room.destroy();

  const { room: r2 } = setup(8);
  startWithRoles(r2, [V, W, T, K, K, K, K, K]);
  r2.selectNight('p1', 'p4', 'heal');
  r2.selectNight('p2', 'p4');
  r2.endNight();
  assert.equal(alive(r2, 'p4'), false, 'iksir hırsıza karşı korumaz');
  r2.destroy();
});

test('cadıyı vampirler ya da hırsız öldürürse zehri iptal olur ve harcanmaz', (t) => {
  clock(t);
  for (const killer of ['vampir', 'hirsiz']) {
    const { room } = setup(8);
    startWithRoles(room, [V, W, T, K, K, K, K, K]);
    room.selectNight('p1', 'p5', 'poison');
    if (killer === 'vampir') room.selectNight('p0', 'p1'); else room.selectNight('p2', 'p1');
    room.endPick();
    assert.equal(show(room, 'p1').trip, undefined, `${killer}: cadı evden çıkmadı`);
    room.endNight();
    assert.equal(alive(room, 'p1'), false);
    assert.equal(alive(room, 'p5'), true, `${killer}: zehir iptal`);
    assert.equal(room.witchUsed.poison, false);
    room.destroy();
  }
});

test('zehir vampirin zaten öldürdüğü kişiye: tek ölüm (vampir), zehir harcanır', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, W, K, K, K, K, K, K]);
  room.selectNight('p0', 'p4');
  room.selectNight('p1', 'p4', 'poison');
  room.endNight();
  assert.deepEqual(of(ev, 'death').pop().targets.map((x) => x.cause), ['vampir']);
  assert.equal(room.witchUsed.poison, true);
  room.destroy();
});

test('hırsız vampiri öldürürse: saldırı yine olur, hırsız vampir olur ve takımı görür; zehirlenen hırsız çalamaz', (t) => {
  clock(t);
  const { room, ev } = setup(10);
  startWithRoles(room, [V, V, T, K, K, K, K, K, K, K]);
  room.selectNight('p0', 'p5');
  room.selectNight('p2', 'p0');
  room.endPick();
  assert.deepEqual(show(room, 'p0').trip, { to: 'p5', kind: 'kill', outcome: 'done', interior: true }, 'öldürme yolculuğu durur');
  assert.equal(show(room, 'p0').dead, true);
  assert.deepEqual(show(room, 'p1').team, [{ id: 'p0', to: 'p5', kind: 'kill', outcome: 'done' }]);
  assert.equal(show(room, 'p2').team, undefined, 'hırsız henüz kötü değil');
  t.mock.timers.tick(NIGHT_RESULT_MS);
  assert.equal(room.players.get('p2').role, V, '9. saniyede rolü aldı');
  assert.equal(to(ev, 'steal', 'p2').length, 1);
  assert.deepEqual(show(room, 'p2').team.map((x) => x.id).sort(), ['p0', 'p1']);
  t.mock.timers.tick(NIGHT_SHOW_MS - NIGHT_RESULT_MS);
  assert.equal(alive(room, 'p0'), false);
  assert.equal(alive(room, 'p5'), false);
  room.destroy();

  const { room: r2, ev: e2 } = setup(8);
  startWithRoles(r2, [V, W, T, K, K, K, K, K]);
  r2.selectNight('p2', 'p5');
  r2.selectNight('p1', 'p2', 'poison');
  r2.endNight();
  assert.equal(alive(r2, 'p2'), false);
  assert.equal(alive(r2, 'p5'), false, 'soygun oldu');
  assert.equal(of(e2, 'steal').length, 0, 'ölen hırsız rol almaz');
  r2.destroy();
});

test('son vampiri hırsız öldürürse iftiracı sabah dönüşür; avcı ölürse avcı evresi gösterimden sonra', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, F, T, H, K, K, K, K]);
  room.selectNight('p2', 'p0');
  room.selectNight('p1', 'p5');
  room.endPick();
  assert.equal(room.players.get('p1').role, F, 'gösterimde henüz dönüşmedi');
  room.endNight();
  assert.equal(of(ev, 'promote').length, 0, 'hırsız vampir oldu: dönüşme yok');
  assert.equal(room.players.get('p2').role, V);
  room.destroy();

  const { room: r2 } = setup(8);
  startWithRoles(r2, [V, F, H, K, K, K, K, K]);
  r2.selectNight('p0', 'p2');
  r2.endPick();
  assert.equal(r2.phase, 'night');
  t.mock.timers.tick(NIGHT_SHOW_MS);
  assert.equal(r2.phase, 'hunter', 'sabah, avcı');
  r2.destroy();
});

test('ölen kahin ve ölen deli sonuç almaz ve yola çıkmaz; sağ kalan (sahte) gözcüler rapor alır', (t) => {
  clock(t);
  const { room, ev } = setup(10);
  startWithRoles(room, [V, V, S, G, [X, S], [X, G], T, K, K, K]);
  room.selectNight('p2', 'p7');
  room.selectNight('p3', 'p7');
  room.selectNight('p4', 'p7');
  room.selectNight('p5', 'p7');
  room.selectNight('p0', 'p2');
  room.selectNight('p6', 'p4');
  room.endPick();
  assert.equal(show(room, 'p2').trip, undefined);
  assert.equal(show(room, 'p4').trip, undefined);
  // Ölen kahin ve deli kapıya hiç gelmedi; (sahte) gözcü dışarıdan bakar, ziyaretçi sayılmaz.
  assert.deepEqual(show(room, 'p3').watch.arrivals, [], 'ölenler kapıya gelmedi');
  room.endNight();
  assert.equal(to(ev, 'seer', 'p2').length, 0);
  assert.equal(to(ev, 'seer', 'p4').length, 0);
  assert.equal(to(ev, 'watch', 'p3').length, 1);
  assert.equal(to(ev, 'watch', 'p5').length, 1);
  room.destroy();
});

// ---------- gösterim içeriği ----------

test('gösterim: sadece show aşamasında; köylü de kendi evini görür; iftiracı takımı görür', (t) => {
  clock(t);
  const { room } = setup(8);
  startWithRoles(room, [V, F, D, K, K, K, K, K]);
  room.selectNight('p1', 'p6');
  room.selectNight('p0', 'p5');
  assert.equal(room.viewFor('p5').night, null, 'seçim aşamasında köylünün gece görünümü yok');
  assert.equal(room.viewFor('p0').night.show, null);
  room.endPick();
  assert.deepEqual(show(room, 'p5'), { home: [{ kind: 'attack', result: 'died' }], dead: true });
  assert.deepEqual(show(room, 'p7'), {}, 'olaysız köylü: sakin köy');
  assert.deepEqual(show(room, 'p1').team, [{ id: 'p0', to: 'p5', kind: 'kill', outcome: 'done' }]);
  assert.deepEqual(show(room, 'p0').team, [{ id: 'p1', to: 'p6', kind: 'frame', outcome: 'done' }]);
  assert.deepEqual(show(room, 'p1').trip, { to: 'p6', kind: 'frame', outcome: 'done', interior: false });
  assert.equal(show(room, 'p2').trip, undefined, 'doktor seçmedi');
  assert.equal(room.viewFor('p2').night.canAct, false, 'gösterimde seçim yok');
  assert.match(room.selectNight('p2', 'p3'), /Seçim süresi doldu/);
  room.endNight();
  assert.equal(room.viewFor('p7').night, null);
  room.destroy();
});

test('cadı iki yolculuk yaparsa trip ilki, trips ikisi', (t) => {
  clock(t);
  const { room } = setup(8);
  startWithRoles(room, [V, W, K, K, K, K, K, K]);
  room.selectNight('p0', 'p4');
  room.selectNight('p1', 'p4', 'heal');
  room.selectNight('p1', 'p5', 'poison');
  room.endPick();
  const s = show(room, 'p1');
  assert.deepEqual(s.trip, { to: 'p4', kind: 'heal', outcome: 'saved', interior: false });
  assert.deepEqual(s.trips.map((x) => [x.to, x.kind, x.outcome, x.interior]), [['p4', 'heal', 'saved', false], ['p5', 'poison', 'done', true]]);
  room.destroy();
});

test('ölüm mesajı (killed) 9. saniyede, sebebiyle; ölüm herkese sabah', (t) => {
  clock(t);
  const { room, ev } = setup(6);
  startWithRoles(room, [V, K, K, K, K, K]);
  room.selectNight('p0', 'p3');
  t.mock.timers.tick(NIGHT_WALK_MS);
  assert.equal(room.night.stage, 'show', 'tek seçici seçti: yürüyüş biter bitmez gösterim');
  t.mock.timers.tick(NIGHT_RESULT_MS - 1);
  assert.equal(to(ev, 'killed', 'p3').length, 0);
  t.mock.timers.tick(1);
  const k = to(ev, 'killed', 'p3')[0];
  assert.deepEqual(k.to, ['p3']);
  assert.equal(k.cause, 'vampir');
  assert.equal(k.story, undefined);
  assert.equal(of(ev, 'death').length, 0);
  t.mock.timers.tick(NIGHT_SHOW_MS - NIGHT_RESULT_MS);
  assert.equal(of(ev, 'death').length, 1);
  room.destroy();
});

// ---------- bekleme ve erken bitiş ----------

test('night:pass: hatalar, kesinlik, deli aynı hatayı alır', (t) => {
  clock(t);
  const { room } = setup(9, { roles: { gardiyan: true } });
  startWithRoles(room, [V, D, K, W, T, L, [X, D], H, K]);
  assert.match(room.passNight('p2'), /Köylüler gece seçim yapamaz/);
  assert.match(room.passNight('p5'), /Gardiyan kilidini gündüz seçer/);
  assert.match(room.passNight('p7'), /gece görevi yok/);
  assert.equal(room.passNight('p4'), null, 'hırsız bekler');
  assert.match(room.passNight('p4'), /beklemeye karar verdin/);
  assert.match(room.selectNight('p4', 'p2'), /beklemeye karar verdin/);
  assert.equal(room.viewFor('p4').night.passed, true);
  assert.equal(room.viewFor('p4').night.canAct, false);
  assert.equal(room.selectNight('p1', 'p2'), null);
  assert.match(room.passNight('p1'), /yapacak bir seçimin kalmadı/);
  assert.equal(room.selectNight('p6', 'p2'), null);
  assert.match(room.passNight('p6'), /yapacak bir seçimin kalmadı/, 'sahte doktor aynı hatayı alır');
  assert.equal(room.selectNight('p3', 'p2', 'heal'), null);
  assert.equal(room.viewFor('p3').night.canAct, true, 'cadı zehir için hâlâ seçebilir');
  assert.equal(room.passNight('p3'), null, 'cadı zehri bekletir');
  room.endPick();
  assert.match(room.passNight('p0'), /Seçim süresi doldu/);
  room.destroy();
});

test('erken bitiş: herkes seçince 1,5 sn sonra (yürüyüşten önce değil); bekleyen insan varsa tam süre', (t) => {
  clock(t);
  const { room } = setup(6);
  startWithRoles(room, [V, D, K, K, K, K]);
  const start = Date.now();
  t.mock.timers.tick(NIGHT_WALK_MS + 2000);
  room.selectNight('p0', 'p3');
  assert.equal(room.night.stage, 'pick', 'doktor bekleniyor');
  assert.equal(room.deadline, start + NIGHT_WALK_MS + 20000);
  room.passNight('p1');
  assert.equal(room.deadline, Date.now() + PICK_GRACE_MS);
  assert.equal(room.viewFor('p2').room.night.pickUntil, Date.now() + PICK_GRACE_MS);
  assert.equal(room.viewFor('p2').room.night.showUntil, Date.now() + PICK_GRACE_MS + NIGHT_SHOW_MS);
  t.mock.timers.tick(PICK_GRACE_MS);
  assert.equal(room.night.stage, 'show');
  assert.equal(room.deadline, Date.now() + NIGHT_SHOW_MS);
  room.destroy();

  // Herkes yürüyüşte seçti: gösterim yürüyüş bitince başlar.
  const { room: r2 } = setup(6);
  startWithRoles(r2, [V, D, K, K, K, K]);
  const s2 = Date.now();
  r2.selectNight('p0', 'p3');
  r2.selectNight('p1', 'p1');
  assert.equal(r2.deadline, s2 + NIGHT_WALK_MS);
  t.mock.timers.tick(NIGHT_WALK_MS);
  assert.equal(r2.night.stage, 'show');
  r2.destroy();

  // Bağlantısı kopmuş insan beklenmez; geri bağlanırsa (seçim aşaması sürerken) yine beklenir.
  const { room: r3 } = setup(6);
  startWithRoles(r3, [V, D, K, K, K, K]);
  t.mock.timers.tick(NIGHT_WALK_MS);
  r3.selectNight('p0', 'p3');
  r3.disconnect('p1');
  assert.equal(r3.deadline, Date.now() + PICK_GRACE_MS);
  r3.connect('p1', 's1');
  assert.equal(r3.deadline, r3.night.pickUntilFull, 'geri döndü: tam süreye dönüldü');
  r3.destroy();
});

test('erken bitiş geri alınır: son vampir ayrılınca dönüşen iftiracı yeniden beklenir', (t) => {
  clock(t);
  const { room } = setup(8);
  startWithRoles(room, [V, F, K, K, K, K, K, K]);
  t.mock.timers.tick(NIGHT_WALK_MS);
  room.selectNight('p1', 'p4');
  room.selectNight('p0', 'p3');
  assert.equal(room.night.early, true);
  room.removePlayer('p0');
  assert.equal(room.players.get('p1').role, V);
  assert.equal(room.night.early, false);
  assert.equal(room.viewFor('p1').night.canAct, true);
  room.selectNight('p1', 'p5');
  assert.equal(room.night.early, true);
  room.endNight();
  assert.equal(alive(room, 'p5'), false);
  room.destroy();
});

// ---------- kahin (dedektif) ----------

test('kahin şaşırtmacası: 1/2 karşı taraftan (§16.4), gerçek rol ve kahin asla; tohumla tekrarlanır', () => {
  const settings = normalizeSettings({ roles: { gozcu: true, cadi: true, avci: true, iftiraci: true, hirsiz: true, deli: true } });
  const counts = { koylu: { opp: 0, n: 0 }, vampir: { opp: 0, n: 0 }, iftiraci: { opp: 0, n: 0 } };
  const draws = (seed) => {
    const { room } = setup(8, settings, { seerRng: mulberry(seed) });
    room.gameSize = 8;
    const out = [];
    const pool = possibleRoles(8, room.settings);
    for (const real of Object.keys(counts)) {
      for (let i = 0; i < 600; i++) {
        const d = room.drawDecoy(real);
        assert.notEqual(d, real);
        assert.notEqual(d, S);
        assert.notEqual(d, X, 'deli şaşırtmaca olmaz');
        assert.ok(pool.includes(d), d);
        counts[real].n += 1;
        if (isEvil(d) !== isEvil(real)) counts[real].opp += 1;
        out.push(d);
      }
    }
    room.destroy();
    return out;
  };
  const a = draws('kahin-1');
  assert.deepEqual(draws('kahin-1'), a, 'aynı tohum aynı çekiliş');
  for (const [real, c] of Object.entries(counts)) {
    const share = c.opp / c.n;
    assert.ok(share > 0.44 && share < 0.56, `${real}: karşı taraf oranı ${share.toFixed(2)}`);
  }
  // İftiracı kapalıyken vampirin aynı taraftan adayı yok: hep masum bir rol.
  const { room } = setup(8, normalizeSettings({}), { seerRng: mulberry('x') });
  for (let i = 0; i < 50; i++) assert.ok(!isEvil(room.drawDecoy(V)));
  room.destroy();
});

test('kahin: aynı hedefe tekrar bakınca aynı ikili; hedefin rolü değişirse şaşırtmaca yenilenir', (t) => {
  clock(t);
  const { room, ev } = setup(8, {}, { seerRng: mulberry('tekrar') });
  startWithRoles(room, [V, S, T, K, K, K, K, K]);
  const seen = [];
  for (let n = 0; n < 3; n++) {
    room.selectNight('p1', 'p3');
    room.endNight();
    seen.push([...to(ev, 'seer', 'p1').pop().roles].sort().join());
    room.endDay();
  }
  assert.equal(new Set(seen).size, 1, seen.join(' | '));
  room.destroy();
});

// ---------- rastgele dağıtım ----------

test('rastgele dağıtım: vampir sayısı, köylü payı, yardımcı güvencesi (13+ ikincisi ~%50), kahin/gözcü güvencesi, lobi alanları kesin', () => {
  const m = mulberry('dagitim');
  const rng = (n) => Math.floor(m() * n);
  const allSpecials = [...SPECIAL_ROLES, F];
  for (const count of [5, 7, 8, 10, 12, 15, 20]) {
    for (const specials of [[D, S], [D, S, G, W, H, M, J, X, T, F], [G, F, L], [], [D, S, F, C], [D, S, C], [D, S, G, W, H, M, J, X, T, F, C]]) {
      const { distribution, rolePool } = distributionFor(count, specials, 'random');
      assert.deepEqual(distributionFor(count, specials, 'random'), { distribution, rolePool }, 'deterministik');
      let framers = 0;
      let twoHelpers = 0;
      const N = 300;
      for (let i = 0; i < N; i++) {
        const list = rolesFor(count, specials, rng, 'random');
        assert.equal(list.length, count);
        const n = (r) => list.filter((x) => x === r).length;
        assert.equal(n(V), count >= 15 ? 3 : (count >= 10 ? 2 : 1));
        assert.ok(n(K) >= Math.max(1, Math.round(count * 0.2)), `köylü payı ${count}`);
        if (specials.includes(S) || specials.includes(G)) assert.ok(n(S) + n(G) >= 1);
        if (count < 7) assert.equal(n(F) + n(T) + n(C), 0);
        const enabled = [F, C].filter((h) => specials.includes(h)).length;
        const helpers = n(F) + n(C);
        if (count < 7 || !enabled) assert.equal(helpers, 0);
        else if (count < 13 || enabled === 1) assert.equal(helpers, 1, 'tam bir yardımcı');
        else assert.ok(helpers === 1 || helpers === 2);
        if (helpers === 2) twoHelpers += 1;
        assert.ok(list.every((r) => r === V || r === K || specials.includes(r)));
        assert.ok(list.every((r, j) => r === K || r === V || list.indexOf(r) === j), 'özel roller tekil');
        // distribution'daki her rol her çekilişte var.
        const rest = [...list];
        for (const r of distribution) {
          const at = rest.indexOf(r);
          assert.ok(at >= 0, `${count} ${specials}: kesin ${r} yok`);
          rest.splice(at, 1);
        }
        assert.ok(rest.every((r) => r === K || (rolePool && (rolePool.from.includes(r) || rolePool.maybe.includes(r)))), 'kalanlar havuzdan');
        framers += n(F);
      }
      const both = specials.includes(F) && specials.includes(C);
      if (count >= 7 && both) {
        // Hangisi olduğu rastgele: lobide 'kesin 1 yardımcı, adaylar: …'.
        assert.deepEqual(rolePool.maybe, [F, C]);
        assert.equal(rolePool.helpers, 1);
        assert.equal(rolePool.helpersMax, count >= 13 ? 2 : 1);
        assert.ok(!distribution.includes(F) && !distribution.includes(C));
        if (count >= 13) assert.ok(twoHelpers / N > 0.4 && twoHelpers / N < 0.6, `ikinci yardımcı ${twoHelpers / N}`);
        else assert.ok(framers / N > 0.4 && framers / N < 0.6, `iftiracı/temizlikçi ${framers / N}`);
      } else if (count >= 7 && (specials.includes(F) || specials.includes(C))) {
        assert.ok(distribution.includes(specials.includes(F) ? F : C), 'tek aday kesin');
        assert.ok(!rolePool || (rolePool.maybe.length === 0 && rolePool.helpers === 0));
      } else assert.equal(framers, 0);
      assert.equal(distribution.length + (rolePool ? rolePool.pick : 0), count);
    }
  }
  void allSpecials;
});

test('rastgele dağıtım odada: varsayılan, günlükte çekiliş yazmaz; "all" eski kural', (t) => {
  clock(t);
  const { room } = setup(7, { roles: { iftiraci: true, gozcu: true } });
  assert.equal(room.settings.roleMode, 'random');
  room.start('p0');
  assert.ok(room.log.some((e) => e.text === 'Oyun başladı: 7 oyuncu. Roller rastgele dağıtıldı.'));
  room.destroy();
  const { room: r2 } = setup(7, { roleMode: 'all', roles: { iftiraci: true, gozcu: true } });
  r2.start('p0');
  assert.ok(r2.log.some((e) => /^Oyun başladı: 7 oyuncu \(1 vampir, İftiracı, Doktor, Kahin, Gözcü, 2 köylü\)\.$/.test(e.text)));
  assert.equal(normalizeSettings({ roleMode: 'xyz' }).roleMode, 'random');
  assert.equal(normalizeSettings({ nightSec: 5 }).nightSec, 10);
  assert.equal(normalizeSettings({ nightSec: 500 }).nightSec, 60);
  r2.destroy();
});

// ---------- botlar ----------

function botRoom(seed, humans, bots, settings) {
  const ev = { announces: [] };
  const room = new Room({
    id: 'BOT6', name: 'Bot6', settings: { events: 'off', ...settings },
    botRng: mulberry(seed), eventRng: mulberry(`o-${seed}`), storySeed: `s-${seed}`,
    hooks: { update() {}, announce(r, a, to2) { ev.announces.push({ ...a, to: to2 }); }, empty() {}, finished() {}, chat() {} },
  });
  for (let i = 0; i < humans; i++) { room.addPlayer(`h${i}`, `İnsan${i}`, { userId: `u${i}` }); room.connect(`h${i}`, `s${i}`); }
  for (let i = 0; i < bots; i++) room.addBot('h0');
  return { room, ev };
}

test('botlar: tek insan (gece rolü yok) + botlarla geceler kısa; tüm roller açık tohumlu oyunlar biter', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 1_700_000_000_000 });
  const ALL = { gozcu: true, gardiyan: true, cadi: true, avci: true, muhtar: true, soytari: true, deli: true, hirsiz: true, iftiraci: true };
  const nightLens = [];
  let ended = 0;
  for (let g = 0; g < 12; g++) {
    const { room } = botRoom(`tam-${g}`, 1, 6 + (g % 8), { roles: ALL });
    const errors = [];
    const orig = console.error;
    console.error = (...a) => errors.push(a.join(' '));
    try {
      room.start('h0');
      // İnsan köylü olsun (gece rolü yok): geceler yalnızca botlara bağlı.
      const h = room.players.get('h0');
      const swap = [...room.players.values()].find((p) => p.role === K && p.bot);
      if (swap && h.role !== K) { swap.role = h.role; swap.fakeRole = h.fakeRole; h.role = K; h.fakeRole = null; }
      let nightStart = null;
      for (let ms = 0; ms < 3 * 3600 * 1000 && room.phase !== 'ended'; ms += 250) {
        const before = room.phase;
        t.mock.timers.tick(250);
        if (before !== 'night' && room.phase === 'night') nightStart = Date.now();
        if (before === 'night' && room.phase !== 'night' && nightStart && h.role === K) nightLens.push(Date.now() - nightStart);
      }
    } finally {
      console.error = orig;
    }
    assert.deepEqual(errors, [], `oyun ${g}`);
    if (room.phase === 'ended') ended += 1;
    room.destroy();
  }
  assert.equal(ended, 12, 'bütün oyunlar bitti');
  const avg = nightLens.reduce((a, b) => a + b, 0) / nightLens.length;
  const max = Math.max(...nightLens);
  assert.ok(max <= NIGHT_WALK_MS + 8000 + PICK_GRACE_MS + NIGHT_SHOW_MS + 500, `en uzun gece ${max} ms`);
  assert.ok(avg < 30000, `ortalama gece ${avg} ms`);
});

// ---------- oda sahipliği ve kopmalar ----------

test('oda sahibi kısa kopmada yetkiyi korur; 60 sn sonra bağlı ilk insana geçer; lobide 120 sn bekleme', (t) => {
  clock(t);
  assert.equal(HOST_GRACE_MS, 60000);
  assert.equal(LOBBY_GRACE_MS, 120000);
  const { room } = setup(5);
  room.disconnect('p0');
  assert.equal(room.hostId, 'p0', 'kopar kopmaz geçmez');
  t.mock.timers.tick(30000);
  room.connect('p0', 's0b');
  assert.equal(room.hostId, 'p0');
  t.mock.timers.tick(60000);
  assert.equal(room.hostId, 'p0', 'geri döndü: zamanlayıcı iptal');
  // Uzun kopma: 60 sn sonra yetki geçer, yeni sahip başlatabilir.
  room.disconnect('p0');
  assert.match(room.start('p1'), /sadece oda sahibi/);
  t.mock.timers.tick(HOST_GRACE_MS - 1);
  assert.equal(room.hostId, 'p0');
  t.mock.timers.tick(1);
  assert.equal(room.hostId, 'p1');
  assert.ok(room.players.has('p0'), 'lobide 120 sn dolmadan çıkarılmaz');
  room.connect('p0', 's0c');
  assert.equal(room.hostId, 'p1', 'dönen eski sahip yetkiyi geri almaz');
  room.disconnect('p4');
  t.mock.timers.tick(LOBBY_GRACE_MS - 1);
  assert.ok(room.players.has('p4'));
  t.mock.timers.tick(1);
  assert.ok(!room.players.has('p4'), '120 sn sonra çıkarıldı');
  // Açıkça ayrılan sahip: yetki hemen geçer.
  room.removePlayer('p1');
  assert.equal(room.hostId, 'p0');
  room.destroy();
});

test('oyun içinde de: sahip 60 sn içinde dönerse sahip kalır; başka bağlı insan yoksa döneni bekler', (t) => {
  clock(t);
  const { room } = setup(5);
  startWithRoles(room, [V, D, K, K, K, K].slice(0, 5));
  room.disconnect('p0');
  t.mock.timers.tick(10000);
  assert.equal(room.hostId, 'p0');
  room.connect('p0', 's0b');
  t.mock.timers.tick(HOST_GRACE_MS);
  assert.equal(room.hostId, 'p0');
  room.destroy();

  // Botlu odada tek insan sahip uzun süre koparsa yetki botlara geçmez.
  const { room: r2 } = botRoom('sahip', 1, 4, {});
  r2.disconnect('h0');
  t.mock.timers.tick(HOST_GRACE_MS + 1000);
  assert.equal(r2.hostId, 'h0');
  r2.connect('h0', 'x');
  assert.equal(r2.hostId, 'h0');
  r2.destroy();
});

// ---------- gözcü: kurtarılan ev ----------

test('gözcü: koruma saldırıyı durdurduysa show.watch.saved ve cümle; sakin evde false; ölümde died', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, D, G, K, K, K, K, K]);
  room.selectNight('p0', 'p3');
  room.selectNight('p1', 'p3');
  room.selectNight('p2', 'p3');
  room.endPick();
  const w = show(room, 'p2').watch;
  assert.equal(w.saved, true);
  assert.equal(w.died, false);
  assert.equal(room.viewFor('p5').night.show.watch, undefined, 'başkası watch görmez');
  room.endNight();
  const a = to(ev, 'watch', 'p2')[0];
  assert.equal(a.saved, true);
  assert.match(a.text, /yeşil ışıklar yükseldi/);
  room.destroy();

  const { room: r2 } = setup(8);
  startWithRoles(r2, [V, D, G, K, K, K, K, K]);
  r2.selectNight('p0', 'p3');
  r2.selectNight('p1', 'p5');
  r2.selectNight('p2', 'p6');
  r2.endPick();
  assert.equal(show(r2, 'p2').watch.saved, false);
  assert.equal(show(r2, 'p2').watch.died, false);
  r2.destroy();

  const { room: r3 } = setup(8);
  startWithRoles(r3, [V, D, G, K, K, K, K, K]);
  r3.selectNight('p0', 'p3');
  r3.selectNight('p1', 'p5');
  r3.selectNight('p2', 'p3');
  r3.endPick();
  assert.equal(show(r3, 'p2').watch.died, true);
  assert.equal(show(r3, 'p2').watch.saved, false);
  r3.destroy();
});
