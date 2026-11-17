'use strict';

// <players>, <timeline> ve <facts> blokları: botun kendi kaydından (lib/ai/record.js) ve şu anki
// görünümünden KODLA hesaplanır. Yalnızca herkese açık bilgi + botun kendi gece bilgisi; model tahmini
// ya da başka bir oyuncunun gizli bilgisi yok. Amaç: modelin sayma, sıralama ve "kim dışarıda" gibi
// mekanik işleri yapmak zorunda kalmaması (küçük model bunlarda hata yapar).

const { LABEL, isEvil, teamOf, teamLabel, MAD_FAKE } = require('./roles');
const { SeatRecord } = require('./record');

const TEXT_MAX = 200;
const CUR_CHAT = 40;      // güncel gün: en fazla bu kadar sohbet satırı
const OLD_CHAT = 10;      // eski günler: her gün için son bu kadar satır (+ botun kendi satırları)

function esc(s, max = TEXT_MAX) {
  return String(s == null ? '' : s).replace(/</g, '‹').replace(/>/g, '›').replace(/\s+/g, ' ').trim().slice(0, max);
}
function label(role) { return LABEL[role] || role; }

function nameOf(view, id) {
  const p = (view.players || []).find((x) => x.id === id);
  return p ? esc(p.name, 40) : '?';
}

function startRule(view, rec) {
  return (rec && rec.start) || { distribution: view.room.distribution || [], rolePool: view.room.rolePool || null, revealRoles: Boolean(view.room.settings && view.room.settings.revealRoles) };
}

// Bu oyunda bulunabilecek roller (oyun başındaki lobi kuralı).
function possibleSet(view, rec) {
  const s = startRule(view, rec);
  const rp = s.rolePool || {};
  return new Set([...(s.distribution || []), ...(rp.from || []), ...(rp.maybe || [])]);
}

// Herkese açık rol: görünümde (açıklanan ölü / oyun sonu) ya da "avcıydı" duyurusuyla.
function knownRole(view, rec, id) {
  const p = (view.players || []).find((x) => x.id === id);
  if (p && p.role && id !== view.me.id) return p.role;
  if (rec && rec.hunters.has(id)) return 'avci';
  return null;
}

function deathOf(rec, id) { return rec ? rec.deaths.find((d) => d.id === id) || null : null; }

// İftiracı bu ölümden önce açıklanmış bir ölü mü? (o zaman iftira artık olamaz)
function framerPossibleAt(view, rec, d) {
  if (!possibleSet(view, rec).has('iftiraci')) return false;
  if (!rec) return true;
  for (const x of rec.deaths) {
    if (x === d) break;
    if (knownRole(view, rec, x.id) === 'iftiraci') return false;
  }
  return true;
}

// Gösterilen "Vampir" gerçek olmayabilir mi? '' | 'maybe' | 'certain' (kesin iftira: vampirler vampiri öldürmez).
function framedState(view, rec, d, role) {
  if (role !== 'vampir' || !d || d.trueRole) return '';
  if (d.cause === 'vampir') return 'certain';
  return framerPossibleAt(view, rec, d) ? 'maybe' : '';
}

// Gösterilen rolün takım cümlesi (modele hazır verilir; çıkarım gerekmesin).
function teamPhrase(role, framed) {
  if (role === 'vampir') {
    if (framed === 'certain') return 'a villager framed by the İftiracı (the vampires never kill a Vampir), was innocent';
    if (framed === 'maybe') return 'evil team, or a villager framed by the İftiracı';
    return 'evil team';
  }
  switch (teamOf(role)) {
    case 'vampir': return 'evil team';
    case 'soytari': return 'Soytarı, alone';
    case 'hirsiz': return 'neutral Hırsız';
    default: return 'village team, was innocent';
  }
}

// Kötü takımdaki bot için: "Vampir" diye gösterilen ama başlangıçta takım arkadaşı olmayan ölü, iftiraya uğramış masumdur.
function framedForEvil(view, rec, id, role) {
  const mates = rec && rec.start && rec.start.mates;
  return Boolean(role && isEvil(view.me.role) && mates && id !== view.me.id && isEvil(role) && !mates.includes(id));
}

