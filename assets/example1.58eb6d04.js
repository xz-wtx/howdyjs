import{S as p}from"./index.es.e2cb0136.js";import{_ as l}from"./index.64191584.js";import{e as v,g as o,j as f,o as n,k as c,l as g,m,t as d}from"./vendor.84c53e66.js";const u=v({directives:{SizeObserver:p},setup(){const e=o(0),t=o(0);return{width:e,height:t,handleSizeChange:i=>{const{contentRect:a}=i,{width:r,height:s}=a;e.value=~~r,t.value=~~s}}}}),z={class:"wrapper"},S={class:"text"};function w(e,t,h,i,a,r){const s=f("size-observer");return n(),c("div",z,[g((n(),c("div",{class:"box",onSizechange:t[0]||(t[0]=(..._)=>e.handleSizeChange&&e.handleSizeChange(..._))},[m("p",S,d(e.width)+" \xD7 "+d(e.height),1)],32)),[[s]])])}var D=l(u,[["render",w],["__scopeId","data-v-32fe4d0f"]]);export{D as default};