'use strict';

// Ev malzemesi (look.houseMat): 0 = evin kendi duvarı; taş, kesme taş, kerpiç sıva, koyu ahşap, tuğla, mermer (puanlı),
// altın süslemeli mermer (yalnızca sahip). Her ev görünümüyle birleşir. Kilidi YALNIZCA sunucu doğrular.
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const { pathToFileURL } = require('url');
const { newDb } = require('pg-mem');
const { startServer, http, register, client, connected, emit, waitFor, tempDir, removeDir } = require('./helpers');
const { JsonStore } = require('../lib/store-json');
const { PgStore } = require('../lib/store-pg');
const { HOUSE_MATS, HOUSE_MAT_COUNT, canUseHouseMat, houseMatLockMessage, sanitizeLook } = require('../lib/houses');
const { mergeLook } = require('../lib/auth');
const { Room } = require('../game');

const OWNER = 'ahmetchain';
const room = () => new Room({ id: 'HMAT', name: 'T', settings: { events: 'off' }, hooks: { update() {}, announce() {}, empty() {} } });

test('tablo: 8 malzeme, eşikler artan (0/5/12/18/25/40/80), 7 sahibe özel; istemci tablosu aynı', async () => {
  assert.equal(HOUSE_MAT_COUNT, 8);
  assert.deepEqual(HOUSE_MATS.map((m) => m.name), ['Kendi malzemesi', 'Taş', 'Kesme taş', 'Kerpiç sıva', 'Koyu ahşap', 'Tuğla', 'Mermer', 'Altın süslemeli mermer']);
  assert.deepEqual(HOUSE_MATS.filter((m) => !m.owner).map((m) => m.min), [0, 5, 12, 18, 25, 40, 80]);
  assert.equal(HOUSE_MATS[7].owner, true);
  const data = await import(pathToFileURL(path.join(__dirname, '..', 'public', 'ui', 'data.js')).href);
  assert.deepEqual(data.HOUSE_MATS.map(({ name, min, owner }) => ({ name, min, owner })), HOUSE_MATS.map(({ name, min, owner }) => ({ name, min, owner })));
  for (const m of data.HOUSE_MATS) assert.ok(typeof m.sw === 'string' && m.sw.length > 6, 'seçici desen örneği');
});

test('kilit: misafir yalnızca 0; puan eşiği; altın süslemeli mermer puanla açılmaz, sahibe açık; aralık dışı kapalı', () => {
  assert.equal(canUseHouseMat(0, { username: null, points: 0 }), true);
  assert.equal(canUseHouseMat(1, { username: null, points: 999 }), false, 'misafir puanlıyı seçemez');
  assert.equal(canUseHouseMat(1, { username: 'Ali', points: 4 }), false);
  assert.equal(canUseHouseMat(1, { username: 'Ali', points: 5 }), true);
  assert.equal(canUseHouseMat(6, { username: 'Ali', points: 79 }), false);
  assert.equal(canUseHouseMat(6, { username: 'Ali', points: 80 }), true);
  assert.equal(canUseHouseMat(7, { username: 'Ali', points: 1e9 }), false);
  assert.equal(canUseHouseMat(7, { username: 'AhmetChain', points: 0 }), true, 'büyük/küçük harf fark etmez');
  assert.equal(canUseHouseMat(HOUSE_MAT_COUNT, { username: OWNER }), false);
  assert.equal(canUseHouseMat(-1, { username: OWNER }), false);
  assert.equal(canUseHouseMat(1.5, { username: OWNER }), false);
  assert.equal(houseMatLockMessage(5), 'Bu ev malzemesi henüz kilitli (40 puan gerek).');
  assert.equal(houseMatLockMessage(7), 'Bu ev malzemesi yalnızca sahibine özel.');
});

