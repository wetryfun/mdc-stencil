let e,t,n=!1,l=!1,o=!1,s=!1;const r="http://www.w3.org/1999/xlink",i=new WeakMap,c=e=>"sc-"+e,a={},f=e=>"object"==(e=typeof e)||"function"===e,u=(e,t,...n)=>{let l=null,o=null,s=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!f(l))&&(l=String(l)),r&&i?c[c.length-1].t+=l:c.push(r?d(null,l):l),i=r)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,p);const u=d(e,null);return u.l=t,c.length>0&&(u.o=c),u.s=o,u.i=s,u},d=(e,t)=>({u:0,p:e,t,$:null,o:null,l:null,s:null,i:null}),m={},p={forEach:(e,t)=>e.map($).forEach(t),map:(e,t)=>e.map($).map(t).map(w)},$=e=>({vattrs:e.l,vchildren:e.o,vkey:e.s,vname:e.i,vtag:e.p,vtext:e.t}),w=e=>{const t=d(e.vtag,e.vtext);return t.l=e.vattrs,t.o=e.vchildren,t.s=e.vkey,t.i=e.vname,t},h=(e,t,n,l,o,s)=>{if(n===l)return;let i=te(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=b(n),s=b(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const u=f(l);if((i||u&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(a){}let d=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,d=!0),null==l||!1===l?d?e.removeAttributeNS(r,t):e.removeAttribute(t):(!i||4&s||o)&&!u&&(l=!0===l?"":l,d?e.setAttributeNS(r,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):te(G,c)?c.slice(2):c[2]+t.slice(3),n&&J.rel(e,t,n,!1),l&&J.ael(e,t,l,!1)},y=/\s/,b=e=>e?e.split(y):[],v=(e,t,n,l)=>{const o=11===t.$.nodeType&&t.$.host?t.$.host:t.$,s=e&&e.l||a,r=t.l||a;for(l in s)l in r||h(o,l,s[l],void 0,n,t.u);for(l in r)h(o,l,s[l],r[l],n,t.u)},g=(l,r,i)=>{let c,a,f,u=r.o[i],d=0;if(n||(o=!0,"slot"===u.p&&(u.u|=u.o?2:1)),null!==u.t)c=u.$=I.createTextNode(u.t);else if(1&u.u)c=u.$=I.createTextNode("");else{if(s||(s="svg"===u.p),c=u.$=I.createElementNS(s?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&u.u?"slot-fb":u.p),s&&"foreignObject"===u.p&&(s=!1),v(null,u,s),u.o)for(d=0;d<u.o.length;++d)a=g(l,u,d),a&&c.appendChild(a);"svg"===u.p?s=!1:"foreignObject"===c.tagName&&(s=!0)}return c["s-hn"]=t,3&u.u&&(c["s-sr"]=!0,c["s-cr"]=e,c["s-sn"]=u.i||"",f=l&&l.o&&l.o[i],f&&f.p===u.p&&l.$&&_(l.$,!1)),c},_=(e,n)=>{J.u|=1;const l=e.childNodes;for(let s=l.length-1;s>=0;s--){const e=l[s];e["s-hn"]!==t&&e["s-ol"]&&(O(e).insertBefore(e,S(e)),e["s-ol"].remove(),e["s-ol"]=void 0,o=!0),n&&_(e,n)}J.u&=-2},j=(e,t,n,l,o,s)=>{let r,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(;o<=s;++o)l[o]&&(r=g(null,n,o),r&&(l[o].$=r,i.insertBefore(r,S(t))))},k=(e,t,n,o,s)=>{for(;t<=n;++t)(o=e[t])&&(s=o.$,L(o),l=!0,s["s-ol"]?s["s-ol"].remove():_(s,!0),s.remove())},M=(e,t)=>e.p===t.p&&("slot"===e.p?e.i===t.i:e.s===t.s),S=e=>e&&e["s-ol"]||e,O=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,R=(e,t)=>{const n=t.$=e.$,l=e.o,o=t.o;let r;s=n&&n.parentNode&&void 0!==n.ownerSVGElement,s="svg"===t.p||"foreignObject"!==t.p&&s,null===t.t?("slot"===t.p||v(e,t,s),null!==l&&null!==o?((e,t,n,l)=>{let o,s,r=0,i=0,c=0,a=0,f=t.length-1,u=t[0],d=t[f],m=l.length-1,p=l[0],$=l[m];for(;r<=f&&i<=m;)if(null==u)u=t[++r];else if(null==d)d=t[--f];else if(null==p)p=l[++i];else if(null==$)$=l[--m];else if(M(u,p))R(u,p),u=t[++r],p=l[++i];else if(M(d,$))R(d,$),d=t[--f],$=l[--m];else if(M(u,$))"slot"!==u.p&&"slot"!==$.p||_(u.$.parentNode,!1),R(u,$),e.insertBefore(u.$,d.$.nextSibling),u=t[++r],$=l[--m];else if(M(d,p))"slot"!==u.p&&"slot"!==$.p||_(d.$.parentNode,!1),R(d,p),e.insertBefore(d.$,u.$),d=t[--f],p=l[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&null!==t[a].s&&t[a].s===p.s){c=a;break}c>=0?(s=t[c],s.p!==p.p?o=g(t&&t[i],n,c):(R(s,p),t[c]=void 0,o=s.$),p=l[++i]):(o=g(t&&t[i],n,i),p=l[++i]),o&&O(u.$).insertBefore(o,S(u.$))}r>f?j(e,null==l[m+1]?null:l[m+1].$,n,l,i,m):i>m&&k(t,r,f)})(n,l,t,o):null!==o?(null!==e.t&&(n.textContent=""),j(n,null,t,o,0,o.length-1)):null!==l&&k(l,0,l.length-1)):(r=n["s-cr"])?r.parentNode.textContent=t.t:e.t!==t.t&&(n.data=t.t),s&&"svg"===t.p&&(s=!1)},x=e=>{let t,n,l,o,s,r,i=e.childNodes;for(n=0,l=i.length;n<l;n++)if(t=i[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(i[o]["s-hn"]!==t["s-hn"])if(r=i[o].nodeType,""!==s){if(1===r&&s===i[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==i[o].textContent.trim()){t.hidden=!0;break}x(t)}},P=[],U=e=>{let t,n,o,s,r=e.childNodes,i=r.length,c=0,a=0,f=0;for(i=r.length;c<i;c++){if(t=r[c],t["s-sr"]&&(n=t["s-cr"]))for(o=n.parentNode.childNodes,s=t["s-sn"],a=o.length-1;a>=0;a--)n=o[a],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(f=n.nodeType,((3===f||8===f)&&""===s||1===f&&null===n.getAttribute("slot")&&""===s||1===f&&n.getAttribute("slot")===s)&&(P.some(e=>e.h===n)||(l=!0,n["s-sn"]=s,P.push({v:t,h:n}))));1===t.nodeType&&U(t)}},L=e=>{e.l&&e.l.ref&&e.l.ref(null),e.o&&e.o.forEach(L)},C=(e,t)=>{t&&!e.g&&t["s-p"].push(new Promise(t=>e.g=t))},E=(e,t)=>{if(e.u|=16,4&e.u)return void(e.u|=512);const n=e._,l=()=>T(e,n,t);return C(e,e.j),N(void 0,()=>me(l))},T=(s,r,a)=>{const f=s.k,p=f["s-rc"];a&&(e=>{const t=e.M,n=e.k;((e,t,n,l)=>{let o=c(t.S),s=se.get(o);if(e=11===e.nodeType?e:I,s)if("string"==typeof s){let n,r=i.get(e=e.head||e);if(r||i.set(e,r=new Set),!r.has(o)){if(J.O){n=J.O.createHostStyle(l,o,s,!!(10&t.u));const e=n["s-sc"];e&&(o=e,r=null)}else n=I.createElement("style"),n.innerHTML=s;e.insertBefore(n,e.querySelector("link")),r&&r.add(o)}}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[s])})(n.getRootNode(),t,0,n)})(s);((s,r)=>{const i=s.k,c=s.M,a=s.R||d(null,null),f=(p=r)&&p.p===m?r:u(null,null,r);var p;if(t=i.tagName,c.P&&(f.l=f.l||{},c.P.forEach(([e,t])=>f.l[t]=i[e])),f.p=null,f.u|=4,s.R=f,f.$=a.$=i,e=i["s-cr"],n=K,l=!1,R(a,f),o){U(f.$);for(let e=0;e<P.length;e++){const t=P[e];if(!t.h["s-ol"]){const e=I.createTextNode("");e["s-nr"]=t.h,t.h.parentNode.insertBefore(t.h["s-ol"]=e,t.h)}}J.u|=1;for(let e=0;e<P.length;e++){const t=P[e],n=t.v.parentNode;let l=t.v.nextSibling,o=t.h["s-ol"];for(;o=o.previousSibling;){let e=o["s-nr"];if(e&&e["s-sn"]===t.h["s-sn"]&&n===e.parentNode&&(e=e.nextSibling,!e||!e["s-nr"])){l=e;break}}(!l&&n!==t.h.parentNode||t.h.nextSibling!==l)&&t.h!==l&&n.insertBefore(t.h,l)}J.u&=-2}l&&x(f.$),P.length=0})(s,A(r)),J.O&&J.O.updateHost(f),s.u&=-17,s.u|=2,p&&(p.forEach(e=>e()),f["s-rc"]=void 0);{const e=f["s-p"],t=()=>D(s);0===e.length?t():(Promise.all(e).then(t),s.u|=4,e.length=0)}},A=e=>{try{e=e.render()}catch(t){ne(t)}return e},D=e=>{const t=e.k,n=e._,l=e.j;H(n,"componentDidRender"),64&e.u||(e.u|=64,t.classList.add("hydrated"),H(n,"componentDidLoad"),e.U(t),l||F()),e.L(t),e.g&&(e.g(),e.g=void 0),512&e.u&&de(()=>E(e,!1)),e.u&=-517},F=()=>{I.documentElement.classList.add("hydrated"),J.u|=2},H=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){ne(l)}},N=(e,t)=>e&&e.then?e.then(t):t(),W=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),o=e.prototype;if(l.forEach(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return t=e,Y(this).T.get(t);var t},set(n){((e,t,n,l)=>{const o=Y(e),s=o.T.get(t),r=o.u,i=o._;var c,a;a=l.C[t][0],n=null==(c=n)||f(c)?c:4&a?"false"!==c&&(""===c||!!c):2&a?parseFloat(c):1&a?String(c):c,8&r&&void 0!==s||n===s||(o.T.set(t,n),i&&2==(18&r)&&E(o,!1))})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=Y(this);return n.A.then(()=>n._[e](...t))}})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){J.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.P.push([e,o]),o})}}return e},q=(e,t={})=>{const n=[],l=t.exclude||[],o=I.head,s=G.customElements,r=o.querySelector("meta[charset]"),i=I.createElement("style"),a=[];let f,u=!0;Object.assign(J,t),J.D=new URL(t.resourcesUrl||"./",I.baseURI).href,t.syncQueue&&(J.u|=4),e.forEach(e=>e[1].forEach(t=>{const o={u:t[0],S:t[1],C:t[2],F:t[3]};o.C=t[2],o.P=[];const r=o.S,i=class extends HTMLElement{constructor(e){super(e),ee(e=this,o)}connectedCallback(){f&&(clearTimeout(f),f=null),u?a.push(this):J.jmp(()=>(e=>{if(0==(1&J.u)){const t=Y(e),n=t.M,l=()=>{};if(!(1&t.u)){t.u|=1,12&n.u&&(e=>{const t=e["s-cr"]=I.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){C(t,t.j=n);break}}n.C&&Object.entries(n.C).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,l,o)=>{if(0==(32&t.u)){t.u|=32;{if((o=oe(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(W(o,n,2),o.isProxied=!0);const e=()=>{};t.u|=8;try{new o(t)}catch(i){ne(i)}t.u&=-9,e()}const e=c(n.S);if(!se.has(e)&&o.style){const t=()=>{};((e,t,n)=>{let l=se.get(e);Q&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,se.set(e,l)})(e,o.style,!!(1&n.u)),t()}}const s=t.j,r=()=>E(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n)}l()}})(this))}disconnectedCallback(){J.jmp(()=>(e=>{if(0==(1&J.u)){const t=Y(e)._;J.O&&J.O.removeHost(e),H(t,"componentDidUnload")}})(this))}forceUpdate(){(()=>{{const e=Y(this);e.k.isConnected&&2==(18&e.u)&&E(e,!1)}})()}componentOnReady(){return Y(this).H}};o.N=e[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,W(i,o,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),o.insertBefore(i,r?r.nextSibling:o.firstChild),u=!1,a.length>0?a.forEach(e=>e.connectedCallback()):J.jmp(()=>f=setTimeout(F,30,"timeout"))},B=e=>Y(e).k;let V=0,z=!1;const G="undefined"!=typeof window?window:{},I=G.document||{head:{}},J={u:0,D:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},K=!1,Q=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),X=new WeakMap,Y=e=>X.get(e),Z=(e,t)=>X.set(t._=e,t),ee=(e,t)=>{const n={u:0,k:e,M:t,T:new Map};return n.A=new Promise(e=>n.L=e),n.H=new Promise(e=>n.U=e),e["s-p"]=[],e["s-rc"]=[],X.set(e,n)},te=(e,t)=>t in e,ne=e=>console.error(e),le=new Map,oe=e=>{const t=e.S.replace(/-/g,"_"),n=e.N,l=le.get(n);return l?l[t]:__sc_import_mdc_stencil(`./${n}.entry.js`).then(e=>(le.set(n,e),e[t]),ne)},se=new Map,re=[],ie=[],ce=[],ae=(e,t)=>n=>{e.push(n),z||(z=!0,t&&4&J.u?de(ue):J.raf(ue))},fe=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){ne(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},ue=()=>{V++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){ne(t)}e.length=0})(re);const e=2==(6&J.u)?performance.now()+10*Math.ceil(V*(1/22)):1/0;fe(ie,e),fe(ce,e),ie.length>0&&(ce.push(...ie),ie.length=0),(z=re.length+ie.length+ce.length>0)?J.raf(ue):V=0},de=e=>Promise.resolve().then(e),me=ae(ie,!0),pe=()=>G.CSS&&G.CSS.supports&&G.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_mdc_stencil("./p-9eb74d76.js").then(()=>{if(J.O=G.__stencil_cssshim,J.O)return J.O.initShim()}),$e=()=>{J.O=G.__stencil_cssshim;const e=Array.from(I.querySelectorAll("script")).find(e=>new RegExp("/mdc-stencil(\\.esm)?\\.js($|\\?|#)").test(e.src)||"mdc-stencil"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,G.location.href)).href,we(t.resourcesUrl,e),window.customElements?Promise.resolve(t):__sc_import_mdc_stencil("./p-1ada5d30.js").then(()=>t))},we=(e,t)=>{const n=`__sc_import_${"mdc-stencil".replace(/\s|-/g,"_")}`;try{G[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const o=new Map;G[n]=l=>{const s=new URL(l,e).href;let r=o.get(s);if(!r){const e=I.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${n}.m = m;`],{type:"application/javascript"})),r=new Promise(t=>{e.onload=()=>{t(G[n].m),e.remove()}}),o.set(s,r),I.head.appendChild(e)}return r}}};export{m as H,pe as a,q as b,B as g,u as h,$e as p,Z as r};