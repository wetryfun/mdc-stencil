var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function i(e){try{o(n.next(e))}catch(t){s(t)}}function l(e){try{o(n["throw"](e))}catch(t){s(t)}}function o(e){e.done?r(e.value):a(e.value).then(i,l)}o((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,a,s,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(e){return function(t){return o([e,t])}}function o(i){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(s=i[0]&2?a["return"]:i[0]?a["throw"]||((s=a["return"])&&s.call(a),0):a.next)&&!(s=s.call(a,i[1])).done)return s;if(a=0,s)i=[i[0]&2,s.value];switch(i[0]){case 0:case 1:s=i;break;case 4:r.label++;return{value:i[1],done:false};case 5:r.label++;a=i[1];i=[0];continue;case 7:i=r.ops.pop();r.trys.pop();continue;default:if(!(s=r.trys,s=s.length>0&&s[s.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!s||i[1]>s[0]&&i[1]<s[3])){r.label=i[1];break}if(i[0]===6&&r.label<s[1]){r.label=s[1];s=i;break}if(s&&r.label<s[2]){r.label=s[2];r.ops.push(i);break}if(s[2])r.ops.pop();r.trys.pop();continue}i=t.call(e,r)}catch(l){i=[6,l];a=0}finally{n=s=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var s=arguments[t],i=0,l=s.length;i<l;i++,a++)n[a]=s[i];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n={allRenderFn:true,cmpDidLoad:true,cmpShouldUpdate:false,cmpDidUnload:true,cmpDidUpdate:false,cmpDidRender:true,cmpWillLoad:false,cmpWillUpdate:false,cmpWillRender:false,connectedCallback:false,disconnectedCallback:false,element:false,event:false,hasRenderFn:true,lifecycle:true,asyncLoading:true,hostListener:false,hostListenerTargetWindow:false,hostListenerTargetDocument:false,hostListenerTargetBody:false,hostListenerTargetParent:false,hostListenerTarget:false,member:true,method:true,mode:false,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:true,propNumber:true,propString:true,propMutable:false,reflect:true,scoped:false,shadowDom:false,shadowDelegatesFocus:false,slot:true,slotRelocation:true,state:false,style:true,svg:true,updatable:true,vdomAttribute:true,vdomXlink:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,watchCallback:false,taskQueue:true,cloneNodeFix:false,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,initializeNextTick:true,hydrateClientSide:false,isDebug:false,isDev:false,devTools:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,cssAnnotations:true};var a="mdc-stencil";var s=0;var i=false;var l;var o;var f;var u=false;var $=false;var c=false;var v=false;var d=typeof window!=="undefined"?window:{};var h=d.document||{head:{}};var m={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var p=false;var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y=new WeakMap;var b=function(e){return y.get(e)};var w=e("r",(function(e,t){return y.set(t.$lazyInstance$=e,t)}));var S=function(e){var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{t.$onInstancePromise$=new Promise((function(e){return t.$onInstanceResolve$=e}))}{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return y.set(e,t)};var R=function(e,t){return t in e};var _=function(e){return console.error(e)};var N=new Map;var x=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var s=e.$lazyBundleIds$;var i=N.get(s);if(i){return i[a]}return t.import("./"+s+".entry.js"+"").then((function(e){{N.set(s,e)}return e[a]}),_)};var k=new Map;var T=[];var C=[];var j=[];var L=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&m.$flags$&4){P(O)}else{m.raf(O)}}}};var E=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){_(r)}}e.length=0};var A=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){_(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var O=function(){s++;E(T);var e=(m.$flags$&6)===2?performance.now()+10*Math.ceil(s*(1/22)):Infinity;A(C,e);A(j,e);if(C.length>0){j.push.apply(j,C);C.length=0}if(i=T.length+C.length+j.length>0){m.raf(O)}else{s=0}};var P=function(e){return Promise.resolve().then(e)};var U=L(C,true);var B={};var I="http://www.w3.org/2000/svg";var M="http://www.w3.org/1999/xhtml";var D=function(e){e=typeof e;return e==="object"||e==="function"};var z=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var F=e("a",(function(){if(!(d.CSS&&d.CSS.supports&&d.CSS.supports("color","var(--c)"))){return t.import("./p-a614138e.system.js").then((function(){m.$cssShim$=d.__stencil_cssshim;if(m.$cssShim$){return m.$cssShim$.initShim()}}))}return Promise.resolve()}));var H=e("p",(function(){return __awaiter(r,void 0,void 0,(function(){var e,r,n,s,i;return __generator(this,(function(l){switch(l.label){case 0:{m.$cssShim$=d.__stencil_cssshim}e=t.meta.url;r=new RegExp("/"+a+"(\\.esm)?\\.js($|\\?|#)");n=Array.from(h.querySelectorAll("script")).find((function(e){return r.test(e.src)||e.getAttribute("data-stencil-namespace")===a}));s=n["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},s),{resourcesUrl:new URL(".",e).href})];case 1:i=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,d.location.href));V(i.href,n);if(!!window.customElements)return[3,3];return[4,t.import("./p-7f10eb01.system.js")];case 2:l.sent();l.label=3;case 3:return[2,Object.assign(Object.assign({},s),{resourcesUrl:i.href})]}}))}))}));var V=function(e,t){var r=z(a);try{d[r]=new Function("w","return import(w);//"+Math.random())}catch(s){var n=new Map;d[r]=function(a){var s=new URL(a,e).href;var i=n.get(s);if(!i){var l=h.createElement("script");l.type="module";l.crossOrigin=t.crossOrigin;l.src=URL.createObjectURL(new Blob(["import * as m from '"+s+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){l.onload=function(){e(d[r].m);l.remove()}}));n.set(s,i);h.head.appendChild(l)}return i}}};var W=function(e,t){if(e!=null&&!D(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var q="hydrated";var G="http://www.w3.org/1999/xlink";var Q=function(e,t){if(t===void 0){t=""}{return function(){return}}};var K=function(e,t){{return function(){return}}};var X=new WeakMap;var J=function(e,t,r){var n=k.get(e);if(g&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}k.set(e,n)};var Y=function(e,t,r,n){var a=ee(t.$tagName$);var s=k.get(a);e=e.nodeType===11?e:h;if(s){if(typeof s==="string"){e=e.head||e;var i=X.get(e);var l=void 0;if(!i){X.set(e,i=new Set)}if(!i.has(a)){{if(m.$cssShim$){l=m.$cssShim$.createHostStyle(n,a,s,!!(t.$flags$&10));var o=l["s-sc"];if(o){a=o;i=null}}else{l=h.createElement("style");l.innerHTML=s}e.insertBefore(l,e.querySelector("link"))}if(i){i.add(a)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[s])}}return a};var Z=function(e,t,r){var n=Q("attachStyles",t.$tagName$);var a=Y(e.getRootNode(),t,r,e);n()};var ee=function(e,t){return"sc-"+e};var te=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var s=null;var i=null;var l=false;var o=false;var f=[];var u=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!D(a)){a=String(a)}if(l&&o){f[f.length-1].$text$+=a}else{f.push(l?re(null,a):a)}o=l}}};u(r);if(t){if(t.key){s=t.key}if(t.name){i=t.name}{var $=t.className||t.class;if($){t.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}if(typeof e==="function"){return e(t,f,se)}var c=re(e,null);c.$attrs$=t;if(f.length>0){c.$children$=f}{c.$key$=s}{c.$name$=i}return c}));var re=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$key$=null}{r.$name$=null}return r};var ne=e("H",{});var ae=function(e){return e&&e.$tag$===ne};var se={forEach:function(e,t){return e.map(ie).forEach(t)},map:function(e,t){return e.map(ie).map(t).map(le)}};var ie=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var le=function(e){var t=re(e.vtag,e.vtext);t.$attrs$=e.vattrs;t.$children$=e.vchildren;t.$key$=e.vkey;t.$name$=e.vname;return t};var oe=function(e,t,r,n,a,s){if(r===n){return}var i=R(e,t);var l=t.toLowerCase();if(t==="class"){var o=e.classList;var f=ue(r);var u=ue(n);o.remove.apply(o,f.filter((function(e){return e&&!u.includes(e)})));o.add.apply(o,u.filter((function(e){return e&&!f.includes(e)})))}else if(t==="style"){{for(var $ in r){if(!n||n[$]==null){if($.includes("-")){e.style.removeProperty($)}else{e.style[$]=""}}}}for(var $ in n){if(!r||n[$]!==r[$]){if($.includes("-")){e.style.setProperty($,n[$])}else{e.style[$]=n[$]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!i&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(R(d,l)){t=l.slice(2)}else{t=l[2]+t.slice(3)}if(r){m.rel(e,t,r,false)}if(n){m.ael(e,t,n,false)}}else{var c=D(n);if((i||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var v=n==null?"":n;if(t==="list"){i=false}else if(r==null||e[t]!=v){e[t]=v}}else{e[t]=n}}catch(p){}}var h=false;{if(l!==(l=l.replace(/^xlink\:?/,""))){t=l;h=true}}if(n==null||n===false){if(h){e.removeAttributeNS(G,t)}else{e.removeAttribute(t)}}else if((!i||s&4||a)&&!c){n=n===true?"":n;if(h){e.setAttributeNS(G,t,n)}else{e.setAttribute(t,n)}}}};var fe=/\s/;var ue=function(e){return!e?[]:e.split(fe)};var $e=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var s=e&&e.$attrs$||B;var i=t.$attrs$||B;{for(n in s){if(!(n in i)){oe(a,n,s[n],undefined,r,t.$flags$)}}}for(n in i){oe(a,n,s[n],i[n],r,t.$flags$)}};var ce=function(e,t,r,n){var a=t.$children$[r];var s=0;var i;var $;var d;if(!u){c=true;if(a.$tag$==="slot"){if(l){n.classList.add(l+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){i=a.$elm$=h.createTextNode(a.$text$)}else if(a.$flags$&1){i=a.$elm$=h.createTextNode("")}else{if(!v){v=a.$tag$==="svg"}i=a.$elm$=h.createElementNS(v?I:M,a.$flags$&2?"slot-fb":a.$tag$);if(v&&a.$tag$==="foreignObject"){v=false}{$e(null,a,v)}if(a.$children$){for(s=0;s<a.$children$.length;++s){$=ce(e,a,s,i);if($){i.appendChild($)}}}{if(a.$tag$==="svg"){v=false}else if(i.tagName==="foreignObject"){v=true}}}{i["s-hn"]=f;if(a.$flags$&(2|1)){i["s-sr"]=true;i["s-cr"]=o;i["s-sn"]=a.$name$||"";d=e&&e.$children$&&e.$children$[r];if(d&&d.$tag$===a.$tag$&&e.$elm$){ve(e.$elm$,false)}}}return i};var ve=function(e,t){m.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==f&&a["s-ol"]){ye(a).insertBefore(a,ge(a));a["s-ol"].remove();a["s-ol"]=undefined;c=true}if(t){ve(a,t)}}m.$flags$&=~1};var de=function(e,t,r,n,a,s){var i=e["s-cr"]&&e["s-cr"].parentNode||e;var l;for(;a<=s;++a){if(n[a]){l=ce(null,r,a,e);if(l){n[a].$elm$=l;i.insertBefore(l,ge(t))}}}};var he=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;_e(n);{$=true;if(a["s-ol"]){a["s-ol"].remove()}else{ve(a,true)}}a.remove()}}};var me=function(e,t,r,n){var a=0;var s=0;var i=0;var l=0;var o=t.length-1;var f=t[0];var u=t[o];var $=n.length-1;var c=n[0];var v=n[$];var d;var h;while(a<=o&&s<=$){if(f==null){f=t[++a]}else if(u==null){u=t[--o]}else if(c==null){c=n[++s]}else if(v==null){v=n[--$]}else if(pe(f,c)){be(f,c);f=t[++a];c=n[++s]}else if(pe(u,v)){be(u,v);u=t[--o];v=n[--$]}else if(pe(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){ve(f.$elm$.parentNode,false)}be(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=t[++a];v=n[--$]}else if(pe(u,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){ve(u.$elm$.parentNode,false)}be(u,c);e.insertBefore(u.$elm$,f.$elm$);u=t[--o];c=n[++s]}else{i=-1;{for(l=a;l<=o;++l){if(t[l]&&t[l].$key$!==null&&t[l].$key$===c.$key$){i=l;break}}}if(i>=0){h=t[i];if(h.$tag$!==c.$tag$){d=ce(t&&t[s],r,i,e)}else{be(h,c);t[i]=undefined;d=h.$elm$}c=n[++s]}else{d=ce(t&&t[s],r,s,e);c=n[++s]}if(d){{ye(f.$elm$).insertBefore(d,ge(f.$elm$))}}}}if(a>o){de(e,n[$+1]==null?null:n[$+1].$elm$,r,n,s,$)}else if(s>$){he(t,a,o)}};var pe=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var ge=function(e){return e&&e["s-ol"]||e};var ye=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var be=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var s;{v=r&&r.parentNode&&r.ownerSVGElement!==undefined;v=t.$tag$==="svg"?true:t.$tag$==="foreignObject"?false:v}if(t.$text$===null){{if(t.$tag$==="slot");else{$e(e,t,v)}}if(n!==null&&a!==null){me(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}de(r,null,t,a,0,a.length-1)}else if(n!==null){he(n,0,n.length-1)}}else if(s=r["s-cr"]){s.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.data=t.$text$}if(v&&t.$tag$==="svg"){v=false}};var we=function(e){var t=e.childNodes;var r;var n;var a;var s;var i;var l;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){i=r["s-sn"];r.hidden=false;for(s=0;s<a;s++){if(t[s]["s-hn"]!==r["s-hn"]){l=t[s].nodeType;if(i!==""){if(l===1&&i===t[s].getAttribute("slot")){r.hidden=true;break}}else{if(l===1||l===3&&t[s].textContent.trim()!==""){r.hidden=true;break}}}}}we(r)}}};var Se=[];var Re=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var s=0;var i;var l;var o;var f;for(r=t.length;n<r;n++){i=t[n];if(i["s-sr"]&&(l=i["s-cr"])){o=l.parentNode.childNodes;f=i["s-sn"];for(a=o.length-1;a>=0;a--){l=o[a];if(!l["s-cn"]&&!l["s-nr"]&&l["s-hn"]!==i["s-hn"]){s=l.nodeType;if((s===3||s===8)&&f===""||s===1&&l.getAttribute("slot")===null&&f===""||s===1&&l.getAttribute("slot")===f){if(!Se.some((function(e){return e.$nodeToRelocate$===l}))){$=true;l["s-sn"]=f;Se.push({$slotRefNode$:i,$nodeToRelocate$:l})}}}}}if(i.nodeType===1){Re(i)}}};var _e=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.forEach(_e)}};var Ne=function(e,t,r,n){f=e.tagName;var a=t.$vnode$||re(null,null);var s=ae(n)?n:te(null,null,n);if(r.$attrsToReflect$){s.$attrs$=s.$attrs$||{};r.$attrsToReflect$.forEach((function(t){var r=t[0],n=t[1];return s.$attrs$[n]=e[r]}))}s.$tag$=null;s.$flags$|=4;t.$vnode$=s;s.$elm$=a.$elm$=e;{o=e["s-cr"];u=p;$=false}be(a,s);{if(c){Re(s.$elm$);for(var i=0;i<Se.length;i++){var l=Se[i];if(!l.$nodeToRelocate$["s-ol"]){var v=h.createTextNode("");v["s-nr"]=l.$nodeToRelocate$;l.$nodeToRelocate$.parentNode.insertBefore(l.$nodeToRelocate$["s-ol"]=v,l.$nodeToRelocate$)}}m.$flags$|=1;for(var i=0;i<Se.length;i++){var l=Se[i];var d=l.$slotRefNode$.parentNode;var g=l.$slotRefNode$.nextSibling;var v=l.$nodeToRelocate$["s-ol"];while(v=v.previousSibling){var y=v["s-nr"];if(y&&y["s-sn"]===l.$nodeToRelocate$["s-sn"]&&d===y.parentNode){y=y.nextSibling;if(!y||!y["s-nr"]){g=y;break}}}if(!g&&d!==l.$nodeToRelocate$.parentNode||l.$nodeToRelocate$.nextSibling!==g){if(l.$nodeToRelocate$!==g){d.insertBefore(l.$nodeToRelocate$,g)}}}m.$flags$&=~1}if($){we(s.$elm$)}Se.length=0}};var xe=function(e,t){if(t&&!e.$onRenderResolve$){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var ke=function(e,t,r,n){{t.$flags$|=16}if(t.$flags$&4){t.$flags$|=512;return}var a=Q("scheduleUpdate",r.$tagName$);var s=t.$ancestorComponent$;var i=t.$lazyInstance$;var l=function(){return Te(e,t,r,i,n)};xe(t,s);var o;a();return Oe(o,(function(){return U(l)}))};var Te=function(e,t,r,n,a){var s=Q("update",r.$tagName$);var i=e["s-rc"];if(a){Z(e,r,t.$modeName$)}var l=Q("render",r.$tagName$);{{Ne(e,t,r,Ce(n))}}if(m.$cssShim$){m.$cssShim$.updateHost(e)}{t.$flags$&=~16}{t.$flags$|=2}if(i){i.forEach((function(e){return e()}));e["s-rc"]=undefined}l();s();{var o=e["s-p"];var f=function(){return je(e,t,r)};if(o.length===0){f()}else{Promise.all(o).then(f);t.$flags$|=4;o.length=0}}};var Ce=function(e,t){try{e=e.render()}catch(r){_(r)}return e};var je=function(e,t,r){var n=Q("postUpdate",r.$tagName$);var a=t.$lazyInstance$;var s=t.$ancestorComponent$;{Ae(a,"componentDidRender")}if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(q)}{Ae(a,"componentDidLoad")}n();{t.$onReadyResolve$(e);if(!s){Ee()}}}else{n()}{t.$onInstanceResolve$(e)}{if(t.$onRenderResolve$){t.$onRenderResolve$();t.$onRenderResolve$=undefined}if(t.$flags$&512){P((function(){return ke(e,t,r,false)}))}t.$flags$&=~(4|512)}};var Le=function(e,t){{var r=b(e);var n=r.$hostElement$.isConnected;if(n&&(r.$flags$&(2|16))===2){ke(e,r,t,false)}return n}};var Ee=function(e){{h.documentElement.classList.add(q)}{m.$flags$|=2}};var Ae=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){_(n)}}return undefined};var Oe=function(e,t){return e&&e.then?e.then(t):t()};var Pe=function(e,t){return b(e).$instanceValues$.get(t)};var Ue=function(e,t,r,n){var a=b(e);var s=a.$hostElement$;var i=a.$instanceValues$.get(t);var l=a.$flags$;var o=a.$lazyInstance$;r=W(r,n.$members$[t][0]);if(r!==i&&(!(l&8)||i===undefined)){a.$instanceValues$.set(t,r);if(o){if((l&(2|16))===2){ke(s,a,n,false)}}}};var Be=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],s=e[1][0];if(s&31||r&2&&s&32){Object.defineProperty(a,n,{get:function(){return Pe(this,n)},set:function(e){Ue(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&s&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=b(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var s=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;m.jmp((function(){var t=s.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;s.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var Ie=function(e,t,n,a,s){return __awaiter(r,void 0,void 0,(function(){var r,a,i,l,o,f,u;return __generator(this,(function($){switch($.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;s=x(n);if(!s.then)return[3,2];r=K();return[4,s];case 1:s=$.sent();r();$.label=2;case 2:if(!s.isProxied){Be(s,n,2);s.isProxied=true}a=Q("createInstance",n.$tagName$);{t.$flags$|=8}try{new s(t)}catch(c){_(c)}{t.$flags$&=~8}a();i=ee(n.$tagName$);if(!k.has(i)&&s.style){l=Q("registerStyles",n.$tagName$);o=s.style;J(i,o,!!(n.$flags$&1));l()}$.label=3;case 3:f=t.$ancestorComponent$;u=function(){return ke(e,t,n,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var Me=function(e,t){if((m.$flags$&1)===0){var r=Q("connectedCallback",t.$tagName$);var a=b(e);if(!(a.$flags$&1)){a.$flags$|=1;var s=void 0;if(!s){if(t.$flags$&4||n.shadowDom){De(e)}}{var i=e;while(i=i.parentNode||i.host){if(i["s-p"]){xe(a,a.$ancestorComponent$=i);break}}}if(t.$members$){Object.entries(t.$members$).forEach((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{P((function(){return Ie(e,a,t)}))}}r()}};var De=function(e){var t="";var r=e["s-cr"]=h.createComment(t);r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var ze=function(e){if((m.$flags$&1)===0){var t=b(e);var r=t.$lazyInstance$;if(m.$cssShim$){m.$cssShim$.removeHost(e)}{Ae(r,"componentDidUnload")}}};var Fe=e("b",(function(e,t){if(t===void 0){t={}}var r=Q();var n=[];var a=t.exclude||[];var s=h.head;var i=d.customElements;var l=s.querySelector("meta[charset]");var o=h.createElement("style");var f=[];var u;var $=true;Object.assign(m,t);m.$resourcesUrl$=new URL(t.resourcesUrl||"./",h.baseURI).href;if(t.syncQueue){m.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$attrsToReflect$=[]}var s=r.$tagName$;var l=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;S(t);return r}t.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if($){f.push(this)}else{m.jmp((function(){return Me(e,r)}))}};t.prototype.disconnectedCallback=function(){var e=this;m.jmp((function(){return ze(e)}))};t.prototype.forceUpdate=function(){Le(this,r)};t.prototype.componentOnReady=function(){return b(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,Be(l,r,1))}}))}));o.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";o.setAttribute("data-styles","");s.insertBefore(o,l?l.nextSibling:s.firstChild);$=false;if(f.length>0){f.forEach((function(e){return e.connectedCallback()}))}else{m.jmp((function(){return u=setTimeout(Ee,30,"timeout")}))}r()}));var He=e("g",(function(e){return b(e).$hostElement$}))}}}));