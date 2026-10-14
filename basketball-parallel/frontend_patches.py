from pathlib import Path
ROOT=Path(__file__).parent

def patch_dynasty(s):
    old='async prepareRewardVideo(){await es(e,`releaseMemory`,{}),e.client.destroy()}'
    # r90 services own the reward journal and storage lifecycle.
    if old in s: s=s.replace(old,'async prepareRewardVideo(){return true}')
    start=s.index('async function re(e){')
    end=s.index('function ie(',start)
    s=s[:start]+'async function re(e){return window.parallelProfile.identity()}'+s[end:]
    begin=s.index('function Mc(')
    end=s.index('function Nc(',begin)
    s=s[:begin]+'function Mc(){return Mt().length!==2?`获取明确还价仅支持两队交易，请先拆分多人方案。`:``}'+s[end:]
    s=s.replace('每个对手每季1次，每季最多3次。','调整球员或选秀权后可再次询价，次数不限；相同方案保留原答复。')
    s=s.replace('for(;r.length>8;)delete t.tradeCounterOffers[r.shift()]','')
    s=s.replace('function nS(){','function pmNativeOffers(){',1)
    s=s.replace('hu(t,e,k.season.year),k.leftTeam=n','hu(t,e,k.season.year),globalThis.ParallelManagerRules.hired(t.manager,k.season.year),k.leftTeam=n')
    anchor='function F(e=!0){'
    assert anchor in s
    s=s.replace(anchor,(ROOT/'manager-integration.js').read_text()+'\n'+anchor+'if(k.season)pmPlan();',1)
    s=s.replace('return t.annualReviews.push(v),t.annualReviews=t.annualReviews.slice(-12),v','return pmReview(v),t.annualReviews.push(v),t.annualReviews=t.annualReviews.slice(-12),v')
    s=s.replace('f=yu({world:t,team:r,offers:nS(),','f=pmPanel()+yu({world:t,team:r,offers:nS(),')
    s=s.replace('DS(a),lg(a),a.querySelectorAll(`[data-news-filter]`)','pmBind(a),DS(a),lg(a),a.querySelectorAll(`[data-news-filter]`)')
    s=s.replace('k.livingTab===`career`&&(pe(t,n)', 'k.livingTab===`team`&&(f+=pmDevelopmentPanel()),k.livingTab===`career`&&(pe(t,n)')
    s=s.replace('Q(`持续经营 · 任期不限`)','Q(pmState().mode===`assessment`?`考核模式 · 声望 `+pmState().reputation:`自由模式 · 任期不限`)')
    return (ROOT/'manager-rules.js').read_text()+'\n'+s


