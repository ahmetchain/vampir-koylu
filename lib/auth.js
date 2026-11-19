'use strict';

// Hesaplar: kayıt, giriş, oturum anahtarları, profil. Depodan bağımsızdır (store-*.js).

const crypto = require('crypto');
const { isOwnerName } = require('./banter');
const { COLOR_COUNT, HAT_COUNT, SKIN_COUNT, ACC_COUNT, TOP_COUNT, BOTTOM_COUNT, GEAR_COUNT, HOUSE_COUNT, HOUSE_MAT_COUNT } = require('../game');
const { HOUSES, ITEM_FIELDS, pointsOf, canUseHouse, canUseHouseMat, houseMatLockMessage, canUseItem, lockMessage, sanitizeLook } = require('./houses');
const { HAT_ITEMS, ACC_ITEMS, resolveLook, skinBlock } = require('./cosmetics');

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
  locked: (msg) => new AuthError(403, 'look_locked', msg),
  conflict: (msg) => new AuthError(409, 'look_conflict', msg),
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

// Yeni hesap: rastgele renk/model ve puan istemeyen bir şapka.
function randomLook() {
  const hats = HAT_ITEMS.map((h, i) => i).filter((i) => !HAT_ITEMS[i].min && !HAT_ITEMS[i].owner);
  return {
    color: crypto.randomInt(COLOR_COUNT),
    hat: hats[crypto.randomInt(hats.length)],
    skin: crypto.randomInt(SKIN_COUNT),
  };
}

// İstemciye giden kullanıcı: şifre özeti ve iç anahtar yok.
// Kaldırılmış bir aksesuar (ör. eski nazarlık=6) profilden görünmez.
// Hak edilmeyen ev/öğe (ör. eski 6 = nazarlık kayıtları, artık sahibe özel kral tacı) da düşürülür; eski kayıtlardaki
// yuva çakışmaları (ör. şapka + kral tacı) giderilir.
function cleanLook(look, record) {
  return sanitizeLook(look, { username: record.username, points: pointsOf(record.stats) });
}

function publicUser(record) {
  if (!record) return null;
  return {
    id: record.id,
    username: record.username,
    createdAt: new Date(record.createdAt).toISOString(),
    look: cleanLook(record.look, record),
    stats: record.stats,
    // Yalnızca sahip hesapta (lib/banter.js) ve true olarak bulunur: oda formunda "Bot zekâsı" seçeneği görünür.
    ...(isOwnerName(record.username) ? { canChooseBotModel: true, ownerLooks: true, admin: true } : {}),

  };
}

