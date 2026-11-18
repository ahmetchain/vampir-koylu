'use strict';

// Ev görünümleri (look.house) ve sahibe özel karakter görünümü (look.acc = kral tacı): tek doğruluk kaynağı.
// Puan YALNIZCA sunucuda hesaplanır: puan = oynanan oyun + 2 x galibiyet (lib/stats.js istatistikleri).
// Açma eşikleri HOUSES tablosundadır; `owner: true` olan görünümü yalnızca sahip hesap (lib/banter.js PEOPLE.owner,
// BANTER_PEOPLE ile değiştirilebilir) seçebilir, kimse puanla açamaz. public/ui/data.js tablosu bununla aynı tutulur
// (test/housesel.test.js kontrol eder).

const { isOwnerName } = require('./banter');

const HOUSES = [
  { name: 'Klasik', min: 0 },
  { name: 'Kırmızı kiremit', min: 3 },
  { name: 'Taş ev', min: 8 },
  { name: 'Kış evi', min: 15 },
  { name: 'Çiçekli çatı', min: 25 },
  { name: 'Saray', owner: true },
];
const HOUSE_COUNT = HOUSES.length;
const KING_ACC = 6;   // look.acc: kral tacı (yalnızca sahip)

function pointsOf(stats) {
  const s = stats || {};
  return (Number(s.games) || 0) + 2 * (Number(s.wins) || 0);
}

function validHouse(v) { return Number.isInteger(v) && v >= 0 && v < HOUSE_COUNT; }

// Bu hesap (kullanıcı adı + puan) bu ev görünümünü seçebilir mi? Misafir/hesapsız: yalnızca varsayılan (0).
function canUseHouse(house, { username = null, points = 0 } = {}) {
  if (!validHouse(house)) return false;
  const h = HOUSES[house];
  if (h.owner) return Boolean(username && isOwnerName(username));
  return house === 0 || (username != null && points >= h.min);
}

function canUseAcc(acc, { username = null } = {}) {
  if (acc === KING_ACC) return Boolean(username && isOwnerName(username));
  return true;
}

// Kayıtlı görünümü hak edilene indirger (ör. sahip listeden çıktıysa ya da kayıt elle bozulduysa).
function sanitizeLook(look, who) {
  const out = { ...look };
  if (!canUseHouse(out.house | 0, who)) delete out.house;
  else if (!out.house) delete out.house;
  if (!canUseAcc(out.acc, who)) delete out.acc;
  return out;
}

module.exports = { HOUSES, HOUSE_COUNT, KING_ACC, pointsOf, validHouse, canUseHouse, canUseAcc, sanitizeLook };
