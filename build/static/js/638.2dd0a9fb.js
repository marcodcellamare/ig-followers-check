/*! For license information please see 638.2dd0a9fb.js.LICENSE.txt */
(self.webpackChunkig_followers_check=self.webpackChunkig_followers_check||[]).push([[638],{6366:e=>{var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,s){if(e===s)return!0;if(e&&s&&"object"==typeof e&&"object"==typeof s){if(e.constructor!==s.constructor)return!1;var a,u,l,c;if(Array.isArray(e)){if((a=e.length)!=s.length)return!1;for(u=a;0!==u--;)if(!i(e[u],s[u]))return!1;return!0}if(r&&e instanceof Map&&s instanceof Map){if(e.size!==s.size)return!1;for(c=e.entries();!(u=c.next()).done;)if(!s.has(u.value[0]))return!1;for(c=e.entries();!(u=c.next()).done;)if(!i(u.value[1],s.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&s instanceof Set){if(e.size!==s.size)return!1;for(c=e.entries();!(u=c.next()).done;)if(!s.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(s)){if((a=e.length)!=s.length)return!1;for(u=a;0!==u--;)if(e[u]!==s[u])return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof s.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof s.toString)return e.toString()===s.toString();if((a=(l=Object.keys(e)).length)!==Object.keys(s).length)return!1;for(u=a;0!==u--;)if(!Object.prototype.hasOwnProperty.call(s,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=a;0!==u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],s[l[u]]))return!1;return!0}return e!==e&&s!==s}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},9367:(e,t,r)=>{"use strict";r.d(t,{mg:()=>X,vd:()=>V});var n=r(5043),o=r(6366),i=r.n(o),s=r(2740),a=r.n(s),u=r(7324),l=r.n(u),c=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(c||{}),f={rel:["amphtml","canonical","alternate"]},p={type:["application/ld+json"]},d={charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},y=Object.values(c),h={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},m=Object.entries(h).reduce(((e,t)=>{let[r,n]=t;return e[n]=r,e}),{}),g="data-rh",b="defaultTitle",v="defer",T="encodeSpecialCharacters",w="onChangeClientState",_="titleTemplate",k="prioritizeSeoTags",C=(e,t)=>{for(let r=e.length-1;r>=0;r-=1){const n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},S=e=>{let t=C(e,"title");const r=C(e,_);if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,(()=>t));const n=C(e,b);return t||n||void 0},x=e=>C(e,w)||(()=>{}),A=(e,t)=>t.filter((t=>"undefined"!==typeof t[e])).map((t=>t[e])).reduce(((e,t)=>({...e,...t})),{}),O=(e,t)=>t.filter((e=>"undefined"!==typeof e.base)).map((e=>e.base)).reverse().reduce(((t,r)=>{if(!t.length){const n=Object.keys(r);for(let o=0;o<n.length;o+=1){const i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}}return t}),[]),E=(e,t,r)=>{const n={};return r.filter((t=>{return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&(r=`Helmet: ${e} should be of type "Array". Instead found type "${typeof t[e]}"`,console&&"function"===typeof console.warn&&console.warn(r)),!1);var r})).map((t=>t[e])).reverse().reduce(((e,r)=>{const o={};r.filter((e=>{let r;const i=Object.keys(e);for(let n=0;n<i.length;n+=1){const o=i[n],s=o.toLowerCase();-1===t.indexOf(s)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===s&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(o)||"innerHTML"!==o&&"cssText"!==o&&"itemprop"!==o||(r=o)}if(!r||!e[r])return!1;const s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((t=>e.push(t)));const i=Object.keys(o);for(let t=0;t<i.length;t+=1){const e=i[t],r={...n[e],...o[e]};n[e]=r}return e}),[]).reverse()},$=(e,t)=>{if(Array.isArray(e)&&e.length)for(let r=0;r<e.length;r+=1){if(e[r][t])return!0}return!1},j=e=>Array.isArray(e)?e.join(""):e,I=(e,t)=>Array.isArray(e)?e.reduce(((e,r)=>(((e,t)=>{const r=Object.keys(e);for(let n=0;n<r.length;n+=1)if(t[r[n]]&&t[r[n]].includes(e[r[n]]))return!0;return!1})(r,t)?e.priority.push(r):e.default.push(r),e)),{priority:[],default:[]}):{default:e,priority:[]},P=(e,t)=>({...e,[t]:void 0}),M=["noscript","script","style"],R=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},N=e=>Object.keys(e).reduce(((t,r)=>{const n="undefined"!==typeof e[r]?`${r}="${e[r]}"`:`${r}`;return t?`${t} ${n}`:n}),""),L=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(((t,r)=>(t[h[r]||r]=e[r],t)),t)},D=(e,t)=>t.map(((t,r)=>{const o={key:r,[g]:!0};return Object.keys(t).forEach((e=>{const r=h[e]||e;if("innerHTML"===r||"cssText"===r){const e=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:e}}else o[r]=t[e]})),n.createElement(e,o)})),U=function(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];switch(e){case"title":return{toComponent:()=>((e,t,r)=>{const o=L(r,{key:t,[g]:!0});return[n.createElement("title",o,t)]})(0,t.title,t.titleAttributes),toString:()=>((e,t,r,n)=>{const o=N(r),i=j(t);return o?`<${e} ${g}="true" ${o}>${R(i,n)}</${e}>`:`<${e} ${g}="true">${R(i,n)}</${e}>`})(e,t.title,t.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>L(t),toString:()=>N(t)};default:return{toComponent:()=>D(e,t),toString:()=>function(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.reduce(((t,n)=>{const o=n,i=Object.keys(o).filter((e=>!("innerHTML"===e||"cssText"===e))).reduce(((e,t)=>{const n="undefined"===typeof o[t]?t:`${t}="${R(o[t],r)}"`;return e?`${e} ${n}`:n}),""),s=o.innerHTML||o.cssText||"",a=-1===M.indexOf(e);return`${t}<${e} ${g}="true" ${i}${a?"/>":`>${s}</${e}>`}`}),"")}(e,t,r)}}},H=e=>{const{baseTag:t,bodyAttributes:r,encode:n=!0,htmlAttributes:o,noscriptTags:i,styleTags:s,title:a="",titleAttributes:u,prioritizeSeoTags:l}=e;let{linkTags:c,metaTags:y,scriptTags:h}=e,m={toComponent:()=>{},toString:()=>""};return l&&({priorityMethods:m,linkTags:c,metaTags:y,scriptTags:h}=(e=>{let{metaTags:t,linkTags:r,scriptTags:n,encode:o}=e;const i=I(t,d),s=I(r,f),a=I(n,p);return{priorityMethods:{toComponent:()=>[...D("meta",i.priority),...D("link",s.priority),...D("script",a.priority)],toString:()=>`${U("meta",i.priority,o)} ${U("link",s.priority,o)} ${U("script",a.priority,o)}`},metaTags:i.default,linkTags:s.default,scriptTags:a.default}})(e)),{priority:m,base:U("base",t,n),bodyAttributes:U("bodyAttributes",r,n),htmlAttributes:U("htmlAttributes",o,n),link:U("link",c,n),meta:U("meta",y,n),noscript:U("noscript",i,n),script:U("script",h,n),style:U("style",s,n),title:U("title",{title:a,titleAttributes:u},n)}},F=[],q=!("undefined"===typeof window||!window.document||!window.document.createElement),z=class{instances=[];canUseDOM=(()=>q)();context;value={setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?F:this.instances,add:e=>{(this.canUseDOM?F:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?F:this.instances).indexOf(e);(this.canUseDOM?F:this.instances).splice(t,1)}}};constructor(e,t){this.context=e,this.canUseDOM=t||!1,t||(e.helmet=H({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},B=n.createContext({}),V=class e extends n.Component{static canUseDOM=(()=>q)();helmetData;constructor(t){super(t),this.helmetData=new z(this.props.context||{},e.canUseDOM)}render(){return n.createElement(B.Provider,{value:this.helmetData.value},this.props.children)}},Y=(e,t)=>{const r=document.head||document.querySelector("head"),n=r.querySelectorAll(`${e}[${g}]`),o=[].slice.call(n),i=[];let s;return t&&t.length&&t.forEach((t=>{const r=document.createElement(e);for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))if("innerHTML"===e)r.innerHTML=t.innerHTML;else if("cssText"===e)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{const n=e,o="undefined"===typeof t[n]?"":t[n];r.setAttribute(e,o)}r.setAttribute(g,"true"),o.some(((e,t)=>(s=t,r.isEqualNode(e))))?o.splice(s,1):i.push(r)})),o.forEach((e=>e.parentNode?.removeChild(e))),i.forEach((e=>r.appendChild(e))),{oldTags:o,newTags:i}},K=(e,t)=>{const r=document.getElementsByTagName(e)[0];if(!r)return;const n=r.getAttribute(g),o=n?n.split(","):[],i=[...o],s=Object.keys(t);for(const a of s){const e=t[a]||"";r.getAttribute(a)!==e&&r.setAttribute(a,e),-1===o.indexOf(a)&&o.push(a);const n=i.indexOf(a);-1!==n&&i.splice(n,1)}for(let a=i.length-1;a>=0;a-=1)r.removeAttribute(i[a]);o.length===i.length?r.removeAttribute(g):r.getAttribute(g)!==s.join(",")&&r.setAttribute(g,s.join(","))},W=(e,t)=>{const{baseTag:r,bodyAttributes:n,htmlAttributes:o,linkTags:i,metaTags:s,noscriptTags:a,onChangeClientState:u,scriptTags:l,styleTags:c,title:f,titleAttributes:p}=e;K("body",n),K("html",o),((e,t)=>{"undefined"!==typeof e&&document.title!==e&&(document.title=j(e)),K("title",t)})(f,p);const d={baseTag:Y("base",r),linkTags:Y("link",i),metaTags:Y("meta",s),noscriptTags:Y("noscript",a),scriptTags:Y("script",l),styleTags:Y("style",c)},y={},h={};Object.keys(d).forEach((e=>{const{newTags:t,oldTags:r}=d[e];t.length&&(y[e]=t),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,y,h)},J=null,G=e=>{J&&cancelAnimationFrame(J),e.defer?J=requestAnimationFrame((()=>{W(e,(()=>{J=null}))})):(W(e),J=null)},Q=class extends n.Component{rendered=!1;shouldComponentUpdate(e){return!l()(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let r=null;const n=(o=e.get().map((e=>{const t={...e.props};return delete t.context,t})),{baseTag:O(["href"],o),bodyAttributes:A("bodyAttributes",o),defer:C(o,v),encode:C(o,T),htmlAttributes:A("htmlAttributes",o),linkTags:E("link",["rel","href"],o),metaTags:E("meta",["name","charset","http-equiv","property","itemprop"],o),noscriptTags:E("noscript",["innerHTML"],o),onChangeClientState:x(o),scriptTags:E("script",["src","innerHTML"],o),styleTags:E("style",["cssText"],o),title:S(o),titleAttributes:A("titleAttributes",o),prioritizeSeoTags:$(o,k)});var o;V.canUseDOM?G(n):H&&(r=H(n)),t(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},X=class extends n.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(e){return!i()(P(this.props,"helmetData"),P(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,r,n){return{...t,[e.type]:[...t[e.type]||[],{...r,...this.mapNestedChildrenToProps(e,n)}]}}mapObjectTypeChildren(e,t,r,n){switch(e.type){case"title":return{...t,[e.type]:n,titleAttributes:{...r}};case"body":return{...t,bodyAttributes:{...r}};case"html":return{...t,htmlAttributes:{...r}};default:return{...t,[e.type]:{...r}}}}mapArrayTypeChildrenToProps(e,t){let r={...t};return Object.keys(e).forEach((t=>{r={...r,[t]:e[t]}})),r}warnOnInvalidChildren(e,t){return a()(y.some((t=>e.type===t)),"function"===typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${y.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),a()(!t||"string"===typeof t||Array.isArray(t)&&!t.some((e=>"string"!==typeof e)),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let r={};return n.Children.forEach(e,(e=>{if(!e||!e.props)return;const{children:n,...o}=e.props,i=Object.keys(o).reduce(((e,t)=>(e[m[t]||t]=o[t],e)),{});let{type:s}=e;switch("symbol"===typeof s?s=s.toString():this.warnOnInvalidChildren(e,n),s){case"Symbol(react.fragment)":t=this.mapChildrenToProps(n,t);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(e,r,i,n);break;default:t=this.mapObjectTypeChildren(e,t,i,n)}})),this.mapArrayTypeChildrenToProps(r,t)}render(){const{children:e,...t}=this.props;let r={...t},{helmetData:o}=t;if(e&&(r=this.mapChildrenToProps(e,r)),o&&!(o instanceof z)){o=new z(o.context,!0),delete r.helmetData}return o?n.createElement(Q,{...r,context:o.value}):n.createElement(B.Consumer,null,(e=>n.createElement(Q,{...r,context:e})))}}},1153:(e,t,r)=>{"use strict";var n=r(5043),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},4202:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var T=v.prototype=new b;T.constructor=v,h(T,g.prototype),T.isPureReactComponent=!0;var w=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)_.call(t,o)&&!C.hasOwnProperty(o)&&(i[o]=t[o]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:r,type:e,key:s,ref:a,props:i,_owner:k.current}}function x(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var A=/\/+/g;function O(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return s=s(u=e),e=""===i?"."+O(u,0):i,w(s)?(o="",null!=e&&(o=e.replace(A,"$&/")+"/"),E(s,t,o,"",(function(e){return e}))):null!=s&&(x(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(A,"$&/")+"/")+e)),t.push(s)),1;if(u=0,i=""===i?".":i+":",w(e))for(var l=0;l<e.length;l++){var c=i+O(a=e[l],l);u+=E(a,t,o,c,s)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),l=0;!(a=e.next()).done;)u+=E(a=a.value,t,o,c=i+O(a,l++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},P={transition:null},M={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:P,ReactCurrentOwner:k};function R(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=s,t.PureComponent=v,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.act=R,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)_.call(t,l)&&!C.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){u=Array(l);for(var c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}return{$$typeof:r,type:e.type,key:i,ref:s,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=R,t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.3.1"},5043:(e,t,r)=>{"use strict";e.exports=r(4202)},579:(e,t,r)=>{"use strict";e.exports=r(1153)},7234:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,o=e[n];if(!(0<i(o,t)))break e;e[n]=t,e[r]=o,r=n}}function n(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length,s=o>>>1;n<s;){var a=2*(n+1)-1,u=e[a],l=a+1,c=e[l];if(0>i(u,r))l<o&&0>i(c,u)?(e[n]=c,e[l]=r,n=l):(e[n]=u,e[a]=r,n=a);else{if(!(l<o&&0>i(c,r)))break e;e[n]=c,e[l]=r,n=l}}}return t}function i(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,u=a.now();t.unstable_now=function(){return a.now()-u}}var l=[],c=[],f=1,p=null,d=3,y=!1,h=!1,m=!1,g="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function T(e){for(var t=n(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,r(l,t)}t=n(c)}}function w(e){if(m=!1,T(e),!h)if(null!==n(l))h=!0,P(_);else{var t=n(c);null!==t&&M(w,t.startTime-e)}}function _(e,r){h=!1,m&&(m=!1,b(x),x=-1),y=!0;var i=d;try{for(T(r),p=n(l);null!==p&&(!(p.expirationTime>r)||e&&!E());){var s=p.callback;if("function"===typeof s){p.callback=null,d=p.priorityLevel;var a=s(p.expirationTime<=r);r=t.unstable_now(),"function"===typeof a?p.callback=a:p===n(l)&&o(l),T(r)}else o(l);p=n(l)}if(null!==p)var u=!0;else{var f=n(c);null!==f&&M(w,f.startTime-r),u=!1}return u}finally{p=null,d=i,y=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,C=!1,S=null,x=-1,A=5,O=-1;function E(){return!(t.unstable_now()-O<A)}function $(){if(null!==S){var e=t.unstable_now();O=e;var r=!0;try{r=S(!0,e)}finally{r?k():(C=!1,S=null)}}else C=!1}if("function"===typeof v)k=function(){v($)};else if("undefined"!==typeof MessageChannel){var j=new MessageChannel,I=j.port2;j.port1.onmessage=$,k=function(){I.postMessage(null)}}else k=function(){g($,0)};function P(e){S=e,C||(C=!0,k())}function M(e,r){x=g((function(){e(t.unstable_now())}),r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||y||(h=!0,P(_))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3;break;default:t=d}var r=d;d=t;try{return e()}finally{d=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=d;d=e;try{return t()}finally{d=r}},t.unstable_scheduleCallback=function(e,o,i){var s=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?s+i:s:i=s,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return e={id:f++,callback:o,priorityLevel:e,startTime:i,expirationTime:a=i+a,sortIndex:-1},i>s?(e.sortIndex=i,r(c,e),null===n(l)&&e===n(c)&&(m?(b(x),x=-1):m=!0,M(w,i-s))):(e.sortIndex=a,r(l,e),h||y||(h=!0,P(_))),e},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(e){var t=d;return function(){var r=d;d=t;try{return e.apply(this,arguments)}finally{d=r}}}},8853:(e,t,r)=>{"use strict";e.exports=r(7234)},7324:e=>{e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var l=i[u];if(!a(l))return!1;var c=e[l],f=t[l];if(!1===(o=r?r.call(n,c,f,l):void 0)||void 0===o&&c!==f)return!1}return!0}},8133:(e,t,r)=>{"use strict";r.d(t,{K:()=>o,U:()=>i});var n=r(9179);function o(e){let t=JSON.stringify(e),r=(0,n.Kc)(t);return function(e){return e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}(btoa(String.fromCharCode(...new Uint8Array(r))))}function i(e){let t=function(e){return e.replace(/-/g,"+").replace(/_/g,"/")}(e),r=atob(t),o=Uint8Array.from(r,(e=>e.charCodeAt(0))),i=(0,n.UD)(o,{to:"string"});return JSON.parse(i)}},6242:(e,t,r)=>{"use strict";r.d(t,{r9:()=>h,Bd:()=>v});var n=r(5043);r(2707);const o={},i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];l(t[0])&&o[t[0]]||(l(t[0])&&(o[t[0]]=new Date),function(){if(console?.warn){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];l(t[0])&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}(...t))},s=(e,t)=>()=>{if(e.isInitialized)t();else{const r=()=>{setTimeout((()=>{e.off("initialized",r)}),0),t()};e.on("initialized",r)}},a=(e,t,r)=>{e.loadNamespaces(t,s(e,r))},u=(e,t,r,n)=>{l(r)&&(r=[r]),r.forEach((t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)})),e.loadLanguages(t,s(e,n))},l=e=>"string"===typeof e,c=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,f={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},p=e=>f[e];let d={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(c,p)};let y;const h={type:"3rdParty",init(e){!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d={...d,...e}}(e.options.react),(e=>{y=e})(e)}},m=(0,n.createContext)();class g{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const b=(e,t,r,n)=>e.getFixedT(t,r,n),v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:r}=t,{i18n:o,defaultNS:s}=(0,n.useContext)(m)||{},c=r||o||y;if(c&&!c.reportNamespaces&&(c.reportNamespaces=new g),!c){i("You will need to pass in an i18next instance by using initReactI18next");const e=(e,t)=>{return l(t)?t:"object"===typeof(r=t)&&null!==r&&l(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e;var r},t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}c.options.react?.wait&&i("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const f={...d,...c.options.react,...t},{useSuspense:p,keyPrefix:h}=f;let v=e||s||c.options?.defaultNS;v=l(v)?[v]:v||["translation"],c.reportNamespaces.addUsedNamespaces?.(v);const T=(c.isInitialized||c.initializedStoreOnce)&&v.every((e=>function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:r.lng,precheck:(t,n)=>{if(r.bindI18n?.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!n(t.isLanguageChangingTo,e))return!1}}):(i("i18n.languages were undefined or empty",t.languages),!0)}(e,c,f))),w=((e,t,r,o)=>(0,n.useCallback)(b(e,t,r,o),[e,t,r,o]))(c,t.lng||null,"fallback"===f.nsMode?v:v[0],h),_=()=>w,k=()=>b(c,t.lng||null,"fallback"===f.nsMode?v:v[0],h),[C,S]=(0,n.useState)(_);let x=v.join();t.lng&&(x=`${t.lng}${x}`);const A=((e,t)=>{const r=(0,n.useRef)();return(0,n.useEffect)((()=>{r.current=t?r.current:e}),[e,t]),r.current})(x),O=(0,n.useRef)(!0);(0,n.useEffect)((()=>{const{bindI18n:e,bindI18nStore:r}=f;O.current=!0,T||p||(t.lng?u(c,t.lng,v,(()=>{O.current&&S(k)})):a(c,v,(()=>{O.current&&S(k)}))),T&&A&&A!==x&&O.current&&S(k);const n=()=>{O.current&&S(k)};return e&&c?.on(e,n),r&&c?.store.on(r,n),()=>{O.current=!1,c&&e?.split(" ").forEach((e=>c.off(e,n))),r&&c&&r.split(" ").forEach((e=>c.store.off(e,n)))}}),[c,x]),(0,n.useEffect)((()=>{O.current&&T&&S(_)}),[c,h,T]);const E=[C,c,T];if(E.t=C,E.i18n=c,E.ready=T,T)return E;if(!T&&!p)return E;throw new Promise((e=>{t.lng?u(c,t.lng,v,(()=>e())):a(c,v,(()=>e()))}))}}}]);
//# sourceMappingURL=638.2dd0a9fb.js.map