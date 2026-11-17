'use strict';

// Lobi ve oyun sonu muhabbeti: sunucu tarafında, şablonlu ve deterministik (model çağrısı YOK).
// Odadaki olaylar (bot katıldı, biri selam verdi, oyun bitti...) bu modülü tetikler; satırlar botların ağzından
// room.say ile gider. Hem akıllı hem kural botlarında çalışır. Oyun evrelerinde (gece/gün/mahkeme/avcı) HİÇBİR
// satır çıkmaz ve bu satırlar hiçbir oyun istemine girmez (lobi ve oyun sonu sohbeti oyun turlarına karışmaz).
// İnsanların mesajları asla süzülmez ya da sınırlanmaz; modül yalnızca tepki verir.
//
// Özel kişiler tek yerde (PEOPLE) tanımlanır ve BANTER_PEOPLE ortam değişkeniyle (JSON) değiştirilebilir:
//   { "kullaniciadi": { "kind": "host" | "tease", "call": ["Hitap", ...], "with": "…le (isteğe bağlı)", "owner": true } }
// Eşleşme hesabın kullanıcı adıyla yapılır (büyük/küçük harf fark etmez); botlar hiçbir zaman bir kişi sayılmaz.
// owner: true olan hesap odanın "botModel" ayarını (güçlü bot zekâsı) seçebilir.

const { norm, mentions } = require('./ai/speech');

const PEOPLE = {
  ahmetchain: { kind: 'host', owner: true, call: ['Ahmet hocam', 'Ahmet abi'], with: 'Ahmet abimizle' },
  msaidgencer: { kind: 'tease', call: ['Said'] },
};

const KINDS = ['host', 'tease'];
// Hesap adı anahtarı: lib/auth.js usernameKey ile aynı kural (Türkçe küçük harf, "ı" = "i"); "AhmetChain" da eşleşir.
function keyOf(name) { return String(name).trim().toLocaleLowerCase('tr').replace(/ı/g, 'i'); }
let cached = { raw: null, people: PEOPLE };

// BANTER_PEOPLE geçerli bir JSON nesnesiyse varsayılanın yerine geçer; bozuksa varsayılan kalır.
function loadPeople(env = process.env) {
  const raw = String(env.BANTER_PEOPLE || '').trim();
  if (!raw) return PEOPLE;
  if (cached.raw === raw) return cached.people;
  let people = PEOPLE;
  try {
    const j = JSON.parse(raw);
    if (j && typeof j === 'object' && !Array.isArray(j)) {
      const out = {};
      for (const [name, v] of Object.entries(j)) {
        if (!v || typeof v !== 'object' || !KINDS.includes(v.kind)) continue;
        const call = (Array.isArray(v.call) ? v.call : [v.call]).filter((c) => typeof c === 'string' && c.trim()).map((c) => c.trim().slice(0, 40));
        out[keyOf(name)] = {
          kind: v.kind, call: call.length ? call : [name], owner: v.owner === true,
          ...(typeof v.with === 'string' && v.with.trim() ? { with: v.with.trim().slice(0, 60) } : {}),
        };
      }
      people = out;
    }
  } catch (err) { /* bozuk JSON: varsayılan kişiler */ }
  cached = { raw, people };
  return people;
}

function personOf(username, people = loadPeople()) {
  if (typeof username !== 'string' || !username) return null;
  return people[keyOf(username)] || null;
}

// Bu kullanıcı adı "sahip" hesabı mı (güçlü bot zekâsını seçebilir)?
function isOwnerName(username, people = loadPeople()) {
  const p = personOf(username, people);
  return Boolean(p && p.owner);
}

// ---------- şablonlar ----------