// "shown Vampir · evil team" ya da "role hidden ...".
function shownText(view, rec, id) {
  const d = deathOf(rec, id);
  const role = knownRole(view, rec, id);
  if (role && isEvil(view.me.role) && rec && rec.start && (rec.start.mates || []).includes(id)) return `shown ${label(role)} · your team-mate`;
  if (framedForEvil(view, rec, id, role)) return `shown ${label(role)} · but YOU know he was not on your team: a villager framed by the İftiracı, was innocent`;
  if (role) {
    const framed = framedState(view, rec, d, role);
    const tail = d && d.trueRole && d.cause === 'shot' ? ' (true role)' : '';
    return `shown ${label(role)} · ${teamPhrase(role, framed)}${tail}`;
  }
  if (d && d.hidden === 'cleaned') return 'role hidden (the Temizlikçi cleaned the traces; he only visits non-evil players, so not evil)';
  if (d && d.hidden === 'stolen') return 'role hidden (stolen: a living player, the Hırsız, now has this role and its team)';
  const reveal = startRule(view, rec).revealRoles;
  return reveal ? 'role hidden' : 'role hidden until the game ends';
}

// Sohbet satırındaki konuşmacı etiketi: şu anki durum (ölü/ayrıldı + açıklanan rol).
function speakerTag(view, rec, id) {
  const p = (view.players || []).find((x) => x.id === id);
  if (!p) return ' [OUT · role hidden]';
  if (id === view.me.id) return ' (you)';
  if (p.alive && !p.left) return '';
  const role = knownRole(view, rec, id);
  if (!role) return ' [OUT · role hidden]';
  return ` [OUT · ${shownText(view, rec, id)}]`;
}

function whenText(d) {
  const at = d.when === 'night' ? 'night' : d.when === 'day' ? 'day' : d.at || 'day';
  return `${at === 'night' ? 'Night' : 'Day'} ${d.round}`;
}

function votersOf(view, d) {
  const v = d.voteRef;
  if (!v) return '';
  if (v.secret) return ', votes were secret (fog)';
  const list = (v.votes[d.id] || []).map((x) => `${nameOf(view, x.id)}${x.w > 1 ? ' x2' : ''}`);
  return list.length ? ` by ${list.join(', ')}` : '';
}

function howText(view, d) {
  switch (d.cause) {
    case 'vampir': return 'killed by the vampires';
    case 'zehir': return 'poisoned (by the Cadı)';
    case 'hirsiz': return 'robbed and killed (by the Hırsız)';
    case 'hanged': return `hanged with ${d.votes} votes${votersOf(view, d)}`;
    case 'shot': return `shot by the Avcı${d.by ? ` ${nameOf(view, d.by)}` : ''}`;
    case 'left': return 'left the game';
    default: return 'died';
  }
}

function deathLine(view, rec, d) {
  return `${whenText(d)}: ${esc(d.name, 40)} ${howText(view, d)} → ${shownText(view, rec, d.id)}`;
}

function votesLine(view, v) {
  const head = v.trial ? 'Court vote' : 'Votes at day end';
  if (v.secret) {
    const counts = Object.entries(v.counts).sort((a, b) => b[1] - a[1]).map(([id, c]) => `${nameOf(view, id)} ${c}`);
    return `${head} (fog: who voted for whom is secret): ${counts.join(', ') || 'no votes'}; uyu ${v.sleepers}`;
  }
  const groups = Object.entries(v.votes).sort((a, b) => (v.counts[b[0]] || 0) - (v.counts[a[0]] || 0))
    .map(([target, list]) => `${nameOf(view, target)} ← ${list.map((x) => `${nameOf(view, x.id)}${x.w > 1 ? ' x2' : ''}`).join(', ')} (${v.counts[target] || 0})`);
  const parts = [groups.join(' | ') || 'no votes on players'];
  if (v.sleeping.length) parts.push(`uyu: ${v.sleeping.map((id) => nameOf(view, id)).join(', ')}`);
  const voted = new Set(v.voted || []);
  const none = (v.alive || []).filter((id) => !voted.has(id));
  if (none.length) parts.push(`no vote: ${none.map((id) => nameOf(view, id)).join(', ')}`);
  return `${head}: ${parts.join(' | ')}`;
}

