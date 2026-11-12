'use strict';

// Hesaplar: kayıt, giriş, oturum anahtarları, profil. Depodan bağımsızdır (store-*.js).

const crypto = require('crypto');
const { COLOR_COUNT, HAT_COUNT, SKIN_COUNT } = require('../game');

const USERNAME_MIN = 3;
const USERNAME_MAX = 16;
const PASSWORD_MIN = 6;
const PASSWORD_MAX = 72;
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;   // 30 gün, her kullanımda uzar
const TOUCH_EVERY_MS = 60 * 60 * 1000;             // süre en fazla saatte bir uzatılır (gereksiz yazma olmasın)

// scrypt ayarları: N=2^14 → bir doğrulama ~30-60 ms, bellek ~16 MB. (Ücretsiz sunucularda bellek az;
// scrypt libuv iş parçacıklarında çalıştığı için aynı anda en fazla 4 tane çalışır.)
const SCRYPT = { N: 16384, r: 8, p: 1, keylen: 64, maxmem: 64 * 1024 * 1024 };

// Harfler (Türkçe dahil), rakamlar, _ - . ve kelimeler arasında tek boşluk.
const USERNAME_RE = /^[\p{L}\p{N}_.-]+(?: [\p{L}\p{N}_.-]+)*$/u;

class AuthError extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

const ERR = {
  username: () => new AuthError(400, 'invalid_username',
    `Kullanıcı adı ${USERNAME_MIN}-${USERNAME_MAX} karakter olmalı; harf, rakam, boşluk ve _ - . kullanılabilir.`),
  password: () => new AuthError(400, 'invalid_password', `Şifre ${PASSWORD_MIN}-${PASSWORD_MAX} karakter olmalı.`),
  taken: () => new AuthError(409, 'username_taken', 'Bu kullanıcı adı alınmış, başka bir ad dene.'),
  credentials: () => new AuthError(401, 'wrong_credentials', 'Kullanıcı adı ya da şifre yanlış.'),
  unauthorized: () => new AuthError(401, 'unauthorized', 'Oturumun geçersiz ya da süresi dolmuş, tekrar giriş yap.'),
  look: () => new AuthError(400, 'invalid_look', 'Geçersiz görünüm.'),
};

// Kullanıcı adını temizler: baştaki/sondaki boşluklar atılır, art arda boşluklar teke iner.
function cleanUsername(raw) {
  if (typeof raw !== 'string') return '';
  return raw.normalize('NFC').replace(/\s+/g, ' ').trim();
}

function validUsername(name) {
  const length = [...name].length;
  return length >= USERNAME_MIN && length <= USERNAME_MAX && USERNAME_RE.test(name);
}

// Benzersizlik anahtarı: Türkçe küçük harf; ayrıca "ı" ile "i" aynı sayılır ki
// "IREM", "İrem", "irem", "ırem" birbirini taklit edemesin.
function usernameKey(name) {
  return cleanUsername(name).toLocaleLowerCase('tr').replace(/ı/g, 'i');
}

function validPassword(pw) {
  if (typeof pw !== 'string') return false;
  const length = [...pw].length;
  return length >= PASSWORD_MIN && length <= PASSWORD_MAX;
}

function scrypt(password, salt, opts = SCRYPT) {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password.normalize('NFC'), salt, opts.keylen, { N: opts.N, r: opts.r, p: opts.p, maxmem: opts.maxmem },
      (err, key) => (err ? reject(err) : resolve(key)));
  });
}

// Biçim: scrypt$N$r$p$tuz$özet (base64)
async function hashPassword(password, opts = SCRYPT) {
  const salt = crypto.randomBytes(16);
  const key = await scrypt(password, salt, opts);
  return ['scrypt', opts.N, opts.r, opts.p, salt.toString('base64'), key.toString('base64')].join('$');
}

async function verifyPassword(password, stored) {
  const parts = String(stored || '').split('$');
  if (parts.length !== 6 || parts[0] !== 'scrypt') return false;
  const [, N, r, p, saltB64, hashB64] = parts;
  const expected = Buffer.from(hashB64, 'base64');
  const key = await scrypt(password, Buffer.from(saltB64, 'base64'), {
    N: Number(N), r: Number(r), p: Number(p), keylen: expected.length, maxmem: SCRYPT.maxmem,
  });
  return key.length === expected.length && crypto.timingSafeEqual(key, expected);
}

function hashToken(token) {
  return crypto.createHash('sha256').update(String(token)).digest('hex');
}

function randomLook() {
  return {
    color: crypto.randomInt(COLOR_COUNT),
    hat: crypto.randomInt(HAT_COUNT),
    skin: crypto.randomInt(SKIN_COUNT),
  };
}

// İstemciye giden kullanıcı: şifre özeti ve iç anahtar yok.
function publicUser(record) {
  if (!record) return null;
  return {
    id: record.id,
    username: record.username,
    createdAt: new Date(record.createdAt).toISOString(),
    look: { ...record.look },
    stats: record.stats,
  };
}