const JOIN_GREETINGS = ['Selamün aleyküm', 'Selamün aleyküm millet', 'Selamün aleyküm ahali'];
const REPLY_SELAM = ['Aleyküm selam', 'Aleyküm selam hoş geldin', 'Ve aleyküm selam', 'Aleyküm selam kardeşim'];
const REPLY_MERHABA = ['Merhaba', 'Selam', 'Aleyküm selam', 'Merhabalar'];
const REPLY_HOST = ['Aleyküm selam {call}', 'Ve aleyküm selam {call}', 'Aleyküm selam {call}, hoş geldiniz'];
const HOST_WELCOME = [
  ['{call} hoş geldiniz, nasılsınız?', 'Hoş geldiniz {call}, nasılsınız?', '{call} hoş geldiniz, nasılsınız bakalım?'],
  ['Sizi seviyoruz hocam', 'Hocam sizi çok seviyoruz', 'Sizi seviyoruz {call}'],
  ['Başlatır mısınız hocam oyunu?', 'Hocam oyunu başlatalım mı?', 'Başlatır mısınız hocam?'],
];
const HOST_REMATCH = ['Hocam bir el daha mı?', 'Hocam bir el daha oynayalım mı?'];
const ENTRANCE_CHEERS = ['İşteee buuu!', 'Geldiiii!', 'AHMET CENAAA!', 'Yeaaah hocam geldi!', 'Sahne sizin hocam 🔥'];
// Sahip "müziği çal" düğmesine her bastığında botlar farklı bir tepki verir (oturum içinde tekrar etmez).
const MUSIC_REACTS = ['İşteee buuu!', 'Geldiiii!', 'GELDİİİ GELDİİİ!', 'AHMET CENAAA!', 'Yeaaah hocam!', 'Sahne sizin hocam 🔥', 'Ses getir ses 🔊',
  'Hocam yine mi efsane giriş 😂', 'Salon ayağa kalktı!', 'Işıkları kısın, hocam geliyor 😎', 'Bir de ringde görecektik hocam', 'Alkışlar hocamıza 👏',
  'Müzik açıldı ortam değişti ya', 'Hocam bu girişi bi daha çal 🔥', 'Rakipler korkuyor şimdi 😄', 'Şampiyon geliyor yol açın!', 'Bu müzikle yenilmek mümkün mü',
  'Ohooo hocam ne giriş', 'Kemerleri bağlayın 😆', 'Efsane bu ya!'];
// "verin müziği", "müziği ver", "müziği çalın", "müzik açın", "müzik çal" (büyük/küçük harf ve Türkçe harf farkı önemsiz).
const MUSIC_ASK = /m[uü]z[iı][gğk]\S*\s*(ver|[cç]al|a[cç])|(ver|[cç]al|a[cç])\S*(\s+[a-zçğıöşü]+){0,3}\s+m[uü]z[iı][gğk]/i;
const QUIP = 'Biz sadece {with} konuşuruz 😄';
const END_OWNER_WIN = ['Hocam iyi oynadınız', 'Hocam eline sağlık', 'Ellerinize sağlık hocam', 'İyi oynadınız hocam 👏'];
const END_WIN_VILLAGE = ['ezz', 'rahat', 'gg', 'gg ezzz', 'rahattı valla', 'helal olsun bize'];
const END_WIN_EVIL = ['ezz', 'rahat', 'gg', 'nasıl kandırdık ama', 'manipülasyon ustasıyız', 'hepinizi kandırdık 😄'];
const END_LOSE = ['gg', 'helal olsun', 'bir dahakine', 'gg güzeldi', 'iyiydi gg'];
const TEASE_FIRST_OUT = ['Hahaha ulen {call} ilk el yine gittin, her zamanki gibi 😄', '{call} yine ilk gidenlerdendi 😄', '{call} ilk elde gitti yine, olsun 😄'];
const TEASE_LOBBY = ['{call} geldi, bu sefer ilk el gitme bakalım 😄', 'Aaa {call} geldi, bu sefer ilk el dayan bakalım 😄'];

// Sohbette görünür tüm satırlar (testler ve rol adı denetimi için).
const ALL_LINES = [
  ...JOIN_GREETINGS, ...REPLY_SELAM, ...REPLY_MERHABA, ...REPLY_HOST, ...HOST_WELCOME.flat(), ...HOST_REMATCH, QUIP,
  ...ENTRANCE_CHEERS, ...END_OWNER_WIN, ...END_WIN_VILLAGE, ...END_WIN_EVIL, ...END_LOSE, ...TEASE_FIRST_OUT, ...TEASE_LOBBY,
];

