'use strict';

// Vampir yetenekleri (V2-PLAN §22; eski 7. tur İftiracı/Temizlikçi rollerinin yerine): iftira, temizlik, dağıtım,
// her vampirin kendi kurbanı, terfi yok.
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  Room, ROLE, ROLE_LABEL, OPTIONAL_ROLES, rolesFor, winnerOf, normalizeSettings, teamOf, isEvil, dealAbilities, ABILITY_MIN_PLAYERS,
} = require('../game');

const {
  VAMPIRE: V, DOCTOR: D, SEER: S, WATCHER: G, JAILER: L, WITCH: W, HUNTER: H,
  JESTER: J, MAD: X, THIEF: T, VILLAGER: K,
} = ROLE;
// F / C: iftira / temizlik yetenekli vampir (rol değil; startWithRoles bunları vampir + yetenek olarak kurar).
const F = 'iftiraci';
const C = 'temizlikci';
const ABILITY = { [F]: 'iftira', [C]: 'temizlik' };

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

function setup(count, settings = {}) {
  const ev = { announces: [], finished: [], narrated: [] };
  const room = new Room({
    id: 'TUR7',
    name: 'Tur 7',
    settings: { events: 'off', ...settings },
    hooks: {
      update() {},
      announce(r, a, to) { ev.announces.push({ ...a, to }); },
      empty() {},
      finished(r, res) { ev.finished.push(res); },
    },
  });
  const narrate = room.narrate.bind(room);
  room.narrate = (method, input, fallback) => { ev.narrated.push({ method, input }); return narrate(method, input, fallback); };
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
    p.ability = null;
    if (Array.isArray(r)) { p.role = r[0]; p.fakeRole = r[1]; } else {
      p.role = ABILITY[r] ? V : r;
      p.ability = ABILITY[r] || null;
      p.fakeRole = null;
    }
  });
  room.startNight();
}

const of = (ev, kind) => ev.announces.filter((a) => a.kind === kind);
const clock = (t) => t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 11_000_000 });
const roleSeen = (room, viewer, id) => room.viewFor(viewer).players.find((p) => p.id === id).role;
const entry = (room, viewer, id) => room.viewFor(viewer).players.find((p) => p.id === id);
const everyone = (room) => [...room.players.keys()];
const deadCount = (room) => [...room.players.values()].filter((p) => !p.alive).length;

// ---------- iftira yeteneği tutar ----------

test('iftira: aynı gece ölen herkese "vampir" görünür (durum, duyuru, günlük, anlatı); kurallar gerçek rolü kullanır', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, F, D, K, K, K, K, K]);
  assert.equal(room.selectNight('p1', 'p2', 'frame'), null);   // iftira yetenekli vampir doktora iftira atar
  room.selectNight('p0', 'p2');          // öteki vampir doktoru öldürür
  room.endNight();
  assert.equal(room.players.get('p2').role, D, 'gerçek rol değişmez');
  for (const v of everyone(room)) {
    if (v !== 'p2') assert.equal(roleSeen(room, v, 'p2'), V, `${v} vampir görür`);
    assert.equal(entry(room, v, 'p2').framed, false, 'bayrak oyun bitene kadar yok');
  }
  assert.equal(roleSeen(room, 'p2', 'p2'), D, 'ölen kendi gerçek rolünü bilir');
  const death = of(ev, 'death').pop();
  assert.match(death.text, /Oyuncu2 bu gece vampir tarafından öldürüldü! Rolü: Vampir\./);
  assert.doesNotMatch(JSON.stringify(death), /Doktor|doktor/);
  assert.ok(room.log.some((e) => e.kind === 'death' && /Oyuncu2 .*Rolü: Vampir\./.test(e.text)));
  assert.ok(!room.log.some((e) => /Doktor/.test(e.text)));
  const dawnIn = ev.narrated.filter((n) => n.method === 'dawn').pop().input;
  assert.deepEqual(dawnIn.deaths.map((d) => d.role), [V], 'anlatı sahte rolü alır');
  assert.equal(winnerOf([...room.players.values()]), null, 'sayım gerçek rolle');
  assert.equal(room.phase, 'day');
  // Oyun biter: gerçek açılır, framed bayrağı.
  for (const id of ['p3', 'p4', 'p5', 'p6']) room.vote(id, 'p0');
  room.endDay();
  // Gerçek ölü vampir (p0) ile iftiralı ölü (p2) köylünün gözünde aynı.
  const strip = (e) => ({ ...e, id: 0, name: 0, seat: 0, look: 0, pos: 0, job: 0, isHost: 0 });
  assert.deepEqual(strip(entry(room, 'p3', 'p2')), strip(entry(room, 'p3', 'p0')));
  room.endNight();
  for (const id of ['p3', 'p4', 'p5']) room.vote(id, 'p1');
  room.endDay();
  assert.equal(room.phase, 'ended');
  assert.equal(roleSeen(room, 'p3', 'p2'), D);
  assert.equal(entry(room, 'p3', 'p2').framed, true);
  assert.equal(entry(room, 'p3', 'p4').framed, false);
  assert.equal(ev.finished[0].results.find((x) => x.playerId === 'p2').role, D, 'istatistik gerçek rolle');
  room.destroy();
});

