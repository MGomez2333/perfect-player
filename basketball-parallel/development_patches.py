from pathlib import Path
ROOT=Path(__file__).parent

def wrap(s,name,args,body):
 anchor='function '+name+'('
 assert s.count(anchor)==1, (name,s.count(anchor))
 return s.replace(anchor,f'function {name}({args}){{{body}}}function pdOriginal_{name}(',1)

def patch_development(s,worker=False):
 api='globalThis.ParallelDevelopment'
 # Shared role catalog, training route and badge experience in both engines.
 for old,new in {
  'handler:`挡拆发起`,':'handler:`挡拆发起`,isolation:`持球单打`,',
  'handler:`更多持球挡拆，需要可靠的组织能力。`,':'handler:`更多持球挡拆，需要可靠的组织能力。`,isolation:`增加自主创造投篮机会，结合突破和急停跳投；控球、终结和投射决定效果。`,',
  'creator:[`pickroll`,`handle`],':'creator:[`pickroll`,`handle`],isolation:[`handle`,`pullup`,`post`],',
  'creator:{name:`持球核心`,':'isolation:{name:`持球得分手`,skills:{two:2,organization:1,rebound:-1,defense:-1},description:`打磨控球、突破终结与急停跳投，培养自主得分能力。`},creator:{name:`持球核心`,',
  '[`shooting`,`creator`,`stopper`]':'[`shooting`,`creator`,`isolation`,`stopper`]',
  '[`shooting`,`creator`,`stopper`,`two_way`]':'[`shooting`,`creator`,`isolation`,`stopper`,`two_way`]',
  'let x={drive:{':'let x={isolation:{handling:.22,shooting:.2,drive:.12,spotup:-.22},drive:{',
 }.items():
  s=s.replace(old,new)
 # Model naming differs, but the shared possession selector has stable field names.
 s=s.replace('*(.3+n.tendencies.handling)', '*(.3+n.tendencies.handling)*(e.model.parallelInitiationWeight||1)')
 # Keep applied development separate from full-season reporting.
 if worker:
  for old,new in {
   'e.historicalYear:Ch(e.year,e.historicalYear)':'e.historicalYear:e.parallelStrictEra?e.historicalYear:Ch(e.year,e.historicalYear)',
   'd(Nt(e,r,1e3,o),!0),d(wt(e,r),!1);':'d(Nt(e,r,1e3,o),!0);if(l.season?.draft?.parallelStrictEra&&Number(l.season.draft.year)===Number(e))return u.map((e,t)=>ua({...e,mockRank:t+1},l.entryDataVersion));d(wt(e,r),!1);',
   'sm(a),Bp(a);':'if(a.eraChoice?.selected&&!a.parallelStrictEra&&!a.applied&&!a.selections.length){a.parallelStrictEra=true;Th(a,false);a.shortlist=(a.shortlist||[]).filter(id=>a.prospects.some(p=>p.id===id));}sm(a),Bp(a);',
  }.items():
   assert s.count(old)==1, ('worker draft',old,s.count(old))
   s=s.replace(old,new,1)
  s=s.replace('Si(Zp(),t.abbr,n,l.season.year,n.lastGrowth,a)', 'Si(Zp(),t.abbr,n,l.season.year,s-i.ability,a)')
  s=s.replace('n.lastGrowth=s-i.ability,', 'n.lastGrowth=s-(i.summaryFrom??i.ability),')
  s=s.replace('from:r.round(i.ability),to:s', 'from:r.round(i.summaryFrom??i.ability),to:s')
 else:
  s=s.replace('iu(Y(),t.abbr,n,k.season.year,n.lastGrowth,i)', 'iu(Y(),t.abbr,n,k.season.year,o-r.ability,i)')
  s=s.replace('n.lastGrowth=o-r.ability,', 'n.lastGrowth=o-(r.summaryFrom??r.ability),')
  s=s.replace('from:A.round(r.ability),to:o', 'from:A.round(r.summaryFrom??r.ability),to:o')
  s=patch_draft(s)
 profile,nine,position,model,specialty=('Sa','Ca','ke','Jl','Zn') if worker else ('_d','vd','ze','tb','gc')
 state='l' if worker else 'k'
 s=wrap(s,profile,'e,t,n={},r',f'const result=pdOriginal_{profile}(e,t,n,r);return e.parallelTraining?{{...result,unified:true,parallelTraining:{api}.viewState(e)}}:result;')
 s=wrap(s,nine,'e,t',f'return {api}.ratings(t.parallelTraining,pdOriginal_{nine}(e,t));')
 s=wrap(s,position,'e',f'return e?.parallelTraining?{api}.applyPosition(e):pdOriginal_{position}(e);')
 s=wrap(s,model,'e,t,n',f'{api}.tick(e,{api}.totals(e,{state}.season,t?.abbr));return {api}.model(e,pdOriginal_{model}(e,t,n));')
 s=wrap(s,specialty,'e,t,n={}',f'return {api}.tendencies(e,pdOriginal_{specialty}(e,t,n));')
 s=s.replace('m=ha(l)?Sa(e,s,i,l.simulationRulesVersion):null','m=(ha(l)||e.parallelTraining)?Sa(e,s,i,l.simulationRulesVersion):null') if worker else s.replace('f=cd(k)?_d(e,o,r,k.simulationRulesVersion):null','f=(cd(k)||e.parallelTraining)?_d(e,o,r,k.simulationRulesVersion):null')
 if worker:
  s=s.replace('Bi(n);let i=Eu(',f'Bi(n);{api}.tick(n,{api}.totals(n,l.season,t.abbr));let i=Eu(')
  # The existing progression patch inserts mentorship between these anchors.
  s=s.replace('Bi(n);if(Number(n.age)<=25',f'Bi(n);{api}.tick(n,{api}.totals(n,l.season,t.abbr));if(Number(n.age)<=25')
 else:
  s=s.replace('exit(){typeof o.onExitRequested', 'async exit(){if(k.simulating||k.offseasonAuto||k.rewardPending){$(`请先结束当前模拟或领取奖励，再返回主页。`);return;}if(k.homeTeamSelected){const result=await I();if(!result.ok){$(result.message);return;}}const home=D.host?.closest(`.dynasty-mode-shell`)?.querySelector(`[data-action="exit-dynasty"]`);if(home){home.click();return;}typeof o.onExitRequested')
  s=s.replace('selectTeam:Us,', 'selectTeam(e,mode){k.parallelEntryMode=mode;Us(e);},')
  s=s.replace('i&&(k.managerStory.livingLeague=i),n?ks(', 'i&&(k.managerStory.livingLeague=i),n&&i&&pmEntryMode(i.manager,k.parallelEntryMode,k.data.seasonYear||2026),n?ks(')
  s=s.replace('Pu(n);let r=Fb(',f'Pu(n);{api}.tick(n,{api}.totals(n,k.season,t.abbr));let r=Fb(')
  s=wrap(s,'Rb','e=k.season','return pdOriginal_Rb(e).map(row=>{const p=k.leftTeam?.players.find(p=>String(p.id)===String(row.playerId));const next=globalThis.ParallelDevelopment.reportRow(p,row,e.year);return {...next,reason:Ib(next)};});')
  s=wrap(s,'Fb','e,t','const native=pdOriginal_Fb(e,t);return e.parallelTraining?globalThis.ParallelProgression.develop(e,{year:k.season.year,ability:native.ability,potential:native.potential,line:native.line,baseline:native.delta,path:e.developmentRoute?.path}):native;')
  s=s.replace('k.livingTab===`team`&&(f+=pmDevelopmentPanel())','k.livingTab===`team`&&(f=pmDevelopmentPanel()+f)')
  s=s.replace('function pmBind(root){','function pmBind(root){pdBind(root);')
  s=s.replace('function pmDevelopmentPanel(){','function pmDevelopmentPanel(){return pdPanel();}function pdLegacyDevelopmentPanel(){')
  s=s.replace('function F(e=!0){','function F(e=!0){pdTick();',1)
  s=(ROOT/'progression-rules.js').read_text()+'\n'+s
  s=s.replace('function pmState(){',(ROOT/'development-integration.js').read_text()+'\nfunction pmState(){',1)
 return (ROOT/'player-development.js').read_text()+'\n'+s


