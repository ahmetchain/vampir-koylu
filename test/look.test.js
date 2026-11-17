'use strict';

// Görünüm: yeni şapkalar (takke, fes, yemeni…) ve isteğe bağlı aksesuar alanı (look.acc).
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { Room, HAT_COUNT, ACC_COUNT, SKIN_COUNT, COLOR_COUNT } = require('../game');

function room() {
  return new Room({ id: 'LOOK1', name: 'Test', settings: { events: 'off' }, hooks: { update() {}, announce() {}, empty() {} } });
}

// İstemcideki ad listeleri (ESM dosyaları) metinden okunur: sayılar sunucuyla aynı olmalı.
function namesIn(file, name) {
  const src = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
  const m = src.match(new RegExp(`(?:const|var) ${name} = (\\[[\\s\\S]*?\\]);`));
  assert.ok(m, `${file}: ${name} bulunamadı`);
  return JSON.parse(m[1].replace(/'/g, '"').replace(/,\s*\]/, ']'));
}

test('şapka ve aksesuar sayıları istemci listeleriyle aynı', () => {
  assert.equal(HAT_COUNT, 19);
  assert.equal(ACC_COUNT, 7);
  for (const file of ['client/world/constants.js', 'public/ui/data.js', 'public/ui/world-fallback.js']) {
    const hats = namesIn(file, 'HAT_NAMES');
    const accs = namesIn(file, 'ACC_NAMES');
    assert.equal(hats.length, HAT_COUNT, `${file} şapka sayısı`);
    assert.equal(accs.length, ACC_COUNT, `${file} aksesuar sayısı`);
    assert.equal(hats[9], 'Takke');
    assert.equal(accs[0], 'Yok');
  }
});

test('eski kayıtlı görünüm (acc yok) aynen yüklenir; yeni alanlar sınır içinde tutulur', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const r = room();
  assert.equal(r.addPlayer('a', 'Ayşe', { userId: 'u1', look: { color: 3, hat: 2, skin: 7 } }), null);
  assert.deepEqual(r.players.get('a').look, { color: 3, hat: 2, skin: 7 }, 'acc alanı eklenmez');
  assert.equal(r.addPlayer('b', 'Bora', { userId: 'u2', look: { color: 4, hat: 9, skin: 1, acc: 4 } }), null);
  assert.deepEqual(r.players.get('b').look, { color: 4, hat: 9, skin: 1, acc: 4 }, 'takke + atkı korunur');
  assert.equal(r.addPlayer('c', 'Cem', { userId: 'u3', look: { color: 5, hat: 99, skin: 1, acc: 42 } }), null);
  const c = r.players.get('c').look;
  assert.ok(c.hat >= 0 && c.hat < HAT_COUNT, 'geçersiz şapka rastgele geçerli şapkaya döner');
  assert.equal(c.acc, undefined, 'geçersiz aksesuar yok sayılır');

  assert.equal(r.setLook('a', { hat: 18, acc: 2 }), null);
  assert.deepEqual(r.players.get('a').look, { color: 3, hat: 18, skin: 7, acc: 2 });
  assert.equal(r.setLook('a', { acc: 99 }), null);
  assert.equal(r.players.get('a').look.acc, ACC_COUNT - 1, 'aksesuar aralığa sıkıştırılır');
  assert.equal(r.setLook('a', { acc: 'gözlük' }), null);
  assert.equal(r.players.get('a').look.acc, ACC_COUNT - 1, 'sayı olmayan değer görünümü değiştirmez');
  assert.equal(r.setLook('a', { acc: 0 }), null);
  assert.deepEqual(r.players.get('a').look, { color: 3, hat: 18, skin: 7 }, 'acc 0 -> alan silinir');
  assert.equal(r.setLook('a', { hat: 19 }), null);
  assert.equal(r.players.get('a').look.hat, HAT_COUNT - 1);
  assert.ok(r.viewFor('a').players.every((p) => p.look.skin < SKIN_COUNT && p.look.color < COLOR_COUNT));
  r.destroy();
});

// Aksesuar profilde saklanır (JSON ve pg-mem), 0 saklanmaz, sınır dışı reddedilir.
test('aksesuar profil görünümüne kaydedilir (auth + iki depo)', async () => {
  const { mergeLook } = require('../lib/auth');
  const { ACC_COUNT } = require('../game');
  assert.equal(mergeLook({ color: 1, hat: 2, skin: 3 }, { acc: 3 }).acc, 3);
  assert.equal('acc' in mergeLook({ color: 1, hat: 2, skin: 3, acc: 2 }, { acc: 0 }), false);
  assert.throws(() => mergeLook({ color: 1, hat: 2, skin: 3 }, { acc: ACC_COUNT }));
  const { newDb } = require('pg-mem');
  const { PgStore } = require('../lib/store-pg');
  const mem = newDb();
  const { Pool } = mem.adapters.createPg();
  const store = new PgStore({ pool: new Pool() });
  await store.init();
  await store.createUser({ id: 'u1', username: 'Ali', key: 'ali', passHash: 'x', createdAt: 1, look: { color: 1, hat: 12, skin: 2 } });
  assert.deepEqual((await store.getUser('u1')).look, { color: 1, hat: 12, skin: 2 });
  await store.updateLook('u1', { color: 1, hat: 9, skin: 2, acc: 5 });
  assert.deepEqual((await store.getUser('u1')).look, { color: 1, hat: 9, skin: 2, acc: 5 });
  await store.close();
});