function noHangText(rec, it) {
  if (it.why === 'sleep') return `Day ${it.round}: everyone voted uyu, nobody hanged`;
  if (it.why === 'novote') return `Day ${it.round}: nobody voted, nobody hanged`;
  const v = rec ? [...rec.votes].reverse().find((x) => x.round === it.round) : null;
  if (v && !v.trial) {
    const max = Math.max(0, ...Object.values(v.counts));
    if (max <= v.sleepers) return `Day ${it.round}: uyu beat the votes, nobody hanged`;
  }
  return `Day ${it.round}: tie, nobody hanged`;
}

function eventLine(view, rec, it) {
  switch (it.k) {
    case 'death': return `* ${deathLine(view, rec, it.d)}`;
    case 'nodeath': return `* Dawn after night ${it.round}: nobody died`;
    case 'nohang': return `* ${noHangText(rec, it)}`;
    case 'votes': return '';   // oy ayrıntısı <facts> içindeki "Vote history" satırlarında (çift yazılmaz)
    case 'event': return `* Village event: ${esc(it.name, 40)} – ${esc(it.desc, 160)}`;
    case 'court': return `* Court: ${nameOf(view, it.ids[0])} and ${nameOf(view, it.ids[1])} defend themselves, then a re-vote between the two`;
    case 'hunter': return `* ${nameOf(view, it.id)} was the Avcı (announced) and shoots one last arrow`;
    case 'noshot': return '* The Avcı shot nobody';
    default: return '';
  }
}

function chatLine(view, rec, m, trigger) {
  const ch = m.channel && m.channel !== 'genel' ? `[${m.channel}] ` : '';
  const mark = trigger && m === trigger ? '>> ' : '';
  return `${mark}${ch}${esc(m.from, 40)}${speakerTag(view, rec, m.fromId)}: ${esc(m.text)}`;
}

function headerText(it) {
  if (it.k === 'start') return '== Game start ==';
  return `== ${it.phase === 'night' ? 'Night' : 'Day'} ${it.round} ==`;
}

// ---------- <timeline> ----------
// Tek, sıralı zaman çizelgesi. Güncel gün (son "Day" başlığından itibaren) ayrıntılı; eski günlerden her gün
// için son birkaç satır ve botun kendi satırları. Olaylar (ölüm, oy sonucu, mahkeme, olay…) her zaman.
function timelineBlock(view, rec, trigger = null) {
  const meId = view.me.id;
  const periods = [];
  let cur = { hdr: null, items: [] };
  for (const it of rec.items) {
    if (it.k === 'phase' || it.k === 'start') {
      if (cur.hdr || cur.items.length) periods.push(cur);
      cur = { hdr: it, items: [] };
    } else cur.items.push(it);
  }
  if (cur.hdr || cur.items.length) periods.push(cur);
  let curFrom = 0;
  for (let i = periods.length - 1; i >= 0; i--) {
    if (periods[i].hdr && periods[i].hdr.k === 'phase' && periods[i].hdr.phase === 'day') { curFrom = i; break; }
  }
  // Güncel bölümde gösterilecek sohbet satırları: son CUR_CHAT (+ kendi + tetikleyen).
  const curChats = periods.slice(curFrom).flatMap((p) => p.items.filter((it) => it.k === 'chat'));
  const keep = new Set(curChats.slice(-CUR_CHAT));
  const lines = [];
  periods.forEach((p, i) => {
    if (p.hdr) lines.push(headerText(p.hdr) + (i === periods.length - 1 ? ' (NOW)' : ''));
    const chats = p.items.filter((it) => it.k === 'chat');
    const shown = i >= curFrom ? keep : new Set(chats.slice(-OLD_CHAT));
    let skipped = 0;
    for (const it of p.items) {
      if (it.k === 'chat') {
        if (shown.has(it) || it.m.fromId === meId || it.m === trigger) {
          if (skipped) { lines.push(`(… ${skipped} earlier line${skipped > 1 ? 's' : ''} not shown)`); skipped = 0; }
          lines.push(chatLine(view, rec, it.m, trigger));
        } else skipped += 1;
      } else {
        const l = eventLine(view, rec, it);
        if (l) lines.push(l);
      }
    }
    if (skipped) lines.push(`(… ${skipped} earlier line${skipped > 1 ? 's' : ''} not shown)`);
  });
  return lines.join('\n');
}

// ---------- <players> ----------

