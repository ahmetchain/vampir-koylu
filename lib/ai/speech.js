'use strict';

// Botlar ne zaman konuşur (V2-PLAN §17): adıyla seslenilen bot HER ZAMAN cevap verir (kalabalık
// sınırı bunu engellemez); kimseye seslenilmeyen bir insan mesajına en fazla iki bot tepki verir;
// bot-bot zincirleri kısa tutulur ve soğuma süresiyle sınırlanır; botlar sohbeti doldurmaz.

const LIMITS = {
  maxReactors: 2,          // seslenilmeyen bir mesaja en fazla bu kadar bot
  reactChance: 0.55,       // her aday bot için tepki olasılığı (ilk aday için daha yüksek)
  windowMs: 30000,         // oda geneli pencere
  windowMax: 5,            // pencere başına doğrudan-cevap dışı bot satırı
  botGapMs: 9000,          // bir botun iki kendiliğinden satırı arasında en az
  botDayMax: 8,            // bir botun bir günde doğrudan-cevap dışı satır sayısı
  maxChain: 2,             // insan mesajından sonra en fazla bu kadar bot→bot halkası
  chainCooldownMs: 20000,  // zincir sınırına ulaşınca botlar bu süre birbirine cevap vermez
  botReactChance: 0.25,    // bir botun seslenilmemiş mesajına başka bir botun tepki olasılığı
};

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
function mentions(text, name) {
  const t = norm(text);
  const needles = new Set([norm(name), bareName(name)].filter((n) => n.length >= 2));
  for (const needle of needles) {
    let i = t.indexOf(needle);
    while (i >= 0) {
      const before = i === 0 ? '' : t[i - 1];
      const after = t[i + needle.length] || '';
      if (!LETTER.test(before) && (!after || !LETTER.test(after))) return true;
      i = t.indexOf(needle, i + 1);
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

module.exports = { SpeechGate, mentions, addressedBots, bareName, LIMITS };
