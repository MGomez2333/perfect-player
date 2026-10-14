// Session-local transport only. Durable snapshots retain their full original format.
function createStateTransportR76() {
  const paths = ['retiredPlayers','careerArchive','history','managerStory.honorNotices','managerStory.teamReports','managerStory.leagueHonorHistory','managerStory.historicalReturnQueue','managerStory.historicalRetiredInstances','managerStory.livingLeague.seen'];
  let revision=0, cache=new Map();
  const own=(o,k)=>o!=null&&Object.prototype.hasOwnProperty.call(o,k);
  const fingerprint=value=>JSON.stringify(value,function(k,v){
    if(v===undefined)return '\u0000u';
    if(typeof v==='number')return Object.is(v,-0)?'\u0000n-0':Number.isFinite(v)?v:'\u0000n'+String(v);
    if(typeof v==='string'){
      if(this?.[k] instanceof Date)return '\u0000d'+this[k].toISOString();
      return v.startsWith('\u0000')?'\u0000s'+v:v;
    }
    return v;
  });
  function branch(root,parts){let node=root;for(const k of parts){if(!own(node,k))return null;node[k]={...node[k]};node=node[k];}return node;}
  function reset(){revision=0;cache=new Map();}
  function encode(snapshot){
    const body={...snapshot},blocks={},keys=[];let omittedBytes=0;
    for(const path of paths){const parts=path.split('.'),leaf=parts.pop();let value=snapshot;for(const p of parts)value=value?.[p];if(!own(value,leaf))continue;value=value[leaf];
      const signature=fingerprint(value);if(typeof signature!=='string'||signature.length<4096)continue;
      const previous=cache.get(path);keys.push(path);
      if(!previous||previous.signature!==signature)blocks[path]={value,signature};else omittedBytes+=signature.length;
      cache.set(path,{signature,value});delete branch(body,parts)[leaf];
    }
    const base=revision++;return {__transportR76:1,base,next:revision,body,keys,blocks,omittedBytes};
  }
  function decode(packet){
    if(packet?.__transportR76!==1){reset();return packet;}
    if(packet.base===0)reset();
    if(packet.base!==revision||packet.next!==revision+1)throw Object.assign(new Error('模拟数据需要重新同步，请再试一次。已保存进度保留。'),{code:'STATE_RESYNC'});
    const body={...packet.body};
    for(const path of packet.keys){
      if(!paths.includes(path))throw new Error('未知模拟数据段');
      if(own(packet.blocks,path)){const {value,signature}=packet.blocks[path];if(typeof signature!=='string')throw new Error('模拟数据段无效');cache.set(path,{value,signature});}
      if(!cache.has(path))throw Object.assign(new Error('模拟历史尚未同步，请再试一次。'),{code:'STATE_RESYNC'});
      const parts=path.split('.'),leaf=parts.pop(),parent=branch(body,parts);if(!parent)throw new Error('模拟数据结构不完整');parent[leaf]=cache.get(path).value;
    }
    revision=packet.next;return body;
  }
  async function run(payload,calculate){
    const encoded=payload.snapshot?.__transportR76===1;
    try {const result=await calculate({...payload,snapshot:decode(payload.snapshot)});if(encoded)result.snapshot=encode(result.snapshot);return result;}
    catch(error){reset();throw error;}
  }
  return {encode,decode,reset,run};
}

