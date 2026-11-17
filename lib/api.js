'use strict';

// REST API: /api/auth/*, /api/me, /api/leaderboard. Cevaplar JSON; hatalarda
// { ok:false, error:"Türkçe mesaj", code:"..." } ve 4xx/5xx durum kodu.

const crypto = require('crypto');
const express = require('express');
const { AuthError } = require('./auth');
const { RateLimiter } = require('./rate-limit');

const DEFAULT_LIMITS = {
  register: { windowMs: 10 * 60 * 1000, max: 20 },   // IP başına 10 dakikada 20 kayıt denemesi
  login: { windowMs: 10 * 60 * 1000, max: 40 },      // IP başına 10 dakikada 40 giriş denemesi
  admin: { windowMs: 10 * 60 * 1000, max: 60 },      // IP başına 10 dakikada 60 yönetici isteği (doğru ya da yanlış anahtar)
};

function fail(res, status, code, error) {
  res.status(status).json({ ok: false, error, code });
}

function bearer(req) {
  const header = String(req.headers.authorization || '');
  const m = /^Bearer\s+(\S+)$/i.exec(header);
  return m ? m[1] : null;
}

// accounts: Accounts örneği. options.origins: CORS izinli adresler. options.onLogout(tokenHash):
// çıkış yapan oturumun soketlerini kapatmak için.
// Sabit zamanlı karşılaştırma (uzunluk bilgisi de sızmasın diye özetler karşılaştırılır).
function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

