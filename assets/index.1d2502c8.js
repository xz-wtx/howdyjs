import{c as d,a as E,r as j,o as f,b as g,d as v}from"./vendor.70dbb883.js";const O=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))m(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&m(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}};O();const L="modulepreload",l={},P="./",e=function(r,t){return!t||t.length===0?r():Promise.all(t.map(m=>{if(m=`${P}${m}`,m in l)return;l[m]=!0;const a=m.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${o}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":L,a||(s.as="script",s.crossOrigin=""),s.href=m,document.head.appendChild(s),a)return new Promise((u,c)=>{s.addEventListener("load",u),s.addEventListener("error",c)})})).then(()=>r())},i={"../pages/animation-dialog/index.vue":()=>e(()=>import("./index.70ddc1a9.js"),["assets/index.70ddc1a9.js","assets/ExampleFrame.8dde85a0.js","assets/ExampleFrame.39886bfd.css","assets/vendor.70dbb883.js","assets/index.es.73909a92.js"]),"../pages/img-zoom/index.vue":()=>e(()=>import("./index.fe5ff8f1.js"),["assets/index.fe5ff8f1.js","assets/ExampleFrame.8dde85a0.js","assets/ExampleFrame.39886bfd.css","assets/vendor.70dbb883.js","assets/index.es.73909a92.js"]),"../pages/mouse-menu/index.vue":()=>e(()=>import("./index.f0328c42.js"),["assets/index.f0328c42.js","assets/ExampleFrame.8dde85a0.js","assets/ExampleFrame.39886bfd.css","assets/vendor.70dbb883.js","assets/index.es.73909a92.js"]),"../pages/resize/index.vue":()=>e(()=>import("./index.9dda3181.js"),["assets/index.9dda3181.js","assets/ExampleFrame.8dde85a0.js","assets/ExampleFrame.39886bfd.css","assets/vendor.70dbb883.js","assets/index.es.73909a92.js"]),"../pages/scroll/index.vue":()=>e(()=>import("./index.2656e691.js"),["assets/index.2656e691.js","assets/ExampleFrame.8dde85a0.js","assets/ExampleFrame.39886bfd.css","assets/vendor.70dbb883.js","assets/index.es.73909a92.js"]),"../pages/size-observer/index.vue":()=>e(()=>import("./index.b76a04f1.js"),["assets/index.b76a04f1.js","assets/ExampleFrame.8dde85a0.js","assets/ExampleFrame.39886bfd.css","assets/vendor.70dbb883.js","assets/index.es.73909a92.js"]),"../pages/standard-tabs/index.vue":()=>e(()=>import("./index.9ec5c54a.js"),["assets/index.9ec5c54a.js","assets/ExampleFrame.8dde85a0.js","assets/ExampleFrame.39886bfd.css","assets/vendor.70dbb883.js","assets/index.es.73909a92.js"]),"../pages/to-control/index.vue":()=>e(()=>import("./index.384b5a49.js"),["assets/index.384b5a49.js","assets/ExampleFrame.8dde85a0.js","assets/ExampleFrame.39886bfd.css","assets/vendor.70dbb883.js","assets/index.es.73909a92.js"]),"../pages/to-drag/index.vue":()=>e(()=>import("./index.591987ed.js"),["assets/index.591987ed.js","assets/ExampleFrame.8dde85a0.js","assets/ExampleFrame.39886bfd.css","assets/vendor.70dbb883.js","assets/index.es.73909a92.js"])},x={"../pages/animation-dialog/example/example1.vue":()=>e(()=>import("./example1.9ff768c9.js"),["assets/example1.9ff768c9.js","assets/example1.d07cfa5b.css","assets/index.es.ac7c3999.js","assets/vendor.70dbb883.js"]),"../pages/animation-dialog/example/example2.vue":()=>e(()=>import("./example2.984b8ce6.js"),["assets/example2.984b8ce6.js","assets/example2.f492eb92.css","assets/index.es.ac7c3999.js","assets/vendor.70dbb883.js","assets/global.947b1fb7.js"]),"../pages/animation-dialog/example/example3.vue":()=>e(()=>import("./example3.953f4eeb.js"),["assets/example3.953f4eeb.js","assets/example3.58655c5e.css","assets/index.es.ac7c3999.js","assets/vendor.70dbb883.js"]),"../pages/animation-dialog/example/example4.vue":()=>e(()=>import("./example4.3c3d3fe6.js"),["assets/example4.3c3d3fe6.js","assets/example4.985c7fdb.css","assets/index.es.ac7c3999.js","assets/vendor.70dbb883.js"]),"../pages/img-zoom/example/example1.vue":()=>e(()=>import("./example1.233051bc.js"),["assets/example1.233051bc.js","assets/example1.1e7666a4.css","assets/index.es.baa91d66.js","assets/global.947b1fb7.js","assets/vendor.70dbb883.js"]),"../pages/img-zoom/example/example2.vue":()=>e(()=>import("./example2.ac079ec7.js"),["assets/example2.ac079ec7.js","assets/example2.1fec14a9.css","assets/index.es.baa91d66.js","assets/global.947b1fb7.js","assets/vendor.70dbb883.js"]),"../pages/img-zoom/example/example3.vue":()=>e(()=>import("./example3.eef31a0d.js"),["assets/example3.eef31a0d.js","assets/example3.72ba9b02.css","assets/index.es.baa91d66.js","assets/global.947b1fb7.js","assets/vendor.70dbb883.js"]),"../pages/mouse-menu/example/example1.vue":()=>e(()=>import("./example1.0d04eb66.js"),["assets/example1.0d04eb66.js","assets/example1.d44d596f.css","assets/index.es.f9286a49.js","assets/vendor.70dbb883.js"]),"../pages/mouse-menu/example/example2.vue":()=>e(()=>import("./example2.ff07646d.js"),["assets/example2.ff07646d.js","assets/example2.e93cfcca.css","assets/index.es.f9286a49.js","assets/vendor.70dbb883.js"]),"../pages/mouse-menu/example/example3.vue":()=>e(()=>import("./example3.339f7c82.js"),["assets/example3.339f7c82.js","assets/example3.4f78f84b.css","assets/index.es.f9286a49.js","assets/vendor.70dbb883.js"]),"../pages/mouse-menu/example/example4.vue":()=>e(()=>import("./example4.cc0a535c.js"),["assets/example4.cc0a535c.js","assets/example4.e766d3bd.css","assets/index.es.f9286a49.js","assets/vendor.70dbb883.js"]),"../pages/mouse-menu/example/example5.vue":()=>e(()=>import("./example5.a0eda2e7.js"),["assets/example5.a0eda2e7.js","assets/example5.0e92b6f2.css","assets/index.es.f9286a49.js","assets/vendor.70dbb883.js"]),"../pages/mouse-menu/example/example6.vue":()=>e(()=>import("./example6.81b273f1.js"),["assets/example6.81b273f1.js","assets/example6.4a6d8f81.css","assets/index.es.f9286a49.js","assets/vendor.70dbb883.js","assets/global.947b1fb7.js"]),"../pages/mouse-menu/example/example7.vue":()=>e(()=>import("./example7.c805ec4b.js"),["assets/example7.c805ec4b.js","assets/example7.a56dd4fa.css","assets/vendor.70dbb883.js","assets/index.es.f9286a49.js"]),"../pages/resize/example/example1.vue":()=>e(()=>import("./example1.0db27b65.js"),["assets/example1.0db27b65.js","assets/example1.cc2ff179.css","assets/index.es.73909a92.js","assets/vendor.70dbb883.js"]),"../pages/resize/example/example2.vue":()=>e(()=>import("./example2.2f728334.js"),["assets/example2.2f728334.js","assets/example2.106537a9.css","assets/index.es.73909a92.js","assets/vendor.70dbb883.js"]),"../pages/resize/example/example3.vue":()=>e(()=>import("./example3.a88adfdc.js"),["assets/example3.a88adfdc.js","assets/example3.0a0c7fd2.css","assets/index.es.73909a92.js","assets/vendor.70dbb883.js"]),"../pages/resize/example/example4.vue":()=>e(()=>import("./example4.4b3ad349.js"),["assets/example4.4b3ad349.js","assets/example4.75e666ef.css","assets/index.es.73909a92.js","assets/vendor.70dbb883.js"]),"../pages/resize/example/example5.vue":()=>e(()=>import("./example5.a1a6943a.js"),["assets/example5.a1a6943a.js","assets/example5.7d994ff4.css","assets/index.es.73909a92.js","assets/vendor.70dbb883.js"]),"../pages/scroll/example/example1.vue":()=>e(()=>import("./example1.7c13bb76.js"),["assets/example1.7c13bb76.js","assets/example1.acb98656.css","assets/index.es.8f33dbb9.js","assets/vendor.70dbb883.js"]),"../pages/scroll/example/example2.vue":()=>e(()=>import("./example2.9263bf14.js"),["assets/example2.9263bf14.js","assets/example2.6a88a886.css","assets/index.es.8f33dbb9.js","assets/vendor.70dbb883.js"]),"../pages/scroll/example/example3.vue":()=>e(()=>import("./example3.b65ab531.js"),["assets/example3.b65ab531.js","assets/example3.60729808.css","assets/index.es.8f33dbb9.js","assets/vendor.70dbb883.js"]),"../pages/scroll/example/example4.vue":()=>e(()=>import("./example4.d434d804.js"),["assets/example4.d434d804.js","assets/example4.c948571f.css","assets/index.es.8f33dbb9.js","assets/vendor.70dbb883.js"]),"../pages/scroll/example/example5.vue":()=>e(()=>import("./example5.55312761.js"),["assets/example5.55312761.js","assets/example5.437a5652.css","assets/index.es.8f33dbb9.js","assets/vendor.70dbb883.js"]),"../pages/size-observer/example/example1.vue":()=>e(()=>import("./example1.9e5f57ff.js"),["assets/example1.9e5f57ff.js","assets/example1.6a430521.css","assets/index.es.e2cb0136.js","assets/vendor.70dbb883.js"]),"../pages/size-observer/example/example2.vue":()=>e(()=>import("./example2.7517c102.js"),["assets/example2.7517c102.js","assets/example2.b670fdfa.css","assets/index.es.e2cb0136.js","assets/vendor.70dbb883.js"]),"../pages/standard-tabs/example/example1.vue":()=>e(()=>import("./example1.059d6133.js"),["assets/example1.059d6133.js","assets/example1.52aee4da.css","assets/index.es.2caff25d.js","assets/vendor.70dbb883.js"]),"../pages/standard-tabs/example/example2.vue":()=>e(()=>import("./example2.f5c78072.js"),["assets/example2.f5c78072.js","assets/example2.faf3ee67.css","assets/index.es.2caff25d.js","assets/vendor.70dbb883.js"]),"../pages/to-control/example/example1.vue":()=>e(()=>import("./example1.90e51f74.js"),["assets/example1.90e51f74.js","assets/example1.17f22fd9.css","assets/index.es.d72f691c.js","assets/index.es.5eac8f7c.js","assets/vendor.70dbb883.js"]),"../pages/to-control/example/example2.vue":()=>e(()=>import("./example2.d15c2260.js"),["assets/example2.d15c2260.js","assets/example2.869b6f1c.css","assets/index.es.d72f691c.js","assets/index.es.5eac8f7c.js","assets/vendor.70dbb883.js"]),"../pages/to-control/example/example3.vue":()=>e(()=>import("./example3.1b044cc7.js"),["assets/example3.1b044cc7.js","assets/example3.5aef2542.css","assets/index.es.d72f691c.js","assets/index.es.5eac8f7c.js","assets/vendor.70dbb883.js"]),"../pages/to-control/example/example4.vue":()=>e(()=>import("./example4.00e356bf.js"),["assets/example4.00e356bf.js","assets/example4.059a44e2.css","assets/index.es.d72f691c.js","assets/index.es.5eac8f7c.js","assets/vendor.70dbb883.js"]),"../pages/to-drag/example/example1.vue":()=>e(()=>import("./example1.a937f479.js"),["assets/example1.a937f479.js","assets/example1.ef3b2194.css","assets/index.es.5eac8f7c.js","assets/vendor.70dbb883.js"]),"../pages/to-drag/example/example2.vue":()=>e(()=>import("./example2.72d0d303.js"),["assets/example2.72d0d303.js","assets/example2.06ca9675.css","assets/index.es.5eac8f7c.js","assets/vendor.70dbb883.js"]),"../pages/to-drag/example/example3.vue":()=>e(()=>import("./example3.4072c347.js"),["assets/example3.4072c347.js","assets/example3.0098cec1.css","assets/index.es.5eac8f7c.js","assets/vendor.70dbb883.js"]),"../pages/to-drag/example/example4.vue":()=>e(()=>import("./example4.f2420f33.js"),["assets/example4.f2420f33.js","assets/example4.0305cbb1.css","assets/index.es.5eac8f7c.js","assets/vendor.70dbb883.js"]),"../pages/to-drag/example/example5.vue":()=>e(()=>import("./example5.5736e7d2.js"),["assets/example5.5736e7d2.js","assets/example5.57c0919b.css","assets/index.es.5eac8f7c.js","assets/vendor.70dbb883.js"]),"../pages/to-drag/example/example6.vue":()=>e(()=>import("./example6.fd579c3d.js"),["assets/example6.fd579c3d.js","assets/example6.1e6eca5d.css","assets/index.es.5eac8f7c.js","assets/vendor.70dbb883.js"])},_={};Object.keys(i).map(p=>{const r=/^.*pages\/(.*)\/index.*$/,t=p.replace(r,(...m)=>m[1]);_[t]=i[p]});const b=d({history:E(),routes:[{path:"/",name:"home",component:()=>e(()=>import("./home.054930ab.js"),["assets/home.054930ab.js","assets/ReadmeFrame.bd1fcd0d.js","assets/ReadmeFrame.41b1b5a6.css","assets/vendor.70dbb883.js"])},...Object.keys(_).map(p=>{const r=Object.keys(x).filter(t=>t.includes(p));return{path:`/${p}`,name:`${p}`,redirect:`/${p}/readme`,component:_[p],children:[{path:`/${p}/readme`,name:`${p}-readme`,component:()=>e(()=>import("./PageReadme.e5b1d666.js"),["assets/PageReadme.e5b1d666.js","assets/vendor.70dbb883.js","assets/ReadmeFrame.bd1fcd0d.js","assets/ReadmeFrame.41b1b5a6.css"])},...r.map((t,m)=>({path:`/${p}/example${m+1}`,name:`${p}-example${m+1}`,component:x[t]}))]}})]});var A=(p,r)=>{const t=p.__vccOpts||p;for(const[m,a]of r)t[m]=a;return t};const R={};function I(p,r){const t=j("router-view");return f(),g(t)}var D=A(R,[["render",I]]);const n=v(D);n.use(b);n.mount("#app");export{A as _,e as a};
