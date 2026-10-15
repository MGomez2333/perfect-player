"""Verify the signed APK contains the exact staged assets and local module graph."""
import hashlib, json, re, sys, zipfile
from pathlib import Path
from urllib.parse import urlsplit, unquote
root = Path(__file__).resolve().parent
manifest = json.loads((root/'app/build/offline-assets.json').read_text())
apk = Path(sys.argv[1])
with zipfile.ZipFile(apk) as archive:
    assert archive.testzip() is None
    names = set(archive.namelist())
    for name, digest in manifest['files'].items():
        content = archive.read('assets/'+name)
        assert hashlib.sha256(content).hexdigest() == digest, name
    missing = set()
    for name in names:
        if not name.startswith('assets/') or not name.endswith(('.js','.html','.css')): continue
        text = archive.read(name).decode()
        for ref in re.findall(r'[\x22\x27`]((?:\./|/perfect-player/basketball-parallel/)[^\x22\x27`\s]*?\.(?:js|css|json)(?:\?[^\x22\x27`\s]*)?)[\x22\x27`]',text):
            if '${' in ref or '\\' in ref: continue
            path = unquote(urlsplit(ref).path)
            target = 'assets/'+path.removeprefix('/perfect-player/basketball-parallel/').removeprefix('./')
            if target not in names: missing.add((name,ref))
    assert not missing, sorted(missing)
    assert 'classes.dex' in names and 'AndroidManifest.xml' in names
print(f'PASS: APK integrity, {len(manifest["files"])} exact bundled assets, all static JS/CSS/JSON references resolve.')
print('SHA256:',hashlib.sha256(apk.read_bytes()).hexdigest())
