'use strict';

// Gerçek sunucuyu (aynı süreçte, geçici veri klasörüyle) başlatıp hesaplarla soket üzerinden oynar.
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  startServer, http, register, client, connected, emit, wait, waitFor,
} = require('./helpers');

function connectError(socket) {
  return new Promise((resolve, reject) => {
    socket.once('connect', () => reject(new Error('bağlanmamalıydı')));
    socket.once('connect_error', (err) => resolve(err));
  });
}

test('oturum anahtarı olmayan ya da geçersiz soket "auth" hatasıyla reddedilir', async (t) => {
  const srv = await startServer(t);
  assert.equal((await connectError(client(srv, null))).message, 'auth');
  assert.equal((await connectError(client(srv, 'x'.repeat(43)))).message, 'auth');

  const { token } = await register(srv, 'Çıkan');
  const s = await connected(client(srv, token));
  const gone = new Promise((resolve) => s.once('disconnect', resolve));
  await http(srv, 'POST', '/api/auth/logout', { token });
  assert.equal(await gone, 'io server disconnect', 'çıkış yapınca açık soket kapanır');
  assert.equal((await connectError(client(srv, token))).message, 'auth');
});

test('hesaplarla oda kurma, katılma, koltuk, görünüm, oyun içi yeniden bağlanma ve istatistik', { timeout: 60000 }, async (t) => {
  const srv = await startServer(t);
  const names = ['Ahmet', 'Mehmet', 'Ayşe', 'Fatma', 'Ali'];
  const accounts = [];
  for (const name of names) accounts.push(await register(srv, name));
  const outsider = await register(srv, 'Zeynep');

  // Profil görünümü odaya taşınır; renk doluysa başka renk verilir.
  await http(srv, 'PATCH', '/api/me', { token: accounts[0].token, body: { look: { color: 5, hat: 3, skin: 9 } } });
  await http(srv, 'PATCH', '/api/me', { token: accounts[1].token, body: { look: { color: 5, hat: 7, skin: 2 } } });

  const sockets = await Promise.all(accounts.map((a) => connected(client(srv, a.token))));
  const [host, ...others] = sockets;

  assert.match((await emit(host, 'room:create', { roomName: 'x' })).error, /Oda adı/);
  const created = await emit(host, 'room:create', {
    roomName: 'Test Odası', password: 'sifre', settings: { nightSec: 15, roles: { kahin: false } },
  });
  assert.equal(created.ok, true);
  assert.equal(typeof created.playerId, 'string');
  const roomId = created.roomId;
  await waitFor(() => host.lastState);
  assert.equal(host.lastState.me.name, 'Ahmet', 'oyuncu adı hesap adıdır');
  assert.equal(host.lastState.me.userId, accounts[0].user.id);
  assert.equal(host.lastState.me.id, created.playerId);
  assert.equal(host.lastState.me.seat, 0);
  assert.deepEqual(host.lastState.me.look, { color: 5, hat: 3, skin: 9 });

  const watcher = await connected(client(srv, outsider.token));
  const list = await emit(watcher, 'rooms:watch', {});
  assert.deepEqual(list.rooms.map((r) => r.id), [roomId]);

  assert.match((await emit(others[0], 'room:join', { roomId, password: 'yanlis' })).error, /şifresi/);
  for (const s of others) {
    const res = await emit(s, 'room:join', { roomId: roomId.toLowerCase(), password: 'sifre' });
    assert.equal(res.ok, true, res.error);
    assert.equal(res.resumed, false);
  }
  await waitFor(() => host.lastState.players.length === 5);
  assert.deepEqual(host.lastState.players.map((p) => p.name), names);
  assert.deepEqual(host.lastState.players.map((p) => p.seat), [0, 1, 2, 3, 4]);
  const mehmet = host.lastState.players[1];
  assert.notEqual(mehmet.look.color, 5);
  assert.equal(mehmet.look.hat, 7);
  assert.equal(mehmet.look.skin, 2);

  // Aynı hesap ikinci sekmeden katılırsa yeni koltuk açılmaz, eski sekme düşer.
  const ayseTab2 = await connected(client(srv, accounts[2].token));
  const again = await emit(ayseTab2, 'room:join', { roomId });
  assert.equal(again.ok, true, 'koltuğu olan hesap şifresiz geri bağlanır');
  assert.equal(again.resumed, true);
  await waitFor(() => others[1].kickedWith);
  assert.equal(srv.rooms.get(roomId).players.size, 5);
  others[1] = ayseTab2;
  sockets[2] = ayseTab2;

  assert.equal((await emit(watcher, 'session:resume', { roomId })).ok, false, 'koltuğu olmayan devam edemez');

  // Lobide görünüm değiştirme profile kaydedilir; dolaşma halkaya sıkıştırılır.
  assert.equal((await emit(others[0], 'player:look', { color: 5 })).ok, false, 'başkasının rengi alınamaz');
  assert.equal((await emit(host, 'player:look', { hat: 4, skin: 10 })).ok, true);
  await srv.settle();
  assert.deepEqual((await http(srv, 'GET', '/api/me', { token: accounts[0].token })).json.user.look, { color: 5, hat: 4, skin: 10 });
  assert.equal((await emit(host, 'player:move', { x: 0.5, y: 0.5 })).ok, true);
  assert.equal((await emit(host, 'player:move', { x: 0.5, y: 0.75 })).ok, true);
  await waitFor(() => others[3].lastState.players[0].pos.y === 0.75, 2000, 'son konum yayınlanmalı');

  assert.equal((await emit(others[0], 'game:start', {})).ok, false, 'sadece oda sahibi başlatabilir');
  assert.equal((await emit(host, 'game:start', {})).ok, true);
  await waitFor(() => sockets.every((p) => p.lastState.room.phase === 'reveal'));
  assert.match((await emit(watcher, 'room:join', { roomId, password: 'sifre' })).error, /başlamış/);

  for (const p of sockets) {
    const visible = p.lastState.players.filter((x) => x.role).map((x) => x.id);
    assert.deepEqual(visible, [p.lastState.me.id], 'kimse başkasının rolünü görmemeli');
  }
  const roles = sockets.map((p) => p.lastState.me.role);
  assert.deepEqual(roles.slice().sort(), ['doktor', 'koylu', 'koylu', 'koylu', 'vampir']);

  // Rol kartı süresini beklemeden geceye geç.
  const room = srv.rooms.get(roomId);
  room.startNight();
  await waitFor(() => sockets.every((p) => p.lastState.room.phase === 'night'));
  const byRole = (role) => sockets.filter((p) => p.lastState.me.role === role);
  const [vamp] = byRole('vampir');
  const [doc] = byRole('doktor');
  const [victim, villager, villager2] = byRole('koylu');
  const victimId = victim.lastState.me.id;

  assert.equal((await emit(vamp, 'player:move', { x: 0.3, y: 0.3 })).ok, false, 'gece dolaşılamaz');
  assert.equal((await emit(vamp, 'night:select', { targetId: victimId })).ok, true);
  assert.equal((await emit(doc, 'night:select', { targetId: doc.lastState.me.id })).ok, true);
  assert.equal((await emit(villager, 'night:select', { targetId: victimId })).ok, false);
  await waitFor(() => vamp.lastState.night && vamp.lastState.night.mySelection === victimId);
  assert.equal(villager.lastState.night, null, 'köylü gece seçimlerini görmemeli');

  assert.equal((await emit(villager, 'chat:send', { text: 'selam' })).ok, false);
  assert.equal((await emit(vamp, 'chat:send', { text: 'gizli plan' })).ok, true);
  await wait(100);
  assert.equal(villager.chats.length, 0, 'vampir mesajı köylüye gitmemeli');
  assert.equal(vamp.chats[0].channel, 'vampir');

  // Oyun sırasında bağlantısı kopan oyuncu aynı hesapla geri döner (sayfa yenileme).
  const villagerIdx = sockets.indexOf(villager);
  const villagerPlayerId = villager.lastState.me.id;
  villager.close();
  await waitFor(() => host.lastState.players.find((p) => p.id === villagerPlayerId).connected === false);
  const back = await connected(client(srv, accounts[villagerIdx].token));
  const rejoin = await emit(back, 'room:join', { roomId });
  assert.equal(rejoin.ok, true, rejoin.error);
  assert.equal(rejoin.resumed, true);
  assert.equal(rejoin.playerId, villagerPlayerId);
  await waitFor(() => back.lastState && back.lastState.me.id === villagerPlayerId);
  assert.equal(back.lastState.me.role, 'koylu');
  assert.equal(back.lastState.room.phase, 'night');
  await waitFor(() => host.lastState.players.find((p) => p.id === villagerPlayerId).connected === true);

  // session:resume da aynı koltuğa bağlar.
  const v2Idx = sockets.indexOf(villager2);
  const resumedSock = await connected(client(srv, accounts[v2Idx].token));
  const resumed = await emit(resumedSock, 'session:resume', { roomId });
  assert.equal(resumed.ok, true);
  assert.equal(resumed.playerId, villager2.lastState.me.id);
  await waitFor(() => villager2.kickedWith);

  room.endNight();
  await waitFor(() => back.lastState.room.phase === 'day');
  const dead = back.lastState.players.find((p) => p.id === victimId);
  assert.equal(dead.alive, false);
  assert.equal(dead.role, 'koylu', 'ölenin rolü açıklanmalı');
  assert.equal((await emit(victim, 'player:move', { x: 0.2, y: 0.5 })).ok, false, 'gündüz kimse dolaşamaz');

  // Vampir oyundan ayrılırsa köylüler kazanır; ayrılan kaybetmiş sayılır.
  await emit(vamp, 'room:leave', {});
  await waitFor(() => back.lastState.room.phase === 'ended');
  assert.equal(back.lastState.room.winner, 'koylu');
  assert.ok(back.lastState.players.every((p) => p.role), 'oyun sonunda tüm roller açılmalı');
  assert.equal((await emit(back, 'player:move', { x: 0.7, y: 0.5 })).ok, true, 'oyun sonunda dolaşılır');

  await srv.settle();
  for (let i = 0; i < names.length; i++) {
    const { user } = (await http(srv, 'GET', '/api/me', { token: accounts[i].token })).json;
    const role = sockets[i].lastState ? sockets[i].lastState.me.role : null;
    assert.equal(user.stats.games, 1, names[i]);
    if (sockets[i] === vamp || role === 'vampir') {
      assert.equal(user.stats.wins, 0);
      assert.deepEqual(user.stats.teams.vampir, { games: 1, wins: 0 });
    } else {
      assert.equal(user.stats.wins, 1, names[i]);
      assert.deepEqual(user.stats.teams.koylu, { games: 1, wins: 1 });
    }
  }
  assert.equal((await http(srv, 'GET', '/api/me', { token: outsider.token })).json.user.stats.games, 0);
  const board = (await http(srv, 'GET', '/api/leaderboard')).json.players;
  assert.equal(board.length, 5);
  assert.equal(board[4].stats.wins, 0);
});

