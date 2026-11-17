'use strict';

// Oyun geçmişi çözümlemesi (docs/GAME-LOGS.md "Çözümleme sunucuda", V2-PLAN §20): bir oyunun tam geçmişi (gamerec.js)
// okunur Türkçe markdown'a çevrilip güçlü bir modele (varsayılan claude-sonnet-5-5) gönderilir; model Türkçe markdown
// bir çözümleme yazar. Sunucu çözümlemeyi KENDİ anahtarıyla yapar (geliştirici bilgisayarında geçerli anahtar olmayabilir),
// sonucu geçmişin yanına yazar (store.saveGameLogAnalysis). İnceleyicinin (review.js) taşıyıcısını kullanır; kendi günlük sınırı vardır.
// Oyunu hiçbir şekilde etkilemez: asenkron iş, her hata yalnızca tek satır log.
// Gizlilik: kayıt içeriği (sohbet, isimler) ve model çıktısı loglanmaz; log satırı yalnızca sayılar taşır.

const { PRICES, costOf } = require('./config');
const { classify, sdkTransport } = require('./client');
const { SYSTEM_PROMPT: BOT_RULES } = require('./prompt');
const { reviewConfig } = require('./review');
const { logMarkdown } = require('./gamelog-format');

const DEFAULTS = {
  model: 'claude-sonnet-5-5',
  dailyLimit: 20,            // UTC günü başına çözümleme sayısı (~$0.05-0.25 / çözümleme)
  effort: 'medium',
  maxTokens: 16000,          // düşünme dahil; akışsız istek için güvenli sınır
  timeoutMs: 300000,
};
const OFF = ['off', '0', 'false', 'no'];
const MAX_FAILED_JOBS = 50;   // bellekte tutulan başarısız iş kayıtları

function analyzeConfig(env = process.env) {
  const model = String(env.AI_ANALYZE_MODEL || '').trim() || DEFAULTS.model;
  const limit = Number.parseInt(env.AI_ANALYZE_DAILY_LIMIT, 10);
  const effort = ['low', 'medium', 'high'].includes(env.AI_ANALYZE_EFFORT) ? env.AI_ANALYZE_EFFORT : DEFAULTS.effort;
  const apiKey = reviewConfig(env).apiKey;
  // Kapalı nedenleri: no_key (anahtar yok), off (AI_ANALYZE=off ya da AI_BOTS=off).
  const off = OFF.includes(String(env.AI_ANALYZE || '').toLowerCase()) || OFF.includes(String(env.AI_BOTS || '').toLowerCase());
  return {
    apiKey,
    enabled: Boolean(apiKey) && !off,
    reason: off ? 'off' : (apiKey ? null : 'no_key'),
    model,
    effort,
    dailyLimit: Number.isFinite(limit) ? Math.min(100000, Math.max(0, limit)) : DEFAULTS.dailyLimit,
    maxTokens: DEFAULTS.maxTokens,
    timeoutMs: DEFAULTS.timeoutMs,
    prices: PRICES[model] || PRICES[DEFAULTS.model],
  };
}

const ANALYSIS_SYSTEM = (rules) => `You are a senior game designer and QA analyst for "Vampir Köylü", a Turkish social-deduction party game (Werewolf/Mafia style, played in the browser). You receive the complete history of ONE finished (or abandoned) game as a Turkish markdown transcript: the header with every player's true role and result, then a day-by-day timeline with the public log, all chat (channels: genel / vampir / ölüler), votes with changes over time, night picks and results, private results marked "(yalnızca X gördü)" (only that player saw it), and, for smart bots (LLM-driven players), indented "bot notu" lines with their private notes (think / memory / fallbacks). You see the full truth; the players did not. Judge each player by what it could know at that moment.

Some players are humans; the others are bots: "bot" (simple random bots) and "akıllı bot" (smart, LLM-driven bots that read the chat and talk like players).

Write your analysis in TURKISH, as markdown, with exactly these sections:
## Ne oldu
A short chronological account of the game (who died when and how, who claimed what, how it ended) in 6-12 sentences.
## Dönüm noktaları
The 3-6 moments that decided the outcome, each with the time/phase and why it mattered.
## Botlar nasıl oynadı
How the smart bots played overall: reasoning quality, bluffing, role claims, voting, whether they stayed consistent with their private notes. Name concrete bots and quote short lines.
## İnsanlar botlara ne söyledi, botlar nasıl cevap verdi
Everything the humans said TO the bots (questions, accusations, persuasion attempts, jokes) and how each bot answered: did it answer at all, was it on topic, was it fooled or convincing, was the Turkish natural. Quote exact lines. If there were no humans or they said nothing to the bots, say so.
## Sorunlar
Real problems only, most severe first: wrong deductions, rule misunderstandings (a bot or human asking a role for information it cannot have, misreading the game rules), bot behaviour that leaks hidden information, contradictions, repeated or robotic lines, fallbacks to random moves, odd game outcomes that look like bugs (rule or timing bugs in the game itself). For each: who, when, the quote or note that shows it, why it is a problem.
## İyileştirme önerileri
Concrete, actionable suggestions, split into: (a) bot rule-book changes (imperative, usable wording for the section it belongs to), (b) game rules / UI / timing changes if the game itself caused trouble, (c) regression scenarios worth adding (title, setup, what a correct bot must do). Prefer fewer, sharper items over a long list.

Be specific and honest; do not pad. If the game was abandoned or very short, say what can and cannot be concluded. Cite times as mm:ss as in the transcript.

# Reference: the rule book the smart bots were given (to judge them by, and to say where it is wrong, vague or missing)
<rule_book>
${rules}
</rule_book>`;

