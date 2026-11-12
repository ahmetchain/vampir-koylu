'use strict';

// Gerçek sunucuyu başlatıp 5 sanal oyuncuyla soket üzerinden bir oyun oynar.
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const { spawn } = require('child_process');
const { io } = require('socket.io-client');

const PORT = 34571;
const URL = `http://localhost:${PORT}`;

function startServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn(process.execPath, [path.join(__dirname, '..', 'server.js')], {
      env: { ...process.env, PORT: String(PORT) },
    });
    proc.stdout.on('data', (d) => { if (String(d).includes('localhost')) resolve(proc); });
    proc.stderr.on('data', (d) => process.stderr.write(d));
    proc.on('error', reject);
  });
}

function client() {
  const socket = io(URL, { transports: ['websocket'], forceNew: true });
  socket.lastState = null;
  socket.chats = [];
  socket.kickedWith = null;
  socket.on('state', (s) => { socket.lastState = s; });
  socket.on('chat', (m) => socket.chats.push(m));
  socket.on('kicked', (m) => { socket.kickedWith = m; });
  return socket;
}

const emit = (socket, event, data) => new Promise((resolve) => socket.emit(event, data, resolve));
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitFor(check, timeout = 5000) {
  const started = Date.now();
  while (Date.now() - started < timeout) {
    if (check()) return;
    await wait(50);
  }
  throw new Error('Beklenen durum oluşmadı');
}

test('soket üzerinden oda kurma, katılma, gece ve gündüz akışı', { timeout: 60000 }, async (t) => {
  const server = await startServer();
  const sockets = [];
  t.after(() => {
    sockets.forEach((s) => s.close());
    server.kill();
  });
  const make = () => { const s = client(); sockets.push(s); return s; };

  const players = Array.from({ length: 5 }, make);
  const [host, ...others] = players;

  const created = await emit(host, 'room:create', { roomName: 'Test Odası', name: 'Ahmet', settings: { nightSec: 15, roles: { kahin: false } } });
  assert.equal(created.ok, true);
  host.token = created.token;

  const watcher = make();
  const list = await emit(watcher, 'rooms:watch', {});
  assert.equal(list.rooms.length, 1);
  assert.equal(list.rooms[0].id, created.roomId);

  const names = ['Mehmet', 'Ayşe', 'Fatma', 'Ali'];
  for (let i = 0; i < others.length; i++) {
    const res = await emit(others[i], 'room:join', { roomId: created.roomId, name: names[i] });
    assert.equal(res.ok, true, res.error);
    others[i].token = res.token;
  }
  const dup = await emit(make(), 'room:join', { roomId: created.roomId, name: 'ahmet' });
  assert.equal(dup.ok, false, 'aynı isimle katılınamamalı');

  await waitFor(() => host.lastState && host.lastState.players.length === 5);

  // Lobide görünüm değiştirme ve dolaşma.
  const hostColor = host.lastState.me.look.color;
  const other = await emit(others[0], 'player:look', { color: hostColor });
  assert.equal(other.ok, false, 'başkasının rengi seçilememeli');
  assert.equal((await emit(host, 'player:look', { hat: 3 })).ok, true);
  assert.equal((await emit(host, 'player:move', { x: 0.2, y: 0.6 })).ok, true);
  await waitFor(() => others[1].lastState.players[0].look.hat === 3
    && others[1].lastState.players[0].pos.x === 0.2);
  assert.equal((await emit(others[0], 'game:start', {})).ok, false, 'sadece oda sahibi başlatabilir');
  assert.equal((await emit(host, 'game:start', {})).ok, true);
  await waitFor(() => players.every((p) => p.lastState.room.phase === 'reveal'));

  // Kimse başkasının rolünü görmemeli (tek vampir olduğu için vampir de sadece kendini görür).
  for (const p of players) {
    const visible = p.lastState.players.filter((x) => x.role).map((x) => x.id);
    assert.deepEqual(visible, [p.lastState.me.id]);
  }
  const roles = players.map((p) => p.lastState.me.role);
  assert.equal(roles.filter((r) => r === 'vampir').length, 1);
  assert.equal(roles.filter((r) => r === 'doktor').length, 1);
  assert.equal(roles.filter((r) => r === 'koylu').length, 3);

  await waitFor(() => players.every((p) => p.lastState.room.phase === 'night'), 12000);
  const vamp = players.find((p) => p.lastState.me.role === 'vampir');
  const doc = players.find((p) => p.lastState.me.role === 'doktor');
  const [victim, villager] = players.filter((p) => p.lastState.me.role === 'koylu');
  const victimId = victim.lastState.me.id;

  assert.equal((await emit(vamp, 'night:select', { targetId: vamp.lastState.me.id })).ok, false);
  assert.equal((await emit(vamp, 'night:select', { targetId: victimId })).ok, true);
  assert.equal((await emit(doc, 'night:select', { targetId: doc.lastState.me.id })).ok, true);
  assert.equal((await emit(villager, 'night:select', { targetId: victimId })).ok, false);
  await waitFor(() => vamp.lastState.night && vamp.lastState.night.mySelection === victimId);
  assert.equal(villager.lastState.night, null, 'köylü gece seçimlerini görmemeli');

  assert.equal((await emit(villager, 'chat:send', { text: 'selam' })).ok, false);
  assert.equal((await emit(vamp, 'chat:send', { text: 'gizli plan' })).ok, true);
  await wait(200);
  assert.equal(villager.chats.length, 0, 'vampir mesajı köylüye gitmemeli');
  assert.equal(vamp.chats[0].channel, 'vampir');

  // Sayfa yenilenmiş gibi yeni soketle oturuma geri dön.
  const resumed = make();
  const res = await emit(resumed, 'session:resume', { roomId: created.roomId, token: villager.token });
  assert.equal(res.ok, true);
  await waitFor(() => resumed.lastState && resumed.lastState.me.id === villager.lastState.me.id);
  await waitFor(() => villager.kickedWith);
  const bad = await emit(make(), 'session:resume', { roomId: created.roomId, token: 'yanlis' });
  assert.equal(bad.ok, false);

  await waitFor(() => resumed.lastState.room.phase === 'day', 20000);
  const dayState = resumed.lastState;
  assert.equal(dayState.players.find((p) => p.id === victimId).alive, false);
  assert.equal(dayState.players.find((p) => p.id === victimId).role, 'koylu', 'ölenin rolü açıklanmalı');

  // Yaşayan herkes Hızlı Uyu derse hemen gece olur.
  const alive = [host, ...others].map((p) => (p === villager ? resumed : p))
    .filter((p) => p.lastState.me.alive);
  assert.equal(alive.length, 4);
  for (const p of alive) assert.equal((await emit(p, 'day:vote', { targetId: 'sleep' })).ok, true);
  await waitFor(() => resumed.lastState.room.phase === 'night' && resumed.lastState.room.round === 2);

  // Vampir oyundan ayrılırsa köylüler kazanır.
  await emit(vamp, 'room:leave', {});
  await waitFor(() => resumed.lastState.room.phase === 'ended');
  assert.equal(resumed.lastState.room.winner, 'koylu');
  assert.ok(resumed.lastState.players.every((p) => p.role), 'oyun sonunda tüm roller açılmalı');
});
