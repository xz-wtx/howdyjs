import{s as g}from"./index.es.a3580b59.js";import{b as u}from"./global.947b1fb7.js";import{_ as f}from"./index.64191584.js";import{e as v,g as m,r as h,o as t,k as o,m as s,F as r,q as p,x as k,A as w,t as y}from"./vendor.84c53e66.js";const D=v({components:{AnimationDialog:g},setup(){const e=m(),l=m(0);return{dialog:e,imgList:Array.from({length:9},(n,a)=>`${u}images/img/${a+1}.jpg`),active:0,handleShowDialog(n,a){l.value=a+1,e.value.open(n.currentTarget)}}}}),$={class:"wrapper"},x=["onClick"],A=["src"],C={class:"dialog-content"};function b(e,l,n,a,L,B){const _=h("AnimationDialog");return t(),o(r,null,[s("div",$,[(t(!0),o(r,null,p(e.imgList,(i,c)=>(t(),o("div",{key:c,class:"box",onClick:d=>e.handleShowDialog(d,c)},[s("img",{src:i,alt:"image"},null,8,A)],8,x))),128)),(t(),o(r,null,p(9,i=>s("div",{key:"fake"+i,class:"fake"})),64))]),k(_,{ref:"dialog","open-from-itself":!0,"listen-window-size-change":!0},{default:w(()=>[s("div",C," #"+y(e.active),1)]),_:1},512)],64)}var j=f(D,[["render",b],["__scopeId","data-v-7caf5b28"]]);export{j as default};