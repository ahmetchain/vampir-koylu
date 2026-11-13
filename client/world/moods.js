// Senaryo ruh halleri (state.room.scenario.id): sis, gök tonu, ay rengi, hava ve köy süslemesi.
// Bilinmeyen kimlik -> varsayılan (sade köy).
const BASE = { fog: 1, tint: '#ffffff', tintAmt: 0, moon: '#eef2ff', stars: 1, weather: 'none', nightTint: false, snow: false, dress: null, lamp: null, fogTint: null };

export const MOODS = {
  // Sisli Vadi: kalın, sürüklenen sis
  'sisli-vadi': { fog: 0.42, tint: '#9aa6b4', tintAmt: 0.24, stars: 0.5, weather: 'fog', fogTint: '#b8c2cc' },
  // Kanlı Ay: kızıl ay, kırmızımsı gece
  'kanli-ay': { moon: '#ff5244', tint: '#7a1426', tintAmt: 0.28, nightTint: true },
  // Hasat Şenliği: sonbahar tonu, balkabakları, sıcak fenerler, düşen yapraklar
  'hasat-senligi': { tint: '#e7a24a', tintAmt: 0.13, weather: 'leaves', dress: 'harvest', lamp: '#ff9a30' },
  // Kara Kış: karlı zemin, buz mavisi, yağan kar
  'kara-kis': { tint: '#cfdcff', tintAmt: 0.26, weather: 'snow', snow: true, fog: 0.75, moon: '#e6f0ff' },
  // Veba Söylentisi: hastalıklı yeşil-gri pus
  'veba-soylentisi': { tint: '#8e9a62', tintAmt: 0.32, fog: 0.55, stars: 0.6, weather: 'fog', fogTint: '#a3ae7a', lamp: '#d8e070' },
  // Panayır Haftası: flamalar, renkli fenerler
  panayir: { tint: '#ffd0a0', tintAmt: 0.05, dress: 'fair' },
};
MOODS['panayir-haftasi'] = MOODS.panayir;

export function moodFor(id) {
  return { ...BASE, ...(MOODS[id] || {}), id: MOODS[id] ? id : null };
}
export const MOOD_IDS = ['sisli-vadi', 'kanli-ay', 'hasat-senligi', 'kara-kis', 'veba-soylentisi', 'panayir'];
