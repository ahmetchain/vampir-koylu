'use strict';

// Botlar ne zaman konuşur (V2-PLAN §17): adıyla seslenilen bot HER ZAMAN cevap verir (kalabalık
// sınırı bunu engellemez); kimseye seslenilmeyen bir insan mesajına en fazla iki bot tepki verir;
// bot-bot zincirleri kısa tutulur ve soğuma süresiyle sınırlanır; botlar sohbeti doldurmaz.

const LIMITS = {
  maxReactors: 2,          // seslenilmeyen bir mesaja en fazla bu kadar bot
  reactChance: 0.45,       // her aday bot için tepki olasılığı (ilk aday için daha yüksek)
  windowMs: 30000,         // oda geneli pencere
  windowMax: 4,            // pencere başına doğrudan-cevap dışı bot satırı
  botGapMs: 12000,         // bir botun iki kendiliğinden satırı arasında en az
  botDayMax: 6,            // bir botun bir günde doğrudan-cevap dışı satır sayısı
  maxChain: 2,             // insan mesajından sonra en fazla bu kadar bot→bot halkası
  chainCooldownMs: 20000,  // zincir sınırına ulaşınca botlar bu süre birbirine cevap vermez
  botReactChance: 0.2,     // bir botun seslenilmemiş mesajına başka bir botun tepki olasılığı
};

// İnsan gibi tempo: önce okunan mesajın uzunluğuna göre kısa bir "okuma", sonra yazılan satırın
// uzunluğuna göre telefonda yazma süresi (model çağrısının süresi bu yazma süresine dahildir).
const PACE = {
  readBaseMs: 500,         // okuma: taban + karakter başına
  readPerChar: 28,
  readMinMs: 700,
  readMaxMs: 3000,
  typePerCharMin: 90,      // yazma: karakter başına 90–130 ms
  typePerCharMax: 130,
  typeMinMs: 2500,
  typeMaxMs: 10000,
  gapMinMs: 3000,          // aynı kanalda iki bot satırı arasında en az 3–5 sn
  gapMaxMs: 5000,
  staleMs: 15000,          // hazır olduktan sonra bu kadar bekleyen kendiliğinden satır atılır
  maxFree: 2,              // kanal başına sırada bekleyebilecek kendiliğinden satır
};

// Bir mesajı okuma süresi (ms). text yoksa (kendiliğinden konuşma) kısa bir düşünme.
function readMs(text, rng = Math.random, P = PACE) {
  const n = String(text || '').length;
  const base = n ? P.readBaseMs + n * P.readPerChar : 1200;
  return Math.round(Math.min(P.readMaxMs, Math.max(P.readMinMs, base * (0.8 + 0.4 * rng()))));
}

// Bir satırı yazma süresi (ms): uzunlukla orantılı, en az 2,5 sn, en fazla 10 sn.
function typeMs(text, rng = Math.random, P = PACE) {
  const per = P.typePerCharMin + (P.typePerCharMax - P.typePerCharMin) * rng();
  return Math.round(Math.min(P.typeMaxMs, Math.max(P.typeMinMs, String(text || '').length * per)));
}

// Oda düzeyinde sohbet sırası: bot satırları kanal başına tek tek, aralarında en az 3–5 sn ile çıkar.
// Seslenilen insana verilen cevaplar (direct) önce çıkar ve asla atılmaz; kendiliğinden satırlar
// (tepki, açılış, oy yorumu) bayatlarsa ya da konuşma ilerlediyse (tetikleyen insan mesajından sonra
// yeni bir insan mesajı geldiyse) atılır. Saat ve zamanlayıcı dışarıdan verilir (testlerde sahte).
// item: { botId, channel, text, readyAt, direct, seq?, post(item), drop(item, why) }
class ChatPacer {
  constructor({ now = Date.now, rng = Math.random, schedule, pace = {} } = {}) {
    this.now = now;
    this.rng = rng;
    this.schedule = schedule || ((ms, fn) => setTimeout(fn, ms));
    this.P = { ...PACE, ...pace };
    this.token = 0;
    this.reset();
  }

