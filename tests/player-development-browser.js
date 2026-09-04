'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const modules = 'C:\\Users\\10352\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules';
const { chromium } = require(path.join(modules, 'playwright'));
const browserPath = ['C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe','C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'].find(fs.existsSync);

async function main() {
  const server = spawn('C:\\Users\\10352\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe', ['-m','http.server','8141'], { cwd:root, stdio:'ignore' });
  let browser;
  try {
    await new Promise(resolve => setTimeout(resolve, 600));
    browser = await chromium.launch({ headless:true, executablePath:browserPath });
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:8141/nba-perfect-player.html', { waitUntil:'networkidle' });
    const result = await page.evaluate(async () => {
      const ratings = {};
      for (const year of [2003, 2014, 2016, 2018]) {
        await window.loadLegendLeagueSeason(year);
        for (const team of NBA2K_TEAMS) for (const p of (NBA2K_DATA[team] || [])) {
          if (['Tim Duncan','Kevin Durant','Stephen Curry','LeBron James'].includes(p.name)) ratings[p.name + '-' + year] = Math.max(ratings[p.name + '-' + year] || 0, p.ovr);
        }
      }
      const attrs = {}; SIM_CONFIG.ATTR_LIST.forEach(k => attrs[k] = 65);
      const oden = Object.assign({ name:'Greg Oden', ovr:65, _age:20, _realId:'local:gregoden', _potentialSeed:8, _draftRatingSeed:65, _historicalBaselineOvr:65, _potentialRealization:1.08 }, attrs);
      const originalRngNext = rngNext;
      rngNext = () => .8;
      for (let age=20; age<=27; age++) evolveLegendDevelopment(oden, age);
      const oldShooter = Object.assign({ name:'Old Shooter', ovr:90, _age:35, _potentialSeed:10, _potentialRealization:1, _peakStartAge:26, _peakEndAge:32 }, attrs, {threePT:95, ATH:90, DNK:88, PAS:90});
      const before = {threePT:oldShooter.threePT, ATH:oldShooter.ATH, PAS:oldShooter.PAS};
      evolveDynamicLeaguePlayer(oldShooter, 36);
      rngNext = originalRngNext;
      return { ratings, oden:{ovr:oden.ovr, offset:oden._developmentOffset, ceiling:oden._realizedPotentialCeiling, retire:getLeagueRetirementChance(oden,28)}, old:{before, after:{threePT:oldShooter.threePT,ATH:oldShooter.ATH,PAS:oldShooter.PAS}} };
    });
    assert.ok(result.ratings['Tim Duncan-2003'] >= 96, 'MVP 邓肯应达到历史级能力');
    assert.ok(result.ratings['Kevin Durant-2014'] >= 95, 'MVP 杜兰特不应停留在 80 多');
    assert.ok(result.ratings['Stephen Curry-2016'] >= 95, '全票 MVP 库里应达到历史级能力');
    assert.ok(result.ratings['LeBron James-2018'] >= 96, '巅峰詹姆斯不应只有 89');
    assert.ok(result.oden.ovr >= 88 && result.oden.ceiling >= 93, '高兑现路线的奥登应能成长为一线球星');
    assert.ok(result.oden.retire < 100, '改写生涯的高潜球员不应按现实退役年强退');
    assert.ok((result.old.before.ATH-result.old.after.ATH) >= (result.old.before.threePT-result.old.after.threePT), '运动能力应比投射更早衰退');
    console.log(JSON.stringify(result, null, 2));
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}
main().catch(error => { console.error(error); process.exitCode=1; });
