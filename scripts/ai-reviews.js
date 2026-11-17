#!/usr/bin/env node
'use strict';

// Oyun sonu bot incelemelerini (lib/ai/review.js) geliştirici için okunur dosyalara çevirir (YALNIZCA geliştirme).
//
//   node scripts/ai-reviews.js                 yeni incelemeleri sunucudan çeker (REVIEW_URL + ADMIN_TOKEN)
//   node scripts/ai-reviews.js --all           daha önce çekilenleri de yeniden çeker
//   node scripts/ai-reviews.js --local FILE    yerel bir oyun kaydını (ai-eval --selfplay çıktısı: selfplay-record.json) inceletir
//                                              (ANTHROPIC_API_KEY gerekir; AI_REVIEW_MODEL ile model seçilebilir)
//   node scripts/ai-reviews.js --rebuild       yalnızca senaryo taslaklarını eldeki incelemelerden yeniden yazar
//   [--out DIR]                                varsayılan: ./ai-eval-out/reviews/ (git'e girmez)
//
// ADMIN_TOKEN ve REVIEW_URL (yayındaki sitenin adresi) ortamdan ya da git'e girmeyen .env.local dosyasından okunur;
// hiçbir yere yazdırılmaz. Çıktı: <tarih>-<oda>-<id>.md (her inceleme), scenario-drafts.md (benzer hatalar gruplu,
// en sık olan önce), json/<id>.json (ham veri, kayıtla birlikte).

const fs = require('fs');
const path = require('path');
const { loadEnvLocal, ROOT } = require('./env-local');
const { reviewMarkdown, draftsMarkdown } = require('../lib/ai/review-format');

const write = (file, text) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, text); };

function parseArgs(argv) {
  const a = { out: path.join(ROOT, 'ai-eval-out', 'reviews'), all: false, local: null, rebuild: false };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    if (k === '--out') a.out = path.resolve(argv[++i]);
    else if (k === '--all') a.all = true;
    else if (k === '--local') a.local = path.resolve(argv[++i]);
    else if (k === '--rebuild') a.rebuild = true;
    else if (k === '--help' || k === '-h') a.help = true;
  }
  return a;
}

function safeName(s) { return String(s || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 40) || 'x'; }

function fileFor(meta) {
  return `${String(meta.date || '').slice(0, 10)}-${safeName(meta.room)}-${safeName(meta.id)}.md`;
}

// Kaydedilmiş bir incelemeyi (json) yazar ve md dosyasını üretir.
function saveReview(outDir, full) {
  const meta = { id: full.id, date: full.date, room: full.room, model: full.model, cost: full.cost };
  write(path.join(outDir, 'json', `${safeName(full.id)}.json`), JSON.stringify(full));
  const file = path.join(outDir, fileFor(meta));
  write(file, reviewMarkdown(meta, full.review));
  return file;
}

function rebuildDrafts(outDir) {
  const dir = path.join(outDir, 'json');
  const reviews = [];
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json'))) {
      try { reviews.push(JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))); } catch { /* bozuk dosya atlanır */ }
    }
  }
  reviews.sort((a, b) => String(a.date).localeCompare(String(b.date)));
  const file = path.join(outDir, 'scenario-drafts.md');
  write(file, draftsMarkdown(reviews));
  return { file, count: reviews.length };
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

async function fetchRemote(args, env) {
  const token = String(env.ADMIN_TOKEN || '').trim();
  const base = String(env.REVIEW_URL || '').trim().replace(/\/+$/, '');
  if (!token || !base) throw new Error('ADMIN_TOKEN ve REVIEW_URL gerekli (ortam değişkeni ya da .env.local).');
  const statePath = path.join(args.out, '.state.json');
  let state = { since: 0 };
  try { state = JSON.parse(fs.readFileSync(statePath, 'utf8')); } catch { /* ilk çalıştırma */ }
  const since = args.all ? 0 : Number(state.since) || 0;
  const list = await apiGet(base, token, `/api/admin/ai-reviews?limit=200&since=${since}`);
  const rows = (list.reviews || []).slice().sort((a, b) => a.createdAt - b.createdAt);
  let newest = Number(state.since) || 0;
  let n = 0;
  for (const row of rows) {
    const full = await apiGet(base, token, `/api/admin/ai-reviews/${encodeURIComponent(row.id)}`);
    saveReview(args.out, full.review);
    newest = Math.max(newest, row.createdAt);
    n += 1;
  }
  write(statePath, JSON.stringify({ since: newest }));
  console.log(`${n} yeni inceleme çekildi (sunucuda listelenen: ${rows.length}).`);
}

// ---------- yerel kayıt ----------

// record: gamerec.js çıktısı. Gerçek modele sorar; { ok, review, cost, model, file } döner.
async function reviewLocal(record, env, outDir, { label = 'yerel', transport = null } = {}) {
  const { Reviewer, reviewConfig } = require('../lib/ai/review');
  const config = reviewConfig(env);
  if (!transport && !config.enabled) throw new Error('İnceleme için ANTHROPIC_API_KEY gerekli (AI_REVIEW=off değil).');
  const reviewer = new Reviewer({ config, transport, logger: { log() {}, warn: (m) => console.error(m) } });
  const res = await reviewer.review(record);
  if (!res.ok) throw new Error(`İnceleme başarısız: ${res.reason}${res.cost ? ` (maliyet ≈ $${res.cost.toFixed(4)})` : ''}`);
  const now = new Date();
  const full = {
    id: `${safeName(label)}-${now.toISOString().replace(/[-:T]/g, '').slice(0, 14)}`,
    date: now.toISOString(), room: safeName(label), model: res.model, cost: Number(res.cost.toFixed(5)), review: res.review, record,
    usage: res.usage,
  };
  const file = saveReview(outDir, full);
  rebuildDrafts(outDir);
  return { ...res, file, id: full.id };
}

function printSummary(res) {
  const m = res.review.mistakes;
  console.log(`\nÖzet: ${res.review.summary}\n`);
  console.log(`Hatalar (${m.length}):`);
  m.slice(0, 5).forEach((x, i) => console.log(`${i + 1}. [${x.severity}] ${x.bot} · ${x.day_or_night}: ${JSON.stringify(x.quote)}\n   ${x.what_was_wrong}`));
  console.log(`\nModel ${res.model}, token: girdi=${res.usage.input_tokens} önbellek_okuma=${res.usage.cache_read_input_tokens || 0} önbellek_yazma=${res.usage.cache_creation_input_tokens || 0} çıktı=${res.usage.output_tokens}`);
  console.log(`İnceleme maliyeti ≈ $${res.cost.toFixed(4)}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(3, 16).join('\n')); return; }
  const env = loadEnvLocal(process.env, { main: true });
  if (args.local) {
    const record = JSON.parse(fs.readFileSync(args.local, 'utf8'));
    const res = await reviewLocal(record.record && record.record.game ? record.record : record, env, args.out, { label: 'yerel' });
    printSummary(res);
    console.log(`Yazıldı: ${res.file}\nTaslaklar: ${path.join(args.out, 'scenario-drafts.md')}`);
    return;
  }
  if (!args.rebuild) await fetchRemote(args, env);
  const d = rebuildDrafts(args.out);
  console.log(`Senaryo taslakları (${d.count} inceleme): ${d.file}`);
}

if (require.main === module) main().catch((e) => { console.error(e && e.message ? e.message : e); process.exit(1); });

module.exports = { reviewLocal, printSummary, rebuildDrafts, saveReview, fileFor, parseArgs };
