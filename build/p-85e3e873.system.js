System.register(["./p-5ac0c608.system.js"],(function(t){"use strict";var n,e;return{setters:[function(t){n=t.b;e=t.M}],execute:function(){
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
             */
var o=t("M",function(){function t(t,e){var o=[];for(var i=2;i<arguments.length;i++){o[i-2]=arguments[i]}this.root_=t;this.initialize.apply(this,n(o));this.foundation_=e===undefined?this.getDefaultFoundation():e;this.foundation_.init();this.initialSyncWithDOM()}t.attachTo=function(n){return new t(n,new e({}))};t.prototype.initialize=function(){var t=[];for(var n=0;n<arguments.length;n++){t[n]=arguments[n]}};t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured "+"foundation class")};t.prototype.initialSyncWithDOM=function(){};t.prototype.destroy=function(){this.foundation_.destroy()};t.prototype.listen=function(t,n,e){this.root_.addEventListener(t,n,e)};t.prototype.unlisten=function(t,n,e){this.root_.removeEventListener(t,n,e)};t.prototype.emit=function(t,n,e){if(e===void 0){e=false}var o;if(typeof CustomEvent==="function"){o=new CustomEvent(t,{bubbles:e,detail:n})}else{o=document.createEvent("CustomEvent");o.initCustomEvent(t,e,false,n)}this.root_.dispatchEvent(o)};return t}())}}}));