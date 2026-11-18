// Kozmetik kataloğu ve YUVA (slot) kuralları: şapka, aksesuar, üst giysi, alt giysi.
// TEK doğruluk kaynağı: istemci (public/ui, client/world) bu dosyayı içe aktarır; sunucu lib/cosmetics.js kopyasını
// kullanır ve test/cosmetics.test.js iki tablonun birebir aynı olduğunu denetler.
//
// Her öğe vücutta bir ya da birkaç YUVA doldurur. Aynı yuvayı dolduran iki öğe aynı anda takılamaz:
//   - yeni seçilen öğe eskisini çıkarır (ör. kral tacı seçilince şapka kalkar, şapka seçilince taç kalkar);
//   - karakter modelinin KENDİ parçaları (ör. sakallı karakterin sakalı) da yuva doldurur: o yuvaya öğe takılamaz
//     ("Bu karakterin zaten sakalı var."), sakallı karaktere geçilince sakal aksesuarı çıkar.
// Kayıtlı eski çakışmalar yüklenirken FIELD_ORDER önceliğiyle düzeltilir (önce gelen alan kalır).
// min: açmak için gereken puan (puan = oyun + 2 × galibiyet); owner: yalnızca sahip hesap. Sahip/admin hepsini açık görür.

export const SLOT_NAMES = {
  head: 'baş', eyes: 'gözler', mouth: 'bıyık yeri', chin: 'çene', neck: 'boyun', collar: 'yaka', chest: 'göğüs',
  shoulder: 'omuz', back: 'sırt', torso: 'gövde', waist: 'bel', hand: 'el', legs: 'bacaklar', feet: 'ayaklar',
};

// look.hat (0 = şapkasız). 1..8 hats.glb, 9.. kodla üretilir (client/world/hats.js).
export const HAT_ITEMS = [
  { name: 'Şapkasız', slots: [] },
  { name: 'Hasır şapka', slots: ['head'] },
  { name: 'Bere', slots: ['head'] },
  { name: 'Çiçek', slots: ['head'] },
  { name: 'Silindir', slots: ['head'] },
  { name: 'Bandana', slots: ['head'] },
  { name: 'Filiz', slots: ['head'] },
  { name: 'Kasket', slots: ['head'] },
  { name: 'Kulaklık', slots: ['head'] },
  { name: 'Takke', slots: ['head'] },
  { name: 'Örgü takke', slots: ['head'] },
  { name: 'Fes', slots: ['head'] },
  { name: 'Yemeni', slots: ['head'] },
  { name: 'Keçe külah', slots: ['head'] },
  { name: 'Kalpak', slots: ['head'] },
  { name: 'Ponponlu bere', slots: ['head'] },
  { name: 'Çiçek tacı', slots: ['head'] },
  { name: 'Aşçı başlığı', slots: ['head'] },
  { name: 'Taç', slots: ['head'] },
  { name: 'Kavuk', slots: ['head'] },
  { name: 'Sorguçlu kavuk', slots: ['head'], min: 20 },
  { name: 'Selçuklu börkü', slots: ['head'], min: 10 },
  { name: 'Yeniçeri börkü', slots: ['head'], min: 30 },
];

// look.acc (0 = yok; isteğe bağlı alan).
export const ACC_ITEMS = [
  { name: 'Yok', slots: [] },
  { name: 'Bıyık', slots: ['mouth'] },
  { name: 'Gözlük', slots: ['eyes'] },
  { name: 'Sakal', slots: ['chin', 'mouth'] },
  { name: 'Atkı', slots: ['neck', 'collar'] },
  { name: 'Papyon', slots: ['collar'] },
  { name: 'Kral tacı', slots: ['head'], owner: true },
  { name: 'Hançer', slots: ['waist'], min: 5 },
  { name: 'Kese', slots: ['waist'] },
  { name: 'Tesbih', slots: ['hand'] },
  { name: 'Madalyon', slots: ['chest'], min: 12 },
  { name: 'Doğan', slots: ['shoulder'], min: 30 },
];

// look.top (0 = modelin kendi giysisi; isteğe bağlı alan). Oyuncu rengi gömlekte kalır (oyuncular renginden tanınır).
// Osmanlı/Selçuklu giysileri: desenler yalnızca geometrik/bitkisel (lale, rumi, çintemani, sekiz köşeli yıldız).
export const TOP_ITEMS = [
  { name: 'Kendi giysisi', slots: [] },
  { name: 'Cepken', slots: ['torso'] },
  { name: 'Kuşaklı entari', slots: ['torso', 'waist'] },
  { name: 'Çintemani yelek', slots: ['torso'], min: 15 },
  { name: 'Kaftan', slots: ['torso', 'back'], min: 10 },
  { name: 'Kürklü kapaniçe', slots: ['back', 'neck', 'collar', 'shoulder'], min: 25 },
  { name: 'Kraliyet kaftanı', slots: ['torso', 'back', 'neck', 'collar'], owner: true },
];