var e=class {
  constructor({compute=false}={}) {
    this.transport76=createStateTransportR76();
    this.storageOnly=!compute;
    this.file=compute?"./dynasty-worker-c269660e8472-r90.js?v=20261014-r39":"./dynasty-storage-worker-915dc79d7ddb-r80.js?v=20261014-r39";
    this.build=compute?"9106139af167d515b5eb4178f7e72bac69d3106e7e7e881583a729bb72909f47":"aea67c5581079779fa73d693af733ecf82d3a59f58cb916326a7abe40875c576";
    this.pending=new Map();this.id=0;this.failed=null;this.started=false;this.attempt=0;
    this.url=new URL(this.file,document.baseURI);
    if(this.url.origin!==window.location.origin||!/^https?:$/.test(this.url.protocol)) {
      throw this.problem('WORKER_ADDRESS','组件地址不可用，请从原入口重新进入。');
    }
    this.ready=new Promise((resolve,reject)=>{this.resolveReady=resolve;this.rejectReady=reject;});
    this.ready.catch(()=>{});
    this.start();
  }
  problem(code,message) {
    return Object.assign(new Error(`${message}已保存进度保留，请勿清除游戏数据。〔${code}〕`),{code});
  }
  start() {
    if(this.failed)return;
    const attempt=++this.attempt,url=new URL(this.url.href);
    if(attempt>1)url.searchParams.set('dynastyRetry',String(Date.now()));
    let worker;
    const active=()=>!this.failed&&attempt===this.attempt&&this.worker===worker;
    this.startupTimer=setTimeout(()=>{
      if(active())this.startupFailure(this.problem('WORKER_START_TIMEOUT','王朝组件加载超时，请切换网络后重新加载。'));
    },15000);
    try {
      worker=new Worker(url.href,{name:this.storageOnly?'dynasty-storage':'dynasty-compute'});
      this.worker=worker;
      worker.onmessage=({data})=>{
        if(!active())return;
        if(data?.type==='bootstrap-request'&&!this.started&&!this.storageOnly) {
          try {
            const values=Object.create(null),factories=globalThis.__DYNASTY_DATA_R53__;
            for(const key of (Array.isArray(data.keys)?data.keys:[]).slice(0,64)) {
              if(/^[a-f0-9]{64}$/.test(key)&&typeof factories?.[key]==='function')values[key]=factories[key]();
            }
            // Transfer plain static data, never code or save state. Worker consumers
            // receive independent copies just as the original factories provided.
            worker.postMessage({type:'bootstrap-data',values});
          }catch(error) {
            this.startupFailure(this.problem('WORKER_DEPENDENCY','王朝配套数据准备失败，请重新加载；仍失败请从原入口重进。'));
          }
          return;
        }
        if(data?.type==='boot-error') {
          if(!this.started)this.startupFailure(this.problem('WORKER_DEPENDENCY','王朝配套数据加载失败，请切换网络后重新加载。'));
          return;
        }
        if(data?.type==='ready') {
          if(this.started)return;
          if(data.build!==this.build)return this.fail(this.problem('WORKER_VERSION','王朝组件版本不一致，请完全退出当前游戏页面后，从原入口重新进入。'));
          clearTimeout(this.startupTimer);this.started=true;this.resolveReady();return;
        }
        const pending=this.pending.get(data?.id);if(!pending)return;
        this.pending.delete(data.id);clearTimeout(pending.timer);
        data.ok?pending.resolve(data.value):pending.reject(Object.assign(new Error(data.error?.message||'王朝处理未完成'),{name:data.error?.name||'Error',code:data.error?.code,workerStack:data.error?.stack}));
      };
      worker.onerror=event=>{
        event.preventDefault();if(!active())return;
        console.error('Dynasty worker failed',{file:this.file,attempt,started:this.started,message:event.message});
        if(!this.started)this.startupFailure(this.problem('WORKER_START','王朝组件启动失败，请重新加载；仍失败请完全退出游戏页后从原入口重进。'));
        else this.fail(this.problem('WORKER_RUNTIME','王朝计算中断，请退出王朝后重新进入，读取最新进度。'));
      };
      worker.onmessageerror=()=>{if(active())this.fail(this.problem('WORKER_MESSAGE','王朝数据传输失败，请退出王朝后重新进入。'));};
    }catch(error) {
      console.error('Dynasty worker could not start',{file:this.file,name:error?.name});
      const problem=this.problem('WORKER_UNAVAILABLE','当前页面无法启动王朝组件，请完全退出游戏页后从原入口重新进入。');
      if(['SecurityError','NotSupportedError'].includes(error?.name))this.fail(problem);
      else this.startupFailure(problem);
    }
  }
  startupFailure(error) {
    if(this.failed)return;
    clearTimeout(this.startupTimer);
    if(this.started||this.attempt>=2)return this.fail(error);
    this.worker?.terminate();
    // Invalidate late messages immediately, including during the retry delay.
    this.worker=null;
    // Initialization only: no business command has been dispatched yet.
    this.retryTimer=setTimeout(()=>this.start(),300);
  }
  fail(error) {
    if(this.failed)return;
    this.transport76.reset();
    this.failed=error;clearTimeout(this.startupTimer);clearTimeout(this.retryTimer);
    this.rejectReady(error);
    for(const p of this.pending.values()){clearTimeout(p.timer);p.reject(error);}
    this.pending.clear();this.worker?.terminate();
  }
  async call(type,payload) {
    await this.ready;if(this.failed)throw this.failed;
    if(['open','select','deleteSlot','clear','releaseMemory'].includes(type))this.transport76.reset();
    if(type==='compute')payload={...payload,snapshot:this.transport76.encode(payload.snapshot)};
    try {const result=await new Promise((resolve,reject)=>{
      const id=++this.id;
      const timer=setTimeout(()=>this.fail(this.problem('WORKER_COMMAND_TIMEOUT','王朝处理超时，请退出王朝后重新进入，读取最新进度。')),60000);
      this.pending.set(id,{resolve,reject,timer});
      try{this.worker.postMessage({id,type,payload});}
      catch(error){clearTimeout(timer);this.pending.delete(id);reject(error);}
    });
    if(type==='compute')result.snapshot=this.transport76.decode(result.snapshot);
    return result;
    }catch(error){this.transport76.reset();throw error;}
  }
  destroy(){this.fail(this.problem('WORKER_CLOSED','王朝页面已关闭。'));}
}

