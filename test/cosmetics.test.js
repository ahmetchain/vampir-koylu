'use strict';

// Kozmetik yuva (slot) kuralları, yeni kıyafet alanları (look.top / look.bottom), puan/sahip kilitleri ve kalıcılık.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { newDb } = require('pg-mem');
const { startServer, http, register, client, connected, emit, waitFor, tempDir, removeDir } = require('./helpers');
const { JsonStore } = require('../lib/store-json');
const { PgStore } = require('../lib/store-pg');
const C = require('../lib/cosmetics');
const { canUseItem, sanitizeLook, KING_ACC } = require('../lib/houses');
const { mergeLook } = require('../lib/auth');
const { Room, HAT_COUNT, ACC_COUNT, TOP_COUNT, BOTTOM_COUNT } = require('../game');

const OWNER = 'ahmetchain';
const HAT = (n) => C.HAT_ITEMS.findIndex((h) => h.name === n);
const ACC = (n) => C.ACC_ITEMS.findIndex((h) => h.name === n);
const TOP = (n) => C.TOP_ITEMS.findIndex((h) => h.name === n);
const BOT = (n) => C.BOTTOM_ITEMS.findIndex((h) => h.name === n);
const room = () => new Room({ id: 'KOZ1', name: 'T', settings: { events: 'off' }, hooks: { update() {}, announce() {}, empty() {} } });

test('istemci ve sunucu yuva tablosu birebir aynı (public/ui/cosmetics.js = lib/cosmetics.js)', async () => {
  const cli = await import(pathToFileURL(path.join(__dirname, '..', 'public', 'ui', 'cosmetics.js')).href);
  for (const k of ['SLOT_NAMES', 'HAT_ITEMS', 'ACC_ITEMS', 'TOP_ITEMS', 'BOTTOM_ITEMS', 'SKIN_FEATURES', 'FIELD_ORDER', 'OPTIONAL_FIELDS']) {
    assert.deepEqual(cli[k], C[k], k);
  }
  // kod da aynı: ESM dosyasındaki gövde, sunucu kopyasında 'export' anahtarları çıkarılmış hâliyle bulunur
  const esm = fs.readFileSync(path.join(__dirname, '..', 'public', 'ui', 'cosmetics.js'), 'utf8').replace(/\r\n/g, '\n');
  const cjs = fs.readFileSync(path.join(__dirname, '..', 'lib', 'cosmetics.js'), 'utf8').replace(/\r\n/g, '\n');
  const body = esm.slice(esm.indexOf('export const SLOT_NAMES')).replace(/^export (const|function) /gm, '$1 ');
  assert.ok(cjs.includes(body), 'lib/cosmetics.js public/ui/cosmetics.js ile aynı olmalı');
  // her yuva adı tanımlı, her öğe en az bir yuva doldurur (0 hariç)
  for (const [field, list] of Object.entries(C.LOOK_ITEMS)) {
    list.forEach((it, i) => {
      if (i === 0) assert.deepEqual(it.slots, [], field);
      else { assert.ok(it.slots.length, `${field} ${it.name}`); for (const s of it.slots) assert.ok(C.SLOT_NAMES[s], s); }
    });
  }
  assert.equal(C.SKIN_FEATURES.length, 12);
  // sunucu sayıları tablodan gelir; istemci adları da
  assert.deepEqual([HAT_COUNT, ACC_COUNT, TOP_COUNT, BOTTOM_COUNT], [C.HAT_ITEMS.length, C.ACC_ITEMS.length, C.TOP_ITEMS.length, C.BOTTOM_ITEMS.length]);
  const data = await import(pathToFileURL(path.join(__dirname, '..', 'public', 'ui', 'data.js')).href);
  assert.deepEqual(data.TOP_NAMES, C.TOP_ITEMS.map((i) => i.name));
  assert.deepEqual(data.BOTTOM_NAMES, C.BOTTOM_ITEMS.map((i) => i.name));
  const fb = fs.readFileSync(path.join(__dirname, '..', 'public', 'ui', 'world-fallback.js'), 'utf8');
  for (const n of [...C.TOP_ITEMS, ...C.BOTTOM_ITEMS, ...C.ACC_ITEMS].map((i) => i.name)) assert.ok(fb.includes(`'${n}'`), `2B yedek köy adı: ${n}`);
});

