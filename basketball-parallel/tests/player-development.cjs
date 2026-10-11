const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const D=require('../player-development.js');
const base={finish:85,mid:86,three:45,ft:84,handle:60,passing:72,perimeter:50,rim:85,rebound:85};
const player=()=>({id:'yao',age:21,simAbility:82,simPotential:88,englishPosition:'C',position:'中锋',realPositions:['C']});
const cfg={main:'three',secondary:'mid',target:'PF',shot:'outside',touch:'low',pass:'auto'};
const p=player();D.configure(p,cfg,base,{year:2026,games:40,gp:40,min:1200});D.tick(p,{year:2026,games:40,gp:40,min:1200});assert.deepEqual(D.ratings(p.parallelTraining,{}),base);
D.tick(p,{year:2026,games:60,gp:60,min:1920});const trained=D.ratings(p.parallelTraining,{});assert.ok(trained.three>base.three);assert.ok(trained.three-base.three>trained.rim-base.rim);assert.equal(p.englishPosition,'PF');assert.ok(p.realPositions.includes('C'));
const saved=JSON.parse(JSON.stringify(p));D.tick(saved,{year:2026,games:60,gp:60,min:1920});assert.deepEqual(saved,p,'reload must not duplicate growth');
D.configure(p,{...cfg,main:'passing',secondary:'handle'},trained,{year:2026,games:60,gp:60,min:1920});assert.deepEqual(D.ratings(p.parallelTraining,{}),trained,'changing plan must not grant retroactive progress');
assert.equal(D.summer(p,2026),true);assert.equal(D.summer(p,2026),false);
const end=D.ratings(p.parallelTraining,{});D.tick(p,{year:2027,games:0,gp:0,min:0});assert.deepEqual(p.parallelTraining.seasonStart,end);
assert.equal(D.tendencies(p,{tendencies:{three:.01}}).tendencies.three,.58);
const model={usage:.2,ast36:5,consistency:.8};D.model(p,model);assert.equal(model.threeShare,.58);assert.ok(model.usage<.2);
const minutes=[];for(const min of [26,30,36]){const q=player();D.configure(q,cfg,base,{year:2026,games:0,gp:0,min:0});D.tick(q,{year:2026,games:82,gp:82,min:82*min});minutes.push(Object.values(q.parallelTraining.gains).reduce((a,b)=>a+b,0));}assert.ok(minutes[1]>minutes[0]);assert.ok(minutes[2]>minutes[1]);
// Reaching the old potential does not stop attribute training.
const q=player();q.simPotential=q.simAbility;D.configure(q,cfg,base,{year:2026,games:0,gp:0,min:0});D.tick(q,{year:2026,games:82,gp:82,min:82*36});assert.ok(D.ratings(q.parallelTraining,{}).three>45);
// Actual generated profile and specialty wrappers must route simulation and display through shared rules.
for(const [file,fn,native] of [['dynasty-worker-8b3a61738a69-r39.js','Ca','pdOriginal_Ca'],['dynasty-runtime-49266a1a7e20-r41.js','vd','pdOriginal_vd']]){const s=fs.readFileSync(require.resolve('../'+file),'utf8'),start=s.indexOf('function '+fn+'('),end=s.indexOf('function '+native+'(',start),f=vm.runInNewContext('('+s.slice(start,end)+')',{ParallelDevelopment:D,[native]:()=>base});assert.deepEqual(f({}, {parallelTraining:q.parallelTraining}),D.ratings(q.parallelTraining,base));assert.ok(s.includes('ParallelDevelopment.tendencies'));assert.ok(s.includes('ParallelDevelopment.model'));assert.ok(s.includes('ParallelDevelopment.applyPosition'));}
console.log('PASS: targeted skills, saved progress, no retroactive training, position retention, shooting tendencies, summer once per season, potential breakthrough, runtime/worker profile parity.');

const legacy={id:"legacy",englishPosition:"C",realPositions:["C"],age:22};D.configure(legacy,cfg,base,{year:2026,games:0,gp:0,min:0},91);assert.equal(legacy.simAbility,91,"do not lower legacy players with derived overall ratings");
