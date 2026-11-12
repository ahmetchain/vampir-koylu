'use strict';

// Hesapları PostgreSQL'de tutan depo. DATABASE_URL tanımlıysa kullanılır; tablolar açılışta
// yoksa oluşturulur. JSON deposuyla aynı arayüzü sunar.

const { emptyStats, TEAMS } = require('./stats');

const USERS = 'vk_users';
const SESSIONS = 'vk_sessions';

const SCHEMA = {
  [USERS]: [
    `CREATE TABLE ${USERS} (
      id TEXT PRIMARY KEY,
      username TEXT NOT NULL,
      username_key TEXT NOT NULL UNIQUE,
      pass_hash TEXT NOT NULL,
      created_at BIGINT NOT NULL,
      look_color INTEGER NOT NULL DEFAULT 0,
      look_hat INTEGER NOT NULL DEFAULT 0,
      look_skin INTEGER NOT NULL DEFAULT 0,
      games INTEGER NOT NULL DEFAULT 0,
      wins INTEGER NOT NULL DEFAULT 0,
      koylu_games INTEGER NOT NULL DEFAULT 0,
      koylu_wins INTEGER NOT NULL DEFAULT 0,
      vampir_games INTEGER NOT NULL DEFAULT 0,
      vampir_wins INTEGER NOT NULL DEFAULT 0,
      soytari_games INTEGER NOT NULL DEFAULT 0,
      soytari_wins INTEGER NOT NULL DEFAULT 0
    )`,
  ],
  [SESSIONS]: [
    `CREATE TABLE ${SESSIONS} (
      token_hash TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES ${USERS}(id) ON DELETE CASCADE,
      expires_at BIGINT NOT NULL
    )`,
    `CREATE INDEX ${SESSIONS}_user_idx ON ${SESSIONS} (user_id)`,
  ],
};

// Bağlantı adresine bakarak SSL gerekip gerekmediğine karar verir. Neon, Render (dış adres),
// Supabase gibi bulut veritabanları SSL ister; yerel ve Render iç adresleri istemez.
// DATABASE_SSL ortam değişkeniyle zorlanabilir: off | on (sertifika doğrulanır) | no-verify.
function sslConfig(connectionString, mode = process.env.DATABASE_SSL) {
  let url;
  try {
    url = new URL(connectionString);
  } catch {
    return { connectionString, ssl: false };
  }
  const sslmode = (url.searchParams.get('sslmode') || '').toLowerCase();
  const sslParam = (url.searchParams.get('ssl') || '').toLowerCase();
  // SSL ayarını biz veriyoruz; adresteki parametreler pg tarafından üzerine yazılmasın.
  for (const key of ['sslmode', 'ssl', 'sslrootcert', 'sslcert', 'sslkey', 'uselibpqcompat']) url.searchParams.delete(key);
  const cleaned = url.toString();
  const host = url.hostname.toLowerCase();

  const forced = String(mode || '').toLowerCase();
  if (['off', '0', 'false', 'disable'].includes(forced)) return { connectionString: cleaned, ssl: false };
  if (['on', '1', 'true', 'verify'].includes(forced)) return { connectionString: cleaned, ssl: true };
  if (forced === 'no-verify') return { connectionString: cleaned, ssl: { rejectUnauthorized: false } };

  if (sslmode === 'disable') return { connectionString: cleaned, ssl: false };
  const cloud = /\.(neon\.tech|render\.com|supabase\.co|supabase\.com|aivencloud\.com|rds\.amazonaws\.com)$/.test(host);
  const wants = ['require', 'prefer', 'verify-ca', 'verify-full'].includes(sslmode) || sslParam === 'true' || cloud;
  if (!wants) return { connectionString: cleaned, ssl: false };
  // verify-full istenmişse sertifika doğrulanır; diğer durumlarda bağlantı şifreli ama doğrulamasız.
  return { connectionString: cleaned, ssl: sslmode === 'verify-full' ? true : { rejectUnauthorized: false } };
}

function rowToUser(row) {
  if (!row) return null;
  const stats = emptyStats();
  stats.games = Number(row.games);
  stats.wins = Number(row.wins);
  for (const t of TEAMS) {
    stats.teams[t] = { games: Number(row[`${t}_games`]), wins: Number(row[`${t}_wins`]) };
  }
  return {
    id: row.id,
    username: row.username,
    key: row.username_key,
    passHash: row.pass_hash,
    createdAt: Number(row.created_at),
    look: { color: Number(row.look_color), hat: Number(row.look_hat), skin: Number(row.look_skin) },
    stats,
  };
}

