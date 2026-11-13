'use strict';

// 4. tur: kesin gece seçimleri, vampir takım hedefi, yeni Gözcü, Gardiyan, köy olayları ve mahkeme.
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  Room, ROLE, chooseEvent, EVENTS, NIGHT_WALK_MS, TRIAL_TURN_MS, TRIAL_VOTE_MS,
} = require('../game');

const {
  VAMPIRE: V, FRAMER: F, DOCTOR: D, SEER: S, WATCHER: G, JAILER: L, WITCH: W, HUNTER: H, VILLAGER: K,
} = ROLE;

function setup(count, { events = 'off', eventRng } = {}) {
  const ev = { announces: [], narrated: [] };
  const room = new Room({
    id: 'TUR4',
    name: 'Tur 4',
    settings: { events },
    eventRng,
    hooks: {
      update() {},
      announce(r, a, to) { ev.announces.push({ ...a, to }); },
      empty() {},
      finished() {},
    },
  });
  for (let i = 0; i < count; i++) {
    room.addPlayer(`p${i}`, `Oyuncu${i}`, { userId: `u${i}` });
    room.connect(`p${i}`, `s${i}`);
  }
  // Hikâye motoruna giden çağrıları kaydet (girdi kontrolü için).
  const narrate = room.narrate.bind(room);
  room.narrate = (method, input, fallback) => { ev.narrated.push({ method, input }); return narrate(method, input, fallback); };
  return { room, ev };
}

function startWithRoles(room, roles) {
  assert.equal(room.start(room.hostId), null);
  roles.forEach((role, i) => { room.players.get(`p${i}`).role = role; });
  room.startNight();
}

// Gündüze geç, gardiyan p<i> kilidi seçsin, sonra geceye geç.
function lockNext(room, jailerId, targetId) {
  if (room.phase === 'night') room.endNight();
  assert.equal(room.phase, 'day');
  assert.equal(room.lockHouse(jailerId, targetId), null);
  room.endDay();
  assert.equal(room.phase, 'night');
}

const of = (ev, kind) => ev.announces.filter((a) => a.kind === kind);
const clock = (t) => t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 5_000_000 });

// ---------- kesin seçimler ----------

test('gece seçimleri kesindir: değiştirme ve geri alma reddedilir', (t) => {
  clock(t);
  const { room } = setup(8);
  startWithRoles(room, [V, D, S, G, F, W, K, K]);
  for (const [id, a, b] of [['p1', 'p6', 'p7'], ['p2', 'p6', 'p7'], ['p3', 'p6', 'p7'], ['p4', 'p6', 'p7']]) {
    assert.equal(room.selectNight(id, a), null);
    assert.equal(room.viewFor(id).night.canAct, false);
    assert.match(room.selectNight(id, b), /kesindir/, `${id} değiştiremez`);
    assert.match(room.selectNight(id, a), /kesindir/, `${id} geri alamaz`);
  }
  assert.equal(room.nightDoctor, 'p6');
  // Cadı: iksir ve zehir ayrı ayrı kesin; aynı kişiye ikisi birden olmaz.
  assert.equal(room.selectNight('p5', 'p6', 'heal'), null);
  assert.match(room.selectNight('p5', 'p7', 'heal'), /zaten verdin/);
  assert.match(room.selectNight('p5', 'p6', 'poison'), /hem iksir hem zehir/);
  assert.equal(room.viewFor('p5').night.canAct, true, 'zehir hâlâ kullanılabilir');
  assert.equal(room.selectNight('p5', 'p7', 'poison'), null);
  assert.equal(room.viewFor('p5').night.canAct, false);
  assert.match(room.selectNight('p5', 'p0', 'poison'), /zaten verdin/);
  room.destroy();
});

