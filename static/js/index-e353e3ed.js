import{_ as z,r as V,j as C,o as c,c as h,a,b as t,u as s,i as f,d as _,e as d,f as u,t as B,p as S,h as I}from"./index-6781fd75.js";import{D as N}from"./index-b14c7d1c.js";import{C as D,R as F}from"./index-524e8bf3.js";import{a as y,B as R,F as T,b as U,C as j}from"./index-824b870d.js";import{a as q}from"./index-3763ab1f.js";import{s as L,c as E}from"./index-5c8662dc.js";const G=i=>(S("data-v-36274831"),i=i(),I(),i),P={class:"zh-body"},A={class:"zh-button"},H={key:0,class:"zh-button"},J=G(()=>d("div",{class:"zh_footer_tips"},[d("h4",{class:"app-font-danger"},"使用须知:"),d("p",null," ⭐️ 温馨提示: 粘贴图集地址时无需删除文案，但如果图集链接正确但解析失败请删掉文案后重试 "),d("p",null,"⭐️ 支持平台: 抖音、皮皮虾、皮皮搞笑、微博、最右、快手...")],-1)),K={__name:"index",setup(i){const m=V({url:""});let e=C({show:!1});const g=()=>{const{url:v}=m;let r="";const p=/https?:\/\/[^\s]+/,n=v.match(p);n&&n.length>0?r=n[0]:console.log("Invalid share URL");const o={url:r};L({message:"解析中...",forbidClick:!0}),q(o).then(l=>{E(),l.code===200?(e.value=l.data,e.value.show=!0,y({type:"success",message:l.msg||"解析成功"})):(e.value.show=!1,y({type:"danger",message:l.msg||"解析失败"}))})};return(v,r)=>{const p=U,n=j,o=R,l=D,b=F,w=T,x=N;return c(),h("div",P,[a(w,{onSubmit:g},{default:t(()=>[a(n,{inset:""},{default:t(()=>[a(p,{modelValue:m.url,"onUpdate:modelValue":r[0]||(r[0]=k=>m.url=k),name:"url",label:"链接",rows:"3",autosize:"",type:"textarea",placeholder:"将分享的地址粘贴到这里就可以去水印了呀",required:"",rules:[{required:!0,message:"请输入需要去水印的地址链接或者文字内容"}]},null,8,["modelValue"])]),_:1}),d("div",A,[a(b,{justify:"center"},{default:t(()=>[a(l,{span:"8"},{default:t(()=>[a(o,{block:"",icon:"certificate",type:"primary",size:"small","native-type":"submit"},{default:t(()=>[u(" 去水印 ")]),_:1})]),_:1})]),_:1})])]),_:1}),s(e).show?(c(),h("div",H,[a(x,{dashed:""},{default:t(()=>[u(B(s(e).title),1)]),_:1}),s(e).cover?(c(),f(o,{key:0,url:s(e).cover,size:"small",type:"default"},{default:t(()=>[u("下载封面")]),_:1},8,["url"])):_("",!0),s(e).url?(c(),f(o,{key:1,url:s(e).url,size:"small",type:"default"},{default:t(()=>[u("下载视频")]),_:1},8,["url"])):_("",!0),s(e).music.url?(c(),f(o,{key:2,url:s(e).music.url,size:"small",type:"default"},{default:t(()=>[u("下载音乐")]),_:1},8,["url"])):_("",!0)])):_("",!0),J])}}},Z=z(K,[["__scopeId","data-v-36274831"]]);export{Z as default};