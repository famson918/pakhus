import{u as S,M as b,c as u,l as d,i as k,r as I,o as l,b as r,d as t,t as a,F as C,s as N,e as h,h as v,g as $,w as V,f as B,P as D}from"./app-92ca493c.js";import{u as G}from"./goods-f8f6f1c8.js";const M={class:"container card p-7"},R={class:"row justify-content-center"},j={class:"col-12 mb-2 text-center"},A={class:"fs-1 fw-7"},F={class:"col-12 mb-2 text-center"},L={class:"fs-4 fw-7"},O={class:"d-flex"},T=["src"],E={class:"fs-3 fw-8"},Q={class:"fs-3 fw-8"},q={class:"fs-3 fw-8"},z={key:0},X={__name:"Index",setup(H){const{getGoods:g,deleteGood:J,getGood:K}=G(),_=S();b();const n=u(()=>_.state.good.goods),w=u(()=>_.state.auth.user);let m=d([]);const c=d(localStorage.getItem("currentSalesPage")?localStorage.getItem("currentSalesPage"):1),i=d(!1);k(async()=>{await g(),p(c.value),P(w)});const o=i.value?4:5,p=e=>{localStorage.setItem("currentSalesPage",e),e||(e=1),c.value=e,m.value={current_page:e,data:n.value,from:e,last_page:n.value.length/o+1,next_page_url:e<n.value.length/o?"":null,per_page:1,prev_page_url:e>1?"":null,to:e+1,total:n.value.length/o}},y=u(()=>{const e=(c.value-1)*o;return n.value.slice(e,e+o)}),P=e=>{e.value.email.toLowerCase().includes("admin")?i.value=!0:i.value=!1};return(e,x)=>{const f=I("router-link");return l(),r("div",M,[t("div",R,[t("div",j,[t("p",A,a(e.$t("wantToSell")),1)]),t("div",F,[t("p",L,a(e.$t("explanation")),1)])]),t("div",O,[(l(!0),r(C,null,N(y.value,s=>(l(),r("div",{key:s,class:"card m-2 shadow-sm",style:{width:"18rem","border-radius":"5%","text-align":"center"}},[t("img",{src:s.picture1,height:"200",class:"card-img-to p-4",alt:"..."},null,8,T),t("p",E,a(s.productName),1),t("p",Q,a(s.startPrice)+"$ ~ "+a(s.endPrice)+"$",1),t("p",q,"Min Order: "+a(s.minimumOrderQuantity),1),h(f,{to:{name:"sales.details",params:{id:s.id}},class:"btn btn-primary m-3"},{default:V(()=>[B(a(e.$t("viewDetails")),1)]),_:2},1032,["to"])]))),128))]),n.value.length>5?(l(),r("div",z,[h(v(D),{data:v(m),class:"mb-1 justify-content-center mt-5",limit:3,"keep-length":!1,"show-disabled":!1,onPaginationChangePage:p},null,8,["data"])])):$("",!0)])}}};export{X as default};
