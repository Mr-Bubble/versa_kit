import{_ as k,r as x,j as f,k as C,o as p,c as g,a as e,b as c,u as i,i as D,d as w,e as r,f as B,p as F,h as H}from"./index-84ac2d27.js";import{a as h,C as N,F as U,b as q,B as E,c as T}from"./index-5f10ade8.js";import{S as z}from"./index-e1c2a13a.js";import{E as j}from"./index-795d303b.js";import{h as G,s as L,c as M}from"./index-c71be7d9.js";import"./use-id-92b9f568.js";const A="//ws.lightstar.top";function J(n){return G.request({url:"/sky/getHeightsByFriend",method:"get",params:n,individuation:{app_api:A}})}const K=n=>(F("data-v-9bf94cd7"),n=n(),H(),n),O={key:0},P={key:1,class:"zh-body"},Q={style:{margin:"16px"}},R=K(()=>r("div",{class:"zh_footer_tips"},[r("h4",{class:"app-font-danger"},"使用说明:"),r("p",null,"1、使用时请到游戏精灵中复制完整角色 ID"),r("p",null," 2、首次必须绑定好友邀请码，加上好友无需在填此邀请码，切记请勿拉黑加上的这个好友否则身高无法测，后续可直接用角色 ID 进行查询 "),r("p",null,"3、仅供学习交流，严禁用于商业用途，请于24小时内删除")],-1)),W={__name:"index",setup(n){const t=x({user_id:"",invite_code:"",is_save:!1});let o=f({});const y=f(!0);C(()=>{const a=localStorage.getItem("user_id");a&&(t.user_id=a,t.is_save=!0)});const b=a=>{a||localStorage.removeItem("user_id")},I=()=>{const{user_id:a,is_save:s,invite_code:m}=t;L({message:"加载中...",forbidClick:!0,duration:0});const d={user:a};m&&(d.inviteCode=m),J(d).then(l=>{M(),l.code===200?(l.data.user_id=a,s?localStorage.setItem("user_id",a):localStorage.removeItem("user_id"),h({type:"success",message:l.msg||"提交成功"}),o.value={...l.data}):h({type:"danger",message:l.msg||"提交失败"})})};return(a,s)=>{const m=j,d=q,l=z,v=N,V=E,S=U,u=T;return y.value?(p(),g("div",O,[e(m,{image:"error",description:"跑路了, 跑路了"})])):(p(),g("div",P,[e(S,{onSubmit:I},{default:c(()=>[e(v,{inset:""},{default:c(()=>[e(d,{modelValue:t.user_id,"onUpdate:modelValue":s[0]||(s[0]=_=>t.user_id=_),name:"user_id",label:"角色 ID",placeholder:"请输入角色 ID",required:"",rules:[{required:!0,message:"请输入角色 ID"}]},null,8,["modelValue"]),e(d,{modelValue:t.invite_code,"onUpdate:modelValue":s[1]||(s[1]=_=>t.invite_code=_),name:"invite_code",label:"好友邀请码",placeholder:"请输入好友邀请码"},null,8,["modelValue"]),e(d,{name:"is_save",label:"保存角色 ID"},{input:c(()=>[e(l,{modelValue:t.is_save,"onUpdate:modelValue":s[2]||(s[2]=_=>t.is_save=_),onChange:b},null,8,["modelValue"])]),_:1})]),_:1}),r("div",Q,[e(V,{round:"",block:"",type:"primary","native-type":"submit"},{default:c(()=>[B(" 查询身高 ")]),_:1})])]),_:1}),i(o).user_id?(p(),D(v,{key:0,inset:""},{default:c(()=>[e(u,{title:"当前用户:",value:i(o).user_id},null,8,["value"]),e(u,{title:"体型值:",value:i(o).scale},null,8,["value"]),e(u,{title:"身高值:",value:i(o).height},null,8,["value"]),e(u,{title:"当前身高:",value:i(o).currentHeight},null,8,["value"]),e(u,{title:"最高身高:",value:i(o).maxHeight},null,8,["value"]),e(u,{title:"最矮身高:",value:i(o).minHeight},null,8,["value"])]),_:1})):w("",!0),R]))}}},ae=k(W,[["__scopeId","data-v-9bf94cd7"]]);export{ae as default};