test('vampir takımı: kilitli vampir seçemez ve gitmez, diğeri hedefi seçer; hedefi seçen ayrılırsa yeni vampir seçebilir', (t) => {
  clock(t);
  const { room, ev } = setup(10);
  startWithRoles(room, [V, V, L, G, F, K, K, K, K, K]);
  lockNext(room, 'p2', 'p1');   // 2. gece p1'in kapısı kilitli
  assert.deepEqual(of(ev, 'locked').pop().to, ['p1']);
  assert.match(room.selectNight('p1', 'p5'), /Kapın dışarıdan kilitlendi/);
  assert.equal(room.viewFor('p1').night.locked, true);
  assert.equal(room.selectNight('p3', 'p1'), null);   // gözcü kilitli vampirin evini izler
  assert.equal(room.selectNight('p0', 'p5'), null);
  assert.deepEqual(room.viewFor('p1').night.teamTarget, { targetId: 'p5', by: 'p0', byName: 'Oyuncu0' });
  assert.deepEqual(room.viewFor('p1').night.team.map((x) => x.targetId), ['p5', null], 'kilitli vampir gitmedi');
  assert.deepEqual(room.viewFor('p3').night.watch, {
    targetId: 'p1', dark: false, visitors: [], count: 0, blockedCount: 0, ownerOut: false, ownerWent: null,
  });
  room.endNight();
  assert.equal(room.players.get('p5').alive, false);

  // Hedefi seçen tek vampir gece ayrılırsa iftiracı dönüşür ve yeni hedef seçebilir.
  const { room: r2 } = setup(8);
  startWithRoles(r2, [V, F, K, K, K, K, K, K]);
  assert.equal(r2.selectNight('p0', 'p3'), null);
  r2.removePlayer('p0');
  assert.equal(r2.players.get('p1').role, V);
  assert.equal(r2.viewFor('p1').night.canAct, true);
  assert.equal(r2.selectNight('p1', 'p4'), null);
  r2.endNight();
  assert.equal(r2.players.get('p4').alive, false);
  assert.equal(r2.players.get('p3').alive, true);
  room.destroy();
  r2.destroy();
});

// ---------- gardiyan ----------

test('gardiyan: kilit sadece gündüz, kendi kapısı ve dünkü kapı olmaz, değiştirilebilir, null ile vazgeçilir', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, L, D, K, K, K, K, K]);
  assert.match(room.lockHouse('p1', 'p3'), /sadece gündüz/, '1. gece kilit yok');
  assert.match(room.selectNight('p1', 'p3'), /gündüz/);
  assert.equal(room.nightLock, null);
  room.endNight();
  assert.match(room.lockHouse('p2', 'p3'), /Sadece gardiyan/);
  assert.match(room.lockHouse('p1', 'p1'), /Kendi kapını/);
  assert.equal(room.lockHouse('p1', 'p3'), null);
  assert.equal(room.lockHouse('p1', 'p4'), null, 'gün bitene kadar değişebilir');
  assert.deepEqual(room.viewFor('p1').day.lock, { targetId: 'p4', lastTargetId: null });
  assert.equal(room.viewFor('p2').day.lock, null, 'başkası kilidi görmez');
  assert.equal(room.lockHouse('p1', null), null);
  assert.equal(room.dayLock, null);
  assert.equal(room.lockHouse('p1', 'p4'), null);
  room.endDay();
  assert.deepEqual(room.nightLock, { targetId: 'p4', by: 'p1' });
  assert.equal(room.viewFor('p1').night.mySelection, 'p4');
  assert.equal(room.viewFor('p1').night.canAct, false);
  const locked = of(ev, 'locked').pop();
  assert.deepEqual(locked.to, ['p4']);
  assert.equal(locked.text, 'Kapın dışarıdan kilitlendi. Bu gece evinden çıkamazsın.');
  room.endNight();
  assert.match(room.lockHouse('p1', 'p4'), /iki gece üst üste/);
  assert.deepEqual(room.viewFor('p1').day.lock, { targetId: null, lastTargetId: 'p4' });
  assert.equal(room.lockHouse('p1', 'p5'), null);
  room.destroy();
});

