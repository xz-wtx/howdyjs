import{M as i}from"./index.es.f9286a49.js";import{_ as a}from"./index.1d2502c8.js";import{e as r,j as l,l as c,o as u,k as p,m as _,t as d}from"./vendor.70dbb883.js";const m=r({directives:{MouseMenu:i},setup(){return{isMobile:"ontouchstart"in window,options:{params:{a:1},useLongPressInMobile:!0,menuList:[{label:"\u6253\u5F00",tips:"Open",fn:(e,s,o,t)=>console.log("open",e,s,o,t)},{label:"\u7F16\u8F91",tips:"Edit",fn:(e,s,o,t)=>console.log("edit",e,s,o,t)},{label:"\u5220\u9664",tips:"Delete",fn:(e,s,o,t)=>console.log("delete",e,s,o,t)},{label:"\u91CD\u547D\u540D",tips:"Rename",fn:(e,s,o,t)=>console.log("rename",e,s,o,t)}]}}}}),f={class:"box"},v={class:"text"};function b(e,s,o,t,x,g){const n=l("mouse-menu");return c((u(),p("div",f,[_("p",v,d(e.isMobile?"Long press this box":"Right click this box")+". ",1)])),[[n,e.options]])}var j=a(m,[["render",b],["__scopeId","data-v-59e409a6"]]);export{j as default};
