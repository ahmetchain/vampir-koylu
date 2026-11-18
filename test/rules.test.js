'use strict';

// v2 kuralları: koltuklar, meydan koordinatları, Gözcü, İftiracı, istatistik bildirimi.
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  Room, ROLE, rolesFor, winnerOf, teamOf, normalizeSettings, PLAZA, SKIN_COUNT, COLOR_COUNT, HAT_COUNT,
} = require('../game');

const {
  VAMPIRE: V, DOCTOR: D, SEER: S, WATCHER: G, WITCH: W, HUNTER: H, MAYOR: M, JESTER: J, VILLAGER: K,
} = ROLE;
// İftiracı artık rol değil: F = iftira yetenekli vampir (startWithRoles kurar).
const F = 'iftiraci';
const ABILITY = { iftiraci: 'iftira', temizlikci: 'temizlik' };

function setup(count = 5) {
  const events = { announces: [], finished: [], updates: [], emptied: false };
  const room = new Room({
    id: 'TEST2',
    name: 'Test',
    settings: { events: 'off' },
    hooks: {
      update(r, kind) { events.updates.push(kind || 'state'); },
      announce(r, a, to) { events.announces.push({ ...a, to }); },
      empty() { events.emptied = true; },
      finished(r, res) { events.finished.push(res); },
    },
  });
  for (let i = 0; i < count; i++) {
    assert.equal(room.addPlayer(`p${i}`, `Oyuncu${i}`, { userId: `u${i}` }), null);
    room.connect(`p${i}`, `s${i}`);
  }
  return { room, events };
}

function startWithRoles(room, roles) {
  assert.equal(room.start(room.hostId), null);
  roles.forEach((role, i) => {
    const p = room.players.get(`p${i}`);
    p.role = ABILITY[role] ? V : role;
    p.ability = ABILITY[role] || null;
  });
  room.startNight();
}

const of = (events, kind) => events.announces.filter((a) => a.kind === kind);
const visibleRoles = (room, id) => room.viewFor(id).players.filter((p) => p.role).map((p) => p.id).sort();
const dist = (pos) => Math.hypot(pos.x - 0.5, pos.y - 0.5);
const pick = (obj, keys) => Object.fromEntries(keys.map((k) => [k, obj[k]]));

// ---------- dağıtım ----------

test('özel roller yeni sırayla eklenir; yetenek anahtarları (iftira/temizlik) rol dağıtımına karışmaz', () => {
  assert.deepEqual(rolesFor(7, [D, S, G, F]), [V, D, S, G, K, K, K]);
  assert.deepEqual(rolesFor(6, [D, F]), [V, D, K, K, K, K]);
  assert.deepEqual(rolesFor(10, [D, S, G, W, H, M, J, F]), [V, V, D, S, G, W, H, M, J, K], '8+ kişide köylü ayrılmaz');
  const r5 = rolesFor(5, [D, S, G, W, H, M, J, F]);
  assert.equal(r5.length, 5);
  assert.equal(r5.filter((r) => r === K).length >= 1, true, '8 kişiden az: en az bir köylü kalır');
  assert.deepEqual(normalizeSettings({}).roles, {
    doktor: true, kahin: true, gozcu: false, gardiyan: false, cadi: false, avci: false, muhtar: false, soytari: false,
    deli: false, hirsiz: false, iftiraci: false, temizlikci: false,
  });
  assert.deepEqual(rolesFor(8, [D, S, G, ROLE.JAILER, W]), [V, D, S, G, ROLE.JAILER, W, K, K], 'gardiyan gözcüden sonra');
  assert.equal(teamOf(ROLE.JAILER), K);
  assert.equal(teamOf(V), V);
  assert.equal(teamOf(G), K);
});

test('oyun başlarken iftira yeteneği sadece açıksa ve 7+ kişi varsa bir vampire verilir', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  for (const [count, expected] of [[6, 0], [7, 1], [12, 1]]) {
    const { room } = setup(count);
    assert.equal(room.updateSettings('p0', { roleMode: 'all', roles: { iftiraci: true, gozcu: true } }), null);
    assert.ok(!room.viewFor('p0').room.distribution.includes(F), 'önizlemede rol olarak yok');
    room.start('p0');
    const players = [...room.players.values()];
    assert.equal(players.filter((p) => p.ability === 'iftira').length, expected, `${count} oyuncu`);
    assert.ok(players.filter((p) => p.ability).every((p) => p.role === V));
    assert.equal(players.filter((p) => p.role === G).length, 1);
    room.destroy();
  }
});

