'use strict';

// Türkçe dil yardımcıları: oyuncu adlarına kesme işaretiyle hal eki, sayıların okunuşu, sıra sayıları.
// Kullanıcı adları keyfi olabilir (rakam, Latin harf, boşluk, ünlüsüz kısaltma…). Ekin uyumu
// kesin belirlenemiyorsa ek ada değil "adlı komşu" sözüne getirilir: "Xyz adlı komşunun".

const VOWELS = 'aıoueiöü';
const BACK = 'aıou';
const HARD = 'fstkçşhp'; // sert ünsüzler: Ahmet'te, Burak'tan
const TR_LETTERS = /^[a-zçğıöşüâîûA-ZÇĞİÖŞÜÂÎÛ]+$/;

// Söylenişi 'a'/'e' uyumuna aykırı olan (ince l'li) bilinen adlar: Kemal'i, Meral'e…
const PALATAL_L = new Set([
  'kemal', 'celal', 'cemal', 'hilal', 'bilal', 'nihal', 'iclal', 'ikbal', 'meral', 'hayal', 'visal',
  'cemil', 'kemalettin', 'celalettin', 'iclal', 'ikbal', 'lal', 'helal', 'vişal', 'serhal',
]);

const UNITS = ['', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz'];
const TENS = ['', 'on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan'];

// Büyük harf kısaltmaların harf okunuşları (TDK: ekler okunuşa uyar: TDK'ye, ABD'ye, THY'ye).
const LETTER_NAMES = {
  a: 'a', b: 'be', c: 'ce', ç: 'çe', d: 'de', e: 'e', f: 'fe', g: 'ge', ğ: 'yumuşak ge', h: 'he',
  ı: 'ı', i: 'i', j: 'je', k: 'ke', l: 'le', m: 'me', n: 'ne', o: 'o', ö: 'ö', p: 'pe', r: 're',
  s: 'se', ş: 'şe', t: 'te', u: 'u', ü: 'ü', v: 've', y: 'ye', z: 'ze',
};

function trLower(s) {
  return String(s).toLocaleLowerCase('tr');
}

function trUpperFirst(s) {
  const str = String(s);
  if (!str) return str;
  return str[0].toLocaleUpperCase('tr') + str.slice(1);
}

// Sayının söylenişindeki son kelime: 99 -> "dokuz", 40 -> "kırk", 300 -> "yüz", 2000 -> "bin".
function lastNumberWord(digits) {
  const d = String(digits).replace(/^0+/, '');
  if (!d) return 'sıfır';
  let pos = 0;
  for (let i = d.length - 1; i >= 0; i--, pos++) {
    if (d[i] !== '0') break;
  }
  const digit = Number(d[d.length - 1 - pos]);
  if (pos === 0) return UNITS[digit];
  if (pos === 1) return TENS[digit];
  if (pos === 2) return 'yüz';
  if (pos <= 5) return 'bin';
  if (pos <= 8) return 'milyon';
  if (pos <= 11) return 'milyar';
  return null;
}

// Adın sonundaki sözcüğün söylenişini (küçük harf) bulur; belirlenemezse null.
function spokenTail(name) {
  const s = String(name == null ? '' : name).normalize('NFC').trim();
  if (!s) return null;
  // Sondaki _ - . gibi işaretler okunmaz.
  const core = s.replace(/[^\p{L}\p{N}]+$/u, '');
  if (!core) return null;
  const digits = core.match(/\p{N}+$/u);
  if (digits) {
    if (!/^[0-9]+$/.test(digits[0])) return null; // Arap/Hint rakamları vb.
    return lastNumberWord(digits[0]);
  }
  const letters = core.match(/\p{L}+$/u);
  if (!letters) return null;
  const word = letters[0];
  if (!TR_LETTERS.test(word)) return null; // Kiril, Yunan, aksanlı Latin…: söyleniş bilinmez
  if (/[qwxQWX]/.test(word)) return null; // yabancı söyleniş (Max, Andrew…)
  const lower = trLower(word);
  const plain = lower.replace(/â/g, 'a').replace(/î/g, 'i').replace(/û/g, 'u');
  const vowelIdx = [...plain].reduce((acc, ch, i) => (VOWELS.includes(ch) ? i : acc), -1);
  if (vowelIdx === -1) {
    // Ünlüsüz: büyük harfli kısa kısaltmaysa harf adıyla okunur (MRK -> "ke"), yoksa bilinmez.
    if (word === word.toLocaleUpperCase('tr') && word.length >= 2 && word.length <= 5) {
      const last = plain[plain.length - 1];
      return LETTER_NAMES[last] || null;
    }
    return null;
  }
  // Son ünlü büyük noktasız I ise (ALI, MELI) yazan "İ" mi demek istedi bilinmez.
  if ([...word][vowelIdx] === 'I') return null;
  if (PALATAL_L.has(plain)) return `${plain}\u0001`; // işaret: ince uyum
  return plain;
}

// Uyum bilgisi: { back, four, endsVowel, hard } ya da null.
function harmonyOf(name) {
  const tail = spokenTail(name);
  if (!tail) return null;
  const palatal = tail.endsWith('\u0001');
  const word = palatal ? tail.slice(0, -1) : tail;
  const letters = [...word.replace(/ /g, '')];
  let last = null;
  for (const ch of letters) if (VOWELS.includes(ch)) last = ch;
  if (!last) return null;
  const end = letters[letters.length - 1];
  let back = BACK.includes(last);
  let four;
  if (palatal) { back = false; four = 'i'; }
  else four = { a: 'ı', ı: 'ı', e: 'i', i: 'i', o: 'u', u: 'u', ö: 'ü', ü: 'ü' }[last];
  return { back, four, endsVowel: VOWELS.includes(end), hard: HARD.includes(end) };
}

// da = ayrı yazılan 'de/da' bağlacı: 'Ömer de', 'Burak da'.
const CASES = ['gen', 'acc', 'dat', 'loc', 'abl', 'ile', 'cop', 'da'];

// Uyuma göre ek (kesme işaretsiz). cop = geçmiş zaman ek-fiili: Ali'ydi, Burak'tı.
function suffixFor(h, kase) {
  const A = h.back ? 'a' : 'e';
  const I = h.four;
  switch (kase) {
    case 'gen': return h.endsVowel ? `n${I}n` : `${I}n`;
    case 'acc': return h.endsVowel ? `y${I}` : I;
    case 'dat': return h.endsVowel ? `y${A}` : A;
    case 'loc': return `${h.hard ? 't' : 'd'}${A}`;
    case 'abl': return `${h.hard ? 't' : 'd'}${A}n`;
    case 'ile': return h.endsVowel ? `yl${A}` : `l${A}`;
    case 'cop': return h.endsVowel ? `yd${I}` : `${h.hard ? 't' : 'd'}${I}`;
    case 'da': return ` d${A}`;
    default: return '';
  }
}

// Uyum belirlenemeyen adlar için "komşu" sözcüğüne gelen ekler.
const FALLBACK = {
  gen: 'komşunun', acc: 'komşuyu', dat: 'komşuya', loc: 'komşuda', abl: 'komşudan', ile: 'komşuyla', cop: 'komşuydu', da: 'komşu da',
};

// Ada hal eki getirir: ek('Ahmet','dat') -> "Ahmet'e"; ek('Xyz','gen') -> "Xyz adlı komşunun".
function ek(name, kase) {
  const n = String(name == null ? '' : name);
  if (!kase || !CASES.includes(kase)) return n;
  const h = harmonyOf(n);
  if (!h) return `${n} adlı ${FALLBACK[kase]}`;
  if (kase === 'da') return `${n}${suffixFor(h, kase)}`;
  return `${n}'${suffixFor(h, kase)}`;
}

// Cins isimler (ör. "bir komşu") için kesmesiz ek.
function ekCommon(word, kase) {
  const w = String(word);
  if (!kase || !CASES.includes(kase)) return w;
  const h = harmonyOf(w.split(' ').pop());
  if (!h) return w;
  return `${w}${suffixFor(h, kase)}`;
}

// İyelik ekli cins isme (ör. "terzisi", "fırını", "kovanları") hal eki: zamir n'si araya girer.
// possEk('terzisi','acc') -> "terzisini", possEk('fırını','loc') -> "fırınında".
function possEk(word, kase) {
  const w = String(word);
  if (!kase || !CASES.includes(kase)) return w;
  const h = harmonyOf(w.split(' ').pop());
  if (!h || !h.endsVowel) return ekCommon(w, kase);
  const A = h.back ? 'a' : 'e';
  const I = h.four;
  switch (kase) {
    case 'gen': return `${w}n${I}n`;
    case 'acc': return `${w}n${I}`;
    case 'dat': return `${w}n${A}`;
    case 'loc': return `${w}nd${A}`;
    case 'abl': return `${w}nd${A}n`;
    case 'ile': return `${w}yl${A}`;
    case 'cop': return `${w}yd${I}`;
    case 'da': return `${w} d${A}`;
    default: return w;
  }
}

// 0..999999 arası sayıyı yazıyla verir: 21 -> "yirmi bir".
function sayi(n) {
  const num = Math.floor(Math.abs(Number(n)));
  if (!Number.isFinite(num)) return String(n);
  if (num === 0) return 'sıfır';
  if (num >= 1000000) return String(num);
  const parts = [];
  const th = Math.floor(num / 1000);
  const rest = num % 1000;
  if (th) parts.push(th === 1 ? 'bin' : `${sayi(th)} bin`);
  const h = Math.floor(rest / 100);
  if (h) parts.push(h === 1 ? 'yüz' : `${UNITS[h]} yüz`);
  const t = Math.floor((rest % 100) / 10);
  if (t) parts.push(TENS[t]);
  const u = rest % 10;
  if (u) parts.push(UNITS[u]);
  return parts.join(' ');
}

// Sıra sayısı: 1 -> "birinci", 4 -> "dördüncü", 9 -> "dokuzuncu", 20 -> "yirminci".
function sira(n) {
  const words = sayi(n).split(' ');
  let last = words.pop();
  if (last === 'dört') last = 'dörd';
  const h = harmonyOf(last === 'dörd' ? 'dört' : last);
  if (!h) return `${sayi(n)}.`;
  const I = h.four;
  const suffix = h.endsVowel ? `nc${I}` : `${I}nc${I}`;
  words.push(last + suffix);
  return words.join(' ');
}

// İsim listesi: ["A"] -> "A", ["A","B"] -> "A ile B", ["A","B","C"] -> "A, B ve C". Ek son ada gelir.
function liste(names, kase) {
  const arr = (names || []).map(String);
  if (!arr.length) return '';
  const lastName = kase ? ek(arr[arr.length - 1], kase) : arr[arr.length - 1];
  if (arr.length === 1) return lastName;
  if (arr.length === 2) return `${arr[0]} ile ${lastName}`;
  return `${arr.slice(0, -1).join(', ')} ve ${lastName}`;
}

module.exports = {
  ek, ekCommon, possEk, sayi, sira, liste, harmonyOf, spokenTail, lastNumberWord, trLower, trUpperFirst, CASES,
};