// Kısmi görünüm doğrulaması: verilen her alan aralıkta bir tam sayı olmalı.
function mergeLook(current, patch) {
  if (!patch || typeof patch !== 'object' || Array.isArray(patch)) throw ERR.look();
  const limits = { color: COLOR_COUNT, hat: HAT_COUNT, skin: SKIN_COUNT };
  const next = { ...current };
  let any = false;
  for (const [field, count] of Object.entries(limits)) {
    if (patch[field] === undefined) continue;
    const v = patch[field];
    if (!Number.isInteger(v) || v < 0 || v >= count) throw ERR.look();
    next[field] = v;
    any = true;
  }
  if (!any) throw ERR.look();
  return next;
}

class Accounts {
  constructor(store, { sessionTtlMs = SESSION_TTL_MS, now = Date.now, scryptOptions = SCRYPT } = {}) {
    this.store = store;
    this.ttl = sessionTtlMs;
    this.touchEvery = Math.min(TOUCH_EVERY_MS, Math.floor(sessionTtlMs / 4));
    this.now = now;
    this.scryptOptions = scryptOptions;
    this.dummyHash = null;
  }

  async register(rawUsername, password) {
    const username = cleanUsername(rawUsername);
    if (!validUsername(username)) throw ERR.username();
    if (!validPassword(password)) throw ERR.password();
    const key = usernameKey(username);
    if (await this.store.findUserByKey(key)) throw ERR.taken();
    const passHash = await hashPassword(password, this.scryptOptions);
    let record;
    try {
      record = await this.store.createUser({
        id: crypto.randomUUID(), username, key, passHash, createdAt: this.now(), look: randomLook(),
      });
    } catch (err) {
      if (err.code === 'taken') throw ERR.taken();
      throw err;
    }
    const token = await this.createSession(record.id);
    return { token, user: publicUser(record) };
  }

  async login(rawUsername, password) {
    const username = cleanUsername(rawUsername);
    if (!username || typeof password !== 'string' || !password) throw ERR.credentials();
    const record = await this.store.findUserByKey(usernameKey(username));
    if (!record) {
      // Kullanıcı yokken de aynı süre beklensin; adın var olup olmadığı süreden anlaşılmasın.
      if (!this.dummyHash) this.dummyHash = await hashPassword('vampir-koylu', this.scryptOptions);
      await verifyPassword(password.slice(0, 200), this.dummyHash);
      throw ERR.credentials();
    }
    if (!(await verifyPassword(password.slice(0, 200), record.passHash))) throw ERR.credentials();
    const token = await this.createSession(record.id);
    return { token, user: publicUser(record) };
  }

  async createSession(userId) {
    const token = crypto.randomBytes(32).toString('base64url');
    const now = this.now();
    await this.store.createSession(hashToken(token), userId, now + this.ttl);
    // Arada bir süresi dolmuş oturumları temizle.
    if (Math.random() < 0.05) this.store.deleteExpiredSessions(now).catch(() => {});
    return token;
  }

  // Geçerli anahtar -> { user (depo kaydı), tokenHash }; geçersizse null.
  async authenticate(token) {
    if (typeof token !== 'string' || token.length < 20 || token.length > 200) return null;
    const tokenHash = hashToken(token);
    const session = await this.store.getSession(tokenHash);
    const now = this.now();
    if (!session) return null;
    if (session.expiresAt <= now) {
      await this.store.deleteSession(tokenHash).catch(() => {});
      return null;
    }
    const user = await this.store.getUser(session.userId);
    if (!user) return null;
    if (now + this.ttl - session.expiresAt >= this.touchEvery) {
      await this.store.touchSession(tokenHash, now + this.ttl);
    }
    return { user, tokenHash };
  }

  async logout(tokenHash) {
    await this.store.deleteSession(tokenHash);
  }

  async me(userId) {
    return publicUser(await this.store.getUser(userId));
  }

  async updateLook(userId, patch) {
    const record = await this.store.getUser(userId);
    if (!record) throw ERR.unauthorized();
    const look = mergeLook(record.look, patch);
    return publicUser(await this.store.updateLook(userId, look));
  }

  // Oyun içinden gelen görünüm (zaten doğrulanmış).
  async saveLook(userId, look) {
    await this.store.updateLook(userId, { color: look.color, hat: look.hat, skin: look.skin });
  }

  async recordResults(results) {
    const rows = results.filter((r) => r.userId).map((r) => ({ userId: r.userId, team: r.team, won: Boolean(r.won) }));
    if (rows.length) await this.store.recordResults(rows);
  }

  async leaderboard(limit) {
    const rows = await this.store.leaderboard(limit);
    return rows.map((r) => ({ username: r.username, look: { ...r.look }, stats: r.stats }));
  }
}

module.exports = {
  Accounts, AuthError, ERR, publicUser, usernameKey, cleanUsername, validUsername, validPassword,
  hashPassword, verifyPassword, hashToken, mergeLook,
  USERNAME_MIN, USERNAME_MAX, PASSWORD_MIN, PASSWORD_MAX, SESSION_TTL_MS, SCRYPT,
};
