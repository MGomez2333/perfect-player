const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const runtime=fs.readFileSync(require.resolve('../dynasty-runtime-f68dfaa59e08-r90.js'),'utf8'),services=fs.readFileSync(require.resolve('../dynasty-services-f9116e72ede4-r90.js'),'utf8');
const start=services.indexOf('async prepareRewardVideo(t){'),end=services.indexOf(',getItem(t)',start),body=services.slice(start,end);
assert.ok(start>0&&end>start);let journal=0,destroyed=0;const owner={slotId:'test',generation:1},e={active:'test',current:{},summary:{team:'TST'},legacyStorage:{},client:{destroy:()=>destroyed++}};
const c={e,r:()=>{},i:()=>owner,n:new Map,j:()=>journal++,Date};
(async()=>{const prepare=vm.runInNewContext('({'+body+'}).prepareRewardVideo',c);assert.deepEqual(await prepare({id:'reward-test'}),owner);assert.equal(journal,1);assert.equal(destroyed,0);assert.ok(runtime.includes('await ue.saveRewardReceipt'));console.log('PASS: local rewards retain durable ownership/journal without tearing down live worker.');})();
const identity={accountId:'test',name:'测试玩家'},fn=runtime.match(/async function re\(e\)\{return window\.parallelProfile\.identity\(\)\}/)?.[0];assert.ok(fn);vm.runInNewContext('('+fn+')',{window:{parallelProfile:{identity:()=>identity}}})().then(value=>assert.equal(value,identity));