  // Evre değişince: sıradaki her şey atılır (sahiplerine haber verilir), zamanlayıcı geçersiz olur.
  reset() {
    const old = this.queue || [];
    this.queue = [];
    this.lastAt = new Map();     // kanal -> son bot satırının zamanı
    this.gap = new Map();        // kanal -> bir sonraki satır için gereken aralık
    this.humanSeq = new Map();   // kanal -> o kanaldaki insan mesajı sayısı
    this.wake = null;
    this.token += 1;
    for (const it of old) this.safe(it.drop, it, 'reset');
  }

  safe(fn, it, why) {
    if (typeof fn !== 'function') return;
    try { fn(it, why); } catch (err) { /* sahibin hatası sırayı bozmasın */ }
  }

  // Bir insan mesajı geldi (o kanaldaki eski tepkiler bayatlar).
  noteHuman(channel) {
    this.humanSeq.set(channel, (this.humanSeq.get(channel) || 0) + 1);
    if (this.queue.length) this.arm(0);
  }

  seq(channel) { return this.humanSeq.get(channel) || 0; }

  // Başka bir yoldan çıkan bot satırı da aralığı başlatır.
  notePosted(channel) {
    this.lastAt.set(channel, this.now());
    this.gap.set(channel, this.drawGap());
  }

  drawGap() {
    return Math.round(this.P.gapMinMs + (this.P.gapMaxMs - this.P.gapMinMs) * this.rng());
  }

  pending(botId) { return this.queue.some((it) => it.botId === botId); }

  enqueue(item) {
    const it = { channel: 'genel', direct: false, ...item };
    if (!Number.isFinite(it.readyAt)) it.readyAt = this.now();
    it.queuedAt = this.now();
    this.queue.push(it);
    // Kendiliğinden satırlar birikmesin: kanal başına en fazla maxFree (en eskisi atılır).
    const free = this.queue.filter((q) => q.channel === it.channel && !q.direct);
    while (free.length > this.P.maxFree) this.dropItem(free.shift(), 'crowd');
    this.pump();
  }

  dropItem(it, why) {
    const i = this.queue.indexOf(it);
    if (i >= 0) this.queue.splice(i, 1);
    this.safe(it.drop, it, why);
  }

  // Kendiliğinden bir satır hâlâ söylenmeye değer mi?
  staleWhy(it, now) {
    if (it.direct) return null;
    if (now - it.readyAt > this.P.staleMs) return 'stale';
    if (Number.isFinite(it.seq) && this.seq(it.channel) > it.seq) return 'moved_on';
    return null;
  }

  pump() {
    const now = this.now();
    for (const it of [...this.queue]) {
      const why = this.staleWhy(it, now);
      if (why) this.dropItem(it, why);
    }
    const channels = [...new Set(this.queue.map((it) => it.channel))];
    let next = Infinity;
    for (const ch of channels) {
      const allowedAt = (this.lastAt.has(ch) ? this.lastAt.get(ch) + (this.gap.get(ch) || 0) : -Infinity);
      const items = this.queue.filter((it) => it.channel === ch);
      const ready = items.filter((it) => it.readyAt <= now)
        .sort((a, b) => (Number(b.direct) - Number(a.direct)) || (a.readyAt - b.readyAt));
      if (ready.length && now >= allowedAt) {
        const it = ready[0];
        this.queue.splice(this.queue.indexOf(it), 1);
        this.notePosted(ch);
        this.safe(it.post, it);
        if (this.queue.some((q) => q.channel === ch)) next = Math.min(next, this.gap.get(ch));
        continue;
      }
      const earliest = Math.min(...items.map((it) => it.readyAt));
      next = Math.min(next, Math.max(earliest, allowedAt) - now);
      // Bekleyen kendiliğinden satırın bayatlama anında da uyan (atılsın, sıra tıkanmasın).
      for (const it of items) if (!it.direct) next = Math.min(next, it.readyAt + this.P.staleMs + 1 - now);
    }
    if (Number.isFinite(next)) this.arm(Math.max(0, next));
  }

