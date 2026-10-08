var e=`:host {
  --brand: #b6322c;
  --brand-dark: #7f241f;
  --ink: #191715;
  --muted: #7a746e;
  --line: #d5cbb8;
  --bg: #f1ebdd;
  --card: #ffffff;
  --panel: #f6f0e4;
  --court: #2a241f;
  --good: #168a45;
  --warn: #b97900;
  --bad: #c83232;
  font-family: var(--font-ui);
}

/* Dynasty franchise ecosystem */
.franchise-ecosystem {
  margin: 14px 16px 0;
  overflow: hidden;
  border: 1px solid rgba(70, 55, 40, .16);
  border-radius: 16px;
  background: rgba(255, 250, 240, .78);
  box-shadow: 0 12px 28px rgba(54, 39, 24, .06);
}

.league-franchise-ecosystem {
  margin: 0;
}

.ecosystem-heading,
.ecosystem-finance-copy,
.ecosystem-history {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.ecosystem-heading {
  padding: 15px 16px 13px;
  border-bottom: 1px solid rgba(70, 55, 40, .12);
}

.ecosystem-heading > div,
.ecosystem-finance-copy {
  align-items: flex-start;
  flex-direction: column;
  gap: 3px;
}

.ecosystem-heading span,
.ecosystem-score-grid span,
.ecosystem-finance span,
.ecosystem-history,
.summary-franchise-ecosystem span {
  color: #7a7064;
  font-size: 12px;
}

.ecosystem-heading strong {
  font-size: 20px;
  letter-spacing: -.02em;
}

.ecosystem-heading em,
.ecosystem-score-grid em,
.summary-franchise-ecosystem em {
  color: #776f63;
  font-size: 12px;
  font-style: normal;
}

.ecosystem-heading > b {
  padding: 6px 9px;
  border: 1px solid rgba(182, 50, 44, .18);
  border-radius: 999px;
  color: #9b2c27;
  background: rgba(182, 50, 44, .07);
  font-size: 12px;
}

.ecosystem-score-grid,
.summary-franchise-ecosystem {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.ecosystem-score-grid > div,
.summary-franchise-ecosystem > div {
  display: flex;
  min-width: 0;
  padding: 12px;
  border-right: 1px solid rgba(70, 55, 40, .1);
  flex-direction: column;
  gap: 4px;
}

.ecosystem-score-grid > div:last-child,
.summary-franchise-ecosystem > div:last-child {
  border-right: 0;
}

.ecosystem-score-grid strong {
  color: #171717;
  font-size: 22px;
}

.ecosystem-finance {
  padding: 14px 16px;
  border-top: 1px solid rgba(70, 55, 40, .12);
  background: rgba(255, 255, 255, .34);
}

.ecosystem-finance-copy strong {
  font-size: 15px;
}

.ecosystem-finance-copy p {
  margin: 3px 0 0;
  color: #675f55;
  font-size: 12px;
  line-height: 1.55;
}

.ecosystem-finance-facts {
  display: grid;
  margin-top: 12px;
  border: 1px solid rgba(70, 55, 40, .1);
  border-radius: 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.ecosystem-finance-facts > div {
  display: flex;
  min-width: 0;
  padding: 9px;
  border-right: 1px solid rgba(70, 55, 40, .1);
  flex-direction: column;
  gap: 3px;
}

.ecosystem-finance-facts > div:last-child { border-right: 0; }
.ecosystem-finance-facts strong { font-size: 12px; line-height: 1.35; }

.ecosystem-decision {
  width: 100%;
  min-height: 42px;
  margin-top: 12px;
  border: 1px solid rgba(182, 50, 44, .22);
  border-radius: 11px;
  color: #8f2924;
  background: #fffaf0;
  font-weight: 700;
}

.ecosystem-history {
  padding: 10px 16px;
  border-top: 1px solid rgba(70, 55, 40, .1);
  background: rgba(167, 120, 22, .05);
}

.ecosystem-members {
  padding: 12px 16px 14px;
  border-top: 1px solid rgba(70, 55, 40, .1);
  background: rgba(167, 120, 22, .035);
}

.ecosystem-members > span {
  display: block;
  margin-bottom: 8px;
  color: #986e18;
  font-size: 12px;
  font-weight: 600;
}

.ecosystem-members > div {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.ecosystem-members b {
  display: inline-flex;
  min-width: 0;
  padding: 7px 9px;
  border: 1px solid rgba(70, 55, 40, .1);
  border-radius: 9px;
  background: rgba(255, 255, 255, .58);
  font-size: 12px;
  flex-direction: column;
  gap: 2px;
}

.ecosystem-members em {
  color: #7a7064;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
}

.contract-interest {
  margin: 12px 0;
  padding: 12px 14px;
  border: 1px solid rgba(167, 120, 22, .2);
  border-radius: 12px;
  background: rgba(167, 120, 22, .07);
}

.contract-interest > div { display: flex; justify-content: space-between; gap: 12px; }
.contract-interest span { color: #7a7064; font-size: 12px; }
.contract-interest strong { color: #7f5a13; font-size: 13px; }
.contract-interest p { margin: 7px 0 0; color: #625a50; font-size: 12px; line-height: 1.55; }

.free-agent-row small {
  display: block;
  margin-top: 4px;
  color: #9a6515;
  font-size: 12px;
  line-height: 1.4;
}

.summary-franchise-ecosystem {
  margin: 14px 0;
  overflow: hidden;
  border: 1px solid rgba(70, 55, 40, .14);
  border-radius: 14px;
  background: #fffaf0;
}

.summary-franchise-ecosystem strong { font-size: 13px; line-height: 1.4; }
.summary-franchise-ecosystem em { line-height: 1.45; }

.dynasty-totals { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.dynasty-members { margin-top: 12px; padding: 12px; border: 1px solid rgba(70, 55, 40, .12); border-radius: 12px; }
.dynasty-members > span { display: block; margin-bottom: 6px; color: #a77816; font-size: 12px; font-weight: 700; }
.dynasty-members > div { display: flex; justify-content: space-between; gap: 12px; padding: 7px 0; border-top: 1px solid rgba(70, 55, 40, .08); }
.dynasty-members strong { font-size: 12px; }
.dynasty-members em { color: #776f63; font-size: 12px; font-style: normal; text-align: right; }

@media (max-width: 420px) {
  .franchise-ecosystem { margin-right: 10px; margin-left: 10px; }
  .ecosystem-score-grid,
  .summary-franchise-ecosystem { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .ecosystem-score-grid > div:nth-child(2),
  .summary-franchise-ecosystem > div:nth-child(2) { border-right: 0; }
  .ecosystem-score-grid > div:nth-child(-n+2),
  .summary-franchise-ecosystem > div:nth-child(-n+2) { border-bottom: 1px solid rgba(70, 55, 40, .1); }
  .ecosystem-finance-facts { grid-template-columns: 1fr; }
  .ecosystem-finance-facts > div { border-right: 0; border-bottom: 1px solid rgba(70, 55, 40, .1); }
  .ecosystem-finance-facts > div:last-child { border-bottom: 0; }
  .ecosystem-history { align-items: flex-start; flex-direction: column; gap: 5px; }
  .dynasty-totals { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

/* Dynasty control room: one operating loop across office, team, season and league. */
.app-shell {
  --control-ink: #111315;
  --control-panel: #202429;
  --control-paper: #f1eee7;
  --control-accent: #f05a28;
  --control-good: #2fa36b;
  padding-bottom: calc(74px + env(safe-area-inset-bottom));
  background:
    linear-gradient(118deg, rgba(17,19,21,.035) 0 1px, transparent 1px 18px),
    #e7e4dd;
  font-family: var(--font-ui);
}

.topbar {
  border-bottom: 3px solid var(--control-accent);
  background: var(--control-ink);
}

.topbar .eyebrow {
  color: #ff8a62;
  letter-spacing: .16em;
}

.topbar h1,
.office-command-board h2,
.season-summary strong,
.franchise-kpis strong {
  font-family: var(--font-ui);
  font-stretch: condensed;
}

main {
  height: calc(100svh - 68px - 74px - env(safe-area-inset-bottom));
  padding-bottom: 18px;
}

.franchise-hub {
  gap: 9px;
}

.office-identity {
  min-height: 76px;
  border-left: 4px solid var(--control-accent);
  border-radius: 0;
  background:
    linear-gradient(100deg, rgba(240,90,40,.13), transparent 45%),
    var(--control-panel);
}

.office-command-board {
  position: relative;
  display: grid;
  gap: 12px;
  overflow: hidden;
  padding: 16px 14px 14px;
  border-radius: 2px 14px 2px 2px;
  background: var(--control-ink);
  color: var(--control-paper);
}

.office-command-board::after {
  position: absolute;
  top: -24px;
  right: -18px;
  width: 104px;
  height: 104px;
  border: 1px solid rgba(255,255,255,.11);
  content: "";
  transform: rotate(18deg);
}

.office-command-copy {
  position: relative;
  z-index: 1;
  max-width: 88%;
}

.office-command-copy > span {
  color: #ff8a62;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .12em;
}

.office-command-copy h2 {
  margin: 5px 0 4px;
  color: #fff;
  font-size: 25px;
  line-height: 1.05;
}

.office-command-copy p {
  color: rgba(241,238,231,.72);
  font-size: 12px;
  line-height: 1.55;
}

.office-command-board .play-menu {
  position: relative;
  z-index: 1;
  margin: 0 -14px -14px;
  padding: 12px 14px;
  border: 0;
  border-top: 1px solid rgba(255,255,255,.13);
  border-radius: 0;
  background: rgba(255,255,255,.055);
  color: #fff;
}

.office-command-board .play-menu span,
.office-command-board .play-menu p {
  color: rgba(255,255,255,.62);
}

.office-command-board .play-menu strong {
  color: #fff;
}

.office-command-board .play-menu .primary-button {
  border-radius: 2px 10px 2px 2px;
  background: var(--control-accent);
}

.office-workbench {
  display: grid;
  gap: 9px;
}

.franchise-hub > .franchise-actions,
.franchise-hub > .franchise-roster-preview,
.franchise-hub > .franchise-grid {
  display: none;
}

.office-priority-panel,
.office-week-panel {
  overflow: hidden;
  border: 1px solid #c8c4bc;
  border-radius: 2px 12px 2px 2px;
  background: #faf8f3;
}

.office-priority-panel > header,
.office-week-panel header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 11px;
  border-bottom: 1px solid #d8d3ca;
}

.office-priority-panel > header span,
.office-week-panel header span {
  color: var(--control-accent);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .08em;
}

.office-priority-panel > header strong,
.office-week-panel header em {
  max-width: 66%;
  color: #6f6a62;
  font-size: 12px;
  font-style: normal;
  font-weight: 750;
  text-align: right;
}

.office-task-list {
  display: grid;
}

.office-task {
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr) auto;
  min-height: 74px;
  align-items: center;
  gap: 9px;
  padding: 9px 11px;
  border: 0;
  border-bottom: 1px solid #ded9d0;
  border-radius: 0;
  background: transparent;
  color: var(--control-ink);
  text-align: left;
}

.office-task:last-child {
  border-bottom: 0;
}

.office-task > i {
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border: 1px solid #bdb7ad;
  color: #676159;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

.office-task.critical > i {
  border-color: var(--control-accent);
  background: var(--control-accent);
  color: #fff;
}

.office-task.ready > i {
  border-color: var(--control-good);
  color: var(--control-good);
}

.office-task > span {
  display: grid;
  min-width: 0;
  gap: 2px;
}

.office-task em,
.office-task small {
  overflow: hidden;
  color: #777168;
  font-size: 12px;
  font-style: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.office-task em {
  color: var(--control-accent);
  font-weight: 600;
}

.office-task strong {
  overflow: hidden;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.office-task > b {
  color: #3f3b36;
  font-size: 12px;
}

#officeWeeklyPlan header strong {
  display: block;
  margin-top: 2px;
  font-size: 15px;
}

#officeWeeklyPlan header em {
  padding: 4px 6px;
  background: #ece8df;
  color: #4f4a44;
}

.office-plan-facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.office-plan-facts > div {
  display: grid;
  gap: 3px;
  min-width: 0;
  padding: 10px 11px;
  border-right: 1px solid #ded9d0;
}

.office-plan-facts > div:last-child {
  border-right: 0;
}

.office-plan-facts span,
.office-plan-risk span,
.office-plan-controls > div > span {
  color: #7a746c;
  font-size: 12px;
  font-weight: 850;
}

.office-plan-facts strong {
  font-size: 13px;
}

.office-plan-facts em {
  color: #777168;
  font-size: 12px;
  font-style: normal;
  line-height: 1.45;
}

.office-plan-risk {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 11px;
  border-top: 1px solid #ded9d0;
  background: #f0ede6;
}

.office-plan-risk strong {
  color: #4e4943;
  font-size: 12px;
}

.office-plan-controls {
  display: grid;
  gap: 9px;
  padding: 11px;
  border-top: 1px solid #d8d3ca;
}

.office-plan-controls > div {
  display: grid;
  grid-template-columns: 68px minmax(0, 1fr);
  align-items: center;
  gap: 8px;
}

.office-segmented {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 3px;
}

.office-segmented button {
  min-width: 0;
  min-height: 36px;
  padding: 0 5px;
  border: 1px solid #c8c2b8;
  border-radius: 2px;
  background: #efebe4;
  color: #5e5851;
  font-size: 12px;
  font-weight: 850;
}

.office-segmented button.active {
  border-color: var(--control-ink);
  background: var(--control-ink);
  color: #fff;
}

.manager-primary-nav {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 12;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  max-width: 480px;
  margin: 0 auto;
  padding: 0 10px env(safe-area-inset-bottom);
  border-top: 1px solid #c7c2b9;
  background: rgba(246,244,239,.98);
}

.manager-primary-nav[hidden] {
  display: none;
}

.manager-primary-nav button {
  position: relative;
  display: grid;
  min-height: 62px;
  place-content: center;
  justify-items: center;
  gap: 4px;
  border: 0;
  background: transparent;
  color: #777168;
  font-size: 12px;
  font-weight: 600;
}

.manager-primary-nav button::before {
  position: absolute;
  top: 0;
  right: 24%;
  left: 24%;
  height: 3px;
  background: transparent;
  content: "";
}

.manager-primary-nav button.active {
  color: var(--control-ink);
}

.manager-primary-nav button.active::before {
  background: var(--control-accent);
}

.manager-primary-nav svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

.season-context-tabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 4px;
}

.app-shell[data-season-tab="players"] .season-context-tabs,
.app-shell[data-season-tab="league"] .season-context-tabs,
.app-shell[data-season-tab="draft"] .season-context-tabs,
.app-shell[data-season-tab="summary"] .season-context-tabs {
  display: none;
}

.trade-strategy-board {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  margin-top: 9px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.14);
}

.trade-strategy-board article {
  min-width: 0;
  padding: 9px;
  background: #282523;
}

.trade-strategy-board span,
.trade-strategy-board p {
  display: block;
  margin: 0;
  color: rgba(255,255,255,.58);
  font-size: 12px;
  line-height: 1.4;
}

.trade-strategy-board strong {
  display: block;
  margin: 3px 0;
  color: #fff;
  font-size: 13px;
}

.simulation-analysis {
  margin-top: 10px;
  padding-top: 9px;
  border-top: 1px solid rgba(255,255,255,.13);
}

.simulation-analysis > b {
  display: block;
  margin-bottom: 7px;
  color: #ff9a76;
  font-size: 12px;
  letter-spacing: .1em;
}

.simulation-analysis > div {
  display: grid;
  gap: 1px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.11);
  background: rgba(255,255,255,.11);
}

.simulation-insight {
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr);
  gap: 3px 8px;
  padding: 8px;
  background: #262320;
}

.simulation-insight span {
  grid-row: 1 / 3;
  align-self: start;
  padding-left: 6px;
  border-left: 2px solid #b8a99b;
  color: #b8a99b;
  font-size: 12px;
  font-weight: 600;
}

.simulation-insight.positive span {
  border-left-color: var(--control-good);
  color: #6dcc98;
}

.simulation-insight.negative span,
.simulation-insight.warning span {
  border-left-color: var(--control-accent);
  color: #ff8a62;
}

.simulation-insight strong {
  color: #fff;
  font-size: 12px;
}

.simulation-insight em {
  color: rgba(255,255,255,.62);
  font-size: 12px;
  font-style: normal;
  line-height: 1.4;
}

@media (max-width: 380px) {
  .office-plan-facts {
    grid-template-columns: 1fr;
  }

  .office-plan-facts > div {
    border-right: 0;
    border-bottom: 1px solid #ded9d0;
  }

  .office-plan-facts > div:last-child {
    border-bottom: 0;
  }

  .office-plan-controls > div {
    grid-template-columns: 1fr;
  }
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background:
    linear-gradient(180deg, #33271f 0, #f1ebdd 270px),
    var(--bg);
  color: var(--ink);
}

button, input {
  font: inherit;
}

button {
  border: 0;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

.intro-screen {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 28px;
  background:
    radial-gradient(circle at 50% 18%, rgba(182,50,44,.38), transparent 32%),
    linear-gradient(180deg, #201711 0, #3a291f 52%, #f1ebdd 100%);
  color: #fff;
  transition: opacity .45s ease, transform .45s ease, visibility .45s ease;
}

.intro-screen.hidden {
  opacity: 0;
  transform: scale(1.02);
  visibility: hidden;
  pointer-events: none;
}

.intro-court {
  width: min(100%, 420px);
  padding: 28px 22px;
  border: 1px solid rgba(255,255,255,.22);
  border-radius: 10px;
  background:
    linear-gradient(180deg, rgba(255,255,255,.14), rgba(255,255,255,.04)),
    rgba(37,27,20,.78);
  box-shadow: 0 24px 80px rgba(0,0,0,.34);
  text-align: center;
  animation: introRise .7s ease both;
}

.intro-court h1 {
  margin-top: 10px;
  font-size: 34px;
}

.intro-court h2 {
  max-width: 320px;
  margin: 12px auto 22px;
  color: rgba(255,255,255,.86);
  font-size: 22px;
}

@keyframes introRise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.app-shell {
  max-width: 480px;
  min-height: 100svh;
  max-height: 100svh;
  margin: 0 auto;
  overflow: hidden;
  padding: 10px 14px 76px;
  background:
    radial-gradient(circle at 50% 62%, rgba(182,50,44,.12), transparent 22%),
    linear-gradient(180deg, rgba(255,255,255,0) 0, rgba(42,36,31,.06) 52%, rgba(42,36,31,.14) 100%);
}

main {
  height: calc(100svh - 64px - 76px);
  overflow: auto;
  padding-bottom: 8px;
  scrollbar-width: none;
}

main::-webkit-scrollbar {
  display: none;
}

.app-shell[data-mode="season"] .hero-panel,
.app-shell[data-mode="season"] .franchise-hub,
.app-shell[data-mode="season"] .war-room,
.app-shell[data-mode="season"] .immersion-deck,
.app-shell[data-mode="season"] .team-picker,
.app-shell[data-mode="season"] .team-dashboard,
.app-shell[data-mode="season"] .history-card {
  display: none;
}

.app-shell[data-mode="team"] .hero-panel,
.app-shell[data-mode="team"] .season-card,
.app-shell[data-mode="team"] .war-room,
.app-shell[data-mode="team"] .immersion-deck,
.app-shell[data-mode="team"] .team-picker,
.app-shell[data-mode="team"] .history-card {
  display: none;
}

.app-shell[data-mode="team"] .team-dashboard {
  display: none;
}

.legend-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 16;
  background: rgba(21,15,11,.68);
  backdrop-filter: blur(8px);
}

.legend-modal {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 17;
  display: flex;
  max-width: 480px;
  max-height: 92svh;
  margin: 0 auto;
  padding: 12px 14px calc(14px + env(safe-area-inset-bottom));
  border-radius: 14px 14px 0 0;
  background:
    radial-gradient(circle at 50% 0, rgba(245,193,90,.28), transparent 34%),
    linear-gradient(180deg, #2d2119, #f6efe8 48%);
  box-shadow: 0 -24px 80px rgba(0,0,0,.34);
  color: #fff;
  transform: translateY(105%);
  transition: transform .24s ease;
  flex-direction: column;
}

.legend-modal.open {
  transform: translateY(0);
}

.legend-modal .modal-head {
  border-bottom-color: rgba(255,255,255,.18);
}

.legend-modal .modal-head .icon-button {
  background: rgba(255,255,255,.16);
  color: #fff;
}

.legend-body {
  display: grid;
  gap: 12px;
  overflow: auto;
  padding-top: 12px;
  color: var(--ink);
}

.legend-pack-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.legend-pack-info div,
.legend-command,
.legend-empty,
.legend-card {
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 8px;
  background: rgba(255,255,255,.9);
}

.legend-pack-info div {
  padding: 10px;
}

.legend-pack-info span,
.legend-command label,
.legend-hint,
.legend-empty span {
  display: block;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.legend-pack-info strong {
  display: block;
  margin-top: 3px;
  font-size: 17px;
}

.legend-command {
  display: grid;
  gap: 8px;
  padding: 10px;
}

.legend-command input {
  width: 100%;
  height: 44px;
  padding: 0 12px;
  border: 1px solid var(--line);
  border-radius: 8px;
  outline: 0;
  font-weight: 600;
}

.legend-command .primary-button {
  min-height: 42px;
}

.legend-command .primary-button:disabled {
  background: #c6c9cf;
  color: #fff;
}

.legend-result {
  min-height: 240px;
}

.legend-empty {
  display: grid;
  min-height: 220px;
  place-items: center;
  padding: 18px;
  text-align: center;
}

.legend-empty strong {
  font-size: 22px;
}

.legend-card {
  position: relative;
  overflow: hidden;
  padding: 14px;
  text-align: center;
  box-shadow: 0 18px 38px rgba(25,23,21,.18);
  isolation: isolate;
}

.legend-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 18%, rgba(255,255,255,.42), transparent 24%),
    linear-gradient(135deg, rgba(255,255,255,.2), transparent 45%);
  pointer-events: none;
}

.legend-card::after {
  content: "";
  position: absolute;
  top: -45%;
  bottom: -45%;
  left: -75%;
  width: 58%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.58), transparent);
  transform: rotate(18deg);
  animation: legendSweep 2.8s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}

.legend-card.mythic { background: linear-gradient(145deg, #2d1d13, #f4c15b); }
.legend-card.legendary { background: linear-gradient(145deg, #5f2416, #f47b42); }
.legend-card.epic { background: linear-gradient(145deg, #22334d, #78a9ff); }
.legend-card.classic { background: linear-gradient(145deg, #243b32, #8ad6a7); }

.legend-card.mythic {
  box-shadow: 0 0 0 1px rgba(245,193,90,.5), 0 18px 42px rgba(245,193,90,.28), 0 0 42px rgba(245,193,90,.34);
}

.legend-card.legendary {
  box-shadow: 0 0 0 1px rgba(244,123,66,.46), 0 18px 42px rgba(182,50,44,.28), 0 0 34px rgba(244,123,66,.28);
}

.legend-card.epic {
  box-shadow: 0 0 0 1px rgba(120,169,255,.42), 0 18px 42px rgba(78,120,220,.22), 0 0 32px rgba(120,169,255,.24);
}

.legend-card-top,
.legend-card h3,
.legend-card p,
.legend-card small,
.legend-avatar-shell,
.legend-avatar {
  position: relative;
  z-index: 1;
}

.legend-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-weight: 600;
}

.legend-card-top span {
  padding: 5px 8px;
  border-radius: 999px;
  background: rgba(0,0,0,.22);
}

.legend-card-top strong {
  font-size: 28px;
}

.legend-avatar-shell {
  width: 118px;
  margin: 12px auto;
}

.legend-avatar {
  width: 106px;
  height: 106px;
  margin: 0 auto;
  border: 4px solid rgba(255,255,255,.55);
  border-radius: 50%;
  background-position: center top;
  background-size: cover;
  box-shadow: 0 10px 24px rgba(0,0,0,.22), 0 0 22px rgba(255,255,255,.38);
  animation: legendPulse 2.4s ease-in-out infinite;
}

.legend-jersey {
  position: absolute;
  right: 0;
  bottom: 2px;
  min-width: 42px;
  padding: 5px 8px;
  border: 2px solid rgba(255,255,255,.8);
  border-radius: 999px;
  color: #211912;
  background: linear-gradient(135deg, #fff, #f5c15a);
  box-shadow: 0 8px 18px rgba(0,0,0,.22), 0 0 16px rgba(245,193,90,.62);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

.legend-card.mythic .legend-avatar {
  box-shadow: 0 10px 24px rgba(0,0,0,.24), 0 0 0 5px rgba(245,193,90,.18), 0 0 34px rgba(245,193,90,.7);
}

.legend-card.legendary .legend-avatar {
  box-shadow: 0 10px 24px rgba(0,0,0,.24), 0 0 0 5px rgba(244,123,66,.16), 0 0 28px rgba(244,123,66,.62);
}

.legend-card.epic .legend-avatar {
  box-shadow: 0 10px 24px rgba(0,0,0,.24), 0 0 0 5px rgba(120,169,255,.14), 0 0 24px rgba(120,169,255,.54);
}

.legend-card h3 {
  color: #fff;
  font-size: 22px;
}

.legend-card p,
.legend-card small {
  display: block;
  margin-top: 7px;
  color: rgba(255,255,255,.9);
  font-weight: 600;
}

@keyframes legendSweep {
  0% { transform: translateX(0) rotate(18deg); opacity: 0; }
  20% { opacity: .95; }
  58% { opacity: .35; }
  100% { transform: translateX(360%) rotate(18deg); opacity: 0; }
}

@keyframes legendPulse {
  0%, 100% { transform: scale(1); filter: saturate(1); }
  50% { transform: scale(1.035); filter: saturate(1.22); }
}

.app-shell[data-mode="trade"] #seasonCard {
  display: none;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top) 0 10px;
  color: #fff;
  background: color-mix(in srgb, #2c211b 88%, transparent);
  backdrop-filter: blur(12px);
}

h1, h2, h3, p {
  margin: 0;
}

h1 {
  font-size: 21px;
  line-height: 1.2;
}

h2 {
  margin-top: 6px;
  font-size: 20px;
  line-height: 1.28;
  letter-spacing: 0;
}

h3 {
  font-size: 16px;
  line-height: 1.25;
}

.eyebrow {
  color: #f37a45;
  font-size: 12px;
  font-weight: 700;
}

.muted {
  color: var(--muted);
  font-size: 12px;
}

.icon-button {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255,255,255,.16);
  color: #fff;
  font-size: 19px;
  box-shadow: 0 1px 0 rgba(0,0,0,.05);
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-panel,
.trade-column,
.verdict-card,
.result-card,
.roster-card,
.decision-card,
.season-card,
.history-card {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--card);
  box-shadow: 0 8px 22px rgba(20, 20, 20, .04);
}

.hero-panel {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 14px;
  padding: 12px;
  border: 1px solid rgba(255,255,255,.24);
  background:
    linear-gradient(135deg, rgba(255,255,255,.16), rgba(255,255,255,.04)),
    #3a2a20;
  color: #fff;
  box-shadow: 0 16px 36px rgba(0,0,0,.18);
}

.hero-panel .muted {
  color: rgba(255,255,255,.72);
}

.hero-panel h2 {
  max-width: 260px;
  font-size: 18px;
}

.primary-button,
.small-button,
.secondary-button {
  border-radius: 8px;
  font-weight: 700;
}

.primary-button,
.small-button {
  background: var(--brand);
  color: #fff;
}

.primary-button {
  min-height: 48px;
  padding: 0 16px;
}

.secondary-button {
  min-height: 44px;
  padding: 0 16px;
  border: 1px solid var(--brand);
  background: #f6f0e4;
  color: var(--brand-dark);
}

.secondary-button:disabled {
  border-color: var(--line);
  background: #f0f1f3;
  color: #a0a3aa;
  cursor: not-allowed;
}

.force-button {
  grid-column: 1 / -1;
  min-height: 42px;
  border-radius: 8px;
  background: #191715;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 10px 20px rgba(25, 23, 21, .18);
}

.small-button {
  min-width: 70px;
  height: 34px;
  padding: 0 10px;
  font-size: 13px;
}

.team-picker {
  display: none;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
  margin: 12px 0;
}

.team-select {
  display: flex;
  min-width: 0;
  height: 58px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(255,255,255,.94);
  color: var(--ink);
  font-weight: 600;
}

.team-select.active {
  border-color: var(--brand);
  box-shadow: inset 0 0 0 1px var(--brand);
}

.mini-logo {
  width: 30px;
  height: 30px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #f0f0f0 center / contain no-repeat;
}

.versus {
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.trade-board {
  display: grid;
  gap: 12px;
}

.franchise-hub {
  display: none;
  gap: 8px;
}

.app-shell[data-mode="team"] .franchise-hub {
  display: grid;
}

.franchise-hero {
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  min-height: 104px;
  padding: 16px 108px 16px 14px;
  border: 1px solid rgba(255,255,255,.22);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(255,255,255,.14), rgba(255,255,255,.04)),
    #2f2822;
  color: #fff;
  box-shadow: 0 16px 36px rgba(0,0,0,.18);
}

.micro-action {
  position: absolute;
  top: 12px;
  right: 12px;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(255,250,244,.94);
  color: var(--brand-dark);
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 8px 22px rgba(0,0,0,.14);
}

.franchise-logo {
  width: 58px;
  height: 58px;
  margin: 0;
}

.franchise-hero h2 {
  color: #fff;
  font-size: 28px;
}

.franchise-hero p:not(.eyebrow) {
  margin-top: 4px;
  color: rgba(255,255,255,.72);
  font-size: 12px;
  line-height: 1.35;
}

.play-menu {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 14px 12px;
  border: 1px solid rgba(217, 74, 30, .22);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(182,50,44,.12), rgba(255,250,244,.96)),
    #f6f0e4;
  box-shadow: 0 12px 28px rgba(95, 63, 42, .08);
}

.play-menu span {
  display: block;
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
}

.play-menu strong {
  display: block;
  overflow: hidden;
  margin-top: 3px;
  color: var(--ink);
  font-size: 18px;
  line-height: 1.15;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.play-menu p {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.35;
}

.play-menu .primary-button {
  min-width: 108px;
  min-height: 52px;
  font-weight: 600;
}

.franchise-kpis {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.franchise-kpis div,
.franchise-grid article {
  min-width: 0;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(255,253,249,.94);
}

.franchise-kpis span {
  display: block;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.franchise-kpis strong {
  display: block;
  margin-top: 4px;
  color: var(--ink);
  font-size: 13px;
  line-height: 1.2;
}

.franchise-actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.franchise-actions .primary-button,
.franchise-actions .secondary-button {
  min-height: 40px;
  padding: 0 8px;
  font-size: 13px;
}

.franchise-grid,
.season-team-lab {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.focus-list {
  display: grid;
  gap: 6px;
  margin-top: 8px;
}

.focus-row,
.directive-card {
  padding: 8px;
  border-radius: 8px;
  background: #fff7ef;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.35;
}

.focus-row strong {
  display: block;
  overflow: hidden;
  color: var(--ink);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
}

.focus-row span {
  display: block;
  margin-top: 2px;
}

.focus-row.win {
  background: #edf8f1;
}

.focus-row.loss {
  background: #fff1ef;
}

.medical-report-list,
.retirement-list {
  display: grid;
  gap: 6px;
  margin-top: 8px;
}

.medical-clear,
.medical-row,
.retirement-row {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) auto;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 6px 8px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.medical-clear {
  border-color: #cfe7d7;
  background: #f0f8f3;
}

.medical-clear > span {
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border-radius: 50%;
  background: var(--good);
  color: #fff;
  font-weight: 600;
}

.medical-row .headshot,
.retirement-row .headshot {
  width: 34px;
  height: 34px;
}

.medical-clear div,
.medical-row div,
.retirement-row div {
  display: grid;
  min-width: 0;
}

.medical-clear strong,
.medical-row strong,
.retirement-row strong {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
}

.medical-clear em,
.medical-row em,
.retirement-row em {
  overflow: hidden;
  color: var(--muted);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  font-style: normal;
}

.medical-row > b {
  color: var(--bad);
  font-size: 12px;
}

.retirement-row > b {
  color: var(--muted);
  font-size: 12px;
}

.rotation-row.unavailable {
  border-color: #efc9c5;
  background: #fff5f3;
}

.rotation-row button:disabled {
  opacity: .48;
  cursor: default;
}

.team-dashboard {
  display: grid;
  gap: 12px;
  margin-top: 12px;
}

.compact-only {
  display: none;
}

.war-room {
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  padding: 12px;
  border: 1px solid rgba(255,255,255,.24);
  border-radius: 8px;
  background:
    linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02)),
    var(--court);
  color: #fff;
  box-shadow: 0 18px 38px rgba(0,0,0,.2);
}

.war-room::before {
  content: "";
  position: absolute;
  inset: 54px -30px auto;
  height: 1px;
  background: rgba(255,255,255,.15);
}

.war-room-top,
.war-room-actions,
.club-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.war-room h3,
.club-panel h3 {
  color: #fff;
}

.status-pill {
  flex: 0 0 auto;
  padding: 6px 9px;
  border-radius: 999px;
  background: rgba(182,50,44,.16);
  color: #ffb08b;
  font-size: 12px;
  font-weight: 600;
}

.matchup-stage {
  display: grid;
  grid-template-columns: 1fr 34px 1fr;
  gap: 10px;
  align-items: center;
  margin-top: 12px;
}

.club-panel {
  position: relative;
  overflow: hidden;
  min-height: 116px;
  padding: 12px;
  border: 1px solid rgba(255,255,255,.16);
  border-radius: 8px;
  background: rgba(255,255,255,.08);
}

.panel-action {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  min-height: 30px;
  padding: 0 10px;
  border-radius: 999px;
  background: rgba(255,250,244,.92);
  color: var(--brand-dark);
  font-size: 12px;
  font-weight: 600;
}

.club-bg {
  position: absolute;
  inset: 0;
  opacity: .23;
}

.club-logo {
  position: relative;
  display: block;
  width: 46px;
  height: 46px;
  margin-bottom: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,.9) center / contain no-repeat;
}

.club-panel p,
.club-panel h3,
.club-meta {
  position: relative;
}

.club-meta {
  margin-top: 10px;
  color: rgba(255,255,255,.74);
  font-size: 12px;
  font-weight: 600;
}

.trade-line {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 8px;
  justify-items: center;
  color: #ffb08b;
  font-size: 12px;
  font-weight: 600;
}

.trade-line span {
  width: 1px;
  height: 22px;
  background: rgba(255,255,255,.22);
}

.war-room-actions {
  margin-top: 12px;
}

.war-room-actions .primary-button,
.war-room-actions .secondary-button {
  flex: 1;
  min-height: 40px;
  padding: 0 8px;
  font-size: 13px;
}

.participant-rail {
  display: flex;
  gap: 8px;
  margin-top: 10px;
  overflow-x: auto;
}

.immersion-deck {
  position: relative;
  min-height: calc(100svh - 560px);
  margin-top: 10px;
  overflow: hidden;
  border: 1px solid rgba(58,42,32,.1);
  border-radius: 8px;
  background:
    linear-gradient(180deg, rgba(255,250,244,.78), rgba(255,250,244,.2)),
    rgba(255,255,255,.24);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.55);
}

.court-render {
  position: absolute;
  inset: 0;
  opacity: .55;
  pointer-events: none;
}

.court-render::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 18px;
  bottom: 18px;
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(182,50,44,.28), transparent);
}

.court-circle {
  position: absolute;
  left: 50%;
  top: 42%;
  width: 150px;
  height: 150px;
  border: 1px solid rgba(182,50,44,.22);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.court-line {
  position: absolute;
  bottom: 22px;
  width: 118px;
  height: 62px;
  border: 1px solid rgba(42,36,31,.12);
  border-bottom: 0;
  border-radius: 70px 70px 0 0;
}

.court-line-left {
  left: 22px;
}

.court-line-right {
  right: 22px;
}

.manager-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  padding: 10px;
}

.manager-card {
  min-height: 96px;
  min-width: 0;
  padding: 8px;
  border: 1px solid rgba(231,222,215,.9);
  border-radius: 8px;
  background: rgba(255,253,249,.86);
  box-shadow: 0 10px 24px rgba(42,36,31,.06);
}

.core-list {
  display: grid;
  gap: 6px;
  margin-top: 6px;
}

.core-player {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr) auto;
  align-items: center;
  gap: 6px;
  min-height: 36px;
}

.core-player .headshot {
  width: 28px;
  height: 28px;
}

.core-player strong {
  display: block;
  overflow: visible;
  color: var(--ink);
  font-size: 12px;
  line-height: 1.15;
  overflow-wrap: anywhere;
  white-space: normal;
}

.core-player span {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.1;
}

.core-salary {
  color: var(--brand-dark);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.manager-card h3 {
  margin-top: 5px;
  color: var(--ink);
  font-size: 15px;
}

.manager-card p:not(.eyebrow) {
  margin-top: 6px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.35;
}

.ticker-strip {
  position: absolute;
  right: 12px;
  bottom: 10px;
  left: 12px;
  min-height: 34px;
  padding: 8px 10px;
  border: 1px solid rgba(182,50,44,.18);
  border-radius: 999px;
  background: rgba(42,36,31,.82);
  color: rgba(255,255,255,.86);
  font-size: 12px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.participant-chip {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 6px;
  min-height: 34px;
  padding: 5px 8px;
  border: 1px solid rgba(255,255,255,.16);
  border-radius: 999px;
  background: rgba(255,255,255,.08);
  color: rgba(255,255,255,.88);
  font-size: 12px;
  font-weight: 600;
}

.participant-chip .mini-logo {
  width: 22px;
  height: 22px;
}

.trade-column {
  padding: 12px;
}

.roster-card {
  padding: 14px;
  background: var(--panel);
}

.column-head,
.section-title,
.salary-row,
.asset-item,
.hot-item,
.sheet-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.asset-list {
  display: grid;
  gap: 8px;
  min-height: 52px;
  padding: 12px 0;
}

.cap-summary {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 12px;
}

.cap-stat {
  min-height: 58px;
  padding: 10px;
  border-radius: 8px;
  background: #f7f0e9;
}

.cap-stat span {
  display: block;
  color: var(--muted);
  font-size: 12px;
}

.cap-stat strong {
  display: block;
  margin-top: 4px;
  font-size: 15px;
}

.cap-stat.warning strong {
  color: var(--warn);
}

.cap-stat.danger strong {
  color: var(--bad);
}

.roster-list {
  display: grid;
  gap: 8px;
  max-height: 220px;
  margin-top: 12px;
  overflow: auto;
}

.roster-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 9px;
  min-height: 54px;
  padding: 8px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fffdf9;
}

.legend-roster-row {
  border-color: rgba(217, 74, 30, .32);
  background: linear-gradient(135deg, #fff7ef, #fff);
  box-shadow: inset 3px 0 0 rgba(217, 74, 30, .62);
}

.roster-salary {
  color: var(--brand-dark);
  font-size: 13px;
  font-weight: 600;
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-size: 13px;
  border: 1px dashed var(--line);
  border-radius: 8px;
}

.asset-item {
  min-height: 54px;
  padding: 8px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.asset-main {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 9px;
}

.headshot {
  width: 38px;
  height: 38px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #eceef3 center / cover no-repeat;
}

.legend-headshot {
  border: 2px solid rgba(245,193,90,.75);
  box-shadow: 0 0 0 2px rgba(182,50,44,.12), 0 0 15px rgba(245,193,90,.58);
}

.asset-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
}

.ability-badge {
  display: inline-flex;
  align-items: center;
  min-height: 17px;
  margin-left: 4px;
  padding: 1px 5px;
  border: 1px solid rgba(217, 74, 30, .2);
  border-radius: 4px;
  background: #fff0e7;
  color: #a9341c;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  vertical-align: 1px;
  white-space: nowrap;
}

.ability-badge.ability-tier-elite {
  border-color: rgba(165, 122, 34, .38);
  background: #f7ebcf;
  color: #7b5513;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.48);
}

.ability-badge.ability-tier-core {
  border-color: rgba(183, 54, 43, .25);
  background: #fbe7e2;
  color: #942b22;
}

.ability-badge.ability-tier-rotation {
  border-color: rgba(82, 96, 75, .22);
  background: #edf0ea;
  color: #52604b;
}

.ability-badge.ability-tier-depth {
  border-color: rgba(105, 98, 91, .2);
  background: #f0eeeb;
  color: #69625b;
}

.ability-badge.compact {
  min-height: 14px;
  padding: 1px 3px;
  font-size: 7px;
}

.asset-meta {
  color: var(--muted);
  font-size: 12px;
}

.asset-money {
  flex: 0 0 auto;
  color: var(--brand-dark);
  font-size: 13px;
  font-weight: 600;
}

.asset-action {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 8px;
}

.add-badge {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border-radius: 50%;
  background: var(--brand);
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  box-shadow: 0 6px 14px rgba(182,50,44,.24);
}

.remove {
  width: 28px;
  height: 28px;
  border-radius: 7px;
  background: #f2f2f4;
  color: var(--muted);
}

.salary-row {
  padding-top: 10px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 13px;
}

.salary-row strong {
  color: var(--ink);
  font-size: 15px;
}

.verdict-card,
.result-card,
.poll-card,
.hot-card,
.roster-card,
.decision-card,
.season-card,
.history-card {
  margin-top: 12px;
  padding: 14px;
}

.trade-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 14;
  background: rgba(21,15,11,.62);
  backdrop-filter: blur(6px);
}

.trade-modal {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  max-width: 480px;
  max-height: 94svh;
  margin: 0 auto;
  padding: 12px 14px calc(14px + env(safe-area-inset-bottom));
  border-radius: 14px 14px 0 0;
  background:
    linear-gradient(180deg, #f6f0e4, #f1ebdd);
  box-shadow: 0 -20px 70px rgba(0,0,0,.28);
  transform: translateY(105%);
  transition: transform .22s ease;
  flex-direction: column;
}

.trade-modal.open {
  transform: translateY(0);
}

.modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--line);
}

.modal-head .icon-button {
  background: #efe5dc;
  color: var(--ink);
}

.trade-modal-body {
  overflow: auto;
  padding-bottom: 4px;
}

.offer-intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
  padding: 12px;
  border: 1px solid #ead8cc;
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(182,50,44,.12), rgba(255,255,255,.62)),
    #f6f0e4;
}

.verdict-card {
  border-left: 4px solid var(--warn);
}

.verdict-card.good { border-left-color: var(--good); }
.verdict-card.bad { border-left-color: var(--bad); }

#verdictText {
  margin-top: 8px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.45;
}

.result-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 12px;
}

.result-assets {
  min-height: 78px;
  padding: 10px;
  border-radius: 8px;
  background: #f7f0e9;
  font-size: 13px;
  line-height: 1.5;
}

.score-strip {
  display: flex;
  gap: 7px;
  margin-top: 12px;
  overflow-x: auto;
}

.trade-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 14px;
}

.decision-list {
  display: grid;
  gap: 10px;
  margin-top: 12px;
}

.inquiry-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(20, 15, 11, .72);
  backdrop-filter: blur(5px);
}

.inquiry-modal {
  position: fixed;
  top: 50%;
  right: 18px;
  left: 18px;
  z-index: 41;
  display: grid;
  max-width: 430px;
  max-height: calc(100svh - 24px);
  margin: 0 auto;
  padding: 16px;
  border: 1px solid rgba(255, 112, 64, .42);
  border-radius: 8px;
  background: #fdfbf7;
  box-shadow: 0 28px 80px rgba(0, 0, 0, .38);
  opacity: 0;
  transform: translateY(calc(-50% + 18px));
  pointer-events: none;
  transition: opacity .18s ease, transform .18s ease;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.inquiry-modal.open {
  opacity: 1;
  transform: translateY(-50%);
  pointer-events: auto;
}

.inquiry-callbar {
  display: flex;
  align-items: center;
  gap: 7px;
  color: var(--brand-dark);
  font-size: 12px;
  font-weight: 600;
}

.inquiry-live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--brand);
  box-shadow: 0 0 0 5px rgba(228, 71, 27, .12);
}

.inquiry-modal-head {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  margin-top: 14px;
}

.inquiry-team-logo {
  width: 56px;
  height: 56px;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: #fff center / 82% no-repeat;
}

.inquiry-modal-head p,
.inquiry-modal-head h3 {
  overflow-wrap: anywhere;
}

.inquiry-modal-head p {
  color: var(--muted);
  font-size: 12px;
}

.inquiry-modal-head h3 {
  margin-top: 2px;
  font-size: 21px;
}

.inquiry-message,
.inquiry-context {
  margin-top: 12px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
}

.inquiry-offer-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 24px minmax(0, 1fr);
  align-items: stretch;
  gap: 8px;
  margin-top: 14px;
}

.inquiry-offer-grid article {
  min-width: 0;
  padding: 11px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #f6f2ed;
}

.inquiry-offer-grid > b {
  align-self: center;
  color: var(--brand);
  text-align: center;
}

.inquiry-offer-grid span,
.inquiry-offer-grid em {
  display: block;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.inquiry-offer-grid strong {
  display: block;
  min-height: 42px;
  margin: 5px 0;
  font-size: 14px;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.inquiry-actions {
  position: sticky;
  bottom: -16px;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 10px;
  margin-top: 16px;
  padding: 10px 0 calc(16px + env(safe-area-inset-bottom));
  background: #fdfbf7;
}

.inquiry-actions .primary-button:last-child {
  grid-column: 1 / -1;
}

.decision-row {
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fffdf9;
}

.decision-row.accepted {
  border-color: color-mix(in srgb, var(--good) 36%, var(--line));
}

.decision-row.rejected {
  border-color: color-mix(in srgb, var(--bad) 36%, var(--line));
}

.decision-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.decision-status {
  flex: 0 0 auto;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.decision-row.accepted .decision-status {
  background: #e8f5ee;
  color: var(--good);
}

.decision-row.rejected .decision-status {
  background: #fbe9e9;
  color: var(--bad);
}

.decision-reasons {
  margin: 8px 0 0;
  padding-left: 18px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.45;
}

.manager-quote {
  margin-top: 9px;
  padding: 9px 10px;
  border-radius: 8px;
  background: #fff2ed;
  color: var(--brand-dark);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
}

.force-trade-note {
  display: grid;
  gap: 4px;
  padding: 10px;
  border: 1px solid rgba(217, 74, 30, .28);
  border-radius: 8px;
  background: #fff4ed;
  color: var(--brand-dark);
  font-size: 12px;
  line-height: 1.35;
}

.force-trade-note strong {
  color: var(--ink);
  font-size: 14px;
}

.season-card {
  background:
    linear-gradient(135deg, rgba(182,50,44,.14), rgba(255,255,255,.9) 34%, rgba(255,250,244,.96)),
    var(--card);
  box-shadow: 0 18px 42px rgba(35, 28, 22, .12);
}

.app-shell[data-mode="season"] .season-card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  margin-top: 0;
  gap: 8px;
}

.app-shell[data-mode="season"] .section-title {
  order: 0;
}

.app-shell[data-mode="season"] .season-summary {
  order: 1;
}

.app-shell[data-mode="season"] .season-prime-board {
  order: 2;
}

.app-shell[data-mode="season"] .season-subtabs { order: 3; }
.app-shell[data-mode="season"] .season-tab-panel { order: 4; }
.app-shell[data-mode="season"] .season-actions { order: 5; }
.app-shell[data-mode="season"] .latest-game {
  display: none;
  order: 6;
}

.season-summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-top: 8px;
}

.season-summary div {
  min-width: 0;
  padding: 10px 8px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #f6f0e4;
}

.season-summary span,
.mini-title {
  display: block;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.season-summary strong {
  display: block;
  margin-top: 3px;
  color: var(--ink);
  font-size: 16px;
}

.season-prime-board {
  display: grid;
  gap: 8px;
  padding: 10px;
  border: 1px solid rgba(217, 74, 30, .26);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(47,41,35,.98), rgba(63,48,38,.94)),
    #2f2923;
  color: #fff;
  box-shadow: 0 16px 32px rgba(47, 41, 35, .18);
}

.app-shell[data-mode="season"]:not([data-season-tab="overview"]) .season-summary {
  gap: 4px;
  margin-top: 4px;
}

.app-shell[data-mode="season"]:not([data-season-tab="overview"]) .season-summary div {
  padding: 7px 6px;
}

.app-shell[data-mode="season"]:not([data-season-tab="overview"]) .season-prime-board {
  gap: 0;
  padding: 8px 10px;
  box-shadow: none;
}

.app-shell[data-mode="season"]:not([data-season-tab="overview"]) .prime-head {
  padding-bottom: 0;
  border-bottom: 0;
}

.app-shell[data-mode="season"]:not([data-season-tab="overview"]) .prime-head span {
  display: none;
}

.app-shell[data-mode="season"]:not([data-season-tab="overview"]) .prime-head strong {
  font-size: 14px;
  -webkit-line-clamp: 1;
}

.app-shell[data-mode="season"]:not([data-season-tab="overview"]) .prime-grid {
  display: none;
}

.prime-head {
  display: grid;
  gap: 4px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255,255,255,.12);
}

.prime-head span,
.prime-grid span {
  color: #ff895d;
  font-size: 12px;
  font-weight: 600;
}

.prime-head strong {
  display: -webkit-box;
  overflow: hidden;
  color: #fff;
  font-size: 16px;
  line-height: 1.22;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.prime-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7px;
}

.prime-grid article {
  min-width: 0;
  padding: 9px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 8px;
  background: rgba(255,255,255,.07);
}

.prime-grid strong,
.prime-grid em {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.prime-grid strong {
  margin-top: 3px;
  color: #fff;
  font-size: 13px;
  line-height: 1.22;
  white-space: nowrap;
}

.prime-grid em {
  display: -webkit-box;
  margin-top: 3px;
  color: rgba(255,255,255,.76);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.season-subtabs {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding: 2px 0 4px;
  scrollbar-width: none;
}

.season-subtabs::-webkit-scrollbar {
  display: none;
}

.season-subtabs button {
  flex: 0 0 auto;
  min-width: 58px;
  min-height: 34px;
  padding: 0 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255,255,255,.82);
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.season-subtabs button.active {
  border-color: rgba(182,50,44,.42);
  background: var(--brand);
  color: #fff;
  box-shadow: 0 8px 18px rgba(182,50,44,.18);
}

.season-subtabs button:disabled {
  opacity: .42;
}

.season-tab-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 8px;
  min-height: 0;
}

.season-tab-panel > * {
  min-width: 0;
  max-width: 100%;
}

.season-tab-panel[hidden] {
  display: none;
}

.league-subtabs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 5px;
  padding: 5px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(255,255,255,.72);
}

.league-subtabs button {
  min-width: 0;
  min-height: 34px;
  padding: 0 5px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.league-subtabs button.active {
  background: #29231f;
  color: #fff;
}

.league-pane {
  display: grid;
  gap: 8px;
  min-width: 0;
}

.league-pane[hidden] {
  display: none;
}

.app-shell[data-mode="season"][data-season-tab="league"] .free-agent-list,
.app-shell[data-mode="season"][data-season-tab="league"] .retirement-list,
.app-shell[data-mode="season"][data-season-tab="league"] #seasonRecentList {
  max-height: none;
  overflow: visible;
  overscroll-behavior: auto;
}

.season-tab-panel article {
  min-width: 0;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(255,253,249,.94);
}

.season-career-panel,
.gm-briefing {
  margin-top: 0;
  border: 1px solid rgba(217, 74, 30, .16);
  border-radius: 8px;
  background: rgba(255, 250, 244, .86);
}

.season-career-panel {
  padding: 10px;
}

.gm-briefing {
  display: grid;
  gap: 10px;
  padding: 12px;
  background:
    linear-gradient(135deg, rgba(182,50,44,.14), rgba(255,250,244,.95)),
    #f6f0e4;
  box-shadow: 0 12px 28px rgba(95, 63, 42, .08);
}

.gm-brief-main span,
.pulse-grid span {
  display: block;
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
}

.gm-brief-main strong {
  display: block;
  margin-top: 3px;
  color: var(--ink);
  font-size: 20px;
  line-height: 1.1;
}

.gm-brief-main p {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.35;
}

.pulse-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}

.pulse-grid div {
  min-width: 0;
  padding: 8px 6px;
  border: 1px solid rgba(217, 74, 30, .12);
  border-radius: 8px;
  background: rgba(255,255,255,.72);
}

.pulse-grid strong {
  display: block;
  overflow: hidden;
  margin-top: 3px;
  color: var(--ink);
  font-size: 12px;
  line-height: 1.15;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.season-goal-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 4px;
}

.season-goal-head span {
  display: block;
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
}

.season-goal-head strong {
  display: block;
  color: var(--ink);
  font-size: 17px;
  line-height: 1.15;
}

.season-goal-head p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.35;
}

.directive-contract {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  margin-top: 9px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: #fff;
}

.directive-contract > div {
  display: grid;
  min-width: 0;
  gap: 2px;
  padding: 8px;
  border-right: 1px solid var(--line);
}

.directive-contract > div:last-child {
  border-right: 0;
}

.directive-contract span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 850;
}

.directive-contract strong {
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.directive-progress {
  height: 5px;
  margin-top: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: #e8e4df;
}

.directive-progress span {
  display: block;
  width: 0;
  height: 100%;
  border-radius: inherit;
  background: var(--brand);
  transition: width .25s ease;
}

.directive-footnote {
  margin: 7px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.35;
}

.season-actions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
  margin-top: 0;
}

.season-actions .primary-button,
.season-actions .secondary-button {
  min-height: 42px;
  padding: 0 8px;
  font-size: 13px;
}

.app-shell[data-mode="season"] .season-actions #nextGameBtn,
.app-shell[data-mode="season"] .season-actions #simWeekBtn {
  min-height: 48px;
  font-size: 15px;
}

.app-shell[data-mode="season"] #nextGameBtn {
  order: 1;
}

.app-shell[data-mode="season"] #simWeekBtn {
  order: 2;
}

.app-shell[data-mode="season"] #simSeasonBtn {
  order: 3;
}

.app-shell[data-mode="season"] #rotationBtn {
  order: 4;
}

.app-shell[data-mode="season"] #playerStatsBtn {
  order: 5;
}

.app-shell[data-mode="season"] #startSeasonBtn {
  order: 6;
  border-color: rgba(31,41,51,.12);
  color: var(--muted);
}

.season-actions #simPlayoffsBtn {
  grid-column: 1 / -1;
}

.latest-game {
  margin-top: 0;
  padding: 10px;
  border-radius: 8px;
  background: #2f2923;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.35;
}

.app-shell[data-mode="season"] .standings-list,
.app-shell[data-mode="season"] .awards-board,
.app-shell[data-mode="season"] .season-player-list,
.app-shell[data-mode="season"] .compact-feed {
  max-height: 270px;
}

.standings-list,
.awards-board,
.season-player-list,
.compact-feed {
  display: grid;
  gap: 6px;
  margin-top: 8px;
  max-height: 260px;
  overflow: auto;
  padding-right: 2px;
}

.standing-row,
.award-row,
.season-player-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 6px;
  color: var(--ink);
  font-size: 12px;
  line-height: 1.2;
}

.award-row {
  grid-template-columns: 1fr;
}

.season-player-row {
  grid-template-columns: 20px minmax(0, 1fr) auto;
}

.standing-row.mine {
  margin-bottom: 2px;
  padding: 7px 8px;
  border-radius: 8px;
  background: #fff1e8;
  color: var(--brand-dark);
}

.form-board {
  display: grid;
  gap: 7px;
}

.form-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
}

.form-head strong {
  color: var(--ink);
  font-size: 20px;
}

.form-head span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.form-dots {
  display: flex;
  gap: 5px;
}

.form-dots span {
  display: grid;
  width: 24px;
  height: 24px;
  place-items: center;
  border-radius: 999px;
  background: #f3efe9;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.form-dots .win {
  background: #1f8f54;
  color: #fff;
}

.form-dots .loss {
  background: #a13a20;
  color: #fff;
}

.form-list {
  display: grid;
  gap: 5px;
}

.form-list div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
}

.form-list strong,
.form-list span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.form-list strong {
  color: var(--ink);
  font-size: 12px;
}

.form-list span {
  flex: 0 0 auto;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.wire-row {
  display: grid;
  gap: 3px;
  padding: 8px;
  border: 1px solid rgba(217, 74, 30, .12);
  border-radius: 8px;
  background: #f6f0e4;
}

.wire-row span {
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
}

.wire-row strong {
  color: var(--ink);
  font-size: 12px;
  line-height: 1.35;
}

.wire-row em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
}

.wire-row.trade,
.wire-row.deadline {
  border-color: rgba(217, 74, 30, .28);
  background: #fff3eb;
}

.award-team {
  padding: 8px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #f6f0e4;
}

.finals-card {
  border-color: rgba(217, 74, 30, .28);
  background: linear-gradient(135deg, #fff4ed, #ffffff);
}

.finals-card strong {
  color: var(--brand-dark);
}

.award-lineup {
  display: grid;
  gap: 4px;
  margin-top: 6px;
}

.standing-row strong,
.award-row strong,
.season-player-row strong {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.standing-row span,
.award-row span,
.season-player-row span {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.25;
}

.rotation-row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 8px;
  padding: 9px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.rotation-main {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.rotation-controls {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 64px 1fr 46px 54px 46px;
  gap: 6px;
  align-items: center;
}

.rotation-controls button {
  min-width: 44px;
  min-height: 44px;
  border-radius: 8px;
  background: #f2f3f5;
  color: var(--ink);
  font-weight: 600;
}

.bottom-sheet .icon-button {
  flex: 0 0 44px;
  width: 44px;
  height: 44px;
  border: 1px solid var(--line);
  background: #f1ebe5;
  color: var(--ink);
  font-size: 24px;
}

.rotation-controls button.active {
  background: var(--brand);
  color: #fff;
}

.minute-value {
  text-align: center;
  color: var(--brand-dark);
  font-weight: 600;
}

.season-command {
  display: grid;
  gap: 9px;
  padding: 11px;
  border: 1px solid rgba(47, 41, 35, .14);
  border-radius: 8px;
  background: #2f2923;
  color: #fff;
}

.command-copy {
  display: grid;
  gap: 3px;
}

.command-copy span {
  color: #ff895d;
  font-size: 12px;
  font-weight: 600;
}

.command-copy strong {
  color: #fff;
  font-size: 15px;
  line-height: 1.25;
}

.command-copy em {
  color: rgba(255, 255, 255, .68);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
}

.season-command .season-actions {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.season-command .season-actions button {
  min-height: 40px;
}

.season-command #nextGameBtn,
.season-command #simPlayoffsBtn {
  grid-column: 1 / -1;
  min-height: 48px;
}

.season-command #simPlayoffRoundBtn {
  min-height: 48px;
  border-color: rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .1);
  color: #fff;
}

.season-command #startSeasonBtn {
  grid-column: 1 / -1;
}

.app-shell[data-mode="season"] .season-command #startSeasonBtn { order: 0; }
.app-shell[data-mode="season"] .season-command #nextGameBtn { order: 1; }
.app-shell[data-mode="season"] .season-command #simPlayoffRoundBtn { order: 2; }
.app-shell[data-mode="season"] .season-command #simWeekBtn { order: 2; }
.app-shell[data-mode="season"] .season-command #simDeadlineBtn { order: 3; }
.app-shell[data-mode="season"] .season-command #simSeasonBtn { order: 4; }
.app-shell[data-mode="season"] .season-command #simPlayoffsBtn { order: 5; }

.panel-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.panel-actions button {
  min-height: 40px;
}

.game-log-list,
.free-agent-list,
.mvp-ladder-list,
.season-summary-board {
  display: grid;
  gap: 7px;
  margin-top: 8px;
  max-height: 410px;
  overflow-y: auto;
  padding-right: 2px;
}

.game-log-row {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) auto;
  align-items: center;
  gap: 8px;
  min-height: 58px;
  padding: 8px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  text-align: left;
}

.game-log-row > span,
.game-log-row em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

.game-log-row div {
  min-width: 0;
}

.game-log-row strong,
.game-log-row em {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.game-log-row strong {
  color: var(--ink);
  font-size: 12px;
}

.game-log-row b {
  color: var(--brand-dark);
  font-size: 12px;
}

.calendar-now {
  display: grid;
  gap: 3px;
  padding: 10px;
  border-left: 4px solid var(--brand);
  background: #fff6ef;
}

.calendar-now.open {
  border-left-color: #1f7a4d;
}

.calendar-now > span,
.calendar-now em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

.calendar-now strong {
  color: var(--ink);
  font-size: 14px;
}

.calendar-track {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 5px;
  margin-top: 7px;
}

.calendar-track div {
  min-width: 0;
  padding: 7px 5px;
  border-top: 2px solid #d8d0c7;
}

.calendar-track div.active {
  border-top-color: var(--brand);
}

.calendar-track div.done {
  opacity: .55;
}

.calendar-track span,
.calendar-track strong {
  display: block;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.2;
}

.calendar-track strong {
  margin-top: 3px;
  color: var(--ink);
  font-size: 12px;
}

.free-agent-row {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) auto;
  align-items: center;
  gap: 7px;
  padding: 8px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.market-budget {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding: 12px 14px;
  border-left: 3px solid #1f7a4d;
  background: #eef6f1;
  color: #4f4540;
  font-size: 12px;
}

.market-budget strong {
  color: #1f5137;
  text-align: right;
}

.market-budget button {
  flex: 0 0 100%;
  min-height: 36px;
  border: 1px solid var(--brand);
  background: #fff7f2;
  color: #a9341c;
  font-size: 12px;
  font-weight: 600;
}

.free-agent-row > div,
.mvp-row > div {
  min-width: 0;
}

.free-agent-row strong,
.free-agent-row em {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.free-agent-row strong {
  color: var(--ink);
  font-size: 12px;
}

.free-agent-row em {
  margin-top: 2px;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.free-agent-row button,
.inline-action {
  min-height: 32px;
  padding: 0 9px;
  border: 1px solid rgba(217, 74, 30, .35);
  border-radius: 7px;
  background: #fff7f1;
  color: var(--brand-dark);
  font-size: 12px;
  font-weight: 600;
}

.free-agent-row button:disabled {
  border-color: var(--line);
  background: #f2f2f2;
  color: #999;
}

.focus-row .inline-action {
  justify-self: start;
  margin-top: 5px;
}

.mvp-row {
  display: grid;
  grid-template-columns: 22px 34px minmax(0, 1fr) auto;
  align-items: center;
  gap: 7px;
  padding: 8px;
  border-bottom: 1px solid var(--line);
}

.mvp-row.mine {
  border-radius: 8px;
  background: #fff1e8;
}

.mvp-row > b {
  color: var(--brand);
  font-size: 16px;
}

.honors-stage {
  display: grid;
  gap: 10px;
  padding: 12px;
  border-top: 3px solid var(--brand);
  background: #2f2923;
  color: #fff;
}

.honors-stage-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
}

.honors-stage-head div {
  display: grid;
  gap: 2px;
}

.honors-stage-head span,
.honors-stage-head em {
  color: rgba(255,255,255,.62);
  font-size: 12px;
  font-style: normal;
  font-weight: 850;
}

.honors-stage-head strong {
  font-size: 16px;
}

.honor-race-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.season-tab-panel .honor-race-card {
  display: grid;
  gap: 7px;
  min-width: 0;
  min-height: 112px;
  padding: 9px;
  border: 1px solid rgba(255,255,255,.13);
  border-radius: 6px;
  background: #413a34;
}

.season-tab-panel .honor-race-card.mine {
  border-color: #ff7a47;
  background: #51362c;
}

.honor-race-card > span {
  color: #ff8b5f;
  font-size: 12px;
  font-weight: 600;
}

.honor-race-card > b,
.honor-race-card > strong {
  overflow: hidden;
  color: rgba(255,255,255,.72);
  font-size: 12px;
  line-height: 1.35;
  text-overflow: ellipsis;
}

.honor-race-player {
  display: flex;
  align-items: center;
  gap: 7px;
  min-width: 0;
}

.honor-race-player .headshot {
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
}

.honor-race-player div {
  min-width: 0;
}

.honor-race-player strong,
.honor-race-player em {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.honor-race-player strong {
  color: #fff;
  font-size: 12px;
}

.honor-race-player em {
  margin-top: 2px;
  color: rgba(255,255,255,.55);
  font-size: 12px;
  font-style: normal;
}

.app-shell[data-mode="season"][data-season-tab="honors"] .mvp-ladder-list,
.app-shell[data-mode="season"][data-season-tab="honors"] .awards-board,
.app-shell[data-mode="season"][data-season-tab="honors"] .compact-feed {
  max-height: none;
  overflow: visible;
}

.mvp-row strong,
.mvp-row em {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mvp-row strong {
  color: var(--ink);
  font-size: 12px;
}

.mvp-row em,
.mvp-row > span:last-child {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.35;
  text-align: right;
}

.summary-hero {
  display: grid;
  gap: 5px;
  padding: 16px;
  border-radius: 8px;
  background: #2f2923;
  color: #fff;
}

.summary-hero > span {
  color: #ff895d;
  font-size: 12px;
  font-weight: 600;
}

.summary-hero > strong {
  font-family: var(--font-ui);
  font-size: 38px;
  line-height: 1;
}

.summary-hero > em,
.summary-hero > p {
  margin: 0;
  color: rgba(255, 255, 255, .72);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.45;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.summary-finals,
.summary-honors {
  display: grid;
  gap: 6px;
  padding: 16px;
  border: 1px solid #dfd5ca;
  background: #fff;
}

.summary-finals {
  border-left: 4px solid #b58a3b;
}

.summary-finals.champion {
  background: #fff9e9;
}

.summary-finals span,
.summary-honors span {
  color: #7f746b;
  font-size: 12px;
}

.summary-finals strong {
  font-size: 20px;
}

.summary-finals em,
.summary-honors strong {
  color: #4f4540;
  font-style: normal;
  line-height: 1.5;
}

.summary-next-season {
  width: 100%;
  min-height: 52px;
}

.offseason-office {
  display: grid;
  gap: 10px;
  padding: 14px;
  border: 1px solid #dfd5ca;
  border-left: 4px solid var(--brand);
  background: #fff;
}

.offseason-office-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.offseason-office-head span,
.offseason-office-head strong,
.offseason-office > p {
  display: block;
}

.offseason-office-head span {
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
}

.offseason-office-head strong {
  margin-top: 3px;
  font-size: 15px;
}

.offseason-office-head em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

.offseason-office > p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.45;
}

.offseason-delegate-button {
  min-height: 44px;
  border: 1px solid #d7c9ac;
  border-radius: 8px;
  background: #fffdf7;
  color: #3f382f;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

.offseason-delegate-button:active {
  border-color: var(--brand);
  background: #fff6f2;
}

.expiring-contract-list {
  display: grid;
  gap: 7px;
}

.expiring-contract-row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 8px;
  min-height: 52px;
  padding: 7px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: #fffaf6;
}

.expiring-contract-row.resolved {
  background: #f4f6f2;
  opacity: .78;
}

.expiring-contract-row strong,
.expiring-contract-row em {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.expiring-contract-row strong {
  font-size: 12px;
}

.expiring-contract-row em {
  margin-top: 3px;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.expiring-contract-row button,
.contract-walk {
  min-height: 36px;
  border: 1px solid var(--brand);
  background: #fff;
  color: var(--brand-dark);
  font-size: 12px;
  font-weight: 600;
}

.contract-sheet-hero {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 10px;
  padding: 14px;
  border-radius: 8px;
  background: #2f2923;
  color: #fff;
}

.contract-sheet-hero > b {
  grid-column: 1 / -1;
  color: #ff895d;
  font-size: 12px;
}

.contract-sheet-hero strong,
.contract-sheet-hero em {
  display: block;
}

.contract-sheet-hero em {
  margin-top: 3px;
  color: rgba(255,255,255,.66);
  font-size: 12px;
  font-style: normal;
}

.contract-demand {
  padding: 13px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fffaf6;
}

.contract-demand div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.contract-demand span,
.contract-demand p {
  color: var(--muted);
  font-size: 12px;
}

.contract-demand p {
  margin: 8px 0 0;
  line-height: 1.45;
}

.contract-options {
  display: grid;
  gap: 8px;
}

.contract-options button {
  display: grid;
  gap: 3px;
  min-height: 64px;
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  color: var(--ink);
  text-align: left;
}

.contract-options button span {
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
}

.contract-options button strong {
  font-size: 13px;
}

.contract-options button em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.contract-response,
.contract-builder,
.contract-schedule {
  display: grid;
  gap: 9px;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.contract-response {
  border-left: 4px solid #95877d;
  background: #f7f3ef;
}

.contract-response.counter {
  border-left-color: #d77a25;
  background: #fff8e9;
}

.contract-response.accepted {
  border-left-color: var(--good);
  background: #eef7f1;
}

.contract-response.ended {
  border-left-color: var(--bad);
  background: #fff1ef;
}

.contract-response span,
.contract-response em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 850;
}

.contract-response strong {
  font-size: 12px;
  line-height: 1.45;
}

.contract-field-head,
.contract-schedule-head,
.contract-schedule > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.contract-field-head span,
.contract-schedule-head span,
.contract-schedule > div span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 850;
}

.contract-field-head strong,
.contract-schedule-head strong {
  color: var(--ink);
  font-size: 12px;
}

.contract-year-selector,
.contract-raise-selector {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(44px, 1fr));
  gap: 6px;
}

.contract-year-selector button,
.contract-raise-selector button {
  min-height: 38px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: #f2efec;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.contract-year-selector button.active,
.contract-raise-selector button.active {
  border-color: #2f2923;
  background: #2f2923;
  color: #fff;
}

.contract-salary-stepper {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr) 42px;
  gap: 6px;
}

.contract-salary-stepper button {
  min-height: 42px;
  border: 1px solid var(--brand);
  border-radius: 7px;
  background: #fff7f1;
  color: var(--brand-dark);
  font-size: 21px;
  font-weight: 600;
}

.contract-salary-stepper input {
  width: 100%;
  min-width: 0;
  min-height: 42px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: #fff;
  color: var(--ink);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

.contract-schedule {
  gap: 0;
  background: #fffaf6;
}

.contract-schedule-head {
  padding-bottom: 8px;
  border-bottom: 1px solid var(--line);
}

.contract-schedule > div:not(.contract-schedule-head) {
  min-height: 30px;
  border-bottom: 1px solid rgba(225, 214, 204, .6);
}

.contract-schedule > div:last-child {
  border-bottom: 0;
}

.contract-schedule > div strong {
  color: var(--brand-dark);
  font-size: 12px;
}

.contract-sheet-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 8px;
}

.contract-sheet-actions button {
  min-height: 46px;
}

.contract-sheet-actions button:disabled,
.contract-walk:disabled,
.contract-year-selector button:disabled,
.contract-raise-selector button:disabled,
.contract-salary-stepper button:disabled,
.contract-salary-stepper input:disabled {
  opacity: .48;
}

.summary-grid > div {
  min-width: 0;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.summary-grid span,
.summary-grid strong,
.summary-grid em {
  display: block;
}

.summary-grid span,
.summary-grid em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

.summary-grid strong {
  overflow: hidden;
  margin: 4px 0;
  color: var(--ink);
  font-size: 12px;
  line-height: 1.25;
  text-overflow: ellipsis;
}

.summary-progression {
  display: grid;
  gap: 10px;
  padding: 14px;
  border: 1px solid var(--line);
  border-left: 4px solid var(--brand);
  background: #fff;
}

.summary-progression-head,
.progression-group-title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.summary-progression-head > div {
  display: grid;
  gap: 3px;
}

.summary-progression-head span,
.summary-progression-head em,
.progression-group-title span {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

.summary-progression-head strong {
  font-size: 13px;
  line-height: 1.35;
}

.summary-progression-head > em {
  flex: 0 0 auto;
  color: var(--brand-dark);
}

.progression-groups,
.progression-group,
.progression-stable > div {
  display: grid;
  gap: 6px;
}

.progression-group + .progression-group {
  margin-top: 4px;
}

.progression-group-title {
  align-items: center;
  padding-bottom: 3px;
}

.progression-group-title strong {
  font-size: 12px;
}

.progression-group.up .progression-group-title strong,
.progression-player.up .progression-change b {
  color: #23845d;
}

.progression-group.down .progression-group-title strong,
.progression-player.down .progression-change b {
  color: #b84d43;
}

.progression-player {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  min-width: 0;
  padding: 8px;
  border: 1px solid var(--line);
  background: #fbfaf9;
}

.progression-player .headshot {
  width: 38px;
  height: 38px;
}

.progression-player-main {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.progression-player-main strong {
  font-size: 12px;
  line-height: 1.3;
}

.progression-player-main em,
.progression-player-main p,
.progression-change small {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  line-height: 1.4;
}

.progression-player-main p {
  color: #675d56;
}

.progression-change {
  display: grid;
  justify-items: end;
  gap: 1px;
  min-width: 56px;
}

.progression-change span {
  color: var(--ink);
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 600;
}

.progression-change b {
  font-size: 12px;
}

.progression-empty {
  padding: 10px;
  background: #f7f4f1;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
}

.progression-stable {
  border-top: 1px solid var(--line);
  padding-top: 8px;
}

.progression-stable summary {
  min-height: 32px;
  color: #665c55;
  font-size: 12px;
  font-weight: 600;
  line-height: 32px;
  cursor: pointer;
}

.progression-stable[open] summary {
  margin-bottom: 6px;
}

@media (max-width: 480px) {
  .summary-progression { padding: 11px; }
  .summary-progression-head { display: grid; grid-template-columns: minmax(0, 1fr); gap: 3px; }
  .summary-progression-head strong { font-size: 12px; }
  .summary-progression-head > em { justify-self: start; }
  .progression-player { grid-template-columns: 34px minmax(0, 1fr); gap: 6px; padding: 7px; }
  .progression-player .headshot { width: 34px; height: 34px; }
  .progression-player-main p { font-size: 7px; }
  .progression-change {
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
    min-width: 0;
    padding-top: 5px;
    border-top: 1px solid var(--line);
  }
}

.boxscore-hero {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
  padding: 13px;
  border-radius: 8px;
  background: #2f2923;
  color: #fff;
}

.boxscore-hero > div:last-child {
  text-align: right;
}

.boxscore-hero span,
.boxscore-hero strong,
.boxscore-hero b {
  display: block;
}

.boxscore-hero span,
.boxscore-hero em {
  color: rgba(255,255,255,.6);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

.boxscore-hero strong {
  font-size: 12px;
}

.boxscore-hero b {
  margin-top: 3px;
  font-family: var(--font-ui);
  font-size: 28px;
}

.game-mvp {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 7px;
  padding: 9px;
  border-left: 4px solid #b58a3b;
  background: #fff8e8;
}

.game-mvp span,
.game-mvp em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.team-boxscore {
  display: grid;
  gap: 4px;
  padding: 9px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.boxscore-title {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding-bottom: 7px;
  border-bottom: 1px solid var(--line);
}

.boxscore-title span {
  color: var(--muted);
  font-size: 12px;
}

.boxscore-head,
.boxscore-row {
  display: grid;
  grid-template-columns: minmax(92px, 1fr) repeat(5, 34px);
  align-items: center;
  gap: 3px;
  min-width: 330px;
  font-size: 12px;
}

.team-boxscore {
  overflow-x: auto;
}

.boxscore-head {
  color: var(--muted);
  font-weight: 600;
}

.boxscore-row {
  min-height: 26px;
  border-bottom: 1px solid #f1ece6;
  color: var(--muted);
}

.boxscore-row strong {
  overflow: hidden;
  color: var(--ink);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.boxscore-row b {
  color: var(--brand-dark);
}

.asset-item.locked {
  opacity: .55;
}

.player-stat-row {
  display: grid;
  gap: 9px;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.player-stat-top,
.player-stat-main {
  display: flex;
  align-items: center;
  min-width: 0;
}

.player-stat-top {
  justify-content: space-between;
  gap: 8px;
}

.player-stat-main {
  gap: 8px;
}

.player-stat-main > div {
  min-width: 0;
}

.player-stat-rank {
  flex: 0 0 auto;
  color: var(--brand-dark);
  font-size: 13px;
}

.player-stat-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
}

.player-stat-grid div {
  min-width: 0;
  padding: 6px 3px;
  border-radius: 8px;
  background: #fff7ef;
  text-align: center;
}

.player-stat-grid strong,
.player-stat-grid span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.player-stat-grid strong {
  color: var(--ink);
  font-size: 12px;
}

.player-stat-grid span {
  margin-top: 2px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.score-strip span,
.tag {
  flex: 0 0 auto;
  padding: 6px 8px;
  border-radius: 999px;
  background: #f5ede9;
  color: var(--brand-dark);
  font-size: 12px;
  font-weight: 600;
}

.poll-bars {
  display: grid;
  gap: 9px;
  margin-top: 12px;
}

.poll-row {
  display: grid;
  gap: 5px;
}

.poll-label {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 12px;
}

.bar {
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: #eeeeef;
}

.bar > span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--brand);
}

.hot-list {
  display: grid;
  gap: 10px;
  margin-top: 12px;
}

.hot-item {
  align-items: flex-start;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
}

.hot-item p {
  margin-top: 4px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.4;
}

.bottom-nav {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  max-width: 480px;
  margin: 0 auto;
  padding: 10px 14px calc(10px + env(safe-area-inset-bottom));
  border-top: 1px solid var(--line);
  background: rgba(255,255,255,.94);
  backdrop-filter: blur(14px);
}

.nav-item {
  height: 44px;
  border-radius: 8px;
  background: #f0f1f3;
  color: var(--ink);
  font-size: 12px;
  font-weight: 600;
}

.nav-item.primary {
  background: var(--brand);
  color: #fff;
}

.nav-item.active {
  background: #fff4ed;
  color: var(--brand-dark);
  box-shadow: inset 0 0 0 1px rgba(217, 74, 30, .32);
}

.nav-item.primary.active {
  background: var(--brand);
  color: #fff;
}

.sheet-backdrop {
  position: fixed;
  inset: 0;
  z-index: 20;
  background: rgba(0,0,0,.35);
}

.bottom-sheet {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 21;
  max-width: 480px;
  max-height: 88svh;
  margin: 0 auto;
  padding: 8px 14px calc(14px + env(safe-area-inset-bottom));
  border-radius: 14px 14px 0 0;
  background: var(--card);
  transform: translateY(105%);
  transition: transform .22s ease;
}

.bottom-sheet.open {
  transform: translateY(0);
}

.sheet-handle {
  width: 40px;
  height: 4px;
  margin: 0 auto 12px;
  border-radius: 999px;
  background: #d9d9de;
}

.search-input {
  width: 100%;
  height: 42px;
  margin: 12px 0 10px;
  padding: 0 12px;
  border: 1px solid var(--line);
  border-radius: 8px;
  outline: 0;
}

.bottom-sheet .search-input {
  position: sticky;
  top: 0;
  z-index: 2;
  background: #fff;
}

.segment {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.segment-btn {
  height: 34px;
  border-radius: 8px;
  background: #f2f3f5;
  color: var(--muted);
  font-weight: 600;
}

.segment-btn.active {
  background: #f7e8e2;
  color: var(--brand-dark);
}

.sheet-list {
  display: grid;
  gap: 8px;
  max-height: calc(88svh - 178px);
  margin-top: 12px;
  overflow: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}

.sheet-list .asset-item {
  width: 100%;
  min-height: 62px;
  text-align: left;
}

.sheet-list button.asset-item {
  transition: transform .12s ease, border-color .12s ease, background .12s ease;
}

.sheet-list button.asset-item:active {
  transform: scale(.985);
  border-color: var(--brand);
  background: #fff6f0;
}

.toast {
  position: fixed;
  right: 20px;
  bottom: 92px;
  left: 20px;
  z-index: 30;
  max-width: 420px;
  margin: 0 auto;
  padding: 12px 14px;
  border-radius: 8px;
  background: rgba(24,24,24,.94);
  color: #fff;
  font-size: 13px;
  text-align: center;
}

@media (min-width: 700px) {
  body {
    background:
      linear-gradient(90deg, #eceef2 0, #f7f7f8 30%, #f7f7f8 70%, #eceef2 100%);
  }
}

/* 2026 product shell: each mode is a focused workspace, with one clear next action. */
:host {
  --brand: #e4471b;
  --brand-dark: #a93216;
  --ink: #201e1c;
  --muted: #736d67;
  --line: #dcd7d1;
  --bg: #e9e7e3;
  --card: #fdfcf9;
  --panel: #f4f2ee;
  --court: #211e1b;
  --good: #247a4b;
}

body {
  background: #d9d7d3;
}

.app-shell {
  padding: 0 12px calc(16px + env(safe-area-inset-bottom));
  background: #e9e7e3;
}

.topbar {
  min-height: 58px;
  margin: 0 -12px;
  padding: max(8px, env(safe-area-inset-top)) 14px 8px;
  border-bottom: 1px solid rgba(255,255,255,.12);
  background: #211e1b;
}

.topbar .eyebrow {
  color: #ff7040;
  font-size: 12px;
}

.topbar h1 {
  margin-top: 1px;
  font-size: 19px;
}

main {
  height: calc(100svh - 16px - env(safe-area-inset-bottom));
  padding: 10px 0 18px;
}

.hero-panel {
  display: none !important;
}

.legend-hub {
  display: none;
}

.app-shell[data-mode="legend"] .franchise-hub,
.app-shell[data-mode="legend"] .season-card,
.app-shell[data-mode="legend"] .war-room,
.app-shell[data-mode="legend"] .immersion-deck,
.app-shell[data-mode="legend"] .team-picker,
.app-shell[data-mode="legend"] .team-dashboard,
.app-shell[data-mode="legend"] .history-card {
  display: none;
}

.app-shell[data-mode="legend"] .legend-hub {
  display: grid;
}

.franchise-hub,
.app-shell[data-mode="team"] .franchise-hub {
  gap: 7px;
}

.franchise-hero {
  min-height: 88px;
  padding: 12px 104px 12px 12px;
  border: 0;
  background: #27231f;
  box-shadow: none;
}

.franchise-logo {
  width: 52px;
  height: 52px;
}

.franchise-hero h2 {
  margin-top: 1px;
  font-size: 24px;
}

.franchise-hero p:not(.eyebrow) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.micro-action,
.panel-action {
  border-radius: 6px;
  box-shadow: none;
}

.play-menu {
  padding: 12px;
  border-color: rgba(228,71,27,.3);
  background: #fdf4ef;
  box-shadow: none;
}

.play-menu strong {
  font-size: 17px;
}

.play-menu .primary-button {
  min-width: 104px;
  min-height: 48px;
}

.franchise-kpis {
  gap: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--card);
}

.franchise-kpis div {
  padding: 10px;
  border: 0;
  border-right: 1px solid var(--line);
  border-radius: 0;
  background: transparent;
}

.franchise-kpis div:last-child {
  border-right: 0;
}

.franchise-actions {
  grid-template-columns: repeat(2, 1fr);
}

.franchise-actions .secondary-button {
  min-height: 42px;
  background: var(--card);
}

.franchise-grid {
  gap: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--card);
}

.franchise-grid article {
  padding: 11px;
  border: 0;
  border-bottom: 1px solid var(--line);
  border-radius: 0;
  background: transparent;
}

.franchise-grid article:last-child {
  display: none;
}

.season-card,
.app-shell[data-mode="season"] .season-card {
  gap: 8px;
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
}

.season-card > .section-title {
  min-height: 52px;
  padding: 9px 11px;
  border-radius: 8px;
  background: #27231f;
  color: #fff;
}

.season-card > .section-title h3 {
  color: #fff;
  font-size: 18px;
}

.season-card > .section-title > span {
  color: #ff9a76;
  font-weight: 600;
}

.season-summary {
  gap: 0;
  margin-top: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--card);
}

.season-summary div {
  padding: 10px;
  border: 0;
  border-right: 1px solid var(--line);
  border-radius: 0;
  background: transparent;
}

.season-summary div:last-child {
  border-right: 0;
}

.season-prime-board {
  padding: 11px;
  border: 0;
  background: #28241f;
  box-shadow: none;
}

.prime-head {
  padding-bottom: 7px;
}

.prime-grid {
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.prime-grid article {
  padding: 8px;
  border: 0;
  border-right: 1px solid rgba(255,255,255,.13);
  border-radius: 0;
  background: transparent;
}

.prime-grid article:last-child {
  border-right: 0;
}

.prime-grid strong {
  font-size: 12px;
}

.season-subtabs {
  position: sticky;
  top: 0;
  z-index: 3;
  margin: 0 -1px;
  padding: 5px 1px;
  background: #e9e7e3;
}

.season-subtabs button {
  min-width: 54px;
  min-height: 32px;
  padding: 0 11px;
  border: 0;
  border-radius: 6px;
  background: #dad7d2;
}

.season-subtabs button.active {
  background: #27231f;
  box-shadow: none;
}

.season-command {
  position: relative;
  display: grid;
  gap: 10px;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--card);
}

.command-copy {
  display: grid;
  gap: 3px;
}

.command-copy span,
.command-copy em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

.command-copy strong {
  font-size: 16px;
  line-height: 1.25;
}

.season-actions {
  position: relative;
  grid-template-columns: 1fr;
  gap: 7px;
}

.season-actions > .primary-button {
  grid-column: 1;
  min-height: 48px;
}

.season-actions #startSeasonBtn,
.season-actions #simPlayoffsBtn {
  grid-column: 1 / -1;
}

.app-shell[data-mode="season"] .season-actions #startSeasonBtn,
.app-shell[data-mode="season"] .season-actions #simPlayoffsBtn {
  border-color: var(--brand);
  background: var(--brand);
  color: #fff;
}

.quick-advance {
  position: relative;
  grid-column: 1;
  min-width: 0;
}

.quick-advance[hidden] {
  display: none;
}

.quick-advance summary {
  display: grid;
  min-height: 40px;
  place-items: center;
  border: 1px solid #b9b2ab;
  border-radius: 8px;
  background: #f6f4f1;
  color: var(--ink);
  font-size: 14px;
  font-weight: 600;
  list-style: none;
  cursor: pointer;
}

.quick-advance summary::-webkit-details-marker {
  display: none;
}

.quick-advance[open] > div {
  position: absolute;
  right: 0;
  bottom: 55px;
  z-index: 8;
  display: grid;
  width: 100%;
  gap: 6px;
  padding: 8px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 18px 46px rgba(32,30,28,.22);
}

.quick-advance .secondary-button {
  width: 100%;
  min-height: 42px;
  border-color: var(--line);
  background: #f6f4f1;
  color: var(--ink);
}

.gm-briefing {
  padding: 11px;
  background: #f8f4ef;
  box-shadow: none;
}

.gm-brief-main strong {
  font-size: 17px;
}

.season-tab-panel article {
  background: var(--card);
}

.war-room {
  margin-top: 0;
  padding: 12px;
  border: 0;
  background: #211e1b;
  box-shadow: none;
}

.war-room::before {
  display: none;
}

.war-room-top h3 {
  margin-top: 2px;
  font-size: 18px;
}

.status-pill {
  border-radius: 6px;
}

.club-panel {
  min-height: 126px;
  padding: 12px;
  border-radius: 8px;
}

.club-logo {
  width: 48px;
  height: 48px;
}

.war-room-actions {
  display: grid;
  grid-template-columns: .9fr .9fr 1.2fr;
  gap: 6px;
}

.war-room-actions .primary-button,
.war-room-actions .secondary-button {
  min-width: 0;
  min-height: 44px;
  padding: 0 4px;
  font-size: 12px;
}

.participant-rail.is-redundant {
  display: none;
}

.immersion-deck {
  min-height: 0;
  margin-top: 8px;
  overflow: visible;
  border-color: var(--line);
  background: var(--card);
  box-shadow: none;
}

.trade-intel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 11px 8px;
  border-bottom: 1px solid var(--line);
}

.trade-intel-head span {
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
}

.trade-intel-head strong {
  font-size: 14px;
}

.manager-grid {
  padding: 0;
  gap: 0;
}

.manager-card {
  min-height: 0;
  padding: 10px;
  border: 0;
  border-right: 1px solid var(--line);
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.manager-card:last-child {
  border-right: 0;
}

.ticker-strip {
  position: static;
  margin: 0 10px 10px;
  border: 0;
  border-radius: 6px;
  background: #eae7e2;
  color: #5f5954;
}

.legend-hub {
  gap: 10px;
}

.legend-page-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 14px;
  min-height: 112px;
  padding: 16px;
  border-radius: 8px;
  background: #211e1b;
  color: #fff;
}

.legend-page-head h2 {
  margin-top: 3px;
  color: #fff;
  font-size: 27px;
}

.legend-page-head p:not(.eyebrow) {
  margin-top: 4px;
  color: rgba(255,255,255,.7);
  font-size: 12px;
}

.legend-page-head > strong {
  display: grid;
  width: 58px;
  height: 58px;
  place-items: center;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 50%;
  color: #f3c15e;
  font-size: 16px;
}

.legend-hub .legend-body {
  gap: 8px;
  overflow: visible;
  padding-top: 0;
}

.legend-coming-soon {
  display: grid;
  min-height: min(54svh, 440px);
  align-content: center;
  justify-items: center;
  gap: 10px;
  padding: 28px 18px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--card);
  text-align: center;
}

.legend-coming-soon > span {
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
}

.legend-coming-soon > strong {
  font-size: 24px;
}

.legend-coming-soon > p {
  color: var(--muted);
  font-size: 13px;
}

.legend-coming-soon > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 7px;
  margin-top: 8px;
}

.legend-coming-soon em {
  padding: 6px 9px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: #6b645e;
  font-size: 12px;
  font-style: normal;
  font-weight: 850;
}

.legend-locked-hooks {
  display: none !important;
}

.legend-hub .legend-pack-info div,
.legend-hub .legend-command,
.legend-hub .legend-empty {
  border-color: var(--line);
  background: var(--card);
}

.legend-command-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 7px;
}

.legend-command-row input {
  min-width: 0;
  height: 46px;
  padding: 0 11px;
  border: 1px solid var(--line);
  border-radius: 8px;
  outline: 0;
}

.legend-command-row .primary-button {
  min-height: 46px;
}

.bottom-nav {
  gap: 0;
  padding: 0 12px env(safe-area-inset-bottom);
  border-top-color: #cbc7c1;
  background: rgba(247,246,243,.97);
}

.nav-item,
.nav-item.primary {
  position: relative;
  height: 58px;
  border-radius: 0;
  background: transparent;
  color: #716b65;
  font-size: 12px;
}

.nav-item.active,
.nav-item.primary.active {
  background: transparent;
  color: var(--brand-dark);
  box-shadow: none;
}

.nav-item.active::before {
  content: "";
  position: absolute;
  top: 0;
  right: 22%;
  left: 22%;
  height: 3px;
  background: var(--brand);
}

.nav-item-locked {
  display: grid;
  place-content: center;
  gap: 1px;
}

.nav-item-locked small {
  color: #9a948e;
  font-size: 12px;
  font-weight: 600;
}

@media (max-width: 760px) {
  .topbar,
  .bottom-nav,
  .inquiry-modal-backdrop {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  button,
  summary {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
}

@media (max-width: 380px) {
  .app-shell {
    padding-right: 9px;
    padding-left: 9px;
  }

  .topbar {
    margin-right: -9px;
    margin-left: -9px;
  }

  .matchup-stage {
    gap: 6px;
  }

  .club-panel {
    padding: 10px;
  }

  .panel-action {
    padding: 0 7px;
    font-size: 12px;
  }

  .war-room-actions .primary-button,
  .war-room-actions .secondary-button {
    font-size: 12px;
  }
}

/* Season intelligence: standings, player data and award races */
.standings-spotlight {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #27231f;
  color: #fff;
}

.standings-spotlight > div {
  display: grid;
  min-width: 0;
  gap: 3px;
  padding: 11px 8px;
  border-right: 1px solid rgba(255,255,255,.12);
}

.standings-spotlight > div:last-child {
  border-right: 0;
}

.standings-spotlight span {
  color: rgba(255,255,255,.52);
  font-size: 12px;
  font-weight: 850;
}

.standings-spotlight strong {
  overflow: hidden;
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.standings-toolbar,
.player-board-head,
.honor-selector-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 9px;
}

.standings-toolbar > div:first-child,
.player-board-head > div:first-child,
.honor-selector-head > div:first-child {
  display: grid;
  gap: 2px;
}

.standings-toolbar span,
.player-board-head span,
.honor-selector-head span {
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
}

.standings-toolbar strong,
.player-board-head strong,
.honor-selector-head strong {
  font-size: 13px;
}

.standings-conference-tabs,
.player-metric-selector,
.honor-category-selector {
  display: flex;
  gap: 4px;
}

.standings-conference-tabs button,
.player-metric-selector button,
.honor-category-selector button {
  min-height: 30px;
  padding: 0 8px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: #f1efec;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.standings-conference-tabs button.active,
.player-metric-selector button.active,
.honor-category-selector button.active {
  border-color: #27231f;
  background: #27231f;
  color: #fff;
}

.standings-table-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 45px 38px 45px;
  gap: 5px;
  padding: 0 8px 6px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
  text-align: right;
}

.standings-table-head span:first-child {
  text-align: left;
}

.app-shell[data-mode="season"][data-season-tab="standings"] .standings-list,
.app-shell[data-mode="season"][data-season-tab="players"] .season-player-list {
  max-height: none;
  overflow: visible;
}

.league-standings-board {
  gap: 0;
  margin-top: 0;
}

.standing-row.detailed {
  grid-template-columns: minmax(0, 1fr) 45px 38px 45px;
  min-height: 39px;
  gap: 5px;
  padding: 4px 8px;
  border-bottom: 1px solid var(--line);
  font-size: 12px;
  text-align: right;
}

.standing-row.detailed > div {
  display: grid;
  grid-template-columns: 18px 26px minmax(0, 1fr);
  align-items: center;
  gap: 6px;
  min-width: 0;
  text-align: left;
}

.standing-row.detailed b {
  color: var(--muted);
  font-size: 12px;
}

.standing-row.detailed .mini-logo {
  width: 26px;
  height: 26px;
}

.standing-row.detailed strong {
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.standing-row.detailed em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 850;
}

.standing-row.detailed.mine {
  margin: 0;
  border-left: 3px solid var(--brand);
  border-radius: 0;
  background: #fff1e8;
}

.standing-row.detailed.playin:not(.mine) {
  background: #faf8f5;
}

.standing-row.detailed.lottery {
  opacity: .72;
}

.standings-legend {
  display: flex;
  gap: 12px;
  padding-top: 8px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 850;
}

.standings-legend span::before {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 4px;
  border-radius: 1px;
  background: #27231f;
  content: "";
}

.standings-legend span:last-child::before {
  background: #d8cec5;
}

.player-leader-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  overflow: hidden;
  border-radius: 8px;
  background: #27231f;
  color: #fff;
}

.player-leader-strip > div {
  display: grid;
  min-width: 0;
  justify-items: center;
  gap: 3px;
  padding: 10px 6px;
  border-right: 1px solid rgba(255,255,255,.12);
  text-align: center;
}

.player-leader-strip > div:last-child {
  border-right: 0;
}

.player-leader-strip span {
  color: #ff8b5f;
  font-size: 12px;
  font-weight: 600;
}

.player-leader-strip .headshot {
  width: 36px;
  height: 36px;
}

.player-leader-strip strong,
.player-leader-strip em {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.player-leader-strip strong {
  font-size: 12px;
}

.player-leader-strip em {
  color: rgba(255,255,255,.55);
  font-size: 12px;
  font-style: normal;
}

.section-row-title em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.team-stat-head,
.season-player-row {
  display: grid;
  grid-template-columns: minmax(100px, 1fr) 26px 35px 35px 33px 33px;
  align-items: center;
  gap: 4px;
}

.team-stat-head {
  padding: 0 6px 6px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
  text-align: right;
}

.team-stat-head span:first-child {
  text-align: left;
}

.season-player-row {
  min-height: 42px;
  padding: 5px 6px;
  border-bottom: 1px solid var(--line);
  font-size: 12px;
  text-align: right;
}

.team-stat-player {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  text-align: left;
}

.team-stat-player .headshot {
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
}

.team-stat-identity {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 3px;
  min-width: 0;
}

.team-stat-player strong {
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.team-stat-identity .ability-badge {
  flex: 0 0 auto;
  margin-left: 0;
}

.team-stat-identity .availability-tag {
  grid-column: 1 / -1;
  justify-self: start;
  margin-left: 0;
}

.availability-tag {
  display: inline-block;
  margin-left: 4px;
  padding: 1px 3px;
  border-radius: 3px;
  background: #fbe0dc;
  color: var(--bad);
  font-size: 7px;
  line-height: 1.2;
  vertical-align: 1px;
}

.season-player-row > b {
  color: var(--brand-dark);
  font-size: 12px;
}

.league-player-leaders {
  display: grid;
}

.league-leader-row {
  display: grid;
  grid-template-columns: 20px 32px minmax(0, 1fr) 48px;
  align-items: center;
  gap: 7px;
  min-height: 46px;
  padding: 6px;
  border-bottom: 1px solid var(--line);
}

.league-leader-row.mine {
  border-left: 3px solid var(--brand);
  background: #fff1e8;
}

.league-leader-row > b {
  color: var(--brand);
  font-size: 14px;
  text-align: center;
}

.league-leader-row .headshot {
  width: 32px;
  height: 32px;
}

.league-leader-row > div {
  min-width: 0;
}

.league-leader-row > div strong,
.league-leader-row > div em {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.league-leader-row > div strong {
  font-size: 12px;
}

.league-leader-row > div em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.league-leader-row > strong {
  color: var(--ink);
  font-size: 15px;
  text-align: right;
}

.league-leader-row small {
  margin-left: 2px;
  color: var(--muted);
  font-size: 12px;
}

.honor-category-selector {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.honor-category-selector button {
  min-width: 50px;
  padding: 0 5px;
}

.team-honor-tracker {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
}

.team-honor-row {
  display: grid;
  min-width: 0;
  gap: 3px;
  padding: 9px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: #f7f5f2;
}

.team-honor-row.contending {
  border-color: rgba(182,50,44,.45);
  background: #fff1e8;
}

.team-honor-row span {
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
}

.team-honor-row strong,
.team-honor-row em {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.team-honor-row strong {
  font-size: 12px;
}

.team-honor-row em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

@media (max-width: 380px) {
  .standings-spotlight strong {
    font-size: 13px;
  }

  .standings-toolbar,
  .player-board-head,
  .honor-selector-head {
    align-items: stretch;
    flex-direction: column;
  }

  .standings-conference-tabs button,
  .player-metric-selector button,
  .honor-category-selector button {
    flex: 1;
  }

  .team-stat-head,
  .season-player-row {
    grid-template-columns: minmax(92px, 1fr) 24px 32px 32px 30px 30px;
    gap: 3px;
  }
}

/* MyNBA-inspired season command center */
.app-shell[data-mode="season"] .season-subtabs { order: 2; }
.app-shell[data-mode="season"] .season-tab-panel { order: 3; }

.game-day-center {
  overflow: hidden;
  border-radius: 8px;
  background: #201d1a;
  color: #fff;
  box-shadow: 0 12px 28px rgba(31, 25, 20, .14);
}

.game-day-head {
  order: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 11px 12px 9px;
  border-bottom: 1px solid rgba(255, 255, 255, .12);
}

.game-day-head div {
  display: grid;
  gap: 2px;
}

.game-day-head span,
.game-day-head em {
  color: rgba(255, 255, 255, .58);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

.game-day-head strong {
  font-size: 15px;
}

.game-day-head em {
  max-width: 48%;
  color: #ff9a76;
  text-align: right;
}

.game-day-matchup {
  order: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 62px minmax(0, 1fr);
  align-items: center;
  min-height: 108px;
  padding: 8px 16px 6px;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, .025) 0 49.8%, rgba(255, 255, 255, .09) 50%, rgba(255, 255, 255, .025) 50.2% 100%),
    radial-gradient(circle at 50% 50%, rgba(228, 68, 27, .16), transparent 38%);
}

.game-day-team {
  display: grid;
  min-width: 0;
  justify-items: center;
  gap: 4px;
  text-align: center;
}

.game-day-logo {
  width: 52px;
  height: 52px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, .22));
}

.game-day-team strong {
  max-width: 100%;
  overflow: hidden;
  font-size: 17px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.game-day-team em,
.game-day-center-mark span {
  color: rgba(255, 255, 255, .58);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

.game-day-center-mark {
  display: grid;
  justify-items: center;
  gap: 5px;
}

.game-day-center-mark b {
  display: grid;
  min-width: 44px;
  min-height: 32px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, .2);
  border-radius: 6px;
  color: #ff7a4e;
  font-size: 14px;
}

.game-day-scouting {
  order: 3;
  min-height: 38px;
  margin: 0;
  padding: 9px 12px;
  border-top: 1px solid rgba(255, 255, 255, .1);
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  line-height: 1.45;
}

.game-plan-panel {
  order: 4;
  display: grid;
  gap: 7px;
  padding: 10px 12px;
  border-top: 1px solid rgba(255, 255, 255, .1);
  background: rgba(0, 0, 0, .14);
}

.game-plan-panel > div:first-child {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.game-plan-panel span {
  color: rgba(255, 255, 255, .52);
  font-size: 12px;
  font-weight: 600;
}

.game-plan-panel strong {
  color: #fff;
  font-size: 12px;
}

.game-plan-selector {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 5px;
}

.game-plan-selector button {
  min-width: 0;
  min-height: 32px;
  padding: 0 3px;
  border: 1px solid rgba(255, 255, 255, .16);
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, .7);
  font-size: 12px;
  font-weight: 600;
}

.game-plan-selector button.active {
  border-color: var(--brand);
  background: var(--brand);
  color: #fff;
}

.game-day-center .season-command {
  gap: 8px;
  padding: 10px 12px 12px;
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, .1);
  border-radius: 0;
  background: transparent;
}

.game-plan-panel {
  grid-template-columns: minmax(0, 1fr) auto;
}

.game-plan-rotation {
  min-height: 32px;
  padding: 0 10px;
  border: 1px solid rgba(255, 255, 255, .2);
  background: rgba(255, 255, 255, .08);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
}

.game-plan-selector {
  grid-column: 1 / -1;
}

.playoff-series-center {
  display: grid;
  gap: 8px;
  padding: 10px;
  border: 1px solid #d9cec6;
  border-radius: 8px;
  background: #fffaf6;
}

.playoff-series-center[hidden] {
  display: none;
}

.playoff-series-center .section-row-title em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.playoff-series-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.playoff-series-row {
  display: grid;
  gap: 4px;
  min-width: 0;
  padding: 8px;
  border: 1px solid var(--line);
  border-left: 3px solid #bbb0a8;
  border-radius: 6px;
  background: #fff;
}

.playoff-series-row.mine {
  border-left-color: var(--brand);
  background: #fff2ea;
}

.playoff-series-row span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.playoff-series-row strong {
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.playoff-series-row b {
  color: #ac3218;
  font-size: 15px;
}

@media (max-width: 380px) {
  .playoff-series-grid { grid-template-columns: 1fr; }
}

.game-day-center .season-actions,
.app-shell[data-mode="season"] .game-day-center .season-actions {
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  order: 0;
}

.game-day-center .season-actions > .primary-button {
  grid-column: auto;
  min-height: 44px;
}

.app-shell[data-mode="season"] .game-day-center #nextGameBtn,
.app-shell[data-mode="season"] .game-day-center #startSeasonBtn,
.app-shell[data-mode="season"] .game-day-center #simPlayoffsBtn {
  grid-column: auto;
  order: 0;
}

.game-day-center .quick-advance {
  grid-column: auto;
  order: 1;
}

.game-day-center .quick-advance summary {
  min-height: 44px;
  border-color: rgba(255, 255, 255, .22);
  background: rgba(255, 255, 255, .08);
  color: #fff;
  font-size: 12px;
}

.last-game-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 42px;
  padding: 8px 9px;
  border-radius: 6px;
  background: rgba(255, 255, 255, .075);
  order: 1;
}

.last-game-strip > div {
  display: grid;
  min-width: 0;
  gap: 2px;
}

.last-game-strip span {
  color: rgba(255, 255, 255, .45);
  font-size: 12px;
  font-weight: 600;
}

.last-game-strip strong {
  overflow: hidden;
  color: rgba(255, 255, 255, .86);
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.last-game-strip button,
.section-row-title button {
  flex: 0 0 auto;
  min-height: 30px;
  padding: 0 9px;
  border: 1px solid rgba(255, 255, 255, .18);
  border-radius: 6px;
  background: transparent;
  color: #ff9a76;
  font-size: 12px;
  font-weight: 600;
}

.gm-briefing {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
  gap: 10px;
}

.pulse-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 5px;
}

.pulse-grid div {
  min-width: 0;
  padding: 7px;
}

.pulse-grid strong {
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.season-story-board {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--card);
}

.story-lead {
  display: grid;
  gap: 2px;
  padding: 10px 11px;
  border-bottom: 1px solid var(--line);
}

.story-lead span,
.story-grid span {
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
}

.story-lead strong {
  font-size: 14px;
  line-height: 1.35;
}

.story-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.story-grid > div {
  display: grid;
  min-width: 0;
  gap: 2px;
  padding: 9px;
  border-right: 1px solid var(--line);
}

.story-grid > div:last-child {
  border-right: 0;
}

.story-grid strong,
.story-grid em {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.story-grid strong {
  font-size: 12px;
}

.story-grid em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.season-story-board {
  position: relative;
  padding: 0;
  border-color: rgba(182,50,44,.3);
  background:
    linear-gradient(145deg, rgba(43,35,29,.99), rgba(67,47,36,.97)),
    var(--court);
  color: #fff;
  box-shadow: 0 16px 30px rgba(46,34,26,.16);
}

.season-story-board::after {
  content: "";
  position: absolute;
  top: -52px;
  right: -42px;
  width: 150px;
  height: 150px;
  border: 1px solid rgba(255,137,93,.12);
  border-radius: 50%;
  pointer-events: none;
}

.story-lead {
  position: relative;
  z-index: 1;
  gap: 5px;
  padding: 13px 13px 11px;
  border-bottom-color: rgba(255,255,255,.12);
}

.story-lead > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.story-lead span {
  color: #ff8255;
  font-size: 12px;
  font-weight: 600;
}

.story-lead em {
  overflow: hidden;
  color: rgba(255,255,255,.64);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.story-lead strong {
  color: #fff;
  font-size: 18px;
  line-height: 1.22;
}

.story-lead p {
  margin: 0;
  color: rgba(255,255,255,.72);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.45;
}

.story-objective-list {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.story-objective {
  display: grid;
  min-width: 0;
  gap: 8px;
  padding: 10px;
  border-right: 1px solid rgba(255,255,255,.1);
}

.story-objective:last-child {
  border-right: 0;
}

.story-objective div,
.story-objective span,
.story-objective strong,
.story-objective em {
  display: block;
  min-width: 0;
}

.story-objective span {
  color: #ff8255;
  font-size: 12px;
  font-weight: 600;
}

.story-objective strong {
  overflow: hidden;
  margin-top: 3px;
  font-size: 12px;
  line-height: 1.25;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.story-objective em {
  display: -webkit-box;
  overflow: hidden;
  margin-top: 3px;
  color: rgba(255,255,255,.6);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.story-objective > i {
  overflow: hidden;
  height: 3px;
  border-radius: 999px;
  background: rgba(255,255,255,.12);
}

.story-objective > i b {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: #ff7140;
}

.player-roles-card {
  background:
    linear-gradient(135deg, rgba(182,50,44,.08), rgba(255,253,249,.98)),
    var(--card) !important;
}

.player-roles-intro {
  margin: -2px 0 8px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
}

.player-roles-list {
  display: grid;
  gap: 5px;
}

.player-role-row {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) auto;
  align-items: center;
  width: 100%;
  min-height: 48px;
  gap: 8px;
  padding: 7px 8px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: rgba(255,255,255,.9);
  color: var(--ink);
  text-align: left;
}

.player-role-row.warning,
.player-role-row.broken {
  border-color: rgba(200,50,50,.3);
  background: rgba(255,242,239,.96);
}

.player-role-row.trusted {
  border-color: rgba(22,138,69,.25);
}

.player-role-row .headshot {
  width: 34px;
  height: 34px;
}

.player-role-main,
.player-role-main strong,
.player-role-main em,
.player-role-status strong,
.player-role-status span {
  display: block;
  min-width: 0;
}

.player-role-main strong {
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.player-role-main em,
.player-role-status span {
  margin-top: 2px;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 750;
}

.player-role-status {
  text-align: right;
}

.player-role-status strong {
  color: var(--brand-dark);
  font-size: 12px;
}

.role-sheet-hero {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 11px;
  border-radius: 8px;
  background: linear-gradient(135deg, #2c2520, #50382b);
  color: #fff;
}

.role-sheet-hero .headshot {
  width: 52px;
  height: 52px;
}

.role-sheet-hero strong,
.role-sheet-hero em,
.role-sheet-hero b {
  display: block;
}

.role-sheet-hero em {
  margin-top: 3px;
  color: rgba(255,255,255,.68);
  font-size: 12px;
  font-style: normal;
  font-weight: 750;
}

.role-sheet-hero b {
  padding: 5px 7px;
  border-radius: 999px;
  background: rgba(255,113,64,.18);
  color: #ff956f;
  font-size: 12px;
}

.role-sheet-current {
  display: grid;
  gap: 3px;
  padding: 11px;
  border: 1px solid rgba(182,50,44,.2);
  border-radius: 8px;
  background: var(--panel);
}

.role-sheet-current span,
.role-sheet-current em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 750;
}

.role-option-list {
  display: grid;
  gap: 6px;
}

.role-option {
  display: grid;
  grid-template-columns: minmax(0, .7fr) minmax(0, 1.3fr);
  align-items: center;
  min-height: 58px;
  gap: 10px;
  padding: 9px 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  color: var(--ink);
  text-align: left;
}

.role-option.active {
  border-color: var(--brand);
  background: rgba(182,50,44,.07);
  box-shadow: inset 3px 0 0 var(--brand);
}

.role-option strong,
.role-option span,
.role-option em {
  display: block;
}

.role-option span,
.role-option em,
.role-sheet-note {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.35;
}

.role-option span {
  margin-top: 3px;
}

.role-sheet-note {
  margin: 0;
  padding: 10px;
  border-left: 3px solid var(--brand);
  background: #f6f0e4;
}

.summary-story-outcome {
  display: grid;
  gap: 4px;
  padding: 11px;
  border: 1px solid rgba(182,50,44,.2);
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(182,50,44,.1), #f6f0e4);
}

.summary-story-outcome span,
.summary-story-outcome em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

@media (max-width: 380px) {
  .story-objective-list {
    grid-template-columns: 1fr;
  }

  .story-objective {
    grid-template-columns: minmax(0, 1fr) 72px;
    align-items: center;
    border-right: 0;
    border-bottom: 1px solid rgba(255,255,255,.1);
  }

  .story-objective:last-child {
    border-bottom: 0;
  }

  .role-option {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}

.section-row-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 600;
}

.section-row-title button {
  border-color: var(--line);
  color: var(--brand-dark);
}

.overview-game-log .game-log-row:nth-child(n+4) {
  display: none;
}

.dynasty-board {
  display: grid;
  gap: 8px;
}

.dynasty-empty {
  display: grid;
  gap: 3px;
  padding: 4px 0;
}

.dynasty-empty strong {
  font-size: 13px;
}

.dynasty-empty span {
  color: var(--muted);
  font-size: 12px;
}

.dynasty-totals {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 6px;
}

.dynasty-totals div {
  display: grid;
  gap: 2px;
  padding: 8px;
  border-right: 1px solid var(--line);
}

.dynasty-totals div:last-child {
  border-right: 0;
}

.dynasty-totals span,
.dynasty-seasons em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.dynasty-totals strong {
  font-size: 14px;
}

.dynasty-seasons {
  display: grid;
}

.dynasty-seasons > div {
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 2px 8px;
  padding: 7px 0;
  border-bottom: 1px solid var(--line);
}

.dynasty-seasons span {
  grid-row: 1 / 3;
  color: var(--brand-dark);
  font-size: 12px;
  font-weight: 600;
}

.dynasty-seasons strong {
  font-size: 12px;
}

.dynasty-seasons em {
  grid-column: 2;
}

.dynasty-banners {
  display: flex;
  gap: 5px;
  overflow-x: auto;
  scrollbar-width: none;
}

.dynasty-banners::-webkit-scrollbar { display: none; }
.dynasty-banners span { flex: 0 0 auto; padding: 5px 7px; color: #fff; background: #29231f; font-size: 12px; font-weight: 600; }

.summary-season-story {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
}

.summary-season-story > div {
  display: grid;
  gap: 3px;
  min-width: 0;
  padding: 10px;
  border: 1px solid var(--line);
  background: #fff;
}

.summary-season-story span,
.summary-season-story em { color: var(--muted); font-size: 12px; font-style: normal; }
.summary-season-story strong { font-size: 12px; line-height: 1.4; }

@media (max-width: 380px) {
  .game-day-matchup {
    grid-template-columns: minmax(0, 1fr) 48px minmax(0, 1fr);
    padding-right: 9px;
    padding-left: 9px;
  }

  .game-day-logo {
    width: 50px;
    height: 50px;
  }

  .game-day-team strong {
    font-size: 15px;
  }

  .game-plan-selector button {
    font-size: 12px;
  }

  .gm-briefing {
    grid-template-columns: 1fr;
  }

  .story-grid strong {
    font-size: 12px;
  }
}

/* Draft command center */
.season-subtabs button.attention::after {
  content: "";
  width: 6px;
  height: 6px;
  margin-left: 5px;
  border-radius: 50%;
  background: var(--brand);
  box-shadow: 0 0 0 3px rgba(230, 69, 28, .13);
}

.draft-hub { display: grid; gap: 10px; min-width: 0; }
.draft-hub > * { min-width: 0; }

.draft-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 116px;
  gap: 10px;
  padding: 16px;
  color: #fff;
  background: #29231f;
  border-left: 4px solid var(--brand);
}

.draft-hero.on-clock { background: #1e2c25; border-left-color: #26a269; }
.draft-hero > div, .draft-hero-pick { display: grid; gap: 4px; }
.draft-hero span, .draft-hero em { color: rgba(255, 255, 255, .64); font-size: 12px; font-style: normal; font-weight: 600; }
.draft-hero > div:first-child > strong { font-size: 21px; }
.draft-hero-pick { align-content: center; padding-left: 12px; border-left: 1px solid rgba(255, 255, 255, .16); }
.draft-hero-pick strong { color: #ff754e; font-size: 27px; }

.draft-staff-strip { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border: 1px solid var(--line); background: #fff; }
.draft-staff-strip > div { display: grid; gap: 2px; min-width: 0; padding: 9px; border-right: 1px solid var(--line); }
.draft-staff-strip > div:last-child { border-right: 0; }
.draft-staff-strip span { color: var(--muted); font-size: 12px; }
.draft-staff-strip strong { overflow: hidden; font-size: 12px; text-overflow: ellipsis; white-space: nowrap; }
.draft-class-note { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 8px; align-items: center; padding: 9px 11px; border: 1px solid var(--line); background: #f7f4f1; }
.draft-class-note strong { color: var(--brand); font-size: 12px; }
.draft-class-note span { color: var(--muted); font-size: 12px; line-height: 1.45; }

.draft-actions-bar { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 10px; align-items: center; padding: 12px; border: 1px solid #f1c5b6; background: #fff6f1; }
.draft-actions-bar > div { display: grid; gap: 2px; }
.draft-actions-bar span { color: var(--brand); font-size: 12px; font-weight: 600; }
.draft-actions-bar strong { font-size: 12px; }
.draft-actions-bar button { min-height: 40px; padding: 0 14px; }

.draft-order-board, .draft-big-board, .draft-lottery-note { min-width: 0; padding: 12px; border: 1px solid var(--line); background: #fff; }
.draft-order-board { overflow: hidden; }
.draft-lottery-note { display: grid; gap: 5px; }
.draft-lottery-note strong { font-size: 13px; }
.draft-lottery-note p { margin: 0; color: var(--muted); font-size: 12px; line-height: 1.55; }
.draft-order-scroll { display: grid; grid-auto-flow: column; grid-auto-columns: 134px; gap: 7px; width: 100%; max-width: 100%; overflow-x: auto; overscroll-behavior-x: contain; padding-bottom: 4px; scrollbar-width: none; }
.draft-order-scroll::-webkit-scrollbar { display: none; }
.draft-order-row { display: grid; grid-template-columns: 20px 28px minmax(0, 1fr); align-items: center; gap: 5px; padding: 8px; border: 1px solid var(--line); background: #fbfaf9; }
.draft-order-row.mine { border-color: var(--brand); background: #fff3ee; }
.draft-order-row b { color: var(--brand); font-size: 12px; }
.draft-order-row .mini-logo { width: 26px; height: 26px; }
.draft-order-row strong { overflow: hidden; font-size: 12px; text-overflow: ellipsis; white-space: nowrap; }
.draft-order-row em { grid-column: 2 / 4; overflow: hidden; color: var(--muted); font-size: 12px; font-style: normal; text-overflow: ellipsis; white-space: nowrap; }

.draft-prospect-list { display: grid; gap: 6px; }
.draft-prospect { display: grid; grid-template-columns: 54px minmax(0, 1fr) 76px; gap: 9px; align-items: center; min-height: 74px; padding: 9px; border: 1px solid var(--line); background: #fff; }
.draft-prospect.selectable { border-color: #2c9f69; box-shadow: inset 3px 0 #2c9f69; }
.draft-prospect.drafted { background: #f5f3f1; opacity: .76; }
.draft-rank { display: grid; gap: 3px; }
.draft-rank span { color: var(--brand); font-size: 12px; font-weight: 600; }
.draft-rank em { color: var(--muted); font-size: 12px; font-style: normal; }
.draft-prospect-main { display: grid; gap: 3px; min-width: 0; }
.draft-prospect-main > strong { overflow: hidden; font-size: 13px; text-overflow: ellipsis; white-space: nowrap; }
.draft-prospect-main > span { color: var(--muted); font-size: 12px; }
.draft-prospect-main > div { display: flex; flex-wrap: wrap; gap: 4px; }
.draft-prospect-main b, .draft-prospect-main em { padding: 2px 4px; background: #f4f1ee; color: #645b55; font-size: 12px; font-style: normal; }
.draft-prospect-action { display: grid; justify-items: end; }
.draft-prospect-action button { min-height: 34px; padding: 0 10px; font-size: 12px; }
.draft-prospect-action span, .draft-prospect-action strong { color: var(--muted); font-size: 12px; text-align: right; }

@media (max-width: 420px) {
  .draft-hero { grid-template-columns: minmax(0, 1fr) 94px; padding: 13px; }
  .draft-hero > div:first-child > strong { font-size: 18px; }
  .draft-hero-pick strong { font-size: 23px; }
  .draft-staff-strip { grid-template-columns: 1fr; }
  .draft-staff-strip > div { grid-template-columns: 72px minmax(0, 1fr); border-right: 0; border-bottom: 1px solid var(--line); }
  .draft-staff-strip > div:last-child { border-bottom: 0; }
  .draft-actions-bar { grid-template-columns: 1fr; }
  .draft-actions-bar button { width: 100%; }
  .draft-prospect { grid-template-columns: 44px minmax(0, 1fr) 62px; gap: 6px; }
  .draft-prospect-action button { padding: 0 7px; }
}

/* 2K-style season command center: preserve the result of every simulation beat. */
.season-pulse-panel {
  display: grid;
  gap: 10px;
  padding: 12px;
  border: 1px solid #d9cec6;
  border-radius: 10px;
  background: #fffaf6;
}

.season-pulse-panel[hidden] { display: none; }

.season-pulse-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
}

.season-pulse-head > div:first-child,
.season-pulse-record {
  display: grid;
  gap: 3px;
}

.season-pulse-head span,
.simulation-report header span,
.playoff-game-trail > span,
.conference-bracket > header span,
.league-finals > header span {
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .12em;
}

.season-pulse-head strong { font-size: 15px; }

.season-pulse-record { text-align: right; }
.season-pulse-record b { color: var(--brand-dark); font-size: 24px; line-height: 1; }
.season-pulse-record em { color: var(--muted); font-size: 12px; font-style: normal; font-weight: 600; }

.playoff-race-strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(72px, 1fr));
  gap: 6px;
  overflow-x: auto;
  padding: 2px 1px 5px;
  scrollbar-width: none;
}

.playoff-race-strip::-webkit-scrollbar,
.playoff-bracket-scroll::-webkit-scrollbar { display: none; }

.playoff-race-team {
  display: grid;
  grid-template-columns: 18px 24px minmax(0, 1fr);
  align-items: center;
  gap: 4px;
  min-width: 78px;
  padding: 7px 6px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: #fff;
}

.playoff-race-team.mine { border-color: rgba(182,50,44,.48); background: #fff0e8; }
.playoff-race-team i { color: var(--muted); font-size: 12px; font-style: normal; font-weight: 600; }
.playoff-race-team strong { overflow: hidden; font-size: 12px; text-overflow: ellipsis; white-space: nowrap; }
.playoff-race-team em { grid-column: 2 / -1; color: var(--ink); font-size: 12px; font-style: normal; font-weight: 600; }
.playoff-race-team small { grid-column: 2 / -1; color: var(--muted); font-size: 12px; font-weight: 600; }

.simulation-report {
  display: grid;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid var(--line);
}

.simulation-report.empty strong { color: var(--muted); font-size: 12px; }
.simulation-report header { display: flex; align-items: end; justify-content: space-between; gap: 8px; }
.simulation-report header > div { display: grid; gap: 2px; }
.simulation-report header strong { font-size: 14px; }
.simulation-report header em { color: var(--muted); font-size: 12px; font-style: normal; font-weight: 850; }

.simulation-games {
  display: grid;
  grid-template-columns: repeat(4, minmax(86px, 1fr));
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 3px;
}

.simulation-game {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 3px 6px;
  min-width: 86px;
  padding: 7px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: #fff;
}

.simulation-game b { grid-row: 1 / 3; align-self: center; color: var(--good); font-size: 16px; }
.simulation-game.loss b { color: var(--bad); }
.simulation-game span { overflow: hidden; color: var(--muted); font-size: 12px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
.simulation-game strong { font-size: 12px; }

.playoff-series-grid { grid-template-columns: minmax(0, 1fr); }

.playoff-bracket-scroll {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  align-items: start;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 6px;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
}

.playoff-scroll-hint {
  display: flex;
  min-height: 30px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 2px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 850;
}

.playoff-scroll-hint span::before { content: "\\2039"; margin-right: 5px; color: var(--brand); }
.playoff-scroll-hint span::after { content: "\\203A"; margin-left: 5px; color: var(--brand); }
.playoff-scroll-hint b { color: var(--ink); font-size: 12px; }

.conference-bracket,
.league-finals {
  min-width: 570px;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  scroll-snap-align: start;
}

.conference-bracket > header,
.league-finals > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.conference-bracket > header em,
.league-finals > header em { color: var(--muted); font-size: 12px; font-style: normal; font-weight: 600; }

.bracket-rounds {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 10px;
  align-items: stretch;
}

.bracket-round { display: grid; align-content: space-around; gap: 6px; }
.bracket-round > b { color: var(--muted); font-size: 12px; }

.bracket-series {
  display: grid;
  gap: 1px;
  min-height: 54px;
  padding: 4px;
  border: 1px solid var(--line);
  border-left: 3px solid #c8beb7;
  border-radius: 6px;
  background: #fffdf9;
}

.bracket-series.mine { border-left-color: var(--brand); background: #fff1e9; }
.bracket-series.active { box-shadow: 0 0 0 1px rgba(182,50,44,.16); }
.bracket-series.pending { place-content: center; color: var(--muted); text-align: center; }
.bracket-series.pending span { font-size: 12px; font-weight: 600; }
.bracket-series.pending em { font-size: 12px; font-style: normal; }

.bracket-team {
  display: grid;
  grid-template-columns: 14px 20px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 4px;
  min-width: 0;
}

.bracket-team i { color: var(--muted); font-size: 12px; font-style: normal; font-weight: 600; }
.bracket-team strong { overflow: hidden; font-size: 12px; text-overflow: ellipsis; white-space: nowrap; }
.bracket-team b { font-size: 12px; text-align: right; }
.bracket-team.winner strong,
.bracket-team.winner b { color: var(--brand-dark); }

.league-finals { min-width: 260px; background: #2f2923; color: #fff; }
.league-finals .bracket-series { border-color: rgba(255,255,255,.18); background: rgba(255,255,255,.08); }
.league-finals .bracket-team i { color: rgba(255,255,255,.55); }

.playin-results { border-bottom: 1px solid var(--line); padding-bottom: 8px; }
.playin-results summary { color: var(--ink); cursor: pointer; font-size: 12px; font-weight: 600; }
.playin-results summary em { color: var(--muted); font-size: 12px; font-style: normal; }
.playin-results > div { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; margin-top: 7px; }

.playoff-game-trail { display: grid; gap: 6px; padding-top: 8px; border-top: 1px solid var(--line); }
.playoff-game-trail > div { display: flex; gap: 6px; overflow-x: auto; }
.playoff-game-trail i { min-width: max-content; padding: 6px 8px; border-radius: 999px; background: #f0e9e2; color: var(--ink); font-size: 12px; font-style: normal; font-weight: 600; }
.playoff-game-trail i b { margin-right: 4px; color: var(--brand); }

@media (max-width: 420px) {
  .season-pulse-head { align-items: start; }
  .season-pulse-head strong { font-size: 14px; }
  .season-pulse-record b { font-size: 22px; }
  .playoff-race-strip { grid-template-columns: repeat(5, 82px); }
  .simulation-games { grid-template-columns: repeat(4, 96px); }
  .conference-bracket { min-width: 548px; }
  .playin-results > div { grid-template-columns: 1fr; }
}

@supports (height: 100dvh) {
  .app-shell {
    min-height: 100dvh;
    max-height: 100dvh;
  }

  main {
    height: calc(100dvh - 16px - env(safe-area-inset-bottom));
  }
}

/* Dynasty reliability and offseason workbench */
[hidden] {
  display: none !important;
}

.bottom-nav {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.offseason-journey {
  display: grid;
  gap: 10px;
  margin-top: 12px;
  padding: 12px;
  border: 1px solid #d7c9ac;
  background: #fffdf7;
  box-shadow: 0 10px 24px rgba(59, 43, 25, .06);
}

.offseason-journey > header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
}

.offseason-journey > header > div {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.offseason-journey header span,
.offseason-journey header em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.offseason-journey header span {
  color: #a57a22;
  font-weight: 600;
  letter-spacing: .08em;
}

.offseason-journey header strong {
  font-size: 14px;
}

.offseason-journey > header button {
  min-height: 44px;
}

.offseason-journey > details > summary,
.draft-order-board > summary {
  display: flex;
  min-height: 44px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--ink);
  font-size: 12px;
  font-weight: 600;
  list-style: none;
  cursor: pointer;
}

.offseason-journey > details > summary::-webkit-details-marker,
.draft-order-board > summary::-webkit-details-marker {
  display: none;
}

.offseason-journey summary b,
.draft-order-board summary em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.offseason-stage-list {
  display: grid;
  gap: 6px;
  padding-top: 8px;
  border-top: 1px solid var(--line);
}

.offseason-stage-list > button {
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr);
  gap: 9px;
  min-height: 48px;
  align-items: center;
  padding: 7px 9px;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--ink);
  text-align: left;
}

.offseason-stage-list > button i {
  display: grid;
  width: 26px;
  height: 26px;
  place-items: center;
  border-radius: 50%;
  background: #eee9df;
  color: #756b5c;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

.offseason-stage-list > button span {
  display: grid;
  gap: 2px;
}

.offseason-stage-list > button strong {
  font-size: 12px;
}

.offseason-stage-list > button em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.offseason-stage-list > button.done i {
  background: #173a2a;
  color: #fff;
}

.offseason-stage-list > button.current {
  border-color: #c8342d;
  background: #fff6f2;
  box-shadow: inset 3px 0 #c8342d;
}

.offseason-stage-list > button.current i {
  background: #c8342d;
  color: #fff;
}

.offseason-stage-list > button.ready {
  border-color: #d7c9ac;
}

.offseason-stage-list > button:disabled {
  opacity: .52;
  cursor: default;
}

.draft-order-board {
  padding-top: 4px;
}

.draft-order-board[open] > summary {
  border-bottom: 1px solid var(--line);
}

.draft-order-board[open] .draft-order-scroll {
  margin-top: 10px;
}

.decision-receipt-backdrop {
  position: fixed;
  inset: 0;
  z-index: 26;
  background: rgba(18, 16, 14, .42);
}

.decision-receipt {
  position: fixed;
  right: 14px;
  bottom: calc(14px + env(safe-area-inset-bottom));
  left: 14px;
  z-index: 27;
  display: grid;
  gap: 12px;
  max-width: 452px;
  max-height: calc(100svh - 28px);
  margin: 0 auto;
  overflow-y: auto;
  padding: 18px;
  border: 1px solid #d7c9ac;
  border-radius: 16px;
  background: #fffdf7;
  box-shadow: 0 24px 70px rgba(20, 17, 14, .25);
}

.decision-receipt-mark {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 50%;
  background: #173a2a;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
}

.decision-receipt header {
  display: grid;
  gap: 5px;
}

.decision-receipt header span {
  color: #a57a22;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .08em;
}

.decision-receipt header h3 {
  font-size: 20px;
}

.decision-receipt header p {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.55;
}

.decision-receipt-body {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.decision-receipt-body > div {
  display: grid;
  gap: 3px;
  min-width: 0;
  padding: 9px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.decision-receipt-body span {
  color: var(--muted);
  font-size: 12px;
}

.decision-receipt-body strong {
  overflow-wrap: anywhere;
  font-size: 12px;
}

.sheet-list .asset-item {
  min-width: 0;
}

.sheet-list .asset-main,
.sheet-list .asset-main > div {
  min-width: 0;
  overflow: hidden;
}

.sheet-list .asset-money,
.sheet-list .asset-action {
  max-width: 42%;
}

.bottom-sheet button,
.trade-modal button,
.inquiry-modal button,
.decision-receipt button {
  min-height: 44px;
}

@media (max-width: 420px) {
  .offseason-journey > header {
    grid-template-columns: 1fr;
  }

  .offseason-journey > header button {
    width: 100%;
  }

  .rotation-controls {
    grid-template-columns: 58px minmax(0, 1fr) 40px 44px 40px;
    gap: 4px;
  }

  .sheet-list .asset-meta {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

/* 2026-08 mobile information architecture */
.season-legacy-hooks {
  display: none !important;
}

.franchise-growth-card,
.franchise-directive-card {
  display: none !important;
}

.franchise-roster-preview {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.franchise-roster-preview > summary {
  display: flex;
  min-height: 40px;
  align-items: center;
  justify-content: space-between;
  padding: 0 11px;
  font-size: 12px;
  font-weight: 600;
  list-style: none;
}

.franchise-roster-preview > summary::-webkit-details-marker {
  display: none;
}

.franchise-roster-preview > summary em {
  color: var(--brand-dark);
  font-size: 12px;
  font-style: normal;
}

.franchise-roster-preview > summary em::after {
  content: " +";
}

.franchise-roster-preview[open] > summary em::after {
  content: " −";
}

.franchise-roster-preview article {
  padding: 0 11px 10px;
  border-top: 1px solid var(--line);
}

.franchise-roster-preview + .franchise-grid:has(.franchise-medical-card[hidden]) {
  display: none;
}

.franchise-medical-card[hidden],
.medical-center-card[hidden],
.last-game-strip[hidden] {
  display: none !important;
}

.app-shell[data-mode="season"] .season-card > .section-title {
  display: none;
}

.app-shell[data-mode="season"] .season-summary {
  order: 0;
}

.app-shell[data-mode="season"] .season-subtabs {
  order: 1;
}

.app-shell[data-mode="season"] .season-tab-panel {
  order: 2;
}

.season-summary div {
  padding: 7px 9px;
}

.season-summary span {
  font-size: 12px;
}

.season-summary strong {
  margin-top: 1px;
  font-size: 14px;
}

.season-subtabs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) 42px;
  gap: 4px;
  overflow: visible;
  padding: 4px 0;
}

.season-subtabs > button,
.season-more-menu > summary {
  display: grid;
  min-width: 0;
  min-height: 36px;
  place-items: center;
  padding: 0 6px;
  border: 0;
  border-radius: 6px;
  background: #dad7d2;
  color: #5e5853;
  font-size: 12px;
  font-weight: 600;
  list-style: none;
  cursor: pointer;
}

.season-subtabs > button.active,
.season-more-menu.active > summary,
.season-more-menu[open] > summary {
  background: #27231f;
  color: #fff;
}

.season-more-menu {
  position: relative;
  min-width: 0;
}

.season-more-menu > summary::-webkit-details-marker {
  display: none;
}

.season-more-menu > div {
  position: absolute;
  right: 0;
  top: 42px;
  z-index: 12;
  display: grid;
  width: 164px;
  gap: 3px;
  padding: 6px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 16px 40px rgba(28, 24, 21, .24);
}

.season-more-menu[open] > div {
  position: fixed;
  right: 9px;
  top: 170px;
  width: 164px;
}

.season-more-menu > div button {
  min-height: 40px;
  padding: 0 11px;
  border: 0;
  border-radius: 5px;
  background: #f1efec;
  color: var(--ink);
  font-size: 12px;
  font-weight: 600;
  text-align: left;
}

.season-more-menu > div button.active {
  background: #fff0e9;
  color: var(--brand-dark);
}

.season-tab-panel {
  max-height: none;
  overflow: visible;
  overscroll-behavior: auto;
}

.season-tab-panel::-webkit-scrollbar {
  display: none;
}

.game-day-head {
  min-height: 34px;
  padding: 7px 10px;
}

.game-day-head strong {
  font-size: 13px;
}

.game-day-head span,
.game-day-head em {
  font-size: 12px;
}

.game-day-matchup {
  grid-template-columns: minmax(0, 1fr) 48px minmax(0, 1fr);
  min-height: 76px;
  padding: 6px 10px 4px;
}

.game-day-logo {
  width: 42px;
  height: 42px;
}

.game-day-team strong {
  font-size: 13px;
}

.game-day-team em,
.game-day-center-mark span {
  font-size: 12px;
}

.game-day-scouting {
  display: -webkit-box;
  max-height: 42px;
  overflow: hidden;
  padding: 7px 10px;
  font-size: 12px;
  line-height: 1.4;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.game-plan-panel {
  gap: 5px;
  padding: 7px 10px;
}

.game-plan-selector {
  grid-column: 1 / -1;
}

.game-plan-selector button {
  min-height: 28px;
  border-radius: 4px;
}

.game-plan-rotation {
  min-height: 28px;
}

.season-command {
  order: 2;
  gap: 6px;
  padding: 7px 10px 9px;
  border: 0;
  border-top: 1px solid rgba(255,255,255,.1);
  border-radius: 0;
  background: transparent;
}

.season-actions {
  grid-template-columns: minmax(0, 1.3fr) minmax(98px, .7fr);
  gap: 6px;
}

.game-day-center {
  display: flex;
  flex-direction: column;
}

.season-actions > .primary-button,
.quick-advance summary {
  min-height: 38px;
  border-radius: 6px;
  font-size: 12px;
}

.last-game-strip {
  min-height: 38px;
  margin-top: 0;
  padding: 6px 8px;
}

.last-game-strip strong {
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.season-context-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 160px;
  gap: 8px 12px;
  padding: 10px;
  border: 1px solid var(--line);
  border-left: 3px solid var(--brand);
  border-radius: 8px;
  background: #fff;
}

.season-context-copy {
  display: grid;
  grid-column: 1;
  grid-row: 1;
  align-content: start;
  gap: 2px;
  min-width: 0;
}

.season-context-copy span {
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
}

.season-context-copy strong {
  overflow: hidden;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.season-context-copy p {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.4;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.season-context-status {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column: 1 / -1;
  grid-row: 2;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 6px;
}

.season-context-status div {
  display: grid;
  gap: 1px;
  min-width: 0;
  padding: 6px;
  border-right: 1px solid var(--line);
}

.season-context-status div:last-child {
  border-right: 0;
}

.season-context-status span {
  color: var(--muted);
  font-size: 12px;
}

.season-context-status strong {
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.season-context-card .directive-progress {
  grid-column: 1 / -1;
  grid-row: 3;
  height: 3px;
  margin: 0;
}

.season-context-story {
  align-self: center;
  grid-column: 2;
  grid-row: 1;
  overflow: hidden;
  color: #746d67;
  font-size: 12px;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.player-workbench-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
}

.player-workbench-actions button {
  min-height: 38px;
}

.roster-disclosure {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.roster-disclosure > summary {
  display: flex;
  min-height: 42px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 12px;
  font-weight: 600;
  list-style: none;
}

.roster-disclosure > summary::-webkit-details-marker {
  display: none;
}

.roster-disclosure > summary::after {
  content: "+";
  color: var(--brand);
  font-size: 16px;
}

.roster-disclosure[open] > summary::after {
  content: "−";
}

.roster-disclosure > summary em {
  margin-left: auto;
  padding-right: 8px;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.roster-disclosure .player-roles-intro,
.roster-disclosure .player-roles-list {
  margin-right: 10px;
  margin-left: 10px;
}

.roster-disclosure .player-roles-list {
  max-height: 250px;
  overflow-y: auto;
  padding-bottom: 10px;
}

.season-player-list,
.standings-list,
.free-agent-list,
.mvp-ladder-list,
.draft-hub,
.season-summary-board {
  max-height: calc(100svh - 340px - env(safe-area-inset-bottom));
  overflow-y: auto;
  overscroll-behavior: contain;
}

.league-task-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px;
}

.league-team-console {
  display: grid;
  gap: 10px;
  padding: 11px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fffaf0;
}

.league-team-console-head {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 9px;
}

.league-team-console-logo {
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: #f4eee2 center / 34px 34px no-repeat;
}

.league-team-console-head > div {
  display: grid;
  min-width: 0;
  gap: 2px;
}

.league-team-console-head span {
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .08em;
}

.league-team-console-head strong {
  overflow: hidden;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.league-team-console-head em {
  overflow: hidden;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.league-team-actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px;
}

.league-team-actions button {
  min-width: 0;
  min-height: 44px;
  padding: 0 7px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: #fff;
  color: var(--ink);
  font-size: 12px;
  font-weight: 600;
}

.league-team-actions .league-trade-entry {
  border-color: #2d2925;
  background: #2d2925;
  color: #fff;
}

.war-room-tools {
  display: flex;
  align-items: center;
  gap: 6px;
}

.trade-back-button {
  min-height: 40px;
  padding: 0 10px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: #fff;
  color: var(--ink);
  font-size: 12px;
  font-weight: 600;
}

.league-task-grid button {
  display: grid;
  gap: 3px;
  min-width: 0;
  min-height: 58px;
  align-content: center;
  padding: 8px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: #fff;
  color: var(--ink);
  text-align: left;
}

.league-task-grid span {
  font-size: 12px;
  font-weight: 600;
}

.league-task-grid em {
  overflow: hidden;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.league-detail-head {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr);
  align-items: center;
  gap: 7px;
}

.league-detail-head button {
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 6px;
  background: #27231f;
  color: #fff;
  font-size: 22px;
}

.league-detail-head strong {
  font-size: 15px;
}

@media (max-width: 420px) {
  .season-context-card {
    grid-template-columns: minmax(0, 1fr) 116px;
  }

  .season-context-copy p {
    -webkit-line-clamp: 1;
  }

  .season-context-status div {
    padding: 5px 4px;
  }

  .war-room-top {
    align-items: flex-start;
  }

  .war-room-tools {
    align-items: flex-end;
    flex-direction: column-reverse;
  }
}

/* 2026-09 mobile command center: one fact, one control, one clear next step */
.topbar {
  display: none;
}

.app-shell[data-mode="season"] .season-summary {
  display: none;
}

.season-subtabs {
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 4px;
}

.season-subtabs > button {
  min-height: 40px;
  padding: 0 3px;
}

.season-detail-link {
  min-height: 40px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: #fff;
  color: var(--brand-dark);
  font-size: 12px;
  font-weight: 600;
}

.season-detail-head {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr);
  align-items: center;
  gap: 8px;
}

.season-detail-head button {
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 7px;
  background: #27231f;
  color: #fff;
  font-size: 24px;
}

.season-detail-head strong {
  font-size: 16px;
}

.game-day-center,
.game-day-head,
.game-day-matchup,
.game-day-scouting,
.game-plan-panel,
.season-command {
  width: 100%;
  max-width: 100%;
  min-width: 0;
}

.game-day-head > div,
.game-day-head > em {
  min-width: 0;
}

.game-day-head > em {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.honor-history-disclosure {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.honor-history-disclosure > summary {
  display: flex;
  min-height: 44px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 11px;
  list-style: none;
  cursor: pointer;
}

.honor-history-disclosure > summary::-webkit-details-marker {
  display: none;
}

.honor-history-disclosure > summary span {
  font-size: 12px;
  font-weight: 600;
}

.honor-history-disclosure > summary em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.honor-history-disclosure > summary::after {
  content: "+";
  color: var(--brand);
  font-size: 17px;
}

.honor-history-disclosure[open] > summary::after {
  content: "−";
}

.honor-history-disclosure > div {
  display: grid;
  gap: 8px;
  padding: 0 8px 8px;
  border-top: 1px solid var(--line);
}

.honor-history-disclosure section {
  padding-top: 8px;
}

.final-lineups-disclosure {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.final-lineups-disclosure > summary {
  display: flex;
  min-height: 44px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 10px;
  list-style: none;
  cursor: pointer;
}

.final-lineups-disclosure > summary::-webkit-details-marker {
  display: none;
}

.final-lineups-disclosure > summary span {
  color: var(--ink);
  font-size: 12px;
  font-weight: 600;
}

.final-lineups-disclosure > summary em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}

.final-lineups-disclosure > summary::after {
  content: "+";
  color: var(--brand);
  font-size: 17px;
}

.final-lineups-disclosure[open] > summary::after {
  content: "−";
}

.final-lineups-disclosure > div {
  border-top: 1px solid var(--line);
}

.season-awards-backdrop {
  position: fixed;
  inset: 0;
  z-index: 30;
  background: rgba(18, 16, 14, .68);
  backdrop-filter: blur(4px);
}

.season-awards-ceremony {
  position: fixed;
  right: 12px;
  bottom: calc(12px + env(safe-area-inset-bottom));
  left: 12px;
  z-index: 31;
  display: grid;
  gap: 12px;
  width: min(452px, calc(100vw - 24px));
  max-height: calc(100svh - 24px - env(safe-area-inset-bottom));
  margin: 0 auto;
  overflow-y: auto;
  padding: 18px;
  border: 1px solid #d2b779;
  border-radius: 16px;
  background: #171513;
  color: #fff;
  box-shadow: 0 28px 84px rgba(0, 0, 0, .42);
}

.season-awards-ceremony header {
  display: grid;
  gap: 5px;
  padding-bottom: 4px;
  border-bottom: 1px solid rgba(255,255,255,.14);
}

.season-awards-ceremony header span {
  color: #dfbd70;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .12em;
}

.season-awards-ceremony header h3 {
  margin: 0;
  color: #fff;
  font-size: 23px;
}

.season-awards-ceremony header p {
  margin: 0;
  color: rgba(255,255,255,.62);
  font-size: 12px;
  line-height: 1.5;
}

.season-awards-content {
  display: grid;
  gap: 8px;
}

.season-award-winner {
  display: grid;
  min-width: 0;
  gap: 3px;
  padding: 10px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 8px;
  background: rgba(255,255,255,.06);
}

.season-award-winner.featured {
  padding: 14px;
  border-color: #d2b779;
  background: linear-gradient(135deg, rgba(210,183,121,.24), rgba(255,255,255,.06));
}

.season-award-winner span {
  color: #dfbd70;
  font-size: 12px;
  font-weight: 600;
}

.season-award-winner strong {
  overflow: hidden;
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.season-award-winner.featured strong {
  font-size: 24px;
}

.season-award-winner em {
  overflow: hidden;
  color: rgba(255,255,255,.6);
  font-size: 12px;
  font-style: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.season-awards-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
}

.season-awards-grid > .season-award-winner:last-child:nth-child(odd) {
  grid-column: 1 / -1;
}

.season-awards-lineups {
  border-top: 1px solid rgba(255,255,255,.13);
  border-bottom: 1px solid rgba(255,255,255,.13);
}

.season-awards-lineups > summary {
  min-height: 42px;
  padding: 13px 0;
  color: rgba(255,255,255,.78);
  font-size: 12px;
  font-weight: 600;
  list-style-position: inside;
}

.season-awards-lineups > div,
.season-awards-lineups section {
  display: grid;
  gap: 4px;
}

.season-awards-lineups > div {
  padding-bottom: 10px;
}

.season-awards-lineups section strong {
  color: #dfbd70;
  font-size: 12px;
}

.season-awards-lineups section span {
  color: rgba(255,255,255,.7);
  font-size: 12px;
  line-height: 1.45;
}

.season-awards-ceremony > .primary-button {
  min-height: 48px;
  background: #f6f0e4;
  color: #171513;
}

.manager-story-backdrop {
  position: fixed;
  inset: 0;
  z-index: 34;
  background: rgba(24, 20, 17, .52);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.manager-story-sheet {
  position: fixed;
  right: max(12px, calc((100vw - 452px) / 2));
  bottom: calc(12px + env(safe-area-inset-bottom));
  left: max(12px, calc((100vw - 452px) / 2));
  z-index: 35;
  display: grid;
  max-height: calc(100svh - 24px - env(safe-area-inset-bottom));
  gap: 12px;
  overflow-y: auto;
  padding: 7px 15px 15px;
  border: 1px solid rgba(49, 39, 31, .16);
  border-radius: 18px;
  background: #f7f1e7;
  box-shadow: 0 24px 70px rgba(32, 24, 19, .28);
  color: var(--ink);
  overscroll-behavior: contain;
}

.manager-story-sheet.open {
  animation: manager-story-rise .22s ease-out both;
}

@keyframes manager-story-rise {
  from { transform: translateY(18px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.manager-story-handle {
  width: 38px;
  height: 4px;
  margin: 0 auto 1px;
  border-radius: 999px;
  background: rgba(44, 35, 29, .2);
}

.manager-story-sheet header {
  display: grid;
  gap: 5px;
  padding: 3px 2px 1px;
}

.manager-story-sheet header span {
  color: #a36b0d;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .08em;
}

.manager-story-sheet header h3,
.manager-story-sheet header p {
  margin: 0;
}

.manager-story-sheet header h3 {
  font-family: var(--font-ui);
  font-size: clamp(21px, 6vw, 28px);
  line-height: 1.16;
}

.manager-story-sheet header p {
  color: #6f665e;
  font-size: 12px;
  line-height: 1.65;
}

.manager-story-evidence {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  overflow: hidden;
  border: 1px solid rgba(49, 39, 31, .13);
  border-radius: 10px;
  background: rgba(255, 255, 255, .62);
}

.manager-story-evidence > div {
  display: grid;
  min-width: 0;
  gap: 3px;
  padding: 10px;
  border-right: 1px solid rgba(49, 39, 31, .1);
  border-bottom: 1px solid rgba(49, 39, 31, .1);
}

.manager-story-evidence > div:nth-child(2n) { border-right: 0; }
.manager-story-evidence > div:nth-last-child(-n+2) { border-bottom: 0; }
.manager-story-evidence > div:only-child { grid-column: 1 / -1; border: 0; }

.manager-story-evidence span {
  color: #8b8178;
  font-size: 12px;
  font-weight: 600;
}

.manager-story-evidence strong {
  overflow-wrap: anywhere;
  font-size: 12px;
  line-height: 1.35;
}

.manager-story-choices {
  display: grid;
  gap: 7px;
}

.manager-story-choice,
.manager-story-continue {
  width: 100%;
  min-height: 48px;
  border: 1px solid rgba(49, 39, 31, .14);
  border-radius: 11px;
  background: rgba(255, 255, 255, .7);
  color: var(--ink);
  text-align: left;
}

.manager-story-choice {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 3px 10px;
  padding: 10px 11px;
  box-shadow: 0 5px 14px rgba(54, 42, 32, .045);
}

.manager-story-choice:active {
  border-color: rgba(217, 74, 30, .45);
  background: #f6f0e4;
  transform: translateY(1px);
}

.manager-story-choice span {
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
}

.manager-story-choice strong {
  grid-column: 2;
  grid-row: 1;
  font-size: 12px;
}

.manager-story-choice em {
  grid-column: 1 / -1;
  color: #746b63;
  font-size: 12px;
  font-style: normal;
  font-weight: 650;
  line-height: 1.45;
}

.manager-story-continue {
  padding: 0 14px;
  border-color: rgba(190, 137, 42, .36);
  background: linear-gradient(135deg, #fffaf0, #efe1c7);
  color: #3c3027;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

.summary-manager-debut {
  display: grid;
  gap: 5px;
  padding: 13px;
  border: 1px solid rgba(190, 137, 42, .3);
  border-radius: 9px;
  background: linear-gradient(135deg, #fffaf0, #f4ead8);
}

.summary-manager-debut span {
  color: #a36b0d;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .06em;
}

.summary-manager-debut strong {
  font-family: var(--font-ui);
  font-size: 17px;
  line-height: 1.3;
}

.summary-manager-debut p,
.summary-manager-debut em {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  line-height: 1.55;
}

.dynasty-seasons > div > p {
  grid-column: 2;
  margin: 2px 0 0;
  color: #7a6d62;
  font-size: 12px;
  line-height: 1.4;
}

@media (max-width: 360px) {
  .season-subtabs > button {
    min-height: 42px;
    font-size: 12px;
  }

  .standings-spotlight {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .standings-spotlight > div:nth-child(2) {
    border-right: 0;
  }

  .standings-spotlight > div:nth-child(-n+2) {
    border-bottom: 1px solid rgba(255,255,255,.12);
  }

  .team-stat-head,
  .season-player-row {
    grid-template-columns: minmax(92px, 1fr) 38px 34px 34px;
  }

  .team-stat-head > :nth-child(2),
  .team-stat-head > :nth-child(3),
  .season-player-row > :nth-child(2),
  .season-player-row > :nth-child(3) {
    display: none;
  }

  .war-room-actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .war-room-actions .primary-button {
    grid-column: 1 / -1;
  }

  .honor-selector-head {
    align-items: stretch;
    flex-direction: column;
  }

  .honor-category-selector {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .honor-category-selector button {
    min-height: 38px;
  }

  .season-awards-ceremony {
    right: 8px;
    bottom: calc(8px + env(safe-area-inset-bottom));
    left: 8px;
    width: calc(100vw - 16px);
    max-height: calc(100svh - 16px - env(safe-area-inset-bottom));
    padding: 14px;
  }

  .season-awards-grid {
    grid-template-columns: 1fr;
  }

  .manager-story-sheet {
    right: 8px;
    bottom: calc(8px + env(safe-area-inset-bottom));
    left: 8px;
    max-height: calc(100svh - 16px - env(safe-area-inset-bottom));
    padding-right: 12px;
    padding-left: 12px;
  }

  .manager-story-evidence {
    grid-template-columns: 1fr;
  }

  .manager-story-evidence > div,
  .manager-story-evidence > div:nth-child(2n),
  .manager-story-evidence > div:nth-last-child(-n+2) {
    border-right: 0;
    border-bottom: 1px solid rgba(49, 39, 31, .1);
  }

  .manager-story-evidence > div:last-child {
    border-bottom: 0;
  }
}

.season-legacy-hooks .dynasty-totals,
#dynastyBoard .dynasty-totals {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

@media (max-width: 420px) {
  .season-legacy-hooks .dynasty-totals,
  #dynastyBoard .dynasty-totals {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}


:host {
  display: block;
  min-height: 100svh;
  color: #10100f;
  background: #f1ebdd;
  --brand: #b6322c;
  --brand-dark: #7f241f;
  --ink: #10100f;
  --muted: #776f63;
  --line: #d5cbb8;
  --bg: #f1ebdd;
  --card: #fffaf0;
  --panel: #f6f0e4;
  --court: #24201c;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

.dynasty-document {
  min-height: 100svh;
  margin: 0;
  color: #10100f;
  background: #f1ebdd;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

.dynasty-document h1,
.dynasty-document h2,
.dynasty-document h3,
.dynasty-document .section-title {
  font-family: "Noto Serif SC", "Songti SC", SimSun, serif;
}

.dynasty-document .app-shell {
  max-width: 640px;
  margin: 0 auto;
}

@media (max-width: 420px) {
  .dynasty-document .franchise-hero {
    grid-template-columns: 46px minmax(0, 1fr);
    gap: 9px;
    padding: 50px 12px 12px;
  }

  .dynasty-document .franchise-logo {
    width: 46px;
    height: 46px;
  }

  .dynasty-document .franchise-hero h2 {
    overflow: hidden;
    font-size: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dynasty-document .micro-action {
    top: 10px;
    right: 10px;
  }
}
/* Approved H5 interaction surface. Kept after legacy styles by the runtime builder. */
.rotation-draft-actions { position:sticky; top:0; z-index:2; display:flex; gap:8px; padding:8px 0; background:#fff; }
.rotation-draft-actions button { min-height:44px; flex:1; padding:8px; border:1px solid #e7ded7; border-radius:5px; background:#fff; color:#191715; }
.rotation-draft-actions #rotationApplyBtn { background:#d94a1e; color:#fff; }
.rotation-draft-actions button:disabled { opacity:.45; }
:host { --brand:#d94a1e; --brand-dark:#a83315; --ink:#191715; --muted:#7a746e; --line:#e7ded7; --bg:#f2eee9; --card:#fff; --panel:#fffaf4; }
.dynasty-document { color:var(--ink); background:var(--bg); }
.dynasty-document .app-shell { max-width:480px; padding-bottom:env(safe-area-inset-bottom,0); }
.dynasty-document h1,.dynasty-document h2,.dynasty-document h3 { font-family:"PingFang SC","Microsoft YaHei",sans-serif; }
.dynasty-document button,.dynasty-document summary { touch-action:manipulation; }
.dynasty-document [hidden] { display:none !important; }
.app-shell[data-mode="season"] .season-card { padding:0; border:0; box-shadow:none; background:#fff; overflow:visible; }
.app-shell[data-mode="season"] .season-card > .section-title,.app-shell[data-mode="season"] .season-summary { display:none; }
.dynasty-team-header { display:flex; gap:12px; align-items:center; order:0; padding:16px; background:#fff; }
.dynasty-team-header .mini-logo { width:44px; height:44px; }
.dynasty-team-header strong,.dynasty-team-header small { display:block; }
.dynasty-team-header strong { font-size:19px; }
.dynasty-team-header small { margin-top:4px; color:var(--muted); font-size:12px; }
.app-shell[data-mode="season"] .season-context-tabs { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); position:sticky; top:0; z-index:12; order:1; gap:0; margin:0; padding:0 8px; border:0; border-bottom:1px solid var(--line); border-radius:0; background:#fff; overflow:visible; }
.season-context-tabs > button { min-width:0; min-height:48px; padding:0; border:0; border-bottom:3px solid transparent; border-radius:0; background:transparent; color:var(--muted); font-size:15px; }
.season-context-tabs > button.active { background:transparent; border-bottom-color:var(--brand); color:var(--ink); box-shadow:none; }
.app-shell[data-mode="season"] .season-tab-panel { order:2; min-width:0; }
.app-shell[data-mode="season"] .game-day-center { margin:0; padding:16px; border:0; border-radius:0; box-shadow:none; color:var(--ink); background:#fff; }
.app-shell[data-mode="season"] .game-day-head { order:0; align-items:flex-start; }
.app-shell[data-mode="season"] .game-day-head span,.app-shell[data-mode="season"] .game-day-head em { color:var(--muted); font-size:11px; }
.app-shell[data-mode="season"] .game-day-head strong { color:var(--ink); font-size:15px; }
.app-shell[data-mode="season"] .game-day-head > em { max-width:100px; text-align:right; }
.app-shell[data-mode="season"] .game-day-matchup { order:1; padding:15px 0; }
.app-shell[data-mode="season"] .game-day-logo { display:block; width:56px; height:56px; background-size:contain; background-position:center; background-repeat:no-repeat; }
.app-shell[data-mode="season"] .game-day-team strong,.app-shell[data-mode="season"] .game-day-center-mark b { color:var(--ink); }
.app-shell[data-mode="season"] .game-day-team em,.app-shell[data-mode="season"] .game-day-center-mark span { color:var(--muted); }
.app-shell[data-mode="season"] .game-day-scouting { order:2; margin:6px 0 12px; color:var(--muted); }
.app-shell[data-mode="season"] .game-plan-panel { order:3; color:var(--ink); background:var(--panel); border:1px solid var(--line); border-radius:6px; }
.app-shell[data-mode="season"] .game-plan-panel span { color:var(--muted); }
.app-shell[data-mode="season"] .game-plan-panel strong { color:var(--ink); }
.app-shell[data-mode="season"] .game-plan-rotation,.app-shell[data-mode="season"] .game-plan-selector button { color:var(--ink); background:#fff; border:1px solid var(--line); min-height:44px; }
.app-shell[data-mode="season"] .game-plan-selector button.active { color:var(--brand); border-color:var(--brand); background:#fff; }
.app-shell[data-mode="season"] .season-command { order:4; padding:12px 0 0; color:var(--ink); background:transparent; border:0; border-radius:0; box-shadow:none; }
.app-shell[data-mode="season"] .quick-advance summary { color:var(--ink); border:1px solid #c8c2bb; border-radius:6px; background:#fff; }
.app-shell[data-mode="season"] .quick-advance button { color:var(--ink); background:#fff; min-height:44px; }
.app-shell[data-mode="season"] .last-game-strip { color:var(--ink); background:var(--panel); border:1px solid var(--line); border-radius:6px; padding:10px; }
.app-shell[data-mode="season"] .last-game-strip strong { color:var(--ink); }
.app-shell[data-mode="season"] .last-game-strip span { color:var(--muted); }
.app-shell[data-mode="season"] .last-game-strip button { color:var(--brand); min-height:44px; }
.simulation-report.empty { display:none; }
.app-shell[data-mode="season"] .season-actions { display:flex; align-items:stretch; gap:10px; flex-wrap:wrap; }
.app-shell[data-mode="season"] .season-actions > #nextGameBtn,.app-shell[data-mode="season"] .season-actions > #startSeasonBtn { order:0; flex:1; color:#fff; background:var(--brand); border:1px solid var(--brand); min-height:48px; }
.app-shell[data-mode="season"] .season-actions > .quick-advance { order:1; flex:0 0 112px; }
.quick-advance summary { min-height:48px; display:flex; align-items:center; justify-content:center; }
.quick-advance > div { min-width:180px; }
.app-shell[data-postseason="true"] [data-season-panel="overview"] > :not(#playoffSeriesCenter) { display:none; }
.app-shell[data-offseason="true"] [data-season-panel="overview"] > :not(#overviewOffseasonPanel) { display:none; }
#overviewOffseasonPanel { padding:16px; }
#overviewOffseasonPanel .offseason-journey { margin:0; }
.offseason-review-links { display:flex; justify-content:space-between; gap:12px; margin-top:16px; }
.app-shell .playoff-series-center { margin:0; padding:16px; border:0; border-radius:0; background:#fff; box-shadow:none; }
.playoff-series-grid { display:block; min-width:0; }
.playoff-series-center h2 { margin:18px 0 12px; text-align:center; font-size:21px; line-height:1.4; }
.playoff-series-center h3 { margin:0; font-size:16px; }
.po-heading { display:flex; align-items:center; justify-content:space-between; gap:8px; min-height:44px; color:var(--ink); font-size:13px; }
.po-link { min-height:44px; padding:5px 0; border:0; background:transparent; color:var(--brand); font-size:13px; font-weight:600; text-align:left; }
.po-scoreboard { display:grid; grid-template-columns:minmax(0,1fr) minmax(115px,1.45fr) minmax(0,1fr); align-items:center; padding:20px 0; gap:6px; border-bottom:1px solid var(--line); text-align:center; }
.po-scoreboard > div { display:grid; justify-items:center; gap:8px; min-width:0; }
.po-scoreboard strong { color:var(--ink); font-size:16px; }
.po-scoreboard b { color:var(--ink); font-size:44px; line-height:1.1; letter-spacing:1px; font-variant-numeric:tabular-nums; }
.po-scoreboard small { color:var(--muted); font-size:11px; }
.po-logo { display:block; width:62px; height:62px; background-size:contain; background-position:center; background-repeat:no-repeat; }
.po-next { padding:18px 0 6px; text-align:center; }
.po-tactics { display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:12px; color:var(--muted); }
.po-actions { display:flex; gap:10px; margin:10px 0 16px; }
.po-actions > .primary-button { flex:1; min-width:0; min-height:48px; padding:10px; border:1px solid var(--brand); border-radius:6px; background:var(--brand); color:white; font-size:15px; line-height:1.4; }
.po-actions button:disabled { opacity:.55; cursor:wait; }
.po-more { position:relative; flex:0 0 112px; }
.po-more summary { display:flex; align-items:center; justify-content:center; gap:8px; height:100%; min-height:48px; box-sizing:border-box; border:1px solid #c8c2bb; border-radius:6px; cursor:pointer; font-size:13px; }
.po-more summary::after { content:'⌄'; }
.po-more > div { position:absolute; top:calc(100% + 5px); right:0; z-index:15; width:218px; padding:6px; border:1px solid var(--line); border-radius:6px; background:#fff; box-shadow:0 6px 16px #19171518; }
.po-more button { width:100%; min-height:48px; padding:8px; border:0; background:#fff; color:var(--ink); text-align:left; font-size:13px; }
.po-more button:hover { background:var(--panel); }
.po-feedback { padding:10px; background:var(--panel); border-left:3px solid var(--brand); font-size:12px; line-height:1.6; }
.po-waiting { margin:16px 0; padding:16px; border:1px solid var(--line); border-radius:6px; background:var(--panel); text-align:center; }
.po-waiting p { font-size:13px; line-height:1.7; margin:10px 0 0; }
.po-note { margin:12px 0; font-size:12px; color:var(--muted); line-height:1.7; }
.po-schedule { margin:20px 0 0; padding-top:15px; border-top:1px solid var(--line); }
.po-schedule h3 { padding-bottom:12px; }
.po-game { display:grid; grid-template-columns:22px minmax(0,1fr) 32px; align-items:center; column-gap:5px; row-gap:2px; width:100%; min-height:56px; padding:8px 6px; border:0; border-bottom:1px solid var(--line); border-radius:0; background:#fff; color:var(--ink); font-size:11px; text-align:left; box-sizing:border-box; }
.po-game b { grid-column:1; grid-row:1 / 3; font-size:12px; }
.po-game > span { grid-column:2; grid-row:2; color:var(--muted); line-height:1.5; }
.po-game strong { grid-column:2; grid-row:1; font-weight:500; line-height:1.5; }
.po-game em { grid-column:3; grid-row:1 / 3; color:var(--brand); font-style:normal; text-align:right; }
.po-game.next { background:var(--panel); color:var(--brand); }
.po-game.future { color:var(--muted); }
.po-filters { display:grid; grid-template-columns:repeat(3,1fr); margin:12px 0 18px; border:1px solid var(--line); border-radius:5px; overflow:hidden; }
.po-filters button { min-height:44px; border:0; border-right:1px solid var(--line); background:#fff; color:var(--ink); font-size:14px; }
.po-filters button[aria-pressed="true"] { color:var(--brand); background:var(--panel); font-weight:700; }
.po-viewport { width:100%; max-width:100%; overflow:auto; overscroll-behavior:contain; }
#playoffCanvas { transform-origin:top left; }
.playoff-series-center .conference-bracket { width:100%; min-width:0; padding:0; background:transparent; border:0; }
.playoff-series-center .conference-bracket > header { display:none; }
.playoff-series-center .bracket-rounds { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; min-width:0; height:400px; }
.playoff-series-center .bracket-round { position:relative; display:grid; grid-template-rows:24px repeat(4,1fr); gap:8px; min-width:0; padding:0; }
.playoff-series-center .bracket-round > b { color:var(--muted); font-size:11px; font-weight:500; align-self:center; }
.playoff-series-center .bracket-round.middle { grid-template-rows:24px repeat(4,1fr); }
.playoff-series-center .bracket-round.middle > .bracket-series:nth-child(2) { grid-row:2 / 4; align-self:center; }
.playoff-series-center .bracket-round.middle > .bracket-series:nth-child(3) { grid-row:4 / 6; align-self:center; }
.playoff-series-center .bracket-round.final > .bracket-series { grid-row:2 / 6; align-self:center; }
.playoff-series-center .bracket-series { position:relative; display:flex; flex-direction:column; justify-content:center; gap:2px; width:100%; min-width:0; height:78px; min-height:78px; margin:0; padding:7px 4px; border:1px solid #c8c2bb; border-radius:5px; background:#fff; box-shadow:none; color:var(--ink); text-align:left; box-sizing:border-box; }
.playoff-series-center .bracket-series.mine { border-color:var(--brand); color:var(--brand); background:var(--panel); }
.playoff-series-center .bracket-series small { font-size:9px; color:var(--muted); }
.playoff-series-center .bracket-team { display:grid; grid-template-columns:10px minmax(0,1fr) 9px; gap:1px; min-height:23px; padding:0; color:inherit; background:none; font-size:11px; }
.playoff-series-center .bracket-team .mini-logo { display:none; }
.playoff-series-center .bracket-team i { font-size:10px; color:var(--muted); }
.playoff-series-center .bracket-team strong { overflow:hidden; text-overflow:ellipsis; font-size:11px; color:inherit; white-space:nowrap; }
.playoff-series-center .bracket-team b { font-size:11px; color:inherit; }
.playoff-series-center .bracket-team.winner b { color:var(--good); }
.playoff-series-center .bracket-round:not(.final) > .bracket-series::after { content:''; position:absolute; left:100%; top:50%; width:7px; height:1px; background:#aaa198; }
.playoff-series-center .bracket-round.middle > .bracket-series::before { content:''; position:absolute; right:100%; top:calc(50% - 47px); width:7px; height:94px; border:1px solid #aaa198; border-left:0; }
.playoff-series-center .bracket-round.final > .bracket-series::before { content:''; position:absolute; right:100%; top:calc(50% - 94px); width:7px; height:188px; border:1px solid #aaa198; border-left:0; }
.po-source { display:block; color:var(--muted); font-size:10px; line-height:1.5; overflow-wrap:anywhere; }
.po-finals-node { padding:18px 0; }
.po-finals-node > h3 { margin-bottom:15px; }
.po-finals-node > .bracket-series { max-width:240px; margin:auto; }
.po-playin > summary { padding:14px 0; font-size:13px; cursor:pointer; }
.po-playin > div { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
.app-shell .playoff-series-center.po-fullscreen { position:fixed; inset:0; z-index:40; max-width:none; padding:12px max(12px,env(safe-area-inset-right)) max(12px,env(safe-area-inset-bottom)); overflow:auto; background:#fff; }
.po-fullscreen .po-viewport { height:calc(100svh - 165px); min-height:200px; border:1px solid var(--line); touch-action:none; }
.po-fullscreen #playoffCanvas { width:1440px; height:470px; }
.po-full-diagram { display:grid; grid-template-columns:640px 160px 640px; align-items:center; height:470px; padding:20px 0; box-sizing:border-box; }
.po-full-diagram .conference-bracket { padding:0 12px; box-sizing:border-box; }
.playoff-series-center .po-full-diagram .conference-bracket > header { display:flex; justify-content:space-between; margin-bottom:8px; color:var(--muted); font-size:13px; }
.po-full-diagram .conference-bracket:last-child .bracket-rounds { direction:rtl; }
.po-full-diagram .conference-bracket:last-child .bracket-series { direction:ltr; }
.po-full-diagram .conference-bracket:last-child .bracket-round:not(.final) > .bracket-series::after { left:auto; right:100%; }
.po-full-diagram .conference-bracket:last-child .bracket-series::before { right:auto; left:100%; border:1px solid #aaa198; border-right:0; }
.po-full-diagram .po-finals-node { position:relative; }
.po-full-diagram .po-finals-node::before,.po-full-diagram .po-finals-node::after { content:''; position:absolute; top:60%; width:12px; height:1px; background:#aaa198; }
.po-full-diagram .po-finals-node::before { right:100%; }.po-full-diagram .po-finals-node::after { left:100%; }
.po-zoom-tools { display:flex; gap:8px; margin:8px 0 12px; }
.po-zoom-tools button { min-height:44px; min-width:44px; padding:5px 10px; border:1px solid var(--line); border-radius:4px; background:#fff; font-size:12px; }
@media (max-width:370px) { .app-shell .playoff-series-center { padding:12px; }.po-scoreboard b { font-size:38px; }.po-logo { width:54px; height:54px; }.po-heading { font-size:12px; }.po-game { font-size:10px; }.po-more { flex-basis:98px; } }

/* Dynasty typography and secondary surfaces: one shared contract for all details.
 * Page = long reading/editing; sheet = a short selection; dialog = one decision.
 * Main navigation and playoff geometry remain owned by manager-interactions.css. */
:host { --font-ui:"PingFang SC","Microsoft YaHei","Noto Sans CJK SC",sans-serif; --detail-bg:#f5f3ef; --detail-muted:#6e6a64; --detail-line:#e8e5df; }
.dynasty-document { font-family:var(--font-ui); font-size:14px; line-height:1.55; font-weight:400; -webkit-font-smoothing:antialiased; font-variant-numeric:tabular-nums; }
.dynasty-document :is(button,input,select,textarea) { font-family:var(--font-ui); }
.dynasty-document :is(h1,h2,h3) { font-family:var(--font-ui); font-weight:600; letter-spacing:0; line-height:1.35; }
.dynasty-document h2 { font-size:20px; }
.dynasty-document h3 { font-size:17px; }
.dynasty-document :is(strong,b) { font-weight:600; }
.dynasty-document :is(button,summary) { -webkit-tap-highlight-color:transparent; }
.dynasty-document button:focus-visible,.dynasty-document summary:focus-visible,.dynasty-document input:focus-visible { outline:2px solid var(--brand); outline-offset:3px; }
.dynasty-document button:disabled { cursor:not-allowed; opacity:.48; box-shadow:none; }
.dynasty-document :is(.primary-button,.secondary-button) { min-height:46px; border-radius:8px; font-size:14px; font-weight:500; line-height:1.4; padding:11px 14px; box-shadow:none; }
.dynasty-document .primary-button { background:var(--brand); color:#fff; border:1px solid var(--brand); }
.dynasty-document .secondary-button { background:#fff; color:var(--ink); border:1px solid var(--detail-line); }
.dynasty-document :is(.asset-name,.player-stat-main .asset-name) { font-size:15px; font-weight:600; line-height:1.5; }
.dynasty-document :is(.asset-meta,.muted,.eyebrow) { font-size:12px; line-height:1.6; font-weight:400; }
.dynasty-document .asset-money { font-size:14px; font-weight:600; }
.dynasty-document .ability-badge { font-size:11px; font-weight:500; padding:2px 5px; vertical-align:middle; }
.dynasty-document .season-context-tabs > button { font-size:15px; font-weight:500; }
.dynasty-document .season-context-tabs > button.active { font-weight:600; }
.dynasty-document :is(.po-note,.po-feedback,.po-game,.game-day-scouting) { font-size:12px; line-height:1.65; }
.dynasty-document .po-scoreboard b { font-weight:600; }

/* Overlay layout: one scrolling content region, stable navigation and actions. */
.dynasty-document :is(.sheet-backdrop,.trade-modal-backdrop,.inquiry-modal-backdrop,.decision-receipt-backdrop,.manager-story-backdrop,.season-awards-backdrop,.detail-confirm-backdrop) { position:fixed; inset:0; background:rgba(25,23,21,.38); backdrop-filter:none; -webkit-backdrop-filter:none; }
.dynasty-document .detail-surface { position:fixed; inset:auto 0 0; display:flex; flex-direction:column; width:100%; max-width:480px; max-height:88dvh; margin:0 auto; padding:0; border:0; border-radius:18px 18px 0 0; background:#fff; box-shadow:0 -8px 32px #19171512; overflow:hidden; box-sizing:border-box; }
.dynasty-document .detail-surface[data-presentation="page"] { inset:0; height:100dvh; max-height:100dvh; border-radius:0; }
.detail-surface[data-presentation="page"] .sheet-handle { display:none; }
.detail-surface .sheet-handle { flex:none; margin:8px auto 0; width:34px; height:3px; background:#d5d1ca; }
.dynasty-document .detail-surface .sheet-head { flex:none; display:flex; align-items:center; gap:10px; min-height:72px; padding:10px 16px; border-bottom:1px solid var(--detail-line); background:#fff; box-sizing:border-box; }
.detail-surface .sheet-head > div { min-width:0; flex:1; }
.detail-surface #sheetTitle { margin:0; font-size:18px; line-height:1.4; overflow-wrap:anywhere; }
.detail-surface #sheetSubtitle { margin:0 0 3px; color:var(--detail-muted); font-size:12px; font-weight:400; }
.dynasty-document :is(.detail-back,.detail-surface .icon-button) { flex:none; width:auto; min-width:44px; height:44px; padding:0 6px; border:0; border-radius:8px; background:transparent; color:var(--ink); box-shadow:none; font-size:14px; font-weight:400; }
.dynasty-document .detail-surface .icon-button { font-size:24px; }
.detail-back::before { content:'‹'; font-size:22px; margin-right:4px; vertical-align:-1px; }
.dynasty-document .detail-surface .search-input { flex:none; width:calc(100% - 32px); min-height:44px; margin:12px 16px; padding:10px 12px; border:1px solid var(--detail-line); border-radius:8px; background:var(--detail-bg); font-size:14px; color:var(--ink); box-sizing:border-box; }
.detail-surface .segment { flex:none; margin:0 16px 12px; padding:3px; background:var(--detail-bg); border-radius:8px; }
.detail-surface .segment button { min-height:40px; border-radius:6px; font-size:14px; font-weight:500; }
.dynasty-document .detail-surface .sheet-list { display:block; flex:1 1 auto; min-height:0; min-width:0; max-height:none; overflow:auto; overscroll-behavior:contain; touch-action:pan-y; padding:16px; margin:0; scroll-padding:16px; background:#fff; }
.dynasty-document .detail-surface .sheet-list > .asset-item { width:100%; min-height:80px; margin:0; padding:14px 0; border:0; border-bottom:1px solid var(--detail-line); border-radius:0; box-shadow:none; background:#fff; color:var(--ink); }
.detail-surface .asset-main { gap:10px; min-width:0; }
.detail-surface .asset-main > div { min-width:0; }
.detail-surface .asset-name { white-space:normal; overflow-wrap:anywhere; }
.detail-surface .asset-action { flex:none; display:flex; flex-direction:column; align-items:flex-end; gap:4px; margin-left:8px; }
.dynasty-document .detail-surface :is(.asset-action,.asset-money) { max-width:none; }
.detail-surface .add-badge { width:auto; height:auto; color:var(--brand); background:transparent; box-shadow:none; font-size:22px; }
.detail-row-link { color:var(--detail-muted); font-size:12px; font-weight:400; }
.dynasty-document .detail-surface .headshot { width:40px; height:40px; flex:none; }
.dynasty-document .detail-footer { flex:none; display:flex; align-items:center; gap:10px; padding:12px 16px calc(12px + env(safe-area-inset-bottom)); border-top:1px solid var(--detail-line); background:#fff; box-shadow:0 -4px 12px #19171505; }
.detail-footer > button { flex:1; min-width:0; }
.detail-footer .primary-button { flex:1.6; }
.detail-selection-count { flex:1; color:var(--detail-muted); font-size:13px; }
.detail-footer .rotation-draft-actions { display:contents; }
.detail-footer .rotation-draft-actions button { min-height:46px; font-size:14px; font-weight:500; border-radius:8px; }
.detail-surface .latest-game { margin:0 0 16px; padding:12px; border:1px solid var(--detail-line); border-radius:8px; background:var(--detail-bg); color:var(--detail-muted); font-size:13px; font-weight:400; line-height:1.65; }
.detail-surface .rotation-status { display:flex; gap:12px; justify-content:space-between; color:var(--ink); font-size:14px; }
.detail-surface .rotation-status strong { color:var(--brand); }
.detail-surface .rotation-status-note { margin:6px 0 0; font-size:12px; }
.dynasty-document .detail-surface .rotation-row { margin:0; padding:14px 0; border:0; border-bottom:1px solid var(--detail-line); border-radius:0; background:#fff; }
.detail-surface .rotation-main { gap:10px; }
.detail-surface .rotation-controls { display:grid; grid-template-columns:64px minmax(0,1fr) 44px 50px 44px; align-items:center; gap:4px; margin-top:12px; }
.dynasty-document .detail-surface .rotation-controls button { min-height:44px; border:1px solid var(--detail-line); border-radius:8px; background:var(--detail-bg); color:var(--ink); font-size:15px; font-weight:500; }
.dynasty-document .detail-surface .rotation-controls button.active { border-color:#eac5b8; color:var(--brand); background:#fff5f0; }
.detail-surface .minute-value { color:var(--ink); font-size:16px; font-weight:500; text-align:center; }

/* Tertiary player dossier: label/value reading order, actual stored data only. */
.player-dossier-hero { display:flex; align-items:center; gap:14px; padding:4px 0 22px; }
.detail-surface .player-dossier-hero .headshot { width:60px; height:60px; }
.player-dossier-hero h2 { margin:0 0 5px; }
.player-dossier-hero p { margin:0; color:var(--detail-muted); font-size:13px; }
.detail-data-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:0; margin:0 0 20px; border:1px solid var(--detail-line); border-radius:10px; background:var(--detail-bg); overflow:hidden; }
.detail-data-grid > div { padding:14px; border-bottom:1px solid var(--detail-line); }
.detail-data-grid > div:nth-child(odd) { border-right:1px solid var(--detail-line); }
.detail-data-grid dt { font-size:12px; color:var(--detail-muted); }
.detail-data-grid dd { margin:5px 0 0; font-size:20px; font-weight:600; }
.detail-block { padding:16px 0; border-top:1px solid var(--detail-line); }
.detail-block h3 { margin:0 0 8px; }
.detail-block p { margin:4px 0; font-size:14px; line-height:1.7; color:var(--detail-muted); }
.detail-surface .empty-state { padding:32px 16px; border:0; background:var(--detail-bg); color:var(--detail-muted); font-size:14px; line-height:1.7; text-align:center; }

/* Contracts and promises share neutral facts, one selected option and one CTA. */
.dynasty-document .detail-surface :is(.contract-sheet-hero,.role-sheet-hero) { padding:0 0 18px; border:0; border-radius:0; background:#fff; color:var(--ink); gap:10px; }
.detail-surface :is(.contract-sheet-hero,.role-sheet-hero) strong { font-size:17px; }
.detail-surface :is(.contract-sheet-hero,.role-sheet-hero) em { color:var(--detail-muted); font-size:13px; }
.detail-surface :is(.contract-sheet-hero,.role-sheet-hero) b { padding:8px 10px; border-radius:6px; color:var(--detail-muted); background:var(--detail-bg); font-size:12px; }
.dynasty-document .detail-surface :is(.contract-demand,.contract-interest,.contract-response,.role-sheet-current) { margin:12px 0; padding:14px; border:1px solid var(--detail-line); border-radius:8px; background:var(--detail-bg); color:var(--ink); }
.detail-surface :is(.contract-demand,.contract-interest,.contract-response,.role-sheet-current) :is(span,em,p) { color:var(--detail-muted); font-size:13px; line-height:1.65; }
.detail-surface :is(.contract-demand,.contract-interest,.contract-response,.role-sheet-current) strong { color:var(--ink); font-size:15px; line-height:1.6; }
.detail-surface .contract-response { border-left:3px solid var(--brand); }
.detail-surface .contract-builder { padding:16px 0; background:#fff; border:0; }
.detail-surface .contract-interest summary { min-height:32px; font-size:13px; color:var(--detail-muted); cursor:pointer; }
.detail-surface :is(.contract-field-head,.contract-schedule-head) { font-size:14px; margin:14px 0 10px; }
.detail-surface :is(.contract-year-selector,.contract-raise-selector) button { min-height:44px; font-size:14px; font-weight:500; border-radius:7px; background:var(--detail-bg); color:var(--ink); border:1px solid var(--detail-line); }
.detail-surface :is(.contract-year-selector,.contract-raise-selector) button.active { color:var(--brand); background:#fff5f0; border-color:var(--brand); }
.detail-surface .contract-salary-stepper :is(button,input) { min-height:46px; font-size:17px; font-weight:500; border:1px solid var(--detail-line); border-radius:8px; background:#fff; color:var(--ink); }
.detail-surface .contract-schedule { font-size:14px; background:var(--detail-bg); padding:12px; border-radius:8px; }
.detail-surface .contract-walk { min-height:44px; width:100%; color:#a83c28; font-size:13px; background:none; border:0; margin:14px 0; }
.dynasty-document .detail-surface .role-option { padding:14px; border:1px solid var(--detail-line); border-radius:8px; color:var(--ink); background:#fff; box-shadow:none; }
.detail-surface .role-option.active { border-color:var(--brand); background:#fff5f0; }
.detail-surface .role-option strong { font-size:15px; }
.detail-surface .role-option :is(span,em),.detail-surface .role-sheet-note { font-size:13px; color:var(--detail-muted); line-height:1.65; }
.detail-surface .role-option-list { gap:10px; }

/* Box score switches teams in-place: tables never shrink names into a 6px cell. */
.detail-surface .boxscore-hero { padding:12px 0 20px; border:0; border-radius:0; background:#fff; color:var(--ink); }
.detail-surface .boxscore-hero b { color:var(--ink); font-size:40px; font-weight:600; }
.detail-surface .boxscore-hero strong { color:var(--ink); font-size:16px; }
.detail-surface .boxscore-hero :is(span,em) { color:var(--detail-muted); font-size:12px; }
.detail-surface .game-mvp { padding:12px; background:var(--detail-bg); color:var(--ink); border:0; border-radius:8px; font-size:13px; }
.detail-surface .game-mvp :is(span,em) { color:var(--detail-muted); font-size:12px; }
.detail-box-tabs { display:flex; gap:8px; margin:18px 0 14px; }
.detail-box-tabs button { flex:1; min-height:44px; border:1px solid var(--detail-line); border-radius:8px; background:#fff; color:var(--detail-muted); font-size:14px; }
.detail-box-tabs button[aria-pressed="true"] { color:var(--brand); border-color:var(--brand); background:#fff5f0; }
.detail-surface .team-boxscore { padding:0; border:0; border-radius:0; overflow-x:auto; }
.detail-surface .boxscore-title { padding:10px 0; background:#fff; font-size:14px; }
.detail-surface .boxscore-title span { color:var(--detail-muted); font-size:12px; }
.detail-surface :is(.boxscore-head,.boxscore-row) { display:grid; grid-template-columns:150px 40px 50px repeat(6,42px); gap:4px; min-width:524px; align-items:center; padding:11px 0; border-bottom:1px solid var(--detail-line); font-size:12px; line-height:1.5; }
.detail-surface .boxscore-scroll { max-width:100%; overflow-x:auto; touch-action:pan-x pan-y; }
.dynasty-document .detail-surface[data-content="gameDetail"] .sheet-list { touch-action:pan-x pan-y; }
.detail-surface .boxscore-hint { font-size:12px; color:var(--detail-muted); }
.detail-surface .boxscore-row > strong,.detail-surface .boxscore-head > span:first-child { position:sticky; left:0; background:#fff; padding-right:6px; z-index:1; white-space:normal; }
.dynasty-document .award-step { display:flex; align-items:center; justify-content:space-between; color:var(--detail-muted); margin-bottom:16px; }
.award-step button { min-height:44px; background:transparent; border:0; color:var(--brand); }
.award-lineup-cards article { display:flex; gap:12px; padding:14px 0; border-bottom:1px solid var(--detail-line); }
.award-lineup-cards article > b { color:var(--brand); }
.award-lineup-cards strong,.award-lineup-cards span { display:block; }
.award-lineup-cards span,.award-lineup-cards p { font-size:12px; margin:4px 0; }
.dynasty-document .season-awards-ceremony { display:flex; flex-direction:column; max-height:90dvh; overflow:hidden; }
.season-awards-ceremony > header,.season-awards-ceremony > button { flex:none; }
.dynasty-document .season-awards-content { flex:1; min-height:0; overflow-y:auto; padding:8px 0 16px; }
.dynasty-document .season-awards-ceremony > header p { display:none; }
.dynasty-document .simulation-analysis { background:var(--detail-bg); color:var(--ink); padding:12px; border-radius:8px; }
.simulation-analysis summary { min-height:32px; cursor:pointer; }
.dynasty-document .simulation-insight { background:transparent; color:var(--ink); }
.draft-owned-picks { padding:12px 16px; background:var(--detail-bg); border-radius:8px; }
.draft-owned-picks p { margin:8px 0; font-size:13px; }
.draft-hero { scroll-margin-top:64px; }
.draft-big-board > [data-draft-more] { width:100%; margin-top:12px; }
.season-stat-scroll { overflow-x:auto; width:100%; touch-action:pan-x pan-y; }
.dynasty-document .season-stat-scroll :is(.team-stat-head,.season-player-row) { display:grid; grid-template-columns:160px repeat(8,44px); gap:4px; min-width:552px; padding:12px 0; align-items:center; font-size:12px; }
.dynasty-document .season-stat-scroll .season-player-list { overflow:visible; max-height:none; }
.season-stat-scroll .team-stat-player,.season-stat-scroll .team-stat-head > span:first-child { position:sticky; left:0; background:#fff; z-index:1; }
.dynasty-document .draft-hero-pick strong { font-size:20px; }
.detail-surface .boxscore-head { color:var(--detail-muted); background:var(--detail-bg); }
.detail-surface .boxscore-row strong { white-space:normal; font-size:13px; font-weight:500; }
.detail-surface .boxscore-row .ability-badge { display:none; }
.detail-surface .player-stat-row { padding:16px 0; border:0; border-bottom:1px solid var(--detail-line); border-radius:0; background:#fff; }
.detail-surface .player-stat-grid { background:var(--detail-bg); border-radius:8px; margin-top:12px; }
.detail-surface .player-stat-grid strong { font-size:18px; }
.detail-surface .player-stat-grid span { font-size:12px; color:var(--detail-muted); }

/* Short decisions have the same type scale and action hierarchy as detail pages. */
.dynasty-document :is(.inquiry-modal,.decision-receipt,.manager-story-sheet,.season-awards-ceremony,.trade-modal) { max-width:480px; border:1px solid var(--detail-line); border-radius:16px; background:#fff; color:var(--ink); box-shadow:0 12px 48px #19171524; overflow-y:auto; overscroll-behavior:contain; padding:20px; box-sizing:border-box; }
.dynasty-document :is(.inquiry-modal,.decision-receipt,.manager-story-sheet,.season-awards-ceremony) :is(h3,strong) { color:var(--ink); }
.dynasty-document :is(.inquiry-modal,.decision-receipt,.manager-story-sheet,.season-awards-ceremony) h3 { font-size:20px; line-height:1.4; }
.dynasty-document :is(.inquiry-modal,.decision-receipt,.manager-story-sheet,.season-awards-ceremony) :is(p,em) { font-size:14px; color:var(--detail-muted); line-height:1.7; }
.dynasty-document .inquiry-callbar { color:var(--detail-muted); background:var(--detail-bg); padding:8px 10px; font-size:12px; border-radius:6px; }
.dynasty-document .inquiry-offer-grid { gap:10px; }
.dynasty-document .inquiry-offer-grid article { padding:14px; background:var(--detail-bg); border:1px solid var(--detail-line); border-radius:8px; }
.dynasty-document .inquiry-offer-grid strong { font-size:15px; line-height:1.7; }
.dynasty-document .inquiry-offer-grid :is(span,em) { font-size:12px; color:var(--detail-muted); }
.dynasty-document .inquiry-context { padding:12px 0; background:#fff; border:0; }
.dynasty-document .inquiry-actions { position:sticky; bottom:-20px; display:grid; grid-template-columns:1fr 1fr; gap:8px; padding:12px 0; background:#fff; }
.inquiry-actions .primary-button { grid-column:1 / -1; }
.dynasty-document .trade-modal { position:fixed; inset:0; width:100%; height:100dvh; max-height:100dvh; margin:auto; padding:0; display:flex; flex-direction:column; border:0; border-radius:0; overflow:hidden; }
.dynasty-document .trade-modal .modal-head { flex:none; min-height:72px; padding:12px 16px; border-bottom:1px solid var(--detail-line); background:#fff; }
.trade-modal .modal-head h3 { margin:0; font-size:18px; }
.trade-modal .modal-head p { margin:0 0 3px; font-size:12px; }
.trade-modal .modal-head .icon-button { min-width:44px; height:44px; background:transparent; border:0; color:var(--ink); font-size:24px; }
.dynasty-document .trade-modal .trade-modal-body { flex:1; min-height:0; max-height:none; overflow-x:hidden; overflow-y:auto; overscroll-behavior:contain; padding:16px; background:#fff; }
.dynasty-document .trade-modal :is(.trade-board,.trade-column,.asset-list,.asset-item,.asset-main) { min-width:0; }
.dynasty-document .trade-modal :is(.offer-intro,.trade-column,.verdict-card,.result-card,.decision-card) { background:#fff; color:var(--ink); border:1px solid var(--detail-line); border-radius:8px; box-shadow:none; padding:14px; }
.dynasty-document .trade-modal .offer-intro { background:var(--detail-bg); margin-bottom:12px; }
.trade-modal .offer-intro .status-pill { display:none; }
.dynasty-document .trade-modal .trade-column h3 { font-size:17px; }
.dynasty-document .trade-modal .trade-column .small-button { min-height:44px; font-size:14px; border-radius:7px; background:#fff5f0; color:var(--brand); border:1px solid #eac5b8; }
.trade-modal .trade-actions { display:flex; flex-wrap:wrap; gap:8px; margin:0; }
.trade-modal .trade-actions button { flex:1; min-width:0; min-height:46px; font-size:14px; border-radius:8px; }
.trade-modal .trade-actions .force-button { flex-basis:100%; background:#fff; color:#a83c28; border:1px solid var(--detail-line); }
.dynasty-document .decision-receipt-mark { width:36px; height:36px; border-radius:50%; background:#edf5ee; color:#3e6950; font-size:20px; }
.dynasty-document .decision-receipt-body { padding:12px; background:var(--detail-bg); border-radius:8px; font-size:14px; }
.dynasty-document .manager-story-evidence { background:var(--detail-bg); border-radius:8px; border:0; padding:12px; }
.dynasty-document .manager-story-choice { background:#fff; border:1px solid var(--detail-line); border-radius:8px; box-shadow:none; padding:14px; color:var(--ink); }
.dynasty-document .manager-story-choice span { color:var(--detail-muted); font-size:13px; line-height:1.65; }
.dynasty-document .manager-story-continue { min-height:46px; border-radius:8px; background:var(--brand); color:#fff; font-size:14px; }
.dynasty-document .season-award-winner { background:var(--detail-bg); border:1px solid var(--detail-line); border-radius:8px; color:var(--ink); }
.dynasty-document .season-award-winner :is(span,em),.dynasty-document .season-awards-lineups :is(span,summary) { color:var(--detail-muted); font-size:13px; }
.dynasty-document .season-award-winner strong { color:var(--ink); font-size:18px; }
.dynasty-document .season-award-winner.featured strong { font-size:26px; }
.dynasty-document .season-awards-lineups strong { color:var(--ink); font-size:14px; }
.dynasty-document .detail-confirm { position:fixed; inset:50% 20px auto; transform:translateY(-50%); max-width:380px; margin:auto; padding:22px; box-sizing:border-box; border-radius:14px; background:#fff; color:var(--ink); box-shadow:0 16px 50px #19171524; }
.detail-confirm h3 { margin:0 0 10px; font-size:19px; }
.detail-confirm p { margin:0 0 20px; font-size:14px; color:var(--detail-muted); line-height:1.7; }
.detail-confirm-actions { display:flex; gap:10px; }
.detail-confirm-actions button { flex:1; }

/* Management subpages: stop mixing dashboard microtype and ornamental headings. */
.dynasty-document :is(.league-team-console,.ecosystem-panel,.league-context-card,.season-context-card) { border-color:var(--detail-line); border-radius:10px; box-shadow:none; }
.dynasty-document .league-team-console { padding:16px; background:#fff; gap:14px; }
.dynasty-document .league-team-console-head strong { font-size:18px; }
.dynasty-document .league-team-console-head :is(span,em) { font-size:12px; line-height:1.6; white-space:normal; }
.dynasty-document .league-team-actions button { font-size:13px; font-weight:500; min-height:46px; }
.dynasty-document .league-team-actions .league-trade-entry { background:var(--brand); border-color:var(--brand); color:#fff; }
.dynasty-document .league-task-grid { grid-template-columns:1fr; gap:0; border:1px solid var(--detail-line); border-radius:10px; overflow:hidden; }
.dynasty-document .league-task-grid button { display:flex; align-items:center; justify-content:space-between; min-height:62px; padding:14px 16px; border:0; border-bottom:1px solid var(--detail-line); border-radius:0; }
.dynasty-document .league-task-grid span { font-size:15px; font-weight:500; }
.dynasty-document .league-task-grid em { font-size:12px; }
.dynasty-document .league-detail-head { position:static; grid-template-columns:48px minmax(0,1fr); padding:8px 0; background:#fff; border-bottom:1px solid var(--detail-line); }
.dynasty-document .season-detail-head { grid-template-columns:48px minmax(0,1fr); padding:8px 0; background:#fff; border-bottom:1px solid var(--detail-line); }
.dynasty-document :is(.league-detail-head,.season-detail-head) button { width:44px; height:44px; border-radius:8px; background:#fff; color:var(--ink); }
.dynasty-document :is(.league-detail-head,.season-detail-head) strong { font-size:18px; }
/* Keep subpage title and list in one flow; only the approved main tabs stick. */
.dynasty-document .app-shell[data-mode="season"] :is(.draft-hub,.season-summary-board) { max-height:none; overflow:visible; }
.dynasty-document :is(.standings-table-head,.standing-row.detailed) { grid-template-columns:minmax(0,1fr) 45px 38px 60px; }
.dynasty-document .standing-row.detailed em { white-space:nowrap; font-weight:500; }
.dynasty-document [data-season-panel="contracts"] { padding:0 16px 24px; }
.dynasty-document [data-season-panel="contracts"] .offseason-office { padding:0; border:0; gap:8px; }
.dynasty-document [data-season-panel="contracts"] .offseason-office > p { font-size:13px; line-height:1.65; }
.dynasty-document [data-season-panel="contracts"] .offseason-office-head { display:none; }
.dynasty-document .contract-queue-summary { display:flex; gap:24px; padding:12px 0; border-bottom:1px solid var(--detail-line); color:var(--detail-muted); font-size:13px; }
.dynasty-document .contract-queue-summary strong { margin-left:8px; color:var(--ink); font-size:20px; }
.dynasty-document .contract-queue-group h3 { display:flex; align-items:center; justify-content:space-between; margin:20px 0 8px; font-size:16px; }
.dynasty-document .contract-queue-group h3 span { color:var(--detail-muted); font-size:12px; font-weight:400; }
.dynasty-document .expiring-contract-list { max-height:none; overflow:visible; gap:0; }
.dynasty-document .expiring-contract-row { display:grid; grid-template-columns:40px minmax(0,1fr); gap:10px; padding:16px 0; background:#fff; border:0; border-bottom:1px solid var(--detail-line); border-radius:0; }
.dynasty-document .expiring-contract-row > div { min-width:0; }
.dynasty-document .expiring-contract-row strong { display:flex; flex-wrap:wrap; align-items:center; gap:6px; font-size:15px; line-height:1.5; }
.dynasty-document .expiring-contract-row em { display:block; margin-top:5px; color:var(--detail-muted); font-size:12px; line-height:1.6; white-space:normal; }
.dynasty-document .expiring-contract-row > button { grid-column:2; justify-self:start; min-height:44px; padding:8px 16px; border:1px solid #eac5b8; border-radius:8px; background:#fff5f0; color:var(--brand); font-size:14px; }
.dynasty-document .contract-result { grid-column:2; color:var(--detail-muted); font-size:13px; }
.dynasty-document .contract-queue-empty { color:var(--detail-muted); font-size:13px; line-height:1.6; }
.dynasty-document .contract-batch { margin-top:20px; padding:14px; border:1px solid var(--detail-line); border-radius:8px; }
.dynasty-document .contract-batch summary { cursor:pointer; font-size:13px; }
.dynasty-document :is(.ecosystem-heading,.ecosystem-finance) { background:var(--detail-bg); }
.dynasty-document .ecosystem-heading { display:flex; flex-wrap:wrap; align-items:center; gap:8px; padding:14px; }
.dynasty-document .ecosystem-heading > div { display:grid; gap:4px; }
.dynasty-document .ecosystem-heading strong { margin:0; font-size:18px; }
.dynasty-document .ecosystem-metrics { background:#fff; }
.dynasty-document .ecosystem-metrics strong { font-size:24px; }
.dynasty-document .ecosystem-finance p { font-size:14px; line-height:1.7; }
.dynasty-document .market-player { border-radius:8px; box-shadow:none; }
.dynasty-document .free-agent-row { display:grid; grid-template-columns:40px minmax(0,1fr); gap:10px; padding:16px 0; border:0; border-bottom:1px solid var(--detail-line); border-radius:0; background:#fff; }
.dynasty-document .free-agent-row > div { min-width:0; }
.dynasty-document .free-agent-row strong { font-size:15px; line-height:1.5; }
.dynasty-document .free-agent-row :is(em,small) { display:block; margin-top:5px; font-size:12px; color:var(--detail-muted); line-height:1.65; white-space:normal; }
.dynasty-document .free-agent-row > button { grid-column:2; justify-self:start; min-width:104px; min-height:44px; margin-top:4px; padding:8px 14px; border:1px solid #eac5b8; border-radius:8px; background:#fff5f0; color:var(--brand); font-size:14px; }
.dynasty-document .market-budget { display:flex; flex-wrap:wrap; gap:8px; padding:12px; border-radius:8px; background:var(--detail-bg); color:var(--detail-muted); font-size:13px; }
.dynasty-document .toast { z-index:1000; max-width:calc(100% - 40px); font-size:14px; font-weight:400; line-height:1.6; padding:12px 16px; border-radius:10px; }
@media (prefers-reduced-motion:reduce) { .dynasty-document * { transition:none !important; animation:none !important; scroll-behavior:auto !important; } }

`;export{e as default};