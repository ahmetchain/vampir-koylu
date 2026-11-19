'use strict';

// Performans/maliyet iyileştirmeleri: (1) akıllı bot sistem istemi önbelleğinin oyun başında ısıtılması
// (soğuk önbellekte ilk gecenin eşzamanlı çağrıları önbelleği tekrar tekrar yazmasın), (2) sunucunun aynı
// soketine değişmemiş durumu (serverNow hariç) tekrar göndermemesi.
const test = require('node:test');
const assert = require('node:assert/strict');
const { mockTransport, makeClient, advance, smartRoom, flush } = require('./ai-mock');
const { SYSTEM_PROMPT } = require('../lib/ai/prompt');
const { startServer, register, client, connected, emit, wait, waitFor } = require('./helpers');

const NOW = 1_763_000_000_000;

test('ısıtma: gerçek turla aynı önek (model, sistem, output_config), max_tokens 1; sıcakken tekrar gönderilmez', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  const tr = mockTransport({ latency: 0 });
  const ai = makeClient(tr);
  const ledger = ai.ledger();
  const done = ai.warm({ system: 'SABIT', ledger });
  assert.equal(ai.warm({ system: 'SABIT', ledger }), done, 'süren ısıtma paylaşılır');
  await advance(t, 10, 5);
  assert.equal(await done, true);
  assert.equal(tr.calls.length, 1);
  const turn = ai.turn({ system: 'SABIT', user: '<task>\nNIGHT 1. pick (allowed: Ali)\n</task>', deadline: Date.now() + 5000, ledger, botId: 'b' });
  await advance(t, 10, 5);
  assert.equal((await turn).ok, true);
  const [w, real] = tr.calls.map((c) => c.params);
  assert.equal(w.max_tokens, 1);
  assert.deepEqual({ model: w.model, system: w.system, output_config: w.output_config }, { model: real.model, system: real.system, output_config: real.output_config });
  assert.equal(ledger.summary().calls, 1, 'ısıtma oyun çağrı bütçesinden düşmez');
  assert.ok(ledger.summary().costUsd > 0, 'ısıtmanın gideri deftere yazılır');
  assert.equal(ai.stats().warmCalls, 1);
  // Sıcak (son yanıt 4 dk'dan yeni): hiçbir şey gönderilmez.
  assert.equal(await ai.warm({ system: 'SABIT' }), false);
  assert.equal(tr.calls.length, 2);
  // 4 dk sessizlik: yeniden ısıtılır.
  t.mock.timers.tick(4 * 60 * 1000 + 1);
  const again = ai.warm({ system: 'SABIT' });
  await advance(t, 10, 5);
  assert.equal(await again, true);
  assert.equal(tr.calls.length, 3);
});

test('ısıtma: 400 dönerse süreç boyunca kapanır; diğer hatalar ve kapalı istemci sessizce false', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: NOW });
  let mode = 'error';
  const tr = mockTransport({ latency: 0, mode: () => mode });
  const ai = makeClient(tr);
  const p1 = ai.warm({ system: 'S' });
  await advance(t, 10, 5);
  assert.equal(await p1, false);
  assert.equal(ai.warmOff, false);
  // 400: SDK hata sınıfı yoksa durum koduyla sınıflanır.
  const bad = makeClient(Object.assign(() => Promise.reject(Object.assign(new Error('bad'), { status: 400 })), {}));
  bad.logger = { log() {}, warn() {} };
  assert.equal(await bad.warm({ system: 'S' }), false);
  assert.equal(bad.warmOff, true);
  assert.equal(await bad.warm({ system: 'S' }), false);
  assert.equal(bad.active, 0, 'eşzamanlılık yeri geri verildi');
  mode = 'ok';
  const off = makeClient(tr, { AI_BOTS: 'off' });
  assert.equal(await off.warm({ system: 'S' }), false);
});

test('oyun başı: soğuk önbellekte rol kartları sırasında tek ısıtma, ilk gece çağrıları önbelleği okur', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout', 'setInterval', 'Date'], now: NOW });
  const base = mockTransport({ seed: 'isit', latency: 2500 });
  const times = [];
  const tr = (params, opts) => {
    const rec = { start: Date.now(), end: null };
    times.push(rec);
    const p = base(params, opts);
    p.then(() => { rec.end = Date.now(); }, () => {});
    return p;
  };
  tr.calls = base.calls;
  const ai = makeClient(tr);
  const { room } = smartRoom({ seed: 'isit', bots: 9, client: ai, settings: { roles: { doktor: true, kahin: true, gozcu: true } } });
  room.start('h1');
  await flush();
  assert.equal(room.phase, 'reveal');
  assert.equal(tr.calls.length, 1, 'rol kartları sırasında yalnızca ısıtma');
  assert.equal(tr.calls[0].params.max_tokens, 1);
  assert.equal(tr.calls[0].system, SYSTEM_PROMPT);
  await advance(t, 20000);
  const night = tr.calls.slice(1);
  assert.ok(night.length >= 2, `ilk gece çağrıları: ${night.length}`);
  // Önbellek girdisi ilk yanıtla okunur olur: ilk gecenin bütün çağrıları ısıtmanın yanıtından SONRA başladı.
  assert.ok(times[0].end !== null);
  for (const x of times.slice(1)) assert.ok(x.start >= times[0].end, 'gece çağrısı ısıtma bitmeden başladı');
  // Aynı süreçte hemen ikinci oyun: önbellek sıcak, ısıtma yok.
  const before = tr.calls.filter((c) => c.params.max_tokens === 1).length;
  room.backToLobby('h1');
  room.start('h1');
  await flush();
  assert.equal(tr.calls.filter((c) => c.params.max_tokens === 1).length, before);
  room.destroy();
});

