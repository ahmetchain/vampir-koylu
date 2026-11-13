'use strict';

// Botlar: ekleme/çıkarma, oda sahipliği, boş oda kapanışı, zamanlayıcı temizliği, kural uyumu,
// istatistik dışı kalma ve insan + bot oyunlarının sonuna kadar oynanması (sahte saatle).
const test = require('node:test');
const assert = require('node:assert/strict');
const { Room, ROLE, isEvil, OPTIONAL_ROLES, MAX_PLAYERS } = require('../game');
const { BOT_LINES, BOT_GREETINGS, BOT_NAMES } = require('../lib/bots');
const {
  startServer, http, register, client, connected, emit, waitFor,
} = require('./helpers');

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

const ROLE_WORDS = ['vampir', 'iftira', 'doktor', 'kahin', 'gözcü', 'cadı', 'avcı', 'muhtar', 'soytarı', 'köylü'];

function makeRoom({ seed = 'bot', settings = {}, humans = 1, bots = 0 } = {}) {
  const ev = { announces: [], chats: [], finished: [], emptied: 0, updates: 0, botErrors: [] };
  const room = new Room({
    id: 'BOTLU',
    name: 'Botlu',
    settings,
    botRng: mulberry(seed),
    storySeed: `hikaye-${seed}`,
    hooks: {
      update() { ev.updates += 1; },
      announce(r, a, to) { ev.announces.push({ ...a, to }); },
      empty() { ev.emptied += 1; },
      finished(r, res) { ev.finished.push(res); },
      chat(r, recipients, message) { ev.chats.push({ recipients, message, phase: r.phase }); },
    },
  });
  for (let i = 0; i < humans; i++) {
    assert.equal(room.addPlayer(`h${i}`, `İnsan${i}`, { userId: `u${i}` }), null);
    room.connect(`h${i}`, `s${i}`);
  }
  for (let i = 0; i < bots; i++) assert.ok(room.addBot('h0').id);
  return { room, ev };
}

// Botların çağırdığı Room metotlarını sarar: hepsi geçerli olmalı, kötü botlar takımını hedeflememeli.
function watchBots(room, ev) {
  for (const method of ['selectNight', 'vote', 'shoot', 'move']) {
    const orig = room[method].bind(room);
    room[method] = (byId, ...args) => {
      const p = room.players.get(byId);
      const before = p && p.role;
      const target = room.players.get(args[0]);
      const res = orig(byId, ...args);
      if (p && p.bot) {
        if (res !== null) ev.botErrors.push(`${method} ${p.name} (${before}) -> ${args[0]}: ${res}`);
        if (method === 'selectNight' && isEvil(before) && target && isEvil(target.role)) {
          ev.botErrors.push(`kötü bot takımını hedefledi: ${p.name} -> ${target.name}`);
        }
      }
      return res;
    };
  }
}

// Sahte saatle oyunu sonuna kadar ilerletir; insan isteğe bağlı rastgele oynar.
function playToEnd(t, room, { humanPlays = false, rng = mulberry('insan'), limitMs = 3 * 3600 * 1000 } = {}) {
  let elapsed = 0;
  while (room.phase !== 'ended' && elapsed < limitMs) {
    const h = room.players.get('h0');
    if (humanPlays && h && h.alive && !h.left) {
      const others = [...room.players.values()].filter((p) => p.alive && p.id !== 'h0');
      const pick = others[Math.floor(rng() * others.length)];
      if (room.phase === 'day' && !room.dayVotes.has('h0') && rng() < 0.05 && pick) room.vote('h0', pick.id);
      if (room.phase === 'night' && rng() < 0.05 && pick) room.selectNight('h0', pick.id);
      if (room.phase === 'hunter' && room.hunterId === 'h0' && pick) room.shoot('h0', pick.id);
    }
    t.mock.timers.tick(1000);
    elapsed += 1000;
  }
  return elapsed;
}

function enableClock(t) {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 1_700_000_000_000 });
}

// ---------- ekleme, çıkarma, görünüm ----------

