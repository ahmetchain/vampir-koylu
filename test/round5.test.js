'use strict';

// 5a: Deli (kendini başka bir rol sanır) ve Hırsız (bir gece rol çalar).
const test = require('node:test');
const assert = require('node:assert/strict');
const { Room, ROLE, rolesFor, winnerOf, normalizeSettings, NIGHT_WALK_MS } = require('../game');
const { JsonStore } = require('../lib/store-json');
const { tempDir, removeDir } = require('./helpers');

const {
  VAMPIRE: V, FRAMER: F, DOCTOR: D, SEER: S, WATCHER: G, JAILER: L, WITCH: W, HUNTER: H, MAD: X, THIEF: T, VILLAGER: K,
} = ROLE;

function setup(count, settings = {}) {
  const ev = { announces: [], finished: [] };
  const room = new Room({
    id: 'TUR5',
    name: 'Tur 5',
    settings: { events: 'off', ...settings },
    hooks: {
      update() {},
      announce(r, a, to) { ev.announces.push({ ...a, to }); },
      empty() {},
      finished(r, res) { ev.finished.push(res); },
    },
  });
  for (let i = 0; i < count; i++) {
    room.addPlayer(`p${i}`, `Oyuncu${i}`, { userId: `u${i}` });
    room.connect(`p${i}`, `s${i}`);
  }
  return { room, ev };
}

// Rolleri sabitler; deli için sahte rol verilir: roles içinde ['deli', 'kahin'] biçiminde.
function startWithRoles(room, roles) {
  assert.equal(room.start(room.hostId), null);
  roles.forEach((r, i) => {
    const p = room.players.get(`p${i}`);
    if (Array.isArray(r)) { p.role = r[0]; p.fakeRole = r[1]; } else { p.role = r; p.fakeRole = null; }
  });
  room.startNight();
}

const of = (ev, kind) => ev.announces.filter((a) => a.kind === kind);
const clock = (t) => t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 9_000_000 });

// Değerlerin biçimi (anahtarlar ve türler); içerik farkı serbest.
function shape(v) {
  if (Array.isArray(v)) return 'array';
  if (v && typeof v === 'object') return Object.fromEntries(Object.keys(v).sort().map((k) => [k, shape(v[k])]));
  return v === null ? 'null' : typeof v;
}

// Biçim karşılaştırması: null bir değerin yerine geçebilir (ör. ev sahibi çıkmadıysa ownerWent: null).
function sameShape(a, b) {
  if (a === 'null' || b === 'null') return typeof a === 'string' && typeof b === 'string';
  if (typeof a !== typeof b) return false;
  if (typeof a === 'string') return a === b;
  const ka = Object.keys(a);
  const kb = Object.keys(b);
  return ka.length === kb.length && ka.every((k, i) => k === kb[i] && sameShape(a[k], b[k]));
}

// ---------- dağıtım ----------

test('dağıtım: deli ve hırsız sırası, hırsız 7+ kişide; delinin sahte rolü açık roller arasından', (t) => {
  clock(t);
  assert.deepEqual(rolesFor(9, [D, S, X, T]), [V, D, S, X, T, K, K, K, K]);
  assert.deepEqual(rolesFor(6, [D, X, T]), [V, D, X, K, K, K], '7 kişiden az: hırsız yok');
  const all = normalizeSettings({}).roles;
  assert.equal(all.deli, false);
  assert.equal(all.hirsiz, false);
  for (const [roles, allowed] of [[{ deli: true, gozcu: true, gardiyan: true, doktor: false, kahin: false }, [G, L]], [{ deli: true, doktor: false, kahin: false }, [S]]]) {
    for (let i = 0; i < 10; i++) {
      const { room } = setup(7, { roles });
      room.start('p0');
      const mad = [...room.players.values()].find((p) => p.role === X);
      assert.ok(mad && allowed.includes(mad.fakeRole), `${mad && mad.fakeRole}`);
      room.destroy();
    }
  }
});

// ---------- deli: ayırt edilemezlik ----------

