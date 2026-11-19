// Açılış hikâyesi: metinler, süreler ve "kendiliğinden oynasın mı" kararı (DOM'suz; birim testli).
export const INTRO_SEEN_KEY = 'vk.introSeen';

// Sahneler (sn). Süre, seslendirmenin uzunluğu (public/assets/audio/voice/intro-N.mp3) + kısa nefes payı; 3B sahne de aynı süreleri kullanır.
export const STORY = [
  { id: 'day', text: 'Bir zamanlar, dağların arasında mutlu mesut yaşayan bir köy varmış.', dur: 5.8 },
  { id: 'dusk', text: 'Geceleri biri öldüğünde kimse o kadar korkmazmış. Ölüm, hayatın bir parçasıymış.', dur: 7.0 },
  { id: 'dawn', text: 'Ta ki bir sabah, birinin boynunda iki küçük diş izi bulunana dek…', dur: 5.9 },
  { id: 'night', text: 'O gün her şey değişti. Aranızda vampirler var.', dur: 4.6 },
  { id: 'dark', text: 'Artık köylüler gerçek rollerini kullanmak zorunda. Vampirleri kısa sürede köyden kovmazlarsa, köy bir daha asla eskisi gibi olamayacak.', dur: 10.4 },
];
export const TITLE_S = 2.8;
export const DURS = [...STORY.map((s) => s.dur), TITLE_S];
export const TOTAL_S = DURS.reduce((a, b) => a + b, 0);

// İlk ziyarette mi oynasın? Davet linkiyle gelen (?oda=), kayıtlı oturumu/odası olan (giriş yapmış, PWA'dan
// devam eden) ya da daha önce izleyen/geçen kullanıcıya kendiliğinden gösterilmez.
export function shouldAutoplay({ seen = false, invite = false, token = false, room = false } = {}) {
  return !seen && !invite && !token && !room;
}

// localStorage erişimi hata verebilir (özel sekme, engellenmiş site verisi): hata olursa "izlendi" sayılmaz ama
// yazılamıyorsa her açılışta göstermemek için oturum boyunca bellekte de tutulur.
let memSeen = false;
export function readSeen(storage) {
  if (memSeen) return true;
  try { return !!(storage && storage.getItem(INTRO_SEEN_KEY)); } catch { return false; }
}
export function markSeen(storage) {
  memSeen = true;
  try { if (storage) storage.setItem(INTRO_SEEN_KEY, '1'); } catch { /* yazılamadı: bellekte kaldı */ }
}
export function _resetMem() { memSeen = false; }

// Kelime kelime belirme gecikmesi (sn): uzun cümle de en geç ~1,7 sn'de tamamlansın
export function wordDelay(words) {
  return Math.min(0.085, 1.7 / Math.max(1, words));
}
