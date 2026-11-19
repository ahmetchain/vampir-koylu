'use strict';

// Claude API sarmalayıcısı: zaman aşımı, eşzamanlılık sınırı, günlük/oyun/bot bütçeleri ve kullanım
// muhasebesi. Hiçbir hata dışarı sızmaz: her çağrı { ok:true, data } ya da { ok:false, reason } döner.
// Gizlilik: istem ve yanıt içerikleri asla loglanmaz; yalnızca sayılar ve hata türleri.

const { costOf } = require('./config');
const { TURN_SCHEMA, parseTurn } = require('./schema');

const MIN_CALL_MS = 700;          // bundan az süre kaldıysa hiç çağırma
// Önbellek ısıtma: sistem istemi (~15K token) 5 dk önbellekte kalır ve her okuma süreyi yeniler. Bir model için son
// başarılı yanıttan bu kadar zaman geçtiyse önbellek soğuk sayılır (paylı: gereksiz ısıtma yalnızca ucuz bir okuma).
const WARM_AFTER_MS = 4 * 60 * 1000;
const WARM_USER = 'Önbellek ısıtma isteği: bu bir oyun turu değil.';
const AUTH_COOLDOWN_MS = 10 * 60 * 1000;
const RATE_COOLDOWN_MS = 20 * 1000;

function utcDay(ms) { return new Date(ms).toISOString().slice(0, 10); }

// Gerçek SDK ile istek gönderen taşıyıcı. SDK yalnızca anahtar varsa yüklenir.
function sdkTransport(apiKey) {
  const Anthropic = require('@anthropic-ai/sdk');
  const sdk = new Anthropic({ apiKey, maxRetries: 0 });
  const transport = (params, { timeout, signal }) => sdk.messages.create(params, { timeout, signal, maxRetries: 0 });
  transport.errors = Anthropic;
  return transport;
}

// Hata sınıflandırması (SDK'nın tipli hata sınıflarıyla; yoksa ada göre).
function classify(err, errors) {
  if (!err) return 'error';
  if (err.name === 'AbortError' || err.code === 'ETIMEDOUT' || err.aiTimeout) return 'timeout';
  if (errors) {
    if (errors.APIUserAbortError && err instanceof errors.APIUserAbortError) return 'timeout';
    if (errors.APIConnectionTimeoutError && err instanceof errors.APIConnectionTimeoutError) return 'timeout';
    if (errors.AuthenticationError && err instanceof errors.AuthenticationError) return 'auth';
    if (errors.PermissionDeniedError && err instanceof errors.PermissionDeniedError) return 'auth';
    if (errors.RateLimitError && err instanceof errors.RateLimitError) return 'rate_limit';
    if (errors.BadRequestError && err instanceof errors.BadRequestError) return 'bad_request';
    if (errors.APIConnectionError && err instanceof errors.APIConnectionError) return 'network';
    if (errors.APIError && err instanceof errors.APIError) return 'api_error';
  }
  if (err.status === 401 || err.status === 403) return 'auth';
  if (err.status === 429) return 'rate_limit';
  if (err.status === 400) return 'bad_request';
  return 'error';
}

