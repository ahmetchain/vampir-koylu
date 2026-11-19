/* Vampir Köylü – service worker (PWA). Oyun sunucuya bağlı çalışır; burada yalnızca:
 *  - uygulama kabuğunu ve ağır dosyaları (modeller, ses, yazı tipleri) önbelleğe alır: açılış ve mobil veri hızlanır,
 *  - ağ yokken küçük bir "bağlantı yok" sayfası gösterir.
 * Kod dosyaları (html/js/css/build) HER ZAMAN önce ağdan gelir: yeni sürüm yayınlanınca eski kod kalmaz.
 * /api, /socket.io ve /healthz asla önbelleğe alınmaz. */
// Her model/ses değişiminde (public/assets altı) bu sürümü artır (v2-<yyyymmdd>[-n]); eski önbellekler activate'te silinir.
const VERSION = 'v2-20261119d';
const STATIC = `vk-static-${VERSION}`;    // /assets/ altı: modeller, sesler, yazı tipleri (önce önbellek, arkadan güncelle)
const SHELL = `vk-shell-${VERSION}`;      // kod dosyaları: önce ağ, olmazsa önbellek

const OFFLINE_HTML = `<!doctype html><html lang="tr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Vampir Köylü</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#15122b;color:#f4e4c1;font-family:system-ui,sans-serif;text-align:center;padding:24px}
h1{font-size:28px;margin:0 0 8px}p{opacity:.8;margin:6px 0}button{margin-top:16px;padding:12px 22px;border-radius:12px;border:0;background:#ffb347;color:#15122b;font-weight:700;font-size:16px}</style>
<div><h1>🌙 Bağlantı yok</h1><p>Oyun internete bağlı çalışır.</p><p>Bağlantın gelince tekrar dene.</p><button onclick="location.reload()">Tekrar dene</button></div></html>`;

self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (![STATIC, SHELL].includes(k)) await caches.delete(k);
    await self.clients.claim();
  })());
});

const skip = (url) => url.pathname.startsWith('/api') || url.pathname.startsWith('/socket.io') || url.pathname === '/healthz' || url.pathname === '/sw.js';

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || skip(url)) return;

  // Ağır, nadiren değişen dosyalar: önce önbellek, arkadan sessizce güncelle.
  if (url.pathname.startsWith('/assets/')) {
    e.respondWith((async () => {
      const cache = await caches.open(STATIC);
      const hit = await cache.match(req);
      const net = fetch(req).then((res) => { if (res && res.ok && res.status === 200) cache.put(req, res.clone()); return res; }).catch(() => null);
      return hit || (await net) || Response.error();
    })());
    return;
  }

  // Sayfa ve kod: önce ağ (güncel sürüm), ağ yoksa önbellek, o da yoksa bağlantı yok sayfası.
  e.respondWith((async () => {
    const cache = await caches.open(SHELL);
    try {
      const res = await fetch(req);
      if (res && res.ok && res.status === 200) cache.put(req, res.clone());
      return res;
    } catch (err) {
      const hit = await cache.match(req);
      if (hit) return hit;
      if (req.mode === 'navigate') return new Response(OFFLINE_HTML, { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 503 });
      return Response.error();
    }
  })());
});
