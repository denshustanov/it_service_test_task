!function(e){function t(t){for(var n,o,i=t[0],a=t[1],s=0,l=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);l.length;)l.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+"build/vaadin-"+({}[e]||e)+"-"+{2:"82eb55819b222fbaa717",3:"593de793089a9cdb6ccf",4:"07b16ec4064a6e75f930",5:"9d1bb879835722446a30",6:"11c72f79710674d1d05e",7:"4c22847dd9e6c77c010a"}[e]+".cache.js"}(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="VAADIN/",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=a;o(o.s=98)}({98:function(e,t,n){"use strict";function r(e){return e=e||[],Array.isArray(e)?e:[e]}function o(e){return`[Vaadin.Router] ${e}`}n.r(t);const i=["module","nomodule"];function a(e){if(!e.match(/.+\.[m]?js$/))throw new Error(o(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function s(e){if(!e||!p(e.path))throw new Error(o('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(u(e.action)||Array.isArray(e.children)||u(e.children)||d(t)||n.some(t=>p(e[t]))))throw new Error(o(`Expected route config "${e.path}" to include either "${n.join('", "')}" `+'or "action" function but none found.'));if(t)if(p(t))a(t);else{if(!i.some(e=>e in t))throw new Error(o('Expected route bundle to include either "nomodule" or "module" keys, or both'));i.forEach(e=>e in t&&a(t[e]))}e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(o(`Route config "${e.path}" has both "redirect" and "${t}" properties, `+`and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function c(e){r(e).forEach(e=>s(e))}function l(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),"module"===t?n.setAttribute("type","module"):"nomodule"===t&&n.setAttribute("nomodule",""),n.async=!0),new Promise((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()})}function h(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function d(e){return"object"==typeof e&&!!e}function u(e){return"function"==typeof e}function p(e){return"string"==typeof e}function f(e){const t=new Error(o(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const m=new class{};function _(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t))!==window.location.origin)return;const{pathname:r,search:o,hash:i}=t;h("go",{pathname:r,search:o,hash:i})&&e.preventDefault()}const g={activate(){window.document.addEventListener("click",_)},inactivate(){window.document.removeEventListener("click",_)}};function v(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;h("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!u(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const w={activate(){window.addEventListener("popstate",v)},inactivate(){window.removeEventListener("popstate",v)}};var y=I,b=A,E=function(e,t){return O(A(e,t))},x=O,C=$,R=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function A(e,t){for(var n,r=[],o=0,i=0,a="",s=t&&t.delimiter||"/",c=t&&t.delimiters||"./",l=!1;null!==(n=R.exec(e));){var h=n[0],d=n[1],u=n.index;if(a+=e.slice(i,u),i=u+h.length,d)a+=d[1],l=!0;else{var p="",f=e[i],m=n[2],_=n[3],g=n[4],v=n[5];if(!l&&a.length){var w=a.length-1;c.indexOf(a[w])>-1&&(p=a[w],a=a.slice(0,w))}a&&(r.push(a),a="",l=!1);var y=""!==p&&void 0!==f&&f!==p,b="+"===v||"*"===v,E="?"===v||"*"===v,x=p||s,C=_||g;r.push({name:m||o++,prefix:p,delimiter:x,optional:E,repeat:b,partial:y,pattern:C?k(C):"[^"+L(x)+"]+?"})}}return(a||i<e.length)&&r.push(a+e.substr(i)),r}function O(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var s=e[a];if("string"!=typeof s){var c,l=n?n[s.name]:void 0;if(Array.isArray(l)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===l.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(c=i(l[h],s),!t[a].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');o+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"));s.partial&&(o+=s.prefix)}else{if(c=i(String(l),s),!t[a].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');o+=s.prefix+c}}else o+=s}return o}}function L(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function k(e){return e.replace(/([=!:$/()])/g,"\\$1")}function P(e){return e&&e.sensitive?"":"i"}function $(e,t,n){for(var r=(n=n||{}).strict,o=!1!==n.start,i=!1!==n.end,a=L(n.delimiter||"/"),s=n.delimiters||"./",c=[].concat(n.endsWith||[]).map(L).concat("$").join("|"),l=o?"^":"",h=0===e.length,d=0;d<e.length;d++){var u=e[d];if("string"==typeof u)l+=L(u),h=d===e.length-1&&s.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+L(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;t&&t.push(u),u.optional?u.partial?l+=L(u.prefix)+"("+p+")?":l+="(?:"+L(u.prefix)+"("+p+"))?":l+=L(u.prefix)+"("+p+")"}}return i?(r||(l+="(?:"+a+")?"),l+="$"===c?"$":"(?="+c+")"):(r||(l+="(?:"+a+"(?="+c+"))?"),h||(l+="(?="+a+"|"+c+")")),new RegExp(l,P(n))}function I(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(I(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",P(n))}(e,t,n):function(e,t,n){return $(A(e,n),t,n)}(e,t,n)}y.parse=b,y.compile=E,y.tokensToFunction=x,y.tokensToRegExp=C;const{hasOwnProperty:j}=Object.prototype,T=new Map;function S(e){try{return decodeURIComponent(e)}catch(t){return e}}function U(e,t,n,r,o){let i,a,s=0,c=e.path||"";return"/"===c.charAt(0)&&(n&&(c=c.substr(1)),n=!0),{next(l){if(e===l)return{done:!0};const h=e.__children=e.__children||e.children;if(!i&&(i=function(e,t,n,r,o){const i=`${e}|${n=!!n}`;let a=T.get(i);if(!a){const t=[];a={keys:t,pattern:y(e,t,{end:n,strict:""===e})},T.set(i,a)}const s=a.pattern.exec(t);if(!s)return null;const c=Object.assign({},o);for(let e=1;e<s.length;e++){const t=a.keys[e-1],n=t.name,r=s[e];void 0===r&&j.call(c,n)||(t.repeat?c[n]=r?r.split(t.delimiter).map(S):[]:c[n]=r?S(r):r)}return{path:s[0],keys:(r||[]).concat(a.keys),params:c}}(c,t,!h,r,o),i))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&h)for(;s<h.length;){if(!a){const r=h[s];r.parent=e;let o=i.path.length;o>0&&"/"===t.charAt(o)&&(o+=1),a=U(r,t.substr(o),n,i.keys,i.params)}const r=a.next(l);if(!r.done)return{done:!1,value:r.value};a=null,s++}return{done:!0}}}}function N(e){if(u(e.route.action))return e.route.action(e)}T.set("|false",{keys:[],pattern:/(?:)/});class B{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||N,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){c(e);const t=[...r(e)];this.root.__children=t}addRoutes(e){return c(e),this.root.__children.push(...r(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,p(e)?{pathname:e}:e),n=U(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let o=null,i=null,a=t;function s(e,c=o.value.route,l){const h=null===l&&o.value.route;return o=i||n.next(h),i=null,e||!o.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(c,o.value.route)?o.done?Promise.reject(f(t)):(a=Object.assign(a?{chain:a.chain?a.chain.slice(0):[]}:{},t,o.value),function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(a,o.value),Promise.resolve(r(a)).then(t=>null!=t&&t!==m?(a.result=t.result||t,a):s(e,c,t))):(i=o,Promise.resolve(m))}return t.next=s,Promise.resolve().then(()=>s(!0,this.root)).catch(e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(a);if(e?console.warn(t):e=new Error(t),e.context=e.context||a,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return a.result=this.errorHandler(e),a;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}B.pathToRegexp=y;const{pathToRegexp:V}=B,F=new Map;function M(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}".`+" Try seting unique 'name' route properties.");return n&&n[0]}function H(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function D(e,t={}){if(!(e instanceof B))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,o)=>{let i=M(n,r);if(!i&&(n.clear(),function e(t,n,r){const o=n.name||n.component;if(o&&(t.has(o)?t.get(o).push(n):t.set(o,[n])),Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];i.parent=n,e(t,i,i.__children||i.children)}}(n,e.root,e.root.__children),i=M(n,r),!i))throw new Error(`Route "${r}" not found`);let a=F.get(i.fullPath);if(!a){let e=H(i),t=i.parent;for(;t;){const n=H(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=V.parse(e),r=V.tokensToFunction(n),o=Object.create(null);for(let e=0;e<n.length;e++)p(n[e])||(o[n[e].name]=!0);a={toPath:r,keys:o},F.set(e,a),i.fullPath=e}let s=a.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const e={},n=Object.keys(o);for(let t=0;t<n.length;t++){const r=n[t];a.keys[r]||(e[r]=o[r])}const r=t.stringifyQueryParams(e);r&&(s+="?"===r.charAt(0)?r:`?${r}`)}return s}}let q=[];function z(e){q.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),q=e}function K(e,t){return e.classList.add(t),new Promise(n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const r=e.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${o}`),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}function W(e){return null!=e}function J({pathname:e="",search:t="",hash:n="",chain:r=[],params:o={},redirectFrom:i,resolver:a},s){const c=r.map(e=>e.route);return{baseUrl:a&&a.baseUrl||"",pathname:e,search:t,hash:n,routes:c,route:s||c.length&&c[c.length-1]||null,params:o,redirectFrom:i,getUrl:(e={})=>Z(te.pathToRegexp.compile(ee(c))(Object.assign({},o,e)),a)}}function Q(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function G(e,t,n){if(u(e))return e.apply(n,t)}function X(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?G(n[e],t,n):void 0}function Y(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function Z(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function ee(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class te extends B{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&B.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const o=te.NavigationTrigger;te.setTriggers.apply(te,Object.keys(o).map(e=>o[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=J({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();u(t.children)&&(n=n.then(()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e))).then(e=>{W(e)||u(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!d(e))throw new Error(o(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=r(e);for(let e=0;e<n.length;e++)s(n[e]),t.__children.push(n[e])}(e,t)}));const a={redirect:t=>Q(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then(()=>{if(this.__isLatestRender(e))return G(t.action,[e,a],t)}).then(e=>{return W(e)&&(e instanceof HTMLElement||e.redirect||e===m)?e:p(t.redirect)?a.redirect(t.redirect):t.bundle?(n=t.bundle,p(n)?l(n):Promise.race(i.filter(e=>e in n).map(e=>l(n[e],e)))).then(()=>{},()=>{throw new Error(o(`Bundle not found: ${t.bundle}. Check if the file name is correct`))}):void 0;var n}).then(e=>W(e)?e:p(t.component)?a.component(t.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},p(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=J(e),t&&this.__updateBrowserHistory(e,1===n),h("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const o=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),o.then(()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),Y(this.__outlet&&this.__outlet.children),this.location=J(Object.assign(r,{resolver:this})),h("error",Object.assign({router:this,error:e},r)),e}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const r=n!==t?n:e,o=Z(ee(n.chain),n.resolver)===n.pathname,i=(e,t=e.route,n)=>e.next(void 0,t,n).then(n=>null===n||n===m?o?e:null!==t.parent?i(e,t.parent,n):n:n);return i(n).then(e=>{if(null===e||e===m)throw f(r);return e&&e!==m&&e!==n?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=J(e);const n=e.chain.map(e=>e.route).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(o(`Invalid route resolution result for path "${e.pathname}". `+`Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". `+"Double check the action return value for the route.")))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let o=Promise.resolve();const i=()=>({cancel:!0}),a=t=>Q(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&(n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=r.length-1;a>=0;a--)n[a].path===r[a].path&&e.search===t.search||(o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[a]));for(let s=0;s<r.length;s++)n[s].path===r[s].path&&e.search===t.search||(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:a},r[s])),n[s].element.location=J(e,n[s].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=J(e,n[t].route)):(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:a},r[t]),r[t].element&&(r[t].element.location=J(e,r[t].route)));return o.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,r){const o=J(t);return e.then(e=>{if(this.__isLatestRender(t)){return X("onBeforeLeave",[o,n,this],r.element)(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,n,r){const o=J(t,r.route);return e.then(e=>{if(this.__isLatestRender(t)){return X("onBeforeEnter",[o,n,this],r.element)(e)}})}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(o(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(o(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const o=r?"replaceState":"pushState";window.history[o](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const o=t&&t.chain[r].element;if(o){if(o.parentNode!==n)break;e.chain[r].element=o,n=o}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(t=>this.__addedByRouter.get(t)&&t!==e.result);let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const o=e.chain[t].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===n&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&Y(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Y(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=J(e);G(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&Y(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=J(e,e.chain[t].route);G(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],o=e.chain;let i;for(let e=o.length;e>0;e--)if(o[e-1].route.animate){i=o[e-1].route.animate;break}if(t&&n&&i){const e=d(i)&&i.leave||"leaving",o=d(i)&&i.enter||"entering";r.push(K(t,e)),r.push(K(n,o))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;p(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){z(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=D(this)),Z(this.__urlForName(e,t),this)}urlForPath(e,t){return Z(te.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=p(e)?this.__createUrl(e,"http://a"):e;return h("go",{pathname:t,search:n,hash:r})}}const ne=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,re=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function oe(e,t){if("function"!=typeof e)return;const n=ne.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const ie=function(e,t){if(window.Vaadin.developmentMode)return oe(e,t)};function ae(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(re?!function(){if(re){if(Object.keys(re).map(e=>re[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!oe((function(){return!0})))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.1"}),ie(ae),te.NavigationTrigger={POPSTATE:w,CLICK:g};const se=window.document.body,ce=window;const{serverSideRoutes:le}=new class{constructor(e){this.pathname="",this.isActive=!1,this.baseRegex=/^\//,se.$=se.$||[],this.config=e||{},ce.Vaadin=ce.Vaadin||{},ce.Vaadin.Flow||(ce.Vaadin.Flow={clients:{TypeScript:{isActive:()=>this.isActive}}});const t=document.head.querySelector("base");this.baseRegex=new RegExp("^"+(document.baseURI||t&&t.href||"/").replace(/^https?:\/\/[^\/]+/i,"")),this.addLoadingIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}get action(){return async e=>(this.pathname=e.pathname,await this.flowInit(),this.container.onBeforeEnter=(e,t)=>this.flowNavigate(e,t),this.container.onBeforeLeave=(e,t)=>this.flowLeave(e,t),this.container)}async flowLeave(e,t){return this.pathname===e.pathname?Promise.resolve({}):new Promise(n=>{this.showLoading(),this.container.serverConnected=e=>{n(t&&e?t.prevent():{}),this.hideLoading()},se.$server.leaveNavigation(this.getFlowRoute(e))})}async flowNavigate(e,t){return new Promise(n=>{this.showLoading(),this.container.serverConnected=(e,r)=>{t&&e?n(t.prevent()):t&&t.redirect&&r?n(t.redirect(r.pathname)):(this.container.style.display="",n(this.container)),this.hideLoading()},se.$server.connectClient(this.container.localName,this.container.id,this.getFlowRoute(e))})}getFlowRoute(e){return(e.pathname+(e.search||"")).replace(this.baseRegex,"")}async flowInit(e=!1){if(!this.response){this.showLoading(),this.response=await this.flowInitUi(e),this.response.appConfig.clientRouting=!e;const{pushScript:t,appConfig:r}=this.response;"string"==typeof t&&await this.loadScript(t);const{appId:o}=r,i=await n.e(6).then(n.bind(null,231));await i.init(this.response),"function"==typeof this.config.imports&&(this.injectAppIdScript(o),await this.config.imports());const a=await n.e(7).then(n.bind(null,232));if(await this.flowInitClient(a),!e){const e=`flow-container-${o.toLowerCase()}`;this.container=se.$[o]=document.createElement(e),this.container.id=o,this.container.style.display="none",document.body.appendChild(this.container)}this.hideLoading()}return this.response}async loadScript(e){return new Promise((t,n)=>{const r=document.createElement("script");r.onload=()=>t(),r.onerror=n,r.src=e,document.body.appendChild(r)})}injectAppIdScript(e){const t=e.substring(0,e.lastIndexOf("-")),n=document.createElement("script");n.type="module",n.setAttribute("data-app-id",t),document.body.append(n)}async flowInitClient(e){return e.init(),new Promise(e=>{const t=setInterval(()=>{Object.keys(ce.Vaadin.Flow.clients).filter(e=>"TypeScript"!==e).reduce((e,t)=>e||ce.Vaadin.Flow.clients[t].isActive(),!1)||(clearInterval(t),e())},5)})}async flowInitUi(e){const t=ce.Vaadin&&ce.Vaadin.TypeScript&&ce.Vaadin.TypeScript.initial;return t?(ce.Vaadin.TypeScript.initial=void 0,Promise.resolve(t)):new Promise((t,n)=>{const r=new XMLHttpRequest,o=`${location.pathname||"/"}?v-r=init`+(e?`&location=${encodeURI(this.getFlowRoute(location))}`:"");r.open("GET",o),r.onerror=()=>n(new Error(`Invalid server response when initializing Flow UI.\n        ${r.status}\n        ${r.responseText}`)),r.onload=()=>{"application/json"===r.getResponseHeader("content-type")?t(JSON.parse(r.responseText)):r.onerror()},r.send()})}showLoading(){this.isActive=!0,ce.Vaadin.Flow.loading(!0)}hideLoading(){this.isActive=!1,ce.Vaadin.Flow.loading(!1)}addLoadingIndicator(){const e=document.createElement("div");e.classList.add("v-loading-indicator"),e.setAttribute("style","none"),document.body.appendChild(e);const t=document.createElement("style");let n,r;t.setAttribute("type","text/css"),t.setAttribute("id","css-loading-indicator"),t.textContent='\n      @keyframes v-progress-start {\n        0% {width: 0%;}\n        100% {width: 50%;}\n      }\n      @keyframes v-progress-delay {\n        0% {width: 50%;}\n        100% {width: 90%;}\n      }\n      @keyframes v-progress-wait {\n        0% {width: 90%; height: 4px;}\n        3% {width: 91%;height: 7px;}\n        100% {width: 96%;height: 7px;}\n      }\n      @keyframes v-progress-wait-pulse {\n        0% {opacity: 1;}\n        50% {opacity: 0.1;}\n        100% {opacity: 1;}\n      }\n      .v-loading-indicator {\n        position: fixed !important;\n        z-index: 99999;\n        left: 0;\n        right: auto;\n        top: 0;\n        width: 50%;\n        opacity: 1;\n        height: 4px;\n        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));\n        pointer-events: none;\n        transition: none;\n        animation: v-progress-start 1000ms 200ms both;\n      }\n      .v-loading-indicator[style*="none"] {\n        display: block !important;\n        width: 100% !important;\n        opacity: 0;\n        animation: none !important;\n        transition: opacity 500ms 300ms, width 300ms;\n      }\n      .v-loading-indicator.second {\n        width: 90%;\n        animation: v-progress-delay 3.8s forwards;\n      }\n      .v-loading-indicator.third {\n        width: 96%;\n        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;\n      }\n    ',document.head.appendChild(t),ce.Vaadin.Flow.loading=t=>{clearTimeout(n),clearTimeout(r),e.classList.remove("second"),e.classList.remove("third"),t?(e.removeAttribute("style"),n=setTimeout(()=>e.classList.add("second"),1500),r=setTimeout(()=>e.classList.add("third"),5e3)):e.setAttribute("style","none")}}}({imports:()=>Promise.all([n.e(3),n.e(5)]).then(n.bind(null,97))}),he=[...le];new te(document.querySelector("#outlet")).setRoutes(he)}});