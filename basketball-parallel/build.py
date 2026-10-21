from pathlib import Path
from next_patches import patch_next
from frontend_patches import patch_dynasty, patch_progression
from development_patches import patch_development, patch_entry_navigation
import urllib.request,concurrent.futures,re,json,hashlib,time,zipfile,io
from urllib.parse import urljoin,urlparse
ROOT=Path(__file__).parent
BASE='https://activity-static.hupu.com/shaper/published/app_293f0a2d1c/'
PREFIX='/perfect-player/basketball-parallel/'
SKIP=('hupu-web-guard.js','colorbox-ai_v2.1.109.js','26911-soeiccrc','26813-eadw44rc','2686-h8to7krc')
def target(u):
 if u.startswith(BASE):return u[len(BASE):].split('?')[0]
 name=urlparse(u).path.split('/')[-1]
 # Use URL-safe filenames: literal percent escapes otherwise decode to a different file.
 if '%' in name or not name.isascii():name='asset'+Path(name).suffix
 return 'external/'+hashlib.sha256(u.encode()).hexdigest()[:12]+'-'+name
def fetch(u):
 path=ROOT/target(u)
 if path.exists() and path.stat().st_size>0:return path.read_bytes()
 legacy=ROOT/('external/'+hashlib.sha256(u.encode()).hexdigest()[:12]+'-'+urlparse(u).path.split('/')[-1])
 if legacy!=path and legacy.is_file() and legacy.stat().st_size>0:
  path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(legacy.read_bytes());return path.read_bytes()
 for n in range(4):
  try:
   b=urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0'}),timeout=60).read()
   if b[:100].lower().find(b'<html')>=0 and not u.endswith('.html'):raise ValueError('HTML returned for asset')
   path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(b);return b
  except Exception:
   if n==3:raise
   time.sleep(n+1)
def refs(s,u):
 return {urljoin(u,v) for v in re.findall(r'["\x27`]((?:https?://|\./|\.\./|/)[^"\x27`\s]*?\.(?:js|css|json|csv)(?:\?[^"\x27`\s]*)?)["\x27`]',s) if '${' not in v and '\\' not in v and not any(k in v for k in SKIP)}
VERSION='20261021-r42.2'
snapshot=zipfile.ZipFile(io.BytesIO(b''.join(p.read_bytes() for p in sorted(ROOT.glob('dynasty-source.part*')))))
manifest=json.loads((ROOT/'dynasty-source-manifest.json').read_text())
entries={u:snapshot.read(target(u)).decode().replace("\r\n","\n") for u in manifest}
for u,s in entries.items():
 if hashlib.sha256(s.encode()).hexdigest()!=manifest[u]:raise RuntimeError('Pinned source checksum mismatch: '+u)
# Include only the standalone dynasty shell in the build graph.
local=['dynasty-home.html','dynasty-app.js','dynasty-template.js','dynasty-logos.js']
for name in local:entries[BASE+name]=(ROOT/name).read_text()
images=set()
for s in entries.values():
 images.update(re.findall(r'https?://[^\s"\x27`<>\\)]+?\.(?:webp|png|jpg|jpeg|gif|svg|woff2?)(?:\?[^\s"\x27`<>\\)]*)?',s))
images={u for u in images if '${' not in u and '{' not in u and urlparse(u).hostname in ['activity-static.hoopchina.com.cn','activity-static.hupu.com']}
fail=[]
def image_job(u):
 try:return u,len(fetch(u)),None
 except Exception as e:return u,0,str(e)
with concurrent.futures.ThreadPoolExecutor(max_workers=32) as ex:
 for i,(u,size,error) in enumerate(ex.map(image_job,sorted(images))):
  if error:fail.append({'url':u,'error':error})
  if i%200==0:print('images',i,'/',len(images),'failed',len(fail),flush=True)
if fail:
 (ROOT/'asset-failures.json').write_text(json.dumps(fail,ensure_ascii=False,indent=2));raise RuntimeError(f'{len(fail)} missing assets')
urlmap={u:PREFIX+target(u)+('?v='+VERSION if '.js' in u else '') for u in sorted(entries.keys()|images)}
url_pattern=re.compile('|'.join(re.escape(u) for u in sorted(urlmap,key=len,reverse=True)))
for u,s in entries.items():
 if 'dynasty-ui-' in u:s=patch_entry_navigation(s)
 if 'dynasty-worker-' in u:s=patch_next(patch_development(patch_progression(s),worker=True),worker=True)
 if 'dynasty-runtime-' in u:s=patch_next(patch_development(patch_dynasty(s)))
 if 'dynasty-runtime-' in u or 'dynasty-worker-' in u:
  # Keep this release on the existing economic rules in runtime and worker.
  s=re.sub(r'function activateManagementR73\(\)\{.*?\n\}', 'function activateManagementR73(){return false;}',s,flags=re.S)
  s=re.sub(r'function managementRulesR73\(\)\{[^}]+\}', 'function managementRulesR73(){return false;}',s)
  s=s.replace('franchiseRulesVersion:73,','franchiseRulesVersion:0,')
 if 'dynasty-services-' in u:
  # Local reward needs its durable journal, but no video memory teardown.
  anchor='await V(e,`releaseMemory`,{},!1,r),e.client.destroy(),a'
  assert s.count(anchor)==1
  s=s.replace(anchor,'a')
 s=s.replace('观看广告','领取奖励').replace('看广告','领取奖励').replace('重新观看','重新领取')
 s=url_pattern.sub(lambda match:urlmap[match[0]],s)
 s=re.sub(r'(["\x27`])(\./[^"\x27`\s?]+\.js)\1',lambda m:m[1]+m[2]+'?v='+VERSION+m[1] if '${' not in m[2] else m[0],s)
 name=target(u)
 # Keep editable shell inputs intact; generate cache-busted files under release names.
 if name in local:
  if name=='dynasty-home.html':
   s=s.replace('./dynasty-app.js?v='+VERSION,'./dynasty-app-release.js?v='+VERSION).replace('./player-shell.js"','./player-shell.js?v='+VERSION+'"').replace('./dynasty-home.css"','./dynasty-home.css?v='+VERSION+'"')
   (ROOT/'index.html').write_text(s);(ROOT/'__ai_app.html').write_text(s)
  elif name=='dynasty-app.js':
   s=s.replace('./dynasty-template.js?', './dynasty-template-release.js?').replace('./dynasty-logos.js?', './dynasty-logos-release.js?')
   (ROOT/'dynasty-app-release.js').write_text(s)
  else:(ROOT/name.replace('.js','-release.js')).write_text(s)
 else:
  path=ROOT/name;path.parent.mkdir(parents=True,exist_ok=True);path.write_text(s)
(ROOT/'asset-manifest.json').write_text(json.dumps({'version':VERSION,'source':BASE,'sources':len(entries),'images':len(images),'files':urlmap},ensure_ascii=False))
print('DONE',len(entries),'sources',len(images),'images',flush=True)

# Remove the superseded multi-mode bundle only after the replacement is built.
for name in json.loads((ROOT/'obsolete-files.json').read_text()):
 path=ROOT/name
 if path.is_file():path.unlink()