test('iftira: ertesi gün asılan da "vampir" görünür; iki gün sonra ya da bir sonraki gece geçmez', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, F, D, K, K, K, K, K]);
  room.selectNight('p1', 'p3', 'frame');
  room.endNight();
  for (const id of ['p0', 'p2', 'p4', 'p5']) room.vote(id, 'p3');
  room.endDay();
  const hanged = of(ev, 'hanged').pop();
  assert.match(hanged.text, /Rolü: Vampir\./);
  assert.equal(roleSeen(room, 'p4', 'p3'), V);
  const hangIn = ev.narrated.filter((n) => n.method === 'hanged').pop().input;
  assert.equal(hangIn.role, V);
  room.destroy();

  // İftira gece 1; asılma gün 2 → gerçek.
  const { room: r2, ev: e2 } = setup(8);
  startWithRoles(r2, [V, F, D, K, K, K, K, K]);
  r2.selectNight('p1', 'p3', 'frame');
  r2.endNight();
  r2.endDay();
  r2.endNight();
  for (const id of ['p0', 'p2', 'p4', 'p5']) r2.vote(id, 'p3');
  r2.endDay();
  assert.match(of(e2, 'hanged').pop().text, /Rolü: Köylü\./);
  // İftira gece 1, ölüm gece 2: gerçek.
  const { room: r3, ev: e3 } = setup(8);
  startWithRoles(r3, [V, F, D, K, K, K, K, K]);
  r3.selectNight('p1', 'p4', 'frame');
  r3.endNight();
  r3.endDay();
  r3.selectNight('p0', 'p4');
  r3.endNight();
  assert.match(of(e3, 'death').pop().text, /Oyuncu4 .*Rolü: Köylü\./);
  r2.destroy();
  r3.destroy();
});

