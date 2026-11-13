// window.VKWorld giriş noktası (esbuild --global-name=VKWorld). Sözleşme: docs/V2-PLAN.md §7.
import { create, supported } from './world.js';
import { preview } from './preview.js';
import { setBase } from './assets.js';
import { COLORS, HATS, SKINS } from './constants.js';

// Varlık yolunu betiğin konumuna göre çöz (build/world.js -> ../assets/models/)
try {
  const cur = document.currentScript && document.currentScript.src;
  if (cur) setBase(new URL('../assets/models/', cur).href);
} catch (e) { /* göreli yol kalır */ }

export const version = '2.1.0';
// Ayarlar için kalite kademeleri (en ucuzdan en iyiye); setQuality(id) bunları ve 'auto'yu kabul eder
export const QUALITIES = [
  { id: 'saver', label: 'Pil tasarrufu', desc: '30 kare/sn, düşük çözünürlük, en az efekt' },
  { id: 'low', label: 'Düşük', desc: 'Gölgesiz, sade efektler' },
  { id: 'medium', label: 'Orta', desc: 'Gölgeler ve bulutlar' },
  { id: 'high', label: 'Yüksek', desc: 'Tam çözünürlük, karakter gölgeleri' },
];
export { create, supported, preview, COLORS, HATS, SKINS };
export function setAssetBase(url) { setBase(url); }
