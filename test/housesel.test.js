'use strict';

// Ev görünümü seçimi (look.house) ve sahibe özel görünümler (Saray evi, kral tacı).
// Puan = oynanan oyun + 2 x galibiyet; kilidi YALNIZCA sunucu doğrular (HTTP profil yolu + soket yolu).
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { newDb } = require('pg-mem');
const { startServer, http, register, client, connected, emit, waitFor, tempDir, removeDir } = require('./helpers');
const { JsonStore } = require('../lib/store-json');
const { PgStore } = require('../lib/store-pg');
const { HOUSES, HOUSE_COUNT, KING_ACC, pointsOf, canUseHouse, canUseAcc } = require('../lib/houses');
const { Room, ACC_COUNT } = require('../game');

const OWNER = 'ahmetchain';

async function serverWithStore(t) {
  const dir = tempDir();
  const store = new JsonStore({ dir });
  await store.init();
  const srv = await startServer(t, { store });
  t.after(() => removeDir(dir));
  return { srv, store };
}

// Hesaba sunucu tarafında sonuç işler: tek oyun kaybı (1 puan) ya da galibiyeti (3 puan).
async function addResults(store, userId, { wins = 0, losses = 0 }) {
  const rows = [];
  for (let i = 0; i < wins; i++) rows.push({ userId, team: 'koylu', won: true });
  for (let i = 0; i < losses; i++) rows.push({ userId, team: 'koylu', won: false });
  await store.recordResults(rows);
}

const patchLook = (srv, token, look) => http(srv, 'PATCH', '/api/me', { token, body: { look } });

test('tablo ve puan: eşikler 0/3/8/15/25, saray özel; puan = oyun + 2 x galibiyet', () => {
  assert.equal(HOUSE_COUNT, 6);
  assert.deepEqual(HOUSES.filter((h) => !h.owner).map((h) => h.min), [0, 3, 8, 15, 25]);
  assert.equal(HOUSES[5].owner, true);
  assert.equal(KING_ACC, 6);
  assert.equal(ACC_COUNT, 7);
  assert.equal(pointsOf({ games: 5, wins: 2 }), 9);
  assert.equal(pointsOf(null), 0);
  const nobody = { username: 'Ali', points: 8 };
  assert.equal(canUseHouse(2, nobody), true);
  assert.equal(canUseHouse(3, nobody), false);
  assert.equal(canUseHouse(1, { username: null, points: 999 }), false, 'misafir (hesapsız) yalnızca varsayılan');
  assert.equal(canUseHouse(0, { username: null, points: 0 }), true);
  assert.equal(canUseHouse(5, { username: 'Ali', points: 9999 }), false, 'saray puanla açılmaz');
  assert.equal(canUseHouse(5, { username: 'AhmetChain', points: 0 }), true, 'büyük/küçük harf fark etmez');
  assert.equal(canUseHouse(6, { username: OWNER }), false);
  assert.equal(canUseAcc(KING_ACC, { username: 'Ali' }), false);
  assert.equal(canUseAcc(KING_ACC, { username: OWNER }), true);
  assert.equal(canUseAcc(3, {}), true);
});

test('istemci tablosu (public/ui/data.js) sunucuyla aynı: adlar, eşikler, sahibe özel', async () => {
  const data = await import(pathToFileURL(path.join(__dirname, '..', 'public', 'ui', 'data.js')).href);
  assert.equal(data.HOUSES.length, HOUSE_COUNT);
  HOUSES.forEach((h, i) => {
    assert.equal(data.HOUSES[i].name, h.name);
    assert.equal(Boolean(data.HOUSES[i].owner), Boolean(h.owner));
    if (!h.owner) assert.equal(data.HOUSES[i].min, h.min);
  });
  assert.equal(data.KING_ACC, KING_ACC);
  assert.equal(data.ACC_NAMES.length, ACC_COUNT);
  assert.equal(data.ACC_NAMES[KING_ACC], 'Kral tacı');
  assert.equal(data.pointsOf({ games: 5, wins: 2 }), pointsOf({ games: 5, wins: 2 }));
  const src = fs.readFileSync(path.join(__dirname, '..', 'client', 'world', 'constants.js'), 'utf8');
  assert.match(src, /'Papyon', 'Kral tacı'\]/);
});

