'use strict';

// Hesapları PostgreSQL'de tutan depo. DATABASE_URL tanımlıysa kullanılır; tablolar açılışta
// yoksa oluşturulur. JSON deposuyla aynı arayüzü sunar.

const { emptyStats, TEAMS } = require('./stats');

const USERS = 'vk_users';
const SESSIONS = 'vk_sessions';
const REVIEWS = 'vk_ai_reviews';
const GAME_LOGS = 'vk_game_logs';
const MAX_AI_REVIEWS = 200;
const MAX_GAME_LOGS = 500;                    // en yeni bu kadar oyun geçmişi
const MAX_GAME_LOG_BYTES = 200 * 1024 * 1024; // ya da bu kadar sıkıştırılmış veri (Neon ücretsiz: 0,5 GB)

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
      look_acc INTEGER NOT NULL DEFAULT 0,
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
  [REVIEWS]: [
    `CREATE TABLE ${REVIEWS} (
      id TEXT PRIMARY KEY,
      created_at BIGINT NOT NULL,
      room TEXT NOT NULL,
      model TEXT NOT NULL,
      cost DOUBLE PRECISION NOT NULL DEFAULT 0,
      summary TEXT NOT NULL,
      mistakes INTEGER NOT NULL DEFAULT 0,
      high INTEGER NOT NULL DEFAULT 0,
      medium INTEGER NOT NULL DEFAULT 0,
      low INTEGER NOT NULL DEFAULT 0,
      record TEXT NOT NULL,
      review TEXT NOT NULL,
      game_log_id TEXT
    )`,
    `CREATE INDEX ${REVIEWS}_created_idx ON ${REVIEWS} (created_at)`,
  ],
  [GAME_LOGS]: [
    `CREATE TABLE ${GAME_LOGS} (
      id TEXT PRIMARY KEY,
      created_at BIGINT NOT NULL,
      room TEXT NOT NULL,
      started_at BIGINT NOT NULL,
      ended_at BIGINT NOT NULL,
      end_kind TEXT NOT NULL,
      winner TEXT NOT NULL DEFAULT '',
      players INTEGER NOT NULL DEFAULT 0,
      humans INTEGER NOT NULL DEFAULT 0,
      bots INTEGER NOT NULL DEFAULT 0,
      smart INTEGER NOT NULL DEFAULT 0,
      rounds INTEGER NOT NULL DEFAULT 0,
      size INTEGER NOT NULL DEFAULT 0,
      review_id TEXT,
      record TEXT NOT NULL
    )`,
    `CREATE INDEX ${GAME_LOGS}_created_idx ON ${GAME_LOGS} (created_at)`,
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
    look: { color: Number(row.look_color), hat: Number(row.look_hat), skin: Number(row.look_skin), ...(Number(row.look_acc) ? { acc: Number(row.look_acc) } : {}) },
    stats,
  };
}

function rowToGameLog(r) {
  return {
    id: r.id, createdAt: Number(r.created_at), room: r.room, startedAt: Number(r.started_at), endedAt: Number(r.ended_at), end: r.end_kind,
    winner: r.winner, players: Number(r.players), humans: Number(r.humans), bots: Number(r.bots), smart: Number(r.smart), rounds: Number(r.rounds),
    size: Number(r.size), reviewId: r.review_id || null,
  };
}

class PgStore {
  // pool verilirse (testlerde pg-mem) o kullanılır; yoksa connectionString ile pg havuzu kurulur.
  // gameLogLimits: testlerde saklama sınırları ({ max, bytes }).
  constructor({ connectionString, pool, gameLogLimits = {} } = {}) {
    this.kind = 'postgres';
    this.gameLogMax = gameLogLimits.max || MAX_GAME_LOGS;
    this.gameLogBytes = gameLogLimits.bytes || MAX_GAME_LOG_BYTES;
    this.reviewHasLogId = true;
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
    for (const table of [USERS, SESSIONS, REVIEWS, GAME_LOGS]) {
      if (existing.has(table)) continue;
      for (const sql of SCHEMA[table]) await this.pool.query(sql);
    }
    // Eski kurulumlarda kullanıcı tablosunda aksesuar sütunu yoktur: eklenir (varsayılan 0 = yok).
    if (existing.has(USERS)) {
      const ucols = await this.pool.query(
        'SELECT column_name FROM information_schema.columns WHERE table_schema = current_schema() AND table_name = $1', [USERS],
      );
      if (!ucols.rows.some((r) => r.column_name === 'look_acc')) {
        await this.pool.query(`ALTER TABLE ${USERS} ADD COLUMN look_acc INTEGER NOT NULL DEFAULT 0`);
      }
    }
    // Eski kurulumlarda inceleme tablosunda oyun geçmişi bağlantısı sütunu yoktur: eklenir (sütun boş olabilir).
    if (existing.has(REVIEWS)) {
      const cols = await this.pool.query(
        'SELECT column_name FROM information_schema.columns WHERE table_schema = current_schema() AND table_name = $1', [REVIEWS],
      );
      if (!cols.rows.some((r) => r.column_name === 'game_log_id')) {
        try {
          await this.pool.query(`ALTER TABLE ${REVIEWS} ADD COLUMN game_log_id TEXT`);
        } catch (err) {
          this.reviewHasLogId = false;   // eklenemediyse incelemeler bağlantısız kaydedilir; oyun etkilenmez
          console.error('İnceleme tablosuna game_log_id eklenemedi:', err && err.message ? err.message : err);
        }
      }
    }
  }

