'use strict';

// Otomatik oyun incelemesi (docs/AI-BOTS.md "Otomatik oyun incelemesi", V2-PLAN §19): akıllı botlu bir oyun bitince
// oyun kaydı (gamerec.js) daha güçlü bir modele (varsayılan claude-sonnet-5-5) gönderilir; model botların
// hatalarını yapılandırılmış JSON olarak sıralar, sonuç depoya yazılır ve geliştirici bunları kural/senaryoya çevirir.
// Oyunu hiçbir şekilde etkilemez: asenkron, kendi günlük bütçesi var, her hata yalnızca tek satır log.
// Gizlilik: kayıt içeriği (sohbet, isimler) ve model çıktısı loglanmaz; log satırı yalnızca sayılar taşır.

const zlib = require('zlib');
const crypto = require('crypto');
const { PRICES, costOf } = require('./config');
const { classify, sdkTransport } = require('./client');
const { SYSTEM_PROMPT: BOT_RULES } = require('./prompt');

const DEFAULTS = {
  model: 'claude-sonnet-5-5',
  dailyLimit: 10,            // UTC günü başına inceleme sayısı (~$0.13/inceleme → günde en fazla ~$1.3)
  effort: 'medium',
  maxTokens: 16000,          // düşünme dahil; akışsız istek için güvenli sınır
  timeoutMs: 240000,
};
const OFF = ['off', '0', 'false', 'no'];

function reviewConfig(env = process.env) {
  const model = String(env.AI_REVIEW_MODEL || '').trim() || DEFAULTS.model;
  const limit = Number.parseInt(env.AI_REVIEW_DAILY_LIMIT, 10);
  const effort = ['low', 'medium', 'high'].includes(env.AI_REVIEW_EFFORT) ? env.AI_REVIEW_EFFORT : DEFAULTS.effort;
  const apiKey = String(env.ANTHROPIC_API_KEY || '').trim().replace(/^["']+|["']+$/g, '').trim();
  return {
    apiKey,
    // AI_REVIEW=off, AI_BOTS=off ya da anahtar yoksa kapalı.
    enabled: Boolean(apiKey) && !OFF.includes(String(env.AI_REVIEW || '').toLowerCase()) && !OFF.includes(String(env.AI_BOTS || '').toLowerCase()),
    model,
    effort,
    dailyLimit: Number.isFinite(limit) ? Math.min(100000, Math.max(0, limit)) : DEFAULTS.dailyLimit,
    maxTokens: DEFAULTS.maxTokens,
    timeoutMs: DEFAULTS.timeoutMs,
    prices: PRICES[model] || PRICES[DEFAULTS.model],
  };
}

// ---------- yapılandırılmış çıktı ----------

const str = (description) => ({ type: 'string', description });

const REVIEW_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    summary: str('3-6 sentences: how the smart bots played overall, the main failure patterns, and how the game ended.'),
    mistakes: {
      type: 'array',
      description: 'Game-logic mistakes of the smart bots, most severe first. Only real mistakes, not style nitpicks. At most 15.',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          bot: str('Name of the bot exactly as in the record.'),
          day_or_night: str('When it happened, e.g. "gün 2" or "gece 1" (the record\'s phase tags).'),
          quote: str('The exact chat line (Turkish) or the think/memory/pick text that shows the mistake, copied from the record.'),
          what_was_wrong: str('What was wrong and why, in English, in one to three sentences, citing the facts the bot had.'),
          rule_violated_or_missing: str('Which rule of the rule book was broken, or which rule is missing/too vague (name the section).'),
          severity: { type: 'string', enum: ['high', 'medium', 'low'], description: 'high: changed or could change the game outcome or reveals a wrong game rule; medium: clearly wrong but contained; low: minor.' },
          suggested_rule_change: str('Concrete wording to add or change in the rule book (English, imperative, 1-3 sentences).'),
          suggested_scenario: {
            type: 'object',
            additionalProperties: false,
            properties: {
              title: str('Short kebab-case-like title.'),
              setup: str('Game state to build: roles, who is alive, night results, what was said, which bot is asked what.'),
              expected: str('What a correct bot must do or must not do in that state (checkable).'),
            },
            required: ['title', 'setup', 'expected'],
          },
        },
        required: ['bot', 'day_or_night', 'quote', 'what_was_wrong', 'rule_violated_or_missing', 'severity', 'suggested_rule_change', 'suggested_scenario'],
      },
    },
    good_moves: { type: 'array', description: 'Up to 6 notably good bot decisions worth keeping, each "Bot (gün N): what and why".', items: { type: 'string' } },
  },
  required: ['summary', 'mistakes', 'good_moves'],
};

