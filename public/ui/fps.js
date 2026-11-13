// Oyun içi performans göstergesi (Ayarlar → "FPS göster"): world.stats() değerlerini küçük bir
// etikette gösterir. Alanlar eksik olabilir; olmayan alan atlanır.
import { $, store } from './util.js';
import { W, qualityLabel } from './world-host.js';

const KEY = 'vk.fps';
let timer = null;

export function fpsEnabled() { return !!store.get(KEY, false); }
export function setFpsEnabled(v) { store.set(KEY, v ? true : null); syncFps(); }

function fmt(st) {
  if (!st) return 'ölçüm yok';
  const parts = [];
  if (Number.isFinite(st.fps)) parts.push(`<b>${Math.round(st.fps)}</b> fps`);
  if (Number.isFinite(st.ms)) parts.push(`${(+st.ms).toFixed(1)} ms`);
  const tier = st.tier || st.quality || st.level;
  if (tier) parts.push(`${qualityLabel(tier)}${st.mode === 'auto' ? ' (oto)' : ''}`);
  const scale = st.scale ?? st.renderScale ?? st.px ?? st.pixelRatio;
  if (Number.isFinite(scale)) parts.push(`×${(+scale).toFixed(2)}`);
  if (st.fallback) parts.push('2B');
  return parts.join(' · ') || 'ölçüm yok';
}

function tick() {
  const el = $('#fps');
  if (!el) return;
  const st = W.stats();
  el.innerHTML = fmt(st);
  el.classList.toggle('bad', !!(st && Number.isFinite(st.fps) && st.fps < 25));
}

// Görünür olması gereken yerde (oda ekranı) ve ayar açıksa çalışır.
export function syncFps() {
  const el = $('#fps');
  if (!el) return;
  const on = fpsEnabled() && !$('#room').hidden;
  el.hidden = !on;
  clearInterval(timer);
  timer = null;
  if (on) { tick(); timer = setInterval(tick, 500); }
}
