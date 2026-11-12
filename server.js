'use strict';

const path = require('path');
const http = require('http');
const os = require('os');
const crypto = require('crypto');
const express = require('express');
const { Server } = require('socket.io');
const { Room } = require('./game');

const PORT = Number(process.env.PORT) || 3000;
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

// Arayüz başka bir adreste (ör. Netlify) yayınlanıyorsa o adres buraya virgülle yazılır:
// CLIENT_ORIGIN=https://vampir-koylu.netlify.app
const CLIENT_ORIGINS = String(process.env.CLIENT_ORIGIN || '')
  .split(',').map((s) => s.trim().replace(/\/$/, '')).filter(Boolean);

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Barındırma servislerinin sağlık kontrolü ve uyandırma isteği için.
app.get('/healthz', (req, res) => {
  res.json({ ok: true, rooms: rooms.size });
});

// localhost'tan açan oda sahibinin davet linki, aynı ağdakilerin açabileceği adresle oluşturulsun.
app.get('/lan.json', (req, res) => {
  res.json({ addresses: lanAddresses(), port: PORT });
});
const server = http.createServer(app);
const io = new Server(server, CLIENT_ORIGINS.length ? { cors: { origin: CLIENT_ORIGINS } } : {});

const rooms = new Map();

function makeCode() {
  let code;
  do {
    code = Array.from({ length: 5 }, () => CODE_CHARS[crypto.randomInt(CODE_CHARS.length)]).join('');
  } while (rooms.has(code));
  return code;
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

function roomList() {
  const order = { lobby: 0, ended: 1 };
  return [...rooms.values()]
    .map((r) => r.publicInfo())
    .filter((r) => r.players > 0)
    .sort((a, b) => (order[a.phase] ?? 2) - (order[b.phase] ?? 2) || a.name.localeCompare(b.name, 'tr'));
}

let listTimer = null;
function broadcastRoomList() {
  if (listTimer) return;
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

const hooks = {
  update(room) {
    sendToPlayers(room, room.players.keys(), 'state', (p) => room.viewFor(p.id));
    broadcastRoomList();
  },
  announce(room, msg, to) {
    sendToPlayers(room, to || room.players.keys(), 'announce', msg);
  },
  empty(room) {
    rooms.delete(room.id);
    broadcastRoomList();
  },
};

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

io.on('connection', (socket) => {
  const handle = (event, fn) => {
    socket.on(event, (data, ack) => {
      if (typeof data === 'function') { ack = data; data = {}; }
      const reply = typeof ack === 'function' ? ack : () => {};
      try {
        fn(data && typeof data === 'object' ? data : {}, reply);
      } catch (err) {
        console.error(`[${event}]`, err);
        reply({ ok: false, error: 'Sunucuda bir hata oluştu.' });
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

  handle('room:create', (data, reply) => {
    const name = cleanText(data.name, 16);
    const roomName = cleanText(data.roomName, 24);
    if (name.length < 2) return reply({ ok: false, error: 'Kullanıcı adı en az 2 karakter olmalı.' });
    if (roomName.length < 3) return reply({ ok: false, error: 'Oda adı en az 3 karakter olmalı.' });

    leaveCurrent(socket);
    const room = new Room({
      id: makeCode(),
      name: roomName,
      password: cleanText(data.password, 20),
      settings: data.settings || {},
      hooks,
    });
    rooms.set(room.id, room);
    const playerId = crypto.randomUUID();
    const token = crypto.randomBytes(18).toString('hex');
    room.addPlayer(playerId, name, token);
    bind(socket, room, playerId);
    reply({ ok: true, roomId: room.id, token });
  });

  handle('room:join', (data, reply) => {
    const room = rooms.get(cleanCode(data.roomId));
    if (!room) return reply({ ok: false, error: 'Oda bulunamadı. Kapanmış olabilir.' });
    if (room.password && cleanText(data.password, 20) !== room.password) {
      return reply({ ok: false, error: 'Oda şifresi yanlış.' });
    }
    const name = cleanText(data.name, 16);
    if (name.length < 2) return reply({ ok: false, error: 'Kullanıcı adı en az 2 karakter olmalı.' });

    const playerId = crypto.randomUUID();
    const token = crypto.randomBytes(18).toString('hex');
    const error = room.addPlayer(playerId, name, token);
    if (error) return reply({ ok: false, error });
    leaveCurrent(socket);
    bind(socket, room, playerId);
    reply({ ok: true, roomId: room.id, token });
  });

  handle('session:resume', (data, reply) => {
    const room = rooms.get(cleanCode(data.roomId));
    const player = room && room.findByToken(String(data.token || ''));
    if (!player) return reply({ ok: false });
    bind(socket, room, player.id);
    reply({ ok: true, roomId: room.id });
  });

  handle('room:leave', (data, reply) => {
    leaveCurrent(socket);
    reply({ ok: true });
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
  act('hunter:shoot', ({ room, player }, data) => room.shoot(player.id, String(data.targetId || '')));
  act('room:settings', ({ room, player }, data) => room.updateSettings(player.id, data.settings || {}));
  act('player:look', ({ room, player }, data) => room.setLook(player.id, data));

  act('player:move', ({ room, player }, data) => {
    const now = Date.now();
    if (now - (socket.data.lastMove || 0) < 120) return null;
    socket.data.lastMove = now;
    return room.move(player.id, data.x, data.y);
  });
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
    return null;
  });

  socket.on('disconnect', () => {
    const c = ctx(socket);
    if (c) c.room.disconnect(c.player.id);
  });
});

function lanAddresses() {
  return Object.values(os.networkInterfaces())
    .flat()
    .filter((i) => i && i.family === 'IPv4' && !i.internal)
    .map((i) => i.address);
}

server.listen(PORT, () => {
  console.log(`Vampir Köylü sunucusu çalışıyor.`);
  console.log(`  Bu bilgisayardan:     http://localhost:${PORT}`);
  for (const ip of lanAddresses()) {
    console.log(`  Aynı Wi-Fi'dakiler:   http://${ip}:${PORT}`);
  }
});
