var e=Object.defineProperty,t=(t,n,r)=>(((t,n,r)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r})(t,"symbol"!=typeof n?n+"":n,r),r);import{q as n,s as r,t as o,u as s,x as i}from"./index.99533025.js";function a(e,t){return function(){return e.apply(t,arguments)}}const{toString:c}=Object.prototype,{getPrototypeOf:u}=Object,l=(f=Object.create(null),e=>{const t=c.call(e);return f[t]||(f[t]=t.slice(8,-1).toLowerCase())});var f;const d=e=>(e=e.toLowerCase(),t=>l(t)===e),h=e=>t=>typeof t===e,{isArray:p}=Array,m=h("undefined");const g=d("ArrayBuffer");const b=h("string"),y=h("function"),w=h("number"),E=e=>null!==e&&"object"==typeof e,O=e=>{if("object"!==l(e))return!1;const t=u(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},S=d("Date"),R=d("File"),T=d("Blob"),A=d("FileList"),j=d("URLSearchParams");function v(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),p(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function x(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const N="undefined"==typeof self?"undefined"==typeof global?globalThis:global:self,C=e=>!m(e)&&e!==N;const P=(U="undefined"!=typeof Uint8Array&&u(Uint8Array),e=>U&&e instanceof U);var U;const _=d("HTMLFormElement"),D=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),L=d("RegExp"),B=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};v(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},F={isArray:p,isArrayBuffer:g,isBuffer:function(e){return null!==e&&!m(e)&&null!==e.constructor&&!m(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||c.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer),t},isString:b,isNumber:w,isBoolean:e=>!0===e||!1===e,isObject:E,isPlainObject:O,isUndefined:m,isDate:S,isFile:R,isBlob:T,isRegExp:L,isFunction:y,isStream:e=>E(e)&&y(e.pipe),isURLSearchParams:j,isTypedArray:P,isFileList:A,forEach:v,merge:function e(){const{caseless:t}=C(this)&&this||{},n={},r=(r,o)=>{const s=t&&x(n,o)||o;O(n[s])&&O(r)?n[s]=e(n[s],r):O(r)?n[s]=e({},r):p(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&v(arguments[o],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(v(t,((t,r)=>{n&&y(t)?e[r]=a(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&u(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:l,kindOfTest:d,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(p(e))return e;let t=e.length;if(!w(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:_,hasOwnProperty:D,hasOwnProp:D,reduceDescriptors:B,freezeMethods:e=>{B(e,((t,n)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];y(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return p(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:x,global:N,isContextDefined:C,toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(E(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=p(e)?[]:{};return v(e,((e,t)=>{const s=n(e,r+1);!m(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)}};function k(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}F.inherits(k,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const M=k.prototype,q={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{q[e]={value:e}})),Object.defineProperties(k,q),Object.defineProperty(M,"isAxiosError",{value:!0}),k.from=(e,t,n,r,o,s)=>{const i=Object.create(M);return F.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),k.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const z="object"==typeof self?self.FormData:window.FormData;function J(e){return F.isPlainObject(e)||F.isArray(e)}function I(e){return F.endsWith(e,"[]")?e.slice(0,-2):e}function H(e,t,n){return e?e.concat(t).map((function(e,t){return e=I(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const $=F.toFlatObject(F,{},null,(function(e){return/^is[A-Z]/.test(e)}));function K(e,t,n){if(!F.isObject(e))throw new TypeError("target must be an object");t=t||new(z||FormData);const r=(n=F.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!F.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((c=t)&&F.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator]);var c;if(!F.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(F.isDate(e))return e.toISOString();if(!a&&F.isBlob(e))throw new k("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(e)||F.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(F.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(F.isArray(e)&&function(e){return F.isArray(e)&&!e.some(J)}(e)||F.isFileList(e)||F.endsWith(n,"[]")&&(a=F.toArray(e)))return n=I(n),a.forEach((function(e,r){!F.isUndefined(e)&&null!==e&&t.append(!0===i?H([n],r,s):null===i?n:n+"[]",u(e))})),!1;return!!J(e)||(t.append(H(o,n,s),u(e)),!1)}const f=[],d=Object.assign($,{defaultVisitor:l,convertValue:u,isVisitable:J});if(!F.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!F.isUndefined(n)){if(-1!==f.indexOf(n))throw Error("Circular reference detected in "+r.join("."));f.push(n),F.forEach(n,(function(n,s){!0===(!(F.isUndefined(n)||null===n)&&o.call(t,n,F.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),f.pop()}}(e),t}function V(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function W(e,t){this._pairs=[],e&&K(e,this,t)}const X=W.prototype;function Q(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Z(e,t,n){if(!t)return e;const r=n&&n.encode||Q,o=n&&n.serialize;let s;if(s=o?o(t,n):F.isURLSearchParams(t)?t.toString():new W(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}X.append=function(e,t){this._pairs.push([e,t])},X.toString=function(e){const t=e?function(t){return e.call(this,t,V)}:V;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const G=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){F.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Y={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ee="undefined"!=typeof URLSearchParams?URLSearchParams:W,te=FormData,ne=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),re={isBrowser:!0,classes:{URLSearchParams:ee,FormData:te,Blob:Blob},isStandardBrowserEnv:ne,protocols:["http","https","file","blob","url","data"]};function oe(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&F.isArray(r)?r.length:s,a)return F.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&F.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&F.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(F.isFormData(e)&&F.isFunction(e.entries)){const n={};return F.forEachEntry(e,((e,r)=>{t(function(e){return F.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const se={"Content-Type":void 0};const ie={transitional:Y,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=F.isObject(e);o&&F.isHTMLForm(e)&&(e=new FormData(e));if(F.isFormData(e))return r&&r?JSON.stringify(oe(e)):e;if(F.isArrayBuffer(e)||F.isBuffer(e)||F.isStream(e)||F.isFile(e)||F.isBlob(e))return e;if(F.isArrayBufferView(e))return e.buffer;if(F.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return K(e,new re.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return re.isNode&&F.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=F.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return K(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(F.isString(e))try{return(t||JSON.parse)(e),F.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ie.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&F.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw k.from(o,k.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:re.classes.FormData,Blob:re.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};F.forEach(["delete","get","head"],(function(e){ie.headers[e]={}})),F.forEach(["post","put","patch"],(function(e){ie.headers[e]=F.merge(se)}));const ae=ie,ce=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ue=Symbol("internals");function le(e){return e&&String(e).trim().toLowerCase()}function fe(e){return!1===e||null==e?e:F.isArray(e)?e.map(fe):String(e)}function de(e,t,n,r){return F.isFunction(r)?r.call(this,t,n):F.isString(t)?F.isString(r)?-1!==t.indexOf(r):F.isRegExp(r)?r.test(t):void 0:void 0}class he{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=le(t);if(!o)throw new Error("header name must be a non-empty string");const s=F.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=fe(e))}const s=(e,t)=>F.forEach(e,((e,n)=>o(e,n,t)));return F.isPlainObject(e)||e instanceof this.constructor?s(e,t):F.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ce[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=le(e)){const n=F.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(F.isFunction(t))return t.call(this,e,n);if(F.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=le(e)){const n=F.findKey(this,e);return!(!n||t&&!de(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=le(e)){const o=F.findKey(n,e);!o||t&&!de(0,n[o],o,t)||(delete n[o],r=!0)}}return F.isArray(e)?e.forEach(o):o(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return F.forEach(this,((r,o)=>{const s=F.findKey(n,o);if(s)return t[s]=fe(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=fe(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return F.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&F.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ue]=this[ue]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=le(e);t[r]||(!function(e,t){const n=F.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return F.isArray(e)?e.forEach(r):r(e),this}}he.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),F.freezeMethods(he.prototype),F.freezeMethods(he);const pe=he;function me(e,t){const n=this||ae,r=t||n,o=pe.from(r.headers);let s=r.data;return F.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function ge(e){return!(!e||!e.__CANCEL__)}function be(e,t,n){k.call(this,null==e?"canceled":e,k.ERR_CANCELED,t,n),this.name="CanceledError"}F.inherits(be,k,{__CANCEL__:!0});const ye=re.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),F.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),F.isString(r)&&i.push("path="+r),F.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function we(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ee=re.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=F.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Oe(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Se={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=pe.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}F.isFormData(r)&&re.isStandardBrowserEnv&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=we(e.baseURL,e.url);function l(){if(!c)return;const r=pe.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new k("Request failed with status code "+n.status,[k.ERR_BAD_REQUEST,k.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),Z(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new k("Request aborted",k.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new k("Network Error",k.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Y;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new k(t,r.clarifyTimeoutError?k.ETIMEDOUT:k.ECONNABORTED,e,c)),c=null},re.isStandardBrowserEnv){const t=(e.withCredentials||Ee(u))&&e.xsrfCookieName&&ye.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&F.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),F.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Oe(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Oe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new be(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===re.protocols.indexOf(f)?n(new k("Unsupported protocol "+f+":",k.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};F.forEach(Se,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const Re=e=>{e=F.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=F.isString(n)?Se[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new k(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(F.hasOwnProp(Se,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!F.isFunction(r))throw new TypeError("adapter is not a function");return r};function Te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new be}function Ae(e){Te(e),e.headers=pe.from(e.headers),e.data=me.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Re(e.adapter||ae.adapter)(e).then((function(t){return Te(e),t.data=me.call(e,e.transformResponse,t),t.headers=pe.from(t.headers),t}),(function(t){return ge(t)||(Te(e),t&&t.response&&(t.response.data=me.call(e,e.transformResponse,t.response),t.response.headers=pe.from(t.response.headers))),Promise.reject(t)}))}const je=e=>e instanceof pe?e.toJSON():e;function ve(e,t){t=t||{};const n={};function r(e,t,n){return F.isPlainObject(e)&&F.isPlainObject(t)?F.merge.call({caseless:n},e,t):F.isPlainObject(t)?F.merge({},t):F.isArray(t)?t.slice():t}function o(e,t,n){return F.isUndefined(t)?F.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!F.isUndefined(t))return r(void 0,t)}function i(e,t){return F.isUndefined(t)?F.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(je(e),je(t),!0)};return F.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);F.isUndefined(i)&&s!==a||(n[r]=i)})),n}const xe={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{xe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ne={};xe.transitional=function(e,t,n){return(r,o,s)=>{if(!1===e)throw new k(function(e,t){return"[Axios v1.2.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")),k.ERR_DEPRECATED);return t&&!Ne[o]&&(Ne[o]=!0),!e||e(r,o,s)}};const Ce={assertOptions:function(e,t,n){if("object"!=typeof e)throw new k("options must be an object",k.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new k("option "+s+" must be "+n,k.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new k("Unknown option "+s,k.ERR_BAD_OPTION)}},validators:xe},Pe=Ce.validators;class Ue{constructor(e){this.defaults=e,this.interceptors={request:new G,response:new G}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=ve(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let s;void 0!==n&&Ce.assertOptions(n,{silentJSONParsing:Pe.transitional(Pe.boolean),forcedJSONParsing:Pe.transitional(Pe.boolean),clarifyTimeoutError:Pe.transitional(Pe.boolean)},!1),void 0!==r&&Ce.assertOptions(r,{encode:Pe.function,serialize:Pe.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&F.merge(o.common,o[t.method]),s&&F.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=pe.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Ae.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(h){t.call(this,h);break}}try{u=Ae.call(this,d)}catch(h){return Promise.reject(h)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return Z(we((e=ve(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}F.forEach(["delete","get","head","options"],(function(e){Ue.prototype[e]=function(t,n){return this.request(ve(n||{},{method:e,url:t,data:(n||{}).data}))}})),F.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(ve(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ue.prototype[e]=t(),Ue.prototype[e+"Form"]=t(!0)}));const _e=Ue;class De{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new be(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new De((function(t){e=t})),cancel:e}}}const Le=De;const Be=function e(t){const n=new _e(t),r=a(_e.prototype.request,n);return F.extend(r,_e.prototype,n,{allOwnKeys:!0}),F.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(ve(t,n))},r}(ae);Be.Axios=_e,Be.CanceledError=be,Be.CancelToken=Le,Be.isCancel=ge,Be.VERSION="1.2.0",Be.toFormData=K,Be.AxiosError=k,Be.Cancel=Be.CanceledError,Be.all=function(e){return Promise.all(e)},Be.spread=function(e){return function(t){return e.apply(null,t)}},Be.isAxiosError=function(e){return F.isObject(e)&&!0===e.isAxiosError},Be.AxiosHeaders=pe,Be.formToJSON=e=>oe(F.isHTMLForm(e)?new FormData(e):e),Be.default=Be;const Fe=Be,ke=e=>{const t=document.body,r=document.createElement("div");r.className="block-toast",r.innerHTML=`<div class="block-toast-in">${e}</div>`,t.insertBefore(r,t.childNodes[0]),n((()=>{setTimeout((()=>{var e;const t=document.querySelector(".block-toast");t&&(null==(e=t.parentNode)||e.removeChild(t))}),1800)}))};window.requests=[],window.tokenRefreshing=!1;const Me=new Map,qe={target:i,count:0},ze=(e,t={})=>{const n=r(),i=o(),a=s(),c=Fe.create({baseURL:window.location.protocol+"//"+window.location.host,timeout:1e4,headers:{"Content-Type":"application/json","think-lang":n.lang.defaultLang}});return t=Object.assign({CancelDuplicateRequest:!0,loading:!0,reductDataFormat:!0,showErrorMessage:!0,showCodeMessage:!0,showSuccessMessage:!1},t),c.interceptors.request.use((e=>{if(t.loading&&qe.target.show(),Ie(e),t.CancelDuplicateRequest&&function(e){const t=He(e);e.cancelToken=e.cancelToken||new Fe.CancelToken((e=>{Me.has(t)||Me.set(t,e)}))}(e),t.loading&&qe.count++,e.headers){const t=a.getToken()||i.getToken();t&&(e.headers.Authorization=`Token ${t}`)}return e})),c.interceptors.response.use((e=>401===e.status?(a.$reset(),i.$reset(),ke("Token失效，请重新登录。"),Promise.reject()):(Ie(e.config),t.loading&&Je(t),t.showCodeMessage&&e.data&&0!==Number(e.data.code)?(ke(e.data.msg),Promise.reject(e.data)):t.reductDataFormat?e.data:e)),(e=>(e.config&&Ie(e.config),t.loading&&Je(t),Promise.reject(e)))),c(e)};function Je(e){e.loading&&qe.count>0&&qe.count--,0===qe.count&&qe.target.hide()}function Ie(e){const t=He(e);if(Me.has(t)){Me.get(t)(t),Me.delete(t)}}function He(e){let{data:t}=e;const{url:n,method:r,params:o,headers:s}=e;return"string"==typeof t&&(t=JSON.parse(t)),[n,r,s&&s.batoken?s.batoken:"",s&&s["ba-user-token"]?s["ba-user-token"]:"",JSON.stringify(o),JSON.stringify(t)].join("&")}const $e="/rest/1.0/user/v1/",Ke="/rest/1.0/games/v1/prize/",Ve="/rest/1.0/games/v1/init/",We="/rest/1.0/games/v1/history/",Xe="/rest/1.0/games/v1/future/",Qe="/rest/1.0/message/v1/",Ze="/rest/1.0/order/v1/",Ge="/rest/1.0/games/v1/opening/time/",Ye=e=>ze({url:$e+"login",method:"post",data:e},{showSuccessMessage:!0}),et=e=>ze({url:$e+"add",method:"post",data:e},{showSuccessMessage:!0});class tt{constructor(e,n=!1){t(this,"controllerUrl"),t(this,"actionUrl"),t(this,"hideLoading"),this.controllerUrl=e,this.hideLoading=n,this.actionUrl=new Map([["add",`${e}add`],["del",`${e}del`],["index",`${e}index`],["edit",`${e}edit`]])}index(e={}){return ze({url:this.actionUrl.get("index"),method:"get",params:e},{loading:!this.hideLoading})}edit(e){return ze({url:this.actionUrl.get("edit"),method:"get",params:e},{loading:!this.hideLoading})}del(e){return ze({url:this.actionUrl.get("del"),method:"post",data:{id:e}},{showSuccessMessage:!0,loading:!this.hideLoading})}postData(e,t){if(!this.actionUrl.has(e))throw new Error("action 不存在！");return ze({url:this.actionUrl.get(e),method:"post",params:{id:t.id},data:t},{showSuccessMessage:!0,loading:!this.hideLoading})}}export{ke as T,et as a,Qe as b,ze as c,Ke as d,Ve as e,Ze as f,We as g,Xe as h,Ge as o,Ye as p,tt as t,$e as u};