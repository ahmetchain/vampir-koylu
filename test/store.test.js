'use strict';

// İki depo da (JSON dosyası ve PostgreSQL/pg-mem) aynı testlerden geçer.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { newDb } = require('pg-mem');
const { JsonStore, FILE_NAME } = require('../lib/store-json');
const { PgStore, sslConfig } = require('../lib/store-pg');
const { createStore } = require('../lib/store');
const { tempDir, removeDir } = require('./helpers');

let seq = 0;
function makeUser(name, extra = {}) {
  seq += 1;
  return {
    id: `id-${seq}-${name}`,
    username: name,
    key: name.toLocaleLowerCase('tr'),
    passHash: `scrypt$hash-${seq}`,
    createdAt: 1700000000000 + seq,
    look: { color: seq % 20, hat: seq % 9, skin: seq % 12 },
    ...extra,
  };
}

// Her arka uç: open() yeni bir depo açar; reopen() aynı veriye ikinci bir depo açar (yeniden başlatma).
const backends = [
  {
    name: 'JSON dosyası',
    async open(t) {
      const dir = tempDir('vk-store-');
      t.after(() => removeDir(dir));
      const store = new JsonStore({ dir });
      await store.init();
      return { store, reopen: async () => { const s = new JsonStore({ dir }); await s.init(); return s; }, dir };
    },
  },
  {
    name: 'PostgreSQL (pg-mem)',
    async open() {
      const db = newDb();
      const { Pool } = db.adapters.createPg();
      const store = new PgStore({ pool: new Pool() });
      await store.init();
      return { store, reopen: async () => { const s = new PgStore({ pool: new Pool() }); await s.init(); return s; } };
    },
  },
];

for (const backend of backends) {
  test(`[${backend.name}] kullanıcı oluşturma, bulma, ad çakışması`, async (t) => {
    const { store } = await backend.open(t);
    const u = makeUser('İrem');
    const created = await store.createUser(u);
    assert.equal(created.id, u.id);
    assert.equal(created.username, 'İrem');
    assert.equal(created.key, 'irem');
    assert.equal(created.passHash, u.passHash);
    assert.equal(created.createdAt, u.createdAt);
    assert.deepEqual(created.look, u.look);
    assert.deepEqual(created.stats, {
      games: 0, wins: 0,
      teams: { koylu: { games: 0, wins: 0 }, vampir: { games: 0, wins: 0 }, soytari: { games: 0, wins: 0 } },
    });
    assert.deepEqual(await store.getUser(u.id), created);
    assert.deepEqual(await store.findUserByKey('irem'), created);
    assert.equal(await store.findUserByKey('yok'), null);
    assert.equal(await store.getUser('yok'), null);
    await assert.rejects(store.createUser(makeUser('irem')), (err) => err.code === 'taken');
    await store.close();
  });

  test(`[${backend.name}] görünüm güncelleme`, async (t) => {
    const { store } = await backend.open(t);
    const u = await store.createUser(makeUser('Ali'));
    const updated = await store.updateLook(u.id, { color: 19, hat: 8, skin: 11 });
    assert.deepEqual(updated.look, { color: 19, hat: 8, skin: 11 });
    assert.deepEqual((await store.getUser(u.id)).look, { color: 19, hat: 8, skin: 11 });
    await store.close();
  });

  test(`[${backend.name}] oturumlar: oluştur, oku, uzat, sil, süresi dolanları temizle`, async (t) => {
    const { store } = await backend.open(t);
    const u = await store.createUser(makeUser('Veli'));
    await store.createSession('h1', u.id, 1000);
    await store.createSession('h2', u.id, 5000);
    assert.deepEqual(await store.getSession('h1'), { userId: u.id, expiresAt: 1000 });
    await store.touchSession('h1', 9000);
    assert.equal((await store.getSession('h1')).expiresAt, 9000);
    assert.equal(await store.deleteExpiredSessions(6000), 1);
    assert.equal(await store.getSession('h2'), null);
    await store.deleteSession('h1');
    assert.equal(await store.getSession('h1'), null);
    assert.equal(await store.getSession('yok'), null);
    await store.close();
  });

  test(`[${backend.name}] oyun sonuçları ve liderlik tablosu`, async (t) => {
    const { store } = await backend.open(t);
    const a = await store.createUser(makeUser('Ayşe'));
    const b = await store.createUser(makeUser('Bora'));
    const c = await store.createUser(makeUser('Cem'));
    await store.createUser(makeUser('Hiçoynamadı'));
    await store.recordResults([
      { userId: a.id, team: 'koylu', won: true },
      { userId: b.id, team: 'vampir', won: false },
      { userId: c.id, team: 'soytari', won: true },
      { userId: 'olmayan', team: 'koylu', won: true },
    ]);
    await store.recordResults([
      { userId: a.id, team: 'vampir', won: true },
      { userId: b.id, team: 'koylu', won: true },
    ]);
    const sa = (await store.getUser(a.id)).stats;
    assert.deepEqual(sa, {
      games: 2, wins: 2,
      teams: { koylu: { games: 1, wins: 1 }, vampir: { games: 1, wins: 1 }, soytari: { games: 0, wins: 0 } },
    });
    const sb = (await store.getUser(b.id)).stats;
    assert.equal(sb.games, 2);
    assert.equal(sb.wins, 1);
    assert.deepEqual(sb.teams.vampir, { games: 1, wins: 0 });

    const board = await store.leaderboard(10);
    // Önce galibiyet, eşitse daha az oyun, sonra ad.
    assert.deepEqual(board.map((u) => u.username), ['Ayşe', 'Cem', 'Bora']);
    assert.deepEqual((await store.leaderboard(1)).map((u) => u.username), ['Ayşe']);
    await store.close();
  });

  test(`[${backend.name}] yeniden açınca veriler durur`, async (t) => {
    const { store, reopen } = await backend.open(t);
    const u = await store.createUser(makeUser('Kalıcı'));
    await store.updateLook(u.id, { color: 1, hat: 2, skin: 3 });
    await store.createSession('kalici-oturum', u.id, Date.now() + 60000);
    await store.recordResults([{ userId: u.id, team: 'koylu', won: true }]);
    await store.close();
    const again = await reopen();
    const back = await again.findUserByKey('kalıcı');
    assert.equal(back.id, u.id);
    assert.deepEqual(back.look, { color: 1, hat: 2, skin: 3 });
    assert.equal(back.stats.wins, 1);
    assert.equal((await again.getSession('kalici-oturum')).userId, u.id);
    await again.close();
  });

  test(`[${backend.name}] aynı anda gelen kayıtlar: aynı ad tek kez alınır, diğerleri kaybolmaz`, async (t) => {
    const { store, reopen } = await backend.open(t);
    const same = Array.from({ length: 10 }, () => makeUser('Yarış', { key: 'yarış' }));
    const distinct = Array.from({ length: 30 }, (_, i) => makeUser(`Oyuncu${i}`));
    const results = await Promise.allSettled([...same, ...distinct].map((u) => store.createUser(u)));
    const sameOk = results.slice(0, 10).filter((r) => r.status === 'fulfilled').length;
    assert.equal(sameOk, 1, 'aynı ad sadece bir kez kaydedilmeli');
    assert.ok(results.slice(10).every((r) => r.status === 'fulfilled'));
    await Promise.all(distinct.map((u) => store.recordResults([{ userId: u.id, team: 'koylu', won: false }])));
    await store.close();
    const again = await reopen();
    for (const u of distinct) assert.equal((await again.getUser(u.id)).stats.games, 1);
    await again.close();
  });
}