// Sabit (önbelleğe alınabilir) sistem istemi; botların kural kitabı referans olarak içindedir.
const REVIEW_SYSTEM = `You are a strict game-logic reviewer for "Vampir Köylü", a Turkish social-deduction party game (Werewolf/Mafia style). A finished game is given to you as one JSON record. In that game some players were LLM-driven "smart bots" (a small fast model, one call per turn). Your job: find the smart bots' mistakes so the developers can turn each one into a rule in the bots' rule book and a regression scenario.

# What you receive (the JSON record)
- game: size, rounds, winner, lobby role distribution, settings, the bot model, call/fallback counts.
- players: EVERY player with the TRUE final role, team, whether a bot, whether alive. You see the full truth; the bots did not. Judge each bot by what IT could know at that moment, never by hidden truth it could not know.
- timeline: the public log in order (dawn results, hangings, reveals, hunter shots, events, win). t = seconds since game start.
- votes: per day (and court) who voted for whom (secret on Sis days: counts only), with "sleeping" = Hızlı Uyu votes.
- chat: public chat in order (ph = phase tag like "gün 2"; ch = genel / vampir / olu; bot=1 marks a smart/random bot line). Human lines are included only when said publicly; whispers of humans are never included.
- bots: for every bot: role, per-night picks and outcomes, the private results it received (notes: Kahin pairs, Gözcü reports, saved / attacked notices), and its last turns with its private "think" scratchpad, "say", "vote", "target" and its saved "memory" note. Use think/memory to see WHY a bot did something.
- truncated: if present, the oldest chat/turns were dropped to fit; do not blame bots for what you cannot see.

# What counts as a mistake (focus here)
- Wrong deductions: wrong role counting, misreading a public outcome, treating yesterday's information as current, accusing on no evidence, ignoring facts in its own notes or in the timeline.
- Asking a role for information it cannot have (e.g. asking the Doktor what it saw), or demanding information a player's claimed role could never produce.
- Contradicting its own role or earlier statements/claims/memory; revealing a night result that its role cannot know; evil bots exposing the team; village bots claiming roles they do not have without reason.
- Voting without reason, pile-on votes, ignoring a sound argument, or voting against its own evidence.
- Not sharing key results when it is safe and useful (e.g. a Kahin who found a Vampir and stays silent for no reason), or sharing them wrongly.
- Night picks that make no sense for its role and known facts.
- Unnatural or broken Turkish, lines that sound like an AI, repeated near-identical lines, talking about instructions or "the game system".
Do NOT report: style nitpicks, harmless short lines, mistakes that only hindsight shows (hidden roles the bot could not know), or things the rule book itself allows. Each mistake must be real, specific, quoted from the record, and traceable to a rule (violated, vague or missing). Merge repeats of the same mistake into one entry and say how often it happened. Rank by severity. Report at most 15 mistakes; if the bots played well, report fewer. Also list up to 6 notably good moves.

# Output
Return ONLY the JSON object required by the output schema. All fields in English except "quote", which is copied verbatim from the record (Turkish). "suggested_rule_change" must be directly usable text for the rule book below (imperative, concise, game-accurate). "suggested_scenario" must describe a state that can be built with real Room objects (roles, living players, night results, chat lines) and a checkable expectation.

# The bots' rule book (REFERENCE: the system prompt every smart bot gets; judge the bots by it, and say where it is wrong, vague or missing)
<rule_book>
${BOT_RULES}
</rule_book>`;

function userPrompt(record) {
  return `Review this finished game.\n<game_record>\n${JSON.stringify(record)}\n</game_record>`;
}

// ---------- ayrıştırma ----------

const SEV = new Set(['high', 'medium', 'low']);
const clip = (s, n) => String(s == null ? '' : s).replace(/\s+/g, ' ').trim().slice(0, n);