function playersBlock(view, rec) {
  const meId = view.me.id;
  const list = (view.players || []).filter((p) => !p.left || p.role);
  const head = list.some((p) => p.job && p.job.label) ? ['(job = village profession, flavour only: never a role, a claim or evidence)'] : [];
  const living = list.filter((p) => p.alive && !p.left);
  const out = list.filter((p) => !p.alive || p.left);
  const lines = [...head, `Living (${living.length}):`];
  for (const p of living) {
    const me = p.id === meId;
    const bits = [`- ${esc(p.name, 40)}${me ? ' (you)' : ''}`];
    if (p.job && p.job.label) bits.push(`job: ${esc(p.job.label, 30)} (flavour)`);
    bits.push('alive');
    if (p.role) {
      if (me) bits.push(`your team: ${teamLabel(p.role)}`);
      else bits.push(isEvil(p.role) ? 'evil team (your team-mate)' : teamPhrase(p.role));
    }
    bits.push(`role: ${p.role ? label(p.role) : '?'}`);
    lines.push(bits.join(' · '));
  }
  lines.push(`OUT of the game (${out.length}) — dead or gone: never address, question or vote for them:`);
  if (!out.length) lines.push('- nobody yet');
  for (const p of out) {
    const d = deathOf(rec, p.id);
    const bits = [`- ${esc(p.name, 40)}`];
    if (p.job && p.job.label) bits.push(`job: ${esc(p.job.label, 30)} (flavour)`);
    bits.push(d && d.round > 0 ? `OUT: ${whenText(d).toLowerCase()}, ${howText(view, d)}` : 'OUT');
    bits.push(shownText(view, rec, p.id));
    bits.push(`role: ${p.role ? label(p.role) : '?'}`);
    lines.push(bits.join(' · '));
  }
  return lines.join('\n');
}

// ---------- <facts> ----------

// Bir rol oyundan çıkınca köy neyi kaybeder (doğru ve kısa; gerçek kuralla).
const OUT_TEXT = {
  doktor: 'nobody is protected at night any more',
  kahin: 'no new Kahin results any more',
  gozcu: 'nobody watches houses any more',
  gardiyan: 'no more door locks',
  cadi: 'no more heal or poison',
  avci: 'the Avcı is gone (its one shot came at its death)',
  muhtar: 'no more double vote',
  soytari: 'the Soytarı can no longer win',
  deli: 'the Deli is out: nobody is an honest fake Doktor/Kahin/Gözcü/Gardiyan any more',
  hirsiz: 'the Hırsız died before it stole: no more thefts',
  iftiraci: 'no more frames: a Vampir shown from now on is real',
  temizlikci: 'no more cleaned traces: a hidden role from now on can only be a theft (or a hidden-roles room)',
};
const CLAIMABLE = new Set(['doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar']);

function evilStart(rec, view) {
  const s = startRule(view, rec);
  const dist = s.distribution || [];
  const rp = s.rolePool || {};
  const vamps = dist.filter((r) => r === 'vampir').length;
  const sure = dist.filter((r) => r === 'iftiraci' || r === 'temizlikci').length;
  return { vamps, min: vamps + sure + (rp.helpers || 0), max: vamps + sure + (rp.helpersMax || 0) };
}

function marginText(m) {
  if (m <= 1) return 'LAST CHANCE: the village must hang an evil player today; a wrong hang, or no hang (then a night kill), loses';
  if (m === 2) return 'a wrong hang today loses tonight unless the kill fails; skipping is safe for one more night';
  const k = Math.floor((m - 1) / 2);
  return `the village can still afford ${k} wrong hang${k > 1 ? 's' : ''} (counting one night kill after each)`;
}