test('oda: setLook houseMat doğrular, 0 alanı siler, ev görünümüyle birleşir; hak edilmeyen kayıt oturunca düşer; botlar ucuz açık malzeme', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const r = room();
  assert.equal(r.addPlayer('a', 'Ali', { userId: 'u1', look: { color: 1, hat: 0, skin: 1, house: 2 } }), null);
  assert.equal(r.setLook('a', { houseMat: 5 }, { points: 39 }), 'Bu ev malzemesi henüz kilitli (40 puan gerek).');
  assert.equal(r.players.get('a').look.houseMat, undefined, 'reddedilince değişmez');
  assert.equal(r.setLook('a', { houseMat: 5 }, { points: 40 }), null);
  assert.deepEqual(r.players.get('a').look, { color: 1, hat: 0, skin: 1, house: 2, houseMat: 5 }, 'ev görünümü korunur');
  assert.equal(r.setLook('a', { houseMat: 7 }, { points: 1e9 }), 'Bu ev malzemesi yalnızca sahibine özel.');
  assert.equal(r.setLook('a', { houseMat: 8 }), 'Geçersiz ev malzemesi.');
  assert.equal(r.setLook('a', { houseMat: '3' }), 'Geçersiz ev malzemesi.');
  assert.equal(r.setLook('a', { houseMat: 0 }), null);
  assert.equal('houseMat' in r.players.get('a').look, false);
  // misafir puanlı malzeme seçemez
  assert.equal(r.addPlayer('g', 'Misafir', { look: { color: 4, hat: 0, skin: 1 } }), null);
  assert.match(r.setLook('g', { houseMat: 1 }, { points: 999 }), /kilitli/);
  // sahip: altın süslemeli mermer + saray
  assert.equal(r.addPlayer('o', OWNER, { userId: 'u2', look: { color: 2, hat: 0, skin: 1, house: 5, houseMat: 7 } }), null);
  assert.deepEqual([r.players.get('o').look.house, r.players.get('o').look.houseMat], [5, 7]);
  // başkasının kaydındaki sahibe özel malzeme ve bozuk değer düşer
  assert.equal(r.addPlayer('b', 'Bora', { userId: 'u3', look: { color: 3, hat: 0, skin: 1, houseMat: 7 } }), null);
  assert.equal(r.players.get('b').look.houseMat, undefined);
  assert.equal(r.addPlayer('c', 'Cem', { userId: 'u4', look: { color: 5, hat: 0, skin: 1, houseMat: 42 } }), null);
  assert.equal(r.players.get('c').look.houseMat, undefined);
  // görünüm herkese gider
  assert.equal(r.viewFor('a').players.find((p) => p.id === 'o').look.houseMat, 7);
  r.destroy();

  const r2 = room();
  r2.addPlayer('h', 'Hasan', { userId: 'u1' });
  for (let i = 0; i < 15; i++) assert.equal(r2.addBot('h').error, undefined);
  for (const p of r2.players.values()) {
    if (!p.bot || !p.look.houseMat) continue;
    const m = HOUSE_MATS[p.look.houseMat];
    assert.ok(!m.owner && m.min <= 12, `bot kilitli malzeme aldı: ${m.name}`);
  }
  r2.destroy();
});

