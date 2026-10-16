export default `
:host{--brand:#225346;--ink:#1c352e;--muted:#63756d;font-family:system-ui,-apple-system,"PingFang SC",sans-serif}
.dynasty-document{background:#f3f4ef;color:#1c352e}
.dynasty-document .topbar{border-bottom:1px solid #dce3dc}
.dynasty-document .franchise-hero,.dynasty-document .game-day-head{border-radius:18px}
.dynasty-document .game-day-matchup{border-radius:18px;background:linear-gradient(130deg,#173e35,#2d5849);color:#fff8e9;padding:22px 16px}
.dynasty-document .game-day-matchup .game-day-team,.dynasty-document .game-day-matchup .game-day-center{color:inherit}
.dynasty-document .living-card,.dynasty-document .manager-card,.dynasty-document .season-card{border-radius:16px;border-color:#dce4dc;box-shadow:0 3px 14px #173e3505}
.dynasty-document button,.dynasty-document select{touch-action:manipulation}
.dynasty-document button:focus-visible,.dynasty-document select:focus-visible{outline:3px solid #d78a47;outline-offset:2px}
.dynasty-document .bottom-nav{border-top:1px solid #d9e1d8;box-shadow:0 -4px 20px #193b3608}
.dynasty-document .nav-item.active{color:#225346;background:#e6eee5;border-radius:12px}
.dynasty-document .pd-training{padding:20px;background:#fff;border:1px solid #dce4dc;border-radius:18px}
.dynasty-document .pd-training summary{font-size:18px;color:#173e35;line-height:1.5}
.dynasty-document .pd-training p{font-size:12px;line-height:1.8;color:#66786d}
.dynasty-document .pd-training label{display:block;font-size:12px;font-weight:600;color:#435c50}
.dynasty-document .pd-training select{margin:7px 0 14px;min-height:46px;border:1px solid #ccd9ce;border-radius:10px;background:#f8faf6;color:#1c352e;font-size:14px;padding:10px}
.dynasty-document .pd-group{border:0;padding:16px 0 4px;margin:8px 0 0;border-top:1px solid #e5eae2;min-width:0}
.dynasty-document .pd-group legend{font-size:14px;font-weight:800;letter-spacing:.3px;padding:0 12px 0 0;color:#235447}
.dynasty-document .pd-group legend span{color:#ac642f;font-size:11px;margin-right:8px}
.dynasty-document .pd-training [data-pd-save]{min-height:48px;background:#225346;color:white;border:0;border-radius:12px;font-size:15px;font-weight:750}
.dynasty-document .pd-training [data-pd-summer]{min-height:46px;border:1px solid #d5b99a;border-radius:12px;background:#faf2e7;color:#865126}
.dynasty-document .pd-training [data-pd-summer]:disabled{opacity:.5}
.dynasty-document .pd-save-status{display:block;min-height:20px;margin:8px 0;color:#8a5b2d;font-size:12px}
.dynasty-document .pd-stats>div{background:#f2f6f0;border:1px solid #e0e8dc;border-radius:12px;padding:12px}
.dynasty-document .pd-stats strong{font-variant-numeric:tabular-nums;font-size:26px;line-height:1.6;color:#214c3e}
.dynasty-document .pd-growth{color:#26714c!important;font-weight:700}
.dynasty-document .pd-meter{height:3px;background:#dce7d8;border-radius:2px;margin:6px 0;overflow:hidden}
.dynasty-document .pd-meter i{display:block;height:100%;background:#58866a}
.dynasty-document .pd-section-title{font-size:15px;color:#214c3e;margin:24px 0 4px}
@media(max-width:600px){.dynasty-document .pd-training{padding:16px}.dynasty-document .pd-grid{gap:0 10px}.dynasty-document .pd-training select{font-size:13px;padding:9px 6px}.dynasty-document .bottom-nav button{min-height:52px}.dynasty-document .sim-controls button{min-height:46px}}
@media(prefers-reduced-motion:reduce){.dynasty-document *{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;
