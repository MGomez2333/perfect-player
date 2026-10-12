(function(root){
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 function roll(s){let n=2166136261;for(const c of String(s))n=Math.imul(n^c.charCodeAt(0),16777619);return(n>>>0)/4294967296;}
 function develop(p,{year,ability,potential,line,baseline,path}){
  const ledger=p.parallelDevelopment??={version:1,seasons:{},exposure:0};if(ledger.seasons[year])return ledger.seasons[year];
  const age=Number(p.age||27),minutes=line.avgMin||0,available=line.availability||0,previous=ledger.lastPerformance,improved=previous===undefined?0:Math.max(0,line.performance-previous),training=!!(p.summerGrowth?.year===year||Object.values(p.developmentSkills||{}).some(x=>x>0)||path);
  ledger.exposure+=minutes*available/36+(training?.6:0);ledger.lastPerformance=line.performance;
  const chance=age<=28&&minutes>=16&&available>=.5?clamp(.025+Math.min(ledger.exposure,5)*.012+(training?.025:0)+improved*.06,.025,.16):0;
  const breakout=(!p.parallelTraining||p.parallelTraining.allowBreakthrough===true)&&roll(p.id+':breakthrough:'+year)<chance;
  let delta=baseline,target=potential,boost=0;
  if(breakout){const gap=Math.max(0,95-ability);boost=Math.round(3+gap*(.18+roll(p.id+':size:'+year)*.24));target=clamp(Math.max(potential,ability+Math.max(0,baseline)+boost),ability,99);delta=Math.max(0,baseline)+boost;ledger.exposure=0;}
  delta=Math.min(target-ability,delta);
  const chosen=path||p.parallelTrainingPath||(/C|中锋/.test(p.englishPosition||p.position)?'rebound':'two'),map={isolation:'two',creator:'organization',passing_big:'organization',big:'rebound',stopper:'defense',two_way:'defense',stretch:'three',playmaker:'organization',passing:'organization',shooting:'three',scoring:'two',finishing:'two',rim:'defense',defense:'defense',rebounding:'rebound'},skill=map[chosen]||(['two','three','ft','organization','rebound','defense'].includes(chosen)?chosen:'two');
  if(breakout&&!p.parallelTraining){p.developmentSkills??={};p.developmentSkills[skill]=(p.developmentSkills[skill]||0)+Math.max(2,Math.round(boost*.6));p.parallelBreakoutYear=year;}
  const result=(p.parallelTraining&&root.ParallelDevelopment?root.ParallelDevelopment.settle(p,{year,ability,potential:target,line,baseline,breakout,boost}):null)||{ability,potential:target,line,delta,breakout,boost,skill};ledger.seasons[year]=result;ledger.lastStatus=breakout?'突破赛季':chance>=.09?'突破积累充分':training?'专项训练积累中':'比赛经验积累中';return result;
 }
 const api={develop,roll};if(typeof module!=='undefined')module.exports=api;root.ParallelProgression=api;
})(typeof window!=='undefined'?window:globalThis);
