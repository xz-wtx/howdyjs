import{M as e}from"./index.es.65bb19e3.js";import{e as o,p as s,j as n,k as l,m as a,o as t,l as i,n as p,t as r}from"./vendor.f536f7b4.js";var c=o({directives:{MouseMenu:e},setup:()=>({isMobile:"ontouchstart"in window,options:{useLongPressInMobile:!0,menuWrapperCss:{background:"linear-gradient(45deg, #3439e6, #EC6EAD)",boxShadow:"0 0 10px #ccc"},menuItemCss:{labelColor:"#fff",tipsColor:"#ccc",arrowColor:"#aaa",disabledColor:"#aaa"},menuList:[{label:"刷新",tips:"Refresh",fn:(...e)=>console.log("open",e)},{label:"查看",tips:"Check",fn:(...e)=>console.log("open",e),disabled:()=>!0},{line:!0},{label:"操作",tips:"Operation",children:[{label:"打开",tips:"Open",fn:(...e)=>console.log("open",e)},{label:"编辑",tips:"Edit",disabled:()=>!0,fn:(...e)=>console.log("open",e)},{label:"删除",tips:"Delete",fn:(...e)=>console.log("open",e)},{label:"重命名",tips:"Rename",fn:(...e)=>console.log("open",e),hidden:()=>!0}]},{label:"设置",tips:"Setting"}]}})});s("data-v-67114294");const d={class:"box"},b={class:"text"};n(),c.render=function(e,o,s,n,c,u){const f=l("mouse-menu");return a((t(),i("div",d,[p("p",b,r(e.isMobile?"Long press this box, but it don not support children menu":"Right click this box")+". ",1)],512)),[[f,e.options]])},c.__scopeId="data-v-67114294";export{c as default};
