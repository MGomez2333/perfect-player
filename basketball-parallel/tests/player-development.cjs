const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const D=require('../player-development.js');
const base={finish:85,mid:86,three:45,ft:84,handle:60,passing:72,perimeter:50,rim:85,rebound:85};
const player=()=>({id:'yao',age:21,simAbility:82,simPotential:88,englishPosition:'C',position:'中锋',realPositions:['C']});
const cfg={main:'three',secondary:'mid',target:'PF',shot:'outside',touch:'low',pass:'auto'};
const p=player();D.configure(p,cfg,base,{year:2026,games:40,gp:40,min:1200});D.tick(p,{year:2026,games:40,gp:40,min:1200});assert.deepEqual(D.ratings(p.parallelTraining,{}),base);
D.tick(p,{year:2026,games:60,gp:60,min:1920});const trained=D.ratings(p.parallelTraining,{});assert.ok(trained.three>base.three);assert.ok(trained.three-base.three>trained.rim-base.rim);assert.equal(p.englishPosition,'PF');assert.deepEqual(p.realPositions,['PF']);assert.ok(p.parallelTraining.originalPositions.includes('C'));
const saved=JSON.parse(JSON.stringify(p));D.tick(saved,{year:2026,games:60,gp:60,min:1920});assert.deepEqual(saved,p,'reload must not duplicate growth');
D.configure(p,{...cfg,main:'passing',secondary:'handle'},trained,{year:2026,games:60,gp:60,min:1920});assert.deepEqual(D.ratings(p.parallelTraining,{}),trained,'changing plan must not grant retroactive progress');
assert.equal(D.summer(p,2026),true);assert.equal(D.summer(p,2026),false);
const end=D.ratings(p.parallelTraining,{});D.tick(p,{year:2027,games:0,gp:0,min:0});assert.deepEqual(p.parallelTraining.seasonStart,end);
assert.equal(D.tendencies(p,{tendencies:{three:.01}}).tendencies.three,.58);
const model={usage:.2,ast36:5,consistency:.8};D.model(p,model);assert.equal(model.threeShare,.58);assert.ok(model.usage<.2);
const minutes=[];for(const min of [26,30,36]){const q=player();D.configure(q,cfg,base,{year:2026,games:0,gp:0,min:0});D.tick(q,{year:2026,games:82,gp:82,min:82*min});minutes.push(Object.values(q.parallelTraining.gains).reduce((a,b)=>a+b,0));}assert.ok(minutes[1]>minutes[0]);assert.ok(minutes[2]>minutes[1]);
// Closed by default: actual attributes stop at the cap; opt-in permits growth.
const q=player();q.simPotential=q.simAbility;D.configure(q,cfg,base,{year:2026,games:0,gp:0,min:0});D.tick(q,{year:2026,games:82,gp:82,min:82*36});assert.equal(D.ratings(q.parallelTraining,{}).three,45);assert.equal(q.simAbility,q.simPotential);D.configure(q,{...cfg,allowBreakthrough:true},base,{year:2026,games:82,gp:82,min:2952});D.tick(q,{year:2027,games:82,gp:82,min:2952});assert.ok(D.ratings(q.parallelTraining,{}).three>45);const earned=q.simAbility;D.configure(q,{...cfg,allowBreakthrough:false},D.ratings(q.parallelTraining,{}),{year:2027,games:82,gp:82,min:2952});assert.equal(q.simAbility,earned);
// Actual generated profile and specialty wrappers must route simulation and display through shared rules.
for(const [file,fn,native] of [['dynasty-worker-c269660e8472-r90.js','Ca','pdOriginal_Ca'],['dynasty-runtime-f68dfaa59e08-r90.js','vd','pdOriginal_vd']]){const s=fs.readFileSync(require.resolve('../'+file),'utf8'),start=s.indexOf('function '+fn+'('),end=s.indexOf('function '+native+'(',start),f=vm.runInNewContext('('+s.slice(start,end)+')',{ParallelDevelopment:D,[native]:()=>base});assert.deepEqual(f({}, {parallelTraining:q.parallelTraining}),D.ratings(q.parallelTraining,base));assert.ok(s.includes('ParallelDevelopment.tendencies'));assert.ok(s.includes('ParallelDevelopment.model'));assert.ok(s.includes('ParallelDevelopment.applyPosition'));}
console.log('PASS: targeted skills, saved progress, no retroactive training, position retention, shooting tendencies, summer once per season, potential breakthrough, runtime/worker profile parity.');

const legacy={id:"legacy",englishPosition:"C",realPositions:["C"],age:22};D.configure(legacy,cfg,base,{year:2026,games:0,gp:0,min:0},91);assert.equal(legacy.simAbility,91,"do not lower legacy players with derived overall ratings");

const annual=player();D.configure(annual,cfg,base,{year:2026,games:0,gp:0,min:0});D.tick(annual,{year:2026,games:82,gp:82,min:2952});const ability=annual.simAbility;
const settled=D.settle(annual,{year:2026,ability,potential:88,line:{},baseline:0,breakout:false,boost:0});assert.equal(settled.summaryFrom,82);assert.equal(settled.delta,0);assert.ok(annual.simAbility-settled.summaryFrom>0);assert.equal(annual.simAbility,ability,'summary must not grant training twice');
const oldSave=structuredClone(annual);delete oldSave.parallelTraining.seasonStartOverall;assert.equal(D.seasonFrom(oldSave),82,'migrate season origin from saved nine attributes');
for(let start=55;start<99;start++){const p={...player(),simAbility:start,simPotential:start+1};D.configure(p,cfg,base,{year:2026,games:0,gp:0,min:0});for(let g=1;g<=82;g++)D.tick(p,{year:2026,games:g,gp:g,min:g*36});assert.ok(p.simAbility<=start+1);assert.equal(p.simPotential,start+1);D.summer(p,2026);assert.ok(p.simAbility<=start+1);}
console.log('PASS: default cap, opt-in breakthrough, retained growth, annual summary and legacy summary migration.');

assert.deepEqual(D.reportRow(oldSave,{from:ability,to:ability,delta:0},2026),{from:82,to:ability,delta:ability-82});assert.equal(D.reportRow(oldSave,{from:80,to:80,delta:0},2025).from,80,'do not rewrite unverifiable past seasons');
