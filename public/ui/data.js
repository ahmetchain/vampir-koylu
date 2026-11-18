// Oyunun sabit verileri: renkler, şapkalar, karakterler, roller ve dağıtım kuralı.
// Değerler docs/V2-PLAN.md §4 ve docs/PROTOCOL.md §2-§4 ile aynı tutulur.

export const COLORS = [
  '#d7263d', '#2b59c3', '#2f9e44', '#f06595', '#f76707', '#f2c12e', '#3b3b46', '#e9ecef', '#7048e8', '#8d5a3b',
  '#15aabf', '#94d82d', '#862e3c', '#ffa8c5', '#1c2e6e', '#868e96', '#d9b99b', '#ff8364', '#6b7a2a', '#b197fc',
];
export const COLOR_NAMES = [
  'Kırmızı', 'Mavi', 'Yeşil', 'Pembe', 'Turuncu', 'Sarı', 'Siyah', 'Beyaz', 'Mor', 'Kahverengi',
  'Camgöbeği', 'Fıstık', 'Bordo', 'Gül', 'Lacivert', 'Gri', 'Bej', 'Mercan', 'Zeytin', 'Lavanta',
];
// Şapka/aksesuar/üst/alt öğeleri, yuvaları (slot) ve kilitleri tek tabloda: ./cosmetics.js (sunucu kopyası lib/cosmetics.js).
export { HAT_ITEMS, ACC_ITEMS, TOP_ITEMS, BOTTOM_ITEMS, SKIN_FEATURES, resolveLook, skinBlock, lockOf, conflictNote, skinBlockNote } from './cosmetics.js';
import { HAT_ITEMS, ACC_ITEMS, TOP_ITEMS, BOTTOM_ITEMS } from './cosmetics.js';
export const HAT_NAMES = HAT_ITEMS.map((it) => it.name);
// look.acc / look.top / look.bottom (isteğe bağlı; yoksa 0)
export const ACC_NAMES = ACC_ITEMS.map((it) => it.name);
export const TOP_NAMES = TOP_ITEMS.map((it) => it.name);
export const BOTTOM_NAMES = BOTTOM_ITEMS.map((it) => it.name);
// Ev görünümleri (look.house; 0 = klasik). Eşikler lib/houses.js ile aynı olmalı (test/housesel.test.js kontrol eder);
// kilidi sunucu doğrular, buradaki tablo yalnızca gösterim içindir. Puan = oynanan oyun + 2 x galibiyet.
// roof/wall: önizleme kartındaki renkler. owner: yalnızca sahip hesap seçebilir.
export const HOUSES = [
  { name: 'Klasik', min: 0, roof: '#9c3b32', wall: '#f0c9a0' },
  { name: 'Kırmızı kiremit', min: 3, roof: '#c4392b', wall: '#f0c9a0' },
  { name: 'Taş ev', min: 8, roof: '#6b717c', wall: '#a8adb6' },
  { name: 'Kış evi', min: 15, roof: '#f2f6fc', wall: '#cfd9ea' },
  { name: 'Çiçekli çatı', min: 25, roof: '#4f9a45', wall: '#f4e2c2' },
  { name: 'Saray', owner: true, roof: '#7b3fbf', wall: '#e6dcf5', dome: '#f7c82a' },
  { name: 'Değirmen', min: 35, roof: '#8a5a33', wall: '#f1e3c4' },
  { name: 'Cumbalı ev', min: 50, roof: '#a8432f', wall: '#f5ead6' },
  { name: 'Osmanlı konağı', min: 70, roof: '#9a3a2c', wall: '#e9d2a8' },
  { name: 'Demirci', min: 100, roof: '#4b4440', wall: '#9a8f86' },
  { name: 'Çeşmeli taş ev', min: 140, roof: '#7d5a44', wall: '#d8cbb6' },
  { name: 'Taç kapılı taş ev', min: 200, roof: '#6d4b3a', wall: '#d9b98c' },
];
export const HOUSE_NAMES = HOUSES.map((h) => h.name);
export const KING_ACC = 6;   // look.acc: kral tacı (yalnızca sahip)
export const pointsOf = (stats) => ((stats && stats.games) | 0) + 2 * ((stats && stats.wins) | 0);