test('iftira istisnaları: avcı, asılan soytarı, soyulan ve temizlenen ölü; roller gizliyse hiçbir şey; iftiracı vampir ölürse iftira yok', (t) => {
  clock(t);
  // Avcı: son atış gerçeği söyler.
  const { room: a } = setup(8);
  startWithRoles(a, [V, F, H, K, K, K, K, K]);
  a.selectNight('p1', 'p2', 'frame');
  a.selectNight('p0', 'p2');
  a.endNight();
  assert.equal(a.phase, 'hunter');
  assert.equal(roleSeen(a, 'p4', 'p2'), H);
  a.destroy();
  // Soytarı asılırsa kazanır ve rolü açıklanır.
  const { room: j, ev: je } = setup(8);
  startWithRoles(j, [V, F, J, K, K, K, K, K]);
  j.selectNight('p1', 'p2', 'frame');
  j.endNight();
  for (const id of ['p0', 'p3', 'p4', 'p5']) j.vote(id, 'p2');
  j.endDay();
  assert.equal(j.winner, J);
  assert.match(of(je, 'hanged').pop().text, /Rolü: Soytarı\./);
  j.destroy();
  // Soyulan: gizli kalır; hırsız gerçek rolü alır.
  const { room: th, ev: te } = setup(8);
  startWithRoles(th, [V, F, D, T, K, K, K, K]);
  th.selectNight('p1', 'p2', 'frame');
  th.selectNight('p3', 'p2');
  th.endNight();
  assert.match(of(te, 'death').pop().text, /Rolü bilinmiyor; çalındı\./);
  assert.equal(th.players.get('p3').role, D, 'hırsız gerçek rolü aldı');
  assert.equal(roleSeen(th, 'p4', 'p2'), null);
  th.destroy();
  // Temizlenen: gizli (hem iftira hem temizlik aynı kişide: temizlik kazanır).
  const { room: c, ev: ce } = setup(8);
  startWithRoles(c, [V, F, C, K, K, K, K, K]);
  c.selectNight('p1', 'p4', 'frame');
  c.selectNight('p2', 'p4', 'clean');
  c.selectNight('p0', 'p4');
  c.endNight();
  assert.match(of(ce, 'death').pop().text, /Oyuncu4 .*Rolü bilinmiyor; izler silinmiş\./);
  assert.equal(roleSeen(c, 'p5', 'p4'), null);
  c.destroy();
  // Roller gizli: açıklama yok, oyun sonunda framed da yok.
  const { room: h, ev: he } = setup(8, { revealRoles: false });
  startWithRoles(h, [V, F, D, K, K, K, K, K]);
  h.selectNight('p1', 'p2', 'frame');
  h.selectNight('p0', 'p2');
  h.endNight();
  assert.doesNotMatch(of(he, 'death').pop().text, /Rolü/);
  assert.equal(roleSeen(h, 'p4', 'p2'), null);
  assert.equal(h.players.get('p2').framedReveal, false);
  h.destroy();
  // İftiracı vampir aynı gece zehirlenirse iftira hiç olmamıştır.
  const { room: w, ev: we } = setup(8);
  startWithRoles(w, [V, F, W, K, K, K, K, K]);
  w.selectNight('p1', 'p4', 'frame');
  w.selectNight('p2', 'p1', 'poison');
  w.selectNight('p0', 'p4');
  w.endNight();
  assert.match(of(we, 'death').pop().text, /Oyuncu4 .*Rolü: Köylü\./);
  assert.match(of(we, 'death').pop().text, /Oyuncu1 .*Rolü: Vampir\./);
  w.destroy();
});

test('iftira: deli de "vampir" görünür (kendisi gerçeği öğrenir); kötü takım da aynı görür', (t) => {
  clock(t);
  const { room } = setup(8);
  startWithRoles(room, [V, F, [X, D], K, K, K, K, K]);
  room.selectNight('p1', 'p2', 'frame');
  room.selectNight('p0', 'p2');
  room.endNight();
  assert.equal(roleSeen(room, 'p4', 'p2'), V);
  assert.equal(entry(room, 'p4', 'p2').fakeRole, null, 'deli izi yok');
  assert.equal(roleSeen(room, 'p0', 'p2'), V);
  assert.equal(room.viewFor('p2').me.role, X);
  room.destroy();
});

// ---------- yetenek dağıtımı ----------

test('yetenek dağıtımı: 7+ oyuncu, her açık yetenek ayrı vampire, fazlası düşer, tek vampirde rastgele biri', () => {
  assert.equal(ABILITY_MIN_PLAYERS, 7);
  const rng = (seed) => { const r = mulberry(seed); return (n) => Math.floor(r() * n); };
  const both = [F, C];
  // 2+ vampir, iki yetenek: farklı vampirlere.
  for (let i = 0; i < 40; i++) {
    const got = dealAbilities(['a', 'b', 'c'], both, 10, rng(`d${i}`));
    assert.equal(got.length, 2);
    assert.notEqual(got[0][0], got[1][0], 'ayrı vampirler');
    assert.deepEqual(got.map((x) => x[1]).sort(), ['iftira', 'temizlik']);
  }
  // Tek vampir, iki yetenek: ona rastgele biri (ikisi de çıkabilir), ikisi birden asla.
  const seen = new Set();
  for (let i = 0; i < 60; i++) {
    const got = dealAbilities(['a'], both, 8, rng(`e${i}`));
    assert.equal(got.length, 1);
    seen.add(got[0][1]);
  }
  assert.deepEqual([...seen].sort(), ['iftira', 'temizlik']);
  // Tek yetenek açık: tek vampire; hiç açık değil ya da 7 kişiden az: yok.
  assert.deepEqual(dealAbilities(['a', 'b'], [C], 9, rng('f')).map((x) => x[1]), ['temizlik']);
  assert.deepEqual(dealAbilities(['a', 'b'], [], 9, rng('g')), []);
  assert.deepEqual(dealAbilities(['a', 'b'], both, 6, rng('h')), []);
  assert.deepEqual(dealAbilities([], both, 9, rng('i')), []);
});