test('bot ekleme: sadece oda sahibi, sadece lobide, oda doluysa olmaz; bot herkese açıkça görünür', (t) => {
  enableClock(t);
  const { room, ev } = makeRoom({ humans: 2 });
  assert.match(room.addBot('h1').error, /oda sahibi/);
  const ids = [];
  for (let i = 0; i < 6; i++) ids.push(room.addBot('h0').id);
  const bots = ids.map((id) => room.players.get(id));
  for (const b of bots) {
    assert.equal(b.bot, true);
    assert.equal(b.userId, null);
    assert.equal(b.connected, true);
    assert.equal(b.socketId, null);
    assert.match(b.name, /^Bot \S+$/);
    assert.ok(BOT_NAMES.includes(b.name.slice(4)));
  }
  assert.equal(new Set(bots.map((b) => b.name)).size, 6, 'bot adları benzersiz');
  assert.equal(new Set([...room.players.values()].map((p) => p.look.color)).size, 8, 'renkler boş renklerden');
  assert.deepEqual([...room.players.values()].map((p) => p.seat), [0, 1, 2, 3, 4, 5, 6, 7]);
  for (const viewer of ['h0', 'h1']) {
    const v = room.viewFor(viewer);
    assert.deepEqual(v.players.map((p) => p.bot), [false, false, true, true, true, true, true, true]);
  }
  assert.equal(room.publicInfo().bots, 6);
  assert.equal(room.publicInfo().players, 8);

  // Lobide selamlaşma: sadece genel kanal, sadece bilinen satırlar.
  t.mock.timers.tick(5000);
  for (const c of ev.chats) {
    assert.ok(BOT_GREETINGS.includes(c.message.text));
    assert.equal(c.message.channel, 'genel');
  }

  // Botu çıkarma, oda doldurma, oyun sırasında ekleme.
  assert.equal(room.kick('h0', ids[0]), null);
  assert.equal(room.players.has(ids[0]), false);
  while (room.players.size < MAX_PLAYERS) assert.ok(room.addBot('h0').id);
  assert.match(room.addBot('h0').error, /dolu/);
  room.kick('h0', ids[1]);
  room.start('h0');
  assert.match(room.addBot('h0').error, /lobide/);
  room.destroy();
});

test('oda sahipliği asla bota geçmez; insan kalmayınca oda hemen kapanır (lobide)', (t) => {
  enableClock(t);
  const { room, ev } = makeRoom({ humans: 2, bots: 4 });
  room.removePlayer('h0');
  assert.equal(room.hostId, 'h1', 'yetki diğer insana geçer, bota değil');
  assert.equal(ev.emptied, 0);
  room.removePlayer('h1');
  assert.equal(ev.emptied, 1, 'sadece botlar kaldı: oda kapandı');
  assert.equal(room.bots.timers.size, 0, 'bot zamanlayıcıları temizlendi');
  const updates = ev.updates;
  t.mock.timers.tick(10 * 60 * 1000);
  assert.equal(ev.updates, updates, 'kapanan odada artık hiçbir şey olmaz');
  assert.equal(ev.emptied, 1);
});

test('oyun ortasında son insan ayrılırsa oda hemen kapanır ve botlar durur', (t) => {
  enableClock(t);
  const { room, ev } = makeRoom({ humans: 1, bots: 6 });
  room.start('h0');
  t.mock.timers.tick(8000);
  assert.equal(room.phase, 'night');
  assert.ok(room.bots.timers.size > 0);
  room.removePlayer('h0');
  assert.equal(ev.emptied, 1);
  assert.equal(room.bots.timers.size, 0);
  const n = ev.announces.length;
  t.mock.timers.tick(60 * 60 * 1000);
  assert.equal(ev.announces.length, n, 'kapandıktan sonra oyun ilerlemez');
});

test('insanın bağlantısı koparsa bot sahip olmaz; insan geri gelir', (t) => {
  enableClock(t);
  const { room, ev } = makeRoom({ humans: 1, bots: 4 });
  room.start('h0');
  room.disconnect('h0');
  assert.equal(room.hostId, 'h0', 'bağlı insan yok: sahiplik bota geçmez');
  assert.equal(ev.emptied, 0, 'insan ayrılmadı, sadece koptu');
  room.connect('h0', 's9');
  assert.equal(room.hostId, 'h0');
  room.destroy();
  assert.equal(room.bots.timers.size, 0);
});

test('lobiye dönünce ve bot çıkarılınca zamanlayıcılar temizlenir', (t) => {
  enableClock(t);
  const { room } = makeRoom({ humans: 1, bots: 5 });
  room.start('h0');
  t.mock.timers.tick(8000);
  const genNight = room.bots.gen;
  room.removePlayer('h0');   // tek insan → kapanış; ayrı bir odayla devam
  assert.ok(room.bots.gen > genNight);

  const { room: r2 } = makeRoom({ humans: 2, bots: 4 });
  r2.start('h0');
  [ROLE.VILLAGER, ROLE.VAMPIRE, ROLE.DOCTOR, ROLE.VILLAGER, ROLE.VILLAGER, ROLE.VILLAGER]
    .forEach((role, i) => { [...r2.players.values()][i].role = role; });
  r2.removePlayer('h1');   // vampir ayrıldı → köy kazandı
  assert.equal(r2.phase, 'ended');
  assert.equal(r2.backToLobby('h0'), null);
  assert.equal(r2.phase, 'lobby');
  assert.ok(r2.bots.timers.size <= 1, 'lobide en fazla tek dolaşma zamanlayıcısı');
  const bot = [...r2.players.values()].find((p) => p.bot);
  assert.equal(r2.kick('h0', bot.id), null);
  t.mock.timers.tick(60000);
  assert.equal(r2.players.has(bot.id), false);
  r2.destroy();
  assert.equal(r2.bots.timers.size, 0);
});