const defaultSleep = (ms) => new Promise((r) => setTimeout(r, ms));

function analysisParams(config, md) {
  return {
    model: config.model,
    max_tokens: config.maxTokens,
    // Önbellek yok: çözümlemeler dakikalar arayla gelir (5 dk önbellek tutmaz), yazma ek ücreti kayıp olurdu.
    system: [{ type: 'text', text: ANALYSIS_SYSTEM(BOT_RULES) }],
    messages: [{ role: 'user', content: `Analyse this game. Transcript follows.\n<game_transcript>\n${md}\n</game_transcript>` }],
    output_config: { effort: config.effort },
  };
}

function fail(reason, extra = {}) {
  const err = new Error(reason);
  err.reason = reason;
  return Object.assign(err, extra);
}

// Tek istek, zaman aşımı ve iptal ile.
function send(transport, params, ms, signal) {
  const ctrl = new AbortController();
  const onAbort = () => ctrl.abort();
  if (signal) { if (signal.aborted) ctrl.abort(); else signal.addEventListener('abort', onAbort, { once: true }); }
  let timer = null;
  const guard = new Promise((_, reject) => {
    timer = setTimeout(() => { ctrl.abort(); const e = new Error('analyze timeout'); e.aiTimeout = true; reject(e); }, ms);
  });
  const call = Promise.resolve().then(() => transport(params, { timeout: ms, signal: ctrl.signal }));
  call.catch(() => {});
  return Promise.race([call, guard]).finally(() => { clearTimeout(timer); if (signal) signal.removeEventListener('abort', onAbort); });
}

// Çözümleme metnini üretir: { ok:true, text, usage, cost, model, truncated }. Atar: err.reason (classify sonuçları |
// 'refusal' | 'empty' | 'malformed') ve varsa err.cost / err.usage. Geçici ağ hatalarında (TLS ara katmanı vb.)
// retries denemeye kadar yeniden dener.
async function analyzeTranscript({ md, config, transport, retries = 3, sleep = defaultSleep, log = () => {}, signal = null }) {
  if (!transport) throw fail('off');
  const params = analysisParams(config, md);
  let res = null;
  for (let attempt = 1; ; attempt++) {
    try {
      res = await send(transport, params, config.timeoutMs, signal);
      break;
    } catch (err) {
      const why = classify(err, transport.errors);
      if (why !== 'network' || attempt >= retries || (signal && signal.aborted)) throw fail(why, { status: err && err.status, cause: err });
      log(attempt, retries);
      await sleep(1500 * attempt);
    }
  }
  const usage = res && res.usage ? res.usage : {};
  const cost = costOf(usage, config.prices);
  if (!res || !Array.isArray(res.content)) throw fail('malformed', { cost, usage });
  if (res.stop_reason === 'refusal') throw fail('refusal', { cost, usage });
  const text = res.content.filter((b) => b && b.type === 'text').map((b) => b.text).join('').trim();
  if (!text) throw fail('empty', { cost, usage, stopReason: res.stop_reason });
  return { ok: true, text, usage, cost, model: config.model, truncated: res.stop_reason === 'max_tokens' };
}

const TRUNCATED_NOTE = '\n\n> UYARI: model çıktısı uzunluk sınırına takıldı, çözümleme yarım kalmış olabilir.';
const utcDay = (ms) => new Date(ms).toISOString().slice(0, 10);

class Analyzer {
  // transport: testlerde sahte; yoksa anahtar varsa gerçek SDK.
  constructor({ config, transport = null, now = Date.now, logger = console, sleep = defaultSleep } = {}) {
    this.config = config;
    this.transport = transport || (config.enabled ? sdkTransport(config.apiKey) : null);
    this.now = now;
    this.logger = logger;
    this.sleep = sleep;
    this.day = utcDay(now());
    this.today = 0;
    this.jobs = new Map();      // oyun kimliği -> { status: 'running'|'failed', startedAt, reason?, at?, ctrl?, promise? }
    this.totals = { analyses: 0, failures: 0, costUsd: 0 };
  }

  available() { return Boolean(this.transport) && this.config.enabled; }

  // Kapalıysa nedeni: 'no_key' | 'off'.
  offReason() { return this.config.reason || 'off'; }

  rollDay() {
    const d = utcDay(this.now());
    if (d !== this.day) { this.day = d; this.today = 0; }
  }

  running() {
    let n = 0;
    for (const j of this.jobs.values()) if (j.status === 'running') n += 1;
    return n;
  }

