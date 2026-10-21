import * as services from './dynasty-runtime-f68dfaa59e08-r90.js?v=20261021-r42.1';
import css from './dynasty-entry-style-e71847e68b4a.js?v=20261021-r42.1';
import data from './dynasty-entry-data-03482d7b9607.js?v=20261021-r42.1';
import {managerAssetData} from './dynasty-entry-media-ff6151fd96ac.js?v=20261021-r42.1';
import polish from './dynasty-polish.js?v=20261021-r42.1';
import {mountDynastyTemplate} from './dynasty-template-release.js?v=20261021-r42.1';
import logos from './dynasty-logos-release.js?v=20261021-r42.1';
const home=document.querySelector('#dynasty-home'),host=document.querySelector('#dynasty-game'),status=document.querySelector('#home-status');
let runtime=null,busy=false;
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function error(e){status.textContent=e?.message||String(e);status.setAttribute('role','alert');}
async function action(fn){if(busy)return;busy=true;home.setAttribute('aria-busy','true');try{await fn();}catch(e){error(e);}finally{busy=false;home.removeAttribute('aria-busy');}}
function renderHome(){
 const summary=services.dynastySummary(),slots=services.listDynastySlots();
 document.querySelector('#continue-dynasty').disabled=!summary;
 document.querySelector('#current-summary').textContent=summary?`${summary.teamName||summary.team||'我的球队'} · ${summary.seasonLabel||''} · ${summary.recordLabel||'季前准备'}`:'从选择球队与赛季开始，建立你的王朝。';
 document.querySelector('#dynasty-slots').innerHTML=slots.length?slots.map(slot=>{const s=slot.summary||slot;return `<article class="save-card"><button class="save-slot" data-slot="${escape(slot.id)}"><span class="save-icon" aria-hidden="true">◉</span><span class="save-copy"><strong>${escape(s.teamName||s.team||'王朝存档')}</strong><span>${escape(s.seasonLabel||'')} · ${escape(s.recordLabel||'季前准备')}</span></span><span class="save-chevron" aria-hidden="true">›</span></button><button class="save-more" data-manage-slot="${escape(slot.id)}" aria-label="管理${escape(s.teamName||s.team||'王朝存档')}存档">•••</button></article>`;}).join(''):'<p class="muted">建立的王朝会显示在这里。</p>';
 document.querySelectorAll('[data-manage-slot]').forEach(b=>b.onclick=()=>{const slot=slots.find(s=>s.id===b.dataset.manageSlot),s=slot?.summary||slot;if(!s)return;const dialog=document.createElement('dialog');dialog.className='save-dialog';dialog.setAttribute('aria-label','管理存档');dialog.innerHTML=`<header><div><small>管理存档</small><h2>${escape(s.teamName||s.team||'王朝存档')}</h2></div><button data-close aria-label="关闭存档菜单">×</button></header><p>${escape(s.seasonLabel||'')} · ${escape(s.recordLabel||'季前准备')}</p><button class="save-danger" data-delete-slot="${escape(slot.id)}">删除此存档</button><p class="save-hint">删除前会再次确认，其他王朝不受影响。</p>`;document.body.append(dialog);dialog.showModal();dialog.querySelector('[data-close]').onclick=()=>dialog.remove();dialog.oncancel=()=>dialog.remove();dialog.querySelector('[data-delete-slot]').onclick=()=>action(async()=>{if(!confirm(`删除存档：${s.teamName||s.team||'王朝'} · ${s.seasonLabel||''} · ${s.recordLabel||''}？此操作无法撤销，其他存档不受影响。`))return;await services.deleteDynastySlot(slot.id);dialog.remove();renderHome();});});
 document.querySelectorAll('[data-slot]').forEach(b=>b.onclick=()=>action(async()=>{await services.restoreDynastySlot(b.dataset.slot);await enter();}));
}
async function returnHome(){
 if(runtime?.isSimulationRunning()||runtime?.isRewardPending())throw Error('请等待当前模拟或奖励完成后返回。');
 if(runtime){const saved=await runtime.flushSave();if(saved?.ok===false)throw Error(saved.message);runtime.destroy(false);runtime=null;}
 host.shadowRoot?.replaceChildren();host.replaceChildren();host.hidden=true;home.hidden=false;document.body.classList.remove('playing-dynasty');renderHome();window.scrollTo(0,0);
}
async function enter(){
 status.textContent='正在载入王朝…';services.assertDynastySaveReadable();
 home.hidden=true;host.hidden=false;document.body.classList.add('playing-dynasty');
 const root=host.shadowRoot||host.attachShadow({mode:'open'});mountDynastyTemplate(root,css+polish);
 host.style.setProperty('--dynasty-entry-image',`url("${managerAssetData['dynasty-entry-arena']||''}")`);
 const reward=async()=>({ok:true,rewarded:true});
 try{runtime=services.mountManagerRuntime({root,data:structuredClone(data),storage:services.createDynastyStorage(),resolveAssetUrl(key){const value=managerAssetData[key.replace(/^\.\//,'').replaceAll('\\','/')]||'';return value.startsWith('shared-team:')?logos[value.slice(12)]||'':value;},requestRewardVideo:reward,onRestartRequested:()=>action(async()=>{await returnHome();await services.startNewDynastySlot();await enter();}),onExitRequested:()=>action(returnHome)});
 await runtime.ready;status.textContent='';window.scrollTo(0,0);}catch(e){runtime?.destroy(false);runtime=null;host.hidden=true;home.hidden=false;document.body.classList.remove('playing-dynasty');throw e;}
 const intro=root.querySelector('#introScreen');if(intro){const b=document.createElement('button');b.className='secondary-button';b.textContent='‹ 返回主页';b.onclick=()=>action(returnHome);intro.append(b);}
}
document.querySelector('#new-dynasty').onclick=()=>action(async()=>{await services.startNewDynastySlot();await enter();});
document.querySelector('#continue-dynasty').onclick=()=>action(enter);
await action(async()=>{await services.initializeDynastyServices();renderHome();status.textContent='存档仅保存在当前浏览器；新建王朝会保留已有档。';});
