'use strict';

const path = require('path');
const http = require('http');
const os = require('os');
const crypto = require('crypto');
const express = require('express');
const compression = require('compression');
const { Server } = require('socket.io');
const { Room } = require('./game');
const { createStore } = require('./lib/store');
const { Accounts } = require('./lib/auth');
const { createAiClient, aiStatusLine } = require('./lib/ai');
const { createReviewer, reviewStatusLine } = require('./lib/ai/review');
const { createAnalyzer, analyzeStatusLine } = require('./lib/ai/analyze');
const { createApi } = require('./lib/api');
const { packAsync } = require('./lib/ai/gamerec');

const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const MOVE_FLUSH_MS = 100;   // konum değişiklikleri en fazla bu sıklıkla yayınlanır
const PUBLIC_DIR = path.join(__dirname, 'public');

// 3B modeller için doğru içerik türü.
express.static.mime.define({ 'model/gltf-binary': ['glb'], 'model/gltf+json': ['gltf'], 'application/manifest+json': ['webmanifest'] });

// Arayüz başka bir adreste (ör. Netlify) yayınlanıyorsa o adres buraya virgülle yazılır:
// CLIENT_ORIGIN=https://vampir-koylu.netlify.app
function parseOrigins(value) {
  return String(value || '').split(',').map((s) => s.trim().replace(/\/$/, '')).filter(Boolean);
}

