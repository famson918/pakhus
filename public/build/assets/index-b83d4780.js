import{s as g,a as q,z as B,i as U,c as D,P as y,K as L,g as R,G as T,o as n,b as r,d as e,t as s,w as j,A as w,B as $,p as d,F as x,r as F,M as z}from"./app-ed41658f.js";import{d as M,u as A,a as V,r as G,m as I}from"./rules-29bba6bc.js";function K(){const f=g({name:"",email:""}),{t:p}=q();B();const c=g({}),a=g(!1),_=U("$swal");return D(()=>y.state.lang.locale),{profile:f,getProfile:async()=>{f.value=y.getters["auth/user"]},updateProfile:async h=>{a.value||(a.value=!0,c.value={},axios.put("/api/user",h).then(({data:t})=>{t.success&&(y.commit("auth/SET_USER",t.data),_({icon:"success",title:p("profileUpdatedSuccessMessage")}))}).catch(t=>{var u;(u=t.response)!=null&&u.data&&(c.value=t.response.data.errors)}).finally(()=>a.value=!1))},validationErrors:c,isLoading:a}}const N={class:"card border-0 p-7",style:{width:"90%"}},C={class:"card-header bg-transparent"},H={class:"float-start"},J={class:"card-body"},O={class:"mb-3"},Q={for:"name",class:"form-label"},W={class:"text-danger mt-1"},X={class:"text-danger mt-1"},Y={class:"mb-3"},Z={for:"email",class:"form-label"},ee={class:"text-danger mt-1"},se={class:"text-danger mt-1"},ae={class:"mb-3"},te=["disabled"],ie={class:""},oe={key:0},le={key:1},de={__name:"index",setup(f){M("required",G),M("min",I);const p={name:"required|min:3",email:"required"},{validate:c,errors:a}=A({validationSchema:p}),{value:_}=V("name",null,{initialValue:""}),{value:P}=V("email",null,{initialValue:""}),{profile:v,getProfile:h,updateProfile:t,validationErrors:u,isLoading:b}=K(),i=L({name:_,email:P});function k(){c().then(o=>{o.valid&&t(i)})}return R(()=>{h()}),T(()=>{i.name=v.value.name,i.email=v.value.email}),(o,m)=>{var S,E;return n(),r("div",N,[e("div",C,[e("h5",H,s(o.$t("profile")),1)]),e("div",J,[e("form",{onSubmit:j(k,["prevent"])},[e("div",O,[e("label",Q,s(o.$t("name")),1),w(e("input",{type:"text","onUpdate:modelValue":m[0]||(m[0]=l=>i.name=l),class:"form-control",id:"name"},null,512),[[$,i.name]]),e("div",W,s(d(a).name),1),e("div",X,[(n(!0),r(x,null,F((S=d(u))==null?void 0:S.name,l=>(n(),r("div",null,s(l),1))),256))])]),e("div",Y,[e("label",Z,s(o.$t("email")),1),w(e("input",{type:"email","onUpdate:modelValue":m[1]||(m[1]=l=>i.email=l),class:"form-control",id:"email"},null,512),[[$,i.email]]),e("div",ee,s(d(a).email),1),e("div",se,[(n(!0),r(x,null,F((E=d(u))==null?void 0:E.email,l=>(n(),r("div",null,s(l),1))),256))])]),e("div",ae,[e("button",{disabled:d(b),class:"btn btn-primary"},[w(e("div",ie,null,512),[[z,d(b)]]),d(b)?(n(),r("span",oe,s(o.$t("processing")),1)):(n(),r("span",le,s(o.$t("update")),1))],8,te)])],32)])])}}};export{de as default};
