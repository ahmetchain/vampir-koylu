'use strict';

// v2 kuralları: koltuklar, meydan koordinatları, Gözcü, İftiracı, istatistik bildirimi.
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  Room, ROLE, rolesFor, winnerOf, teamOf, normalizeSettings, PLAZA, SKIN_COUNT, COLOR_COUNT, HAT_COUNT,
} = require('../game');

const {
  VAMPIRE: V, FRAMER: F, DOCTOR: D, SEER: S, WATCHER: G, WITCH: W, HUNTER: H, MAYOR: M, JESTER: J, VILLAGER: K,
} = ROLE;

function setup(count = 5) {
  const events = { announces: [], finished: [], updates: [], emptied: false };
  const room = new Room({
    id: 'TEST2',
    name: 'Test',
    settings: {},
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
  roles.forEach((role, i) => { room.players.get(`p${i}`).role = role; });
  room.startNight();
}

const of = (events, kind) => events.announces.filter((a) => a.kind === kind);
const visibleRoles = (room, id) => room.viewFor(id).players.filter((p) => p.role).map((p) => p.id).sort();
const dist = (pos) => Math.hypot(pos.x - 0.5, pos.y - 0.5);

// ---------- dağıtım ----------

test('iftiracı 7+ oyuncuda vampirlere ek verilir, özel roller yeni sırayla eklenir', () => {
  assert.deepEqual(rolesFor(7, [D, S, G, F]), [V, F, D, S, G, K, K]);
  assert.deepEqual(rolesFor(6, [D, F]), [V, D, K, K, K, K], '7 kişiden az: iftiracı yok');
  assert.deepEqual(rolesFor(10, [D, S, G, W, H, M, J, F]), [V, V, F, D, S, G, W, H, M, K]);
  assert.deepEqual(rolesFor(5, [D, S, G, W, H, M, J, F]), [V, D, S, G, K]);
  assert.deepEqual(rolesFor(7, [D, S, G, W, H, M, J, F]), [V, F, D, S, G, W, K], 'en az bir köylü kalır');
  assert.deepEqual(normalizeSettings({}).roles, {
    doktor: true, kahin: true, gozcu: false, cadi: false, avci: false, muhtar: false, soytari: false, iftiraci: false,
  });
  assert.equal(teamOf(F), V);
  assert.equal(teamOf(G), K);
});

test('oyun başlarken iftiracı sadece açıksa ve 7+ kişi varsa dağıtılır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  for (const [count, expected] of [[6, 0], [7, 1], [12, 1]]) {
    const { room } = setup(count);
    assert.equal(room.updateSettings('p0', { roles: { iftiraci: true, gozcu: true } }), null);
    assert.equal(room.viewFor('p0').room.distribution.filter((r) => r === F).length, expected);
    room.start('p0');
    const roles = [...room.players.values()].map((p) => p.role);
    assert.equal(roles.filter((r) => r === F).length, expected, `${count} oyuncu`);
    assert.equal(roles.filter((r) => r === G).length, 1);
    room.destroy();
  }
});

