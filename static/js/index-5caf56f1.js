import{_ as I,r as S,j as b,k as x,o as m,c as k,a as e,b as r,u as l,i as V,d as w,e as _,f as C,p as D,h as B}from"./index-4b8a569a.js";import{a as p,C as H,F as N,b as F,B as q,c as T}from"./index-d6a888e9.js";import{S as U}from"./index-f30b24f7.js";import{h as z,s as L,c as j}from"./index-6fb9c533.js";import"./use-id-a382ac98.js";const E="//ws.lightstar.top";function G(i){return z.request({url:"/sky/getHeights/sky–314877984&"+i,method:"get",individuation:{app_api:E}})}const M=i=>(D("data-v-11e4403f"),i=i(),B(),i),A={class:"zh-body"},J={style:{margin:"16px"}},K=M(()=>_("div",{class:"zh_footer_tips"},[_("h4",{class:"app-font-danger"},"使用说明:"),_("p",null,"1、使用时请到游戏精灵中复制完整角色 ID"),_("p",null,"2、仅供学习交流，严禁用于商业用途，请于24小时内删除")],-1)),O={__name:"index",setup(i){const o=S({user_id:"",is_save:!1});let a=b({});x(()=>{const t=localStorage.getItem("user_id");t&&(o.user_id=t,o.is_save=!0)});const v=t=>{t||localStorage.removeItem("user_id")},f=()=>{const{user_id:t,is_save:n}=o;L({message:"加载中...",forbidClick:!0,durationL:0}),G(t).then(s=>{j(),s.code===200?(s.data.user_id=t,n?localStorage.setItem("user_id",t):localStorage.removeItem("user_id"),p({type:"success",message:s.msg||"提交成功"}),a.value={...s.data}):p({type:"danger",message:s.msg||"提交失败"})})};return(t,n)=>{const s=F,g=U,c=H,h=q,y=N,u=T;return m(),k("div",A,[e(y,{onSubmit:f},{default:r(()=>[e(c,{inset:""},{default:r(()=>[e(s,{modelValue:o.user_id,"onUpdate:modelValue":n[0]||(n[0]=d=>o.user_id=d),name:"user_id",label:"角色 ID",placeholder:"请输入角色 ID",required:"",rules:[{required:!0,message:"请输入角色 ID"}]},null,8,["modelValue"]),e(s,{name:"is_save",label:"保存角色 ID"},{input:r(()=>[e(g,{modelValue:o.is_save,"onUpdate:modelValue":n[1]||(n[1]=d=>o.is_save=d),onChange:v},null,8,["modelValue"])]),_:1})]),_:1}),_("div",J,[e(h,{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[C(" 查询身高 ")]),_:1})])]),_:1}),l(a).user_id?(m(),V(c,{key:0,inset:""},{default:r(()=>[e(u,{title:"当前用户:",value:l(a).user_id},null,8,["value"]),e(u,{title:"体型值:",value:l(a).scale},null,8,["value"]),e(u,{title:"身高值:",value:l(a).height},null,8,["value"]),e(u,{title:"当前身高:",value:l(a).currentHeight},null,8,["value"]),e(u,{title:"最高身高:",value:l(a).maxHeight},null,8,["value"]),e(u,{title:"最矮身高:",value:l(a).minHeight},null,8,["value"])]),_:1})):w("",!0),K])}}},Y=I(O,[["__scopeId","data-v-11e4403f"]]);export{Y as default};