'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const runtimeModules = 'C:\\Users\\10352\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules';
const { chromium } = require(path.join(runtimeModules, 'playwright'));
const browserPath = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
].find(fs.existsSync);

async function main() {
  const server = spawn('C:\\Users\\10352\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe', ['-m', 'http.server', '8137'], {
    cwd: root,
    stdio: 'ignore'
  });
  let browser;
  try {
    await new Promise(resolve => setTimeout(resolve, 700));
    browser = await chromium.launch({ headless: true, executablePath: browserPath });
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto('http://127.0.0.1:8137/nba-perfect-player.html', { waitUntil: 'networkidle' });
    await page.locator('.feature-card').filter({ hasText: '传奇模式' }).locator('.fc-btn').click();
    await page.fill('#character-name', '传奇测试员');
    await page.click('#screen-character .btn-primary');
    await page.waitForSelector('#screen-era.active');
    await page.locator('.era-decade').filter({ hasText: '1980s' }).click();
    await page.locator('.era-season').filter({ hasText: '1984-85赛季' }).click();
    await page.click('#era-confirm-btn');
    await page.waitForSelector('#screen-position.active', { timeout: 15000 });
    const report = await page.evaluate(() => window.PERFECT_PLAYER_LEGEND_REPORT);
    assert.ok(report.players >= 300, '队史传奇球员池应至少包含 300 人');
    assert.ok(report.teams >= 25, '队史传奇球员池应至少包含 25 支球队');
    await page.click('.pos-card');
    await page.click('#screen-position .btn-primary');
    await page.click('#br-slot-area .slot-btn');
    await page.waitForTimeout(3300);
    assert.equal(await page.locator('.br-player').count(), 5);
    assert.match(await page.locator('#br-roster-area').innerText(), /队史传奇库 · 五位置各前五/);
    const magic1991 = await page.evaluate(async () => {
      await window.loadLegendSeason(1991);
      return window.PERFECT_PLAYER_LEGEND_DATA.ORL.map(player => ({
        name: player.name, ovr: player.ovr, peak: player._legendPeak,
        peakLabel: player._legendPeakLabel, supplemental: player._legendRosterSupplement
      }));
    });
    assert.equal(magic1991.length, 25, '魔术队应固定包含 25 张队史巅峰卡');
    assert.ok(magic1991.every(player => player.peak), '1990-91 魔术队应全部使用生涯巅峰能力卡');
    const warriors = await page.evaluate(() => window.PERFECT_PLAYER_LEGEND_DATA.GSW.map(player => player.name));
    ['Stephen Curry', 'Klay Thompson', 'Kevin Durant', 'Draymond Green', "Wilt Chamberlain"].forEach(name => assert.ok(warriors.includes(name), '勇士队史池缺少 ' + name));
    ['Nikola Jokic', 'Jamal Murray', 'Aaron Gordon', 'Carmelo Anthony'].forEach(name => assert.ok(!warriors.includes(name), '勇士队史池错误混入 ' + name));
    const league1985 = await page.evaluate(async () => {
      const historicalReport = await window.loadLegendLeagueSeason(1985);
      return {
        report: historicalReport,
        teams: NBA2K_TEAMS.slice(),
        knicks: NBA2K_DATA.NYK.map(player => player.name),
        celtics: NBA2K_DATA.BOS.map(player => player.name),
        lakers: NBA2K_DATA.LAL.map(player => player.name)
      };
    });
    assert.equal(league1985.report.season, 1985);
    assert.equal(league1985.teams.length, 23, '1984-85 联盟应包含 23 支球队');
    assert.ok(league1985.knicks.includes('Bernard King'), '1984-85 尼克斯应包含 Bernard King');
    assert.ok(!league1985.knicks.includes('Jalen Brunson'), '1984-85 尼克斯不应混入现役球员');
    assert.ok(league1985.celtics.includes('Larry Bird'), '1984-85 凯尔特人应包含 Larry Bird');
    assert.ok(league1985.lakers.includes('Magic Johnson'), '1984-85 湖人应包含 Magic Johnson');
    assert.ok(!league1985.teams.includes('ORL'), '1984-85 联盟不应包含尚未成立的魔术队');
    console.log(JSON.stringify({ report, cards: 5, magic1991, league1985, status: 'ok' }, null, 2));
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
