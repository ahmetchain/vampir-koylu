#!/usr/bin/env node
'use strict';

// Her oyunun tam geçmişini (lib/ai/gamerec.js, docs/GAME-LOGS.md) sunucudan indirir ve istenirse güçlü bir modele
// çözümlettirir (YALNIZCA geliştirme; sunucu bu dosyayı kullanmaz).
//
//   node scripts/game-logs.js                       yeni oyun geçmişlerini çeker (REVIEW_URL + ADMIN_TOKEN)
//   node scripts/game-logs.js --all                 daha önce çekilenleri de yeniden çeker
//   node scripts/game-logs.js --analyze [id ...]    verilen oyunları (yoksa en yenisini) Türkçe çözümlettirir -> analysis-<id>.md
//   node scripts/game-logs.js --local FILE          yerel bir geçmiş JSON'unu markdown'a çevirir (--analyze ile çözümletir)
//   [--out DIR] [--model claude-sonnet-5-5] [--effort low|medium|high] [--limit N]
//
// ADMIN_TOKEN ve REVIEW_URL (yayındaki sitenin adresi) ortamdan ya da git'e girmeyen .env.local dosyasından okunur;
// hiçbir yere yazdırılmaz. Çözümleme için ANTHROPIC_API_KEY gerekir. Çıktı (git'e girmez): ai-eval-out/game-logs/
//   json/<id>.json   ham geçmiş      <tarih>-<oda>-<id>.md   okunur döküm      analysis-<id>.md   model çözümlemesi

const fs = require('fs');
const path = require('path');
const { loadEnvLocal, ROOT } = require('./env-local');
const { logMarkdown } = require('../lib/ai/gamelog-format');

const write = (file, text) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, text); };
const safeName = (s) => String(s || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 40) || 'x';

function parseArgs(argv) {
  const a = { out: path.join(ROOT, 'ai-eval-out', 'game-logs'), all: false, analyze: false, ids: [], local: null, model: '', effort: '', limit: 500 };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    if (k === '--out') a.out = path.resolve(argv[++i]);
    else if (k === '--all') a.all = true;
    else if (k === '--local') a.local = path.resolve(argv[++i]);
    else if (k === '--model') a.model = String(argv[++i] || '');
    else if (k === '--effort') a.effort = String(argv[++i] || '');
    else if (k === '--limit') a.limit = Math.max(1, Number.parseInt(argv[++i], 10) || 500);
    else if (k === '--analyze') {
      a.analyze = true;
      while (argv[i + 1] && !argv[i + 1].startsWith('--')) a.ids.push(argv[++i]);
    } else if (k === '--help' || k === '-h') a.help = true;
  }
  return a;
}

function fileFor(meta) {
  return `${String(meta.date || '').slice(0, 10)}-${safeName(meta.room)}-${safeName(meta.id)}.md`;
}

// Sunucudan gelen { id, date, room, hasReview, reviewId, record } kaydını yazar (json + md).
function saveLog(outDir, full) {
  write(path.join(outDir, 'json', `${safeName(full.id)}.json`), JSON.stringify(full));
  const file = path.join(outDir, fileFor(full));
  write(file, logMarkdown(full.record, { reviewId: full.reviewId }));
  return file;
}

// ---------- sunucudan çekme ----------

async function apiGet(base, token, pathname) {
  const res = await fetch(`${base}${pathname}`, { headers: { Authorization: `Bearer ${token}` } });
  if (res.status === 404) throw new Error('Yönetici adresi kapalı ya da sunucu bu sürümde değil (404; sunucuda ADMIN_TOKEN tanımlı mı?).');
  if (res.status === 401) throw new Error('ADMIN_TOKEN reddedildi (401).');
  if (res.status === 429) throw new Error('Çok fazla istek (429); biraz bekleyin.');
  if (!res.ok) throw new Error(`Sunucu cevabı: ${res.status}`);
  return res.json();
}

function remote(env) {
  const token = String(env.ADMIN_TOKEN || '').trim();
  const base = String(env.REVIEW_URL || '').trim().replace(/\/+$/, '');
  if (!token || !base) throw new Error('ADMIN_TOKEN ve REVIEW_URL gerekli (ortam değişkeni ya da .env.local).');
  return { token, base };
}

async function fetchOne(env, id, outDir) {
  const { token, base } = remote(env);
  const full = await apiGet(base, token, `/api/admin/game-logs/${encodeURIComponent(id)}`);
  return { full: full.log, file: saveLog(outDir, full.log) };
}

