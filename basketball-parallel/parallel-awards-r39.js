// Original Parallel Time award family. Geometry is authored here, not traced.
// Twin paths, emerald facets and a suspended diamond are the shared identity.
export const AWARD_NAMES={champion:'总冠军','cup-champion':'联盟杯冠军',mvp:'常规赛MVP','finals-mvp':'总决赛MVP','cup-mvp':'联盟杯MVP','allstar-mvp':'全明星MVP','rookie-year':'最佳新秀','defensive-player':'最佳防守球员',scoring:'得分王',rebounds:'篮板王',assists:'助攻王',steals:'抢断王',blocks:'盖帽王','all-nba-first':'最佳阵容一阵','all-nba-second':'最佳阵容二阵','all-nba-third':'最佳阵容三阵','all-defense-first':'最佳防守一阵','all-defense-second':'最佳防守二阵','all-rookie-first':'最佳新秀一阵','all-rookie-second':'最佳新秀二阵',allstar:'全明星','cup-team':'联盟杯最佳阵容','player-month':'月最佳球员','player-week':'周最佳球员','rookie-month':'月最佳新秀','sporting-news-mvp':'媒体评选MVP','sporting-news-rookie':'媒体最佳新秀','east-finals-mvp':'东部决赛MVP','west-finals-mvp':'西部决赛MVP','sixth-man':'最佳第六人','most-improved':'最快进步球员','hupu-player-year':'虎扑年度最佳球员',coach:'最佳教练'};
import {sculptedAwardSvg} from './award-sculptures-r39.js';
export const originalAwardSvg=sculptedAwardSvg;
import {RASTER_AWARDS} from './raster-awards-r39.js';
export function originalAwardUrl(key){return RASTER_AWARDS[key]||'';}
export const ORIGINAL_TROPHIES=Object.fromEntries(Object.keys(AWARD_NAMES).map(key=>[key,originalAwardUrl(key)]));
