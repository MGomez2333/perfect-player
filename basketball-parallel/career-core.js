/* Shared pure career rules, also used by regression tests. */
(function(root){
 const aliases={BKN:'BRK',NJN:'BRK',PHX:'PHO',SEA:'OKC',VAN:'MEM',NOH:'NOP',NOK:'NOP',WSB:'WAS',CHH:'CHO',CHA:'CHO'};
 const franchise=t=>aliases[String(t||'').toUpperCase()]||String(t||'').toUpperCase();
 function teamAt(t,season){const y=parseInt(season),f=franchise(t);if(f==='NOP')return y>=2013?'NOP':y>=2005&&y<=2006?'NOK':y>=2002?'NOH':t;if(f==='CHO')return y>=2014?'CHO':y>=2004?'CHA':'CHH';if(f==='OKC')return y>=2008?'OKC':'SEA';if(f==='MEM')return y>=2001?'MEM':'VAN';if(f==='BRK')return y>=2012?'BRK':'NJN';if(f==='WAS')return y>=1997?'WAS':'WSB';return t;}
 function selected(state){if(!state?.confirmed||state.selected==null)return null;const card=state.cards?.[state.selected];return card?{version:1,id:card.id,tier:card.tier,choice:state.choice,key:state.key}:null;}
 function remember(career,state){if(!career)return;const aug=selected(state);if(!aug)return;career.permanentAugments??=[];const key=aug.key||`${career.careerId}:${career.careerYear}`;const old=career.permanentAugments.find(a=>a.key===key);if(old)Object.assign(old,aug,{key});else career.permanentAugments.push({...aug,key,acquiredSeason:career.currentSeason});}
 function migrate(career){if(!career)return career;remember(career,career.seasonAugment);career.currentTeam=teamAt(career.currentTeam,career.currentSeason);career.franchiseId=franchise(career.currentTeam);if(career.contract){career.contract.team=teamAt(career.contract.team,career.currentSeason);career.contract.franchiseId=franchise(career.contract.team);}
  for(const s of career.seasons||[]){s.team=teamAt(s.team,s.season);s.franchiseId=franchise(s.team);if(s.parallelAugments)for(const a of s.parallelAugments){career.permanentAugments??=[];if(!career.permanentAugments.some(x=>x.key===a.key))career.permanentAugments.push({...a});}}
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
 function request(data,career,name){migrate(career);const out={...data,player:{...data.player,name:name||career?.customName||'我的球员'},career_context:{...data.career_context}};if(career){remember(career,career.seasonAugment);out.career_context.permanent_augments=(career.permanentAugments||[]).map(a=>({...a}));out.career_context.career_id=career.careerId;}if(out.career_context.augment){const current=out.career_context.permanent_augments?.find(a=>a.key===career?.seasonAugment?.key);out.career_context.augment={...out.career_context.augment,key:current?.key||out.career_context.augment.key||`${out.career_context.career_id||"draft"}:${out.career_context.career_year||1}`};}return out;}
 const api={franchise,teamAt,selected,remember,migrate,augments,summarize,resultStats,visibleStats,archivedStats,request};root.ParallelCareerCore=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