// ---------- oyunlar ----------

test('1 insan + 4 bot: insan hiç oynamasa da oyun biter; botlar sadece geçerli hamle yapar', (t) => {
  enableClock(t);
  const { room, ev } = makeRoom({ humans: 1, bots: 4, seed: 'pasif' });
  watchBots(room, ev);
  assert.equal(room.start('h0'), null);
  const ms = playToEnd(t, room);
  assert.equal(room.phase, 'ended', `bitmedi (${ms} ms)`);
  assert.deepEqual(ev.botErrors, []);
  room.destroy();
});

test('insan ilk gece ölse de oyun makul hızda sonuna kadar sürer', (t) => {
  enableClock(t);
  for (let g = 0; g < 10; g++) {
    const { room, ev } = makeRoom({ humans: 1, bots: 6, seed: `erken-${g}` });
    watchBots(room, ev);
    room.start('h0');
    t.mock.timers.tick(8000);
    room.players.get('h0').alive = false;   // insan ilk gece öldürülmüş gibi
    const ms = playToEnd(t, room, { limitMs: 30 * 60 * 1000 });
    assert.equal(room.phase, 'ended', `oyun ${g} 30 dakikada bitmedi`);
    assert.deepEqual(ev.botErrors, []);
    room.destroy();
  }
});

for (const humanPlays of [false, true]) {
  test(`tohumlu oyunlar (insan ${humanPlays ? 'oynuyor' : 'izliyor'}, bütün roller açık): hepsi biter, kural dışı hamle yok, bot sohbeti sızdırmaz`, (t) => {
    enableClock(t);
    const errors = [];
    const origError = console.error;
    console.error = (...a) => errors.push(a.join(' '));
    const durations = [];
    try {
      for (let g = 0; g < 24; g++) {
        const bots = 4 + (g % 12);
        const settings = { roles: Object.fromEntries(OPTIONAL_ROLES.map((r) => [r, true])) };
        const { room, ev } = makeRoom({ humans: 1, bots, seed: `oyun-${humanPlays}-${g}`, settings });
        watchBots(room, ev);
        room.start('h0');
        durations.push(playToEnd(t, room, { humanPlays, rng: mulberry(`insan-${g}`) }));
        assert.equal(room.phase, 'ended', `oyun ${g} bitmedi`);
        assert.deepEqual(ev.botErrors, [], `oyun ${g}`);
        // Bot sohbeti: sadece sabit satırlar, sadece gündüz/lobide genel kanalda, sadece yaşayan bot.
        for (const c of ev.chats) {
          const from = room.players.get(c.message.fromId);
          assert.ok(from && from.bot);
          assert.equal(c.message.channel, 'genel');
          assert.ok(['day', 'lobby'].includes(c.phase), c.phase);
          assert.ok(BOT_LINES.includes(c.message.text) || BOT_GREETINGS.includes(c.message.text));
        }
        // Cadı iksirleri en fazla birer kez (kural) ve evrensel kural: oyun sonu bildirimi istatistiksiz.
        assert.equal(ev.finished.length, 1);
        assert.equal(ev.finished[0].ranked, false, 'botlu oyun istatistiğe yazılmaz');
        room.destroy();
        assert.equal(room.bots.timers.size, 0);
      }
    } finally {
      console.error = origError;
    }
    assert.deepEqual(errors, [], 'hiçbir bot hamlesi hata fırlatmadı');
    const avg = Math.round(durations.reduce((a, b) => a + b, 0) / durations.length / 1000);
    t.diagnostic(`ortalama oyun süresi (sahte saat): ${avg} sn, en uzun ${Math.max(...durations) / 1000} sn`);
  });
}

test('bot sohbet satırları rol adı ya da gece bilgisi içermez', () => {
  for (const line of [...BOT_LINES, ...BOT_GREETINGS]) {
    const lower = line.toLocaleLowerCase('tr');
    for (const w of ROLE_WORDS) assert.equal(lower.includes(w), false, `"${line}" içinde "${w}"`);
  }
});

test('hata fırlatan bot hamlesi yakalanır ve evreyi durdurmaz', (t) => {
  enableClock(t);
  const { room } = makeRoom({ humans: 1, bots: 5, seed: 'hata' });
  const errors = [];
  const origError = console.error;
  console.error = (...a) => errors.push(a.join(' '));
  room.vote = () => { throw new Error('oy kırık'); };
  room.selectNight = () => { throw new Error('gece kırık'); };
  try {
    room.start('h0');
    for (let i = 0; i < 43; i++) t.mock.timers.tick(1000);   // 8 sn kart + 4 sn eve yürüme + 30 sn gece
    assert.equal(room.phase, 'day', 'gece süresi dolunca gün geldi');
    for (let i = 0; i < 121; i++) t.mock.timers.tick(1000);
    assert.equal(room.phase, 'night', 'gün süresi dolunca gece geldi');
  } finally {
    console.error = origError;
  }
  assert.ok(errors.some((e) => e.includes('Bot hamlesi başarısız')));
  room.destroy();
});

