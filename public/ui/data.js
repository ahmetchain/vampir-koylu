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
export const HAT_NAMES = ['Şapkasız', 'Hasır şapka', 'Bere', 'Çiçek', 'Silindir', 'Bandana', 'Filiz', 'Kasket', 'Kulaklık'];
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
    short: 'Geceleri kurban seçer.',
    desc: 'Her gece diğer vampirlerle birlikte bir kurban seç; en çok seçilen kişiye saldırılır. Gündüz köylü gibi davran, yakalanma. Sayınız diğer oyunculara eşitlenince kazanırsınız.',
  },
  iftiraci: {
    name: 'İftiracı', team: 'vampir', teamName: 'Vampirler', color: '#b0408a',
    short: 'Masumlara iftira atar.',
    desc: 'Vampirlerin gizli yardımcısısın: onları tanırsın, onlar da seni; gece onlarla yazışırsın ama öldürme seçimine katılmazsın. Her gece vampir olmayan birine iftira at: kahin o gece ona bakarsa VAMPİR görür. Kahin seni de vampir görür. Son vampir düşerse sen vampire dönüşürsün.',
    note: 'Sadece 7 ve üstü oyuncuda dağıtılır.',
  },
  doktor: {
    name: 'Doktor', team: 'koylu', teamName: 'Köylüler', color: '#3fb58a',
    short: 'Her gece birini korur.',
    desc: 'Her gece birini koru, kendini de seçebilirsin. Koruduğun kişi o gece ne ısırıkla ne de zehirle ölür.',
  },
  kahin: {
    name: 'Kahin', team: 'koylu', teamName: 'Köylüler', color: '#8f7cff',
    short: 'Kristal küreye bakar.',
    desc: 'Her gece birine kristal küreyle bak. Sabah onun vampir olup olmadığını sadece sen öğrenirsin. Dikkat: İftiracı o gece birine iftira attıysa, o kişi de VAMPİR görünür.',
  },
  gozcu: {
    name: 'Gözcü', team: 'koylu', teamName: 'Köylüler', color: '#e8a33a',
    short: 'Bir evi gözetler.',
    desc: 'Her gece bir evi pencereden gözetle, kendi evin de olur. Gece boyunca o eve kimlerin geldiğini (kapıdan dönenler dahil) ve ev sahibinin çıkıp hangi eve gittiğini canlı görürsün. Kimin ne yaptığını ya da rolünü göremezsin.',
  },
  gardiyan: {
    name: 'Gardiyan', team: 'koylu', teamName: 'Köylüler', color: '#7f9cc4',
    short: 'Gündüz bir kapıyı kilitler.',
    desc: 'Gündüz, gelecek gece hangi evi kilitleyeceğini seçersin (gün bitene kadar değiştirebilirsin). Kilitli evin sahibi dışarı çıkamaz, gelen herkes kapıyı kilitli bulup geri döner. Kendi evini ya da arka arkaya iki gece aynı evi kilitleyemezsin; ilk gece kilit olmaz. Sabah kapıyı kaç kişinin zorladığını öğrenirsin, kimin olduğunu değil.',
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
export const ROLE_LIST = ['vampir', 'iftiraci', 'doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'soytari', 'deli', 'hirsiz', 'koylu'];
// Sunucunun özel rolleri ekleme sırası (PROTOCOL §3).
export const SPECIAL_ORDER = ['doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'soytari', 'deli', 'hirsiz'];
export const TOGGLE_ROLES = ['doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'soytari', 'deli', 'hirsiz', 'iftiraci'];
export const DEFAULT_ROLES = { doktor: true, kahin: true, gozcu: false, gardiyan: false, cadi: false, avci: false, muhtar: false, soytari: false, deli: false, hirsiz: false, iftiraci: false };
export const MIN_PLAYERS = 5;
export const MAX_PLAYERS = 20;
export const FRAMER_MIN = 7;
export const THIEF_MIN = 7;
export const TEAM_NAME = { koylu: 'Köylüler', vampir: 'Vampirler', soytari: 'Soytarı', hirsiz: 'Tarafsız' };
export const WIN_TITLE = { koylu: 'Köylüler kazandı!', vampir: 'Vampirler kazandı!', soytari: 'Soytarı kazandı!' };
export const isEvil = (role) => role === 'vampir' || role === 'iftiraci';

export function vampireCount(n) {
  return n >= 15 ? 3 : n >= 10 ? 2 : 1;
}

// Sunucudaki önizlemenin aynısı: { list: [vampirler, iftiracı?, kesin özel roller..., köylüler], pool }.
// Özel roller sığmazsa pool = { pick, from } (hangilerinin çıkacağı oyunda rastgele belirlenir).
export function distributionPlan(n, roles) {
  const out = [];
  const v = vampireCount(n);
  for (let i = 0; i < v; i++) out.push('vampir');
  if (roles.iftiraci && n >= FRAMER_MIN) out.push('iftiraci');
  const slots = Math.max(0, n - out.length - (n < 8 ? 1 : 0));
  const village = SPECIAL_ORDER.filter((r) => roles[r] && !(r === 'hirsiz' && n < THIEF_MIN));
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
export function levelOf(stats) {
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