function cleanText(value, max) {
  return String(value ?? '')
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function cleanCode(value) {
  return cleanText(value, 10).toUpperCase();
}

function lanAddresses() {
  return Object.values(os.networkInterfaces())
    .flat()
    .filter((i) => i && i.family === 'IPv4' && !i.internal)
    .map((i) => i.address);
}

// Dosya adları içerik özeti taşımadığı için önbellek kısa tutulur ve süre dolunca ETag ile doğrulanır.
function cacheHeaders(res, filePath) {
  const rel = path.relative(PUBLIC_DIR, filePath).split(path.sep).join('/');
  if (rel.startsWith('assets/')) res.set('Cache-Control', 'public, max-age=3600, must-revalidate');
  else if (rel.startsWith('build/')) res.set('Cache-Control', 'public, max-age=300, must-revalidate');
  else res.set('Cache-Control', 'no-cache');
}

// Sunucuyu kurar ama dinlemeye başlamaz (testler aynı süreçte kullanabilsin).
// options: store (init edilmiş depo), origins, trustProxy, authOptions, limits
// ai: akıllı botların API istemcisi (lib/ai) ya da null. Testler ve anahtarsız sunucu: null (yalnızca rastgele botlar).
// reviewer: oyun sonu bot incelemesi (lib/ai/review.js Reviewer) ya da null. adminToken: ADMIN_TOKEN (boşsa yönetici adresleri kapalı).
// analyzer: sunucuda oyun geçmişi çözümlemesi (lib/ai/analyze.js Analyzer) ya da null (uç nokta 503 döner).
// gameLogs: her oyunun geçmişi depoya yazılsın mı (GAME_LOGS=off ile kapatılır; docs/GAME-LOGS.md).
function createGameServer({ store, origins = [], trustProxy = false, authOptions = {}, limits = {}, port = 0, ai = null, reviewer = null, analyzer = null, adminToken = '', gameLogs = true } = {}) {
  const accounts = new Accounts(store, authOptions);
  const rooms = new Map();
  const moveTimers = new Map();
  const pending = new Set();
  const logSaves = new Map();   // oyun geçmişi kimliği -> yazma sözü (incelemenin bağlanması için)
  let listTimer = null;
  let closing = false;
  let listenPort = port;

  const app = express();
  app.disable('x-powered-by');
  if (trustProxy) app.set('trust proxy', trustProxy);
  app.use(compression());

  // Barındırma servislerinin sağlık kontrolü ve uyandırma isteği için.
  app.get('/healthz', (req, res) => {
    res.set('Cache-Control', 'no-store');
    // Akıllı botlar: yalnızca toplu sayılar (çağrı, token, tahmini maliyet); içerik asla.
    res.json({ ok: true, rooms: rooms.size, store: store.kind, ...(ai ? { ai: ai.stats() } : {}), ...(reviewer ? { aiReview: reviewer.stats() } : {}), ...(analyzer ? { aiAnalyze: analyzer.stats() } : {}) });
  });

  // localhost'tan açan oda sahibinin davet linki, aynı ağdakilerin açabileceği adresle oluşturulsun.
  app.get('/lan.json', (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.json({ addresses: lanAddresses(), port: listenPort });
  });

  app.use('/api', createApi(accounts, {
    origins,
    limits,
    adminToken,
    store,
    analyzer,
    onLogout(tokenHash) {
      // Çıkış yapılan oturumun açık soketleri de kapanır.
      for (const s of io.sockets.sockets.values()) {
        if (s.data.tokenHash === tokenHash) s.disconnect(true);
      }
    },
  }));

  app.use(express.static(PUBLIC_DIR, { cacheControl: false, setHeaders: cacheHeaders }));

  const server = http.createServer(app);
  // Durum mesajları (özellikle büyüyen oyun günlüğü) çok tekrar eder; WebSocket sıkıştırması
  // istemci tarafında şeffaftır ve aktarılan veriyi birkaç kat küçültür.
  const io = new Server(server, {
    perMessageDeflate: { threshold: 1024 },
    ...(origins.length ? { cors: { origin: origins } } : {}),
  });

  function makeCode() {
    let code;
    do {
      code = Array.from({ length: 5 }, () => CODE_CHARS[crypto.randomInt(CODE_CHARS.length)]).join('');
    } while (rooms.has(code));
    return code;
  }

  function roomList() {
    const order = { lobby: 0, ended: 1 };
    return [...rooms.values()]
      .map((r) => r.publicInfo())
      .filter((r) => r.players > 0)
      .sort((a, b) => (order[a.phase] ?? 2) - (order[b.phase] ?? 2) || a.name.localeCompare(b.name, 'tr'));
  }

  function broadcastRoomList() {
    if (listTimer || closing) return;
    listTimer = setTimeout(() => {
      listTimer = null;
      io.to('browse').emit('rooms:update', roomList());
    }, 200);
  }

  function sendToPlayers(room, ids, event, payload) {
    for (const id of ids) {
      const p = room.players.get(id);
      if (p && p.socketId) io.to(p.socketId).emit(event, typeof payload === 'function' ? payload(p) : payload);
    }
  }

  function flushState(room) {
    clearTimeout(moveTimers.get(room.id));
    moveTimers.delete(room.id);
    room.lastFlush = Date.now();
    sendToPlayers(room, room.players.keys(), 'state', (p) => room.viewFor(p.id));
    broadcastRoomList();
  }

  // Arka planda süren depo işlemleri (kapatırken beklenir). Hata odayı durdurmaz, sadece kaydedilir.
  function track(promise, what) {
    const p = Promise.resolve(promise)
      .catch((err) => console.error(`[${new Date().toISOString()}] ${what}:`, err && err.message ? err.message : err))
      .finally(() => pending.delete(p));
    pending.add(p);
    return p;
  }

  const hooks = {
    update(room, kind) {
      if (closing) return;
      // Konum değişiklikleri seyreltilir; diğer her değişiklik hemen gönderilir.
      if (kind === 'move') {
        if (moveTimers.has(room.id)) return;
        const wait = Math.max(0, MOVE_FLUSH_MS - (Date.now() - (room.lastFlush || 0)));
        moveTimers.set(room.id, setTimeout(() => flushState(room), wait));
        return;
      }
      flushState(room);
    },
    announce(room, msg, to) {
      if (closing) return;
      sendToPlayers(room, to || room.players.keys(), 'announce', msg);
    },
    empty(room) {
      clearTimeout(moveTimers.get(room.id));
      moveTimers.delete(room.id);
      rooms.delete(room.id);
      broadcastRoomList();
    },
    // Sahip hesap odaya ilk kez girdi: herkesin tarayıcısı giriş fanfarını çalar (lib/banter.js playerConnected).
    entrance(room, info) {
      if (closing) return;
      sendToPlayers(room, room.players.keys(), 'entrance', { call: info.call });
    },
    // Sahip müziği kapattı: herkesin tarayıcısı çalan müziği yumuşakça kısıp durdurur.
    entranceStop(room) {
      if (closing) return;
      sendToPlayers(room, room.players.keys(), 'entrance:stop', {});
    },
    // Botların sohbet mesajları (insan mesajlarıyla aynı alıcı kuralları).
    chat(room, recipients, message) {
      if (closing) return;
      sendToPlayers(room, recipients, 'chat', message);
    },
    // Akıllı botlu oyun bitti: oyun kaydı asenkron incelenir (oyunu beklemez; hata yalnızca tek satır log).
    // info.logId: aynı oyunun tam geçmişi (gameLog); inceleme bittiğinde ona bağlanır.
    reviewReady(room, record, info = {}) {
      if (closing || !reviewer) return;
      const saved = info.logId ? logSaves.get(info.logId) : null;
      track(reviewer.process(record, room.id, store, { logId: info.logId }).then(async (res) => {
        if (res && res.ok && res.id && info.logId && typeof store.linkGameLogReview === 'function') {
          if (saved) await saved.catch(() => {});
          await store.linkGameLogReview(info.logId, res.id);
        }
      }), `Oyun incelemesi (${room.id})`);
    },
    // Oyun bitti (ya da en az bir gece sonra herkes çıktı): tam geçmiş sıkıştırılıp depoya yazılır. Oyunu beklemez;
    // hata yalnızca tek satır log. Satırda yalnızca sayılar var (içerik, isim yok).
    gameLog(room, record) {
      if (closing || !gameLogs || typeof store.saveGameLog !== 'function') return;
      const p = (async () => {
        const packed = await packAsync(record);
        const g = record.game || {};
        await store.saveGameLog({
          id: record.id, createdAt: Date.now(), room: String(room.id), startedAt: Date.parse(record.startedAt), endedAt: Date.parse(record.endedAt),
          end: record.end, winner: record.winner || '', players: g.players || 0, humans: g.humans || 0, bots: g.bots || 0, smart: g.smartBots || 0,
          rounds: record.rounds || 0, size: packed.length, reviewId: null, record: packed,
        });
        console.log(`[game-log] oda=${room.id} oyun=${record.id} ${record.end} oyuncu=${g.players} tur=${record.rounds} olay=${(record.events || []).length} boyut=${(packed.length / 1024).toFixed(1)}KB`);
      })();
      logSaves.set(record.id, p);
      p.catch(() => {}).finally(() => setTimeout(() => logSaves.delete(record.id), 60000).unref());
      track(p, `Oyun geçmişi kaydedilemedi (${room.id})`);
    },
    finished(room, { results, ranked }) {
      // Botlu oyunlar da insan oyuncuların istatistiğine ve liderlik tablosuna yazılır (botların hesabı yok: userId boş).
      // `ranked` (oyun başında bot var mıydı) hâlâ bildirilir; ileride botlu oyunları ayrı saymak istenirse süzgeç burada olur.
      const rows = results.filter((r) => r.userId);
      if (rows.length) track(accounts.recordResults(rows), `Oyun sonucu kaydedilemedi (${room.id})`);
    },
  };

  // Soket bağlanırken oturum anahtarı doğrulanır; geçersizse bağlantı 'auth' hatasıyla reddedilir.
  io.use((socket, next) => {
    const token = socket.handshake.auth && socket.handshake.auth.token;
    if (typeof token !== 'string' || !token) return next(new Error('auth'));
    accounts.authenticate(token).then((auth) => {
      if (!auth) return next(new Error('auth'));
      socket.data.user = { id: auth.user.id, username: auth.user.username };
      socket.data.tokenHash = auth.tokenHash;
      return next();
    }).catch((err) => {
      console.error('Soket oturumu doğrulanamadı:', err && err.message ? err.message : err);
      next(new Error('unavailable'));
    });
  });

  // Soketin bağlı olduğu oda ve oyuncu (oturum başka sekmeye geçtiyse null).
  function ctx(socket) {
    const room = rooms.get(socket.data.roomId);
    const player = room && room.players.get(socket.data.playerId);
    if (!player || player.socketId !== socket.id) return null;
    return { room, player };
  }

  function leaveCurrent(socket) {
    const c = ctx(socket);
    socket.data.roomId = null;
    socket.data.playerId = null;
    if (c) c.room.removePlayer(c.player.id);
  }

  function bind(socket, room, playerId) {
    const player = room.players.get(playerId);
    if (player.socketId && player.socketId !== socket.id) {
      const old = io.sockets.sockets.get(player.socketId);
      if (old) {
        old.data.roomId = null;
        old.data.playerId = null;
        old.emit('kicked', 'Bu oturum başka bir sekmede açıldı.');
      }
    }
    socket.data.roomId = room.id;
    socket.data.playerId = playerId;
    socket.leave('browse');
    room.connect(playerId, socket.id);
  }

  // Hesabın bu odada koltuğu varsa soketi o koltuğa bağlar (oyun sırasında da: yeniden bağlanma).
  function rebindSeat(socket, room) {
    const seat = room.findByUser(socket.data.user.id);
    if (!seat) return null;
    const c = ctx(socket);
    if (c && c.room === room && c.player.id === seat.id) return seat;
    if (c) leaveCurrent(socket);
    bind(socket, room, seat.id);
    return seat;
  }

  // Hesabın kayıtlı görünümü (depoya ulaşılamazsa rastgele görünümle devam edilir).
  async function profileLook(userId) {
    try {
      const user = await store.getUser(userId);
      return user ? user.look : null;
    } catch (err) {
      console.error('Profil görünümü okunamadı:', err && err.message ? err.message : err);
      return null;
    }
  }

  io.on('connection', (socket) => {
    const user = socket.data.user;

    const handle = (event, fn) => {
      socket.on(event, (data, ack) => {
        if (typeof data === 'function') { ack = data; data = {}; }
        let replied = false;
        const reply = (payload) => {
          if (replied || typeof ack !== 'function') return;
          replied = true;
          ack(payload);
        };
        const fail = (err) => {
          console.error(`[${event}]`, err);
          reply({ ok: false, error: 'Sunucuda bir hata oluştu.' });
        };
        try {
          const r = fn(data && typeof data === 'object' ? data : {}, reply);
          if (r && typeof r.then === 'function') r.catch(fail);
        } catch (err) {
          fail(err);
        }
      });
    };

    // Odadaki oyuncunun yaptığı işlemler: hata metni dönerse kullanıcıya iletilir.
    const act = (event, fn) => {
      handle(event, (data, reply) => {
        const c = ctx(socket);
        if (!c) return reply({ ok: false, error: 'Bir odada değilsin.' });
        const error = fn(c, data);
        reply(error ? { ok: false, error } : { ok: true });
      });
    };

    handle('rooms:watch', (data, reply) => {
      socket.join('browse');
      reply({ ok: true, rooms: roomList() });
    });

    handle('rooms:unwatch', (data, reply) => {
      socket.leave('browse');
      reply({ ok: true });
    });

    handle('room:info', (data, reply) => {
      const room = rooms.get(cleanCode(data.roomId));
      if (!room) return reply({ ok: false, error: 'Oda bulunamadı.' });
      reply({ ok: true, room: room.publicInfo() });
    });

    handle('room:create', async (data, reply) => {
      const roomName = cleanText(data.roomName, 24);
      if (roomName.length < 3) return reply({ ok: false, error: 'Oda adı en az 3 karakter olmalı.' });
      const look = await profileLook(user.id);
      if (closing) return reply({ ok: false, error: 'Sunucu kapanıyor.' });

      leaveCurrent(socket);
      const room = new Room({
        id: makeCode(),
        name: roomName,
        password: cleanText(data.password, 20),
        settings: data.settings && typeof data.settings === 'object' ? data.settings : {},
        hooks,
        ai,
      });
      rooms.set(room.id, room);
      const playerId = crypto.randomUUID();
      room.addPlayer(playerId, user.username, { userId: user.id, look });
      // Güçlü bot zekâsı (Sonnet) yalnızca sahip hesabın: başkası seçmeye çalışırsa sessizce varsayılana döner.
      if (room.settings.botModel === 'sonnet' && !room.isOwnerPlayer(playerId)) room.settings.botModel = 'haiku';
      bind(socket, room, playerId);
      reply({ ok: true, roomId: room.id, playerId });
    });

    handle('room:join', async (data, reply) => {
      const notFound = { ok: false, error: 'Oda bulunamadı. Kapanmış olabilir.' };
      let room = rooms.get(cleanCode(data.roomId));
      if (!room) return reply(notFound);

      // Bu hesabın odada zaten koltuğu varsa ona geri bağlan (oyun sırasında da).
      let seat = rebindSeat(socket, room);
      if (seat) return reply({ ok: true, roomId: room.id, playerId: seat.id, resumed: true });

      if (room.password && cleanText(data.password, 20) !== room.password) {
        return reply({ ok: false, error: 'Oda şifresi yanlış.' });
      }
      if (room.phase !== 'lobby') return reply({ ok: false, error: 'Oyun başlamış, şu an katılamazsın.' });

      const look = await profileLook(user.id);
      room = rooms.get(room.id) === room ? room : null;
      if (!room) return reply(notFound);
      seat = rebindSeat(socket, room);   // beklerken başka sekmeden katılmış olabilir
      if (seat) return reply({ ok: true, roomId: room.id, playerId: seat.id, resumed: true });

      const playerId = crypto.randomUUID();
      const error = room.addPlayer(playerId, user.username, { userId: user.id, look });
      if (error) return reply({ ok: false, error });
      leaveCurrent(socket);
      bind(socket, room, playerId);
      reply({ ok: true, roomId: room.id, playerId, resumed: false });
    });

    handle('session:resume', (data, reply) => {
      const room = rooms.get(cleanCode(data.roomId));
      const seat = room && rebindSeat(socket, room);
      if (!seat) return reply({ ok: false, error: 'Bu odada yerin yok.' });
      reply({ ok: true, roomId: room.id, playerId: seat.id });
    });

    handle('room:leave', (data, reply) => {
      leaveCurrent(socket);
      reply({ ok: true });
    });

    // Oda sahibi lobide bot ekler: { ok:true, playerId }.
    handle('room:addBot', (data, reply) => {
      const c = ctx(socket);
      if (!c) return reply({ ok: false, error: 'Bir odada değilsin.' });
      const res = c.room.addBot(c.player.id);
      reply(res.error ? { ok: false, error: res.error } : { ok: true, playerId: res.id });
    });

    // Sahip hesap lobide müziği elle çaldırır (herkeste çalar, botlar tepki verir).
    handle('music:play', (data, reply) => {
      const c = ctx(socket);
      if (!c) return reply({ ok: false, error: 'Bir odada değilsin.' });
      const error = c.room.playEntrance(c.player.id);
      reply(error ? { ok: false, error } : { ok: true });
    });

    handle('music:stop', (data, reply) => {
      const c = ctx(socket);
      if (!c) return reply({ ok: false, error: 'Bir odada değilsin.' });
      const error = c.room.stopEntrance(c.player.id);
      reply(error ? { ok: false, error } : { ok: true });
    });

    act('room:kick', ({ room, player }, data) => {
      const targetId = String(data.playerId || '');
      const target = room.players.get(targetId);
      const error = room.kick(player.id, targetId);
      if (!error && target && target.socketId) {
        const s = io.sockets.sockets.get(target.socketId);
        if (s) {
          s.data.roomId = null;
          s.data.playerId = null;
          s.emit('kicked', 'Oda sahibi seni odadan çıkardı.');
        }
      }
      return error;
    });

    act('game:start', ({ room, player }) => room.start(player.id));
    act('game:lobby', ({ room, player }) => room.backToLobby(player.id));
    act('night:select', ({ room, player }, data) => (
      room.selectNight(player.id, String(data.targetId || ''), data.action === 'poison' ? 'poison' : 'heal')
    ));
    // "Bu gece bekle": seçim yapabilecek biri bu gece bir şey yapmaz (kesin); herkes seçince gece erken ilerler.
    act('night:pass', ({ room, player }) => room.passNight(player.id));
    act('hunter:shoot', ({ room, player }, data) => room.shoot(player.id, String(data.targetId || '')));
    // Gardiyan gündüz gelecek gecenin kilidini seçer (targetId: null = vazgeç).
    act('day:lock', ({ room, player }, data) => (
      room.lockHouse(player.id, data.targetId == null ? null : String(data.targetId))
    ));
    act('room:settings', ({ room, player }, data) => room.updateSettings(player.id, data.settings || {}));

    // Odada seçilen görünüm hesabın profiline de kaydedilir.
    act('player:look', ({ room, player }, data) => {
      const error = room.setLook(player.id, data);
      if (!error && player.userId) {
        track(accounts.saveLook(player.userId, player.look), 'Görünüm profile kaydedilemedi');
      }
      return error;
    });

    // Her hareket uygulanır; durum yayını oda başına seyreltilir (MOVE_FLUSH_MS).
    act('player:move', ({ room, player }, data) => room.move(player.id, data.x, data.y));
    act('day:vote', ({ room, player }, data) => (
      room.vote(player.id, data.targetId == null ? null : String(data.targetId))
    ));

    act('chat:send', ({ room, player }, data) => {
      const now = Date.now();
      if (now - (socket.data.lastChat || 0) < 400) return 'Biraz yavaş yaz :)';
      socket.data.lastChat = now;
      const res = room.chat(player.id, data.text);
      if (res.error) return res.error;
      sendToPlayers(room, res.recipients, 'chat', res.message);
      room.observeChat(res.recipients, res.message);   // alıcı koltuklardaki (akıllı) botlar da duyar
      return null;
    });

    socket.on('disconnect', () => {
      if (closing) return;
      const c = ctx(socket);
      if (c) c.room.disconnect(c.player.id);
    });
  });

  return {
    app, server, io, rooms, accounts, store, hooks,
    listen(p = port) {
      return new Promise((resolve, reject) => {
        server.once('error', reject);
        server.listen(p, () => {
          server.off('error', reject);
          listenPort = server.address().port;
          resolve(listenPort);
        });
      });
    },
    // Testler ve düzgün kapanış için: odaları, zamanlayıcıları, soketleri ve depoyu kapatır.
    async close({ closeStore = true } = {}) {
      closing = true;
      if (analyzer) analyzer.abortAll();
      clearTimeout(listTimer);
      for (const t of moveTimers.values()) clearTimeout(t);
      moveTimers.clear();
      for (const room of rooms.values()) room.destroy();
      rooms.clear();
      await new Promise((resolve) => {
        io.close(() => resolve());
        if (typeof server.closeAllConnections === 'function') server.closeAllConnections();
      });
      await Promise.allSettled([...pending, ...(analyzer ? [analyzer.settle()] : [])]);
      if (closeStore) await store.close();
    },
    // Arka plandaki depo yazmalarının bitmesini bekler (testler için).
    settle() {
      return Promise.allSettled([...pending, ...(analyzer ? [analyzer.settle()] : [])]);
    },
  };
}

function trustProxySetting(env = process.env) {
  const raw = env.TRUST_PROXY;
  if (raw === undefined || raw === '') return env.RENDER ? 1 : false;
  if (raw === 'true') return true;
  if (raw === 'false') return false;
  return /^\d+$/.test(raw) ? Number(raw) : raw;
}

async function main() {
  // Beklenmeyen bir hata tüm odaları kapatmasın: hatayı kaydet, sunucu çalışmaya devam etsin.
  process.on('uncaughtException', (err) => {
    console.error(`[${new Date().toISOString()}] Beklenmeyen hata:`, err);
  });
  process.on('unhandledRejection', (err) => {
    console.error(`[${new Date().toISOString()}] Yakalanmamış söz (promise) hatası:`, err);
  });

  const PORT = Number(process.env.PORT) || 3000;
  const store = createStore(process.env);
  try {
    await store.init();
  } catch (err) {
    console.error('Hesap deposu açılamadı:', err);
    process.exit(1);
  }
  const ai = createAiClient(process.env);
  const reviewer = ai ? createReviewer(process.env, { store }) : null;
  const analyzer = createAnalyzer(process.env);
  const adminToken = String(process.env.ADMIN_TOKEN || '').trim();
  const gameLogs = !['off', '0', 'false', 'no'].includes(String(process.env.GAME_LOGS || '').toLowerCase());
  const game = createGameServer({
    store,
    ai,
    reviewer,
    analyzer,
    adminToken,
    gameLogs,
    origins: parseOrigins(process.env.CLIENT_ORIGIN),
    trustProxy: trustProxySetting(),
    port: PORT,
  });
  await game.listen(PORT);

  console.log('Vampir Köylü sunucusu çalışıyor.');
  console.log(`  Hesap deposu:         ${store.kind === 'postgres' ? 'PostgreSQL (DATABASE_URL)' : `JSON dosyası (${store.file})`}`);
  console.log(`  Akıllı botlar:        ${aiStatusLine(ai, process.env)}`);
  console.log(`  Oyun incelemesi:      ${ai ? reviewStatusLine(reviewer, process.env) : 'kapalı (akıllı botlar kapalı)'}${adminToken ? '; yönetici adresleri açık (ADMIN_TOKEN)' : ''}`);
  console.log(`  Geçmiş çözümleme:     ${analyzeStatusLine(analyzer)}`);
  console.log(`  Oyun geçmişi:         ${gameLogs ? 'açık (her oyun saklanır; en yeni 500 oyun ya da ~200 MB)' : 'kapalı (GAME_LOGS=off)'}`);
  console.log(`  Bu bilgisayardan:     http://localhost:${PORT}`);
  for (const ip of lanAddresses()) {
    console.log(`  Aynı Wi-Fi'dakiler:   http://${ip}:${PORT}`);
  }

  let stopping = false;
  const stop = async (signal) => {
    if (stopping) return;
    stopping = true;
    console.log(`${signal} alındı, sunucu kapanıyor...`);
    const force = setTimeout(() => process.exit(0), 5000);
    force.unref();
    try { await game.close(); } catch (err) { console.error('Kapanırken hata:', err); }
    process.exit(0);
  };
  process.on('SIGTERM', () => stop('SIGTERM'));
  process.on('SIGINT', () => stop('SIGINT'));
}

if (require.main === module) main();

module.exports = { createGameServer, parseOrigins, trustProxySetting };
