import{l as i,m as n,a as r,D as o,z as d,w as l}from"./index-84ac2d27.js";const[c,s]=i("divider"),v={dashed:Boolean,hairline:o,vertical:Boolean,contentPosition:d("center")};var h=n({name:c,props:v,setup(e,{slots:a}){return()=>{var t;return r("div",{role:"separator",class:s({dashed:e.dashed,hairline:e.hairline,vertical:e.vertical,[`content-${e.contentPosition}`]:!!a.default&&!e.vertical})},[!e.vertical&&((t=a.default)==null?void 0:t.call(a))])}}});const u=l(h);export{u as D};