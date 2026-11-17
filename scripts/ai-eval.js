#!/usr/bin/env node
'use strict';

// Akıllı bot değerlendirme betiği (YALNIZCA geliştirme; sunucu ve testler kullanmaz).
//
//   node scripts/ai-eval.js [--out DIR] [--only 01,06] [--list]          anahtarsız: her senaryo için system.txt, user.txt, expect.md yazar
//   node scripts/ai-eval.js --n 5 [--only ...]                           anahtarla: her senaryoyu N kez gerçek modele sorar, denetler, report.md yazar
//   node scripts/ai-eval.js --mock [--only ...]                          anahtarsız boru hattı denemesi: sahte modelle aynı rapor (denetim sonuçları anlamsız)
//   node scripts/ai-eval.js --selfplay [--bots 8] [--mock] [--review]    yalnızca botlardan oluşan tek oyun: kamuya açık döküm + son roller + oyun kaydı
//                                                                        (selfplay-record.json); --review: kaydı güçlü modele inceletir (reviews/; bkz. scripts/ai-reviews.js)
//
// Anahtar: ortamdaki ANTHROPIC_API_KEY ya da git'e girmeyen .env.local (yalnızca bu betik okur; AI_BOT_MODEL,
// AI_BOT_EFFORT da buradan verilebilir). Anahtar hiçbir yere yazılmaz. --mock: sahte modelle ve sahte saatle çalışır
// (anahtarsız boru hattı denemesi; --selfplay ile de, aksi halde senaryo raporu). Çıktı klasörü varsayılanı: ./ai-eval-out/ (git'e girmez).

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const { loadEnvLocal } = require('./env-local');

function parseArgs(argv) {
  const a = { n: 1, out: path.join(ROOT, 'ai-eval-out'), only: null, list: false, selfplay: false, mock: false, bots: 8, review: false };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    if (k === '--n') a.n = Math.max(1, Number(argv[++i]) || 1);
    else if (k === '--out') a.out = path.resolve(argv[++i]);
    else if (k === '--only') a.only = String(argv[++i]).split(',').map((s) => s.trim()).filter(Boolean);
    else if (k === '--list') a.list = true;
    else if (k === '--selfplay') a.selfplay = true;
    else if (k === '--mock') a.mock = true;
    else if (k === '--review') a.review = true;
    else if (k === '--bots') a.bots = Math.max(4, Math.min(19, Number(argv[++i]) || 8));
    else if (k === '--help' || k === '-h') a.help = true;
  }
  return a;
}

const write = (file, text) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, text); };

// Anahtarsız / sahte istemci: hiçbir şey göndermez (yalnızca Room'un bot beyni için gerekli).
function dummyClient(aiLib) {
  const { AiClient } = aiLib.client;
  const config = aiLib.config.aiConfig({ ANTHROPIC_API_KEY: 'yok-sahte' });
  return new AiClient({ config, transport: () => new Promise(() => {}), logger: { log() {}, warn() {} } });
}

function realClient(aiLib, env) {
  const config = aiLib.config.aiConfig({
    ...env, AI_TIMEOUT_MS: env.AI_TIMEOUT_MS || '30000', AI_GAME_CALL_LIMIT: '100000', AI_BOT_CALL_LIMIT: '100000', AI_DAILY_CALL_LIMIT: '1000000',
  });
  return new aiLib.client.AiClient({ config, logger: { log() {}, warn: (m) => console.error(m) } });
}

function selectScenarios(all, only) {
  if (!only) return all;
  return all.filter((s) => only.some((o) => s.id === o || s.id.startsWith(`${o}-`) || s.id.startsWith(o)));
}

function turnPrompt(g, turn) {
  return g.prompt(turn.bot, turn.task, { memory: turn.memory || '' });
}

// ---------- anahtarsız: dosyaları yaz ----------

