import{a}from"./index.es.5eac8f7c.js";import{e as t,g as s,p as o,j as e,k as d,o as r,b as n,m as l,l as i,F as c,x as m,G as p}from"./vendor.7a5db4a8.js";var g=t({directives:{"to-drag":a},setup(){const a=s(0),t=s();return{rotate:a,compass:t,options:{immediateEvent:!0,forbidBodyScroll:!1},setCompassRotate(s){const{top:o,left:e,width:d,height:r}=t.value.getBoundingClientRect(),n=[e-d/2,o-r/2],{top:l,left:i,width:c,height:m}=s,p=[i-c/2,l-m/2],g=Math.atan2(p[1]-n[1],p[0]-n[0])/Math.PI*180;a.value=g+90},handleToDragStart(){document.body.style.overflow="hidden"},handleToDragEnd(){document.body.style.overflow="visible"}}}});const v=m();o("data-v-4d4f08e8");const h=l("div",{class:"text"}," 请拖拽屏幕上的紫色浮块 ",-1),f={class:"compass-box"},u={ref:"compass",src:"./images/compass.svg",alt:"compass",class:"compass"},T=p(" DRAG ");e();const b=v(((a,t,s,o,e,m)=>{const p=d("to-drag");return r(),n(c,null,[h,l("div",f,[l("div",{class:"img-wrapper",style:{transform:`rotate(${a.rotate}deg)`}},[l("img",u,null,512)],4)]),i(l("div",{class:"move-box",onTodraginit:t[1]||(t[1]=(...t)=>a.setCompassRotate&&a.setCompassRotate(...t)),onTodragstart:t[2]||(t[2]=(...t)=>a.handleToDragStart&&a.handleToDragStart(...t)),onTodragmove:t[3]||(t[3]=(...t)=>a.setCompassRotate&&a.setCompassRotate(...t)),onTodragend:t[4]||(t[4]=(...t)=>a.handleToDragEnd&&a.handleToDragEnd(...t))},[T],544),[[p,a.options]])],64)}));g.render=b,g.__scopeId="data-v-4d4f08e8";export default g;