test('vampir takımı yaşayan vampirlerdir; yetenek sayıyı değiştirmez', () => {
  const p = (role, alive = true) => ({ role, alive });
  assert.equal(winnerOf([p(V), p(V), p(K), p(K)]), V);
  assert.equal(winnerOf([p(V), p(V), p(K), p(K), p(K)]), null);
  assert.equal(winnerOf([p(V, false), p(V), p(K), p(K)]), null, 'ikinci vampir yaşıyorsa köy henüz kazanmadı');
  assert.equal(winnerOf([p(V), p(K)]), V);
  assert.equal(winnerOf([p(V, false), p(V, false), p(K)]), K);
});

// ---------- görünürlük, seçimler, sohbet ----------

test('vampirler ve iftiracı birbirinin rolünü görür, köy görmez', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(7);
  startWithRoles(room, [V, F, S, G, K, K, K]);
  assert.deepEqual(visibleRoles(room, 'p0'), ['p0', 'p1']);
  assert.deepEqual(visibleRoles(room, 'p1'), ['p0', 'p1']);
  assert.deepEqual(visibleRoles(room, 'p2'), ['p2']);
  assert.deepEqual(visibleRoles(room, 'p3'), ['p3']);
  assert.deepEqual(visibleRoles(room, 'p4'), ['p4']);
  room.destroy();
});

test('iftira yetenekli vampir: iftira ya da öldürme seçer; kural dışı seçimler reddedilir; gece görünümü', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(7);
  startWithRoles(room, [V, F, S, G, K, K, K]);
  assert.match(room.selectNight('p1', 'p1', 'frame'), /Kendine/);
  assert.match(room.selectNight('p1', 'p0', 'frame'), /Takım/);
  assert.match(room.selectNight('p0', 'p1'), /Diğer vampirleri/);
  assert.match(room.selectNight('p0', 'p4', 'frame'), /yeteneğin yok/);
  assert.equal(room.selectNight('p1', 'p4', 'frame'), null);
  assert.equal(room.nightFrame, 'p4');
  assert.deepEqual(room.vampireTargets(), [], 'iftira öldürme hedefi değildir');

  const keys = ['mySelection', 'myKind', 'team'];
  assert.deepEqual(pick(room.viewFor('p0').night, keys), {
    mySelection: null, myKind: null,
    team: [
      { vampId: 'p0', name: 'Oyuncu0', targetId: null, kind: null, ability: null },
      { vampId: 'p1', name: 'Oyuncu1', targetId: 'p4', kind: 'frame', ability: 'iftira' },
    ],
  });
  assert.equal(room.selectNight('p0', 'p5'), null);
  assert.deepEqual(pick(room.viewFor('p1').night, keys), {
    mySelection: 'p4', myKind: 'frame',
    team: [
      { vampId: 'p0', name: 'Oyuncu0', targetId: 'p5', kind: 'kill', ability: null },
      { vampId: 'p1', name: 'Oyuncu1', targetId: 'p4', kind: 'frame', ability: 'iftira' },
    ],
  });
  assert.deepEqual(room.vampireTargets(), ['p5']);
  assert.equal(room.viewFor('p4').night, null, 'köylünün gece görünümü yok');
  assert.equal(room.selectNight('p3', 'p3'), null, 'gözcü kendi evini izleyebilir');
  assert.equal(room.viewFor('p3').night.mySelection, 'p3');
  assert.deepEqual(room.viewFor('p3').night.team, []);
  assert.equal(room.viewFor('p3').night.ability, undefined);
  assert.equal(room.viewFor('p2').night.mySelection, null);
  // Seçimler kesindir: aynı kişiye tekrar dokunmak seçimi kaldırmaz.
  assert.match(room.selectNight('p1', 'p4', 'frame'), /kesindir/);
  assert.equal(room.nightFrame, 'p4');

  const msg = room.chat('p1', 'kimi suçlayalım');
  assert.equal(msg.channel, 'vampir');
  assert.deepEqual(msg.recipients.sort(), ['p0', 'p1']);
  assert.ok(room.chat('p3', 'selam').error, 'gözcü gece konuşamaz');
  room.destroy();
});

