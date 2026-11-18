'use strict';

// Ev görünümleri (look.house) ve puanla/sahiplikle açılan karakter öğeleri (şapka, aksesuar, üst, alt): tek doğruluk kaynağı.
// Puan YALNIZCA sunucuda hesaplanır: puan = oynanan oyun + 2 x galibiyet (lib/stats.js istatistikleri).
// Açma eşikleri HOUSES tablosunda ve lib/cosmetics.js öğe tablolarında (min) bulunur; `owner: true` olanı yalnızca sahip hesap
// (lib/banter.js PEOPLE.owner, BANTER_PEOPLE ile değiştirilebilir) seçebilir, kimse puanla açamaz. Sahip/admin her şeyi açık görür.
// public/ui/data.js ve public/ui/cosmetics.js tabloları bununla aynı tutulur (test/housesel.test.js, test/cosmetics.test.js).

const { isOwnerName } = require('./banter');
const { LOOK_ITEMS, itemOf, resolveLook, OPTIONAL_FIELDS } = require('./cosmetics');

const HOUSES = [
  { name: 'Klasik', min: 0 },
  { name: 'Kırmızı kiremit', min: 3 },
  { name: 'Taş ev', min: 8 },
  { name: 'Kış evi', min: 15 },
  { name: 'Çiçekli çatı', min: 25 },
  { name: 'Saray', owner: true },
  { name: 'Değirmen', min: 35 },
  { name: 'Cumbalı ev', min: 50 },
  { name: 'Osmanlı konağı', min: 70 },
  { name: 'Demirci', min: 100 },
  { name: 'Çeşmeli taş ev', min: 140 },
  { name: 'Taç kapılı taş ev', min: 200 },
];
const HOUSE_COUNT = HOUSES.length;
const KING_ACC = 6;   // look.acc: kral tacı (yalnızca sahip)
const ITEM_FIELDS = Object.keys(LOOK_ITEMS);   // hat, acc, top, bottom

function pointsOf(stats) {
  const s = stats || {};
  return (Number(s.games) || 0) + 2 * (Number(s.wins) || 0);
}

function validHouse(v) { return Number.isInteger(v) && v >= 0 && v < HOUSE_COUNT; }

// Bu hesap (kullanıcı adı + puan) bu ev görünümünü seçebilir mi? Misafir/hesapsız: yalnızca varsayılan (0).
function canUseHouse(house, { username = null, points = 0 } = {}) {
  if (!validHouse(house)) return false;
  const h = HOUSES[house];
  if (username && isOwnerName(username)) return true;   // sahip/admin: puan sınırı yok
  if (h.owner) return Boolean(username && isOwnerName(username));
  return house === 0 || (username != null && points >= h.min);
}

// Şapka/aksesuar/üst/alt öğesi bu hesaba açık mı? 0 (yok) her zaman açık; aralık dışı değer açık değildir.
// Puanlı öğeler misafire kapalıdır (evlerle aynı kural).
function canUseItem(field, v, { username = null, points = 0 } = {}) {
  if (v === 0 || v === undefined) return true;
  const item = itemOf(field, v);
  if (!item) return false;
  if (username && isOwnerName(username)) return true;
  if (item.owner) return false;
  if (item.min) return username != null && points >= item.min;
  return true;
}
function canUseAcc(acc, who = {}) { return canUseItem('acc', acc, who); }

// Değer bir alan için ne kadar kilitli: null (açık) ya da Türkçe gerekçe (hata iletileri için).
function lockMessage(field, v) {
  const item = itemOf(field, v);
  if (!item) return 'Geçersiz görünüm.';
  return item.owner ? 'Bu öğe yalnızca sahibine özel.' : `Bu öğe henüz kilitli (${item.min} puan gerek).`;
}

// Kayıtlı görünümü hak edilene indirger (ör. sahip listeden çıktıysa, puan yetmiyorsa ya da kayıt elle bozulduysa)
// ve eski kayıtlardaki yuva çakışmalarını (ör. şapka + kral tacı, sakallı karakter + sakal) giderir.
function sanitizeLook(look, who) {
  const out = { ...look };
  if (!canUseHouse(out.house | 0, who)) delete out.house;
  else if (!out.house) delete out.house;
  for (const f of ITEM_FIELDS) {
    if (out[f] === undefined) continue;
    if (!canUseItem(f, out[f], who)) { if (OPTIONAL_FIELDS.includes(f)) delete out[f]; else out[f] = 0; }
    else if (OPTIONAL_FIELDS.includes(f) && !out[f]) delete out[f];
  }
  return resolveLook(out).look;
}

module.exports = {
  HOUSES, HOUSE_COUNT, KING_ACC, ITEM_FIELDS, pointsOf, validHouse, canUseHouse, canUseAcc, canUseItem, lockMessage, sanitizeLook,
};