test('profil: mergeLook 403/400, sahip, 0 saklanmaz; sanitizeLook hak edilmeyeni düşürür', () => {
  const ali = (points) => ({ username: 'Ali', points });
  assert.throws(() => mergeLook({ color: 1, hat: 0, skin: 1 }, { houseMat: 2 }, ali(11)), (e) => e.status === 403 && /12 puan/.test(e.message));
  assert.equal(mergeLook({ color: 1, hat: 0, skin: 1 }, { houseMat: 2 }, ali(12)).houseMat, 2);
  assert.throws(() => mergeLook({ color: 1, hat: 0, skin: 1 }, { houseMat: 7 }, ali(1e9)), (e) => e.status === 403 && /sahibine/.test(e.message));
  assert.equal(mergeLook({ color: 1, hat: 0, skin: 1 }, { houseMat: 7 }, { username: OWNER, points: 0 }).houseMat, 7);
  assert.throws(() => mergeLook({ color: 1, hat: 0, skin: 1 }, { houseMat: HOUSE_MAT_COUNT }, ali(0)), (e) => e.status === 400);
  assert.throws(() => mergeLook({ color: 1, hat: 0, skin: 1 }, { houseMat: -1 }, ali(0)), (e) => e.status === 400);
  assert.equal('houseMat' in mergeLook({ color: 1, hat: 0, skin: 1, houseMat: 3 }, { houseMat: 0 }, ali(99)), false);
  // aynı (hak edilmiş) değer tekrar gönderilince kilit sorulmaz; tam görünüm PATCH'i ev ile birlikte
  assert.deepEqual(mergeLook({ color: 1, hat: 0, skin: 1, house: 3 }, { color: 1, hat: 0, skin: 1, house: 3, houseMat: 4 }, ali(25)), { color: 1, hat: 0, skin: 1, house: 3, houseMat: 4 });
  assert.deepEqual(sanitizeLook({ color: 1, hat: 0, skin: 1, houseMat: 6 }, ali(10)), { color: 1, hat: 0, skin: 1 });
  assert.deepEqual(sanitizeLook({ color: 1, hat: 0, skin: 1, houseMat: 6 }, ali(80)), { color: 1, hat: 0, skin: 1, houseMat: 6 });
  assert.deepEqual(sanitizeLook({ color: 1, hat: 0, skin: 1, houseMat: 7 }, { username: OWNER, points: 0 }), { color: 1, hat: 0, skin: 1, houseMat: 7 });
});

