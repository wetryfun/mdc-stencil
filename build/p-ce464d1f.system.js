System.register([],(function(t){"use strict";return{execute:function(){t({_:n,c:o,d:u});
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
            ***************************************************************************** */var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)if(e.hasOwnProperty(n))t[n]=e[n]};return e(t,n)};function n(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}var r=t("a",(function(){r=t("a",Object.assign||function t(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i))e[i]=n[i]}return e});return r.apply(this,arguments)}));function o(t){var e=typeof Symbol==="function"&&t[Symbol.iterator],n=0;if(e)return e.call(t);return{next:function(){if(t&&n>=t.length)t=void 0;return{value:t&&t[n++],done:!t}}}}function i(t,e){var n=typeof Symbol==="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],u;try{while((e===void 0||e-- >0)&&!(o=r.next()).done)i.push(o.value)}catch(f){u={error:f}}finally{try{if(o&&!o.done&&(n=r["return"]))n.call(r)}finally{if(u)throw u.error}}return i}function u(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(i(arguments[e]));return t}
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
             */var f=t("M",function(){function t(t){if(t===void 0){t={}}this.adapter_=t}Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:true,configurable:true});Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:true,configurable:true});Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:true,configurable:true});Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:true,configurable:true});t.prototype.init=function(){};t.prototype.destroy=function(){};return t}());
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
             */var a=t("b",function(){function t(t,e){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}this.root_=t;this.initialize.apply(this,u(n));this.foundation_=e===undefined?this.getDefaultFoundation():e;this.foundation_.init();this.initialSyncWithDOM()}t.attachTo=function(e){return new t(e,new f({}))};t.prototype.initialize=function(){var t=[];for(var e=0;e<arguments.length;e++){t[e]=arguments[e]}};t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured "+"foundation class")};t.prototype.initialSyncWithDOM=function(){};t.prototype.destroy=function(){this.foundation_.destroy()};t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)};t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)};t.prototype.emit=function(t,e,n){if(n===void 0){n=false}var r;if(typeof CustomEvent==="function"){r=new CustomEvent(t,{bubbles:n,detail:e})}else{r=document.createEvent("CustomEvent");r.initCustomEvent(t,n,false,e)}this.root_.dispatchEvent(r)};return t}())}}}));