'use strict';

// Gardiyanın kilidi gizlidir: kilitli kapının sahibine önceden söylenmez. Kilidi ancak dışarı çıkmaya çalışınca
// (reddedilir ve kaydedilir) ya da biri kapıyı zorlayınca öğrenir; Gardiyanın raporu sahibin çıkmak isteyip
// istemediğini de söyler. Görevi olmayan hiçbir şey öğrenmez.
const test = require('node:test');
const assert = require('node:assert/strict');
const { Room, ROLE } = require('../game');

const { VAMPIRE: V, DOCTOR: D, WATCHER: G, JAILER: L, VILLAGER: K } = ROLE;
const clock = (t) => t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 9_000_000 });
const of = (ev, kind) => ev.announces.filter((a) => a.kind === kind);

function setup(count, settings = {}) {
  const ev = { announces: [] };
  const room = new Room({
    id: 'KILIT', name: 'Kilit', settings: { events: 'off', roles: { gardiyan: true, gozcu: true }, ...settings },
    hooks: { update() {}, announce(r, a, to) { ev.announces.push({ ...a, to }); }, empty() {}, finished() {} },
  });
  for (let i = 0; i < count; i++) { room.addPlayer(`p${i}`, `Oyuncu${i}`, { userId: `u${i}` }); room.connect(`p${i}`, `s${i}`); }
  return { room, ev };
}

function startWithRoles(room, roles) {
  assert.equal(room.start(room.hostId), null);
  roles.forEach((r, i) => { const p = room.players.get(`p${i}`); p.role = r; p.ability = null; });
  room.startNight();
}

function lockNext(room, jailerId, targetId) {
  room.endNight();
  assert.equal(room.lockHouse(jailerId, targetId), null);
  room.endDay();
  assert.equal(room.phase, 'night');
}

test('kilitli ev sahibine önceden haber verilmez; görünümü normal biri gibidir; başkaları hiçbir şey görmez', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, L, D, K, K, K, K, K]);
  lockNext(room, 'p1', 'p2');   // doktorun kapısı kilitli
  assert.equal(of(ev, 'locked').length, 0, 'gece başında duyuru yok');
  assert.equal(room.players.get('p2').notes.length, 0);
  const n = room.viewFor('p2').night;
  assert.equal(n.canAct, true, 'seçim yapabilirmiş gibi görünür');
  assert.equal(n.lockFound, false);
  assert.equal('locked' in n, false, 'eski night.locked alanı yok');
  for (const id of ['p0', 'p1', 'p3', 'p4']) {
    const v = room.viewFor(id).night;
    assert.ok(!v || !v.lockFound);
  }
  // Görevi olmayan (köylü) kilidi hiç öğrenmez.
  assert.match(room.selectNight('p4', 'p5'), /Köylüler gece seçim yapamaz/);
  room.destroy();
});

test('dışarı çıkmaya çalışan kilidi öğrenir: reddedilir, kaydedilir, bir daha seçemez; kendi evinde kalan seçim sürer', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, L, D, K, K, K, K, K]);
  lockNext(room, 'p1', 'p2');
  assert.match(room.selectNight('p2', 'p5'), /Kapın dışarıdan kilitlendi, bu gece evinden çıkamazsın\./);
  assert.ok(room.lockTried.has('p2'), 'deneme kaydedildi');
  const v = room.viewFor('p2').night;
  assert.equal(v.lockFound, true);
  assert.equal(v.canAct, false);
  assert.deepEqual(of(ev, 'locked').map((a) => a.to), [['p2']], 'yalnızca kendisine özel bildirim');
  assert.match(room.players.get('p2').notes[0].text, /kilitlendi/);
  assert.match(room.selectNight('p2', 'p6'), /kilitlendi/, 'tekrar denemek yine reddedilir');
  assert.equal(of(ev, 'locked').length, 1, 'bildirim bir kez');
  room.destroy();

  // Kendi evinde kalan seçim (doktor kendini korur) evden çıkmak değildir: kilit açığa çıkmaz.
  const { room: r2 } = setup(8);
  startWithRoles(r2, [V, L, D, K, K, K, K, K]);
  lockNext(r2, 'p1', 'p2');
  assert.equal(r2.selectNight('p2', 'p2'), null);
  assert.equal(r2.viewFor('p2').night.lockFound, false);
  assert.equal(r2.lockTried.has('p2'), false);
  r2.destroy();
});

