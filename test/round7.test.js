'use strict';

// 7. tur: güçlü İftiracı (iftira tutar), Temizlikçi, yardımcıların dönüşmesi ve dağıtımı.
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  Room, ROLE, ROLE_LABEL, OPTIONAL_ROLES, rolesFor, winnerOf, normalizeSettings, teamOf, isEvil,
} = require('../game');

const {
  VAMPIRE: V, FRAMER: F, CLEANER: C, DOCTOR: D, SEER: S, WATCHER: G, JAILER: L, WITCH: W, HUNTER: H,
  JESTER: J, MAD: X, THIEF: T, VILLAGER: K,
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
    if (Array.isArray(r)) { p.role = r[0]; p.fakeRole = r[1]; } else { p.role = r; p.fakeRole = null; }
  });
  room.startNight();
}

const of = (ev, kind) => ev.announces.filter((a) => a.kind === kind);
const clock = (t) => t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 11_000_000 });
const roleSeen = (room, viewer, id) => room.viewFor(viewer).players.find((p) => p.id === id).role;
const entry = (room, viewer, id) => room.viewFor(viewer).players.find((p) => p.id === id);
const everyone = (room) => [...room.players.keys()];

// ---------- iftira tutar ----------

test('iftira: aynı gece ölen herkese "vampir" görünür (durum, duyuru, günlük, anlatı); kurallar gerçek rolü kullanır', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, F, D, K, K, K, K, K]);
  room.selectNight('p1', 'p2');          // iftiracı doktora iftira atar
  room.selectNight('p0', 'p2');          // vampirler doktoru öldürür
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
  room.selectNight('p1', 'p3');
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
  r2.selectNight('p1', 'p3');
  r2.endNight();
  r2.endDay();
  r2.endNight();
  for (const id of ['p0', 'p2', 'p4', 'p5']) r2.vote(id, 'p3');
  r2.endDay();
  assert.match(of(e2, 'hanged').pop().text, /Rolü: Köylü\./);
  // İftira gece 2 değil, ölüm gece 2: gerçek.
  const { room: r3, ev: e3 } = setup(8);
  startWithRoles(r3, [V, F, D, K, K, K, K, K]);
  r3.selectNight('p1', 'p4');
  r3.endNight();
  r3.endDay();
  r3.selectNight('p0', 'p4');
  r3.endNight();
  assert.match(of(e3, 'death').pop().text, /Oyuncu4 .*Rolü: Köylü\./);
  r2.destroy();
  r3.destroy();
});

test('iftira istisnaları: avcı, asılan soytarı, soyulan ve temizlenen ölü; roller gizliyse hiçbir şey; iftiracı ölürse iftira yok', (t) => {
  clock(t);
  // Avcı: son atış gerçeği söyler.
  const { room: a } = setup(8);
  startWithRoles(a, [V, F, H, K, K, K, K, K]);
  a.selectNight('p1', 'p2');
  a.selectNight('p0', 'p2');
  a.endNight();
  assert.equal(a.phase, 'hunter');
  assert.equal(roleSeen(a, 'p4', 'p2'), H);
  a.destroy();
  // Soytarı asılırsa kazanır ve rolü açıklanır.
  const { room: j, ev: je } = setup(8);
  startWithRoles(j, [V, F, J, K, K, K, K, K]);
  j.selectNight('p1', 'p2');
  j.endNight();
  for (const id of ['p0', 'p3', 'p4', 'p5']) j.vote(id, 'p2');
  j.endDay();
  assert.equal(j.winner, J);
  assert.match(of(je, 'hanged').pop().text, /Rolü: Soytarı\./);
  j.destroy();
  // Soyulan: gizli kalır; hırsız gerçek rolü alır.
  const { room: th, ev: te } = setup(8);
  startWithRoles(th, [V, F, D, T, K, K, K, K]);
  th.selectNight('p1', 'p2');
  th.selectNight('p3', 'p2');
  th.endNight();
  assert.match(of(te, 'death').pop().text, /Rolü bilinmiyor; çalındı\./);
  assert.equal(th.players.get('p3').role, D, 'hırsız gerçek rolü aldı');
  assert.equal(roleSeen(th, 'p4', 'p2'), null);
  th.destroy();
  // Temizlenen: gizli.
  const { room: c, ev: ce } = setup(8);
  startWithRoles(c, [V, F, C, K, K, K, K, K]);
  c.selectNight('p1', 'p4');
  c.selectNight('p2', 'p4');
  c.selectNight('p0', 'p4');
  c.endNight();
  assert.match(of(ce, 'death').pop().text, /Oyuncu4 .*Rolü bilinmiyor; izler silinmiş\./);
  assert.equal(roleSeen(c, 'p5', 'p4'), null);
  c.destroy();
  // Roller gizli: açıklama yok, oyun sonunda framed da yok.
  const { room: h, ev: he } = setup(8, { revealRoles: false });
  startWithRoles(h, [V, F, D, K, K, K, K, K]);
  h.selectNight('p1', 'p2');
  h.selectNight('p0', 'p2');
  h.endNight();
  assert.doesNotMatch(of(he, 'death').pop().text, /Rolü/);
  assert.equal(roleSeen(h, 'p4', 'p2'), null);
  assert.equal(h.players.get('p2').framedReveal, false);
  h.destroy();
  // İftiracı aynı gece zehirlenirse iftira hiç olmamıştır.
  const { room: w, ev: we } = setup(8);
  startWithRoles(w, [V, F, W, K, K, K, K, K]);
  w.selectNight('p1', 'p4');
  w.selectNight('p2', 'p1', 'poison');
  w.selectNight('p0', 'p4');
  w.endNight();
  assert.match(of(we, 'death').pop().text, /Oyuncu4 .*Rolü: Köylü\./);
  assert.match(of(we, 'death').pop().text, /Oyuncu1 .*Rolü: İftiracı\./);
  w.destroy();
});

