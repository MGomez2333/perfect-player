const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const s=fs.readFileSync(require.resolve('../dynasty-runtime-f68dfaa59e08-r90.js'),'utf8');
function between(a,b){let start=s.indexOf(a),end=s.indexOf(b,start+a.length);assert.ok(start>=0&&end>start);return s.slice(start,end);}
const roll=vm.runInNewContext('('+between('function ie(identity,','const ae=new WeakSet').trim()+')');
const identity={accountId:'test',name:'测试'},original=roll(identity,'test',2030,null,()=>.4);
const ability=roll(identity,'test',2030,original,()=>.99,{position:true,field:'ability'});assert.equal(ability.truePotential,original.truePotential);assert.equal(ability.englishPosition,original.englishPosition);assert.notEqual(ability.trueAbility,original.trueAbility);
const potential=roll(identity,'test',2030,original,()=>.99,{position:true,field:'potential'});assert.equal(potential.trueAbility,original.trueAbility);assert.notEqual(potential.truePotential,original.truePotential);
const factoryStart=s.indexOf('function __familyruntimeR81Factory()'),factoryEnd=s.indexOf('const __familyruntimeR81=',factoryStart);assert.ok(factoryEnd>factoryStart);
const core=vm.runInNewContext(s.slice(factoryStart,factoryEnd)+'\n__familyruntimeR81Factory()');assert.equal(core.players.length,7);assert.equal(new Set(core.players.map(p=>p.id)).size,7);
const p=core.players[0],plan={receipt:'test-only',entryConfirmed:false,order:[p.id],players:{[p.id]:{ability:69,potential:83}}};assert.equal(core.roll(plan,p.id,'ability'),true);assert.equal(plan.players[p.id].potential,83);assert.equal(core.choose(plan,p.id,true),true);const kept=plan.players[p.id].ability;assert.equal(core.roll(plan,p.id,'potential'),true);core.choose(plan,p.id,true);assert.equal(plan.players[p.id].ability,kept);
const prospect=core.prospect(p.id,2030,plan);assert.equal(prospect.talentDlc.pack,'starFamily');assert.ok(prospect.headshot.startsWith('/perfect-player/basketball-parallel/'));
let claims=0;const limit=vm.runInNewContext('('+between('function LT(){','function RT(').trim()+')',{A:Math,Sw:()=>({campClaims:claims}),dynastyCampLedgerR64:()=>({assignments:[]}),k:{leftTeam:{abbr:'TST'}}});for(claims=0;claims<=4;claims++)assert.equal(limit(),claims+1);claims=99;assert.equal(limit(),5);
console.log('PASS: separate ability/potential rolls preserve the other value; seven star-family players and local portraits; original camp limit 1–5, clamped at 5.');
