import{r as n,q as r,e as c,o as l,h as i,s as _}from"./index.a8d3fb6c.js";const h={__name:"SampleAsync1",async setup(p){let e,t;const a=[{value:"id",text:"No."},{value:"name",text:"name"},{value:"position",text:"position"}],s=n(([e,t]=r(()=>_("/user")),e=await e,t(),e));return(u,m)=>{const o=c("DataList");return l(),i(o,{header:a,list:s.value},null,8,["list"])}}};export{h as default};
