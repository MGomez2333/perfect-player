"""Verify all China DLC portraits resolve after normal URL decoding."""
import json
from pathlib import Path
from urllib.parse import unquote, urlparse

root = Path(__file__).resolve().parents[1]
module = (root / 'dynasty-china-legends-portraits-15cd8a1220ab.js').read_text()
portraits = json.loads(module.split('=', 1)[1].rstrip(';\n'))
assert len(portraits) == 13
for player, url in portraits.items():
    prefix = '/perfect-player/basketball-parallel/'
    path = unquote(urlparse(url).path)
    assert path.startswith(prefix), (player, url)
    asset = root / path[len(prefix):]
    assert asset.is_file(), (player, 'URL resolves to missing file', asset)
    data = asset.read_bytes()
    assert data[:4] == b'RIFF' and data[8:12] == b'WEBP', (player, 'invalid WebP')
print('All 13 original China DLC portraits resolve to local WebP images.')
