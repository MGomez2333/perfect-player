import {originalAwardUrl} from './parallel-awards-r39.js';
export {originalAwardUrl};
export function leagueCopy(value){
 if(typeof value!=='string')return value;
 return value.replace(/本榜按游戏积分公式排序，并非 NBA 官方 TOP50 评选。/g,'本榜按游戏内执教积分排序。')
 .replace(/NBA\s*ALL-TIME/g,'LEAGUE LEGENDS').replace(/ALL-NBA/g,'ALL-LEAGUE').replace(/NBA\s*PLAYOFFS/g,'LEAGUE PLAYOFFS').replace(/NBA\s*CHAMPIONS/g,'LEAGUE CHAMPIONS').replace(/NBA\s*DRAFT/g,'LEAGUE DRAFT').replace(/WELCOME TO NBA/g,'WELCOME TO PARALLEL TIME')
 .replace(/NBA\s*官方/g,'历史').replace(/NBA\s*生涯/g,'职业生涯').replace(/NBA\s*球龄/g,'职业球龄').replace(/NBA\s*首秀/g,'职业首秀').replace(/首次NBA出场/g,'首次职业联赛出场').replace(/NBA\s*工作/g,'职业球员工作').replace(/NBA神之队/g,'传奇神之队').replace(/NBA全球学院（澳大利亚）/g,'澳大利亚篮球学院').replace(/NBA Global Academy \(Australia\)/g,'Basketball Academy (Australia)')
 .replace(/(?<![A-Za-z])NBA(?![A-Za-z])/g,'联盟');
}
const mounted=new WeakSet(),skip='script,style,textarea,input,[contenteditable], [data-manager-name],[data-profile-name],[data-cr-self-name]';
// Covers descriptions retained in existing saves without migrating game keys.
// Only newly added/changed DOM nodes are visited; no polling or whole-page rescans.
export function mountLeagueBrand(root){
 if(!root||mounted.has(root)||typeof MutationObserver==='undefined')return;mounted.add(root);
 const text=n=>{if(n.parentElement?.closest(skip))return;const before=n.nodeValue;if(before?.includes('NBA')){const after=leagueCopy(before);if(after!==before)n.nodeValue=after;}};
 const element=n=>{if(n.matches?.(skip))return false;for(const key of ['alt','title','aria-label','placeholder']){const before=n.getAttribute?.(key);if(before?.includes('NBA'))n.setAttribute(key,leagueCopy(before));}const src=n.getAttribute?.('src'),key=src?.match(/dynasty-trophy-([a-z-]+)-v\d+\.webp/)?.[1];if(key&&originalAwardUrl(key))n.setAttribute('src',originalAwardUrl(key));return true;};
 const visit=n=>{if(n.nodeType===3){text(n);return;}if(n.nodeType===1&&!element(n))return;for(const child of n.childNodes||[])visit(child);};
 visit(root);new MutationObserver(records=>{for(const r of records){if(r.type==='characterData')text(r.target);else if(r.type==='attributes')element(r.target);else for(const n of r.addedNodes)visit(n);}}).observe(root,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['alt','title','aria-label','placeholder','src']});
}
