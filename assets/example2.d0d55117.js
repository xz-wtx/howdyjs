import{S as e}from"./index.es.2e62ff91.js";import{d as s,f as a,j as t,c as i,k as n,a as o,t as d,w as r,p as c,b as h,o as p}from"./index.2d04b6d4.js";import"./tslib.es6.3b1b0bea.js";var l=s({directives:{SizeObserver:e},setup(){const e=a("?"),s=a("?");return{width:e,height:s,options:{wait:1e3,immediate:!1},handleSizeChange:a=>{const{contentRect:t}=a,{width:i,height:n}=t;e.value=~~i,s.value=~~n}}}});const v=r();c("data-v-7e5366c2");const b={class:"wrapper"},m=o("p",{class:"tips"}," Delay: 1s, Immediate: false ",-1),f={class:"text"};h();const g=v(((e,s,a,r,c,h)=>{const l=t("size-observer");return p(),i("div",b,[n(o("div",{class:"box",onSizechange:s[1]||(s[1]=(...s)=>e.handleSizeChange&&e.handleSizeChange(...s))},[m,o("p",f,d(e.width)+" × "+d(e.height),1)],544),[[l,e.options]])])}));l.render=g,l.__scopeId="data-v-7e5366c2";export default l;
