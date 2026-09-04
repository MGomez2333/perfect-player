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
    await page.evaluate(() => { STATE.mode = 'current'; showScreen('screen-position'); renderPositionSelect(); });
    await page.locator('.pos-card').first().click();
    await page.locator('#screen-position .btn-primary').click();
    await page.waitForSelector('#screen-build.active');
    await page.locator('#screen-build .build-edit-btn').click();
    await page.waitForSelector('#screen-position.active');
    assert.equal(await page.evaluate(() => STATE.position), null, '确认位置后应能返回并重新选择');
    const historicalPlayoffs = await page.evaluate(async () => {
      await window.loadLegendSeason(1977);
      await window.loadLegendLeagueSeason(1977);
      STATE.mode = 'legend'; STATE.legendSeason = 1977; STATE.career = { seasonCount:1 };
      STATE.season = { standings:{} };
      NBA2K_TEAMS.forEach((team, i) => { STATE.season.standings[team] = { wins:80-i, losses:i }; });
      const east = buildPlayoffBracket('EAST');
      const eastAuto = buildPlayoffBracket('EAST');
      autoSimConferenceBracket(eastAuto);
      const eastBye = buildPlayoffBracket('EAST');
      resolveSixTeamByeFirstRound(eastBye);
      const poolTeams = getAvailableBuildTeams();
      const format1977 = getPlayoffFormat();
      STATE.legendSeason = 1984;
      const format1984 = getPlayoffFormat();
      STATE.legendSeason = 2003;
      const format2003 = getPlayoffFormat();
      return {
        poolTeams:poolTeams.length,
        leagueTeams:NBA2K_TEAMS.length,
        format1977, format1984, format2003,
        autoChampion:eastAuto.confChampion,
        autoFirstRoundWins:eastAuto.results.filter(r => r.round === 0).map(r => r.winnerWins),
        byeRoundReady:eastBye.rounds[1].every(s => s.high && s.low),
        firstRoundSeeds:east.rounds[0].map(s => [east.teams.indexOf(s.high)+1, east.teams.indexOf(s.low)+1]),
        byeSeeds:east.rounds[1].map(s => east.teams.indexOf(s.high)+1)
      };
    });
    assert.ok(historicalPlayoffs.poolTeams > historicalPlayoffs.leagueTeams, '建球员抽卡池不应受当年联盟球队限制');
    assert.equal(historicalPlayoffs.format1977.teamsPerConference, 6);
    assert.equal(historicalPlayoffs.format1977.firstRoundWins, 2);
    assert.deepEqual(historicalPlayoffs.firstRoundSeeds, [[3,6],[4,5]]);
    assert.deepEqual(historicalPlayoffs.byeSeeds, [1,2]);
    assert.ok(historicalPlayoffs.autoChampion);
    assert.ok(historicalPlayoffs.autoFirstRoundWins.every(wins => wins === 2));
    assert.equal(historicalPlayoffs.byeRoundReady, true);
    assert.equal(historicalPlayoffs.format1984.firstRoundWins, 3);
    assert.equal(historicalPlayoffs.format2003.firstRoundWins, 4);
    await page.evaluate(() => { STATE.mode = 'legend'; window.showLegendEraSelect(); });
    await page.waitForSelector('#screen-era.active .era-decade');
    const eraLabels = await page.locator('.era-decade').allTextContents();
    assert.ok(eraLabels.includes('1970s'));
    assert.ok(!eraLabels.includes('1960s'), '历史模式不应再提供1977年以前的赛季');
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
