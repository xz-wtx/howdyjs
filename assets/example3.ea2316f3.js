import{s as o}from"./index.es.3c04a355.js";import{d as a,f as n,r as l,c as i,a as e,F as t,w as u,p as d,b as m,o as s}from"./index.1ca3107e.js";var h=a({components:{AnimationDialog:o},setup(){const o=n(),a=n(),l=n(),i=n();return{bounce:o,fade:a,zoom:l,flip:i,handleShowBounceDialog(){o.value.open()},handleShowFadeDialog(){a.value.open()},handleShowZoomDialog(){l.value.open()},handleShowFlipDialog(){i.value.open()}}}});const c=u();d("data-v-ca1af21a");const f={class:"wrapper"},p={class:"btn-list"};m();const r=c(((o,a,n,u,d,m)=>{const h=l("AnimationDialog");return s(),i(t,null,[e("div",f,[e("ul",p,[e("li",null,[e("button",{onClick:a[1]||(a[1]=(...a)=>o.handleShowBounceDialog&&o.handleShowBounceDialog(...a))}," BounceIn / Out (Default) ")]),e("li",null,[e("button",{onClick:a[2]||(a[2]=(...a)=>o.handleShowFadeDialog&&o.handleShowFadeDialog(...a))}," FadeInLeft / FadeOutRight ")]),e("li",null,[e("button",{onClick:a[3]||(a[3]=(...a)=>o.handleShowZoomDialog&&o.handleShowZoomDialog(...a))}," ZoomIn / ZoomOut ")]),e("li",null,[e("button",{onClick:a[4]||(a[4]=(...a)=>o.handleShowFlipDialog&&o.handleShowFlipDialog(...a))}," FlipInX / FlipOutX ")])])]),e(h,{ref:"bounce","animation-mode":!0,title:"bounceIn / bounceOut"},null,512),e(h,{ref:"fade","animation-mode":!0,"animation-in":"fadeInLeft","animation-out":"fadeOutRight",title:"fadeInLeft / fadeOutRight"},null,512),e(h,{ref:"zoom","animation-mode":!0,"animation-in":"zoomIn","animation-out":"zoomOut",title:"zoomIn / zoomOut"},null,512),e(h,{ref:"flip","animation-mode":!0,"animation-in":"flipInX","animation-out":"flipOutX",title:"flipInX / flipOutX"},null,512)],64)}));h.render=r,h.__scopeId="data-v-ca1af21a";export default h;