const decoyOf = (room, kahinId, targetId) => room.seerPairs.get(`${kahinId}:${targetId}`);
const sorted = (a) => [...a].sort();

test('kahin (dedektif): iftira "vampir"i katar, iftira sadece o gece; iftira yetenekli vampir kendi rolüyle görünür', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(7);
  startWithRoles(room, [V, F, S, K, K, K, K]);
  room.selectNight('p1', 'p3', 'frame');
  room.selectNight('p2', 'p3');
  room.endNight();
  let seer = of(events, 'seer').pop();
  assert.deepEqual(seer.to, ['p2']);
  assert.deepEqual(sorted(seer.roles), sorted([K, V]));
  assert.match(seer.text, /^Oyuncu3 şu ikisinden biri: (Köylü ya da Vampir|Vampir ya da Köylü)\.$/);
  assert.deepEqual(seer.targets, [{ id: 'p3' }]);

  room.endDay();
  room.selectNight('p2', 'p3');
  room.endNight();
  seer = of(events, 'seer').pop();
  const decoy = decoyOf(room, 'p2', 'p3');
  assert.ok(decoy && decoy !== K);
  assert.deepEqual(sorted(seer.roles), sorted([K, decoy]), 'iftirasız gece: gerçek rol + sabit şaşırtmaca');

  room.endDay();
  room.selectNight('p2', 'p1');
  room.endNight();
  seer = of(events, 'seer').pop();
  assert.ok(seer.roles.includes(V), 'iftira yetenekli vampir gerçek rolüyle (Vampir) görünür');
  assert.equal(room.players.get('p2').notes.length, 3);
  room.destroy();
});

test('iftira yetenekli vampir aynı gece zehirlenirse hiç evden çıkmamıştır: iftirası iptal, kahin gerçeği görür', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(7);
  startWithRoles(room, [V, F, S, W, K, K, K]);
  room.selectNight('p1', 'p4', 'frame');
  room.selectNight('p3', 'p1', 'poison');
  room.selectNight('p2', 'p4');
  room.endNight();
  assert.equal(room.players.get('p1').alive, false);
  assert.deepEqual(sorted(of(events, 'seer').pop().roles), sorted([K, decoyOf(room, 'p2', 'p4')]));
  room.destroy();
});

// ---------- gözcü ----------

test('gözcü izlediği eve girenleri isim sırasıyla öğrenir; duyuru sadece ona gider', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(10);
  startWithRoles(room, [V, V, D, S, W, G, F, K, K, K]);
  room.selectNight('p0', 'p7');
  room.selectNight('p1', 'p7');
  room.selectNight('p2', 'p7');
  room.selectNight('p3', 'p7');
  room.selectNight('p4', 'p7', 'heal');
  room.selectNight('p6', 'p7');
  room.selectNight('p5', 'p7');
  room.endNight();
  assert.equal(room.players.get('p7').alive, true);
  const watch = of(events, 'watch');
  assert.equal(watch.length, 1);
  assert.deepEqual(watch[0].to, ['p5']);
  assert.deepEqual(watch[0].targets, [{ id: 'p7' }]);
  assert.deepEqual(watch[0].visitors, ['p0', 'p1', 'p2', 'p3', 'p4', 'p6']);
  assert.match(watch[0].text, /Oyuncu7'nin evine gelenler: Oyuncu0, Oyuncu1, Oyuncu2, Oyuncu3, Oyuncu4, Oyuncu6\./);
  assert.match(room.players.get('p5').notes[0].text, /^👁️ 1\. gece/);
  assert.equal(room.players.get('p7').notes.length, 1, 'p7 yalnızca saldırıdan kurtulduğunu öğrenir');
  assert.match(room.players.get('p7').notes[0].text, /saldırıya uğradın ama sağ kurtuldun/);
  room.destroy();
});