async function fetchRemote(args, env) {
  const { token, base } = remote(env);
  const statePath = path.join(args.out, '.state.json');
  let state = { since: 0 };
  try { state = JSON.parse(fs.readFileSync(statePath, 'utf8')); } catch { /* ilk çalıştırma */ }
  const since = args.all ? 0 : Number(state.since) || 0;
  const list = await apiGet(base, token, `/api/admin/game-logs?limit=${args.limit}&since=${since}`);
  const rows = (list.logs || []).slice().sort((a, b) => a.createdAt - b.createdAt);
  let newest = Number(state.since) || 0;
  for (const row of rows) {
    const full = await apiGet(base, token, `/api/admin/game-logs/${encodeURIComponent(row.id)}`);
    saveLog(args.out, full.log);
    newest = Math.max(newest, row.createdAt);
  }
  write(statePath, JSON.stringify({ since: newest }));
  console.log(`${rows.length} yeni oyun geçmişi çekildi -> ${args.out}`);
  return rows;
}

// ---------- model çözümlemesi ----------

const ANALYSIS_SYSTEM = (rules) => `You are a senior game designer and QA analyst for "Vampir Köylü", a Turkish social-deduction party game (Werewolf/Mafia style, played in the browser). You receive the complete history of ONE finished (or abandoned) game as a Turkish markdown transcript: the header with every player's true role and result, then a day-by-day timeline with the public log, all chat (channels: genel / vampir / ölüler), votes with changes over time, night picks and results, private results marked "(yalnızca X gördü)" (only that player saw it), and, for smart bots (LLM-driven players), indented "bot notu" lines with their private notes (think / memory / fallbacks). You see the full truth; the players did not. Judge each player by what it could know at that moment.

Some players are humans; the others are bots: "bot" (simple random bots) and "akıllı bot" (smart, LLM-driven bots that read the chat and talk like players).

Write your analysis in TURKISH, as markdown, with exactly these sections:
## Ne oldu
A short chronological account of the game (who died when and how, who claimed what, how it ended) in 6-12 sentences.
## Dönüm noktaları
The 3-6 moments that decided the outcome, each with the time/phase and why it mattered.
## Botlar nasıl oynadı
How the smart bots played overall: reasoning quality, bluffing, role claims, voting, whether they stayed consistent with their private notes. Name concrete bots and quote short lines.
## İnsanlar botlara ne söyledi, botlar nasıl cevap verdi
Everything the humans said TO the bots (questions, accusations, persuasion attempts, jokes) and how each bot answered: did it answer at all, was it on topic, was it fooled or convincing, was the Turkish natural. Quote exact lines. If there were no humans or they said nothing to the bots, say so.
## Sorunlar
Real problems only, most severe first: wrong deductions, rule misunderstandings (a bot or human asking a role for information it cannot have, misreading the game rules), bot behaviour that leaks hidden information, contradictions, repeated or robotic lines, fallbacks to random moves, odd game outcomes that look like bugs (rule or timing bugs in the game itself). For each: who, when, the quote or note that shows it, why it is a problem.
## İyileştirme önerileri
Concrete, actionable suggestions, split into: (a) bot rule-book changes (imperative, usable wording for the section it belongs to), (b) game rules / UI / timing changes if the game itself caused trouble, (c) regression scenarios worth adding (title, setup, what a correct bot must do). Prefer fewer, sharper items over a long list.

Be specific and honest; do not pad. If the game was abandoned or very short, say what can and cannot be concluded. Cite times as mm:ss as in the transcript.

# Reference: the rule book the smart bots were given (to judge them by, and to say where it is wrong, vague or missing)
<rule_book>
${rules}
</rule_book>`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Tek oyun geçmişini çözümletir. { ok, text, usage, cost, model } döner; hata atar (anlaşılır mesajla).
async function analyzeLog(record, md, env, { transport = null, model = '', effort = '', log = () => {} } = {}) {
  const { reviewConfig } = require('../lib/ai/review');
  const { sdkTransport, classify } = require('../lib/ai/client');
  const { costOf, PRICES } = require('../lib/ai/config');
  const { SYSTEM_PROMPT } = require('../lib/ai/prompt');
  const cfg = reviewConfig({ ...env, ...(model ? { AI_REVIEW_MODEL: model } : {}), ...(effort ? { AI_REVIEW_EFFORT: effort } : {}) });
  const useTransport = transport || (cfg.apiKey ? sdkTransport(cfg.apiKey) : null);
  if (!useTransport) throw new Error('Çözümleme için ANTHROPIC_API_KEY gerekli.');
  const params = {
    model: cfg.model,
    max_tokens: 16000,
    system: [{ type: 'text', text: ANALYSIS_SYSTEM(SYSTEM_PROMPT) }],
    messages: [{ role: 'user', content: `Analyse this game. Transcript follows.\n<game_transcript>\n${md}\n</game_transcript>` }],
    output_config: { effort: cfg.effort },
  };
  let res = null;
  for (let attempt = 1; ; attempt++) {
    try {
      res = await useTransport(params, { timeout: 300000 });
      break;
    } catch (err) {
      // Bu bilgisayarda TLS ara katmanı bazen bağlantıyı bozar (SELF_SIGNED_CERT_IN_CHAIN): birkaç kez dene.
      const why = classify(err, useTransport.errors);
      if (why === 'auth') throw new Error(`ANTHROPIC_API_KEY reddedildi (${err && err.status ? err.status : 'auth'}): anahtar geçersiz ya da iptal edilmiş.`);
      if (why !== 'network' || attempt >= 6) throw new Error(`Model isteği başarısız (${why}${err && err.status ? ` ${err.status}` : ''}).`);
      log(`  ağ hatası, yeniden deneniyor (${attempt}/5)...`);
      await sleep(1500 * attempt);
    }
  }
  const usage = res && res.usage ? res.usage : {};
  const prices = PRICES[cfg.model] || PRICES['claude-sonnet-5-5'];
  const cost = costOf(usage, prices);
  if (!res || !Array.isArray(res.content)) throw new Error('Model cevabı okunamadı.');
  if (res.stop_reason === 'refusal') throw new Error(`Model reddetti (maliyet ≈ $${cost.toFixed(4)}).`);
  const text = res.content.filter((b) => b && b.type === 'text').map((b) => b.text).join('').trim();
  if (!text) throw new Error(`Model boş cevap verdi (${res.stop_reason}; maliyet ≈ $${cost.toFixed(4)}).`);
  return { ok: true, text, usage, cost, model: cfg.model, truncated: res.stop_reason === 'max_tokens' };
}

