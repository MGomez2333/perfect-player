const assert=require('node:assert/strict');const {engine,team,N,D}=require('./engine-harness.cjs');
const trials=80,results={};
for(const mode of ['auto','focal','low']){
 const total={pts:0,ast:0,peerAst:0,reb:0,fga:0,teamAst:0,teamFga:0};
 for(let seed=0;seed<trials;seed++){
  const home=team('TST','heliocentric',mode),away=team('AWY');
  home.players.forEach((p,i)=>{const score=i===0?99:i===1?90:i===2?84:77;p.simAbility=score;p.gameRating=score;delete p.parallelTraining;D.configure(p,{main:'handle',secondary:'passing',target:['PG','SG','SF','PF','C'][i%5],shot:'auto',touch:'auto',pass:i===0?'create':'auto',initiation:i===0?mode:'auto',shots:i===0?mode:'auto',defense:i===0?'focal':'auto',offenseRole:i===0?'heliocentric':'auto',defenseRole:'auto',rebounds:i===0?'focal':'auto'},Object.fromEntries(D.keys.map(k=>[k,score])),{year:2026,games:0,gp:0,min:0});});
  const game=engine.game(home,away,47000+seed),star=game.homeBox.find(p=>p.id==='TST0');
  for(const k of ['pts','ast','reb','fga'])total[k]+=star[k];
  total.peerAst+=game.homeBox.filter(p=>p.id!==star.id).reduce((n,p)=>n+p.ast,0);
  total.teamAst+=game.homeBox.reduce((n,p)=>n+p.ast,0);total.teamFga+=game.homeBox.reduce((n,p)=>n+p.fga,0);
  assert.equal(game.homeScore,game.homeBox.reduce((n,p)=>n+p.pts,0));
  assert.ok(game.homeBox.every(p=>p.ast>=0&&Number.isFinite(p.ast)));
 }
 results[mode]=Object.fromEntries(Object.entries(total).map(([k,v])=>[k,+(v/trials).toFixed(2)]));
}
console.log(JSON.stringify(results));
if(!process.env.BALANCE_BASELINE){
 assert.ok(results.focal.peerAst>=5,'even a 99-rated focal core must leave secondary creation opportunities');
 assert.ok(results.focal.ast/results.focal.teamAst<.82,'focal settings must not monopolize assists');
 assert.ok(results.focal.ast>results.low.ast*1.3,'creation priority must remain effective');
 assert.ok(results.focal.fga>results.low.fga*1.4,'shot priority must remain effective');
 assert.ok(results.focal.ast>=10,'a fully trained core must still support high-assist play');
}