def patch_entry_navigation(s):
 def replace(old,new):
  nonlocal s
  assert s.count(old)==1, (old,s.count(old))
  s=s.replace(old,new,1)
 replace('<div class="ui-entry-controls">', '<div class="ui-entry-controls"><label>经理模式<select id="uiEntryMode" aria-label="经理模式"><option value="free">自由模式</option><option value="assessment">考核模式</option></select></label></div><p>自由模式：任期不限。考核模式：从首个赛季起，按战绩、培养和经营目标接受考核。开档后仍可切换模式。</p><div class="ui-entry-controls">')
 replace('e.selectTeam(t.abbr)', 'e.selectTeam(t.abbr,s(`uiEntryMode`).value)')
 replace('s(`dynastyTeamHeader`).after(he,P,F,ge,I,L)', 's(`dynastyTeamHeader`).before(m(`button`,{type:`button`,id:`uiReturnHome`,style:`display:block;margin:8px 16px;padding:10px 14px;min-height:44px;border:1px solid #c8cfc8;border-radius:8px;background:#fffdf7;color:#203f45;cursor:pointer`},`‹ 返回主页`)),s(`uiReturnHome`).onclick=()=>e.exit(),s(`dynastyTeamHeader`).after(he,P,F,ge,I,L)')
 return s


