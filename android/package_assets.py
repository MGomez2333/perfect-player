"""Package the checked-in release, with no network downloads and no changes to web saves."""
from pathlib import Path
import hashlib, json, re, shutil

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT.parent / 'basketball-parallel'
DEST = ROOT / 'app/src/main/assets'
manifest = json.loads((SOURCE / 'asset-manifest.json').read_text())
excluded = {'dynasty-app.js', 'dynasty-template.js', 'dynasty-logos.js', 'development-integration.js',
            '__ai_app.html', 'dynasty-home.html', 'package.json', 'package-lock.json',
            'asset-manifest.json', 'dynasty-source-manifest.json', 'obsolete-files.json'}
if DEST.exists(): shutil.rmtree(DEST)
DEST.mkdir(parents=True)
for source in SOURCE.iterdir():
    if source.is_file() and source.suffix in {'.js', '.json', '.html', '.css', '.svg', '.png', '.webp', '.jpg', '.woff2'} and source.name not in excluded:
        shutil.copy2(source, DEST / source.name)
shutil.copytree(SOURCE / 'external', DEST / 'external')
(DEST / 'offline-urls.json').write_text(json.dumps({url:path.split('?')[0] for url,path in manifest['files'].items() if '/external/' in path}))
# Keep all same-origin absolute paths used by dynamic imports, Workers and images.
for url, path in manifest['files'].items():
    relative = path.split('?')[0].removeprefix('/perfect-player/basketball-parallel/')
    if relative.startswith('external/'):
        assert (DEST / relative).is_file(), relative
app = DEST / 'dynasty-app-release.js'
app.write_text(app.read_text() + '''
window.ParallelOffline = {
 async flush(){try{if(runtime){const saved=await runtime.flushSave();if(saved?.ok===false)throw Error(saved.message);}}catch(e){window.OfflineHost?.message(e.message);}},
 async back(){try{if(busy)return;if(runtime?.isSimulationRunning()||runtime?.isRewardPending()){window.OfflineHost?.message('请先停止模拟，并等待当前比赛或奖励保存完成。');return;}if(runtime){await action(returnHome);}else{window.OfflineHost?.confirmExit();}}catch(e){window.OfflineHost?.message(e.message);}}
};
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')window.ParallelOffline.flush();});
''')
app.write_text(app.read_text().replace('存档仅保存在当前浏览器；新建王朝会保留已有档。',
 '离线 APK · 存档保存在本应用内。覆盖安装可保留存档；卸载或清除应用数据会删除存档。'))
index = DEST / 'index.html'
index.write_text(index.read_text().replace('独立王朝版 · ', '离线 APK · '))
files = {str(p.relative_to(DEST)): hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(DEST.rglob('*')) if p.is_file()}
(ROOT / 'app/build').mkdir(parents=True, exist_ok=True)
(ROOT / 'app/build/offline-assets.json').write_text(json.dumps({'version':manifest['version'], 'files':files},ensure_ascii=False))
print(f"Packaged {len(files)} files, {sum(p.stat().st_size for p in DEST.rglob('*') if p.is_file()) / 1024**2:.1f} MiB, version {manifest['version']}")
