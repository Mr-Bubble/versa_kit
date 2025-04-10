import{b as be,u as re,L as Ee,P as Re,m as Ye,a as Xe}from"./index-DHy7Sj1d.js";import{k as Q,A as E,T as N,n as H,m as J,i as M,r as ue,D as De,N as T,O as D,aw as Me,j as ve,ag as _e,ah as Le,a5 as Ze,a6 as Pe,Q as Ce,d as y,ab as he,P as G,S as Z,au as ae,ad as Ie,ae as xe,z as ne,w as ge,M as Ae,y as se,aq as Be,q as fe,C as He,$ as Te,ao as We,ax as Ne,V as ce,I as ze,af as oe,a0 as je,ac as ke,ay as qe,l as we,az as Fe,Z as Ue,aA as Ve,ak as Ke,s as Ge}from"./index-BSIoVOQp.js";const[$e,ie]=J("swipe"),Qe={loop:E,width:H,height:H,vertical:Boolean,autoplay:N(0),duration:N(500),touchable:E,lazyRender:Boolean,initialSwipe:N(0),indicatorColor:String,showIndicators:E,stopPropagation:E},Oe=Symbol($e);var Je=Q({name:$e,props:Qe,emits:["change","dragStart","dragEnd"],setup(e,{emit:d,slots:f}){const t=M(),c=M(),a=ue({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let P=!1;const S=be(),{children:b,linkChildren:h}=De(Oe),l=T(()=>b.length),u=T(()=>a[e.vertical?"height":"width"]),m=T(()=>e.vertical?S.deltaY.value:S.deltaX.value),x=T(()=>a.rect?(e.vertical?a.rect.height:a.rect.width)-u.value*l.value:0),z=T(()=>u.value?Math.ceil(Math.abs(x.value)/u.value):l.value),_=T(()=>l.value*u.value),n=T(()=>(a.active+l.value)%l.value),k=T(()=>{const o=e.vertical?"vertical":"horizontal";return S.direction.value===o}),R=T(()=>{const o={transitionDuration:`${a.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${+a.offset.toFixed(2)}px)`};if(u.value){const g=e.vertical?"height":"width",w=e.vertical?"width":"height";o[g]=`${_.value}px`,o[w]=e[w]?`${e[w]}px`:""}return o}),v=o=>{const{active:g}=a;return o?e.loop?Z(g+o,-1,l.value):Z(g+o,0,z.value):g},Y=(o,g=0)=>{let w=o*u.value;e.loop||(w=Math.min(w,-x.value));let X=g-w;return e.loop||(X=Z(X,x.value,0)),X},C=({pace:o=0,offset:g=0,emitChange:w})=>{if(l.value<=1)return;const{active:X}=a,O=v(o),K=Y(O,g);if(e.loop){if(b[0]&&K!==x.value){const de=K<x.value;b[0].setOffset(de?_.value:0)}if(b[l.value-1]&&K!==0){const de=K>0;b[l.value-1].setOffset(de?-_.value:0)}}a.active=O,a.offset=K,w&&O!==X&&d("change",n.value)},L=()=>{a.swiping=!0,a.active<=-1?C({pace:l.value}):a.active>=l.value&&C({pace:-l.value})},p=()=>{L(),S.reset(),ae(()=>{a.swiping=!1,C({pace:-1,emitChange:!0})})},j=()=>{L(),S.reset(),ae(()=>{a.swiping=!1,C({pace:1,emitChange:!0})})};let ee;const W=()=>clearTimeout(ee),A=()=>{W(),+e.autoplay>0&&l.value>1&&(ee=setTimeout(()=>{j(),A()},+e.autoplay))},B=(o=+e.initialSwipe)=>{if(!t.value)return;const g=()=>{var w,X;if(!he(t)){const O={width:t.value.offsetWidth,height:t.value.offsetHeight};a.rect=O,a.width=+((w=e.width)!=null?w:O.width),a.height=+((X=e.height)!=null?X:O.height)}l.value&&(o=Math.min(l.value-1,o),o===-1&&(o=l.value-1)),a.active=o,a.swiping=!0,a.offset=Y(o),b.forEach(O=>{O.setOffset(0)}),A()};he(t)?G().then(g):g()},U=()=>B(a.active);let V;const te=o=>{!e.touchable||o.touches.length>1||(S.start(o),P=!1,V=Date.now(),W(),L())},i=o=>{e.touchable&&a.swiping&&(S.move(o),k.value&&(!e.loop&&(a.active===0&&m.value>0||a.active===l.value-1&&m.value<0)||(ne(o,e.stopPropagation),C({offset:m.value}),P||(d("dragStart",{index:n.value}),P=!0))))},s=()=>{if(!e.touchable||!a.swiping)return;const o=Date.now()-V,g=m.value/o;if((Math.abs(g)>.25||Math.abs(m.value)>u.value/2)&&k.value){const X=e.vertical?S.offsetY.value:S.offsetX.value;let O=0;e.loop?O=X>0?m.value>0?-1:1:0:O=-Math[m.value>0?"ceil":"floor"](m.value/u.value),C({pace:O,emitChange:!0})}else m.value&&C({pace:0});P=!1,a.swiping=!1,d("dragEnd",{index:n.value}),A()},r=(o,g={})=>{L(),S.reset(),ae(()=>{let w;e.loop&&o===l.value?w=a.active===0?0:o:w=o%l.value,g.immediate?ae(()=>{a.swiping=!1}):a.swiping=!1,C({pace:w-a.active,emitChange:!0})})},I=(o,g)=>{const w=g===n.value,X=w?{backgroundColor:e.indicatorColor}:void 0;return y("i",{style:X,class:ie("indicator",{active:w})},null)},$=()=>{if(f.indicator)return f.indicator({active:n.value,total:l.value});if(e.showIndicators&&l.value>1)return y("div",{class:ie("indicators",{vertical:e.vertical})},[Array(l.value).fill("").map(I)])};return re({prev:p,next:j,state:a,resize:U,swipeTo:r}),h({size:u,props:e,count:l,activeIndicator:n}),D(()=>e.initialSwipe,o=>B(+o)),D(l,()=>B(a.active)),D(()=>e.autoplay,A),D([Ie,xe,()=>e.width,()=>e.height],U),D(Me(),o=>{o==="visible"?A():W()}),ve(B),_e(()=>B(a.active)),Le(()=>B(a.active)),Ze(W),Pe(W),Ce("touchmove",i,{target:c}),()=>{var o;return y("div",{ref:t,class:ie()},[y("div",{ref:c,style:R.value,class:ie("track",{vertical:e.vertical}),onTouchstartPassive:te,onTouchend:s,onTouchcancel:s},[(o=f.default)==null?void 0:o.call(f)]),$()])}}});const pe=ge(Je),[et,tt]=J("swipe-item");var at=Q({name:et,setup(e,{slots:d}){let f;const t=ue({offset:0,inited:!1,mounted:!1}),{parent:c,index:a}=Ae(Oe);if(!c)return;const P=T(()=>{const h={},{vertical:l}=c.props;return c.size.value&&(h[l?"height":"width"]=`${c.size.value}px`),t.offset&&(h.transform=`translate${l?"Y":"X"}(${t.offset}px)`),h}),S=T(()=>{const{loop:h,lazyRender:l}=c.props;if(!l||f)return!0;if(!t.mounted)return!1;const u=c.activeIndicator.value,m=c.count.value-1,x=u===0&&h?m:u-1,z=u===m&&h?0:u+1;return f=a.value===u||a.value===x||a.value===z,f}),b=h=>{t.offset=h};return ve(()=>{G(()=>{t.mounted=!0})}),re({setOffset:b}),()=>{var h;return y("div",{class:tt(),style:P.value},[S.value?(h=d.default)==null?void 0:h.call(d):null])}}});const ot=ge(at),[it,q]=J("image"),nt={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:H,height:H,radius:H,lazyLoad:Boolean,iconSize:H,showError:E,errorIcon:se("photo-fail"),iconPrefix:String,showLoading:E,loadingIcon:se("photo"),crossorigin:String,referrerpolicy:String};var lt=Q({name:it,props:nt,emits:["load","error"],setup(e,{emit:d,slots:f}){const t=M(!1),c=M(!0),a=M(),{$Lazyload:P}=Be().proxy,S=T(()=>{const n={width:fe(e.width),height:fe(e.height)};return He(e.radius)&&(n.overflow="hidden",n.borderRadius=fe(e.radius)),n});D(()=>e.src,()=>{t.value=!1,c.value=!0});const b=n=>{c.value&&(c.value=!1,d("load",n))},h=()=>{const n=new Event("load");Object.defineProperty(n,"target",{value:a.value,enumerable:!0}),b(n)},l=n=>{t.value=!0,c.value=!1,d("error",n)},u=(n,k,R)=>R?R():y(ze,{name:n,size:e.iconSize,class:k,classPrefix:e.iconPrefix},null),m=()=>{if(c.value&&e.showLoading)return y("div",{class:q("loading")},[u(e.loadingIcon,q("loading-icon"),f.loading)]);if(t.value&&e.showError)return y("div",{class:q("error")},[u(e.errorIcon,q("error-icon"),f.error)])},x=()=>{if(t.value||!e.src)return;const n={alt:e.alt,class:q("img"),style:{objectFit:e.fit,objectPosition:e.position},crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy};return e.lazyLoad?We(y("img",ce({ref:a},n),null),[[Ne("lazy"),e.src]]):y("img",ce({ref:a,src:e.src,onLoad:b,onError:l},n),null)},z=({el:n})=>{const k=()=>{n===a.value&&c.value&&h()};a.value?k():G(k)},_=({el:n})=>{n===a.value&&!t.value&&l()};return P&&Te&&(P.$on("loaded",z),P.$on("error",_),Pe(()=>{P.$off("loaded",z),P.$off("error",_)})),ve(()=>{G(()=>{var n;(n=a.value)!=null&&n.complete&&!e.lazyLoad&&h()})}),()=>{var n;return y("div",{class:q({round:e.round,block:e.block}),style:S.value},[x(),m(),(n=f.default)==null?void 0:n.call(f)])}}});const st=ge(lt),ye=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),ct=e=>({x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}),me=J("image-preview")[1],Se=2.6,rt={src:String,show:Boolean,active:Number,minZoom:oe(H),maxZoom:oe(H),rootWidth:oe(Number),rootHeight:oe(Number),disableZoom:Boolean,doubleScale:Boolean,closeOnClickImage:Boolean,closeOnClickOverlay:Boolean,vertical:Boolean};var ut=Q({props:rt,emits:["scale","close","longPress"],setup(e,{emit:d,slots:f}){const t=ue({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,initializing:!1,imageRatio:0}),c=be(),a=M(),P=M(),S=M(!1),b=M(!1);let h=0;const l=T(()=>{const{scale:i,moveX:s,moveY:r,moving:I,zooming:$,initializing:o}=t,g={transitionDuration:$||I||o?"0s":".3s"};return(i!==1||b.value)&&(g.transform=`matrix(${i}, 0, 0, ${i}, ${s}, ${r})`),g}),u=T(()=>{if(t.imageRatio){const{rootWidth:i,rootHeight:s}=e,r=S.value?s/t.imageRatio:i;return Math.max(0,(t.scale*r-i)/2)}return 0}),m=T(()=>{if(t.imageRatio){const{rootWidth:i,rootHeight:s}=e,r=S.value?s:i*t.imageRatio;return Math.max(0,(t.scale*r-s)/2)}return 0}),x=(i,s)=>{var r;if(i=Z(i,+e.minZoom,+e.maxZoom+1),i!==t.scale){const I=i/t.scale;if(t.scale=i,s){const $=ke((r=a.value)==null?void 0:r.$el),o={x:$.width*.5,y:$.height*.5},g=t.moveX-(s.x-$.left-o.x)*(I-1),w=t.moveY-(s.y-$.top-o.y)*(I-1);t.moveX=Z(g,-u.value,u.value),t.moveY=Z(w,-m.value,m.value)}else t.moveX=0,t.moveY=b.value?h:0;d("scale",{scale:i,index:e.active})}},z=()=>{x(1)},_=()=>{const i=t.scale>1?1:2;x(i,i===2||b.value?{x:c.startX.value,y:c.startY.value}:void 0)};let n,k,R,v,Y,C,L,p,j=!1;const ee=i=>{const{touches:s}=i;if(n=s.length,n===2&&e.disableZoom)return;const{offsetX:r}=c;c.start(i),k=t.moveX,R=t.moveY,p=Date.now(),j=!1,t.moving=n===1&&(t.scale!==1||b.value),t.zooming=n===2&&!r.value,t.zooming&&(v=t.scale,Y=ye(s))},W=i=>{const{touches:s}=i;if(c.move(i),t.moving){const{deltaX:r,deltaY:I}=c,$=r.value+k,o=I.value+R;if((e.vertical?c.isVertical()&&Math.abs(o)>m.value:c.isHorizontal()&&Math.abs($)>u.value)&&!j){t.moving=!1;return}j=!0,ne(i,!0),t.moveX=Z($,-u.value,u.value),t.moveY=Z(o,-m.value,m.value)}if(t.zooming&&(ne(i,!0),s.length===2)){const r=ye(s),I=v*r/Y;C=ct(s),x(I,C)}},A=i=>{var s;const r=(s=P.value)==null?void 0:s.$el;if(!r)return;const I=r.firstElementChild,$=i.target===r,o=I==null?void 0:I.contains(i.target);!e.closeOnClickImage&&o||!e.closeOnClickOverlay&&$||d("close")},B=i=>{if(n>1)return;const s=Date.now()-p,r=250;c.isTap.value&&(s<r?e.doubleScale?L?(clearTimeout(L),L=null,_()):L=setTimeout(()=>{A(i),L=null},r):A(i):s>qe&&d("longPress"))},U=i=>{let s=!1;if((t.moving||t.zooming)&&(s=!0,t.moving&&k===t.moveX&&R===t.moveY&&(s=!1),!i.touches.length)){t.zooming&&(t.moveX=Z(t.moveX,-u.value,u.value),t.moveY=Z(t.moveY,-m.value,m.value),t.zooming=!1),t.moving=!1,k=0,R=0,v=1,t.scale<1&&z();const r=+e.maxZoom;t.scale>r&&x(r,C)}ne(i,s),B(i),c.reset()},V=()=>{const{rootWidth:i,rootHeight:s}=e,r=s/i,{imageRatio:I}=t;S.value=t.imageRatio>r&&I<Se,b.value=t.imageRatio>r&&I>=Se,b.value&&(h=(I*i-s)/2,t.moveY=h,t.initializing=!0,je(()=>{t.initializing=!1})),z()},te=i=>{const{naturalWidth:s,naturalHeight:r}=i.target;t.imageRatio=r/s,V()};return D(()=>e.active,z),D(()=>e.show,i=>{i||z()}),D(()=>[e.rootWidth,e.rootHeight],V),Ce("touchmove",W,{target:T(()=>{var i;return(i=P.value)==null?void 0:i.$el})}),re({resetScale:z}),()=>{const i={loading:()=>y(Ee,{type:"spinner"},null)};return y(ot,{ref:P,class:me("swipe-item"),onTouchstartPassive:ee,onTouchend:U,onTouchcancel:U},{default:()=>[f.image?y("div",{class:me("image-wrap")},[f.image({src:e.src,onLoad:te,style:l.value})]):y(st,{ref:a,src:e.src,fit:"contain",class:me("image",{vertical:S.value}),style:l.value,onLoad:te},i)]})}}});const[vt,F]=J("image-preview"),dt=["show","teleport","transition","overlayStyle","closeOnPopstate"],ft={show:Boolean,loop:E,images:Fe(),minZoom:N(1/3),maxZoom:N(3),overlay:E,vertical:Boolean,closeable:Boolean,showIndex:E,className:we,closeIcon:se("clear"),transition:String,beforeClose:Function,doubleScale:E,overlayClass:we,overlayStyle:Object,swipeDuration:N(300),startPosition:N(0),showIndicators:Boolean,closeOnPopstate:E,closeOnClickImage:E,closeOnClickOverlay:E,closeIconPosition:se("top-right"),teleport:[String,Object]};var mt=Q({name:vt,props:ft,emits:["scale","close","closed","change","longPress","update:show"],setup(e,{emit:d,slots:f}){const t=M(),c=M(),a=ue({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),P=()=>{if(t.value){const v=ke(t.value.$el);a.rootWidth=v.width,a.rootHeight=v.height,t.value.resize()}},S=v=>d("scale",v),b=v=>d("update:show",v),h=()=>{Ke(e.beforeClose,{args:[a.active],done:()=>b(!1)})},l=v=>{v!==a.active&&(a.active=v,d("change",v))},u=()=>{if(e.showIndex)return y("div",{class:F("index")},[f.index?f.index({index:a.active}):`${a.active+1} / ${e.images.length}`])},m=()=>{if(f.cover)return y("div",{class:F("cover")},[f.cover()])},x=()=>{a.disableZoom=!0},z=()=>{a.disableZoom=!1},_=()=>y(pe,{ref:t,lazyRender:!0,loop:e.loop,class:F("swipe"),vertical:e.vertical,duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:l,onDragEnd:z,onDragStart:x},{default:()=>[e.images.map((v,Y)=>y(ut,{ref:C=>{Y===a.active&&(c.value=C)},src:v,show:e.show,active:a.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:a.rootWidth,rootHeight:a.rootHeight,disableZoom:a.disableZoom,doubleScale:e.doubleScale,closeOnClickImage:e.closeOnClickImage,closeOnClickOverlay:e.closeOnClickOverlay,vertical:e.vertical,onScale:S,onClose:h,onLongPress:()=>d("longPress",{index:Y})},{image:f.image}))]}),n=()=>{if(e.closeable)return y(ze,{role:"button",name:e.closeIcon,class:[F("close-icon",e.closeIconPosition),Ve],onClick:h},null)},k=()=>d("closed"),R=(v,Y)=>{var C;return(C=t.value)==null?void 0:C.swipeTo(v,Y)};return re({resetScale:()=>{var v;(v=c.value)==null||v.resetScale()},swipeTo:R}),ve(P),D([Ie,xe],P),D(()=>e.startPosition,v=>l(+v)),D(()=>e.show,v=>{const{images:Y,startPosition:C}=e;v?(l(+C),G(()=>{P(),R(+C,{immediate:!0})})):d("close",{index:a.active,url:Y[a.active]})}),()=>y(Re,ce({class:[F(),e.className],overlayClass:[F("overlay"),e.overlayClass],onClosed:k,"onUpdate:show":b},Ue(e,dt)),{default:()=>[n(),_(),u(),m()]})}});let le;const gt={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,vertical:!1,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,doubleScale:!0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeOnClickOverlay:!0,closeIconPosition:"top-right"};function ht(){({instance:le}=Ye({setup(){const{state:e,toggle:d}=Xe(),f=()=>{e.images=[]};return()=>y(mt,ce(e,{onClosed:f,"onUpdate:show":d}),null)}}))}const St=(e,d=0)=>{if(Te)return le||ht(),e=Array.isArray(e)?{images:e,startPosition:d}:e,le.open(Ge({},gt,e)),le};export{st as I,pe as S,ot as a,St as b,mt as s};
