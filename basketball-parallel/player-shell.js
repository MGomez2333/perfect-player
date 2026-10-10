/* Local player identity and responsive shell. No remote authentication. */
(()=>{
'use strict';
const KEY='parallel-profile-v1';
const read=k=>{try{return JSON.parse(localStorage.getItem(k)||'null')}catch{return null}};
let profile=read(KEY);
const legacy=read('parallel-career-v3');
const accountId=profile?.accountId||legacy?.localAccountId||'local-'+(crypto.randomUUID?.()||Date.now().toString(36));
const valid=s=>/^[\p{L}\p{N}_\-· ]{2,20}$/u.test(s);
function identity(){return {accountId,name:profile?.displayId||'本机玩家',nickname:profile?.displayId||'本机玩家',avatar:''}}
window.parallelProfile={identity,validate:valid,edit:()=>open(false)};
// Remote account APIs intentionally remain disconnected; game modes receive this local identity directly.
if(!profile?.displayId)document.documentElement.dataset.profileRequired='true';
const cssURL=new URL('./responsive.css?v=20261010-r24',document.currentScript.src).href;
function style(root){if(root.querySelector('link[data-parallel-responsive]'))return;const link=document.createElement('link');link.rel='stylesheet';link.href=cssURL;link.dataset.parallelResponsive='';root.append(link)}
const attach=Element.prototype.attachShadow;
Element.prototype.attachShadow=function(options){const root=attach.call(this,options);new MutationObserver(()=>style(root)).observe(root,{childList:true});style(root);return root};
function open(required){
 if(document.getElementById('parallel-profile-dialog'))return;
 const dialog=document.createElement('dialog');dialog.id='parallel-profile-dialog';
 dialog.innerHTML='<form class="profile-form"><span class="profile-eyebrow">篮球平行时空 · 本机玩家</span><h1>你的名字，新的故事</h1><p>设置一个玩家 ID，开始经营王朝或创造自己的生涯。</p><label for="parallel-player-id">玩家 ID</label><input id="parallel-player-id" name="playerId" autocomplete="nickname" maxlength="20" placeholder="例如：禁区指挥官" required><small>2–20 个字，可使用中文、字母、数字、空格、短横线或下划线。</small><p class="profile-error" role="alert"></p><button class="profile-submit" type="submit">'+(required?'进入球场':'保存 ID')+'</button><button class="profile-cancel" type="button" '+(required?'hidden':'')+'>取消</button><aside>无需虎扑账号。ID 与进度保存在当前浏览器，修改 ID 不会清空存档，也不代表云端账号。</aside></form>';
 document.body.append(dialog);const input=dialog.querySelector('input');input.value=profile?.displayId||'';
 dialog.addEventListener('cancel',e=>{if(required)e.preventDefault()});
 dialog.querySelector('.profile-cancel').onclick=()=>{dialog.close();dialog.remove()};
 dialog.querySelector('form').onsubmit=e=>{e.preventDefault();const displayId=input.value.trim();const error=dialog.querySelector('.profile-error');if(!valid(displayId)){error.textContent='请输入符合规则的 2–20 个字。';input.focus();return}try{const next={version:1,accountId,displayId};localStorage.setItem(KEY,JSON.stringify(next));profile=next}catch{error.textContent='浏览器无法保存，请允许此网站使用本地存储后重试。';return}delete document.documentElement.dataset.profileRequired;update();dialog.close();dialog.remove();window.dispatchEvent(new CustomEvent('parallel-profile-change'))};
 dialog.showModal();input.focus();
}
function update(){const b=document.querySelector('#parallel-player-bar button');if(b)b.textContent=identity().name+' · 修改 ID'}
document.addEventListener('DOMContentLoaded',()=>{
 style(document.head);
 const bar=document.createElement('header');bar.id='parallel-player-bar';bar.innerHTML='<a href="./">篮球平行时空</a><span>本机存档</span><button type="button" aria-label="修改本机玩家 ID"></button>';document.body.prepend(bar);bar.querySelector('button').onclick=()=>open(false);update();
 if(!profile?.displayId)open(true);
});
})();
