import{q as c,v as l,e as u,o as p,h as _,u as i,s as m,k as h}from"./index.bcac13f4.js";const f={__name:"SampleAsync2",async setup(v){let t,e;const a=[{value:"id",text:"No."},{value:"name",text:"lang"},{value:"author",text:"author"}],{$lang:s}=h(),o=([t,e]=c(()=>m("/programming")),t=await t,e(),t),n=l(()=>o[s.value]);return(x,d)=>{const r=u("DataList");return p(),_(r,{header:a,list:i(n)},null,8,["list"])}}};export{f as default};
