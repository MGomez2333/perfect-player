const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),cp=require('node:child_process');
const root=path.resolve(__dirname,'..');
const patched=fs.existsSync(path.join(root,'source/career-prismatic.js'))?cp.execFileSync('python3',['-c',"import sys;sys.path.insert(0,sys.argv[1]);from frontend_patches import patch_frontend;print(patch_frontend(open(sys.argv[1]+'/source/career-prismatic.js').read()))",root],{encoding:'utf8',maxBuffer:8*1024*1024}):fs.readFileSync(path.join(root,'career-prismatic.js'),'utf8');
const gm=patched.slice(patched.indexOf('async function GM('),patched.indexOf('function KM()',patched.indexOf('async function GM(')));
const extras=fs.readFileSync(path.join(root,'career-extras.js'),'utf8');
const wait=extras.slice(extras.indexOf('function wait('),extras.indexOf(' window.parallelCareer={',extras.indexOf('function wait(')));
const keys=['threePT','MID','FIN','DNK','HAN','PAS','PDEF','IDEF','BLK','REB','ATH','STR','CLU'];
async function test(fail=false){let saves=0;const H={position:'PG',donors:Object.fromEntries(keys.slice(0,11).map((k,i)=>[k,{player_id:i+1,final_rating:90}])),draftPlayerDraw:0,draftTeamDraw:0,draftOfferSession:{qualityMode:false,teamNonce:'old',playerNonce:'old',previousCandidateIds:[]},draftRunNonce:'test',seed:5,offers:[],seasons:[],draftRoundCandidateIds:[],loading:false};
 const c={Error,H,g:keys,setTimeout,clearTimeout,window:{parallelCareer:{}},vv:()=>true,mv:(rows,n,ids)=>[...rows,ids],Y:()=>{saves++;return new Promise(()=>{});},$:()=>{},nl:async()=>{if(fail)throw Error('候选加载超时');return {season:'all-time',team:'GSW',team_id:1610612744,candidates:[{player_id:201939}]};}};
 vm.createContext(c);vm.runInContext(wait+';window.parallelCareer.wait=wait;'+gm+';window.run=GM;',c);
 await Promise.race([c.window.run(),new Promise((_,reject)=>setTimeout(()=>reject(Error('draft hung behind save')),200))]);
 assert.equal(H.loading,false);assert.equal(Object.keys(H.donors).length,11);if(fail){assert.match(H.error,/超时/);assert.equal(H.offers.length,0);}else{assert.equal(H.offers.length,1);assert.equal(H.draftSeason,'all-time');assert.equal(saves,1);}
 await assert.rejects(c.window.parallelCareer.wait(new Promise(()=>{}),5),/重新生成/);
}
(async()=>{await test();await test(true);console.log('PASS: prismatic 11/13 recovery continues despite stuck save; failed request clears loading; timeout offers retry without resetting donors.');})();
