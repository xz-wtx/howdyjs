import{R as e}from"./index.es.2d3d541f.js";import{e as s,i as t,m as i,b as l,f as a,n as o,w as d,p as r,g as n,o as p}from"./vendor.f3fe9e6c.js";import"./tslib.es6.3b1b0bea.js";var c=s({directives:{resize:e},setup(){const e=t(),s=t(),i=t(),l=t();return{a:e,b:s,c:i,d:l,options:{scrollElSelector:"#example3"},handleResizeX(s){console.log(s);let t=s.target,i=s.resizeWidth;i&&(t.style.width=`${i}px`,e.value.style.width=600-i+"px")},handleResizeY(e){console.log(e);let t=e.target,i=e.resizeHeight;i&&(t.style.height=`${i}px`,s.value.style.height=400-i+"px")},handleResizeX1(e){console.log(e);let s=e.target,t=e.resizeWidth;t&&(s.style.width=`${t}px`,i.value.style.width=600-t+"px")},handleResizeY1(e){console.log(e);let s=e.target,t=e.resizeHeight;t&&(s.style.height=`${t}px`,l.value.style.height=400-t+"px")}}}});const h=d();r("data-v-45d74e19");const x={id:"example3",class:"page"},z={class:"container"},v={class:"wrapper x"},b=a("p",{class:"text"}," Set this box -> resize:right ",-1),g={ref:"a",class:"box2"},R={class:"wrapper y"},f=a("p",{class:"text"}," Set this box -> resize:bottom ",-1),u={ref:"b",class:"box2"},m={class:"wrapper x"},y={ref:"c",class:"box1"},w=a("p",{class:"text"}," Set this box -> resize:left ",-1),X={class:"wrapper y"},Y={ref:"d",class:"box1"},S=a("p",{class:"text"}," Set this box -> resize:top ",-1);n();const $=h(((e,s,t,d,r,n)=>{const c=i("resize");return p(),l("div",x,[a("div",z,[a("div",v,[o(a("div",{class:"box1",onResize:s[1]||(s[1]=(...s)=>e.handleResizeX&&e.handleResizeX(...s))},[b],544),[[c,e.options,"right"]]),a("div",g,null,512)]),a("div",R,[o(a("div",{class:"box1",onResize:s[2]||(s[2]=(...s)=>e.handleResizeY&&e.handleResizeY(...s))},[f],544),[[c,e.options,"bottom"]]),a("div",u,null,512)]),a("div",m,[a("div",y,null,512),o(a("div",{class:"box2",onResize:s[3]||(s[3]=(...s)=>e.handleResizeX1&&e.handleResizeX1(...s))},[w],544),[[c,e.options,"left"]])]),a("div",X,[a("div",Y,null,512),o(a("div",{class:"box2",onResize:s[4]||(s[4]=(...s)=>e.handleResizeY1&&e.handleResizeY1(...s))},[S],544),[[c,e.options,"top"]])])])])}));c.render=$,c.__scopeId="data-v-45d74e19";export default c;