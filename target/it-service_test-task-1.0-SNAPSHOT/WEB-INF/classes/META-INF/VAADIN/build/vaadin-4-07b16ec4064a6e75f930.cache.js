(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(e,t){!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Date Picker","vaadin-date-picker-flow")};class t{constructor(e){this.initial=e,this.index=0,this.value=0}static compare(e,t){return e.index<t.index?-1:e.index>t.index?1:0}}window.Vaadin.Flow.datepickerConnector={initLazy:n=>e((function(n){if(n.$connector)return;n.$connector={},n.$connector.dayPart=new t("22"),n.$connector.monthPart=new t("11"),n.$connector.yearPart=new t("1987"),n.$connector.parts=[n.$connector.dayPart,n.$connector.monthPart,n.$connector.yearPart];let r="en-us";n.addEventListener("blur",e(e=>{!e.target.value&&e.target.invalid&&console.warn("Invalid value in the DatePicker.")}));const o=e((function(e){return e.replace(/[^\x00-\x7F]/g,"")})),i=e((function(){let e="";try{e=n._inputValue}catch(t){e=n.value||""}return e}));n.$connector.setLocale=e((function(a){try{(new Date).toLocaleDateString(a)}catch(e){a="en-US",console.warn("The locale is not supported, using default locale setting(en-US).")}let c=!1,s=i();"undefined"!==n.i18n.parseDate&&s&&(c=n.i18n.parseDate(s));let l=new Date(Date.UTC(n.$connector.yearPart.initial,n.$connector.monthPart.initial-1,n.$connector.dayPart.initial)),d=o(l.toLocaleDateString(a,{timeZone:"UTC"}));n.$connector.parts.forEach((function(e){e.index=d.indexOf(e.initial)})),n.$connector.parts.sort(t.compare),n.$connector.regex=d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&").replace(n.$connector.dayPart.initial,"(\\d{1,2})").replace(n.$connector.monthPart.initial,"(\\d{1,2})").replace(n.$connector.yearPart.initial,"(\\d{1,4})"),n.i18n.formatDate=e((function(e){let t=n._parseDate(`${e.year}-${e.month+1}-${e.day}`);return t.setHours(12),o(t.toLocaleDateString(a))})),n.i18n.parseDate=e((function(e){if(0==(e=o(e)).length)return;let t=e.match(n.$connector.regex);if(t&&4==t.length){for(let e=1;e<4;e++)n.$connector.parts[e-1].value=parseInt(t[e]);return{day:n.$connector.dayPart.value,month:n.$connector.monthPart.value-1,year:n.$connector.yearPart.value}}return!1})),""===s?r=a:c&&(n._selectedDate=n._parseDate(`${c.year}-${c.month+1}-${c.day}`))}))}))(n)}}()},174:function(e,t){window.Vaadin=window.Vaadin||{},window.Vaadin.Flow=window.Vaadin.Flow||{},window.Vaadin.Flow.dndConnector={__ondragenterListener:function(e){const t=e.currentTarget.__dropEffect;e.currentTarget.hasAttribute("disabled")||(t&&(e.dataTransfer.dropEffect=t),t&&"none"!==t&&(e.currentTarget.classList.contains("v-drag-over-target")?e.currentTarget["__skip-leave"]=!0:e.currentTarget.classList.add("v-drag-over-target"),e.preventDefault(),e.stopPropagation()))},__ondragoverListener:function(e){if(!e.currentTarget.hasAttribute("disabled")){const t=e.currentTarget.__dropEffect;t&&(e.dataTransfer.dropEffect=t),e.preventDefault(),e.stopPropagation()}},__ondragleaveListener:function(e){e.currentTarget["__skip-leave"]?e.currentTarget["__skip-leave"]=!1:e.currentTarget.classList.remove("v-drag-over-target"),e.stopPropagation()},__ondropListener:function(e){const t=e.currentTarget.__dropEffect;t&&(e.dataTransfer.dropEffect=t),e.currentTarget.classList.remove("v-drag-over-target"),e.preventDefault(),e.stopPropagation()},updateDropTarget:function(e){e.__active?(e.addEventListener("dragenter",this.__ondragenterListener,!1),e.addEventListener("dragover",this.__ondragoverListener,!1),e.addEventListener("dragleave",this.__ondragleaveListener,!1),e.addEventListener("drop",this.__ondropListener,!1)):(e.removeEventListener("dragenter",this.__ondragenterListener,!1),e.removeEventListener("dragover",this.__ondragoverListener,!1),e.removeEventListener("dragleave",this.__ondragleaveListener,!1),e.removeEventListener("drop",this.__ondropListener,!1),e.classList.remove("v-drag-over-target"))},__dragstartListener:function(e){e.stopPropagation(),e.dataTransfer.setData("text/plain",""),e.currentTarget.hasAttribute("disabled")?e.preventDefault():(e.currentTarget.__effectAllowed&&(e.dataTransfer.effectAllowed=e.currentTarget.__effectAllowed),e.currentTarget.classList.add("v-dragged"))},__dragendListener:function(e){e.currentTarget.classList.remove("v-dragged")},updateDragSource:function(e){e.draggable?(e.addEventListener("dragstart",this.__dragstartListener,!1),e.addEventListener("dragend",this.__dragendListener,!1)):(e.removeEventListener("dragstart",this.__dragstartListener,!1),e.removeEventListener("dragend",this.__dragendListener,!1))}}},175:function(e,t){!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid Pro","vaadin-grid-pro-flow")};window.Vaadin.Flow.gridProConnector={setEditModeRenderer:(t,n)=>e((function(t,n){t.editModeRenderer=e((function(e){e.appendChild(n),this._grid._cancelStopEdit(),n.focus()})),t._setEditorValue=function(e,t){},t._getEditorValue=function(e){}}))(t,n),patchEditModeRenderer:t=>e((function(t){t.__editModeRenderer=e((function(e,t,n){const r=e.assignedSlot.parentNode,o=t._grid;if(o.__edited&&o.__edited.model.item.key!==n.item.key)return void o._stopEdit();const i=t._getEditorTagName(r);e.firstElementChild&&e.firstElementChild.localName.toLowerCase()===i||(e.innerHTML=`<${i}></${i}>`)}))}))(t)}}()},176:function(e,t){window.Vaadin.Flow.menubarConnector={initLazy:function(e){var t;e.$connector||(e.$connector={updateButtons:(t=function(){e.shadowRoot?(e.items.forEach(e=>e.disabled=e.component.disabled),e.items=e.items.filter(e=>!e.component.hidden),e._buttons.forEach(e=>{e.item&&e.item.component&&e.addEventListener("click",t=>{-1===t.composedPath().indexOf(e.item.component)&&e.item.component.click()})})):setTimeout(()=>e.$connector.updateButtons())},window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Menu Bar","vaadin-menu-bar-flow"))})}}},177:function(e,t){!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Select","vaadin-select-flow")};window.Vaadin.Flow.selectConnector={initLazy:t=>e((function(t){const n=e((function(){for(let e=0;e<t.childElementCount;e++){const n=t.children[e];if("VAADIN-LIST-BOX"===n.tagName.toUpperCase())return n}}));t.$connector||(t.$connector={},t.renderer=e((function(e){const t=n();t&&(e.firstChild&&e.removeChild(e.firstChild),e.appendChild(t))})))}))(t)}}()},178:function(e,t){!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Time Picker","vaadin-time-picker-flow")};window.Vaadin.Flow.timepickerConnector={initLazy:t=>e((function(t){if(t.$connector)return;t.$connector={};const n=function(e,t){const n=t.toLocaleTimeString(e);let r=n.match(/[^\d\u0660-\u0669]+$/g);return r||(r=n.match(/^[^\d\u0660-\u0669]+/g)),r&&(r=r[0].trim()),r},r=new Date("August 19, 1975 23:15:30"),o=new Date("August 19, 1975 05:15:30"),i={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"},a=function(e){return e.replace(/[\u0660-\u0669]/g,(function(e){const t="\\u0"+e.charCodeAt(0).toString(16);return i[t]}))},c=function(e){return parseInt(a(e))},s=/[[\.][\d\u0660-\u0669]{1,3}$/;t.$connector.setLocale=e((function(i){let l;t.value&&""!==t.value&&(l=t.i18n.parseTime(t.value));try{r.toLocaleTimeString(i)}catch(e){throw i="en-US",new Error("vaadin-time-picker: The locale "+i+" is not supported, falling back to default locale setting(en-US).")}const d=function(e){return n(e,r)}(i),u=function(e){return n(e,o)}(i);let f=r.toLocaleTimeString(i);d&&f.startsWith(d)&&(f=f.replace(d,""));const h=f.match(/[^\u0660-\u0669\s\d]/),m=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+h+")?","g"),p=function(){return t.step&&t.step<1};let g,v;let _,y;t.i18n={formatTime:e((function(e){if(e){let n=new Date;n.setHours(e.hours),n.setMinutes(e.minutes),n.setSeconds(void 0!==e.seconds?e.seconds:0);let r=n.toLocaleTimeString(i,(v&&g===t.step||(v={hour:"numeric",minute:"numeric",second:t.step&&t.step<60?"numeric":void 0},g=t.step),v));return r=function(e,t){if(p()){let n=e;if(e.endsWith(u)?n=e.replace(" "+u,""):e.endsWith(d)&&(n=e.replace(" "+d,"")),t){let e=t<10?"0":"";e+=t<100?"0":"",e+=t,n+="."+e}else n+=".000";return e.endsWith(u)?n=n+" "+u:e.endsWith(d)&&(n=n+" "+d),n}return e}(r,e.milliseconds),r}})),parseTime:e((function(e){if(e&&e===_&&y)return y;if(e){const n=e.search(d),r=e.search(u);let o=e.replace(u,"").replace(d,"").trim();m.lastIndex=0;let i=m.exec(o);if(i){i=c(i[0].replace(h,"")),n!==r&&(12===i&&-1!==r?i=0:i+=-1!==n&&12!==i?12:0);const l=m.exec(o),d=l&&m.exec(o);let u=d&&p()&&s.exec(o);return u&&u.index<=d.index&&(u=void 0),y=void 0!==i&&{hours:i,minutes:l?c(l[0].replace(h,"")):0,seconds:d?c(d[0].replace(h,"")):0,milliseconds:l&&d&&u?(t=u[0].replace(".",""),1===(t=a(t)).length?t+="00":2===t.length&&(t+="0"),parseInt(t)):0},_=e,y}}var t}))},l&&function e(t,n,r=0){t()?n():setTimeout(()=>e(t,n,200),r)}(()=>t.shadowRoot,()=>{const e=t.i18n.formatTime(l);t.__inputElement.value!==e&&(t.__inputElement.value=e,t.__dropdownElement.value=e,t.__onInputChange())})}))}))(t)}}()},233:function(e,t,n){"use strict";n.r(t),n.d(t,"addCssBlock",(function(){return h}));n(81),n(85),n(39);var r=n(24);!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu","vaadin-context-menu-flow")};window.Vaadin.Flow.contextMenuConnector={init:t=>e((function(t){t.$contextMenuConnector||(t.$contextMenuConnector={openOnHandler:e((function(e){e.preventDefault(),e.stopPropagation(),this.$contextMenuConnector.openEvent=e;let n={};t.getContextMenuBeforeOpenDetail&&(n=t.getContextMenuBeforeOpenDetail(e)),t.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:n}))})),updateOpenOn:e((function(n){this.removeListener(),this.openOnEventType=n,customElements.whenDefined("vaadin-context-menu").then(e(()=>{r.b[n]?r.a(t,n,this.openOnHandler):t.addEventListener(n,this.openOnHandler)}))})),removeListener:e((function(){this.openOnEventType&&(r.b[this.openOnEventType]?r.e(t,this.openOnEventType,this.openOnHandler):t.removeEventListener(this.openOnEventType,this.openOnHandler))})),openMenu:e((function(e){e.open(this.openEvent)})),removeConnector:e((function(){this.removeListener(),t.$contextMenuConnector=void 0}))})}))(t),generateItems:(t,n,r)=>e((function(e,t,n){e._containerNodeId=n;const r=function(e){const n=function(e){try{return window.Vaadin.Flow.clients[t].getByNodeId(e)}catch(n){console.error("Could not get node %s from app %s",e,t),console.error(n)}}(e._containerNodeId);return n&&Array.from(n.children).map(e=>{const t={component:e,checked:e._checked};return"VAADIN-CONTEXT-MENU-ITEM"==e.tagName&&e._containerNodeId&&(t.children=r(e)),e._item=t,t})},o=r(e);e.items=o}))(t,n,r),setChecked:(t,n)=>e((function(e,t){e._item&&(e._item.checked=t)}))(t,n)}}();n(173),n(174),n(20);var o=n(1),i=n(4);class a extends i.a{static get template(){return o.a`
   <a id="download-link"></a> 
`}static get is(){return"file-download-wrapper"}static get properties(){return{}}}customElements.define(a.is,a);var c=n(5),s=n(3),l=n(118),d=n(129);!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid","vaadin-grid-flow")};window.Vaadin.Flow.gridConnector={initLazy:t=>e((function(t){if(t.$connector)return;d.b.prototype.ensureSubCacheForScaledIndex=e((function(e){this.itemCaches[e]||(i?this.grid.$connector.beforeEnsureSubCacheForScaledIndex(this,e):this.doEnsureSubCacheForScaledIndex(e))})),d.b.prototype.doEnsureSubCacheForScaledIndex=e((function(e){if(!this.itemCaches[e]){const t=new d.b.prototype.constructor(this.grid,this,this.items[e]);t.itemkeyCaches={},this.itemkeyCaches||(this.itemkeyCaches={}),this.itemCaches[e]=t,this.itemkeyCaches[this.grid.getItemId(t.parentItem)]=t,this.grid._loadPage(0,t)}})),d.b.prototype.getCacheAndIndexByKey=e((function(e){for(let n in this.items)if(t.getItemId(this.items[n])===e)return{cache:this,scaledIndex:n};const n=Object.keys(this.itemkeyCaches);for(let t=0;t<n.length;t++){const r=n[t];let o=this.itemkeyCaches[r].getCacheAndIndexByKey(e);if(o)return o}})),d.b.prototype.getLevel=e((function(){let e=this,t=0;for(;e.parentCache;)e=e.parentCache,t++;return t}));const n={},r={},o={},i=!0;let a,u,f=[],h=[],m={};const p="null";m[p]=[0,0];const g=["SINGLE","NONE","MULTI"];let v={},_="SINGLE",y=!0,I=!1;t.size=0,t.itemIdPath="key",t.$connector={},t.$connector.hasEnsureSubCacheQueue=e((function(){return h.length>0})),t.$connector.hasParentRequestQueue=e((function(){return f.length>0})),t.$connector.beforeEnsureSubCacheForScaledIndex=e((function(e,n){h.push({cache:e,scaledIndex:n,itemkey:t.getItemId(e.items[n]),level:e.getLevel()}),h.sort((function(e,t){return e.scaledIndex-t.scaledIndex||e.level-t.level})),u||t.$connector.flushQueue(e=>u=e,()=>t.$connector.hasEnsureSubCacheQueue(),()=>t.$connector.flushEnsureSubCache(),e=>c.a.debounce(u,s.a,e))})),t.$connector.doSelection=e((function(e,n){"NONE"===_||!e.length||n&&t.hasAttribute("disabled")||("SINGLE"===_&&(t.selectedItems=[],v={}),t.selectedItems=t.selectedItems.concat(e),e.forEach(e=>{e&&(v[e.key]=e,n&&(e.selected=!0,t.$server.select(e.key)));const r=!t.activeItem||!e||e.key!=t.activeItem.key;!n&&"SINGLE"===_&&r&&(t.activeItem=e,t.$connector.activeItem=e)}))})),t.$connector.doDeselection=e((function(e,n){if("NONE"===_||!e.length||n&&t.hasAttribute("disabled"))return;const r=t.selectedItems.slice();for(;e.length;){const o=e.shift();for(let e=0;e<r.length;e++){const t=r[e];if(o&&o.key===t.key){r.splice(e,1);break}}o&&(delete v[o.key],n&&(delete o.selected,t.$server.deselect(o.key)))}t.selectedItems=r})),t.__activeItemChanged=e((function(e,n){"SINGLE"==_&&(e?v[e.key]||t.$connector.doSelection([e],!0):n&&v[n.key]&&(t.$connector.deselectAllowed?t.$connector.doDeselection([n],!0):t.activeItem=n))})),t._createPropertyObserver("activeItem","__activeItemChanged",!0),t.__activeItemChangedDetails=e((function(e,n){y&&(null==e&&void 0===n||(e&&!e.detailsOpened?t.$server.setDetailsVisible(e.key):t.$server.setDetailsVisible(null)))})),t._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),t.$connector.setDetailsVisibleOnClick=e((function(e){y=e})),t.$connector._getPageIfSameLevel=e((function(e,n,r){let o=t._cache.getCacheAndIndex(n),i=o.cache.parentItem;return e!==(i?t.getItemId(i):p)?r:t._getPageForIndex(o.scaledIndex)})),t.$connector.getCacheByKey=e((function(e){let n=t._cache.getCacheAndIndexByKey(e);if(n)return n.cache})),t.$connector.flushQueue=e((function(e,n,r,o){n()?r()?e(o(()=>t.$connector.flushQueue(e,n,r,o))):t.$connector.flushQueue(e,n,r,o):e(void 0)})),t.$connector.flushEnsureSubCache=e((function(){let e=h.splice(0,1)[0],n=e.itemkey,r=t._virtualStart,o=t._virtualEnd,i=o-r,a=Math.max(0,r+t._vidxOffset-i),c=Math.min(o+t._vidxOffset+i,t._effectiveSize);for(let r=a;r<=c;r++){let o=t._cache.getItemForIndex(r);if(t.getItemId(o)===n){if(t._isExpanded(o))return e.cache.doEnsureSubCacheForScaledIndex(e.scaledIndex),!0;break}}return!1})),t.$connector.flushParentRequests=e((function(){let e=f.splice(0,20);return!!e.length&&(t.$server.setParentRequestedRanges(e),!0)})),t.$connector.beforeParentRequest=e((function(e,n,r){f.push({firstIndex:e,size:n,parentKey:r}),a||t.$connector.flushQueue(e=>a=e,()=>t.$connector.hasParentRequestQueue(),()=>t.$connector.flushParentRequests(),e=>c.a.debounce(a,s.d.after(20),e))})),t.$connector.fetchPage=e((function(e,n,r){let o=t._virtualStart,i=t._virtualEnd,a=i-o,c=Math.max(0,o+t._vidxOffset-a),s=Math.min(i+t._vidxOffset+a,t._effectiveSize),l=n,d=n;for(let e=c;e<=s;e++)l=Math.min(l,t.$connector._getPageIfSameLevel(r,e,l)),d=Math.max(d,t.$connector._getPageIfSameLevel(r,e,d));let u=Math.max(0,l),f=r!==p?d:Math.min(d,Math.floor(t.size/t.pageSize)),h=m[r];if(h||(h=[-1,-1]),h[0]!=u||h[1]!=f){h=[u,f],m[r]=h;let n=f-u+1;e(u*t.pageSize,n*t.pageSize)}})),t.dataProvider=e((function(e,i){if(e.pageSize!=t.pageSize)throw"Invalid pageSize";let a=e.page;if(e.parentItem){let n=t.getItemId(e.parentItem);r[n]||(r[n]={});let c=t.$connector.getCacheByKey(n),s=c&&c.itemkeyCaches?c.itemkeyCaches[n]:void 0;o[n]&&o[n][a]&&s?(a=Math.min(a,Math.floor(o[n].size/t.pageSize)),i(o[n][a],o[n].size)):r[n][a]=i,t.$connector.fetchPage((n,r)=>t.$connector.beforeParentRequest(n,r,e.parentItem.key),a,n)}else a=Math.min(a,Math.floor(t.size/t.pageSize)),o[p]&&o[p][a]?i(o[p][a]):n[a]=i,t.$connector.fetchPage((e,n)=>t.$server.setRequestedRange(e,n),a,p)}));const $=e((function(e,n){void 0===n||I||t.$server.sortersChanged(t._sorters.map((function(e){return{path:e.path,direction:e.direction}})))}));t.$connector.setSorterDirections=e((function(n){I=!0,setTimeout(e(()=>{try{t.querySelectorAll("vaadin-grid-sorter").forEach(e=>e.direction=null);for(let e=n.length-1;e>=0;e--){const r=n[e].column;let o=t.querySelector("vaadin-grid-sorter[path='"+r+"']");o&&(o.direction=n[e].direction)}}finally{I=!1}}))})),t._createPropertyObserver("_previousSorters",$),t._updateItem=e((function(e,n){l.a.prototype._updateItem.call(t,e,n),e.hidden||Array.from(e.children).forEach(e=>{e._instance&&e._instance.children&&Array.from(e._instance.children).forEach(e=>{e._attachRenderedComponentIfAble&&e._attachRenderedComponentIfAble(),e.children&&Array.from(e.children).forEach(e=>{e._attachRenderedComponentIfAble&&e._attachRenderedComponentIfAble()})})})})),t._expandedInstanceChangedCallback=e((function(e,n){if(null==e.item||null==t.$server.updateExpandedState)return;let r=t.getItemId(e.item);if(t.$server.updateExpandedState(r,n),n)this.expandItem(e.item);else{delete o[r];let n=t.$connector.getCacheByKey(r);n&&n.itemkeyCaches&&n.itemkeyCaches[r]&&delete n.itemkeyCaches[r],n&&n.itemkeyCaches&&Object.keys(n.itemCaches).filter(e=>n.items[e].key===r).forEach(e=>delete n.itemCaches[e]),delete m[r],this.collapseItem(e.item)}}));const w=function(e){if(!e||!Array.isArray(e))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(e);let n=Array.from(t.detailsOpenedItems),r=!1;for(let o=0;o<e.length;++o){const i=e[o];i&&(i.detailsOpened?t._getItemIndexInArray(i,n)<0&&n.push(i):t._getItemIndexInArray(i,n)>=0&&n.splice(t._getItemIndexInArray(i,n),1),v[i.key]&&(v[i.key]=i,i.selected=!0,r=!0))}t.detailsOpenedItems=n,r&&(t.selectedItems=Object.keys(v).map((function(e){return v[e]})))},E=function(e,i){let a;if((i||p)!==p){a=o[i][e];let n=t.$connector.getCacheByKey(i);if(n&&n.itemkeyCaches){let t=n.itemkeyCaches[i];C(e,a,r[i][e],t)}}else a=o[p][e],C(e,a,n[e],t._cache);return a},C=function(e,n,r,o){if(!r){let r=e*t.pageSize,i=r+t.pageSize;if(n){if(o&&o.items)for(let e=r;e<i;e++)o.items[e]&&(o.items[e]=n[e-r])}else if(o&&o.items)for(let e=r;e<i;e++)delete o.items[e]}},k=function(){t._cache.updateSize(),t._effectiveSize=t._cache.effectiveSize,t._assignModels()},x=function(e){if(!e||!t._physicalItems)return;const n=e.map(e=>e.key),r=t._physicalItems.map((e,t)=>e._item&&e._item.key&&n.indexOf(e._item.key)>-1?t:null).filter(e=>null!==e);r.length>0&&t._assignModels(r)};t.$connector.set=e((function(e,n,r){if(e%t.pageSize!=0)throw"Got new data to index "+e+" which is not aligned with the page size of "+t.pageSize;let i=r||p;const a=e/t.pageSize,c=Math.ceil(n.length/t.pageSize);for(let e=0;e<c;e++){let r=a+e,c=n.slice(e*t.pageSize,(e+1)*t.pageSize);o[i]||(o[i]={}),o[i][r]=c,t.$connector.doSelection(c.filter(e=>e.selected&&!b(e))),t.$connector.doDeselection(c.filter(e=>!e.selected&&(v[e.key]||b(e))));const s=E(r,i);s&&(w(s),x(s))}}));const S=function(e){let n=e.parentUniqueKey||p;if(o[n])for(let r in o[n])for(let i in o[n][r])if(t.getItemId(o[n][r][i])===t.getItemId(e))return{page:r,index:i,parentKey:n};return null};t.$connector.updateHierarchicalData=e((function(e){let t=[];for(let n=0;n<e.length;n++){let r=S(e[n]);if(r){o[r.parentKey][r.page][r.index]=e[n];let i=r.parentKey+":"+r.page;t[i]||(t[i]={parentKey:r.parentKey,page:r.page})}}let n=Object.keys(t);for(let e=0;e<n.length;e++){let r=t[n[e]];const o=E(r.page,r.parentKey);o&&(w(o),x(o))}})),t.$connector.updateFlatData=e((function(e){for(let n=0;n<e.length;n++){let r=S(e[n]);if(r){o[r.parentKey][r.page][r.index]=e[n];const i=parseInt(r.page)*t.pageSize+parseInt(r.index);t._cache.items[i]&&(t._cache.items[i]=e[n])}}w(e),x(e)})),t.$connector.clearExpanded=e((function(){t.expandedItems=[],h=[],f=[]})),t.$connector.clear=e((function(e,n,r){let i=r||p;if(!o[i]||0===Object.keys(o[i]).length)return;if(e%t.pageSize!=0)throw"Got cleared data for index "+e+" which is not aligned with the page size of "+t.pageSize;let a=Math.floor(e/t.pageSize),c=Math.ceil(n/t.pageSize);for(let e=0;e<c;e++){let n=a+e,c=o[i][n];t.$connector.doDeselection(c.filter(e=>v[e.key])),delete o[i][n];const s=E(n,r);s&&w(s),x(c)}}));const b=function(e){const n=t.selectedItems;for(let t=0;t<n;t++){if(n[t].key===e.key)return!0}return!1};t.$connector.reset=e((function(){t.size=0,L(o),L(t._cache.items),L(m),u&&u.cancel(),a&&a.cancel(),u=void 0,a=void 0,h=[],f=[],k()}));const L=function(e){let t=Object.keys(e);for(let n=0;n<t.length;n++)delete e[t[n]]};t.$connector.updateSize=function(e){t.size=e},t.$connector.updateUniqueItemIdPath=function(e){t.itemIdPath=e},t.$connector.expandItems=e((function(e){let n=Array.from(t.expandedItems);e.filter(e=>!t._isExpanded(e)).forEach(e=>n.push(e)),t.expandedItems=n})),t.$connector.collapseItems=e((function(e){let n=Array.from(t.expandedItems);e.forEach(e=>{let r=t._getItemIndexInArray(e,n);r>=0&&n.splice(r,1)}),t.expandedItems=n,e.forEach(e=>t.$connector.removeFromQueue(e))})),t.$connector.removeFromQueue=e((function(e){let n=t.getItemId(e);delete r[n],t.$connector.removeFromArray(h,e=>e.itemkey===n),t.$connector.removeFromArray(f,e=>e.parentKey===n)})),t.$connector.removeFromArray=e((function(e,t){if(e.length)for(let n=e.length-1;n--;)t(e[n])&&e.splice(n,1)})),t.$connector.confirmParent=e((function(e,n,i){if(!r[n])return;o[n]&&(o[n].size=i);let a=Object.getOwnPropertyNames(r[n]);for(let e=0;e<a.length;e++){let t=a[e],c=m[n]||[0,0];if(o[n]&&o[n][t]||t<c[0]||t>c[1]){let e=r[n][t];delete r[n][t],e(o[n][t]||new Array(i),i)}}t.$server.confirmParentUpdate(e,n)})),t.$connector.confirm=e((function(e){let r=Object.getOwnPropertyNames(n);for(let e=0;e<r.length;e++){let i=r[e],a=m[p]||[0,0];if(o[p]&&o[p][i]||i<a[0]||i>a[1]){let e=n[i];delete n[i],e(o[p][i]||new Array(t.pageSize)),t._debounceIncreasePool&&t._debounceIncreasePool.flush()}}t.$server.confirmUpdate(e)})),t.$connector.ensureHierarchy=e((function(){for(let e in o)e!==p&&delete o[e];L(m),t._cache.itemCaches={},t._cache.itemkeyCaches={},k()})),t.$connector.setSelectionMode=e((function(e){if(!(("string"==typeof e||e instanceof String)&&g.indexOf(e)>=0))throw"Attempted to set an invalid selection mode";_=e,v={}})),t.$connector.deselectAllowed=!0,t.$connector.setVerticalScrollingEnabled=e((function(e){D(t.$.table,e),D(t.$.outerscroller,e),t.notifyResize()}));const D=function(t,n){t.style.overflowY=n?"":"hidden",t.removeEventListener("wheel",t.__wheelListener),!n&&t.addEventListener("wheel",t.__wheelListener=e(e=>{e.deltaX?Object.defineProperty(e,"deltaY",{value:0}):e.stopImmediatePropagation()}))};function T(e,n){if(t.$connector.activeItem){e.itemKey=t.$connector.activeItem.key;const r=t.getEventContext(e);r.column&&(e.internalColumnId=r.column._flowId),t.dispatchEvent(new CustomEvent(n,{detail:e}))}}t.addEventListener("vaadin-context-menu-before-open",e((function(e){!function(e){const n=t.getEventContext(e),r=n.item&&n.item.key,o=n.column&&n.column.id;t.$server.updateContextMenuTargetItem(r,o)}(t.$contextMenuConnector.openEvent)}))),t.getContextMenuBeforeOpenDetail=e((function(e){const n=t.getEventContext(e);return{key:n.item&&n.item.key||""}})),t.addEventListener("cell-activate",e(e=>{t.$connector.activeItem=e.detail.model.item,setTimeout(()=>t.$connector.activeItem=void 0)})),t.addEventListener("click",e(e=>T(e,"item-click"))),t.addEventListener("dblclick",e(e=>T(e,"item-double-click"))),t.addEventListener("column-resize",e(e=>{t._getColumnsInOrder().filter(e=>!e.hidden).forEach(e=>{e.dispatchEvent(new CustomEvent("column-drag-resize"))}),t.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:e.detail.resizedColumn._flowId}}))})),t.addEventListener("column-reorder",e(e=>{const n=t._columnTree.slice(0).pop().filter(e=>e._flowId).sort((e,t)=>e._order-t._order).map(e=>e._flowId);t.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:n}}))})),t.cellClassNameGenerator=e((function(e,t){const n=t.item.style;if(n)return(n.row||"")+" "+(e&&n[e._flowId]||"")})),t.dropFilter=e(e=>!e.item.dropDisabled),t.dragFilter=e(e=>!e.item.dragDisabled),t.addEventListener("grid-dragstart",e(e=>{t._isSelected(e.detail.draggedItems[0])?(t.__selectionDragData?Object.keys(t.__selectionDragData).forEach(n=>{e.detail.setDragData(n,t.__selectionDragData[n])}):(t.__dragDataTypes||[]).forEach(t=>{e.detail.setDragData(t,e.detail.draggedItems.map(e=>e.dragData[t]).join("\n"))}),t.__selectionDraggedItemsCount>1&&e.detail.setDraggedItemsCount(t.__selectionDraggedItemsCount)):(t.__dragDataTypes||[]).forEach(t=>{e.detail.setDragData(t,e.detail.draggedItems[0].dragData[t])})}))}))(t)}}();n(175);window.Vaadin.Flow.ironListConnector={initLazy:function(e){if(e.$connector)return;let t=[0,0];e.$connector={},e.$connector.placeholderItem={__placeholder:!0};const n=function(){let n=e._virtualStart,r=e._virtualEnd,o=Math.max(0,n-20),i=Math.min(r+20,e.items.length);if(t[0]!=o||t[1]!=i){t=[o,i];const n=1+i-o;e.$server.setRequestedRange(o,n)}};let r;const o=function(){r=c.a.debounce(r,s.d.after(10),n)},i=e._assignModels;e._assignModels=function(){const t=[],n=e._virtualStart,r=Math.min(e.items.length,e._physicalCount);for(let o=0;o<r;o++)void 0===e.items[n+o]&&(t.push(o),e.items[n+o]=e.$connector.placeholderItem);i.apply(e,arguments);for(let r=0;r<t.length;r++)delete e.items[n+t[r]];o()},e.items=[],e.$connector.set=function(t,n){for(let r=0;r<n.length;r++){const o=t+r;e.items[o]=n[r]}e._render()},e.$connector.updateData=function(t){const n=e.items,r={};let o=t.length;for(let e=0;e<t.length;e++){const n=t[e];r[n.key]=n}for(let t=0;t<n.length;t++){const i=r[n[t].key];if(i&&(e.items[t]=i,e.notifyPath("items."+t),o--,0==o))break}},e.$connector.clear=function(t,n){for(let r=0;r<n;r++){const n=t+r;delete e.items[n],e.notifyPath("items."+n)}},e.$connector.updateSize=function(t){const n=t-e.items.length;if(n>0)e.items.length=t,e.notifySplices("items",[{index:t-n,removed:[],addedCount:n,object:e.items,type:"splice"}]);else if(n<0){const n=e.items.slice(t,e.items.length);e.items.splice(t),e.notifySplices("items",[{index:t,removed:n,addedCount:0,object:e.items,type:"splice"}])}},e.$connector.setPlaceholderItem=function(t){t||(t={}),t.__placeholder=!0,e.$connector.placeholderItem=t}}};n(27);const u=document.createElement("template");u.innerHTML="<style>\n/* Fixes zero width in flex layouts */\niron-list {\n  flex: auto;\n  align-self: stretch;\n}\n</style>",document.head.appendChild(u.content);n(176),n(177),n(178),n(179);var f=n(109);{class e extends f.b{static get template(){return o.a`
    <template class="header" id="defaultHeaderTemplate">
      <vaadin-checkbox id="selectAllCheckbox" aria-label="Select All" hidden\$="[[selectAllHidden]]" on-click="_onSelectAllClick" checked="[[selectAll]]">
      </vaadin-checkbox>
    </template>
    <template id="defaultBodyTemplate">
      <vaadin-checkbox aria-label="Select Row" checked="[[selected]]" on-click="_onSelectClick">
      </vaadin-checkbox>
    </template>
