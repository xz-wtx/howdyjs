import{M as e}from"./index.es.031fbfab.js";import{d as s,j as t,k as a,c as d,F as i,m as n,w as l,p as o,b,o as u,a as c,t as r,n as p}from"./index.f844311e.js";import"./tslib.es6.d5acbd82.js";var m=s({directives:{MouseMenu:e},setup:()=>({options:{menuHiddenFn:(e,s)=>{var t;return!(s.getAttribute("class")&&(null==(t=s.getAttribute("class"))?void 0:t.includes("box-listitem")))},menuList:[{label:(e,s)=>`#${s.getAttribute("data-id")}`,disabled:!0},{label:"打开",tips:"Open",fn:(...e)=>console.log("open",e),hidden:(e,s)=>["1","5","9"].includes(s.getAttribute("data-id"))},{label:"编辑",tips:"Edit",fn:(...e)=>console.log("edit",e),disabled:(e,s)=>["2","4","6"].includes(s.getAttribute("data-id"))},{label:"删除",tips:"Delete",fn:(...e)=>console.log("delete",e)},{label:"重命名",tips:"Rename",fn:(...e)=>console.log("rename",e)}]}})});const f=l("data-v-db1999d4");o("data-v-db1999d4");const g={class:"box"},v={class:"text"},x={key:0},A={key:1};b();const j=f(((e,s,l,o,b,m)=>{const f=t("mouse-menu");return a((u(),d("div",g,[(u(),d(i,null,n(9,(e=>c("div",{key:e,class:"box-listitem","data-id":e},[c("p",v,[c("span",null,r(e),1),[1,5,9].includes(e)?(u(),d("span",x,", Hidden Open")):p("",!0),[2,4,6].includes(e)?(u(),d("span",A,", Disabled Edit")):p("",!0)])],8,["data-id"]))),64))],512)),[[f,e.options]])}));m.render=j,m.__scopeId="data-v-db1999d4";export default m;
