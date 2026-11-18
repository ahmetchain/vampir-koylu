'use strict';

// İstem kurulumu. BİLGİ SINIRI (V2-PLAN §17): istem yalnızca botun kendi görünümünden
// (room.viewFor(botId)), koltuğuna gelen sohbet mesajlarından, kendi önceki notundan ve tur
// görevinden kurulur. Bu dosya Room'a hiç dokunmaz; yalnızca kendisine verilen görünümü okur.

const { LABEL, GOAL, MAD_FAKE, isEvil } = require('./roles');
const { SYSTEM_PROMPT } = require('./rules');
const { SeatRecord } = require('./record');
const { timelineBlock, factsBlock, playersBlock, possibleSet } = require('./facts');

const TEXT_MAX = 200;

// Kullanıcı metnindeki etiket kapatmalarını etkisiz kıl (isimler ve sohbet oyunculardan gelir).
function esc(s, max = TEXT_MAX) {
  return String(s == null ? '' : s).replace(/</g, '‹').replace(/>/g, '›').replace(/\s+/g, ' ').trim().slice(0, max);
}

function label(role) { return LABEL[role] || role; }

function secondsLeft(view) {
  const r = view.room;
  if (!r.deadline) return null;
  return Math.max(0, Math.round((r.deadline - view.serverNow) / 1000));
}

function nameOf(view, id) {
  const p = view.players.find((x) => x.id === id);
  return p ? esc(p.name, 40) : '?';
}

function votesBlock(view) {
  const d = view.day;
  if (!d) return '';
  const lines = [];
  if (d.secret) lines.push('Fog day: who voted for whom is secret today.');
  for (const [target, list] of Object.entries(d.votes || {})) {
    lines.push(`${list.map((v) => `${nameOf(view, v.id)}${v.w > 1 ? ' (x2)' : ''}`).join(', ')} → ${nameOf(view, target)} (${d.counts[target] || 0})`);
  }
  if ((d.sleeping || []).length) lines.push(`Hızlı Uyu: ${d.sleeping.map((id) => nameOf(view, id)).join(', ')}`);
  // Kod tarafından hesaplanmış durum: modeller sayı toplamada hata yapabiliyor (kim asılırdı, beraberlik, uyu ağırlığı).
  const tally = Object.entries(d.counts || {}).filter(([, c]) => c > 0);
  const sleepN = (d.sleeping || []).length;
  if (tally.length || sleepN) {
    const max = Math.max(0, ...tally.map(([, c]) => c));
    const leaders = tally.filter(([, c]) => c === max).map(([id]) => nameOf(view, id));
    let status;
    if (!max) status = `Only uyu votes so far (${sleepN}): nobody would be hanged.`;
    else if (max <= sleepN) status = `uyu (${sleepN}) is at least as strong as the top vote (${max}): nobody would be hanged right now.`;
    else if (leaders.length > 1) status = `Tie at ${max} between ${leaders.join(' and ')}: nobody would be hanged right now.`;
    else status = `Right now ${leaders[0]} would be hanged (${max} votes vs ${sleepN} uyu). A rival needs ${max} votes to tie.`;
    lines.push(`Count: ${status}`);
  }
  lines.push(`Voted: ${d.votedCount}/${d.voters}. Your vote: ${d.myVote === 'sleep' ? 'uyu' : (d.myVote ? nameOf(view, d.myVote) : 'none')}.`);
  if (d.lock) {
    lines.push(`Your door lock for tonight: ${d.lock.targetId ? nameOf(view, d.lock.targetId) : 'none'}`
      + `${d.lock.lastTargetId ? ` (cannot lock ${nameOf(view, d.lock.lastTargetId)} again)` : ''}.`);
  }
  return lines.join('\n');
}

