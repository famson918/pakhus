import{C as g,o as e,b as t,d as s,v as x,A as c,B as w,t as m,h as o,F,s as S,D as k}from"./app-92ca493c.js";import{u as B}from"./roles-5d2404f3.js";import{d as _,u as q,a as D,r as R,m as V}from"./rules-ff33fc86.js";const C={class:"row justify-content-center my-5"},E={class:"col-md-6"},L={class:"card border-0 shadow-sm"},M={class:"card-body"},T={class:"mb-3"},j=s("label",{for:"post-name",class:"form-label"}," Title ",-1),A={class:"text-danger mt-1"},N={class:"text-danger mt-1"},P={class:"mt-4"},U=["disabled"],z={class:""},G={key:0},H={key:1},Q={__name:"Create",setup(I){_("required",R),_("min",V);const u={name:"required|min:3"},{validate:v,errors:h}=q({validationSchema:u}),{value:p}=D("name",null,{initialValue:""}),{storeRole:f,validationErrors:b,isLoading:a}=B(),n=g({name:p});function y(){v().then(r=>{r.valid&&f(n)})}return(r,d)=>{var l;return e(),t("div",C,[s("div",E,[s("div",L,[s("div",M,[s("form",{onSubmit:x(y,["prevent"])},[s("div",T,[j,c(s("input",{"onUpdate:modelValue":d[0]||(d[0]=i=>n.name=i),id:"post-name",type:"text",class:"form-control"},null,512),[[w,n.name]]),s("div",A,m(o(h).name),1),s("div",N,[(e(!0),t(F,null,S((l=o(b))==null?void 0:l.name,i=>(e(),t("div",null,m(i),1))),256))])]),s("div",P,[s("button",{disabled:o(a),class:"btn btn-primary"},[c(s("div",z,null,512),[[k,o(a)]]),o(a)?(e(),t("span",G,"Processing...")):(e(),t("span",H,"Save"))],8,U)])],32)])])])])}}};export{Q as default};
