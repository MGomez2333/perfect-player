/* r41: deterministic player traits, scouting and possession ownership. Shared by both engines. */
(function(root){
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 const labels={professionalism:'职业素养',ambition:'雄心',determination:'意志力',consistency:'稳定性',bigGames:'大赛发挥',clutch:'关键球',durability:'耐久性'};
 const offense={auto:'顺势发挥',heliocentric:'持球大核',handler:'挡拆发起',isolation:'持球单打',hub:'高位策应',offball:'无球射手',drive:'突破终结',pullup:'急停跳投',post:'低位单打',roll:'掩护顺下',pop:'外弹接应',crash:'二次进攻'};
 const defense={auto:'均衡防守',point:'领防持球人',wing:'侧翼协防',rim:'护筐中枢',roam:'游走抢断',boxout:'卡位保护'};
 function hash(s){let n=2166136261;for(const c of String(s))n=Math.imul(n^c.charCodeAt(0),16777619);return(n>>>0)/4294967296;}
 function hidden(p){p.parallelHidden??={version:1,values:Object.fromEntries(Object.keys(labels).map(k=>[k,10]))};for(const key of Object.keys(labels))p.parallelHidden.values[key]=clamp(Math.round(Number(p.parallelHidden.values[key])||10),1,20);return p.parallelHidden.values;}
 function config(state){state.managerStory??={};return state.managerStory.parallelNext??={version:1,seed:Math.floor(Math.random()*0x100000000),salaryMode:'strict',following:{}};}
 function draft(players,state,year){const cfg=config(state),existing=new Map((state.season?.draft?.prospects||[]).map(p=>[String(p.id),p]));return players.map(p=>{const old=existing.get(String(p.id));if(old){for(const key of ['truePotential','simPotential','parallelHidden','parallelScout','parallelGeneration'])if(old[key]!==undefined)p[key]=structuredClone(old[key]);hidden(p);return p;}if(p.parallelGeneration||p.selfDraft)return p;const seed=`${cfg.seed}:${year}:${p.id}:${p.historicalDraft?.year||''}`;p.parallelGeneration=seed;const ability=Number(p.trueAbility??p.simAbility??p.gameRating??70);if(p.historicalDraft){const base=Number(p.truePotential??p.simPotential??85),lo=Math.max(ability,base-25),hi=Math.max(lo,Math.min(99,base+20));p.truePotential=Math.round(lo+hash(seed+':potential')*(hi-lo));if(p.simPotential!==undefined)p.simPotential=p.truePotential;if(p.historicalModel)p.historicalModel={...p.historicalModel,gamePotential:p.truePotential,simPotentialFloor:Math.min(ability,p.truePotential),simPotentialCeiling:p.truePotential};}p.parallelHidden={version:1,values:Object.fromEntries(Object.keys(labels).map(k=>[k,1+Math.floor(hash(seed+':'+k)*20)]))};return p;});}
 function growth(p){const h=hidden(p),work=(h.professionalism*.45+h.determination*.35+h.ambition*.20)/20;const ability=Number(p.simAbility??p.trueAbility??p.gameRating??70),potential=Number(p.simPotential??p.truePotential??p.gamePotential??ability);p.parallelGrowthOrigin??=ability;const reachable=p.parallelGrowthOrigin+(potential-p.parallelGrowthOrigin)*(.45+.55*work);return (.12+1.45*work)*(p.parallelTraining?.allowBreakthrough?1:clamp((reachable-ability)/5,0,1));}
 function scout(p,level=Number(p.scoutLevel||0)){
  const h=hidden(p);level=clamp(level,0,3);p.parallelScout??={version:1,reports:{}};if(p.parallelScout.reports[level])return p.parallelScout.reports[level];
  const seed=p.parallelGeneration||`${p.id}:scout`,bias=hash(seed+':blindspot'),bad=bias<.16,sign=hash(seed+':direction')<.5?-1:1,systematic=bad?sign*(9+hash(seed+':bias')*9):(hash(seed+':bias')-.5)*6;
  const uncertainty=[12,9,6,4][level],estimate=(truth,key,scale=1)=>truth+systematic*scale+(hash(seed+':'+key+':'+level)-.5)*uncertainty*.6;
  const a=Number(p.trueAbility??p.simAbility??p.gameRating??70),pa=Number(p.truePotential??p.simPotential??p.gamePotential??a),ac=clamp(Math.round(estimate(a,'ability',.25)),25,99),pc=clamp(Math.round(estimate(pa,'potential')),a,99);
  const traits=Object.fromEntries(Object.keys(labels).map(key=>[key,clamp(Math.round(estimate(h[key],key,.5)),1,20)]));
  const report={level,abilityLow:clamp(ac-Math.ceil(uncertainty/3),25,99),abilityHigh:clamp(ac+Math.ceil(uncertainty/3),25,99),potentialLow:clamp(pc-uncertainty,a,99),potentialHigh:clamp(pc+uncertainty,a,99),confidence:['信息有限','初步观察','重点考察','较有把握'][level],traits};p.parallelScout.reports[level]=report;return report;
 }
 function estimates(p){if(p.selfDraft||p.parallelHidden?.revealed)return {ability:String(p.trueAbility??p.simAbility),potential:String(p.truePotential??p.simPotential)};const r=scout(p);return {ability:`${r.abilityLow}–${r.abilityHigh}`,potential:`${r.potentialLow}–${r.potentialHigh}`};}
 function model(p,m){const h=hidden(p),t=p.parallelTraining||{};m.parallelHidden={...h};m.parallelDefenseRole=t.defenseRole||'auto';m.parallelReboundWeight={low:.3,high:1.6,focal:2.8}[t.rebounds]||1;m.parallelPass=t.pass||'auto';m.parallelShots=t.shots||'auto';m.parallelRole=t.offenseRole||p.specialtyRole||'auto';if(m.parallelRole==='heliocentric')m.parallelInitiationWeight=(m.parallelInitiationWeight||1)*1.6;
  if(m.identity)m.identity.consistency=clamp((m.identity.consistency||.8)+(h.consistency-10)*.012,.5,.97);
  if(m.performance){m.performance.parallelHidden={...h};m.performance.stamina=clamp((m.performance.stamina||0)+(h.durability-10)*.025,-1,1);}
  return m;
 }
 function eventWeight(m,event){const role=m.parallelDefenseRole,groups={point:{perimeter:1.8,steal:1.3,rim:.55,block:.55},wing:{perimeter:1.25,intercept:1.4},rim:{rim:2,block:1.8,perimeter:.5,steal:.6},roam:{steal:1.8,intercept:2,perimeter:.7,rim:.7},boxout:{boxout:2,block:.7}};if(event==='reb')return m.parallelReboundWeight||1;return groups[role]?.[event]||1;}
 function possession(team,choose,random){
  const rows=team.rows,handler=choose(rows,'handler');let shooter=handler,passer=null,screener=null,kind='handler';
  if(rows.length<2)return{shooter,passer,handler,screener,kind};
  // Choose an intended finisher from explicit shot shares; the initiator creates the chance.
  const target=choose(rows,'usage'),role=handler.model.parallelRole||handler.model.specialties?.role,passing=handler.model.specialties?.tendencies?.passing??.5;
  const passChance=clamp(.38+passing*.5+(role==='hub'?.10:0)+(handler.model.parallelPass==='create'?.08:0),.25,.92);
  if(target!==handler&&random()<passChance){shooter=target;passer=handler;kind='assisted';}
  else if(target===handler&&handler.model.parallelPass==='create'&&random()<.25){shooter=choose(rows,'catch',handler);passer=handler;kind='assisted';}
  if(['handler','heliocentric'].includes(role)&&random()<.5){screener=choose(rows,'roller',handler);if(passer&&shooter===screener)kind=shooter.model.specialties?.role==='pop'?'pop':'roll';}
  return{shooter,passer,handler,screener,kind};
 }
 function pressure(performance,pressure,result){const h=performance?.parallelHidden;if(!h)return result;return {...result,shot:result.shot+(h.clutch-10)*.0018*pressure,ft:result.ft+(h.clutch-10)*.001*pressure,turnover:result.turnover-(h.determination-10)*.0008*pressure};}
 function budget(base,mode){if(mode!=='relaxed')return {...base};return Object.fromEntries(Object.entries(base).map(([key,value])=>[key,['salaryCap','luxuryTax','firstApron','secondApron'].includes(key)?Math.round(value*1.25):value]));}
 function follow(state,ability){const cfg=config(state),year=Number(state.season?.year);cfg.following??={};for(const entry of Object.values(cfg.following)){const team=state.data?.teams?.find(t=>t.players.some(p=>(String(p.id)===entry.id||String(p.parallelOriginId)===entry.id))),p=team?.players.find(p=>(String(p.id)===entry.id||String(p.parallelOriginId)===entry.id))||state.season?.freeAgents?.find(p=>(String(p.id)===entry.id||String(p.parallelOriginId)===entry.id));if(!p)continue;const stats=state.season?.playerStats?.[p.id]||{};entry.name=p.name;entry.team=team?.abbr||'FA';entry.history??=[];const row={year,team:entry.team,ability:ability(p),gp:Number(stats.gp||0),pts:Number(stats.pts||0),reb:Number(stats.reb||0),ast:Number(stats.ast||0)};const old=entry.history.find(x=>x.year===year);if(old)Object.assign(old,row);else entry.history.push(row);if(entry.lastTeam&&entry.lastTeam!==entry.team)(entry.moves??=[]).push({year,from:entry.lastTeam,to:entry.team});entry.lastTeam=entry.team;}}
 const api={labels,offense,defense,hash,hidden,config,draft,growth,scout,estimates,model,eventWeight,possession,pressure,budget,follow};root.ParallelNext=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
