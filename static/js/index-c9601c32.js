import{a0 as ye,a1 as ee,a2 as we,a3 as Ve,l as T,a4 as je,a5 as Fe,a6 as Ue,a7 as We,a8 as _e,j as F,s as z,m as xe,N as A,k as U,a9 as Se,r as oe,P as I,aa as Te,y as Ce,ab as Me,S as B,V as ke,ac as te,T as P,ad as L,ae as Ie,af as Ze,a as b,w as ie,ag as J,U as Ye,t as j,E as qe,ah as Ke,ai as Xe,x as ue,D as ae,$ as Je,J as Qe,aj as fe,ak as Ge,al as et,am as tt,z as at,v as nt,O as ot,an as it,ao as lt,ap as st,aq as rt,ar as ct,Q as dt,as as ut,Y as ft,at as ve,au as vt,av as ht,_ as mt,o as H,c as Q,b as K,u as V,aw as bt,i as he,d as gt,F as yt,g as wt,f as _t,e as ne,p as xt,h as St}from"./index-e81875e3.js";import{R as Tt,C as Ct}from"./index-0c929ebc.js";import{a as kt}from"./index-18a2bde2.js";import{u as Re,a as me}from"./function-call-1c510043.js";import{u as le,s as It,c as Rt,L as Bt}from"./index-47ad99eb.js";import{S as pt,a as $t,s as Pt}from"./function-call-258f9f89.js";function zt(e,n,i){let o,d=0;const t=e.scrollLeft,l=i===0?1:Math.round(i*1e3/16);function u(){ye(o)}function s(){e.scrollLeft+=(n-t)/l,++d<l&&(o=ee(s))}return s(),u}function Dt(e,n,i,o){let d,t=we(e);const l=t<n,u=i===0?1:Math.round(i*1e3/16),s=(n-t)/u;function g(){ye(d)}function y(){t+=s,(l&&t>n||!l&&t<n)&&(t=n),Ve(e,t),l&&t<n||!l&&t>n?d=ee(y):o&&(d=ee(o))}return y(),g}function At(){const e=T([]),n=[];return je(()=>{e.value=[]}),[e,o=>(n[o]||(n[o]=d=>{e.value[o]=d}),n[o])]}function Be(e,n){if(!Fe||!window.IntersectionObserver)return;const i=new IntersectionObserver(t=>{n(t[0].intersectionRatio>0)},{root:document.body}),o=()=>{e.value&&i.observe(e.value)},d=()=>{e.value&&i.unobserve(e.value)};Ue(d),We(d),_e(o)}const[Lt,Nt]=F("sticky"),Ot={zIndex:z,position:xe("top"),container:Object,offsetTop:A(0),offsetBottom:A(0)};var Et=U({name:Lt,props:Ot,emits:["scroll","change"],setup(e,{emit:n,slots:i}){const o=T(),d=Se(o),t=oe({fixed:!1,width:0,height:0,transform:0}),l=T(!1),u=I(()=>Te(e.position==="top"?e.offsetTop:e.offsetBottom)),s=I(()=>{if(l.value)return;const{fixed:f,height:x,width:c}=t;if(f)return{width:`${c}px`,height:`${x}px`}}),g=I(()=>{if(!t.fixed||l.value)return;const f=Ce(Me(e.zIndex),{width:`${t.width}px`,height:`${t.height}px`,[e.position]:`${u.value}px`});return t.transform&&(f.transform=`translate3d(0, ${t.transform}px, 0)`),f}),y=f=>n("scroll",{scrollTop:f,isFixed:t.fixed}),C=()=>{if(!o.value||te(o))return;const{container:f,position:x}=e,c=L(o),w=we(window);if(t.width=c.width,t.height=c.height,x==="top")if(f){const v=L(f),R=v.bottom-u.value-t.height;t.fixed=u.value>c.top&&v.bottom>0,t.transform=R<0?R:0}else t.fixed=u.value>c.top;else{const{clientHeight:v}=document.documentElement;if(f){const R=L(f),m=v-R.top-u.value-t.height;t.fixed=v-u.value<c.bottom&&v>R.top,t.transform=m<0?-m:0}else t.fixed=v-u.value<c.bottom}y(w)};return B(()=>t.fixed,f=>n("change",f)),ke("scroll",C,{target:d,passive:!0}),Be(o,C),B([Ie,Ze],()=>{!o.value||te(o)||!t.fixed||(l.value=!0,P(()=>{const f=L(o);t.width=f.width,t.height=f.height,l.value=!1}))}),()=>{var f;return b("div",{ref:o,style:s.value},[b("div",{class:Nt({fixed:t.fixed&&!l.value}),style:g.value},[(f=i.default)==null?void 0:f.call(i)])])}}});const Ht=ie(Et),[Vt,be]=F("tabs");var jt=U({name:Vt,props:{count:J(Number),inited:Boolean,animated:Boolean,duration:J(z),swipeable:Boolean,lazyRender:Boolean,currentIndex:J(Number)},emits:["change"],setup(e,{emit:n,slots:i}){const o=T(),d=u=>n("change",u),t=()=>{var u;const s=(u=i.default)==null?void 0:u.call(i);return e.animated||e.swipeable?b(pt,{ref:o,loop:!1,class:be("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:d},{default:()=>[s]}):s},l=u=>{const s=o.value;s&&s.state.active!==u&&s.swipeTo(u,{immediate:!e.inited})};return B(()=>e.currentIndex,l),Ye(()=>{l(e.currentIndex)}),le({swipeRef:o}),()=>b("div",{class:be("content",{animated:e.animated||e.swipeable})},[t()])}});const[pe,X]=F("tabs"),Ft={type:xe("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:A(0),duration:A(.3),animated:Boolean,ellipsis:j,swipeable:Boolean,scrollspy:Boolean,offsetTop:A(0),background:String,lazyRender:j,showHeader:j,lineWidth:z,lineHeight:z,beforeChange:Function,swipeThreshold:A(5),titleActiveColor:String,titleInactiveColor:String},$e=Symbol(pe);var Ut=U({name:pe,props:Ft,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:n,slots:i}){let o,d,t,l,u;const s=T(),g=T(),y=T(),C=T(),f=Re(),x=Se(s),[c,w]=At(),{children:v,linkChildren:R}=qe($e),m=oe({inited:!1,position:"",lineStyle:{},currentIndex:-1}),N=I(()=>v.length>+e.swipeThreshold||!e.ellipsis||e.shrink),W=I(()=>({borderColor:e.color,background:e.background})),O=(a,r)=>{var h;return(h=a.name)!=null?h:r},M=I(()=>{const a=v[m.currentIndex];if(a)return O(a,m.currentIndex)}),D=I(()=>Te(e.offsetTop)),se=I(()=>e.sticky?D.value+o:0),E=a=>{const r=g.value,h=c.value;if(!N.value||!r||!h||!h[m.currentIndex])return;const S=h[m.currentIndex].$el,_=S.offsetLeft-(r.offsetWidth-S.offsetWidth)/2;l&&l(),l=zt(r,_,a?0:+e.duration)},p=()=>{const a=m.inited;P(()=>{const r=c.value;if(!r||!r[m.currentIndex]||e.type!=="line"||te(s.value))return;const h=r[m.currentIndex].$el,{lineWidth:S,lineHeight:_}=e,k=h.offsetLeft+h.offsetWidth/2,$={width:ue(S),backgroundColor:e.color,transform:`translateX(${k}px) translateX(-50%)`};if(a&&($.transitionDuration=`${e.duration}s`),ae(_)){const q=ue(_);$.height=q,$.borderRadius=q}m.lineStyle=$})},Pe=a=>{const r=a<m.currentIndex?-1:1;for(;a>=0&&a<v.length;){if(!v[a].disabled)return a;a+=r}},Z=(a,r)=>{const h=Pe(a);if(!ae(h))return;const S=v[h],_=O(S,h),k=m.currentIndex!==null;m.currentIndex!==h&&(m.currentIndex=h,r||E(),p()),_!==e.active&&(n("update:active",_),k&&n("change",_,S.title)),t&&!e.scrollspy&&Qe(Math.ceil(fe(s.value)-D.value))},Y=(a,r)=>{const h=v.find((_,k)=>O(_,k)===a),S=h?v.indexOf(h):0;Z(S,r)},re=(a=!1)=>{if(e.scrollspy){const r=v[m.currentIndex].$el;if(r&&x.value){const h=fe(r,x.value)-se.value;d=!0,u&&u(),u=Dt(x.value,h,a?0:+e.duration,()=>{d=!1})}}},ze=(a,r,h)=>{const{title:S,disabled:_}=v[r],k=O(v[r],r);_||(Ge(e.beforeChange,{args:[k],done:()=>{Z(r),re()}}),et(a)),n("clickTab",{name:k,title:S,event:h,disabled:_})},De=a=>{t=a.isFixed,n("scroll",a)},Ae=a=>{P(()=>{Y(a),re(!0)})},Le=()=>{for(let a=0;a<v.length;a++){const{top:r}=L(v[a].$el);if(r>se.value)return a===0?0:a-1}return v.length-1},Ne=()=>{if(e.scrollspy&&!d){const a=Le();Z(a)}},Oe=()=>{if(e.type==="line"&&v.length)return b("div",{class:X("line"),style:m.lineStyle},null)},ce=()=>{var a,r,h;const{type:S,border:_,sticky:k}=e,$=[b("div",{ref:k?void 0:y,class:[X("wrap"),{[Je]:S==="line"&&_}]},[b("div",{ref:g,role:"tablist",class:X("nav",[S,{shrink:e.shrink,complete:N.value}]),style:W.value,"aria-orientation":"horizontal"},[(a=i["nav-left"])==null?void 0:a.call(i),v.map(q=>q.renderTitle(ze)),Oe(),(r=i["nav-right"])==null?void 0:r.call(i)])]),(h=i["nav-bottom"])==null?void 0:h.call(i)];return k?b("div",{ref:y},[$]):$},de=()=>{p(),P(()=>{var a,r;E(!0),(r=(a=C.value)==null?void 0:a.swipeRef.value)==null||r.resize()})};B(()=>[e.color,e.duration,e.lineWidth,e.lineHeight],p),B(Ie,de),B(()=>e.active,a=>{a!==M.value&&Y(a)}),B(()=>v.length,()=>{m.inited&&(Y(e.active),p(),P(()=>{E(!0)}))});const Ee=()=>{Y(e.active,!0),P(()=>{m.inited=!0,y.value&&(o=L(y.value).height),E(!0)})},He=(a,r)=>n("rendered",a,r);return le({resize:de,scrollTo:Ae}),Ke(p),Xe(p),_e(Ee),Be(s,p),ke("scroll",Ne,{target:x,passive:!0}),R({id:f,props:e,setLine:p,scrollable:N,onRendered:He,currentName:M,setTitleRefs:w,scrollIntoView:E}),()=>b("div",{ref:s,class:X([e.type])},[e.showHeader?e.sticky?b(Ht,{container:s.value,offsetTop:D.value,onScroll:De},{default:()=>[ce()]}):ce():null,b(jt,{ref:C,count:v.length,inited:m.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:m.currentIndex,onChange:Z},{default:()=>{var a;return[(a=i.default)==null?void 0:a.call(i)]}})])}});const Wt=Symbol(),[Mt,ge]=F("tab"),Zt=U({name:Mt,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:z,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:j},setup(e,{slots:n}){const i=I(()=>{const d={},{type:t,color:l,disabled:u,isActive:s,activeColor:g,inactiveColor:y}=e;l&&t==="card"&&(d.borderColor=l,u||(s?d.backgroundColor=l:d.color=l));const f=s?g:y;return f&&(d.color=f),d}),o=()=>{const d=b("span",{class:ge("text",{ellipsis:!e.scrollable})},[n.title?n.title():e.title]);return e.dot||ae(e.badge)&&e.badge!==""?b(tt,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[d]}):d};return()=>b("div",{id:e.id,role:"tab",class:[ge([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:i.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[o()])}}),[Yt,G]=F("tab"),qt=Ce({},at,{dot:Boolean,name:z,badge:z,title:String,disabled:Boolean,titleClass:nt,titleStyle:[String,Object],showZeroBadge:j});var Kt=U({name:Yt,props:qt,setup(e,{slots:n}){const i=Re(),o=T(!1),d=ht(),{parent:t,index:l}=ot($e);if(!t)return;const u=()=>{var c;return(c=e.name)!=null?c:l.value},s=()=>{o.value=!0,t.props.lazyRender&&P(()=>{t.onRendered(u(),e.title)})},g=I(()=>{const c=u()===t.currentName.value;return c&&!o.value&&s(),c}),y=T(""),C=T("");it(()=>{const{titleClass:c,titleStyle:w}=e;y.value=c?lt(c):"",C.value=w&&typeof w!="string"?st(rt(w)):w});const f=c=>b(Zt,ft({key:i,id:`${t.id}-${l.value}`,ref:t.setTitleRefs(l.value),style:C.value,class:y.value,isActive:g.value,controls:i,scrollable:t.scrollable.value,activeColor:t.props.titleActiveColor,inactiveColor:t.props.titleInactiveColor,onClick:w=>c(d.proxy,l.value,w)},ve(t.props,["type","color","shrink"]),ve(e,["dot","badge","title","disabled","showZeroBadge"])),{title:n.title}),x=T(!g.value);return B(g,c=>{c?x.value=!1:ct(()=>{x.value=!0})}),B(()=>e.title,()=>{t.setLine(),t.scrollIntoView()}),dt(Wt,g),le({id:i,renderTitle:f}),()=>{var c;const w=`${t.id}-${l.value}`,{animated:v,swipeable:R,scrollspy:m,lazyRender:N}=t.props;if(!n.default&&!v)return;const W=m||g.value;if(v||R)return b($t,{id:i,role:"tabpanel",class:G("panel-wrapper",{inactive:x.value}),tabindex:g.value?0:-1,"aria-hidden":!g.value,"aria-labelledby":w},{default:()=>{var D;return[b("div",{class:G("panel")},[(D=n.default)==null?void 0:D.call(n)])]}});const M=o.value||m||!N?(c=n.default)==null?void 0:c.call(n):null;return ut(b("div",{id:i,role:"tabpanel",class:G("panel"),tabindex:W?0:-1,"aria-labelledby":w},[M]),[[vt,W]])}}});const Xt=ie(Kt),Jt=ie(Ut);const Qt=e=>(xt("data-v-8a8f6122"),e=e(),St(),e),Gt={class:"zh-body"},ea=Qt(()=>ne("div",{class:"zh_footer_tips"},[ne("p",null,"⭐️ 点击图片即可预览,长按图片即可保存")],-1)),ta={key:1},aa=["src"],na={__name:"index",setup(e){let n=T(0),i=T(!1);const o=oe([{title:"日常任务位置",api:"scrw",imagesData:""},{title:"季节蜡烛位置",api:"scjl",imagesData:""},{title:"大蜡烛位置",api:"scdl",imagesData:""}]),d=()=>{o[n.value].imagesData||t()},t=()=>{i.value=!0,It({message:"生成中...",forbidClick:!0,durationL:0});const u=o[n.value].api;kt(u).then(s=>{if(Rt(),i.value=!1,s){const g=new Blob([s],{type:"image/jpeg"}),y=new FileReader;y.onloadend=function(){const C=y.result;o[n.value].imagesData=C},y.readAsDataURL(g),me({type:"success",message:s.msg||"生成成功"})}else me({type:"danger",message:s.msg||"生成失败"})})};t();const l=()=>{Pt([o[n.value].imagesData])};return(u,s)=>{const g=Xt,y=Jt,C=Bt,f=Ct,x=Tt;return H(),Q("div",Gt,[ea,b(y,{active:V(n),"onUpdate:active":s[0]||(s[0]=c=>bt(n)?n.value=c:n=c),onChange:d,animated:"",swipeable:""},{default:K(()=>[(H(!0),Q(yt,null,wt(o,(c,w)=>(H(),he(g,{key:w,title:c.title,disabled:V(i)},null,8,["title","disabled"]))),128))]),_:1},8,["active"]),V(i)?(H(),he(C,{key:0,vertical:""},{default:K(()=>[_t("加载中...")]),_:1})):o[V(n)].imagesData?(H(),Q("div",ta,[b(x,{justify:"center"},{default:K(()=>[b(f,{span:"22"},{default:K(()=>[ne("img",{src:o[V(n)].imagesData,onClick:l},null,8,aa)]),_:1})]),_:1})])):gt("",!0)])}}},da=mt(na,[["__scopeId","data-v-8a8f6122"]]);export{da as default};
