const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (...parts) => fs.readFileSync(path.join(root, ...parts), 'utf8');
const manifest = JSON.parse(read('assets', 'data', 'historical', 'manifest.json'));
const players = JSON.parse(read('assets', 'data', 'historical', 'players.json'));
const seasonFiles = manifest.files.playerSeasons || [];

assert.ok(seasonFiles.length >= 60, '应覆盖至少 60 个历史赛季');
assert.ok(players.players.length >= 1000, '历史球员主数据库数量不足');

let seasonRows = 0;
let seasonsWithPlayers = 0;
seasonFiles.forEach((file) => {
  const payload = JSON.parse(read('assets', 'data', 'historical', file));
  const rows = (payload.rows || []).filter((row) => row.type === 'regular');
  seasonRows += rows.length;
  if (rows.length) seasonsWithPlayers += 1;
});
assert.equal(seasonsWithPlayers, seasonFiles.length, '存在空的历史赛季文件');
assert.ok(seasonRows >= 12000, '逐赛季球员记录数量不足');
const peaks = JSON.parse(read('assets', 'data', 'perfect-player-legend-peaks.json'));
assert.ok(Object.keys(peaks.players || {}).length >= 4000, '生涯巅峰能力卡数量不足');
assert.equal(Object.keys(peaks.teams || {}).length, 30, '队史传奇库必须覆盖 30 支球队');
Object.entries(peaks.teams || {}).forEach(([team, cards]) => {
  assert.equal(cards.length, 25, `${team} 应有 25 张队史传奇卡`);
  const positions = new Map();
  cards.forEach(card => positions.set(card.pos, (positions.get(card.pos) || 0) + 1));
  [1, 2, 3, 4, 5].forEach(pos => assert.equal(positions.get(pos), 5, `${team} 的位置 ${pos} 应有 5 张卡`));
});

const extension = read('assets', 'js', 'perfect-player-hupu-extensions.js');
assert.match(extension, /showLegendEraSelect/);
assert.match(extension, /loadLegendSeason/);
assert.match(extension, /player_seasons_/);
assert.match(extension, /BRK:'BKN'/);
assert.match(extension, /CHO:'CHA'/);
assert.match(extension, /MNL:'LAL'/);

['index.html', 'nba-perfect-player.html'].forEach((file) => {
  const html = read(file);
  assert.match(html, /title: '传奇模式'/, `${file} 缺少传奇模式入口`);
  assert.match(html, /id="screen-era"/, `${file} 缺少年代选择页`);
  assert.match(html, /getAvailableBuildTeams/, `${file} 未按历史赛季筛选球队`);
  assert.match(html, /STATE\.mode === 'legend' \? \[\]/, `${file} 传奇模式仍可能混入惊喜卡`);
});

console.log(JSON.stringify({
  historicalPlayers: players.players.length,
  peakCards: Object.keys(peaks.players || {}).length,
  seasons: seasonFiles.length,
  seasonRows,
  status: 'ok'
}, null, 2));