class PgStore {
  // pool verilirse (testlerde pg-mem) o kullanılır; yoksa connectionString ile pg havuzu kurulur.
  constructor({ connectionString, pool } = {}) {
    this.kind = 'postgres';
    if (pool) {
      this.pool = pool;
    } else {
      const { Pool } = require('pg');
      const cfg = sslConfig(connectionString);
      this.pool = new Pool({ ...cfg, max: 5, idleTimeoutMillis: 30000, connectionTimeoutMillis: 10000 });
    }
    // Boşta bekleyen bir bağlantı koparsa süreç çökmesin.
    if (typeof this.pool.on === 'function') {
      this.pool.on('error', (err) => console.error('Veritabanı bağlantı hatası:', err.message));
    }
  }

  async init() {
    const res = await this.pool.query(
      'SELECT table_name FROM information_schema.tables WHERE table_schema = current_schema()',
    );
    const existing = new Set(res.rows.map((r) => r.table_name));
    for (const table of [USERS, SESSIONS]) {
      if (existing.has(table)) continue;
      for (const sql of SCHEMA[table]) await this.pool.query(sql);
    }
  }

  async close() {
    await this.pool.end();
  }

  // ---------- kullanıcılar ----------

  async createUser(user) {
    try {
      await this.pool.query(
        `INSERT INTO ${USERS} (id, username, username_key, pass_hash, created_at, look_color, look_hat, look_skin)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [user.id, user.username, user.key, user.passHash, user.createdAt, user.look.color, user.look.hat, user.look.skin],
      );
    } catch (err) {
      if (err.code === '23505') {
        const e = new Error('Kullanıcı adı alınmış.');
        e.code = 'taken';
        throw e;
      }
      throw err;
    }
    return this.getUser(user.id);
  }

  async getUser(id) {
    const res = await this.pool.query(`SELECT * FROM ${USERS} WHERE id = $1`, [id]);
    return rowToUser(res.rows[0]);
  }

  async findUserByKey(key) {
    const res = await this.pool.query(`SELECT * FROM ${USERS} WHERE username_key = $1`, [key]);
    return rowToUser(res.rows[0]);
  }

  async updateLook(id, look) {
    await this.pool.query(
      `UPDATE ${USERS} SET look_color = $2, look_hat = $3, look_skin = $4 WHERE id = $1`,
      [id, look.color, look.hat, look.skin],
    );
    return this.getUser(id);
  }

  async recordResults(results) {
    for (const r of results) {
      if (!r.userId || !TEAMS.includes(r.team)) continue;
      const won = r.won ? 1 : 0;
      const params = [r.userId, won];
      for (const t of TEAMS) {
        params.push(t === r.team ? 1 : 0, t === r.team ? won : 0);
      }
      await this.pool.query(
        `UPDATE ${USERS} SET games = games + 1, wins = wins + $2,
           koylu_games = koylu_games + $3, koylu_wins = koylu_wins + $4,
           vampir_games = vampir_games + $5, vampir_wins = vampir_wins + $6,
           soytari_games = soytari_games + $7, soytari_wins = soytari_wins + $8
         WHERE id = $1`,
        params,
      );
    }
  }

  async leaderboard(limit) {
    const res = await this.pool.query(
      `SELECT * FROM ${USERS} WHERE games > 0 ORDER BY wins DESC, games ASC, username_key ASC LIMIT $1`,
      [limit],
    );
    return res.rows.map(rowToUser);
  }

  // ---------- oturumlar ----------

  async createSession(tokenHash, userId, expiresAt) {
    await this.pool.query(
      `INSERT INTO ${SESSIONS} (token_hash, user_id, expires_at) VALUES ($1, $2, $3)`,
      [tokenHash, userId, expiresAt],
    );
  }

  async getSession(tokenHash) {
    const res = await this.pool.query(`SELECT user_id, expires_at FROM ${SESSIONS} WHERE token_hash = $1`, [tokenHash]);
    const row = res.rows[0];
    return row ? { userId: row.user_id, expiresAt: Number(row.expires_at) } : null;
  }

  async touchSession(tokenHash, expiresAt) {
    await this.pool.query(`UPDATE ${SESSIONS} SET expires_at = $2 WHERE token_hash = $1`, [tokenHash, expiresAt]);
  }

  async deleteSession(tokenHash) {
    await this.pool.query(`DELETE FROM ${SESSIONS} WHERE token_hash = $1`, [tokenHash]);
  }

  async deleteExpiredSessions(now) {
    const res = await this.pool.query(`DELETE FROM ${SESSIONS} WHERE expires_at <= $1`, [now]);
    return res.rowCount || 0;
  }
}

module.exports = { PgStore, sslConfig };
