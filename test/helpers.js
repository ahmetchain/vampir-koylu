'use strict';

// Testlerde ortak yardımcılar: geçici veri klasörüyle aynı süreçte sunucu, HTTP ve soket istemcisi.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { io } = require('socket.io-client');
const { createGameServer } = require('../server');
const { JsonStore } = require('../lib/store-json');

// Testlerde şifre özeti hızlı olsun.
const FAST_SCRYPT = { N: 1024, r: 8, p: 1, keylen: 64, maxmem: 64 * 1024 * 1024 };

function tempDir(prefix = 'vk-test-') {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function removeDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true, maxRetries: 10, retryDelay: 50 });
}

async function startServer(t, options = {}) {
  const dir = options.dir || tempDir();
  const store = options.store || new JsonStore({ dir });
  if (!options.store) await store.init();
  const srv = createGameServer({
    store,
    authOptions: { scryptOptions: FAST_SCRYPT, ...(options.authOptions || {}) },
    origins: options.origins || [],
    limits: options.limits || {},
  });
  const port = await srv.listen(0);
  srv.url = `http://localhost:${port}`;
  srv.dir = dir;
  srv.sockets = [];
  if (t) {
    t.after(async () => {
      srv.sockets.forEach((s) => s.close());
      await srv.close();
      if (!options.dir && !options.store) removeDir(dir);
    });
  }
  return srv;
}

async function http(srv, method, url, { body, token, headers = {} } = {}) {
  const res = await fetch(srv.url + url, {
    method,
    headers: {
      ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body === undefined ? undefined : (typeof body === 'string' ? body : JSON.stringify(body)),
  });
  const text = await res.text();
  let json = null;
  try { json = JSON.parse(text); } catch { /* JSON değil */ }
  return { status: res.status, headers: res.headers, json, text };
}

async function register(srv, username, password = 'gizli123') {
  const res = await http(srv, 'POST', '/api/auth/register', { body: { username, password } });
  if (res.status !== 201) throw new Error(`Kayıt olmadı: ${username} ${res.text}`);
  return res.json;
}

// Oturum anahtarıyla bağlanan soket; gelen durum/duyuru/sohbetleri biriktirir.
function client(srv, token, { connect = true } = {}) {
  const socket = io(srv.url, { transports: ['websocket'], forceNew: true, reconnection: false, auth: token ? { token } : {}, autoConnect: connect });
  socket.lastState = null;
  socket.states = 0;
  socket.chats = [];
  socket.announces = [];
  socket.kickedWith = null;
  socket.on('state', (s) => { socket.lastState = s; socket.states += 1; });
  socket.on('chat', (m) => socket.chats.push(m));
  socket.on('announce', (a) => socket.announces.push(a));
  socket.on('kicked', (m) => { socket.kickedWith = m; });
  srv.sockets.push(socket);
  return socket;
}

function connected(socket) {
  return new Promise((resolve, reject) => {
    if (socket.connected) return resolve(socket);
    socket.once('connect', () => resolve(socket));
    socket.once('connect_error', reject);
  });
}

const emit = (socket, event, data) => new Promise((resolve) => socket.emit(event, data, resolve));
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitFor(check, timeout = 5000, what = 'Beklenen durum oluşmadı') {
  const started = Date.now();
  while (Date.now() - started < timeout) {
    if (check()) return;
    await wait(20);
  }
  throw new Error(what);
}

module.exports = {
  FAST_SCRYPT, tempDir, removeDir, startServer, http, register, client, connected, emit, wait, waitFor,
};