test('vampir sayımına iftiracı da girer', () => {
  const p = (role, alive = true) => ({ role, alive });
  assert.equal(winnerOf([p(V), p(F), p(K), p(K)]), V);
  assert.equal(winnerOf([p(V), p(F), p(K), p(K), p(K)]), null);
  assert.equal(winnerOf([p(V, false), p(F), p(K), p(K)]), null, 'iftiracı yaşıyorsa köy henüz kazanmadı');
  assert.equal(winnerOf([p(F), p(K)]), V);
  assert.equal(winnerOf([p(V, false), p(F, false), p(K)]), K);
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

test('iftiracı öldürme seçimine katılmaz; kural dışı seçimler reddedilir; gece görünümü', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(7);
  startWithRoles(room, [V, F, S, G, K, K, K]);
  assert.match(room.selectNight('p1', 'p1'), /Kendine/);
  assert.match(room.selectNight('p1', 'p0'), /Takım/);
  assert.match(room.selectNight('p0', 'p1'), /İftiracı/);
  assert.equal(room.selectNight('p1', 'p4'), null);
  assert.equal(room.nightFrame, 'p4');
  assert.equal(room.nightVampire.size, 0, 'iftiracının seçimi öldürme oyu değildir');
  assert.deepEqual(room.vampireTargets(), []);

  assert.deepEqual(room.viewFor('p0').night, { mySelection: null, team: [], framer: 'p4' });
  assert.equal(room.selectNight('p0', 'p5'), null);
  assert.deepEqual(room.viewFor('p1').night, {
    mySelection: 'p4', team: [{ vampId: 'p0', name: 'Oyuncu0', targetId: 'p5' }], framer: 'p4',
  });
  assert.equal(room.viewFor('p4').night, null, 'köylünün gece görünümü yok');
  assert.equal(room.selectNight('p3', 'p3'), null, 'gözcü kendi evini izleyebilir');
  assert.deepEqual(room.viewFor('p3').night, { mySelection: 'p3', team: [], framer: null });
  assert.deepEqual(room.viewFor('p2').night, { mySelection: null, team: [], framer: null });
  // Aynı kişiye tekrar dokunmak seçimi kaldırır.
  room.selectNight('p1', 'p4');
  assert.equal(room.nightFrame, null);

  const msg = room.chat('p1', 'kimi suçlayalım');
  assert.equal(msg.channel, 'vampir');
  assert.deepEqual(msg.recipients.sort(), ['p0', 'p1']);
  assert.ok(room.chat('p3', 'selam').error, 'gözcü gece konuşamaz');
  room.destroy();
});

test('kahin iftira atılan kişiyi ve iftiracıyı vampir görür, iftira sadece o gece geçerli', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(7);
  startWithRoles(room, [V, F, S, K, K, K, K]);
  room.selectNight('p1', 'p3');
  room.selectNight('p2', 'p3');
  room.endNight();
  let seer = of(events, 'seer').pop();
  assert.deepEqual(seer.to, ['p2']);
  assert.match(seer.text, /Oyuncu3 bir VAMPİR/);
  assert.deepEqual(seer.targets, [{ id: 'p3', cause: 'vampir' }]);

  room.endDay();
  room.selectNight('p2', 'p3');
  room.endNight();
  seer = of(events, 'seer').pop();
  assert.match(seer.text, /Oyuncu3 vampir değil/);

  room.endDay();
  room.selectNight('p2', 'p1');
  room.endNight();
  seer = of(events, 'seer').pop();
  assert.match(seer.text, /Oyuncu1 bir VAMPİR/);
  assert.equal(room.players.get('p2').notes.length, 3);
  room.destroy();
});

test('iftiracı aynı gece zehirlense de iftirası o geceki kahin sonucunu etkiler', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(7);
  startWithRoles(room, [V, F, S, W, K, K, K]);
  room.selectNight('p1', 'p4');
  room.selectNight('p3', 'p1', 'poison');
  room.selectNight('p2', 'p4');
  room.endNight();
  assert.equal(room.players.get('p1').alive, false);
  assert.match(of(events, 'seer').pop().text, /Oyuncu4 bir VAMPİR/);
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
  assert.match(watch[0].text, /Oyuncu7 evine girenler: Oyuncu0, Oyuncu1, Oyuncu2, Oyuncu3, Oyuncu4, Oyuncu6\./);
  assert.match(room.players.get('p5').notes[0].text, /^👁️ 1\. gece/);
  assert.equal(room.players.get('p7').notes.length, 0);
  room.destroy();
});