test('oda: yetenekler 7+ oyuncuda ve ayar açıksa verilir; yalnızca sahibi ve vampir takımı görür; rol olarak dağıtılmaz', (t) => {
  clock(t);
  for (let i = 0; i < 12; i++) {
    const { room } = setup(10, { roles: { iftiraci: true, temizlikci: true } });
    assert.equal(room.start('p0'), null);
    const players = [...room.players.values()];
    const roles = players.map((p) => p.role);
    assert.ok(!roles.includes('iftiraci') && !roles.includes('temizlikci'), 'yardımcı rol yok');
    const withAbility = players.filter((p) => p.ability);
    assert.equal(roles.filter((r) => r === V).length, 2);
    assert.deepEqual(withAbility.map((p) => p.ability).sort(), ['iftira', 'temizlik'], 'iki vampir, iki yetenek');
    assert.ok(withAbility.every((p) => p.role === V));
    const [a, b] = withAbility;
    // Sahibi ve takım arkadaşı görür.
    assert.equal(room.viewFor(a.id).me.ability, a.ability);
    assert.equal(entry(room, a.id, b.id).ability, b.ability, 'takım arkadaşının yeteneğini görür');
    assert.equal(entry(room, a.id, a.id).ability, a.ability);
    // Köylü hiçbirini görmez.
    const villager = players.find((p) => p.role !== V);
    for (const p of room.viewFor(villager.id).players) assert.equal(p.ability, null);
    assert.equal(room.viewFor(villager.id).me.ability, null);
    room.destroy();
  }
  // 6 oyuncuda ve ayar kapalıyken yok; tek vampir + iki yetenek: biri.
  const { room: six } = setup(6, { roles: { iftiraci: true, temizlikci: true } });
  six.start('p0');
  assert.ok([...six.players.values()].every((p) => !p.ability));
  six.destroy();
  const { room: off } = setup(10);
  off.start('p0');
  assert.ok([...off.players.values()].every((p) => !p.ability), 'yetenek anahtarları varsayılan kapalı');
  off.destroy();
  const { room: one } = setup(7, { roles: { iftiraci: true, temizlikci: true } });
  one.start('p0');
  assert.equal([...one.players.values()].filter((p) => p.ability).length, 1, 'tek vampirde tek yetenek');
  one.destroy();
  // 7 oyuncu, 2 vampir ayarı, yetenekler kapalı: iki sade vampir.
  const { room: plain } = setup(7, { vampires: 2 });
  plain.start('p0');
  assert.equal([...plain.players.values()].filter((p) => p.role === V).length, 2);
  assert.ok([...plain.players.values()].every((p) => !p.ability));
  plain.destroy();
});

test('yetenek bilgileri: rol değil; ayar anahtarları yetenek anahtarıdır; vampir takımı = vampirler', () => {
  assert.equal(ROLE.FRAMER, undefined);
  assert.equal(ROLE.CLEANER, undefined);
  assert.equal(ROLE_LABEL.iftiraci, undefined);
  assert.equal(teamOf(V), V);
  assert.equal(teamOf('iftiraci'), 'koylu', 'bilinmeyen rol köy sayılır');
  assert.ok(isEvil(V));
  assert.equal(normalizeSettings({}).roles.temizlikci, false);
  assert.equal(normalizeSettings({ roles: { iftiraci: true } }).roles.iftiraci, true);
  assert.ok(OPTIONAL_ROLES.includes('iftiraci') && OPTIONAL_ROLES.includes('temizlikci'));
  // Rol dağıtımı yetenek anahtarlarından etkilenmez.
  assert.deepEqual(rolesFor(7, [D, S, 'temizlikci']), [V, D, S, K, K, K, K]);
  assert.deepEqual(rolesFor(8, [D, 'iftiraci', 'temizlikci']), [V, D, K, K, K, K, K, K], "'all': yetenekler rol yerine geçmez");
  const p = (role, alive = true) => ({ role, alive });
  assert.equal(winnerOf([p(V), p(K), p(K)]), null);
  assert.equal(winnerOf([p(V), p(K)]), V);
  assert.equal(winnerOf([p(V, false), p(K), p(K)]), K, 'son vampir ölünce köy kazanır (terfi yok)');
});

