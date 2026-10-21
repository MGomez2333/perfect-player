export default `
/* r42: grouped surfaces, clear typography, quiet controls */
:host{--brand:#007aff;--ink:#1c1c1e;--muted:#737780;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","PingFang SC",system-ui,sans-serif;color-scheme:light}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document{background:#f2f2f7;color:#1c1c1e;font-family:inherit;-webkit-font-smoothing:antialiased}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document *{box-sizing:border-box}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document button,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document input,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document select{font-family:inherit;touch-action:manipulation}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document button{transition:background .15s,transform .15s}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document button:active{transform:scale(.98)}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document button:focus-visible,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document select:focus-visible,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document input:focus-visible{outline:3px solid #007aff66;outline-offset:3px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document button:disabled{opacity:.4}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .living-card,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .manager-card,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .season-card,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .franchise-hero{background:#fff;border:0;border-radius:22px;box-shadow:0 2px 12px #142b4b04}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .topbar{background:#ffffffde;border-bottom:1px solid #e5e5ea;backdrop-filter:blur(20px)}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .dynasty-team-header{padding:22px 20px 12px;color:#1c1c1e}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #uiReturnHome{color:#007aff;background:transparent;border:0;font-size:14px;font-weight:600;min-height:44px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .bottom-nav,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #uiNav{background:#ffffffeb;border-top:1px solid #e5e5ea;box-shadow:none;backdrop-filter:blur(24px)}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nav-item.active,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #uiNav button.active{color:#007aff;background:#edf5ff;border-radius:14px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #uiSubnav{margin:12px 16px;padding:4px;background:#ededf2;border:0;border-radius:12px;gap:2px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #uiSubnav button{min-height:40px;border:0;border-radius:9px;color:#737780;background:transparent;font-size:13px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #uiSubnav button[aria-selected="true"]{background:#fff;color:#1c1c1e;box-shadow:0 2px 5px #0000000c;font-weight:650}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .primary-button,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-primary,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-training [data-pd-save]{background:#007aff;color:white;border:0;border-radius:12px;min-height:46px;padding:12px 18px;font-size:14px;font-weight:650;box-shadow:none}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .secondary-button,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-secondary{background:#eff5ff;color:#0066d6;border:0;border-radius:12px;min-height:42px;padding:10px 16px;font-size:13px;font-weight:600}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .game-day-matchup{border-radius:22px;background:#182b48;color:#fff;padding:24px 18px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .game-day-matchup .game-day-team,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .game-day-matchup .game-day-center{color:inherit}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .bottom-sheet{background:#fff;border:0;border-radius:26px 26px 0 0;box-shadow:0 -10px 60px #10233c1a;color:#1c1c1e}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .bottom-sheet>header{border-bottom:1px solid #ededf2;padding:22px 24px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .bottom-sheet h3{color:#1c1c1e;font-weight:700;letter-spacing:-.5px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .bottom-sheet .sheet-handle{background:#d1d1d6;width:36px;height:5px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #closeSheet{width:32px;height:32px;min-height:32px;background:#eeeef0;border:0;border-radius:50%;color:#737780}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-draft-card{background:#fff;border:0;padding:8px 0;box-shadow:none}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-draft-person{gap:16px;margin-bottom:24px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-draft-person strong{font-size:20px;color:#1c1c1e}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-draft-person small{font-size:13px;color:#8e8e93;margin-top:6px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-draft-disclosure{font-size:12px;line-height:1.7;color:#8e8e93;margin:18px 0}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-draft-card input{font-size:16px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-customize{border:0;border-radius:18px;background:#f2f2f7;margin:22px 0 8px;overflow:hidden}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-customize>summary{list-style:none;display:flex;justify-content:space-between;align-items:center;padding:18px 20px;cursor:pointer}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-customize>summary::-webkit-details-marker{display:none}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-customize summary b{display:block;font-size:16px;font-weight:650;color:#1c1c1e}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-customize summary small{display:block;color:#8e8e93;font-size:12px;margin-top:5px;font-weight:400}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-chevron{font-size:24px;color:#aeaeb2;transition:transform .2s}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-customize[open] .nr-chevron{transform:rotate(90deg)}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-customize-body{padding:0 16px 18px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-caption{font-size:12px;line-height:1.7;color:#8e8e93;margin:0 0 14px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-attribute-list{background:#fff;border-radius:14px;overflow:hidden;margin:16px 0}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-attribute-row{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:54px;margin:0 16px;border-bottom:1px solid #f0f0f4;font-size:14px;color:#303036}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-attribute-row:last-child{border:0}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-number{display:flex;align-items:center;gap:6px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-number input{appearance:textfield;min-width:0;width:56px;height:36px;border:0;border-radius:8px;background:#edf5ff;color:#007aff;font-weight:650;text-align:center;padding:4px;font-variant-numeric:tabular-nums}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-number input::-webkit-inner-spin-button{appearance:none}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-number small{color:#aeaeb2;font-size:12px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-customize .nr-primary{width:100%}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-age{margin-top:22px;padding-top:18px;border-top:1px solid #dedee5}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-age header,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-age-offer{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;font-size:14px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-age strong{font-size:26px;letter-spacing:-.7px;font-variant-numeric:tabular-nums;color:#1c1c1e}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-age strong small{font-size:12px;font-weight:400;color:#8e8e93}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-age-offer{background:#fff;border-radius:12px;padding:14px 16px;color:#737780}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-age-offer strong{color:#007aff}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-age>.nr-secondary{width:100%;background:#fff}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-age .nr-caption{margin:10px 0 0;text-align:center}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-hidden{border:0;background:#f2f2f7;border-radius:16px;padding:16px;margin-top:14px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-hidden summary{font-weight:600;font-size:14px;min-height:28px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-hidden>p{font-size:12px;line-height:1.7;color:#8e8e93}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-hidden-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-hidden-grid p{background:white;border-radius:10px;padding:12px;font-size:12px;color:#737780;margin:0}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-hidden-grid b{display:block;font-size:17px;margin-top:6px;color:#1c1c1e}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-toolbar{display:flex;align-items:center;gap:10px;width:calc(100% - 32px);margin:8px 16px 16px;padding:12px 14px;background:#f2f2f7;border:0;border-radius:14px;color:#1c1c1e;font-size:14px;font-weight:600;min-height:48px;text-align:left}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-toolbar small{margin-left:auto;font-size:11px;color:#8e8e93;font-weight:400}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-tool-icon{color:#007aff;font-size:23px;line-height:1}
.nr-dialog{width:min(92vw,620px);max-height:86dvh;margin:auto;border:0;border-radius:24px;background:#f2f2f7;color:#1c1c1e;padding:24px;box-shadow:0 24px 100px #15223830;font-family:inherit;overflow:auto;overscroll-behavior:contain}
.nr-dialog::backdrop{background:#10182755;backdrop-filter:blur(5px)}
.nr-dialog-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px;gap:16px}
.nr-eyebrow{font-size:10px;letter-spacing:1.4px;color:#8e8e93}
.nr-dialog h3{font-size:26px;letter-spacing:-.7px;margin:6px 0 0;color:#1c1c1e}
.nr-close{display:grid;place-items:center;width:32px;height:32px;border:0;border-radius:50%;background:#e5e5ea;color:#8e8e93;font-size:23px;cursor:pointer}
.nr-segments{display:flex;padding:4px;gap:4px;background:#e5e5ea;border-radius:12px;margin-bottom:20px}
.nr-segments button{flex:1;min-height:36px;padding:6px;border:0;border-radius:9px;background:transparent;color:#6b6b70;font-size:13px;font-weight:600;cursor:pointer}
.nr-segments button[aria-pressed=true]{background:#fff;color:#1c1c1e;box-shadow:0 2px 6px #0000000b}
.nr-dialog .nr-caption,.nr-dialog [data-next-body]>p{font-size:12px;color:#8e8e93;line-height:1.7}
.nr-search{width:100%;min-width:0;border:0;background:white;padding:14px 16px;border-radius:12px;font-size:16px;margin:0 0 10px;color:#1c1c1e;outline-color:#007aff}
.nr-result-count{font-size:11px;color:#8e8e93;margin:8px 0 14px}
.nr-player{background:#fff;border-radius:16px;padding:16px;margin:10px 0}
.nr-player-identity{display:flex;align-items:center;gap:12px}
.nr-player-identity .headshot{width:48px;height:48px;border-radius:50%;flex-shrink:0;background-color:#f2f2f7}
.nr-player-identity strong{font-size:15px;color:#1c1c1e}
.nr-player-identity p{font-size:11px;line-height:1.5;margin:4px 0;color:#8e8e93}
.nr-player-stats{font-size:13px;font-variant-numeric:tabular-nums;color:#48484a;background:#f8f8fa;border-radius:9px;padding:10px;margin:12px 0}
.nr-player .nr-secondary{margin-right:6px;font-size:12px;padding:9px 12px;min-height:38px}
.nr-player details{margin-top:14px;font-size:12px;color:#8e8e93;line-height:1.7}
.nr-player details summary{cursor:pointer}
.nr-setting-row{display:flex;align-items:center;justify-content:space-between;gap:16px;background:white;padding:16px;border-radius:14px;margin:22px 0;font-size:14px}
.nr-setting-row select{min-width:0;max-width:60%;border:0;background:#edf5ff;color:#007aff;padding:10px;border-radius:10px;font-size:14px}
.nr-dialog [data-save]{width:100%}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-training{padding:22px;border:0;border-radius:20px;background:#fff}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-training summary{font-size:19px;font-weight:700;color:#1c1c1e;line-height:1.5}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-training p{font-size:12px;line-height:1.8;color:#8e8e93}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-training .pd-group{border:0;padding:18px 16px 6px;margin:24px 0;background:#f2f2f7;border-radius:16px;min-width:0}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-group legend{font-size:14px;font-weight:650;color:#1c1c1e;padding:0 8px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-group legend span{font-size:10px;color:#007aff;margin-right:7px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-training label{display:block;min-width:0;font-size:12px;color:#737780;font-weight:500}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-training select{width:100%;min-width:0;border:0;border-radius:10px;min-height:44px;background:#fff;color:#1c1c1e;padding:10px;margin:8px 0 14px;font-size:14px;box-shadow:0 1px 4px #00000004}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-training>details>label select{background:#f2f2f7}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2px 14px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-save-status{display:block;font-size:12px;color:#007aff;min-height:20px;margin:10px 0}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-stats>div{background:#f2f2f7;border:0;border-radius:12px;padding:14px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-stats strong{color:#1c1c1e;font-size:26px;font-variant-numeric:tabular-nums}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-growth{color:#248a3d!important}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-meter{height:3px;background:#e5e5ea;border-radius:3px;margin:8px 0;overflow:hidden}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-meter i{display:block;height:100%;background:#34c759}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-section-title{color:#1c1c1e;font-size:16px;margin-top:26px}
@media(max-width:600px){.nr-dialog{width:100%;max-width:100%;max-height:90dvh;margin:auto 0 0;border-radius:26px 26px 0 0;padding:24px 20px calc(24px + env(safe-area-inset-bottom))}#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-training{padding:18px 16px}#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-training .pd-group{padding:16px 12px 4px}#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-grid{gap:0 10px}#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .bottom-nav button{min-height:52px}#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-draft-person{margin-top:8px}#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .bottom-sheet>header{padding:20px}}
@media(max-width:360px){#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-toolbar small{display:none}#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .pd-grid{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document *{animation-duration:.01ms!important;transition-duration:.01ms!important}}
/* Override the legacy inline control theme as well as the shared surfaces. */
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .primary-button,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-draft-buttons .primary-button{background:#007aff!important;color:#fff!important;border:0!important;border-radius:12px!important;box-shadow:none!important}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #dynastyTeamHeader{background:#fff!important;color:#1c1c1e!important;border:0!important;border-radius:20px!important;box-shadow:none!important}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #dynastyTeamHeader h1,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #dynastyTeamHeader h2,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #dynastyTeamHeader strong{color:#1c1c1e!important}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #dynastyTeamHeader button{color:#737780!important}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #uiSubnav button{border-bottom:0!important}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #uiSubnav button[aria-selected=true]{color:#007aff!important}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-roll-cell{background:#f2f2f7;border-radius:16px;padding:18px 14px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-roll-cell>span,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-roll-cell small{color:#8e8e93}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-roll-cell>strong{font-size:36px;color:#1c1c1e;letter-spacing:-1px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-roll-cell button{border:0!important;border-radius:10px!important;background:#fff!important;color:#007aff!important;font-weight:600}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-roll-position{border-color:#e5e5ea;color:#1c1c1e}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-roll-position button{color:#007aff!important}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-roll-offer{background:#edf5ff;border-radius:16px}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .self-roll-compare b{color:#007aff}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document .nr-chevron{display:inline-block}
.nr-dialog .nr-primary{background:#007aff;color:white;border:0;border-radius:12px;min-height:46px;padding:12px 18px;font-size:14px;font-weight:650}
.nr-dialog .nr-secondary{background:#eff5ff;color:#0066d6;border:0;border-radius:12px;min-height:40px;padding:10px 14px;font-size:13px;font-weight:600}

#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document.ui-v2,#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document.ui-v2 #app{background:#f2f2f7!important;color:#1c1c1e}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document.ui-v2 #uiNav{background:#ffffffed!important;border-color:#e5e5ea!important}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document.ui-v2 #uiNav button.active{color:#007aff!important}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document.ui-v2 #uiReturnHome{color:#007aff!important;border:0!important;background:transparent!important}

#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #dynastyTeamHeader small{color:#737780!important}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #uiSubnav button[aria-selected=true]::after{background:#007aff!important}
#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot#uiDynastyRoot.dynasty-document #uiNav button[aria-current=page]{color:#007aff!important;background:#edf5ff!important}
`;
