import{u as B,z as Z,c,s as i,g as G,G as O,h as b,o as r,b as d,d as t,e as x,A as w,B as T,m as D,t as a,F as E,r as F,H as R,j as y,p as U,k as z,v as A}from"./app-ed41658f.js";import{u as q}from"./goods-53f2f259.js";const J={class:"container"},K=t("div",{class:"row justify-content-center"},[t("div",{class:"col-6 mb-2 text-center"},[t("p",{class:"fs-1 fw-7"},"Goods")])],-1),Q={key:0},W={class:"row justify-content-center"},X={class:"col-6 mb-3"},Y={class:"input-container"},tt={key:0,class:"fas fa-search search-icon"},et=["placeholder"],st={class:"card mb-5"},at={class:"card-header border-0 pt-5"},ot=t("h3",{class:"card-title align-items-start flex-column"},null,-1),lt={class:"card-toolbar"},nt=t("span",{class:"svg-icon svg-icon-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[t("rect",{opacity:"0.5",x:"11.364",y:"20.364",width:"16",height:"2",rx:"1",transform:"rotate(-90 11.364 20.364)",fill:"black"}),t("rect",{x:"4.36396",y:"11.364",width:"16",height:"2",rx:"1",fill:"black"})])],-1),ct={class:"card-body py-3"},it={class:"table-responsive"},rt={class:"table align-middle gs-0 gy-4"},dt={class:"fw-bolder text-muted bg-light"},ut={class:"ps-4 min-w-325px rounded-start"},ht={class:"min-w-125px"},_t={class:"min-w-125px"},mt={class:"min-w-200px"},pt=t("th",{class:"min-w-200px text-end rounded-end"},null,-1),vt={class:"d-flex align-items-center"},ft={class:"symbol symbol-50px me-5"},gt=["src"],bt={class:"d-flex justify-content-start flex-column"},xt={href:"#",class:"text-dark fw-bolder text-hover-primary mb-1 fs-6"},wt={class:"text-muted fw-bold text-muted d-block fs-7"},yt={href:"#",class:"text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"},Ct={class:"text-muted fw-bold text-muted d-block fs-7"},kt={href:"#",class:"text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"},Pt={class:"text-muted fw-bold text-muted d-block fs-7"},Lt={href:"#",class:"text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"},Mt={class:"text-muted fw-bold text-muted d-block fs-7"},Vt={class:"text-end"},It=["onClick"],St=t("span",{class:"svg-icon svg-icon-3"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[t("path",{opacity:"0.3",d:"M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z",fill:"black"}),t("path",{d:"M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z",fill:"black"})])],-1),Ht=["onClick"],Nt=A('<span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path><path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path><path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path></svg></span>',1),$t=[Nt],jt={class:"d-flex justify-content-between"},Bt=t("option",{value:"5"},"5",-1),Zt=t("option",{value:"10"},"10",-1),Gt=t("option",{value:"25"},"25",-1),Ot=t("option",{value:"50"},"50",-1),Tt=[Bt,Zt,Gt,Ot],Ut={__name:"Manager",setup(Dt){const p=B(),f=Z(),v=c(()=>p.state.good.goods);c(()=>p.state.lang.locale);const{getGoods:C,deleteGood:k,getGood:Et}=q();c(()=>p.state.auth.user);const P=i(!1),u=i(localStorage.getItem("currentSalesManagerPage")?localStorage.getItem("currentSalesManagerPage"):1);let g=i([]);i(!1),G(async()=>{await C(),console.log("goods :>> ",v.value),_(u.value)});const h=i(""),o=i(25),L=()=>{_(1)},l=c(()=>{if(v.value)return v.value.filter(e=>Object.values(e).some(n=>String(n).toLowerCase().includes(h.value.toLowerCase())))}),_=e=>{localStorage.setItem("currentSalesManagerPage",e),e||(e=1),u.value=e,g.value={current_page:e,data:l.value,from:e,last_page:l.value.length/o.value+1,next_page_url:e<l.value.length/o.value?"http://example.com/page/2":null,per_page:1,prev_page_url:e>1?"http://example.com/page/1":null,to:e+1,total:l.value.length/o.value}};O(async()=>{_(u.value)});const m=c(()=>{if(console.log("filteredItems.value :>> ",l.value),l.value)return l.value}),M=c(()=>{if(m.value){const e=(u.value-1)*o.value;return console.log("sortedItems.value :>> ",m.value),console.log("object :>> ",m.value.slice(e,e+o.value)),m.value.slice(e,e+o.value)}}),V=()=>{f.push({name:"sales.create"})},I=e=>{k(e.id)},S=e=>{f.push({name:"salesManager.edit",params:{id:e.id}})};return(e,n)=>{const H=b("router-link"),N=b("Pagination");return r(),d("div",J,[K,P.value?x("",!0):(r(),d("div",Q,[t("div",W,[t("div",X,[t("div",Y,[h.value?x("",!0):(r(),d("i",tt)),w(t("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=s=>h.value=s),onInput:L,class:"form-control form-control-lg text-right-placeholder",id:"searchTerm",placeholder:e.$t("search")},null,40,et),[[T,h.value]])])])]),t("div",st,[t("div",at,[ot,t("div",lt,[t("button",{onClick:V,class:"btn btn-sm btn-light-primary"},[nt,D(" "+a(e.$t("apply")),1)])])]),t("div",ct,[t("div",it,[t("table",rt,[t("thead",null,[t("tr",dt,[t("th",ut,a(e.$t("productName")),1),t("th",ht,a(e.$t("startPrice")),1),t("th",_t,a(e.$t("endPrice")),1),t("th",mt,a(e.$t("sampleOrderPrice")),1),pt])]),t("tbody",null,[(r(!0),d(E,null,F(M.value,(s,$)=>(r(),d("tr",{key:$},[t("td",null,[t("div",vt,[t("div",ft,[t("img",{src:s.picture1,class:"",alt:""},null,8,gt)]),t("div",bt,[t("a",xt,a(s.productName),1),t("span",wt,a(s.productName),1)])])]),t("td",null,[t("a",yt,a(s.startPrice),1),t("span",Ct,a(s.startPrice),1)]),t("td",null,[t("a",kt,a(s.endPrice),1),t("span",Pt,a(s.endPrice),1)]),t("td",null,[t("a",Lt,a(s.sampleOrderPrice),1),t("span",Mt,a(s.sampleOrderPrice),1)]),t("td",Vt,[t("a",{onClick:j=>S(s),class:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"},[y(H,{to:{name:"salesManager.edit",params:{id:s.id}}},{default:z(()=>[St]),_:2},1032,["to"])],8,It),t("a",{onClick:j=>I(s),class:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"},$t,8,Ht)])]))),128))])])])])]),t("div",jt,[w(t("select",{class:"form-select float-left","onUpdate:modelValue":n[1]||(n[1]=s=>o.value=s),style:{width:"80px"}},Tt,512),[[R,o.value]]),y(N,{data:U(g),class:"mb-1 bg-white border border-secondary rounded p-2 float-right",limit:3,"keep-length":!1,"show-disabled":!1,onPaginationChangePage:_},null,8,["data"])])]))])}}};export{Ut as default};
