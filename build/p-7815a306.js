let e,t,n=0,l=!1,o=!1,s=!1,r=!1,i=!1;const c="undefined"!=typeof window?window:{},a=c.document||{head:{}},f={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},u=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),d=new WeakMap,m=e=>d.get(e),p=(e,t)=>d.set(t.o=e,t),w=(e,t)=>t in e,$=e=>console.error(e),h=new Map,y=new Map,b=[],g=[],v=[],_=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&f.t?O(k):f.raf(k))},j=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){$(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},k=()=>{n++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){$(t)}e.length=0})(b);const e=2==(6&f.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;j(g,e),j(v,e),g.length>0&&(v.push(...g),g.length=0),(l=b.length+g.length+v.length>0)?f.raf(k):n=0},O=e=>Promise.resolve().then(e),S=_(g,!0),M={},R=e=>"object"==(e=typeof e)||"function"===e,U=()=>c.CSS&&c.CSS.supports&&c.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_mdc_stencil("./p-d8631f0b.js").then(()=>{f.s=c.__stencil_cssshim}),x=async()=>{f.s=c.__stencil_cssshim;const e=new RegExp("/mdc-stencil(\\.esm)?\\.js($|\\?|#)"),t=Array.from(a.querySelectorAll("script")).find(t=>e.test(t.src)||"mdc-stencil"===t.getAttribute("data-stencil-namespace")),n=t["data-opts"];{const e=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,c.location.href));return L(e.href,t),window.customElements||await __sc_import_mdc_stencil("./p-3b66a627.js"),Object.assign(Object.assign({},n),{resourcesUrl:e.href})}},L=(e,t)=>{const n=(()=>`__sc_import_${"mdc-stencil".replace(/\s|-/g,"_")}`)();try{c[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const o=new Map;c[n]=l=>{const s=new URL(l,e).href;let r=o.get(s);if(!r){const e=a.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${n}.m = m;`],{type:"application/javascript"})),r=new Promise(t=>{e.onload=()=>{t(c[n].m),e.remove()}}),o.set(s,r),a.head.appendChild(e)}return r}}},P="http://www.w3.org/1999/xlink",C=new WeakMap,E=e=>"sc-"+e,T=(e,t,...n)=>{let l=null,o=null,s=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!R(l))&&(l=String(l)),r&&i?c[c.length-1].i+=l:c.push(r?A(null,l):l),i=r)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,F);const f=A(e,null);return f.u=t,c.length>0&&(f.p=c),f.$=o,f.h=s,f},A=(e,t)=>({t:0,g:e,i:t,v:null,p:null,u:null,$:null,h:null}),D={},F={forEach:(e,t)=>e.map(H).forEach(t),map:(e,t)=>e.map(H).map(t).map(N)},H=e=>({vattrs:e.u,vchildren:e.p,vkey:e.$,vname:e.h,vtag:e.g,vtext:e.i}),N=e=>{const t=A(e.vtag,e.vtext);return t.u=e.vattrs,t.p=e.vchildren,t.$=e.vkey,t.h=e.vname,t},W=(e,t,n,l,o,s)=>{if(n===l)return;let r=w(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,o=B(n),s=B(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const c=R(l);if((r||c&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(a){}let f=!1;i!==(i=i.replace(/^xlink\:?/,""))&&(t=i,f=!0),null==l||!1===l?f?e.removeAttributeNS(P,t):e.removeAttribute(t):(!r||4&s||o)&&!c&&(l=!0===l?"":l,f?e.setAttributeNS(P,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):w(c,i)?i.slice(2):i[2]+t.slice(3),n&&f.rel(e,t,n,!1),l&&f.ael(e,t,l,!1)},q=/\s/,B=e=>e?e.split(q):[],V=(e,t,n,l)=>{const o=11===t.v.nodeType&&t.v.host?t.v.host:t.v,s=e&&e.u||M,r=t.u||M;for(l in s)l in r||W(o,l,s[l],void 0,n,t.t);for(l in r)W(o,l,s[l],r[l],n,t.t)},z=(n,l,s)=>{let c,f,u,d=l.p[s],m=0;if(o||(r=!0,"slot"===d.g&&(d.t|=d.p?2:1)),null!==d.i)c=d.v=a.createTextNode(d.i);else if(1&d.t)c=d.v=a.createTextNode("");else{if(i||(i="svg"===d.g),c=d.v=a.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&d.t?"slot-fb":d.g),i&&"foreignObject"===d.g&&(i=!1),V(null,d,i),d.p)for(m=0;m<d.p.length;++m)(f=z(n,d,m,c))&&c.appendChild(f);"svg"===d.g?i=!1:"foreignObject"===c.tagName&&(i=!0)}return c["s-hn"]=t,3&d.t&&(c["s-sr"]=!0,c["s-cr"]=e,c["s-sn"]=d.h||"",(u=n&&n.p&&n.p[s])&&u.g===d.g&&n.v&&G(n.v,!1)),c},G=(e,n)=>{f.t|=1;const l=e.childNodes;for(let o=l.length-1;o>=0;o--){const e=l[o];e["s-hn"]!==t&&e["s-ol"]&&(X(e).insertBefore(e,Q(e)),e["s-ol"].remove(),e["s-ol"]=void 0,r=!0),n&&G(e,n)}f.t&=-2},I=(e,t,n,l,o,s)=>{let r,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(;o<=s;++o)l[o]&&(r=z(null,n,o,e))&&(l[o].v=r,i.insertBefore(r,Q(t)))},J=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.v,ne(l),s=!0,o["s-ol"]?o["s-ol"].remove():G(o,!0),o.remove())},K=(e,t)=>e.g===t.g&&("slot"===e.g?e.h===t.h:e.$===t.$),Q=e=>e&&e["s-ol"]||e,X=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,Y=(e,t)=>{const n=t.v=e.v,l=e.p,o=t.p;let s;i=n&&n.parentNode&&void 0!==n.ownerSVGElement,i="svg"===t.g||"foreignObject"!==t.g&&i,null===t.i?("slot"===t.g||V(e,t,i),null!==l&&null!==o?((e,t,n,l)=>{let o,s,r=0,i=0,c=0,a=0,f=t.length-1,u=t[0],d=t[f],m=l.length-1,p=l[0],w=l[m];for(;r<=f&&i<=m;)if(null==u)u=t[++r];else if(null==d)d=t[--f];else if(null==p)p=l[++i];else if(null==w)w=l[--m];else if(K(u,p))Y(u,p),u=t[++r],p=l[++i];else if(K(d,w))Y(d,w),d=t[--f],w=l[--m];else if(K(u,w))"slot"!==u.g&&"slot"!==w.g||G(u.v.parentNode,!1),Y(u,w),e.insertBefore(u.v,d.v.nextSibling),u=t[++r],w=l[--m];else if(K(d,p))"slot"!==u.g&&"slot"!==w.g||G(d.v.parentNode,!1),Y(d,p),e.insertBefore(d.v,u.v),d=t[--f],p=l[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&null!==t[a].$&&t[a].$===p.$){c=a;break}c>=0?((s=t[c]).g!==p.g?o=z(t&&t[i],n,c,e):(Y(s,p),t[c]=void 0,o=s.v),p=l[++i]):(o=z(t&&t[i],n,i,e),p=l[++i]),o&&X(u.v).insertBefore(o,Q(u.v))}r>f?I(e,null==l[m+1]?null:l[m+1].v,n,l,i,m):i>m&&J(t,r,f)})(n,l,t,o):null!==o?(null!==e.i&&(n.textContent=""),I(n,null,t,o,0,o.length-1)):null!==l&&J(l,0,l.length-1)):(s=n["s-cr"])?s.parentNode.textContent=t.i:e.i!==t.i&&(n.data=t.i),i&&"svg"===t.g&&(i=!1)},Z=e=>{let t,n,l,o,s,r,i=e.childNodes;for(n=0,l=i.length;n<l;n++)if(1===(t=i[n]).nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(i[o]["s-hn"]!==t["s-hn"])if(r=i[o].nodeType,""!==s){if(1===r&&s===i[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==i[o].textContent.trim()){t.hidden=!0;break}Z(t)}},ee=[],te=e=>{let t,n,l,o,r=e.childNodes,i=r.length,c=0,a=0,f=0;for(i=r.length;c<i;c++){if((t=r[c])["s-sr"]&&(n=t["s-cr"]))for(o=t["s-sn"],a=(l=n.parentNode.childNodes).length-1;a>=0;a--)(n=l[a])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===o||1===f&&null===n.getAttribute("slot")&&""===o||1===f&&n.getAttribute("slot")===o)&&(ee.some(e=>e._===n)||(s=!0,n["s-sn"]=o,ee.push({j:t,_:n})));1===t.nodeType&&te(t)}},ne=e=>{e.u&&e.u.ref&&e.u.ref(null),e.p&&e.p.forEach(ne)},le=(e,t)=>{t&&!e.k&&t["s-p"].push(new Promise(t=>e.k=t))},oe=(e,t,n,l)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const o=t.o,s=()=>se(e,t,n,o,l);return le(t,t.O),fe(void 0,()=>S(s))},se=(n,l,i,c,u)=>{const d=n["s-rc"];u&&((e,t)=>{((e,t)=>{let n=E(t.S),l=y.get(n);if(e=11===e.nodeType?e:a,l)if("string"==typeof l){let t,o=C.get(e=e.head||e);o||C.set(e,o=new Set),o.has(n)||((t=a.createElement("style")).innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l])})(e.getRootNode(),t)})(n,i),((n,l,i,c)=>{t=n.tagName;const u=l.M||A(null,null),d=(e=>e&&e.g===D)(c)?c:T(null,null,c);if(i.R&&(d.u=d.u||{},i.R.forEach(([e,t])=>d.u[t]=n[e])),d.g=null,d.t|=4,l.M=d,d.v=u.v=n,e=n["s-cr"],o=!1,s=!1,Y(u,d),r){te(d.v);for(let e=0;e<ee.length;e++){const t=ee[e];if(!t._["s-ol"]){const e=a.createTextNode("");e["s-nr"]=t._,t._.parentNode.insertBefore(t._["s-ol"]=e,t._)}}f.t|=1;for(let e=0;e<ee.length;e++){const t=ee[e],n=t.j.parentNode;let l=t.j.nextSibling,o=t._["s-ol"];for(;o=o.previousSibling;){let e=o["s-nr"];if(e&&e["s-sn"]===t._["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){l=e;break}}(!l&&n!==t._.parentNode||t._.nextSibling!==l)&&t._!==l&&n.insertBefore(t._,l)}f.t&=-2}s&&Z(d.v),ee.length=0})(n,l,i,re(c)),l.t&=-17,l.t|=2,d&&(d.forEach(e=>e()),n["s-rc"]=void 0);{const e=n["s-p"],t=()=>ie(n,l,i);0===e.length?t():(Promise.all(e).then(t),l.t|=4,e.length=0)}},re=e=>{try{e=e.render()}catch(t){$(t)}return e},ie=(e,t,n)=>{const l=t.o,o=t.O;ae(l,"componentDidRender"),64&t.t||(t.t|=64,e.classList.add("hydrated"),ae(l,"componentDidLoad"),t.U(e),o||ce()),t.L(e),t.k&&(t.k(),t.k=void 0),512&t.t&&O(()=>oe(e,t,n,!1)),t.t&=-517},ce=()=>{a.documentElement.classList.add("hydrated"),f.t|=2},ae=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){$(l)}},fe=(e,t)=>e&&e.then?e.then(t):t(),ue=(e,t,n)=>{if(t.P){const l=Object.entries(t.P),o=e.prototype;if(l.forEach(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>m(e).C.get(t))(this,e)},set(n){((e,t,n,l)=>{const o=m(this),s=o.T,r=o.C.get(t),i=o.t,c=o.o;(n=((e,t)=>null==e||R(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,l.P[t][0]))===r||8&i&&void 0!==r||(o.C.set(t,n),c&&2==(18&i)&&oe(s,o,l,!1))})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=m(this);return n.A.then(()=>n.o[e](...t))}})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){f.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.R.push([e,o]),o})}}return e},de=(e,t={})=>{const n=[],l=t.exclude||[],o=a.head,s=c.customElements,r=o.querySelector("meta[charset]"),i=a.createElement("style"),p=[];let w,b=!0;Object.assign(f,t),f.l=new URL(t.resourcesUrl||"./",a.baseURI).href,t.syncQueue&&(f.t|=4),e.forEach(e=>e[1].forEach(t=>{const o={t:t[0],S:t[1],P:t[2],D:t[3]};o.P=t[2],o.R=[];const r=o.S,i=class extends HTMLElement{constructor(e){super(e),(e=>{const t={t:0,T:e,C:new Map};t.A=new Promise(e=>t.L=e),t.F=new Promise(e=>t.U=e),e["s-p"]=[],e["s-rc"]=[],d.set(e,t)})(e=this)}connectedCallback(){w&&(clearTimeout(w),w=null),b?p.push(this):f.jmp(()=>((e,t)=>{if(0==(1&f.t)){const n=()=>{},l=m(e);if(!(1&l.t)){let n;l.t|=1,n||4&t.t&&(e=>{const t=e["s-cr"]=a.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let t=e;for(;t=t.parentNode||t.host;)if(t["s-p"]){le(l,l.O=t);break}}t.P&&Object.entries(t.P).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),O(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=(e=>{const t=e.S.replace(/-/g,"_"),n=e.H,l=h.get(n);return l?l[t]:__sc_import_mdc_stencil(`./${n}.entry.js`).then(e=>(h.set(n,e),e[t]),$)})(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(ue(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(i){$(i)}t.t&=-9,e()}const e=E(n.S);if(!y.has(e)&&o.style){const t=()=>{};((e,t,n)=>{let l=y.get(e);u&&n?(l=l||new CSSStyleSheet).replace(t):l=t,y.set(e,l)})(e,o.style,!!(1&n.t)),t()}}const s=t.O,r=()=>oe(e,t,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(e,l,t))}n()}})(this,o))}disconnectedCallback(){f.jmp(()=>(()=>{0==(1&f.t)&&ae(m(this).o,"componentDidUnload")})())}forceUpdate(){((e,t)=>{{const n=m(e);n.T.isConnected&&2==(18&n.t)&&oe(e,n,t,!1)}})(this,o)}componentOnReady(){return m(this).F}};o.H=e[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,ue(i,o,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),o.insertBefore(i,r?r.nextSibling:o.firstChild),b=!1,p.length>0?p.forEach(e=>e.connectedCallback()):f.jmp(()=>w=setTimeout(ce,30,"timeout"))},me=e=>m(e).T;export{D as H,U as a,de as b,me as g,T as h,x as p,p as r};