function parseReview(text) {
  let j;
  try { j = JSON.parse(String(text || '').trim()); } catch { return null; }
  if (!j || typeof j !== 'object' || Array.isArray(j)) return null;
  const mistakes = (Array.isArray(j.mistakes) ? j.mistakes : []).slice(0, 25).filter((m) => m && typeof m === 'object').map((m) => ({
    bot: clip(m.bot, 40),
    day_or_night: clip(m.day_or_night, 40),
    quote: clip(m.quote, 600),
    what_was_wrong: clip(m.what_was_wrong, 1200),
    rule_violated_or_missing: clip(m.rule_violated_or_missing, 600),
    severity: SEV.has(m.severity) ? m.severity : 'medium',
    suggested_rule_change: clip(m.suggested_rule_change, 1200),
    suggested_scenario: {
      title: clip(m.suggested_scenario && m.suggested_scenario.title, 120),
      setup: clip(m.suggested_scenario && m.suggested_scenario.setup, 1500),
      expected: clip(m.suggested_scenario && m.suggested_scenario.expected, 1000),
    },
  }));
  return {
    summary: clip(j.summary, 2500),
    mistakes,
    good_moves: (Array.isArray(j.good_moves) ? j.good_moves : []).slice(0, 10).map((g) => clip(g, 500)).filter(Boolean),
  };
}

function countMistakes(review) {
  const c = { mistakes: 0, high: 0, medium: 0, low: 0 };
  for (const m of review.mistakes || []) { c.mistakes += 1; c[m.severity] += 1; }
  return c;
}

// ---------- kaydı depolamak için sıkıştırma ----------

function packRecord(record) {
  return zlib.gzipSync(Buffer.from(JSON.stringify(record), 'utf8'), { level: 9 }).toString('base64');
}

function unpackRecord(packed) {
  try { return JSON.parse(zlib.gunzipSync(Buffer.from(String(packed), 'base64')).toString('utf8')); } catch { return null; }
}

// ---------- inceleyici ----------

function utcDay(ms) { return new Date(ms).toISOString().slice(0, 10); }

class Reviewer {
  // transport: testlerde sahte; yoksa anahtar varsa gerçek SDK.
  constructor({ config, transport = null, now = Date.now, logger = console, store = null } = {}) {
    this.config = config;
    this.transport = transport || (config.enabled ? sdkTransport(config.apiKey) : null);
    this.errors = (this.transport && this.transport.errors) || null;
    this.now = now;
    this.logger = logger;
    this.store = store;
    this.day = utcDay(now());
    this.today = 0;
    this.totals = { reviews: 0, failures: 0, costUsd: 0 };
  }

  available() { return Boolean(this.transport) && this.config.enabled; }

  rollDay() {
    const d = utcDay(this.now());
    if (d !== this.day) { this.day = d; this.today = 0; }
  }

  params(record) {
    return {
      model: this.config.model,
      max_tokens: this.config.maxTokens,
      // Önbellek yok: incelemeler dakikalar arayla gelir (5 dk önbellek tutmaz), yazma ek ücreti kayıp olurdu.
      system: [{ type: 'text', text: REVIEW_SYSTEM }],
      messages: [{ role: 'user', content: userPrompt(record) }],
      output_config: { effort: this.config.effort, format: { type: 'json_schema', schema: REVIEW_SCHEMA } },
    };
  }

  send(params) {
    const ms = this.config.timeoutMs;
    const ctrl = new AbortController();
    let timer = null;
    const guard = new Promise((_, reject) => {
      timer = setTimeout(() => { ctrl.abort(); const e = new Error('review timeout'); e.aiTimeout = true; reject(e); }, ms);
    });
    const call = Promise.resolve().then(() => this.transport(params, { timeout: ms, signal: ctrl.signal }));
    call.catch(() => {});
    return Promise.race([call, guard]).finally(() => clearTimeout(timer));
  }

