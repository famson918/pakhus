import{s as r,x as y,u as b,z as w,c as x,g as k,J as $,o as m,b as p,d as t,t as e,A as i,B as n,m as c,n as P,e as O,v as V}from"./app-ed41658f.js";const j="/build/assets/barcode-99623728.png";const I={class:"container card p-7",style:{"max-height":"100vh","overflow-y":"auto"}},M={key:0,class:"row"},N={class:"col-md-6"},T={class:"scrollable-content"},U={class:"container"},B={class:"row"},D={class:"col-md-6 p-2"},z=["src"],C={class:"col-md-6"},S={class:"row"},R={class:"col-6 p-2"},A=["src"],G={class:"col-6 p-2"},J=["src"],L={class:"col-6 p-2"},Q=["src"],E={class:"col-6 p-2"},q=["src"],F={class:"col-6 p-2"},H=["src"],K={class:"col-6 p-2"},W=["src"],X=["value"],Y={class:"col-md-6"},Z={class:"fixed-content p-5",style:{position:"sticky",top:"0"}},tt={class:"mt-5"},lt=t("h3",{class:"mt-5"},[t("i",{class:"fa-solid fa-play"}),c("生产所需时间")],-1),et={class:"table"},st={scope:"col",style:{"background-color":"lightblue"}},ot={scope:"col",style:{"background-color":"lightblue"}},at={scope:"col",style:{"background-color":"lightblue"}},it={scope:"col",style:{"background-color":"lightblue"}},nt={scope:"col",style:{"background-color":"lightblue"}},dt={scope:"row"},ct={class:"mt-5"},ut=t("i",{class:"fa-solid fa-play"},null,-1),rt={class:"table"},mt={scope:"col",style:{"background-color":"lightblue"}},pt={scope:"col",style:{"background-color":"lightblue"}},vt={scope:"col",style:{"background-color":"lightblue"}},_t={scope:"col",style:{"background-color":"lightblue"}},ht={scope:"row"},gt=t("h3",{class:"mt-5"},[t("i",{class:"fa-solid fa-play"}),c("订购样品")],-1),ft={class:"modal-content"},yt={class:"modal-header",style:{"background-color":"lightblue"}},bt={class:"modal-title",id:"exampleModalLabel"},wt={class:"modal-body"},xt={class:"row"},kt={class:"d-flex justify-content-center fs-6"},$t=V('<div class="row"><div class="d-flex col-6 border-end justify-content-center"><div class="row"><div class="col-12 d-flex justify-content-center"><i class="fa-regular fa-envelope" style="font-size:100px;padding-top:100px;"></i></div><div class="col-12 d-flex justify-content-center"><p class="fs-1">Pakhus@163.com</p></div></div></div><div class="d-flex col-6 border-end justify-content-center"><div class="row"><div class="col-12 d-flex justify-content-center"><i class="fa-regular fa-comment" style="font-size:100px;padding-top:100px;"></i></div><div class="col-12 d-flex justify-content-center"><p class="fs-1">http://pf.com/_GIsJG/chat</p></div><div class="col-12 d-flex justify-content-center"><img src="'+j+'"></div></div></div></div>',1),Vt={__name:"details",setup(Pt){const l=r(),u=y(),v=b(),_=w(),h=x(()=>v.state.auth.authenticated),d=r(!1);function g(){h.value?d.value=!0:_.push({name:"auth.login"})}function f(){d.value=!1}return k(async()=>{console.log("route",u),await $.get("/api/get-good/"+u.params.id).then(({data:s})=>{console.log("data",s),l.value=s})}),(s,o)=>(m(),p("div",I,[l.value?(m(),p("div",M,[t("div",N,[t("div",T,[t("h1",null,e(l.value.productName),1),t("div",U,[t("div",B,[t("div",D,[t("img",{src:l.value.media[0]?l.value.media[0].original_url:"",class:"img-fluid",alt:"Large Image"},null,8,z)]),t("div",C,[t("div",S,[t("div",R,[t("img",{src:l.value.media[0]?l.value.media[0].original_url:"",class:"img-fluid",alt:"Image 1"},null,8,A)]),t("div",G,[t("img",{src:l.value.media[1]?l.value.media[1].original_url:"",class:"img-fluid",alt:"Image 2"},null,8,J)]),t("div",L,[t("img",{src:l.value.media[2]?l.value.media[2].original_url:"",class:"img-fluid",alt:"Image 3"},null,8,Q)]),t("div",E,[t("img",{src:l.value.media[3]?l.value.media[3].original_url:"",class:"img-fluid",alt:"Image 4"},null,8,q)]),t("div",F,[t("img",{src:l.value.media[4]?l.value.media[4].original_url:"",class:"img-fluid",alt:"Image 5"},null,8,H)]),t("div",K,[t("img",{src:l.value.media[5]?l.value.media[5].original_url:"",class:"img-fluid",alt:"Image 6"},null,8,W)])])])])]),t("textarea",{value:l.value.productDescription,class:"form-control p-2",id:"exampleTextarea",rows:"20"},null,8,X)])]),t("div",Y,[t("div",Z,[t("h1",null,e(l.value.startPrice)+"RMB ~ "+e(l.value.endPrice)+"RMB",1),t("h3",tt,e(s.$t("minimumOrderQuantity"))+": "+e(l.value.minimumOrderQuantity),1),lt,t("table",et,[t("thead",null,[t("tr",null,[t("th",st,e(s.$t("amountperset")),1),t("th",ot,e(l.value.time11),1),t("th",at,e(l.value.time12),1),t("th",it,e(l.value.time13),1),t("th",nt,">"+e(l.value.time14),1)])]),t("tbody",null,[t("tr",null,[t("th",dt,e(s.$t("predicttime")),1),t("td",null,[i(t("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>l.value.time1=a),type:"text",class:"form-control",id:"inputPassword",readonly:""},null,512),[[n,l.value.time1]])]),t("td",null,[i(t("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>l.value.time2=a),type:"text",class:"form-control",id:"inputPassword",readonly:""},null,512),[[n,l.value.time2]])]),t("td",null,[i(t("input",{"onUpdate:modelValue":o[2]||(o[2]=a=>l.value.time3=a),type:"text",class:"form-control",id:"inputPassword",readonly:""},null,512),[[n,l.value.time3]])]),t("td",null,[i(t("input",{"onUpdate:modelValue":o[3]||(o[3]=a=>l.value.time4=a),type:"text",class:"form-control",id:"inputPassword",readonly:""},null,512),[[n,l.value.time4]])])])])]),t("h3",ct,[ut,c(e(s.$t("customization")),1)]),t("table",rt,[t("thead",null,[t("tr",null,[t("th",mt,e(s.$t("amountperset")),1),t("th",pt,e(l.value.option11),1),t("th",vt,">"+e(l.value.option12),1),t("th",_t,">"+e(l.value.option13),1)])]),t("tbody",null,[t("tr",null,[t("th",ht,e(s.$t("optional")),1),t("td",null,[i(t("input",{"onUpdate:modelValue":o[4]||(o[4]=a=>l.value.option1=a),type:"text",class:"form-control",id:"inputPassword",readonly:""},null,512),[[n,l.value.option1]])]),t("td",null,[i(t("input",{"onUpdate:modelValue":o[5]||(o[5]=a=>l.value.option2=a),type:"text",class:"form-control",id:"inputPassword",readonly:""},null,512),[[n,l.value.option2]])]),t("td",null,[i(t("input",{"onUpdate:modelValue":o[6]||(o[6]=a=>l.value.option3=a),type:"text",class:"form-control",id:"inputPassword",readonly:""},null,512),[[n,l.value.option3]])])])])]),gt,t("p",null,e(s.$t("maximumNumberOfSampleOrders"))+": "+e(l.value.maximumNumberOfSampleOrders),1),t("p",null,e(s.$t("sampleOrderPrice"))+": "+e(l.value.sampleOrderPrice)+"元/套餐",1),t("p",null,e(s.$t("sampleOrderDeliveryTime"))+": "+e(l.value.sampleOrderDeliveryTime)+e(s.$t("withinADay")),1),t("button",{onClick:g,type:"button",class:"btn btn-primary",style:{float:"right"}},e(s.$t("consult")),1),t("div",{class:P({modal:!0,show:d.value})},[t("div",ft,[t("div",yt,[t("h5",bt,e(s.$t("contactTitle")),1),t("button",{onClick:f,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),t("div",wt,[t("div",xt,[t("p",kt,e(s.$t("contactText")),1)]),$t])])],2)])])])):O("",!0)]))}};export{Vt as default};