def patch_progression(s):
    old='g=r.min(a,s.maxGain,r.max(0,r.round(s.maxGain*e)))'
    new='g=r.min(a,r.max(0,r.round(s.maxGain*e)))'
    assert old in s
    s=s.replace(old,new)
    old='g=r.max(g,r.min(s.maxGain,e))'
    assert old in s
    s=s.replace(old,'g=r.max(g,e)')
    old='return g>0&&(g=r.min(g,r.max(0,s.maxGain-Number(e.summerGrowth?.year===l.season?.year?e.summerGrowth.amount:0)))),{ability:n,potential:i,line:u,delta:g}'
    assert old in s
    # Continuous workload credit; the regular-season reward never consumes summer growth.
    s=s.replace(old,'if(g>=0&&a>0&&s.maxGain>0){let extra=u.avgMin<=30?Math.max(0,u.avgMin-26)/4:1+Math.max(0,u.avgMin-30)/6;g=Math.min(a,Math.max(0,g)+Math.floor(extra+1e-8));}return{ability:n,potential:i,line:u,delta:g}')
    # maxGain now controls the baseline age pace, not the final annual maximum.
    s=s.replace('let e=Y(0,1,r.min(1,a/12)*.48+d*.28+u.performance*.16+u.availability*.08+m+h);','let e=Math.max(0,r.min(1,a/12)*.48+d*.28+u.performance*.16+u.availability*.08+m+h);')
    old='englishName:`Yang Hansen`,potential:92,position:`中锋`,englishPosition:`C`'
    if old not in s: raise ValueError('Yang anchor missing')
    s=s.replace(old,old+',reb36:9.5,ast36:4.5,def36:2.4,usage:.23')
    old='function Bi(e){if(!e)return e;'
    s=s.replace(old,old+'if(Number(e.historicalDraft?.identity||e.nbaId)===1642905&&!e.parallelYangProfile){e.position=`中锋`;e.englishPosition=`C`;if(e.historicalModel){if(e.historicalModel.gameReb36===4)e.historicalModel.gameReb36=9.5;if(e.historicalModel.gameAst36===1.5)e.historicalModel.gameAst36=4.5;if(e.historicalModel.gameDef36===1)e.historicalModel.gameDef36=2.4;}e.parallelYangProfile=1;}')
    old='return{ability:n,potential:i,line:u,delta:g}'
    new='return globalThis.ParallelProgression.develop(e,{year:l.season.year,ability:n,potential:i,line:u,baseline:g,path:e.developmentRoute?.path})'
    assert old in s
    s=s.replace(old,new)
    old='Bi(n);let i=Eu(n,l.season.playerStats[n.id])'
    new='Bi(n);if(Number(n.age)<=25&&Number(l.season.playerStats[n.id]?.min)>=600&&n.parallelMentorYear!==l.season.year){let teacher=t.players.filter(p=>p.id!==n.id&&Number(p.age)>=30&&z(p)>=80&&Number(l.season.playerStats[p.id]?.min)>=600&&p.englishPosition===n.englishPosition).sort((a,b)=>z(b)-z(a))[0];if(teacher){let profile=dp(teacher),skill=Object.keys(profile).sort((a,b)=>profile[b]-profile[a])[0];if(skill){n.mentorSkillGains??={};n.mentorSkillGains[skill]=(n.mentorSkillGains[skill]||0)+1;n.mentorNineGains??={};for(let key of ({two:[`finish`,`mid`],three:[`three`],ft:[`ft`],organization:[`handle`,`passing`],rebound:[`rebound`],defense:[`perimeter`,`rim`]}[skill]||[]))n.mentorNineGains[key]=(n.mentorNineGains[key]||0)+1;n.parallelMentorYear=l.season.year;jm(n,`teammate-mentor:`+l.season.year,teacher.name+`的同队指导 · 专项能力 +1`);}}}let i=Eu(n,l.season.playerStats[n.id])'
    assert old in s
    s=s.replace(old,new)
    s=s.replace('n.lastGrowth=s-i.ability,Si(', 'n.lastGrowth=s-i.ability,i.breakout&&jm(n,`breakout:`+l.season.year,`突破赛季 · 专项能力提升，潜力重新评估 · 额外成长 +`+i.boost),Si(')
    # Original per-36 multipliers capped at 1.3 made low-output prospects stay low-output forever.
    s=s.replace('Y(.6,1.3,1+a*n)', 'Math.max(.6,1+a*n+Math.max(0,a)*Math.max(0,a)*.00065)')
    # Carry current specialty training into the fallback event weights too.
    s=s.replace('Number(e.mentorSkillGains?.rebound||0)/4.3','(Number(e.mentorSkillGains?.rebound||0)+Number(e.developmentSkills?.rebound||0))/4.3')
    s=s.replace('Number(e.mentorSkillGains?.organization||0)/5.5','(Number(e.mentorSkillGains?.organization||0)+Number(e.developmentSkills?.organization||0))/5.5')
    s=s.replace('Number(e.mentorSkillGains?.defense||0)/12','(Number(e.mentorSkillGains?.defense||0)+Number(e.developmentSkills?.defense||0))/12')
    s=s.replace('!r.length||r.some(([t,n])=>Math.abs(li(e.developmentSkills[t])+n)>8)', '!r.length')
    return (ROOT/'progression-rules.js').read_text()+'\n'+s