`}static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},selectAllHidden:Boolean}}constructor(){super(),this._boundOnSelectEvent=this._onSelectEvent.bind(this),this._boundOnDeselectEvent=this._onDeselectEvent.bind(this)}_prepareHeaderTemplate(){return this._prepareTemplatizer(this.$.defaultHeaderTemplate)}_prepareBodyTemplate(){return this._prepareTemplatizer(this.$.defaultBodyTemplate)}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("select",this._boundOnSelectEvent),this._grid.addEventListener("deselect",this._boundOnDeselectEvent))}disconnectedCallback(){if(super.disconnectedCallback(),this._grid){if(this._grid.removeEventListener("select",this._boundOnSelectEvent),this._grid.removeEventListener("deselect",this._boundOnDeselectEvent),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.ShadyDOM&&this.parentElement){const e=this.parentElement,t=this.nextElementSibling;e.removeChild(this),t?e.insertBefore(this,t):e.appendChild(this)}}}_onSelectClick(e){e.target.checked?this._grid.$connector.doDeselection([e.model.item],!0):this._grid.$connector.doSelection([e.model.item],!0),e.target.checked=!e.target.checked}_onSelectAllClick(e){e.preventDefault(),this._grid.hasAttribute("disabled")?e.target.checked=!e.target.checked:this.selectAll?this.$server.deselectAll():this.$server.selectAll()}_onSelectEvent(e){}_onDeselectEvent(e){e.detail.userOriginated&&(this.selectAll=!1)}}customElements.define(e.is,e),Vaadin.GridFlowSelectionColumnElement=e}n(201),n(202),n(207),n(180),n(208),n(209),n(210),n(112),n(125),n(163),n(223),n(142),n(196),n(166),n(157),n(197),n(183),n(126),n(211),n(164),n(198),n(204),n(184),n(131),n(165),n(212),n(143),n(224),n(76),n(120),n(161),n(203),n(194),n(213),n(214),n(215),n(90),n(168),n(216),n(200),n(167),n(217),n(169),n(218),n(219),n(225),n(170),n(127),n(220),n(160),n(88);const h=function(e,t=!1){const n=document.createElement("template");n.innerHTML=e,document.head[t?"insertBefore":"appendChild"](n.content,document.head.firstChild)}}}]);