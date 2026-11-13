'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { Room, ROLE, SLEEP, vampireCount, assignRoles, winnerOf } = require('../game');

const { VAMPIRE: V, DOCTOR: D, VILLAGER: K } = ROLE;

function setup(count = 5) {
  const events = { announces: [], emptied: false };
  const room = new Room({
    id: 'TEST1',
    name: 'Test',
    settings: {},
    hooks: {
      update() {},
      announce(r, a) { events.announces.push(a); },
      empty() { events.emptied = true; },
    },
  });
  for (let i = 0; i < count; i++) {
    room.addPlayer(`p${i}`, `Oyuncu${i}`, `tok${i}`);
    room.connect(`p${i}`, `s${i}`);
  }
  return { room, events };
}

// Oyunu başlatır, rolleri test için sabitler ve doğrudan geceye geçer.
function startWithRoles(room, roles) {
  assert.equal(room.start(room.hostId), null);
  roles.forEach((role, i) => { room.players.get(`p${i}`).role = role; });
  room.startNight();
}

const lastAnnounce = (events) => events.announces[events.announces.length - 1];

test('vampir sayısı oyuncu sayısına göre belirlenir', () => {
  assert.equal(vampireCount(5), 1);
  assert.equal(vampireCount(9), 1);
  assert.equal(vampireCount(10), 2);
  assert.equal(vampireCount(14), 2);
  assert.equal(vampireCount(15), 3);
  assert.equal(vampireCount(20), 3);
});

test('roller doğru dağıtılır: 1 doktor, gerisi köylü', () => {
  for (let n = 5; n <= 20; n++) {
    const ids = Array.from({ length: n }, (_, i) => `id${i}`);
    const roles = [...assignRoles(ids).values()];
    assert.equal(roles.filter((r) => r === V).length, vampireCount(n));
    assert.equal(roles.filter((r) => r === D).length, 1);
    assert.equal(roles.filter((r) => r === K).length, n - vampireCount(n) - 1);
  }
});

test('kazanma koşulları', () => {
  const p = (role, alive = true) => ({ role, alive });
  assert.equal(winnerOf([p(V), p(K)]), V, '1 vampir 1 köylü: vampir kazanır');
  assert.equal(winnerOf([p(V), p(D), p(K)]), null, '1 vampir 1 doktor 1 köylü: oyun sürer');
  assert.equal(winnerOf([p(V, false), p(K), p(D)]), K, 'vampir kalmadı: köylüler kazanır');
  assert.equal(winnerOf([p(V), p(V), p(K), p(K)]), V);
  assert.equal(winnerOf([p(V), p(V), p(K), p(K), p(D)]), null);
});

test('5 kişiden az oyuncuyla oyun başlamaz, sadece oda sahibi başlatır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(4);
  assert.match(room.start('p0'), /en az 5/);
  room.addPlayer('p4', 'Oyuncu4', 'tok4');
  assert.match(room.start('p1'), /oda sahibi/);
  assert.equal(room.start('p0'), null);
  assert.equal(room.phase, 'reveal');
  room.destroy();
});

test('herkes sadece kendi rolünü görür, vampirler birbirini görür', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(10);
  startWithRoles(room, [V, V, D, K, K, K, K, K, K, K]);

  const villagerView = room.viewFor('p3');
  assert.equal(villagerView.me.role, K);
  assert.deepEqual(villagerView.players.filter((p) => p.role).map((p) => p.id), ['p3']);

  const vampView = room.viewFor('p0');
  assert.deepEqual(vampView.players.filter((p) => p.role).map((p) => p.id).sort(), ['p0', 'p1']);

  const doctorView = room.viewFor('p2');
  assert.deepEqual(doctorView.players.filter((p) => p.role).map((p) => p.id), ['p2']);
  room.destroy();
});