function exportScenarios(scenarios, args, lib) {
  const client = dummyClient(lib.ai);
  let count = 0;
  for (const sc of scenarios) {
    const { g, turns } = sc.build(client);
    const dir = path.join(args.out, sc.id);
    write(path.join(dir, 'system.txt'), lib.prompt.SYSTEM_PROMPT);
    const md = [`# ${sc.id}: ${sc.title}`, '', '## Beklenen davranış', sc.expect, '', '## Turlar ve otomatik denetimler'];
    turns.forEach((t, i) => {
      write(path.join(dir, i === 0 ? 'user.txt' : `user-${i + 1}.txt`), turnPrompt(g, t));
      md.push(`- Tur ${i + 1}: bot **${t.bot}**, görev \`${JSON.stringify({ ...t.task, trigger: t.task.trigger ? '(son satır)' : undefined })}\``
        + `${i === 0 ? '' : ` (istem: user-${i + 1}.txt)`}`);
      for (const c of t.checks) md.push(`  - ${c.soft ? 'soft' : 'HARD'}: ${c.name}`);
      if (t.post) {
        t.post(g, { say: t.placeholder || '(örnek satır)' });   // sonraki turun istemi için yer tutucu satır
      }
    });
    write(path.join(dir, 'expect.md'), `${md.join('\n')}\n`);
    g.destroy();
    count += 1;
  }
  console.log(`${count} senaryo yazıldı: ${args.out}`);
}

// ---------- anahtarla: gerçek model ----------

async function runScenarios(scenarios, args, lib, client) {
  const results = [];
  const started = Date.now();
  for (const sc of scenarios) {
    const runs = [];
    for (let n = 0; n < args.n; n++) {
      const { g, turns, final } = sc.build(client);
      const outs = [];
      const run = { turns: [], final: [] };
      for (const t of turns) {
        const user = turnPrompt(g, t);
        const res = await client.turn({ system: lib.prompt.SYSTEM_PROMPT, user, deadline: Date.now() + 60000, ledger: client.ledger(), botId: `${sc.id}-${t.bot}` });
        const out = res.ok ? res.data : { say: '', vote: '', target: '', poison: '', memory: '', think: '', error: res.reason };
        outs.push(out);
        const checks = res.ok
          ? t.checks.map((c) => { let pass = false; try { pass = Boolean(c.fn(out, { g, turn: t })); } catch (e) { pass = false; } return { name: c.name, soft: Boolean(c.soft), pass }; })
          : [{ name: `model cevabı (${res.reason})`, soft: false, pass: false }];
        run.turns.push({ bot: t.bot, kind: t.task.kind, final: Boolean(t.task.final), out, checks });
        if (t.post && res.ok) { try { t.post(g, out); } catch (e) { /* satır eklenemedi */ } }
      }
      if (final) run.final = final(outs).map((c) => ({ name: c.name, soft: Boolean(c.soft), pass: c.pass }));
      runs.push(run);
      g.destroy();
    }
    results.push({ sc, runs });
    const hardFail = runs.flatMap((r) => [...r.turns.flatMap((t) => t.checks), ...r.final]).filter((c) => !c.soft && !c.pass).length;
    console.log(`${sc.id}: ${hardFail ? `${hardFail} sert denetim kaldı` : 'tamam'}`);
  }
  return { results, seconds: Math.round((Date.now() - started) / 1000) };
}

function reportMd(res, client, args) {
  const L = [];
  const stats = client.stats();
  L.push(`# Akıllı bot değerlendirmesi`, '', `Model: ${client.config.model} · efor: ${client.config.effort} · senaryo başına ${args.n} çalıştırma · ${res.seconds} sn`,
    `Çağrı ${stats.calls} (başarılı ${stats.ok}) · token: girdi ${stats.inputTokens}, önbellek okuma ${stats.cacheReadTokens}, yazma ${stats.cacheWriteTokens}, çıktı ${stats.outputTokens} · maliyet ≈ $${stats.costUsd}`, '');
  let hardTotal = 0; let hardPass = 0; let softTotal = 0; let softPass = 0;
  for (const { runs } of res.results) {
    for (const r of runs) for (const c of [...r.turns.flatMap((t) => t.checks), ...r.final]) {
      if (c.soft) { softTotal += 1; if (c.pass) softPass += 1; } else { hardTotal += 1; if (c.pass) hardPass += 1; }
    }
  }
  L.push(`**Sert denetimler: ${hardPass}/${hardTotal}** · yumuşak: ${softPass}/${softTotal}`, '');
  for (const { sc, runs } of res.results) {
    L.push(`## ${sc.id}: ${sc.title}`, '', `Beklenen: ${sc.expect}`, '');
    runs.forEach((r, i) => {
      L.push(`### Çalıştırma ${i + 1}`);
      for (const t of r.turns) {
        L.push(`- **${t.bot}** (${t.kind}${t.final ? ', son karar' : ''})`);
        if (t.out.error) L.push(`  - HATA: ${t.out.error}`);
        L.push(`  - say: ${JSON.stringify(t.out.say)}`, `  - vote: ${JSON.stringify(t.out.vote)}  target: ${JSON.stringify(t.out.target)}`);
        if (t.out.think) L.push(`  - think: ${t.out.think}`);
        if (t.out.memory) L.push(`  - memory: ${t.out.memory}`);
        for (const c of t.checks) L.push(`  - ${c.pass ? 'ok' : (c.soft ? 'soft-FAIL' : 'FAIL')}: ${c.name}`);
      }
      for (const c of r.final) L.push(`- ${c.pass ? 'ok' : (c.soft ? 'soft-FAIL' : 'FAIL')}: ${c.name}`);
      L.push('');
    });
  }
  return `${L.join('\n')}\n`;
}

