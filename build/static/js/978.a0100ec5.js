(self.webpackChunkig_followers_check=self.webpackChunkig_followers_check||[]).push([[978],{2073:(t,e,r)=>{"use strict";r.d(e,{A:()=>f});const o={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var n,s=new Uint8Array(16);function i(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(s)}for(var a=[],u=0;u<256;++u)a.push((u+256).toString(16).slice(1));function h(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(a[t[e+0]]+a[t[e+1]]+a[t[e+2]]+a[t[e+3]]+"-"+a[t[e+4]]+a[t[e+5]]+"-"+a[t[e+6]]+a[t[e+7]]+"-"+a[t[e+8]]+a[t[e+9]]+"-"+a[t[e+10]]+a[t[e+11]]+a[t[e+12]]+a[t[e+13]]+a[t[e+14]]+a[t[e+15]]).toLowerCase()}const f=function(t,e,r){if(o.randomUUID&&!e&&!t)return o.randomUUID();var n=(t=t||{}).random||(t.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var s=0;s<16;++s)e[r+s]=n[s];return e}return h(n)}},1844:t=>{t.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},4953:(t,e,r)=>{"use strict";r.r(e),r.d(e,{DOMException:()=>_,Headers:()=>f,Request:()=>m,Response:()=>v,fetch:()=>T});var o="undefined"!==typeof globalThis&&globalThis||"undefined"!==typeof self&&self||"undefined"!==typeof r.g&&r.g||{},n={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};if(n.arrayBuffer)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(t){return t&&s.indexOf(Object.prototype.toString.call(t))>-1};function a(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function u(t){return"string"!==typeof t&&(t=String(t)),t}function h(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n.iterable&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){if(2!=t.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+t.length);this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function d(t){if(!t._noBody)return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function c(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function y(t){var e=new FileReader,r=c(e);return e.readAsArrayBuffer(t),r}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"===typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||i(t))?this._bodyArrayBuffer=l(t):this._bodyText=t=Object.prototype.toString.call(t):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=d(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}if(n.blob)return this.blob().then(y);throw new Error("could not read as ArrayBuffer")},this.text=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=c(e),o=/charset=([A-Za-z0-9_-]+)/.exec(t.type),n=o?o[1]:"utf-8";return e.readAsText(t,n),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(t,e){t=a(t),e=u(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},f.prototype.delete=function(t){delete this.map[a(t)]},f.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},f.prototype.set=function(t,e){this.map[a(t)]=u(e)},f.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},f.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),h(t)},f.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),h(t)},f.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),h(t)},n.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);var b=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function m(t,e){if(!(this instanceof m))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=function(t){var e=t.toUpperCase();return b.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal||function(){if("AbortController"in o)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),("GET"===this.method||"HEAD"===this.method)&&("no-store"===e.cache||"no-cache"===e.cache)){var n=/([?&])_=[^&]*/;if(n.test(this.url))this.url=this.url.replace(n,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function w(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function g(t){var e=new f;return t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();try{e.append(o,n)}catch(s){console.warn("Response "+s.message)}}})),e}function v(t,e){if(!(this instanceof v))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},p.call(m.prototype),p.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:200,statusText:""});return t.ok=!1,t.status=0,t.type="error",t};var A=[301,302,303,307,308];v.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})};var _=o.DOMException;try{new _}catch(E){(_=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),_.prototype.constructor=_}function T(t,e){return new Promise((function(r,s){var i=new m(t,e);if(i.signal&&i.signal.aborted)return s(new _("Aborted","AbortError"));var h=new XMLHttpRequest;function d(){h.abort()}if(h.onload=function(){var t={statusText:h.statusText,headers:g(h.getAllResponseHeaders()||"")};0===i.url.indexOf("file://")&&(h.status<200||h.status>599)?t.status=200:t.status=h.status,t.url="responseURL"in h?h.responseURL:t.headers.get("X-Request-URL");var e="response"in h?h.response:h.responseText;setTimeout((function(){r(new v(e,t))}),0)},h.onerror=function(){setTimeout((function(){s(new TypeError("Network request failed"))}),0)},h.ontimeout=function(){setTimeout((function(){s(new TypeError("Network request timed out"))}),0)},h.onabort=function(){setTimeout((function(){s(new _("Aborted","AbortError"))}),0)},h.open(i.method,function(t){try{return""===t&&o.location.href?o.location.href:t}catch(e){return t}}(i.url),!0),"include"===i.credentials?h.withCredentials=!0:"omit"===i.credentials&&(h.withCredentials=!1),"responseType"in h&&(n.blob?h.responseType="blob":n.arrayBuffer&&(h.responseType="arraybuffer")),e&&"object"===typeof e.headers&&!(e.headers instanceof f||o.Headers&&e.headers instanceof o.Headers)){var c=[];Object.getOwnPropertyNames(e.headers).forEach((function(t){c.push(a(t)),h.setRequestHeader(t,u(e.headers[t]))})),i.headers.forEach((function(t,e){-1===c.indexOf(e)&&h.setRequestHeader(e,t)}))}else i.headers.forEach((function(t,e){h.setRequestHeader(e,t)}));i.signal&&(i.signal.addEventListener("abort",d),h.onreadystatechange=function(){4===h.readyState&&i.signal.removeEventListener("abort",d)}),h.send("undefined"===typeof i._bodyInit?null:i._bodyInit)}))}T.polyfill=!0,o.fetch||(o.fetch=T,o.Headers=f,o.Request=m,o.Response=v)}}]);
//# sourceMappingURL=978.a0100ec5.js.map