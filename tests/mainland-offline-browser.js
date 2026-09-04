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
  const server = spawn('C:\\Users\\10352\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe', ['-m','http.server','8142'], { cwd:root, stdio:'ignore' });
  let browser;
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    browser = await chromium.launch({ headless:true, executablePath:browserPath });
    const page = await browser.newPage();
    const external = [];
    await page.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.hostname !== '127.0.0.1') { external.push(route.request().url()); return route.abort(); }
      return route.continue();
    });
    const started = Date.now();
    await page.goto('http://127.0.0.1:8142/nba-perfect-player.html', { waitUntil:'networkidle' });
    const initialMs = Date.now() - started;
    const legendStarted = Date.now();
    await page.evaluate(async () => {
      await window.loadLegendSeason(1999);
      await window.loadLegendLeagueSeason(1999);
    });
    const legendMs = Date.now() - legendStarted;
    const sizes = ['players_runtime.json','draft_classes_runtime.json'].map(name => fs.statSync(path.join(root,'assets','data','historical',name)).size);
    assert.deepEqual(external, [], '页面和传奇模式不应尝试连接境外域名');
    assert.ok(sizes[0] < 1.5 * 1024 * 1024, '浏览器球员元数据应小于 1.5MB');
    assert.ok(sizes[1] < 1.5 * 1024 * 1024, '浏览器选秀元数据应小于 1.5MB');
    console.log(JSON.stringify({ initialMs, legendMs, externalRequests:external.length, runtimeDataMB:Math.round((sizes[0]+sizes[1])/10485.76)/100 }, null, 2));
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}
main().catch(error => { console.error(error); process.exitCode=1; });