test('gardiyan gündüz asılırsa seçtiği kilit uygulanmaz', (t) => {
  clock(t);
  const { room } = setup(8);
  startWithRoles(room, [V, L, D, K, K, K, K, K]);
  room.endNight();
  room.lockHouse('p1', 'p3');
  for (const id of ['p2', 'p3', 'p4']) room.vote(id, 'p1');
  room.endDay();
  assert.equal(room.players.get('p1').alive, false);
  assert.equal(room.phase, 'night');
  assert.equal(room.nightLock, null);
  room.destroy();
});

test('vampirin kapısı kilitlenirse: tek vampir çıkamaz, o gece kimse ölmez, gardiyan kimsenin zorlamadığını öğrenir', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, L, D, K, K, K, K, K]);
  lockNext(room, 'p1', 'p0');
  assert.deepEqual(of(ev, 'locked').pop().to, ['p0']);
  assert.match(room.selectNight('p0', 'p3'), /kilitlendi/);
  assert.equal(room.viewFor('p0').night.canAct, false);
  const safeBefore = of(ev, 'safe').length;
  room.endNight();
  assert.equal(of(ev, 'safe').length, safeBefore + 1, 'o gece kimse ölmedi');
  const report = of(ev, 'lockreport').pop();
  assert.deepEqual(report.to, ['p1']);
  assert.equal(report.count, 0);
  assert.match(report.text, /kimse zorlamadı/);
  room.destroy();
});

test('kilitli doktor koruyamaz; kilitli eve gelen vampir hemen geri döner, kimse ölmez, gardiyan 1 kişi sayar', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, L, D, G, K, K, K, K]);
  lockNext(room, 'p1', 'p2');
  assert.match(room.selectNight('p2', 'p2'), /kilitlendi/);
  assert.equal(room.selectNight('p3', 'p2'), null);   // gözcü kilitli evi izler
  assert.equal(room.selectNight('p0', 'p2'), null);
  const bounced = of(ev, 'bounced');
  assert.equal(bounced.length, 1);
  assert.deepEqual(bounced[0].to, ['p0']);
  assert.equal(bounced[0].title, 'Kapı kilitliydi');
  assert.deepEqual(room.viewFor('p0').night.bounced, true);
  assert.match(room.players.get('p0').notes.pop().text, /kilitliydi/);
  // Gözcü kapıdan döneni canlı görür.
  assert.deepEqual(room.viewFor('p3').night.watch.visitors, [{ id: 'p0', blocked: true }]);
  assert.equal(room.viewFor('p3').night.watch.ownerOut, false);
  room.endNight();
  assert.equal(room.players.get('p2').alive, true);
  const report = of(ev, 'lockreport').pop();
  assert.equal(report.count, 1);
  assert.match(report.text, /1 kişi zorladı/);
  const watch = of(ev, 'watch').pop();
  assert.deepEqual(watch.visitors, ['p0']);
  assert.deepEqual(watch.blocked, ['p0']);
  assert.match(watch.text, /Kilitli kapıdan dönenler: Oyuncu0/);
  // Kilit gizli: herkese açık duyurularda ve günlükte geçmez.
  for (const a of ev.announces.filter((x) => !x.to)) assert.doesNotMatch(`${a.title} ${a.text} ${a.story || ''}`, /kilit/i);
  assert.ok(ev.narrated.every((n) => !JSON.stringify(n.input).includes('lock')), 'motora kilit bilgisi gitmez');
  room.destroy();
});

test('kilit gardiyan o gece ölse de tutar; ölü gardiyan rapor almaz', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, L, W, K, K, K, K, K]);
  lockNext(room, 'p1', 'p4');
  assert.equal(room.selectNight('p2', 'p1', 'poison'), null);
  assert.equal(room.selectNight('p0', 'p4'), null);
  room.endNight();
  assert.equal(room.players.get('p1').alive, false, 'gardiyan zehirlendi');
  assert.equal(room.players.get('p4').alive, true, 'kilit yine de tuttu');
  assert.equal(of(ev, 'lockreport').length, 0);
  room.destroy();
});