test('her vampir kendi evine gider: kurbanlar ayrıysa iki ölüm ve gözcü yalnızca izlediği evin ziyaretçisini görür', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(10);
  startWithRoles(room, [V, V, G, K, K, K, K, K, K, K]);
  room.selectNight('p2', 'p3');
  assert.equal(room.selectNight('p0', 'p3'), null);
  assert.equal(room.viewFor('p1').night.canAct, true, 'ikinci vampir da kendi seçimini yapar');
  assert.equal(room.selectNight('p1', 'p4'), null);
  assert.match(room.selectNight('p1', 'p5'), /kesindir/);
  assert.equal(room.viewFor('p1').night.mySelection, 'p4');
  room.endNight();
  assert.equal(room.players.get('p3').alive, false);
  assert.equal(room.players.get('p4').alive, false, 'her vampir kendi kurbanını öldürür');
  assert.deepEqual(of(events, 'watch')[0].visitors, ['p0'], 'gözcü yalnızca p3 evine gideni görür');
  room.destroy();
});

test('gözcü aynı gece ölürse rapor alamaz', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(6);
  startWithRoles(room, [V, G, K, K, K, K]);
  room.selectNight('p1', 'p2');
  room.selectNight('p0', 'p1');
  room.endNight();
  assert.equal(room.players.get('p1').alive, false);
  assert.equal(of(events, 'watch').length, 0);
  room.destroy();
});

test('gözcü: cadı iki eve de girer; ev sahibi sayılmaz; gece içinde ayrılan hiç yola çıkmamış sayılır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(7);
  startWithRoles(room, [V, W, G, D, K, K, K]);
  // 1. gece: cadı p4'e iksir, p5'e zehir götürür; gözcü p5'i izler.
  room.selectNight('p0', 'p4');
  room.selectNight('p1', 'p4', 'heal');
  room.selectNight('p1', 'p5', 'poison');
  room.selectNight('p2', 'p5');
  room.endNight();
  assert.equal(room.players.get('p5').alive, false);
  assert.equal(room.players.get('p4').alive, true);
  assert.deepEqual(of(events, 'watch').pop().visitors, ['p1']);

  // 2. gece: doktor kendini korur, gözcü doktorun evini izler: ev sahibi sayılmaz.
  room.endDay();
  room.selectNight('p3', 'p3');
  room.selectNight('p2', 'p3');
  room.endNight();
  assert.match(of(events, 'watch').pop().text, /kimse gelmedi/);

  // 3. gece: doktor p6'yı korur, sonra seçim aşamasında oyundan ayrılır: gece oynatılırken yoktur,
  // yolculuğu da olmaz (yalnızca gerçekten olan eylemler yolculuk yaratır).
  room.endDay();
  room.selectNight('p3', 'p6');
  room.selectNight('p2', 'p6');
  room.removePlayer('p3');
  room.endNight();
  assert.deepEqual(of(events, 'watch').pop().visitors, []);
  room.destroy();
});

test('gözcü kendi evini izlerse gelen vampiri görür ama kendini listelemez', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(7);
  startWithRoles(room, [V, G, D, K, K, K, K]);
  room.selectNight('p0', 'p1');
  room.selectNight('p2', 'p1');
  room.selectNight('p1', 'p1');
  room.endNight();
  assert.equal(room.players.get('p1').alive, true);
  assert.deepEqual(of(events, 'watch').pop().visitors, ['p0', 'p2']);
  room.destroy();
});

// ---------- yetenekli vampir de vampirdir: terfi yok ----------

test('bir vampir asılınca öteki (yetenekli) vampir sürer; terfi yok; o da asılınca köy kazanır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(7);
  startWithRoles(room, [V, F, D, K, K, K, K]);
  room.endNight();
  for (const id of ['p2', 'p3', 'p4']) room.vote(id, 'p0');
  room.endDay();
  assert.equal(room.players.get('p0').alive, false);
  assert.equal(room.players.get('p1').role, V);
  assert.equal(of(events, 'promote').length, 0);
  assert.equal(room.phase, 'night');
  assert.equal(room.winner, null);
  assert.deepEqual(visibleRoles(room, 'p3'), ['p0', 'p3'], 'köy p1\'i görmez (ölü vampirin rolü açık)');

  assert.equal(room.selectNight('p1', 'p3'), null);
  assert.equal(room.viewFor('p1').night.mySelection, 'p3');
  room.endNight();
  assert.equal(room.players.get('p3').alive, false);

  for (const id of ['p2', 'p4', 'p5']) room.vote(id, 'p1');
  room.endDay();
  assert.equal(room.winner, K);
  room.destroy();
});

