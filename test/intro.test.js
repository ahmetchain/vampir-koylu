'use strict';

// Açılış hikâyesi: ilk ziyaret bayrağı (vk.introSeen), davet/oturum istisnaları ve süreler.
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const { pathToFileURL } = require('url');

const load = () => import(pathToFileURL(path.join(__dirname, '..', 'public', 'ui', 'intro-story.js')).href);

function memStorage() {
  const m = new Map();
  return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), map: m };
}

test('ilk ziyarette kendiliğinden oynar; davet, oturum, oda ya da izlenmişse oynamaz', async () => {
  const S = await load();
  assert.equal(S.shouldAutoplay({}), true);
  assert.equal(S.shouldAutoplay({ seen: true }), false);
  assert.equal(S.shouldAutoplay({ invite: true }), false);
  assert.equal(S.shouldAutoplay({ token: true }), false);
  assert.equal(S.shouldAutoplay({ room: true }), false);
});

test('bayrak localStorage\'a yazılır; erişim hata verirse bellekte tutulur', async () => {
  const S = await load();
  S._resetMem();
  const st = memStorage();
  assert.equal(S.readSeen(st), false);
  S.markSeen(st);
  assert.equal(st.map.get(S.INTRO_SEEN_KEY), '1');
  S._resetMem();
  assert.equal(S.readSeen(st), true);
  // engellenmiş depolama: okuma false, yazma hata vermez ve oturum boyunca "izlendi" sayılır
  S._resetMem();
  const bad = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); } };
  assert.equal(S.readSeen(bad), false);
  assert.doesNotThrow(() => S.markSeen(bad));
  assert.equal(S.readSeen(bad), true);
  S._resetMem();
});

test('beş cümle, toplam süre ~30 sn, uzun cümle de hızlı belirir', async () => {
  const S = await load();
  assert.equal(S.STORY.length, 5);
  assert.equal(S.DURS.length, 6);
  assert.ok(S.TOTAL_S >= 24 && S.TOTAL_S <= 32, 'toplam ' + S.TOTAL_S);
  for (const s of S.STORY) {
    const words = s.text.split(/\s+/).length;
    // belirme bitince cümle en az ~2,5 sn okunur kalsın
    assert.ok(s.dur - words * S.wordDelay(words) - 0.6 >= 2.5, s.id);
  }
  assert.match(S.STORY[4].text, /eskisi gibi olamayacak\.$/);
});