// Oyun başına defter: çağrı sayıları ve kullanım (oyun sonunda özet loglanır).
class Ledger {
  constructor(limits) {
    this.limits = limits;
    this.calls = 0;
    this.ok = 0;
    this.perBot = new Map();
    this.usage = { input_tokens: 0, output_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
    this.cost = 0;
    this.models = new Set();   // bu oyunda gerçekten kullanılan model kimlikleri
    this.failures = {};
  }

  allows(botId) {
    if (this.calls >= this.limits.gameCalls) return false;
    return (this.perBot.get(botId) || 0) < this.limits.botCalls;
  }

  count(botId) {
    this.calls += 1;
    this.perBot.set(botId, (this.perBot.get(botId) || 0) + 1);
  }

  uncount(botId) {
    this.calls = Math.max(0, this.calls - 1);
    this.perBot.set(botId, Math.max(0, (this.perBot.get(botId) || 0) - 1));
  }

  summary() {
    return { calls: this.calls, ok: this.ok, ...this.usage, costUsd: Number(this.cost.toFixed(5)), models: [...this.models], failures: { ...this.failures } };
  }
}

class AiClient {
  // transport: (params, { timeout, signal }) => Promise<Message>. Testlerde sahte taşıyıcı verilir.
  constructor({ config, transport = null, now = Date.now, logger = console } = {}) {
    this.config = config;
    this.transport = transport || (config.apiKey && !config.disabled ? sdkTransport(config.apiKey) : null);
    this.errors = (this.transport && this.transport.errors) || null;
    this.now = now;
    this.logger = logger;
    this.active = 0;
    this.waiters = [];
    this.day = utcDay(now());
    this.dayCalls = 0;
    this.pausedUntil = 0;
    this.totals = {
      calls: 0, ok: 0, input_tokens: 0, output_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0,
      costUsd: 0, failures: {}, warm: 0,
    };
    this.lastHit = new Map();   // model -> son başarılı yanıtın zamanı (önbellek o anda yazıldı ya da tazelendi)
    this.warming = new Map();   // model -> süren ısıtma isteği
    this.warmOff = false;       // API ısıtma isteğini reddettiyse (400) bu süreçte bir daha denenmez
  }

  available() {
    return Boolean(this.transport) && !this.config.disabled;
  }

  ledger() {
    return new Ledger({ gameCalls: this.config.gameCalls, botCalls: this.config.botCalls });
  }

  rollDay() {
    const d = utcDay(this.now());
    if (d !== this.day) { this.day = d; this.dayCalls = 0; }
  }

  // Bugünkü bütçe kaldı mı (odanın "akıllı bot" seçeneğini göstermek için de kullanılır)?
  hasBudget() {
    this.rollDay();
    return this.available() && this.dayCalls < this.config.dailyCalls && this.now() >= this.pausedUntil;
  }

  fail(reason, ledger) {
    this.totals.failures[reason] = (this.totals.failures[reason] || 0) + 1;
    if (ledger) ledger.failures[reason] = (ledger.failures[reason] || 0) + 1;
    return { ok: false, reason };
  }

  // Eşzamanlılık: boş yer yoksa son tarihe kadar sırada bekler.
  acquire(deadline) {
    if (this.active < this.config.concurrency) {
      this.active += 1;
      return Promise.resolve(true);
    }
    return new Promise((resolve) => {
      const w = { resolve, timer: null };
      w.timer = setTimeout(() => {
        const i = this.waiters.indexOf(w);
        if (i >= 0) this.waiters.splice(i, 1);
        resolve(false);
      }, Math.max(0, deadline - this.now() - MIN_CALL_MS));
      this.waiters.push(w);
    });
  }

  release() {
    const w = this.waiters.shift();
    if (w) {
      clearTimeout(w.timer);
      w.resolve(true);   // yer devredilir; active değişmez
    } else {
      this.active = Math.max(0, this.active - 1);
    }
  }

  // Kademe: 'haiku' (varsayılan) ya da 'sonnet'; bilinmeyen ad varsayılana düşer.
  tier(name) {
    const t = this.config.tiers && this.config.tiers[name];
    return t || (this.config.tiers && this.config.tiers.haiku)
      || { model: this.config.model, effort: this.config.effort, prices: this.config.prices };
  }

  record(usage, ledger, tier = this.tier()) {
    const u = usage || {};
    const keys = ['input_tokens', 'output_tokens', 'cache_creation_input_tokens', 'cache_read_input_tokens'];
    const cost = costOf(u, tier.prices);
    for (const k of keys) {
      const v = Number(u[k]) || 0;
      this.totals[k] += v;
      if (ledger) ledger.usage[k] += v;
    }
    this.totals.costUsd += cost;
    if (ledger) ledger.cost += cost;
  }

