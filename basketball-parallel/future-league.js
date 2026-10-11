/* Deterministic future seasons: separate incarnations, persistent timeline by career seed. */
(function(root){
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 function hash(s){let n=2166136261;for(const c of String(s))n=Math.imul(n^c.charCodeAt(0),16777619);return n>>>0;}
 function random(s){let n=hash(s);return()=>((n=(Math.imul(n,1664525)+1013904223)>>>0)/4294967296);}
 const ordinal=n=>({2:'二',3:'三',4:'四',5:'五',6:'六',7:'七',8:'八',9:'九',10:'十'}[n]||String(n))+'世';
 function create(packs,key){
  const templates=new Map(),cache=new Map();
  for(const year of Object.keys(packs).sort())for(const row of packs[year].players){if(!Number(row[0]))continue;const old=templates.get(String(row[0]));if(!old||row[5]>old[5])templates.set(String(row[0]),row.slice());}
  const initial=structuredClone(packs[2025]);initial.players=initial.players.filter((p,i,a)=>a.findIndex(q=>String(q[0])===String(p[0]))===i);
  initial.players.forEach(p=>{p[16]=Number(p[0]);p[17]=1;p[18]=p[1];p[19]=Math.max(p[5],Number(p[15])||p[5]);p[20]=p.slice(6,11).map(v=>Number(v||0)*36/Math.max(1,Number(p[11])||24));});
  initial.generations=Object.fromEntries(initial.players.map(p=>[p[16],1]));initial.year=2025;cache.set(2025,initial);
  function get(year){year=Number(year);if(!Number.isInteger(year)||year<2025||year>2300)throw Error('赛季年份无效');if(cache.has(year))return structuredClone(cache.get(year));
   for(let y=2026;y<=year;y++){if(cache.has(y))continue;const prev=cache.get(y-1),rng=random(key+':league:'+y),next={year:y,teams:structuredClone(prev.teams),players:[],generations:{...prev.generations},retired:[],transactions:[]};
    for(const old of prev.players){const p=old.slice();p[4]++;const age=p[4];if(age>=43||(age>=35&&rng()<clamp((age-34)*.055+(74-p[5])*.012,.015,.7))){next.retired.push(p);continue;}
     const delta=age<=24?Math.round(rng()*3.5):age<=28?Math.round(rng()*2-.6):age<=31?Math.round(rng()*2-1): -Math.round((age-30)*.32+rng()*1.5);
     const before=p[5];p[5]=clamp(before+delta,50,p[19]||99);const ratio=(p[5]/Math.max(50,before))**1.6;
     p[20]=(old[20]||old.slice(6,11).map(v=>v*36/Math.max(1,old[11]))).map(v=>Math.max(.05,v*ratio));
     if(p[2]!=="FA"&&rng()<.12){const t=next.teams[Math.floor(rng()*next.teams.length)][0];if(t!==p[2])next.transactions.push({player:p[1],from:p[2],to:t});p[2]=t;}
     next.players.push(p);
    }
    for(const t of next.teams){const surplus=next.players.filter(p=>p[2]===t[0]).sort((a,b)=>b[5]-a[5]).slice(15);surplus.forEach(p=>p[2]="FA");}
    const active=new Set(next.players.map(p=>String(p[16]))),pool=[...templates.values()].filter(p=>!active.has(String(p[0])));
    // Lottery order favors weaker rosters, with seeded variation rather than a fixed annual order.
    const strength=t=>{const a=next.players.filter(p=>p[2]===t).sort((a,b)=>b[5]-a[5]).slice(0,8);return a.reduce((n,p)=>n+p[5],0)/Math.max(1,a.length);};
    const order=next.teams.map(t=>({t:t[0],rank:strength(t[0])+rng()*12})).sort((a,b)=>a.rank-b.rank);
    for(let i=pool.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
    const draft=pool.slice(0,60).sort((a,b)=>b[5]-a[5]);
    for(let i=0;i<draft.length;i++){const template=draft[i],origin=Number(template[0]),gen=(next.generations[origin]||1)+1,p=template.slice(),team=order[i%order.length].t;next.generations[origin]=gen;
     p[0]=1000000000+gen*10000000+origin;p[1]=template[1]+'·'+ordinal(gen);p[2]=team;p[4]=18+Math.floor(rng()*5);p[5]=clamp(Math.round(template[5]-12-rng()*10),55,84);p[14]=y;p[16]=origin;p[17]=gen;p[18]=template[1];p[19]=clamp(template[5]+Math.round(rng()*6-2),p[5],99);
     p[20]=template.slice(6,11).map(v=>Math.max(.05,v*36/Math.max(1,template[11])*(p[5]/Math.max(55,template[5]))**1.6));for(let j=6;j<=10;j++)p[j]=p[20][j-6]*.7;next.players.push(p);
    }
    // Balance roster sizes through free agency; no duplicate living identity.
    for(const t of next.teams){let own=next.players.filter(p=>p[2]===t[0]);while(own.length<12){const counts=Object.fromEntries(next.teams.map(t=>[t[0],next.players.filter(p=>p[2]===t[0]).length]));const donor=next.players.filter(p=>p[2]==='FA').sort((a,b)=>b[5]-a[5])[0]||next.players.filter(p=>counts[p[2]]>14).sort((a,b)=>a[5]-b[5])[0];if(!donor)break;donor[2]=t[0];own.push(donor);}}
    for(const t of next.teams){const all=next.players.filter(p=>p[2]===t[0]).sort((a,b)=>b[5]-a[5]);all.slice(15).forEach(p=>p[2]='FA');const rows=all.slice(0,15);const weights=rows.map((p,i)=>i<5?34:i<10?14:1),sum=weights.reduce((a,b)=>a+b,0);rows.forEach((p,i)=>{const minutes=240*weights[i]/sum,oldMin=Math.max(12,Number(p[11])||24),scale=minutes/oldMin;p[11]=Math.round(minutes*10)/10;p[12]=Math.round(65+rng()*17);for(let j=6;j<=10;j++)p[j]=Math.round(p[20][j-6]*minutes/36*(.94+rng()*.12)*10)/10;});}
    cache.set(y,next);
   }return structuredClone(cache.get(year));
  }return {get};
 }
 const api={create,hash,random};if(typeof module!=='undefined')module.exports=api;root.ParallelFutureLeague=api;
})(typeof window!=='undefined'?window:globalThis);