// Aynı oyunu bir kez gerçek F ile, bir kez F sanan deliyle oynar; p1'e giden her şeyi kaydeder.
function scripted(t, subjectRole, fake) {
  const { room, ev } = setup(8, { roles: { doktor: true, kahin: true, gozcu: true, gardiyan: true, deli: true } });
  const seen = { states: [], announces: [], results: [], json: [] };
  room.hooks.update = (r) => {
    const v = r.viewFor('p1');
    seen.states.push(v);
    // Oda ayarları/dağılımı herkese açık ve herkes için aynıdır; kişiye özel kısımlara bakılır.
    seen.json.push(JSON.stringify({ me: v.me, players: v.players, night: v.night, day: v.day }));
  };
  room.hooks.announce = (r, a, to) => {
    ev.announces.push({ ...a, to });
    if (!to || to.includes('p1')) seen.announces.push(a);
    // Herkese açık duyurular herkes için aynıdır; özel olanlar ayrıca denetlenir.
    if (to && to.includes('p1')) seen.json.push(JSON.stringify(a));
  };
  assert.equal(room.start('p0'), null);
  [V, subjectRole === X ? [X, fake] : subjectRole, K, K, K, K, K, K].forEach((r, i) => {
    const p = room.players.get(`p${i}`);
    if (Array.isArray(r)) { p.role = r[0]; p.fakeRole = r[1]; } else { p.role = r; p.fakeRole = null; }
  });
  seen.states.length = 0; seen.announces.length = 0; seen.json.length = 0;
  room.startNight();
  const act = (fn) => { seen.results.push(fn()); };
  // 1. gece
  act(() => room.selectNight('p1', 'p3'));
  act(() => room.selectNight('p1', 'p4'));      // kesin seçim hatası
  room.selectNight('p0', 'p5');
  t.mock.timers.tick(NIGHT_WALK_MS + 30000);
  // 1. gün: gardiyan kilit seçer, diğer roller hata alır
  act(() => room.lockHouse('p1', 'p1'));
  act(() => room.lockHouse('p1', 'p6'));
  t.mock.timers.tick(120000);
  // 2. gece
  act(() => room.selectNight('p1', 'p1'));
  t.mock.timers.tick(NIGHT_WALK_MS + 30000);
  room.destroy();
  return seen;
}

for (const fake of [D, S, G, L]) {
  test(`deli (${fake} sanıyor) gerçek ${fake} ile aynı biçimde mesaj alır, "deli" hiç görmez`, (t) => {
    clock(t);
    const real = scripted(t, fake);
    const mad = scripted(t, X, fake);
    assert.deepEqual(mad.results, real.results, 'ack/hata metinleri aynı');
    assert.deepEqual(mad.announces.map((a) => a.kind), real.announces.map((a) => a.kind), 'aynı duyurular aynı sırada');
    mad.announces.forEach((a, i) => assert.ok(sameShape(shape(a), shape(real.announces[i])), `duyuru alanları aynı: ${a.kind}`));
    // Her durum biçimi, gerçek rol sahibinin aldığı biçimlerden biriyle aynı.
    const realShapes = real.states.map(shape);
    for (const st of mad.states) assert.ok(realShapes.some((r) => sameShape(shape(st), r)), 'durum biçimi gerçekte de var');
    assert.ok(mad.states.every((s) => s.me.role === fake && s.players[1].role === fake), 'kendini sahte rolüyle görür');
    assert.deepEqual(mad.states.map((s) => s.me.notes.length).pop(), real.states.map((s) => s.me.notes.length).pop(), 'not sayısı aynı');
    for (const j of mad.json) assert.doesNotMatch(j, /(^|[^a-zçğıöşüA-ZÇĞİÖŞÜ])[dD]eli([^a-zçğıöşü]|$)/, 'deli kelimesi gitmez');
  });
}

