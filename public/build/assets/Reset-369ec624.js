import{x as h,h as y,f as g,o as d,b as n,d as s,w as q,t as a,C as l,D as c,q as o,F as b,r as v,p as k}from"./app-c86f40bf.js";const P={class:"container"},V={class:"row justify-content-center my-5"},$={class:"col-md-6"},x={class:"card border-0 shadow-sm"},B={class:"card-body"},D={class:""},F={class:"mb-3"},M={for:"email",class:"form-label"},R={class:"mb-3"},U={for:"password",class:"form-label"},j={class:"text-danger mt-1"},C={class:"mb-3"},E={for:"password_confirmation",class:"form-label"},S={class:"text-danger mt-1"},z={class:"flex items-center justify-end mt-4"},A=["disabled"],T={__name:"Reset",setup(L){const m=h();y(()=>{e.token=m.params.token,e.email=m.query.email});const{resetForm:e,validationErrors:u,processing:p,submitResetPassword:_}=g();return(i,r)=>{var f,w;return d(),n("div",P,[s("div",V,[s("div",$,[s("div",x,[s("div",B,[s("form",{onSubmit:r[3]||(r[3]=q((...t)=>o(_)&&o(_)(...t),["prevent"]))},[s("div",D,[s("div",F,[s("label",M,a(i.$t("currentPassword")),1),l(s("input",{"onUpdate:modelValue":r[0]||(r[0]=t=>o(e).currentPassword=t),id:"email",type:"password",class:"form-control",required:""},null,512),[[c,o(e).currentPassword]])]),s("div",R,[s("label",U,a(i.$t("password")),1),l(s("input",{"onUpdate:modelValue":r[1]||(r[1]=t=>o(e).password=t),id:"password",type:"password",class:"form-control",required:""},null,512),[[c,o(e).password]]),s("div",j,[(d(!0),n(b,null,v((f=o(u))==null?void 0:f.password,t=>(d(),n("div",null,a(t),1))),256))])]),s("div",C,[s("label",E,a(i.$t("confirm_password")),1),l(s("input",{"onUpdate:modelValue":r[2]||(r[2]=t=>o(e).password_confirmation=t),id:"password_confirmation",type:"password",class:"form-control",required:""},null,512),[[c,o(e).password_confirmation]]),s("div",S,[(d(!0),n(b,null,v((w=o(u))==null?void 0:w.password_confirmation,t=>(d(),n("div",null,a(t),1))),256))])]),s("div",z,[s("button",{class:k(["btn btn-primary",{"opacity-25":o(p)}]),disabled:o(p)},a(i.$t("reset_password")),11,A)])])],32)])])])])])}}};export{T as default};