test('kilitli eve gelen kahin ve cadının eylemi etkisiz, iksir harcanmaz', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, L, S, W, K, K, K, K]);
  lockNext(room, 'p1', 'p4');
  room.selectNight('p2', 'p4');
  room.selectNight('p3', 'p4', 'heal');
  assert.equal(of(ev, 'bounced').length, 2);
  room.endNight();
  assert.equal(of(ev, 'seer').length, 0, 'kahin içeri giremedi');
  assert.equal(room.witchUsed.heal, false);
  assert.equal(of(ev, 'lockreport').pop().count, 2);
  room.destroy();
});

// ---------- gözcü ----------

test('gözcü: ev sahibinin nereye gittiğini ve ölüm olan evleri görür', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, D, G, K, K, K, K, K]);
  room.selectNight('p2', 'p0');        // gözcü vampirin evini izler
  room.selectNight('p0', 'p4');        // vampir p4'e gider
  room.selectNight('p1', 'p5');        // doktor p5'e gider
  assert.deepEqual(room.viewFor('p2').night.watch, {
    targetId: 'p0', dark: false, visitors: [], count: 0, blockedCount: 0, ownerOut: true, ownerWent: 'p4',
  });
  room.endNight();
  const watch = of(ev, 'watch').pop();
  assert.equal(watch.ownerWent, 'p4');
  assert.deepEqual(watch.deathAt, ['p4']);
  assert.match(watch.text, /Oyuncu0 gece evinden çıkıp Oyuncu4'ün evine gitti\..*Oyuncu4'ün evinden ölüm haberi geldi/);
  assert.equal(of(ev, 'watch')[0].to.length, 1);
  room.destroy();
});

test('rüzgârda gözcü sadece gölge sayısını görür; tipide gözcü çıkamaz, vampirler dolaşır, kilit tutar', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, L, G, D, K, K, K, K]);
  room.endNight();
  room.lockHouse('p1', 'p5');
  room.forceEvent('ruzgar');
  room.endDay();
  assert.equal(room.event.id, 'ruzgar');
  const evAnn = of(ev, 'event').pop();
  assert.equal(evAnn.to, null, 'olay herkese duyurulur');
  assert.deepEqual(evAnn.event, { id: 'ruzgar', name: EVENTS.ruzgar.name, desc: EVENTS.ruzgar.desc, phase: 'night' });
  assert.deepEqual(room.viewFor('p4').room.event, evAnn.event);
  room.selectNight('p2', 'p3');           // gözcü doktorun evini izler
  room.selectNight('p3', 'p5');           // doktor kilitli eve gider
  room.selectNight('p0', 'p3');           // vampir doktorun evine
  const w = room.viewFor('p2').night.watch;
  assert.deepEqual(w, {
    targetId: 'p3', dark: true, visitors: [{ id: null, blocked: false }], count: 1, blockedCount: 0, ownerOut: true, ownerWent: null,
  });
  room.endNight();
  assert.equal(room.event, null, 'gece olayı sabah biter');
  const watch = of(ev, 'watch').pop();
  assert.equal(watch.dark, true);
  assert.deepEqual(watch.visitors, []);
  assert.equal(watch.ownerWent, null);
  assert.match(watch.text, /1 gölge geldi.*Ev sahibi gece dışarı çıktı/);
  assert.doesNotMatch(watch.text, /Oyuncu0|Oyuncu5/);

  // Tipi: köy rolleri çıkamaz, vampir dolaşır; kilit yine tutar.
  room.lockHouse('p1', 'p6');
  room.forceEvent('tipi');
  room.endDay();
  assert.equal(room.event.id, 'tipi');
  assert.match(room.selectNight('p2', 'p4'), /Tipi var/);
  assert.equal(room.players.get('p3').alive, false, 'doktor rüzgârlı gecede öldü');
  assert.equal(room.viewFor('p2').night.canAct, false);
  assert.equal(room.selectNight('p0', 'p6'), null);
  assert.equal(of(ev, 'bounced').pop().to[0], 'p0');
  room.endNight();
  assert.equal(room.players.get('p6').alive, true);
  room.destroy();
});

// ---------- köy olayları ----------

