// Dünya yükleyici: önce 3B dünyayı (build/world.js → window.VKWorld) dener; yoksa, açılmazsa
// ya da WebGL yoksa 2B yedek köyü (ui/world-fallback.js) kullanır. Tüm çağrılar hataya dayanıklıdır.
import { loadScript, store } from './util.js';

const FORCE_2D_KEY = 'vk.world2d';

function webglOK() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch { return false; }
}

let lib = null;        // VKWorld ya da VKWorldFallback
let world = null;      // create() sonucu
let container = null;
let handlers = {};
let usingFallback = false;
let readyResolve;
export const ready = new Promise((r) => { readyResolve = r; });

function safe(fn, fallback) {
  try { return fn(); } catch (e) { console.warn('[dünya]', e); return fallback; }
}

export function prefers2D() { return !!store.get(FORCE_2D_KEY, false); }
export function setPrefers2D(v) { store.set(FORCE_2D_KEY, v ? true : null); }

function useFallback(reason) {
  if (reason) console.info('[dünya] 2B yedek köy kullanılıyor:', reason);
  usingFallback = true;
  lib = window.VKWorldFallback;
  container.innerHTML = '';
  world = lib.create(container, wrappedHandlers());
  document.documentElement.dataset.world = '2d';
}

function wrappedHandlers() {
  return {
    onPick: (id) => handlers.onPick && handlers.onPick(id),
    onMove: (x, y) => handlers.onMove && handlers.onMove(x, y),
    onSelf: () => handlers.onSelf && handlers.onSelf(),
    onProgress: (d, t) => handlers.onProgress && handlers.onProgress(d, t),
    onReady: () => { readyResolve(); if (handlers.onReady) handlers.onReady(); },
    onQuality: (q) => handlers.onQuality && handlers.onQuality(q),
  };
}

export async function initWorld(el, h) {
  container = el;
  handlers = h;
  if (prefers2D()) { useFallback('ayarlardan 2B seçildi'); return; }
  if (!webglOK()) { useFallback('WebGL yok'); return; }
  try {
    if (!window.VKWorld) await loadScript('build/world.js', 25000);
  } catch {
    useFallback('build/world.js bulunamadı');
    return;
  }
  const W = window.VKWorld;
  if (!W || typeof W.create !== 'function') { useFallback('VKWorld API eksik'); return; }
  if (typeof W.supported === 'function' && !safe(() => W.supported(), true)) { useFallback('VKWorld.supported() = false'); return; }
  try {
    world = W.create(container, wrappedHandlers());
    if (!world || typeof world.update !== 'function') throw new Error('create() geçersiz');
    lib = W;
    document.documentElement.dataset.world = '3d';
    const q = store.get('vk.quality', 'auto');
    if (q && q !== 'auto') safe(() => world.setQuality(q));
    watchRuntimeErrors();
  } catch (e) {
    console.warn('[dünya] 3B dünya açılamadı:', e);
    safe(() => world && world.dispose());
    useFallback('create() hata verdi');
  }
}

export function isFallback() { return usingFallback; }

// 3B dünya çalışırken sürekli hata atıyorsa (ör. kendi çizim döngüsünde) oyun oynanamaz hale gelmesin:
// 5 saniyede 10'dan fazla hata gelirse 2B köye geçilir ve son durum ona aktarılır.
let last = { state: null, ui: null, view: 'menu', insets: null };
function watchRuntimeErrors() {
  let times = [];
  const onErr = (ev) => {
    if (usingFallback) { window.removeEventListener('error', onErr); return; }
    const file = String((ev && ev.filename) || '');
    if (!/\/build\/world\.js/.test(file)) return;
    const now = Date.now();
    times = times.filter((t) => now - t < 5000);
    times.push(now);
    if (times.length > 10) {
      window.removeEventListener('error', onErr);
      console.warn('[dünya] 3B dünya sürekli hata veriyor, 2B köye geçiliyor.');
      safe(() => world && world.dispose());
      useFallback('çalışma zamanı hataları');
      safe(() => world.setView(last.view));
      if (last.insets) safe(() => world.setInsets(last.insets));
      if (last.state) safe(() => world.update(last.state, last.ui));
    }
  };
  window.addEventListener('error', onErr);
}

export const W = {
  update(state, ui) { last.state = state; last.ui = ui; if (world) safe(() => world.update(state, ui)); },
  // Sinematik bitince ya da en geç maxMs sonra çözülür.
  announce(msg, maxMs = 9000) {
    if (!world) return Promise.resolve();
    return new Promise((resolve) => {
      let done = false;
      const fin = () => { if (!done) { done = true; resolve(); } };
      setTimeout(fin, maxMs);
      safe(() => {
        const p = world.announce(msg);
        if (p && typeof p.then === 'function') p.then(fin, fin); else setTimeout(fin, 1200);
      }, null) === null && fin();
    });
  },
  bubble(id, text, channel) { if (world) safe(() => world.bubble(id, text, channel)); },
  setView(v) { last.view = v; if (v === 'menu') last.state = null; if (world) safe(() => world.setView(v)); },
  setQuality(q) { store.set('vk.quality', q); if (world) safe(() => world.setQuality(q)); },
  getQuality() { return world ? safe(() => world.getQuality(), 'auto') : 'auto'; },
  resize() { if (world) safe(() => world.resize()); },
  reset() { if (world) safe(() => world.reset()); },
  setInsets(o) { last.insets = o; if (world && typeof world.setInsets === 'function') safe(() => world.setInsets(o)); },
};

// Karakter önizlemesi: 3B dünya varsa onun turntable'ı, yoksa 2B çizim.
export function preview(el, look, opts) {
  const make = (L) => safe(() => L.preview(el, look, opts), null);
  let p = null;
  if (lib && !usingFallback && typeof lib.preview === 'function') p = make(lib);
  if (!p && window.VKWorldFallback) p = make(window.VKWorldFallback);
  return p || { setLook() {}, dispose() {} };
}

// Görünüm düzenleyici için isimler (3B dünya kendi listelerini verirse onları kullanır).
export function lookNames(kind, fallbackNames) {
  const src = lib && lib[kind];
  if (Array.isArray(src) && src.length === fallbackNames.length) {
    return src.map((x, i) => (typeof x === 'string' ? x : (x && (x.name || x.label)) || fallbackNames[i]));
  }
  return fallbackNames;
}
