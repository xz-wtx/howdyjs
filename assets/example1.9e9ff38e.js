import{R as e}from"./index.es.6239062e.js";import{e as s,i as t,m as a,b as i,f as r,n as o,w as d,p as n,g as l,o as c}from"./vendor.babeb836.js";var z=s({directives:{resize:e},setup(){const e=t();return{resize:e,options:{},handleResizeX(s){console.log("resizeEvent",s);let t=s.target;s.resizeWidthPercent&&(t.style.width=`${s.resizeWidthPercent}%`,e.value.style.width=100-s.resizeWidthPercent+"%")}}}});const p=d();n("data-v-2497d868");const v={class:"page"},h={class:"wrapper"},b=r("p",{class:"text"}," Set this box default resize ",-1),u={ref:"resize",class:"box2"};l();const f=p(((e,s,t,d,n,l)=>{const z=a("resize");return c(),i("div",v,[r("div",h,[o(r("div",{class:"box1",onResize:s[1]||(s[1]=(...s)=>e.handleResizeX&&e.handleResizeX(...s))},[b],544),[[z,e.options]]),r("div",u,null,512)])])}));z.render=f,z.__scopeId="data-v-2497d868";export default z;