test('deli: sahte doktor korumaz, sahte kahin rastgele sonuç alır (gerçekten bağımsız)', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, [X, D], K, K, K, K, K, K]);
  room.selectNight('p1', 'p3');
  room.selectNight('p0', 'p3');
  room.endNight();
  assert.equal(room.players.get('p3').alive, false, 'sahte doktor koruyamaz');
  room.destroy();
  const verdicts = new Set();
  for (let i = 0; i < 40 && verdicts.size < 2; i++) {
    const { room: r, ev: e } = setup(8);
    startWithRoles(r, [V, [X, S], K, K, K, K, K, K]);
    r.selectNight('p1', 'p0');   // vampire baksa da sonuç rastgele
    r.endNight();
    const seer = of(e, 'seer').pop();
    assert.deepEqual(seer.to, ['p1']);
    verdicts.add(seer.targets[0].cause);
    r.destroy();
  }
  assert.deepEqual([...verdicts].sort(), ['temiz', 'vampir']);
  void ev;
});

test('deli: sahte gözcünün canlı paneli ve sabah raporu tutarlı; uydurma ziyaretçiler yaşayan oyuncular', (t) => {
  clock(t);
  for (let i = 0; i < 15; i++) {
    const { room, ev } = setup(8);
    startWithRoles(room, [V, [X, G], K, K, K, K, K, K]);
    room.selectNight('p1', 'p3');
    t.mock.timers.tick(NIGHT_WALK_MS + 29000);
    const live = room.viewFor('p1').night.watch;
    assert.ok(live.count <= 2);
    assert.ok(live.visitors.every((v) => v.id !== 'p3' && v.id !== 'p1' && room.players.get(v.id).alive));
    t.mock.timers.tick(1000);
    const report = of(ev, 'watch').pop();
    assert.deepEqual(report.to, ['p1']);
    assert.deepEqual([...report.visitors].sort(), live.visitors.map((v) => v.id).sort(), 'panel = rapor');
    assert.equal(report.ownerWent, live.ownerWent);
    assert.equal(report.count, live.count);
    room.destroy();
  }
});

test('deli: sahte gardiyan kimseyi kilitlemez, sabah küçük bir sayı alır', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, [X, L], K, K, K, K, K, K]);
  room.endNight();
  assert.equal(room.lockHouse('p1', 'p3'), null);
  assert.deepEqual(room.viewFor('p1').day.lock, { targetId: 'p3', lastTargetId: null });
  room.endDay();
  assert.equal(room.nightLock, null, 'gerçek kilit yok');
  assert.equal(of(ev, 'locked').length, 0);
  assert.equal(room.viewFor('p1').night.mySelection, 'p3');
  assert.equal(room.selectNight('p0', 'p3'), null);
  assert.equal(of(ev, 'bounced').length, 0, 'kimse geri dönmez');
  assert.equal(room.selectNight('p1', 'p4'), 'Gardiyan kilidini gündüz seçer; gece yapacağın bir şey yok.');
  room.endNight();
  assert.equal(room.players.get('p3').alive, false, 'sahte kilit vampiri durdurmadı');
  room.endDay();
  room.endNight();
  assert.equal(room.lockHouse('p1', 'p5'), null);
  room.endDay();
  room.endNight();
  const report = of(ev, 'lockreport').pop();
  assert.deepEqual(report.to, ['p1']);
  assert.ok([0, 1, 2].includes(report.count));
  assert.match(room.lockHouse('p1', 'p5'), /iki gece üst üste/, 'sahte kilit de aynı kurala uyar');
  room.destroy();
});

test('deli fiziksel olarak yürür: gerçek gözcü görür, gerçek kilit geri çevirir; ölünce Deli açıklanır', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, [X, D], G, L, K, K, K, K]);
  room.selectNight('p2', 'p4');
  room.selectNight('p1', 'p4');
  assert.deepEqual(room.viewFor('p2').night.watch.visitors, [{ id: 'p1', blocked: false }]);
  room.endNight();
  room.lockHouse('p3', 'p5');
  room.endDay();
  room.selectNight('p1', 'p5');
  const b = of(ev, 'bounced').pop();
  assert.deepEqual(b.to, ['p1']);
  assert.equal(room.viewFor('p1').night.bounced, true);
  // Kahin deliyi "vampir değil" görür; ölünce rolü Deli olarak açıklanır.
  room.endNight();
  for (const id of ['p0', 'p2', 'p3', 'p4']) room.vote(id, 'p1');
  room.endDay();
  const hanged = of(ev, 'hanged').pop();
  assert.match(hanged.text, /Rolü: Deli\./);
  assert.equal(room.viewFor('p1').me.role, X, 'gerçek rolünü ancak şimdi öğrenir');
  assert.equal(room.viewFor('p4').players[1].role, X);
  assert.equal(room.viewFor('p4').players[1].fakeRole, D, 'rol açıkken sanılan rol de gidebilir');
  room.destroy();
});