// ---------- her vampir kendi kurbanını seçer ----------

test('2 vampir 2 kurban: her biri kendi kurbanının evine gider; aynı kurban tek ölüm ve gözcü ikisini birden görür', (t) => {
  clock(t);
  // A) farklı kurbanlar
  const a = setup(10, { roles: { gozcu: true } });
  startWithRoles(a.room, [V, V, G, K, K, K, K, K, K, K]);
  assert.equal(a.room.selectNight('p0', 'p3'), null);
  assert.equal(a.room.selectNight('p1', 'p4'), null, 'ikinci vampir da kendi kurbanını seçebilir');
  assert.equal(a.room.selectNight('p2', 'p3'), null);
  assert.deepEqual(a.room.vampireTargets().sort(), ['p3', 'p4']);
  a.room.endNight();
  assert.equal(a.room.players.get('p3').alive, false);
  assert.equal(a.room.players.get('p4').alive, false, 'iki ölüm');
  assert.equal(deadCount(a.room), 2);
  assert.deepEqual(of(a.ev, 'watch')[0].visitors, ['p0']);
  assert.equal(of(a.ev, 'death').pop().targets.length, 2);
  a.room.destroy();
  // B) aynı kurban: tek ölüm, ikisi de eve gider
  const b = setup(10, { roles: { gozcu: true } });
  startWithRoles(b.room, [V, V, G, K, K, K, K, K, K, K]);
  b.room.selectNight('p2', 'p3');
  b.room.selectNight('p0', 'p3');
  b.room.selectNight('p1', 'p3');
  b.room.endNight();
  assert.equal(deadCount(b.room), 1);
  assert.deepEqual(of(b.ev, 'watch')[0].visitors, ['p0', 'p1'], 'gözcü iki vampiri birden yakalar');
  b.room.destroy();
});

test('vampirlerin hepsi bir görünümde: team[] seçimleri ve yetenekleri; seçim kesin; kural dışı seçimler reddedilir', (t) => {
  clock(t);
  const { room } = setup(10);
  startWithRoles(room, [V, F, K, K, K, K, K, K, K, K]);
  assert.deepEqual(room.viewFor('p0').night.team, [
    { vampId: 'p0', name: 'Oyuncu0', targetId: null, kind: null, ability: null },
    { vampId: 'p1', name: 'Oyuncu1', targetId: null, kind: null, ability: 'iftira' },
  ]);
  assert.equal(room.viewFor('p0').night.ability, null);
  assert.equal(room.viewFor('p1').night.ability, 'iftira');
  // yeteneği olmayan iftira/temizlik atamaz; yetenekli diğerini atamaz
  assert.match(room.selectNight('p0', 'p3', 'frame'), /yeteneğin yok/);
  assert.match(room.selectNight('p0', 'p3', 'clean'), /yeteneğin yok/);
  assert.match(room.selectNight('p1', 'p3', 'clean'), /yeteneğin yok/);
  assert.match(room.selectNight('p1', 'p1', 'frame'), /Kendine iftira/);
  assert.match(room.selectNight('p1', 'p0', 'frame'), /Takım arkadaşına iftira/);
  assert.match(room.selectNight('p1', 'p0'), /Diğer vampirleri/);
  assert.match(room.selectNight('p0', 'p0'), /kendini/);
  assert.equal(room.viewFor('p1').night.canAct, true, 'hatalı seçim hakkı yakmaz');
  assert.equal(room.selectNight('p1', 'p3', 'frame'), null);
  assert.equal(room.viewFor('p1').night.myKind, 'frame');
  assert.equal(room.viewFor('p1').night.mySelection, 'p3');
  assert.equal(room.viewFor('p1').night.canAct, false);
  assert.match(room.selectNight('p1', 'p4'), /kesindir/, 'vampir başına tek eylem');
  assert.equal(room.selectNight('p0', 'p4'), null);
  assert.deepEqual(room.viewFor('p0').night.team.map((x) => [x.targetId, x.kind]), [['p4', 'kill'], ['p3', 'frame']]);
  assert.equal(room.viewFor('p5').night, null, 'köylü ekip bilgisi görmez');
  assert.deepEqual(room.vampireTargets(), ['p4'], 'iftira kurban sayılmaz');
  room.endPick();
  assert.deepEqual(room.viewFor('p0').night.show.team, [{ id: 'p1', to: 'p3', kind: 'frame', outcome: 'done' }]);
  assert.deepEqual(room.viewFor('p1').night.show.trip, { to: 'p3', kind: 'frame', outcome: 'done', interior: false });
  room.destroy();
});