test('vampir kendini ve diğer vampiri seçemez, doktor kendini seçebilir, köylü seçemez', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(10);
  startWithRoles(room, [V, V, D, K, K, K, K, K, K, K]);
  assert.match(room.selectNight('p0', 'p0'), /kendini/);
  assert.match(room.selectNight('p0', 'p1'), /vampir/);
  assert.equal(room.selectNight('p0', 'p3'), null);
  assert.equal(room.selectNight('p2', 'p2'), null);
  assert.match(room.selectNight('p3', 'p4'), /Köylüler/);
  room.destroy();
});

test('doktor vampirin hedefini korursa kimse ölmez ve kurtarılan açıklanmaz', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(5);
  startWithRoles(room, [V, D, K, K, K]);
  room.selectNight('p0', 'p2');
  room.selectNight('p1', 'p2');
  room.endNight();
  assert.equal(room.players.get('p2').alive, true);
  assert.equal(lastAnnounce(events).text, 'Bu gece kimse ölmedi.');
  assert.equal(room.phase, 'day');
  room.destroy();
});

test('doktor yanlış kişiyi korursa vampirin hedefi ölür', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(5);
  startWithRoles(room, [V, D, K, K, K]);
  room.selectNight('p0', 'p2');
  room.selectNight('p1', 'p3');
  room.endNight();
  assert.equal(room.players.get('p2').alive, false);
  assert.match(lastAnnounce(events).text, /Oyuncu2 bu gece vampir tarafından öldürüldü/);
  room.destroy();
});

test('gece süresi dolunca kendiliğinden sabah olur', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  startWithRoles(room, [V, D, K, K, K]);
  room.selectNight('p0', 'p4');
  t.mock.timers.tick(30000);
  assert.equal(room.phase, 'night', 'eve yürüme payı (4 sn) henüz bitmedi');
  t.mock.timers.tick(4000);
  assert.equal(room.phase, 'day');
  assert.equal(room.players.get('p4').alive, false);
  t.mock.timers.tick(120000);
  assert.equal(room.phase, 'night');
  assert.equal(room.round, 2);
  room.destroy();
});

test('gündüz en çok oyu alan asılır, eşitlikte kimse asılmaz', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(7);
  startWithRoles(room, [V, D, K, K, K, K, K]);
  room.endNight();

  room.vote('p1', 'p3');
  room.vote('p2', 'p4');
  room.endDay();
  assert.ok(['p3', 'p4'].every((id) => room.players.get(id).alive), 'eşitlikte kimse asılmamalı');

  room.endNight();
  room.vote('p1', 'p3');
  room.vote('p2', 'p3');
  room.vote('p4', 'p5');
  assert.match(room.vote('p3', 'p3'), /Kendine/);
  room.endDay();
  assert.equal(room.players.get('p3').alive, false);
  room.destroy();
});

test('aynı karta tekrar dokunmak oyu geri alır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  startWithRoles(room, [V, D, K, K, K]);
  room.endNight();
  room.vote('p2', 'p3');
  room.vote('p2', 'p3');
  assert.equal(room.dayVotes.has('p2'), false);
  room.destroy();
});

test('herkes Hızlı Uyu derse kimse asılmadan hemen gece olur', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(5);
  startWithRoles(room, [V, D, K, K, K]);
  room.endNight();
  for (const id of ['p0', 'p1', 'p2', 'p3']) room.vote(id, SLEEP);
  assert.equal(room.phase, 'day');
  room.vote('p4', SLEEP);
  assert.equal(room.phase, 'night');
  assert.equal(room.round, 2);
  assert.ok([...room.players.values()].every((p) => p.alive));
  assert.ok(events.announces.some((a) => a.kind === 'sleep'));
  room.destroy();
});

test('Hızlı Uyu oyları en çok oya eşitse kimse asılmaz', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  startWithRoles(room, [V, D, K, K, K]);
  room.endNight();
  room.vote('p1', 'p0');
  room.vote('p2', 'p0');
  room.vote('p3', SLEEP);
  room.vote('p4', SLEEP);
  room.endDay();
  assert.equal(room.players.get('p0').alive, true);
  room.destroy();
});