test('iftira yetenekli vampir sürdükçe öteki vampirin ayrılması iftirasını düşürmez', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(7);
  startWithRoles(room, [V, F, S, K, K, K, K]);
  room.selectNight('p1', 'p3', 'frame');
  room.selectNight('p2', 'p3');
  room.removePlayer('p0');
  assert.equal(room.phase, 'night');
  assert.equal(room.players.get('p1').role, V);
  assert.equal(room.nightFrame, 'p3');
  assert.equal(of(events, 'promote').length, 0);
  room.endNight();
  assert.deepEqual(sorted(of(events, 'seer').pop().roles), sorted([K, V]), 'iftira sürer');
  room.destroy();
});

test('avcı bir vampiri vurunca öteki vampir sürer, oyun devam eder', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(7);
  startWithRoles(room, [V, F, H, K, K, K, K]);
  room.selectNight('p0', 'p2');
  room.endNight();
  assert.equal(room.phase, 'hunter');
  assert.equal(room.shoot('p2', 'p0'), null);
  assert.equal(room.players.get('p1').role, V);
  assert.equal(of(events, 'promote').length, 0);
  assert.equal(room.phase, 'day');
  room.destroy();
});

test('yetenekli vampirle eşitlik olursa vampir takımı kazanır, ikisi de kazananlardadır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(7);
  startWithRoles(room, [V, F, D, K, K, K, K]);
  room.players.get('p5').alive = false;
  room.players.get('p6').alive = false;
  room.endNight();
  for (const id of ['p0', 'p1', 'p2']) room.vote(id, 'p3');
  room.endDay();
  assert.equal(room.winner, V);
  assert.deepEqual(room.winners.sort(), ['p0', 'p1']);
  room.destroy();
});

// ---------- koltuklar, görünüm, meydan ----------

test('koltuk en küçük boş numaradır ve oyun boyunca sabit kalır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(3);
  assert.deepEqual([...room.players.values()].map((p) => p.seat), [0, 1, 2]);
  room.removePlayer('p1');
  room.addPlayer('x', 'Xavi', { userId: 'ux' });
  room.addPlayer('y', 'Yasin', { userId: 'uy' });
  room.addPlayer('z', 'Zeki', { userId: 'uz' });
  assert.equal(room.players.get('x').seat, 1);
  assert.equal(room.players.get('y').seat, 3);
  assert.equal(room.players.get('z').seat, 4);
  room.start('p0');
  room.removePlayer('x');
  assert.equal(room.players.get('x').seat, 1, 'oyunda ayrılanın koltuğu boşalmaz');
  assert.match(room.addPlayer('w', 'Wale', { userId: 'uw' }), /başlamış/);
  const view = room.viewFor('p0');
  assert.deepEqual(view.players.map((p) => p.seat), [0, 2, 1, 3, 4]);
  assert.equal(view.me.seat, 0);
  assert.equal(view.me.userId, 'u0');
  room.destroy();
});

test('bir hesap odada tek koltuk alır; profil görünümü kullanılır, renk doluysa boş renk seçilir', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(0);
  assert.equal(room.addPlayer('a', 'Ayşe', { userId: 'ua', look: { color: 3, hat: 2, skin: 7 } }), null);
  assert.deepEqual(room.players.get('a').look, { color: 3, hat: 2, skin: 7 });
  assert.match(room.addPlayer('a2', 'Ayşe2', { userId: 'ua' }), /zaten odada/);
  assert.equal(room.findByUser('ua').id, 'a');
  assert.equal(room.addPlayer('b', 'Banu', { userId: 'ub', look: { color: 3, hat: 5, skin: 11 } }), null);
  const b = room.players.get('b').look;
  assert.notEqual(b.color, 3);
  assert.equal(b.hat, 5);
  assert.equal(b.skin, 11);
  assert.equal(room.addPlayer('c', 'Cem', { userId: 'uc', look: { color: 99, hat: -1, skin: 'x' } }), null);
  const c = room.players.get('c').look;
  assert.ok(c.color >= 0 && c.color < COLOR_COUNT && c.hat >= 0 && c.hat < HAT_COUNT && c.skin >= 0 && c.skin < SKIN_COUNT);
  assert.equal(room.viewFor('a').players[0].look.skin, 7);
  room.destroy();
});

