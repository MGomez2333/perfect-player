/* Shared by the manager UI and simulation worker. All progress lives in the save. */
(function(root){
 const keys=['finish','mid','three','ft','handle','passing','perimeter','rim','rebound'];
 const labels={finish:'篮下终结',mid:'中投',three:'三分',ft:'罚球',handle:'控球',passing:'传球',perimeter:'外线防守',rim:'护筐',rebound:'篮板'};
 const positions={PG:'控球后卫',SG:'得分后卫',SF:'小前锋',PF:'大前锋',C:'中锋'};
 const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
 const overall=p=>Number(p.simAbility??p.trueAbility??p.gameRating??70);
 const totals=(p,s,team)=>{const x=s?.playerStats?.[p.id]||{},r=s?.records?.[team]||{};return {year:Number(s?.year||0),games:Math.min(82,Number(r.wins||0)+Number(r.losses||0)),gp:Number(x.gp||0),min:Number(x.min||0)};};
 function external(p){const d=p.developmentSkills||{},m=p.mentorNineGains||{},six=p.mentorSkillGains||{},map={finish:'two',mid:'two',three:'three',ft:'ft',handle:'organization',passing:'organization',perimeter:'defense',rim:'defense',rebound:'rebound'};return Object.fromEntries(keys.map(k=>[k,Number(m[k]||0)+Number(d[map[k]]||0)+Number(six[map[k]]||0)]));}
 function init(p,nine,clock,ability=overall(p)){if(p.parallelTraining)return p.parallelTraining;const pos=p.englishPosition||'SF';return p.parallelTraining={version:1,main:'passing',secondary:'handle',shot:'auto',touch:'auto',pass:'auto',target:pos,originalPosition:pos,originalPositions:[...p.realPositions||[pos]],familiarity:{[pos]:100},base:{...nine},origin:{...nine},gains:Object.fromEntries(keys.map(k=>[k,0])),external:external(p),externalOrigin:external(p),baseOverall:ability,cursor:{...clock},history:[],seasonStart:{...nine},summerYears:[],settledYears:[]};}
 function ratings(state,native){if(!state)return native;return Object.fromEntries(keys.map(k=>[k,Math.round(clamp(state.base[k]+(state.gains[k]||0)+(state.external?.[k]||0)-(state.externalOrigin?.[k]||0),25,99))]));}
 function sync(p){const t=p.parallelTraining;if(!t)return;t.external=external(p);const v=ratings(t,t.base),change=keys.reduce((n,k)=>n+v[k]-t.origin[k],0)/keys.length;p.simAbility=clamp(Math.round(t.baseOverall+change),55,99);p.simPotential=Math.max(Number(p.simPotential||p.truePotential||p.simAbility),p.simAbility);return v;}
 function allocate(p,budget,reason,year){const t=p.parallelTraining;if(!t||budget<=0)return;const weights={};for(const k of keys)weights[k]=k===t.main?.45:k===t.secondary?.25:.30/7;
  let spent=0;for(const k of keys){const before=t.base[k]+t.gains[k]+t.external[k]-t.externalOrigin[k],gain=Math.max(0,Math.min(99-before,budget*weights[k]));t.gains[k]+=gain;spent+=gain;}
  if(spent>0){const last=t.history.at(-1);if(last&&last.year===year&&last.reason===reason&&last.main===t.main&&last.secondary===t.secondary)last.points=Math.round((last.points+spent)*100)/100;else t.history.push({year,reason,points:Math.round(spent*100)/100,main:t.main,secondary:t.secondary});t.history=t.history.slice(-36);}sync(p);
 }
 function tick(p,clock){const t=p.parallelTraining;if(!t)return;t.external=external(p);if(t.cursor.year!==clock.year){t.seasonStart=ratings(t,t.base);t.cursor={year:clock.year,games:0,gp:0,min:0};}
  const games=Math.max(0,clock.games-t.cursor.games);if(!games){sync(p);return;}
  const gp=Math.max(0,clock.gp-t.cursor.gp),minutes=Math.max(0,clock.min-t.cursor.min)/Math.max(1,gp),age=Number(p.age||27),ageRate=age<=23?1:age<=27?.85:age<=31?.6:.32;
  const workload=minutes<=26?clamp(minutes/26,0,1)*2:2+(minutes<=30?(minutes-26)/4:1+(Math.min(36,minutes)-30)/6);
  const aptitude=clamp((Number(p.simPotential??p.truePotential??85)-overall(p))/25,0,1);
  const relevant={handler:['handle','passing'],hub:['passing'],pop:['three'],offball:['three'],post:['finish'],roll:['finish'],crash:['rebound']}[p.specialtyRole]||[];
  const pace=(2+workload)*ageRate*(.85+.15*aptitude)*(relevant.includes(t.main)?1.08:1),availability=clamp(gp/games,.35,1);
  allocate(p,9*pace*games/82*availability,'赛季训练',clock.year);
  const target=t.target,old=t.familiarity[target]??Math.max(15,55-Math.abs(Object.keys(positions).indexOf(target)-Object.keys(positions).indexOf(t.originalPosition))*8);
  t.familiarity[target]=Math.min(100,old+gp*.65+games*.15);t.cursor={...clock};applyPosition(p);
 }
 function applyPosition(p){const t=p.parallelTraining;if(!t||!positions[t.target])return p;const role=t.target;p.englishPosition=role;p.position=role==='C'?'中锋':['PG','SG'].includes(role)?'后卫':'前锋';p.positionLabel=positions[role];p.realPositions=[role,...t.originalPositions.filter(x=>x!==role)];p.realPositionRoles=[...new Set(p.realPositions.map(x=>x==='C'?'中锋':['PG','SG'].includes(x)?'后卫':'前锋'))];return p;}
 function configure(p,values,nine,clock,ability=overall(p)){tick(p,clock);const t=init(p,nine,clock,ability);if(!keys.includes(values.main)||!keys.includes(values.secondary)||values.main===values.secondary)throw Error('主练和辅练请选择不同属性');if(!positions[values.target])throw Error('请选择有效位置');for(const [key,allowed] of Object.entries({shot:['auto','inside','mid','outside'],touch:['auto','low','high'],pass:['auto','finish','create']}))if(!allowed.includes(values[key]))throw Error('打法设置无效');Object.assign(t,values);applyPosition(p);sync(p);return t;}
 function summer(p,year){const t=p.parallelTraining;if(!t||t.summerYears.includes(year))return false;allocate(p,18,'夏训专项',year);t.summerYears.push(year);return true;}
 function settle(p,{year,ability,potential,line,baseline,breakout,boost}){const t=p.parallelTraining;if(!t)return null;const before=overall(p);if(!t.settledYears.includes(year)){if(baseline<0){for(const k of keys)t.gains[k]+=baseline;sync(p);}if(breakout)allocate(p,Math.max(9,boost*9),'突破赛季',year);t.settledYears.push(year);}return {ability:before,potential:Math.max(potential,overall(p)),line,delta:overall(p)-before,breakout,boost};}
 function tendencies(p,result){const t=p.parallelTraining;if(!t)return result;const b=result.tendencies;
  if(t.shot!=='auto'){b.three={inside:.05,mid:.16,outside:.58}[t.shot];b.post=t.shot==='inside'?.7:.12;b.drive=t.shot==='inside'?.65:t.shot==='mid'?.25:.18;}
  if(t.touch!=='auto'){b.handling=t.touch==='high'?.88:.25;b.shooting=t.touch==='high'?.8:.3;}
  if(t.pass!=='auto')b.passing=t.pass==='create'?.9:.3;
  return result;
 }
 function model(p,m){const t=p.parallelTraining;if(!t)return m;const skill=m.courtBase||ratings(t,t.base);if(t.touch!=='auto')m.usage=clamp(m.usage*(t.touch==='high'?1.22:.78),.08,.42);
  if(t.pass!=='auto')m.ast36*=t.pass==='create'?1.12:.82;
  const familiarity=t.familiarity[t.target]??25;m.consistency=Math.max(.5,m.consistency-(100-familiarity)*.0005);
  m.threeShare=t.shot==='auto'?m.threeShare:{inside:.05,mid:.16,outside:.58}[t.shot];return m;
 }
 const viewState=p=>p.parallelTraining?{...p.parallelTraining,external:external(p)}:null;
 const api={viewState,keys,labels,positions,totals,init,ratings,sync,tick,configure,summer,settle,applyPosition,tendencies,model};root.ParallelDevelopment=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