test('herkes oy verince gündüz süresi 10 saniyeye iner', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  startWithRoles(room, [V, D, K, K, K]);
  room.endNight();
  for (const id of ['p1', 'p2', 'p3', 'p4']) room.vote(id, 'p0');
  room.vote('p0', 'p1');
  assert.equal(room.dayShortened, true);
  t.mock.timers.tick(10000);
  assert.equal(room.phase, 'ended');
  assert.equal(room.winner, K);
  room.destroy();
});

test('son vampir asılınca köylüler kazanır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  startWithRoles(room, [V, D, K, K, K]);
  room.endNight();
  room.vote('p1', 'p0');
  room.vote('p2', 'p0');
  room.endDay();
  assert.equal(room.phase, 'ended');
  assert.equal(room.winner, K);
  // Oyun bitince herkes tüm rolleri görür.
  assert.ok(room.viewFor('p3').players.every((p) => p.role));
  room.destroy();
});

test('1 vampir 1 doktor 1 köylü: doktor kurtarırsa oyun sürer, kurtaramazsa vampir kazanır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  startWithRoles(room, [V, D, K, K, K]);
  room.players.get('p3').alive = false;
  room.players.get('p4').alive = false;

  room.selectNight('p0', 'p2');
  room.selectNight('p1', 'p2');
  room.endNight();
  assert.equal(room.phase, 'day', 'doktor kurtardı, oyun sürmeli');

  room.endDay();
  room.selectNight('p0', 'p2');
  room.selectNight('p1', 'p1');
  room.endNight();
  assert.equal(room.phase, 'ended');
  assert.equal(room.winner, V);
  room.destroy();
});

test('gündüz bir köylü asılıp 1 vampir 1 köylü kalırsa vampir kazanır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  startWithRoles(room, [V, D, K, K, K]);
  room.players.get('p3').alive = false;
  room.players.get('p4').alive = false;
  room.endNight();
  room.vote('p0', 'p1');
  room.vote('p2', 'p1');
  room.endDay();
  assert.equal(room.winner, V);
  room.destroy();
});

test('birden fazla vampir varsa en çok seçilen hedef saldırıya uğrar', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(15);
  const roles = [V, V, V, D, ...Array(11).fill(K)];
  startWithRoles(room, roles);
  room.selectNight('p0', 'p5');
  room.selectNight('p1', 'p5');
  room.selectNight('p2', 'p6');
  room.endNight();
  assert.equal(room.players.get('p5').alive, false);
  assert.equal(room.players.get('p6').alive, true);
  room.destroy();
});

test('sohbet: gece köylü konuşamaz, vampirler kendi arasında, ölüler ölülerle konuşur', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(10);
  startWithRoles(room, [V, V, D, K, K, K, K, K, K, K]);
  assert.ok(room.chat('p3', 'merhaba').error);

  const vamp = room.chat('p0', 'kimi yiyoruz');
  assert.equal(vamp.channel, 'vampir');
  assert.deepEqual(vamp.recipients.sort(), ['p0', 'p1']);

  room.players.get('p9').alive = false;
  const dead = room.chat('p9', 'ben öldüm');
  assert.equal(dead.channel, 'olu');
  assert.deepEqual(dead.recipients, ['p9']);

  room.endNight();
  const day = room.chat('p3', 'günaydın');
  assert.equal(day.channel, 'genel');
  assert.equal(day.recipients.length, 10);
  room.destroy();
});

test('oyun sırasında ayrılan oyuncu ölmüş sayılır ve kazanan kontrol edilir', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  startWithRoles(room, [V, D, K, K, K]);
  room.removePlayer('p0');
  assert.equal(room.players.get('p0').alive, false);
  assert.equal(room.phase, 'ended');
  assert.equal(room.winner, K);
  room.destroy();
});

test('oda sahibi ayrılınca yetki sıradaki oyuncuya geçer, oda boşalınca kapanır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(2);
  room.removePlayer('p0');
  assert.equal(room.hostId, 'p1');
  room.removePlayer('p1');
  assert.equal(events.emptied, true);
});

test('aynı kullanıcı adıyla ikinci kez katılınamaz', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(2);
  assert.match(room.addPlayer('x', 'oyuncu0', 'tx'), /zaten var/);
  room.destroy();
});