test('karakterler meydan halkasında doğar ve halkaya sıkıştırılır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(20);
  for (const p of room.players.values()) {
    const d = dist(p.pos);
    assert.ok(d >= PLAZA.spawnMinR - 1e-9 && d <= PLAZA.spawnMaxR + 1e-9, `doğma noktası ${d}`);
  }
  assert.equal(room.move('p0', 0.5, 0.5), null);
  assert.ok(Math.abs(dist(room.players.get('p0').pos) - 0.10) < 1e-9);
  assert.equal(room.move('p0', 0.52, 0.5), null);
  assert.ok(Math.abs(dist(room.players.get('p0').pos) - 0.10) < 1e-9);
  assert.ok(room.players.get('p0').pos.x > 0.5, 'yön korunur');
  assert.equal(room.move('p0', 5, -3), null);
  assert.ok(Math.abs(dist(room.players.get('p0').pos) - 0.48) < 1e-9);
  assert.equal(room.move('p0', 0.5, 0.8), null);
  assert.deepEqual(room.players.get('p0').pos, { x: 0.5, y: 0.8 });
  assert.match(room.move('p0', 'a', 1), /Geçersiz/);
  assert.match(room.move('p0', Infinity, 1), /Geçersiz/);
  assert.equal(events.updates.pop(), 'move', 'konum değişikliği "move" olarak bildirilir');
  room.destroy();
});

test('dolaşma: yaşayanlar sadece lobide ve oyun sonunda; ölüler (hayalet) her evrede, konumu yalnızca ölülere', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(6);
  assert.equal(room.move('p0', 0.3, 0.3), null);
  room.start('p0');
  assert.equal(room.phase, 'reveal');
  assert.match(room.move('p0', 0.3, 0.3), /dolaşamazsın/);
  [V, H, K, K, K, K].forEach((role, i) => { room.players.get(`p${i}`).role = role; });
  room.startNight();
  assert.match(room.move('p0', 0.3, 0.3), /dolaşamazsın/);
  room.selectNight('p0', 'p5');
  room.endNight();
  assert.equal(room.phase, 'day');
  const before = { ...room.players.get('p2').pos };
  assert.match(room.move('p2', 0.3, 0.7), /dolaşamazsın/, 'gündüz herkes yerinde durur');
  assert.deepEqual(room.players.get('p2').pos, before);
  assert.equal(room.players.get('p5').alive, false);
  // Hayalet: ölüler her evrede dolaşır; konumu sadece ölülere gider.
  const atDeath = { ...room.players.get('p5').pos };
  assert.equal(room.move('p5', 0.7, 0.7), null, 'gündüz ölüler (hayalet) dolaşır');
  assert.equal(room.move('p5', 0.5, 0.5), null);
  const ghost = room.players.get('p5').ghostPos;
  assert.deepEqual(ghost, { x: 0.5, y: 0.6 }, 'aynı kırpma kuralı');
  assert.deepEqual(room.viewFor('p5').players[5].pos, ghost, 'kendisi görür');
  assert.deepEqual(room.viewFor('p2').players[5].pos, atDeath, 'yaşayan ölüm anındaki konumu görür');
  for (const id of ['p0', 'p2', 'p3']) room.vote(id, 'p1');
  room.endDay();
  assert.equal(room.phase, 'hunter');
  assert.match(room.move('p2', 0.3, 0.3), /dolaşamazsın/);
  assert.equal(room.move('p1', 0.2, 0.5), null, 'ölen avcı da hayalet');
  assert.deepEqual(room.viewFor('p5').players[1].pos, room.players.get('p1').ghostPos, 'ölüler birbirini görür');
  assert.notDeepEqual(room.viewFor('p2').players[1].pos, room.players.get('p1').ghostPos);
  room.shoot('p1', 'p0');
  assert.equal(room.phase, 'ended');
  assert.deepEqual(room.viewFor('p2').players[5].pos, ghost, 'oyun sonunda herkes görür');
  assert.equal(room.move('p2', 0.3, 0.3), null);
  assert.equal(room.move('p5', 0.3, 0.7), null, 'oyun sonunda ölüler de dolaşır');
  assert.equal(room.players.get('p5').ghostPos, null);
  room.destroy();
});

