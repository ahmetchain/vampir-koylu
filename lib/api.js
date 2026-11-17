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

// adminToken (ADMIN_TOKEN) tanımsızsa /admin/* adresleri hiç yokmuş gibi 404 döner. store: saveAiReview/listAiReviews/getAiReview.
function createApi(accounts, { origins = [], limits = {}, onLogout = () => {}, adminToken = '', store = null } = {}) {
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

  // ---------- yönetici: oyun sonu bot incelemeleri (ADMIN_TOKEN) ----------

  const requireAdmin = (req, res, next) => {
    if (!adminToken || !store || typeof store.listAiReviews !== 'function') return fail(res, 404, 'not_found', 'Böyle bir adres yok.');
    const r = limiters.admin.hit(req.ip || 'unknown');
    if (!r.ok) {
      res.set('Retry-After', String(r.retryAfter));
      return fail(res, 429, 'rate_limited', 'Çok fazla deneme yaptın, biraz bekleyip tekrar dene.');
    }
    const token = bearer(req);
    if (!token || !safeEqual(token, adminToken)) return fail(res, 401, 'unauthorized', 'Yetkisiz.');
    return next();
  };

  router.get('/admin/ai-reviews', requireAdmin, route(async (req, res) => {
    const n = Number.parseInt(req.query.limit, 10);
    const since = Number.parseInt(req.query.since, 10);
    const rows = await store.listAiReviews({ limit: Number.isNaN(n) ? 50 : n, since: Number.isNaN(since) ? 0 : since });
    res.json({
      ok: true,
      reviews: rows.map((r) => ({
        id: r.id, createdAt: r.createdAt, date: new Date(r.createdAt).toISOString(), room: r.room, model: r.model, cost: r.cost,
        summary: r.summary, mistakes: r.mistakes, high: r.high, medium: r.medium, low: r.low,
      })),
    });
  }));

  router.get('/admin/ai-reviews/:id', requireAdmin, route(async (req, res) => {
    const row = await store.getAiReview(String(req.params.id).slice(0, 64));
    if (!row) return fail(res, 404, 'not_found', 'İnceleme bulunamadı.');
    const { unpackRecord } = require('./ai/review');
    res.json({
      ok: true,
      review: {
        id: row.id, createdAt: row.createdAt, date: new Date(row.createdAt).toISOString(), room: row.room, model: row.model, cost: row.cost,
        mistakes: row.mistakes, high: row.high, medium: row.medium, low: row.low,
        review: row.review, record: unpackRecord(row.record),
      },
    });
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