test('botsuz oyun istatistiğe yazılır (karşılaştırma)', (t) => {
  enableClock(t);
  const { room, ev } = makeRoom({ humans: 5 });
  room.start('h0');
  [ROLE.VAMPIRE, ROLE.DOCTOR, ROLE.VILLAGER, ROLE.VILLAGER, ROLE.VILLAGER].forEach((r, i) => { room.players.get('h' + i).role = r; });
  room.removePlayer('h0');
  assert.equal(ev.finished[0].ranked, true);
  room.destroy();
});

// ---------- soket üzerinden ----------

test('soket: room:addBot, bot bayrağı, bot çıkarma ve botlu oyun istatistiğe yazılmaz', { timeout: 20000 }, async (t) => {
  const srv = await startServer(t);
  const a = await register(srv, 'Yalnızİnsan');
  const b = await register(srv, 'Misafir');
  const host = await connected(client(srv, a.token));
  const guest = await connected(client(srv, b.token));
  const { roomId } = await emit(host, 'room:create', { roomName: 'Botlu Oda' });
  await emit(guest, 'room:join', { roomId });
  assert.match((await emit(guest, 'room:addBot', {})).error, /oda sahibi/);
  const added = [];
  for (let i = 0; i < 4; i++) {
    const res = await emit(host, 'room:addBot', {});
    assert.equal(res.ok, true, res.error);
    assert.match(res.playerId, /^bot-/);
    added.push(res.playerId);
  }
  await waitFor(() => guest.lastState && guest.lastState.players.length === 6);
  for (const s of [host, guest]) {
    assert.deepEqual(s.lastState.players.map((p) => p.bot), [false, false, true, true, true, true]);
  }
  assert.equal((await emit(host, 'room:kick', { playerId: added[0] })).ok, true);
  await waitFor(() => guest.lastState.players.length === 5);
  assert.equal((await emit(host, 'room:addBot', {})).ok, true);
  const watcher = await connected(client(srv, b.token));
  void watcher;   // aynı hesabın ikinci sekmesi (rooms:watch için ayrı soket gerekmez)

  assert.equal((await emit(host, 'game:start', {})).ok, true);
  await waitFor(() => host.lastState.room.phase === 'reveal');
  srv.rooms.get(roomId).finish('koylu');
  await waitFor(() => host.lastState.room.phase === 'ended');
  await srv.settle();
  for (const tok of [a.token, b.token]) {
    assert.equal((await http(srv, 'GET', '/api/me', { token: tok })).json.user.stats.games, 0, 'botlu oyun sayılmaz');
  }
  assert.deepEqual((await http(srv, 'GET', '/api/leaderboard')).json.players, []);

  // İki insan da ayrılınca oda kapanır.
  await emit(guest, 'room:leave', {});
  await emit(host, 'room:leave', {});
  await waitFor(() => !srv.rooms.has(roomId), 2000, 'oda kapanmalı');
});

test('botlar gece hamlelerini eve yürüme bittikten sonra yapar; gündüz hiç dolaşmaz', (t) => {
  enableClock(t);
  for (let g = 0; g < 6; g++) {
    const { room } = makeRoom({ humans: 1, bots: 8, seed: `yuruyus-${g}`, settings: { roles: { gozcu: true, iftiraci: true, cadi: true } } });
    const calls = [];
    for (const method of ['selectNight', 'move']) {
      const orig = room[method].bind(room);
      room[method] = (byId, ...args) => {
        const p = room.players.get(byId);
        if (p && p.bot) calls.push({ method, phase: room.phase, now: Date.now(), timerFrom: room.timerFrom, deadline: room.deadline });
        return orig(byId, ...args);
      };
    }
    room.start('h0');
    playToEnd(t, room, { limitMs: 60 * 60 * 1000 });
    assert.equal(room.phase, 'ended');
    const nights = calls.filter((c) => c.method === 'selectNight');
    assert.ok(nights.length > 0);
    for (const c of nights) {
      assert.ok(c.now >= c.timerFrom, `gece hamlesi yürüyüş bitmeden (${c.timerFrom - c.now} ms erken)`);
      assert.ok(c.now <= c.deadline);
    }
    for (const c of calls.filter((x) => x.method === 'move')) assert.ok(['lobby', 'ended'].includes(c.phase), c.phase);
    room.destroy();
  }
});
