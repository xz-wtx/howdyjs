import{e,g as n,i as t,w as i,z as a,p as _,j as o,o as u,b as m,F as d,q as r,s,T as l,A as c,x as b,n as v,l as p,B as h,m as f,t as w,D as y,E as g}from"./vendor.7a5db4a8.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function x(e,n,t,i){return new(t||(t=Promise))((function(a,_){function o(e){try{m(i.next(e))}catch(n){_(n)}}function u(e){try{m(i.throw(e))}catch(n){_(n)}}function m(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,u)}m((i=i.apply(e,n||[])).next())}))}const C=function(e){let n=Array.isArray(e)?[]:{};if(e&&"object"==typeof e)for(let t in e)e.hasOwnProperty(t)&&(e[t]&&"object"==typeof e[t]?n[t]=C(e[t]):n[t]=e[t]);return n};var S=e({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,injectCloseListener:{type:Boolean,default:!0}},setup(e){const _=n(0),o=n(0),u=n(!1),m=n(0),d=n(0),r=n(!1),s=n(null),l=n([]),b=t((()=>e.menuList.some((e=>e.children&&e.children.length>0)))),v=n(10),p=n();i(r,(n=>x(this,void 0,void 0,(function*(){var t,i;if(n){yield c();let n=p.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map((t=>{n.style.setProperty(`--menu-${t}`,e.menuWrapperCss&&e.menuWrapperCss[t])})),e.menuItemCss&&Object.keys(e.menuItemCss).map((t=>{n.style.setProperty(`--menu-item-${t}`,e.menuItemCss&&e.menuItemCss[t])}));let a=null===(i=null===(t=e.menuItemCss)||void 0===t?void 0:t.arrowSize)||void 0===i?void 0:i.match(/\d+/);v.value=a&&~~a[0]||10,n.style.setProperty("--menu-item-arrowRealSize",v.value/2+"px")}}))));const h=(e,n,t,i)=>e.map((e=>(e.children&&(e.children=h(e.children,n,t,i)),e.label&&"function"==typeof e.label&&(e.label=e.label(i,n,t)),e.tips&&"function"==typeof e.tips&&(e.tips=e.tips(i,n,t)),e.hidden&&"function"==typeof e.hidden&&(e.hidden=e.hidden(i,n,t)),e.disabled&&"function"==typeof e.disabled&&(e.disabled=e.disabled(i,n,t)),e))),f=e=>{p.value&&!p.value.contains(e.currentTarget)&&(r.value=!1,document.oncontextmenu=null)};return i((()=>e.injectCloseListener),(e=>{e?document.addEventListener("mousedown",f):document.removeEventListener("mousedown",f)}),{immediate:!0}),a((()=>{document.removeEventListener("mousedown",f)})),{subLeft:_,subTop:o,hoverFlag:u,menuTop:m,menuLeft:d,showMenu:r,clickDomEl:s,calcMenuList:l,arrowSize:v,hasSubMenu:b,MenuWrapper:p,handleMenuItemClick:n=>{n.disabled||(n.fn&&"function"==typeof n.fn&&n.fn(e.params,s.value,e.el),r.value=!1)},handleSubMenuItemClick:n=>{n.disabled||(n.fn&&"function"==typeof n.fn&&!n.disabled&&(n.fn(e.params,s.value,e.el),u.value=!1),r.value=!1)},handleMenuMouseEnter:(e,n)=>{if(n.children&&!n.disabled){u.value=!0;const n=e.currentTarget;if(!n)return;const{offsetWidth:t}=n,i=n.querySelector(".__menu__sub__wrapper");if(!i)return;const{offsetWidth:a,offsetHeight:m}=i,{innerWidth:d,innerHeight:r}=window,{top:s,left:l}=n.getBoundingClientRect();_.value=l+t+a>d-5?l-a+5:l+t,o.value=s+m>r-5?r-m:s+5}},show:(n=0,t=0)=>x(this,void 0,void 0,(function*(){if(s.value=document.elementFromPoint(n-1,t-1),e.menuHiddenFn?r.value=!e.menuHiddenFn(e.params,s.value,e.el):r.value=!0,!r.value)return;l.value=C(e.menuList),l.value=h(l.value,s.value,e.el,e.params),yield c();const{innerWidth:i,innerHeight:a}=window,_=p.value.offsetHeight,o=e.menuWidth||200;d.value=n+o+1>i?i-o-5:n+1,m.value=t+_+1>a?a-_-5:t+1})),close:()=>{r.value=!1}}}});const L=b();_("data-v-3d21bc0a");const M={key:0,class:"__menu__item-icon"},k={class:"__menu__item-label"},z={class:"__menu__item-tips"},E={class:"__menu__item-arrow-after"},T={class:"__menu__sub__item-label"},I={class:"__menu__sub__item-tips"};o();const j=L(((e,n,t,i,a,_)=>(u(),m(l,{to:"body",disabled:!e.appendToBody},[e.showMenu?(u(),m("div",{key:0,ref:"MenuWrapper",class:"__menu__wrapper",style:{width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`}},[(u(!0),m(d,null,r(e.calcMenuList,((n,t)=>(u(),m(d,null,[n.hidden||n.line?s("v-if",!0):(u(),m("div",{key:t,class:["__menu__item",{disabled:n.disabled}],onMousedown:v((t=>e.handleMenuItemClick(n)),["stop"]),onMouseenter:t=>e.handleMenuMouseEnter(t,n)},[e.hasIcon?(u(),m("span",M,["font-icon"===e.iconType?p((u(),m("i",{key:0,class:n.icon},null,2)),[[h,n.icon]]):s("v-if",!0)])):s("v-if",!0),f("span",k,w(n.label),1),f("span",z,w(n.tips||""),1),e.hasSubMenu?(u(),m("span",{key:1,class:["__menu__item-arrow",{show:e.hasSubMenu&&n.children}],style:{width:e.arrowSize+"px",height:e.arrowSize+"px"}},[p(f("span",E,null,512),[[h,e.hasSubMenu&&n.children]])],6)):s("v-if",!0),n.children&&n.children.length>0?p((u(),m("div",{key:2,class:"__menu__sub__wrapper",style:{top:`${e.subTop}px`,left:`${e.subLeft}px`}},[(u(!0),m(d,null,r(n.children,((n,t)=>(u(),m(d,null,[n.hidden||n.line?s("v-if",!0):(u(),m("div",{key:t,class:["__menu__sub__item",{disabled:n.disabled}],onMousedown:v((t=>e.handleSubMenuItemClick(n)),["stop"])},[f("span",T,w(n.label),1),f("span",I,w(n.tips||""),1)],42,["onMousedown"])),n.line?(u(),m("div",{key:t,class:"__menu__line"})):s("v-if",!0)],64)))),256))],4)),[[h,e.hoverFlag]]):s("v-if",!0)],42,["onMousedown","onMouseenter"])),n.line?(u(),m("div",{key:t,class:"__menu__line"})):s("v-if",!0)],64)))),256))],4)):s("v-if",!0)],8,["disabled"]))));function F(e){var n;const t="__mouse__menu__container";let i;i=document.querySelector(`.${t}`)?document.querySelector(`.${t}`):function(e,n,t){let i=document.createElement(e);return i.setAttribute("class",n),t&&(i.innerText=t),i}("div",t);const a=y(S,e);return g(a,i),document.body.appendChild(i),null===(n=a.component)||void 0===n?void 0:n.proxy}let W,B,A,P,O,R;function $(e){e.removeEventListener("touchstart",A),e.removeEventListener("touchmove",P),e.removeEventListener("touchend",P),e.removeEventListener("touchcancel",P)}!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".__menu__mask[data-v-3d21bc0a] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 999;\n}\n.__menu__wrapper[data-v-3d21bc0a] {\n  --menu-background: #c8f2f0;\n  --menu-boxShadow: 0 1px 5px #888;\n  --menu-padding: 5px 0;\n  --menu-borderRadius: 0;\n  --menu-item-height: 30px;\n  --menu-item-padding: 0 10px;\n  --menu-item-iconSize: 20px;\n  --menu-item-iconFontSize: 14px;\n  --menu-item-iconColor: #484852;\n  --menu-item-labelColor: #484852;\n  --menu-item-labelFontSize: 14px;\n  --menu-item-tipsColor: #889;\n  --menu-item-tipsFontSize: 12px;\n  --menu-item-arrowColor: #484852;\n  --menu-item-disabledColor: #bcc;\n  --menu-item-hoverBackground: rgba(255, 255, 255, 0.8);\n  --menu-item-hoverIconColor: inherit;\n  --menu-item-hoverLabelColor: inherit;\n  --menu-item-hoverTipsColor: inherit;\n  --menu-item-hoverArrowColor: inherit;\n  --menu-lineColor: #ccc;\n  --menu-lineMargin: 5px 0;\n}\n.__menu__wrapper[data-v-3d21bc0a] {\n  position: fixed;\n  width: 200px;\n  background: var(--menu-background);\n  box-shadow: var(--menu-boxShadow);\n  padding: var(--menu-padding);\n  border-radius: var(--menu-borderRadius);\n  z-index: 99999;\n}\n.__menu__line[data-v-3d21bc0a],\n.__menu__sub__line[data-v-3d21bc0a] {\n  border-top: 1px solid var(--menu-lineColor);\n  margin: var(--menu-lineMargin);\n}\n.__menu__item[data-v-3d21bc0a],\n.__menu__sub__item[data-v-3d21bc0a] {\n  display: flex;\n  height: var(--menu-item-height);\n  line-height: var(--menu-item-height);\n  align-items: center;\n  cursor: pointer;\n  padding: 0 10px;\n}\n.__menu__item .__menu__item-icon[data-v-3d21bc0a],\n.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {\n  color: var(--menu-item-iconColor);\n  width: var(--menu-item-iconSize);\n  height: var(--menu-item-iconSize);\n  line-height: var(--menu-item-iconSize);\n}\n.__menu__item .__menu__item-icon i[data-v-3d21bc0a],\n.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {\n  font-size: var(--menu-item-iconFontSize);\n}\n.__menu__item .__menu__item-label[data-v-3d21bc0a],\n.__menu__item .__menu__sub__item-label[data-v-3d21bc0a],\n.__menu__sub__item .__menu__item-label[data-v-3d21bc0a],\n.__menu__sub__item .__menu__sub__item-label[data-v-3d21bc0a] {\n  width: 100%;\n  max-height: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n  font-size: var(--menu-item-labelFontSize);\n  color: var(--menu-item-labelColor);\n  margin-right: 5px;\n  overflow: hidden;\n}\n.__menu__item .__menu__item-tips[data-v-3d21bc0a],\n.__menu__item .__menu__sub__item-tips[data-v-3d21bc0a],\n.__menu__sub__item .__menu__item-tips[data-v-3d21bc0a],\n.__menu__sub__item .__menu__sub__item-tips[data-v-3d21bc0a] {\n  font-size: var(--menu-item-tipsFontSize);\n  color: var(--menu-item-tipsColor);\n}\n.__menu__item .__menu__item-arrow[data-v-3d21bc0a],\n.__menu__sub__item .__menu__item-arrow[data-v-3d21bc0a] {\n  width: 10px;\n  height: 10px;\n  margin-left: 5px;\n  position: relative;\n}\n.__menu__item.disabled[data-v-3d21bc0a],\n.__menu__sub__item.disabled[data-v-3d21bc0a] {\n  cursor: not-allowed;\n}\n.__menu__item.disabled .__menu__item-icon[data-v-3d21bc0a],\n.__menu__item.disabled .__menu__item-label[data-v-3d21bc0a],\n.__menu__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],\n.__menu__item.disabled .__menu__item-tips[data-v-3d21bc0a],\n.__menu__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a],\n.__menu__sub__item.disabled .__menu__item-icon[data-v-3d21bc0a],\n.__menu__sub__item.disabled .__menu__item-label[data-v-3d21bc0a],\n.__menu__sub__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],\n.__menu__sub__item.disabled .__menu__item-tips[data-v-3d21bc0a],\n.__menu__sub__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a] {\n  color: var(--menu-item-disabledColor);\n}\n.__menu__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a],\n.__menu__sub__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a] {\n  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-disabledColor);\n}\n.__menu__item[data-v-3d21bc0a]:not(.disabled):hover {\n  background: var(--menu-item-hoverBackground);\n}\n.__menu__item:not(.disabled):hover .__menu__item-icon[data-v-3d21bc0a] {\n  color: var(--menu-item-hoverIconColor);\n}\n.__menu__item:not(.disabled):hover .__menu__item-label[data-v-3d21bc0a] {\n  color: var(--menu-item-hoverLabelColor);\n}\n.__menu__item:not(.disabled):hover .__menu__item-tips[data-v-3d21bc0a] {\n  color: var(--menu-item-hoverTipsColor);\n}\n.__menu__item:not(.disabled):hover .__menu__item-arrow[data-v-3d21bc0a] {\n  color: var(--menu-item-hoverArrowColor);\n}\n.__menu__sub__item[data-v-3d21bc0a]:not(.disabled):hover {\n  background: var(--menu-item-hoverBackground);\n}\n.__menu__sub__item:not(.disabled):hover .__menu__sub__item-label[data-v-3d21bc0a] {\n  color: var(--menu-item-hoverLabelColor);\n}\n.__menu__sub__item:not(.disabled):hover .__menu__sub__item-tips[data-v-3d21bc0a] {\n  color: var(--menu-item-hoverTipsColor);\n}\n.__menu__item-icon[data-v-3d21bc0a] {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  margin-right: 4px;\n}\n.__menu__item-arrow.show .__menu__item-arrow-after[data-v-3d21bc0a] {\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 8px;\n  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);\n  border-top: var(--menu-item-arrowRealSize) solid transparent;\n  border-bottom: var(--menu-item-arrowRealSize) solid transparent;\n}\n.__menu__sub__wrapper[data-v-3d21bc0a] {\n  position: fixed;\n  visibility: hidden;\n  width: 200px;\n  background: var(--menu-background);\n  box-shadow: var(--menu-boxShadow);\n  padding: var(--menu-padding);\n  border-radius: var(--menu-borderRadius);\n}\n.__menu__item:hover .__menu__sub__wrapper[data-v-3d21bc0a] {\n  visibility: visible;\n}"),S.render=j,S.__scopeId="data-v-3d21bc0a",S.__file="packages/mouse-menu/mouse-menu.vue",S.install=e=>{e.component(S.name,S)};const D={mounted:(e,n)=>{const{value:t}=n;if(!(t.menuList.length>0))throw new Error("At least set one menu list!");O=n=>{n.preventDefault();const i=F(Object.assign({el:e},t)),{x:a,y:_}=n;i.show(a,_)},e.removeEventListener("contextmenu",O),e.addEventListener("contextmenu",O),t.useLongPressInMobile&&"ontouchstart"in window&&(R=n=>{if("function"==typeof t.disabled&&t.disabled(t.params))return;n.preventDefault(),W=F(Object.assign({el:e},t));const{touches:i}=n,{clientX:a,clientY:_}=i[0];W.show(a,_),document.onmousedown=null,e.onmousedown=null,setTimeout((()=>{document.onmousedown=()=>W.close(),e.onmousedown=()=>W.close()}),500)},$(e),function(e,n,t=500){A=e=>{W&&W.close(),e.preventDefault(),B&&clearTimeout(B),B=window.setTimeout((()=>{n(e)}),t)},P=()=>{clearTimeout(B)},e.addEventListener("touchstart",A),e.addEventListener("touchmove",P),e.addEventListener("touchend",P),e.addEventListener("touchcancel",P)}(e,R,t.longPressDuration||500))},unmounted:e=>{e.removeEventListener("contextmenu",O),"touchstart"in window&&$(e)}};export{D as M};