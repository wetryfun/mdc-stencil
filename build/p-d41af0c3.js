import{b as t,M as n}from"./p-350064c5.js";
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
 */var o=function(){function o(n,o){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];this.root_=n,this.initialize.apply(this,t(i)),this.foundation_=void 0===o?this.getDefaultFoundation():o,this.foundation_.init(),this.initialSyncWithDOM()}return o.attachTo=function(t){return new o(t,new n({}))},o.prototype.initialize=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},o.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},o.prototype.initialSyncWithDOM=function(){},o.prototype.destroy=function(){this.foundation_.destroy()},o.prototype.listen=function(t,n,o){this.root_.addEventListener(t,n,o)},o.prototype.unlisten=function(t,n,o){this.root_.removeEventListener(t,n,o)},o.prototype.emit=function(t,n,o){var i;void 0===o&&(o=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:o,detail:n}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,o,!1,n),this.root_.dispatchEvent(i)},o}();export{o as M};