test('Gardiyan raporu sahibin çıkmak isteyip istemediğini de söyler; kapıyı zorlayan ayrıca sayılır', (t) => {
  clock(t);
  // Sahip çıkmayı denedi.
  const a = setup(8);
  startWithRoles(a.room, [V, L, D, K, K, K, K, K]);
  lockNext(a.room, 'p1', 'p2');
  a.room.selectNight('p2', 'p5');
  a.room.endNight();
  let rep = of(a.ev, 'lockreport').pop();
  assert.match(rep.text, /kimse zorlamadı; ev sahibi de dışarı çıkmak istedi\./);
  assert.equal(rep.tried, true);
  a.room.destroy();
  // Sahip hiçbir şey denemedi (beklemeyi seçti).
  const b = setup(8);
  startWithRoles(b.room, [V, L, D, K, K, K, K, K]);
  lockNext(b.room, 'p1', 'p2');
  assert.equal(b.room.passNight('p2'), null, 'kilidi bilmeyen oyuncu bekleyebilir');
  b.room.endNight();
  rep = of(b.ev, 'lockreport').pop();
  assert.match(rep.text, /ev sahibi evden çıkmak istemedi\./);
  assert.equal(rep.tried, false);
  b.room.destroy();
  // Köylü sahip: görevi yok, "çıkmak istemedi"; kapıyı zorlayan vampir sayılır ve sahip yalnızca sayıyı öğrenir.
  const c = setup(8);
  startWithRoles(c.room, [V, L, D, K, K, K, K, K]);
  lockNext(c.room, 'p1', 'p4');
  c.room.selectNight('p0', 'p4');
  c.room.endNight();
  rep = of(c.ev, 'lockreport').pop();
  assert.match(rep.text, /1 kişi zorladı; ev sahibi evden çıkmak istemedi\./);
  const rattled = of(c.ev, 'rattled').pop();
  assert.deepEqual(rattled.to, ['p4']);
  assert.equal(rattled.count, 1);
  c.room.destroy();
});

test('kural botu kilitli kapıda reddedilince hata vermez ve tekrar denemez', (t) => {
  clock(t);
  const { room } = setup(8);
  startWithRoles(room, [V, L, D, K, K, K, K, K]);
  lockNext(room, 'p1', 'p2');
  room.players.get('p2').bot = true;
  room.bots.rng = () => 0.5;
  assert.doesNotThrow(() => room.bots.nightAct('p2'));
  assert.ok(room.lockTried.has('p2'));
  assert.equal(room.canActAtNight('p2'), false, 'tekrar seçim kuyruğuna girmez');
  assert.equal(room.phase, 'night');
  room.destroy();
});

test('akıllı bot istemi: kilidi ancak denedikten sonra bilir', (t) => {
  clock(t);
  const { buildUser } = require('../lib/ai/prompt');
  const { room } = setup(8);
  startWithRoles(room, [V, L, D, K, K, K, K, K]);
  lockNext(room, 'p1', 'p2');
  const before = buildUser({ view: room.viewFor('p2'), task: { kind: 'night' } });
  assert.doesNotMatch(before, /locked/i);
  room.selectNight('p2', 'p5');
  const after = buildUser({ view: room.viewFor('p2'), task: { kind: 'night' } });
  assert.match(after, /You tried to go out and found your door locked from outside/);
  room.destroy();
});