// ---------- selfplay ----------

async function selfplay(args, lib, env) {
  const { Room } = require(path.join(ROOT, 'game'));
  let mockT = null;
  let client;
  if (args.mock) {
    const { mock } = require('node:test');
    const M = require(path.join(ROOT, 'test', 'ai-mock.js'));
    mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 1_763_000_000_000 });
    mockT = { mock, M };
    client = M.makeClient(M.mockTransport({ seed: 'selfplay', latency: 900 }));
  } else {
    client = realClient(lib.ai, env);
  }
  const transcript = [];
  let record = null;
  let gameLog = null;
  const room = new Room({
    id: 'KENDI', name: 'Kendi kendine', settings: { nightSec: 15, daySec: 120, revealRoles: true, roleMode: 'random', events: 'some', roles: { gozcu: true, gardiyan: true, cadi: true, avci: true, muhtar: true, soytari: true, deli: true, hirsiz: true, iftiraci: true, temizlikci: true } },
    ai: client,
    hooks: {
      update() {}, empty() {}, finished() {},
      // Oyun sonu kaydı (lib/ai/gamerec.js): sunucudaki incelemeyle aynı kayıt.
      reviewReady: (r, rec) => { record = rec; },
      // Her oyunun tam geçmişi (docs/GAME-LOGS.md): sunucunun sakladığıyla aynı; scripts/game-logs.js --local ile okunur/çözümlenir.
      gameLog: (r, rec) => { gameLog = rec; },
      announce: (r, a, to) => { if (!to) transcript.push(`[${new Date().toISOString().slice(11, 19)}] * ${a.title}: ${a.text}`); },
      chat: (r, rec, m) => { if (m.channel === 'genel') transcript.push(`[${new Date().toISOString().slice(11, 19)}] ${m.from}: ${m.text}`); },
    },
  });
  const names = ['Cem', 'Deniz', 'Eren', 'Ece', 'Fatma', 'Gül', 'Hakan', 'İpek', 'Kaan', 'Leyla', 'Mert', 'Nur', 'Onur', 'Pınar', 'Rıza', 'Selin', 'Tuna', 'Umut', 'Volkan'];
  const ids = [];
  for (let i = 0; i < args.bots; i++) {
    const id = `b${i}`;
    ids.push(id);
    const err = room.addPlayer(id, `Bot ${names[i]}`, { bot: true });
    if (err) throw new Error(err);
  }
  room.hostId = ids[0];
  const err = room.start(ids[0]);
  if (err) throw new Error(err);
  const t0 = Date.now();
  const roles = new Map([...room.players.values()].map((p) => [p.name, p.role]));
  if (mockT) {
    for (let i = 0; i < 20000 && room.phase !== 'ended'; i++) { mockT.mock.timers.tick(250); await new Promise((r) => setImmediate(r)); }
  } else {
    while (room.phase !== 'ended' && Date.now() - t0 < 25 * 60 * 1000) await new Promise((r) => setTimeout(r, 1000));
  }
  const stats = client.stats();
  const out = [`# Kendi kendine oyun (${args.bots} bot${args.mock ? ', SAHTE MODEL' : ''})`, '',
    `Sonuç: ${room.phase === 'ended' ? `bitti, kazanan ${room.winner}` : `bitmedi (${room.phase})`}, ${room.round} tur.`,
    `Çağrı ${stats.calls} (başarılı ${stats.ok}), maliyet ≈ $${stats.costUsd}, hatalar ${JSON.stringify(stats.failures)}`, '',
    '## Son roller', ...[...roles].map(([n, r]) => `- ${n}: ${lib.roles.LABEL[r] || r}${room.players.get([...room.players.values()].find((p) => p.name === n).id).alive ? '' : ' (öldü)'}`),
    '', '## Kamuya açık döküm', ...transcript];
  const file = path.join(args.out, args.mock ? 'selfplay-mock.md' : 'selfplay.md');
  write(file, `${out.join('\n')}\n`);
  room.destroy();
  if (mockT) mockT.mock.timers.reset();
  console.log(`Döküm yazıldı: ${file}`);
  if (gameLog) {
    const logFile = path.join(args.out, args.mock ? 'selfplay-gamelog-mock.json' : 'selfplay-gamelog.json');
    write(logFile, JSON.stringify(gameLog));
    console.log(`Oyun geçmişi yazıldı: ${logFile} (okunur döküm için: node scripts/game-logs.js --local ${path.relative(process.cwd(), logFile)})`);
  }
  if (record) {
    const recFile = path.join(args.out, args.mock ? 'selfplay-record-mock.json' : 'selfplay-record.json');
    write(recFile, JSON.stringify(record));
    console.log(`Oyun kaydı yazıldı: ${recFile} (${JSON.stringify(record).length} karakter; yeniden incelemek için: node scripts/ai-reviews.js --local ${path.relative(process.cwd(), recFile)})`);
  }
  if (args.review) {
    if (!record) { console.error('Oyun kaydı yok (oyun bitmedi ya da hiç model çağrısı başarılı olmadı); inceleme atlandı.'); return; }
    const { reviewLocal, printSummary } = require('./ai-reviews');
    const transport = args.mock ? mockReviewTransport : null;
    const reviewEnv = args.mock ? { ...env, ANTHROPIC_API_KEY: env.ANTHROPIC_API_KEY || 'yok-sahte' } : env;
    const res = await reviewLocal(record, reviewEnv, path.join(args.out, 'reviews'), { label: args.mock ? 'selfplay-mock' : 'selfplay', transport });
    printSummary(res);
    console.log(`İnceleme yazıldı: ${res.file}`);
  }
}