// look.bottom (0 = modelin kendi altı; isteğe bağlı alan).
export const BOTTOM_ITEMS = [
  { name: 'Kendi altı', slots: [] },
  { name: 'Şalvar', slots: ['legs'] },
  { name: 'Potur', slots: ['legs'], min: 5 },
  { name: 'Çakşır', slots: ['legs'] },
  { name: 'Lale desenli şalvar', slots: ['legs'], min: 12 },
  { name: 'Çarık', slots: ['feet'] },
  { name: 'Mest', slots: ['feet'], min: 8 },
  { name: 'Sarı çizme', slots: ['feet'], min: 18 },
];

// Karakter modellerinin (look.skin 0..11, villager-00..11) KENDİ parçaları: bu yuvalara öğe takılamaz.
// (Modeller incelenerek çıkarıldı: 0 ve 10 gözlüklü, 2 sakallı, 3 kolyeli, 6 göz bantlı ve sakallı, 8 kravatlı.)
export const SKIN_FEATURES = [
  [{ slots: ['eyes'], what: 'gözlüğü' }],
  [],
  [{ slots: ['chin', 'mouth'], what: 'sakalı' }],
  [{ slots: ['chest'], what: 'kolyesi' }],
  [],
  [],
  [{ slots: ['eyes'], what: 'göz bandı' }, { slots: ['chin', 'mouth'], what: 'sakalı' }],
  [],
  [{ slots: ['collar'], what: 'kravatı' }],
  [],
  [{ slots: ['eyes'], what: 'gözlüğü' }],
  [],
];

export const LOOK_ITEMS = { hat: HAT_ITEMS, acc: ACC_ITEMS, top: TOP_ITEMS, bottom: BOTTOM_ITEMS };
// Eski/çakışmalı kayıtlar düzeltilirken öncelik: önce gelen alan kalır, sonrakinin çakışan öğesi çıkar.
export const FIELD_ORDER = ['acc', 'hat', 'top', 'bottom'];
// look'ta 0 ise hiç tutulmayan isteğe bağlı alanlar (hat her zaman vardır).
export const OPTIONAL_FIELDS = ['acc', 'top', 'bottom'];

export function itemOf(field, v) {
  const list = LOOK_ITEMS[field];
  return list && Number.isInteger(v) && v > 0 && v < list.length ? list[v] : null;
}

// Öğe bu karakter modelinin kendi bir parçasıyla çakışıyor mu? -> { what, slot } | null
export function skinBlock(skin, field, v) {
  const item = itemOf(field, v);
  const feats = SKIN_FEATURES[skin | 0] || [];
  if (!item) return null;
  for (const f of feats) for (const s of item.slots) if (f.slots.includes(s)) return { what: f.what, slot: s };
  return null;
}

// Kilit: null (açık) ya da Türkçe gerekçe. who: { owner: bool, points: number }.
export function lockOf(field, v, who = {}) {
  const item = itemOf(field, v);
  if (!item || who.owner) return null;
  if (item.owner) return 'Yalnızca sahibine özel';
  if (item.min && !((who.points || 0) >= item.min)) return `${item.min} puan gerek`;
  return null;
}

// Çakışmaları giderir. prefer: bu çağrıda değişen alanlar (önce yerleşir => yeni seçilen eskisini çıkarır).
// Dönüş: { look, removed: [{ field, value, name, by }] }; by = { field, value, name } (başka öğe) ya da
// { skin: true, what } (karakterin kendi parçası). Girdi değiştirilmez; alan değeri geçersizse dokunulmaz.
export function resolveLook(look, prefer = []) {
  const out = { ...look };
  const removed = [];
  const taken = new Map();   // yuva -> sahibi
  for (const f of SKIN_FEATURES[out.skin | 0] || []) for (const s of f.slots) taken.set(s, { skin: true, what: f.what });
  const order = [...prefer.filter((f) => FIELD_ORDER.includes(f)), ...FIELD_ORDER.filter((f) => !prefer.includes(f))];
  for (const field of order) {
    const v = out[field] | 0;
    const item = itemOf(field, v);
    if (!item) continue;
    const hit = item.slots.find((s) => taken.has(s));
    if (hit) {
      removed.push({ field, value: v, name: item.name, slot: hit, by: taken.get(hit) });
      if (OPTIONAL_FIELDS.includes(field)) delete out[field]; else out[field] = 0;
      continue;
    }
    for (const s of item.slots) taken.set(s, { field, value: v, name: item.name });
  }
  return { look: out, removed };
}

// Kullanıcıya gösterilecek kısa not (ör. "Kral tacı takıldı, Takke çıkarıldı.").
export function conflictNote(r) {
  if (!r) return '';
  if (r.by && r.by.skin) return `Bu karakterin zaten ${r.by.what} var: ${r.name} çıkarıldı.`;
  return `${r.by.name} takıldı, ${r.name} çıkarıldı.`;
}
export function skinBlockNote(b) {
  return b ? `Bu karakterin zaten ${b.what} var.` : '';
}
