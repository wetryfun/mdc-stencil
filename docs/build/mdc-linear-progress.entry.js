import { h, r as registerInstance } from './core-ec54a9ee.js';
import { _ as __extends, a as __assign, M as MDCFoundation, b as MDCComponent } from './component-04842584.js';
import { c as classNames } from './utils-3ab3a058.js';
import { a as getCorrectPropertyName } from './util-30c9d9e9.js';

/**
 * @license
 * Copyright 2017 Google Inc.
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
var cssClasses = {
    CLOSED_CLASS: 'mdc-linear-progress--closed',
    INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
    REVERSED_CLASS: 'mdc-linear-progress--reversed',
};
var strings = {
    BUFFER_SELECTOR: '.mdc-linear-progress__buffer',
    PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
};

/**
 * @license
 * Copyright 2017 Google Inc.
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
var MDCLinearProgressFoundation = /** @class */ (function (_super) {
    __extends(MDCLinearProgressFoundation, _super);
    function MDCLinearProgressFoundation(adapter) {
        return _super.call(this, __assign({}, MDCLinearProgressFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCLinearProgressFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLinearProgressFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLinearProgressFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                forceLayout: function () { return undefined; },
                getBuffer: function () { return null; },
                getPrimaryBar: function () { return null; },
                hasClass: function () { return false; },
                removeClass: function () { return undefined; },
                setStyle: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCLinearProgressFoundation.prototype.init = function () {
        this.isDeterminate_ = !this.adapter_.hasClass(cssClasses.INDETERMINATE_CLASS);
        this.isReversed_ = this.adapter_.hasClass(cssClasses.REVERSED_CLASS);
        this.progress_ = 0;
        this.buffer_ = 1;
    };
    MDCLinearProgressFoundation.prototype.setDeterminate = function (isDeterminate) {
        this.isDeterminate_ = isDeterminate;
        if (this.isDeterminate_) {
            this.adapter_.removeClass(cssClasses.INDETERMINATE_CLASS);
            this.setScale_(this.adapter_.getPrimaryBar(), this.progress_);
            this.setScale_(this.adapter_.getBuffer(), this.buffer_);
        }
        else {
            if (this.isReversed_) {
                // Adding/removing REVERSED_CLASS starts a translate animation, while
                // adding INDETERMINATE_CLASS starts a scale animation. Here, we reset
                // the translate animation in order to keep it in sync with the new
                // scale animation that will start from adding INDETERMINATE_CLASS
                // below.
                this.adapter_.removeClass(cssClasses.REVERSED_CLASS);
                this.adapter_.forceLayout();
                this.adapter_.addClass(cssClasses.REVERSED_CLASS);
            }
            this.adapter_.addClass(cssClasses.INDETERMINATE_CLASS);
            this.setScale_(this.adapter_.getPrimaryBar(), 1);
            this.setScale_(this.adapter_.getBuffer(), 1);
        }
    };
    MDCLinearProgressFoundation.prototype.setProgress = function (value) {
        this.progress_ = value;
        if (this.isDeterminate_) {
            this.setScale_(this.adapter_.getPrimaryBar(), value);
        }
    };
    MDCLinearProgressFoundation.prototype.setBuffer = function (value) {
        this.buffer_ = value;
        if (this.isDeterminate_) {
            this.setScale_(this.adapter_.getBuffer(), value);
        }
    };
    MDCLinearProgressFoundation.prototype.setReverse = function (isReversed) {
        this.isReversed_ = isReversed;
        if (!this.isDeterminate_) {
            // Adding INDETERMINATE_CLASS starts a scale animation, while
            // adding/removing REVERSED_CLASS starts a translate animation. Here, we
            // reset the scale animation in order to keep it in sync with the new
            // translate animation that will start from adding/removing REVERSED_CLASS
            // below.
            this.adapter_.removeClass(cssClasses.INDETERMINATE_CLASS);
            this.adapter_.forceLayout();
            this.adapter_.addClass(cssClasses.INDETERMINATE_CLASS);
        }
        if (this.isReversed_) {
            this.adapter_.addClass(cssClasses.REVERSED_CLASS);
        }
        else {
            this.adapter_.removeClass(cssClasses.REVERSED_CLASS);
        }
    };
    MDCLinearProgressFoundation.prototype.open = function () {
        this.adapter_.removeClass(cssClasses.CLOSED_CLASS);
    };
    MDCLinearProgressFoundation.prototype.close = function () {
        this.adapter_.addClass(cssClasses.CLOSED_CLASS);
    };
    MDCLinearProgressFoundation.prototype.setScale_ = function (el, scaleValue) {
        if (!el) {
            return;
        }
        var value = "scaleX(" + scaleValue + ")";
        this.adapter_.setStyle(el, getCorrectPropertyName(window, 'transform'), value);
    };
    return MDCLinearProgressFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2017 Google Inc.
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
var MDCLinearProgress = /** @class */ (function (_super) {
    __extends(MDCLinearProgress, _super);
    function MDCLinearProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCLinearProgress.attachTo = function (root) {
        return new MDCLinearProgress(root);
    };
    Object.defineProperty(MDCLinearProgress.prototype, "determinate", {
        set: function (value) {
            this.foundation_.setDeterminate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLinearProgress.prototype, "progress", {
        set: function (value) {
            this.foundation_.setProgress(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLinearProgress.prototype, "buffer", {
        set: function (value) {
            this.foundation_.setBuffer(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLinearProgress.prototype, "reverse", {
        set: function (value) {
            this.foundation_.setReverse(value);
        },
        enumerable: true,
        configurable: true
    });
    MDCLinearProgress.prototype.open = function () {
        this.foundation_.open();
    };
    MDCLinearProgress.prototype.close = function () {
        this.foundation_.close();
    };
    MDCLinearProgress.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            forceLayout: function () { return _this.root_.offsetWidth; },
            getBuffer: function () { return _this.root_.querySelector(MDCLinearProgressFoundation.strings.BUFFER_SELECTOR); },
            getPrimaryBar: function () { return _this.root_.querySelector(MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            setStyle: function (el, styleProperty, value) { return el.style.setProperty(styleProperty, value); },
        };
        return new MDCLinearProgressFoundation(adapter);
    };
    return MDCLinearProgress;
}(MDCComponent));

/**
 * @license
 * Copyright 2019 Google Inc.
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

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const MdcLinearProgress = props => {
    const _a = Object.assign({}, props), { class: className, indeterminate, reversed, closed } = _a, rest = __rest(_a, ["class", "indeterminate", "reversed", "closed"]);
    return (h("div", Object.assign({ role: 'progressbar', class: Object.assign({ 'mdc-linear-progress': true, 'mdc-linear-progress--indeterminate': indeterminate, 'mdc-linear-progress--reversed': reversed, 'mdc-linear-progress--closed': closed }, classNames(className)) }, rest),
        h("div", { class: 'mdc-linear-progress__buffering-dots' }),
        h("div", { class: 'mdc-linear-progress__buffer' }),
        h("div", { class: 'mdc-linear-progress__bar mdc-linear-progress__primary-bar' },
            h("span", { class: 'mdc-linear-progress__bar-inner' })),
        h("div", { class: 'mdc-linear-progress__bar mdc-linear-progress__secondary-bar' },
            h("span", { class: 'mdc-linear-progress__bar-inner' }))));
};

const MdcLinearProgress$1 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async getDeterminate() {
        return this.mdcProgress.determinate;
    }
    async setDeterminate(value) {
        this.mdcProgress.determinate = value;
    }
    async getProgress() {
        return this.mdcProgress.progress;
    }
    async setProgress(value) {
        this.mdcProgress.progress = value;
    }
    async getBuffer() {
        return this.mdcProgress.buffer;
    }
    async setBuffer(value) {
        this.mdcProgress.buffer = value;
    }
    async getReverse() {
        return this.mdcProgress.reverse;
    }
    async setReverse(value) {
        this.mdcProgress.reverse = value;
    }
    async open() {
        this.mdcProgress.open();
    }
    async close() {
        this.mdcProgress.close();
    }
    componentDidLoad() {
        this.mdcProgress = new MDCLinearProgress(this.progress);
    }
    componentDidUnload() {
        this.mdcProgress.destroy();
    }
    render() {
        return h(MdcLinearProgress, { ref: el => (this.progress = el) });
    }
    static get style() { return "\@-webkit-keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  20% {\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  59.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    -webkit-transform: translateX(83.67142%);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    -webkit-transform: translateX(200.611057%);\n    transform: translateX(200.611057%);\n  }\n}\n\@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  20% {\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  59.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    -webkit-transform: translateX(83.67142%);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    -webkit-transform: translateX(200.611057%);\n    transform: translateX(200.611057%);\n  }\n}\n\@-webkit-keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    -webkit-animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    -webkit-transform: scaleX(0.661479);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n}\n\@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    -webkit-animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    -webkit-transform: scaleX(0.661479);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n}\n\@-webkit-keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  25% {\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    -webkit-transform: translateX(37.651913%);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    -webkit-transform: translateX(84.386165%);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    -webkit-transform: translateX(160.277782%);\n    transform: translateX(160.277782%);\n  }\n}\n\@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  25% {\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    -webkit-transform: translateX(37.651913%);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    -webkit-transform: translateX(84.386165%);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    -webkit-transform: translateX(160.277782%);\n    transform: translateX(160.277782%);\n  }\n}\n\@-webkit-keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    -webkit-transform: scaleX(0.457104);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    -webkit-transform: scaleX(0.72796);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n}\n\@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    -webkit-transform: scaleX(0.457104);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    -webkit-transform: scaleX(0.72796);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    -webkit-transform: scaleX(0.08);\n    transform: scaleX(0.08);\n  }\n}\n\@-webkit-keyframes mdc-linear-progress-buffering {\n  to {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n}\n\@keyframes mdc-linear-progress-buffering {\n  to {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n}\n\@-webkit-keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  20% {\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  59.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    -webkit-transform: translateX(-83.67142%);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    -webkit-transform: translateX(-200.611057%);\n    transform: translateX(-200.611057%);\n  }\n}\n\@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  20% {\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  59.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    -webkit-transform: translateX(-83.67142%);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    -webkit-transform: translateX(-200.611057%);\n    transform: translateX(-200.611057%);\n  }\n}\n\@-webkit-keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  25% {\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    -webkit-transform: translateX(-37.651913%);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    -webkit-transform: translateX(-84.386165%);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    -webkit-transform: translateX(-160.277782%);\n    transform: translateX(-160.277782%);\n  }\n}\n\@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  25% {\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    -webkit-transform: translateX(-37.651913%);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    -webkit-transform: translateX(-84.386165%);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    -webkit-transform: translateX(-160.277782%);\n    transform: translateX(-160.277782%);\n  }\n}\n\@-webkit-keyframes mdc-linear-progress-buffering-reverse {\n  to {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n}\n\@keyframes mdc-linear-progress-buffering-reverse {\n  to {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n}\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  height: 4px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow: hidden;\n  -webkit-transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-linear-progress__bar {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-animation: none;\n  animation: none;\n  -webkit-transform-origin: top left;\n  transform-origin: top left;\n  -webkit-transition: -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  -webkit-animation: none;\n  animation: none;\n  border-top: 4px solid;\n}\n.mdc-linear-progress__buffering-dots {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-repeat: repeat-x;\n  background-size: 10px 4px;\n  -webkit-animation: mdc-linear-progress-buffering 250ms infinite linear;\n  animation: mdc-linear-progress-buffering 250ms infinite linear;\n}\n.mdc-linear-progress__buffer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-transform-origin: top left;\n  transform-origin: top left;\n  -webkit-transition: -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-linear-progress__primary-bar {\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n}\n.mdc-linear-progress__secondary-bar {\n  visibility: hidden;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  -webkit-transition: none;\n  transition: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n  -webkit-animation: mdc-linear-progress-primary-indeterminate-translate 2s infinite linear;\n  animation: mdc-linear-progress-primary-indeterminate-translate 2s infinite linear;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  -webkit-animation: mdc-linear-progress-primary-indeterminate-scale 2s infinite linear;\n  animation: mdc-linear-progress-primary-indeterminate-scale 2s infinite linear;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  visibility: visible;\n  -webkit-animation: mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear;\n  animation: mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  -webkit-animation: mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear;\n  animation: mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear;\n}\n.mdc-linear-progress--reversed .mdc-linear-progress__bar,\n.mdc-linear-progress--reversed .mdc-linear-progress__buffer {\n  right: 0;\n  -webkit-transform-origin: center right;\n  transform-origin: center right;\n}\n.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar {\n  -webkit-animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar {\n  -webkit-animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n.mdc-linear-progress--reversed .mdc-linear-progress__buffering-dots {\n  -webkit-animation: mdc-linear-progress-buffering-reverse 250ms infinite linear;\n  animation: mdc-linear-progress-buffering-reverse 250ms infinite linear;\n}\n.mdc-linear-progress--closed {\n  opacity: 0;\n  -webkit-animation: none;\n  animation: none;\n}\n\n.mdc-linear-progress__bar-inner {\n  border-color: #6200ee;\n  /* \@alternate */\n  border-color: var(--mdc-theme-primary, #6200ee);\n}\n\n.mdc-linear-progress__buffering-dots {\n  background-image: url(\"data:image/svg+xml,%3Csvg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' enable-background=\'new 0 0 5 2\' xml:space=\'preserve\' viewBox=\'0 0 5 2\' preserveAspectRatio=\'none slice\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'%23e6e6e6\'/%3E%3C/svg%3E\");\n}\n\n.mdc-linear-progress__buffer {\n  background-color: #e6e6e6;\n}\n\n.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\nmdc-linear-progress {\n  display: block;\n}"; }
};

export { MdcLinearProgress$1 as mdc_linear_progress };
