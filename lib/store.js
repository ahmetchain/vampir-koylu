'use strict';

// Depo seçimi: DATABASE_URL varsa PostgreSQL, yoksa DATA_DIR altındaki JSON dosyası.
//
// Her depo şu arayüzü sunar (hepsi söz/promise döner):
//   init(), close()
//   createUser({ id, username, key, passHash, createdAt, look }) -> kayıt   (ad alınmışsa err.code = 'taken')
//   getUser(id), findUserByKey(key) -> kayıt | null
//   updateLook(id, look) -> kayıt | null
//   recordResults([{ userId, team, won }])
//   leaderboard(limit) -> kayıt[]
//   createSession(tokenHash, userId, expiresAt), getSession(tokenHash) -> { userId, expiresAt } | null
//   touchSession(tokenHash, expiresAt), deleteSession(tokenHash), deleteExpiredSessions(now)
// kayıt = { id, username, key, passHash, createdAt (ms), look:{color,hat,skin}, stats }

const path = require('path');
const { JsonStore } = require('./store-json');
const { PgStore } = require('./store-pg');

function createStore(env = process.env) {
  if (env.DATABASE_URL) return new PgStore({ connectionString: env.DATABASE_URL });
  const dir = env.DATA_DIR ? path.resolve(env.DATA_DIR) : path.join(__dirname, '..', 'data');
  return new JsonStore({ dir });
}

module.exports = { createStore, JsonStore, PgStore };