test('yuva kuralı: taç ile takke/şapka aynı anda takılamaz; yeni seçilen eskisini çıkarır', () => {
  const crown = ACC('Kral tacı'), takke = HAT('Takke');
  assert.equal(crown, KING_ACC);
  // taç seçildi -> takke çıkar
  let r = C.resolveLook({ color: 0, skin: 1, hat: takke, acc: crown }, ['acc']);
  assert.equal(r.look.hat, 0);
  assert.equal(r.look.acc, crown);
  assert.equal(r.removed[0].name, 'Takke');
  assert.equal(C.conflictNote(r.removed[0]), 'Kral tacı takıldı, Takke çıkarıldı.');
  // şapka seçildi -> taç çıkar
  r = C.resolveLook({ color: 0, skin: 1, hat: HAT('Kavuk'), acc: crown }, ['hat']);
  assert.equal(r.look.hat, HAT('Kavuk'));
  assert.equal(r.look.acc, undefined);
  // eski çakışmalı kayıt (tercih yok): aksesuar önce gelir (FIELD_ORDER)
  r = C.resolveLook({ color: 0, skin: 1, hat: takke, acc: crown });
  assert.deepEqual(r.look, { color: 0, skin: 1, hat: 0, acc: crown });
  // farklı alanlar arası: kürklü kapaniçe omuzu doldurur -> doğan çıkar; kuşaklı entari beli doldurur -> hançer çıkar
  r = C.resolveLook({ skin: 1, hat: 0, top: TOP('Kürklü kapaniçe'), acc: ACC('Doğan') }, ['top']);
  assert.equal(r.look.acc, undefined);
  r = C.resolveLook({ skin: 1, hat: 0, top: TOP('Kuşaklı entari'), acc: ACC('Hançer') }, ['acc']);
  assert.equal(r.look.top, undefined);
  assert.equal(r.look.acc, ACC('Hançer'));
  // çakışmayanlar birlikte kalır
  r = C.resolveLook({ skin: 1, hat: HAT('Sorguçlu kavuk'), acc: ACC('Madalyon'), top: TOP('Kaftan'), bottom: BOT('Şalvar') });
  assert.equal(r.removed.length, 0);
});

test('karakterin kendi parçası: sakallı karaktere sakal/bıyık takılamaz, gözlüklüye gözlük; karakter değişince çıkar', () => {
  // villager-02 (Sakallı) ve 06 (Korsan: göz bandı + sakal) kendi sakalıyla gelir; 00/10 gözlüklü; 03 kolyeli; 08 kravatlı
  assert.deepEqual(C.skinBlock(2, 'acc', ACC('Sakal')), { what: 'sakalı', slot: 'chin' });
  assert.ok(C.skinBlock(2, 'acc', ACC('Bıyık')));
  assert.ok(C.skinBlock(6, 'acc', ACC('Gözlük')));
  assert.ok(C.skinBlock(0, 'acc', ACC('Gözlük')));
  assert.ok(C.skinBlock(3, 'acc', ACC('Madalyon')));
  assert.ok(C.skinBlock(8, 'acc', ACC('Papyon')));
  assert.equal(C.skinBlock(1, 'acc', ACC('Sakal')), null);
  assert.equal(C.skinBlockNote(C.skinBlock(2, 'acc', ACC('Sakal'))), 'Bu karakterin zaten sakalı var.');
  // sakal takılıyken sakallı karaktere geçince sakal çıkar
  const r = C.resolveLook({ skin: 2, hat: 0, acc: ACC('Sakal') }, ['skin']);
  assert.equal(r.look.acc, undefined);
  assert.equal(r.removed[0].by.skin, true);
  assert.match(C.conflictNote(r.removed[0]), /zaten sakalı var/);
});