export const SKIN_NAMES = [
  'Pamuk', 'Fındık', 'Kestane', 'Papatya', 'Ceviz', 'Şeftali',
  'Kakao', 'Tarçın', 'Lale', 'Badem', 'Kömür', 'Gümüş',
];

// Açık renklerde yazı koyu olmalı.
export function inkOn(hex) {
  const n = parseInt(String(hex).slice(1), 16);
  const r = (n >> 16) & 255; const g = (n >> 8) & 255; const b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) > 150 ? '#1a1430' : '#ffffff';
}
export const colorOf = (look) => COLORS[(look && look.color) || 0] || COLORS[0];

export const ROLES = {
  vampir: {
    name: 'Vampir', team: 'vampir', teamName: 'Vampirler', color: '#d7263d',
    short: 'Geceleri kurbanını seçer.',
    desc: 'Her gece her vampir kendi kurbanını seçer ve o eve gider: iki vampir aynı kişiyi seçerse tek ölüm olur, ayrı kişileri seçerse iki ölüm. Oyun başında bir vampire İftira ya da Temizlik yeteneği verilebilir: o gece öldürmek yerine iftira atar ya da bir kişinin izini siler. Gündüz köylü gibi davran, yakalanma. Sayınız diğer oyunculara eşitlenince kazanırsınız.',
  },
  doktor: {
    name: 'Doktor', team: 'koylu', teamName: 'Köylüler', color: '#3fb58a',
    short: 'Her gece birini korur.',
    desc: 'Her gece birini koru, kendini de seçebilirsin. Koruduğun kişi o gece ne ısırıkla ne de zehirle ölür.',
  },
  kahin: {
    name: 'Kahin', team: 'koylu', teamName: 'Köylüler', color: '#8f7cff',
    short: 'İki rolden birini bulur.',
    desc: 'Her gece birine kristal küreyle bak: iki rol görürsün, biri onun gerçek rolü ("X şu ikisinden biri: A ya da B"). Sonuç sadece sana gelir; aynı kişiye yine bakarsan aynı ikiliyi görürsün. Bir vampir o gece ona iftira attıysa "Vampir" seçeneklerden biri olur.',
  },
  gozcu: {
    name: 'Gözcü', team: 'koylu', teamName: 'Köylüler', color: '#e8a33a',
    short: 'Bir evi gözetler.',
    desc: 'Her gece bir evi pencereden gözetle, kendi evin de olur. Gece yaşanırken o eve kimlerin geldiğini (kapıdan dönenler dahil) ve ev sahibinin çıkıp hangi eve gittiğini görürsün; sonra raporunu alırsın. Kimin ne yaptığını ya da rolünü göremezsin.',
  },
  gardiyan: {
    name: 'Gardiyan', team: 'koylu', teamName: 'Köylüler', color: '#7f9cc4',
    short: 'Gündüz bir kapıyı kilitler.',
    desc: 'Gündüz, gelecek gece hangi evi kilitleyeceğini seçersin (gün bitene kadar değiştirebilirsin). Kilitli evin sahibi dışarı çıkamaz (bunu önceden bilmez; çıkmaya çalışınca öğrenir), gelen herkes kapıyı kilitli bulup geri döner. Kendi evini ya da arka arkaya iki gece aynı evi kilitleyemezsin; ilk gece kilit olmaz. Sabah kapıyı kaç kişinin zorladığını ve ev sahibinin dışarı çıkmak isteyip istemediğini öğrenirsin, kimin olduğunu değil.',
  },
  cadi: {
    name: 'Cadı', team: 'koylu', teamName: 'Köylüler', color: '#6cc04a',
    short: 'Bir iksir, bir zehir.',
    desc: 'Vampirlerin kimi hedeflediğini görürsün. Oyun boyunca bir kez hayat iksiriyle kurbanı kurtarabilir, bir kez de zehirle birini öldürebilirsin (kendini zehirleyemezsin).',
  },
  avci: {
    name: 'Avcı', team: 'koylu', teamName: 'Köylüler', color: '#c9772b',
    short: 'Ölürken son atışını yapar.',
    desc: 'Gece ya da gündüz ölürsen, son nefesinde 20 saniye içinde istediğin birini vurup yanında götürürsün.',
  },
  muhtar: {
    name: 'Muhtar', team: 'koylu', teamName: 'Köylüler', color: '#f2c12e',
    short: 'Oyu iki sayılır.',
    desc: 'Gündüz oylamasında oyun iki sayılır. Ama dikkat: oy verdiğinde bu herkese görünür!',
  },
  soytari: {
    name: 'Soytarı', team: 'soytari', teamName: 'Tek başına', color: '#ff6fae',
    short: 'Asılmak ister.',
    desc: 'Amacın köyü seni asmaya ikna etmek. Gündüz asılırsan tek başına kazanırsın ve oyun biter. Gece ölürsen kaybedersin.',
  },
  deli: {
    name: 'Deli', team: 'koylu', teamName: 'Köylüler', color: '#9aa3c7',
    short: 'Kendini başka bir rol sanır.',
    desc: 'Deli kendini başka bir köylü rolü sanır (Doktor, Kahin, Gözcü ya da Gardiyan; odada açık olanlardan biri) ve kartında da o rol yazar. O rol gibi oynar ama yaptıklarının hiçbir etkisi yoktur, öğrendikleri de uydurmadır. Gece yine evinden çıkıp yürür: gerçek Gözcü onu görür, kilitli kapı onu da geri çevirir. Kahin ona bakarsa "vampir değil" görür. Gerçeği ancak ölünce ya da oyun bitince öğrenir. Köyle birlikte kazanır.',
    note: 'Odada Deli açıksa kendi bilgilerinden de şüphe et: Deli olduğunu bilemezsin.',
  },
  hirsiz: {
    name: 'Hırsız', team: 'hirsiz', teamName: 'Tarafsız', color: '#3fa7b5',
    short: 'Bir kez soyar, rolü çalar.',
    desc: 'Oyunda bir kez, gece yaşayan birini soymaya gidersin; seçim kesindir. Kapıya ulaşırsan o kişi o gece ölür (Doktor korumuyorsa) ve sen onun rolünü olduğu gibi alırsın: kullanılmış iksirleri dahil, takımıyla birlikte. Kilitli kapıdan dönersen ya da Doktor korursa hakkın yanmaz; başka bir gece yine deneyebilirsin. Seçmemek de bir seçimdir: başka geceyi beklersin. Çalana kadar tarafsızsın, Kahin seni "vampir değil" görür; oyun sen çalmadan biterse kaybedersin.',
    note: 'Sadece 7 ve üstü oyuncuda dağıtılır.',
  },
  koylu: {
    name: 'Köylü', team: 'koylu', teamName: 'Köylüler', color: '#c9a96e',
    short: 'Tartışır, oy verir.',
    desc: 'Gece uyursun. Gündüz tartış, şüphelendiğin kişiye oy ver ve vampirleri bul.',
  },
};
export const ROLE_LIST = ['vampir', 'doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'soytari', 'deli', 'hirsiz', 'koylu'];
// Sunucunun özel rolleri ekleme sırası (PROTOCOL §3).
export const SPECIAL_ORDER = ['doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'soytari', 'deli', 'hirsiz'];
// İftira / Temizlik artık rol değil, vampir yeteneğidir; oda anahtarları eski adlarla ('iftiraci', 'temizlikci') saklanır.
export const TOGGLE_ROLES = ['doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'soytari', 'deli', 'hirsiz'];
export const ABILITY_TOGGLES = ['iftiraci', 'temizlikci'];
export const ABILITIES = {
  iftira: { toggle: 'iftiraci', icon: 'iftiraci', name: 'İftira yeteneği', short: 'Öldürmek yerine masuma iftira atar.',
    desc: 'Bir vampir, o gece öldürmek yerine vampir olmayan birine iftira atabilir: Kahin o gece ona bakarsa "Vampir" iki seçenekten biri olur; o kişi o gece ölürse ya da ertesi gün oyla elenirse köye "Vampir" olarak duyurulur (gerçek oyun sonunda çıkar).' },
  temizlik: { toggle: 'temizlikci', icon: 'temizlikci', name: 'Temizlik yeteneği', short: 'Öldürmek yerine bir kişinin izini siler.',
    desc: 'Bir vampir, o gece öldürmek yerine vampir olmayan birinin evine gidip izlerini silebilir: o kişi o gece ölürse ya da ertesi gün oyla elenirse rolü oyun sonuna kadar köyden gizlenir.' },
};
export const ABILITY_OF_TOGGLE = { iftiraci: 'iftira', temizlikci: 'temizlik' };
// Yeni odada bütün roller açık gelir: rastgele dağıtımda her oyun farklı bir karışım çıkar (kapalı kalırsa herkes köylü olur).
export const DEFAULT_ROLES = { doktor: true, kahin: true, gozcu: true, gardiyan: true, cadi: true, avci: true, muhtar: true, soytari: true, deli: true, hirsiz: true, iftiraci: true, temizlikci: true };
export const MIN_PLAYERS = 5;
export const MAX_PLAYERS = 20;
export const ABILITY_MIN = 7;   // yetenekler ancak bu kadar oyuncuyla verilir
export const THIEF_MIN = 7;
export const TEAM_NAME = { koylu: 'Köylüler', vampir: 'Vampirler', soytari: 'Soytarı', hirsiz: 'Tarafsız' };
export const WIN_TITLE = { koylu: 'Köylüler kazandı!', vampir: 'Vampirler kazandı!', soytari: 'Soytarı kazandı!' };
export const isEvil = (role) => role === 'vampir';

// Oda ayarı `vampires`: 'auto' ya da 1–4 (sunucudaki game.js vampireCount ile aynı).
export const VAMPIRE_OPTS = ['auto', 1, 2, 3, 4];
// Köy çoğunlukta kalsın: en fazla floor((oyuncu − 1) / 2) vampir (5 kişide 2, 8'de 3 …).
export function maxVampires(n) {
  return Math.max(1, Math.floor((n - 1) / 2));
}
export function vampireCount(n, setting = 'auto') {
  if (Number.isInteger(setting) && setting > 0) return Math.max(1, Math.min(setting, maxVampires(n)));
  return n >= 15 ? 3 : n >= 10 ? 2 : 1;
}

// Sunucudaki önizlemenin aynısı: { list: [vampirler, kesin özel roller..., köylüler], pool }.
// Özel roller sığmazsa pool = { pick, from } (hangilerinin çıkacağı oyunda rastgele belirlenir). Yetenekler (iftira,
// temizlik) rol dağıtımına karışmaz; oyun başında vampirlere ayrıca verilir.
// mode 'random' (§15.3): sade köylü = max(1, round(n × 0,2)), kalan yerler açık köy rollerinden rastgele. 'all': eski kural.
export function distributionPlan(n, roles, mode = 'all', vampires = 'auto') {
  const vc = vampireCount(n, vampires);
  const village = SPECIAL_ORDER.filter((r) => roles[r] && !(r === 'hirsiz' && n < THIEF_MIN));
  if (mode === 'random') {
    const plain = Math.max(1, Math.round(n * 0.2));
    const slots = Math.max(0, n - vc - plain);
    let sure;
    if (village.length <= slots) sure = village;
    else {
      const must = village.filter((r) => r === 'kahin' || r === 'gozcu');
      sure = must.length === 1 && slots >= 1 ? must : [];
    }
    const koylu = plain + (village.length <= slots ? slots - village.length : 0);
    const list = [...Array(vc).fill('vampir'), ...sure, ...Array(koylu).fill('koylu')].slice(0, n);
    const open = n - list.length;
    return { list, pool: open > 0 ? { pick: open, from: village.filter((r) => !sure.includes(r)) } : null };
  }
  const out = Array(vc).fill('vampir');
  const slots = Math.max(0, n - out.length - (n < 8 ? 1 : 0));
  let pool = null;
  if (village.length <= slots) out.push(...village);
  else if (slots > 0) pool = { pick: slots, from: village };
  while (out.length < n - (pool ? pool.pick : 0)) out.push('koylu');
  return { list: out, pool };
}

export function distribution(n, roles) {
  return distributionPlan(n, roles).list;
}

export function countRoles(list) {
  const c = {};
  for (const r of list) c[r] = (c[r] || 0) + 1;
  return ROLE_LIST.filter((r) => c[r]).map((r) => ({ role: r, n: c[r] }));
}

// İstatistiklerden basit seviye: oyun 20, galibiyet 30 puan.
const TITLES = ['Çaylak Köylü', 'Meraklı Komşu', 'Fener Taşıyıcı', 'Köy Bekçisi', 'Sarımsak Ustası', 'Gece Avcısı', 'Dolunay Bilgesi', 'Köyün Efsanesi'];
export function levelOf(stats, admin = false) {
  if (admin) return { xp: Infinity, level: '∞', from: 0, to: Infinity, progress: 1, title: 'Ulaşılamaz', admin: true };
  const games = (stats && stats.games) || 0;
  const wins = (stats && stats.wins) || 0;
  const xp = games * 20 + wins * 30;
  let level = 1;
  while (xp >= 50 * level * (level + 1)) level++;
  const from = 50 * (level - 1) * level;
  const to = 50 * level * (level + 1);
  return {
    xp, level, from, to,
    progress: Math.max(0, Math.min(1, (xp - from) / (to - from))),
    title: TITLES[Math.min(TITLES.length - 1, Math.floor((level - 1) / 2))],
  };
}

export const PHASE = {
  lobby: 'Lobi', reveal: 'Roller', night: 'Gece', day: 'Gündüz', hunter: 'Avcının atışı', ended: 'Oyun bitti',
};

// Kullanıcı adı kuralları (PROTOCOL §5.2) — sunucu yine de son sözü söyler.
export function checkUsername(raw) {
  const v = String(raw || '').normalize('NFC').trim().replace(/\s+/g, ' ');
  if (v.length < 3) return { v, error: 'Kullanıcı adı en az 3 karakter olmalı.' };
  if (v.length > 16) return { v, error: 'Kullanıcı adı en fazla 16 karakter olabilir.' };
  if (!/^[\p{L}\p{N}_.-]+(?: [\p{L}\p{N}_.-]+)*$/u.test(v)) {
    return { v, error: 'Sadece harf, rakam, boşluk ve _ - . kullanabilirsin.' };
  }
  return { v, error: null };
}
export function checkPassword(raw) {
  const v = String(raw || '');
  if (v.length < 6) return 'Şifre en az 6 karakter olmalı.';
  if (v.length > 72) return 'Şifre en fazla 72 karakter olabilir.';
  return null;
}

// "Nasıl Oynanır" rol rehberi: ne yapar, ne zaman, sınırları, diğer rollerle, bir ipucu.
export const ROLE_GROUPS = [
  ['vampir', 'Vampir takımı', ['vampir']],
  ['koylu', 'Köy', ['doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'deli', 'koylu']],
  ['soytari', 'Tek başına', ['soytari', 'hirsiz']],
];
export const ROLE_GUIDE = {
  vampir: {
    what: 'Her gece kendi kurbanını seçer ve o eve gidersin. Takımındaki her vampir de kendi kurbanını seçer.',
    when: 'Gece, seçim bölümünde. Kimi seçtiğini takım arkadaşların da görür. Aynı kişiyi seçerseniz tek ölüm olur ve ikiniz de o eve gidersiniz; ayrı kişileri seçerseniz iki ölüm olur. Yeteneğin varsa (İftira ya da Temizlik) gece sağ alttaki düğmeden öldürmek yerine yeteneğini seçebilirsin.',
    limits: 'Kendini ve diğer vampirleri seçemezsin; yeteneğin hedefi de vampir olamaz. Her gece tek eylem; seçim kesindir. Yetenekler en az 7 oyuncuyla, açıksa ve vampirlere dağılabildiği kadar verilir.',
    with: 'Doktor korursa ya da Cadı hayat iksiri verirse kurban yaşar. Gardiyanın kilitlediği kapıdan geri dönersin. Gözcü o eve gelenleri görür: aynı eve iki vampir giderse ikisini birden yakalar. Kahin sana bakarsa "Vampir" iki seçenekten biri olur. İftira: kurbanın Kahin\'e "Vampir" görünür, ölürse ya da ertesi gün asılırsa köye "Vampir" diye duyurulur. Temizlik: ölürse ya da ertesi gün asılırsa rolü gizli kalır ("izler silinmiş").',
    tip: 'Gündüz susmak da şüphe çeker: tartışmaya katıl, oyları başkasına yönlendir. İki vampir aynı eve gitmek Gözcü varsa risklidir.',
  },
  doktor: {
    what: 'Her gece bir kişiyi korursun; kendini de seçebilirsin.',
    when: 'Gece, seçim bölümünde.',
    limits: 'Korumanın işlemesi için o eve ulaşman gerekir: kilitli kapı seni geri çevirir; vampirler o gece seni öldürürse koruman da olmaz.',
    with: 'Koruduğun kişi o gece ne vampirle, ne Hırsız\'la, ne de zehirle ölür. Koruman gerçekten bir saldırıyı durdurduysa evden yeşil artılar yükselir ve bunu gizlice öğrenirsin.',
    tip: 'Hep kendini korumak güvenlidir ama köyü korumaz; gündüz en çok işe yarayan kişiyi koru.',
  },
  kahin: {
    what: 'Her gece bir kişiye bakarsın ve iki rol öğrenirsin: biri onun gerçek rolü, öteki yanıltıcı. ("X şu ikisinden biri: A ya da B.")',
    when: 'Gece, seçim bölümünde seçersin; sonuç gece yaşanırken sadece sana gelir.',
    limits: 'Kendine bakamazsın. Aynı kişiye yine bakarsan aynı ikiliyi görürsün. O gece ölürsen ya da kilitli kapıdan dönersen sonuç gelmez.',
    with: 'Bir vampir o kişiye iftira attıysa "Vampir" seçeneklerden biri olur. Deli, kendini hangi rol sanıyorsa öyle görünür. Masum biri çoğu zaman iki masum rolle görünür (yanıltıcı rol sadece yaklaşık yarı ihtimalle öbür taraftan gelir).',
    tip: 'İkilileri gündüz söylenenlerle karşılaştır: kendini Doktor diyen birinin ikilisinde Doktor yoksa yalan söylüyordur.',
  },
  gozcu: {
    what: 'Her gece bir evi dışarıdan gözetlersin; kendi evin de olur.',
    when: 'Seçim bölümünde seçersin; gece yaşanırken o eve kimlerin geldiğini görürsün, sonra raporunu alırsın.',
    limits: 'Rolleri ve kimin ne yaptığını göremezsin; sadece kimin geldiğini ve ev sahibinin çıkıp hangi eve gittiğini görürsün. O gece ölürsen rapor gelmez.',
    with: 'Kilitli kapıdan dönenleri de görürsün. Deli de gerçekten yürür; onu da görürsün.',
    tip: 'Şüphelendiğin kişinin evini izle: gece dışarı çıkıyorsa bir gece rolü vardır.',
  },
  gardiyan: {
    what: 'Gündüz, gelecek gece kilitlenecek kapıyı seçersin.',
    when: 'Gündüz; gün bitene kadar değiştirebilir ya da vazgeçebilirsin. İlk gece kilit olmaz.',
    limits: 'Kendi kapını ve bir önceki gece kilitlenen kapıyı seçemezsin.',
    with: 'Kilitli evin sahibi o gece dışarı çıkamaz; gelen herkes (vampir, Doktor, Kahin, Cadı, Hırsız) kapıdan döner ve hiçbir etkisi olmaz. Ev sahibine kilit önceden söylenmez: kilidi ancak dışarı çıkmaya çalışınca ya da biri kapıyı zorlayınca öğrenir. Gözcü yine de gelenleri görür. Sabah kaç kişinin zorladığını ve ev sahibinin de dışarı çıkmak isteyip istemediğini (yani gece görevi olup olmadığını) öğrenirsin, kim olduklarını değil.',
    tip: 'Kendini Kahin diye açıklayan birini kilitlemek onu korur, ama o gece o da bakamaz.',
  },
  cadi: {
    what: 'Oyun boyunca bir hayat iksirin ve bir zehrin var.',
    when: 'Gece, seçim bölümünde. Vampirlerin hedefini görürsün; iki iksiri aynı gece de kullanabilirsin.',
    limits: 'Her biri bir kez. Kendini zehirleyemezsin; aynı kişiye ikisini birden veremezsin. Seçim kesindir; istemiyorsan "Bu gece bekle".',
    with: 'Hayat iksiri sadece vampir saldırısını durdurur. Vampirler seni o gece öldürürse sıran gelmez: zehrin ve iksirin boşa gider. Doktorun koruduğu kişi zehirle de ölmez. Kilitli kapı seni de geri çevirir.',
    tip: 'Zehri erken harcama; gündüz konuşmalarından emin olunca kullan.',
  },
  avci: {
    what: 'Ölürsen son nefesinde birini vurursun.',
    when: 'Gece ya da gündüz öldüğün anda, 20 saniye içinde.',
    limits: 'Gece görevin yok. Süre dolarsa atış hakkın yanar.',
    with: 'Vampirler seni öldürse de, köy seni assa da atışını yaparsın.',
    tip: 'En güçlü şüphelini aklında tut; öldüğünde düşünecek vaktin az.',
  },
  muhtar: {
    what: 'Gündüz oyun iki sayılır.',
    when: 'Gündüz oylamasında ve mahkemede.',
    limits: 'Oy verdiğinde herkes görür; rolün kolay anlaşılır.',
    with: 'Vampirler güçlü oyu fark edip seni hedefleyebilir.',
    tip: 'Oyunu son ana sakla; kararı çoğu zaman sen belirlersin.',
  },
  deli: {
    what: 'Kendini başka bir köylü rolü (Doktor, Kahin, Gözcü ya da Gardiyan) sanırsın ve öyle oynarsın; kartında da o rol yazar.',
    when: 'O rol gibi; ama yaptıklarının hiçbir etkisi yoktur, öğrendiklerin uydurmadır.',
    limits: 'Deli olduğunu bilemezsin. Gerçeği ancak ölünce ya da oyun bitince öğrenirsin.',
    with: 'Gece gerçekten yürür: Gözcü seni görür, kilitli kapı seni de döndürür. Kahin sana bakarsa sandığın rol seçeneklerden biri olur. Köyle birlikte kazanırsın.',
    tip: 'Odada Deli açıksa kendi bilgilerine bile körü körüne güvenme; başkalarınınkiyle karşılaştır.',
  },
  koylu: {
    what: 'Gece görevin yok; gündüz tartışır, oy verirsin.',
    when: 'Gündüz.',
    limits: 'Gece konuşamazsın.',
    with: 'Kahin sana bakarsa "Köylü" seçeneklerden biri olur.',
    tip: 'Kim neyi ne zaman söyledi aklında tut; çelişkiler vampirleri ele verir.',
  },
  soytari: {
    what: 'Köyü seni asmaya ikna etmeye çalışırsın.',
    when: 'Gündüz.',
    limits: 'Gece ölürsen kaybedersin.',
    with: 'Gündüz asılırsan tek başına kazanırsın ve oyun biter.',
    tip: 'Fazla bariz olma: köy seni Soytarı sanarsa asmaz.',
  },
  hirsiz: {
    what: 'Oyunda bir kez, gece birini soymaya gidersin. Başarırsan o kişi ölür, sen de rolünü olduğu gibi alırsın.',
    when: 'Gece, seçim bölümünde. İstemiyorsan "Bu gece bekle": hakkın başka geceye kalır.',
    limits: 'Tek kullanımlık; ama kilitli kapıdan dönersen ya da Doktor korursa hakkın yanmaz. Vampirler seni o gece öldürürse soygun olmaz. Sadece 7 ve üstü oyuncuda dağıtılır. Çalmadan oyun biterse kaybedersin.',
    with: 'Çaldığın rolün takımına geçersin (vampir çalarsan vampir takımına). Kullanılmış iksirler kullanılmış kalır; Deli\'yi soyarsan sen de Deli olursun. Kahin sana bakarsa "Hırsız" seçeneklerden biri olur.',
    tip: 'Güçlü bir rolü (Kahin, Cadı) çalmak için gündüz kimin ne olduğunu dinle.',
  },
};

// Köy olayları (V2-PLAN §13.4) ertelendi: ayarı ve "Nasıl Oynanır" bölümü gizli, odalar 'off' kurulur.
// Sunucu yine de bir olay gönderirse aşağıdaki tanımlarla gösterilir.
export const EVENTS_UI = false;

// Köy olayları (V2-PLAN §13.4). Bilinmeyen kimlikler adıyla gösterilir.
export const EVENTS = {
  tipi: { name: 'Tipi', icon: 'snow', phase: 'night', desc: 'Kar fırtınası: köylüler evlerinden çıkamaz. Doktor, kahin, gözcü ve cadı bu gece bir şey yapamaz; sadece vampir takımı dolaşır. Gardiyanın kilidi yine de tutar.' },
  ruzgar: { name: 'Rüzgâr', icon: 'wind', phase: 'night', desc: 'Fırtına kamp ateşini söndürdü, köy zifiri karanlık. Gözcü gelenleri sadece gölge olarak görür: kaç kişi geldiğini bilir, kim olduklarını bilemez.' },
  'kisa-gece': { name: 'Kısa gece', icon: 'moon', phase: 'night', desc: 'Bu gece yarı süre kadar sürer. Kararını çabuk ver!' },
  ayaz: { name: 'Ayaz', icon: 'snow', phase: 'day', desc: 'Dondurucu soğuk: bugün gündüz yarı süre kadar sürer.' },
  sis: { name: 'Sis', icon: 'fog', phase: 'day', desc: 'Oylar gizli: herkes kişi başına sadece oy sayısını görür, kimin kime oy verdiğini göremez. Kendi oyunu yine görürsün.' },
  mahkeme: { name: 'Mahkeme', icon: 'gavel', phase: 'day', desc: 'Gün sonunda en çok oyu alan iki kişi kısa bir savunma yapar, sonra köy sadece bu ikisi arasında yeniden oylar.' },
};
export const EVENT_FREQ = [
  ['off', 'Kapalı', 'Hiç köy olayı olmaz.'],
  ['some', 'Ara sıra', 'En fazla 3 turda bir olay (varsayılan).'],
  ['often', 'Sık', 'En fazla 2 turda bir olay.'],
];