// --mock --review: ağ yok; sabit bir inceleme döner (yalnızca boru hattı denemesi).
function mockReviewTransport() {
  const review = {
    summary: 'Sahte inceleme (boru hattı denemesi).',
    mistakes: [{ bot: 'Bot Cem', day_or_night: 'gün 1', quote: 'Bence acele etmeyelim.', what_was_wrong: 'Örnek hata.', rule_violated_or_missing: 'Evidence scale', severity: 'low', suggested_rule_change: 'Örnek kural.', suggested_scenario: { title: 'ornek', setup: 'kurulum', expected: 'beklenen' } }],
    good_moves: [],
  };
  return Promise.resolve({ stop_reason: 'end_turn', content: [{ type: 'text', text: JSON.stringify(review) }], usage: { input_tokens: 1000, output_tokens: 200 } });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(3, 14).join('\n')); return; }
  const env = loadEnvLocal(process.env);
  const lib = {
    ai: { client: require(path.join(ROOT, 'lib/ai/client')), config: require(path.join(ROOT, 'lib/ai/config')) },
    prompt: require(path.join(ROOT, 'lib/ai/prompt')),
    roles: require(path.join(ROOT, 'lib/ai/roles')),
  };
  const { SCENARIOS } = require('./ai-scenarios');
  const scenarios = selectScenarios(SCENARIOS, args.only);
  if (args.list) { for (const s of SCENARIOS) console.log(`${s.id}  ${s.title}`); return; }
  if (args.selfplay) {
    if (!args.mock && !env.ANTHROPIC_API_KEY) { console.error('--selfplay için ANTHROPIC_API_KEY (ortam ya da .env.local) gerekli; boru hattını denemek için --mock kullanın.'); process.exitCode = 1; return; }
    await selfplay(args, lib, env);
    return;
  }
  if (!env.ANTHROPIC_API_KEY && !args.mock) {
    exportScenarios(scenarios, args, lib);
    return;
  }
  let client;
  if (args.mock) {
    // Boru hattı denemesi: sahte model (rastgele cevaplar; denetimler anlamlı değildir).
    const M = require(path.join(ROOT, 'test', 'ai-mock.js'));
    client = M.makeClient(M.mockTransport({ seed: 'eval', latency: 0 }));
  } else client = realClient(lib.ai, env);
  const res = await runScenarios(scenarios, args, lib, client);
  const file = path.join(args.out, 'report.md');
  write(file, reportMd(res, client, args));
  console.log(`Rapor yazıldı: ${file}`);
}

main().catch((e) => { console.error(e && e.stack ? e.stack : e); process.exit(1); });