test('terfi yok: yetenekli vampir da vampirdir; son vampir ölünce köy kazanır; vampir olmayan kimse vampire dönüşmez', (t) => {
  clock(t);
  const { room, ev } = setup(10);
  startWithRoles(room, [V, F, C, K, K, K, K, K, K, K]);
  room.endNight();
  for (const id of ['p3', 'p4', 'p5', 'p6']) room.vote(id, 'p0');
  room.endDay();
  assert.equal(room.players.get('p1').role, V);
  assert.equal(room.phase, 'night', 'iki vampir daha var: oyun sürer');
  room.endNight();
  for (const id of ['p3', 'p4', 'p5', 'p6']) room.vote(id, 'p1');
  room.endDay();
  assert.equal(room.phase, 'night');
  room.endNight();
  for (const id of ['p3', 'p4', 'p5', 'p6']) room.vote(id, 'p2');
  room.endDay();
  assert.equal(room.phase, 'ended');
  assert.equal(room.winner, K);
  assert.equal(of(ev, 'promote').length, 0, 'terfi duyurusu yok');
  room.destroy();
});

// ---------- temizlik yeteneği ----------

test('temizlik: seçim kuralları, bekleme, yolculuk (clean), takım görür, gözcü görür, kilit geri çevirir', (t) => {
  clock(t);
  const { room, ev } = setup(9, { roles: { gardiyan: true, gozcu: true } });
  startWithRoles(room, [V, C, G, L, K, K, K, K, K]);
  assert.match(room.selectNight('p1', 'p1', 'clean'), /Kendi izini/);
  assert.match(room.selectNight('p1', 'p0', 'clean'), /Takım arkadaşının/);
  assert.match(room.selectNight('p0', 'p1'), /Diğer vampirleri/);
  room.selectNight('p0', 'p5');
  assert.deepEqual(room.viewFor('p1').night.team.find((x) => x.vampId === 'p0'), { vampId: 'p0', name: 'Oyuncu0', targetId: 'p5', kind: 'kill', ability: null }, 'temizlikçi takımın seçimini görür');
  assert.equal(room.selectNight('p1', 'p5', 'clean'), null);
  assert.match(room.selectNight('p1', 'p6', 'clean'), /kesindir/);
  assert.equal(room.viewFor('p0').night.team.find((x) => x.vampId === 'p1').kind, 'clean');
  assert.equal(room.viewFor('p1').night.mySelection, 'p5');
  assert.equal(room.viewFor('p4').night, null);
  room.selectNight('p2', 'p5');
  room.endPick();
  assert.deepEqual(room.viewFor('p1').night.show.trip, { to: 'p5', kind: 'clean', outcome: 'done', interior: false });
  assert.deepEqual(room.viewFor('p0').night.show.team, [{ id: 'p1', to: 'p5', kind: 'clean', outcome: 'done' }]);
  assert.deepEqual(room.viewFor('p2').night.show.watch.arrivals.map((x) => x.id).sort(), ['p0', 'p1']);
  room.endNight();
  assert.equal(roleSeen(room, 'p3', 'p0'), null);
  assert.equal(roleSeen(room, 'p0', 'p1'), V, 'vampir temizlikçi vampiri vampir görür');
  assert.equal(entry(room, 'p0', 'p1').ability, 'temizlik');
  assert.equal(entry(room, 'p3', 'p1').ability, null);
  assert.equal(roleSeen(room, 'p3', 'p5'), null, 'temizlenen ölünün rolü gizli');
  assert.equal(roleSeen(room, 'p5', 'p5'), K, 'kendisi bilir');
  assert.equal(entry(room, 'p3', 'p5').cleaned, false);
  // Kilitli kapı geri çevirir; bekleme serbest.
  room.lockHouse('p3', 'p6');
  room.endDay();
  room.selectNight('p1', 'p6', 'clean');
  room.endNight();
  assert.deepEqual(of(ev, 'bounced').pop().to, ['p1']);
  room.endDay();
  assert.equal(room.passNight('p1'), null);
  const msg = (room.selectNight('p0', 'p7'), room.chat('p1', 'izleri ben silerim'));
  assert.equal(msg.channel, 'vampir');
  assert.deepEqual(msg.recipients.sort(), ['p0', 'p1']);
  room.destroy();
});