test('sunucu: oda içi seçim (setLook) yuva kuralını uygular ve kilitleri doğrular', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const r = room();
  assert.equal(r.addPlayer('a', 'Ali', { userId: 'u1', look: { color: 1, hat: HAT('Takke'), skin: 2 } }), null);
  assert.equal(r.setLook('a', { acc: ACC('Sakal') }, { points: 99 }), 'Bu karakterin zaten sakalı var.');
  assert.equal(r.players.get('a').look.acc, undefined, 'reddedilince değişmez');
  // sakal (başka karakterde) takılıyken sakallı karaktere geçiş -> sakal çıkar
  assert.equal(r.setLook('a', { skin: 1 }), null);
  assert.equal(r.setLook('a', { acc: ACC('Sakal') }), null);
  assert.equal(r.setLook('a', { skin: 2 }), null);
  assert.equal(r.players.get('a').look.acc, undefined);
  // puanla açılan üst/alt
  assert.match(r.setLook('a', { top: TOP('Kürklü kapaniçe') }, { points: 24 }), /kilitli \(25 puan/);
  assert.equal(r.setLook('a', { top: TOP('Kürklü kapaniçe') }, { points: 25 }), null);
  assert.equal(r.setLook('a', { bottom: BOT('Sarı çizme') }, { points: 18 }), null);
  assert.deepEqual([r.players.get('a').look.top, r.players.get('a').look.bottom], [TOP('Kürklü kapaniçe'), BOT('Sarı çizme')]);
  // sahibe özel kaftan puanla açılmaz
  assert.match(r.setLook('a', { top: TOP('Kraliyet kaftanı') }, { points: 1e9 }), /sahibine özel/);
  // kapaniçe giyerken doğan seçilirse kapaniçe çıkar (yeni seçilen kazanır)
  assert.equal(r.setLook('a', { acc: ACC('Doğan') }, { points: 30 }), null);
  assert.equal(r.players.get('a').look.acc, ACC('Doğan'));
  assert.equal(r.players.get('a').look.top, undefined);
  // 0 -> alan silinir
  assert.equal(r.setLook('a', { bottom: 0 }), null);
  assert.equal('bottom' in r.players.get('a').look, false);
  // sahip: taç seçince takke çıkar; takke seçince taç çıkar
  assert.equal(r.addPlayer('o', OWNER, { userId: 'u2', look: { color: 2, hat: HAT('Takke'), skin: 1 } }), null);
  assert.equal(r.setLook('o', { acc: KING_ACC }), null);
  assert.equal(r.players.get('o').look.hat, 0);
  assert.equal(r.setLook('o', { top: TOP('Kraliyet kaftanı') }), null, 'sahip puansız da giyer');
  assert.equal(r.setLook('o', { hat: HAT('Takke') }), null);
  assert.equal(r.players.get('o').look.acc, undefined);
  assert.equal(r.players.get('o').look.hat, HAT('Takke'));
  // misafir (hesapsız) puanlı öğe seçemez
  r.players.get('a').userId = null;
  assert.match(r.setLook('a', { hat: HAT('Selçuklu börkü') }, { points: 500 }), /kilitli/);
  r.destroy();
});

test('sunucu: botlar yalnızca açık (puansız) öğelerle giyinir, çakışma kalmaz', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const r = room();
  r.addPlayer('h', 'Hasan', { userId: 'u1' });
  for (let i = 0; i < 15; i++) assert.equal(r.addBot('h').error, undefined);
  let dressed = 0;
  for (const p of r.players.values()) {
    if (!p.bot) continue;
    for (const f of ['hat', 'acc', 'top', 'bottom']) {
      const it = C.itemOf(f, p.look[f] | 0);
      if (!it) continue;
      if (f !== 'hat') dressed++;
      assert.ok(!it.min && !it.owner, `bot kilitli öğe aldı: ${f} ${it.name}`);
    }
    assert.equal(C.resolveLook(p.look).removed.length, 0, 'bot görünümünde yuva çakışması yok');
  }
  assert.ok(dressed > 0, 'en az bir bot aksesuar/kıyafet giyer');
  r.destroy();
});

