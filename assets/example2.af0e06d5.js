import{M as e}from"./index.es.375c3f69.js";import{e as s,m as o,n as l,b as n,w as t,p as a,g as i,o as c,f as d}from"./vendor.f3fe9e6c.js";var p=s({directives:{MouseMenu:e},setup:()=>({options:{menuItemCss:{arrowSize:"8px"},menuList:[{label:"刷新",tips:"Refresh",fn:(...e)=>console.log("refresh",e)},{label:"查看",tips:"Check",fn:(...e)=>console.log("check",e),disabled:()=>!0},{line:!0},{label:"操作",tips:"Operation",children:[{label:"打开",tips:"Open",fn:(...e)=>console.log("open",e)},{label:"编辑",tips:"Edit",disabled:()=>!0,fn:(...e)=>console.log("edit",e)},{label:"删除",tips:"Delete",fn:(...e)=>console.log("delete",e)},{label:"重命名",tips:"Rename",fn:(...e)=>console.log("rename",e),hidden:()=>!0}]},{label:"设置",tips:"Setting",fn:(...e)=>console.log("setting",e)}]}})});const r=t();a("data-v-6e4fd04c");const f={class:"box"},b=d("p",{class:"text"}," Right Click This box. ",-1);i();const m=r(((e,s,t,a,i,d)=>{const p=o("mouse-menu");return l((c(),n("div",f,[b],512)),[[p,e.options]])}));p.render=m,p.__scopeId="data-v-6e4fd04c";export default p;
