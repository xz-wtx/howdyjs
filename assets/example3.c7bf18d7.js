import{I as s}from"./index.es.4d6a67f3.js";import{a}from"./global.947b1fb7.js";import{e as t,i as e,z as o,m as r,b as i,f as l,F as m,s as n,w as c,p as d,g as u,o as g,n as p}from"./vendor.f3fe9e6c.js";var f=t({directives:{ImgZoom:s},setup(){const s=e([]);return o((async()=>{const t=await fetch(`${a}/photos?type=mirror`),{data:e,errCode:o}=await t.json();200===o&&(s.value=e.list.slice(0,9).map(((s,a)=>({thumbImg:s.urls.thumb,regularImg:s.urls.regular,title:`#${a} ${s.description||""}`}))))})),{imgList:s,customLoading:()=>{const s=document.createElement("div");return s.innerText="Loading...",s.style.cssText="font-size: 20px;color: #c8c9d0;",s}}}});const v=c();d("data-v-d91d8654");const b={class:"wrapper"},x=l("div",{class:"tips"}," PHOTOS FROM UNSPLAH ",-1);u();const I=v(((s,a,t,e,o,c)=>{const d=r("img-zoom");return g(),i(m,null,[l("div",b,[(g(!0),i(m,null,n(s.imgList,((a,t)=>(g(),i("div",{key:t,class:"box"},[p(l("img",{src:a.thumbImg,alt:"image"},null,8,["src"]),[[d,{group:"example4",zoomCursor:!0,showCloseBtn:!0,title:a.title,imgSrc:a.regularImg,customLoading:s.customLoading}]])])))),128)),(g(),i(m,null,n(9,(s=>l("div",{key:"fake"+s,class:"fake"}))),64))]),x],64)}));f.render=I,f.__scopeId="data-v-d91d8654";export default f;
