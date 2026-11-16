'use strict';

// Botun tek "tur" yanıtı: yapılandırılmış çıktı şeması (sabit; önbellek ve şema derlemesi için hiç
// değişmez), ayrıştırma ve temizleme. Modelden gelen her şey güvenilmez kabul edilir.

const TURN_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    say: { type: 'string', description: 'One short casual Turkish chat line, or "" to stay silent.' },
    vote: { type: 'string', description: 'Day only: exact player name to vote for, "uyu" for Hızlı Uyu, or "" to keep your current vote.' },
    target: { type: 'string', description: 'The target the TASK asks for (night pick, hunter shot, gardiyan lock): exact player name, or "".' },
    poison: { type: 'string', description: 'Cadı only: exact name to poison tonight, or "".' },
    memory: { type: 'string', description: 'Your private notes for your next turn (suspicions, claims, lies you told). Max ~300 chars.' },
  },
  required: ['say', 'vote', 'target', 'poison', 'memory'],
};

const SAY_MAX = 120;      // istemde ~90 istenir; biraz pay, sonra kelime sınırında kesilir
const MEMORY_MAX = 400;

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
  if (s.length > SAY_MAX) {
    const cut = s.slice(0, SAY_MAX);
    const sp = cut.lastIndexOf(' ');
    s = `${(sp > 40 ? cut.slice(0, sp) : cut).replace(/[,;:\s]+$/, '')}…`;
  }
  return s;
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

module.exports = { TURN_SCHEMA, parseTurn, cleanSay, resolveName, isSleepWord, stripBot, SAY_MAX };
