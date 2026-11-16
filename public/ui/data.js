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
    desc: 'Her gece takımınla tek bir kurbana gidersiniz: ilk onaylayan vampir hedefi belirler. Gündüz köylü gibi davran, yakalanma. Sayınız diğer oyunculara eşitlenince kazanırsınız.',
  },
  iftiraci: {
    name: 'İftiracı', team: 'vampir', teamName: 'Vampirler', color: '#b0408a',
    short: 'Masumlara iftira atar.',
    desc: 'Vampirlerin gizli yardımcısısın: onları tanırsın, onlar da seni; gece onlarla yazışırsın ama öldürme seçimine katılmazsın. Her gece vampir olmayan birine iftira at: Kahin o gece ona bakarsa "Vampir" iki seçenekten biri olur. İftiraya uğrayan kişi o gece ölürse ya da ertesi gün oyla elenirse köye "Vampir" olarak duyurulur; gerçek oyun sonunda ortaya çıkar. Son vampir düşerse sen vampire dönüşürsün.',
    note: 'Sadece 7 ve üstü oyuncuda dağıtılır.',
  },
  temizlikci: {
    name: 'Temizlikçi', team: 'vampir', teamName: 'Vampirler', color: '#7d4fb0',
    short: 'Ölenin izlerini siler.',
    desc: 'Vampirlerin gizli yardımcısısın: onları tanırsın, onlar da seni; gece onlarla yazışırsın ama öldürme seçimine katılmazsın. Her gece vampir olmayan birinin evine git: o kişi o gece ölürse rolü oyun sonuna kadar köyden gizlenir. Son vampir düşerse sen vampire dönüşürsün.',
    note: 'Sadece 7 ve üstü oyuncuda dağıtılır.',
  },
  doktor: {
    name: 'Doktor', team: 'koylu', teamName: 'Köylüler', color: '#3fb58a',
    short: 'Her gece birini korur.',
    desc: 'Her gece birini koru, kendini de seçebilirsin. Koruduğun kişi o gece ne ısırıkla ne de zehirle ölür.',
  },
  kahin: {
    name: 'Kahin', team: 'koylu', teamName: 'Köylüler', color: '#8f7cff',
    short: 'İki rolden birini bulur.',
    desc: 'Her gece birine kristal küreyle bak: iki rol görürsün, biri onun gerçek rolü ("X şu ikisinden biri: A ya da B"). Sonuç sadece sana gelir; aynı kişiye yine bakarsan aynı ikiliyi görürsün. İftiracı o gece ona iftira attıysa "Vampir" seçeneklerden biri olur.',
  },
  gozcu: {
    name: 'Gözcü', team: 'koylu', teamName: 'Köylüler', color: '#e8a33a',
    short: 'Bir evi gözetler.',
    desc: 'Her gece bir evi pencereden gözetle, kendi evin de olur. Gece yaşanırken o eve kimlerin geldiğini (kapıdan dönenler dahil) ve ev sahibinin çıkıp hangi eve gittiğini görürsün; sonra raporunu alırsın. Kimin ne yaptığını ya da rolünü göremezsin.',
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
export const ROLE_LIST = ['vampir', 'iftiraci', 'temizlikci', 'doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'soytari', 'deli', 'hirsiz', 'koylu'];
// Sunucunun özel rolleri ekleme sırası (PROTOCOL §3).
export const SPECIAL_ORDER = ['doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'soytari', 'deli', 'hirsiz'];
export const TOGGLE_ROLES = ['doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'soytari', 'deli', 'hirsiz', 'iftiraci', 'temizlikci'];
export const DEFAULT_ROLES = { doktor: true, kahin: true, gozcu: false, gardiyan: false, cadi: false, avci: false, muhtar: false, soytari: false, deli: false, hirsiz: false, iftiraci: false, temizlikci: false };
export const MIN_PLAYERS = 5;
export const MAX_PLAYERS = 20;
export const FRAMER_MIN = 7;
export const THIEF_MIN = 7;
export const TEAM_NAME = { koylu: 'Köylüler', vampir: 'Vampirler', soytari: 'Soytarı', hirsiz: 'Tarafsız' };
export const WIN_TITLE = { koylu: 'Köylüler kazandı!', vampir: 'Vampirler kazandı!', soytari: 'Soytarı kazandı!' };
export const isEvil = (role) => role === 'vampir' || role === 'iftiraci' || role === 'temizlikci';

export function vampireCount(n) {
  return n >= 15 ? 3 : n >= 10 ? 2 : 1;
}

// Sunucudaki önizlemenin aynısı: { list: [vampirler, iftiracı?, kesin özel roller..., köylüler], pool }.
// Özel roller sığmazsa pool = { pick, from } (hangilerinin çıkacağı oyunda rastgele belirlenir).
// mode 'random' (§15.3): vampirler kesin, sade köylü = max(1, round(n × 0,2)), kalan yerler açık köy
// rollerinden rastgele; İftiracı (açıksa, 7+) %60 ihtimalle. 'all': eski kural.
export function distributionPlan(n, roles, mode = 'all') {
  if (mode === 'random') {
    const list = [];
    for (let i = 0; i < vampireCount(n); i++) list.push('vampir');
    const maybe = ['iftiraci', 'temizlikci'].filter((r) => roles[r] && n >= FRAMER_MIN);
    const plain = Math.max(1, Math.round(n * 0.2));
    const slots = Math.max(0, n - list.length - plain);
    const village = SPECIAL_ORDER.filter((r) => roles[r] && !(r === 'hirsiz' && n < THIEF_MIN));
    let pool = null;
    if (village.length && slots > 0) pool = { pick: Math.min(slots, village.length), from: village };
    while (list.length < n - (pool ? pool.pick : 0)) list.push('koylu');
    if (maybe.length) pool = { ...(pool || { pick: 0, from: [] }), maybe };
    return { list, pool };
  }
  const out = [];
  const v = vampireCount(n);
  for (let i = 0; i < v; i++) out.push('vampir');
  for (const h of ['iftiraci', 'temizlikci']) if (roles[h] && n >= FRAMER_MIN) out.push(h);
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

// "Nasıl Oynanır" rol rehberi: ne yapar, ne zaman, sınırları, diğer rollerle, bir ipucu.
export const ROLE_GROUPS = [
  ['vampir', 'Vampir takımı', ['vampir', 'iftiraci', 'temizlikci']],
  ['koylu', 'Köy', ['doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'deli', 'koylu']],
  ['soytari', 'Tek başına', ['soytari', 'hirsiz']],
];
export const ROLE_GUIDE = {
  vampir: {
    what: 'Takımınla birlikte her gece bir kişiyi öldürmeye gidersin.',
    when: 'Gece, seçim bölümünde. İlk onaylayan vampirin seçimi takımın tek hedefi olur; diğer vampirler de oraya yürür.',
    limits: 'Kendini, diğer vampirleri, İftiracı\'yı ve Temizlikçi\'yi seçemezsin. Seçim kesindir.',
    with: 'Doktor korursa ya da Cadı hayat iksiri verirse kurban yaşar. Gardiyanın kilitlediği kapıdan geri dönersin. Gözcü o eve gelenleri görür. Kahin sana bakarsa "Vampir" iki seçenekten biri olur.',
    tip: 'Gündüz susmak da şüphe çeker: tartışmaya katıl, oyları başkasına yönlendir.',
  },
  iftiraci: {
    what: 'Vampirlerin gizli yardımcısısın. Her gece vampir olmayan birine iftira atarsın.',
    when: 'Gece, seçim bölümünde. Gece vampirlerle yazışabilirsin.',
    limits: 'Öldürme seçimine katılmazsın; kendine ve takım arkadaşına iftira atamazsın. Sadece 7 ve üstü oyuncuda dağıtılır.',
    with: 'Kahin o gece iftira attığın kişiye bakarsa "Vampir" iki seçenekten biri olur. İftiraya uğrayan kişi o gece ölürse ya da ertesi gün oyla elenirse köye "Vampir" olarak duyurulur; gerçek oyun sonunda ortaya çıkar. Son vampir ölürse sen vampire dönüşürsün.',
    tip: 'Kahin olduğunu söyleyen birinin bakacağı kişiyi tahmin et ve ona iftira at.',
  },
  temizlikci: {
    what: 'Vampirlerin gizli yardımcısısın. Her gece vampir olmayan birinin evine gidersin.',
    when: 'Gece, seçim bölümünde. Gece vampirlerle yazışabilirsin; takımı ve takımın hedefini görürsün.',
    limits: 'Öldürme seçimine katılmazsın; kendini ve takım arkadaşlarını seçemezsin. Sadece 7 ve üstü oyuncuda dağıtılır. Evine gittiğin kişi o gece ölmezse hiçbir şey olmaz.',
    with: 'Gittiğin kişi o gece ölürse rolü oyun sonuna kadar açıklanmaz ("izler silinmiş"). Gözcü evine geldiğini görebilir; Gardiyanın kilitlediği kapıdan geri dönersin. Avcı yine de son atışını yapar ve rolü görünür. Kahin sana bakarsa Temizlikçi görünür. Son vampir ölürse sen vampire dönüşürsün.',
    tip: 'Vampirlerin hedefini seç: böylece köy kimi kaybettiğini anlasa da rolünü bilemez.',
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
    with: 'İftiracı o kişiye iftira attıysa "Vampir" seçeneklerden biri olur. Deli, kendini hangi rol sanıyorsa öyle görünür. Masum biri çoğu zaman iki masum rolle görünür (yanıltıcı rol sadece yaklaşık yarı ihtimalle öbür taraftan gelir).',
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
    with: 'Kilitli evin sahibi o gece dışarı çıkamaz; gelen herkes (vampir, İftiracı, Doktor, Kahin, Cadı, Hırsız) kapıdan döner ve hiçbir etkisi olmaz. Gözcü yine de gelenleri görür. Sabah kaç kişinin zorladığını öğrenirsin, kim olduklarını değil.',
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