  arm(ms) {
    const at = this.now() + ms;
    if (this.wake !== null && this.wake <= at) return;
    this.wake = at;
    const token = this.token;
    this.schedule(ms, () => {
      if (token !== this.token) return;
      if (this.wake !== at) return;
      this.wake = null;
      this.pump();
    });
  }
}

const LETTER = /[a-z0-9]/;
const FOLD = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i', û: 'u', '’': "'" };

// Türkçe küçük harf + ASCII'ye katlama: telefonda "ayse", "AYŞE", "Ayşe" aynı sayılır.
function norm(s) {
  return String(s || '').normalize('NFC').toLocaleLowerCase('tr')
    .replace(/[çğıöşüâîû’]/g, (c) => FOLD[c]).normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// Adın "Bot " öneki olmadan hâli ("Bot Ayşe 2" → "ayşe 2").
function bareName(name) {
  return norm(name).replace(/^bot\s+/, '').trim();
}

// Metinde bu ada seslenilmiş mi? Kelime başında, ardından harf gelmeyen ya da kesme işareti
// ("Ayşe'ye", "Ayşe,", "@ayşe", "bot ayşe") eşleşir; "Ayşegül" eşleşmez. Büyük/küçük harf Türkçe kurallarıyla.
// ASCII'ye katlanmış Türkçe hâl ve iyelik ekleri (adın sonuna kesmesiz yazılanlar).
const SUFFIX = new Set(['e', 'a', 'i', 'u', 'ye', 'ya', 'yi', 'yu', 'in', 'un', 'nin', 'nun', 'de', 'da', 'te', 'ta',
  'den', 'dan', 'ten', 'tan', 'le', 'la', 'yle', 'yla', 'ile', 'm', 'im', 'um', 'cim', 'cum', 'cigim', 'cugum', 'mi', 'mu', 'ya', 'ler', 'lar']);

// İki kelime arasında en fazla bir harf farkı var mı (ekleme, silme, değiştirme ya da yer değiştirme)?
function nearlySame(a, b) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i += 1;
  if (a.length === b.length) {
    if (a.slice(i + 1) === b.slice(i + 1)) return true;                                  // bir harf farklı
    return a[i] === b[i + 1] && a[i + 1] === b[i] && a.slice(i + 2) === b.slice(i + 2);   // iki harf yer değiştirmiş
  }
  const [lo, hi] = a.length < b.length ? [a, b] : [b, a];
  return lo.slice(i) === hi.slice(i + 1);                                                 // bir harf eksik/fazla
}

// Metinde bu ada seslenilmiş mi? Telefonda hızlı yazılan, kesmesiz ek alan ("ahmete", "ahmetin") ya da
// bir harfi yanlış yazılmış adlar ("ahmte", "mehmt") da tanınır. 4 harften kısa adlarda yalnızca tam eşleşme.
function mentions(text, name) {
  const t = norm(text);
  const needles = [...new Set([norm(name), bareName(name)].filter((n) => n.length >= 2))];
  for (const needle of needles) {
    let i = t.indexOf(needle);
    while (i >= 0) {
      const before = i === 0 ? '' : t[i - 1];
      const after = t[i + needle.length] || '';
      if (!LETTER.test(before) && (!after || !LETTER.test(after))) return true;
      i = t.indexOf(needle, i + 1);
    }
  }
  const words = t.split(/[^a-z0-9]+/).filter(Boolean);
  for (const needle of needles) {
    if (needle.length < 4 || /\s/.test(needle)) continue;
    for (const w of words) {
      if (w.length < needle.length - 1) continue;
      // Kesmesiz Türkçe hâl eki: ahmete, ahmetin, ayseye, aysenin, mehmetle ("ahmetcan", "aysegul" değil).
      if (w.startsWith(needle) && SUFFIX.has(w.slice(needle.length))) return true;
      // Bir harflik yazım hatası (eki de olabilir: "ahmtin").
      for (let cut = 0; cut <= 5 && w.length - cut >= needle.length - 1; cut++) {
        // İlk harf aynı olmalı ("kayse" Ayşe değildir).
        if (w[0] === needle[0] && (cut === 0 || SUFFIX.has(w.slice(w.length - cut))) && nearlySame(w.slice(0, w.length - cut), needle)) return true;
      }
    }
  }
  return false;
}