test('durum yayını: değişmeyen görünüm aynı sokete tekrar gönderilmez; koltuğa yeniden bağlanan tam durum alır', async (t) => {
  const srv = await startServer(t);
  const host = await connected(client(srv, (await register(srv, 'Ahmet')).token));
  const other = await connected(client(srv, (await register(srv, 'Bora')).token));
  const created = await emit(host, 'room:create', { roomName: 'Oda' });
  await emit(other, 'room:join', { roomId: created.roomId });
  await waitFor(() => host.lastState && host.lastState.players.length === 2);
  const room = srv.rooms.get(created.roomId);
  // Odadaki bir değişiklik olmadan durum yeniden yayınlanırsa (ör. evre zamanlayıcısı) kimseye bir şey gitmez.
  const n0 = host.states;
  const m0 = other.states;
  srv.hooks.update(room);
  await wait(100);
  assert.equal(host.states, n0);
  assert.equal(other.states, m0);
  // Yalnızca birinin görünümü değişirse yalnızca o alır: Bora'nın notu (me.notes) yalnızca Bora'ya görünür.
  room.players.get(other.lastState.me.id).notes = ['not'];
  srv.hooks.update(room);
  await waitFor(() => other.states === m0 + 1);
  await wait(100);
  assert.equal(host.states, n0);
  // Lobide yürüme herkese gider (konum herkese görünür).
  await emit(host, 'player:move', { x: 0.3, y: 0.3 });
  await waitFor(() => other.states === m0 + 2 && host.states === n0 + 1);
  // Aynı koltuğa yeniden bağlanan (aynı) soket her zaman tam durum alır, görünüm değişmese bile.
  const k0 = host.states;
  const res = await emit(host, 'session:resume', { roomId: created.roomId });
  assert.equal(res.ok, true);
  // Başka sekme: aynı hesabın yeni soketi koltuğu devralır ve durum alır.
  const login = await (await fetch(`${srv.url}/api/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: 'Ahmet', password: 'gizli123' }) })).json();
  const tab2 = await connected(client(srv, login.token));
  const r2 = await emit(tab2, 'session:resume', { roomId: created.roomId });
  assert.equal(r2.ok, true);
  await waitFor(() => tab2.states >= 1);
  assert.equal(tab2.lastState.me.name, 'Ahmet');
  // Eski sekme koltuğu geri alır: görünüm aynı olsa da yeniden tam durum alır.
  const back = await emit(host, 'session:resume', { roomId: created.roomId });
  assert.equal(back.ok, true);
  await waitFor(() => host.states > k0, 3000, 'geri bağlanan sekme durum almadı');
});

test('durum yayını: oyunda hayalet yürüyüşü yalnızca ölülere gider', async (t) => {
  const srv = await startServer(t);
  const host = await connected(client(srv, (await register(srv, 'Ahmet')).token));
  const ghost = await connected(client(srv, (await register(srv, 'Bora')).token));
  const created = await emit(host, 'room:create', { roomName: 'Oda' });
  await emit(ghost, 'room:join', { roomId: created.roomId });
  for (let i = 0; i < 4; i++) await emit(host, 'room:addBot');
  assert.equal((await emit(host, 'game:start')).ok, true);
  await waitFor(() => ghost.lastState && ghost.lastState.room.phase === 'reveal');
  const room = srv.rooms.get(created.roomId);
  room.players.get(ghost.lastState.me.id).alive = false;   // yalnızca bu test için: Bora ölü (hayalet)
  srv.hooks.update(room);
  await waitFor(() => ghost.lastState.me.alive === false);
  await wait(100);
  const h0 = host.states;
  const g0 = ghost.states;
  for (let i = 0; i < 3; i++) {
    assert.equal((await emit(ghost, 'player:move', { x: 0.3 + i * 0.05, y: 0.3 })).ok, true);
    await wait(150);
  }
  await waitFor(() => ghost.states >= g0 + 3, 3000, 'hayalet kendi konumunu almadı');
  assert.equal(host.states, h0, 'yaşayan oyuncuya değişmeyen durum gitti');
});