test('iftira: deli de "vampir" görünür (kendisi gerçeği öğrenir); kötü takım da aynı görür', (t) => {
  clock(t);
  const { room } = setup(8);
  startWithRoles(room, [V, F, [X, D], K, K, K, K, K]);
  room.selectNight('p1', 'p2');
  room.selectNight('p0', 'p2');
  room.endNight();
  assert.equal(roleSeen(room, 'p4', 'p2'), V);
  assert.equal(entry(room, 'p4', 'p2').fakeRole, null, 'deli izi yok');
  assert.equal(roleSeen(room, 'p0', 'p2'), V);
  assert.equal(room.viewFor('p2').me.role, X);
  room.destroy();
});

// ---------- temizlikçi ----------

test('temizlikçi: rol bilgileri, ayar, 7+ oyuncu, kötü takım, eşitlik sayımı', () => {
  assert.equal(C, 'temizlikci');
  assert.equal(ROLE_LABEL[C], 'Temizlikçi');
  assert.equal(teamOf(C), V);
  assert.ok(isEvil(C));
  assert.equal(normalizeSettings({}).roles.temizlikci, false);
  assert.ok(OPTIONAL_ROLES.includes(C));
  assert.deepEqual(rolesFor(7, [D, S, C]), [V, C, D, S, K, K, K]);
  assert.ok(!rolesFor(6, [D, S, C]).includes(C));
  assert.deepEqual(rolesFor(8, [D, F, C]), [V, F, C, D, K, K, K, K], "'all': her açık yardımcı");
  const p = (role, alive = true) => ({ role, alive });
  assert.equal(winnerOf([p(V), p(C), p(K), p(K)]), V);
  assert.equal(winnerOf([p(V, false), p(C), p(K), p(K)]), null);
});

test('temizlikçi: seçim kuralları, bekleme, yolculuk (clean), takım görür, gözcü görür, kilit geri çevirir', (t) => {
  clock(t);
  const { room, ev } = setup(9, { roles: { gardiyan: true, gozcu: true } });
  startWithRoles(room, [V, C, G, L, K, K, K, K, K]);
  assert.match(room.selectNight('p1', 'p1'), /Kendi izini/);
  assert.match(room.selectNight('p1', 'p0'), /Takım arkadaşının/);
  assert.match(room.selectNight('p0', 'p1'), /Temizlikçi sizin takımınızda/);
  room.selectNight('p0', 'p5');
  assert.equal(room.viewFor('p1').night.teamTarget.targetId, 'p5', 'temizlikçi takım hedefini görür');
  assert.equal(room.selectNight('p1', 'p5'), null);
  assert.match(room.selectNight('p1', 'p6'), /kesindir/);
  assert.equal(room.viewFor('p0').night.cleaner, 'p5');
  assert.equal(room.viewFor('p1').night.mySelection, 'p5');
  assert.equal(room.viewFor('p4').night, null);
  room.selectNight('p2', 'p5');
  room.endPick();
  assert.deepEqual(room.viewFor('p1').night.show.trip, { to: 'p5', kind: 'clean', outcome: 'done', interior: false });
  assert.deepEqual(room.viewFor('p0').night.show.team, [{ id: 'p1', to: 'p5', kind: 'clean', outcome: 'done' }]);
  assert.deepEqual(room.viewFor('p2').night.show.watch.arrivals.map((x) => x.id).sort(), ['p0', 'p1']);
  room.endNight();
  assert.equal(roleSeen(room, 'p3', 'p0'), null);
  assert.equal(roleSeen(room, 'p0', 'p1'), C, 'vampir temizlikçiyi görür');
  assert.equal(roleSeen(room, 'p1', 'p0'), V);
  assert.equal(roleSeen(room, 'p3', 'p5'), null, 'temizlenen ölünün rolü gizli');
  assert.equal(roleSeen(room, 'p5', 'p5'), K, 'kendisi bilir');
  assert.equal(entry(room, 'p3', 'p5').cleaned, false);
  // Kilitli kapı geri çevirir; bekleme serbest.
  room.lockHouse('p3', 'p6');
  room.endDay();
  room.selectNight('p1', 'p6');
  room.endNight();
  assert.deepEqual(of(ev, 'bounced').pop().to, ['p1']);
  room.endDay();
  assert.equal(room.passNight('p1'), null);
  const msg = (room.selectNight('p0', 'p7'), room.chat('p1', 'izleri ben silerim'));
  assert.equal(msg.channel, 'vampir');
  assert.deepEqual(msg.recipients.sort(), ['p0', 'p1']);
  room.destroy();
});

