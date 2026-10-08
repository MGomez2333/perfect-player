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
    return s
