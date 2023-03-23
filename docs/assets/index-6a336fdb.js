import{L as K,R as W,j as N,A as O,af as V,w as q,M as J,ag as G,ah as Q,z as D,ai as z,v as X}from"./nav-ff02cac3.js";function w(r,t={},e){for(const s in r){const n=r[s],o=e?`${e}:${s}`:s;typeof n=="object"&&n!==null?w(n,t,o):typeof n=="function"&&(t[o]=n)}return t}function Y(r,t){return r.reduce((e,s)=>e.then(()=>s.apply(void 0,t)),Promise.resolve())}function Z(r,t){return Promise.all(r.map(e=>e.apply(void 0,t)))}function T(r,t){for(const e of r)e(t)}class x{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,e,s={}){if(!t||typeof e!="function")return()=>{};const n=t;let o;for(;this._deprecatedHooks[t];)o=this._deprecatedHooks[t],t=o.to;if(o&&!s.allowDeprecated){let i=o.message;i||(i=`${n} hook has been deprecated`+(o.to?`, please use ${o.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(e),()=>{e&&(this.removeHook(t,e),e=void 0)}}hookOnce(t,e){let s,n=(...o)=>(typeof s=="function"&&s(),s=void 0,n=void 0,e(...o));return s=this.hook(t,n),s}removeHook(t,e){if(this._hooks[t]){const s=this._hooks[t].indexOf(e);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,e){this._deprecatedHooks[t]=typeof e=="string"?{to:e}:e;const s=this._hooks[t]||[];this._hooks[t]=void 0;for(const n of s)this.hook(t,n)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const e in t)this.deprecateHook(e,t[e])}addHooks(t){const e=w(t),s=Object.keys(e).map(n=>this.hook(n,e[n]));return()=>{for(const n of s.splice(0,s.length))n()}}removeHooks(t){const e=w(t);for(const s in e)this.removeHook(s,e[s])}callHook(t,...e){return this.callHookWith(Y,t,...e)}callHookParallel(t,...e){return this.callHookWith(Z,t,...e)}callHookWith(t,e,...s){const n=this._before||this._after?{name:e,args:s,context:{}}:void 0;this._before&&T(this._before,n);const o=t(this._hooks[e]||[],s);return o instanceof Promise?o.finally(()=>{this._after&&n&&T(this._after,n)}):(this._after&&n&&T(this._after,n),o)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{const e=this._before.indexOf(t);e!==-1&&this._before.splice(e,1)}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{const e=this._after.indexOf(t);e!==-1&&this._after.splice(e,1)}}}function ee(){return new x}function te(r){return Array.isArray(r)?r:[r]}const re=["title","script","style","noscript"],$=["base","meta","link","style","script","noscript"],se=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],ne=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],oe=["tagPosition","tagPriority","tagDuplicateStrategy"];function L(r,t){const{props:e,tag:s}=r;if(ne.includes(s))return s;if(s==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";const n=["id"];s==="meta"&&n.push("name","property","http-equiv");for(const o of n)if(typeof e[o]<"u"){const i=String(e[o]);return t&&!t(i)?!1:`${s}:${o}:${i}`}return!1}const ie=r=>{r=r||{};const t=r.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:e}){t.forEach(n=>{e.props[n]&&(e.key=e.props[n],delete e.props[n])});const s=e.key?`${e.tag}:${e.key}`:L(e);s&&(e._d=s)},"tags:resolve":function(e){const s={};e.tags.forEach(n=>{let o=n._d||n._p;const i=s[o];if(i){let a=n==null?void 0:n.tagDuplicateStrategy;if(!a&&(n.tag==="htmlAttrs"||n.tag==="bodyAttrs")&&(a="merge"),a==="merge"){const h=i.props;["class","style"].forEach(c=>{n.props[c]&&h[c]&&(c==="style"&&!h[c].endsWith(";")&&(h[c]+=";"),n.props[c]=`${h[c]} ${n.props[c]}`)}),s[o].props={...h,...n.props};return}else n._e===i._e&&(o=n._d=`${o}:${n._p}`);const f=Object.keys(n.props).length;if((f===0||f===1&&typeof n.props["data-h-key"]<"u")&&!n.children){delete s[o];return}}s[o]=n}),e.tags=Object.values(s)}}}};function F(r){let t=9;for(let e=0;e<r.length;)t=Math.imul(t^r.charCodeAt(e++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}const b=(r,t)=>{const{tag:e,$el:s}=r;s&&(Object.entries(e.props).forEach(([n,o])=>{o=String(o);const i=`attr:${n}`;if(n==="class"){if(!o)return;for(const a of o.split(" ")){const f=`${i}:${a}`;t&&t(r,f,()=>s.classList.remove(a)),s.classList.contains(a)||s.classList.add(a)}return}t&&!n.startsWith("data-h-")&&t(r,i,()=>s.removeAttribute(n)),s.getAttribute(n)!==o&&s.setAttribute(n,o)}),re.includes(e.tag)&&s.innerHTML!==(e.children||"")&&(s.innerHTML=e.children||""))};async function ae(r,t={}){var y,E;const e={shouldRender:!0};if(await r.hooks.callHook("dom:beforeRender",e),!e.shouldRender)return;const s=t.document||window.document,n=r._popSideEffectQueue();r.headEntries().map(l=>l._sde).forEach(l=>{Object.entries(l).forEach(([d,u])=>{n[d]=u})});const o=async l=>{const d=r.headEntries().find(v=>v._i===l._e),u={renderId:l._d||F(JSON.stringify({...l,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:l,entry:d,staleSideEffects:n};return await r.hooks.callHook("dom:beforeRenderTag",u),u},i=[],a={body:[],head:[]},f=(l,d,u)=>{d=`${l.renderId}:${d}`,l.entry&&(l.entry._sde[d]=u),delete n[d]},h=l=>{r._elMap[l.renderId]=l.$el,i.push(l),f(l,"el",()=>{var d;(d=l.$el)==null||d.remove(),delete r._elMap[l.renderId]})};for(const l of await r.resolveTags()){const d=await o(l);if(!d.shouldRender)continue;const{tag:u}=d;if(u.tag==="title"){s.title=u.children||"",i.push(d);continue}if(u.tag==="htmlAttrs"||u.tag==="bodyAttrs"){d.$el=s[u.tag==="htmlAttrs"?"documentElement":"body"],b(d,f),i.push(d);continue}if(d.$el=r._elMap[d.renderId],!d.$el&&u._hash&&(d.$el=s.querySelector(`${(y=u.tagPosition)!=null&&y.startsWith("body")?"body":"head"} > ${u.tag}[data-h-${u._hash}]`)),d.$el){d.tag._d&&b(d),h(d);continue}d.$el=s.createElement(u.tag),b(d),a[(E=u.tagPosition)!=null&&E.startsWith("body")?"body":"head"].push(d)}const c={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(a).forEach(([l,d])=>{var v;if(!d.length)return;const u=(v=s==null?void 0:s[l])==null?void 0:v.children;if(u){for(const p of[...u].reverse()){const m=p.tagName.toLowerCase();if(!$.includes(m))continue;const U=L({tag:m,props:p.getAttributeNames().reduce((g,_)=>({...g,[_]:p.getAttribute(_)}),{})}),H=d.findIndex(g=>{var _;return g&&(g.tag._d===U||((_=p.isEqualNode)==null?void 0:_.call(p,g.$el)))});if(H!==-1){const g=d[H];g.$el=p,b(g),h(g),delete d[H]}}d.forEach(p=>{const m=p.tag.tagPosition||"head";c[m]=c[m]||s.createDocumentFragment(),c[m].appendChild(p.$el),h(p)})}}),c.head&&s.head.appendChild(c.head),c.bodyOpen&&s.body.insertBefore(c.bodyOpen,s.body.firstChild),c.bodyClose&&s.body.appendChild(c.bodyClose);for(const l of i)await r.hooks.callHook("dom:renderTag",l);Object.values(n).forEach(l=>l())}let A=null;async function de(r,t={}){function e(){return A=null,ae(r,t)}const s=t.delayFn||(n=>setTimeout(n,10));return A=A||new Promise(n=>s(()=>n(e())))}const ce=r=>({hooks:{"entries:updated":function(t){if(typeof(r==null?void 0:r.document)>"u"&&typeof window>"u")return;let e=r==null?void 0:r.delayFn;!e&&typeof requestAnimationFrame<"u"&&(e=requestAnimationFrame),de(t,{document:(r==null?void 0:r.document)||window.document,delayFn:e})}}}),j={critical:2,high:9,low:12,base:-1,title:1,meta:10};function C(r){if(typeof r.tagPriority=="number")return r.tagPriority;if(r.tag==="meta"){if(r.props.charset)return-2;if(r.props["http-equiv"]==="content-security-policy")return 0}const t=r.tagPriority||r.tag;return t in j?j[t]:10}const le=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function fe(){return{hooks:{"tags:resolve":r=>{const t=e=>{var s;return(s=r.tags.find(n=>n._d===e))==null?void 0:s._p};for(const{prefix:e,offset:s}of le)for(const n of r.tags.filter(o=>typeof o.tagPriority=="string"&&o.tagPriority.startsWith(e))){const o=t(n.tagPriority.replace(e,""));typeof o<"u"&&(n._p=o+s)}r.tags.sort((e,s)=>e._p-s._p).sort((e,s)=>C(e)-C(s))}}}}const M=(r,t)=>r==null?t||null:typeof r=="function"?r(t):r.replace("%s",t??""),ue=()=>({hooks:{"tags:resolve":r=>{const{tags:t}=r;let e=t.findIndex(n=>n.tag==="titleTemplate");const s=t.findIndex(n=>n.tag==="title");if(s!==-1&&e!==-1){const n=M(t[e].children,t[s].children);n!==null?t[s].children=n||t[s].children:delete t[s]}else if(e!==-1){const n=M(t[e].children);n!==null&&(t[e].children=n,t[e].tag="title",e=-1)}e!==-1&&delete t[e],r.tags=t.filter(Boolean)}}}),he=()=>({hooks:{"tag:normalise":function({tag:r}){typeof r.props.body<"u"&&(r.tagPosition="bodyClose",delete r.props.body)}}}),pe=typeof window<"u",ge=()=>({hooks:{"tag:normalise":r=>{var n,o;const{tag:t,entry:e}=r,s=typeof t.props._dynamic<"u";!$.includes(t.tag)||!t.key||(t._hash=F(JSON.stringify({tag:t.tag,key:t.key})),!(pe||(o=(n=B())==null?void 0:n.resolvedOptions)!=null&&o.document)&&(e._m==="server"||s)&&(t.props[`data-h-${t._hash}`]=""))},"tags:resolve":r=>{r.tags=r.tags.map(t=>(delete t.props._dynamic,t))}}}),I=["script","link","bodyAttrs"],ye=()=>{const r=(t,e)=>{const s={},n={};Object.entries(e.props).forEach(([i,a])=>{i.startsWith("on")&&typeof a=="function"?n[i]=a:s[i]=a});let o;return t==="dom"&&e.tag==="script"&&typeof s.src=="string"&&typeof n.onload<"u"&&(o=s.src,delete s.src),{props:s,eventHandlers:n,delayedSrc:o}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(e=>(!I.includes(e.tag)||!Object.entries(e.props).find(([s,n])=>s.startsWith("on")&&typeof n=="function")||(e.props=r("ssr",e).props),e))},"dom:beforeRenderTag":function(t){if(!I.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([o,i])=>o.startsWith("on")&&typeof i=="function"))return;const{props:e,eventHandlers:s,delayedSrc:n}=r("dom",t.tag);Object.keys(s).length&&(t.tag.props=e,t.tag._eventHandlers=s,t.tag._delayedSrc=n)},"dom:renderTag":function(t){const e=t.$el;if(!t.tag._eventHandlers||!e)return;const s=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:e;Object.entries(t.tag._eventHandlers).forEach(([n,o])=>{const i=`${t.tag._d||t.tag._p}:${n}`,a=n.slice(2).toLowerCase(),f=`data-h-${a}`;if(delete t.staleSideEffects[i],e.hasAttribute(f))return;const h=o;e.setAttribute(f,""),s.addEventListener(a,h),t.entry&&(t.entry._sde[i]=()=>{s.removeEventListener(a,h),e.removeAttribute(f)})}),t.tag._delayedSrc&&e.setAttribute("src",t.tag._delayedSrc)}}}};let R;const me=r=>R=r,B=()=>R;async function _e(r,t){const e={tag:r,props:{}};return r==="title"||r==="titleTemplate"?(e.children=t instanceof Promise?await t:t,e):(e.props=await ve({...t}),["children","innerHtml","innerHTML"].forEach(s=>{typeof e.props[s]<"u"&&(e.children=e.props[s],typeof e.children=="object"&&(e.children=JSON.stringify(e.children)),delete e.props[s])}),Object.keys(e.props).filter(s=>oe.includes(s)).forEach(s=>{e[s]=e.props[s],delete e.props[s]}),typeof e.props.class=="object"&&!Array.isArray(e.props.class)&&(e.props.class=Object.keys(e.props.class).filter(s=>e.props.class[s])),Array.isArray(e.props.class)&&(e.props.class=e.props.class.join(" ")),e.props.content&&Array.isArray(e.props.content)?e.props.content.map((s,n)=>{const o={...e,props:{...e.props}};return o.props.content=s,o.key=`${e.props.name||e.props.property}:${n}`,o}):e)}async function ve(r){for(const t of Object.keys(r))r[t]instanceof Promise&&(r[t]=await r[t]),String(r[t])==="true"?r[t]="":String(r[t])==="false"&&delete r[t];return r}const be=10;async function ke(r){const t=[];return Object.entries(r.resolvedInput||r.input).filter(([e,s])=>typeof s<"u"&&se.includes(e)).forEach(([e,s])=>{const n=te(s);t.push(...n.map(o=>_e(e,o)).flat())}),(await Promise.all(t)).flat().map((e,s)=>(e._e=r._i,e._p=(r._i<<be)+s,e))}const He=()=>[ie(),fe(),ue(),ge(),ye(),he()],Te=(r={})=>[ce({document:r==null?void 0:r.document,delayFn:r==null?void 0:r.domDelayFn})];function Ae(r={}){const t=we({...r,plugins:[...Te(r),...(r==null?void 0:r.plugins)||[]]});return me(t),t}function we(r={}){let t=[],e={},s=0;const n=ee();r!=null&&r.hooks&&n.addHooks(r.hooks),r.plugins=[...He(),...(r==null?void 0:r.plugins)||[]],r.plugins.forEach(a=>a.hooks&&n.addHooks(a.hooks));const o=()=>n.callHook("entries:updated",i),i={resolvedOptions:r,headEntries(){return t},get hooks(){return n},use(a){a.hooks&&n.addHooks(a.hooks)},push(a,f){const h={_i:s++,input:a,_sde:{}};return f!=null&&f.mode&&(h._m=f==null?void 0:f.mode),t.push(h),o(),{dispose(){t=t.filter(c=>c._i!==h._i?!0:(e={...e,...c._sde||{}},c._sde={},o(),!1))},patch(c){t=t.map(y=>(y._i===h._i&&(h.input=y.input=c,o()),y))}}},async resolveTags(){const a={tags:[],entries:[...t]};await n.callHook("entries:resolve",a);for(const f of a.entries)for(const h of await ke(f)){const c={tag:h,entry:f};await n.callHook("tag:normalise",c),a.tags.push(c.tag)}return await n.callHook("tags:resolve",a),a.tags},_elMap:{},_popSideEffectQueue(){const a={...e};return e={},a}};return i.hooks.callHook("init",i),i}const $e=["useHead","useTagTitle","useTagBase","useTagMeta","useTagMetaFlat","useSeoMeta","useTagLink","useTagScript","useTagStyle","useTagNoscript","useHtmlAttrs","useBodyAttrs","useTitleTemplate","useServerHead","useServerTagTitle","useServerTagBase","useServerTagMeta","useServerTagMetaFlat","useServerTagLink","useServerTagScript","useServerTagStyle","useServerTagNoscript","useServerHtmlAttrs","useServerBodyAttrs","useServerTitleTemplate"];function Pe(r){return typeof r=="function"?r():D(r)}function k(r,t=""){if(r instanceof Promise)return r;const e=Pe(r);if(!r||!e)return e;if(Array.isArray(e))return e.map(s=>k(s,t));if(typeof e=="object"){let s=!1;const n=Object.fromEntries(Object.entries(e).map(([o,i])=>o==="titleTemplate"||o.startsWith("on")?[o,D(i)]:((typeof i=="function"||z(i))&&(s=!0),[o,k(i,o)])));return s&&$.includes(String(t))&&(n._dynamic=!0),n}return e}const Se=X.startsWith("3"),Ee=typeof window<"u",P="usehead";function S(){return W()&&N(P)||B()}function De(r={}){const t=Ae({...r,domDelayFn:s=>setTimeout(()=>K(()=>s()),10),plugins:[Oe(),...(r==null?void 0:r.plugins)||[]]}),e={install(s){Se&&(s.config.globalProperties.$unhead=t,s.provide(P,t))}};return t.install=e.install,t}const Oe=()=>({hooks:{"entries:resolve":function(r){for(const t of r.entries)t.resolvedInput=k(t.input)}}}),Le=function(r,t){r.mixin({beforeCreate(){const e=this.$options,s=e.provide;e.provide=function(){let n;return typeof s=="function"?n=s.call(this):n=s||{},{...n,[P]:t}}}})};function je(r,t={}){const e=S(),s=O(!1),n=O({});V(()=>{n.value=s.value?{}:k(r)});const o=e.push(n.value,t);return q(n,a=>{o.patch(a)}),W()&&(J(()=>{o.dispose()}),G(()=>{s.value=!0}),Q(()=>{s.value=!1})),o}function Ce(r,t={}){return S().push(r,t)}function Me(r,t={}){var s;const e=S();if(e){const n=Ee||!!((s=e.resolvedOptions)!=null&&s.document);return t.mode==="server"&&n||t.mode==="client"&&!n?void 0:n?je(r,t):Ce(r,t)}}const Fe=r=>Me({htmlAttrs:r}),Ie=["injectHead"];[...Ie,...$e];export{Le as V,Fe as a,De as c,de as d,ae as r,Me as u};