// Bir gecenin herkese açık sonucu (kısa). Vampir kurbanı çıkmadıysa gece "sessiz"dir: o gece için mümkün
// açıklamalar `why` kümesine eklenir (sonda bir kez yazılır).
function nightOutcome(view, rec, round, poss, deadBefore, why) {
  const deaths = rec.deaths.filter((d) => d.round === round && d.when === 'night');
  const resolved = deaths.length || rec.items.some((it) => (it.k === 'nodeath' && it.round === round)
    || (it.k === 'phase' && it.phase === 'day' && it.round === round));
  if (!resolved) return null;
  const tipi = rec.items.some((it) => it.k === 'event' && it.round === round && it.name === 'Tipi');
  const vamp = deaths.filter((d) => d.cause === 'vampir');
  const parts = deaths.map((d) => `${esc(d.name, 40)} ${howText(view, d)}`);
  if (vamp.length) return { text: `Night ${round}: ${parts.join('; ')}; no other vampire attack that night.`, quiet: false };
  const has = (r) => poss.has(r) && !deadBefore.has(r);
  if (tipi) why.add('Tipi (blizzard night): villagers could not leave their houses, so no Doktor/Kahin/Gözcü/Cadı action that night');
  else {
    if (has('doktor')) why.add('a Doktor protection held (the protected player was attacked and survived)');
    if (has('cadi')) why.add('the Cadı healed the victim');
    if (has('gardiyan') && round > 1) why.add('the door of the victim (or of the vampires) was locked');
  }
  why.add('the vampires picked nobody');
  const lead = deaths.length
    ? `Night ${round}: ${parts.join('; ')}, none of it by the vampires (their attack, if any, was stopped or not made)`
    : `Night ${round}: nobody died`;
  return { text: `${lead}.`, quiet: true };
}

// Hâlâ kimde olduğu bilinmeyen roller (eleme): oyun başındaki lobi kuralı (distribution kesin,
// rolePool.pick yer adaylardan; dolmayan yer köylü) eksi açıklanan ölüler, botun kendi rolü ve (kötü
// takımdaysa) görünen takım arkadaşları. Dönen: { text, bag, unknown, cands, hidden, others, off }.
function rolesInPlay(view, rec) {
  const s = startRule(view, rec);
  const bag = new Map();
  for (const r of s.distribution || []) bag.set(r, (bag.get(r) || 0) + 1);
  const rp = s.rolePool || null;
  let unknown = rp ? rp.pick || 0 : 0;
  const cands = new Set([...((rp && rp.from) || []), ...((rp && rp.maybe) || [])]);
  // Havuzdaki yardımcı yerleri sınırlıdır (rolePool.helpersMax): dolunca öteki yardımcı aday olmaktan çıkar.
  let helperRoom = rp ? (rp.helpersMax || 0) : 0;
  const HELPERS = ['iftiraci', 'temizlikci'];
  const take = (role) => {
    if ((bag.get(role) || 0) > 0) { bag.set(role, bag.get(role) - 1); return true; }
    if (unknown > 0 && cands.has(role)) {
      unknown -= 1;
      cands.delete(role);
      if (HELPERS.includes(role) && helperRoom > 0) {
        helperRoom -= 1;
        if (helperRoom === 0) for (const h of HELPERS) cands.delete(h);
      }
      return true;
    }
    if (unknown > 0 && role === 'koylu') { unknown -= 1; return true; }
    return false;
  };
  let off = false;
  let maybeFramed = false;
  const takeRevealed = (role) => {
    if (take(role)) return;
    // Vampire dönüşen yardımcı ya da çalınmış rol: koltuğun ilk rolü düşülür.
    if (role === 'vampir' && (take('iftiraci') || take('temizlikci'))) return;
    if (take('hirsiz')) return;
    off = true;
  };
  const me = view.me;
  takeRevealed(me.role);
  const alive = (view.players || []).filter((p) => p.alive && !p.left);
  const mates = isEvil(me.role) ? alive.filter((p) => p.id !== me.id && isEvil(p.role)) : [];
  for (const p of mates) takeRevealed(p.role);
  let hidden = 0;
  for (const p of (view.players || []).filter((x) => !x.alive || x.left)) {
    const d = deathOf(rec, p.id);
    const role = knownRole(view, rec, p.id);
    if (framedForEvil(view, rec, p.id, role)) hidden += 1;   // iftiraya uğramış masum: gerçek rolü bilinmiyor
    else if (role) {
      const isMate = isEvil(me.role) && rec && rec.start && (rec.start.mates || []).includes(p.id);
      if (!isMate && role === 'vampir' && framedState(view, rec, d, role)) maybeFramed = true;
      takeRevealed(role);
    } else if (d && d.hidden === 'stolen') {
      if (!take('hirsiz')) off = true;   // hırsızın kendi rolü bitti; çalınan rol yaşayan hırsızda
    } else hidden += 1;
  }
  const others = alive.length - 1 - mates.length;
  const order = ['vampir', 'iftiraci', 'temizlikci', 'doktor', 'kahin', 'gozcu', 'gardiyan', 'cadi', 'avci', 'muhtar', 'soytari', 'deli', 'hirsiz', 'koylu'];
  const list = order.filter((r) => (bag.get(r) || 0) > 0).map((r) => `${bag.get(r)} ${label(r)}`);
  const total = [...bag.values()].reduce((a, b) => a + b, 0) + unknown;
  if (total - hidden !== others) off = true;
  let text = `Roles still unaccounted for among the ${others} other living player${others === 1 ? '' : 's'}${mates.length ? ' (not counting your team-mates)' : ''}: ${list.join(', ') || 'none certain'}`;
  if (unknown > 0) text += `${list.length ? ' + ' : ''}${unknown} unknown from: ${[...cands].map(label).join(', ')}${cands.has('koylu') ? '' : ' (or Köylü)'}`;
  text += '.';
  if (hidden) text += ` This also covers the ${hidden} out player${hidden > 1 ? 's' : ''} whose role is hidden.`;
  const notes = [];
  if (maybeFramed) notes.push('a shown Vampir may have been a framed villager (then one Vampir is still alive and that villager role is still unaccounted for)');
  if (MAD_FAKE.has(me.role) && (bag.get('deli') || cands.has('deli'))) notes.push(`you counted yourself as ${label(me.role)}; if you are the Deli, swap one Deli for one ${label(me.role)}`);
  if (off) notes.push('approximate: a reveal does not fit the lobby rule exactly (a frame, a promoted helper or a theft)');
  if (notes.length) text += ` Caveat: ${notes.join('; ')}.`;
  return { text, bag, unknown, cands, hidden, others, off };
}

