import{R as e}from"./index.es.73909a92.js";import{e as s,g as t,p as i,j as a,k as l,o,b as d,m as r,l as n,x as c}from"./vendor.7a5db4a8.js";var h=s({directives:{resize:e},setup(){const e=t(),s=t(),i=t(),a=t();return{a:e,b:s,c:i,d:a,options:{},handleResizeX(s){console.log(s);let t=s.target,i=s.resizeWidth;i&&(t.style.width=`${i}px`,e.value.style.width=600-i+"px")},handleResizeY(e){console.log(e);let t=e.target,i=e.resizeHeight;i&&(t.style.height=`${i}px`,s.value.style.height=400-i+"px")},handleResizeX1(e){console.log(e);let s=e.target,t=e.resizeWidth;t&&(s.style.width=`${t}px`,i.value.style.width=600-t+"px")},handleResizeY1(e){console.log(e);let s=e.target,t=e.resizeHeight;t&&(s.style.height=`${t}px`,a.value.style.height=400-t+"px")}}}});const p=c();i("data-v-3215663c");const x={class:"page"},z={class:"container"},v={class:"wrapper x"},b=r("p",{class:"text"}," Set this box -> resize:right ",-1),g={ref:"a",class:"box2"},R={class:"wrapper y"},u=r("p",{class:"text"}," Set this box -> resize:bottom ",-1),y={ref:"b",class:"box2"},f={class:"wrapper x"},w={ref:"c",class:"box1"},m=r("p",{class:"text"}," Set this box -> resize:left ",-1),X={class:"wrapper y"},Y={ref:"d",class:"box1"},S=r("p",{class:"text"}," Set this box -> resize:top ",-1);a();const $=p(((e,s,t,i,a,c)=>{const h=l("resize");return o(),d("div",x,[r("div",z,[r("div",v,[n(r("div",{class:"box1",onResize:s[1]||(s[1]=(...s)=>e.handleResizeX&&e.handleResizeX(...s))},[b],544),[[h,e.options,"right"]]),r("div",g,null,512)]),r("div",R,[n(r("div",{class:"box1",onResize:s[2]||(s[2]=(...s)=>e.handleResizeY&&e.handleResizeY(...s))},[u],544),[[h,e.options,"bottom"]]),r("div",y,null,512)]),r("div",f,[r("div",w,null,512),n(r("div",{class:"box2",onResize:s[3]||(s[3]=(...s)=>e.handleResizeX1&&e.handleResizeX1(...s))},[m],544),[[h,e.options,"left"]])]),r("div",X,[r("div",Y,null,512),n(r("div",{class:"box2",onResize:s[4]||(s[4]=(...s)=>e.handleResizeY1&&e.handleResizeY1(...s))},[S],544),[[h,e.options,"top"]])])])])}));h.render=$,h.__scopeId="data-v-3215663c";export default h;