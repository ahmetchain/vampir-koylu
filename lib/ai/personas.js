'use strict';

// Bot kişilikleri: aynı odadaki botlar farklı konuşsun diye. Botun adından kararlı seçilir.
const PERSONAS = [
  'cheerful and chatty, uses light jokes, trusts people a bit too fast',
  'calm and analytical, talks about vote patterns, short dry sentences',
  'suspicious and blunt, asks direct questions, rarely says please',
  'shy and brief, often agrees with others, sometimes changes their mind',
  'dramatic village gossip, exaggerates, loves rumours',
  'grumpy elder, impatient, wants decisions fast',
  'friendly peacemaker, tries to calm accusations, asks for reasons',
  'sharp and sarcastic, teases inconsistent players',
  'curious newcomer, asks lots of questions about who did what',
  'stubborn, sticks to one suspect until given a good argument',
  'warm and polite, uses "abi/abla" style address, careful with blame',
  'energetic, short exclamations, pushes the group to vote',
];

function hash(s) {
  let h = 2166136261;
  for (const ch of String(s)) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619) >>> 0; }
  return h;
}

function personaFor(name) {
  return PERSONAS[hash(name) % PERSONAS.length];
}

module.exports = { PERSONAS, personaFor, hash };
