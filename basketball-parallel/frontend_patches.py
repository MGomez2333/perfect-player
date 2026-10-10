def patch_frontend(s):
    changes={
      'if(H.loading=!0,H.error=null,$(),await Y(),d())try{': 'if(H.loading=!0,H.error=null,$(),d())try{',
      'async function nl(e){return sc(`/team-offers`,{method:`POST`,data:e})}': 'async function nl(e){return window.parallelCareer.wait(sc(`/team-offers`,{method:`POST`,data:e}),15000)}',
      'H.expandedCandidateId=null,await Y()}catch(e){d()': 'H.expandedCandidateId=null,Y().catch(()=>{})}catch(e){d()',

      'function $(){if(document.documentElement': 'function $(){window.parallelCareer?.bind(G,H,{save:()=>Y(),redraw:()=>$(),moment:()=>H.result?Fk(H.result)[H.broadcastStep]:null,moments:()=>H.result?Fk(H.result):[],grantSkill:(c,id,kind)=>ht(c,id,kind),openAchievements:()=>{H.achievementsOpen=!0;$()}});if(document.documentElement',
      'function Z(e,t){return e===': 'function Z(e,t){if(e===`我`||e===`你`)return window.parallelCareer?.name(H)||`我的球员`;return e===',
      'function gt(e,t){': 'function gt(e,t){for(const a of e.permanentAugments||[]){if(a.id===`apprentice`&&a.choice){let r=xe(a.choice),h=e.rewards?.mentorHistory||[];if(r){let rows=h.filter(x=>x.teammateIds.includes(r.playerId));if(new Set(rows.map(x=>x.season)).size>=2&&rows.some(x=>x.wonTitle))ht(e,r.id,`apprentice`);}}}',
      'H.draftPlayerDraw>0&&H.seasons.some(': 'H.draftPlayerDraw>0&&(H.draftSeason===`all-time`||H.seasons.some(',
      'e.teams.some(e=>e.abbreviation===H.draftTeam));H.draftPlayerDraw': 'e.teams.some(e=>e.abbreviation===H.draftTeam)));H.draftPlayerDraw',
      'function MM(e){H.career?': 'function MM(e){window.parallelCareer?.remember(H.career,e);H.career?',
      'function AM(e){!V': 'function AM(e){window.parallelCareer?.attach(e);!V',
      'function Ri(e,t){let n=': 'function Ri(e,t){let n=',
      'return{careerYear:t,season:e.season,team:e.team,record:e.regular_season.record': 'return{...window.parallelCareer?.summary(e),careerYear:t,season:e.season,team:e.team,record:e.regular_season.record',
      'r.honors=[...new Set(r.seasons.flatMap(e=>e.honors))]': 'window.parallelCareer?.settle(e,r),r.honors=[...new Set(r.seasons.flatMap(e=>e.honors))]',
      'playerName:H.userProfile?.nickname||`我的球员`': 'playerName:window.parallelCareer?.name(H)||`我的球员`',
    }
    for old,new in changes.items():
        if old not in s: raise ValueError('Frontend patch anchor missing: '+old[:80])
        s=s.replace(old,new)
    extra={
      's=o<40?1:o<80?2:3':'s=3',
      '&&Object.entries(n.boosts).some(([t])=>e[t]<110)':'',
      'Math.min(110,t+n[e])':'t+n[e]',
      'function kT(e,t=H.career){let n=OT(t);return n.length?Oe(e,n):{...e}}':'function kT(e,t=H.career){return window.ParallelCareerCore.effective(e,window.ParallelCareerCore.bonuses(t?.permanentAugments||[],OT(t),_e).totals)}',
      '.filter(e=>t.ratings[e]<110)':'',
      'if(t.abilities)return t.abilities.some(t=>e.ratings[t]<110);':'if(t.abilities)return true;',
      'Math.max(0,Math.min(r/n.abilities.length,110-t[e]))':'r/n.abilities.length',
      'Math.max(0,Math.min(n,110-i))':'n',
      'save:()=>Y(),redraw:()=>$(),moment:':'save:()=>Y(),redraw:()=>$(),catalog:()=>_e,moment:',
      'class="growth-ability-row" data-growth-ability=':'class="growth-ability-row" style="grid-template-columns:minmax(0,1fr) minmax(94px,auto) 106px!important" data-growth-ability=',
      '<strong data-growth-value>':'<strong style="white-space:nowrap!important;font-size:16px!important" data-growth-value>',
      'data-growth-value>${i+r}':'data-growth-value>${window.parallelCareer.rating(n,i+r,e)}',
      'o.textContent=String(a+i)':'o.textContent=window.parallelCareer.rating(n,a+i,e)',
    }
    for old,new in extra.items():
        if old not in s: raise ValueError('Career rule anchor missing: '+old)
        s=s.replace(old,new)
    return s


