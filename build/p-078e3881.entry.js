import{h as r,r as t,H as s}from"./p-96ba9c38.js";import{c as e}from"./p-fed76f63.js";import{C as c}from"./p-48394522.js";var a=function(r,t){var s={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(s[e]=r[e]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(e=Object.getOwnPropertySymbols(r);c<e.length;c++)t.indexOf(e[c])<0&&Object.prototype.propertyIsEnumerable.call(r,e[c])&&(s[e[c]]=r[e[c]])}return s};const l=(t,s)=>{const l=Object.assign({},t),{tag:n="div"}=l,o=a(l,["tag"]);return r(n,Object.assign({},(r=>{var{class:t}=r,s=a(r,["class"]);return Object.assign({class:Object.assign({[c.MEDIA_CONTENT]:!0},e(t))},s)})(o)),s)},n=class{constructor(r){t(this,r)}render(){return r(s,Object.assign({},(r=>{var{class:t,size:s,imageUrl:l,style:n}=r,o=a(r,["class","size","imageUrl","style"]);return Object.assign({class:Object.assign({[c.MEDIA]:!0,[c.MEDIA_SQUARE]:"square"===s,[c.MEDIA_16_9]:"wide"===s},e(t)),style:Object.assign({backgroundImage:l&&`url(${l})`},n)},o)})(this)),r(l,null,r("slot",null)))}};export{n as mdc_card_media};