// ---------- sınırlar ----------

const LIMITS = {
  maxPending: 3,        // sırada bekleyen muhabbet satırı (üstü atılır)
  maxJoinPending: 2,    // katılma selamı: sırada en fazla 2 varken yenisi atılır
  maxJoinGreets: 8,     // oda oturumu başına katılma selamı
  gapMs: [2200, 3800],  // iki muhabbet satırı arası
  replyCooldownMs: 15000, // selam cevaplarının arası
  maxQuips: 3,          // oda oturumu başına "sadece Ahmet abimizle" şakası (kişi başına zaten 1)
  maxRematch: 3,
  cheerWindowMs: 60000, // fanfardan sonra bu sürede bir bot eklenirse tezahürat yapılır (oda yeni kurulduysa)
  endMax: 3,            // oyun sonunda toplam satır
};

const GREET_SELAM = new Set(['sa', 'selam', 'selamlar', 'slm', 'selamm', 'selamun', 'selamlarr', 'selaam']);
const GREET_MERHABA = new Set(['merhaba', 'mrb', 'meraba', 'merhabalar', 'merhabaa', 'gunaydin', 'iyiaksamlar']);

// Mesaj kısa bir selam mı? 'selam' | 'merhaba' | null. "as" / "aleyküm selam" cevaptır, selam sayılmaz.
function greetingKind(text) {
  const t = norm(text);
  const tokens = t.split(/[^a-z0-9]+/).filter(Boolean);
  if (!tokens.length || tokens.length > 6 || t.length > 40) return null;
  if (/(^|\s)(ve\s+)?aleykum\s*selam/.test(t)) return null;
  if (/selamun\s+aleykum|selamin\s+aleykum|selamunaleykum|esselamu/.test(t)) return 'selam';
  if (tokens.some((w) => GREET_SELAM.has(w))) return 'selam';
  if (tokens.some((w) => GREET_MERHABA.has(w))) return 'merhaba';
  return null;
}

// "bot" kelimesi ya da bir botun adı geçiyor mu (insan botlarla konuşuyor)?
function talksToBots(text, bots) {
  const tokens = norm(text).split(/[^a-z0-9]+/).filter(Boolean);
  if (tokens.some((w) => /^bot(lar|lara|larin|a|u|um|un|tan)?$/.test(w))) return true;
  return bots.some((b) => mentions(text, b.name));
}

class Banter {
  // rng: testlerde tohumlu (varsayılan Math.random); botların oyun rastgeleliğini etkilemesin diye ayrıdır.
  constructor(room, { rng = Math.random, people = null, minPlayers = 5 } = {}) {
    this.room = room;
    this.rng = rng;
    this.peopleOverride = people;
    this.minPlayers = minPlayers;
    this.timers = new Set();
    this.closed = false;
    this.nextAt = 0;
    this.pending = 0;
    // Oda oturumu boyunca bir kez olanlar.
    this.welcomed = false;
    this.welcomeQueued = false;
    this.entranced = false;    // giriş fanfarı bu oda oturumunda çalındı mı
    this.musicUntil = 0;       // elle müzik çaldırma: sonraki izin zamanı
    this.musicUsed = new Set();
    this.cheered = false;
    this.cheerUntil = 0;
    this.joinGreets = 0;
    this.quips = 0;
    this.quipped = new Set();
    this.teased = new Set();
    this.rematches = 0;
    this.lastReplyAt = -Infinity;
    // Oyun başına.
    this.firstOut = null;      // ilk elenenler (aynı anda ölenler) oyuncu kimlikleri
    this.deadSeen = new Set();
  }

  get people() { return this.peopleOverride || loadPeople(); }

