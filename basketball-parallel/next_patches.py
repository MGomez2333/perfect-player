"""r41 additions layered on the pinned engine. All critical anchors fail closed."""
from pathlib import Path
import re
ROOT=Path(__file__).parent

def patch_next(s,worker=False):
 def once(old,new):
  nonlocal s
  assert s.count(old)==1,('r41',old[:100],s.count(old))
  s=s.replace(old,new,1)
 def wrap(name,args,body):
  nonlocal s
  # Several imported modules have short functions with the same name; manager closure is last.
  anchor='function '+name+'(';i=s.rfind(anchor);assert i>=0,name
  s=s[:i]+f'function {name}({args}){{{body}}}function nrOriginal_{name}('+s[i+len(anchor):]
 api='globalThis.ParallelNext';state='l' if worker else 'k'
 # New classes only. Existing prospects and all opening/legacy roster ratings are retained.
 fn='om' if worker else 'Sp'
 wrap(fn,'...args',f'return {api}.draft(nrOriginal_{fn}(...args),{state},args[0]);')
 # Promotion to a roster/free agency constructs a new object; explicitly carry saved traits.
 s=re.sub(r'\.\.\.\((\w+)\.historicalModel\|\|\{\}\)',lambda m:m[0]+','+','.join(f'{key}:{m[1]}.{key}' for key in ['parallelHidden','parallelScout','parallelGeneration'])+f',parallelOriginId:{m[1]}.parallelOriginId||{m[1]}.id',s)
 # Cap policy changes team budgets; salary scale uses the unmodified rule function.
 cap='O' if worker else 'Ve'
 anchor='function '+cap+'(year='
 assert s.count(anchor)==1
 s=s.replace(anchor,f'function {cap}(...args){{return {api}.budget(nrBaseCap(...args),{state}.managerStory?.parallelNext?.salaryMode);}}function nrBaseCap(year=',1)
 salary_functions=['ca','Is','Hs','Lh','legacyR69_Is','legacyR69_Hs','legacyR69_Lh'] if worker else ['Gd','_m','xm','Ue','legacyR69__m','legacyR69_xm','legacyR69_Ue']
 for name in salary_functions:
  start=s.rfind('function '+name+'(');assert start>=0,name
  end=s.find('function ',start+9);end=len(s) if end<0 else end
  body=s[start:end];body=re.sub(r'\b'+cap+r'\(', 'nrBaseCap(',body);s=s[:start]+body+s[end:]
 # Explicit priorities retain their full range through shot weighting.
 needle='Y(.07,.4,t.usage)' if worker else 'X(.07,.4,t.usage)'
 once(needle,needle.replace('.07,.4','.015,.9'))
 # Choose the initiator first; that player earns an assist only if the receiver scores.
 start='let n=C(e.rows,`usage`),i=null,a=null,o=null,c=`normal`,l=n.model.specialties.role===`hub`' if worker else 'let n=x(e.rows,`usage`),r=null,i=null,a=null,s=`normal`,c=n.model.specialties.role===`hub`'
 a=s.index(start);end=s.index('let d=' if worker else 'let u=',a)
 assert end-a<2400,('possession length',end-a)
 if worker:
  replacement=f'let {{shooter:n,passer:i,handler:a,screener:o,kind:c}}={api}.possession(e,C,()=>r.random());if(o){{ir(a,`pickrollPlays`);ir(o,`screens`);}}'
 else:
  replacement=f'let {{shooter:n,passer:r,handler:i,screener:a,kind:s}}={api}.possession(e,x,()=>A.random());if(a){{kh(i,`pickrollPlays`);kh(a,`screens`);}}'
  # Event recorder symbol is read from the original branch, not inferred from minification.
  original=s[a:end];event=re.search(r'([\w$]+)\(i,`pickrollPlays`\)',original);assert event
  replacement=replacement.replace('kh(',event[1]+'(')
 s=s[:a]+replacement+s[end:]
 # Unweighted rate controls number of team blocks; priorities only choose the blocker.
 rows='i' if worker else 'r';selector='S' if worker else 'b'
 old=f't[n]={{rows:{rows},total:{rows}.reduce((e,t)=>e+t,0)}}'
 once(old,old[:-1]+f',rawTotal:e.rows.reduce((sum,row)=>sum+row.min*{selector}(row,n),0)'+'}')
 once('weightedRate:e.total','weightedRate:e.rawTotal')
 # Remove arbitrary box-score tail throttles; opportunities and skill remain limiting.
 s=s.replace('return!e.model?.performance?.tailBalance||e.ast<8||t<n*.9','return true').replace('return e.model?.performance?.tailBalance&&e.reb>=15?t*.9:t','return t')
 pressure='za' if worker else 'zd'
 # Resolve equivalent function by its stable body.
 match=re.search(r'function (\w+)\(e,t\)\{let n=(\w+)\(t,0,1\);return\{shot:-(\w+)\.pressureShot\*n,turnover:\3\.pressureTurnover\*n,ft:-\.003\*n\}\}',s);assert match,'pressure'
 old=match[0];new=old.replace('return{','return '+api+'.pressure(e,n,{').replace('ft:-.003*n}}','ft:-.003*n})}');once(old,new)
 # Big-game traits affect game form without changing stored ratings.
 model='Jl' if worker else 'tb'
 old=f'return globalThis.ParallelDevelopment.model(e,pdOriginal_{model}(e,t,n));'
 once(old,f'const m=globalThis.ParallelDevelopment.model(e,pdOriginal_{model}(e,t,n));if(m.performance)m.performance.parallelBigGame={state}.season?.stage===`playoffs`;return m;')
 # The game-form calculation precedes recomputing rates from court ratings.
 old='d.gameForm=f.efficiency;' if worker else None
 if worker:
  once(old,'if(d.performance?.parallelBigGame){const boost=(d.parallelHidden?.bigGames-10)*.003;f.efficiency+=boost;p.efficiency+=boost;}'+old)
 else:
  m=re.search(r'(\w+)\.gameForm=(\w+)\.efficiency;',s);assert m
  # Runtime has separate offense and defense forms: identify prior declaration's defense variable.
  context=s[max(0,m.start()-600):m.start()];dv=re.search(r',(\w+)=\w+\.performance\?',context);assert dv
  once(m[0],f'if({m[1]}.performance?.parallelBigGame){{const boost=({m[1]}.parallelHidden?.bigGames-10)*.003;{m[2]}.efficiency+=boost;{dv[1]}.efficiency+=boost;}}'+m[0])
 # Shorter inter-game presentation delay; keep yielding and pause/stop checks.
 s=s.replace('1350/', '220/')
 if not worker:
  once('c.specialtyRole=u;',"c.specialtyRole=u;if(c.parallelTraining)c.parallelTraining.offenseRole=u;")
  once('function F(e=!0){pdTick();','function F(e=!0){nrTick();pdTick();')
  once('function pdClock(p){',(ROOT/'next-integration.js').read_text()+'\nfunction pdClock(p){')
  wrap('Mo','e','nrOriginal_Mo(e);const found=t_(k.detailPlayerId);if(found?.player)nrCard(e,found.player);')
  wrap('Vg','modal=false','const html=nrOriginal_Vg(modal),p=zg();return modal&&p&&Lg()?html.replace(`<div class="self-draft-buttons">`,nrSelf(p)+`<div class="self-draft-buttons">`):html;')
  wrap('Gg','container=D','nrOriginal_Gg(container);nrSelfBind(container);')
  s=s.replace('19岁起步 · ${status}','${player.age}岁起步 · ${status}')
  wrap('Ap','e,t=Dp()',f'return {{...{api}.scout(e),credits:t?.scoutingCredits||0}};')
  wrap('Mp','e,t=e.scoutLevel||1',f'const report={api}.scout(e,t),guess={{...e,trueAbility:Math.round((report.abilityLow+report.abilityHigh)/2),truePotential:Math.round((report.potentialLow+report.potentialHigh)/2)}};const result=nrOriginal_Mp(guess,t);result.rows.push({{label:`性格与风险（球探判断）`,value:Object.entries({api}.labels).map(([key,label])=>label+`：`+(report.traits[key]>=14?`较积极`:report.traits[key]<=7?`需留意`:`暂无突出信号`)).join(`；`)+`。报告可能误判，较高把握也不保证准确。`}});result.rows.push({{label:`历次评估`,value:Object.values(e.parallelScout.reports).map(r=>`考察${{r.level}}：潜力${{r.potentialLow}}–${{r.potentialHigh}}`).join(`；`)}});return result;')
  once('<b>能力 ${prospect.trueAbility}</b><b>潜力 ${prospect.truePotential}</b>',f'<b>能力 ${{{api}.estimates(prospect).ability}}</b><b>潜力 ${{{api}.estimates(prospect).potential}}</b>')
  # Shared report renderer lives outside the manager closure.
  s=s.replace('${n(t.trueAbility)}', '${n(globalThis.ParallelNext.estimates(t).ability)}').replace('${n(t.truePotential)}','${n(globalThis.ParallelNext.estimates(t).potential)}')
  # Prospect dossier otherwise bypasses the scouting display.
  start=s.rfind('function o_(');end=s.find('function s_(',start);assert start>0 and end>start
  body=s[start:end].replace('t.trueAbility','globalThis.ParallelNext.estimates(t).ability').replace('t.truePotential','globalThis.ParallelNext.estimates(t).potential');s=s[:start]+body+s[end:]
 return (ROOT/'next-rules.js').read_text()+'\n'+s
