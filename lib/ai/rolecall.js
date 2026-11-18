'use strict';

// Rol çağrısı: bir oyuncu sohbette belli bir rolü konuşmaya çağırırsa ("Gözcü bir gözlem yaptı mı?",
// "Kahin varsa bilgi versin", "Doktor kendini mi korudu?") o role sahip botlar isimle seslenilmiş gibi cevap verir.
// Gerçek oyunlarda hiç kimse bilgi vermiyordu: herkes "rolüm gizli kalsın" diye bekliyordu ve köy kilitleniyordu.
// Rol yalnızca sunucunun bildiği gerçek rolden eşleşir (Deli kendini Gözcü sanıyorsa o da cevap verir; bu doğaldır).

const { norm } = require('./speech');

const ROLE_WORDS = [
  ['gozcu', /(^|[^a-z])gozcu/],
  ['kahin', /(^|[^a-z])kahin/],
  ['doktor', /(^|[^a-z])doktor/],
  ['gardiyan', /(^|[^a-z])gardiyan/],
  ['cadi', /(^|[^a-z])cadi($|[^a-z])/],
  ['avci', /(^|[^a-z])avci/],
  ['muhtar', /(^|[^a-z])muhtar/],
];
// Soru ya da bilgi isteği: soru işareti ya da "var mı / söylesin / bilgi / gözlem / ne yaptı…".
const ASK = /\?|(^|[^a-z])(var mi|varsa|kim|bilgi|soyle|acil|konus|ses ver|gozlem|yapti|gordu|baktin|bakti|korudu|inceledi|kilitledi|neredesin)/;

// Mesajın çağırdığı roller (küme). Soru/bilgi isteği değilse boş.
function rolesCalled(text) {
  const t = norm(text);
  if (!t || t.length > 160 || !ASK.test(t)) return new Set();
  const out = new Set();
  for (const [role, re] of ROLE_WORDS) if (re.test(t)) out.add(role);
  return out;
}

module.exports = { rolesCalled };