test('mergeLook / sanitizeLook: PATCH yuva kuralı, sakal çakışması 409, eski çakışmalı kayıt düzeltilir', () => {
  const who = { username: 'Ali', points: 0 };
  // taç sahibi
  const own = { username: OWNER, points: 0 };
  let l = mergeLook({ color: 1, hat: HAT('Fes'), skin: 1 }, { acc: KING_ACC }, own);
  assert.equal(l.hat, 0);
  assert.equal(l.acc, KING_ACC);
  // sakallı karaktere sakal: 409 look_conflict
  assert.throws(() => mergeLook({ color: 1, hat: 0, skin: 2 }, { acc: ACC('Sakal') }, who), (e) => e.status === 409 && e.code === 'look_conflict' && /sakalı var/.test(e.message));
  // tam görünüm PATCH (menü): değişen alanlar önce yerleşir
  l = mergeLook({ color: 1, hat: HAT('Takke'), skin: 1, acc: KING_ACC }, { color: 1, hat: HAT('Takke'), skin: 1, acc: 0, top: TOP('Cepken'), bottom: BOT('Çarık'), house: 0 }, own);
  assert.deepEqual(l, { color: 1, hat: HAT('Takke'), skin: 1, top: TOP('Cepken'), bottom: BOT('Çarık') });
  // puan kilidi 403
  assert.throws(() => mergeLook({ color: 1, hat: 0, skin: 1 }, { top: TOP('Kaftan') }, { username: 'Ali', points: 9 }), (e) => e.status === 403);
  assert.equal(mergeLook({ color: 1, hat: 0, skin: 1 }, { top: TOP('Kaftan') }, { username: 'Ali', points: 10 }).top, TOP('Kaftan'));
  assert.throws(() => mergeLook({ color: 1, hat: 0, skin: 1 }, { top: TOP_COUNT }, who), (e) => e.status === 400);
  assert.throws(() => mergeLook({ color: 1, hat: 0, skin: 1 }, { bottom: -1 }, who), (e) => e.status === 400);
  // eski/bozuk kayıt: şapka + taç + sakallı karakterde sakal + hak edilmemiş kaftan
  const fixed = sanitizeLook({ color: 1, hat: HAT('Takke'), skin: 2, acc: ACC('Sakal'), top: TOP('Kraliyet kaftanı'), bottom: BOT('Mest') }, { username: 'Ali', points: 8 });
  assert.deepEqual(fixed, { color: 1, hat: HAT('Takke'), skin: 2, bottom: BOT('Mest') });
  assert.deepEqual(sanitizeLook({ color: 1, hat: HAT('Takke'), skin: 1, acc: KING_ACC }, own), { color: 1, hat: 0, skin: 1, acc: KING_ACC });
  // sahip her şeyi açık görür
  for (const [f, list] of Object.entries(C.LOOK_ITEMS)) for (let i = 0; i < list.length; i++) assert.equal(canUseItem(f, i, own), true, `${f} ${i}`);
  assert.equal(canUseItem('top', TOP('Kraliyet kaftanı'), { username: 'Ali', points: 1e9 }), false);
});