// Not metninden simge ve "N. gece:" önekini atar (tur zaten satır başlığında).
function reportText(t) { return String(t).replace(/^\S+\s+\d+\. (?:gece|tur):\s*/u, ''); }

// Botun kendi geceleri (özel; yalnızca kendisi bilir). Doktor için "kimse saldırıya uğramadı" çıkarımı dahil.
function myNightsLines(view, rec) {
  const me = view.me;
  const notes = SeatRecord.notesByRound(me.notes);
  const rounds = new Set([...rec.nights.keys(), ...[...notes.keys()].filter((r) => r > 0)]);
  const out = [];
  for (const r of [...rounds].sort((a, b) => a - b)) {
    const snap = rec.nights.get(r);
    const bits = [];
    if (snap) {
      const n = snap.night || {};
      const role = snap.role;
      const sel = n.mySelection;
      const trip = n.show && n.show.trip;
      const bounced = trip && trip.outcome === 'bounced';
      if (n.locked) bits.push('your door was locked from outside: you could not go out');
      else if (n.passed && !sel) bits.push('you chose to wait (no action)');
      else {
        switch (role) {
          case 'doktor':
            if (!sel) bits.push('you protected nobody');
            else if (sel === me.id) bits.push('you protected yourself (stayed home)');
            else bits.push(`you protected ${nameOf(view, sel)} (walked to that house)${bounced ? ' but the door was locked: no protection' : ''}`);
            if (sel && !bounced && !(n.show && n.show.dead) && !(notes.get(r) || []).some((t) => /koruman|kendini korudun/.test(t))) {
              bits.push(`no "saved" report: ${sel === me.id ? 'you were' : `${nameOf(view, sel)} was`} not attacked that night (a Doktor learns nothing else)${possibleSet(view, rec).has('deli') ? '; if you are the real Doktor' : ''}`);
            }
            break;
          case 'kahin': bits.push(sel ? `you inspected ${nameOf(view, sel)} (walked there)${bounced ? ' but the door was locked: no result' : ''}` : 'you inspected nobody'); break;
          case 'gozcu': bits.push(sel ? `you watched ${sel === me.id ? 'your own' : `${nameOf(view, sel)}'s`} house from behind (unseen)` : 'you watched nobody'); break;
          case 'gardiyan': bits.push(sel ? `your lock held ${nameOf(view, sel)}'s door (you stayed home)` : 'no lock tonight (you stayed home)'); break;
          case 'cadi': {
            const w = n.witch || {};
            if (w.victims && w.victims.length) bits.push(`you saw the vampires' victim: ${w.victims.map((id) => nameOf(view, id)).join(', ')}`);
            if (w.heal) bits.push(`you healed ${nameOf(view, w.heal)}`);
            if (w.poison) bits.push(`you poisoned ${nameOf(view, w.poison)}`);
            if (!w.heal && !w.poison) bits.push('you used no potion');
            break;
          }
          case 'hirsiz': bits.push(sel ? `you tried to steal from ${nameOf(view, sel)}${bounced ? ' but the door was locked' : ''}` : 'you waited (no theft)'); break;
          case 'vampir':
          case 'iftiraci':
          case 'temizlikci': {
            const tt = n.teamTarget;
            if (tt) bits.push(`team victim: ${nameOf(view, tt.targetId)} (chosen by ${esc(tt.byName, 40)})`);
            else bits.push('your team chose no victim');
            if (role === 'iftiraci' && n.framer) bits.push(`you framed ${nameOf(view, n.framer)}`);
            if (role === 'temizlikci' && n.cleaner) bits.push(`you cleaned ${nameOf(view, n.cleaner)}'s house`);
            if (role === 'vampir' && trip && trip.kind === 'kill') {
              bits.push(trip.outcome === 'saved' ? 'your attack was stopped (Doktor protection or Cadı heal)'
                : trip.outcome === 'bounced' ? 'the door was locked: you went home' : 'you reached the victim');
            } else if (role !== 'vampir' && bounced) bits.push('the door was locked: you went home');
            break;
          }
          default: bits.push('you stayed home (no night action)');
        }
      }
      if (n.show && n.show.dead) bits.push('you were killed');
    }
    const rs = notes.get(r) || [];
    for (const t of rs) {
      if (snap && snap.night && snap.night.locked && /kilitlendi/.test(t)) continue;
      if (/saldırıya uğradın ama sağ/.test(t) && rs.some((o) => /kendini korudun|koruman işe/.test(o))) continue;   // aynı olayın ikinci raporu
      bits.push(`report: ${esc(reportText(t), 200)}`);
    }
    if (bits.length) out.push(`- Night ${r}${snap ? ` (as ${label(snap.role)})` : ''}: ${bits.join('; ')}`);
  }
  for (const t of notes.get(0) || []) out.push(`- report: ${esc(reportText(t), 200)}`);
  return out;
}

function votesHistory(view, rec) {
  const round = view.room.round || 0;
  const phase = view.room.phase;
  const done = rec.votes.filter((v) => v.round < round || !['day', 'trial'].includes(phase));
  return done.map((v) => {
    const res = rec.deaths.find((d) => d.voteRef === v);
    const nh = rec.items.find((it) => it.k === 'nohang' && it.round === v.round);
    let result = '';
    if (res) result = `${esc(res.name, 40)} hanged`;
    else if (!v.trial && rec.votes.some((x) => x.round === v.round && x.trial)) result = 'went to court';
    else if (nh) result = noHangText(rec, nh).replace(/^Day \d+: /, '');
    const body = votesLine(view, v).replace(/^(Votes at day end|Court vote)(?: \(fog[^)]*\))?: /, '');
    return `- Day ${v.round}${v.trial ? ' court' : ''}${v.secret ? ' (fog, secret)' : ''}: ${body}${result ? ` → ${result}` : ''}`;
  });
}