// adminToken (ADMIN_TOKEN) tanımsızsa /admin/* adresleri hiç yokmuş gibi 404 döner. store: saveAiReview/listAiReviews/getAiReview
// ve oyun geçmişi için saveGameLog/listGameLogs/getGameLog/saveGameLogAnalysis. analyzer: lib/ai/analyze.js Analyzer (sunucuda çözümleme).
function createApi(accounts, { origins = [], limits = {}, onLogout = () => {}, adminToken = '', store = null, analyzer = null } = {}) {
  const router = express.Router();
  const allowed = new Set(origins);
  const limiters = {
    register: new RateLimiter({ ...DEFAULT_LIMITS.register, ...(limits.register || {}) }),
    login: new RateLimiter({ ...DEFAULT_LIMITS.login, ...(limits.login || {}) }),
    admin: new RateLimiter({ ...DEFAULT_LIMITS.admin, ...(limits.admin || {}) }),
  };

  // CORS: arayüz başka bir adreste yayınlanıyorsa (CLIENT_ORIGIN) o adreslerden gelen isteklere izin ver.
  router.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin && allowed.has(origin.replace(/\/$/, ''))) {
      res.set('Access-Control-Allow-Origin', origin);
      res.set('Access-Control-Allow-Headers', 'Authorization, Content-Type');
      res.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
      res.set('Access-Control-Max-Age', '600');
    }
    res.vary('Origin');
    res.set('Cache-Control', 'no-store');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
  });

  router.use(express.json({ limit: '8kb' }));

  const limited = (name) => (req, res, next) => {
    const r = limiters[name].hit(req.ip || 'unknown');
    if (r.ok) return next();
    res.set('Retry-After', String(r.retryAfter));
    fail(res, 429, 'rate_limited', 'Çok fazla deneme yaptın, biraz bekleyip tekrar dene.');
  };

  const route = (fn) => (req, res, next) => {
    Promise.resolve().then(() => fn(req, res)).catch(next);
  };

  // Bearer anahtarını doğrular; geçerliyse req.auth = { user, tokenHash }.
  const requireAuth = (req, res, next) => {
    const token = bearer(req);
    Promise.resolve(token ? accounts.authenticate(token) : null).then((auth) => {
      if (!auth) return next(new AuthError(401, 'unauthorized', 'Oturumun geçersiz ya da süresi dolmuş, tekrar giriş yap.'));
      req.auth = auth;
      return next();
    }).catch(next);
  };

  const body = (req) => (req.body && typeof req.body === 'object' && !Array.isArray(req.body) ? req.body : {});

  router.post('/auth/register', limited('register'), route(async (req, res) => {
    const { username, password } = body(req);
    const result = await accounts.register(username, password);
    res.status(201).json({ ok: true, ...result });
  }));

  router.post('/auth/login', limited('login'), route(async (req, res) => {
    const { username, password } = body(req);
    const result = await accounts.login(username, password);
    res.json({ ok: true, ...result });
  }));

  router.post('/auth/logout', requireAuth, route(async (req, res) => {
    await accounts.logout(req.auth.tokenHash);
    try { onLogout(req.auth.tokenHash); } catch (err) { console.error('Çıkış sonrası hata:', err); }
    res.json({ ok: true });
  }));

  router.get('/me', requireAuth, route(async (req, res) => {
    res.json({ ok: true, user: await accounts.me(req.auth.user.id) });
  }));

  router.patch('/me', requireAuth, route(async (req, res) => {
    const user = await accounts.updateLook(req.auth.user.id, body(req).look);
    res.json({ ok: true, user });
  }));

  router.get('/leaderboard', route(async (req, res) => {
    const n = Number.parseInt(req.query.limit, 10);
    const limit = Number.isNaN(n) ? 20 : Math.min(100, Math.max(1, n));
    res.json({ ok: true, players: await accounts.leaderboard(limit) });
  }));

  // ---------- yönetici: oyun sonu bot incelemeleri ve oyun geçmişleri (ADMIN_TOKEN) ----------

  const requireAdmin = (need) => (req, res, next) => {
    if (!adminToken || !store || typeof store[need] !== 'function') return fail(res, 404, 'not_found', 'Böyle bir adres yok.');
    const r = limiters.admin.hit(req.ip || 'unknown');
    if (!r.ok) {
      res.set('Retry-After', String(r.retryAfter));
      return fail(res, 429, 'rate_limited', 'Çok fazla deneme yaptın, biraz bekleyip tekrar dene.');
    }
    const token = bearer(req);
    if (!token || !safeEqual(token, adminToken)) return fail(res, 401, 'unauthorized', 'Yetkisiz.');
    return next();
  };

  router.get('/admin/ai-reviews', requireAdmin('listAiReviews'), route(async (req, res) => {
    const n = Number.parseInt(req.query.limit, 10);
    const since = Number.parseInt(req.query.since, 10);
    const rows = await store.listAiReviews({ limit: Number.isNaN(n) ? 50 : n, since: Number.isNaN(since) ? 0 : since });
    res.json({
      ok: true,
      reviews: rows.map((r) => ({
        id: r.id, createdAt: r.createdAt, date: new Date(r.createdAt).toISOString(), room: r.room, model: r.model, cost: r.cost,
        summary: r.summary, mistakes: r.mistakes, high: r.high, medium: r.medium, low: r.low, logId: r.logId || null,
      })),
    });
  }));

  router.get('/admin/ai-reviews/:id', requireAdmin('listAiReviews'), route(async (req, res) => {
    const row = await store.getAiReview(String(req.params.id).slice(0, 64));
    if (!row) return fail(res, 404, 'not_found', 'İnceleme bulunamadı.');
    const { unpackRecord } = require('./ai/review');
    res.json({
      ok: true,
      review: {
        id: row.id, createdAt: row.createdAt, date: new Date(row.createdAt).toISOString(), room: row.room, model: row.model, cost: row.cost,
        mistakes: row.mistakes, high: row.high, medium: row.medium, low: row.low, logId: row.logId || null,
        review: row.review, record: unpackRecord(row.record),
      },
    });
  }));

  // Her oyunun tam geçmişi (docs/GAME-LOGS.md): liste özet verir, tek kayıt açılmış (sıkıştırması çözülmüş) JSON döner.
  const logMeta = (r) => ({
    id: r.id, createdAt: r.createdAt, date: new Date(r.createdAt).toISOString(), room: r.room,
    startedAt: new Date(r.startedAt).toISOString(), endedAt: new Date(r.endedAt).toISOString(), end: r.end, winner: r.winner || null,
    players: r.players, humans: r.humans, bots: r.bots, smartBots: r.smart, days: r.rounds, size: r.size,
    hasReview: Boolean(r.reviewId), reviewId: r.reviewId || null,
    analyzed: Boolean(r.analyzedAt), analyzedAt: r.analyzedAt ? new Date(r.analyzedAt).toISOString() : null,
    analysisCost: r.analysisCost == null ? null : r.analysisCost,
  });

  // Çözümleme durumu: kayıtlı sonuç (done) > bellekteki iş (running / failed) > none.
  const analysisView = (row, { withText = true } = {}) => {
    if (row.analysis) {
      return {
        status: 'done', ...(withText ? { text: row.analysis } : {}), cost: row.analysisCost == null ? null : row.analysisCost,
        model: row.analysisModel || null, analyzedAt: row.analyzedAt ? new Date(row.analyzedAt).toISOString() : null,
      };
    }
    const job = analyzer ? analyzer.job(row.id) : null;
    if (!job) return { status: 'none' };
    return job.status === 'running'
      ? { status: 'running', startedAt: new Date(job.startedAt).toISOString() }
      : { status: 'failed', reason: job.reason, at: new Date(job.at).toISOString() };
  };

  router.get('/admin/game-logs', requireAdmin('listGameLogs'), route(async (req, res) => {
    const n = Number.parseInt(req.query.limit, 10);
    const since = Number.parseInt(req.query.since, 10);
    const rows = await store.listGameLogs({ limit: Number.isNaN(n) ? 50 : n, since: Number.isNaN(since) ? 0 : since });
    res.json({ ok: true, logs: rows.map(logMeta) });
  }));

  router.get('/admin/game-logs/:id', requireAdmin('getGameLog'), route(async (req, res) => {
    const row = await store.getGameLog(String(req.params.id).slice(0, 64));
    if (!row) return fail(res, 404, 'not_found', 'Oyun geçmişi bulunamadı.');
    const { unpack } = require('./ai/gamerec');
    const record = unpack(row.record);
    if (!record) return fail(res, 500, 'server_error', 'Oyun geçmişi okunamadı.');
    const analysis = analysisView(row);
    res.json({ ok: true, log: { ...logMeta(row), record, analysis: analysis.status === 'none' ? null : analysis } });
  }));

  // Sunucuda çözümleme (docs/GAME-LOGS.md): iş arka planda çalışır (Render'ın istek süresi sınırına takılmasın), 202 döner;
  // ilerleme GET .../analysis ile sorulur. Gövde ya da ?force=1: { force: true } kayıtlı çözümlemeyi yeniden üretir.
  const analyzeOff = (res, reason) => fail(res, 503, 'analyze_disabled', reason === 'no_key'
    ? 'Sunucuda ANTHROPIC_API_KEY yok; çözümleme kapalı.'
    : (reason === 'none' ? 'Bu sunucuda çözümleme yapılandırılmamış.' : 'Çözümleme kapalı (AI_ANALYZE=off ya da AI_BOTS=off).'));

  router.post('/admin/game-logs/:id/analyze', requireAdmin('saveGameLogAnalysis'), route(async (req, res) => {
    if (!analyzer) return analyzeOff(res, 'none');
    const row = await store.getGameLog(String(req.params.id).slice(0, 64));
    if (!row) return fail(res, 404, 'not_found', 'Oyun geçmişi bulunamadı.');
    const force = body(req).force === true || req.query.force === '1' || req.query.force === 'true';
    if (row.analysis && !force) return res.json({ ok: true, status: 'done', cached: true, analysis: analysisView(row, { withText: false }) });
    const { unpack } = require('./ai/gamerec');
    const record = unpack(row.record);
    if (!record) return fail(res, 500, 'server_error', 'Oyun geçmişi okunamadı.');
    const r = analyzer.start(row.id, record, store);
    if (r.state === 'off') return analyzeOff(res, r.reason);
    if (r.state === 'daily_limit') {
      return fail(res, 429, 'daily_limit', `Günlük çözümleme sınırına ulaşıldı (${analyzer.config.dailyLimit}); yarın (UTC) tekrar dene ya da AI_ANALYZE_DAILY_LIMIT'i artır.`);
    }
    res.status(202).json({ ok: true, status: 'running', alreadyRunning: r.state === 'running' });
  }));

  router.get('/admin/game-logs/:id/analysis', requireAdmin('getGameLog'), route(async (req, res) => {
    const id = String(req.params.id).slice(0, 64);
    const job = analyzer ? analyzer.job(id) : null;
    if (job && job.status === 'running') return res.json({ ok: true, analysis: { status: 'running', startedAt: new Date(job.startedAt).toISOString() } });
    const row = await store.getGameLog(id);
    if (!row) return fail(res, 404, 'not_found', 'Oyun geçmişi bulunamadı.');
    res.json({ ok: true, analysis: analysisView(row) });
  }));

  router.use((req, res) => fail(res, 404, 'not_found', 'Böyle bir adres yok.'));

  // eslint-disable-next-line no-unused-vars
  router.use((err, req, res, next) => {
    if (err instanceof AuthError) return fail(res, err.status, err.code, err.message);
    if (err && err.type === 'entity.parse.failed') return fail(res, 400, 'bad_request', 'Geçersiz istek (JSON okunamadı).');
    if (err && err.type === 'entity.too.large') return fail(res, 413, 'bad_request', 'İstek çok büyük.');
    console.error(`[api ${req.method} ${req.path}]`, err);
    fail(res, 500, 'server_error', 'Sunucuda bir hata oluştu, biraz sonra tekrar dene.');
  });

  return router;
}

module.exports = { createApi, DEFAULT_LIMITS };