def patch_draft(s):
 def once(old,new):
  nonlocal s
  assert s.count(old)==1, ('draft',old[:100],s.count(old))
  s=s.replace(old,new,1)
 # A manual selection must not be diluted by the multi-era fallback.
 once('e.historicalYear:vp(e.year,e.historicalYear)', 'e.historicalYear:e.parallelStrictEra?e.historicalYear:vp(e.year,e.historicalYear)')
 once('if(t.historicalYear=e,', 'if(t.parallelStrictEra=true,t.historicalYear=e,')
 once('u(Tt(e,r,1e3,o),!0),u(gt(e,r),!1);', 'u(Tt(e,r,1e3,o),!0);if(k.season?.draft?.parallelStrictEra&&Number(k.season.draft.year)===Number(e))return l.map((e,t)=>Bo({...e,mockRank:t+1},k.entryDataVersion));u(gt(e,r),!1);')
 # Migration only before any selections, and only for saves that explicitly changed era.
 once('Cp(a),Yw(a);', 'if(a.eraChoice?.selected&&!a.parallelStrictEra&&!a.applied&&!a.selections.length){a.parallelStrictEra=true;bp(a,false);a.shortlist=(a.shortlist||[]).filter(id=>a.prospects.some(p=>p.id===id));}Cp(a),Yw(a);')
 once('i=k.draftOnlyShortlist?r.filter(e=>t.shortlist?.includes(e.id)):r,a=[...i]', 'i=(k.draftOnlyShortlist?r.filter(e=>t.shortlist?.includes(e.id)):r).filter(p=>globalThis.ParallelDraftFilters.match(p,k.parallelDraftFilter)),a=[...i]')
 once('<div class="draft-prospect-list">${a.map(e=>Q_(e,t)).join(``)}</div>', '${pdDraftControls(i.length,r.length)}<div class="draft-prospect-list">${a.map(e=>Q_(e,t)).join(``)}</div>')
 once('O.querySelector(`[data-draft-watch-filter]`)?.addEventListener', 'pdDraftBind(O),O.querySelector(`[data-draft-watch-filter]`)?.addEventListener')
 s=s.replace('优先使用所选年代名单，不足时按现有返场规则补充。', '更换后只保留所选年代的历史新秀，不足名额由生成新秀补齐。')
 s=s.replace('function ev(){',(ROOT/'draft-integration.js').read_text()+'\nfunction ev(){',1)
 import json
 countries=json.loads((ROOT/'draft-countries.json').read_text())
 return 'globalThis.ParallelDraftCountries='+json.dumps(countries,ensure_ascii=False,separators=(',',':'))+';\n'+(ROOT/'draft-filters.js').read_text()+'\n'+s