test('deli rolü gizliyse ölünce de sahte rolünü görür; oyun sonunda gerçeği öğrenir; köyle kazanır', (t) => {
  clock(t);
  const { room, ev } = setup(6, { revealRoles: false });
  startWithRoles(room, [V, [X, S], K, K, K, K]);
  room.selectNight('p0', 'p1');
  room.endNight();
  assert.equal(room.viewFor('p1').me.role, S);
  for (const v of ['p1', 'p2']) assert.equal(room.viewFor(v).players[1].fakeRole, null, 'sanılan rol oyun bitmeden gitmez');
  for (const id of ['p2', 'p3', 'p4']) room.vote(id, 'p0');
  room.endDay();
  assert.equal(room.phase, 'ended');
  assert.equal(room.viewFor('p1').me.role, X);
  for (const v of ['p1', 'p2']) assert.equal(room.viewFor(v).players[1].fakeRole, S, 'oyun sonunda: kendini kahin sanıyordu');
  assert.ok(room.viewFor('p2').players.every((p) => p.id === 'p1' || p.fakeRole === null));
  assert.ok(room.winners.includes('p1'), 'ölü deli de köyle kazanır');
  assert.equal(ev.finished[0].results.find((r) => r.playerId === 'p1').team, K);
  room.destroy();
});

// ---------- hırsız ----------

test('hırsız çalmadan tarafsızdır: eşitlikte köy sayılmaz, kahin temiz görür, çalamadan biterse kaybeder', (t) => {
  clock(t);
  const p = (role, alive = true) => ({ role, alive });
  assert.equal(winnerOf([p(V), p(T), p(K)]), null);
  assert.equal(winnerOf([p(V), p(T)]), V);
  const { room, ev } = setup(7);
  startWithRoles(room, [V, S, T, K, K, K, K]);
  assert.match(room.selectNight('p2', 'p2'), /Kendinden çalamazsın/);
  room.selectNight('p1', 'p2');
  room.endNight();
  assert.match(of(ev, 'seer').pop().text, /vampir değil/);
  for (const id of ['p1', 'p2', 'p3']) room.vote(id, 'p0');
  room.endDay();
  assert.equal(room.winner, K);
  assert.equal(room.winners.includes('p2'), false, 'çalamayan hırsız kaybeder');
  assert.equal(ev.finished[0].results.find((r) => r.playerId === 'p2').team, T);
  room.destroy();
});

test('hırsız çalar: hedef "soyuldu" (vanish), rolü olduğu gibi alır, özel steal duyurusu', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, D, T, K, K, K, K, K]);
  assert.equal(room.selectNight('p2', 'p1'), null);
  assert.match(room.selectNight('p2', 'p3'), /kesindir/);
  assert.equal(room.viewFor('p2').night.mySelection, 'p1');
  room.endNight();
  const death = of(ev, 'death').pop();
  assert.deepEqual(death.targets, [{ id: 'p1', cause: 'hirsiz', scene: 'vanish' }]);
  assert.equal(death.scene, 'vanish');
  assert.match(death.text, /Oyuncu1 bu gece soyulup öldürüldü! Rolü bilinmiyor; çalındı\./);
  assert.ok(room.log.some((e) => e.kind === 'death' && /soyulup öldürüldü/.test(e.text)));
  assert.equal(of(ev, 'stealfail').length, 0);
  const steal = of(ev, 'steal').pop();
  assert.deepEqual(steal.to, ['p2']);
  assert.equal(steal.role, D);
  assert.deepEqual(steal.targets, [{ id: 'p1' }]);
  assert.equal(room.players.get('p2').role, D);
  assert.equal(room.viewFor('p2').me.role, D);
  assert.equal(room.viewFor('p3').players[2].role, null, 'hırsızlık gizli');
  room.endDay();
  assert.equal(room.viewFor('p2').night.canAct, true, 'artık doktor');
  assert.equal(room.selectNight('p2', 'p2'), null);
  room.destroy();
});

