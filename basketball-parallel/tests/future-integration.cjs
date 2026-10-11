const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),file='dynasty-history-9ba1c1cf68e1.js',history=vm.runInNewContext(fs.readFileSync([path.join(root,file),path.join(root,'source',file)].find(fs.existsSync),'utf8').replace('export{e as HISTORY_PACKS};','e;'));
const c={structuredClone,URL,Element:{prototype:{attachShadow(){}}},document:{currentScript:{src:'https://test.local/local-runtime.js'},addEventListener(){}},window:{__REGRET_STATIC__:{seasons:[{season:'2017-18',teams:history[2017].teams.map(t=>({abbreviation:t[0],team_id:t[1]}))}]}},location:{href:'https://test.local/'},fetch:async url=>({json:async()=>String(url).endsWith('asset-manifest.json')?{files:{}}:JSON.parse(fs.readFileSync(path.join(root,String(url).split('/').at(-1)),'utf8'))}),__HIST:{HISTORY_PACKS:history}};
c.window.ParallelFutureLeague=require("../future-league.js");vm.createContext(c);vm.runInContext(fs.readFileSync(path.join(root,'career-core.js'),'utf8'),c);vm.runInContext(fs.readFileSync(path.join(root,'local-runtime.js'),'utf8').replace("import(BASE+'dynasty-history-9ba1c1cf68e1.js')","Promise.resolve(__HIST)").replace(' function honor(',' window.testLine=line;window.testRandom=random; function honor('),c);
const core=c.window.ParallelCareerCore,req=c.window.parallelRequest,keys=['threePT','MID','FIN','DNK','HAN','PAS','PDEF','IDEF','BLK','REB','ATH','STR','CLU'],ratings=v=>Object.fromEntries(keys.map(k=>[k,v]));
const sim=(data={})=>req('/simulate',{data:{season:'2017-18',team:'GSW',seed:123,player:{position:'C',current_ratings:ratings(99),name:'测试中锋'},career_context:{career_year:1,career_id:'test',age:20},...data}});
(async()=>{
 const context={career_id:'future-test',career_year:9,display_season:'2033-34',age:28};
 const result=await sim({season:'2025-26',career_context:context});
 const result2=await sim({season:'2025-26',career_context:{...context,career_year:10,display_season:'2034-35'}});
 assert.notEqual(JSON.stringify(result.roster_snapshot),JSON.stringify(result2.roster_snapshot));
 assert.ok(result.league_honors.roy);assert.equal(result.league_honors.roy.draft_year,2033);
 assert.ok(result.league_honors.sixth_man.starts<result.league_honors.sixth_man.games/2);
 assert.ok(result.league_honors.roy.player.includes('世'));
 assert.notEqual(JSON.stringify(result.league_honors.all_nba),JSON.stringify(result2.league_honors.all_nba));
 const self=result.league_player_stats.filter(p=>p.team==='GSW');for(const p of self){let total=0,games=0;for(const g of result.regular_season.games){const line=g.box_score.GSW.find(x=>x.player_id===p.player_id);if(line){total+=line.pts;games++;}}assert.equal(p.pts,games?Math.round(total/games*10)/10:0);}
 const roster=await req('/team-roster',{data:{season:'2033-34',team:'GSW',parallel_career_key:'future-test'}});assert.deepEqual(roster.roster.map(p=>p.player_id).sort(),result.roster_snapshot.GSW.map(p=>p.player_id).sort());
 const offers=await req('/career/offers',{data:{season:'2033-34',team:'GSW',parallel_career_key:'future-test',player:{overall:95,position:'C'}}});assert.ok(offers.offers[0].roster.some(p=>p.incarnation>1));
 assert.equal(JSON.stringify(result),JSON.stringify(await sim({season:'2025-26',career_context:context})));
 console.log('PASS future integration: projected years use new rosters, true rookies/bench awards, changing All-NBA, own teammate totals match all 82 boxes, offer rosters match career timeline, replay deterministic.');
})().catch(e=>{console.error(e);process.exitCode=1;});
