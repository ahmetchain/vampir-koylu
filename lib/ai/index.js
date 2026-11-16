'use strict';

// Akıllı botlar (V2-PLAN §17, docs/AI-BOTS.md). Sunucu, ortamda ANTHROPIC_API_KEY varsa bir AiClient
// kurar; yoksa (ya da AI_BOTS=off ise) null döner ve botlar yalnızca rastgele davranır.

const { aiConfig } = require('./config');
const { AiClient } = require('./client');

function createAiClient(env = process.env, { logger = console } = {}) {
  const config = aiConfig(env);
  if (!config.apiKey || config.disabled) return null;
  try {
    return new AiClient({ config, logger });
  } catch (err) {
    logger.warn(`[ai] Akıllı botlar başlatılamadı: ${err && err.message ? err.message : err}`);
    return null;
  }
}

module.exports = { createAiClient, aiConfig, AiClient };
