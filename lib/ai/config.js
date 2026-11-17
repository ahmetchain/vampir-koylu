'use strict';

// Akıllı botların ayarları (sunucu ortam değişkenlerinden). Anahtar yoksa özellik kapalıdır.
// Değerler bilinçli olarak küçük tutulur: Haiku, düşük efor, kısa yanıt, sınırlı çağrı.

const DEFAULTS = {
  model: 'claude-haiku-5-5',
  effort: 'medium',
  maxTokens: 2048,          // düşünme de bu sınıra sayılır; JSON yanıtı (think + memory dahil) ~250-450 token
  dailyCalls: 3000,         // tüm sunucu, UTC günü başına
  gameCalls: 300,           // tek oyun başına
  botCalls: 45,             // bir botun bir oyundaki çağrı sayısı
  concurrency: 6,           // aynı anda en fazla bu kadar istek (tüm odalar)
  timeoutMs: 15000,         // gündüz turları için üst sınır (gece turunun sınırı seçim süresinden gelir); medium efor ~8 sn'yi aşabiliyor
};

// Fiyatlar: $ / 1M token (claude-api referansı, 2026-11; ≤100K token istem). Bilinmeyen model için Haiku 5.5.
const PRICES = {
  'claude-haiku-5-5': { input: 0.10, output: 0.50, cacheWrite: 0.125, cacheRead: 0.01 },
  'claude-sonnet-5-5': { input: 2.00, output: 10.00, cacheWrite: 2.50, cacheRead: 0.10 },
  'claude-opus-5-5': { input: 4.00, output: 20.00, cacheWrite: 5.00, cacheRead: 0.20 },
};

function intEnv(env, key, fallback, min, max) {
  const raw = env[key];
  if (raw === undefined || raw === '') return fallback;
  const n = Number.parseInt(raw, 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

function aiConfig(env = process.env) {
  const effort = ['low', 'medium', 'high'].includes(env.AI_BOT_EFFORT) ? env.AI_BOT_EFFORT : DEFAULTS.effort;
  const model = (env.AI_BOT_MODEL || '').trim() || DEFAULTS.model;
  return {
    // Panoya tırnakla yapıştırılan anahtar ("sk-...") da çalışsın.
    apiKey: String(env.ANTHROPIC_API_KEY || '').trim().replace(/^["']+|["']+$/g, '').trim(),
    // AI_BOTS=off sunucuda özelliği anahtar olsa bile kapatır.
    disabled: ['off', '0', 'false', 'no'].includes(String(env.AI_BOTS || '').toLowerCase()),
    model,
    effort,
    maxTokens: intEnv(env, 'AI_MAX_TOKENS', DEFAULTS.maxTokens, 256, 4096),
    dailyCalls: intEnv(env, 'AI_DAILY_CALL_LIMIT', DEFAULTS.dailyCalls, 0, 1_000_000),
    gameCalls: intEnv(env, 'AI_GAME_CALL_LIMIT', DEFAULTS.gameCalls, 0, 10_000),
    botCalls: intEnv(env, 'AI_BOT_CALL_LIMIT', DEFAULTS.botCalls, 0, 1000),
    concurrency: intEnv(env, 'AI_CONCURRENCY', DEFAULTS.concurrency, 1, 64),
    timeoutMs: intEnv(env, 'AI_TIMEOUT_MS', DEFAULTS.timeoutMs, 1000, 30000),
    prices: PRICES[model] || PRICES[DEFAULTS.model],
  };
}

// usage: { input_tokens, output_tokens, cache_creation_input_tokens, cache_read_input_tokens }
function costOf(usage, prices) {
  const u = usage || {};
  return ((u.input_tokens || 0) * prices.input
    + (u.output_tokens || 0) * prices.output
    + (u.cache_creation_input_tokens || 0) * prices.cacheWrite
    + (u.cache_read_input_tokens || 0) * prices.cacheRead) / 1e6;
}

module.exports = { aiConfig, costOf, DEFAULTS, PRICES };
