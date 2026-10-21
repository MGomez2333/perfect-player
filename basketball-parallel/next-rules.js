/* r41: deterministic player traits, scouting and possession ownership. Shared by both engines. */
(function(root){
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 const labels={professionalism:'职业素养',ambition:'雄心',determination:'意志力',consistency:'稳定性',bigGames:'大赛发挥',clutch:'关键球',durability:'耐久性'};
 const offense={auto:'顺势发挥',heliocentric:'持球大核',handler:'挡拆发起',isolation:'持球单打',hub:'高位策应',offball:'无球射手',drive:'突破终结',pullup:'急停跳投',post:'低位单打',roll:'掩护顺下',pop:'外弹接应',crash:'二次进攻'};
 const defense={auto:'均衡防守',point:'领防持球人',wing:'侧翼协防',rim:'护筐中枢',roam:'游走抢断',boxout:'卡位保护'};
 function hash(s){let n=2166136261;for(const c of String(s))n=Math.imul(n^c.charCodeAt(0),16777619);return(n>>>0)/4294967296;}
 // Fictional gameplay presets, not factual personality assessments. Unlisted players get
 // stable, independent traits from identity; opening CA/PA and custom/draft values stay intact.
 const profiles=[
  [['克里斯保罗','Chris Paul'],[18,19,19,17,15,17,12]],
  [['詹姆斯哈登','James Harden'],[14,10,13,15,10,13,16]],
  [['本西蒙斯','Ben Simmons'],[10,6,9,10,8,8,8]],
  [['勒布朗詹姆斯','LeBron James'],[19,19,18,18,18,17,19]],
  [['科比布莱恩特','Kobe Bryant'],[20,20,20,16,18,19,16]],
  [['迈克尔乔丹','Michael Jordan'],[19,20,20,19,20,20,18]],
  [['斯蒂芬库里','Stephen Curry'],[19,18,18,17,17,17,13]],
  [['凯文杜兰特','Kevin Durant'],[17,17,16,18,18,18,12]],
  [['拉塞尔威斯布鲁克','Russell Westbrook'],[18,19,19,12,13,13,17]],
  [['卢卡东契奇','Luka Doncic'],[14,18,17,16,18,18,13]],
  [['尼古拉约基奇','Nikola Jokic'],[18,16,17,19,19,17,17]],
  [['扬尼斯阿德托昆博','Giannis Antetokounmpo'],[19,19,19,17,17,16,16]],
  [['蒂姆邓肯','Tim Duncan'],[19,18,18,20,19,18,17]],
  [['凯文加内特','Kevin Garnett'],[19,19,20,17,17,17,17]],
  [['沙奎尔奥尼尔','Shaquille ONeal'],[12,17,17,17,19,15,13]],
  [['姚明','Yao Ming'],[19,17,18,17,16,15,7]],
  [['吉米巴特勒','Jimmy Butler'],[18,18,19,14,20,19,12]],
  [['科怀伦纳德','Kawhi Leonard'],[17,16,18,18,19,18,6]],
  [['德里克罗斯','Derrick Rose'],[17,17,19,15,16,15,6]],
  [['托尼阿伦','Tony Allen'],[17,15,18,16,16,12,13]]
 ];
 const identityName=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9\u3400-\u9fff]/g,'');
 function traitNoise(seed){let n=(hash(seed)*4294967296)>>>0;n=Math.imul(n^(n>>>16),0x85ebca6b);n=Math.imul(n^(n>>>13),0xc2b2ae35);return ((n^(n>>>16))>>>0)/4294967296;}
 function openingTraits(p){
  const names=[p.name,p.englishName,p.nameEn].filter(Boolean).map(identityName);
  const profile=profiles.find(([aliases])=>aliases.some(n=>names.includes(identityName(n))));
  const identity=names[0]||String(p.parallelOriginId||p.id||'unknown');
  return Object.fromEntries(Object.keys(labels).map((key,i)=>[key,profile?profile[1][i]:6+Math.floor(traitNoise('opening-v2:'+key+':'+identity)*12)]));
 }
 function hidden(p){
  const old=p.parallelHidden,keys=Object.keys(labels);
  const placeholder=old?.version===1&&!old.source&&!p.selfDraft&&!p.parallelGeneration&&keys.every(k=>old.values?.[k]===10);
  if(!old||placeholder){
   const values=p.selfDraft?Object.fromEntries(keys.map(k=>[k,10])):openingTraits(p);
   p.parallelHidden={...old,version:2,source:p.selfDraft?'custom':'opening-profile',values};
  }
  p.parallelHidden.values??={};
  for(const key of keys)p.parallelHidden.values[key]=clamp(Math.round(Number(p.parallelHidden.values[key])||10),1,20);
  return p.parallelHidden.values;
 }
 function config(state){state.managerStory??={};return state.managerStory.parallelNext??={version:1,seed:Math.floor(Math.random()*0x100000000),salaryMode:'strict',following:{}};}
 function draft(players,state,year){const cfg=config(state),existing=new Map((state.season?.draft?.prospects||[]).map(p=>[String(p.id),p]));return players.map(p=>{const old=existing.get(String(p.id));if(old){for(const key of ['truePotential','simPotential','parallelHidden','parallelScout','parallelGeneration'])if(old[key]!==undefined)p[key]=structuredClone(old[key]);hidden(p);return p;}if(p.parallelGeneration||p.selfDraft)return p;const seed=`${cfg.seed}:${year}:${p.id}:${p.historicalDraft?.year||''}`;p.parallelGeneration=seed;const ability=Number(p.trueAbility??p.simAbility??p.gameRating??70);if(p.historicalDraft){const base=Number(p.truePotential??p.simPotential??85),lo=Math.max(ability,base-25),hi=Math.max(lo,Math.min(99,base+20));p.truePotential=Math.round(lo+hash(seed+':potential')*(hi-lo));if(p.simPotential!==undefined)p.simPotential=p.truePotential;if(p.historicalModel)p.historicalModel={...p.historicalModel,gamePotential:p.truePotential,simPotentialFloor:Math.min(ability,p.truePotential),simPotentialCeiling:p.truePotential};}p.parallelHidden={version:1,values:Object.fromEntries(Object.keys(labels).map(k=>[k,1+Math.floor(hash(seed+':'+k)*20)]))};return p;});}
 function growth(p){const h=hidden(p),work=(h.professionalism*.45+h.determination*.35+h.ambition*.20)/20;const ability=Number(p.simAbility??p.trueAbility??p.gameRating??70),potential=Number(p.simPotential??p.truePotential??p.gamePotential??ability);p.parallelGrowthOrigin??=ability;const reachable=p.parallelGrowthOrigin+(potential-p.parallelGrowthOrigin)*(.45+.55*work);return (.12+1.45*work)*(p.parallelTraining?.allowBreakthrough?1:clamp((reachable-ability)/5,0,1));}
 function opinion(p,level,channel='personal'){
  const seed=(p.parallelGeneration||`${p.id}:scout`)+':'+channel,noise=key=>hash(seed+':'+key),bad=noise('blindspot')<.16;
  const systematic=bad?(noise('direction')<.5?-1:1)*(9+noise('bias')*9):(noise('bias')-.5)*6;
  const a=Number(p.trueAbility??p.simAbility??p.gameRating??70),pa=Number(p.truePotential??p.simPotential??p.gamePotential??a);
  const uncertainty=[8,6,4,3][level],evidence=[.45,.65,.85,.95][level];
  const ac=clamp(Math.round(a+systematic*.25+(noise('ability:'+level)-.5)*4),25,99);
  const prior=clamp(ac+Math.max(2,23-Number(p.age||20))*1.6,70,88);
  const pc=clamp(Math.round(prior*(1-evidence)+(pa+systematic)*evidence+(noise('potential:'+level)-.5)*4),ac,99);
  const traits=Object.fromEntries(Object.keys(labels).map(key=>[key,clamp(Math.round(hidden(p)[key]+systematic*.5+(noise(key+':'+level)-.5)*uncertainty*.6),1,20)]));
  return {level,abilityLow:clamp(ac-2,25,99),abilityHigh:clamp(ac+2,25,99),potentialLow:clamp(pc-uncertainty,ac,99),potentialHigh:clamp(pc+uncertainty,ac,99),confidence:['信息有限','初步观察','重点考察','较有把握'][level],traits};
 }
 function scout(p,level=Number(p.scoutLevel||0)){
  level=clamp(Math.round(level),0,3);
  if(p.parallelScout?.version!==2)p.parallelScout={version:2,reports:{},legacyReports:structuredClone(p.parallelScout?.reports||{})};
  return p.parallelScout.reports[level]??=(opinion(p,level));
 }
 function market(p){
  if(p.parallelMarket?.version!==2){const r=opinion(p,1,'league');const ability=(r.abilityLow+r.abilityHigh)/2,potential=(r.potentialLow+r.potentialHigh)/2;
   p.parallelMarket={version:2,ability,potential,score:ability*.65+potential*.35+clamp(21-Number(p.age||20),-7,3)*.6+(hash((p.parallelGeneration||p.id)+':buzz')-.5)*5};}
  return p.parallelMarket;
 }
 function compareProspects(a,b){return market(b).score-market(a).score||String(a.id).localeCompare(String(b.id));}
 function estimates(p){if(p.selfDraft||p.parallelHidden?.revealed)return {ability:String(p.trueAbility??p.simAbility),potential:String(p.truePotential??p.simPotential)};const r=scout(p);return {ability:`${r.abilityLow}–${r.abilityHigh}`,potential:r.level===0?'待考察':`${r.potentialLow}–${r.potentialHigh}`};}
 function model(p,m){const h=hidden(p),t=p.parallelTraining||{};m.parallelHidden={...h};m.parallelDefenseRole=t.defenseRole||'auto';m.parallelReboundWeight={low:.3,high:1.6,focal:2.8}[t.rebounds]||1;m.parallelPass=t.pass||'auto';m.parallelShots=t.shots||'auto';m.parallelRole=t.offenseRole||p.specialtyRole||'auto';
  if(m.identity)m.identity.consistency=clamp((m.identity.consistency||.8)+(h.consistency-10)*.012,.5,.97);
  if(m.performance){m.performance.parallelHidden={...h};m.performance.stamina=clamp((m.performance.stamina||0)+(h.durability-10)*.025,-1,1);}
  return m;
 }
 function eventWeight(m,event){const role=m.parallelDefenseRole,groups={point:{perimeter:1.8,steal:1.3,rim:.55,block:.55},wing:{perimeter:1.25,intercept:1.4},rim:{rim:2,block:1.8,perimeter:.5,steal:.6},roam:{steal:1.8,intercept:2,perimeter:.7,rim:.7},boxout:{boxout:2,block:.7}};if(event==='reb')return m.parallelReboundWeight||1;return groups[role]?.[event]||1;}
 function possession(team,choose,random){
  const rows=team.rows,handler=choose(rows,'handler');let shooter=handler,passer=null,screener=null,kind='normal';
  if(rows.length<2)return{shooter,passer,handler,screener,kind};
  // Shot priority chooses the finisher; a failed direct-pass decision must not
  // hand every such possession back to the original initiator for a shot.
  shooter=choose(rows,'usage');
  if(shooter===handler&&handler.model.parallelPass==='create'&&random()<.30)shooter=choose(rows,'catch',handler);
  const role=handler.model.parallelRole||handler.model.specialties?.role,passing=handler.model.specialties?.tendencies?.passing??.5;
  const passChance=clamp(.35+passing*.48+(role==='hub'?.07:0)+(handler.model.parallelPass==='create'?.06:0),.25,.84);
  if(shooter!==handler&&random()<passChance){passer=handler;kind='assisted';}
  // Ball circulation / secondary creation: the final pass can come from a teammate.
  // Skill and minutes still matter; no player or box-score stat has a hard ceiling.
  const relayChance=.18;
  if(random()<relayChance){
   const candidates=rows.filter(row=>row!==shooter&&row!==handler);
   if(candidates.length){
    const weights=candidates.map(row=>Math.max(0,row.min??1)*Math.pow(Math.max(.2,row.model.ast36||1),.8)*(.6+(row.model.specialties?.tendencies?.passing??.5)));
    let roll=random()*weights.reduce((sum,w)=>sum+w,0);
    const relay=candidates.find((row,i)=>(roll-=weights[i])<0)||candidates[candidates.length-1];
    passer=relay;kind='assisted';
   }
  }
  if(['handler','heliocentric'].includes(role)&&passer===handler&&random()<.5){screener=choose(rows,'roller',handler);if(shooter===screener)kind=shooter.model.specialties?.role==='pop'?'pop':'roll';}
  // Self-created attempts belong to their finisher; secondary creation belongs to
  // its actual passer for pressure and turnovers as well as assist attribution.
  return{shooter,passer,handler:passer||shooter,screener,kind};
 }
 function pressure(performance,pressure,result){const h=performance?.parallelHidden;if(!h)return result;return {...result,shot:result.shot+(h.clutch-10)*.0018*pressure,ft:result.ft+(h.clutch-10)*.001*pressure,turnover:result.turnover-(h.determination-10)*.0008*pressure};}
 function budget(base,mode){if(mode!=='relaxed')return {...base};return Object.fromEntries(Object.entries(base).map(([key,value])=>[key,['salaryCap','luxuryTax','firstApron','secondApron'].includes(key)?Math.round(value*1.25):value]));}
 function follow(state,ability){const cfg=config(state),year=Number(state.season?.year);cfg.following??={};for(const entry of Object.values(cfg.following)){const team=state.data?.teams?.find(t=>t.players.some(p=>(String(p.id)===entry.id||String(p.parallelOriginId)===entry.id))),p=team?.players.find(p=>(String(p.id)===entry.id||String(p.parallelOriginId)===entry.id))||state.season?.freeAgents?.find(p=>(String(p.id)===entry.id||String(p.parallelOriginId)===entry.id));if(!p)continue;const stats=state.season?.playerStats?.[p.id]||{};entry.name=p.name;entry.team=team?.abbr||'FA';entry.history??=[];const row={year,team:entry.team,ability:ability(p),gp:Number(stats.gp||0),pts:Number(stats.pts||0),reb:Number(stats.reb||0),ast:Number(stats.ast||0)};const old=entry.history.find(x=>x.year===year);if(old)Object.assign(old,row);else entry.history.push(row);if(entry.lastTeam&&entry.lastTeam!==entry.team)(entry.moves??=[]).push({year,from:entry.lastTeam,to:entry.team});entry.lastTeam=entry.team;}}
 const api={labels,offense,defense,hash,openingTraits,hidden,config,draft,growth,scout,opinion,market,compareProspects,estimates,model,eventWeight,possession,pressure,budget,follow};root.ParallelNext=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