test('[JSON dosyası] dosya her zaman geçerli JSON; geçici dosya kalmaz', async (t) => {
  const dir = tempDir('vk-store-');
  t.after(() => removeDir(dir));
  const store = new JsonStore({ dir });
  await store.init();
  const writes = [];
  for (let i = 0; i < 50; i++) writes.push(store.createUser(makeUser(`Hızlı${i}`)));
  await Promise.all(writes);
  await store.close();
  const files = fs.readdirSync(dir);
  assert.deepEqual(files, [FILE_NAME]);
  const data = JSON.parse(fs.readFileSync(path.join(dir, FILE_NAME), 'utf8'));
  assert.equal(Object.keys(data.users).length, 50);
});

test('[JSON dosyası] süresi dolmuş oturumlar açılışta atılır', async (t) => {
  const dir = tempDir('vk-store-');
  t.after(() => removeDir(dir));
  const store = new JsonStore({ dir });
  await store.init();
  const u = await store.createUser(makeUser('Eski'));
  await store.createSession('eski', u.id, Date.now() - 1);
  await store.createSession('yeni', u.id, Date.now() + 60000);
  await store.close();
  const again = new JsonStore({ dir });
  await again.init();
  assert.equal(await again.getSession('eski'), null);
  assert.ok(await again.getSession('yeni'));
});

test('depo seçimi: DATABASE_URL varsa PostgreSQL, yoksa DATA_DIR', () => {
  const json = createStore({ DATA_DIR: 'veri-klasoru' });
  assert.equal(json.kind, 'json');
  assert.equal(json.dir, path.resolve('veri-klasoru'));
  const pg = createStore({ DATABASE_URL: 'postgres://u:p@localhost:5432/db' });
  assert.equal(pg.kind, 'postgres');
  return pg.close();
});

test('PostgreSQL SSL ayarı adrese göre seçilir', () => {
  const neon = sslConfig('postgres://u:p@ep-x.eu-central-1.aws.neon.tech/db?sslmode=require', '');
  assert.deepEqual(neon.ssl, { rejectUnauthorized: false });
  assert.equal(neon.connectionString.includes('sslmode'), false, 'pg ayarı ezmesin diye parametre çıkarılır');
  assert.deepEqual(sslConfig('postgres://u:p@dpg-abc.frankfurt-postgres.render.com/db', '').ssl, { rejectUnauthorized: false });
  assert.equal(sslConfig('postgres://u:p@dpg-abc-a/db', '').ssl, false, 'Render iç adresi SSL istemez');
  assert.equal(sslConfig('postgres://u:p@localhost:5432/db', '').ssl, false);
  assert.equal(sslConfig('postgres://u:p@db.example.com/db?sslmode=disable', '').ssl, false);
  assert.equal(sslConfig('postgres://u:p@db.example.com/db?sslmode=verify-full', '').ssl, true);
  assert.equal(sslConfig('postgres://u:p@localhost/db', 'on').ssl, true);
  assert.deepEqual(sslConfig('postgres://u:p@localhost/db', 'no-verify').ssl, { rejectUnauthorized: false });
  assert.equal(sslConfig('postgres://u:p@x.neon.tech/db', 'off').ssl, false);
  assert.equal(sslConfig('postgres://u:p%40ss@localhost:5432/db?application_name=vk&sslmode=require', '').connectionString,
    'postgres://u:p%40ss@localhost:5432/db?application_name=vk');
});