  now() { return Date.now(); }
  rand(a, b) { return a + (b - a) * this.rng(); }
  chance(p) { return this.rng() < p; }
  pick(arr) { return arr.length ? arr[Math.floor(this.rng() * arr.length)] : null; }
  fill(tpl, vars = {}) { return tpl.replace(/\{(\w+)\}/g, (_, k) => vars[k] || ''); }

  bots() { return [...this.room.players.values()].filter((p) => p.bot && !p.left && p.connected); }
  humans() { return [...this.room.players.values()].filter((p) => !p.bot && !p.left); }

  // Kişi: yalnızca hesabı olan insan koltukları (botlar ve hesapsız koltuklar eşleşmez).
  personOfPlayer(p) {
    if (!p || p.bot || !p.userId) return null;
    return personOf(p.name, this.people);
  }

  presentOf(kind) {
    for (const p of this.humans()) {
      const person = this.personOfPlayer(p);
      if (person && person.kind === kind) return { player: p, person };
    }
    return null;
  }

  callOf(person) { return this.pick(person.call) || ''; }

  // Botlar arasından (isteğe bağlı bazılarını dışarıda bırakarak) karıştırılmış sıra.
  shuffledBots(exclude = []) {
    const list = this.bots().filter((b) => !exclude.includes(b.id));
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(this.rng() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }

  close() {
    this.closed = true;
    for (const t of this.timers) clearTimeout(t);
    this.timers.clear();
    this.pending = 0;
  }

  // Tek satırı sıraya koyar: en az delay kadar sonra, önceki muhabbet satırından en az 2-4 sn sonra.
  // phases: satır çıkarken oda bu evrelerden birinde olmalı (oyun başlamışsa sessizce düşer).
  speak(botId, text, { delay = [1000, 4000], phases = ['lobby'], cap = LIMITS.maxPending, gap = true } = {}) {
    if (this.closed || !text || (gap && this.pending >= cap)) return false;
    const now = this.now();
    let at = now + this.rand(delay[0], delay[1]);
    if (gap) {   // tezahürat (gap: false) kendi aralığıyla çıkar, diğer satırların sırasını kaydırmaz
      at = Math.max(at, this.nextAt);
      this.nextAt = at + this.rand(LIMITS.gapMs[0], LIMITS.gapMs[1]);
    }
    if (gap) this.pending += 1;   // tezahürat sıra sınırına sayılmaz
    const t = setTimeout(() => {
      this.timers.delete(t);
      if (gap) this.pending = Math.max(0, this.pending - 1);
      if (this.closed || this.room.closed || !phases.includes(this.room.phase)) return;
      const p = this.room.players.get(botId);
      if (!p || p.left || !p.bot) return;
      try { this.room.say(botId, text); } catch (err) { /* muhabbet önemsiz */ }
    }, Math.max(0, Math.round(at - now)));
    this.timers.add(t);
    return true;
  }

  // ---------- olaylar ----------

  // Lobiye bir bot eklendi.
  botJoined(botId) {
    const room = this.room;
    if (this.closed || room.phase !== 'lobby') return;
    if (this.joinGreets < LIMITS.maxJoinGreets) {
      if (this.speak(botId, this.pick(JOIN_GREETINGS), { cap: LIMITS.maxJoinPending })) this.joinGreets += 1;
    }
    this.maybeWelcomeHost();
    this.maybeTeaseInLobby();
    this.maybeCheer();
  }

  // Bir insanın soketi odaya bağlandı (ilk giriş ya da yeniden bağlanma). Sahip hesap bu oda oturumunda İLK kez
  // lobiye girdiyse herkese giriş fanfarı gider ve botlar tezahürat yapar; yeniden bağlanma ve oyun sonrası lobi tekrarlamaz.
  playerConnected(playerId) {
    const room = this.room;
    if (this.closed || room.phase !== 'lobby' || this.entranced) return;
    // Kendi kurduğu odada otomatik çalmaz (oda sahibi olarak giriyor); başkasının odasına girince çalar.
    if (room.hostId === playerId) return;
    const p = room.players.get(playerId);
    const person = this.personOfPlayer(p);
    if (!person || person.kind !== 'host') return;
    this.entranced = true;
    this.cheerUntil = this.now() + LIMITS.cheerWindowMs;
    if (room.hooks && typeof room.hooks.entrance === 'function') room.hooks.entrance(room, { id: p.id, call: person.call[0] });
    this.maybeCheer();
  }

  // Sahip "müziği çal" düğmesine bastı: herkeste çalar, 2-3 bot her seferinde farklı tepki verir.
  // Dönüş: null ya da hata metni. Yalnızca lobide ve en az 20 sn arayla.
  playMusic(playerId) {
    const room = this.room;
    if (this.closed || room.phase !== 'lobby') return 'Müzik yalnızca lobide çalınır.';
    const p = room.players.get(playerId);
    const person = this.personOfPlayer(p);
    if (!person || person.kind !== 'host') return 'Bu düğmeyi sen kullanamazsın.';
    if (this.now() < this.musicUntil) return 'Müzik çalıyor, biraz bekle.';
    this.musicUntil = this.now() + 21000;
    if (room.hooks && typeof room.hooks.entrance === 'function') room.hooks.entrance(room, { id: p.id, call: person.call[0], manual: true });
    if (!this.bots().length) return null;
    let pool = MUSIC_REACTS.filter((l) => !this.musicUsed.has(l));
    if (pool.length < 3) { this.musicUsed.clear(); pool = [...MUSIC_REACTS]; }
    pool.sort(() => this.rng() - 0.5);
    const bots = this.shuffledBots();
    const n = Math.min(bots.length, 2 + Math.floor(this.rng() * 2));
    for (let i = 0; i < n; i++) {
      this.musicUsed.add(pool[i]);
      this.speak(bots[i].id, pool[i], { delay: [700 + i * 600, 1500 + i * 900], cap: 99, gap: false });
    }
    return null;
  }

  // Fanfardan sonra botlar (2-4) kısa aralıklarla tezahürat yapar; bot yoksa ilk bot eklenince (kısa süre içinde).
  maybeCheer() {
    if (!this.entranced || this.cheered || this.room.phase !== 'lobby' || this.now() > this.cheerUntil) return;
    if (!this.bots().length || !this.presentOf('host')) return;
    this.cheered = true;
    const t = setTimeout(() => {
      this.timers.delete(t);
      if (this.closed || this.room.phase !== 'lobby') return;
      const bots = this.shuffledBots();
      const n = Math.min(bots.length, 2 + Math.floor(this.rng() * 3));
      const lines = [...ENTRANCE_CHEERS].sort(() => this.rng() - 0.5);
      for (let i = 0; i < n; i++) this.speak(bots[i].id, lines[i], { delay: [500 + i * 500, 1200 + i * 800], cap: 6, gap: false });
    }, 600);
    this.timers.add(t);
  }

  // Lobiye bir insan katıldı.
  playerJoined(playerId) {
    const room = this.room;
    if (this.closed || room.phase !== 'lobby') return;
    const p = room.players.get(playerId);
    if (!p || p.bot) return;
    this.maybeWelcomeHost();
    this.maybeTeaseInLobby();
  }

  // Sahip hesap bu oda oturumunda ilk kez botlarla birlikte lobide: sıcak karşılama (oturumda bir kez).
  maybeWelcomeHost() {
    if (this.welcomed || this.welcomeQueued || this.room.phase !== 'lobby') return;
    if (!this.presentOf('host') || !this.bots().length) return;
    // Birkaç botun art arda eklenmesi için kısa bir süre beklenir; konuşacak botlar o anda seçilir.
    this.welcomeQueued = true;
    const t = setTimeout(() => {
      this.timers.delete(t);
      this.welcomeQueued = false;
      this.welcomeHost();
    }, 1500);
    this.timers.add(t);
  }

  welcomeHost() {
    if (this.closed || this.welcomed || this.room.phase !== 'lobby') return;
    const host = this.presentOf('host');
    const bots = this.shuffledBots();
    if (!host || !bots.length) return;
    this.welcomed = true;
    const call = this.callOf(host.person);
    const lines = [HOST_WELCOME[0], HOST_WELCOME[1]];
    const enough = this.humans().length + bots.length >= this.minPlayers && this.room.hostId === host.player.id;
    if (enough && this.chance(0.75)) lines.push(HOST_WELCOME[2]);
    lines.forEach((set, i) => {
      const bot = bots[i % bots.length];
      this.speak(bot.id, this.fill(this.pick(set), { call }), { delay: [1500 + i * 600, 3500 + i * 900], cap: LIMITS.maxPending + 2 });   // karşılama paketi (en çok 3 satır) bekleyen selamlara takılmaz
    });
  }

  // Said (şaka kişisi) lobiye geldi: oturumda en fazla bir kez, arada bir hafif takılma.
  maybeTeaseInLobby() {
    const target = this.presentOf('tease');
    if (!target || this.teased.has(personKey(target.player)) || !this.bots().length) return;
    if (!this.chance(0.35)) return;
    const bot = this.pick(this.bots());
    const line = this.fill(this.pick(TEASE_LOBBY), { call: this.callOf(target.person) });
    if (this.speak(bot.id, line, { delay: [4500, 8000] })) this.teased.add(personKey(target.player));
  }

  // Lobi/oyun sonu sohbetinde bir insan yazdı (botların kendi satırları dikkate alınmaz).
  onChat(message) {
    const room = this.room;
    if (this.closed || !message || message.channel !== 'genel' || room.phase !== 'lobby') return;
    const sender = room.players.get(message.fromId);
    if (!sender || sender.bot) return;
    const bots = this.bots();
    if (!bots.length) return;

    // Sahip hesap lobide "müziği ver / müziği çalın / müzik açın" yazarsa botlar müziği çaldırır (düğmeyle aynı).
    const asker = this.personOfPlayer(sender);
    if (asker && asker.kind === 'host' && MUSIC_ASK.test(message.text)) {
      const err = this.playMusic(sender.id);
      if (!err) return;
    }

    const greeting = greetingKind(message.text);
    if (greeting) { this.answerGreeting(sender, greeting, bots); return; }

    // Botlarla konuşan başka biri: "Biz sadece Ahmet abimizle konuşuruz" (kişi başına en fazla bir kez).
    const person = this.personOfPlayer(sender);
    if (person && person.kind === 'host') return;
    const key = personKey(sender);
    if (this.quipped.has(key) || this.quips >= LIMITS.maxQuips || !talksToBots(message.text, bots)) return;
    const host = Object.values(this.people).find((x) => x.kind === 'host' && x.with);
    if (!host) return;
    this.quipped.add(key);   // şans tutmasa da bu kişi için hak harcanır: her konuşmada denenmez
    if (!this.chance(0.6)) return;
    const named = bots.filter((b) => mentions(message.text, b.name));
    const bot = this.pick(named.length ? named : bots);
    if (this.speak(bot.id, this.fill(QUIP, { with: host.with }), { delay: [1500, 3500] })) this.quips += 1;
  }

  answerGreeting(sender, kind, bots) {
    const now = this.now();
    if (now - this.lastReplyAt < LIMITS.replyCooldownMs) return;
    if (this.chance(0.12)) return;   // her seferinde cevap vermesinler
    this.lastReplyAt = now;
    const person = this.personOfPlayer(sender);
    const isHost = Boolean(person && person.kind === 'host');
    const count = Math.min(bots.length, this.chance(0.65) ? 1 : 2);
    const who = this.shuffledBots().slice(0, count);
    who.forEach((bot, i) => {
      let tpl;
      if (isHost && i === 0) tpl = this.pick(REPLY_HOST);
      else tpl = this.pick(kind === 'merhaba' ? REPLY_MERHABA : REPLY_SELAM);
      this.speak(bot.id, this.fill(tpl, { call: person ? this.callOf(person) : '' }), { delay: [1000 + i * 800, 3500 + i * 1000] });
    });
  }

  // Oyun içi izleme (Room.changed çağırır): ilk elenenleri bulmak için ölüm anını örnekler.
  observe() {
    const room = this.room;
    if (this.closed || !room.inGame) return;
    if (room.phase === 'reveal') {   // yeni oyun: ilk elenen bilgisi sıfırlanır
      this.firstOut = null;
      this.deadSeen = new Set();
    }
    const dead = [...room.players.values()].filter((p) => !p.alive && !p.left && p.role).map((p) => p.id);
    const fresh = dead.filter((id) => !this.deadSeen.has(id));
    if (fresh.length) {
      if (!this.firstOut) this.firstOut = new Set(fresh);
      for (const id of fresh) this.deadSeen.add(id);
    }
  }

  // Oyun bitti (finish çağırır): kazananlar ve kaybedenler arasında 1-3 kısa satır.
  gameEnded() {
    const room = this.room;
    if (this.closed || room.phase !== 'ended') return;
    const winners = new Set(room.winners || []);
    const winBots = this.shuffledBots().filter((b) => winners.has(b.id) && b.role);
    const loseBots = this.shuffledBots().filter((b) => b.role && !winners.has(b.id));
    const evilWin = room.winner === 'vampir';
    const phases = ['ended', 'lobby'];

    const picked = [];
    const used = new Set();
    const take = (pool, tpl, prob, extra = {}) => {
      if (!this.chance(prob)) return false;
      const bot = pool.find((b) => !used.has(b.id)) || pool[0];
      if (!bot) return false;
      used.add(bot.id);
      picked.push({ bot, text: this.fill(this.pick(tpl), extra) });
      return true;
    };

    // Sahip hesap, kazanan bir botla aynı takımdaydı: "Hocam iyi oynadınız".
    const host = this.presentOf('host');
    const hostWon = Boolean(host && winners.has(host.player.id) && host.player.role);
    if (hostWon && winBots.length) take(winBots, END_OWNER_WIN, 1);

    // Said ilk elenenlerdendi: hafif takılma (oturumda bir kez).
    const tease = this.presentOf('tease');
    if (tease && this.firstOut && this.firstOut.has(tease.player.id) && tease.player.role && !this.teased.has(personKey(tease.player))
        && this.bots().length && this.chance(0.85)) {
      if (take(this.bots(), TEASE_FIRST_OUT, 1, { call: this.callOf(tease.person) })) this.teased.add(personKey(tease.player));
    }

    if (winBots.length) take(winBots, evilWin ? END_WIN_EVIL : END_WIN_VILLAGE, hostWon ? 0.6 : 0.9);
    if (loseBots.length) take(loseBots, END_LOSE, 0.55);
    // En az bir satır: hiç satır seçilmediyse bir kazanan (yoksa kaybeden) bot söyler.
    if (!picked.length) {
      if (winBots.length) take(winBots, evilWin ? END_WIN_EVIL : END_WIN_VILLAGE, 1);
      else if (loseBots.length) take(loseBots, END_LOSE, 1);
    }
    picked.slice(0, LIMITS.endMax).forEach((it, i) => {
      this.speak(it.bot.id, it.text, { delay: [2500 + i * 700, 5500 + i * 1200], phases });
    });
  }

  // Oyun sonundan lobiye dönüldü: sahip hesap hâlâ buradaysa ara sıra kısa bir "bir el daha mı?".
  backToLobby() {
    const room = this.room;
    if (this.closed || room.phase !== 'lobby') return;
    this.firstOut = null;
    this.deadSeen = new Set();
    const host = this.presentOf('host');
    const bots = this.bots();
    if (!host || !bots.length || this.rematches >= LIMITS.maxRematch || !this.chance(0.4)) return;
    if (this.speak(this.pick(bots).id, this.pick(HOST_REMATCH), { delay: [3500, 6500] })) this.rematches += 1;
  }
}

function personKey(player) { return player.userId || player.id; }

module.exports = {
  Banter, PEOPLE, loadPeople, personOf, isOwnerName, greetingKind, talksToBots, LIMITS,
  JOIN_GREETINGS, ALL_LINES,
};
