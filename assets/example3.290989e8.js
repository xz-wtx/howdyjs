import{I as s}from"./index.es.f5250835.js";import{a}from"./global.947b1fb7.js";import{e as t,g as e,y as o,p as r,j as i,k as l,o as m,b as n,m as c,F as d,q as u,x as g,l as p}from"./vendor.7a5db4a8.js";var v=t({directives:{ImgZoom:s},setup(){const s=e([]);return o((async()=>{const t=await fetch(`${a}/photos?type=mirror`),{data:e,errCode:o}=await t.json();200===o&&(s.value=e.list.slice(0,9).map(((s,a)=>({thumbImg:s.urls.thumb,regularImg:s.urls.regular,title:`#${a} ${s.description||""}`}))))})),{imgList:s,customLoading:()=>{const s=document.createElement("div");return s.innerText="Loading...",s.style.cssText="font-size: 20px;color: #c8c9d0;",s}}}});const f=g();r("data-v-d91d8654");const b={class:"wrapper"},x=c("div",{class:"tips"}," PHOTOS FROM UNSPLAH ",-1);i();const I=f(((s,a,t,e,o,r)=>{const i=l("img-zoom");return m(),n(d,null,[c("div",b,[(m(!0),n(d,null,u(s.imgList,((a,t)=>(m(),n("div",{key:t,class:"box"},[p(c("img",{src:a.thumbImg,alt:"image"},null,8,["src"]),[[i,{group:"example4",zoomCursor:!0,showCloseBtn:!0,title:a.title,imgSrc:a.regularImg,customLoading:s.customLoading}]])])))),128)),(m(),n(d,null,u(9,(s=>c("div",{key:"fake"+s,class:"fake"}))),64))]),x],64)}));v.render=I,v.__scopeId="data-v-d91d8654";export default v;