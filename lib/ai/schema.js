'use strict';

// Botun tek "tur" yanıtı: yapılandırılmış çıktı şeması (sabit; önbellek ve şema derlemesi için hiç
// değişmez), ayrıştırma ve temizleme. Modelden gelen her şey güvenilmez kabul edilir.

const TURN_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    // Not: alanın adı "think" olup "önce düşünceni yaz" diye tarif edilince Sonnet 5.5 her turu "refusal" ile
    // reddediyordu (düşünceyi çıktıya aktarma koruması). "plan" olarak kısa bir tur planı istenir.
    plan: { type: 'string', description: 'Short plan for this turn in a few words: who you suspect, which facts matter, what you will do. Max ~300 chars.' },
    say: { type: 'string', description: 'Casual Turkish chat line fitted to the moment: short reactions 2-6 words, arguments one sentence; never over 100 characters. "" to stay silent.' },
    vote: { type: 'string', description: 'Day only: exact name of a LIVING player to vote for, "uyu" for Hızlı Uyu, or "" to keep your current vote / not vote yet. Without at least medium evidence "" is normal.' },
    target: { type: 'string', description: 'The target the TASK asks for (night pick, hunter shot, gardiyan lock): exact player name, or "".' },
    poison: { type: 'string', description: 'Cadı only: exact name to poison tonight, or "".' },
    memory: { type: 'string', description: 'Private notes for your next turn, replacing the old ones, max ~700 chars, shaped "claims: … | results: … | suspects: … | trusted: … | my story: …".' },
  },
  required: ['plan', 'say', 'vote', 'target', 'poison', 'memory'],
};

// İstemde ~60 (en fazla 100) karakter istenir. Daha uzunsa sığan tam cümleler (yoksa yan cümleler)
// tutulur; "…" ile kesilmez. Kelime ortasından asla kesilmez.
const SAY_MAX = 140;
const MEMORY_MAX = 800;
const THINK_MAX = 400;

// Uzun satırı SAY_MAX içine sığan en uzun baştaki tam cümle/yan cümle dizisine indirir.
function fitLine(s, max = SAY_MAX) {
  if (s.length <= max) return s;
  const take = (parts) => {
    let out = '';
    for (const part of parts) {
      if ((out + part).trimEnd().length > max) break;
      out += part;
    }
    return out.trim();
  };
  // 1) Cümleler (noktalama işaretiyle birlikte).
  const sentences = take(s.match(/[^.!?…]+(?:[.!?…]+|$)\s*/g) || []);
  if (sentences) return sentences;
  // 2) İlk cümlenin yan cümleleri (virgül, noktalı virgül, iki nokta, tire); sondaki ayraç atılır.
  const clauses = take(s.match(/[^,;:–—]+(?:[,;:–—]+|$)\s*/g) || []).replace(/[\s,;:–—]+$/, '');
  if (clauses.length >= 20) return clauses;
  // 3) Son çare: son kelime sınırında (üç nokta eklenmez).
  const cut = s.slice(0, max + 1);
  const sp = cut.lastIndexOf(' ');
  return (sp > 20 ? cut.slice(0, sp) : s.slice(0, max)).replace(/[\s,;:–—]+$/, '');
}

// Botun kendini ele vereceği ya da "talimat" konuşmasına girdiği satırlar söylenmez.
const FORBIDDEN = [
  /yapay\s*zek[aâ]/i, /dil\s*model/i, /language\s*model/i, /\bas an ai\b/i, /\bai\b/i, /\bllm\b/i,
  /claude/i, /anthropic/i, /\bchatgpt\b/i, /\bgpt\b/i, /talimat/i, /sistem\s*(istemi|mesajı|prompt)/i, /\bprompt\b/i,
];

function lower(s) { return String(s || '').toLocaleLowerCase('tr'); }

function cleanSay(raw) {
  let s = String(raw || '').replace(/[\r\n\t]+/g, ' ');
  s = s.replace(/[*_`#>~|]/g, '').replace(/\s+/g, ' ').trim();
  // Baştaki "Bot Ayşe:" gibi kendi adını ya da tırnakları at.
  s = s.replace(/^["'“”«»]+|["'“”«»]+$/g, '').trim();
  if (!s) return '';
  if (FORBIDDEN.some((re) => re.test(s))) return '';
  return fitLine(s);
}

function cleanField(raw, max = 60) {
  return String(raw || '').replace(/\s+/g, ' ').trim().slice(0, max);
}

// Model metnini ayrıştırır; biçim bozuksa null döner (çağıran rastgele bota düşer).
function parseTurn(text) {
  if (typeof text !== 'string' || !text.trim()) return null;
  let obj;
  try {
    obj = JSON.parse(text);
  } catch {
    // Yapılandırılmış çıktıda olmamalı; yine de metnin içindeki ilk nesneyi dene.
    const m = text.match(/\{[\s\S]*\}/);
    if (!m) return null;
    try { obj = JSON.parse(m[0]); } catch { return null; }
  }
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return null;
  for (const k of TURN_SCHEMA.required) {
    if (obj[k] !== undefined && typeof obj[k] !== 'string') return null;
  }
  return {
    // Özel düşünce: asla söylenmez ve loglanmaz; yalnızca bu turun kararına hizmet eder.
    think: String(obj.plan || obj.think || '').replace(/\s+/g, ' ').trim().slice(0, THINK_MAX),
    say: cleanSay(obj.say),
    vote: cleanField(obj.vote),
    target: cleanField(obj.target),
    poison: cleanField(obj.poison),
    memory: String(obj.memory || '').replace(/\s+/g, ' ').trim().slice(0, MEMORY_MAX),
  };
}

// İsimden oyuncu: önce tam ad, sonra "Bot " öneki olmadan, sonra baştaki/sondaki noktalama atılarak.
function stripBot(name) { return lower(name).replace(/^bot\s+/, '').trim(); }

function resolveName(raw, players) {
  const want = lower(raw).replace(/^[@\s"'“”]+|[\s"'“”.!?,]+$/g, '').trim();
  if (!want) return null;
  const exact = players.find((p) => lower(p.name) === want);
  if (exact) return exact;
  const bare = stripBot(want);
  const hits = players.filter((p) => stripBot(p.name) === bare);
  return hits.length === 1 ? hits[0] : null;
}

const SLEEP_WORDS = new Set(['uyu', 'hızlı uyu', 'hizli uyu', 'sleep', 'uyku']);
function isSleepWord(raw) { return SLEEP_WORDS.has(lower(raw).trim()); }

module.exports = { TURN_SCHEMA, parseTurn, cleanSay, fitLine, resolveName, isSleepWord, stripBot, SAY_MAX, MEMORY_MAX, THINK_MAX };
