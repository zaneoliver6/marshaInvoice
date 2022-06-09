import{aN as z,J as P,B as C,a0 as pe,k as D,L as N,M as J,N as _e,T as ae,r as y,o as a,l as k,w as n,h as s,i as U,t as u,u as e,f as t,e as i,m as j,j as S,U as H,G as X,C as oe,aO as se,F as V,y as L,Y as ne,A as he,a5 as ye,a2 as K,a3 as fe,a6 as ge,aP as ve,D as be}from"./vendor.76580662.js";import{b as Y,c as W,d as O,e as Q,S as xe,a as we,f as F,u as $e}from"./main.4d44b2c3.js";import{u as re}from"./exchange-rate.840a22f0.js";import{u as Ce}from"./users.16aba4bc.js";import{_ as ke}from"./MainLogo.40071498.js";import{N as Se}from"./NotificationRoot.1f31edef.js";import{V as Be}from"./index.esm.bc50d87f.js";const Ie={class:"flex justify-between w-full"},Me=["onSubmit"],Ue={class:"p-4 mb-16 sm:p-6 space-y-4"},Ee={key:1,class:"flex flex-col items-center"},Ve={class:"z-0 flex justify-end p-4 bg-gray-50 border-modal-bg"},Ae={setup(R){const m=z(),r=Y(),c=W(),f=O(),{t:_}=P();let g=C(!1),b=C(null),d=C(!1),l=C(null),p=C(null);const h=pe({name:null,currency:"",address:{country_id:null}}),v=D(()=>c.active&&c.componentName==="CompanyModal"),x={newCompanyForm:{name:{required:N.withMessage(_("validation.required"),J),minLength:N.withMessage(_("validation.name_min_length",{count:3}),_e(3))},address:{country_id:{required:N.withMessage(_("validation.required"),J)}},currency:{required:N.withMessage(_("validation.required"),J)}}},o=ae(x,{newCompanyForm:h});async function w(){d.value=!0,await f.fetchCurrencies(),await f.fetchCountries(),h.currency=r.selectedCompanyCurrency.id,h.address.country_id=r.selectedCompany.address.country_id,d.value=!1}function B(I,M){p.value=I,l.value=M}function $(){p.value=null,l.value=null}async function E(){if(o.value.newCompanyForm.$touch(),o.value.$invalid)return!0;g.value=!0;try{const I=await r.addNewCompany(h);if(I.data.data){if(await r.setSelectedCompany(I.data.data),l&&l.value){let M=new FormData;M.append("company_logo",JSON.stringify({name:p.value,data:l.value})),await r.updateCompanyLogo(M),m.push("/admin/dashboard")}await f.setIsAppLoaded(!1),await f.bootstrap(),G()}g.value=!1}catch{g.value=!1}}function T(){h.name="",h.currency="",h.address.country_id="",o.value.$reset()}function G(){c.closeModal(),setTimeout(()=>{T(),o.value.$reset()},300)}return(I,M)=>{const Z=y("BaseIcon"),le=y("BaseContentPlaceholdersBox"),ie=y("BaseContentPlaceholders"),ce=y("BaseFileUploader"),q=y("BaseInputGroup"),de=y("BaseInput"),ee=y("BaseMultiselect"),ue=y("BaseInputGrid"),te=y("BaseButton"),me=y("BaseModal");return a(),k(me,{show:e(v),onClose:G,onOpen:w},{header:n(()=>[s("div",Ie,[U(u(e(c).title)+" ",1),t(Z,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:G})])]),default:n(()=>[s("form",{action:"",onSubmit:H(E,["prevent"])},[s("div",Ue,[t(ue,{layout:"one-column"},{default:n(()=>[t(q,{"content-loading":e(d),label:I.$tc("settings.company_info.company_logo")},{default:n(()=>[e(d)?(a(),k(ie,{key:0},{default:n(()=>[t(le,{rounded:!0,class:"w-full h-24"})]),_:1})):(a(),i("div",Ee,[t(ce,{"preview-image":e(b),base64:"",onRemove:$,onChange:B},null,8,["preview-image"])]))]),_:1},8,["content-loading","label"]),t(q,{label:I.$tc("settings.company_info.company_name"),error:e(o).newCompanyForm.name.$error&&e(o).newCompanyForm.name.$errors[0].$message,"content-loading":e(d),required:""},{default:n(()=>[t(de,{modelValue:e(h).name,"onUpdate:modelValue":M[0]||(M[0]=A=>e(h).name=A),invalid:e(o).newCompanyForm.name.$error,"content-loading":e(d),onInput:M[1]||(M[1]=A=>e(o).newCompanyForm.name.$touch())},null,8,["modelValue","invalid","content-loading"])]),_:1},8,["label","error","content-loading"]),t(q,{"content-loading":e(d),label:I.$tc("settings.company_info.country"),error:e(o).newCompanyForm.address.country_id.$error&&e(o).newCompanyForm.address.country_id.$errors[0].$message,required:""},{default:n(()=>[t(ee,{modelValue:e(h).address.country_id,"onUpdate:modelValue":M[2]||(M[2]=A=>e(h).address.country_id=A),"content-loading":e(d),label:"name",invalid:e(o).newCompanyForm.address.country_id.$error,options:e(f).countries,"value-prop":"id","can-deselect":!0,"can-clear":!1,searchable:"","track-by":"name"},null,8,["modelValue","content-loading","invalid","options"])]),_:1},8,["content-loading","label","error"]),t(q,{label:I.$t("wizard.currency"),error:e(o).newCompanyForm.currency.$error&&e(o).newCompanyForm.currency.$errors[0].$message,"content-loading":e(d),"help-text":I.$t("wizard.currency_set_alert"),required:""},{default:n(()=>[t(ee,{modelValue:e(h).currency,"onUpdate:modelValue":M[3]||(M[3]=A=>e(h).currency=A),"content-loading":e(d),options:e(f).currencies,label:"name","value-prop":"id",searchable:!0,"track-by":"name",placeholder:I.$tc("settings.currencies.select_currency"),invalid:e(o).newCompanyForm.currency.$error,class:"w-full"},null,8,["modelValue","content-loading","options","placeholder","invalid"])]),_:1},8,["label","error","content-loading","help-text"])]),_:1})]),s("div",Ve,[t(te,{class:"mr-3 text-sm",variant:"primary-outline",outline:"",type:"button",onClick:G},{default:n(()=>[U(u(I.$t("general.cancel")),1)]),_:1}),t(te,{loading:e(g),disabled:e(g),variant:"primary",type:"submit"},{left:n(A=>[e(g)?S("",!0):(a(),k(Z,{key:0,name:"SaveIcon",class:j(A.class)},null,8,["class"]))]),default:n(()=>[U(" "+u(I.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,Me)]),_:1},8,["show"])}}},Le={key:0,class:"w-16 text-sm font-medium truncate sm:w-auto"},Re={key:0,class:"absolute right-0 mt-2 bg-white rounded-md shadow-lg"},je={class:"overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full w-[250px] max-h-[350px] scrollbar-thumb-gray-300 scrollbar-track-gray-10 pb-4"},Fe={class:"px-3 py-2 text-xs font-semibold text-gray-400 mb-0.5 block uppercase"},Ne={key:0,class:"flex flex-col items-center justify-center p-2 px-3 mt-4 text-base text-gray-400"},Te={key:1},De={key:0},Oe=["onClick"],Ge={class:"flex items-center"},qe={class:"flex items-center justify-center mr-3 overflow-hidden text-base font-semibold bg-gray-200 rounded-md w-9 h-9 text-primary-500"},ze={key:0},Pe=["src"],Je={class:"flex flex-col"},Xe={class:"text-sm"},Ye={class:"font-medium"},We={setup(R){const m=Y(),r=W(),c=X(),f=z(),_=O(),{t:g}=P(),b=Q(),d=C(!1),l=C(""),p=C(null);oe(c,()=>{d.value=!1,l.value=""}),se(p,()=>{d.value=!1});function h(o){if(o)return o.split(" ")[0].charAt(0).toUpperCase()}function v(){r.openModal({title:g("company_switcher.new_company"),componentName:"CompanyModal",size:"sm"})}async function x(o){await m.setSelectedCompany(o),f.push("/admin/dashboard"),await _.setIsAppLoaded(!1),await _.bootstrap()}return(o,w)=>{const B=y("BaseIcon");return a(),i("div",{ref:($,E)=>{E.companySwitchBar=$,p.value=$},class:"relative rounded"},[t(Ae),s("div",{class:"flex items-center justify-center px-3 h-8 md:h-9 ml-2 text-sm text-white bg-white rounded cursor-pointer bg-opacity-20",onClick:w[0]||(w[0]=$=>d.value=!d.value)},[e(m).selectedCompany?(a(),i("span",Le,u(e(m).selectedCompany.name),1)):S("",!0),t(B,{name:"ChevronDownIcon",class:"h-5 ml-1 text-white"})]),t(ne,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:n(()=>[d.value?(a(),i("div",Re,[s("div",je,[s("label",Fe,u(o.$t("company_switcher.label")),1),e(m).companies.length<1?(a(),i("div",Ne,[t(B,{name:"ExclamationCircleIcon",class:"h-5 text-gray-400"}),U(" "+u(o.$t("company_switcher.no_results_found")),1)])):(a(),i("div",Te,[e(m).companies.length>0?(a(),i("div",De,[(a(!0),i(V,null,L(e(m).companies,($,E)=>(a(),i("div",{key:E,class:j(["p-2 px-3 rounded-md cursor-pointer hover:bg-gray-100 hover:text-primary-500",{"bg-gray-100 text-primary-500":e(m).selectedCompany.id===$.id}]),onClick:T=>x($)},[s("div",Ge,[s("span",qe,[$.logo?(a(),i("img",{key:1,src:$.logo,alt:"Company logo",class:"w-full h-full object-contain"},null,8,Pe)):(a(),i("span",ze,u(h($.name)),1))]),s("div",Je,[s("span",Xe,u($.name),1)])])],10,Oe))),128))])):S("",!0)]))]),e(b).currentUser.is_owner?(a(),i("div",{key:0,class:"flex items-center justify-center p-4 pl-3 border-t-2 border-gray-100 cursor-pointer text-primary-400 hover:text-primary-500",onClick:v},[t(B,{name:"PlusIcon",class:"h-5 mr-2"}),s("span",Ye,u(o.$t("company_switcher.add_new_company")),1)])):S("",!0)])):S("",!0)]),_:1})],512)}}},He={key:0,class:"scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-y-auto bg-white rounded-md mt-2 shadow-lg p-3 absolute w-[300px] h-[200px] right-0"},Ke={key:0,class:"flex items-center justify-center text-gray-400 text-base flex-col mt-4"},Qe={key:1},Ze={key:0},et={class:"text-sm text-gray-400 mb-0.5 block px-2 uppercase"},tt={class:"flex items-center justify-center w-9 h-9 mr-3 text-base font-semibold bg-gray-200 rounded-full text-primary-500"},at={class:"flex flex-col"},ot={class:"text-sm"},st={key:0,class:"text-xs text-gray-400"},nt={key:1,class:"text-xs text-gray-400"},rt={key:1,class:"mt-2"},lt={class:"text-sm text-gray-400 mb-2 block px-2 mb-0.5 uppercase"},it={class:"flex items-center justify-center w-9 h-9 mr-3 text-base font-semibold bg-gray-200 rounded-full text-primary-500"},ct={class:"flex flex-col"},dt={class:"text-sm"},ut={class:"text-xs text-gray-400"},mt={setup(R){const m=Ce(),r=C(!1),c=C(""),f=C(null),_=C(!1),g=X();oe(g,()=>{r.value=!1,c.value=""}),b=he.exports.debounce(b,500),se(f,()=>{r.value=!1,c.value=""});function b(){let l={search:c.value};c.value&&(_.value=!0,m.searchUsers(l).then(()=>{r.value=!0}),_.value=!1),c.value===""&&(r.value=!1)}function d(l){if(l)return l.split(" ")[0].charAt(0).toUpperCase()}return(l,p)=>{const h=y("BaseIcon"),v=y("BaseInput"),x=y("router-link");return a(),i("div",{ref:(o,w)=>{w.searchBar=o,f.value=o},class:"hidden rounded md:block relative"},[s("div",null,[t(v,{modelValue:c.value,"onUpdate:modelValue":p[0]||(p[0]=o=>c.value=o),placeholder:"Search...","container-class":"!rounded",class:"h-8 md:h-9 !rounded",onInput:b},{left:n(()=>[t(h,{name:"SearchIcon",class:"text-gray-400"})]),right:n(()=>[_.value?(a(),k(xe,{key:0,class:"h-5 text-primary-500"})):S("",!0)]),_:1},8,["modelValue"])]),t(ne,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:n(()=>[r.value?(a(),i("div",He,[e(m).userList.length<1&&e(m).customerList.length<1?(a(),i("div",Ke,[t(h,{name:"ExclamationCircleIcon",class:"text-gray-400"}),U(" "+u(l.$t("global_search.no_results_found")),1)])):(a(),i("div",Qe,[e(m).customerList.length>0?(a(),i("div",Ze,[s("label",et,u(l.$t("global_search.customers")),1),(a(!0),i(V,null,L(e(m).customerList,(o,w)=>(a(),i("div",{key:w,class:"p-2 hover:bg-gray-100 cursor-pointer rounded-md"},[t(x,{to:{path:`/admin/customers/${o.id}/view`},class:"flex items-center"},{default:n(()=>[s("span",tt,u(d(o.name)),1),s("div",at,[s("span",ot,u(o.name),1),o.contact_name?(a(),i("span",st,u(o.contact_name),1)):(a(),i("span",nt,u(o.email),1))])]),_:2},1032,["to"])]))),128))])):S("",!0),e(m).userList.length>0?(a(),i("div",rt,[s("label",lt,u(l.$t("global_search.users")),1),(a(!0),i(V,null,L(e(m).userList,(o,w)=>(a(),i("div",{key:w,class:"p-2 hover:bg-gray-100 cursor-pointer rounded-md"},[t(x,{to:{path:`/admin/users/${o.id}/edit`},class:"flex items-center"},{default:n(()=>[s("span",it,u(d(o.name)),1),s("div",ct,[s("span",dt,u(o.name),1),s("span",ut,u(o.email),1)])]),_:2},1032,["to"])]))),128))])):S("",!0)]))])):S("",!0)]),_:1})],512)}}},pt={class:"fixed top-0 left-0 z-20 flex items-center justify-between w-full px-4 py-3 md:h-16 md:px-8 bg-gradient-to-r from-primary-500 to-primary-400"},_t=s("h6",null,"Marsha",-1),ht=["onClick"],yt={class:"flex float-right h-8 m-0 list-none md:h-9"},ft={key:0,class:"relative hidden float-left m-0 md:block"},gt={class:"flex items-center justify-center w-8 h-8 ml-2 text-sm text-black bg-white rounded md:h-9 md:w-9"},vt={class:"ml-2"},bt={class:"relative block float-left ml-2"},xt=["src"],wt={setup(R){const m=we(),r=Q(),c=O(),f=z(),_=D(()=>r.currentUser&&r.currentUser.avatar!==0?r.currentUser.avatar:g());D(()=>c.globalSettings.admin_portal_logo?"/storage/"+c.globalSettings.admin_portal_logo:!1);function g(){return new URL("/build/img/default-avatar.jpg",self.location)}function b(){return r.hasAbilities([F.CREATE_INVOICE,F.CREATE_ESTIMATE,F.CREATE_CUSTOMER])}async function d(){await m.logout(),f.push("/login")}function l(){c.setSidebarVisibility(!0)}return(p,h)=>{const v=y("router-link"),x=y("BaseIcon"),o=y("BaseDropdownItem"),w=y("BaseDropdown");return a(),i("header",pt,[t(v,{to:"/admin/dashboard",class:"float-none text-lg not-italic font-black tracking-wider text-white brand-main md:float-left font-base hidden md:block"},{default:n(()=>[_t]),_:1}),s("div",{class:j([{"is-active":e(c).isSidebarOpen},"flex float-left p-1 overflow-visible text-sm ease-linear bg-white border-0 rounded cursor-pointer md:hidden md:ml-0 hover:bg-gray-100"]),onClick:H(l,["prevent"])},[t(x,{name:"MenuIcon",class:"!w-6 !h-6 text-gray-500"})],10,ht),s("ul",yt,[b?(a(),i("li",ft,[t(w,{"width-class":"w-48"},{activator:n(()=>[s("div",gt,[t(x,{name:"PlusIcon",class:"w-5 h-5 text-gray-600"})])]),default:n(()=>[t(v,{to:"/admin/invoices/create"},{default:n(()=>[e(r).hasAbilities(e(F).CREATE_INVOICE)?(a(),k(o,{key:0},{default:n(()=>[t(x,{name:"DocumentTextIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),U(" "+u(p.$t("invoices.new_invoice")),1)]),_:1})):S("",!0)]),_:1}),t(v,{to:"/admin/estimates/create"},{default:n(()=>[e(r).hasAbilities(e(F).CREATE_ESTIMATE)?(a(),k(o,{key:0},{default:n(()=>[t(x,{name:"DocumentIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),U(" "+u(p.$t("estimates.new_estimate")),1)]),_:1})):S("",!0)]),_:1}),t(v,{to:"/admin/customers/create"},{default:n(()=>[e(r).hasAbilities(e(F).CREATE_CUSTOMER)?(a(),k(o,{key:0},{default:n(()=>[t(x,{name:"UserIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),U(" "+u(p.$t("customers.new_customer")),1)]),_:1})):S("",!0)]),_:1})]),_:1})])):S("",!0),s("li",vt,[e(r).currentUser.is_owner||e(r).hasAbilities(e(F).VIEW_CUSTOMER)?(a(),k(mt,{key:0})):S("",!0)]),s("li",null,[t(We)]),s("li",bt,[t(w,{"width-class":"w-48"},{activator:n(()=>[s("img",{src:e(_),class:"block w-8 h-8 rounded md:h-9 md:w-9"},null,8,xt)]),default:n(()=>[t(v,{to:"/admin/settings/account-settings"},{default:n(()=>[t(o,null,{default:n(()=>[t(x,{name:"CogIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),U(" "+u(p.$t("navigation.settings")),1)]),_:1})]),_:1}),t(o,{onClick:d},{default:n(()=>[t(x,{name:"LogoutIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),U(" "+u(p.$t("navigation.logout")),1)]),_:1})]),_:1})])])])}}},$t={class:"relative flex flex-col flex-1 w-full max-w-xs bg-white"},Ct={class:"absolute top-0 right-0 pt-2 -mr-12"},kt=s("span",{class:"sr-only"},"Close sidebar",-1),St={class:"flex-1 h-0 pt-5 pb-4 overflow-y-auto"},Bt={class:"flex items-center shrink-0 px-4 mb-10"},It=s("div",{class:"shrink-0 w-14"},null,-1),Mt={class:"hidden w-56 h-screen pb-32 overflow-y-auto bg-white border-r border-gray-200 border-solid xl:w-64 md:fixed md:flex md:flex-col md:inset-y-0 pt-16"},Ut={setup(R){const m=X(),r=O();function c(f){return m.path.indexOf(f)>-1}return(f,_)=>{const g=y("BaseIcon"),b=y("router-link");return a(),i(V,null,[t(e(ge),{as:"template",show:e(r).isSidebarOpen},{default:n(()=>[t(e(ye),{as:"div",class:"fixed inset-0 z-40 flex md:hidden",onClose:_[3]||(_[3]=d=>e(r).setSidebarVisibility(!1))},{default:n(()=>[t(e(K),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[t(e(fe),{class:"fixed inset-0 bg-gray-600 bg-opacity-75"})]),_:1}),t(e(K),{as:"template",enter:"transition ease-in-out duration-300","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:n(()=>[s("div",$t,[t(e(K),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[s("div",Ct,[s("button",{class:"flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:_[0]||(_[0]=d=>e(r).setSidebarVisibility(!1))},[kt,t(g,{name:"XIcon",class:"w-6 h-6 text-white","aria-hidden":"true"})])])]),_:1}),s("div",St,[s("div",Bt,[t(ke,{class:"block h-auto max-w-full w-36 text-primary-400",alt:"Crater Logo"})]),(a(!0),i(V,null,L(e(r).menuGroups,d=>(a(),i("nav",{key:d,class:"mt-5 space-y-1"},[(a(!0),i(V,null,L(d,l=>(a(),k(b,{key:l.name,to:l.link,class:j([c(l.link)?"text-primary-500 border-primary-500 bg-gray-100 ":"text-black","cursor-pointer px-0 pl-4 py-3 border-transparent flex items-center border-l-4 border-solid text-sm not-italic font-medium"]),onClick:_[2]||(_[2]=p=>e(r).setSidebarVisibility(!1))},{default:n(()=>[t(g,{name:l.icon,class:j([c(l.link)?"text-primary-500 ":"text-gray-400","mr-4 shrink-0 h-5 w-5"]),onClick:_[1]||(_[1]=p=>e(r).setSidebarVisibility(!1))},null,8,["name","class"]),U(" "+u(f.$t(l.title)),1)]),_:2},1032,["to","class"]))),128))]))),128))])])]),_:1}),It]),_:1})]),_:1},8,["show"]),s("div",Mt,[(a(!0),i(V,null,L(e(r).menuGroups,d=>(a(),i("div",{key:d,class:"p-0 m-0 mt-6 list-none"},[(a(!0),i(V,null,L(d,l=>(a(),k(b,{key:l,to:l.link,class:j([c(l.link)?"text-primary-500 border-primary-500 bg-gray-100 ":"text-black","cursor-pointer px-0 pl-6 hover:bg-gray-50 py-3 group flex items-center border-l-4 border-solid border-transparent text-sm not-italic font-medium"])},{default:n(()=>[t(g,{name:l.icon,class:j([c(l.link)?"text-primary-500 group-hover:text-primary-500 ":"text-gray-400 group-hover:text-black","mr-4 shrink-0 h-5 w-5 "])},null,8,["name","class"]),U(" "+u(f.$t(l.title)),1)]),_:2},1032,["to","class"]))),128))]))),128))])],64)}}},Et={class:"font-medium text-lg text-left"},Vt={class:"mt-2 text-sm leading-snug text-gray-500",style:{"max-width":"680px"}},At=["onSubmit"],Lt={class:"text-gray-500 sm:text-sm"},Rt={class:"text-gray-400 text-xs mt-2 font-light"},jt={slot:"footer",class:"z-0 flex justify-end mt-4 pt-4 border-t border-gray-200 border-solid border-modal-bg"},Ft={emits:["update"],setup(R,{emit:m}){const r=re();$e();const c=Y(),{t:f,tm:_}=P();let g=C(!1);C(!1);const b={exchange_rate:{required:N.withMessage(f("validation.required"),J),decimal:N.withMessage(f("validation.valid_exchange_rate"),ve)}},d=ae();async function l(){if(d.value.$touch(),d.value.$invalid)return!0;g.value=!0;let p=r.bulkCurrencies.map(v=>({id:v.id,exchange_rate:v.exchange_rate})),h=await r.updateBulkExchangeRate({currencies:p});h.data.success&&m("update",h.data.success),g.value=!1}return(p,h)=>{const v=y("BaseInput"),x=y("BaseInputGroup"),o=y("BaseButton"),w=y("BaseCard");return a(),k(w,null,{default:n(()=>[s("h6",Et,u(p.$t("settings.exchange_rate.title")),1),s("p",Vt,u(p.$t("settings.exchange_rate.description",{currency:e(c).selectedCompanyCurrency.name})),1),s("form",{action:"",onSubmit:H(l,["prevent"])},[(a(!0),i(V,null,L(e(r).bulkCurrencies,(B,$)=>(a(),k(e(Be),{key:$,state:B,rules:b},{default:n(({v:E})=>[t(x,{class:"my-5",label:`${B.code} to ${e(c).selectedCompanyCurrency.code}`,error:E.exchange_rate.$error&&E.exchange_rate.$errors[0].$message,required:""},{default:n(()=>[t(v,{modelValue:B.exchange_rate,"onUpdate:modelValue":T=>B.exchange_rate=T,addon:`1 ${B.code} =`,invalid:E.exchange_rate.$error,onInput:T=>E.exchange_rate.$touch()},{right:n(()=>[s("span",Lt,u(e(c).selectedCompanyCurrency.code),1)]),_:2},1032,["modelValue","onUpdate:modelValue","addon","invalid","onInput"]),s("span",Rt,u(p.$t("settings.exchange_rate.exchange_help_text",{currency:B.code,baseCurrency:e(c).selectedCompanyCurrency.code})),1)]),_:2},1032,["label","error"])]),_:2},1032,["state"]))),128)),s("div",jt,[t(o,{loading:e(g),variant:"primary",type:"submit"},{default:n(()=>[U(u(p.$t("general.save")),1)]),_:1},8,["loading"])])],40,At)]),_:1})}}},Nt={setup(R){const m=W(),r=D(()=>m.active&&m.componentName==="ExchangeRateBulkUpdateModal");function c(){m.closeModal()}return(f,_)=>{const g=y("BaseModal");return a(),k(g,{show:e(r)},{default:n(()=>[t(Ft,{onUpdate:_[0]||(_[0]=b=>c())})]),_:1},8,["show"])}}},Tt={key:0,class:"h-full"},Dt={class:"h-screen h-screen-ios overflow-y-auto md:pl-56 xl:pl-64 min-h-0"},Ot={class:"pt-16 pb-16"},Wt={setup(R){const m=O(),r=X(),c=Q(),f=z(),_=W();P();const g=re(),b=Y(),d=D(()=>m.isAppLoaded);return be(()=>{m.bootstrap().then(l=>{r.meta.ability&&!c.hasAbilities(r.meta.ability)?f.push({name:"account.settings"}):r.meta.isOwner&&!c.currentUser.is_owner&&f.push({name:"account.settings"}),l.data.current_company_settings.bulk_exchange_rate_configured==="NO"&&g.fetchBulkCurrencies().then(p=>{if(p.data.currencies.length)_.openModal({componentName:"ExchangeRateBulkUpdateModal",size:"sm"});else{let h={settings:{bulk_exchange_rate_configured:"YES"}};b.updateCompanySettings({data:h})}})})}),(l,p)=>{const h=y("router-view"),v=y("BaseGlobalLoader");return e(d)?(a(),i("div",Tt,[t(Se),t(wt),t(Ut),t(Nt),s("main",Dt,[s("div",Ot,[t(h)])])])):(a(),k(v,{key:1}))}}};export{Wt as default};