function nightBlock(view) {
  const n = view.night;
  if (!n) return '';
  const lines = [];
  if (n.lockFound) lines.push('You tried to go out and found your door locked from outside: you stay home tonight.');
  if (n.mySelection) lines.push(`Your choice tonight: ${nameOf(view, n.mySelection)}.`);
  if (n.passed) lines.push('You decided to wait tonight.');
  if (n.team && n.team.length) {
    lines.push(`Living vampires: ${n.team.map((t) => esc(t.name, 40)).join(', ')}.`);
    const KIND = { kill: 'kills', frame: 'frames (İftira)', clean: 'cleans (Temizlik)' };
    const picks = n.team.filter((t) => t.targetId && t.vampId !== view.me.id)
      .map((t) => `${esc(t.name, 40)} ${KIND[t.kind] || 'goes to'} ${nameOf(view, t.targetId)}`);
    lines.push(`Team picks tonight: ${picks.length ? picks.join('; ') : 'none yet'}.`);
  }
  if (n.myKind) lines.push(`Your action tonight: ${n.myKind === 'kill' ? 'kill' : n.myKind === 'frame' ? 'frame (İftira)' : 'clean (Temizlik)'} ${nameOf(view, n.mySelection)}.`);
  if (n.witch) {
    const w = n.witch;
    lines.push(`Potions: heal ${w.healUsed ? 'used' : (w.heal ? `given to ${nameOf(view, w.heal)}` : 'available')}, `
      + `poison ${w.poisonUsed ? 'used' : (w.poison ? `given to ${nameOf(view, w.poison)}` : 'available')}.`);
    lines.push(`Vampires' victim tonight: ${w.victims && w.victims.length ? w.victims.map((id) => nameOf(view, id)).join(', ') : 'not known yet'}.`);
  }
  return lines.join('\n');
}

function allowed(list) {
  return list.length ? list.map((p) => esc(p.name, 40)).join(', ') : 'nobody';
}