test('kalıcılık: look_top / look_bottom (pg-mem ALTER göçü + JSON); alan yoksa 0', async () => {
  const mem = newDb();
  const { Pool } = mem.adapters.createPg();
  const pool = new Pool();
  // look_acc + look_house olan ama giysi kolonları olmayan eski tablo
  await pool.query(`CREATE TABLE vk_users (
    id TEXT PRIMARY KEY, username TEXT NOT NULL, username_key TEXT NOT NULL UNIQUE, pass_hash TEXT NOT NULL, created_at BIGINT NOT NULL,
    look_color INTEGER NOT NULL DEFAULT 0, look_hat INTEGER NOT NULL DEFAULT 0, look_skin INTEGER NOT NULL DEFAULT 0,
    look_acc INTEGER NOT NULL DEFAULT 0, look_house INTEGER NOT NULL DEFAULT 0,
    games INTEGER NOT NULL DEFAULT 0, wins INTEGER NOT NULL DEFAULT 0,
    koylu_games INTEGER NOT NULL DEFAULT 0, koylu_wins INTEGER NOT NULL DEFAULT 0, vampir_games INTEGER NOT NULL DEFAULT 0,
    vampir_wins INTEGER NOT NULL DEFAULT 0, soytari_games INTEGER NOT NULL DEFAULT 0, soytari_wins INTEGER NOT NULL DEFAULT 0)`);
  await pool.query(`INSERT INTO vk_users (id, username, username_key, pass_hash, created_at, look_color, look_hat, look_skin, look_acc)
    VALUES ('old', 'Eski', 'eski', 'x', 1, 2, 3, 4, 5)`);
  const store = new PgStore({ pool });
  await store.init();
  assert.deepEqual((await store.getUser('old')).look, { color: 2, hat: 3, skin: 4, acc: 5 }, 'eski kayıt: giysi yok = 0');
  await store.updateLook('old', { color: 2, hat: 3, skin: 4, top: 4, bottom: 6 });
  assert.deepEqual((await store.getUser('old')).look, { color: 2, hat: 3, skin: 4, top: 4, bottom: 6 });
  await store.createUser({ id: 'n', username: 'Yeni', key: 'yeni', passHash: 'x', createdAt: 2, look: { color: 0, hat: 0, skin: 0, top: 1, bottom: 2 } });
  assert.deepEqual((await store.getUser('n')).look, { color: 0, hat: 0, skin: 0, top: 1, bottom: 2 });
  await store.updateLook('n', { color: 0, hat: 0, skin: 0 });
  assert.deepEqual((await store.getUser('n')).look, { color: 0, hat: 0, skin: 0 }, '0 saklanmaz');
  await store.close();

  const dir = tempDir();
  const js = new JsonStore({ dir });
  await js.init();
  await js.createUser({ id: 'j', username: 'Jay', key: 'jay', passHash: 'x', createdAt: 1, look: { color: 1, hat: 1, skin: 1 } });
  await js.updateLook('j', { color: 1, hat: 1, skin: 1, top: 2, bottom: 5 });
  const reloaded = new JsonStore({ dir });
  await reloaded.init();
  assert.deepEqual((await reloaded.getUser('j')).look, { color: 1, hat: 1, skin: 1, top: 2, bottom: 5 });
  removeDir(dir);
});

test('HTTP + soket: giysi profile kaydedilir, odada herkese gider; kilit ve çakışma sunucuda doğrulanır', async (t) => {
  const dir = tempDir();
  const store = new JsonStore({ dir });
  await store.init();
  const srv = await startServer(t, { store });
  t.after(() => removeDir(dir));
  const ali = await register(srv, 'Ali');
  const patch = (token, look) => http(srv, 'PATCH', '/api/me', { token, body: { look } });
  let res = await patch(ali.token, { top: TOP('Cepken'), bottom: BOT('Şalvar') });
  assert.equal(res.status, 200);
  assert.equal(res.json.user.look.top, TOP('Cepken'));
  assert.equal((await http(srv, 'GET', '/api/me', { token: ali.token })).json.user.look.bottom, BOT('Şalvar'), 'kalıcı');
  res = await patch(ali.token, { bottom: BOT('Mest') });
  assert.equal(res.status, 403, 'puansız Mest kilitli');
  res = await patch(ali.token, { skin: 2 });
  assert.equal(res.status, 200);
  res = await patch(ali.token, { acc: ACC('Sakal') });
  assert.equal(res.status, 409);
  assert.equal(res.json.error, 'Bu karakterin zaten sakalı var.');

  const a = client(srv, ali.token);
  await connected(a);
  assert.equal((await emit(a, 'room:create', { roomName: 'Giysi odası' })).ok, true);
  await waitFor(() => a.lastState && a.lastState.me);
  const me = () => a.lastState.players.find((p) => p.id === a.lastState.me.id).look;
  assert.equal(me().top, TOP('Cepken'), 'kayıtlı giysi odaya gelir');
  res = await emit(a, 'player:look', { top: TOP('Kaftan') });
  assert.equal(res.ok, false);
  assert.match(res.error, /kilitli/);
  res = await emit(a, 'player:look', { top: TOP('Kuşaklı entari') });
  assert.equal(res.ok, true);
  res = await emit(a, 'player:look', { acc: ACC('Kese') });
  assert.equal(res.ok, true);
  await waitFor(() => me().acc === ACC('Kese'));
  assert.equal(me().top, undefined, 'kese beli doldurur: kuşaklı entari çıkar');
  await waitFor(async () => (await store.getUser(ali.user.id)).look.acc === ACC('Kese'));
  assert.equal((await store.getUser(ali.user.id)).look.top, undefined, 'profile de çakışmasız kaydedilir');
});
