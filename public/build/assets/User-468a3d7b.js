import{u as $,c as b,a as M,i as V,j as Z,r as L,o as u,b as m,d as e,e as d,t as c,g as C,w as v,f as y,n as p,h as f,k as H,l as k,m as B,p as S}from"./app-92ca493c.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as A}from"./LocaleSwitcher-e1c23f1b.js";const P={class:"container-fluid d-flex align-items-stretch justify-content-between"},N=e("span",{class:"svg-icon svg-icon-2x mt-1"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z",fill:"black"}),e("path",{opacity:"0.3",d:"M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z",fill:"black"})])],-1),q=[N],I=e("div",{class:"d-flex align-items-center flex-grow-1 flex-lg-grow-0 d-lg-none"},[e("h1",{style:{color:"darkgray"}},"Pakhus")],-1),O={class:"d-flex align-items-stretch justify-content-between flex-lg-grow-1"},U=e("div",{class:"d-flex align-items-center",id:"kt_header_nav"},null,-1),z={class:"d-flex align-items-stretch flex-shrink-0"},D={class:"d-flex align-items-stretch flex-shrink-0"},R={class:"d-flex align-items-center ms-1 ms-lg-3",id:"kt_header_user_menu_toggle"},E={class:"navbar-nav ms-auto mb-2 mb-lg-0"},F={class:"d-flex align-items-center"},T={class:"nav-item dropdown p-3"},G={key:0,class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},J={class:"dropdown-menu dropdown-menu-end border-0 shadow-sm p-4"},K={key:0},Q={key:1},W=e("li",null,[e("div",{class:"separator separator-dashed"})],-1),X=["disabled"],Y={__name:"AdminNavbar",setup(x){const r=$(),_=b(()=>r.state.auth.user),{processing:t,logout:h}=M();V(()=>{});const a=Z("sidebarClass"),o=()=>{a.value="drawer drawer-on"};return(s,n)=>{const i=L("router-link");return u(),m("div",{id:"kt_header",class:"header align-items-stretch bg-white",onClick:n[1]||(n[1]=(...l)=>s.hideSidebar&&s.hideSidebar(...l))},[e("div",P,[e("div",{class:"d-flex align-items-center d-lg-none ms-n3 me-1",title:"Show aside menu"},[e("div",{onClick:o,class:"btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px",id:"kt_aside_mobile_toggle"},q)]),I,e("div",O,[U,e("div",z,[e("div",D,[e("div",R,[e("ul",E,[e("div",F,[d(A,{class:"p-3"}),e("li",T,[_.value.name?(u(),m("a",G,c(_.value.name),1)):C("",!0),e("ul",J,[_.value.name?(u(),m("li",K,[d(i,{to:{name:"profile.index"},class:"dropdown-item"},{default:v(()=>[y(c(s.$t("profile")),1)]),_:1},8,["to"])])):C("",!0),_.value.name?(u(),m("li",Q,[d(i,{to:{name:"auth.reset-password"},class:"dropdown-item"},{default:v(()=>[y(c(s.$t("changePassword")),1)]),_:1},8,["to"])])):C("",!0),W,e("li",null,[e("a",{class:p(["dropdown-item",{"opacity-25":f(t)}]),disabled:f(t),href:"javascript:void(0)",onClick:n[0]||(n[0]=(...l)=>f(h)&&f(h)(...l))},c(s.$t("logout")),11,X)])])])])])])])])])])])}}};const e1=e("div",{class:"aside-logo flex-column-auto",id:"kt_aside_logo"},[e("a",null,[e("h1",{style:{color:"white"}},"Pakhus")]),e("div",{id:"kt_aside_toggle",class:"btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle","data-kt-toggle":"true","data-kt-toggle-state":"active","data-kt-toggle-target":"body","data-kt-toggle-name":"aside-minimize"})],-1),s1={class:"aside-menu flex-column-fluid"},t1={class:"hover-scroll-overlay-y my-5 my-lg-5",id:"kt_aside_menu_wrapper","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-height":"auto","data-kt-scroll-dependencies":"#kt_aside_logo, #kt_aside_footer","data-kt-scroll-wrappers":"#kt_aside_menu","data-kt-scroll-offset":"0"},a1=e("a",{class:"d-md-none p-7 text-center"},[e("h1",{style:{color:"white"}},"Pakhus")],-1),l1=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{opacity:"0.5",d:"M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z",fill:"black"}),e("path",{d:"M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z",fill:"black"})],-1),i1=[l1],o1={class:"menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500",id:"#kt_aside_menu","data-kt-menu":"true"},n1=e("span",{class:"menu-icon"},[e("span",{class:"svg-icon svg-icon-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none"},[e("path",{opacity:"0.3",d:"M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z",fill:"black"}),e("path",{d:"M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z",fill:"black"})])])],-1),d1={class:"menu-title fs-5"},r1=e("span",{class:"menu-icon"},[e("span",{class:"svg-icon svg-icon-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{opacity:"0.3",d:"M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z",fill:"black"}),e("path",{d:"M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z",fill:"black"})])])],-1),c1={class:"menu-title fs-5"},u1=e("span",{class:"menu-icon"},[e("span",{class:"svg-icon svg-icon-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{opacity:"0.3",d:"M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z",fill:"black"}),e("path",{d:"M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z",fill:"black"})])])],-1),m1={class:"menu-title fs-5"},_1=e("span",{class:"menu-icon"},[e("span",{class:"svg-icon svg-icon-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{opacity:"0.3",d:"M20 21H3C2.4 21 2 20.6 2 20V10C2 9.4 2.4 9 3 9H20C20.6 9 21 9.4 21 10V20C21 20.6 20.6 21 20 21Z",fill:"black"}),e("path",{d:"M20 7H3C2.4 7 2 6.6 2 6V3C2 2.4 2.4 2 3 2H20C20.6 2 21 2.4 21 3V6C21 6.6 20.6 7 20 7Z",fill:"black"})])])],-1),h1={class:"menu-title fs-5"},p1=e("span",{class:"menu-icon"},[e("span",{class:"svg-icon svg-icon-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{opacity:"0.3",d:"M20 21H3C2.4 21 2 20.6 2 20V10C2 9.4 2.4 9 3 9H20C20.6 9 21 9.4 21 10V20C21 20.6 20.6 21 20 21Z",fill:"black"}),e("path",{d:"M20 7H3C2.4 7 2 6.6 2 6V3C2 2.4 2.4 2 3 2H20C20.6 2 21 2.4 21 3V6C21 6.6 20.6 7 20 7Z",fill:"black"})])])],-1),v1={class:"menu-title fs-5"},g1={__name:"UserSideBar",setup(x){const r=$(),_=b(()=>r.state.auth.user);M(),H();const t=k(!1);V(async()=>{h(_)});const h=i=>{i.value.email.toLowerCase().includes("admin")?t.value=!0:t.value=!1},a=k(null),o=i=>{a.value=i},s=Z("sidebarClass"),n=()=>{s.value=""};return k(new Array(6).fill(!1)),(i,l)=>{const g=L("router-link");return u(),m("div",{id:"kt_aside",class:p(["aside aside-dark aside-hoverable drawer-start",f(s)]),style:{"min-height":"100vh"},"data-kt-drawer":"true","data-kt-drawer-name":"aside","data-kt-drawer-activate":"{default: true, lg: false}","data-kt-drawer-overlay":"true","data-kt-drawer-width":"{default:'200px', '300px': '250px'}","data-kt-drawer-direction":"start","data-kt-drawer-toggle":"#kt_aside_mobile_toggle"},[e1,e("div",s1,[e("div",t1,[a1,e("span",{onClick:n,class:"svg-icon svg-icon-1 rotate-180 float-end m-3 d-md-none"},i1),e("div",o1,[e("div",{onClick:n,class:"menu-item"},[d(g,{onClick:l[0]||(l[0]=w=>o("proposals")),class:p([{active:a.value==="proposals"},"menu-link"]),to:"/admin/proposals"},{default:v(()=>[n1,e("span",d1,c(i.$t("commissioned_services")),1)]),_:1},8,["class"])]),e("div",{onClick:n,class:"menu-item"},[d(g,{onClick:l[1]||(l[1]=w=>o("sales")),class:p([{active:a.value==="sales"},"menu-link"]),to:"/admin/sales"},{default:v(()=>[r1,e("span",c1,c(i.$t("sales_project_proposal")),1)]),_:1},8,["class"])]),t.value?(u(),m("div",{key:0,onClick:n,class:"menu-item"},[d(g,{onClick:l[2]||(l[2]=w=>o("salesManager")),class:p([{active:a.value==="salesManager"},"menu-link"]),to:"/admin/salesManager"},{default:v(()=>[u1,e("span",m1,c(i.$t("salesList")),1)]),_:1},8,["class"])])):C("",!0),t.value?(u(),m("div",{key:1,onClick:n,class:"menu-item"},[d(g,{to:"/admin/faqs",onClick:l[3]||(l[3]=w=>o("faqs")),class:p([{active:a.value==="faqs"},"menu-link"])},{default:v(()=>[_1,e("span",h1,c(i.$t("faqList")),1)]),_:1},8,["class"])])):C("",!0),t.value?(u(),m("div",{key:2,onClick:n,class:"menu-item"},[d(g,{to:"/admin/users",onClick:l[4]||(l[4]=w=>o("users")),class:p([{active:a.value==="users"},"menu-link"])},{default:v(()=>[p1,e("span",v1,c(i.$t("userList")),1)]),_:1},8,["class"])])):C("",!0)])])])],2)}}};const C1={class:"d-flex align-items-stretch w-100"},f1={class:"container-fluid"},w1={class:"main d-flex justify-content-center mt-5 content flex-fill overflow-auto",style:{height:"90vh"}},k1={__name:"User",setup(x){const r=B(),_=k("");return S("sidebarClass",_),b(()=>{let t=r.path.split("/");t.shift();const h=[{href:"/admin",disabled:!1,text:"Dashboard"}];let a="",o=0;for(let s=0;s<t.length;++s)a=`${a}/${t[s]}`,r.matched[s]&&Object.hasOwnProperty.call(r.matched[s],"meta")&&Object.hasOwnProperty.call(r.matched[s].meta,"breadCrumb")&&(h.push({href:s!==0&&t[s-(s-o)]?"/"+t[s-(s-o)]+a:a,disabled:s+1===t.length,text:r.matched[s].meta.breadCrumb||t[s]}),o=s,a="");return h}),(t,h)=>{const a=L("router-view");return u(),m("div",C1,[d(g1),e("div",f1,[d(Y),e("div",w1,[d(a)])])])}}},y1=j(k1,[["__scopeId","data-v-fcd4d37d"]]);export{y1 as default};
