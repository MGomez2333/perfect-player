var e=`<div class="dynasty-document">
<section class="intro-screen" id="introScreen" aria-label="开场动画">
      <div class="intro-court">
        <p class="eyebrow">WELCOME TO PARALLEL TIME</p>
        <h1>欢迎来到 联盟！</h1>
        <h2>传奇开始，打造你的梦幻球队。</h2>
        <button class="primary-button" id="introStartBtn">选择我的主队</button>
      </div>
    </section>

    <div id="app" class="app-shell" data-mode="trade">
      <header class="topbar">
        <div>
          <p class="eyebrow">DYNASTY CONTROL ROOM</p>
          <h1>王朝总经理</h1>
        </div>
      </header>

      <main>
        <section class="franchise-hub" id="franchiseHub" aria-label="主队经营中心">
          <div class="franchise-hero office-identity">
            <span class="club-logo franchise-logo" id="franchiseLogo"></span>
            <button class="micro-action" id="franchiseSwitchBtn">更换主队</button>
            <div>
              <p class="eyebrow">FRONT OFFICE</p>
              <h2 id="franchiseName">我的球队</h2>
              <p id="franchiseIdentity">选择主队后，建立你的阵容路线。</p>
            </div>
          </div>
          <section class="office-command-board" aria-label="经理办公室主任务">
            <div class="office-command-copy">
              <span id="officeMissionKicker">赛季前办公室</span>
              <h2 id="officeMissionTitle">接管球队</h2>
              <p id="officeMissionText">根据阵容和薪资情况，建立清晰的赛季路线。</p>
            </div>
            <section class="play-menu" id="playMenu" aria-label="下一步行动">
              <div>
                <span>唯一主行动</span>
                <strong id="playMenuTitle">开启你的赛季</strong>
                <p id="playMenuText">阅读老板指令，设定轮换，然后推进第一周赛程。</p>
              </div>
              <button class="primary-button" id="playNowBtn">开始</button>
            </section>
          </section>
          <div id="franchiseOffseasonJourney" hidden></div>
          <section class="office-workbench" aria-label="本周经理工作台">
            <article class="office-priority-panel">
              <header><span>待办事项</span><strong>最多三件，只保留会改变结果的决定</strong></header>
              <div id="officeTaskList" class="office-task-list"></div>
            </article>
            <article class="office-week-panel">
              <div id="officeWeeklyPlan"></div>
              <div class="office-plan-controls">
                <div>
                  <span>比赛计划</span>
                  <div class="office-segmented" aria-label="比赛计划">
                    <button data-game-plan="balanced">均衡</button>
                    <button data-game-plan="star">核心</button>
                    <button data-game-plan="pace">提速</button>
                    <button data-game-plan="defense">防守</button>
                  </div>
                </div>
                <div>
                  <span>市场态度</span>
                  <div class="office-segmented" aria-label="交易市场态度">
                    <button data-market-stance="hold">耐心</button>
                    <button data-market-stance="listen">询价</button>
                    <button data-market-stance="attack">补强</button>
                  </div>
                </div>
                <div>
                  <span>推进方式</span>
                  <div class="office-segmented" aria-label="模拟推进方式">
                    <button data-simulation-mode="detail">逐场</button>
                    <button data-simulation-mode="standard">标准</button>
                    <button data-simulation-mode="fast">节点</button>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <div class="franchise-kpis">
            <div><span>阵容状态</span><strong id="franchisePower">-</strong></div>
            <div><span>薪资状态</span><strong id="franchiseCap">-</strong></div>
            <div><span>老板指令</span><strong id="franchiseGoal">待下达</strong></div>
          </div>
          <section class="franchise-ecosystem" id="franchiseEcosystem" aria-label="球队生态与薪资经营"></section>
          <div class="franchise-actions">
            <button class="secondary-button" id="franchiseRosterBtn">查看阵容</button>
            <button class="secondary-button" id="franchiseRotationBtn">设定轮换</button>
          </div>
          <details class="franchise-roster-preview">
            <summary><span>核心阵容</span><em>查看</em></summary>
            <article class="franchise-core-card">
              <div id="franchiseCoreList" class="core-list"></div>
            </article>
          </details>
          <div class="franchise-grid">
            <article class="franchise-growth-card">
              <div class="mini-title">成长观察</div>
              <div id="franchiseGrowthList" class="focus-list"></div>
            </article>
            <article class="franchise-medical-card">
              <div class="section-row-title"><span>医疗报告</span><em id="franchiseMedicalMeta">全员可用</em></div>
              <div id="franchiseMedicalList" class="medical-report-list"></div>
            </article>
            <article class="franchise-directive-card">
              <div class="mini-title">经营提醒</div>
              <div id="franchiseDirective" class="directive-card">先确定球队方向，再设定轮换。</div>
            </article>
          </div>
        </section>

        <section class="season-card" id="seasonCard">
          <header class="dynasty-team-header" id="dynastyTeamHeader"></header>
          <div class="section-title">
            <div>
              <p class="eyebrow">SEASON MODE</p>
              <h3>经理生涯</h3>
            </div>
            <span id="seasonStage">未开赛</span>
          </div>
          <div class="season-summary">
            <div>
              <span>我的战绩</span>
              <strong id="seasonRecord">0-0</strong>
            </div>
            <div>
              <span>赛季进度</span>
              <strong id="seasonProgress">0/82</strong>
            </div>
            <div>
              <span>联盟排名</span>
              <strong id="seasonSeed">-</strong>
            </div>
          </div>
          <nav class="season-subtabs season-context-tabs" aria-label="王朝模式主导航">
            <button class="active" data-season-tab="overview">比赛</button>
            <button data-season-tab="standings">排名</button>
            <button data-season-tab="players">球员</button>
            <button data-season-tab="honors">荣誉</button>
            <button data-season-tab="league">管理</button>
          </nav>
          <section class="season-tab-panel" data-season-panel="overview">
            <section id="overviewOffseasonPanel" hidden aria-label="当前休赛期步骤"></section>
            <section class="game-day-center" aria-label="比赛日中心">
              <div class="game-day-head">
                <div>
                  <span id="seasonCalendarLabel">休赛期</span>
                  <strong id="gameDayLabel">下一场比赛</strong>
                </div>
                <em id="transactionWindowLabel">交易与签约窗口待开启</em>
              </div>
              <div class="game-day-matchup">
                <div class="game-day-team">
                  <span class="game-day-logo" id="gameDayAwayLogo"></span>
                  <strong id="gameDayAwayName">待定</strong>
                  <em id="gameDayAwayMeta">客队</em>
                </div>
                <div class="game-day-center-mark">
                  <b id="gameDayCenterLabel">VS</b>
                  <span id="gameDayCenterMeta">常规赛</span>
                </div>
                <div class="game-day-team">
                  <span class="game-day-logo" id="gameDayHomeLogo"></span>
                  <strong id="gameDayHomeName">待定</strong>
                  <em id="gameDayHomeMeta">主队</em>
                </div>
              </div>
              <p class="game-day-scouting" id="gameDayScouting">赛季开启后，球探组会递交下一场对手报告。</p>
              <div class="game-plan-panel" id="gamePlanPanel">
                <div>
                  <span>本场比赛计划</span>
                  <strong id="gamePlanLabel">均衡应战</strong>
                </div>
                <button class="game-plan-rotation" id="rotationBtn">调整轮换</button>
                <div class="game-plan-selector" id="gamePlanSelector">
                  <button class="active" data-game-plan="balanced">均衡</button>
                  <button data-game-plan="star">主打核心</button>
                  <button data-game-plan="pace">提速</button>
                  <button data-game-plan="defense">防守优先</button>
                </div>
              </div>
              <div class="season-command" aria-label="赛季推进">
                <div class="season-actions">
                  <button class="primary-button" id="startSeasonBtn">开启赛季</button>
                  <button class="primary-button" id="nextGameBtn">模拟下一场</button>
                  <button class="primary-button" id="simPlayoffsBtn" hidden>模拟季后赛</button>
                  <details class="quick-advance" id="quickAdvanceMenu">
                    <summary>快速推进</summary>
                    <div>
                      <button class="secondary-button" id="simWeekBtn">模拟一周</button>
                      <button class="secondary-button" id="simDeadlineBtn">到交易截止日</button>
                      <button class="secondary-button" id="simSeasonBtn">到季后赛</button>
                      <button class="secondary-button" id="simPlayoffRoundBtn" hidden>模拟本轮 · 至本轮结束</button>
                    </div>
                  </details>
                </div>
                <div class="last-game-strip" id="lastGameStrip">
                  <div>
                    <span>球队动态</span>
                    <strong id="latestGame">设定首发和轮换时间后，开启 82 场常规赛。</strong>
                  </div>
                  <button id="lastGameDetailBtn" hidden>查看技术统计</button>
                </div>
              </div>
            </section>
            <section class="season-pulse-panel" id="seasonPulsePanel" hidden aria-label="赛季走势与本段战报">
              <div id="seasonPulseContent"></div>
            </section>
            <button class="season-detail-link" data-jump-season-tab="schedule">查看完整赛程</button>
            <section class="playoff-series-center" id="playoffSeriesCenter" hidden aria-label="季后赛系列赛">
              <div class="playoff-series-grid" id="playoffSeriesGrid"></div>
            </section>
            <section class="season-context-card" aria-label="赛季情境">
              <div class="season-context-copy">
                <span id="storyChapter">经理简报</span>
                <strong id="gmBriefTitle">接管球队第一天</strong>
                <p id="gmBriefText">老板已经下达赛季要求，球员等你排轮换，球迷等第一场结果。</p>
              </div>
              <div class="season-context-status">
                <div><span>老板目标</span><strong id="seasonGoalLabel">边赢边调整</strong></div>
                <div><span>更衣室</span><strong id="lockerPulse">待定轮换</strong></div>
                <div><span>管理层反馈</span><strong id="directiveStatus">等待开赛</strong></div>
              </div>
              <div class="directive-progress"><span id="directiveProgressBar"></span></div>
              <strong class="season-context-story" id="storyTitle">属于这支球队的新赛季</strong>
            </section>
            <div class="season-legacy-hooks" aria-hidden="true">
              <span id="boardPulse"></span><span id="fanPulse"></span><span id="mediaPulse"></span>
              <span id="storyChapterMeta"></span><span id="storyPremise"></span><span id="storyObjectiveList"></span>
              <span id="seasonGoalNote"></span><span id="directiveSource"></span><span id="directiveDeadline"></span>
              <span id="directiveFootnote"></span><span id="overviewGameLogList"></span><span id="dynastyBoard"></span>
            </div>
          </section>
          <section class="season-tab-panel" data-season-panel="schedule" hidden>
            <div class="season-detail-head"><button data-jump-season-tab="overview" aria-label="返回比赛页">‹</button><strong>完整赛程</strong></div>
            <article>
              <div class="mini-title">比赛日历</div>
              <div id="seasonGameLogList" class="game-log-list"></div>
            </article>
          </section>
          <section class="season-tab-panel" data-season-panel="standings" hidden>
            <section class="standings-spotlight" aria-label="排名焦点">
              <div><span>当前排位</span><strong id="standingsHeroSeed">-</strong></div>
              <div><span>球队战绩</span><strong id="standingsHeroRecord">0-0</strong></div>
              <div><span>距榜首</span><strong id="standingsHeroGap">-</strong></div>
              <div><span>场均净胜</span><strong id="standingsHeroNet">-</strong></div>
            </section>
            <article class="standings-workbench">
              <div class="standings-toolbar">
                <div>
                  <span>联盟排名</span>
                  <strong id="standingsRaceSummary">常规赛尚未开始</strong>
                </div>
                <div class="standings-conference-tabs">
                  <button data-standings-conf="East">东部</button>
                  <button data-standings-conf="West">西部</button>
                </div>
              </div>
              <div class="standings-table-head"><span>排名 / 球队</span><span>胜负</span><span>胜差</span><span>近况</span></div>
              <div id="standingsList" class="standings-list league-standings-board"></div>
              <div class="standings-legend"><span>1-6 直通季后赛</span><span>7-10 附加赛</span></div>
            </article>
          </section>
          <section class="season-tab-panel" data-season-panel="players" hidden>
            <div class="player-workbench-actions">
              <button class="secondary-button" data-open-rotation>设置轮换</button>
              <button class="secondary-button" id="playerStatsBtn">全联盟数据</button>
            </div>
            <details class="roster-disclosure">
              <summary><span>球员角色与承诺</span><em id="rolePromiseMeta">首周待检验</em></summary>
              <p class="player-roles-intro">答应过的首发和时间，比赛里必须兑现；连续落空会影响更衣室。</p>
              <div id="playerRolesList" class="player-roles-list"></div>
            </details>
            <article class="medical-center-card">
              <div class="section-row-title"><span>医疗与可用状态</span><em id="seasonMedicalMeta">全员可用</em></div>
              <div id="seasonMedicalList" class="medical-report-list"></div>
            </article>
            <article>
              <div class="section-row-title"><span>本队赛季数据</span><em id="teamStatsSample">等待首场</em></div>
              <p class="po-note">左右滑动查看完整数据 · — 表示旧存档未完整记录</p>
              <div class="season-stat-scroll" tabindex="0" aria-label="本队完整赛季统计，可左右滑动">
                <div class="team-stat-head"><span>球员</span><span>场次</span><span>分钟</span><span>得分</span><span>篮板</span><span>助攻</span><span>抢断</span><span>盖帽</span><span>失误</span></div>
                <div id="seasonPlayerList" class="season-player-list"></div>
              </div>
            </article>
            <div class="season-legacy-hooks" aria-hidden="true">
              <span id="playerLeaderStrip"></span><span id="playerMetricTitle"></span>
              <span id="playerMetricSelector"></span><span id="leaguePlayerLeaders"></span>
              <span id="seasonGrowthList"></span>
            </div>
          </section>
          <section class="season-tab-panel" data-season-panel="league" hidden>
            <section class="league-pane" data-league-panel="news">
              <article class="league-calendar-card">
                <div class="mini-title">关键日期</div>
                <div id="leagueCalendarStatus"></div>
              </article>
              <article class="league-team-console" aria-label="球队管理快捷操作">
                <div class="league-team-console-head">
                  <span class="league-team-console-logo" id="leagueTeamLogo" aria-hidden="true"></span>
                  <div>
                    <span>球队管理</span>
                    <strong id="leagueTeamName">主队</strong>
                    <em id="leagueTeamMeta">阵容、轮换与交易统一从这里进入</em>
                  </div>
                </div>
                <div class="league-team-actions">
                  <button id="leagueRosterBtn">查看阵容</button>
                  <button data-open-rotation>调整轮换</button>
                  <button class="league-trade-entry" id="leagueTradeBtn">进入交易中心</button>
                </div>
              </article>
              <section class="franchise-ecosystem league-franchise-ecosystem" id="leagueFranchiseEcosystem" aria-label="赛季球队生态与薪资经营"></section>
              <div class="league-task-grid">
                <button data-league-tab="market"><span>自由市场</span><em>签约与续约</em></button>
                <button data-league-tab="inbox"><span>经理收件箱</span><em>交易询价</em></button>
                <button data-league-tab="records"><span>生涯档案</span><em>退役与纪录</em></button>
              </div>
              <article>
                <div class="mini-title">联盟消息</div>
                <div id="leagueWireList" class="awards-board"></div>
              </article>
            </section>
            <section class="league-pane" data-league-panel="market" hidden>
              <div class="league-detail-head"><button data-league-tab="news" aria-label="返回联盟首页">‹</button><strong>自由市场</strong></div>
              <article>
                <div id="freeAgentList" class="free-agent-list"></div>
              </article>
            </section>
            <section class="league-pane" data-league-panel="inbox" hidden>
              <div class="league-detail-head"><button data-league-tab="news" aria-label="返回联盟首页">‹</button><strong>经理收件箱</strong></div>
              <article>
                <div id="seasonRecentList" class="focus-list compact-feed"></div>
              </article>
            </section>
            <section class="league-pane" data-league-panel="records" hidden>
              <div class="league-detail-head"><button data-league-tab="news" aria-label="返回联盟首页">‹</button><strong>生涯档案</strong></div>
              <article>
                <div class="section-row-title"><span>退役名册</span><em id="retirementMeta">生涯记录</em></div>
                <div id="retirementList" class="retirement-list"></div>
              </article>
            </section>
          </section>
          <section class="season-tab-panel" data-season-panel="draft" hidden>
            <div class="season-detail-head"><button data-jump-season-tab="league" aria-label="返回管理页">‹</button><strong>选秀中心</strong></div>
            <div id="draftHub" class="draft-hub"></div>
          </section>
          <section class="season-tab-panel" data-season-panel="honors" hidden>
            <section class="honors-stage" id="liveHonorRaceSection" aria-label="赛季奖项观察">
              <div class="honors-stage-head">
                <div>
                  <span>赛季奖项观察</span>
                  <strong id="honorRaceTitle">竞争刚刚开始</strong>
                </div>
                <em id="honorRaceMeta">每个比赛日后更新</em>
              </div>
              <div id="honorRaceBoard" class="honor-race-grid"></div>
            </section>
            <article class="honor-candidate-board" id="honorCandidateSection">
              <div class="honor-selector-head">
                <div><span>候选梯队</span><strong id="honorCategoryTitle">MVP竞争榜</strong></div>
                <div id="honorCategorySelector" class="honor-category-selector">
                  <button data-honor-category="mvp">MVP</button>
                  <button data-honor-category="dpoy">DPOY</button>
                  <button data-honor-category="scoring">得分王</button>
                  <button data-honor-category="sixth">第六人</button>
                </div>
              </div>
              <div id="mvpLadderList" class="mvp-ladder-list"></div>
            </article>
            <article id="teamHonorSection">
              <div class="mini-title">本队荣誉追踪</div>
              <div id="teamHonorTracker" class="team-honor-tracker"></div>
            </article>
            <article id="seasonAwardsSection" hidden>
              <div class="mini-title">常规赛最终奖项</div>
              <div id="awardsBoard" class="awards-board"></div>
            </article>
            <details class="honor-history-disclosure" id="periodHonorsArchive">
              <summary><span>阶段荣誉记录</span><em id="periodHonorsMeta">周最佳与月最佳</em></summary>
              <div>
                <section>
                  <div class="mini-title">周荣誉</div>
                  <div id="weeklyHonorsList" class="awards-board compact-feed"></div>
                </section>
                <section>
                  <div class="mini-title">月度荣誉</div>
                  <div id="monthlyHonorsList" class="awards-board compact-feed"></div>
                </section>
              </div>
            </details>
          </section>
          <section class="season-tab-panel" data-season-panel="summary" hidden>
            <div class="season-detail-head"><button data-jump-season-tab="league" aria-label="返回管理页">‹</button><strong>赛季总结</strong></div>
            <article>
              <div class="mini-title">我的赛季档案</div>
              <div id="seasonSummaryBoard" class="season-summary-board"></div>
            </article>
          </section>
          <section class="season-tab-panel" data-season-panel="contracts" hidden>
            <div class="season-detail-head"><button data-jump-season-tab="overview" aria-label="返回休赛期">‹</button><strong>到期合同</strong></div>
            <div id="contractOfficeBoard"></div>
          </section>
        </section>

        <section class="legend-hub" id="legendModal" aria-hidden="true" aria-label="传奇球员中心">
          <div class="legend-page-head">
            <div>
              <p class="eyebrow">LEGEND VAULT</p>
              <h2>传奇球员</h2>
              <p>历史球星、巅峰能力与队史收藏正在准备中。</p>
            </div>
            <strong id="legendDrawCount">待开启</strong>
          </div>
          <div class="legend-body">
            <div class="legend-coming-soon">
              <span>FEATURE PREVIEW</span>
              <strong>传奇球员 · 待开启</strong>
              <p>传奇球员玩法正在重新设计，敬请期待。</p>
              <div><em>真实头像</em><em>巅峰赛季</em><em>队史收藏</em></div>
            </div>
            <div class="legend-locked-hooks" aria-hidden="true">
              <div>
                <span>传奇卡池</span>
                <strong id="legendPoolCount">内容准备中</strong>
              </div>
              <input id="legendPhraseInput" type="text" disabled />
              <button id="drawLegendBtn" disabled>待开启</button>
              <p id="legendDrawHint">传奇球员功能暂未开放，敬请期待。</p>
              <div id="legendResult"></div>
            </div>
          </div>
        </section>


        <section class="war-room" aria-label="交易作战室">
          <div class="war-room-top">
            <div>
              <p class="eyebrow">谈判桌</p>
              <h3>交易工作台</h3>
            </div>
            <div class="war-room-tools">
              <button class="trade-back-button" id="tradeBackBtn">返回管理</button>
              <span class="status-pill" id="roomStatus">等待报价</span>
            </div>
          </div>
          <div class="matchup-stage">
            <article class="club-panel club-panel-home" id="leftClubPanel">
              <div class="club-bg" id="leftClubBg"></div>
              <button class="panel-action" id="viewHomeRosterBtn">查看阵容</button>
              <span class="club-logo" id="leftStageLogo"></span>
              <p class="muted">我的主队</p>
              <h3 id="leftStageName">选择球队</h3>
              <div class="club-meta">
                <span id="leftStagePayroll">$0M</span>
                <span id="leftStageStatus">薪资状态</span>
              </div>
            </article>
            <div class="trade-line">
              <span></span>
              <strong>报价</strong>
              <span></span>
            </div>
            <article class="club-panel club-panel-away" id="rightClubPanel">
              <div class="club-bg" id="rightClubBg"></div>
              <button class="panel-action" id="switchOpponentBtn">更换交易对象</button>
              <span class="club-logo" id="rightStageLogo"></span>
              <p class="muted">交易对象</p>
              <h3 id="rightStageName">选择球队</h3>
              <div class="club-meta">
                <span id="rightStagePayroll">$0M</span>
                <span id="rightStageStatus">薪资状态</span>
              </div>
            </article>
          </div>
          <section class="trade-strategy-board" id="tradeStrategyBoard" aria-label="双方建队路线"></section>
          <div class="war-room-actions">
            <button class="secondary-button" id="randomTradeBtn">随机方案</button>
            <button class="secondary-button" id="addTeamBtn">加入第三方</button>
            <button class="primary-button" id="openTradeDeskBtn">开启交易</button>
          </div>
          <div class="participant-rail" id="participantRail"></div>
        </section>

        <section class="immersion-deck" aria-label="经理办公室">
          <div class="trade-intel-head">
            <span>球探简报</span>
            <strong>双方核心筹码</strong>
          </div>
          <div class="manager-grid">
            <article class="manager-card">
              <p class="eyebrow">我方核心</p>
              <div id="homeCoreList" class="core-list"></div>
            </article>
            <article class="manager-card">
              <p class="eyebrow">对方核心</p>
              <div id="awayCoreList" class="core-list"></div>
            </article>
          </div>
          <div class="ticker-strip" id="tickerStrip">经理热线 · 工资帽 · 选秀权 · 球星价值 · 管理层态度</div>
        </section>

        <section class="team-picker" aria-label="选择交易球队">
          <button class="team-select active" data-side="left">
            <span id="leftLogo" class="mini-logo"></span>
            <span id="leftName">选择我的球队</span>
          </button>
          <span class="versus">VS</span>
          <button class="team-select" data-side="right">
            <span id="rightLogo" class="mini-logo"></span>
            <span id="rightName">选择交易对象</span>
          </button>
        </section>

        <section class="team-dashboard compact-only">
          <article class="roster-card">
            <div class="section-title">
              <h3 id="leftRosterTitle">我的球队阵容</h3>
              <span id="leftRosterCount">0 人</span>
            </div>
            <div id="leftCapSummary" class="cap-summary"></div>
            <div id="leftRosterList" class="roster-list"></div>
          </article>

          <article class="roster-card">
            <div class="section-title">
              <h3 id="rightRosterTitle">交易对象阵容</h3>
              <span id="rightRosterCount">0 人</span>
            </div>
            <div id="rightCapSummary" class="cap-summary"></div>
            <div id="rightRosterList" class="roster-list"></div>
          </article>
        </section>

        <section class="history-card" id="historyCard" hidden>
          <div class="section-title">
            <h3>交易记录</h3>
            <span id="historyCount">0 笔</span>
          </div>
          <div id="historyList" class="hot-list"></div>
        </section>
      </main>


    </div>

    <div class="trade-modal-backdrop" id="tradeModalBackdrop" hidden></div>
    <section class="trade-modal" id="tradeModal" hidden inert aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="tradeModalTitle">
      <div class="modal-head">
        <div>
          <p class="muted">交易谈判</p>
          <h3 id="tradeModalTitle">谈一笔交易</h3>
        </div>
        <button class="icon-button" id="closeTradeModal" aria-label="关闭交易浮窗">×</button>
      </div>

      <div class="trade-modal-body">
        <section class="offer-intro">
          <div>
            <p class="eyebrow">交易筹码</p>
            <h3>选择双方筹码</h3>
          </div>
          <span class="status-pill">这份报价由你做主</span>
        </section>
        <section class="trade-board" id="tradeBoard">
          <article class="trade-column" id="leftColumn">
            <div class="column-head">
              <div>
                <p class="muted">送出</p>
                <h3 id="leftColumnTitle">球队 A</h3>
              </div>
              <button class="small-button" data-add="left">+ 添加</button>
            </div>
            <div id="leftAssets" class="asset-list empty-state">还没有筹码</div>
            <div class="salary-row"><span>送出薪资</span><strong id="leftSalary">$0</strong></div>
          </article>

          <article class="trade-column" id="rightColumn">
            <div class="column-head">
              <div>
                <p class="muted">送出</p>
                <h3 id="rightColumnTitle">球队 B</h3>
              </div>
              <button class="small-button" data-add="right">+ 添加</button>
            </div>
            <div id="rightAssets" class="asset-list empty-state">还没有筹码</div>
            <div class="salary-row"><span>送出薪资</span><strong id="rightSalary">$0</strong></div>
          </article>
        </section>

        <section class="verdict-card" id="verdictCard">
          <div>
            <p class="muted">交易条件</p>
            <h3 id="verdictTitle">先选双方筹码</h3>
          </div>
          <p id="verdictText">把想送出和想得到的人放上桌，再问问对方。</p>
        </section>

        <section class="result-card" id="resultCard">
          <div class="section-title">
            <h3>交易明细</h3>
            <span id="dataStamp">加载中</span>
          </div>
          <div class="result-grid" id="resultGrid">
            <div>
              <p id="leftGetsLabel" class="muted">球队 A 得到</p>
              <div id="leftGets" class="result-assets">-</div>
            </div>
            <div>
              <p id="rightGetsLabel" class="muted">球队 B 得到</p>
              <div id="rightGets" class="result-assets">-</div>
            </div>
          </div>
          <div class="score-strip">
            <span id="fairScore">等待筹码</span>
            <span id="debateScore">还没选好筹码</span>
            <span id="realityScore">等待对方答复</span>
          </div>
        </section>

        <section class="decision-card" id="decisionCard">
          <div class="section-title">
            <h3>对方答复</h3>
            <span id="decisionSummary">等待报价</span>
          </div>
          <div id="decisionList" class="decision-list">
            <p class="muted">发出报价后，对方会根据阵容需要、合同和选秀权给出答复。</p>
          </div>
        </section>
      </div>
      <div class="trade-actions detail-footer">
        <button class="primary-button" id="submitTradeBtn">询问对方</button>
        <button class="secondary-button" id="enactTradeBtn" disabled>完成交易</button>
        <button class="force-button" id="forceTradeBtn" hidden>请老板拍板</button>
      </div>
    </section>

    <div class="inquiry-modal-backdrop" id="inquiryModalBackdrop" hidden></div>
    <section class="inquiry-modal" id="inquiryModal" hidden inert aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="inquiryModalTitle">
      <div class="inquiry-callbar">
        <span class="inquiry-live-dot"></span>
        <span>总经理专线 · 来电</span>
      </div>
      <div class="inquiry-modal-head">
        <span class="inquiry-team-logo" id="inquiryTeamLogo"></span>
        <div>
          <p id="inquiryCallerName">对方总经理</p>
          <h3 id="inquiryModalTitle">收到交易报价</h3>
        </div>
      </div>
      <p class="inquiry-message" id="inquiryMessage">对方希望围绕本队球员开启谈判。</p>
      <div class="inquiry-offer-grid">
        <article>
          <span>我方送出</span>
          <strong id="inquiryUserSends">-</strong>
          <em id="inquiryUserSalary">$0</em>
        </article>
        <b>⇄</b>
        <article>
          <span>我方得到</span>
          <strong id="inquiryUserGets">-</strong>
          <em id="inquiryReturnSalary">$0</em>
        </article>
      </div>
      <p class="inquiry-context" id="inquiryContext">正在确认这份报价是否仍然有效。</p>
      <div class="inquiry-actions">
        <button class="secondary-button" id="declineInquiryBtn">拒绝报价</button>
        <button class="secondary-button" id="negotiateInquiryBtn">调整筹码</button>
        <button class="primary-button" id="acceptInquiryBtn">接受并成交</button>
      </div>
    </section>

    <div class="sheet-backdrop" id="sheetBackdrop" hidden></div>
    <aside class="bottom-sheet detail-surface" id="assetSheet" hidden inert aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="sheetTitle">
      <div class="sheet-handle"></div>
      <div class="sheet-head">
        <button class="detail-back" id="sheetBackBtn" aria-label="返回上一层">返回</button>
        <div>
          <p class="muted" id="sheetSubtitle">添加筹码</p>
          <h3 id="sheetTitle">球队资产</h3>
        </div>
        <button class="icon-button" id="closeSheet" aria-label="关闭">×</button>
      </div>
      <input id="assetSearch" class="search-input" placeholder="搜索球员、位置、选秀权">
      <div class="segment">
        <button class="segment-btn active" data-filter="all">全部</button>
        <button class="segment-btn" data-filter="player">球员</button>
        <button class="segment-btn" data-filter="pick">选秀权</button>
      </div>
      <div id="sheetList" class="sheet-list"></div>
      <div id="sheetFooter" class="detail-footer" hidden></div>
    </aside>

    <div class="detail-confirm-backdrop" id="detailConfirmBackdrop" hidden></div>
    <section class="detail-confirm" id="detailConfirm" hidden inert aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="detailConfirmTitle" aria-describedby="detailConfirmBody">
      <h3 id="detailConfirmTitle">确认操作</h3>
      <p id="detailConfirmBody"></p>
      <div class="detail-confirm-actions"><button id="detailConfirmCancel" class="secondary-button">继续编辑</button><button id="detailConfirmAccept" class="primary-button">放弃修改</button></div>
    </section>

    <div class="decision-receipt-backdrop" id="decisionReceiptBackdrop" hidden></div>
    <section class="decision-receipt" id="decisionReceipt" hidden inert aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="decisionReceiptTitle">
      <div class="decision-receipt-mark">✓</div>
      <header>
        <span id="decisionReceiptEyebrow">操作已生效</span>
        <h3 id="decisionReceiptTitle">球队操作完成</h3>
        <p id="decisionReceiptSummary">联盟名册已经更新。</p>
      </header>
      <div class="decision-receipt-body" id="decisionReceiptBody"></div>
      <button class="primary-button" id="closeDecisionReceipt">知道了，继续经营</button>
    </section>

    <div class="manager-story-backdrop" id="managerStoryBackdrop" hidden></div>
    <section class="manager-story-sheet" id="managerStorySheet" hidden inert aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="managerStoryTitle">
      <span class="sheet-handle"></span>
      <header>
        <span id="managerStoryEyebrow">总经理生涯</span>
        <h3 id="managerStoryTitle">上任第一天</h3>
        <p id="managerStoryBody"></p>
      </header>
      <div class="manager-story-evidence" id="managerStoryEvidence"></div>
      <div class="manager-story-choices" id="managerStoryChoices"></div>
      <button class="manager-story-continue" id="managerStoryContinue" hidden>走进办公室</button>
    </section>

    <div class="season-awards-backdrop" id="seasonAwardsBackdrop" hidden></div>
    <section class="season-awards-ceremony" id="seasonAwardsCeremony" hidden inert aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="seasonAwardsTitle">
      <header>
        <span>REGULAR SEASON HONORS</span>
        <h3 id="seasonAwardsTitle">本赛季荣誉</h3>
        <p>根据本赛季模拟表现评选。</p>
      </header>
      <div class="season-awards-content" id="seasonAwardsContent"></div>
      <button class="primary-button" id="continueSeasonAwardsBtn">确认荣誉，进入季后赛</button>
    </section>

    <div class="toast" id="toast" hidden></div>
</div>`;export{e as default};