test('temizlenen: her sebeple ölse gizli (oyun sonunda açık + cleaned); temizlikçi ölürse temizlik yok; avcı yine atar', (t) => {
  clock(t);
  const { room, ev } = setup(8, { roles: { cadi: true } });
  startWithRoles(room, [V, C, W, D, K, K, K, K]);
  room.selectNight('p1', 'p3');
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

  // Temizlikçi aynı gece ölürse (zehir) temizliği iptal: rol açıklanır.
  const { room: r2, ev: e2 } = setup(8, { roles: { cadi: true } });
  startWithRoles(r2, [V, C, W, K, K, K, K, K]);
  r2.selectNight('p1', 'p4');
  r2.selectNight('p2', 'p1', 'poison');
  r2.selectNight('p0', 'p4');
  r2.endNight();
  assert.match(of(e2, 'death').pop().text, /Oyuncu4 .*Rolü: Köylü\./);
  r2.destroy();

  // Temizlenen avcı: son atış yine olur ve avcı açıklanır.
  const { room: r3 } = setup(8);
  startWithRoles(r3, [V, C, H, K, K, K, K, K]);
  r3.selectNight('p1', 'p2');
  r3.selectNight('p0', 'p2');
  r3.endNight();
  assert.equal(r3.phase, 'hunter');
  assert.equal(roleSeen(r3, 'p4', 'p2'), H);
  r3.destroy();
});

test('kahin temizlikçiyi temizlikçi görür', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, C, S, K, K, K, K, K]);
  room.selectNight('p2', 'p1');
  room.endNight();
  assert.ok(of(ev, 'seer').pop().roles.includes(C));
  room.destroy();
});

// ---------- yardımcıların dönüşmesi ----------

test('dönüşme: son vampir düşünce önce iftiracı, sonra temizlikçi vampir olur', (t) => {
  clock(t);
  const { room, ev } = setup(10);
  startWithRoles(room, [V, F, C, K, K, K, K, K, K, K]);
  room.endNight();
  for (const id of ['p3', 'p4', 'p5', 'p6']) room.vote(id, 'p0');
  room.endDay();
  assert.equal(room.players.get('p1').role, V);
  assert.equal(room.players.get('p2').role, C, 'ikinci yardımcı yardımcı kalır');
  assert.deepEqual(of(ev, 'promote').map((a) => a.to[0]), ['p1']);
  room.endNight();
  for (const id of ['p3', 'p4', 'p5', 'p6']) room.vote(id, 'p1');
  room.endDay();
  assert.equal(room.players.get('p2').role, V, 'şimdi temizlikçi dönüştü');
  assert.deepEqual(of(ev, 'promote').map((a) => a.to[0]), ['p1', 'p2']);
  assert.equal(room.phase, 'night');
  assert.equal(room.viewFor('p2').night.canAct, true);
  room.destroy();
});

// ---------- botlar ----------

test('temizlikçi bot takımın öldürme hedefine gider; bütün roller açık tohumlu bot oyunları biter', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 1_700_000_000_000 });
  const ALL = Object.fromEntries(OPTIONAL_ROLES.map((r) => [r, true]));
  let cleanerTrips = 0;
  let onTarget = 0;
  let ended = 0;
  for (let g = 0; g < 14; g++) {
    const room = new Room({
      id: 'B7', name: 'B7', settings: { events: 'off', roles: ALL },
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
      if (res === null && p.role === C) {
        cleanerTrips += 1;
        if (room.teamTarget && room.teamTarget.targetId === target) onTarget += 1;
      }
      return res;
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
  assert.ok(cleanerTrips > 0, 'temizlikçi botlar oynadı');
  assert.ok(onTarget / cleanerTrips > 0.7, `hedefe giden oran ${onTarget}/${cleanerTrips}`);
});

test('rastgele dağıtım odada: 7+ oyuncuda yardımcı kesin, 6 kişide yok', (t) => {
  clock(t);
  for (let i = 0; i < 20; i++) {
    const { room } = setup(7, { roles: { iftiraci: true, temizlikci: true } });
    room.start('p0');
    const roles = [...room.players.values()].map((p) => p.role);
    assert.equal(roles.filter((r) => r === F || r === C).length, 1);
    room.destroy();
  }
  const { room } = setup(6, { roles: { iftiraci: true, temizlikci: true } });
  room.start('p0');
  assert.ok([...room.players.values()].every((p) => p.role !== F && p.role !== C));
  const rp = room.viewFor('p0').room.rolePool;
  assert.ok(!rp || rp.maybe.length === 0, '6 kişide yardımcı adayı yok');
  room.destroy();
});