;const t=[],n=/(?:\benes\s+(?:kanter(?:\s+freedom)?|freedom)\b|(?:埃内斯|恩内斯|伊尼斯)[·\s-]*(?:坎特|弗里多姆)|坎特)/gi,r=/^(?:202683|ERA-202683|HIST-\d{4}-\d{4}-202683)$/i,i=[`id`,`nbaId`,`playerId`,`prospectId`,`identity`],a=[`name`,`englishName`,`shortName`,`playerName`],o=e=>typeof e==`string`&&(t[0]||(t[0]=RegExp(`^(?:`+n.source+`)$`,`i`))).test(e.trim()),s=e=>(typeof e==`string`||typeof e==`number`)&&r.test(String(e));function c(e){return!!(e&&(i.some(t=>s(e[t]))||a.some(t=>o(e[t]))||s(e.historicalDraft?.identity)))}function l(e){if(!e||typeof e!=`object`)return e;let r=new Set,a=new WeakSet;function o(e){if(!(!e||typeof e!=`object`||a.has(e))){if(a.add(e),c(e))for(let t of i)e[t]!=null&&r.add(String(e[t]));for(let t of Object.values(e))o(t)}}o(e);let l=e=>s(e)||typeof e==`string`&&r.has(e);function u(e,r=new WeakSet){return typeof e==`string`?l(e)||(t[1]||(t[1]=new RegExp(n.source,`i`))).test(e):!e||typeof e!=`object`||r.has(e)?!1:(r.add(e),c(e)||Object.entries(e).some(([e,t])=>l(e)||u(t,r)))}if(e.pendingTradeInquiry&&u(e.pendingTradeInquiry)){let t=e.pendingTradeInquiry.id;e.resolvedTradeInquiryIds||(e.resolvedTradeInquiryIds=[]),t&&!e.resolvedTradeInquiryIds.includes(t)&&e.resolvedTradeInquiryIds.push(t),e.pendingTradeInquiry=null}let d=e.managerStory;if(d)for(let[e,t]of Object.entries(d.eventContext||{}))u(t)&&(d.pending=(d.pending||[]).filter(t=>t!==e),d.seen=[...new Set([...d.seen||[],e])],delete d.eventContext[e],d.eventMeta&&delete d.eventMeta[e]);let f=new WeakMap,p=Symbol(`excluded`);function m(e,t=``){if(typeof e==`string`)return l(e)?p:e.replace(n,`已移除球员`);if(!e||typeof e!=`object`)return e;if(f.has(e))return f.get(e);if(Array.isArray(e.userPlayers)&&Array.isArray(e.callerPlayers)&&u(e))return p;if(c(e)||i.some(t=>l(e[t])))return t===`selections`&&e.pick&&e.teamAbbr?{pick:e.pick,round:e.round,roundPick:e.roundPick,teamAbbr:e.teamAbbr,prospectId:`removed-slot-`+e.pick,name:`该顺位球员已移除`,position:`—`,excludedPlayer:!0}:p;if(f.set(e,e),Array.isArray(e)){let n=[];for(let r of e){let e=m(r,t);e!==p&&n.push(e)}e.splice(0,e.length,...n)}else for(let t of Object.keys(e)){if(l(t)){delete e[t];continue}let n=m(e[t],t);n===p?delete e[t]:e[t]=n}return e}return m(e),e.excludedPlayersVersion=1,e}const u=[`data`,`season`,`homeTeamSelected`,`mode`,`seasonYearCursor`,`seasonGoal`,`careerTrust`,`careerHeat`,`legendDrawsUsed`,`legendDrawnIds`,`lastLegendDraw`,`gamePlan`,`simulationMode`,`careerArchive`,`retiredPlayers`,`retirementModelVersion`,`draftHistory`,`ratingScaleVersion`,`pendingTradeInquiry`,`resolvedTradeInquiryIds`,`history`,`managerStory`,`feedbackLedger`,`injuryDismissed`,`rngState`];function d(e){let t=Object.fromEntries(u.map(t=>[t,e[t]]));return t.simulationRulesVersion=e.simulationRulesVersion||`legacy_v7`,t.entryDataVersion=[1,2,3].includes(e.entryDataVersion)?e.entryDataVersion:0,t.homeAbbr=e.leftTeam?.abbr,t.awayAbbr=e.rightTeam?.abbr,t.excludedPlayersVersion=e.excludedPlayersVersion,t}function f(e,t){e.simulationRulesVersion=t.simulationRulesVersion||`legacy_v7`,e.entryDataVersion=[1,2,3].includes(t.entryDataVersion)?t.entryDataVersion:0,t.excludedPlayersVersion!==1&&l(t),e.excludedPlayersVersion=1;let n=e.season,r=e.managerStory;for(let n of u)n in t&&(e[n]=t[n]);if(n&&t.season&&n.year===t.season.year){let r=n.playoff;for(let e of Object.keys(n))e in t.season||delete n[e];Object.assign(n,t.season),e.season=n,r&&t.season.playoff&&(Object.assign(r,t.season.playoff),n.playoff=r)}e.leftTeam=e.data.teams.find(e=>e.abbr===t.homeAbbr)||null,e.rightTeam=e.data.teams.find(e=>e.abbr===t.awayAbbr)||null,e.extraTeams&&(e.extraTeams=e.extraTeams.map(t=>e.data.teams.find(e=>e.abbr===t.abbr)).filter(Boolean));let i=t=>t===`left`?e.leftTeam:t===`right`?e.rightTeam:e.extraTeams?.[Number(t.replace(`extra`,``))];for(let t of[`players`,`picks`])if(e[t])for(let[n,r]of Object.entries(e[t])){let a=new Set(r.map(e=>e.id));e[t][n]=(i(n)?.[t]||[]).filter(e=>a.has(e.id))}if(e.evaluation=null,r&&t.managerStory){for(let e of Object.keys(r))e in t.managerStory||delete r[e];Object.assign(r,t.managerStory),e.managerStory=r}}function p(e,t){let n=e=>e&&{...e,...Object.fromEntries([`teamA`,`teamB`,`winner`,`loser`].filter(t=>t in e).map(n=>[n,t(e[n])]))},r={...e};for(let e of[`activeSeries`,`completedSeries`])Array.isArray(r[e])&&(r[e]=r[e].map(n));return r.seeded&&(r.seeded=Object.fromEntries(Object.entries(r.seeded).map(([e,n])=>[e,n.map(e=>({...e,team:t(e.team)}))]))),`finals`in r&&(r.finals=n(r.finals)),`champion`in r&&(r.champion=t(r.champion)),r}function m(e){if(!e||!(`__dynastyRosterPoolV1`in e))return e;let{__dynastyRosterPoolV1:t,...n}=e;if(!Array.isArray(t))throw Error(`季后赛存档结构不完整`);return p(n,e=>{if(e==null||!(`__dynastyRoster`in e))return e;if(!Number.isInteger(e.__dynastyRoster)||!t[e.__dynastyRoster])throw Error(`季后赛球队记录不完整`);return t[e.__dynastyRoster]})}function h(e){let t=typeof e==`string`?JSON.parse(e):e;return t?.season?.playoff&&(t.season.playoff=m(t.season.playoff)),t}const g=e=>`reward-ledger:`+e,_=e=>e?.generation||(e?.id?`legacy:`+e.id:null),v=new Set([`headshot`,`headshotFallback`,`defaultAvatar`,`logo`]),y=new Set([`englishPosition`,`position`,`positionLabel`,`realPositions`,`realPositionRoles`]);function b(e,t){let n=(e,r=[])=>{if(Array.isArray(e))return e.map((e,t)=>n(e,[...r,t]));let i=t===`draftEra`&&r.length===4&&r[0]===`options`&&Number.isInteger(r[1])&&r[2]===`stars`&&Number.isInteger(r[3]);return e&&typeof e==`object`?Object.fromEntries(Object.keys(e).sort().filter(t=>!v.has(t)&&!(i&&y.has(t))&&e[t]!==void 0).map(t=>[t,n(e[t],[...r,t])])):e};return JSON.stringify(n(e))}function x(e,t){return!!(e?.id&&e.id===t?.id&&e.kind===t.kind&&(e.intentId||e.id)===(t.intentId||t.id)&&(e.intentTarget??null)===(t.intentTarget??null)&&b(e.payload,e.kind)===b(t.payload,t.kind))}function S(e){let t=e?.stage||`prepared`;return t===`prepared`&&!(Number(e?.protocolVersion)>=61)?`unknown`:t}function C(e){let t=e?.season?.dynastyRewards;return[t?.pending,...t?.recoveryQueue||[],...t?.recoveryAwaiting||[],...t?.recoveryBlocked||[]].filter(e=>e?.id)}function w(e,t){var n;if(!e?.season)return e;let r=(n=e.season).dynastyRewards||(n.dynastyRewards={}),i=new Set(r.grants||[]),a=[],o=[],s=[],c=new Map(C(e).map(t=>[t.id,{command:t,owner:t.owner,homeTeam:t.context?.homeTeam||t.context?.team||e.homeTeam,year:Number(t.context?.year??e.season.year),phase:S(t),updatedAt:t.createdAt||0}]));for(let[e,n]of Object.entries(t?.commands||{}))c.set(e,n);for(let t of[...c.values()].sort((e,t)=>(e.command.createdAt||e.updatedAt)-(t.command.createdAt||t.updatedAt))){let n=t.command;if(!n?.id||i.has(n.id)||t.phase===`applied`&&Number(e.season.year)>t.year)continue;let r=t.phase===`prepared`?S({...n,stage:`prepared`}):t.phase,c=[`confirmed`,`applied`].includes(r),l=[`awaiting`,`unknown`].includes(r);if(!c&&!l)continue;let u={...structuredClone(n),...c?{}:{detachedAt:n.detachedAt||n.createdAt||Date.now()},owner:t.owner,context:{...n.context,homeTeam:t.homeTeam,year:t.year},stage:c?`confirmed`:`unknown`,receiptPhase:r};if(t.homeTeam!==e.homeTeam||t.year!==Number(e.season.year)){s.push({...u,recoveryReason:`原球队或赛季已变化，已保留这次广告记录，请联系反馈核对。`});continue}(c?a:o).push(u)}let l=a.find(e=>e.id===r.pending?.id)||a[0];return r.pending=l||null,r.recoveryQueue=a.filter(e=>e.id!==l?.id),r.recoveryAwaiting=o,r.recoveryBlocked=s,e}function ee(e,t){return new Promise((n,r)=>{let i,a=!1,o=(e,t)=>{if(a){t?.close();return}a=!0,clearTimeout(s),e?r(e):n(t)},s=setTimeout(()=>o(Error(`广告记录读取超时，请保留存档后重试。`)),8e3);try{i=e.open(t||`nba-regret-dynasty-runtime-v2`,1)}catch(e){o(e);return}i.onupgradeneeded=()=>i.transaction.abort(),i.onblocked=()=>o(Error(`广告记录暂被其他页面占用，请关闭其他游戏页面后重试。`)),i.onerror=()=>o(i.error),i.onsuccess=()=>o(null,i.result)})}async function T(e,t,n,{detachUncertain:r=!1}={}){let i=await ee(e,t);try{return await new Promise((e,t)=>{let a,o=!1,s=null,c=n=>{o||(o=!0,clearTimeout(l),n?t(n):e(s))},l=setTimeout(()=>{try{a?.abort()}catch{}c(Error(`广告记录读取超时，请保留存档后重试。`))},8e3);try{a=i.transaction([`meta`,`slots`],r?`readwrite`:`readonly`),a.onabort=()=>c(a.error||Error(`广告记录读取未完成，请重试。`)),a.oncomplete=()=>c();let e=a.objectStore(`slots`).get(n.slotId);e.onsuccess=()=>{let t=e.result;if(!t||_(t)!==n.generation)return;let i=a.objectStore(`meta`).get(g(t.id));i.onsuccess=()=>{if(s=i.result?.generation===n.generation?i.result:null,!s||!r)return;let e=!1;for(let t of Object.values(s.commands||{})){let n=t.phase===`prepared`?S({...t.command,stage:`prepared`}):t.phase;[`awaiting`,`unknown`].includes(n)&&(t.phase!==n&&(t.phase=n,e=!0),t.command.detachedAt||(t.command.detachedAt=t.command.createdAt||Date.now(),e=!0))}e&&a.objectStore(`meta`).put(s,g(t.id))}}}catch(e){c(e)}})}finally{i.close()}}function E(e,t,n,r,i){let a=n?.slotId||n?.active;return!a||!r?.id||i&&r.stage!==`confirmed`?Promise.reject(Error(`广告回执缺少对应存档，请保留页面并重试领取。`)):new Promise((o,s)=>{let c,l,u=!1,d,f=e=>{u||(u=!0,clearTimeout(p),c?.close(),e?s(e):o(d))},p=setTimeout(()=>{try{l?.abort()}catch{}f(Error(`广告记录保存超时，请保留页面重试，无需重领取奖励。`))},8e3),m;try{m=e.open(t||`nba-regret-dynasty-runtime-v2`,1)}catch(e){f(e);return}m.onupgradeneeded=()=>m.transaction.abort(),m.onerror=()=>f(m.error),m.onsuccess=()=>{if(c=m.result,u){c.close();return}c.onversionchange=()=>c.close();try{l=c.transaction([`meta`,`slots`],`readwrite`),l.onabort=()=>f(l.error||Error(`广告记录尚未保存，请保留页面重试。`)),l.onerror=()=>{},l.oncomplete=()=>f();let e=l.objectStore(`meta`),t=l.objectStore(`slots`).get(a),o=e=>{try{l.abort()}catch{}f(Error(e))};t.onsuccess=()=>{let s=t.result,c=_(s);if(!s||n.generation&&n.generation!==c||n.commandId&&n.commandId!==r.id){o(`这份王朝已删除或已更换，本次广告不会恢复已删除的存档。`);return}let u=e.get(g(a));u.onsuccess=()=>{try{let t=u.result,n=t?.generation===c&&t.commands?.[r.id];if(!n||!x(n.command,r)){o(`未找到这次广告对应的安排，成功记录尚未覆盖，请保留页面反馈记录号：`+r.id);return}if(!i&&[`confirmed`,`applied`].includes(n.phase)){d=n;return}let s=i?n.phase===`applied`?`applied`:`confirmed`:[`awaiting`,`unknown`,`cancelled`,`failed`,`expired`].includes(r.stage)?r.stage:`awaiting`;d=t.commands[r.id]={...n,phase:s,command:{...n.command,...structuredClone(r),payload:n.command.payload,owner:n.owner,context:n.command.context,detachedAt:n.command.detachedAt||r.detachedAt||(s===`unknown`?n.command.createdAt||Date.now():void 0),stage:i?`confirmed`:s},updatedAt:Date.now()},e.put(t,g(a))}catch(e){try{l.abort()}catch{}f(e)}}}}catch(e){try{l?.abort()}catch{}f(e)}}})}function D(e,t,n,r){return E(e,t,n,r,!0)}function O(e,t,n,r){return E(e,t,n,r,!1)}const k=`nba-regret-dynasty-v1`,A=`nba-regret-dynasty-v1:ad-resume`;function j(e,t){try{if(t===void 0)return JSON.parse(e.getItem(A)||`null`);e.setItem(A,JSON.stringify(t))}catch{}return null}function M(e){let t=h(e.current);if(e.active&&!t)throw Error(`当前王朝存档尚未读取成功，请重新进入；不要新建或清除数据。`);if(t&&(Number(t.version)!==3||!t.homeTeam||!Array.isArray(t.teams)||!t.teams.some(e=>e.abbr===t.homeTeam)))throw Error(`王朝存档结构异常，原始存档已保留，请重试读取。`);return t}let N;function P(e,t){return N===e&&e.active===t?.slotId&&e.generation===t?.generation}function F(e){return P(e,e.rewardEvidence)?e.rewardEvidence.ledger:null}function I(e){return w(M(e),F(e))}function L(e,t){if(!t||!P(e,t.owner))return;let n=F(e)||{version:2,generation:t.owner.generation,commands:{}};n.commands[t.command.id]=t,e.rewardEvidence={slotId:t.owner.slotId,generation:t.owner.generation,ledger:n},e.rewardEvidenceVersion=(e.rewardEvidenceVersion||0)+1}async function R(e,t){if(N!==e||!e.active||!e.generation)return null;let n={slotId:e.active,generation:e.generation},r=e.rewardEvidenceVersion||0,i=await T(globalThis.indexedDB,e.databaseName,n,t);return P(e,n)?(r===(e.rewardEvidenceVersion||0)&&(e.rewardEvidence={...n,ledger:i}),F(e)):null}async function z(t=window.localStorage,n){if(N){let e=N;return await e.ready,await R(e,{detachUncertain:!0}),e}let r={},i=null;for(let e of[``,`:previous`,`:pending`,`:slots`,`:slot-id`,`:home-team`,`:active-session`]){let n=k+e;try{let e=t.getItem(n);e!==null&&(r[n]=e)}catch(e){i={name:e?.name||`SecurityError`,message:`无法访问本机旧存档`};break}}let a=new e,o={client:a,databaseName:n,legacyStorage:t,current:null,summary:null,small:{},slots:[],revision:0,ready:null,recovering:null};return N=o,o.ready=a.call(`open`,{legacy:r,legacyReadError:i,databaseName:n}).then(e=>{Object.assign(o,e),M(o);let r=j(t);if(!e.current&&r?.active&&r.databaseName===(n||`nba-regret-dynasty-runtime-v2`))throw Error(`检测到广告前的王朝记录，但这次未能读取。请从虎扑原入口重新进入，不要新建或清除游戏数据。`);return o}).catch(e=>{throw a.destroy(),N===o&&(N=null),e}),o.ready}function B(){if(!N)throw Error(`王朝存档服务尚未准备好`);return N}async function V(t,n,r,i=!1,a){if(a?.(),t.recoveryBlocked)throw t.recoveryBlocked;if(n===`compute`&&t.client.storageOnly&&!t.client.failed&&t.client.destroy(),t.client.failed&&(t.recovering||(t.recovering=(async()=>{let r=new e({compute:n===`compute`});try{let e=await r.call(`open`,{legacy:{},databaseName:t.databaseName,resume:!0});if(N!==t)throw Error(`王朝页面已关闭，已保存进度保留。`);if(e.revision!==t.revision||e.active!==t.active)throw t.recoveryBlocked=Error(`已保存进度发生变化，请退出王朝后重新进入，读取最新进度。无需清理存档。`),t.recoveryBlocked;t.client=r}catch(e){throw r.destroy(),e}})().finally(()=>{t.recovering=null})),await t.recovering),n===`compute`&&t.client.storageOnly)return V(t,n,r,i,a);if(N!==t)throw Error(`王朝页面已关闭，已保存进度保留。`);a?.();try{return await t.client.call(n,r)}catch(e){if(e?.name===`InvalidStateError`&&(t.client.fail(e),!i))return V(t,n,r,!0,a);throw e}}function H(){return N?.summary||null}function U(){return!!N?.current}function W(){B()}function G(){return(N?.slots||[]).map(e=>({...e,active:e.id===N.active}))}async function K(){await B().ready}async function q(e,t){let n=B();if(n.slotChanging)throw Error(`正在处理王朝存档，请稍候再试。`);n.slotChanging=!0;try{let r=await V(n,e,t);return Object.assign(n,r),(e!==`deleteSlot`||r.deletedActive)&&(n.storageEpoch=(n.storageEpoch||0)+1),(e===`select`||e===`clear`||r.deletedActive)&&(n.rewardEvidence=null,n.rewardEvidenceVersion=(n.rewardEvidenceVersion||0)+1,j(n.legacyStorage,null)),r}finally{n.slotChanging=!1}}async function J(){return q(`select`,{id:null})}async function Y(e){return q(`select`,{id:e})}async function X(e){return q(`deleteSlot`,{id:e})}async function Z(){let e=B();await q(`clear`,{});let t=Array.from({length:e.legacyStorage.length},(t,n)=>e.legacyStorage.key(n)).filter(e=>e?.startsWith(k));for(let n of t)e.legacyStorage.removeItem(n)}function Q(){return N?.current?JSON.stringify(I(N)):null}function $(e){return e===`nbaGmCareerV3`?k:e===`nbaTradeHomeTeam`?`nba-regret-dynasty-v1:home-team`:`nba-regret-dynasty-v1:`+e}function te(){let e=B(),t=e.storageEpoch||0,n=new Map;function r(){if(N!==e||t!==(e.storageEpoch||0))throw Error(`这份王朝已删除或已切换，旧页面不会重新保存。请返回首页进入要继续的王朝。`);if(e.slotChanging)throw Error(`正在处理王朝存档，请稍候再试。`)}function i(t,i){let a=i||n.get(t?.id)||t?.owner;if(a)return a;if(r(),!e.active||!e.generation||!t?.id)throw Error(`广告安排尚未保存，请先重试保存。`);return{slotId:e.active,generation:e.generation,commandId:t.id}}return{takeRecoveryMessage(){let t=e.recoveryMessage||``;return e.recoveryMessage=``,t},readSnapshot(){return I(e)},async saveRewardReceipt(t,n){let r=await D(globalThis.indexedDB,e.databaseName,i(t,n),t);return L(e,r),!0},async saveRewardAttempt(t,n){let r=await O(globalThis.indexedDB,e.databaseName,i(t,n),t);return L(e,r),!0},async readRewardReceipts(){if(r(),!e.active||!e.generation)return[];let t=await R(e);return r(),Object.values(t?.commands||{}).map(e=>({...structuredClone(e.command),owner:e.owner,context:{...e.command.context,homeTeam:e.homeTeam,year:e.year},stage:[`confirmed`,`applied`].includes(e.phase)?`confirmed`:e.phase===`prepared`?S({...e.command,stage:`prepared`}):e.phase,receiptPhase:e.phase}))},async prepareRewardVideo(t){if(r(),!e.active||!e.current||!e.summary?.team)throw Error(`广告前的王朝存档尚未保存，请先重试保存。`);t||(t=M(e)?.season?.dynastyRewards?.pending);let a=i(t);return n.set(t.id,a),j(e.legacyStorage,{active:e.active,homeTeam:e.summary.team,databaseName:e.databaseName||`nba-regret-dynasty-runtime-v2`,at:Date.now()}),a},getItem(t){return t===`nbaGmCareerV3`?Q():e.small[$(t)]??null},setItem(t,n){if(r(),t===`nbaGmCareerV3`)throw Error(`主存档必须使用异步事务`);e.small[$(t)]=String(n)},removeItem(t){if(r(),t===`nbaGmCareerV3`)throw Error(`请通过存档管理新建王朝`);delete e.small[$(t)]},async saveSnapshot(t){r();let n=await V(e,`commit`,{snapshot:t,small:e.small},!1,r);return Object.assign(e,n),t.season?.dynastyRewards?.pending||j(e.legacyStorage,null),!0}}}async function ne(e,t,n){if(e.managerStory?.livingLeague?.manager?.team===null)throw Error(`先选择下一支球队，再继续赛程。`);if(e.commandBusy)throw Error(`上一项球队操作尚未完成。`);e.commandBusy=!0;try{let r=e.season,i=e.simulationRun,a=e.leftTeam?.abbr,o=await V(B(),`compute`,{snapshot:d(e),command:t,targetIndex:n});return e.runtimeDestroyed||e.season!==r||e.leftTeam?.abbr!==a||e.simulationRun!==i?{cancelled:!0}:(f(e,o.snapshot),o)}finally{e.commandBusy=!1}}function re(){N&&(N.client.destroy(),N=null)}export{K as archiveCurrentDynasty,W as assertDynastySaveReadable,ne as computeGame,te as createDynastyStorage,Z as deleteDynastySaves,X as deleteDynastySlot,re as destroyDynastyServices,H as dynastySummary,U as hasDynastySave,z as initializeDynastyServices,G as listDynastySlots,Q as recoverManagerSave,Y as restoreDynastySlot,J as startNewDynastySlot};