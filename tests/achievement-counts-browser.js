'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const runtimeModules = 'C:\\Users\\10352\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules';
const { chromium } = require(path.join(runtimeModules, 'playwright'));
const browserPath = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
].find(fs.existsSync);

async function main() {
  const root = path.resolve(__dirname, '..');
  const server = spawn('C:\\Users\\10352\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe', ['-m', 'http.server', '8141'], { cwd: root, stdio: 'ignore' });
  let browser;
  try {
    await new Promise(resolve => setTimeout(resolve, 700));
    browser = await chromium.launch({ headless: true, executablePath: browserPath });
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto('http://127.0.0.1:8141/nba-perfect-player.html', { waitUntil: 'networkidle' });
    const report = await page.evaluate(() => {
      PP_FX._suppressAchievementPopups = true;
      PP_FX.resetAchievements();
      const me = getHupuDisplayName();
      const award = (act, label, seasonNum) => ({ act, label, seasonNum, winner: me, isUser: true });
      STATE.gameId = 'achievement-count-test';
      STATE.finalOVR = 79;
      STATE._careerSaved = false;
      STATE.career = { seasonCount: 7, seasons: [], honors: [], draft: null, retired: false };
      for (let n = 1; n <= 7; n++) {
        if (n <= 5) STATE.career.honors.push(award('mvp', 'MVP', n), award('dpoy', 'DPOY', n));
        STATE.career.honors.push(award('champion', '总冠军', n));
      }
      STATE.season = { games: [], wins: 0, losses: 0, awards: [], playerStats: {}, isPlayoffs: false, playoffBracket: null };
      for (let n = 0; n < 100; n++) STATE.season.games.push({ stats: n < 50 ? { pts: 20, reb: 10, ast: 10 } : { pts: 20, reb: 10, ast: 3 } });
      const facts = PP_FX.syncAchievements();
      const got = Object.keys(PP_FX.getUnlocked());
      PP_FX.openPanel();
      return {
        facts,
        got,
        definitions: PP_FX.ACHIEVEMENTS.length,
        cards: document.querySelectorAll('.pp-ach-item').length,
        panelText: document.querySelector('#pp-ach-panel').innerText
      };
    });
    assert.equal(report.definitions, 44);
    assert.equal(report.cards, 44);
    assert.equal(report.facts.mvp, 5);
    assert.equal(report.facts.dpoy, 5);
    assert.equal(report.facts.champion, 7);
    assert.equal(report.facts.doubleDoubles, 100);
    assert.equal(report.facts.tripleDoubles, 50);
    ['mvp_x5', 'dpoy_x5', 'champion_x7', 'double_double_x100', 'triple_double_x50'].forEach(id => assert.ok(report.got.includes(id), id + ' should unlock'));
    assert.match(report.panelText, /本生涯 100 \/ 100/);

    const recordReport = await page.evaluate(() => {
      document.querySelector('#pp-ach-close').click();
      STATE._careerSaved = false;
      STATE.career.totalStats = { pts:40000, reb:20000, ast:14000, stl:3000, blk:3500, fgm:15000, fga:29500, threeM:4000, tov:5000, games:1500 };
      STATE.career.playoffStats = { pts:8000, reb:2000, ast:1900, stl:450, blk:500, fgm:2800, fga:5500, threeM:480, tov:900, games:280, doubleDoubles:140, tripleDoubles:25 };
      STATE.career.seasons = [{ regularSingleGameRecords:{pts:72,reb:24,ast:18,stl:7,blk:8,fgm:25,threeM:10,ftm:18,tov:8,misses:25}, playoffSingleGameRecords:{pts:55,reb:22,ast:16,stl:6,blk:7,fgm:20,threeM:9,tov:7} }];
      STATE.season.playerStats = { pts:3440, reb:3924, ast:1806, stl:265, blk:330, fgm:961, fga:2002, threeM:248, tov:650, games:122 };
      PP_FX.openPanel();
      document.querySelector('#pp-ach-tab-records').click();
      return {
        cards: document.querySelectorAll('.pp-record-card').length,
        text: document.querySelector('#pp-ach-view-records').innerText,
        totals: PP_FX.syncCareerRecords()
      };
    });
    assert.equal(recordReport.cards, 41);
    assert.equal(recordReport.totals.pts, 43440);
    assert.equal(recordReport.totals.misses, 15541);
    assert.match(recordReport.text, /你已成为新的 NBA 历史第一|追平 NBA 历史纪录/);
    assert.match(recordReport.text, /斯蒂芬·库里 · 4,248记/);
    assert.match(recordReport.text, /常规赛单场最高/);
    assert.match(recordReport.text, /季后赛单场最高/);
    assert.match(recordReport.text, /季后赛生涯累计/);
    assert.match(recordReport.text, /单场得分[\s\S]*72/);
    assert.match(recordReport.text, /季后赛单场得分[\s\S]*55/);
    assert.match(recordReport.text, /季后赛生涯得分[\s\S]*8,000/);

    const archiveReport = await page.evaluate(() => {
      PP_FX.resetAchievements();
      STATE.gameId = 'archive-count-test';
      STATE.career = { seasonCount: 1, honors: [], draft: null, retired: false, seasons: [{ seasonNum: 1, awards: [], gameMilestones: { doubleDoubles: 10, tripleDoubles: 3 } }] };
      STATE.season = { games: Array.from({length: 5}, () => ({stats:{pts:20, reb:10, ast:10}})), awards: [], playerStats: {} };
      STATE._careerSaved = false;
      const active = PP_FX.syncAchievements();
      STATE._careerSaved = true;
      const saved = PP_FX.syncAchievements();
      return { active, saved };
    });
    assert.equal(archiveReport.active.doubleDoubles, 15);
    assert.equal(archiveReport.active.tripleDoubles, 8);
    assert.equal(archiveReport.saved.doubleDoubles, 10);
    assert.equal(archiveReport.saved.tripleDoubles, 3);
    console.log(JSON.stringify({ status: 'ok', report, archiveReport }, null, 2));
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