// Kısmi görünüm doğrulaması: verilen her alan aralıkta bir tam sayı olmalı.
// who: { username, points } — seçilen ev/aksesuar bu hesaba açık mı (verilmezse yalnızca herkese açık olanlar).
// Yuva çakışması: değişen alan(lar) önce yerleşir, aynı yuvadaki eski öğe çıkar (ör. kral tacı seçilince şapka 0 olur).
// Değişen öğe karakterin kendi parçasıyla çakışıyorsa (ör. sakallı karaktere sakal) 409 look_conflict.
function mergeLook(current, patch, who = {}) {
  if (!patch || typeof patch !== 'object' || Array.isArray(patch)) throw ERR.look();
  const limits = { color: COLOR_COUNT, hat: HAT_COUNT, skin: SKIN_COUNT, acc: ACC_COUNT, top: TOP_COUNT, bottom: BOTTOM_COUNT, gear: GEAR_COUNT, house: HOUSE_COUNT, houseMat: HOUSE_MAT_COUNT };
  const next = { ...current };
  const changed = [];
  let any = false;
  for (const [field, count] of Object.entries(limits)) {
    if (patch[field] === undefined) continue;
    const v = patch[field];
    if (!Number.isInteger(v) || v < 0 || v >= count) throw ERR.look();
    const was = current[field] | 0;
    if (field === 'house' && v !== was && !canUseHouse(v, who)) {
      throw ERR.locked(HOUSES[v].owner ? 'Bu ev yalnızca sahibine özel.' : 'Bu ev görünümü henüz kilitli.');
    }
    if (field === 'houseMat' && v !== was && !canUseHouseMat(v, who)) throw ERR.locked(houseMatLockMessage(v));
    if (ITEM_FIELDS.includes(field) && v !== was && !canUseItem(field, v, who)) {
      throw ERR.locked(field === 'acc' && ACC_ITEMS[v].owner ? 'Bu aksesuar yalnızca sahibine özel.' : lockMessage(field, v));
    }
    if (ITEM_FIELDS.includes(field) && v !== was) changed.push(field);
    next[field] = v;
    any = true;
  }
  if (!any) throw ERR.look();
  for (const f of changed) {
    const b = skinBlock(next.skin, f, next[f]);
    if (b) throw ERR.conflict(`Bu karakterin zaten ${b.what} var.`);
  }
  if (!canUseHouse(next.house | 0, who)) delete next.house;          // hak edilmeyen eski değer (ör. 6 = artık kral tacı) kalmaz
  if (!next.house || next.house >= HOUSE_COUNT) delete next.house;   // ev görünümü isteğe bağlı: 0 = varsayılan, alan tutulmaz
  if (!next.houseMat || !canUseHouseMat(next.houseMat, who)) delete next.houseMat;   // ev malzemesi: 0 = evin kendi malzemesi
  for (const f of ITEM_FIELDS) {
    if (next[f] === undefined) continue;
    const bad = !Number.isInteger(next[f]) || next[f] >= limits[f] || !canUseItem(f, next[f], who);
    if (f === 'hat') { if (bad) next.hat = 0; } else if (bad || !next[f]) delete next[f];   // isteğe bağlı: 0 ya da kaldırılmış öğe tutulmaz
  }
  return resolveLook(next, changed).look;
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
    const look = mergeLook(record.look, patch, { username: record.username, points: pointsOf(record.stats) });
    return publicUser(await this.store.updateLook(userId, look));
  }

  // Oyun içinden gelen görünüm (zaten doğrulanmış).
  async saveLook(userId, look) {
    const next = { color: look.color, hat: look.hat, skin: look.skin };
    if (Number.isInteger(look.acc) && look.acc > 0 && look.acc < ACC_COUNT) next.acc = look.acc;
    if (Number.isInteger(look.top) && look.top > 0 && look.top < TOP_COUNT) next.top = look.top;
    if (Number.isInteger(look.bottom) && look.bottom > 0 && look.bottom < BOTTOM_COUNT) next.bottom = look.bottom;
    if (Number.isInteger(look.gear) && look.gear > 0 && look.gear < GEAR_COUNT) next.gear = look.gear;
    if (Number.isInteger(look.house) && look.house > 0 && look.house < HOUSE_COUNT) next.house = look.house;
    if (Number.isInteger(look.houseMat) && look.houseMat > 0 && look.houseMat < HOUSE_MAT_COUNT) next.houseMat = look.houseMat;
    await this.store.updateLook(userId, next);
  }

  async recordResults(results) {
    const rows = results.filter((r) => r.userId).map((r) => ({ userId: r.userId, team: r.team, won: Boolean(r.won) }));
    if (rows.length) await this.store.recordResults(rows);
  }

  async leaderboard(limit) {
    const rows = await this.store.leaderboard(limit);
    return rows.map((r) => ({ username: r.username, look: cleanLook(r.look, r), stats: r.stats, ...(isOwnerName(r.username) ? { admin: true } : {}) }));
  }
}

module.exports = {
  Accounts, AuthError, ERR, publicUser, usernameKey, cleanUsername, validUsername, validPassword,
  hashPassword, verifyPassword, hashToken, mergeLook,
  USERNAME_MIN, USERNAME_MAX, PASSWORD_MIN, PASSWORD_MAX, SESSION_TTL_MS, SCRYPT,
};