test('oyun bitince lobiye dönülür ve roller sıfırlanır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  startWithRoles(room, [V, D, K, K, K]);
  room.removePlayer('p0');
  assert.equal(room.backToLobby('p1'), null);
  assert.equal(room.phase, 'lobby');
  assert.equal(room.players.has('p0'), false);
  assert.ok([...room.players.values()].every((p) => p.role === null && p.alive));
  room.destroy();
});

// ---------- yeni roller ----------

const { rolesFor, OPTIONAL_ROLES } = require('../game');

const S = ROLE.SEER;
const W = ROLE.WITCH;
const H = ROLE.HUNTER;
const M = ROLE.MAYOR;
const J = ROLE.JESTER;

function setupWith(count, roles) {
  const ctx = setup(count);
  ctx.room.settings.roles = Object.fromEntries(OPTIONAL_ROLES.map((r) => [r, roles.includes(r)]));
  return ctx;
}

test('özel roller sıraya göre eklenir ve en az bir köylü kalır', () => {
  assert.deepEqual(rolesFor(5, [D, S, W, H, M, J]), [V, D, S, W, K]);
  assert.deepEqual(rolesFor(7, [S, J]), [V, S, J, K, K, K, K]);
  assert.equal(rolesFor(10, []).filter((r) => r === V).length, 2);
});

test('oyun açılan özel rollerle başlar', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setupWith(8, [D, S, W, H, M, J]);
  room.start('p0');
  const roles = [...room.players.values()].map((p) => p.role).sort();
  assert.deepEqual(roles, [H, W, S, D, K, M, J, V].sort());
  room.destroy();
});

test('kahin baktığı kişinin vampir olup olmadığını sadece kendisi öğrenir', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(5);
  const priv = [];
  room.hooks.announce = (r, a, to) => { events.announces.push(a); if (to) priv.push({ a, to }); };
  startWithRoles(room, [V, S, K, K, K]);
  assert.match(room.selectNight('p1', 'p1'), /Kendi/);
  assert.equal(room.selectNight('p1', 'p0'), null);
  room.endNight();
  assert.equal(priv.length, 1);
  assert.deepEqual(priv[0].to, ['p1']);
  assert.match(priv[0].a.text, /VAMPİR/);
  assert.match(room.viewFor('p1').me.notes[0].text, /VAMPİR/);
  assert.equal(room.viewFor('p2').me.notes.length, 0);
  room.destroy();
});

test('cadı hayat iksiriyle vampir kurbanını kurtarır, iksir bir kez kullanılır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(6);
  startWithRoles(room, [V, W, K, K, K, K]);
  room.selectNight('p0', 'p2');
  assert.deepEqual(room.viewFor('p1').night.witch.victims, ['p2'], 'cadı kurbanı görür');
  assert.equal(room.viewFor('p2').night, null);
  assert.equal(room.selectNight('p1', 'p2', 'heal'), null);
  room.endNight();
  assert.equal(room.players.get('p2').alive, true);
  room.endDay();
  assert.match(room.selectNight('p1', 'p3', 'heal'), /zaten/);
  room.destroy();
});

test('cadı zehri hedefi öldürür, kendini zehirleyemez', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(6);
  startWithRoles(room, [V, W, K, K, K, K]);
  assert.match(room.selectNight('p1', 'p1', 'poison'), /Kendini/);
  room.selectNight('p1', 'p3', 'poison');
  room.selectNight('p0', 'p4');
  room.endNight();
  assert.equal(room.players.get('p3').alive, false);
  assert.equal(room.players.get('p4').alive, false);
  const a = lastAnnounce(events);
  assert.equal(a.targets.length, 2);
  assert.match(a.text, /zehirlenerek/);
  room.destroy();
});

test('gece ölen avcı son atışıyla vampiri vurursa köy kazanır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  startWithRoles(room, [V, H, K, K, K]);
  room.selectNight('p0', 'p1');
  room.endNight();
  assert.equal(room.phase, 'hunter');
  assert.equal(room.hunterId, 'p1');
  assert.match(room.shoot('p2', 'p0'), /avcı/);
  assert.equal(room.shoot('p1', 'p0'), null);
  assert.equal(room.phase, 'ended');
  assert.equal(room.winner, K);
  room.destroy();
});

