import{S as e}from"./index.es.2e62ff91.js";import{e as s,i as a,m as t,b as i,n,f as r,t as o,w as d,p as h,g as c,o as f}from"./vendor.f3fe9e6c.js";import"./tslib.es6.3b1b0bea.js";var v=s({directives:{SizeObserver:e},setup(){const e=a(0),s=a(0);return{width:e,height:s,handleSizeChange:a=>{const{contentRect:t}=a,{width:i,height:n}=t;e.value=~~i,s.value=~~n}}}});const l=d();h("data-v-32fe4d0f");const p={class:"wrapper"},b={class:"text"};c();const g=l(((e,s,a,d,h,c)=>{const v=t("size-observer");return f(),i("div",p,[n(r("div",{class:"box",onSizechange:s[1]||(s[1]=(...s)=>e.handleSizeChange&&e.handleSizeChange(...s))},[r("p",b,o(e.width)+" × "+o(e.height),1)],544),[[v]])])}));v.render=g,v.__scopeId="data-v-32fe4d0f";export default v;