test('görünüme yeni alanlar eklenir: koltuk, model, hesap, yeni roller', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(7);
  room.updateSettings('p0', { roles: { gozcu: true, iftiraci: true } });
  const view = room.viewFor('p2');
  assert.equal(view.me.userId, 'u2');
  assert.equal(view.me.seat, 2);
  assert.ok(view.players.every((p) => Number.isInteger(p.seat) && Number.isInteger(p.look.skin)));
  assert.equal(view.room.settings.roles.gozcu, true);
  assert.equal(view.room.settings.roles.iftiraci, true);
  // Varsayılan rastgele dağıtım: yetenek anahtarı rol eklemez; Doktor, Kahin, Gözcü sığar.
  assert.deepEqual(view.room.distribution, [V, D, S, G, K, K, K]);
  assert.equal(view.room.rolePool, null);
  room.updateSettings('p0', { roleMode: 'all' });
  assert.deepEqual(room.viewFor('p2').room.distribution, [V, D, S, G, K, K, K]);
  assert.equal(room.viewFor('p2').room.rolePool, null);
  room.destroy();
});

// ---------- istatistik bildirimi ----------

test('oyun bitince sonuçlar bildirilir; oyundan ayrılan kaybetmiş sayılır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(6);
  startWithRoles(room, [V, D, K, K, K, K]);
  room.removePlayer('p5');
  room.endNight();
  for (const id of ['p1', 'p2', 'p3']) room.vote(id, 'p0');
  room.endDay();
  assert.equal(room.winner, K);
  assert.deepEqual(room.winners.sort(), ['p1', 'p2', 'p3', 'p4'], 'ayrılan kazananlara girmez');
  assert.equal(events.finished.length, 1);
  const { winner, results } = events.finished[0];
  assert.equal(winner, K);
  const byId = Object.fromEntries(results.map((r) => [r.playerId, r]));
  assert.equal(results.length, 6);
  assert.deepEqual(byId.p0, { playerId: 'p0', userId: 'u0', name: 'Oyuncu0', role: V, team: V, won: false, left: false });
  assert.equal(byId.p1.won, true);
  assert.equal(byId.p1.team, K);
  assert.equal(byId.p5.won, false);
  assert.equal(byId.p5.left, true);
  room.destroy();
});

test('soytarı kazanınca sonuç soytarı takımıyla bildirilir; bildirim hatası oyunu durdurmaz', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(6);
  let got = null;
  room.hooks.finished = (r, res) => { got = res; throw new Error('depo çöktü'); };
  const orig = console.error;
  console.error = () => {};
  try {
    startWithRoles(room, [V, J, K, K, K, K]);
    room.endNight();
    for (const id of ['p0', 'p2', 'p3']) room.vote(id, 'p1');
    room.endDay();
  } finally {
    console.error = orig;
  }
  assert.equal(room.phase, 'ended');
  assert.equal(room.winner, J);
  const jester = got.results.find((r) => r.playerId === 'p1');
  assert.equal(jester.team, J);
  assert.equal(jester.won, true);
  assert.equal(got.results.filter((r) => r.won).length, 1);
  room.destroy();
});

// ---------- gece başında eve yürüme payı ----------