// Seslenilen botlar (göndereni hariç). Aynı çıplak ada sahip birden çok kişi varsa tam ad aranır.
function addressedBots(text, bots, fromId) {
  return bots.filter((b) => b.id !== fromId && mentions(text, b.name));
}

class SpeechGate {
  constructor({ rng = Math.random, now = Date.now, limits = {} } = {}) {
    this.rng = rng;
    this.now = now;
    this.limits = { ...LIMITS, ...limits };
    this.reset();
  }

  reset() {
    this.lines = [];               // { botId, at, free } – free: doğrudan cevap değil
    this.perBotDay = new Map();
    this.lastFree = new Map();
    this.cooldownUntil = 0;
  }

  recent() {
    const t = this.now() - this.limits.windowMs;
    this.lines = this.lines.filter((l) => l.at >= t);
    return this.lines;
  }

  // Kendiliğinden (doğrudan cevap olmayan) bir satıra izin var mı?
  canSpeakFree(botId) {
    const L = this.limits;
    if (this.recent().filter((l) => l.free).length >= L.windowMax) return false;
    if ((this.perBotDay.get(botId) || 0) >= L.botDayMax) return false;
    return this.now() - (this.lastFree.get(botId) || -Infinity) >= L.botGapMs;
  }

  record(botId, { direct = false } = {}) {
    const at = this.now();
    this.lines.push({ botId, at, free: !direct });
    if (!direct) {
      this.perBotDay.set(botId, (this.perBotDay.get(botId) || 0) + 1);
      this.lastFree.set(botId, at);
    }
  }

  // Bir sohbet mesajına hangi botlar cevap verecek?
  // msg: { fromId, text, depth } – depth: insan mesajı 0, bota cevap veren bot mesajı +1.
  // bots: konuşabilecek (canlı, aynı kanalda mesajı alan) botlar { id, name }.
  // fromBot: gönderen bot mu. Dönen: [{ botId, kind: 'direct'|'react', depth }].
  decide({ fromId, text, depth = 0, fromBot = false }, bots) {
    const L = this.limits;
    const now = this.now();
    const out = [];
    const direct = addressedBots(text, bots, fromId);
    if (fromBot) {
      // Bot→bot: zincir kısa; sınıra gelince soğuma başlar.
      if (depth >= L.maxChain || now < this.cooldownUntil) {
        if (depth >= L.maxChain) this.cooldownUntil = now + L.chainCooldownMs;
        return out;
      }
      for (const b of direct) out.push({ botId: b.id, kind: 'direct', depth: depth + 1, fromBot: true });
      if (!direct.length && this.rng() < L.botReactChance) {
        const cand = bots.filter((b) => b.id !== fromId && this.canSpeakFree(b.id));
        const pick = cand[Math.floor(this.rng() * cand.length)];
        if (pick) out.push({ botId: pick.id, kind: 'react', depth: depth + 1, fromBot: true });
      }
      return out;
    }
    // İnsan mesajı: seslenilen herkes cevap verir (sınırsız); kimse seslenilmediyse en fazla iki tepki.
    for (const b of direct) out.push({ botId: b.id, kind: 'direct', depth: 1, fromBot: false });
    if (direct.length) return out;
    const cand = bots.filter((b) => b.id !== fromId && this.canSpeakFree(b.id));
    for (let i = cand.length - 1; i > 0; i--) {
      const j = Math.floor(this.rng() * (i + 1));
      [cand[i], cand[j]] = [cand[j], cand[i]];
    }
    for (const b of cand) {
      if (out.length >= L.maxReactors) break;
      const p = out.length === 0 ? Math.min(0.9, L.reactChance + 0.25) : L.reactChance;
      if (this.rng() < p) out.push({ botId: b.id, kind: 'react', depth: 1, fromBot: false });
    }
    return out;
  }
}

module.exports = { SpeechGate, ChatPacer, readMs, typeMs, norm, mentions, addressedBots, bareName, LIMITS, PACE };