test('istatistik yazılamazsa oda çalışmaya devam eder', { timeout: 20000 }, async (t) => {
  const srv = await startServer(t);
  const accounts = [];
  for (const name of ['Birinci', 'İkinci', 'Üçüncü', 'Dördüncü', 'Beşinci']) accounts.push(await register(srv, name));
  const sockets = await Promise.all(accounts.map((a) => connected(client(srv, a.token))));
  const { roomId } = await emit(sockets[0], 'room:create', { roomName: 'Arıza' });
  for (const s of sockets.slice(1)) await emit(s, 'room:join', { roomId });
  srv.store.recordResults = async () => { throw new Error('disk dolu'); };
  const orig = console.error;
  const logged = [];
  console.error = (...args) => logged.push(args.join(' '));
  try {
    await emit(sockets[0], 'game:start', {});
    await waitFor(() => sockets.every((s) => s.lastState.room.phase === 'reveal'));
    const vampIdx = sockets.findIndex((s) => s.lastState.me.role === 'vampir');
    await emit(sockets[vampIdx], 'room:leave', {});
    sockets.splice(vampIdx, 1);
    await waitFor(() => sockets.every((s) => s.lastState.room.phase === 'ended'));
    await srv.settle();
  } finally {
    console.error = orig;
  }
  assert.ok(logged.some((l) => l.includes('Oyun sonucu kaydedilemedi')));
  const hostId = sockets[0].lastState.room.hostId;
  const host = sockets.find((s) => s.lastState.me.id === hostId);
  assert.equal((await emit(host, 'game:lobby', {})).ok, true, 'oda lobiye dönebilmeli');
});
