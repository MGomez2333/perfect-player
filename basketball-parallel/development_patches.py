from pathlib import Path
ROOT=Path(__file__).parent

def wrap(s,name,args,body):
 anchor='function '+name+'('
 assert s.count(anchor)==1, (name,s.count(anchor))
 return s.replace(anchor,f'function {name}({args}){{{body}}}function pdOriginal_{name}(',1)

def patch_development(s,worker=False):
 api='globalThis.ParallelDevelopment'
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
  s=s.replace('Pu(n);let r=Fb(',f'Pu(n);{api}.tick(n,{api}.totals(n,k.season,t.abbr));let r=Fb(')
  s=wrap(s,'Fb','e,t','const native=pdOriginal_Fb(e,t);return e.parallelTraining?globalThis.ParallelProgression.develop(e,{year:k.season.year,ability:native.ability,potential:native.potential,line:native.line,baseline:native.delta,path:e.developmentRoute?.path}):native;')
  s=s.replace('function pmBind(root){','function pmBind(root){pdBind(root);')
  s=s.replace('function pmDevelopmentPanel(){','function pmDevelopmentPanel(){return pdPanel();}function pdLegacyDevelopmentPanel(){')
  s=s.replace('function F(e=!0){','function F(e=!0){pdTick();',1)
  s=(ROOT/'progression-rules.js').read_text()+'\n'+s
  s=s.replace('function pmState(){',(ROOT/'development-integration.js').read_text()+'\nfunction pmState(){',1)
 return (ROOT/'player-development.js').read_text()+'\n'+s