test('kısa gece ve ayaz süreleri yarıya indirir; diğer süreler değişmez', (t) => {
  clock(t);
  const { room } = setup(8);
  startWithRoles(room, [V, D, K, K, K, K, K, K]);
  room.endNight();
  room.forceEvent('kisa-gece');
  room.endDay();
  assert.equal(room.deadline, Date.now() + NIGHT_WALK_MS + 15000);
  assert.equal(room.timerFrom, Date.now() + NIGHT_WALK_MS);
  room.endNight();
  assert.equal(room.deadline, Date.now() + 120000, 'normal gün');
  room.forceEvent('ayaz');
  room.endDay();
  assert.equal(room.deadline, Date.now() + NIGHT_WALK_MS + 30000, 'normal gece');
  assert.equal(room.event, null, 'gündüz olayı gece etkin değil');
  room.endNight();
  assert.equal(room.event.id, 'ayaz');
  assert.equal(room.deadline, Date.now() + 60000);
  room.destroy();
});

test('sis: kimin kime oy verdiği kimseye gösterilmez, sayılar ve kendi oyun görünür; motora oy kaydı gitmez', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, D, K, K, K, K, K, K]);
  room.forceEvent('sis');
  room.endNight();
  assert.equal(room.event.id, 'sis');
  const recorded = [];
  const rec = room.storyRecord.bind(room);
  room.storyRecord = (m, input) => { if (m === 'vote') recorded.push(input); return rec(m, input); };
  room.vote('p2', 'p0');
  room.vote('p3', 'p0');
  room.vote('p4', 'sleep');
  for (const id of ['p0', 'p2', 'p5']) {
    const d = room.viewFor(id).day;
    assert.equal(d.secret, true);
    assert.deepEqual(d.votes, {});
    assert.deepEqual(d.voted, []);
    assert.deepEqual(d.sleeping, []);
    assert.deepEqual(d.counts, { p0: 2 });
    assert.equal(d.votedCount, 3);
    assert.equal(d.sleepers, 1);
  }
  assert.equal(room.viewFor('p2').day.myVote, 'p0');
  assert.equal(room.viewFor('p4').day.myVote, 'sleep');
  assert.deepEqual(recorded, []);
  room.endDay();
  const hanged = ev.narrated.find((n) => n.method === 'hanged');
  assert.deepEqual(hanged.input.ballots, []);
  assert.equal(hanged.input.votes, 2);
  assert.equal(hanged.input.secret, true);
  room.destroy();
});

test('mahkeme: iki sanık savunma yapar, sonra yalnızca ikisi arasında oy; Hızlı Uyu yok; motor çağrıları', (t) => {
  clock(t);
  const { room, ev } = setup(8);
  startWithRoles(room, [V, D, K, K, K, K, K, K]);
  room.forceEvent('mahkeme');
  room.endNight();
  assert.equal(room.event.id, 'mahkeme');
  for (const id of ['p1', 'p2', 'p3']) room.vote(id, 'p4');
  for (const id of ['p4', 'p5']) room.vote(id, 'p6');
  room.vote('p6', 'p7');
  room.endDay();
  assert.equal(room.phase, 'trial');
  assert.deepEqual(room.trial.accused, ['p4', 'p6']);
  assert.equal(room.trial.step, 'defense');
  assert.equal(room.trial.speaker, 'p4');
  assert.deepEqual(room.viewFor('p0').room.trial, { step: 'defense', accused: ['p4', 'p6'], counts: { p4: 3, p6: 2, p7: 1 }, speaker: 'p4' });
  assert.match(room.vote('p1', 'p4'), /Savunmalar bitmeden/);
  assert.equal(room.chat('p4', 'ben masumum').channel, 'genel', 'sanık konuşabilir');
  t.mock.timers.tick(TRIAL_TURN_MS);
  assert.equal(room.trial.speaker, 'p6');
  t.mock.timers.tick(TRIAL_TURN_MS);
  assert.equal(room.trial.step, 'vote');
  assert.equal(room.deadline, Date.now() + TRIAL_VOTE_MS);
  assert.match(room.vote('p1', 'p7'), /iki sanıktan/);
  assert.match(room.vote('p1', 'sleep'), /Hızlı Uyu yok/);
  assert.match(room.vote('p4', 'p4'), /Kendine/);
  for (const id of ['p0', 'p1', 'p2', 'p4']) assert.equal(room.vote(id, 'p6'), null);
  for (const id of ['p3', 'p5', 'p6', 'p7']) room.vote(id, 'p4');
  assert.equal(room.phase, 'trial', 'herkes oy verdi, kısa süre sonra sonuç');
  room.vote('p7', 'p6');   // oy değiştirme serbest
  t.mock.timers.tick(3000);
  assert.equal(room.players.get('p6').alive, false);
  assert.equal(room.phase, 'night');
  const hanged = of(ev, 'hanged').pop();
  assert.equal(hanged.trial, true);
  assert.match(hanged.text, /Oyuncu6 5 oyla/);
  const methods = ev.narrated.map((n) => n.method);
  const ti = methods.indexOf('trial');
  assert.deepEqual(ev.narrated[ti].input.defendants, ['p4', 'p6']);
  assert.deepEqual(ev.narrated.filter((n) => n.method === 'defense').map((n) => n.input.id), ['p4', 'p6']);
  const h = ev.narrated.find((n) => n.method === 'hanged');
  assert.equal(h.input.trial, true);
  assert.equal(h.input.ballots.length, 8, 'yeniden oylama pusulaları');
  assert.deepEqual(of(ev, 'trial').map((a) => a.step), ['start', 'defense', 'defense', 'vote']);
  room.destroy();
});

