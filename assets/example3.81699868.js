import{s as o}from"./index.es.4c0ed2f1.js";import{e as a,g as n,p as l,j as i,r as e,o as t,b as u,m as d,F as m,x as s}from"./vendor.7a5db4a8.js";var h=a({components:{AnimationDialog:o},setup(){const o=n(),a=n(),l=n(),i=n();return{bounce:o,fade:a,zoom:l,flip:i,handleShowBounceDialog(){o.value.open()},handleShowFadeDialog(){a.value.open()},handleShowZoomDialog(){l.value.open()},handleShowFlipDialog(){i.value.open()}}}});const f=s();l("data-v-ca1af21a");const c={class:"wrapper"},p={class:"btn-list"};i();const r=f(((o,a,n,l,i,s)=>{const h=e("AnimationDialog");return t(),u(m,null,[d("div",c,[d("ul",p,[d("li",null,[d("button",{onClick:a[1]||(a[1]=(...a)=>o.handleShowBounceDialog&&o.handleShowBounceDialog(...a))}," BounceIn / Out (Default) ")]),d("li",null,[d("button",{onClick:a[2]||(a[2]=(...a)=>o.handleShowFadeDialog&&o.handleShowFadeDialog(...a))}," FadeInLeft / FadeOutRight ")]),d("li",null,[d("button",{onClick:a[3]||(a[3]=(...a)=>o.handleShowZoomDialog&&o.handleShowZoomDialog(...a))}," ZoomIn / ZoomOut ")]),d("li",null,[d("button",{onClick:a[4]||(a[4]=(...a)=>o.handleShowFlipDialog&&o.handleShowFlipDialog(...a))}," FlipInX / FlipOutX ")])])]),d(h,{ref:"bounce","animation-mode":!0,title:"bounceIn / bounceOut"},null,512),d(h,{ref:"fade","animation-mode":!0,"animation-in":"fadeInLeft","animation-out":"fadeOutRight",title:"fadeInLeft / fadeOutRight"},null,512),d(h,{ref:"zoom","animation-mode":!0,"animation-in":"zoomIn","animation-out":"zoomOut",title:"zoomIn / zoomOut"},null,512),d(h,{ref:"flip","animation-mode":!0,"animation-in":"flipInX","animation-out":"flipOutX",title:"flipInX / flipOutX"},null,512)],64)}));h.render=r,h.__scopeId="data-v-ca1af21a";export default h;