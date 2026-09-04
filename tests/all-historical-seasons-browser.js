'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('C:/Users/10352/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browserPath = ['C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files/Microsoft/Edge/Application/msedge.exe'].find(fs.existsSync);

(async () => {
  const browser = await chromium.launch({ headless:true, executablePath:browserPath });
  try {
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:8035/nba-perfect-player.html', { waitUntil:'networkidle' });
    const results = await page.evaluate(async () => {
      const manifest = await fetch('assets/data/historical/manifest.json').then(r => r.json());
      const years = manifest.files.playerSeasons.map(f => Number(f.match(/(\d{4})/)[1])).sort((a,b) => a-b);
      const teamGames = await fetch('assets/data/historical/season_team_games.json').then(r => r.json());
      const output = [];
      for (const year of years) {
        const report = await window.loadLegendLeagueSeason(year);
        output.push({ year, teams:report.teams, expectedTeams:Object.keys(teamGames.seasons[String(year)]).length, players:report.players, games:report.seasonGames });
      }
      return output;
    });
    assert.equal(results.length, 79);
    assert.deepEqual(results.map(r => r.year), Array.from({length:79}, (_,i) => 1947+i));
    assert.ok(results.every(r => r.teams >= 8 && r.players >= 80 && r.games > 0));
    const mismatches = results.filter(r => r.teams !== r.expectedTeams);
    assert.deepEqual(mismatches, [], '每年加载球队数应与真实联盟球队数一致');
    console.log(JSON.stringify({ seasons:results.length, first:results[0], last:results.at(-1), minimumTeams:Math.min(...results.map(r=>r.teams)), minimumPlayers:Math.min(...results.map(r=>r.players)) }, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode=1; });