function analysisFile(outDir, id) { return path.join(outDir, `analysis-${safeName(id)}.md`); }

async function runAnalysis(args, env, items, opts = {}) {
  let total = 0;
  for (const { id, record, md } of items) {
    console.log(`Çözümleniyor: ${id} (${md.length} karakter)...`);
    const res = await analyzeLog(record, md, env, { model: args.model, effort: args.effort, log: console.log, ...opts });
    const file = analysisFile(args.out, id);
    write(file, `# Oyun ${id} çözümlemesi\n\n- Model: ${res.model} · maliyet ≈ $${res.cost.toFixed(4)} · token: girdi=${res.usage.input_tokens || 0} çıktı=${res.usage.output_tokens || 0}${res.truncated ? ' · UYARI: çıktı sınıra takıldı' : ''}\n\n${res.text}\n`);
    total += res.cost;
    console.log(`  Yazıldı: ${file}`);
    console.log(`  Maliyet ≈ $${res.cost.toFixed(4)} (model ${res.model}, girdi=${res.usage.input_tokens || 0} önbellek_yazma=${res.usage.cache_creation_input_tokens || 0} çıktı=${res.usage.output_tokens || 0})`);
  }
  if (items.length > 1) console.log(`Toplam çözümleme maliyeti ≈ $${total.toFixed(4)}`);
  return total;
}

// Yerel dosyalardan (json/<id>.json) yükler; yoksa sunucudan çeker.
async function loadItem(args, env, id) {
  const jsonFile = path.join(args.out, 'json', `${safeName(id)}.json`);
  let full = null;
  try { full = JSON.parse(fs.readFileSync(jsonFile, 'utf8')); } catch { /* sunucudan */ }
  if (!full) full = (await fetchOne(env, id, args.out)).full;
  return { id: full.id, record: full.record, md: logMarkdown(full.record, { reviewId: full.reviewId }) };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(3, 14).join('\n')); return; }
  const env = loadEnvLocal(process.env, { main: true });
  if (args.local) {
    const raw = JSON.parse(fs.readFileSync(args.local, 'utf8'));
    const record = raw.record && raw.record.events ? raw.record : raw;
    const md = logMarkdown(record, {});
    const file = path.join(args.out, `local-${safeName(record.id)}.md`);
    write(file, md);
    console.log(`Yazıldı: ${file}`);
    if (args.analyze) await runAnalysis(args, env, [{ id: record.id, record, md }]);
    return;
  }
  let fetched = [];
  if (!args.analyze || !args.ids.length) fetched = await fetchRemote(args, env);
  if (args.analyze) {
    let ids = args.ids;
    if (!ids.length) {
      // Yeni çekilenlerin en yenisi; hiç yoksa yerel klasördeki en yeni geçmiş.
      const newest = fetched.length ? fetched[fetched.length - 1].id : null;
      const dir = path.join(args.out, 'json');
      const local = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => ({ f, t: fs.statSync(path.join(dir, f)).mtimeMs })).sort((a, b) => b.t - a.t) : [];
      ids = [newest || (local[0] && local[0].f.replace(/\.json$/, ''))].filter(Boolean);
      if (!ids.length) throw new Error('Çözümlenecek oyun geçmişi yok.');
    }
    const items = [];
    for (const id of ids) items.push(await loadItem(args, env, id));
    await runAnalysis(args, env, items);
  }
}

if (require.main === module) main().catch((e) => { console.error(e && e.message ? e.message : e); process.exit(1); });

module.exports = { parseArgs, saveLog, fileFor, fetchRemote, fetchOne, analyzeLog, runAnalysis, ANALYSIS_SYSTEM, analysisFile };
