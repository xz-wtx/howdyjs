import{M as e}from"./index.es.375c3f69.js";import{e as s,m as t,n as a,b as d,F as n,s as i,w as l,p as o,g as u,o as c,f as r,t as b,x as p}from"./vendor.f3fe9e6c.js";var m=s({directives:{MouseMenu:e},setup:()=>({options:{menuHiddenFn:(e,s)=>{var t;return!(s.getAttribute("class")&&(null==(t=s.getAttribute("class"))?void 0:t.includes("box-listitem")))},menuList:[{label:(e,s)=>`#${s.getAttribute("data-id")}`,disabled:!0},{label:"打开",tips:"Open",fn:(...e)=>console.log("open",e),hidden:(e,s)=>["1","5","9"].includes(s.getAttribute("data-id"))},{label:"编辑",tips:"Edit",fn:(...e)=>console.log("edit",e),disabled:(e,s)=>["2","4","6"].includes(s.getAttribute("data-id"))},{label:"删除",tips:"Delete",fn:(...e)=>console.log("delete",e)},{label:"重命名",tips:"Rename",fn:(...e)=>console.log("rename",e)}]}})});const f=l();o("data-v-db1999d4");const g={class:"box"},v={class:"text"},x={key:0},A={key:1};u();const k=f(((e,s,l,o,u,m)=>{const f=t("mouse-menu");return a((c(),d("div",g,[(c(),d(n,null,i(9,(e=>r("div",{key:e,class:"box-listitem","data-id":e},[r("p",v,[r("span",null,b(e),1),[1,5,9].includes(e)?(c(),d("span",x,", Hidden Open")):p("",!0),[2,4,6].includes(e)?(c(),d("span",A,", Disabled Edit")):p("",!0)])],8,["data-id"]))),64))],512)),[[f,e.options]])}));m.render=k,m.__scopeId="data-v-db1999d4";export default m;