  async close() {
    await this.pool.end();
  }

  // ---------- kullanıcılar ----------

  async createUser(user) {
    try {
      await this.pool.query(
        `INSERT INTO ${USERS} (id, username, username_key, pass_hash, created_at, look_color, look_hat, look_skin, look_acc)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [user.id, user.username, user.key, user.passHash, user.createdAt, user.look.color, user.look.hat, user.look.skin, user.look.acc || 0],
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
      `UPDATE ${USERS} SET look_color = $2, look_hat = $3, look_skin = $4, look_acc = $5 WHERE id = $1`,
      [id, look.color, look.hat, look.skin, look.acc || 0],
    );
    return this.getUser(id);
  }

  async recordResults(results) {
    for (const r of results) {
      if (!r.userId) continue;
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

  // ---------- bot incelemeleri ----------

  async saveAiReview(row) {
    await this.pool.query(
      `INSERT INTO ${REVIEWS} (id, created_at, room, model, cost, summary, mistakes, high, medium, low, record, review${this.reviewHasLogId ? ', game_log_id' : ''})
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12${this.reviewHasLogId ? ', $13' : ''})`,
      [row.id, row.createdAt, row.room, row.model, row.cost, row.summary, row.mistakes, row.high, row.medium, row.low, row.record, JSON.stringify(row.review), ...(this.reviewHasLogId ? [row.logId || null] : [])],
    );
    // En fazla MAX_AI_REVIEWS en yeni inceleme kalır.
    const old = await this.pool.query(`SELECT id FROM ${REVIEWS} ORDER BY created_at DESC, id DESC OFFSET ${MAX_AI_REVIEWS}`);
    for (const r of old.rows) await this.pool.query(`DELETE FROM ${REVIEWS} WHERE id = $1`, [r.id]);
  }

  async listAiReviews({ limit = 50, since = 0 } = {}) {
    const n = Math.min(MAX_AI_REVIEWS, Math.max(1, Number(limit) || 50));
    const res = await this.pool.query(
      `SELECT id, created_at, room, model, cost, summary, mistakes, high, medium, low${this.reviewHasLogId ? ', game_log_id' : ''} FROM ${REVIEWS}
       WHERE created_at > $1 ORDER BY created_at DESC, id DESC LIMIT ${n}`,
      [Number(since) || 0],
    );
    return res.rows.map((r) => ({
      id: r.id, createdAt: Number(r.created_at), room: r.room, model: r.model, cost: Number(r.cost), summary: r.summary,
      mistakes: Number(r.mistakes), high: Number(r.high), medium: Number(r.medium), low: Number(r.low), logId: r.game_log_id || null,
    }));
  }

  async getAiReview(id) {
    const res = await this.pool.query(`SELECT * FROM ${REVIEWS} WHERE id = $1`, [id]);
    const r = res.rows[0];
    if (!r) return null;
    return {
      id: r.id, createdAt: Number(r.created_at), room: r.room, model: r.model, cost: Number(r.cost), summary: r.summary,
      mistakes: Number(r.mistakes), high: Number(r.high), medium: Number(r.medium), low: Number(r.low),
      logId: r.game_log_id || null, record: r.record, review: JSON.parse(r.review),
    };
  }

  // ---------- oyun geçmişi ----------

  async saveGameLog(row) {
    await this.pool.query(
      `INSERT INTO ${GAME_LOGS} (id, created_at, room, started_at, ended_at, end_kind, winner, players, humans, bots, smart, rounds, size, review_id, record)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`,
      [row.id, row.createdAt, row.room, row.startedAt, row.endedAt, row.end, row.winner || '', row.players, row.humans, row.bots, row.smart, row.rounds,
        row.size, row.reviewId || null, row.record],
    );
    // Saklama: en yeni gameLogMax oyun ve toplam size ≤ gameLogBytes.
    const all = await this.pool.query(`SELECT id, size FROM ${GAME_LOGS} ORDER BY created_at DESC, id DESC`);
    let count = 0;
    let bytes = 0;
    for (const r of all.rows) {
      count += 1;
      bytes += Number(r.size) || 0;
      if (count > 1 && (count > this.gameLogMax || bytes > this.gameLogBytes)) await this.pool.query(`DELETE FROM ${GAME_LOGS} WHERE id = $1`, [r.id]);
    }
  }

  async listGameLogs({ limit = 50, since = 0 } = {}) {
    const n = Math.min(this.gameLogMax, Math.max(1, Number(limit) || 50));
    const res = await this.pool.query(
      `SELECT id, created_at, room, started_at, ended_at, end_kind, winner, players, humans, bots, smart, rounds, size, review_id FROM ${GAME_LOGS}
       WHERE created_at > $1 ORDER BY created_at DESC, id DESC LIMIT ${n}`,
      [Number(since) || 0],
    );
    return res.rows.map(rowToGameLog);
  }

  async getGameLog(id) {
    const res = await this.pool.query(`SELECT * FROM ${GAME_LOGS} WHERE id = $1`, [id]);
    const r = res.rows[0];
    return r ? { ...rowToGameLog(r), record: r.record } : null;
  }

  async linkGameLogReview(id, reviewId) {
    const res = await this.pool.query(`UPDATE ${GAME_LOGS} SET review_id = $2 WHERE id = $1`, [id, reviewId]);
    return (res.rowCount || 0) > 0;
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

module.exports = { PgStore, sslConfig, MAX_AI_REVIEWS, MAX_GAME_LOGS, MAX_GAME_LOG_BYTES };
