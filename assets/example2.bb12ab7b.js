import{R as e}from"./index.es.2d3d541f.js";import{d as s,f as t,j as i,c as r,a,k as o,w as l,p as c,b as d,o as n}from"./index.1ca3107e.js";import"./tslib.es6.3b1b0bea.js";var p=s({directives:{resize:e},setup(){const e=t(),s=t();return{box1:e,box3:s,options:{direction:["left","right"],scrollElSelector:"#example2"},handleResize(t){console.log("resizeEvent",t);let i=t.target;"left"===t.direction?(i.style.width=`${t.resizeWidthPercent}%`,e.value.style.width=`${t.moveOffsetPercent}%`):"right"===t.direction&&(i.style.width=`${t.resizeWidthPercent}%`,s.value.style.width=100-t.moveOffsetPercent+"%")}}}});const f=l();c("data-v-3915c62c");const v={id:"example2",class:"page"},x={class:"wrapper"},b={ref:"box1",class:"box1"},h=a("p",{class:"text"}," Set this box resize left & right ",-1),z={ref:"box3",class:"box3"};d();const m=f(((e,s,t,l,c,d)=>{const p=i("resize");return n(),r("div",v,[a("div",x,[a("div",b,null,512),o(a("div",{class:"box2",onResize:s[1]||(s[1]=(...s)=>e.handleResize&&e.handleResize(...s))},[h],544),[[p,e.options]]),a("div",z,null,512)])])}));p.render=m,p.__scopeId="data-v-3915c62c";export default p;
