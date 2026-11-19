'use strict';

// Açılış hikâyesi "izlendi" bilgisi hesapta tutulur (vk_users.intro_seen_at; JSON'da introSeenAt):
// göç, idempotent yazma, POST /api/me/intro-seen ve publicUser.introSeen (liderlikte yok).
const test = require('node:test');
const assert = require('node:assert/strict');
const { newDb } = require('pg-mem');
const { startServer, http, register, tempDir, removeDir } = require('./helpers');
const { JsonStore } = require('../lib/store-json');
const { PgStore } = require('../lib/store-pg');

const newUser = (id, name) => ({ id, username: name, key: name.toLowerCase(), passHash: 'x', createdAt: 1, look: { color: 0, hat: 0, skin: 0 } });

test('pg: eski tabloya intro_seen_at göçü; eski hesap izlenmemiş; işaret idempotent; yeniden açılışta durur', async () => {
  const mem = newDb();
  const { Pool } = mem.adapters.createPg();
  const pool = new Pool();
  await pool.query(`CREATE TABLE vk_users (
    id TEXT PRIMARY KEY, username TEXT NOT NULL, username_key TEXT NOT NULL UNIQUE, pass_hash TEXT NOT NULL, created_at BIGINT NOT NULL,
    look_color INTEGER NOT NULL DEFAULT 0, look_hat INTEGER NOT NULL DEFAULT 0, look_skin INTEGER NOT NULL DEFAULT 0,
    look_acc INTEGER NOT NULL DEFAULT 0, look_house INTEGER NOT NULL DEFAULT 0,
    games INTEGER NOT NULL DEFAULT 0, wins INTEGER NOT NULL DEFAULT 0,
    koylu_games INTEGER NOT NULL DEFAULT 0, koylu_wins INTEGER NOT NULL DEFAULT 0, vampir_games INTEGER NOT NULL DEFAULT 0,
    vampir_wins INTEGER NOT NULL DEFAULT 0, soytari_games INTEGER NOT NULL DEFAULT 0, soytari_wins INTEGER NOT NULL DEFAULT 0)`);
  await pool.query(`INSERT INTO vk_users (id, username, username_key, pass_hash, created_at) VALUES ('old', 'Eski', 'eski', 'x', 1)`);
  const store = new PgStore({ pool });
  await store.init();
  const cols = await pool.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'vk_users'`);
  assert.ok(cols.rows.some((c) => c.column_name === 'intro_seen_at'), 'kolon eklendi');
  assert.equal((await store.getUser('old')).introSeenAt, null, 'videodan önceki hesap: izlemedi');

  const first = await store.markIntroSeen('old', 1700000000000);
  assert.equal(first.introSeenAt, 1700000000000);
  const again = await store.markIntroSeen('old', 1800000000000);
  assert.equal(again.introSeenAt, 1700000000000, 'ikinci çağrı zamanı değiştirmez');
  assert.equal(await store.markIntroSeen('yok'), null);

  await store.createUser(newUser('n', 'Yeni'));
  assert.equal((await store.getUser('n')).introSeenAt, null, 'yeni hesap de izlemedi');
  await store.close();

  const store2 = new PgStore({ pool: new Pool() });
  await store2.init();   // göç tekrar çalışınca hata yok
  assert.equal((await store2.getUser('old')).introSeenAt, 1700000000000);
  await store2.close();
});

test('json: introSeenAt yok = izlemedi; işaret idempotent ve diske yazılır', async () => {
  const dir = tempDir();
  try {
    const js = new JsonStore({ dir });
    await js.init();
    const u = await js.createUser(newUser('j', 'Jay'));
    assert.ok(!u.introSeenAt);
    assert.equal((await js.markIntroSeen('j', 5000)).introSeenAt, 5000);
    assert.equal((await js.markIntroSeen('j', 9000)).introSeenAt, 5000);
    assert.equal(await js.markIntroSeen('yok'), null);
    await js.close();
    const re = new JsonStore({ dir });
    await re.init();
    assert.equal((await re.getUser('j')).introSeenAt, 5000);
  } finally { removeDir(dir); }
});

for (const kind of ['json', 'pg']) {
  test(`[${kind}] API: oturumsuz 401; oturumlu 200 ve /api/me introSeen true; idempotent; liderlikte sızmaz`, async (t) => {
    let srv;
    if (kind === 'pg') {
      const { Pool } = newDb().adapters.createPg();
      const store = new PgStore({ pool: new Pool() });
      await store.init();
      srv = await startServer(t, { store });
    } else srv = await startServer(t);

    const none = await http(srv, 'POST', '/api/me/intro-seen', { body: {} });
    assert.equal(none.status, 401);
    assert.equal(none.json.code, 'unauthorized');

    const reg = await register(srv, 'Hikayeci');
    assert.equal(reg.user.introSeen, false, 'kayıt yanıtı');
    const me0 = await http(srv, 'GET', '/api/me', { token: reg.token });
    assert.equal(me0.json.user.introSeen, false);

    const a = await http(srv, 'POST', '/api/me/intro-seen', { token: reg.token, body: {} });
    assert.equal(a.status, 200);
    assert.deepEqual(a.json, { ok: true });
    const b = await http(srv, 'POST', '/api/me/intro-seen', { token: reg.token });
    assert.equal(b.status, 200, 'ikinci çağrı da 200');
    const me1 = await http(srv, 'GET', '/api/me', { token: reg.token });
    assert.equal(me1.json.user.introSeen, true);

    const login = await http(srv, 'POST', '/api/auth/login', { body: { username: 'Hikayeci', password: 'gizli123' } });
    assert.equal(login.json.user.introSeen, true, 'giriş yanıtı (başka cihaz)');

    // başka hesap etkilenmez
    const other = await register(srv, 'Baskasi');
    assert.equal((await http(srv, 'GET', '/api/me', { token: other.token })).json.user.introSeen, false);

    // liderlik tablosunda yok
    const lb = await http(srv, 'GET', '/api/leaderboard');
    assert.equal(lb.status, 200);
    assert.ok(!lb.text.includes('introSeen') && !lb.text.includes('intro_seen'), 'liderlikte sızma yok');
  });
}

test('liderlik: oyun oynamış ve hikâyeyi izlemiş hesap listede ama introSeen alanı yok', async (t) => {
  const dir = tempDir();
  const store = new JsonStore({ dir });
  await store.init();
  const srv = await startServer(t, { store, dir });
  const reg = await register(srv, 'Oyuncu');
  await http(srv, 'POST', '/api/me/intro-seen', { token: reg.token });
  await store.recordResults([{ userId: reg.user.id, team: 'koylu', won: true }]);
  const lb = await http(srv, 'GET', '/api/leaderboard');
  assert.equal(lb.json.players.length, 1);
  assert.equal(lb.json.players[0].username, 'Oyuncu');
  assert.ok(!('introSeen' in lb.json.players[0]));
  assert.ok(!('introSeenAt' in lb.json.players[0]));
  t.after(() => removeDir(dir));
});
