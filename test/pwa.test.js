'use strict';
// PWA: manifest geçerli ve simgeler var, sw.js kök kapsamdan sunulur ve önbelleksiz, API/soket önbelleğe alınmaz.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const PUB = path.join(__dirname, '..', 'public');

test('manifest: ad, başlangıç adresi, görüntü modu ve üç simge (any + maskable) var; dosyalar mevcut', () => {
  const m = JSON.parse(fs.readFileSync(path.join(PUB, 'manifest.webmanifest'), 'utf8'));
  assert.equal(m.name, 'Vampir Köylü');
  assert.ok(m.start_url && m.scope === '/');
  assert.ok(['fullscreen', 'standalone'].includes(m.display));
  const sizes = m.icons.map((i) => `${i.sizes}:${i.purpose}`);
  assert.ok(sizes.includes('192x192:any') && sizes.includes('512x512:any') && sizes.includes('512x512:maskable'));
  for (const i of m.icons) assert.ok(fs.existsSync(path.join(PUB, i.src)), i.src);
  assert.ok(fs.existsSync(path.join(PUB, 'assets/ui/pwa/apple-touch-icon.png')));
});

test('index.html manifest ve iOS meta etiketlerini bağlar; sw.js API ve soketi atlar', () => {
  const html = fs.readFileSync(path.join(PUB, 'index.html'), 'utf8');
  assert.match(html, /rel="manifest" href="manifest\.webmanifest"/);
  assert.match(html, /rel="apple-touch-icon"/);
  const sw = fs.readFileSync(path.join(PUB, 'sw.js'), 'utf8');
  assert.match(sw, /\/api/);
  assert.match(sw, /\/socket\.io/);
  assert.match(sw, /\/healthz/);
});

test('sunucu: manifest doğru MIME ile, sw.js önbelleksiz sunulur', async () => {
  const { createGameServer } = require('../server');
  const { JsonStore } = require('../lib/store-json');
  const { tempDir, removeDir } = require('./helpers');
  const dir = tempDir();
  const store = new JsonStore({ dir });
  await store.init();
  const srv = createGameServer({ store });
  const port = await srv.listen(0);
  try {
    const m = await fetch(`http://127.0.0.1:${port}/manifest.webmanifest`);
    assert.equal(m.status, 200);
    assert.match(m.headers.get('content-type'), /manifest\+json/);
    const sw = await fetch(`http://127.0.0.1:${port}/sw.js`);
    assert.equal(sw.status, 200);
    assert.match(sw.headers.get('cache-control'), /no-cache/);
    assert.match(sw.headers.get('content-type'), /javascript/);
  } finally {
    await srv.close();
    removeDir(dir);
  }
});