function evilCountLines(view, rec, poss, alive) {
  const N = alive.length;
  const lines = [];
  if (isEvil(view.me.role)) {
    const team = alive.filter((p) => isEvil(p.role)).length;
    lines.push(`Evil count: your team has ${team} alive among ${N} living; you win when your living team is at least as many as the others (${Math.max(0, N - 2 * team)} more non-evil deaths).`);
    return lines;
  }
  const es = evilStart(rec, view);
  let certain = 0;
  let maybe = 0;
  let unknown = 0;
  for (const d of rec.deaths) {
    const role = knownRole(view, rec, d.id);
    if (role) {
      if (!isEvil(role)) continue;
      const f = framedState(view, rec, d, role);
      if (f === 'certain') continue;
      if (f === 'maybe') maybe += 1; else certain += 1;
    } else if (d.hidden === 'stolen' || d.hidden === 'cleaned') {
      // çalınan: kötüyse hırsız yerine geçti (sayı değişmez); temizlenen: kötü değildi
    } else unknown += 1;
  }
  const start = es.min === es.max ? `${es.min}` : `${es.min}–${es.max}`;
  const lo = Math.max(1, es.min - certain - maybe - unknown);
  let hi = Math.min(es.max - certain, Math.floor((N - 1) / 2));
  if (hi < lo) hi = lo;
  const comp = `${es.vamps} Vampir${es.max > es.vamps ? ` + ${es.min - es.vamps}${es.max > es.min ? `–${es.max - es.vamps}` : ''} helper` : ''}`;
  lines.push(`Evil count: the game started with ${start} evil (${comp}); evil shown among the out: ${certain + maybe}${maybe ? ` (${maybe} of them may be a framed villager)` : ''}${unknown ? `; ${unknown} out with a hidden role` : ''}. So about ${lo === hi ? lo : `${lo}–${hi}`} evil among the ${N} living (not you).`);
  const parts = [];
  for (let e = hi; e >= lo && parts.length < 3; e--) parts.push(`If ${e} evil: ${N - 2 * e} more non-evil death${N - 2 * e === 1 ? ' ends' : 's end'} the game; ${marginText(N - 2 * e)}`);
  lines.push(`Parity: evil wins when living evil ≥ the others. ${parts.join('. ')}.`);
  if (poss.has('soytari') && !rec.deaths.some((d) => knownRole(view, rec, d.id) === 'soytari')) lines.push('Careful: hanging the Soytarı ends the game and the Soytarı wins.');
  return lines;
}

