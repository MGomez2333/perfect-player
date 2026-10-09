const assert=require('node:assert/strict'),core=require('../career-core.js');
const a={id:'reaper',tier:3,key:'c:1'},b={id:'reaper',tier:3,key:'c:2'},c={permanentAugments:[a,b]};
const g1={},g2={},result={season:'2026-27',team:'BOS',playoff_series:[{round:'R1',winner:'BOS',teams:['BOS','LAL'],games:[g1]},{round:'Finals',winner:'BOS',teams:['BOS','GSW'],games:[g2]}],reaper_rounds:[{round:'R1',skills:[{id:'one'}]},{round:'Finals',skills:[{id:'two'}]}]};
core.collectReaper(c,result);assert.equal(c.reaperOpportunities.length,0);
assert.equal(core.collectReaper(c,result,{moments:[{kind:'game-box',game:g1}],step:0}),true);assert.equal(c.reaperOpportunities.length,2);assert.deepEqual(c.reaperOpportunities[0].options,['one']);
c.reaperOpportunities[0].claimed='one';core.collectReaper(c,result,{complete:true});assert.equal(c.reaperOpportunities[0].claimed,'one');assert.deepEqual(c.reaperOpportunities[1].options,['one','two']);assert.equal(core.collectReaper(c,result,{complete:true}),false);
const loaded=JSON.parse(JSON.stringify(c));core.collectReaper(loaded,result,{complete:true});assert.equal(loaded.reaperOpportunities.length,2);assert.equal(loaded.reaperOpportunities[0].claimed,'one');
core.collectReaper(loaded,{...result,season:'2027-28'},{complete:true});assert.equal(loaded.reaperOpportunities.length,4);assert.equal(loaded.reaperOpportunities[2].claimed,undefined);
const old={permanentAugments:[a],seasonAugment:{key:'c:1',reaperAccepted:'one'}};core.collectReaper(old,result,{complete:true});assert.equal(old.reaperOpportunities[0].claimed,'one');
console.log('PASS: permanent reapers trigger only after visible wins, stack per card, persist claims, and renew next season.');

const migrated={careerId:'real',careerYear:2,currentSeason:'2027-28',currentTeam:'BOS',permanentAugments:[{...a,key:'real:1'}],seasons:[{careerYear:1,season:'2026-27',parallelAugments:[{...a,key:'draft:1'}]}]};core.migrate(migrated);core.migrate(migrated);assert.equal(migrated.permanentAugments.length,1);assert.equal(migrated.permanentAugments[0].key,'real:1');console.log('PASS: initial draft augment is not duplicated when career identity is assigned.');
