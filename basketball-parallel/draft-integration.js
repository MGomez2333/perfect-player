function pdDraftControls(count,total){
 const f=k.parallelDraftFilter||{},sel=(key,label,items)=>`<label>${label}<select data-pd-draft="${key}" aria-label="选秀${label}">${Object.entries(items).map(([value,name])=>`<option value="${value}" ${(f[key]||'')===value?'selected':''}>${name}</option>`).join('')}</select></label>`;
 return `<div class="pd-draft-filters">${sel('position','位置',{'':'全部位置',PG:'控球后卫 PG',SG:'得分后卫 SG',SF:'小前锋 SF',PF:'大前锋 PF',C:'中锋 C'})}${sel('country','国籍',{'':'全部国籍',usa:'美国',international:'国际',china:'中国'})}<label>姓名<input data-pd-draft="search" aria-label="搜索选秀球员" value="${Q(f.search||'')}" placeholder="中文／英文姓名"></label><button type="button" data-pd-draft-clear>重置筛选</button></div><p role="status">符合条件 ${count} / ${total} 人 · 国际不含美国和中国；国籍资料缺失者仅在“全部”显示。</p>${!count?'<p>没有符合条件的球员，请调整筛选。</p>':''}<style>.pd-draft-filters{display:grid;grid-template-columns:1fr 1fr;gap:8px}.pd-draft-filters label{display:flex;flex-direction:column;gap:4px;font-size:12px}.pd-draft-filters select,.pd-draft-filters input{width:100%;min-width:0;box-sizing:border-box;min-height:40px}</style>`;
}
function pdDraftBind(root){
 for(const control of root.querySelectorAll('[data-pd-draft]'))control.onchange=()=>{k.parallelDraftFilter??={};k.parallelDraftFilter[control.dataset.pdDraft]=control.value;k.draftBoardLimit=18;q();};
 root.querySelector('[data-pd-draft-clear]')?.addEventListener('click',()=>{k.parallelDraftFilter={};k.draftBoardLimit=18;q();});
}
