import{u as _,q as g,c as l,o as a,b as o,d as c,t as r,F as h,s as m,v,g as f,x as k}from"./app-92ca493c.js";const w={key:0,class:"nav-item dropdown"},b={class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},x={class:"dropdown-menu"},L=["onClick"],F={__name:"LocaleSwitcher",setup(S){const s=_(),d=g({useScope:"global"}),i=l(()=>s.getters["lang/locale"]),t=l(()=>s.getters["lang/locales"]);function u(e){d.locale!==e&&(k(e),s.dispatch("lang/setLocale",{locale:e}))}return(e,y)=>Object.keys(t.value).length>1?(a(),o("li",w,[c("a",b,r(t.value[i.value]),1),c("div",x,[(a(!0),o(h,null,m(t.value,(p,n)=>(a(),o("a",{key:n,class:"dropdown-item",href:"#",onClick:v(B=>u(n),["prevent"])},r(p),9,L))),128))])])):f("",!0)}};export{F as _};