test('temizlenen: her sebeple ölse gizli (oyun sonunda açık + cleaned); temizlikçi vampir ölürse temizlik yok; avcı yine atar', (t) => {
  clock(t);
  const { room, ev } = setup(8, { roles: { cadi: true } });
  startWithRoles(room, [V, C, W, D, K, K, K, K]);
  room.selectNight('p1', 'p3', 'clean');
  room.selectNight('p2', 'p3', 'poison');
  room.endNight();
  assert.match(of(ev, 'death').pop().text, /Oyuncu3 bu gece zehirlenerek öldü! Rolü bilinmiyor; izler silinmiş\./);
  const dawnIn = ev.narrated.filter((n) => n.method === 'dawn').pop().input;
  assert.deepEqual(dawnIn.deaths, [{ id: 'p3', cause: 'zehir', role: null, hidden: 'temizlikci' }]);
  for (const v of everyone(room)) if (v !== 'p3') assert.equal(roleSeen(room, v, 'p3'), null);
  assert.ok(!room.log.some((e) => /Doktor/.test(e.text)));
  room.phase = 'ended';
  assert.equal(roleSeen(room, 'p4', 'p3'), D);
  assert.equal(entry(room, 'p4', 'p3').cleaned, true);
  room.destroy();

  // Temizlik yetenekli vampir aynı gece ölürse (zehir) temizlik iptal: rol açıklanır.
  const { room: r2, ev: e2 } = setup(8, { roles: { cadi: true } });
  startWithRoles(r2, [V, C, W, K, K, K, K, K]);
  r2.selectNight('p1', 'p4', 'clean');
  r2.selectNight('p2', 'p1', 'poison');
  r2.selectNight('p0', 'p4');
  r2.endNight();
  assert.match(of(e2, 'death').pop().text, /Oyuncu4 .*Rolü: Köylü\./);
  r2.destroy();

  // Temizlenen avcı: son atış yine olur ve avcı açıklanır.
  const { room: r3 } = setup(8);
  startWithRoles(r3, [V, C, H, K, K, K, K, K]);
  r3.selectNight('p1', 'p2', 'clean');
  r3.selectNight('p0', 'p2');
  r3.endNight();
  assert.equal(r3.phase, 'hunter');
  assert.equal(roleSeen(r3, 'p4', 'p2'), H);
  r3.destroy();
});

test('temizlik: ertesi gün asılan da gizli kalır (yeni); iki gün sonra geçmez; soytarı yine açıktır', (t) => {
  clock(t);
  // Gece 1 temizlik, gün 1 asılma: rol gizli.
  const { room, ev } = setup(8);
  startWithRoles(room, [V, C, D, K, K, K, K, K]);
  room.selectNight('p1', 'p3', 'clean');
  room.endNight();
  assert.equal(room.phase, 'day');
  for (const id of ['p0', 'p2', 'p4', 'p5']) room.vote(id, 'p3');
  room.endDay();
  const hanged = of(ev, 'hanged').pop();
  assert.match(hanged.text, /Oyuncu3 4 oyla .*Rolü bilinmiyor; izler silinmiş\./);
  assert.ok(room.log.some((e) => e.kind === 'death' && /Oyuncu3 4 oyla .*izler silinmiş/.test(e.text)));
  for (const v of everyone(room)) if (v !== 'p3') assert.equal(roleSeen(room, v, 'p3'), null);
  assert.equal(room.players.get('p3').roleHidden, 'temizlikci');
  const hangIn = ev.narrated.filter((n) => n.method === 'hanged').pop().input;
  assert.equal(hangIn.role, null);
  assert.equal(hangIn.hidden, 'temizlikci');
  room.destroy();

  // Temizlik gece 1, asılma gün 2: gerçek.
  const { room: r2, ev: e2 } = setup(8);
  startWithRoles(r2, [V, C, D, K, K, K, K, K]);
  r2.selectNight('p1', 'p3', 'clean');
  r2.endNight();
  r2.endDay();
  r2.endNight();
  for (const id of ['p0', 'p2', 'p4', 'p5']) r2.vote(id, 'p3');
  r2.endDay();
  assert.match(of(e2, 'hanged').pop().text, /Rolü: Köylü\./);
  r2.destroy();

  // Soytarı temizlenmiş olsa da asılınca rolü açıklanır ve oyun biter.
  const { room: r3, ev: e3 } = setup(8);
  startWithRoles(r3, [V, C, J, K, K, K, K, K]);
  r3.selectNight('p1', 'p2', 'clean');
  r3.endNight();
  for (const id of ['p0', 'p3', 'p4', 'p5']) r3.vote(id, 'p2');
  r3.endDay();
  assert.equal(r3.winner, J);
  assert.match(of(e3, 'hanged').pop().text, /Rolü: Soytarı\./);
  r3.destroy();

  // Roller gizliyken hiçbir şey eklenmez.
  const { room: r4, ev: e4 } = setup(8, { revealRoles: false });
  startWithRoles(r4, [V, C, D, K, K, K, K, K]);
  r4.selectNight('p1', 'p3', 'clean');
  r4.endNight();
  for (const id of ['p0', 'p2', 'p4', 'p5']) r4.vote(id, 'p3');
  r4.endDay();
  assert.doesNotMatch(of(e4, 'hanged').pop().text, /Rolü/);
  r4.destroy();
});

