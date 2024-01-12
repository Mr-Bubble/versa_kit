import{j as y,m as _,K as x,a as c,X as m,$ as v,a0 as b,w,r as A,o as B,c as k,b as d,d as u,a1 as z,e as p}from"./index-076131b5.js";import{h as f,d as S,e as $,B as C}from"./index-a635ee15.js";const[g,E]=y("space"),N={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function h(t=[]){const a=[];return t.forEach(e=>{Array.isArray(e)?a.push(...e):e.type===m?a.push(...h(e.children)):a.push(e)}),a.filter(e=>{var s;return!(e&&(e.type===v||e.type===m&&((s=e.children)==null?void 0:s.length)===0||e.type===b&&e.children.trim()===""))})}var T=_({name:g,props:N,setup(t,{slots:a}){const e=x(()=>{var n;return(n=t.align)!=null?n:t.direction==="horizontal"?"center":""}),s=n=>typeof n=="number"?n+"px":n,o=n=>{const r={},i=`${s(Array.isArray(t.size)?t.size[0]:t.size)}`,l=`${s(Array.isArray(t.size)?t.size[1]:t.size)}`;return n?t.wrap?{marginBottom:l}:{}:(t.direction==="horizontal"&&(r.marginRight=i),(t.direction==="vertical"||t.wrap)&&(r.marginBottom=l),r)};return()=>{var n;const r=h((n=a.default)==null?void 0:n.call(a));return c("div",{class:[E({[t.direction]:t.direction,[`align-${e.value}`]:e.value,wrap:t.wrap,fill:t.fill})]},[r.map((i,l)=>c("div",{key:`item-${l}`,class:`${g}-item`,style:o(l===r.length-1)},[i]))])}}});const q=w(T);function R(t){return f.request({url:"/list/get",method:"get",params:t})}function L(t){return f.request({url:"/list/error",method:"post",params:t})}const M={class:"tools-content pt-[20px] px-[12px]"},V=u("div",{class:"pl-[12px] border-l-[3px] border-[color:#41b883] mb-[12px]"},[u("h3",{class:"font-bold text-[18px] my-[4px]"},"Mock")],-1),j={class:"text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"},F={class:"my-[14px] leading-[24px]"},D=_({name:"Tools"}),O=Object.assign(D,{setup(t){const a=A([]),e=async()=>{const{list:o}=await R();S("请求成功"),a.push(...o)},s=()=>{L().then(()=>{},o=>{console.log(o),$("请求有误")})};return(o,n)=>{const r=C,i=q;return B(),k("div",M,[V,c(i,null,{default:d(()=>[c(r,{type:"success",onClick:e},{default:d(()=>[p("成功请求")]),_:1}),c(r,{type:"danger",onClick:s},{default:d(()=>[p("失败请求")]),_:1})]),_:1}),u("div",j,[u("p",F,z(a),1)])])}}});export{O as default};
