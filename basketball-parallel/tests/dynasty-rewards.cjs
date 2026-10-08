const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),cp=require('node:child_process'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),file='dynasty-runtime-49266a1a7e20-r41.js';
const source=fs.existsSync(path.join(root,'source',file));
const patched=source?cp.execFileSync('python3',['-c',"import sys;sys.path.insert(0,sys.argv[1]);from frontend_patches import patch_dynasty;print(patch_dynasty(open(sys.argv[1]+'/source/'+sys.argv[2]).read()))",root,file],{encoding:'utf8',maxBuffer:8*1024*1024}):fs.readFileSync(path.join(root,file),'utf8');
const match=patched.match(/async prepareRewardVideo\(\)\{([^}]+)\}/);assert.ok(match);
let destroyed=0,releases=0;const context={e:{client:{destroy(){destroyed++;}}},es:async()=>{releases++;}};vm.createContext(context);
(async()=>{const preparation=vm.runInContext('({async prepareRewardVideo(){'+match[1]+'}})',context);await preparation.prepareRewardVideo();assert.equal(releases,0);assert.equal(destroyed,0);assert.ok(patched.includes('ww(n),t.pending=null'));assert.ok(patched.includes('saveRewardReceipt(n)'));console.log('PASS: no-ad dynasty reward retains live worker and keeps reward receipt/application/save lifecycle.');})();