test('hırsız: doktor korursa ya da kapı kilitliyse hak gitmez; vampir aynı hedefi öldürürse yine çalar', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, D, T, L, K, K, K, K]);
  room.selectNight('p1', 'p4');
  room.selectNight('p2', 'p4');
  room.endNight();
  assert.equal(room.players.get('p4').alive, true);
  assert.equal(room.players.get('p2').role, T, 'doktor korudu, hak duruyor');
  const fail = of(ev, 'stealfail');
  assert.equal(fail.length, 1);
  assert.deepEqual(fail[0].to, ['p2']);
  assert.deepEqual(fail[0].targets, [{ id: 'p4' }]);
  assert.match(fail[0].text, /korunuyordu; çalamadın ama hakkın yanmadı/);
  assert.match(room.players.get('p2').notes.pop().text, /hakkın yanmadı/);
  room.lockHouse('p3', 'p5');
  room.endDay();
  room.selectNight('p2', 'p5');
  assert.deepEqual(of(ev, 'bounced').pop().to, ['p2']);
  assert.equal(of(ev, 'stealfail').length, 1, 'kilitli kapı stealfail değil, bounced verir');
  room.endNight();
  assert.equal(room.players.get('p2').role, T, 'kilit geri çevirdi, hak duruyor');
  room.endDay();
  room.selectNight('p2', 'p6');
  room.selectNight('p0', 'p6');
  room.endNight();
  const death = of(ev, 'death').pop();
  assert.deepEqual(death.targets.map((x) => x.cause), ['vampir'], 'herkese açık sebep vampir');
  assert.equal(room.players.get('p2').role, K, 'yine de rolü aldı');
  room.destroy();
});

test('hırsız aynı gece ölürse rolü alamaz (hedef yine ölür)', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, D, T, K, K, K, K, K]);
  room.selectNight('p2', 'p4');
  room.selectNight('p0', 'p2');
  room.endNight();
  assert.equal(room.players.get('p2').alive, false);
  assert.equal(room.players.get('p4').alive, false);
  assert.equal(room.players.get('p2').role, T);
  assert.equal(of(ev, 'steal').length, 0);
  room.destroy();
});

test('hırsız vampir çalarsa kötü takıma geçer: karşılıklı görünürlük ve vampir sohbeti', (t) => {
  clock(t);
  const { room } = setup(10);
  startWithRoles(room, [V, V, T, K, K, K, K, K, K, K]);
  room.selectNight('p2', 'p1');
  room.endNight();
  assert.equal(room.players.get('p2').role, V);
  assert.equal(room.viewFor('p0').players[2].role, V, 'vampir hırsızı görür');
  assert.equal(room.viewFor('p2').players[0].role, V, 'hırsız vampiri görür');
  room.endDay();
  const msg = room.chat('p2', 'merhaba takım');
  assert.equal(msg.channel, 'vampir');
  assert.deepEqual(msg.recipients.sort(), ['p0', 'p2']);
  room.destroy();
});

test('hırsız deliyi çalarsa deli olur ve aynı sahte rolü görür; avcıyı çalarsa hırsız avcı olur', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, [X, S], T, K, K, K, K, K]);
  room.selectNight('p2', 'p1');
  room.endNight();
  assert.equal(room.players.get('p2').role, X);
  assert.equal(room.players.get('p2').fakeRole, S);
  assert.equal(of(ev, 'steal').pop().role, S, 'sahte rol söylenir');
  assert.match(of(ev, 'steal').pop().text, /Artık rolün: Kahin\./);
  assert.equal(room.viewFor('p2').me.role, S);
  room.destroy();

  const { room: r2 } = setup(8);
  startWithRoles(r2, [V, H, T, K, K, K, K, K]);
  r2.selectNight('p2', 'p1');
  r2.endNight();
  assert.notEqual(r2.phase, 'hunter', 'soyulan avcı için son atış yok');
  assert.equal(r2.players.get('p2').role, H);
  r2.destroy();
});

