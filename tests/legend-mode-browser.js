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
    const durantVersions = await page.evaluate(() => ['OKC', 'GSW', 'BKN'].map(team => {
      const player = window.PERFECT_PLAYER_LEGEND_DATA[team].find(card => card.name === 'Kevin Durant');
      return { team, ovr: player && player.ovr, label: player && player._legendPeakLabel };
    }));
    assert.ok(durantVersions.every(version => version.ovr), '杜兰特应拥有雷霆、勇士和篮网三个队内巅峰版本');
    assert.equal(new Set(durantVersions.map(version => version.label)).size, 3, '杜兰特各队版本应采用不同赛季能力');
    const localHeadshot = await page.evaluate(() => getPlayerHeadshotStyle(window.PERFECT_PLAYER_LEGEND_DATA.GSW.find(card => card.name === 'Kevin Durant'), 32));
    assert.match(localHeadshot, /assets\/images\/Player\//, '已缓存球员应使用本地真人头像');
    assert.doesNotMatch(localHeadshot, /https?:\/\//, '球员头像不应依赖境外 CDN');
    ['Nikola Jokic', 'Jamal Murray', 'Aaron Gordon', 'Carmelo Anthony'].forEach(name => assert.ok(!warriors.includes(name), '勇士队史池错误混入 ' + name));
    const usedPlayerDraw = await page.evaluate(() => {
      STATE.usedPlayers = ['Stephen Curry'];
      return Array.from({ length: 30 }, () => drawBuildPlayers(window.PERFECT_PLAYER_LEGEND_DATA.GSW, 5, 'GSW').map(player => player.name)).flat();
    });
    assert.ok(!usedPlayerDraw.includes('Stephen Curry'), '已经锁定过能力的球员不应再次出现');
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
    const historicalSchedule = await page.evaluate(() => {
      STATE.mode = 'legend';
      STATE.careerTeam = 'BOS';
      STATE.season = { standings: {}, schedule: [] };
      initStandings();
      buildRealSchedule();
      const allDayTeams = Object.values(STATE.season._dayMap).flat().flatMap(game => [game.home, game.away]);
      simDayLeagueGames(1);
      return {
        games: STATE.season.schedule.length,
        opponents: STATE.season.schedule.map(game => game.opponent),
        dayTeams: allDayTeams,
        standingsTeams: Object.keys(STATE.season.standings),
        processedDays: STATE.season._processedDays.size,
        leagueGames: STATE.season._leagueGameLog.length
      };
    });
    assert.equal(historicalSchedule.games, 82, '1984-85 应按真实赛季长度生成 82 场赛程');
    assert.ok(historicalSchedule.opponents.every(team => league1985.teams.includes(team)), '历史赛程不应包含当年不存在的对手');
    assert.ok(historicalSchedule.dayTeams.every(team => league1985.teams.includes(team)), '联盟每日赛程不应包含当年不存在的球队');
    assert.deepEqual(historicalSchedule.standingsTeams.sort(), league1985.teams.slice().sort(), '排名表应只包含当季球队');
    assert.equal(historicalSchedule.processedDays, 1, '历史联盟首个比赛日应能正常模拟');
    assert.ok(historicalSchedule.leagueGames > 0, '历史联盟首个比赛日应产生其他球队赛果');
    const lockoutSchedule = await page.evaluate(async () => {
      await window.loadLegendLeagueSeason(1999);
      STATE.mode = 'legend';
      STATE.careerTeam = 'NYK';
      STATE.season = { standings: {}, schedule: [] };
      initStandings();
      buildRealSchedule();
      return STATE.season.schedule.length;
    });
    assert.equal(lockoutSchedule, 50, '1998-99 缩水赛季应生成 50 场赛程');
    const historicalDraft = await page.evaluate(async () => {
      await window.loadLegendLeagueSeason(1997);
      STATE.mode = 'legend';
      STATE.legendSeason = 1997;
      STATE.career = { seasonCount: 1 };
      STATE._leagueChanges = { retired: [], rookies: [], teamChanges: {}, trades: [] };
      NBA2K_TEAMS.forEach(team => { STATE._leagueChanges.teamChanges[team] = { before: NBA2K_DATA[team].length, retired: [], rookies: [] }; });
      const handled = processHistoricalDraft();
      return {
        handled,
        report: STATE._leagueChanges.historicalDraft,
        duncanSpurs: NBA2K_DATA.SAS.some(player => player.name === 'Tim Duncan'),
        duncanElsewhere: NBA2K_TEAMS.some(team => team !== 'SAS' && NBA2K_DATA[team].some(player => player.name === 'Tim Duncan')),
        billupsCeltics: NBA2K_DATA.BOS.some(player => player.name === 'Chauncey Billups'),
        mcgradyRaptors: NBA2K_DATA.TOR.some(player => player.name === 'Tracy McGrady')
      };
    });
    assert.equal(historicalDraft.handled, true, '传奇模式应使用真实历史选秀班');
    assert.equal(historicalDraft.report.year, 1997, '1996-97 赛季结束后应进入 1997 年选秀');
    assert.equal(historicalDraft.duncanSpurs, true, '1997 邓肯必须加入马刺');
    assert.equal(historicalDraft.duncanElsewhere, false, '1997 邓肯不应被模拟战绩分配给其他球队');
    assert.equal(historicalDraft.billupsCeltics, true, '1997 比卢普斯必须加入凯尔特人');
    assert.equal(historicalDraft.mcgradyRaptors, true, '1997 麦迪必须加入猛龙');
    const fontsReady = await page.evaluate(async () => {
      await Promise.all([document.fonts.load('700 16px Fredoka'), document.fonts.load('600 16px Nunito'), document.fonts.load('500 16px "Noto Sans SC"')]);
      return ['Fredoka', 'Nunito', 'Noto Sans SC'].every(font => document.fonts.check('16px "' + font + '"'));
    });
    assert.equal(fontsReady, true, '原版字体应从本地资源正常加载');
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
