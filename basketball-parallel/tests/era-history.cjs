const vm=require('vm'),fs=require('fs'),path=require('path');const root=path.resolve(__dirname,".."),c=vm.createContext({console,structuredClone,setTimeout,clearTimeout,URL,TextDecoder,TextEncoder,atob,btoa}),cache=new Map;
async function load(name){name=name.replace('/perfect-player/basketball-parallel/','').replace(/^\.\//,'').split('?')[0];if(cache.has(name))return cache.get(name);let m=new vm.SourceTextModule(fs.readFileSync(path.join(root,name),'utf8'),{context:c,identifier:name,importModuleDynamically:async spec=>{const n=await load(spec);if(n.status!=='evaluated')await n.evaluate();return n;}});cache.set(name,m);await m.link(spec=>load(spec));return m;}
(async()=>{
 const assert=require('node:assert/strict');
 const m=await load('dynasty-era-expansion-5c9344a56e9b-r90.js');await m.evaluate();await m.namespace.ensureOpeningR79();
 const b=await load('dynasty-entry-data-03482d7b9607.js');await b.evaluate();
 const history=new Map;
 for(let year=1984;year<2000;year++){
  assert.ok(m.namespace.HISTORY_YEARS_R52.includes(year));const d=m.namespace.historicalLeagueR52(year,b.namespace.default);history.set(year,d);
  assert.equal(d.teams.length,year<1988?23:year===1988?25:year<1995?27:29);
  assert.ok(d.teams.every(t=>t.players.length>=8&&['East','West'].includes(t.historicalConference)));
  assert.equal(new Set(d.teams.flatMap(t=>t.players.map(p=>p.id))).size,d.teams.reduce((n,t)=>n+t.players.length,0));
 }
 const team=(y,abbr)=>history.get(y).teams.find(t=>t.abbr===abbr);
 assert.equal(team(1984,'SAC').name,'堪萨斯城国王');assert.equal(team(1985,'SAC').name,'萨克拉门托国王');assert.equal(team(1999,'OKC').name,'西雅图超音速');
 assert.equal(team(1988,'MIA').historicalConference,'West');assert.equal(team(1989,'MIA').historicalConference,'East');
 assert.ok(team(1995,'MEM').name.includes('温哥华'));assert.ok(team(1997,'WSH').name.includes('奇才'));assert.ok(team(1996,'WSH').name.includes('子弹'));
 const oc=await load('dynasty-opening-career-9d26fcbba7b8-r53.js');await oc.evaluate();const hs=await load('dynasty-history-support-560fa2646916-r83.js');await hs.evaluate();
 const player=team(1984,'LAL').players.find(p=>String(p.nbaId)==='77142');const baseline=oc.namespace.openingCareer(player,1984);const honors=c.__bp22HistorySupportR65.openingHallBaseline(baseline,[],[]);
 assert.equal(baseline.through,1983);assert.equal(honors.honorsVerified,true);assert.equal(new Map(honors.honors).get('总冠军'),2);assert.equal(new Map(honors.honors).get('FMVP'),2);
 // Run the actual season-boundary transition: expansion must not replace existing rosters.
 const runtime=fs.readFileSync(path.join(root,'dynasty-runtime-f68dfaa59e08-r90.js'),'utf8');
 const start=runtime.indexOf('function baseLivingAdvanceEraR52('),end=runtime.indexOf('function baseRenderDraftDlcHubR52(',start);assert.ok(start>0&&end>start);
 const state={data:structuredClone(history.get(1984)),season:{freeAgents:Array.from({length:150},(_,i)=>({id:'TEST-FA-'+i,name:'测试自由球员'+i,gameRating:60+i%20,askingSalary:1000000}))}};
 const original=state.data.teams.find(t=>t.abbr==='LAL').players,first=original[0];first.parallelTraining={main:'three',defense:'focal'};const events=[];
 const advance=vm.runInNewContext('('+runtime.slice(start,end).trim()+')',{k:state,A:Math,Qd:m.namespace.historicalLeagueR52,le:b.namespace.default,je:null,P:abbr=>state.data.teams.find(t=>t.abbr===abbr),ft:x=>x,Sm:()=>{},W:p=>p.gameRating,j:1000000,cu:(w,e)=>events.push(e),Y:()=>({})});
 for(let year=1985;year<=2008;year++){const market=advance(year);state.season.freeAgents=market.freeAgents;}
 assert.equal(state.data.teams.length,30);assert.equal(state.data.teams.find(t=>t.abbr==='OKC').name,'俄克拉荷马城雷霆');assert.ok(state.data.teams.find(t=>t.abbr==='MEM').name.includes('孟菲斯'));
 assert.equal(state.data.teams.find(t=>t.abbr==='LAL').players,original);assert.equal(first.parallelTraining.defense,'focal');assert.equal(events.length,7);
 console.log('PASS: all 16 early seasons, historical rosters, expansion sizes, migration/renaming/conferences and pre-opening honors.');
})().catch(e=>{console.error(e);process.exitCode=1});
