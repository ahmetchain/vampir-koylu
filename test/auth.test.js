'use strict';

// Hesap REST API'si: kayıt, giriş, oturum, profil, liderlik tablosu, CORS, istek sınırı, statik dosyalar.
const test = require('node:test');
const assert = require('node:assert/strict');
const { newDb } = require('pg-mem');
const { startServer, http, register, tempDir, removeDir, FAST_SCRYPT } = require('./helpers');
const { Accounts, usernameKey, hashPassword, verifyPassword } = require('../lib/auth');
const { JsonStore } = require('../lib/store-json');
const { PgStore } = require('../lib/store-pg');

test('kayıt: doğrulama kuralları ve kullanıcı bilgisi', async (t) => {
  const srv = await startServer(t);
  const bad = async (username, password, code) => {
    const res = await http(srv, 'POST', '/api/auth/register', { body: { username, password } });
    assert.equal(res.status, 400, `${username}/${password}`);
    assert.equal(res.json.ok, false);
    assert.equal(res.json.code, code);
    assert.equal(typeof res.json.error, 'string');
  };
  await bad('ab', 'gizli123', 'invalid_username');
  await bad('çok-uzun-bir-kullanıcı', 'gizli123', 'invalid_username');
  await bad('kötü!ad', 'gizli123', 'invalid_username');
  await bad('<script>', 'gizli123', 'invalid_username');
  await bad(undefined, 'gizli123', 'invalid_username');
  await bad(12345, 'gizli123', 'invalid_username');
  await bad('Geçerli', '12345', 'invalid_password');
  await bad('Geçerli', 'x'.repeat(73), 'invalid_password');
  await bad('Geçerli', 123456, 'invalid_password');

  const res = await http(srv, 'POST', '/api/auth/register', { body: { username: '  Şule   Nur ', password: 'gizli123' } });
  assert.equal(res.status, 201);
  assert.equal(res.json.ok, true);
  assert.equal(typeof res.json.token, 'string');
  const { user } = res.json;
  assert.deepEqual(Object.keys(user).sort(), ['createdAt', 'id', 'look', 'stats', 'username']);
  assert.equal(user.username, 'Şule Nur', 'boşluklar sadeleşir');
  assert.ok(!Number.isNaN(Date.parse(user.createdAt)));
  assert.deepEqual(Object.keys(user.look).sort(), ['color', 'hat', 'skin']);
  assert.deepEqual(user.stats, {
    games: 0, wins: 0,
    teams: { koylu: { games: 0, wins: 0 }, vampir: { games: 0, wins: 0 }, soytari: { games: 0, wins: 0 } },
  });
  assert.equal((await http(srv, 'POST', '/api/auth/register', { body: { username: 'a_b-c.d', password: 'x'.repeat(72) } })).status, 201);
  assert.equal((await http(srv, 'POST', '/api/auth/register', { body: '{bozuk', headers: { 'Content-Type': 'application/json' } })).json.code, 'bad_request');
});

test('kullanıcı adı büyük/küçük harf ve Türkçe harflerden bağımsız benzersizdir', async (t) => {
  const srv = await startServer(t);
  await register(srv, 'İREM');
  for (const name of ['irem', 'Irem', 'IREM', 'ırem', 'İrem']) {
    const res = await http(srv, 'POST', '/api/auth/register', { body: { username: name, password: 'gizli123' } });
    assert.equal(res.status, 409, name);
    assert.equal(res.json.code, 'username_taken');
  }
  assert.equal(usernameKey('ŞEYMA ÇİĞDEM'), 'şeyma çiğdem');
  const login = await http(srv, 'POST', '/api/auth/login', { body: { username: 'irem', password: 'gizli123' } });
  assert.equal(login.status, 200);
  assert.equal(login.json.user.username, 'İREM', 'görünen ad kayıttaki gibi kalır');
});

test('giriş: yanlış şifre ve olmayan kullanıcı aynı hatayı verir', async (t) => {
  const srv = await startServer(t);
  await register(srv, 'Mehmet', 'dogruSifre');
  const wrong = await http(srv, 'POST', '/api/auth/login', { body: { username: 'Mehmet', password: 'yanlis1' } });
  const none = await http(srv, 'POST', '/api/auth/login', { body: { username: 'Yokki', password: 'yanlis1' } });
  const empty = await http(srv, 'POST', '/api/auth/login', { body: {} });
  for (const res of [wrong, none, empty]) {
    assert.equal(res.status, 401);
    assert.equal(res.json.code, 'wrong_credentials');
  }
  assert.equal(wrong.json.error, none.json.error);
  const ok = await http(srv, 'POST', '/api/auth/login', { body: { username: ' mehmet ', password: 'dogruSifre' } });
  assert.equal(ok.status, 200);
  assert.notEqual(ok.json.token, undefined);
});

