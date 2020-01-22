import{h as t,r as e}from"./p-96ba9c38.js";import{M as i,b as r,a as c}from"./p-22dc4cc4.js";import{_ as a,a as n,M as o,d as s,b as d}from"./p-3a0a9a51.js";import{m}from"./p-c0a20e71.js";import{u as l,c as u}from"./p-fed76f63.js";const p=e=>{const i=Object.assign({},e),{ref:r,inputRef:c,class:a,id:n=l(),disabled:o,checked:s}=i,d=function(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(i[r[c]]=t[r[c]])}return i}(i,["ref","inputRef","class","id","disabled","checked"]);return[t("div",{ref:r,class:Object.assign({"mdc-switch":!0,"mdc-switch--disabled":o,"mdc-switch--checked":s},u(a))},t("div",{class:"mdc-switch__track"}),t("div",{class:"mdc-switch__thumb-underlay"},t("div",{class:"mdc-switch__thumb"},t("input",Object.assign({type:"checkbox",class:"mdc-switch__native-control",role:"switch"},Object.assign({id:n,disabled:o,checked:s,ref:c},d))))))]};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var b={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},h={NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},f=function(t){function e(i){return t.call(this,n({},e.defaultAdapter,i))||this}return a(e,t),Object.defineProperty(e,"strings",{get:function(){return h},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return b},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setChecked=function(t){this.adapter_.setNativeControlChecked(t),this.updateCheckedStyling_(t)},e.prototype.setDisabled=function(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(b.DISABLED):this.adapter_.removeClass(b.DISABLED)},e.prototype.handleChange=function(t){this.updateCheckedStyling_(t.target.checked)},e.prototype.updateCheckedStyling_=function(t){t?this.adapter_.addClass(b.CHECKED):this.adapter_.removeClass(b.CHECKED)},e}(o),w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ripple_=e.createRipple_(),e}return a(e,t),e.attachTo=function(t){return new e(t)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.changeHandler_)},e.prototype.initialSyncWithDOM=function(){var t=this;this.changeHandler_=function(){for(var e,i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];return(e=t.foundation_).handleChange.apply(e,s(i))},this.nativeControl_.addEventListener("change",this.changeHandler_),this.checked=this.checked},e.prototype.getDefaultFoundation=function(){var t=this;return new f({addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},setNativeControlChecked:function(e){return t.nativeControl_.checked=e},setNativeControlDisabled:function(e){return t.nativeControl_.disabled=e}})},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(t){this.foundation_.setChecked(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),e.prototype.createRipple_=function(){var t=this,e=this.root_.querySelector(f.strings.RIPPLE_SURFACE_SELECTOR),a=n({},i.createAdapter(this),{addClass:function(t){return e.classList.add(t)},computeBoundingRect:function(){return e.getBoundingClientRect()},deregisterInteractionHandler:function(e,i){t.nativeControl_.removeEventListener(e,i,r())},isSurfaceActive:function(){return m(t.nativeControl_,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(e,i){t.nativeControl_.addEventListener(e,i,r())},removeClass:function(t){return e.classList.remove(t)},updateCssVariable:function(t,i){e.style.setProperty(t,i)}});return new i(this.root_,new c(a))},Object.defineProperty(e.prototype,"nativeControl_",{get:function(){return this.root_.querySelector(f.strings.NATIVE_CONTROL_SELECTOR)},enumerable:!0,configurable:!0}),e}(d);const g=class{constructor(t){e(this,t)}async setChecked(t=!0){this.mdcSwitch.checked=t}async setDisabled(t=!0){this.mdcSwitch.disabled=t}componentDidLoad(){this.mdcSwitch=new w(this.switch)}componentDidUnload(){this.mdcSwitch.destroy()}render(){const{name:e,checked:i,disabled:r}=this;return t(p,Object.assign({ref:t=>this.switch=t},{name:e,checked:i,disabled:r}))}static get style(){return'.mdc-switch__thumb-underlay{left:-18px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-18px}.mdc-switch__native-control{width:68px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;border-color:#000}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;border-color:#fff}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{-webkit-box-sizing:border-box;box-sizing:border-box;width:32px;height:14px;border:1px solid;border-radius:7px;opacity:0.38;-webkit-transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-transform:translateX(0);transform:translateX(0);-webkit-transition:background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1);transition:background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);-webkit-box-sizing:border-box;box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:0.54}.mdc-switch--checked .mdc-switch__thumb-underlay{-webkit-transform:translateX(20px);transform:translateX(20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{-webkit-transform:translateX(-20px);transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control{-webkit-transform:translateX(-20px);transform:translateX(-20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{-webkit-transform:translateX(20px);transform:translateX(20px)}.mdc-switch--disabled{opacity:0.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after{background-color:#9e9e9e}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover::before{opacity:0.08}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-switch__thumb-underlay{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch__thumb-underlay::before{-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before,.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-switch__thumb-underlay:hover::before{opacity:0.04}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}'}};export{g as mdc_switch};