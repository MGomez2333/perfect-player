/* Country groups use roster nationality and the checked-in NBA country index.
   Missing metadata stays unclassified rather than silently becoming American. */
(function(root){
 const normalize=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
 const chinaNames=new Set(['宋涛','薛玉洋','王治郅','巴特尔','孟克巴特尔','姚明','易建联','孙悦','周琦','王哲林','崔永熙','杨瀚森','杨汉森']);
 function country(p){
  if(p.chinaDlc||chinaNames.has(String(p.name||'').replace(/[·\s]/g,''))||String(p.id).startsWith('cn-'))return 'china';
  const index=root.ParallelDraftCountries||{},id=String(p.historicalDraft?.identity||p.nbaId||p.id||'');
  const raw=String(p.nationality||p.country||index.ids?.[id]||index.names?.[normalize(p.englishName)]||'').trim();
  if(/^(中国|china|chn|cn|prc)$/i.test(raw))return 'china';
  if(/^(美国|usa|us|united states(?: of america)?|american)$/i.test(raw))return 'usa';
  if(raw)return 'international';
  if(p.talentDlc?.pack?.startsWith('world')||id.startsWith('world-'))return 'international';
  if(!p.historicalDraft&&String(p.id).startsWith('PROSPECT-'))return 'usa';
  return 'unknown';
 }
 function positions(p){const raw=[...p.realPositions||[],p.englishPosition,p.secondaryPosition,p.positionLabel,p.position].filter(Boolean).join(' ').toUpperCase();const found=new Set(raw.match(/\b(?:PG|SG|SF|PF|C)\b/g)||[]);if(found.size)return [...found];if(/控球|组织后卫/.test(raw))return ['PG'];if(/得分后卫/.test(raw))return ['SG'];if(/大前锋/.test(raw))return ['PF'];if(/小前锋/.test(raw))return ['SF'];if(/中锋/.test(raw))return ['C'];if(/后卫|\bG\b/.test(raw))return ['PG','SG'];if(/前锋|\bF\b/.test(raw))return ['SF','PF'];return [];}
 function match(p,f={}){return (!f.position||positions(p).includes(f.position))&&(!f.country||country(p)===f.country)&&(!f.search||[p.name,p.englishName].join(' ').toLowerCase().includes(f.search.trim().toLowerCase()));}
 const api={country,positions,match};root.ParallelDraftFilters=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