test('avcı süre içinde ateş etmezse oyun kaldığı yerden sürer', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(6);
  startWithRoles(room, [V, H, K, K, K, K]);
  room.endNight();
  room.vote('p0', 'p1');
  room.vote('p2', 'p1');
  room.endDay();
  assert.equal(room.phase, 'hunter');
  t.mock.timers.tick(20000);
  assert.equal(room.phase, 'night');
  assert.equal(room.round, 2);
  room.destroy();
});

test('avcının son atışı vampir kazanmadan önce yapılır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  startWithRoles(room, [V, H, K, K, K]);
  room.players.get('p3').alive = false;
  room.players.get('p4').alive = false;
  room.selectNight('p0', 'p1');
  room.endNight();
  assert.equal(room.phase, 'hunter', '1 vampir 1 köylü kaldı ama avcı henüz ateş etmedi');
  room.shoot('p1', 'p0');
  assert.equal(room.winner, K);
  room.destroy();
});

test('avcı atış sırasında oyundan ayrılırsa oyun devam eder', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(6);
  startWithRoles(room, [V, H, K, K, K, K]);
  room.selectNight('p0', 'p1');
  room.endNight();
  assert.equal(room.phase, 'hunter');
  room.removePlayer('p1');
  assert.equal(room.phase, 'day');
  room.destroy();
});

test('muhtarın oyu iki sayılır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(6);
  startWithRoles(room, [V, M, K, K, K, K]);
  room.endNight();
  room.vote('p1', 'p2');
  room.vote('p3', 'p4');
  assert.deepEqual(room.viewFor('p5').day.votes.p2, [{ id: 'p1', w: 2 }]);
  room.endDay();
  assert.equal(room.players.get('p2').alive, false);
  assert.equal(room.players.get('p4').alive, true);
  room.destroy();
});

test('soytarı asılırsa tek başına kazanır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room, events } = setup(6);
  startWithRoles(room, [V, J, K, K, K, K]);
  room.endNight();
  room.vote('p0', 'p1');
  room.vote('p2', 'p1');
  room.endDay();
  assert.equal(room.phase, 'ended');
  assert.equal(room.winner, J);
  assert.deepEqual(room.winners, ['p1']);
  assert.equal(lastAnnounce(events).winner, J);
  room.destroy();
});

test('renkler benzersizdir, görünüm sadece lobide ve oyun sonunda değişir', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  const colors = new Set([...room.players.values()].map((p) => p.look.color));
  assert.equal(colors.size, 5);
  const taken = room.players.get('p1').look.color;
  assert.match(room.setLook('p0', { color: taken }), /başka/);
  assert.equal(room.setLook('p0', { hat: 2, skin: 11 }), null);
  assert.equal(room.players.get('p0').look.hat, 2);
  assert.equal(room.players.get('p0').look.skin, 11);
  assert.equal(room.setLook('p0', { skin: 99 }), null);
  assert.equal(room.players.get('p0').look.skin, 11, 'model numarası 0-11 arasına sıkıştırılır');
  room.start('p0');
  assert.match(room.setLook('p0', { hat: 1 }), /lobide/);
  room.removePlayer('p0');
  room.removePlayer('p1');
  room.removePlayer('p2');
  assert.equal(room.phase, 'ended');
  assert.equal(room.setLook('p3', { hat: 4 }), null);
  room.destroy();
});

test('oda sahibi lobide rolleri açıp kapatabilir', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { room } = setup(5);
  assert.match(room.updateSettings('p1', { roles: { soytari: true } }), /oda sahibi/);
  assert.equal(room.updateSettings('p0', { roles: { soytari: true, kahin: false } }), null);
  assert.equal(room.settings.roles.soytari, true);
  assert.equal(room.settings.roles.kahin, false);
  assert.equal(room.settings.roles.doktor, true);
  assert.equal(room.settings.nightSec, 30);
  room.destroy();
});