test('oturum: /api/me, görünüm güncelleme, çıkış', async (t) => {
  const srv = await startServer(t);
  const { token, user } = await register(srv, 'Ayşe');
  const second = (await http(srv, 'POST', '/api/auth/login', { body: { username: 'ayşe', password: 'gizli123' } })).json.token;

  assert.equal((await http(srv, 'GET', '/api/me')).status, 401);
  assert.equal((await http(srv, 'GET', '/api/me', { token: 'x'.repeat(43) })).json.code, 'unauthorized');
  const me = await http(srv, 'GET', '/api/me', { token });
  assert.equal(me.status, 200);
  assert.deepEqual(me.json.user, user);

  const patched = await http(srv, 'PATCH', '/api/me', { token, body: { look: { color: 4, skin: 11 } } });
  assert.equal(patched.status, 200);
  assert.deepEqual(patched.json.user.look, { color: 4, hat: user.look.hat, skin: 11 });
  for (const look of [{ color: 20 }, { hat: -1 }, { skin: 12 }, { skin: 1.5 }, { color: '3' }, {}, null, [1]]) {
    const res = await http(srv, 'PATCH', '/api/me', { token, body: { look } });
    assert.equal(res.status, 400, JSON.stringify(look));
    assert.equal(res.json.code, 'invalid_look');
  }

  assert.equal((await http(srv, 'POST', '/api/auth/logout', { token })).json.ok, true);
  assert.equal((await http(srv, 'GET', '/api/me', { token })).status, 401, 'çıkıştan sonra anahtar geçersiz');
  assert.equal((await http(srv, 'GET', '/api/me', { token: second })).status, 200, 'diğer oturum açık kalır');
  assert.equal((await http(srv, 'POST', '/api/auth/logout')).status, 401);
  assert.equal((await http(srv, 'GET', '/api/olmayan')).json.code, 'not_found');
});

test('istek sınırı: aynı IP çok deneme yaparsa 429', async (t) => {
  const srv = await startServer(t, { limits: { login: { max: 3 }, register: { max: 2 } } });
  for (let i = 0; i < 3; i++) {
    assert.equal((await http(srv, 'POST', '/api/auth/login', { body: { username: 'yok', password: 'yanlis1' } })).status, 401);
  }
  const limited = await http(srv, 'POST', '/api/auth/login', { body: { username: 'yok', password: 'yanlis1' } });
  assert.equal(limited.status, 429);
  assert.equal(limited.json.code, 'rate_limited');
  assert.ok(Number(limited.headers.get('retry-after')) > 0);

  await register(srv, 'Bir');
  await register(srv, 'Iki');
  assert.equal((await http(srv, 'POST', '/api/auth/register', { body: { username: 'Uc', password: 'gizli123' } })).status, 429);
  // Diğer uçlar sınırlanmaz.
  assert.equal((await http(srv, 'GET', '/api/leaderboard')).status, 200);
});

test('oturum süresi: 30 gün, kullanıldıkça uzar, dolunca geçersiz', async (t) => {
  const dir = tempDir();
  t.after(() => removeDir(dir));
  const store = new JsonStore({ dir });
  await store.init();
  let now = 1_000_000_000_000;
  const DAY = 24 * 60 * 60 * 1000;
  const accounts = new Accounts(store, { now: () => now, scryptOptions: FAST_SCRYPT });
  const { token } = await accounts.register('Zaman', 'gizli123');
  now += 29 * DAY;
  assert.ok(await accounts.authenticate(token), '29. gün geçerli; süre uzar');
  now += 29 * DAY;
  assert.ok(await accounts.authenticate(token), 'kullanıldığı için 58. gün hâlâ geçerli');
  now += 31 * DAY;
  assert.equal(await accounts.authenticate(token), null, '31 gün kullanılmayınca geçersiz');
  assert.equal(await accounts.authenticate('kısa'), null);
  assert.equal(await accounts.authenticate(undefined), null);
  await store.close();
});

