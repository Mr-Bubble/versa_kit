import{k as i,l as n,a as r,C as o,y as d,w as l}from"./index-6781fd75.js";const[c,s]=i("divider"),v={dashed:Boolean,hairline:o,vertical:Boolean,contentPosition:d("center")};var h=n({name:c,props:v,setup(e,{slots:a}){return()=>{var t;return r("div",{role:"separator",class:s({dashed:e.dashed,hairline:e.hairline,vertical:e.vertical,[`content-${e.contentPosition}`]:!!a.default&&!e.vertical})},[!e.vertical&&((t=a.default)==null?void 0:t.call(a))])}}});const m=l(h);export{m as D};