import * as services from './dynasty-runtime-f68dfaa59e08-r90.js?v=20261014-r38';
import css from './dynasty-entry-style-e71847e68b4a.js?v=20261014-r38';
import data from './dynasty-entry-data-03482d7b9607.js?v=20261014-r38';
import {managerAssetData} from './dynasty-entry-media-ff6151fd96ac.js?v=20261014-r38';
import {mountDynastyTemplate} from './dynasty-template-release.js?v=20261014-r38';
import logos from './dynasty-logos-release.js?v=20261014-r38';
const home=document.querySelector('#dynasty-home'),host=document.querySelector('#dynasty-game'),status=document.querySelector('#home-status');
let runtime=null,busy=false;
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function error(e){status.textContent=e?.message||String(e);status.setAttribute('role','alert');}
async function action(fn){if(busy)return;busy=true;home.setAttribute('aria-busy','true');try{await fn();}catch(e){error(e);}finally{busy=false;home.removeAttribute('aria-busy');}}
function renderHome(){
 const summary=services.dynastySummary(),slots=services.listDynastySlots();
 document.querySelector('#continue-dynasty').disabled=!summary;
 document.querySelector('#current-summary').textContent=summary?`${summary.teamName||summary.team||'我的球队'} · ${summary.seasonLabel||''} · ${summary.recordLabel||'季前准备'}`:'从选择球队与赛季开始，建立你的王朝。';
 document.querySelector('#dynasty-slots').innerHTML=slots.length?slots.map(slot=>{const s=slot.summary||slot;return `<button class="save-slot" data-slot="${escape(slot.id)}"><strong>${escape(s.teamName||s.team||'王朝存档')}</strong><span>${escape(s.seasonLabel||'')} · ${escape(s.recordLabel||'季前准备')}</span><small>继续这段王朝 →</small></button>`;}).join(''):'<p class="muted">建立的王朝会显示在这里。</p>';
 document.querySelectorAll('[data-slot]').forEach(b=>b.onclick=()=>action(async()=>{await services.restoreDynastySlot(b.dataset.slot);await enter();}));
}
async function returnHome(){
 if(runtime?.isSimulationRunning()||runtime?.isRewardPending())throw Error('请等待当前模拟或奖励完成后返回。');
 if(runtime){const saved=await runtime.flushSave();if(saved?.ok===false)throw Error(saved.message);runtime.destroy(false);runtime=null;}
 host.replaceChildren();host.hidden=true;home.hidden=false;document.body.classList.remove('playing-dynasty');renderHome();window.scrollTo(0,0);
}
async function enter(){
 status.textContent='正在载入王朝…';services.assertDynastySaveReadable();
 home.hidden=true;host.hidden=false;document.body.classList.add('playing-dynasty');
 const root=host.shadowRoot||host.attachShadow({mode:'open'});mountDynastyTemplate(root,css);
 host.style.setProperty('--dynasty-entry-image',`url("${managerAssetData['dynasty-entry-arena']||''}")`);
 const reward=async()=>({ok:true,rewarded:true});
 try{runtime=services.mountManagerRuntime({root,data:structuredClone(data),storage:services.createDynastyStorage(),resolveAssetUrl(key){const value=managerAssetData[key.replace(/^\.\//,'').replaceAll('\\','/')]||'';return value.startsWith('shared-team:')?logos[value.slice(12)]||'':value;},requestRewardVideo:reward,onRestartRequested:()=>action(async()=>{await returnHome();await services.startNewDynastySlot();await enter();}),onExitRequested:()=>action(returnHome)});
 await runtime.ready;status.textContent='';window.scrollTo(0,0);}catch(e){runtime?.destroy(false);runtime=null;host.hidden=true;home.hidden=false;document.body.classList.remove('playing-dynasty');throw e;}
 const intro=root.querySelector('#introScreen');if(intro){const b=document.createElement('button');b.className='secondary-button';b.textContent='‹ 返回主页';b.onclick=()=>action(returnHome);intro.append(b);}
}
document.querySelector('#new-dynasty').onclick=()=>action(async()=>{await services.startNewDynastySlot();await enter();});
document.querySelector('#continue-dynasty').onclick=()=>action(enter);
await action(async()=>{await services.initializeDynastyServices();renderHome();status.textContent='存档仅保存在当前浏览器；新建王朝会保留已有档。';});