test('şifreler scrypt ve kullanıcıya özel tuzla saklanır', async () => {
  const a = await hashPassword('aynısifre', FAST_SCRYPT);
  const b = await hashPassword('aynısifre', FAST_SCRYPT);
  assert.notEqual(a, b);
  assert.match(a, /^scrypt\$1024\$8\$1\$/);
  assert.equal(await verifyPassword('aynısifre', a), true);
  assert.equal(await verifyPassword('baskasifre', a), false);
  assert.equal(await verifyPassword('aynısifre', 'bozuk'), false);
});

test('Postgres deposuyla da kayıt/giriş/liderlik çalışır', async (t) => {
  const db = newDb();
  const { Pool } = db.adapters.createPg();
  const store = new PgStore({ pool: new Pool() });
  await store.init();
  const srv = await startServer(t, { store });
  const { token, user } = await register(srv, 'Postacı');
  await srv.accounts.recordResults([{ userId: user.id, team: 'vampir', won: true }]);
  const me = await http(srv, 'GET', '/api/me', { token });
  assert.deepEqual(me.json.user.stats.teams.vampir, { games: 1, wins: 1 });
  const board = await http(srv, 'GET', '/api/leaderboard?limit=5');
  assert.deepEqual(board.json.players, [{ username: 'Postacı', look: user.look, stats: me.json.user.stats }]);
  assert.equal((await http(srv, 'POST', '/api/auth/login', { body: { username: 'POSTACI', password: 'gizli123' } })).status, 200);
});

test('liderlik tablosu: sadece oynayanlar, galibiyete göre, limit 1-100', async (t) => {
  const srv = await startServer(t);
  const a = await register(srv, 'Ayla');
  const b = await register(srv, 'Bekir');
  await register(srv, 'Cansu');
  await srv.accounts.recordResults([
    { userId: a.user.id, team: 'koylu', won: true },
    { userId: b.user.id, team: 'koylu', won: false },
  ]);
  const res = await http(srv, 'GET', '/api/leaderboard');
  assert.equal(res.json.ok, true);
  assert.deepEqual(res.json.players.map((p) => p.username), ['Ayla', 'Bekir']);
  assert.deepEqual(Object.keys(res.json.players[0]).sort(), ['look', 'stats', 'username']);
  assert.equal((await http(srv, 'GET', '/api/leaderboard?limit=1')).json.players.length, 1);
  assert.equal((await http(srv, 'GET', '/api/leaderboard?limit=abc')).json.players.length, 2);
});

test('CORS: CLIENT_ORIGIN adreslerine izin verilir, diğerlerine verilmez', async (t) => {
  const srv = await startServer(t, { origins: ['https://vampir.netlify.app'] });
  const pre = await http(srv, 'OPTIONS', '/api/me', {
    headers: { Origin: 'https://vampir.netlify.app', 'Access-Control-Request-Method': 'PATCH', 'Access-Control-Request-Headers': 'authorization,content-type' },
  });
  assert.equal(pre.status, 204);
  assert.equal(pre.headers.get('access-control-allow-origin'), 'https://vampir.netlify.app');
  assert.match(pre.headers.get('access-control-allow-headers'), /Authorization/);
  assert.match(pre.headers.get('access-control-allow-methods'), /PATCH/);
  const ok = await http(srv, 'GET', '/api/leaderboard', { headers: { Origin: 'https://vampir.netlify.app' } });
  assert.equal(ok.headers.get('access-control-allow-origin'), 'https://vampir.netlify.app');
  const other = await http(srv, 'GET', '/api/leaderboard', { headers: { Origin: 'https://kotu.example' } });
  assert.equal(other.headers.get('access-control-allow-origin'), null);
});

test('statik dosyalar sıkıştırılır, index.html önbelleğe alınmaz, sağlık ucu çalışır', async (t) => {
  const srv = await startServer(t);
  const index = await fetch(`${srv.url}/`, { headers: { 'Accept-Encoding': 'gzip' } });
  assert.equal(index.status, 200);
  assert.equal(index.headers.get('cache-control'), 'no-cache');
  assert.equal(index.headers.get('content-encoding'), 'gzip');
  assert.ok(index.headers.get('etag'));
  await index.arrayBuffer();
  const health = await http(srv, 'GET', '/healthz');
  assert.deepEqual(health.json, { ok: true, rooms: 0, store: 'json' });
  const lan = await http(srv, 'GET', '/lan.json');
  assert.ok(Array.isArray(lan.json.addresses));
});