test('mahkeme eşitlikleri: yeniden oylamada eşitlik → kimse asılmaz; ikincilikte eşitlik kurayla; tek aday → normal karar', (t) => {
  clock(t);
  // Yeniden oylamada eşitlik.
  const { room, ev } = setup(8);
  startWithRoles(room, [V, D, K, K, K, K, K, K]);
  room.forceEvent('mahkeme');
  room.endNight();
  room.vote('p1', 'p4');
  room.vote('p2', 'p5');
  room.vote('p3', 'p4');
  room.endDay();
  assert.deepEqual(room.trial.accused, ['p4', 'p5']);
  room.startTrialVote();
  room.vote('p1', 'p4');
  room.vote('p2', 'p5');
  room.endTrial();
  assert.equal(of(ev, 'nohang').pop().trial, true);
  assert.equal(ev.narrated.find((n) => n.method === 'noHang').input.trial, true);
  assert.ok(room.players.get('p4').alive && room.players.get('p5').alive);
  room.destroy();

  // İkinci sırada eşitlik: iki aday da zamanla seçilir.
  const seconds = new Set();
  for (let i = 0; i < 40 && seconds.size < 2; i++) {
    const { room: r } = setup(8);
    startWithRoles(r, [V, D, K, K, K, K, K, K]);
    r.forceEvent('mahkeme');
    r.endNight();
    r.vote('p1', 'p4'); r.vote('p2', 'p4'); r.vote('p3', 'p5'); r.vote('p6', 'p7');
    r.endDay();
    assert.equal(r.trial.accused[0], 'p4');
    seconds.add(r.trial.accused[1]);
    r.destroy();
  }
  assert.deepEqual([...seconds].sort(), ['p5', 'p7']);

  // Tek kişi oy aldıysa mahkeme kurulmaz, normal karar.
  const { room: r3 } = setup(8);
  startWithRoles(r3, [V, D, K, K, K, K, K, K]);
  r3.forceEvent('mahkeme');
  r3.endNight();
  r3.vote('p1', 'p4'); r3.vote('p2', 'p4');
  r3.endDay();
  assert.equal(r3.players.get('p4').alive, false);
  assert.equal(r3.phase, 'night');
  // Hızlı Uyu çoğunluktaysa mahkeme yok.
  r3.forceEvent('mahkeme');
  r3.endNight();
  r3.vote('p1', 'p5'); r3.vote('p2', 'p6'); r3.vote('p3', 'sleep'); r3.vote('p5', 'sleep'); r3.vote('p6', 'sleep');
  r3.endDay();
  assert.equal(r3.phase, 'night');
  r3.destroy();
});

