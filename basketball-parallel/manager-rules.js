(function(root){
 const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
 function state(manager){if(!manager.assessment){const records=[manager.record||{},...(manager.tenures||[])],titles=records.reduce((n,r)=>n+(r.titles||[]).length,0),wins=records.reduce((n,r)=>n+Number(r.wins||0),0);manager.assessment={version:1,mode:'free',reputation:clamp(45+titles*7+Math.floor(wins/100),20,95),legacyTitles:titles,reviews:[],plans:{},strikes:0};}return manager.assessment;}
 function enable(m,year){const s=state(m);s.mode='assessment';s.startYear=year;s.strikes=0;return s;}
 function plan(m,{year,team,strength,cap,payroll,tax,goal}){const s=state(m),key=team+':'+year;if(s.plans[key])return s.plans[key];const firstPlan=!Object.values(s.plans).some(p=>p.team===team),target=goal|| (strength>=85?'contender':strength>=78?'playoff':'rebuild');return s.plans[key]={year,team,target,budget:Math.round(Math.max(firstPlan?payroll+tax:0,cap*(target==='contender'?1.85:target==='playoff'?1.45:1.15))*(1+Math.max(0,s.reputation-65)*.004)),openingStrength:strength,openingPayroll:payroll};}
 function review(m,input){const s=state(m),key=input.team+':'+input.year,old=s.reviews.find(x=>x.key===key);if(old)return old;if(s.mode!=='assessment'||input.year<s.startYear)return null;const p=s.plans[key];if(!p)return null;
  const title=input.finish==='总冠军',deep=['总冠军','总决赛','分区决赛'].includes(input.finish),playoffs=!['未进入季后赛','附加赛阶段'].includes(input.finish),targetMet=p.target==='contender'?deep:p.target==='playoff'?playoffs:p.target==='cap'?input.payroll+input.tax<=p.budget:p.target==='develop'||p.target==='rebuild'?input.youngMinutes>=42&&(input.youngGrowth>=2||input.wins>=30):input.wins>=41;
  const over=Math.max(0,(input.payroll+input.tax)/Math.max(1,p.budget)-1),taxPenalty=Math.min(12,Math.ceil(over*20)),change=(title?10:targetMet?4:-7)-(title?Math.floor(taxPenalty/3):taxPenalty);
  s.reputation=clamp(s.reputation+change,5,99);if(title)s.legacyTitles++;
  const failed=!targetMet||over>.3&&!deep;if(failed)s.strikes++;else s.strikes=0;
  const tolerance=s.legacyTitles>=3?4:3,dismissed=s.strikes>=tolerance;
  const status=dismissed?'dismissed':s.strikes>=tolerance-1?'ultimatum':s.strikes?'warning':'secure';
  const r={key,...input,targetMet,over,budget:p.budget,change,reputation:s.reputation,status,strikes:s.strikes};s.reviews.push(r);s.reviews=s.reviews.slice(-50);if(dismissed)s.dismissed={year:input.year,team:input.team,reason:'连续未完成考核目标'};return r;
 }
 function offers(m,rows){const s=state(m);if(s.mode!=='assessment')return rows;return rows.filter((o,i)=>i<2||o.profile?.type==='rebuild'||s.reputation>=(o.profile?.type==='contender'?72:52));}
 function hired(m,year){const s=state(m);s.strikes=0;delete s.dismissed;if(s.mode==='assessment')s.startYear=Math.max(s.startYear||0,Number(year)+1);}
 const api={state,enable,plan,review,offers,hired};if(typeof module!=='undefined')module.exports=api;root.ParallelManagerRules=api;
})(typeof window!=='undefined'?window:globalThis);