test('HTTP profil: açık ev kaydedilir, puanı yetmeyen ve sahibe özel olanlar reddedilir', async (t) => {
  const { srv, store } = await serverWithStore(t);
  const ali = await register(srv, 'Ali');
  assert.equal(ali.user.look.house, undefined, 'yeni hesap varsayılan evde (alan yok = 0)');

  // 0 puan: yalnızca varsayılan
  let res = await patchLook(srv, ali.token, { house: 1 });
  assert.equal(res.status, 403);
  assert.equal(res.json.code, 'look_locked');
  res = await patchLook(srv, ali.token, { house: 0 });
  assert.equal(res.status, 200);

  // 1 galibiyet + 1 kayıp = 2 oyun + 2 = 4 puan: Kırmızı kiremit (3) açık, Taş (8) değil
  await addResults(store, ali.user.id, { wins: 1, losses: 1 });
  res = await patchLook(srv, ali.token, { house: 1 });
  assert.equal(res.status, 200);
  assert.equal(res.json.user.look.house, 1);
  assert.equal((await http(srv, 'GET', '/api/me', { token: ali.token })).json.user.look.house, 1, 'kalıcı');
  res = await patchLook(srv, ali.token, { house: 2 });
  assert.equal(res.status, 403);
  assert.equal((await http(srv, 'GET', '/api/me', { token: ali.token })).json.user.look.house, 1, 'reddedilen seçim görünümü değiştirmez');

  // Geçersiz değerler 400
  for (const bad of [-1, 6, 1.5, '1', null]) {
    res = await patchLook(srv, ali.token, { house: bad });
    assert.equal(res.status, 400, JSON.stringify(bad));
  }

  // Puan fazlasıyla yetse de sahibe özel görünümler kapalı
  await addResults(store, ali.user.id, { wins: 30 });
  res = await patchLook(srv, ali.token, { house: 5 });
  assert.equal(res.status, 403);
  assert.match(res.json.error, /sahibine özel/);
  res = await patchLook(srv, ali.token, { acc: KING_ACC });
  assert.equal(res.status, 403);
  res = await patchLook(srv, ali.token, { house: 4 });
  assert.equal(res.status, 200, 'puanı yeten açık ev seçilir');
  assert.equal(res.json.user.look.house, 4);
  const stored = await store.getUser(ali.user.id);
  assert.equal(stored.look.house, 4);
  assert.equal(stored.look.acc, undefined);
});

test('HTTP profil: ahmetchain saray evini ve kral tacını seçer; profilde kalır', async (t) => {
  const { srv, store } = await serverWithStore(t);
  const owner = await register(srv, OWNER);
  assert.equal(owner.user.ownerLooks, true);
  let res = await patchLook(srv, owner.token, { house: 5 });
  assert.equal(res.status, 200);
  assert.equal(res.json.user.look.house, 5, 'puanı sıfır olsa da');
  res = await patchLook(srv, owner.token, { acc: KING_ACC });
  assert.equal(res.status, 200);
  assert.equal(res.json.user.look.acc, KING_ACC);
  assert.equal((await store.getUser(owner.user.id)).look.house, 5);
  // başka alanı değiştirmek özel seçimleri bozmaz
  res = await patchLook(srv, owner.token, { hat: 2 });
  assert.equal(res.json.user.look.house, 5);
  assert.equal(res.json.user.look.acc, KING_ACC);
  // sahip olmayan hesapta ownerLooks yok
  assert.equal((await register(srv, 'Veli')).user.ownerLooks, undefined);
});

test('eski kayıtlar (house yok) varsayılan evde; elle yazılmış hak edilmemiş değerler profilden düşer', async (t) => {
  const { srv, store } = await serverWithStore(t);
  const old = await register(srv, 'Eski');
  const rec = await store.getUser(old.user.id);
  assert.equal(rec.look.house, undefined);
  const me = (await http(srv, 'GET', '/api/me', { token: old.token })).json.user;
  assert.equal(me.look.house | 0, 0);
  // depoya elle (ör. eski sürüm / bozuk) saray + kral tacı yazılmış başka hesap: gösterimde düşürülür
  await store.updateLook(old.user.id, { ...rec.look, house: 5, acc: KING_ACC });
  const after = (await http(srv, 'GET', '/api/me', { token: old.token })).json.user;
  assert.equal(after.look.house, undefined);
  assert.equal(after.look.acc, undefined);
  // renk değiştirmek de onları geri getirmez
  const patched = (await patchLook(srv, old.token, { color: 3 })).json.user;
  assert.equal(patched.look.house, undefined);
  assert.equal(patched.look.acc, undefined);
});

