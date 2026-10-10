from pathlib import Path
from frontend_patches import patch_frontend, patch_dynasty, patch_progression
import urllib.request,concurrent.futures,re,json,hashlib,time,zipfile,io
from urllib.parse import urljoin,urlparse
ROOT=Path(__file__).parent
BASE='https://activity-static.hupu.com/shaper/published/app_293f0a2d1c/'
PREFIX='/perfect-player/basketball-parallel/'
SKIP=('hupu-web-guard.js','colorbox-ai_v2.1.109.js','26911-soeiccrc','26813-eadw44rc','2686-h8to7krc')
def target(u):
 if u.startswith(BASE):return u[len(BASE):].split('?')[0]
 return 'external/'+hashlib.sha256(u.encode()).hexdigest()[:12]+'-'+urlparse(u).path.split('/')[-1]
def fetch(u):
 path=ROOT/target(u)
 if path.exists() and path.stat().st_size>0:return path.read_bytes()
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
snapshot=zipfile.ZipFile(io.BytesIO(b''.join(p.read_bytes() for p in sorted(ROOT.glob('source-snapshot.part*'))))) if list(ROOT.glob('source-snapshot.part*')) else zipfile.ZipFile(ROOT/'source-snapshot.zip')
entries={};todo={BASE+'__ai_app.html'}
def source(u):
 name=target(u)
 if name in snapshot.namelist():return snapshot.read(name)
 raise RuntimeError('Pinned source missing: '+u)
while todo:
 with concurrent.futures.ThreadPoolExecutor(max_workers=16) as ex:
  for u,b in zip(sorted(todo),ex.map(source,sorted(todo))):entries[u]=b.decode()
 todo=set().union(*(refs(s,u) for u,s in entries.items()))-entries.keys()
 print('sources',len(entries),flush=True)
images=set()
for s in entries.values():
 images.update(re.findall(r'https?://[^\s"\x27`<>\\)]+?\.(?:webp|png|jpg|jpeg|gif|svg|woff2?)(?:\?[^\s"\x27`<>\\)]*)?',s))
images={u for u in images if '${' not in u and '{' not in u and urlparse(u).hostname in ['activity-static.hoopchina.com.cn','activity-static.hupu.com']}
fail=[]
def image_job(u):
 try:return u,len(fetch(u)),None
 except Exception as e:return u,0,str(e)
with concurrent.futures.ThreadPoolExecutor(max_workers=48) as ex:
 for i,(u,size,error) in enumerate(ex.map(image_job,sorted(images))):
  if error:fail.append({'url':u,'error':error})
  if i%100==0:print('images',i,'/',len(images),'failed',len(fail),flush=True)
if fail:
 (ROOT/'asset-failures.json').write_text(json.dumps(fail,ensure_ascii=False,indent=2));raise RuntimeError(f'{len(fail)} missing assets')
urlmap={u:PREFIX+target(u)+('?v=20261010-r24' if u.endswith('.js') else '') for u in entries.keys()|images}
for u,s in entries.items():
 if 'dynasty-worker-' in u and u.endswith('.js'): s=patch_progression(s)
 if 'dynasty-runtime-' in u and u.endswith('.js'): s=patch_dynasty(s)
 s=s.replace('观看广告','领取奖励').replace('看广告','领取奖励').replace('重新观看','重新领取')
 s=s.replace('function Cl(e){return e.team_label.replace','function Cl(e){return (e.team_label||e.team||``).replace')
 for origin in sorted(urlmap,key=len,reverse=True):s=s.replace(origin,urlmap[origin])
 if u.endswith('__ai_app.html'):
  s=re.sub(r'<script\b[^>]*src="[^"]+"[^>]*>\s*</script>','',s)
  s=s.replace('<head>','<head><script src="./player-shell.js?v=20261010-r24"></script><script src="./career-core.js?v=20261010-r24"></script><script src="./career-extras.js?v=20261010-r24"></script><script src="./local-runtime.js?v=20261010-r24"></script>')
  s=s.replace('function Cs(){','function Cs(){return true;')
  s=s.replace('function Pw(){','function Pw(){return true;')
  s=s.replace('async function Yt(e,t={}){','async function Yt(e,t={}){return window.parallelRequest(e,{...t,data:window.parallelCareer?.prepare(e,t.data)||t.data});')
  s=s.replace('career-prismatic.js','career-prismatic.js?v=20261010-r24')
  s=s.replace('U.draftPlayerDraw>0&&U.seasons.some(', 'U.draftPlayerDraw>0&&(U.draftSeason===`all-time`||U.seasons.some(').replace('e.teams.some(e=>e.abbreviation===U.draftTeam));U.draftPlayerDraw','e.teams.some(e=>e.abbreviation===U.draftTeam)));U.draftPlayerDraw')
  s=s.replace('if(U.loading=!0,U.error=null,$(),await X(),d())try{','if(U.loading=!0,U.error=null,$(),d())try{')
  s=s.replace('let e=await Un({position:l,seed:U.seed','let e=await window.parallelCareer.wait(Un({position:l,seed:U.seed').replace('lockedTeam:c.lockedTeam||void 0});if(!d())return;U.offers','lockedTeam:c.lockedTeam||void 0}),15000);if(!d())return;U.offers')
  s=s.replace('U.expandedCandidateId=null,await X()}catch(e){d()', 'U.expandedCandidateId=null,X().catch(()=>{})}catch(e){d()')
  s=s.replace('getUser:()=>xn()','getUser:async()=>window.parallelProfile.identity()')
  s=s.replace('广告播放中','领取中').replace('观看广告','领取奖励').replace('看广告','领取奖励').replace('广告换队','免费换队').replace('广告 · 高质重抽','免费 · 高质重抽')
  s=s.replace('https://ai-1786703713642-d0el49h17f235e5-1252166086.ap-shanghai.app.tcloudbase.com/api','')
  # Direct application is the index; also preserve relative navigation to __ai_app.html.
  (ROOT/'index.html').write_text(s)
 if u.endswith('career-prismatic.js'):
  s=patch_frontend(s)
  s=s.replace('function tk(){','function tk(){return true;')
  s=s.replace('async function sc(e,t={}){','async function sc(e,t={}){return window.parallelRequest(e,{...t,data:window.parallelCareer?.prepare(e,t.data)||t.data});')
  s=s.replace('getUser:()=>Pc()','getUser:async()=>window.parallelProfile.identity()')
  s=s.replace('广告播放中','领取中').replace('观看广告','领取奖励').replace('看广告','领取奖励').replace('广告换队','免费换队').replace('广告 · 高质重抽','免费 · 高质重抽')
 (ROOT/target(u)).write_text(s)
(ROOT/'reward-video-3a515d553eed-r41.js').write_text('''export const REWARD_ACTIVITY_ID=390;
export const REWARD_SDK_URL="";
export const getRewardHost=()=>window;
export const ensureRewardSdk=async()=>window.VaFuSDK;
export const waitForRewardResult=async p=>p;
export function createVaRewardClient(){return {readAvailability:async()=>true,complete:async()=>({ok:true,rewarded:true})};}
''')
(ROOT/'asset-manifest.json').write_text(json.dumps({'source':BASE,'sources':len(entries),'images':len(images),'files':urlmap},ensure_ascii=False))
print('DONE',len(images),sum((ROOT/target(u)).stat().st_size for u in images),flush=True)
