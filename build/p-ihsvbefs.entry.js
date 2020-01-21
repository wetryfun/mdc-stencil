import{h as t,r as n}from"./p-7815a306.js";import{_ as i,a as e,M as s,b as c}from"./p-3a0a9a51.js";import{c as o}from"./p-c0a20e71.js";import{c as r}from"./p-aa1afb32.js";
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
 */var a={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},u={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},h={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},f=h.ARIA_LIVE_DELAY_MS,l=u.ARIA_LIVE_LABEL_TEXT_ATTR;function b(t,n){void 0===n&&(n=t);var i=t.getAttribute("aria-live"),e=n.textContent.trim();e&&i&&(t.setAttribute("aria-live","off"),n.textContent="",n.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',n.setAttribute(l,e),setTimeout((function(){t.setAttribute("aria-live",i),n.removeAttribute(l),n.textContent=e}),f))}
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
 */var m=a.OPENING,d=a.OPEN,E=a.CLOSING,O=u.REASON_ACTION,_=u.REASON_DISMISS,T=function(t){function n(i){var s=t.call(this,e({},n.defaultAdapter,i))||this;return s.isOpen_=!1,s.animationFrame_=0,s.animationTimer_=0,s.autoDismissTimer_=0,s.autoDismissTimeoutMs_=h.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,s.closeOnEscape_=!0,s}return i(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return h},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!0,configurable:!0}),n.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter_.removeClass(m),this.adapter_.removeClass(d),this.adapter_.removeClass(E)},n.prototype.open=function(){var t=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.removeClass(E),this.adapter_.addClass(m),this.adapter_.announce(),this.runNextAnimationFrame_((function(){t.adapter_.addClass(d),t.animationTimer_=setTimeout((function(){var n=t.getTimeoutMs();t.handleAnimationTimerEnd_(),t.adapter_.notifyOpened(),n!==h.INDETERMINATE&&(t.autoDismissTimer_=setTimeout((function(){t.close(_)}),n))}),h.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},n.prototype.close=function(t){var n=this;void 0===t&&(t=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(a.CLOSING),this.adapter_.removeClass(a.OPEN),this.adapter_.removeClass(a.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){n.handleAnimationTimerEnd_(),n.adapter_.notifyClosed(t)}),h.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},n.prototype.isOpen=function(){return this.isOpen_},n.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},n.prototype.setTimeoutMs=function(t){var n=h.MIN_AUTO_DISMISS_TIMEOUT_MS,i=h.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(t===h.INDETERMINATE||t<=i&&t>=n))throw new Error("\n        timeoutMs must be an integer in the range "+n+"–"+i+"\n        (or "+h.INDETERMINATE+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs_=t},n.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},n.prototype.setCloseOnEscape=function(t){this.closeOnEscape_=t},n.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(_)},n.prototype.handleActionButtonClick=function(){this.close(O)},n.prototype.handleActionIconClick=function(){this.close(_)},n.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},n.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(a.OPENING),this.adapter_.removeClass(a.CLOSING)},n.prototype.runNextAnimationFrame_=function(t){var n=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){n.animationFrame_=0,clearTimeout(n.animationTimer_),n.animationTimer_=setTimeout(t,0)}))},n}(s),g=u.SURFACE_SELECTOR,S=u.LABEL_SELECTOR,A=u.ACTION_SELECTOR,p=u.DISMISS_SELECTOR,I=u.OPENING_EVENT,M=u.OPENED_EVENT,C=u.CLOSING_EVENT,k=u.CLOSED_EVENT,v=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i(n,t),n.attachTo=function(t){return new n(t)},n.prototype.initialize=function(t){void 0===t&&(t=function(){return b}),this.announce_=t()},n.prototype.initialSyncWithDOM=function(){var t=this;this.surfaceEl_=this.root_.querySelector(g),this.labelEl_=this.root_.querySelector(S),this.actionEl_=this.root_.querySelector(A),this.handleKeyDown_=function(n){return t.foundation_.handleKeyDown(n)},this.handleSurfaceClick_=function(n){var i=n.target;t.isActionButton_(i)?t.foundation_.handleActionButtonClick(n):t.isActionIcon_(i)&&t.foundation_.handleActionIconClick(n)},this.registerKeyDownHandler_(this.handleKeyDown_),this.registerSurfaceClickHandler_(this.handleSurfaceClick_)},n.prototype.destroy=function(){t.prototype.destroy.call(this),this.deregisterKeyDownHandler_(this.handleKeyDown_),this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_)},n.prototype.open=function(){this.foundation_.open()},n.prototype.close=function(t){void 0===t&&(t=""),this.foundation_.close(t)},n.prototype.getDefaultFoundation=function(){var t=this;return new T({addClass:function(n){return t.root_.classList.add(n)},announce:function(){return t.announce_(t.labelEl_)},notifyClosed:function(n){return t.emit(k,n?{reason:n}:{})},notifyClosing:function(n){return t.emit(C,n?{reason:n}:{})},notifyOpened:function(){return t.emit(M,{})},notifyOpening:function(){return t.emit(I,{})},removeClass:function(n){return t.root_.classList.remove(n)}})},Object.defineProperty(n.prototype,"timeoutMs",{get:function(){return this.foundation_.getTimeoutMs()},set:function(t){this.foundation_.setTimeoutMs(t)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"closeOnEscape",{get:function(){return this.foundation_.getCloseOnEscape()},set:function(t){this.foundation_.setCloseOnEscape(t)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isOpen",{get:function(){return this.foundation_.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"labelText",{get:function(){return this.labelEl_.textContent},set:function(t){this.labelEl_.textContent=t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"actionButtonText",{get:function(){return this.actionEl_.textContent},set:function(t){this.actionEl_.textContent=t},enumerable:!0,configurable:!0}),n.prototype.registerKeyDownHandler_=function(t){this.listen("keydown",t)},n.prototype.deregisterKeyDownHandler_=function(t){this.unlisten("keydown",t)},n.prototype.registerSurfaceClickHandler_=function(t){this.surfaceEl_.addEventListener("click",t)},n.prototype.deregisterSurfaceClickHandler_=function(t){this.surfaceEl_.removeEventListener("click",t)},n.prototype.isActionButton_=function(t){return Boolean(o(t,A))},n.prototype.isActionIcon_=function(t){return Boolean(o(t,p))},n}(c);const N=(n,i)=>{const e=Object.assign({},n),{class:s,stacked:c,leading:o}=e,a=function(t,n){var i={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(i[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(i[e[s]]=t[e[s]])}return i}(e,["class","stacked","leading"]);return t("div",Object.assign({class:Object.assign({"mdc-snackbar":!0,"mdc-snackbar--stacked":c,"mdc-snackbar--leading":o},r(s))},a),t("div",{class:"mdc-snackbar__surface"},i))},y=class{constructor(t){n(this,t)}async open(){this.mdcSnackbar.open()}async close(t){this.mdcSnackbar.close(t)}async isOpen(){return this.mdcSnackbar.isOpen}async getTimeoutMs(){return this.mdcSnackbar.timeoutMs}async setTimeoutMs(t){this.mdcSnackbar.timeoutMs=t}async getCloseOnEscape(){return this.mdcSnackbar.closeOnEscape}async setCloseOnEscape(t){this.mdcSnackbar.closeOnEscape=t}async getLabelText(){return this.mdcSnackbar.labelText}async setLabelText(t){this.mdcSnackbar.labelText=t}async getActionButtonText(){return this.mdcSnackbar.actionButtonText}async setActionButtonText(t){this.mdcSnackbar.actionButtonText=t}componentDidLoad(){this.mdcSnackbar=new v(this.snackbar)}componentDidUnload(){this.mdcSnackbar.destroy()}render(){return t(N,{ref:t=>this.snackbar=t},t("slot",null))}static get style(){return".mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:hsla(0,0%,100%,.87)}.mdc-snackbar__surface{min-width:344px}\@media (max-width:344px),(max-width:480px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px;-webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);border-radius:4px}.mdc-snackbar--closing,.mdc-snackbar--open,.mdc-snackbar--opening{display:-ms-flexbox;display:flex}.mdc-snackbar--leading{-ms-flex-pack:start;justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__surface{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{-ms-flex-item-align:end;align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:scale(.8);transform:scale(.8);opacity:0}.mdc-snackbar--open .mdc-snackbar__surface{-webkit-transform:scale(1);transform:scale(1);opacity:1;pointer-events:auto;-webkit-transition:opacity .15s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .15s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .15s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .15s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .15s cubic-bezier(0,0,.2,1) 0ms,transform .15s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .15s cubic-bezier(0,0,.2,1) 0ms,transform .15s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .15s cubic-bezier(0,0,.2,1) 0ms}.mdc-snackbar--closing .mdc-snackbar__surface{-webkit-transform:scale(1);transform:scale(1);-webkit-transition:opacity 75ms cubic-bezier(.4,0,1,1) 0ms;transition:opacity 75ms cubic-bezier(.4,0,1,1) 0ms}.mdc-snackbar__label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;-ms-flex-positive:1;flex-grow:1;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:14px 16px}.mdc-snackbar__label:before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{margin-left:0;margin-right:8px;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.mdc-snackbar__actions[dir=rtl],[dir=rtl] .mdc-snackbar__actions{margin-left:8px;margin-right:0}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action:after,.mdc-snackbar__action:before{background-color:#bb86fc}.mdc-snackbar__action:hover:before{opacity:.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss{color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss:after,.mdc-snackbar__dismiss:before{background-color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss:hover:before{opacity:.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss img,.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl],[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:0;margin-right:8px}"}};export{y as mdc_snackbar};