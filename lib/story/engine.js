'use strict';

// Anlatı motorunun çekirdeği: tohumlu rastgelelik, şablon seçimi (tekrarsız), şablon doldurma.
const { ek, ekCommon, possEk, liste, trUpperFirst, harmonyOf } = require('./turkish');

const MAX_STORY = 220;

// ---------- tohumlu rastgelelik ----------
function hashSeed(seed) {
  const s = String(seed);
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

// mulberry32: küçük, hızlı, aynı tohumla aynı dizi.
function makeRng(seed) {
  let a = hashSeed(seed) || 0x9e3779b9;
  return function rng() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function weightedPick(rng, items, weightOf) {
  let total = 0;
  for (const it of items) total += Math.max(0, weightOf(it));
  if (total <= 0) return items[Math.floor(rng() * items.length)];
  let r = rng() * total;
  for (const it of items) {
    r -= Math.max(0, weightOf(it));
    if (r < 0) return it;
  }
  return items[items.length - 1];
}

function shuffled(rng, arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- şablon doldurma ----------
const TOKEN = /\{([A-Za-z]+)(?:\|(gen|acc|dat|loc|abl|ile|cop|da))?\}/g;
const PERSON_KEYS = ['a', 'b', 'c'];

function tokensOf(tpl) {
  const out = [];
  let m;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(tpl))) out.push({ key: m[1], kase: m[2] || null });
  return out;
}

function lowerFirst(s) {
  return s[0].toLowerCase() + s.slice(1);
}

// Şablonun bu bağlamla doldurulup doldurulamayacağı (rastgelelik harcamadan).
function canRender(tpl, ctx) {
  for (const { key } of tokensOf(tpl)) {
    if (!resolvable(key, ctx)) return false;
  }
  return true;
}

function resolvable(key, ctx) {
  const persons = ctx.persons || {};
  if (PERSON_KEYS.includes(key)) return Boolean(persons[key]);
  const pk = key[0].toLowerCase();
  const rest = key.slice(1);
  if (PERSON_KEYS.includes(pk) && ['j', 'job', 'jobs', 'tool', 'place'].includes(rest)) {
    const p = persons[pk];
    return Boolean(p && p.job);
  }
  if (key === 'list') return Array.isArray(ctx.list) && ctx.list.length > 0;
  const vars = ctx.vars || {};
  if (vars[key] !== undefined && vars[key] !== null) return true;
  if (/^[A-ZÇĞİÖŞÜ]/.test(key)) {
    const low = lowerFirst(key);
    return vars[low] !== undefined && vars[low] !== null;
  }
  return false;
}

// Meslekle birlikte: 'terzi Ali'nin'; adın eki belirlenemiyorsa 'Xyz adlı terzinin'.
// Meslek adına ek: ünlüyle başlayan eklerde gövde yumuşar (kasap -> kasabın, ulak -> ulağa).
function jobNoun(job, kase) {
  if (!kase) return job.noun;
  const out = ekCommon(job.noun, kase);
  const suffix = out.slice(job.noun.length);
  return job.soft && /^[aeıioöuü]/.test(suffix) ? job.soft + suffix : out;
}

function jobName(p, kase) {
  if (kase && !harmonyOf(p.name)) return `${p.name} adlı ${jobNoun(p.job, kase)}`;
  return `${p.job.noun} ${personName(p, kase)}`;
}

function personName(p, kase) {
  if (p.generic) return ekCommon(p.name, kase);
  return kase ? ek(p.name, kase) : p.name;
}

function atSentenceStart(out) {
  const t = out.replace(/["'«“]+$/, '').trimEnd();
  return t === '' || /[.!?…]$/.test(t);
}

// Şablonu doldurur; dolduramazsa null. rng verilirse adın ilk geçişinde ara sıra meslek de söylenir
// ("terzi Ali"). Ad cümle başındaysa yalnızca meslek/cins isim büyük harfle başlatılır; kullanıcı adına
// dokunulmaz.
function render(tpl, ctx, rng) {
  if (!canRender(tpl, ctx)) return null;
  const persons = ctx.persons || {};
  const vars = ctx.vars || {};
  const jobTokens = new Set();
  for (const { key } of tokensOf(tpl)) {
    const pk = key[0].toLowerCase();
    if (PERSON_KEYS.includes(pk) && ['j', 'job', 'jobs'].includes(key.slice(1))) jobTokens.add(pk);
  }
  const mentioned = new Set();
  let out = '';
  let last = 0;
  TOKEN.lastIndex = 0;
  let m;
  while ((m = TOKEN.exec(tpl))) {
    out += tpl.slice(last, m.index);
    last = TOKEN.lastIndex;
    const key = m[1];
    const kase = m[2] || null;
    let value;
    let capitalizable = false;
    const pk = key[0].toLowerCase();
    const rest = key.slice(1);
    if (PERSON_KEYS.includes(key)) {
      const p = persons[key];
      const prevWord = (out.trimEnd().split(/\s+/).pop() || '');
      const useJob = !mentioned.has(key) && p.job && !p.generic && !jobTokens.has(key)
        && ctx.autoJob !== false && rng && !/^avcı$/i.test(prevWord) && rng() < (ctx.jobRate ?? 0.4);
      mentioned.add(key);
      if (useJob) {
        value = jobName(p, kase);
        capitalizable = value.startsWith(p.job.noun);
      } else {
        value = personName(p, kase);
        capitalizable = Boolean(p.generic);
      }
    } else if (PERSON_KEYS.includes(pk) && ['j', 'job', 'jobs', 'tool', 'place'].includes(rest)) {
      const p = persons[pk];
      const job = p.job;
      mentioned.add(pk);
      if (rest === 'j') value = jobName(p, kase);
      else if (rest === 'job') value = jobNoun(job, kase);
      else if (rest === 'jobs') value = possEk(job.poss, kase);
      else if (rest === 'tool') value = possEk(job.tool, kase);
      else value = possEk(job.place, kase);
      capitalizable = true;
      if (key[0] !== pk) value = trUpperFirst(value);
    } else if (key === 'list') {
      value = liste(ctx.list.map((p) => (p.generic ? p.name : p.label || p.name)), kase);
    } else {
      let v = vars[key];
      if (v === undefined || v === null) v = trUpperFirst(String(vars[lowerFirst(key)]));
      value = String(v);
    }
    if (capitalizable && atSentenceStart(out)) value = trUpperFirst(value);
    out += value;
  }
  out += tpl.slice(last);
  return out;
}

// ---------- şablon seçici ----------
// Bir oyun boyunca kullanılan şablonları hatırlar; tükenmedikçe hiçbir satır tekrar etmez.
class Picker {
  constructor(rng, generic, scenario, scenarioMap) {
    this.rng = rng;
    this.generic = generic;
    this.scenario = scenario;
    this.scenarioMap = scenarioMap;
    this.used = new Map(); // şablon -> kullanım sırası
    this.tick = 0;
  }

  candidates(keys) {
    const list = [];
    const seen = new Set();
    for (const key of keys) {
      for (const tpl of this.generic[key] || []) {
        if (!seen.has(tpl)) { seen.add(tpl); list.push({ tpl, w: 1, key }); }
      }
      const skey = this.scenarioMap[key];
      const spool = skey && this.scenario ? this.scenario[skey] : null;
      for (const tpl of spool || []) {
        if (!seen.has(tpl)) { seen.add(tpl); list.push({ tpl, w: 2, key }); }
      }
    }
    return list;
  }

  // keys: havuz anahtarları; optional: tükenirse null döner (coda'lar için); maxLen: sığmayanlar elenir.
  pick(keys, ctx, { optional = false, maxLen = MAX_STORY } = {}) {
    const all = this.candidates(Array.isArray(keys) ? keys : [keys]).filter((c) => canRender(c.tpl, ctx));
    if (!all.length) return null;
    let pool = all.filter((c) => !this.used.has(c.tpl));
    if (!pool.length) {
      if (optional) return null;
      // Hepsi kullanıldıysa en uzun süredir kullanılmayan.
      const oldest = Math.min(...all.map((c) => this.used.get(c.tpl)));
      pool = all.filter((c) => this.used.get(c.tpl) === oldest);
    }
    // Uzunluğa sığanları dene; hiçbiri sığmazsa en kısası.
    const order = [];
    let rest = [...pool];
    while (rest.length) {
      const c = weightedPick(this.rng, rest, (x) => x.w);
      order.push(c);
      rest = rest.filter((x) => x !== c);
      if (order.length >= 6) break;
    }
    for (const c of order) {
      const text = render(c.tpl, ctx, this.rng);
      if (text !== null && text.length <= maxLen) {
        this.used.set(c.tpl, ++this.tick);
        return { text, tpl: c.tpl, key: c.key };
      }
    }
    if (optional) return null;
    const c = order[0];
    const text = render(c.tpl, ctx, this.rng);
    this.used.set(c.tpl, ++this.tick);
    return { text, tpl: c.tpl, key: c.key };
  }

  markUsed(tpl) {
    this.used.set(tpl, ++this.tick);
  }
}

// Cümleleri birleştirir; sınırı aşan coda'lar atılır, ana cümle gerekirse cümle sınırından kısaltılır.
function compose(main, codas = [], max = MAX_STORY) {
  let text = main || '';
  for (const c of codas) {
    if (!c) continue;
    const next = text ? `${text} ${c}` : c;
    if (next.length <= max) text = next;
  }
  if (text.length > max) {
    const cut = text.slice(0, max);
    const idx = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
    text = idx > 40 ? cut.slice(0, idx + 1) : `${cut.slice(0, max - 1).trimEnd()}…`;
  }
  return text;
}

module.exports = {
  MAX_STORY, makeRng, hashSeed, weightedPick, shuffled, render, canRender, tokensOf, Picker, compose,
};