test('soket: oda içi görünüm seçimi sunucuda doğrulanır; sahip seçebilir; diğer oyunculara look.house gider', async (t) => {
  const { srv, store } = await serverWithStore(t);
  const ali = await register(srv, 'Ali');
  const owner = await register(srv, OWNER);
  const a = client(srv, ali.token);
  const o = client(srv, owner.token);
  await connected(a); await connected(o);
  const created = await emit(a, 'room:create', { roomName: 'Ev odası' });
  assert.equal(created.ok, true);
  assert.equal((await emit(o, 'room:join', { roomId: created.roomId })).ok, true);
  await waitFor(() => a.lastState && a.lastState.players.length === 2 && o.lastState && o.lastState.players.length === 2);

  // puansız: açık ev bile kilitli; saray ve taç hiçbir koşulda
  let res = await emit(a, 'player:look', { house: 1 });
  assert.equal(res.ok, false);
  assert.match(res.error, /kilitli/);
  res = await emit(a, 'player:look', { house: 5 });
  assert.equal(res.ok, false);
  assert.match(res.error, /sahibine özel/);
  res = await emit(a, 'player:look', { acc: KING_ACC });
  assert.equal(res.ok, false);
  res = await emit(a, 'player:look', { acc: 99 });
  assert.equal(res.ok, false, 'aralık dışı değer taca sıkışıp geçmez');
  res = await emit(a, 'player:look', { house: 'x' });
  assert.equal(res.ok, false);
  const meA = () => a.lastState.players.find((p) => p.id === a.lastState.me.id);
  assert.equal(meA().look.house, undefined);
  assert.equal(meA().look.acc, undefined);

  // istemci kendi "puanını" bildiremez
  res = await emit(a, 'player:look', { house: 1, points: 999 });
  assert.equal(res.ok, false);

  // puan sunucuda hesaplanır: 4 puan -> ev 1 açılır
  await addResults(store, ali.user.id, { wins: 1, losses: 1 });
  res = await emit(a, 'player:look', { house: 1 });
  assert.equal(res.ok, true);
  assert.equal((await emit(a, 'player:look', { house: 2 })).ok, false);
  await waitFor(() => o.lastState.players.find((p) => p.name === 'Ali').look.house === 1);
  assert.equal((await store.getUser(ali.user.id)).look.house, 1, 'profile de kaydedilir');

  // sahip: saray + kral tacı
  res = await emit(o, 'player:look', { house: 5, acc: KING_ACC });
  assert.equal(res.ok, true);
  await waitFor(() => a.lastState.players.find((p) => p.name === OWNER).look.house === 5);
  const ownerSeenByAli = a.lastState.players.find((p) => p.name === OWNER).look;
  assert.equal(ownerSeenByAli.house, 5, 'herkes herkesin ev görünümünü görür');
  assert.equal(ownerSeenByAli.acc, KING_ACC);
  assert.equal(o.lastState.players.find((p) => p.name === 'Ali').look.house, 1);
  assert.equal((await store.getUser(owner.user.id)).look.house, 5);

  // varsayılana dönüş: alan silinir
  assert.equal((await emit(o, 'player:look', { house: 0 })).ok, true);
  await waitFor(() => a.lastState.players.find((p) => p.name === OWNER).look.house === undefined);
});

test('soket: odaya katılırken kayıtlı görünüm yeniden doğrulanır (hak edilmemiş saray/taç düşer)', async (t) => {
  const { srv, store } = await serverWithStore(t);
  const ali = await register(srv, 'Ali');
  await store.updateLook(ali.user.id, { color: 2, hat: 1, skin: 1, acc: KING_ACC, house: 5 });
  const a = client(srv, ali.token);
  await connected(a);
  const created = await emit(a, 'room:create', { roomName: 'Doğrulama' });
  assert.equal(created.ok, true);
  await waitFor(() => a.lastState && a.lastState.me);
  const me = a.lastState.players.find((p) => p.id === a.lastState.me.id);
  assert.equal(me.look.house, undefined);
  assert.equal(me.look.acc, undefined);
});

