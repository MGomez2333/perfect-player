/* Shared pure career rules, also used by regression tests. */
(function(root){
 const aliases={BKN:'BRK',NJN:'BRK',PHX:'PHO',SEA:'OKC',VAN:'MEM',NOH:'NOP',NOK:'NOP',WSB:'WAS',CHH:'CHO',CHA:'CHO'};
 const franchise=t=>aliases[String(t||'').toUpperCase()]||String(t||'').toUpperCase();
 function teamAt(t,season){const y=parseInt(season),f=franchise(t);if(f==='NOP')return y>=2013?'NOP':y>=2005&&y<=2006?'NOK':y>=2002?'NOH':t;if(f==='CHO')return y>=2014?'CHO':y>=2004?'CHA':'CHH';if(f==='OKC')return y>=2008?'OKC':'SEA';if(f==='MEM')return y>=2001?'MEM':'VAN';if(f==='BRK')return y>=2012?'BRK':'NJN';if(f==='WAS')return y>=1997?'WAS':'WSB';return t;}
 function selected(state){if(!state?.confirmed||state.selected==null)return null;const card=state.cards?.[state.selected];return card?{version:1,id:card.id,tier:card.tier,choice:state.choice,key:state.key}:null;}
 function remember(career,state){if(!career)return;const aug=selected(state);if(!aug)return;career.permanentAugments??=[];const key=aug.key||`${career.careerId}:${career.careerYear}`;const old=career.permanentAugments.find(a=>a.key===key);if(old)Object.assign(old,aug,{key});else career.permanentAugments.push({...aug,key,acquiredSeason:career.currentSeason});}
 function migrate(career){if(!career)return career;remember(career,career.seasonAugment);career.currentTeam=teamAt(career.currentTeam,career.currentSeason);career.franchiseId=franchise(career.currentTeam);if(career.contract){career.contract.team=teamAt(career.contract.team,career.currentSeason);career.contract.franchiseId=franchise(career.contract.team);}
  for(const s of career.seasons||[]){s.team=teamAt(s.team,s.season);s.franchiseId=franchise(s.team);if(s.parallelAugments)for(const a of s.parallelAugments){career.permanentAugments??=[];if(!career.permanentAugments.some(x=>x.key===a.key))career.permanentAugments.push({...a});}}
  const normalized=new Map();for(const a of career.permanentAugments||[]){const key=String(a.key||'').startsWith('draft:')?`${career.careerId}:1`:a.key;if(!key)continue;const known=normalized.get(key);if(!known||String(a.key||'')===key)normalized.set(key,{...a,key});}career.permanentAugments=[...normalized.values()];
  for(const o of career.pendingOffers||[]){o.team=teamAt(o.team,parseInt(career.currentSeason)+1);o.franchise_id=franchise(o.team);if(o.kind==='stay'&&o.franchise_id!==career.franchiseId){o.kind='featured';o.roster=[];}}
  return career;
 }
 function augments(context){const list=[...(context?.permanent_augments||[])];if(context?.augment){const a={...context.augment,key:context.augment.key||`${context.career_id||'draft'}:${context.career_year||1}`};if(a.key){if(!list.some(x=>x.key===a.key))list.push(a);}else if(!list.some(x=>x.id===a.id&&x.tier===a.tier&&x.choice===a.choice))list.push(a);}return list;}
 const fields=['pts','reb','ast','stl','blk'];
 function summarize(games){const totals=Object.fromEntries([...fields,'three_m'].map(k=>[k,0])),highs={...totals};const counts={doubleDouble:0,tripleDouble:0,quadrupleDouble:0,quintupleDouble:0,fiveByFive:0};for(const g of games){const l=g.player_line||g;for(const k of Object.keys(totals)){const value=Math.max(0,Number(l[k]??(k==='three_m'?l.three_made:0))||0);totals[k]+=value;highs[k]=Math.max(highs[k],value);}const n=fields.filter(k=>Number(l[k])>=10).length;counts.doubleDouble+=n>=2;counts.tripleDouble+=n>=3;counts.quadrupleDouble+=n>=4;counts.quintupleDouble+=n>=5;counts.fiveByFive+=fields.every(k=>Number(l[k])>=5);}return{games:games.length,totals,highs,counts};}
 function resultStats(result){return {stats_version:2,regular:summarize(result.regular_season?.games||[]),playoffs:summarize((result.playoff_series||[]).filter(s=>s.teams.includes(result.team)).flatMap(s=>s.games)),season:result.season};}
 function visibleStats(result,{regularGames=0,moments=[],step=0,complete=false}={}){
  if(complete)return resultStats(result);
  const regular=result.regular_season?.games||[],eligible=new Set((result.playoff_series||[]).filter(s=>s.teams?.includes(result.team)).flatMap(s=>s.games||[])),played=new Set();
  for(const m of moments.slice(0,Math.max(0,step)+1)){if(m?.kind==='season-checkpoint')regularGames=Math.max(regularGames,m.checkpoint?.games||0);if(m?.kind==='game-box'&&eligible.has(m.game))played.add(m.game);}
  if(played.size)regularGames=regular.length;
  return {stats_version:2,season:result.season,regular:summarize(regular.slice(0,regularGames)),playoffs:summarize([...played])};
 }
 function archivedStats(s){
  if(s.parallelStats)return s.parallelStats;
  const convert=t=>Object.fromEntries(Object.entries({pts:'points',reb:'rebounds',ast:'assists',stl:'steals',blk:'blocks',three_m:'threes'}).filter(([k,v])=>t?.[v]!=null).map(([k,v])=>[k,Math.max(0,Number(t[v])||0)]));
  return {season:s.season,regular:{games:s.playerAverages?.games??null,totals:convert(s.totals),highs:convert(s.singleGameHighs),counts:{},legacy:true},playoffs:{games:s.playoffGames??null,totals:convert(s.playoffTotals),highs:convert(s.playoffSingleGameHighs),counts:{},legacy:true}};
 }
 function collectReaper(career,result,{moments=[],step=0,complete=false}={}){
  if(!career||!result)return false;
  const before=JSON.stringify(career.reaperOpportunities||[]),seen=new Set(moments.slice(0,Math.max(0,step)+1).filter(m=>m.kind==='game-box').map(m=>m.game));
  const won=(result.playoff_series||[]).filter(s=>s.winner===result.team&&s.teams.includes(result.team)&&(complete||seen.has(s.games?.at(-1))));
  career.reaperOpportunities??=[];
  const cards=career.permanentAugments||result.permanent_augments||[];
  for(const card of cards.filter(a=>a.id==='reaper')){
   let op=career.reaperOpportunities.find(x=>x.key===card.key&&x.season===result.season);
   const candidates=(result.reaper_rounds||[]).filter(r=>won.some(s=>s.round===r.round)).flatMap(r=>r.skills);
   if(!candidates.length)continue;
   if(!op){op={key:card.key,season:result.season,options:[],skills:[]};career.reaperOpportunities.push(op);}
   for(const skill of candidates)if(!op.options.includes(skill.id)){op.options.push(skill.id);op.skills.push(skill);}
   if(card.key===career.seasonAugment?.key&&career.seasonAugment.reaperAccepted)op.claimed=career.seasonAugment.reaperAccepted;
  }
  return before!==JSON.stringify(career.reaperOpportunities);
 }
 function request(data,career,name){migrate(career);const out={...data,player:{...data.player,name:name||career?.customName||'我的球员'},career_context:{...data.career_context}};if(career){remember(career,career.seasonAugment);out.career_context.permanent_augments=(career.permanentAugments||[]).map(a=>({...a}));out.career_context.career_id=career.careerId;}if(out.career_context.augment){const current=out.career_context.permanent_augments?.find(a=>a.key===career?.seasonAugment?.key);out.career_context.augment={...out.career_context.augment,key:current?.key||out.career_context.augment.key||`${out.career_context.career_id||"draft"}:${out.career_context.career_year||1}`};}out.career_context.salary_millions=Number(career?.contract?.annualSalaryMillions)||((out.career_context.career_year||1)<=3?2:0);return out;}

 const bonusKeys={three:['threePT'],mid:['MID'],finish:['FIN'],dunk:['DNK'],handle:['HAN'],pass:['PAS'],perimeter:['PDEF'],interior:['IDEF'],block:['BLK'],rebound:['REB'],athletic:['ATH'],strength:['STR'],creator:['HAN','PAS'],sniper:['HAN','threePT'],driver:['HAN','FIN'],'two-way':['MID','PDEF'],'three-d':['threePT','PDEF'],air:['DNK','ATH'],hub:['PAS','IDEF'],paint:['FIN','REB']};
 function bonuses(cards=[],skills=[],catalog=[]){const totals={},sources=[];const add=(label,boosts,key)=>{sources.push({label,boosts:{...boosts},key});for(const[k,v]of Object.entries(boosts||{}))totals[k]=(totals[k]||0)+Number(v||0);};for(const a of cards){const keys=a.id==='weakness'?[a.choice].filter(Boolean):bonusKeys[a.id]||[];if(keys.length)add(a.id,Object.fromEntries(keys.map(k=>[k,a.tier*2/keys.length])),a.key);if(a.id==='borrow'){const t=catalog.find(t=>t.id===a.choice);if(t)add(t.mentor+' · '+t.name,t.boosts,a.key);}}for(const id of new Set(skills.map(s=>s.id))){const t=catalog.find(t=>t.id===id);if(t)add(t.mentor+' · '+t.name,t.boosts,id);}return{totals,sources};}
 function effective(base,bonus){return Object.fromEntries(Object.entries(base||{}).map(([k,v])=>[k,Number(v)+(Number(bonus?.[k])||0)]));}
 function wallet(c){c.economy??={version:1,ledger:[],purchases:{}};return c.economy;}
 function balance(c){return Math.round(wallet(c).ledger.reduce((s,r)=>s+r.amount,0)*100)/100;}
 function salary(c,season=c.currentSeason,year=c.careerYear){const contract=c.contract;if(!contract||year<=Number(contract.signedAfterYear||0)||year>Number(contract.signedAfterYear||0)+Number(contract.years||0))return 0;const amount=Number(contract.annualSalaryMillions);if(!Number.isFinite(amount)||amount<=0)return 0;const w=wallet(c),id='salary:'+season;if(w.ledger.some(x=>x.id===id))return 0;w.ledger.push({id,season,amount,label:'赛季工资',team:teamAt(contract.team,season)});const archived=c.seasons?.find(x=>x.season===season);if(archived)archived.salaryMillions=amount;return amount;}
 function migrateWallet(c){if(!c)return;const w=wallet(c);for(const s of c.seasons||[]){if(w.ledger.some(x=>x.id==='salary:'+s.season))continue;if(Number(s.salaryMillions)>0)w.ledger.push({id:'salary:'+s.season,season:s.season,amount:Number(s.salaryMillions),label:'已记录工资',team:s.team});else salary(c,s.season,s.careerYear);}}
 function purchase(c,kind){const w=wallet(c),season=c.currentSeason,key=season+':'+kind,n=w.purchases[key]||0;let cost;if(kind==='training'){if(c.phase!=='development'||!c.pendingDevelopment)throw Error('请在休赛期分配训练点时购买');if(n>=2)throw Error('本赛季私人训练已完成两次');const room=Object.values(c.currentRatings||{}).reduce((s,v)=>s+Math.max(0,99-v),0)-(c.pendingDevelopment.pointsRemaining||0)-Object.values(c.pendingDevelopment.allocations||{}).reduce((a,b)=>a+b,0);if(room<1)throw Error('基础能力已没有可训练空间');cost=[2,5][n];}else if(kind==='body'){if(n>=1)throw Error('本赛季身体管理已安排');cost=3;}else throw Error('未知项目');if(balance(c)<cost)throw Error('可用工资不足');w.purchases[key]=n+1;w.ledger.push({id:'buy:'+key+':'+n,season,amount:-cost,label:kind==='training'?'私人训练 · 基础训练点 +2':'身体管理 · 下一次年龄衰减减半'});if(kind==='training'){const d=c.pendingDevelopment,room=Object.values(c.currentRatings).reduce((s,v)=>s+Math.max(0,99-v),0)-d.pointsRemaining-Object.values(d.allocations||{}).reduce((a,b)=>a+b,0),points=Math.min(2,room);d.pointsRemaining+=points;d.growthPoints+=points;}else w.bodyCredits=(w.bodyCredits||0)+1;return cost;}
 const api={bonuses,effective,wallet,balance,salary,migrateWallet,purchase,franchise,teamAt,selected,remember,migrate,augments,summarize,resultStats,visibleStats,archivedStats,collectReaper,request};root.ParallelCareerCore=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