test('kalıcılık: look_house_mat (pg-mem ALTER göçü + JSON); alan yoksa 0', async () => {
  const mem = newDb();
  const { Pool } = mem.adapters.createPg();
  const pool = new Pool();
  // ev malzemesi kolonu olmayan eski tablo
  await pool.query(`CREATE TABLE vk_users (
    id TEXT PRIMARY KEY, username TEXT NOT NULL, username_key TEXT NOT NULL UNIQUE, pass_hash TEXT NOT NULL, created_at BIGINT NOT NULL,
    look_color INTEGER NOT NULL DEFAULT 0, look_hat INTEGER NOT NULL DEFAULT 0, look_skin INTEGER NOT NULL DEFAULT 0,
    look_acc INTEGER NOT NULL DEFAULT 0, look_house INTEGER NOT NULL DEFAULT 0,
    games INTEGER NOT NULL DEFAULT 0, wins INTEGER NOT NULL DEFAULT 0,
    koylu_games INTEGER NOT NULL DEFAULT 0, koylu_wins INTEGER NOT NULL DEFAULT 0, vampir_games INTEGER NOT NULL DEFAULT 0,
    vampir_wins INTEGER NOT NULL DEFAULT 0, soytari_games INTEGER NOT NULL DEFAULT 0, soytari_wins INTEGER NOT NULL DEFAULT 0)`);
  await pool.query(`INSERT INTO vk_users (id, username, username_key, pass_hash, created_at, look_color, look_hat, look_skin, look_house)
    VALUES ('old', 'Eski', 'eski', 'x', 1, 2, 3, 4, 7)`);
  const store = new PgStore({ pool });
  await store.init();
  const cols = await pool.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'vk_users'`);
  assert.ok(cols.rows.some((c) => c.column_name === 'look_house_mat'), 'kolon eklendi');
  assert.deepEqual((await store.getUser('old')).look, { color: 2, hat: 3, skin: 4, house: 7 }, 'eski kayıt: malzeme yok = 0');
  await store.updateLook('old', { color: 2, hat: 3, skin: 4, house: 7, houseMat: 5 });
  assert.deepEqual((await store.getUser('old')).look, { color: 2, hat: 3, skin: 4, house: 7, houseMat: 5 });
  await store.createUser({ id: 'n', username: 'Yeni', key: 'yeni', passHash: 'x', createdAt: 2, look: { color: 0, hat: 0, skin: 0, houseMat: 2 } });
  assert.deepEqual((await store.getUser('n')).look, { color: 0, hat: 0, skin: 0, houseMat: 2 });
  await store.updateLook('n', { color: 0, hat: 0, skin: 0 });
  assert.deepEqual((await store.getUser('n')).look, { color: 0, hat: 0, skin: 0 }, '0 saklanmaz');
  await store.close();
  // ikinci açılış: göç tekrar çalışınca hata yok, veri yerinde
  const store2 = new PgStore({ pool: new Pool() });
  await store2.init();
  assert.equal((await store2.getUser('old')).look.houseMat, 5);
  await store2.close();

  const dir = tempDir();
  const js = new JsonStore({ dir });
  await js.init();
  await js.createUser({ id: 'j', username: 'Jay', key: 'jay', passHash: 'x', createdAt: 1, look: { color: 1, hat: 1, skin: 1 } });
  await js.updateLook('j', { color: 1, hat: 1, skin: 1, house: 3, houseMat: 6 });
  const reloaded = new JsonStore({ dir });
  await reloaded.init();
  assert.deepEqual((await reloaded.getUser('j')).look, { color: 1, hat: 1, skin: 1, house: 3, houseMat: 6 });
  removeDir(dir);
});

test('HTTP + soket: malzeme kilidi sunucuda; kayıtlı malzeme odaya gelir, odada seçilen profile yazılır', async (t) => {
  const dir = tempDir();
  const store = new JsonStore({ dir });
  await store.init();
  const srv = await startServer(t, { store });
  t.after(() => removeDir(dir));
  const ali = await register(srv, 'Ali');
  const patch = (look) => http(srv, 'PATCH', '/api/me', { token: ali.token, body: { look } });
  let res = await patch({ houseMat: 1 });
  assert.equal(res.status, 403, 'puansız taş kilitli');
  assert.equal(res.json.code, 'look_locked');
  assert.equal(res.json.error, 'Bu ev malzemesi henüz kilitli (5 puan gerek).');
  // sunucu tarafında 3 galibiyet işle: 3 oyun + 6 = 9 puan
  await store.recordResults([0, 1, 2].map(() => ({ userId: ali.user.id, team: 'koylu', won: true })));
  res = await patch({ houseMat: 1 });
  assert.equal(res.status, 200);
  assert.equal(res.json.user.look.houseMat, 1);
  res = await patch({ houseMat: 2 });
  assert.equal(res.status, 403, '12 puan gerek');
  res = await patch({ houseMat: 99 });
  assert.equal(res.status, 400);
  assert.equal((await http(srv, 'GET', '/api/me', { token: ali.token })).json.user.look.houseMat, 1, 'kalıcı');

  const a = client(srv, ali.token);
  await connected(a);
  assert.equal((await emit(a, 'room:create', { roomName: 'Taş evler' })).ok, true);
  await waitFor(() => a.lastState && a.lastState.me);
  const me = () => a.lastState.players.find((p) => p.id === a.lastState.me.id).look;
  assert.equal(me().houseMat, 1, 'kayıtlı malzeme odaya gelir');
  res = await emit(a, 'player:look', { houseMat: 6 });
  assert.equal(res.ok, false);
  assert.equal(res.error, 'Bu ev malzemesi henüz kilitli (80 puan gerek).');
  res = await emit(a, 'player:look', { houseMat: 7 });
  assert.equal(res.error, 'Bu ev malzemesi yalnızca sahibine özel.');
  res = await emit(a, 'player:look', { houseMat: 0 });
  assert.equal(res.ok, true);
  await waitFor(() => me().houseMat === undefined);
  await waitFor(async () => (await store.getUser(ali.user.id)).look.houseMat === undefined);
  res = await emit(a, 'player:look', { houseMat: 1 });
  assert.equal(res.ok, true);
  await waitFor(async () => (await store.getUser(ali.user.id)).look.houseMat === 1);
});