function factsBlock(view, rec) {
  const lines = [];
  const poss = possibleSet(view, rec);
  const alive = (view.players || []).filter((p) => p.alive && !p.left);
  const round = view.room.round || 0;

  // Gece sonuçları (herkese açık) ve olası açıklamalar
  const deadBefore = new Set();
  const nightLines = [];
  const why = new Set();
  let anyQuiet = false;
  let anyVamp = false;
  for (let r = 1; r <= round; r++) {
    const o = nightOutcome(view, rec, r, poss, deadBefore, why);
    if (o) { nightLines.push(`- ${o.text}`); if (o.quiet) anyQuiet = true; else anyVamp = true; }
    for (const d of rec.deaths) if (d.round === r) { const role = knownRole(view, rec, d.id); if (role) deadBefore.add(role); }
  }
  if (nightLines.length) {
    lines.push('Night outcomes (public):');
    lines.push(...nightLines);
    if (anyVamp) lines.push('- A claim "the vampires came to my house and I survived" is FALSE for any night with a vampire death (one vampire victim per night).');
    if (anyQuiet) lines.push(`- Why a night can be quiet here: ${[...why].join('; ')}. A claim "the vampires came to my house and I survived" FITS such a night.`);
  }

  // Oyundan çıkan roller
  const out = [];
  const madPossible = poss.has('deli') && !rec.deaths.some((d) => knownRole(view, rec, d.id) === 'deli');
  for (const d of rec.deaths) {
    const role = knownRole(view, rec, d.id);
    if (!role || !OUT_TEXT[role]) continue;
    let t = `- ${label(role)} (${esc(d.name, 40)}, ${whenText(d)}) is out: ${OUT_TEXT[role]}`;
    if (CLAIMABLE.has(role)) t += `; a living player claiming ${label(role)} now is lying${madPossible && MAD_FAKE.has(role) ? ' or is the Deli' : ''}`;
    out.push(t);
  }
  if (rec.deaths.some((d) => d.hidden === 'stolen')) out.push('- A stolen role is NOT out: it lives on in the Hırsız.');
  if (out.length) { lines.push('What the village lost:'); lines.push(...out); }

  // Hâlâ hesapta olmayan roller
  lines.push(rolesInPlay(view, rec).text);

  // Kötü takım sayısı ve pay
  lines.push(...evilCountLines(view, rec, poss, alive));

  // Eski günlerin oyları
  const vlines = votesHistory(view, rec);
  if (vlines.length) { lines.push('Vote history:'); lines.push(...vlines); }

  // Kendi geceleri (özel)
  const mine = myNightsLines(view, rec);
  lines.push('Your own nights (private, only you know this):');
  lines.push(...(mine.length ? mine : ['- nothing yet']));
  return lines.join('\n');
}

module.exports = { timelineBlock, factsBlock, playersBlock, rolesInPlay, speakerTag, shownText, deathLine, esc, possibleSet, evilStart, marginText, knownRole };
