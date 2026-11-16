'use strict';

// Hesap istatistikleri: toplam oyun/galibiyet ve takım başına oyun/galibiyet.
const TEAMS = ['koylu', 'vampir', 'soytari'];

function emptyStats() {
  return {
    games: 0,
    wins: 0,
    teams: Object.fromEntries(TEAMS.map((t) => [t, { games: 0, wins: 0 }])),
  };
}

function applyResult(stats, team, won) {
  stats.games += 1;
  if (won) stats.wins += 1;
  // Takım kovası sadece bilinen takımlar için (ör. hiç çalamamış hırsız sadece toplamlara sayılır).
  if (!TEAMS.includes(team)) return;
  const t = stats.teams[team];
  t.games += 1;
  if (won) t.wins += 1;
}

module.exports = { TEAMS, emptyStats, applyResult };