test('oda: setLook ve addPlayer sahip dışında özel görünümü düşürür; botlar açık ev alır', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const r = new Room({ id: 'EV1', name: 'T', settings: { events: 'off' }, hooks: { update() {}, announce() {}, empty() {} } });
  assert.equal(r.addPlayer('a', 'Ali', { userId: 'u1', look: { color: 1, hat: 1, skin: 1, house: 5, acc: KING_ACC } }), null);
  assert.deepEqual(r.players.get('a').look, { color: 1, hat: 1, skin: 1 });
  assert.equal(r.addPlayer('o', OWNER, { userId: 'u2', look: { color: 2, hat: 1, skin: 1, house: 5, acc: KING_ACC } }), null);
  assert.deepEqual(r.players.get('o').look, { color: 2, hat: 1, skin: 1, acc: KING_ACC, house: 5 });
  // hesapsız (misafir) koltuk: puan verilse de varsayılan ev
  r.players.get('a').userId = null;
  assert.match(r.setLook('a', { house: 1 }, { points: 500 }), /kilitli/);
  r.players.get('a').userId = 'u1';
  assert.equal(r.setLook('a', { house: 2 }, { points: 8 }), null);
  assert.equal(r.players.get('a').look.house, 2);
  assert.match(r.setLook('a', { house: 3 }, { points: 14 }), /kilitli/);
  assert.equal(r.setLook('a', { house: 3 }, { points: 15 }), null);
  assert.match(r.setLook('a', { house: 5 }, { points: 1e9 }), /sahibine özel/);
  assert.equal(r.players.get('a').look.house, 3);
  for (let i = 0; i < 6; i++) assert.equal(r.addBot('a').error, undefined);
  for (const p of r.players.values()) if (p.bot) assert.ok(!p.look.house || (HOUSES[p.look.house] && !HOUSES[p.look.house].owner), 'bot sahibe özel ev almaz');
  // viewFor tüm oyunculara look.house taşır
  const view = r.viewFor('a');
  assert.equal(view.players.find((p) => p.id === 'o').look.house, 5);
  assert.equal(view.players.find((p) => p.id === 'a').look.house, 3);
  r.destroy();
});

test('depo: look_house kolonu (pg-mem) kaydedilir; eski tabloya ALTER ile eklenir; JSON eski kayıt 0', async () => {
  const mem = newDb();
  const { Pool } = mem.adapters.createPg();
  const pool = new Pool();
  // eski kurulum: ne look_acc ne look_house var
  await pool.query(`CREATE TABLE vk_users (
    id TEXT PRIMARY KEY, username TEXT NOT NULL, username_key TEXT NOT NULL UNIQUE, pass_hash TEXT NOT NULL, created_at BIGINT NOT NULL,
    look_color INTEGER NOT NULL DEFAULT 0, look_hat INTEGER NOT NULL DEFAULT 0, look_skin INTEGER NOT NULL DEFAULT 0,
    games INTEGER NOT NULL DEFAULT 0, wins INTEGER NOT NULL DEFAULT 0,
    koylu_games INTEGER NOT NULL DEFAULT 0, koylu_wins INTEGER NOT NULL DEFAULT 0, vampir_games INTEGER NOT NULL DEFAULT 0,
    vampir_wins INTEGER NOT NULL DEFAULT 0, soytari_games INTEGER NOT NULL DEFAULT 0, soytari_wins INTEGER NOT NULL DEFAULT 0)`);
  await pool.query(`INSERT INTO vk_users (id, username, username_key, pass_hash, created_at, look_color, look_hat, look_skin)
    VALUES ('old', 'Eski', 'eski', 'x', 1, 2, 3, 4)`);
  const store = new PgStore({ pool });
  await store.init();
  assert.deepEqual((await store.getUser('old')).look, { color: 2, hat: 3, skin: 4 }, 'eski kayıt: house yok = 0');
  await store.updateLook('old', { color: 2, hat: 3, skin: 4, house: 4 });
  assert.deepEqual((await store.getUser('old')).look, { color: 2, hat: 3, skin: 4, house: 4 });
  await store.createUser({ id: 'n', username: 'Yeni', key: 'yeni', passHash: 'x', createdAt: 2, look: { color: 0, hat: 0, skin: 0, house: 2 } });
  assert.equal((await store.getUser('n')).look.house, 2);
  await store.updateLook('n', { color: 0, hat: 0, skin: 0 });
  assert.equal((await store.getUser('n')).look.house, undefined, '0 saklanmaz');
  await store.close();

  const dir = tempDir();
  const js = new JsonStore({ dir });
  await js.init();
  await js.createUser({ id: 'j', username: 'Jay', key: 'jay', passHash: 'x', createdAt: 1, look: { color: 1, hat: 1, skin: 1 } });
  assert.equal((await js.getUser('j')).look.house, undefined);
  await js.updateLook('j', { color: 1, hat: 1, skin: 1, house: 3 });
  const reloaded = new JsonStore({ dir });
  await reloaded.init();
  assert.equal((await reloaded.getUser('j')).look.house, 3, 'dosyadan geri okunur');
  removeDir(dir);
});
