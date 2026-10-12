const assert=require('node:assert/strict');
global.ParallelDraftCountries=require('../draft-countries.json');
const F=require('../draft-filters.js');
const pool=[{id:1,name:'中国球员',nationality:'中国',realPositions:['PF','C']},{id:2,name:'美国球员',country:'USA',englishPosition:'PG'},{id:3,name:'法国球员',country:'France',englishPosition:'C'},{id:4,name:'资料待补',englishPosition:'C'}];
const before=JSON.stringify(pool);assert.equal(pool.filter(p=>F.match(p,{country:'international'})).length,1);assert.equal(pool.filter(p=>F.match(p,{country:'china',position:'C',search:'中国'})).length,1);assert.equal(pool.filter(p=>F.match(p,{country:'china',position:'PG'})).length,0);assert.equal(F.country({englishName:'Tony Parker'}),'international');assert.equal(F.country({englishName:'Kobe Bryant'}),'usa');assert.equal(F.country({nbaId:2397}),'china');assert.equal(F.country(pool[3]),'unknown');assert.equal(JSON.stringify(pool),before);assert.equal(pool.filter(p=>F.match(p,{})).length,4);
console.log('PASS: independent position/country/search filters, multi-position players, NBA country data and unchanged candidate pool.');