// Görev metni ve izin verilen hedefler (yalnızca görünümden; kurallar Room'da yine denetlenir).
function taskText(view, task) {
  const meId = view.me.id;
  const role = view.me.role;
  const alive = view.players.filter((p) => p.alive && !p.left);
  const others = alive.filter((p) => p.id !== meId);
  const known = (p) => p.role;   // görünümde rolü görünenler (kötü takım kendini görür)
  const nonEvil = others.filter((p) => !(isEvil(known(p)) && isEvil(role)));
  const trig = task.trigger ? `${esc(task.trigger.from, 40)} said: "${esc(task.trigger.text)}" (marked >> in the timeline)` : '';
  switch (task.kind) {
    case 'night': {
      const n = view.night || {};
      switch (role) {
        case 'vampir': {
          const ab = view.me.ability;
          return `NIGHT ${view.room.round}. You pick your OWN victim: put the player's name in "target" (allowed: ${allowed(nonEvil)}); you walk to that house and kill. `
            + 'Each vampire kills separately (see "Team picks tonight"); the same victim means one death and a Gözcü there sees both of you, a different victim means another death. '
            + (ab ? `Instead of a kill you may use your ${ab === 'iftira' ? 'İftira (frame)' : 'Temizlik (clean)'} ability on a non-evil player: write "${ab === 'iftira' ? 'iftira' : 'temizlik'}: Name" in "target". ` : '')
            + 'You may whisper one short line to your team in "say".';
        }
        case 'doktor':
          return `NIGHT ${view.room.round}. Choose who to protect in "target" (allowed: ${allowed(alive)}). Protect yourself, or the player the vampires most likely want (a claimed/revealed power role, the loudest accuser); do not rotate through players. Leave "say" empty.`;
        case 'kahin':
          return `NIGHT ${view.room.round}. Choose who to inspect in "target" (allowed: ${allowed(others)}); `
            + 'prefer someone you have not inspected yet (see your notes). Leave "say" empty.';
        case 'gozcu':
          return `NIGHT ${view.room.round}. Choose whose house to watch in "target" (allowed: ${allowed(others)}). Leave "say" empty.`;
        case 'hirsiz':
          return `NIGHT ${view.room.round}. Steal a role tonight by naming the player in "target" (allowed: ${allowed(others)}), `
            + `or "" to wait (you can steal only once). ${view.room.round >= 2 ? 'You have waited long enough: steal TONIGHT unless the only targets are clearly worthless; if the game ends before a theft you lose, and every night the good roles die off.' : 'Stealing tonight is fine too: a player who claimed a strong role or a strong suspect is a good target.'} Leave "say" empty.`;
        case 'cadi': {
          const w = n.witch || {};
          const healable = !w.healUsed && !w.heal && w.victims && w.victims.length;
          return `NIGHT ${view.room.round}. ${healable ? `To use your heal on the victim put their name in "target" (allowed: ${allowed(alive.filter((p) => w.victims.includes(p.id)))}), else "".` : 'Your heal is not possible now: "target" "".'} `
            + `${!w.poisonUsed && !w.poison ? `To poison someone put the name in "poison" (allowed: ${allowed(others)}), else "".` : '"poison" "".'} Leave "say" empty.`;
        }
        default:
          return `NIGHT ${view.room.round}. You have nothing to do tonight. Leave everything empty.`;
      }
    }
    case 'open':
      return `DAY ${view.room.round} just started. Open the talk with one short line and drive it: react to the night's news AND put one specific living player on the spot `
        + '(ask him a concrete question that fits the facts, e.g. who he suspects and why, what he did as his claimed role, why he voted as he did), or share/claim your role info if it helps your side now. '
        + 'You may set your vote if you already suspect someone.';
    case 'initiative':
      return `DAY ${view.room.round}, ${secondsLeft(view)} s left. The chat has been quiet for a while: take the initiative, like an active player. Pick ONE living player by name and do one of: `
        + 'ask him a pointed, role-aware question; press a quiet player for a soft claim (\"sen nesin, kime oy vereceksin?\"); lay out your best suspicion with its reason; propose a plan for tonight (who the Gardiyan should lock, who the Doktor should guard); '
        + 'or, if your role has useful info, share it now. No generic questions to the whole room, no repeating what you said before. You may update your vote.';
    case 'direct':
      return `${trig} — this is addressed to you. Answer them now in "say" (always say something). `
        + 'You may update your vote if the talk changed your mind.';
    case 'rolecall':
      return `${trig} — a player is asking everyone who holds a role like yours to speak. You hold it. The village needs information: `
        + 'if you have ANY concrete observation (a name you saw going out or visiting, a result, an attack that was stopped, the fact that nothing happened to your target) share it now in "say" with the night and the names, '
        + 'starting like a person ("Gözcüyüm, 1. gece Cem evden çıkıp Selin\'e gitti"). If you really have nothing, say so in a few words. Do not stay silent. You may update your vote.';
    case 'react':
      return `${trig}. If you have something useful to add, reply in "say" (or ""). You may update your vote.`;
    case 'defend':
      return `${task.byName ? `${esc(task.byName, 40)} just voted for you. ` : ''}${trig ? `${trig}. ` : ''}`
        + 'You are under suspicion: defend yourself or push back in "say". You may update your vote.';
    case 'vote': {
      const door = role === 'gardiyan'
        ? `Also choose the door to lock tonight in "target" (allowed: ${allowed(others.filter((p) => !view.day || !view.day.lock || p.id !== view.day.lock.lastTargetId))}). ` : '';
      if (task.final) {
        return `DAY ${view.room.round}, ${secondsLeft(view)} s left: the day is about to end. Make your FINAL decision now in "vote": the best-supported living suspect (allowed: ${allowed(others)}), `
          + `or "uyu" if nobody is supported by medium evidence. `
          + `${view.room.round >= 2 ? 'Day 2 or later: sleeping again hands the vampires another free kill, so "uyu" only if there is truly no signal at all; otherwise pick the player with the most signals. Split votes hang nobody: if the current leader (see <votes>) is someone YOU already suspected for a reason of your own (written in your memory), vote him rather than a lone pick. Never join the leader just to avoid a split when you have no reason against him: then vote your own suspect or "uyu". ' : ''}`
          + `${door}Give the reason in one short line in "say".`;
      }
      return `DAY ${view.room.round}, ${secondsLeft(view)} s left. EARLY check, optional: set "vote" only if you already have medium evidence or several weak signals against one living player (allowed: ${allowed(others)}); `
        + `otherwise "" is normal and "uyu" is only for later. The binding decision comes near the end of the day. ${door}A short line in "say" is optional.`;
    }
    case 'defense':
      return 'COURT: you are accused and it is your turn to defend yourself. Say one convincing line in "say" (required).';
    case 'trialVote': {
      const acc = (view.room.trial && view.room.trial.accused) || [];
      return `COURT re-vote: vote for one of the two accused in "vote" (allowed: ${allowed(alive.filter((p) => acc.includes(p.id) && p.id !== meId))}).`;
    }
    case 'hunter':
      return `You were killed, and as the Avcı you shoot one last arrow now: put the name in "target" (allowed: ${allowed(others)}). `
        + 'You may say a last line in "say".';
    default:
      return 'Nothing to do. Leave everything empty.';
  }
}

