var s=Object.assign;import{M as a}from"./index.es.cd9c4132.js";import{a as t}from"./global.947b1fb7.js";import{d as e,f as l,s as n,j as o,c as d,F as i,m as r,w as u,p as c,a as p,b,o as m,k as f,t as g}from"./index.290b8796.js";import"./tslib.es6.d5acbd82.js";var h=e({directives:{MouseMenu:a},setup(){const s=l([]);return n((async()=>{const a=await fetch(`${t}/page?page=1&pageSize=30`),{data:e,errCode:l}=await a.json();200===l&&(s.value=e.items.map((s=>(s.sex=1===s.sex?"男":"女",s))))})),{list:s,options:{menuList:[{label:s=>`#${s.userName}`,disabled:!0},{label:"编辑",tips:"Edit",fn:(s,...a)=>console.log("edit",s,a)},{label:"停用",tips:"Stop",fn:(s,...a)=>console.log("stop",s,a)},{label:"删除",tips:"Delete",fn:(s,...a)=>console.log("delete",s,a)}]}}}});const j=u("data-v-02acd7b2");c("data-v-02acd7b2");const v={class:"easy"},x=p("tr",null,[p("th",null,"#"),p("th",null,"用户名"),p("th",null,"性别"),p("th",null,"职位"),p("th",null,"生日")],-1);b();const w=j(((a,t,e,l,n,u)=>{const c=o("mouse-menu");return m(),d("table",v,[x,(m(!0),d(i,null,r(a.list,((t,e)=>f((m(),d("tr",{key:t.id},[p("td",null,g(e+1),1),p("td",null,g(t.userName),1),p("td",null,g(t.sex),1),p("td",null,g(t.position),1),p("td",null,g(t.birth),1)],512)),[[c,s({params:t},a.options)]]))),128))])}));h.render=w,h.__scopeId="data-v-02acd7b2";export default h;
