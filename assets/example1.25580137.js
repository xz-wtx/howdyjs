import{R as n}from"./index.es.73909a92.js";import{_ as c}from"./index.64191584.js";import{e as p,g as l,j as _,o,k as r,m as t,l as v,y as h,z}from"./vendor.84c53e66.js";const f=p({directives:{resize:n},setup(){const e=l();return{resize:e,options:{},handleResizeX(s){console.log("resizeEvent",s);let i=s.target;s.resizeWidthPercent&&(i.style.width=`${s.resizeWidthPercent}%`,e.value.style.width=`${100-s.resizeWidthPercent}%`)}}}}),u=e=>(h("data-v-2497d868"),e=e(),z(),e),m={class:"page"},x={class:"wrapper"},R=u(()=>t("p",{class:"text"}," Set this box default resize ",-1)),$=[R],g={ref:"resize",class:"box2"};function w(e,s,i,y,I,S){const a=_("resize");return o(),r("div",m,[t("div",x,[v((o(),r("div",{class:"box1",onResize:s[0]||(s[0]=(...d)=>e.handleResizeX&&e.handleResizeX(...d))},$,32)),[[a,e.options]]),t("div",g,null,512)])])}var D=c(f,[["render",w],["__scopeId","data-v-2497d868"]]);export{D as default};