(self.webpackChunkig_followers_check=self.webpackChunkig_followers_check||[]).push([[792],{9594:(e,l,s)=>{"use strict";s(4027),s(7412);var t=s(5043),n=s(4391),a=s(9367),o=s(4978),i=s(6242);const r=JSON.parse('{"Hg":{"Ay":"en-GB","xU":"default","TQ":["en-GB"],"ns":{"_":[],"%ISO%":["default"]}},"p":{"Pe":"relationships_","gB":14},"D7":50,"X$":7}'),c=e=>{let{iso:l,file:t}=e,n={};try{n=s(2705)(`./${l||"_"}/${t}.json`)}catch(a){console.error(a)}return n},d=()=>{let e={};return r.Hg.TQ.forEach((l=>{e[l]={},Object.keys(r.Hg.ns).forEach((s=>{r.Hg.ns[s].forEach((t=>{e[l][t]=c({iso:"%ISO%"===s?l:null,file:t})}))}))})),e},u=(o.Ay.use(i.r9).init({ns:Object.values(r.Hg.ns).flat(),defaultNS:r.Hg.xU,resources:d(),fallbackLng:r.Hg.Ay,supportedLngs:r.Hg.TQ,returnEmptyString:!0,debug:!1,interpolation:{escapeValue:!1},parseMissingKeyHandler:(e,l)=>l}),"1.1.8");var m=s(6159),f=s.n(m),h=s(8133),x=s(579);const g=e=>{let{children:l}=e;const s="userData",[n,a]=(0,t.useState)({}),[o,i]=(0,t.useState)(""),[c,d]=(0,t.useState)([]),[u,m]=(0,t.useState)([]),[g,j]=(0,t.useState)([]),[v,N]=(0,t.useState)([]),[p,w]=(0,t.useState)({followers:0,following:0,not_followers:0,filtered:0,_:0}),[b,y]=(0,t.useState)(0),[S,k]=(0,t.useState)(""),[E,O]=(0,t.useState)(""),C=(0,t.useCallback)((e=>{a(e),d(Object.keys(e)),sessionStorage.setItem(s,(0,h.K)(e))}),[]),A=(0,t.useCallback)((e=>{i(e),sessionStorage.setItem(`${s}Name`,e)}),[]),D=(0,t.useCallback)((e=>{y(e),window.scrollTo({top:0,behavior:"smooth"})}),[]),I=(0,t.useCallback)((e=>{k(e),y(0)}),[]),T=(0,t.useCallback)((e=>{O(e),y(0)}),[]),L=(0,t.useCallback)((e=>{try{let l={};f().loadAsync(e).then((s=>{const t=Object.keys(s.files).filter((e=>e.startsWith("connections/followers_and_following/")&&e.endsWith(".json"))).length;let n=0;s.forEach(((s,a)=>{a.name.startsWith("connections/followers_and_following/")&&a.name.endsWith(".json")&&a.async("text").then((e=>{const s=JSON.parse(e);Array.isArray(s)?(l.hasOwnProperty("_")||(l._=[]),l._=[...l._,...s]):Object.keys(s).forEach((e=>{const t=e.replace(r.p.Pe,"");l.hasOwnProperty(t)||(l[t]=[]),l[t]=[...l[t],...s[e]]}))})).catch((e=>{throw Object.assign(new Error(e),{code:406})})).finally((()=>{n>=t-1&&(C(l),A(e.name)),n++}))}))})).catch((e=>{throw Object.assign(new Error(e),{code:406})}))}catch(l){console.error(l)}}),[C,A]);return(0,t.useEffect)((()=>{let e=[],l={};c.forEach((e=>{l={...l,[e]:{_:!1,timestamp:0}}})),Object.keys(n).forEach((s=>{n[s].forEach((t=>{t.string_list_data.forEach((t=>{let n=e.findIndex((e=>e.href===t.href));var a;-1===n&&(e.push({...t,value:null!==(a=t.value)&&void 0!==a?a:t.href.split("/").pop(),clicked:!1,info:l}),n=e.findIndex((e=>e.href===t.href)));e[n].info={...e[n].info,[s]:{_:!0,timestamp:t.timestamp}}}))}))})),e.sort(((e,l)=>{var s,t;return(null===(s=e.info.following)||void 0===s?void 0:s.timestamp)-(null===(t=l.info.following)||void 0===t?void 0:t.timestamp)||e.value.localeCompare(l.value)})),j(e)}),[n,c]),(0,t.useEffect)((()=>{const e=g.filter((e=>{var l;return!0===(null===(l=e.info._)||void 0===l?void 0:l._)})).length,l=g.filter((e=>{var l;return!0===(null===(l=e.info.following)||void 0===l?void 0:l._)})).length,s=g.filter((e=>{var l,s,t,n,a,o;return!0!==(null===(l=e.info._)||void 0===l?void 0:l._)&&!0!==(null===(s=e.info.blocked_users)||void 0===s?void 0:s._)&&!0!==(null===(t=e.info.following_hashtags)||void 0===t?void 0:t._)&&!0!==(null===(n=e.info.follow_requests_sent)||void 0===n?void 0:n._)&&!0!==(null===(a=e.info.unfollowed_users)||void 0===a?void 0:a._)&&!0!==(null===(o=e.info.dismissed_suggested_users)||void 0===o?void 0:o._)})).length,t=g.length;let n=g;S&&(n=n.filter((e=>{var l,s,t,n,a,o,i,r;switch(S){case"followers":return!0===(null===(l=e.info._)||void 0===l?void 0:l._);case"following":return!0===(null===(s=e.info.following)||void 0===s?void 0:s._);case"not_followers":return!0!==(null===(t=e.info._)||void 0===t?void 0:t._)&&!0!==(null===(n=e.info.blocked_users)||void 0===n?void 0:n._)&&!0!==(null===(a=e.info.following_hashtags)||void 0===a?void 0:a._)&&!0!==(null===(o=e.info.follow_requests_sent)||void 0===o?void 0:o._)&&!0!==(null===(i=e.info.unfollowed_users)||void 0===i?void 0:i._)&&!0!==(null===(r=e.info.dismissed_suggested_users)||void 0===r?void 0:r._);default:return!0}}))),E&&(n=n.filter((e=>e.value.includes(E)))),w({followers:e,following:l,not_followers:s,filtered:n.length,_:t}),n=n.slice(r.D7*b,r.D7*b+r.D7),N(n)}),[g,b,S,E]),(0,t.useEffect)((()=>{const e=sessionStorage.getItem(s),l=sessionStorage.getItem(`${s}Name`);let t=sessionStorage.getItem(`${s}Clicked`);e&&C((0,h.U)(e)),l&&A(l),t&&(t=(0,h.U)(t),Array.isArray(t)&&m(t))}),[C,A]),(0,x.jsx)(_.Provider,{value:{zipToUserData:L,userData:n,userDataName:o,userDataClicked:u,accounts:g,accountsFiltered:v,totals:p,page:b,filter:S,search:E,clicked:e=>{e?m((l=>(l=[...l,e],sessionStorage.setItem(`${s}Clicked`,(0,h.K)(l)),l))):(m([]),sessionStorage.setItem(`${s}Clicked`,(0,h.K)([])))},setUserData:C,setPage:D,setFilter:I,setSearch:T},children:l})},_=(0,t.createContext)({zipToUserData:e=>{},userData:{},userDataName:"",userDataClicked:[],accounts:[],accountsFiltered:[],totals:{followers:0,following:0,not_followers:0,filtered:0,_:0},page:0,filter:"",search:"",clicked:e=>{},setUserData:e=>{},setPage:e=>{},setFilter:e=>{},setSearch:e=>{}}),j=()=>(0,t.useContext)(_);var v=s(6713);const N=e=>{let{type:l="",label:s,color:t,total:n,active:a,onClick:o}=e;return(0,x.jsxs)("button",{className:`btn btn${a?"":"-outline"}-${t} text-start`,disabled:a,onClick:()=>{o(l)},children:[(0,x.jsx)("strong",{children:s}),(0,x.jsx)("br",{}),n]})};var p=s(2073);const w=e=>{let{label:l,onChange:s}=e;const[n,a]=(0,t.useState)("");return(0,t.useEffect)((()=>{a((0,p.A)())}),[]),(0,x.jsxs)("div",{className:"form-floating",children:[(0,x.jsx)("input",{className:"form-control",id:n,placeholder:l,onChange:e=>{s(e.target.value)}}),(0,x.jsx)("label",{htmlFor:n,children:l})]})},b=()=>{const{i18n:e}=(0,i.Bd)(),{totals:l,setFilter:s,setSearch:t,filter:n}=j(),a=e=>{switch(e){case"followers":return"success";case"following":return"warning";case"not_followers":return"danger";default:return"secondary"}};return(0,x.jsx)("header",{className:"my-4",children:(0,x.jsxs)("div",{className:"row d-flex align-items-center",children:[(0,x.jsx)("div",{className:"col-12"+(l._>0?" col-lg-5 col-xxl-7 pe-xl-5":""),children:(0,x.jsxs)("div",{className:"row d-flex align-items-center mb-3 mb-lg-0 text-primary",children:[(0,x.jsx)("div",{className:"col-auto",children:(0,x.jsxs)("span",{className:"d-block position-relative",children:[(0,x.jsx)(v.A,{className:"display-1"}),(0,x.jsxs)("span",{className:"position-absolute top-50 start-50 translate-middle badge rounded-pill bg-danger",children:["v",u]})]})}),(0,x.jsx)("div",{className:"col",children:(0,x.jsx)("h1",{className:"fw-bold lh-1 my-0",children:e.t("TITLE")})})]})}),(0,x.jsx)("div",{className:"col-12 col-lg",children:l._>0?(0,x.jsxs)("div",{className:"row g-1",children:[["followers","following","not_followers",""].map(((t,o)=>(0,x.jsx)("div",{className:"col-6 col-sm-3",children:(0,x.jsx)("div",{className:"d-grid h-100",children:(0,x.jsx)(N,{type:t,label:e.t(t?t.toUpperCase():"ALL"),color:a(t),total:t?l[t]:l._,active:n===t,onClick:e=>{s(e)}})})},o))),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)(w,{label:e.t("SEARCH"),onChange:e=>{t(e)}})})]}):null})]})})};var y=s(3908),S=s(9881),k=s(9328),E=s(1481),O=s(9709),C=s(3918),A=s(8415),D=s(6682),I=s(5683),T=s(8166),L=s(2970);const F=e=>new Date(1e3*e),R=e=>{var l,s,n,a,o,c,d,u,m,f,h,g,_,v,N,p,w,b,R,G,H,U,W,$,P,B,M;let{k:K,account:q}=e;const{i18n:X}=(0,i.Bd)(),{page:z,clicked:J,userDataClicked:Q}=j(),[Y,V]=(0,t.useState)(0);return(0,t.useEffect)((()=>{var e,l,s;const t=new Headers;if(t.append("Cookie","csrftoken=pQnSOW3XWdrFhirVd0iRGm"),fetch(q.href,{method:"GET",headers:t,redirect:"follow"}).then((e=>e.text())).then((e=>console.log(e))).catch((e=>console.error(e))),(null===(e=q.info._)||void 0===e||!e._)&&null!==(l=q.info.following)&&void 0!==l&&l._&&null!==(s=q.info.following)&&void 0!==s&&s.timestamp){var n;const e=new Date;V(Math.round((e.getTime()-F(null===(n=q.info.following)||void 0===n?void 0:n.timestamp).getTime())/864e5))}return()=>V(0)}),[q]),q?(0,x.jsxs)("tr",{className:null!==(l=q.info.blocked_users)&&void 0!==l&&l._?"table-danger":null===(s=q.info.dismissed_suggested_users)||void 0===s||!s._||null!==(n=q.info._)&&void 0!==n&&n._?null!==(a=q.info._)&&void 0!==a&&a._?"":"table-warning":"table-secondary",children:[(0,x.jsx)("th",{scope:"row",className:"text-end pe-2 small",children:K+1+r.D7*z}),(0,x.jsxs)("td",{children:[(0,x.jsxs)("a",{href:q.href,target:"_blank",rel:"noreferrer",className:`fw-bold${null===(o=q.info.dismissed_suggested_users)||void 0===o||!o._||null!==(c=q.info._)&&void 0!==c&&c._?null!==(d=q.info._)&&void 0!==d&&d._?"":" text-danger":" text-secondary"}${Q.includes(q.value)?" px-1 border border-2 border-info":""}`,onClick:e=>{J(q.value)},children:[Q.includes(q.value)?(0,x.jsx)(y.A,{className:"me-1 text-info"}):null,Y>=r.p.gB?(0,x.jsx)(S.A,{className:"me-1 text-danger"}):null,q.value]}),Y>=r.p.gB?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("br",{}),(0,x.jsx)("small",{className:"text-muted",children:X.t("OLDER_THAN",{days:Y})})]}):null]}),(0,x.jsx)("td",{className:"text-nowrap",children:null!==(u=q.info.blocked_users)&&void 0!==u&&u._||null!==(m=q.info.close_friends)&&void 0!==m&&m._||null!==(f=q.info.following_hashtags)&&void 0!==f&&f._||null!==(h=q.info.follow_requests_sent)&&void 0!==h&&h._||null!==(g=q.info.permanent_follow_requests)&&void 0!==g&&g._||null!==(_=q.info.unfollowed_users)&&void 0!==_&&_._||null!==(v=q.info.dismissed_suggested_users)&&void 0!==v&&v._?(0,x.jsxs)("ul",{className:"list-inline text-end my-0",children:[null!==(N=q.info.blocked_users)&&void 0!==N&&N._?(0,x.jsx)("li",{className:"list-inline-item",children:(0,x.jsxs)("span",{className:"badge text-bg-danger",children:[(0,x.jsx)(k.A,{className:"me-1"}),X.t("BLOCKED")]})}):null,null!==(p=q.info.close_friends)&&void 0!==p&&p._?(0,x.jsx)("li",{className:"list-inline-item",children:(0,x.jsxs)("span",{className:"badge text-bg-primary",children:[(0,x.jsx)(E.A,{className:"me-1"}),X.t("CLOSE_FRIEND")]})}):null,null!==(w=q.info.following_hashtags)&&void 0!==w&&w._?(0,x.jsx)("li",{className:"list-inline-item",children:(0,x.jsxs)("span",{className:"badge text-bg-warning",children:[(0,x.jsx)(O.A,{className:"me-1"}),X.t("HASHTAG")]})}):null,null!==(b=q.info.follow_requests_sent)&&void 0!==b&&b._?(0,x.jsx)("li",{className:"list-inline-item",children:(0,x.jsxs)("span",{className:"badge text-bg-warning",children:[(0,x.jsx)(C.A,{className:"me-1"}),X.t("PENDING")]})}):null,null!==(R=q.info.permanent_follow_requests)&&void 0!==R&&R._?(0,x.jsx)("li",{className:"list-inline-item",children:(0,x.jsxs)("span",{className:"badge text-bg-info",children:[(0,x.jsx)(A.A,{className:"me-1"}),X.t("RECENT")]})}):null,null!==(G=q.info.unfollowed_users)&&void 0!==G&&G._?(0,x.jsx)("li",{className:"list-inline-item",children:(0,x.jsxs)("span",{className:"badge text-bg-secondary",children:[(0,x.jsx)(D.A,{className:"me-1"}),X.t("RECENTLY_UNFOLLOWED")]})}):null,null!==(H=q.info.dismissed_suggested_users)&&void 0!==H&&H._?(0,x.jsx)("li",{className:"list-inline-item",children:(0,x.jsxs)("span",{className:"badge text-bg-secondary",children:[(0,x.jsx)(I.A,{className:"me-1"}),X.t("DISMISSED_SUGGESTION")]})}):null]}):null}),(0,x.jsxs)("td",{className:"text-nowrap",children:[null!==(U=q.info._)&&void 0!==U&&U._?(0,x.jsx)(T.A,{className:"text-success"}):(0,x.jsx)(L.A,{className:"text-danger"}),null!==(W=q.info._)&&void 0!==W&&W.timestamp?(0,x.jsx)("span",{className:"small ms-1 text-muted",children:F(null===($=q.info._)||void 0===$?void 0:$.timestamp).toISOString().split("T")[0]}):null]}),(0,x.jsxs)("td",{className:"text-nowrap",children:[null!==(P=q.info.following)&&void 0!==P&&P._?(0,x.jsx)(T.A,{className:"text-success"}):(0,x.jsx)(L.A,{className:"text-danger"}),null!==(B=q.info.following)&&void 0!==B&&B.timestamp?(0,x.jsx)("span",{className:"small ms-1 text-muted",children:F(null===(M=q.info.following)||void 0===M?void 0:M.timestamp).toISOString().split("T")[0]}):null]})]}):null},G=()=>{const{i18n:e}=(0,i.Bd)(),{accountsFiltered:l}=j();return(0,x.jsxs)("section",{className:"my-4",children:[(0,x.jsx)(a.mg,{children:(0,x.jsx)("title",{children:e.t("ACCOUNTS")})}),l.length>0?(0,x.jsx)("div",{className:"table-responsive",children:(0,x.jsxs)("table",{className:"table table-sm table-hover",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"col",className:"text-end pe-2",style:{width:"1px"},children:"#"}),(0,x.jsx)("th",{scope:"col",children:e.t("ID")}),(0,x.jsx)("th",{scope:"col",style:{width:"1px"}}),(0,x.jsx)("th",{scope:"col",style:{width:"1px"},children:e.t("FOLLOWERS")}),(0,x.jsx)("th",{scope:"col",style:{width:"1px"},children:e.t("FOLLOWING")})]})}),(0,x.jsx)("tbody",{children:l.map(((e,l)=>(0,x.jsx)(R,{k:l,account:e},l)))})]})}):(0,x.jsx)("p",{className:"fw-bold text-danger",children:e.t("NO_RESULTS")})]})};var H=s(3414),U=s(8294),W=s(8737),$=s(1201);const P=()=>{const{totals:e,page:l,setPage:s}=j(),[n,a]=(0,t.useState)(0),[o,i]=(0,t.useState)([]);return(0,t.useEffect)((()=>{let s=[];const t=Math.ceil(e.filtered/r.D7),n=l>Math.round(r.X$/2)-1?l-Math.round(r.X$/2)+1:0,o=l<=t-Math.round(r.X$/2)&&t>=r.X$?n+r.X$:t;if(o>n)for(let e=n;e<o;e++)s.push(e);a(t),i(s)}),[e.filtered,l]),o.length>1?(0,x.jsx)("nav",{children:(0,x.jsxs)("ul",{className:"pagination pagination-sm font-monospace my-0",children:[(0,x.jsx)("li",{className:"page-item"+(0===l?" disabled":""),children:(0,x.jsx)("button",{className:"page-link",onClick:()=>s(0),children:(0,x.jsx)(H.A,{})})}),(0,x.jsx)("li",{className:"page-item"+(0===l?" disabled":""),children:(0,x.jsx)("button",{className:"page-link",onClick:()=>s(l-1),children:(0,x.jsx)(U.A,{})})}),o.map((e=>(0,x.jsx)("li",{className:"page-item"+(l===e?" active":""),children:(0,x.jsxs)("button",{className:"page-link small",onClick:()=>s(e),children:[e+1<10?0:"",e+1]})},e))),(0,x.jsx)("li",{className:"page-item"+(l===n-1?" disabled":""),children:(0,x.jsx)("button",{className:"page-link",onClick:()=>s(l+1),children:(0,x.jsx)(W.A,{})})}),(0,x.jsx)("li",{className:"page-item"+(l===n-1?" disabled":""),children:(0,x.jsx)("button",{className:"page-link",onClick:()=>s(n-1),children:(0,x.jsx)($.A,{})})})]})}):null},B=()=>{const{setUserData:e,setPage:l,setFilter:s,setSearch:t,userDataName:n,clicked:a}=j();return(0,x.jsxs)("button",{className:"btn btn-sm btn-danger text-truncate",style:{maxWidth:"300px"},title:n,onClick:()=>{e({}),l(0),s(""),t(""),a()},children:[(0,x.jsx)(I.A,{className:"me-1"}),(0,x.jsx)("small",{children:n})]})},M=e=>{let{label:l,accept:s=".zip",onFileSelected:n}=e;const[a,o]=(0,t.useState)("");return(0,t.useEffect)((()=>{o((0,p.A)())}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("label",{htmlFor:a,className:"form-label fw-bold small",children:l}),(0,x.jsx)("input",{id:a,type:"file",className:"form-control",accept:s,onChange:e=>{e.target&&e.target.files&&e.target.files[0]&&n(e.target.files[0])}})]})},K=()=>{const{i18n:e}=(0,i.Bd)(),{zipToUserData:l}=j(),[s,n]=(0,t.useState)([]);return(0,t.useEffect)((()=>{const l=e.t("instructions",{returnObjects:!0});Array.isArray(l)&&n(l)}),[e]),(0,x.jsxs)("section",{className:"alert alert-primary my-4",children:[(0,x.jsx)("p",{className:"lead",children:e.t("DESCRIPTION")}),(0,x.jsx)("a",{href:e.t("IG_DATA_LINK"),target:"_blank",rel:"noreferrer",className:"ms-1 fw-bold",children:e.t("IG_DATA")}),(0,x.jsx)("ol",{className:"small",children:s.map(((e,l)=>(0,x.jsx)("li",{children:e},l)))}),(0,x.jsx)("hr",{}),(0,x.jsx)(M,{label:e.t("ZIP_FILE"),accept:".zip",onFileSelected:e=>{l(e)}})]})},q=()=>{const{i18n:e}=(0,i.Bd)(),{totals:l,userData:s}=j();return(0,x.jsx)("div",{className:"app",children:(0,x.jsxs)("main",{className:"container",children:[(0,x.jsx)(b,{}),l._>0?(0,x.jsx)("section",{children:(0,x.jsxs)("div",{className:"row g-1 py-3",children:[(0,x.jsx)("div",{className:"col",children:(0,x.jsx)(B,{})}),(0,x.jsx)("div",{className:"col-auto",children:(0,x.jsx)(P,{})})]})}):null,Object.keys(s).length>0?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("hr",{}),(0,x.jsx)(G,{}),(0,x.jsx)("hr",{})]}):(0,x.jsx)(K,{}),(0,x.jsx)("section",{className:"my-4",children:(0,x.jsxs)("div",{className:"row g-1 d-flex align-items-center",children:[(0,x.jsx)("div",{className:"col",children:(0,x.jsxs)("p",{className:"small fw-bold my-0",children:[e.t("FOOTER"),":"," ",(0,x.jsx)("a",{href:e.t("REPO"),target:"_blank",rel:"noreferrer",children:"GitHub"})]})}),(0,x.jsx)("div",{className:"col-auto",children:l._>0?(0,x.jsx)(P,{}):null})]})})]})})};s(3356);const X=()=>{const{i18n:e}=(0,i.Bd)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a.mg,{titleTemplate:`%s - ${e.t("TITLE")} (${"v"+u})`,defaultTitle:e.t("TITLE"),htmlAttributes:{lang:e.language}}),(0,x.jsx)(g,{children:(0,x.jsx)(q,{})})]})};n.createRoot(document.getElementById("root")).render((0,x.jsx)(a.vd,{children:(0,x.jsx)(t.StrictMode,{children:(0,x.jsx)(X,{})})}))},2705:(e,l,s)=>{var t={"./en-GB/default.json":7502};function n(e){var l=a(e);return s(l)}function a(e){if(!s.o(t,e)){var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}return t[e]}n.keys=function(){return Object.keys(t)},n.resolve=a,e.exports=n,n.id=2705},7502:e=>{"use strict";e.exports=JSON.parse('{"TITLE":"Instagram followers check","DESCRIPTION":"Check your Instagram followers against the ones you are following, easily.","IG_DATA":"Export your Instagram data","IG_DATA_LINK":"https://www.instagram.com/download/request/","instructions":["Download your information in Accounts Center > Click: \\"Continue\\"","Download your information > Click: \\"Download or transfer information\\"","Where do you want to get information from? > Select your account > Click: \\"Next\\"","How much information do you want? > Click: \\"Some of your information\\"","Select information > Click: \\"Followers and following\\" > Click: \\"Next\\"","What do you want to do with your information? > Click: \\"Download to device\\"","Create files to download > Data range: \\"All time\\" and Format: \\"JSON\\"","Click: \\"Create files\\" > Wait to be notified by email when they are ready to be downloaded","When ready, click: \\"Download\\" under the Available downloads"],"ACCOUNTS":"Accounts","ID":"ID","FOLLOWING":"Following","FOLLOWERS":"Followers","NOT_FOLLOWERS":"Not followers","FOLLOWING_BACK":"Following back","BLOCKED":"Blocked","CLOSE_FRIEND":"Close friend","HASHTAG":"Hashtag","PENDING":"Pending","RECENT":"Recent","OLDER_THAN":"You have been following it for {{days}} days.","RECENTLY_UNFOLLOWED":"Recently unfollowed","DISMISSED_SUGGESTION":"Dismissed suggestion","ZIP_FILE":"Select the .zip file you downloaded from your Instagram account","NO_RESULTS":"No results","SEARCH":"Search","ALL":"All","LINK":"Link","DATE":"Date","NOT_FOLLOWERS_ERROR":"It\'s the wrong file, you have to upload the Followers file here.","NOT_FOLLOWING_ERROR":"It\'s the wrong file, you have to upload the Following file here.","FOOTER":"Code written by Marco D. Cellamare","REPO":"https://github.com/marcodcellamare/ig-followers-check"}')}},e=>{e.O(0,[869,840,102,808,391,638,179,978],(()=>{return l=9594,e(e.s=l);var l}));e.O()}]);
//# sourceMappingURL=main.a0add13d.js.map