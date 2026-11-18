'use strict';

// Edep: botlar küfür, yemin ve "lan/valla" gibi sözleri kullanmaz (çocuklar ve büyükler de oynuyor).
// Modele kural olarak da söylenir (lib/ai/rules.js); bu modül son kapıdır: model uymazsa satır burada temizlenir.
// İnsanların sohbetine hiçbir zaman dokunulmaz; yalnızca kaba söz tanınır ki bot nazik bir hatırlatma yapabilsin.

// Harf/rakam sınırı (Türkçe harfler dahil): \b Türkçe harflerde çalışmadığı için Unicode sınıfları kullanılır.
const LN = '[\\p{L}\\p{N}]';
// Not: test() için 'g' bayrağı kullanılmaz (lastIndex durumu bozar); yalnızca replace edenlerde 'g' vardır.
const word = (alt, flags = 'iu') => new RegExp(`(?<!${LN})(?:${alt})(?!${LN})`, flags);

// Satırdan çıkarılan sözler (satırın geri kalanı anlamlı kalır).
const STRIP_FILLER = word('valla\\p{L}*|vallah\\p{L}*|billahi|wallah\\p{L}*|ulan|lan|olm', 'giu');
const STRIP_OATH = word('yemin\\s+(?:ederim|olsun|ediyorum|ederiz)|yemin|allah\\s+için', 'giu');
// Görülürse satırın tamamı atılan sözler (hakaret ve küfür); ekli biçimleri de yakalanır (salaksın, aptalca).
const INSULT = word('salak\\p{L}*|aptal\\p{L}*|gerizekal\\p{L}*|şerefsiz\\p{L}*|serefsiz\\p{L}*|dangalak\\p{L}*|orospu\\p{L}*|siktir\\p{L}*|piç|pic|amk|aq|oç|oc|sik|ibne|puşt|pust');

// Robot gibi duran kalıplar (yapay zekâ kokusu). Makale/rapor dili içeren satır tamamen atılır; başta duran dolgu
// ("Kesinlikle,", "Öncelikle") ve "bir köylü olarak" gibi rol bildirimi satırdan çıkarılır.
const ROBOT_DROP = word('özetlemek gerekirse|sonuç olarak|bu bağlamda|mantıklı bir yaklaşım|değerlendirdiğimde|analizlerime göre|analize göre|talimat\\p{L}*|leave|empty|nothing to do|tonight|your turn|the task');
const ROBOT_LEAD = /^(?:kesinlikle|aslında|şöyle ki|öncelikle|elbette|tabii ki|doğrusu)[,:!]?\s+/iu;
const ROLE_AS = word('bir (?:köylü|vampir|doktor|kahin|gözcü|gardiyan|cadı|avcı|muhtar|iftiracı|temizlikçi|hırsız) olarak,?', 'giu');

const FOLD = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u' };
const fold = (t) => String(t || '').toLocaleLowerCase('tr').replace(/[çğıöşü]/g, (c) => FOLD[c]);

// İnsan mesajı kaba mı (lan/ulan, küfür, hakaret)? Büyük/küçük harf ve Türkçe harf farkı önemsiz.
const RUDE = word('lan|ulan|olm|amk|aq|oc|siktir\\p{L}*|sik|pic|orospu\\p{L}*|salak\\p{L}*|aptal\\p{L}*|gerizekal\\p{L}*|serefsiz\\p{L}*|dangalak\\p{L}*|ibne|pust|kes\\s+sesini|sus\\s+be');
function isRude(text) {
  return RUDE.test(fold(text));
}

// Bot satırını temizler: küfür/hakaret varsa '' (satır gönderilmez); "valla/lan/yemin" çıkarılır.
function cleanBotLine(line) {
  let t = String(line || '');
  if (INSULT.test(fold(t)) || INSULT.test(t)) return '';
  if (ROBOT_DROP.test(t)) return '';
  t = t.replace(STRIP_OATH, ' ').replace(STRIP_FILLER, ' ').replace(ROLE_AS, ' ');
  t = t.trim().replace(ROBOT_LEAD, '');
  t = t.replace(/\s+([,.!?])/g, '$1').replace(/^[\s,.!?;:-]+/, '').replace(/\s{2,}/g, ' ').trim();
  return t.length >= 2 ? t : '';
}

module.exports = { cleanBotLine, isRude };
