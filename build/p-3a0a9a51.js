/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(t,r)};function t(t,r){function o(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}var r=function(){return(r=Object.assign||function(n){for(var t,r=1,o=arguments.length;r<o;r++)for(var e in t=arguments[r])Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n}).apply(this,arguments)};function o(n){var t="function"==typeof Symbol&&n[Symbol.iterator],r=0;return t?t.call(n):{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}}}function e(n,t){var r="function"==typeof Symbol&&n[Symbol.iterator];if(!r)return n;var o,e,u=r.call(n),i=[];try{for(;(void 0===t||t-- >0)&&!(o=u.next()).done;)i.push(o.value)}catch(f){e={error:f}}finally{try{o&&!o.done&&(r=u.return)&&r.call(u)}finally{if(e)throw e.error}}return i}function u(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(e(arguments[t]));return n}
/**
 * @license
 * Copyright 2016 Google Inc.
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
 */var i=function(){function n(n){void 0===n&&(n={}),this.adapter_=n}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}(),f=function(){function n(n,t){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];this.root_=n,this.initialize.apply(this,u(r)),this.foundation_=void 0===t?this.getDefaultFoundation():t,this.foundation_.init(),this.initialSyncWithDOM()}return n.attachTo=function(t){return new n(t,new i({}))},n.prototype.initialize=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]},n.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},n.prototype.initialSyncWithDOM=function(){},n.prototype.destroy=function(){this.foundation_.destroy()},n.prototype.listen=function(n,t,r){this.root_.addEventListener(n,t,r)},n.prototype.unlisten=function(n,t,r){this.root_.removeEventListener(n,t,r)},n.prototype.emit=function(n,t,r){var o;void 0===r&&(r=!1),"function"==typeof CustomEvent?o=new CustomEvent(n,{bubbles:r,detail:t}):(o=document.createEvent("CustomEvent")).initCustomEvent(n,r,!1,t),this.root_.dispatchEvent(o)},n}();
/**
 * @license
 * Copyright 2016 Google Inc.
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
 */export{i as M,t as _,r as a,f as b,o as c,u as d};