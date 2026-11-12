'use strict';

// REST API: /api/auth/*, /api/me, /api/leaderboard. Cevaplar JSON; hatalarda
// { ok:false, error:"Türkçe mesaj", code:"..." } ve 4xx/5xx durum kodu.

const express = require('express');
const { AuthError } = require('./auth');
const { RateLimiter } = require('./rate-limit');

const DEFAULT_LIMITS = {
  register: { windowMs: 10 * 60 * 1000, max: 20 },   // IP başına 10 dakikada 20 kayıt denemesi
  login: { windowMs: 10 * 60 * 1000, max: 40 },      // IP başına 10 dakikada 40 giriş denemesi
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
function createApi(accounts, { origins = [], limits = {}, onLogout = () => {} } = {}) {
  const router = express.Router();
  const allowed = new Set(origins);
  const limiters = {
    register: new RateLimiter({ ...DEFAULT_LIMITS.register, ...(limits.register || {}) }),
    login: new RateLimiter({ ...DEFAULT_LIMITS.login, ...(limits.login || {}) }),
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
