const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const historyName='dynasty-history-9ba1c1cf68e1.js';
const historyPath=[path.join(root,historyName),path.join(root,'source',historyName)].find(fs.existsSync);
const history=vm.runInNewContext(fs.readFileSync(historyPath,'utf8').replace('export{e as HISTORY_PACKS};','e;'));
const keys=['threePT','MID','FIN','DNK','HAN','PAS','PDEF','IDEF','BLK','REB','ATH','STR','CLU'];
const ratings=value=>Object.fromEntries(keys.map(k=>[k,value]));
const context={URL,Element:{prototype:{attachShadow(){}}},document:{currentScript:{src:'https://example.test/basketball-parallel/local-runtime.js'},addEventListener(){}},window:{__REGRET_STATIC__:{seasons:[{season:'2017-18',teams:history[2017].teams.map(t=>({abbreviation:t[0],team_id:t[1]}))}]}},location:{href:'https://example.test/'},fetch:async()=>({json:async()=>({files:{}})}),__HIST:{HISTORY_PACKS:history}};
vm.createContext(context);vm.runInContext(fs.readFileSync('basketball-parallel/career-core.js','utf8'),context);
vm.runInContext(fs.readFileSync(path.join(root,'local-runtime.js'),'utf8').replace("import(BASE+'dynasty-history-9ba1c1cf68e1.js')","Promise.resolve(__HIST)"),context);
const req=context.window.parallelRequest;
const simulate=(position,current_ratings,seed=1)=>req('/simulate',{data:{season:'2017-18',team:'GSW',seed,player:{position,current_ratings},career_context:{career_year:1,age:20}}});
const mean=values=>values.reduce((a,b)=>a+b,0)/values.length;
(async()=>{
 const table=[];
 for(const position of ['PG','SG','SF','PF','C']){
  const low=[],elite=[];
  for(let seed=1;seed<=40;seed++){
   low.push(await simulate(position,ratings(85),seed));
   elite.push(await simulate(position,ratings(99),seed));
  }
  const avg=(samples,key)=>mean(samples.map(s=>s.regular_season.player_averages[key]));
  table.push({position,reb85:avg(low,'reb'),ast85:avg(low,'ast'),reb99:avg(elite,'reb'),ast99:avg(elite,'ast')});
  for(const sample of [...low,...elite])for(const g of [...sample.regular_season.games,...sample.playoff_series.flatMap(s=>s.games)]){
   const l=g.player_line;
   for(const key of ['pts','reb','ast','fgm','fga','ftm','fta'])assert.ok(Number.isInteger(l[key])&&l[key]>=0,`${position}: invalid ${key}`);
   assert.equal(l.pts,l.fgm*2+l.three_m+l.ftm);
   assert.ok(l.fgm<=l.fga&&l.three_m<=l.fgm&&l.min<=48);
   assert.equal(l.reb,l.rebounds);assert.equal(l.ast,l.assists);
  }
 }
 const c=table.find(x=>x.position==='C'),pf=table.find(x=>x.position==='PF'),sf=table.find(x=>x.position==='SF'),pg=table.find(x=>x.position==='PG'),sg=table.find(x=>x.position==='SG');
 assert.ok(c.reb85>11&&c.reb85<12);
 assert.ok(pf.reb85>8.5&&pf.reb85<9.5);
 assert.ok(sf.reb85>7&&sf.reb85<8.2);
 assert.ok(pg.reb85>6&&pg.reb85<7.5&&sg.reb85>6&&sg.reb85<7.5);
 assert.ok(c.reb85>pf.reb85&&pf.reb85>sf.reb85&&sf.reb85>pg.reb85);
 assert.ok(pg.reb99>11&&c.ast99>10&&pf.ast99>10&&c.reb99>20);
 // Specialization must work without making every other ability elite.
 assert.ok((await simulate('PG',{...ratings(75),REB:99,STR:99,ATH:99})).regular_season.player_averages.reb>10);
 assert.ok((await simulate('C',{...ratings(75),PAS:99,HAN:99,CLU:99})).regular_season.player_averages.ast>9);
 assert.ok((await simulate('C',{...ratings(85),STR:99,ATH:99})).regular_season.player_averages.reb>(await simulate('C',ratings(85))).regular_season.player_averages.reb);
 assert.ok((await simulate('C',ratings(110))).regular_season.player_averages.reb>c.reb99);
 assert.equal(JSON.stringify(await simulate('C',ratings(99),123)),JSON.stringify(await simulate('C',ratings(99),123)));
 let current=ratings(99),careerRebounds=0;
 for(let age=20;age<40;age++){
  const s=await simulate('C',current,900+age);
  careerRebounds+=s.regular_season.games.reduce((total,g)=>total+g.player_line.reb,0);
  current=(await req('/career/develop',{data:{player:{ratings:current},age}})).ratings;
 }
 assert.ok(careerRebounds>23924,'An exceptional 20-year career must have a path past the game’s historical rebound target, even with aging.');
 console.table(table.map(x=>Object.fromEntries(Object.entries(x).map(([k,v])=>[k,typeof v==='number'?v.toFixed(1):v]))));
 console.log(`PASS: position balance, exceptional guards and passing bigs, specialization, secondary abilities, talents above 99, aging career (${careerRebounds} rebounds), both season phases, deterministic seeds and valid shot totals.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
