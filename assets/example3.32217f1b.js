import{s}from"./index.es.3907026b.js";import{_ as d}from"./index.17bab122.js";import{e as r,g as i,r as p,o as f,k as h,m as e,x as l,F as g}from"./vendor.f93cc66b.js";const c=r({components:{AnimationDialog:s},setup(){const o=i(),n=i(),u=i(),m=i();return{bounce:o,fade:n,zoom:u,flip:m,handleShowBounceDialog(){o.value.open()},handleShowFadeDialog(){n.value.open()},handleShowZoomDialog(){u.value.open()},handleShowFlipDialog(){m.value.open()}}}}),D={class:"wrapper"},b={class:"btn-list"};function v(o,n,u,m,w,F){const t=p("AnimationDialog");return f(),h(g,null,[e("div",D,[e("ul",b,[e("li",null,[e("button",{onClick:n[0]||(n[0]=(...a)=>o.handleShowBounceDialog&&o.handleShowBounceDialog(...a))}," BounceIn / Out (Default) ")]),e("li",null,[e("button",{onClick:n[1]||(n[1]=(...a)=>o.handleShowFadeDialog&&o.handleShowFadeDialog(...a))}," FadeInLeft / FadeOutRight ")]),e("li",null,[e("button",{onClick:n[2]||(n[2]=(...a)=>o.handleShowZoomDialog&&o.handleShowZoomDialog(...a))}," ZoomIn / ZoomOut ")]),e("li",null,[e("button",{onClick:n[3]||(n[3]=(...a)=>o.handleShowFlipDialog&&o.handleShowFlipDialog(...a))}," FlipInX / FlipOutX ")])])]),l(t,{ref:"bounce","animation-mode":!0,title:"bounceIn / bounceOut"},null,512),l(t,{ref:"fade","animation-mode":!0,"animation-in":"fadeInLeft","animation-out":"fadeOutRight",title:"fadeInLeft / fadeOutRight"},null,512),l(t,{ref:"zoom","animation-mode":!0,"animation-in":"zoomIn","animation-out":"zoomOut",title:"zoomIn / zoomOut"},null,512),l(t,{ref:"flip","animation-mode":!0,"animation-in":"flipInX","animation-out":"flipOutX",title:"flipInX / flipOutX"},null,512)],64)}var _=d(c,[["render",v],["__scopeId","data-v-ca1af21a"]]);export{_ as default};
