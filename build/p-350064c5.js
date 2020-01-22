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
var n=function(r,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(r,t)};function r(r,t){function e(){this.constructor=r}n(r,t),r.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}var t=function(){return(t=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n}).apply(this,arguments)};function e(n){var r="function"==typeof Symbol&&n[Symbol.iterator],t=0;return r?r.call(n):{next:function(){return n&&t>=n.length&&(n=void 0),{value:n&&n[t++],done:!n}}}}function o(n,r){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,o,u=t.call(n),i=[];try{for(;(void 0===r||r-- >0)&&!(e=u.next()).done;)i.push(e.value)}catch(c){o={error:c}}finally{try{e&&!e.done&&(t=u.return)&&t.call(u)}finally{if(o)throw o.error}}return i}function u(){for(var n=[],r=0;r<arguments.length;r++)n=n.concat(o(arguments[r]));return n}
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
 */var i=function(){function n(n){void 0===n&&(n={}),this.adapter_=n}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}();export{i as M,r as _,t as a,u as b,e as c};