test('gece eve yürüme payıyla başlar: timerFrom sayacın başladığı an, seçimler hemen açık', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 1_000_000 });
  const { NIGHT_WALK_MS } = require('../game');
  assert.equal(NIGHT_WALK_MS, 4000);
  const { room } = setup(6);
  assert.equal(room.viewFor('p0').room.timerFrom, null, 'lobide yok');
  room.start('p0');
  assert.equal(room.viewFor('p0').room.timerFrom, null, 'rol kartlarında yok');
  [V, D, K, K, K, K].forEach((role, i) => { room.players.get(`p${i}`).role = role; });
  room.startNight();
  const now = Date.now();
  assert.equal(room.timerFrom, now + 4000);
  assert.equal(room.deadline, now + 4000 + 20000);
  assert.equal(room.viewFor('p3').room.timerFrom, now + 4000);
  assert.deepEqual(room.viewFor('p3').room.night, { stage: 'walk', pickUntil: now + 24000, showUntil: now + 44000 });
  assert.equal(room.selectNight('p0', 'p2'), null, 'yürüyüş sırasında da seçim yapılabilir');
  t.mock.timers.tick(4000);
  assert.equal(room.viewFor('p3').room.night.stage, 'pick');
  t.mock.timers.tick(19999);
  assert.equal(room.night.stage, 'pick', 'seçim süresi yürüyüşten sonra başlar (doktor seçmedi)');
  t.mock.timers.tick(1);
  assert.deepEqual(room.viewFor('p3').room.night, { stage: 'show', pickUntil: now + 24000, showUntil: now + 44000 });
  assert.equal(room.deadline, now + 44000);
  assert.equal(room.timerFrom, now + 4000, 'timerFrom gece boyunca aynı');
  t.mock.timers.tick(19999);
  assert.equal(room.phase, 'night');
  t.mock.timers.tick(1);
  assert.equal(room.phase, 'day');
  assert.equal(room.viewFor('p3').room.night, null);
  assert.equal(room.timerFrom, null, 'gündüz yok');
  assert.equal(room.deadline, Date.now() + 120000, 'gündüz süresi değişmedi');
  for (const id of ['p0', 'p3', 'p4', 'p5']) room.vote(id, 'p1');
  room.vote('p1', 'p3');
  assert.equal(room.dayShortened, true);
  assert.equal(room.deadline, Date.now() + 10000, 'herkes oy verince 10 sn (değişmedi)');
  assert.equal(room.timerFrom, null);
  t.mock.timers.tick(10000);
  assert.equal(room.phase, 'night');
  assert.equal(room.timerFrom, Date.now() + 4000, 'her gece yeniden');
  room.removePlayer('p0');
  assert.equal(room.phase, 'ended');
  assert.equal(room.timerFrom, null);
  assert.equal(room.viewFor('p1').room.timerFrom, null);
  room.destroy();
});

test('avcı evresinde timerFrom yoktur, süre değişmez', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 2_000_000 });
  const { room } = setup(6);
  startWithRoles(room, [V, H, K, K, K, K]);
  room.selectNight('p0', 'p1');
  room.endNight();
  assert.equal(room.phase, 'hunter');
  assert.equal(room.timerFrom, null);
  assert.equal(room.deadline, Date.now() + 20000);
  room.destroy();
});

// ---------- rastgele rol seçimi (kapasite aşımı) ----------

test('kapasite aşımı: roller oyun başına rastgele seçilir, kahin/gözcüden biri hep çıkar', () => {
  const { distributionFor, rolePlan } = require('../game');
  const all = [D, S, G, ROLE.JAILER, W, H, M, J, ROLE.MAD, ROLE.THIEF];
  const seen = new Set();
  let seed = 12345;
  const rng = (n) => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return (seed >>> 8) % n; };
  for (let i = 0; i < 400; i++) {
    const list = rolesFor(7, all, rng);
    assert.equal(list.length, 7);
    assert.equal(list.filter((r) => r === V).length, 1);
    assert.ok(list.includes(S) || list.includes(G), 'kahin veya gözcü');
    list.forEach((r) => seen.add(r));
  }
  for (const r of all) assert.ok(seen.has(r), `${r} hiç çıkmadı`);
  // yalnızca kahin açıksa ve yer varsa her zaman çıkar
  for (let i = 0; i < 50; i++) assert.ok(rolesFor(5, [D, S, W, H, M, J], rng).includes(S));
  // 8+ oyuncuda köylü ayrılmaz, 8'den azında ayrılır
  assert.equal(rolesFor(8, [D, S, G, ROLE.JAILER, W, H, M, J], rng).filter((r) => r === K).length, 0);
  assert.equal(rolesFor(7, [D, S, G, ROLE.JAILER, W, H, M, J], rng).filter((r) => r === K).length, 1);
  // minimum oyuncu kuralları
  assert.ok(!rolesFor(6, [D, ROLE.THIEF, F], rng).includes(ROLE.THIEF));
  assert.ok(!rolesFor(7, [D, F], rng).includes(F), 'yetenek anahtarı rol değildir');
  // önizleme deterministik ve tutarlı
  const a = distributionFor(7, all);
  assert.deepEqual(a, distributionFor(7, all));
  assert.deepEqual(a.rolePool, { pick: 5, from: all });
  assert.deepEqual(a.distribution, [V, K]);
  assert.equal(a.distribution.length + a.rolePool.pick, 7);
  assert.deepEqual(distributionFor(7, [D, S]), { distribution: [V, D, S, K, K, K, K], rolePool: null });
  assert.equal(rolePlan(5, [D, S, W, H, M]).pool.pick, 3);
});