  // Bellekteki iş durumu: null | { status:'running', startedAt } | { status:'failed', reason, at }.
  job(logId) {
    const j = this.jobs.get(logId);
    if (!j) return null;
    return j.status === 'running' ? { status: 'running', startedAt: j.startedAt } : { status: 'failed', reason: j.reason, at: j.at };
  }

  // Çözümlemeyi arka planda başlatır. Döner: { state: 'started'|'running'|'off'|'daily_limit' } (asla atmaz).
  start(logId, record, store) {
    try {
      const cur = this.jobs.get(logId);
      if (cur && cur.status === 'running') return { state: 'running' };
      if (!this.available()) return { state: 'off', reason: this.offReason() };
      this.rollDay();
      if (this.today >= this.config.dailyLimit) return { state: 'daily_limit' };
      this.today += 1;
      const ctrl = new AbortController();
      const job = { status: 'running', startedAt: this.now(), ctrl, promise: null };
      this.jobs.set(logId, job);
      job.promise = this.run(logId, record, store, job).catch(() => {});
      return { state: 'started' };
    } catch {
      return { state: 'off', reason: 'error' };
    }
  }

  async run(logId, record, store, job) {
    const t0 = this.now();
    let outcome = 'error';
    let cost = 0;
    let usage = {};
    try {
      const md = logMarkdown(record, {});
      const res = await analyzeTranscript({
        md, config: this.config, transport: this.transport, sleep: this.sleep, signal: job.ctrl.signal,
        log: (n, max) => this.logger.warn(`[ai-analyze] oyun=${logId} ağ hatası, yeniden deneniyor (${n}/${max - 1})`),
      });
      cost = res.cost;
      usage = res.usage;
      this.totals.costUsd += cost;
      const row = { text: res.text + (res.truncated ? TRUNCATED_NOTE : ''), cost: Number(cost.toFixed(5)), model: res.model, analyzedAt: this.now() };
      let saved = false;
      try { saved = Boolean(await store.saveGameLogAnalysis(logId, row)); } catch (err) { saved = false; this.logger.warn(`[ai-analyze] oyun=${logId} kaydedilemedi: ${err && err.message ? err.message : err}`); }
      if (!saved) { outcome = 'store'; throw fail('store', { cost, usage }); }
      this.totals.analyses += 1;
      outcome = 'ok';
      this.jobs.delete(logId);
    } catch (err) {
      const reason = err && err.reason ? err.reason : 'error';
      if (outcome !== 'ok') outcome = reason;
      if (err && err.cost && !cost) { cost = err.cost; usage = err.usage || {}; this.totals.costUsd += cost; }
      this.totals.failures += 1;
      job.status = 'failed';
      job.reason = reason;
      job.at = this.now();
      job.ctrl = null;
      this.trimFailed();
    }
    try {
      const ms = this.now() - t0;
      const nums = `girdi=${usage.input_tokens || 0} çıktı=${usage.output_tokens || 0} maliyet≈$${cost.toFixed(4)} süre=${Math.round(ms / 1000)}sn`;
      if (outcome === 'ok') this.logger.log(`[ai-analyze] oyun=${logId} model=${this.config.model} ${nums}`);
      else this.logger.warn(`[ai-analyze] oyun=${logId} atlandı: ${outcome} ${nums}`);
    } catch { /* log da yoksa sessiz */ }
  }

  trimFailed() {
    const failed = [...this.jobs.entries()].filter(([, j]) => j.status === 'failed');
    for (const [id] of failed.slice(0, Math.max(0, failed.length - MAX_FAILED_JOBS))) this.jobs.delete(id);
  }

  // Kapanırken: sürenleri iptal eder.
  abortAll() {
    for (const j of this.jobs.values()) if (j.ctrl) j.ctrl.abort();
  }

  settle() {
    return Promise.allSettled([...this.jobs.values()].map((j) => j.promise).filter(Boolean));
  }

  stats() {
    this.rollDay();
    return {
      enabled: this.available(), model: this.config.model, today: this.today, dailyLimit: this.config.dailyLimit,
      running: this.running(), ...this.totals, costUsd: Number(this.totals.costUsd.toFixed(4)),
    };
  }
}

// Sunucu için: anahtar yoksa ya da AI_ANALYZE=off ise de bir Analyzer döner (kapalı; uç nokta nedenini söyler).
function createAnalyzer(env = process.env, { logger = console, transport = null } = {}) {
  return new Analyzer({ config: analyzeConfig(env), logger, transport });
}

function analyzeStatusLine(analyzer) {
  if (analyzer && analyzer.available()) return `açık (model ${analyzer.config.model}, günlük ${analyzer.config.dailyLimit} çözümleme)`;
  const r = analyzer ? analyzer.offReason() : 'off';
  return r === 'no_key' ? 'kapalı (ANTHROPIC_API_KEY yok)' : 'kapalı (AI_ANALYZE=off ya da AI_BOTS=off)';
}

module.exports = {
  Analyzer, createAnalyzer, analyzeConfig, analyzeTranscript, analyzeStatusLine, ANALYSIS_SYSTEM, analysisParams, DEFAULTS, TRUNCATED_NOTE,
};
