function u(n,t,i=!1){const s={},e=window.getComputedStyle(n);return t.map(o=>{let h=e[o];if(i){const r=h.match(/\d+/);r&&(h=~~r[0])}s[o]=h}),s}class p{constructor({el:t,options:i}){this.left=0,this.top=0,this.right=0,this.bottom=0,this.width=0,this.height=0,this.maxX=0,this.maxY=0,this.startX=0,this.startY=0,this.getScrollbarWidth=()=>{const s=document.createElement("div");s.style.cssText="width:100px;height:100px;overflow-y:scroll",document.body.appendChild(s);const e=s.offsetWidth-s.clientWidth;return document.body.removeChild(s),e},this.setBetween=(s,e,o)=>s<e?e:s>o?o:s,this.borderInfo=[0,0,0,0],this.el=t instanceof HTMLElement?t:document.querySelector(t),this.scrollbarWidth=this.getScrollbarWidth(),this.isTouch="ontouchstart"in document.documentElement,this.isDrag=!1,this.options=Object.assign({moveCursor:!0,adsorb:0,adsorbOffset:0,transitionDuration:400,transitionTimingFunction:"ease-in-out",forbidBodyScroll:!0,isAbsolute:!1,positionMode:1,needComputeBorder:!0},i),this.parent=this.options.parentSelector&&document.querySelector(this.options.parentSelector)||this.el.parentNode,this.options.transitionDuration&&(this.options.transitionDuration=this.options.transitionDuration/1e3),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleMousedown=this.handleMousedown.bind(this),this.moveEvent=this.moveEvent.bind(this),this.endEvent=this.endEvent.bind(this),this.init()}init(){this.isTouch?this.el.addEventListener("touchstart",this.handleTouchStart):this.el.addEventListener("mousedown",this.handleMousedown),this.options.moveCursor&&(this.el.style.cursor="move"),this.setPosition(),this.setLimit(),this.handleAdsorb(),this.handlePositionMode(),setTimeout(()=>{this.emitEvent("todraginit")})}handleMousedown(t){if(typeof this.options.disabled=="function"&&this.options.disabled())return;const{x:i,y:s}=t;this.setStartInfo(i,s),document.addEventListener("mousemove",this.moveEvent),document.addEventListener("mouseup",this.endEvent)}handleTouchStart(t){if(typeof this.options.disabled=="function"&&this.options.disabled())return;const i=this.isTouch?t.changedTouches[0].clientX:t.x,s=this.isTouch?t.changedTouches[0].clientY:t.y;this.setStartInfo(i,s),document.addEventListener("touchmove",this.moveEvent,{passive:!1}),document.addEventListener("touchend",this.endEvent)}setPosition(){const{left:t,top:i,width:s,height:e}=this.el.getBoundingClientRect();this.left=t,this.top=i,this.width=s,this.height=e,this.options.isAbsolute?(this.maxX=this.parent.offsetWidth-this.width,this.maxY=this.parent.offsetHeight-this.height):(this.maxX=document.body.scrollWidth>window.innerWidth?window.innerWidth-this.width-this.scrollbarWidth:window.innerWidth-this.width,this.maxY=document.body.scrollHeight>window.innerHeight?window.innerHeight-this.height-this.scrollbarWidth:window.innerHeight-this.height)}setStartInfo(t,i){this.setPosition(),this.setLimit(),this.startX=t-this.left,this.startY=i-this.top,this.isDrag=!0,this.el.style.transition="",document.body.style.userSelect="none",this.options.forbidBodyScroll&&(document.body.style.overflow="hidden"),this.emitEvent("todragstart")}moveEvent(t){if(!this.isDrag)return;t.preventDefault();let i,s;const e=this.isTouch?t.changedTouches[0].clientX:t.x,o=this.isTouch?t.changedTouches[0].clientY:t.y;if(!this.options.isAbsolute)i=e-this.startX,s=o-this.startY;else{const h=this.parent.getClientRects()[0];i=e-h.x-this.startX-this.borderInfo[1],s=o-h.y-this.startY-this.borderInfo[2]}this.left=this.setBetween(i,0,this.maxX-this.borderInfo[1]-this.borderInfo[3]),this.top=this.setBetween(s,0,this.maxY-this.borderInfo[2]-this.borderInfo[0]),this.el.style.left=this.left+"px",this.el.style.top=this.top+"px",this.emitEvent("todragmove")}endEvent(){this.isDrag=!1,document.removeEventListener("mousemove",this.moveEvent),document.removeEventListener("mouseup",this.endEvent),document.removeEventListener("touchmove",this.moveEvent),document.removeEventListener("touchend",this.endEvent),document.body.style.userSelect="auto",this.options.forbidBodyScroll&&(document.body.style.overflow="visible"),this.handleAdsorb(),this.handlePositionMode(),this.emitEvent("todragend")}handleAdsorb(){if(this.options.isAbsolute)return;const t=[this.left+this.width/2,this.top+this.height/2],i=[window.innerWidth,window.innerHeight];if(this.el.style.transition=`left ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}, 
                                top ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}`,this.options.adsorb===1)t[0]<=window.innerWidth/2?this.left=this.options.adsorbOffset:this.left=this.maxX-this.options.adsorbOffset;else if(this.options.adsorb===2){const s=i[1]/i[0],e=i[1]/-i[0],o=t[1]/t[0],h=t[1]/(t[0]-i[0]);s>=o&&e<h?this.top=this.options.adsorbOffset:s>=o&&e>=h?this.left=this.maxX-this.options.adsorbOffset:s<o&&e>=h?this.top=this.maxY-this.options.adsorbOffset:this.left=this.options.adsorbOffset,this.options.adsorbOffset&&(this.top===0&&(this.top=this.options.adsorbOffset),this.top===this.maxY&&(this.top=this.maxY-this.options.adsorbOffset),this.left===0&&(this.left=this.options.adsorbOffset),this.left===this.maxX&&(this.left=this.maxX-this.options.adsorbOffset))}this.el.style.left=this.left+"px",this.el.style.top=this.top+"px"}handlePositionMode(){if(this.options.adsorb)return;const t=this.options.isAbsolute?this.el.offsetLeft:this.left,i=this.options.isAbsolute?this.el.offsetTop:this.top;this.right=this.maxX-t-this.borderInfo[1]-this.borderInfo[3],this.bottom=this.maxY-i-this.borderInfo[2]-this.borderInfo[0],this.options.positionMode===2?(this.el.style.left="auto",this.el.style.right=this.right+"px"):this.options.positionMode===3?(this.el.style.top="auto",this.el.style.bottom=this.bottom+"px"):this.options.positionMode===4&&(this.el.style.left="auto",this.el.style.top="auto",this.el.style.right=this.right+"px",this.el.style.bottom=this.bottom+"px")}emitEvent(t){const i=document.createEvent("HTMLEvents");i.initEvent(t,!1,!1);const{left:s,top:e,right:o,bottom:h,width:r,height:a,maxX:c,maxY:f}=this;i.left=s,i.top=e,i.width=r,i.height=a,i.maxX=c,i.maxY=f,i.right=o,i.bottom=h,this.el.dispatchEvent(i)}destroy(){this.isTouch?this.el.removeEventListener("touchstart",this.handleTouchStart):this.el.removeEventListener("mousedown",this.handleMousedown)}setLimit(){if(!this.options.isAbsolute||!this.options.needComputeBorder)return;const t=["top","right","bottom","left"],i=u(this.parent,[...t.map(s=>`border-${s}-width`)],!0);this.borderInfo=t.map(s=>i[`border-${s}-width`])}}const d=(n,t,i)=>{const{value:s}=t,o=Object.assign(Object.assign({},i||{}),s);n.$toDarg=new p({el:n,options:o})},l=n=>{n.$toDarg&&n.$toDarg.destroy()},m={mounted:(n,t)=>d(n,t),unmounted:l,inserted:(n,t)=>d(n,t),unbind:l,install:(n,t)=>{n.directive("to-drag",{mounted:(i,s)=>d(i,s,t),unmounted:l,inserted:(i,s)=>d(i,s,t),unbind:l})}};export{p as T,m as a};