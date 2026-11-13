// Ortak sabitler: oyuncu renkleri, şapkalar, karakter modelleri ve sanat yönetimi paleti.
// Sıra ve indeksler docs/V2-PLAN.md §4 ile birebir aynıdır (look.color / look.hat / look.skin).

export const COLOR_HEX = [
  '#d7263d', '#2b59c3', '#2f9e44', '#f06595', '#f76707', '#f2c12e', '#3b3b46', '#e9ecef', '#7048e8', '#8d5a3b',
  '#15aabf', '#94d82d', '#862e3c', '#ffa8c5', '#1c2e6e', '#868e96', '#d9b99b', '#ff8364', '#6b7a2a', '#b197fc',
];
export const COLOR_NAMES = [
  'Kırmızı', 'Mavi', 'Yeşil', 'Pembe', 'Turuncu', 'Sarı', 'Siyah', 'Beyaz', 'Mor', 'Kahverengi',
  'Camgöbeği', 'Fıstık', 'Bordo', 'Gül', 'Lacivert', 'Gri', 'Bej', 'Mercan', 'Zeytin', 'Lavanta',
];

// look.hat 0 = şapkasız; 1..8 hats.glb düğümleri
export const HAT_NODES = [null, 'hat-1-hasir', 'hat-2-bere', 'hat-3-cicek', 'hat-4-silindir',
  'hat-5-bandana', 'hat-6-filiz', 'hat-7-kasket', 'hat-8-kulaklik'];
export const HAT_NAMES = ['Şapkasız', 'Hasır şapka', 'Bere', 'Çiçek', 'Silindir', 'Bandana', 'Filiz', 'Kasket', 'Kulaklık'];

// look.skin 0..11 (manifest.characters.skins sırası)
export const SKIN_NAMES = [
  'Gözlüklü', 'Topuzlu', 'Sakallı', 'Bereli', 'Yelekli', 'Kızıl topuz',
  'Korsan', 'Önlüklü', 'Takım elbiseli', 'Uzun saçlı', 'Kitap kurdu', 'At kuyruklu',
];
export const SKIN_DESC = [
  'Yeşil gömlekli, gözlüklü', 'Sarı tişörtlü, topuzlu', 'Kel, sakallı', 'Bereli, mavi gömlekli',
  'Kısa saçlı, yelekli', 'Kızıl topuzlu, ceketli', 'Göz bantlı, sakallı', 'Uzun siyah saçlı, önlüklü',
  'Kızıl saçlı, takım elbiseli', 'Kızıl uzun saçlı', 'Gözlüklü, önlüklü', 'At kuyruklu, askılı',
];
export const HAT_Y_OFFSET = [0, 0.052, -0.01, 0.105, 0, 0.105, 0, 0.045, 0.051, 0, 0.005, 0.045];

// Dışa açık meta veriler (görünüm düzenleyici için)
export const COLORS = COLOR_HEX.map((hex, i) => ({ id: i, hex, name: COLOR_NAMES[i] }));
export const HATS = HAT_NAMES.map((name, i) => ({ id: i, name, node: HAT_NODES[i] }));
export const SKINS = SKIN_NAMES.map((name, i) => ({ id: i, name, desc: SKIN_DESC[i] }));

// Sanat yönetimi paleti (§4)
export const PAL = {
  night0: '#15122b', night1: '#221c44', night2: '#3a2a6b', moon: '#8fb4ff',
  fire0: '#ffb347', fire1: '#ff7a1a', blood: '#d7263d', parchment: '#f4e4c1', forest: '#2f6b4f', text: '#f6f1ff',
};

export const EVIL = { vampir: true, iftiraci: true };
export const NIGHT_ROLES = { vampir: 1, iftiraci: 1, doktor: 1, kahin: 1, gozcu: 1, cadi: 1 };

// Rol başına seçim işareti (izleyicinin kendi seçimi)
export const ROLE_MARK = {
  vampir: { label: '🩸 Hedefin', color: '#d7263d' },
  iftiraci: { label: '🎭 İftira', color: '#b197fc' },
  doktor: { label: '🛡️ Koruman', color: '#5ef0a0' },
  kahin: { label: '🔮 Bakılacak', color: '#9b7bff' },
  gozcu: { label: '👁️ Gözleniyor', color: '#8fb4ff' },
  heal: { label: '🧪 İksir', color: '#5ef0a0' },
  poison: { label: '☠️ Zehir', color: '#94d82d' },
  vote: { label: '⚖️ Oyun', color: '#f2c12e' },
  shoot: { label: '🎯 Hedef', color: '#ff8364' },
};

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => t * t * (3 - 2 * t);
export const damp = (k, dt) => 1 - Math.exp(-k * dt);
export const TAU = Math.PI * 2;

// Açıyı [-PI, PI] aralığına getir
export function wrapAngle(a) {
  a = (a + Math.PI) % TAU;
  if (a < 0) a += TAU;
  return a - Math.PI;
}

// Belirlenimci (seed'li) rastgele sayı üreteci — köy dekoru her açılışta aynı görünsün
export function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

export function hashStr(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
