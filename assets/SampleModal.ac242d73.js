import k from"./SampleNestedModal.f4fddedb.js";import{_ as D,r as a,e as s,o as f,h as x,w as C,b as e,t as d,f as m,g as i,j as T,p as U,a as j}from"./index.bcac13f4.js";const u=l=>(U("data-v-4b5f8d73"),l=l(),j(),l),O=u(()=>e("p",null,"\uBAA8\uB2EC \uD398\uC774\uC9C0 \uC0D8\uD50C",-1)),$=u(()=>e("p",null,"\uBAA8\uB2EC \uD398\uC774\uC9C0 \uB0B4\uC6A9",-1)),q=u(()=>e("p",null,"...",-1)),z=u(()=>e("br",null,null,-1)),A={__name:"SampleModal",props:{param:{type:Object,default:()=>({})}},emits:["close"],setup(l,{emit:V}){const n=a("hello"),c=a("world"),S=a([{text:"\uD5EC\uB85C",value:"hello"},{text:"\uC6D4\uB4DC",value:"world"}]),p=a("20220712"),r=a(!1),M=()=>r.value=!0,b=()=>r.value=!1,I=()=>{console.log("#onClose"),_()},h=()=>{console.log("#onConfirm"),_(n.value)},g=()=>{console.log("#onCancel"),_()},_=v=>V("close",v);return(v,o)=>{const y=s("TextInput"),N=s("SelectBox"),w=s("DateInput"),B=s("Modal");return f(),x(B,{onClose:I,onConfirm:h,onCancel:g},{header:C(()=>[O]),body:C(()=>[$,q,e("p",null,"\uBAA8\uB2EC \uD398\uC774\uC9C0 \uD30C\uB77C\uBBF8\uD130: "+d(l.param.hello),1),e("div",null,[m(" txt: "+d(n.value)+" ",1),i(y,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=t=>n.value=t)},null,8,["modelValue"])]),e("div",null,[m(" select: "+d(c.value)+" ",1),i(N,{modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=t=>c.value=t),list:S.value,class:"select"},null,8,["modelValue","list"])]),e("div",null,[m(" date: "+d(p.value)+" ",1),i(w,{modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=t=>p.value=t)},null,8,["modelValue"])]),z,e("div",null,[e("button",{onClick:M},"\uC911\uCCA9 \uBAA8\uB2EC"),r.value?(f(),x(k,{key:0,onClose:b})):T("",!0)])]),_:1})}}};var G=D(A,[["__scopeId","data-v-4b5f8d73"]]);export{G as default};