test('hırsız cadıyı çalarsa kullanılmış iksirler kullanılmış kalır', (t) => {
  clock(t);
  const { room } = setup(8);
  startWithRoles(room, [V, W, T, K, K, K, K, K]);
  room.selectNight('p1', 'p5', 'poison');
  room.endNight();
  room.endDay();
  room.selectNight('p2', 'p1');
  room.endNight();
  assert.equal(room.players.get('p2').role, W);
  room.endDay();
  assert.match(room.selectNight('p2', 'p4', 'poison'), /Zehri zaten kullandın/);
  room.destroy();
});

test('istatistik: hiç çalamamış hırsız sadece toplamlara sayılır (takım kovası yok)', async (t) => {
  const dir = tempDir();
  t.after(() => removeDir(dir));
  const store = new JsonStore({ dir });
  await store.init();
  const u = await store.createUser({ id: 'u1', username: 'Hırsız', key: 'hirsiz', passHash: 'x', createdAt: 1, look: { color: 0, hat: 0, skin: 0 } });
  await store.recordResults([{ userId: u.id, team: 'hirsiz', won: false }]);
  const back = await store.getUser(u.id);
  assert.equal(back.stats.games, 1);
  assert.deepEqual(Object.keys(back.stats.teams).sort(), ['koylu', 'soytari', 'vampir']);
  assert.ok(Object.values(back.stats.teams).every((x) => x.games === 0));
  await store.close();
});

// ---------- hırsız: çalınan rol gizli kalır ----------

test('hırsız çalar: kurbanın rolü oyun bitene kadar kimseye açıklanmaz (revealRoles açık)', (t) => {
  clock(t);
  const { room, ev } = setup(8, { revealRoles: true });
  startWithRoles(room, [V, D, T, K, K, K, K, K]);
  room.selectNight('p2', 'p1');
  room.endNight();
  assert.equal(room.players.get('p1').alive, false);
  const death = of(ev, 'death').pop();
  assert.match(death.text, /Rolü bilinmiyor; çalındı\./);
  assert.doesNotMatch(death.text, /Doktor/);
  for (const e of room.log) if (/Oyuncu1|soyul/.test(e.text)) assert.doesNotMatch(e.text, /Doktor/, e.text);
  for (let i = 0; i < 8; i++) {
    const v = room.viewFor(`p${i}`);
    const p1 = v.players.find((p) => p.id === 'p1');
    if (i !== 1) assert.equal(p1.role, null, `p${i} kurbanın rolünü görmemeli`);
    assert.doesNotMatch(JSON.stringify(v.log || []), /Rolü: Doktor/);
  }
  assert.equal(room.viewFor('p2').me.role, D);
  room.phase = 'ended';
  assert.equal(room.viewFor('p3').players.find((p) => p.id === 'p1').role, D, 'oyun bitince açık');
  room.destroy();
});

test('hırsız çalar: kurban avcıysa son atış tetiklenmez ve "avcıydı" açıklanmaz', (t) => {
  clock(t);
  const { room, ev } = setup(8, { revealRoles: true });
  startWithRoles(room, [V, H, T, K, K, K, K, K]);
  room.selectNight('p2', 'p1');
  room.endNight();
  assert.notEqual(room.phase, 'hunter');
  assert.equal(of(ev, 'hunter').length, 0);
  assert.equal(room.players.get('p2').role, H);
  assert.equal(room.viewFor('p3').players.find((p) => p.id === 'p1').role, null);
  room.destroy();
});

test('başarısız soygun hiçbir şeyi değiştirmez; rol normal kurala göre açıklanır', (t) => {
  clock(t);
  const { room, ev } = setup(8, { revealRoles: true });
  startWithRoles(room, [V, D, T, K, K, K, K, K]);
  room.selectNight('p1', 'p4');
  room.selectNight('p2', 'p4');
  room.endNight();
  assert.equal(room.players.get('p4').alive, true);
  assert.equal(of(ev, 'death').length, 0);
  assert.equal(room.players.get('p4').roleHidden, false);
  room.destroy();
});
