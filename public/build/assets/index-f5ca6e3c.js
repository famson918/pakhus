import{i as g,a as M,B as R,j as U,c as L,Q as y,z as j,h as N,A as T,o as l,b as n,d as e,t as s,w as z,C as w,D as q,q as r,F as x,r as F,N as A}from"./app-c86f40bf.js";import{d as V,u as C,a as k}from"./vee-validate.esm-05f97611.js";import{u as I}from"./rules-b728849b.js";function Q(){const f=g({name:"",email:""}),{t:p}=M();R();const c=g({}),d=g(!1),_=U("$swal");return L(()=>y.state.lang.locale),{profile:f,getProfile:async()=>{f.value=y.getters["auth/user"]},updateProfile:async h=>{d.value||(d.value=!0,c.value={},axios.put("/api/user",h).then(({data:a})=>{a.success&&(y.commit("auth/SET_USER",a.data),_({icon:"success",title:p("profileUpdatedSuccessMessage")}))}).catch(a=>{var u;(u=a.response)!=null&&u.data&&(c.value=a.response.data.errors)}).finally(()=>d.value=!1))},validationErrors:c,isLoading:d}}const G={class:"card border-0 p-7",style:{width:"90%"}},H={class:"card-header bg-transparent"},J={class:"float-start"},K={class:"card-body"},O={class:"mb-3"},W={for:"name",class:"form-label"},X={class:"text-danger mt-1"},Y={class:"text-danger mt-1"},Z={class:"mb-3"},ee={for:"email",class:"form-label"},se={class:"text-danger mt-1"},ae={class:"text-danger mt-1"},te={class:"mb-3"},ie=["disabled"],oe={class:""},le={key:0},ne={key:1},ue={__name:"index",setup(f){const{required:p,mind:c}=I();V("required",p),V("min",min);const d={name:"required|min:3",email:"required"},{validate:_,errors:v}=C({validationSchema:d}),{value:P}=k("name",null,{initialValue:""}),{value:h}=k("email",null,{initialValue:""}),{profile:a,getProfile:u,updateProfile:B,validationErrors:S,isLoading:b}=Q(),t=j({name:P,email:h});function D(){_().then(i=>{i.valid&&B(t)})}return N(()=>{u()}),T(()=>{t.name=a.value.name,t.email=a.value.email}),(i,m)=>{var E,$;return l(),n("div",G,[e("div",H,[e("h5",J,s(i.$t("profile")),1)]),e("div",K,[e("form",{onSubmit:z(D,["prevent"])},[e("div",O,[e("label",W,s(i.$t("name")),1),w(e("input",{type:"text","onUpdate:modelValue":m[0]||(m[0]=o=>t.name=o),class:"form-control",id:"name"},null,512),[[q,t.name]]),e("div",X,s(r(v).name),1),e("div",Y,[(l(!0),n(x,null,F((E=r(S))==null?void 0:E.name,o=>(l(),n("div",null,s(o),1))),256))])]),e("div",Z,[e("label",ee,s(i.$t("email")),1),w(e("input",{type:"email","onUpdate:modelValue":m[1]||(m[1]=o=>t.email=o),class:"form-control",id:"email"},null,512),[[q,t.email]]),e("div",se,s(r(v).email),1),e("div",ae,[(l(!0),n(x,null,F(($=r(S))==null?void 0:$.email,o=>(l(),n("div",null,s(o),1))),256))])]),e("div",te,[e("button",{disabled:r(b),class:"btn btn-primary"},[w(e("div",oe,null,512),[[A,r(b)]]),r(b)?(l(),n("span",le,s(i.$t("processing")),1)):(l(),n("span",ne,s(i.$t("update")),1))],8,ie)])],32)])])}}};export{ue as default};