test('kahin yetenekli vampire bakınca "Vampir" görür (rol olarak İftiracı/Temizlikçi yoktur)', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, C, S, K, K, K, K, K]);
  room.selectNight('p2', 'p1');
  room.endNight();
  assert.ok(of(ev, 'seer').pop().roles.includes(V));
  room.destroy();
});

// ---------- botlar ----------

test('yetenekli vampir botlar yeteneklerini kullanır; her bot kendi kurbanını seçer; bütün roller açık tohumlu bot oyunları biter', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 1_700_000_000_000 });
  const ALL = Object.fromEntries(OPTIONAL_ROLES.map((r) => [r, true]));
  const kinds = { kill: 0, frame: 0, clean: 0 };
  let distinct = 0;
  let nights = 0;
  let ended = 0;
  for (let g = 0; g < 14; g++) {
    const room = new Room({
      id: 'B7', name: 'B7', settings: { events: 'off', roles: ALL, vampires: 2 },
      botRng: mulberry(`b7-${g}`), storySeed: `s7-${g}`,
      hooks: { update() {}, announce() {}, empty() {}, finished() {}, chat() {} },
    });
    room.addPlayer('h0', 'İnsan', { userId: 'u' });
    room.connect('h0', 's');
    for (let i = 0; i < 7 + (g % 9); i++) room.addBot('h0');
    const select = room.selectNight.bind(room);
    room.selectNight = (by, target, action) => {
      const res = select(by, target, action);
      const p = room.players.get(by);
      if (res === null && p.role === V) {
        const kind = action === 'frame' || action === 'clean' ? action : 'kill';
        kinds[kind] += 1;
        if (kind !== 'kill' && p.ability !== (kind === 'frame' ? 'iftira' : 'temizlik')) throw new Error('yeteneksiz vampir yetenek kullandı');
      }
      return res;
    };
    const endNight = room.endPick.bind(room);
    room.endPick = () => {
      const kills = [...room.vampActs.values()].filter((a) => a.kind === 'kill').map((a) => a.targetId);
      if (kills.length > 1) { nights += 1; if (new Set(kills).size > 1) distinct += 1; }
      return endNight();
    };
    const errors = [];
    const orig = console.error;
    console.error = (...a) => errors.push(a.join(' '));
    try {
      room.start('h0');
      for (let ms = 0; ms < 3 * 3600 * 1000 && room.phase !== 'ended'; ms += 500) t.mock.timers.tick(500);
    } finally {
      console.error = orig;
    }
    assert.deepEqual(errors, [], `oyun ${g}`);
    if (room.phase === 'ended') ended += 1;
    room.destroy();
  }
  assert.equal(ended, 14);
  assert.ok(kinds.kill > 0 && kinds.frame > 0 && kinds.clean > 0, `bot eylemleri ${JSON.stringify(kinds)}`);
  assert.ok(nights > 0 && distinct / nights > 0.4, `vampir botlar çoğunlukla ayrı kurban seçer: ${distinct}/${nights}`);
});