def patch_dynasty(s):
    old='async prepareRewardVideo(){await es(e,`releaseMemory`,{}),e.client.destroy()}'
    if s.count(old)!=1: raise ValueError('Dynasty reward lifecycle anchor missing')
    s=s.replace(old,'async prepareRewardVideo(){return true}')
    start=s.index('async function re(e){')
    end=s.index('function ie(',start)
    s=s[:start]+'async function re(e){return window.parallelCareer.localIdentity()}'+s[end:]
    begin=s.index('function Mc(){')
    end=s.index('function Nc(',begin)
    s=s[:begin]+'function Mc(){return Mt().length!==2?`获取明确还价仅支持两队交易，请先拆分多人方案。`:``}'+s[end:]
    s=s.replace('每个对手每季1次，每季最多3次。','调整球员或选秀权后可再次询价，次数不限；相同方案保留原答复。')
    s=s.replace('for(;r.length>8;)delete t.tradeCounterOffers[r.shift()]','')
    return s


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
    s=s.replace(old,'if(a>0&&s.maxGain>0){let extra=u.avgMin<=30?Math.max(0,u.avgMin-26)/4:1+Math.max(0,u.avgMin-30)/6;g=Math.min(a,Math.max(0,g)+Math.floor(extra+1e-8));}return{ability:n,potential:i,line:u,delta:g}')
    # maxGain now controls the baseline age pace, not the final annual maximum.
    s=s.replace('let e=Y(0,1,r.min(1,a/12)*.48+d*.28+u.performance*.16+u.availability*.08+m+h);','let e=Math.max(0,r.min(1,a/12)*.48+d*.28+u.performance*.16+u.availability*.08+m+h);')
    old='englishName:`Yang Hansen`,potential:92,position:`中锋`,englishPosition:`C`'
    if old not in s: raise ValueError('Yang anchor missing')
    s=s.replace(old,old+',reb36:9.5,ast36:4.5,def36:2.4,usage:.23')
    old='function Bi(e){if(!e)return e;'
    s=s.replace(old,old+'if(Number(e.historicalDraft?.identity||e.nbaId)===1642905&&!e.parallelYangProfile){e.position=`中锋`;e.englishPosition=`C`;if(e.historicalModel){if(e.historicalModel.gameReb36===4)e.historicalModel.gameReb36=9.5;if(e.historicalModel.gameAst36===1.5)e.historicalModel.gameAst36=4.5;if(e.historicalModel.gameDef36===1)e.historicalModel.gameDef36=2.4;}e.parallelYangProfile=1;}')
    old='return{ability:n,potential:i,line:u,delta:g}'
    new='if(g>0&&u.avgMin>=26&&u.availability>=.7&&u.performance>=.2&&(e.summerGrowth?.year===l.season?.year||Object.values(e.developmentSkills||{}).some(v=>v>0))&&H(`${e.id}-breakout-${l.season?.year}`)<.025){g=Math.min(a,g+2);e.parallelBreakoutYear=l.season.year;}return{ability:n,potential:i,line:u,delta:g}'
    assert old in s
    s=s.replace(old,new)
    old='Bi(n);let i=Eu(n,l.season.playerStats[n.id])'
    new='Bi(n);if(Number(n.age)<=25&&Number(l.season.playerStats[n.id]?.min)>=600&&n.parallelMentorYear!==l.season.year){let teacher=t.players.filter(p=>p.id!==n.id&&Number(p.age)>=30&&z(p)>=80&&Number(l.season.playerStats[p.id]?.min)>=600&&p.englishPosition===n.englishPosition).sort((a,b)=>z(b)-z(a))[0];if(teacher){let profile=dp(teacher),skill=Object.keys(profile).sort((a,b)=>profile[b]-profile[a])[0];if(skill){n.mentorSkillGains??={};n.mentorSkillGains[skill]=(n.mentorSkillGains[skill]||0)+1;n.mentorNineGains??={};for(let key of ({two:[`finish`,`mid`],three:[`three`],ft:[`ft`],organization:[`handle`,`passing`],rebound:[`rebound`],defense:[`perimeter`,`rim`]}[skill]||[]))n.mentorNineGains[key]=(n.mentorNineGains[key]||0)+1;n.parallelMentorYear=l.season.year;jm(n,`teammate-mentor:`+l.season.year,teacher.name+`的同队指导 · 专项能力 +1`);}}}let i=Eu(n,l.season.playerStats[n.id])'
    assert old in s
    s=s.replace(old,new)
    s=s.replace('n.lastGrowth=s-i.ability,Si(', 'n.lastGrowth=s-i.ability,n.parallelBreakoutYear===l.season.year&&jm(n,`breakout:`+l.season.year,`稳定出场与专项训练带来突破 · 成长额外 +2`),Si(')
    return s