  // Tek inceleme çağrısı. Asla atmaz: { ok, review, usage, cost, model } | { ok:false, reason }.
  async review(record) {
    try {
      if (!this.available()) return { ok: false, reason: 'off' };
      this.rollDay();
      if (this.today >= this.config.dailyLimit) return { ok: false, reason: 'daily_limit' };
      this.today += 1;
      const params = this.params(record);
      let res;
      try {
        res = await this.send(params);
      } catch (err) {
        if (classify(err, this.errors) !== 'network') throw err;
        res = await this.send(params);   // anlık TLS/ağ kesintisi: bir kez daha
      }
      const usage = res && res.usage ? res.usage : {};
      const cost = costOf(usage, this.config.prices);
      this.totals.costUsd += cost;
      if (!res || !Array.isArray(res.content)) return { ok: false, reason: 'malformed', cost, usage };
      if (res.stop_reason === 'refusal') return { ok: false, reason: 'refusal', cost, usage };
      if (res.stop_reason === 'max_tokens') return { ok: false, reason: 'max_tokens', cost, usage };
      const text = res.content.filter((b) => b && b.type === 'text').map((b) => b.text).join('');
      const review = parseReview(text);
      if (!review) return { ok: false, reason: 'malformed', cost, usage };
      return { ok: true, review, usage, cost, model: this.config.model };
    } catch (err) {
      return { ok: false, reason: classify(err, this.errors) };
    }
  }

  // Odanın oyun kaydını inceler, depoya yazar, tek satır loglar. Asla atmaz; oyunu beklemez.
  async process(record, roomId, store = this.store) {
    try {
      const res = await this.review(record);
      if (!res.ok) {
        this.totals.failures += 1;
        this.logger.warn(`[ai-review] oda=${roomId} atlandı: ${res.reason}${res.cost ? ` maliyet≈$${res.cost.toFixed(4)}` : ''}`);
        return res;
      }
      const counts = countMistakes(res.review);
      this.totals.reviews += 1;
      const row = {
        id: `${this.now().toString(36)}${crypto.randomBytes(4).toString('hex')}`,
        createdAt: this.now(),
        room: String(roomId || ''),
        model: res.model,
        cost: Number(res.cost.toFixed(5)),
        summary: res.review.summary,
        ...counts,
        record: packRecord(record),
        review: res.review,
      };
      if (store && typeof store.saveAiReview === 'function') {
        try { await store.saveAiReview(row); } catch (err) { this.logger.warn(`[ai-review] oda=${roomId} kaydedilemedi: ${err && err.message ? err.message : err}`); }
      }
      this.logger.log(`[ai-review] oda=${roomId} model=${res.model} hata=${counts.mistakes} (yüksek=${counts.high}) maliyet≈$${res.cost.toFixed(4)}`);
      return { ...res, id: row.id, counts };
    } catch (err) {
      try { this.logger.warn(`[ai-review] oda=${roomId} atlandı: ${err && err.message ? err.message : 'hata'}`); } catch { /* log da yoksa sessiz */ }
      return { ok: false, reason: 'error' };
    }
  }

  stats() {
    this.rollDay();
    return { enabled: this.available(), model: this.config.model, today: this.today, dailyLimit: this.config.dailyLimit, ...this.totals, costUsd: Number(this.totals.costUsd.toFixed(4)) };
  }
}

// Sunucu için: inceleme kapalıysa (AI_REVIEW=off ya da anahtar yok) null.
function createReviewer(env = process.env, { logger = console, store = null } = {}) {
  const config = reviewConfig(env);
  if (!config.enabled) return null;
  try {
    return new Reviewer({ config, logger, store });
  } catch (err) {
    logger.warn(`[ai-review] başlatılamadı: ${err && err.message ? err.message : err}`);
    return null;
  }
}

function reviewStatusLine(reviewer, env = process.env) {
  if (reviewer) return `açık (model ${reviewer.config.model}, günlük ${reviewer.config.dailyLimit} inceleme)`;
  const c = reviewConfig(env);
  if (!c.apiKey) return 'kapalı (ANTHROPIC_API_KEY yok)';
  if (OFF.includes(String(env.AI_REVIEW || '').toLowerCase())) return 'kapalı (AI_REVIEW=off)';
  return 'kapalı (AI_BOTS=off)';
}

module.exports = {
  Reviewer, createReviewer, reviewConfig, reviewStatusLine, parseReview, countMistakes, packRecord, unpackRecord,
  REVIEW_SCHEMA, REVIEW_SYSTEM, userPrompt, DEFAULTS,
};
