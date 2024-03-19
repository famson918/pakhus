import{a as J,B as z,u as G,i,c as _,h as K,A as T,k as Q,o,b as l,d as t,t as d,e as m,C as B,D as X,s as Y,F as P,r as S,J as ee,m as V,q as te}from"./app-c86f40bf.js";import{u as se,_ as ae}from"./Create-7c4072f3.js";import"./vee-validate.esm-05f97611.js";import"./UploadInput-45e2a719.js";import"./rules-b728849b.js";const oe={class:"container"},le={class:"row justify-content-center"},ne={class:"col-6 mb-2 text-center"},re={class:"fs-1 fw-7"},ce={key:0},ie={class:"row justify-content-center"},de={class:"col-6 mb-3"},ue={class:"input-container"},ve={key:0,class:"fas fa-search search-icon"},_e=["placeholder"],he={class:"card mb-5"},pe={class:"card-header border-0 pt-5"},fe=t("h3",{class:"card-title align-items-start flex-column"},null,-1),ge={class:"card-toolbar"},me=t("span",{class:"svg-icon svg-icon-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[t("rect",{opacity:"0.5",x:"11.364",y:"20.364",width:"16",height:"2",rx:"1",transform:"rotate(-90 11.364 20.364)",fill:"black"}),t("rect",{x:"4.36396",y:"11.364",width:"16",height:"2",rx:"1",fill:"black"})])],-1),be={class:"card-body py-3"},xe={class:"table-responsive"},ye={class:"table align-middle gs-0 gy-4"},we={class:"fw-bolder text-muted bg-light"},Ce=["onClick"],ke={class:"d-flex align-items-center"},Le={key:0,class:"d-flex justify-content-start flex-column"},Ie=["onClick"],Pe=t("span",{class:"svg-icon svg-icon-3"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"24",viewBox:"0 0 24 24",fill:"none"},[t("path",{opacity:"0.3",d:"M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z",fill:"black"}),t("path",{d:"M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z",fill:"black"})])],-1),Se=[Pe],je={key:1,class:"d-flex justify-content-start flex-column"},De={key:0,class:"badge badge-light-primary fs-7 fw-bold"},Ne={key:1,class:"badge badge-light-danger fs-7 fw-bold"},Me={key:2,class:"badge badge-light-primary fs-7 fw-bold"},Te={key:3,class:"badge badge-light-warning fs-7 fw-bold"},Be={key:4,class:"badge badge-light-info fs-7 fw-bold"},Ve={key:2,class:"d-flex justify-content-start flex-column"},$e={class:"d-flex justify-content-between"},Ae=t("option",{value:"5"},"5",-1),Ee=t("option",{value:"10"},"10",-1),Ze=t("option",{value:"25"},"25",-1),Re=t("option",{value:"50"},"50",-1),Ue=[Ae,Ee,Ze,Re],Fe={key:1},Ke={__name:"Index",setup(Oe){const{t:n}=J(),$=z(),C=G(),{getProposals:A}=se(),k=i(!1),E=_(()=>C.state.lang.locale),h=_(()=>C.state.proposal.proposals),L=_(()=>C.state.auth.user),b=i([]),j=i([]),p=i(!1),f=i(""),u=i(25);let Z=i();const x=i(localStorage.getItem("currentProposalPage")?localStorage.getItem("currentProposalPage"):1);let D=i([]);K(async()=>{A(),w(x.value),H(L)});const R=()=>{w(1)},y=_(()=>{const e=L.value.role?L.value.role:"";if(e?e.toLowerCase().includes("admin"):""){if(h.value)return h.value.filter(c=>c.status&&c.status.toLowerCase()!=="cancel").filter(c=>Object.values(c).some(s=>String(s).toLowerCase().includes(f.value.toLowerCase())))}else if(h.value)return h.value.filter(c=>Object.values(c).some(s=>String(s).toLowerCase().includes(f.value.toLowerCase())))}),w=e=>{let a=y.value?y.value:[];localStorage.setItem("currentProposalPage",e),e||(e=1),x.value=e,D.value={current_page:e,data:a,from:e,last_page:a.length/u.value+1,next_page_url:e<a.length/u.value?"http://example.com/page/2":null,per_page:1,prev_page_url:e>1?"http://example.com/page/1":null,to:e+1,total:a.length/u.value}};T(()=>w(x.value));const N=()=>{k.value?b.value=[{text:n("id"),value:"delegatedId"},{text:n("productName"),value:"productName"},{text:n("contactInformation"),value:"contactInformation"},{text:n("created_at"),value:"created_at"},{text:n("confirm"),value:"confirm"},{text:n("status"),value:"status"}]:(console.log("locale--",h.value),b.value=[{text:n("id"),value:"delegatedId"},{text:n("productName"),value:"productName"},{text:n("contactInformation"),value:"contactInformation"},{text:n("created_at"),value:"created_at"},{text:n("status"),value:"status"}]),Z.value=n("confirmText")};N(),T(()=>N());let I=1,g="";const M=_(()=>g?y.value.slice().sort((e,a)=>I*(e[g]>a[g]?1:-1)):y.value),U=_(()=>{const e=(x.value-1)*u.value;return(M.value?M.value:[]).slice(e,e+u.value)}),F=e=>{e===g?I*=-1:(g=e,I=1)},O=()=>{$.push({name:"proposals.create"})},v=(e,a)=>{if(a==="delegatedId")return e[a]?e[a].toString().padStart(8,"0"):"";if(a==="status"){if(E.value==="en")return e[a];switch(e[a]){case"notConfirmed":return"未确认";case"confirmed":return"委托确认";case"atWork":return"工作中";case"completed":return"工作完成";case"cancel":return"取消"}}return e[a]},W=e=>{p.value=!0,j.value=e},q=e=>{p.value=e},H=e=>{(e.value.role?e.value.role:"").toLowerCase().includes("admin")?k.value=!0:k.value=!1};return(e,a)=>{const c=Q("Pagination");return o(),l("div",oe,[t("div",le,[t("div",ne,[t("p",re,d(e.$t("what_is_your_item")),1)])]),p.value?m("",!0):(o(),l("div",ce,[t("div",ie,[t("div",de,[t("div",ue,[f.value?m("",!0):(o(),l("i",ve)),B(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>f.value=s),onInput:R,class:"form-control form-control-lg text-right-placeholder",id:"searchTerm",placeholder:e.$t("search")},null,40,_e),[[X,f.value]])])])]),t("div",he,[t("div",pe,[fe,t("div",ge,[t("button",{onClick:O,class:"btn btn-sm btn-light-primary"},[me,Y(" "+d(e.$t("apply")),1)])])]),t("div",be,[t("div",xe,[t("table",ye,[t("thead",null,[t("tr",we,[(o(!0),l(P,null,S(b.value,s=>(o(),l("th",{class:"min-w-125px",key:s,onClick:r=>F(s.value)},d(s.text),9,Ce))),128))])]),t("tbody",null,[(o(!0),l(P,null,S(U.value,s=>(o(),l("tr",{key:s.id},[(o(!0),l(P,null,S(b.value,r=>(o(),l("td",{key:r},[t("div",ke,[r.value==="confirm"?(o(),l("div",Le,[t("button",{onClick:We=>W(s),class:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"},Se,8,Ie)])):m("",!0),r.value==="status"?(o(),l("div",je,[s.status==="confirmed"?(o(),l("span",De,d(v(s,r.value)),1)):s.status==="completed"?(o(),l("span",Ne,d(v(s,r.value)),1)):s.status==="notConfirmed"?(o(),l("span",Me,d(v(s,r.value)),1)):s.status==="atWork"?(o(),l("span",Te,d(v(s,r.value)),1)):s.status==="cancel"?(o(),l("span",Be,d(v(s,r.value)),1)):m("",!0)])):(o(),l("div",Ve,d(v(s,r.value)),1))])]))),128))]))),128))])])])])]),t("div",$e,[B(t("select",{class:"form-select float-left","onUpdate:modelValue":a[1]||(a[1]=s=>u.value=s),style:{width:"80px"}},Ue,512),[[ee,u.value]]),V(c,{data:te(D),class:"mb-1 bg-white border border-secondary rounded p-2 float-right",limit:3,"keep-length":!1,"show-disabled":!1,onPaginationChangePage:w},null,8,["data"])])])),p.value?(o(),l("div",Fe,[V(ae,{edit:p.value,editableData:j.value,onUpdateEdit:q},null,8,["edit","editableData"])])):m("",!0)])}}};export{Ke as default};