test('mahkeme 6 kişiden az kalınca sabah iptal olur', (t) => {
  clock(t);
  const { room, ev } = setup(6);
  startWithRoles(room, [V, D, K, K, K, K]);
  room.forceEvent('mahkeme');
  room.selectNight('p0', 'p3');
  room.endNight();
  assert.equal(room.event, null);
  assert.equal(of(ev, 'event').length, 0);
  room.destroy();
});

test('olay kuralları: kapalıyken yok, 1. turda yok, aralık, art arda aynı olay yok, tipi ve mahkeme şartları', () => {
  const always = () => 0;   // şans her zaman tutar, ilk seçenek seçilir
  const base = { round: 4, alive: 8, evil: 2, rng: always };
  assert.equal(chooseEvent({ ...base, mode: 'off' }), null);
  assert.equal(chooseEvent({ ...base, mode: 'some', round: 1 }), null);
  assert.equal(chooseEvent({ ...base, mode: 'some', lastRound: 2, round: 4 }), null, 'some: 3 tur aralık');
  assert.ok(chooseEvent({ ...base, mode: 'some', lastRound: 1, round: 4 }));
  assert.equal(chooseEvent({ ...base, mode: 'often', lastRound: 3, round: 4 }), null, 'often: 2 tur aralık');
  assert.ok(chooseEvent({ ...base, mode: 'often', lastRound: 2, round: 4 }));
  assert.equal(chooseEvent({ ...base, mode: 'often', lastId: 'tipi' }) === 'tipi', false);
  // Köy tarafı en fazla bir fazlaysa tipi yok (6 canlı, 2 kötü: 4 > 3 → olur; 5 canlı 2 kötü: 3 ≤ 3 → olmaz).
  assert.equal(chooseEvent({ ...base, mode: 'often', alive: 6, evil: 2 }), 'tipi');
  assert.notEqual(chooseEvent({ ...base, mode: 'often', alive: 5, evil: 2 }), 'tipi');
  // Mahkeme sadece 6+ canlıyla.
  const last = () => 0.999;
  const options = (alive, evil) => {
    const seen = new Set();
    for (let i = 0; i < 200; i++) {
      let n = 0;
      const id = chooseEvent({ mode: 'often', round: 5, alive, evil, rng: () => (n++ === 0 ? 0 : i / 200) });
      if (id) seen.add(id);
    }
    return seen;
  };
  assert.ok(options(6, 1).has('mahkeme'));
  assert.equal(options(5, 1).has('mahkeme'), false);
  assert.equal(chooseEvent({ ...base, mode: 'some', rng: last }), null, 'şans tutmazsa olay yok');
});

test('uzun oyunda olaylar kurallara uyar (tohumlu)', (t) => {
  clock(t);
  let s = 7;
  const rng = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (const mode of ['some', 'often']) {
    const { room, ev } = setup(14, { events: mode, eventRng: rng });
    startWithRoles(room, [V, D, K, K, K, K, K, K, K, K, K, K, K, K]);
    for (let r = 0; r < 30; r++) {
      room.endNight();
      if (room.phase === 'day') room.endDay();
      if (room.phase === 'trial') { room.startTrialVote(); room.endTrial(); }
      if (room.phase !== 'night') break;
    }
    const evs = of(ev, 'event').map((a) => ({ id: a.event.id }));
    const rounds = [];
    for (const a of ev.announces) {
      if (a.kind === 'night') rounds.push(Number.parseInt(a.title, 10));
      if (a.kind === 'event') a.round = rounds[rounds.length - 1];
    }
    const list = of(ev, 'event');
    assert.ok(list.length >= 3, `${mode}: olay çıktı (${list.length})`);
    for (let i = 1; i < list.length; i++) {
      assert.ok(list[i].round - list[i - 1].round >= (mode === 'some' ? 3 : 2), `${mode} aralık`);
      assert.notEqual(list[i].event.id, list[i - 1].event.id, 'art arda aynı olay yok');
    }
    assert.ok(list.every((a) => a.round >= 2));
    void evs;
    room.destroy();
  }
});