  params(system, user, tier = this.tier()) {
    return {
      model: tier.model,
      max_tokens: this.config.maxTokens,
      // Sabit kurallar önbelleğe alınır (Haiku 5.5'te en az 512 token; doğruluk buna bağlı değil).
      system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: user }],
      output_config: { effort: tier.effort, format: { type: 'json_schema', schema: TURN_SCHEMA } },
    };
  }

  // Tek tur. deadline: mutlak ms; bundan sonra gelen yanıt işe yaramaz.
  async turn({ system, user, deadline, ledger = null, botId = '', tier: tierName = 'haiku' }) {
    const tier = this.tier(tierName);
    try {
      if (!this.available()) return this.fail('off', ledger);
      this.rollDay();
      if (this.now() < this.pausedUntil) return this.fail('paused', ledger);
      if (this.dayCalls >= this.config.dailyCalls) return this.fail('daily_budget', ledger);
      if (ledger && !ledger.allows(botId)) return this.fail('game_budget', ledger);
      const end = Math.min(deadline || Infinity, this.now() + this.config.timeoutMs);
      if (end - this.now() < MIN_CALL_MS) return this.fail('late', ledger);

      // Bütçe hemen ayrılır (aynı anda başlayan turlar sınırı aşmasın); istek gitmezse geri verilir.
      this.dayCalls += 1;
      if (ledger) ledger.count(botId);
      const refund = (reason) => {
        this.dayCalls -= 1;
        if (ledger) ledger.uncount(botId);
        return this.fail(reason, ledger);
      };
      const got = await this.acquire(end);
      if (!got) return refund('busy');
      try {
        const left = end - this.now();
        if (left < MIN_CALL_MS) return refund('late');
        this.totals.calls += 1;
        if (ledger) ledger.models.add(tier.model);
        let res;
        try {
          res = await this.send(this.params(system, user, tier), left);
        } catch (err) {
          // Anlık bağlantı hatası (TLS/ağ kesintisi): süre yetiyorsa bir kez daha dene.
          const again = end - this.now();
          if (classify(err, this.errors) !== 'network' || again < MIN_CALL_MS + 500) throw err;
          res = await this.send(this.params(system, user, tier), again);
        }
        this.lastHit.set(tier.model, this.now());
        this.record(res && res.usage, ledger, tier);
        return this.read(res, ledger);
      } finally {
        this.release();
      }
    } catch (err) {
      const reason = classify(err, this.errors);
      if (reason === 'auth') {
        this.pausedUntil = this.now() + AUTH_COOLDOWN_MS;
        this.logger.warn('[ai] API anahtarı reddedildi; akıllı botlar 10 dk duraklatıldı.');
      } else if (reason === 'rate_limit') {
        this.pausedUntil = this.now() + RATE_COOLDOWN_MS;
      } else if (!['timeout', 'network'].includes(reason)) {
        // Yalnızca hata türü ve durum kodu; istem/yanıt içeriği asla.
        this.logger.warn(`[ai] istek başarısız: ${reason}${err && err.status ? ` (${err.status})` : ''}`);
      }
      return this.fail(reason, ledger);
    }
  }

  // Önbellek ısıtma (oyun başında, rol kartları gösterilirken çağrılır). Önbellek girdisi ancak ilk yanıt başladıktan
  // sonra okunabilir: soğuk önbellekte ilk gecenin aynı anda çıkan 3-4 çağrısının HER BİRİ sistem istemini yeniden
  // yazar (Haiku'da çağrı başına ~$0,0017, Sonnet'te ~$0,036 fazladan). Isıtma, gerçek turlarla bayt-bayt aynı önekle
  // (model, sistem bloğu, output_config) tek bir küçük istek gönderir; max_tokens 1 (0, yapılandırılmış çıktıyla
  // kabul edilmiyor). Önbellek sıcaksa (son WARM_AFTER_MS içinde yanıt alındıysa), boş eşzamanlılık yeri yoksa,
  // bütçe/duraklama varsa hiçbir şey yapmaz. Asla atmaz; oyun ve botlar bunu beklemez.
  // Gider oyunun defterine (ledger) maliyet olarak yazılır ama oyun/bot çağrı bütçesinden düşmez.
  warm({ system, tier: tierName = 'haiku', ledger = null }) {
    const tier = this.tier(tierName);
    if (this.warmOff || !this.available()) return Promise.resolve(false);
    if (this.warming.has(tier.model)) return this.warming.get(tier.model);
    const last = this.lastHit.get(tier.model);
    if (last !== undefined && this.now() - last < WARM_AFTER_MS) return Promise.resolve(false);
    this.rollDay();
    if (this.now() < this.pausedUntil || this.dayCalls >= this.config.dailyCalls) return Promise.resolve(false);
    if (this.active >= this.config.concurrency) return Promise.resolve(false);   // istekler zaten sürüyor
    this.active += 1;
    this.dayCalls += 1;
    const p = (async () => {
      try {
        const res = await this.send({ ...this.params(system, WARM_USER, tier), max_tokens: 1 }, this.config.timeoutMs);
        this.lastHit.set(tier.model, this.now());
        this.totals.warm += 1;
        this.record(res && res.usage, ledger, tier);
        return true;
      } catch (err) {
        const reason = classify(err, this.errors);
        if (reason === 'bad_request') {
          this.warmOff = true;
          this.logger.warn('[ai] önbellek ısıtma isteği reddedildi (400); bu süreçte kapatıldı.');
        }
        return false;
      } finally {
        this.release();
        this.warming.delete(tier.model);
      }
    })();
    this.warming.set(tier.model, p);
    return p;
  }

  // İsteği gönderir; SDK zaman aşımına ek olarak kendi zamanlayıcımızla iptal eder.
  send(params, timeoutMs) {
    const ctrl = new AbortController();
    let timer = null;
    const guard = new Promise((_, reject) => {
      timer = setTimeout(() => {
        ctrl.abort();
        const e = new Error('ai timeout');
        e.aiTimeout = true;
        reject(e);
      }, timeoutMs);
    });
    const call = Promise.resolve().then(() => this.transport(params, { timeout: timeoutMs, signal: ctrl.signal }));
    call.catch(() => {});   // yarışı kaybeden sözün reddi işlenmemiş kalmasın
    return Promise.race([call, guard]).finally(() => clearTimeout(timer));
  }

  // stop_reason önce denetlenir; sonra metin blokları (düşünme blokları atlanır) JSON olarak okunur.
  read(res, ledger) {
    if (!res || !Array.isArray(res.content)) return this.fail('malformed', ledger);
    if (res.stop_reason === 'refusal') return this.fail('refusal', ledger);
    if (res.stop_reason === 'max_tokens') return this.fail('max_tokens', ledger);
    const text = res.content.filter((b) => b && b.type === 'text').map((b) => b.text).join('');
    const data = parseTurn(text);
    if (!data) return this.fail('malformed', ledger);
    this.totals.ok += 1;
    if (ledger) ledger.ok += 1;
    return { ok: true, data, usage: res.usage || null };
  }

  // /healthz için yalnızca toplu sayılar.
  stats() {
    this.rollDay();
    return {
      enabled: this.available(),
      model: this.config.model,
      day: this.day,
      callsToday: this.dayCalls,
      dailyLimit: this.config.dailyCalls,
      calls: this.totals.calls,
      ok: this.totals.ok,
      inputTokens: this.totals.input_tokens,
      outputTokens: this.totals.output_tokens,
      cacheWriteTokens: this.totals.cache_creation_input_tokens,
      cacheReadTokens: this.totals.cache_read_input_tokens,
      warmCalls: this.totals.warm,
      costUsd: Number(this.totals.costUsd.toFixed(4)),
      failures: { ...this.totals.failures },
    };
  }
}

module.exports = { AiClient, Ledger, classify, sdkTransport };