test('gözcü: sadece seçilen kurbana giden vampirler sayılır (eşitlik kurayla bozulur)', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const seen = new Set();
  for (let i = 0; i < 60 && seen.size < 2; i++) {
    const { room, events } = setup(10);
    startWithRoles(room, [V, V, G, K, K, K, K, K, K, K]);
    room.selectNight('p0', 'p3');
    room.selectNight('p1', 'p4');
    room.selectNight('p2', 'p3');
    room.endNight();
    const watch = of(events, 'watch')[0];
    if (!room.players.get('p3').alive) {
      assert.deepEqual(watch.visitors, ['p0']);
      seen.add('kurban');
    } else {
      assert.equal(room.players.get('p4').alive, false);
      assert.deepEqual(watch.visitors, []);
      assert.match(watch.text, /kimse girmedi/);
      seen.add('diğeri');
    }
    room.destroy();
  }
  assert.equal(seen.size, 2, 'iki durum da denenmeli');
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

test('gözcü: cadı iki eve de girer; ev sahibi ve ayrılanlar sayılmaz', (t) => {
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
  assert.match(of(events, 'watch').pop().text, /kimse girmedi/);

  // 3. gece: doktor p6'yı korur ama gece oyundan ayrılır.
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

// ---------- iftiracının vampire dönüşmesi ----------

test('son vampir asılınca iftiracı vampire dönüşür, oyun sürer ve o öldürür', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(7);
  startWithRoles(room, [V, F, D, K, K, K, K]);
  room.endNight();
  for (const id of ['p2', 'p3', 'p4']) room.vote(id, 'p0');
  room.endDay();
  assert.equal(room.players.get('p0').alive, false);
  assert.equal(room.players.get('p1').role, V);
  const promote = of(events, 'promote');
  assert.equal(promote.length, 1);
  assert.deepEqual(promote[0].to, ['p1']);
  assert.match(room.players.get('p1').notes[0].text, /Vampire dönüştün/);
  assert.equal(room.phase, 'night');
  assert.equal(room.winner, null);
  assert.deepEqual(visibleRoles(room, 'p3'), ['p0', 'p3'], 'köy dönüşümü görmez (ölü vampirin rolü açık)');

  assert.equal(room.selectNight('p1', 'p3'), null);
  assert.equal(room.viewFor('p1').night.mySelection, 'p3');
  room.endNight();
  assert.equal(room.players.get('p3').alive, false);

  // Dönüşen vampir de asılınca köy kazanır.
  for (const id of ['p2', 'p4', 'p5']) room.vote(id, 'p1');
  room.endDay();
  assert.equal(room.winner, K);
  room.destroy();
});

test('son vampir gece ayrılırsa iftiracı hemen dönüşür, iftirası düşer', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(7);
  startWithRoles(room, [V, F, S, K, K, K, K]);
  room.selectNight('p1', 'p3');
  room.selectNight('p2', 'p3');
  room.removePlayer('p0');
  assert.equal(room.phase, 'night');
  assert.equal(room.players.get('p1').role, V);
  assert.equal(room.nightFrame, null);
  assert.equal(of(events, 'promote').length, 1);
  assert.deepEqual(room.viewFor('p1').night, { mySelection: null, team: [], framer: null });
  assert.equal(room.selectNight('p1', 'p4'), null);
  room.endNight();
  assert.equal(room.players.get('p4').alive, false);
  assert.match(of(events, 'seer').pop().text, /Oyuncu3 vampir değil/);
  room.destroy();
});

test('avcı son vampiri vurursa iftiracı dönüşür ve oyun sürer', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(7);
  startWithRoles(room, [V, F, H, K, K, K, K]);
  room.selectNight('p0', 'p2');
  room.endNight();
  assert.equal(room.phase, 'hunter');
  assert.equal(room.shoot('p2', 'p0'), null);
  assert.equal(room.players.get('p1').role, V);
  assert.equal(of(events, 'promote').length, 1);
  assert.equal(room.phase, 'day');
  room.destroy();
});

test('iftiracı varken eşitlik olursa vampir takımı kazanır, iftiracı da kazananlardadır', (t) => {
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

test('dolaşma lobide, gündüz (ölüler dahil) ve oyun sonunda serbest; diğer evrelerde yasak', (t) => {
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
  assert.equal(room.move('p2', 0.3, 0.7), null);
  assert.equal(room.players.get('p5').alive, false);
  assert.equal(room.move('p5', 0.7, 0.7), null, 'ölüler de dolaşabilir');
  for (const id of ['p0', 'p2', 'p3']) room.vote(id, 'p1');
  room.endDay();
  assert.equal(room.phase, 'hunter');
  assert.match(room.move('p2', 0.3, 0.3), /dolaşamazsın/);
  room.shoot('p1', 'p0');
  assert.equal(room.phase, 'ended');
  assert.equal(room.move('p2', 0.3, 0.3), null);
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
  assert.deepEqual(view.room.distribution, [V, F, D, S, G, K, K]);
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