function meBlock(view, persona, rec) {
  const me = view.me;
  const role = me.role;
  const lines = [
    `Name: ${esc(me.name, 40)}${me.job && me.job.label ? ` (village job: ${esc(me.job.label, 30)}, flavour only, not your role)` : ''}. Persona: ${persona}.`,
    `Others call you "${esc(String(me.name).replace(/^bot\s+/i, ''), 40)}" (a "Bot " prefix is only a label). Any line about "${esc(String(me.name).replace(/^bot\s+/i, ''), 40)}" is about YOU: answer in the first person ("beni asmayın", "ben Köylüyüm"), never speak of yourself by name or in the third person.`,
    `Your role: ${label(role)}. ${GOAL[role] || ''}`,
    me.alive ? 'You are alive.' : 'You are dead: you can only talk to other dead players.',
  ];
  if (isEvil(role)) {
    // Takım arkadaşları oyunun başında görülenlerdir (sonradan iftirayla "Vampir" görünen masumlar değil).
    const mates = rec && rec.start && rec.start.mates;
    const team = view.players.filter((p) => p.id !== me.id && isEvil(p.role) && (!mates || mates.includes(p.id)));
    const AB = { iftira: ' · İftira ability', temizlik: ' · Temizlik ability' };
    if (me.ability) lines.push(`Your ability: ${me.ability === 'iftira' ? 'İftira (frame one non-evil player a night instead of a kill)' : 'Temizlik (clean one non-evil player a night instead of a kill)'}.`);
    lines.push(`Your evil team-mates: ${team.length ? team.map((p) => `${esc(p.name, 40)} (${label(p.role)}${AB[p.ability] || ''}${p.alive ? '' : ', dead'})`).join(', ') : 'none'}.`);
  }
  return lines.join('\n');
}

function gameBlock(view, rec) {
  const r = view.room;
  const left = secondsLeft(view);
  const phase = r.phase === 'night' ? `night ${r.round}${r.night ? ` (${r.night.stage})` : ''}`
    : r.phase === 'day' ? `day ${r.round}` : r.phase === 'trial' ? `court on day ${r.round}` : r.phase;
  const pool = [...(r.distribution || []).map(label)];
  const rp = r.rolePool;
  let extra = '';
  if (rp && rp.pick > 0) extra += `, ${rp.pick} more from: ${[...(rp.from || []), 'koylu'].map(label).join(', ')}`;
  const ab = r.settings && r.settings.roles ? [r.settings.roles.iftiraci ? 'İftira (frame)' : '', r.settings.roles.temizlikci ? 'Temizlik (clean)' : ''].filter(Boolean) : [];
  if (ab.length && (r.distribution || []).length >= 7) extra += `. Vampire abilities in play (given at the start to different vampires, at most one each; only the owner and his team know): ${ab.join(', ')}`;
  // Deli olabilir ve bot kendini Delinin sanabileceği bir rolde sanıyorsa: kendisi de Deli olabilir.
  // (Gerçek rol ile Deli aynı metni görür; bilgi sızmaz. <me> ve <players> içinde "Deli" geçmez.)
  const me = view.me;
  const madHint = possibleSet(view, rec).has('deli') && me.alive && MAD_FAKE.has(me.role)
    ? `Deli is possible in this game: as a ${label(me.role)} you could be the Deli without knowing (then your actions do nothing and your results are random).` : '';
  return [
    `Phase: ${phase}${left !== null ? `, ${left} s left` : ''}. Roles of the dead are ${r.settings && r.settings.revealRoles ? 'revealed' : 'hidden until the game ends'}.`,
    `Roles in this game (lobby rule): ${pool.join(', ')}${extra}.`,
    madHint,
    r.event ? `Village event: ${esc(r.event.name, 40)} – ${esc(r.event.desc, 160)}` : '',
  ].filter(Boolean).join('\n');
}

// Tek tur için kullanıcı metni. rec: botun bu oyundaki kaydı (SeatRecord); verilmezse görünümden ve chat
// listesinden geçici bir kayıt kurulur (testler, değerlendirme betiği).
function buildUser({ view, rec = null, chat = [], memory = '', persona = '', task }) {
  let record = rec;
  if (!record) {
    record = new SeatRecord(view.me.id);
    record.sync(view);
    for (const m of chat) record.items.push({ k: 'chat', m });
  } else record.sync(view);
  const trigger = task && task.trigger;
  const block = (tag, text) => `<${tag}>\n${text}\n</${tag}>`;
  const parts = [
    block('me', meBlock(view, persona, record)),
    block('game', gameBlock(view, record)),
    block('players', playersBlock(view, record)),
    block('facts', factsBlock(view, record)),
  ];
  const night = nightBlock(view);
  if (night) parts.push(block('night', night));
  const votes = votesBlock(view);
  if (votes) parts.push(block('votes', votes));
  parts.push(block('timeline', timelineBlock(view, record, trigger) || '(nothing yet)'));
  parts.push(block('memory', esc(memory, 800) || '(empty)'));
  parts.push(block('task', taskText(view, task || {})));
  return parts.join('\n');
}

module.exports = { SYSTEM_PROMPT, buildUser, taskText, esc };
