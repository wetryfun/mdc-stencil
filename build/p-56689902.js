import{h as t}from"./p-d8ff5cc2.js";import{c as e}from"./p-fed76f63.js";const n={ROOT:"mdc-button",ICON:"mdc-button__icon",LABEL:"mdc-button__label",RIPPLE:"mdc-button__ripple",DENSE:"mdc-button--dense",RAISED:"mdc-button--raised",OUTLINED:"mdc-button--outlined",UNELEVATED:"mdc-button--unelevated"};const c=t=>{var{class:c,raised:o,unelevated:a,outlined:s,dense:l,label:d,icon:i}=t,r=function(t,e){var n={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&e.indexOf(c)<0&&(n[c]=t[c]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(c=Object.getOwnPropertySymbols(t);o<c.length;o++)e.indexOf(c[o])<0&&Object.prototype.propertyIsEnumerable.call(t,c[o])&&(n[c[o]]=t[c[o]])}return n}(t,["class","raised","unelevated","outlined","dense","label","icon","trailingIcon"]);return Object.assign({class:Object.assign({[n.ROOT]:!0,[n.RAISED]:o,[n.UNELEVATED]:a,[n.OUTLINED]:s,[n.DENSE]:l},e(c)),"aria-label":d||i},r)},o=({icon:e})=>t("span",{class:`material-icons ${n.ICON}`},e);export{n as C,o as M,c as m};