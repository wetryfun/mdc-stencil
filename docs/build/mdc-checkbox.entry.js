import { h, r as registerInstance } from './core-ec54a9ee.js';
import { M as MDCRipple, a as applyPassive, b as MDCRippleFoundation } from './component-43330259.js';
import { _ as __extends, a as __assign, M as MDCFoundation, b as MDCComponent } from './component-04842584.js';
import { m as matches } from './ponyfill-f805c928.js';
import { c as classNames } from './utils-3ab3a058.js';
import { g as getCorrectEventName } from './util-30c9d9e9.js';

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
const MdcCheckbox = props => {
    const _a = Object.assign({}, props), { class: className, ref, inputRef } = _a, rest = __rest(_a, ["class", "ref", "inputRef"]);
    return (h("div", { class: Object.assign({ 'mdc-checkbox': true }, classNames(className)), ref: ref },
        h("input", Object.assign({ type: 'checkbox', class: 'mdc-checkbox__native-control', ref: inputRef }, rest)),
        h("div", { class: 'mdc-checkbox__background' },
            h("svg", { class: 'mdc-checkbox__checkmark', viewBox: '0 0 24 24' },
                h("path", { class: 'mdc-checkbox__checkmark-path', fill: 'none', d: 'M1.73,12.91 8.1,19.28 22.79,4.59' })),
            h("div", { class: 'mdc-checkbox__mixedmark' }))));
};

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
var cssClasses = {
    ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
    ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
    ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
    ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
    ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
    ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
    BACKGROUND: 'mdc-checkbox__background',
    CHECKED: 'mdc-checkbox--checked',
    CHECKMARK: 'mdc-checkbox__checkmark',
    CHECKMARK_PATH: 'mdc-checkbox__checkmark-path',
    DISABLED: 'mdc-checkbox--disabled',
    INDETERMINATE: 'mdc-checkbox--indeterminate',
    MIXEDMARK: 'mdc-checkbox__mixedmark',
    NATIVE_CONTROL: 'mdc-checkbox__native-control',
    ROOT: 'mdc-checkbox',
    SELECTED: 'mdc-checkbox--selected',
    UPGRADED: 'mdc-checkbox--upgraded',
};
var strings = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed',
    NATIVE_CONTROL_SELECTOR: '.mdc-checkbox__native-control',
    TRANSITION_STATE_CHECKED: 'checked',
    TRANSITION_STATE_INDETERMINATE: 'indeterminate',
    TRANSITION_STATE_INIT: 'init',
    TRANSITION_STATE_UNCHECKED: 'unchecked',
};
var numbers = {
    ANIM_END_LATCH_MS: 250,
};

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
var MDCCheckboxFoundation = /** @class */ (function (_super) {
    __extends(MDCCheckboxFoundation, _super);
    function MDCCheckboxFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCCheckboxFoundation.defaultAdapter, adapter)) || this;
        _this.currentCheckState_ = strings.TRANSITION_STATE_INIT;
        _this.currentAnimationClass_ = '';
        _this.animEndLatchTimer_ = 0;
        _this.enableAnimationEndHandler_ = false;
        return _this;
    }
    Object.defineProperty(MDCCheckboxFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                forceLayout: function () { return undefined; },
                hasNativeControl: function () { return false; },
                isAttachedToDOM: function () { return false; },
                isChecked: function () { return false; },
                isIndeterminate: function () { return false; },
                removeClass: function () { return undefined; },
                removeNativeControlAttr: function () { return undefined; },
                setNativeControlAttr: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCCheckboxFoundation.prototype.init = function () {
        this.currentCheckState_ = this.determineCheckState_();
        this.updateAriaChecked_();
        this.adapter_.addClass(cssClasses.UPGRADED);
    };
    MDCCheckboxFoundation.prototype.destroy = function () {
        clearTimeout(this.animEndLatchTimer_);
    };
    MDCCheckboxFoundation.prototype.setDisabled = function (disabled) {
        this.adapter_.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter_.addClass(cssClasses.DISABLED);
        }
        else {
            this.adapter_.removeClass(cssClasses.DISABLED);
        }
    };
    /**
     * Handles the animationend event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleAnimationEnd = function () {
        var _this = this;
        if (!this.enableAnimationEndHandler_) {
            return;
        }
        clearTimeout(this.animEndLatchTimer_);
        this.animEndLatchTimer_ = setTimeout(function () {
            _this.adapter_.removeClass(_this.currentAnimationClass_);
            _this.enableAnimationEndHandler_ = false;
        }, numbers.ANIM_END_LATCH_MS);
    };
    /**
     * Handles the change event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleChange = function () {
        this.transitionCheckState_();
    };
    MDCCheckboxFoundation.prototype.transitionCheckState_ = function () {
        if (!this.adapter_.hasNativeControl()) {
            return;
        }
        var oldState = this.currentCheckState_;
        var newState = this.determineCheckState_();
        if (oldState === newState) {
            return;
        }
        this.updateAriaChecked_();
        var TRANSITION_STATE_UNCHECKED = strings.TRANSITION_STATE_UNCHECKED;
        var SELECTED = cssClasses.SELECTED;
        if (newState === TRANSITION_STATE_UNCHECKED) {
            this.adapter_.removeClass(SELECTED);
        }
        else {
            this.adapter_.addClass(SELECTED);
        }
        // Check to ensure that there isn't a previously existing animation class, in case for example
        // the user interacted with the checkbox before the animation was finished.
        if (this.currentAnimationClass_.length > 0) {
            clearTimeout(this.animEndLatchTimer_);
            this.adapter_.forceLayout();
            this.adapter_.removeClass(this.currentAnimationClass_);
        }
        this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
        this.currentCheckState_ = newState;
        // Check for parentNode so that animations are only run when the element is attached
        // to the DOM.
        if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
            this.adapter_.addClass(this.currentAnimationClass_);
            this.enableAnimationEndHandler_ = true;
        }
    };
    MDCCheckboxFoundation.prototype.determineCheckState_ = function () {
        var TRANSITION_STATE_INDETERMINATE = strings.TRANSITION_STATE_INDETERMINATE, TRANSITION_STATE_CHECKED = strings.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = strings.TRANSITION_STATE_UNCHECKED;
        if (this.adapter_.isIndeterminate()) {
            return TRANSITION_STATE_INDETERMINATE;
        }
        return this.adapter_.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
    };
    MDCCheckboxFoundation.prototype.getTransitionAnimationClass_ = function (oldState, newState) {
        var TRANSITION_STATE_INIT = strings.TRANSITION_STATE_INIT, TRANSITION_STATE_CHECKED = strings.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = strings.TRANSITION_STATE_UNCHECKED;
        var _a = MDCCheckboxFoundation.cssClasses, ANIM_UNCHECKED_CHECKED = _a.ANIM_UNCHECKED_CHECKED, ANIM_UNCHECKED_INDETERMINATE = _a.ANIM_UNCHECKED_INDETERMINATE, ANIM_CHECKED_UNCHECKED = _a.ANIM_CHECKED_UNCHECKED, ANIM_CHECKED_INDETERMINATE = _a.ANIM_CHECKED_INDETERMINATE, ANIM_INDETERMINATE_CHECKED = _a.ANIM_INDETERMINATE_CHECKED, ANIM_INDETERMINATE_UNCHECKED = _a.ANIM_INDETERMINATE_UNCHECKED;
        switch (oldState) {
            case TRANSITION_STATE_INIT:
                if (newState === TRANSITION_STATE_UNCHECKED) {
                    return '';
                }
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
            case TRANSITION_STATE_UNCHECKED:
                return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
            case TRANSITION_STATE_CHECKED:
                return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
            default: // TRANSITION_STATE_INDETERMINATE
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
        }
    };
    MDCCheckboxFoundation.prototype.updateAriaChecked_ = function () {
        // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
        if (this.adapter_.isIndeterminate()) {
            this.adapter_.setNativeControlAttr(strings.ARIA_CHECKED_ATTR, strings.ARIA_CHECKED_INDETERMINATE_VALUE);
        }
        else {
            // The on/off state does not need to keep track of aria-checked, since
            // the screenreader uses the checked property on the checkbox element.
            this.adapter_.removeNativeControlAttr(strings.ARIA_CHECKED_ATTR);
        }
    };
    return MDCCheckboxFoundation;
}(MDCFoundation));

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
var CB_PROTO_PROPS = ['checked', 'indeterminate'];
var MDCCheckbox = /** @class */ (function (_super) {
    __extends(MDCCheckbox, _super);
    function MDCCheckbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ripple_ = _this.createRipple_();
        return _this;
    }
    MDCCheckbox.attachTo = function (root) {
        return new MDCCheckbox(root);
    };
    Object.defineProperty(MDCCheckbox.prototype, "ripple", {
        get: function () {
            return this.ripple_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "checked", {
        get: function () {
            return this.nativeControl_.checked;
        },
        set: function (checked) {
            this.nativeControl_.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "indeterminate", {
        get: function () {
            return this.nativeControl_.indeterminate;
        },
        set: function (indeterminate) {
            this.nativeControl_.indeterminate = indeterminate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "disabled", {
        get: function () {
            return this.nativeControl_.disabled;
        },
        set: function (disabled) {
            this.foundation_.setDisabled(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "value", {
        get: function () {
            return this.nativeControl_.value;
        },
        set: function (value) {
            this.nativeControl_.value = value;
        },
        enumerable: true,
        configurable: true
    });
    MDCCheckbox.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleChange_ = function () { return _this.foundation_.handleChange(); };
        this.handleAnimationEnd_ = function () { return _this.foundation_.handleAnimationEnd(); };
        this.nativeControl_.addEventListener('change', this.handleChange_);
        this.listen(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
        this.installPropertyChangeHooks_();
    };
    MDCCheckbox.prototype.destroy = function () {
        this.ripple_.destroy();
        this.nativeControl_.removeEventListener('change', this.handleChange_);
        this.unlisten(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
        this.uninstallPropertyChangeHooks_();
        _super.prototype.destroy.call(this);
    };
    MDCCheckbox.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            forceLayout: function () { return _this.root_.offsetWidth; },
            hasNativeControl: function () { return !!_this.nativeControl_; },
            isAttachedToDOM: function () { return Boolean(_this.root_.parentNode); },
            isChecked: function () { return _this.checked; },
            isIndeterminate: function () { return _this.indeterminate; },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            removeNativeControlAttr: function (attr) { return _this.nativeControl_.removeAttribute(attr); },
            setNativeControlAttr: function (attr, value) { return _this.nativeControl_.setAttribute(attr, value); },
            setNativeControlDisabled: function (disabled) { return _this.nativeControl_.disabled = disabled; },
        };
        return new MDCCheckboxFoundation(adapter);
    };
    MDCCheckbox.prototype.createRipple_ = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = __assign({}, MDCRipple.createAdapter(this), { deregisterInteractionHandler: function (evtType, handler) { return _this.nativeControl_.removeEventListener(evtType, handler, applyPassive()); }, isSurfaceActive: function () { return matches(_this.nativeControl_, ':active'); }, isUnbounded: function () { return true; }, registerInteractionHandler: function (evtType, handler) { return _this.nativeControl_.addEventListener(evtType, handler, applyPassive()); } });
        return new MDCRipple(this.root_, new MDCRippleFoundation(adapter));
    };
    MDCCheckbox.prototype.installPropertyChangeHooks_ = function () {
        var _this = this;
        var nativeCb = this.nativeControl_;
        var cbProto = Object.getPrototypeOf(nativeCb);
        CB_PROTO_PROPS.forEach(function (controlState) {
            var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
            // We have to check for this descriptor, since some browsers (Safari) don't support its return.
            // See: https://bugs.webkit.org/show_bug.cgi?id=49739
            if (!validDescriptor(desc)) {
                return;
            }
            // Type cast is needed for compatibility with Closure Compiler.
            var nativeGetter = desc.get;
            var nativeCbDesc = {
                configurable: desc.configurable,
                enumerable: desc.enumerable,
                get: nativeGetter,
                set: function (state) {
                    desc.set.call(nativeCb, state);
                    _this.foundation_.handleChange();
                },
            };
            Object.defineProperty(nativeCb, controlState, nativeCbDesc);
        });
    };
    MDCCheckbox.prototype.uninstallPropertyChangeHooks_ = function () {
        var nativeCb = this.nativeControl_;
        var cbProto = Object.getPrototypeOf(nativeCb);
        CB_PROTO_PROPS.forEach(function (controlState) {
            var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
            if (!validDescriptor(desc)) {
                return;
            }
            Object.defineProperty(nativeCb, controlState, desc);
        });
    };
    Object.defineProperty(MDCCheckbox.prototype, "nativeControl_", {
        get: function () {
            var NATIVE_CONTROL_SELECTOR = MDCCheckboxFoundation.strings.NATIVE_CONTROL_SELECTOR;
            var el = this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
            if (!el) {
                throw new Error("Checkbox component requires a " + NATIVE_CONTROL_SELECTOR + " element");
            }
            return el;
        },
        enumerable: true,
        configurable: true
    });
    return MDCCheckbox;
}(MDCComponent));
function validDescriptor(inputPropDesc) {
    return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

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

const MdcCheckbox$1 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async layout() {
        this.mdcCheckbox.ripple.layout();
    }
    componentDidLoad() {
        this.mdcCheckbox = new MDCCheckbox(this.checkbox);
    }
    componentDidUnload() {
        this.mdcCheckbox.destroy();
    }
    componentDidRender() {
        const { mdcCheckbox, checked, disabled, indeterminate } = this;
        if (mdcCheckbox) {
            mdcCheckbox.checked = checked;
            mdcCheckbox.disabled = disabled;
            mdcCheckbox.indeterminate = indeterminate;
            mdcCheckbox.ripple.layout();
        }
    }
    render() {
        const { checked, disabled, indeterminate, name, value } = this;
        return (h(MdcCheckbox, Object.assign({ ref: el => (this.checkbox = el) }, { checked, disabled, indeterminate, name, value }), h("slot", null)));
    }
    static get style() { return ".mdc-touch-target-wrapper {\n  display: inline;\n}\n\n\@-webkit-keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%, 50% {\n    stroke-dashoffset: 29.7833385;\n  }\n  50% {\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\n\@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%, 50% {\n    stroke-dashoffset: 29.7833385;\n  }\n  50% {\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\@-webkit-keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%, 68.2% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n  }\n  68.2% {\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n\@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%, 68.2% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n  }\n  68.2% {\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n\@-webkit-keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.7833385;\n  }\n}\n\@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.7833385;\n  }\n}\n\@-webkit-keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n\@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n\@-webkit-keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n\@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n\@-webkit-keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    -webkit-animation-timing-function: mdc-animation-deceleration-curve-timing-function;\n    animation-timing-function: mdc-animation-deceleration-curve-timing-function;\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n\@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    -webkit-animation-timing-function: mdc-animation-deceleration-curve-timing-function;\n    animation-timing-function: mdc-animation-deceleration-curve-timing-function;\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    opacity: 0;\n  }\n  to {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n\@-webkit-keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    -webkit-transform: rotate(315deg);\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n\@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    -webkit-transform: rotate(315deg);\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n\@-webkit-keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  32.8%, 100% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n\@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  32.8%, 100% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n.mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  -ms-flex: 0 0 18px;\n  flex: 0 0 18px;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n  padding: 11px;\n}\n.mdc-checkbox .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background::before,\n.mdc-checkbox .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background::before {\n  background-color: #018786;\n}\n\@supports not (-ms-ime-align: auto) {\n  .mdc-checkbox .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background::before,\n.mdc-checkbox .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background::before {\n    /* \@alternate */\n    background-color: var(--mdc-theme-secondary, #018786);\n  }\n}\n.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after {\n  background-color: #018786;\n}\n\@supports not (-ms-ime-align: auto) {\n  .mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after {\n    /* \@alternate */\n    background-color: var(--mdc-theme-secondary, #018786);\n  }\n}\n.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before {\n  opacity: 0.04;\n}\n.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before, .mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before {\n  -webkit-transition-duration: 75ms;\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after {\n  -webkit-transition: opacity 150ms linear;\n  transition: opacity 150ms linear;\n}\n.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after {\n  -webkit-transition-duration: 75ms;\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.12;\n}\n.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,\n.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after {\n  background-color: #018786;\n}\n\@supports not (-ms-ime-align: auto) {\n  .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,\n.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after {\n    /* \@alternate */\n    background-color: var(--mdc-theme-secondary, #018786);\n  }\n}\n.mdc-checkbox .mdc-checkbox__background {\n  top: 11px;\n  left: 11px;\n}\n.mdc-checkbox .mdc-checkbox__background::before {\n  top: -13px;\n  left: -13px;\n  width: 40px;\n  height: 40px;\n}\n.mdc-checkbox .mdc-checkbox__native-control {\n  top: 0px;\n  right: 0px;\n  left: 0px;\n  width: 40px;\n  height: 40px;\n}\n\n.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: rgba(0, 0, 0, 0.54);\n  background-color: transparent;\n}\n\n.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {\n  border-color: #018786;\n  /* \@alternate */\n  border-color: var(--mdc-theme-secondary, #018786);\n  background-color: #018786;\n  /* \@alternate */\n  background-color: var(--mdc-theme-secondary, #018786);\n}\n\n\@-webkit-keyframes mdc-checkbox-fade-in-background-u5jltke {\n  0% {\n    border-color: rgba(0, 0, 0, 0.54);\n    background-color: transparent;\n  }\n  50% {\n    border-color: #018786;\n    /* \@alternate */\n    border-color: var(--mdc-theme-secondary, #018786);\n    background-color: #018786;\n    /* \@alternate */\n    background-color: var(--mdc-theme-secondary, #018786);\n  }\n}\n\n\@keyframes mdc-checkbox-fade-in-background-u5jltke {\n  0% {\n    border-color: rgba(0, 0, 0, 0.54);\n    background-color: transparent;\n  }\n  50% {\n    border-color: #018786;\n    /* \@alternate */\n    border-color: var(--mdc-theme-secondary, #018786);\n    background-color: #018786;\n    /* \@alternate */\n    background-color: var(--mdc-theme-secondary, #018786);\n  }\n}\n\@-webkit-keyframes mdc-checkbox-fade-out-background-u5jltke {\n  0%, 80% {\n    border-color: #018786;\n    /* \@alternate */\n    border-color: var(--mdc-theme-secondary, #018786);\n    background-color: #018786;\n    /* \@alternate */\n    background-color: var(--mdc-theme-secondary, #018786);\n  }\n  100% {\n    border-color: rgba(0, 0, 0, 0.54);\n    background-color: transparent;\n  }\n}\n\@keyframes mdc-checkbox-fade-out-background-u5jltke {\n  0%, 80% {\n    border-color: #018786;\n    /* \@alternate */\n    border-color: var(--mdc-theme-secondary, #018786);\n    background-color: #018786;\n    /* \@alternate */\n    background-color: var(--mdc-theme-secondary, #018786);\n  }\n  100% {\n    border-color: rgba(0, 0, 0, 0.54);\n    background-color: transparent;\n  }\n}\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n  -webkit-animation-name: mdc-checkbox-fade-in-background-u5jltke;\n  animation-name: mdc-checkbox-fade-in-background-u5jltke;\n}\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n  -webkit-animation-name: mdc-checkbox-fade-out-background-u5jltke;\n  animation-name: mdc-checkbox-fade-out-background-u5jltke;\n}\n\n.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent;\n}\n\n.mdc-checkbox__native-control[disabled]:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control[disabled]:indeterminate ~ .mdc-checkbox__background {\n  border-color: transparent;\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n.mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  color: #fff;\n}\n.mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  border-color: #fff;\n}\n\n.mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  color: #fff;\n}\n.mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  border-color: #fff;\n}\n\n\@media screen and (-ms-high-contrast: active) {\n  .mdc-checkbox__mixedmark {\n    margin: 0 1px;\n  }\n}\n.mdc-checkbox--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox__background {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: absolute;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 18px;\n  height: 18px;\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n  -webkit-transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-checkbox__background .mdc-checkbox__background::before {\n  background-color: #000;\n}\n\@supports not (-ms-ime-align: auto) {\n  .mdc-checkbox__background .mdc-checkbox__background::before {\n    /* \@alternate */\n    background-color: var(--mdc-theme-on-surface, #000);\n  }\n}\n\n.mdc-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  -webkit-transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-checkbox--upgraded .mdc-checkbox__checkmark {\n  opacity: 1;\n}\n\n.mdc-checkbox__checkmark-path {\n  -webkit-transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: currentColor;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.7833385;\n  stroke-dasharray: 29.7833385;\n}\n\n.mdc-checkbox__mixedmark {\n  width: 100%;\n  height: 0;\n  -webkit-transform: scaleX(0) rotate(0deg);\n  transform: scaleX(0) rotate(0deg);\n  border-width: 1px;\n  border-style: solid;\n  opacity: 0;\n  -webkit-transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.mdc-checkbox--upgraded .mdc-checkbox__background,\n.mdc-checkbox--upgraded .mdc-checkbox__checkmark,\n.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,\n.mdc-checkbox--upgraded .mdc-checkbox__mixedmark {\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background, .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background, .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background, .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  -webkit-animation-duration: 180ms;\n  animation-duration: 180ms;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n}\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {\n  -webkit-animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;\n  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;\n  -webkit-transition: none;\n  transition: none;\n}\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  -webkit-animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;\n  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;\n  -webkit-transition: none;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {\n  -webkit-animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;\n  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;\n  -webkit-transition: none;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  -webkit-animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;\n  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;\n  -webkit-transition: none;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  -webkit-animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;\n  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;\n  -webkit-transition: none;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  -webkit-animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;\n  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;\n  -webkit-transition: none;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  -webkit-animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;\n  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;\n  -webkit-transition: none;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  -webkit-animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;\n  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  -webkit-transition: border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-checkbox__background::before {\n  position: absolute;\n  -webkit-transform: scale(0, 0);\n  transform: scale(0, 0);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: opacity, transform;\n  -webkit-transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.mdc-checkbox__native-control:focus ~ .mdc-checkbox__background::before {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 0.12;\n  -webkit-transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-checkbox__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n}\n.mdc-checkbox__native-control:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox--touch {\n  margin-top: 4px;\n  margin-bottom: 4px;\n  margin-right: 4px;\n  margin-left: 4px;\n}\n.mdc-checkbox--touch .mdc-checkbox__native-control {\n  top: -4px;\n  right: -4px;\n  left: -4px;\n  width: 48px;\n  height: 48px;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  -webkit-transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 1;\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  -webkit-transform: scaleX(1) rotate(-45deg);\n  transform: scaleX(1) rotate(-45deg);\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  opacity: 0;\n  -webkit-transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  -webkit-transform: scaleX(1) rotate(0deg);\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n\@-webkit-keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\@-webkit-keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n\@-webkit-keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n.mdc-checkbox {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.mdc-checkbox .mdc-checkbox__ripple::before,\n.mdc-checkbox .mdc-checkbox__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-checkbox .mdc-checkbox__ripple::before {\n  -webkit-transition: opacity 15ms linear, background-color 15ms linear;\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n}\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before {\n  -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after {\n  top: 0;\n  /* \@noflip */\n  left: 0;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: center center;\n  transform-origin: center center;\n}\n.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* \@noflip */\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple::after {\n  -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple::after {\n  -webkit-animation: mdc-ripple-fg-opacity-out 150ms;\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-checkbox .mdc-checkbox__ripple::before, .mdc-checkbox .mdc-checkbox__ripple::after {\n  background-color: #000;\n}\n\@supports not (-ms-ime-align: auto) {\n  .mdc-checkbox .mdc-checkbox__ripple::before, .mdc-checkbox .mdc-checkbox__ripple::after {\n    /* \@alternate */\n    background-color: var(--mdc-theme-on-surface, #000);\n  }\n}\n.mdc-checkbox:hover .mdc-checkbox__ripple::before {\n  opacity: 0.04;\n}\n.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before, .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before {\n  -webkit-transition-duration: 75ms;\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after {\n  -webkit-transition: opacity 150ms linear;\n  transition: opacity 150ms linear;\n}\n.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after {\n  -webkit-transition-duration: 75ms;\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-checkbox.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.12;\n}\n.mdc-checkbox .mdc-checkbox__ripple::before,\n.mdc-checkbox .mdc-checkbox__ripple::after {\n  top: calc(50% - 50%);\n  /* \@noflip */\n  left: calc(50% - 50%);\n  width: 100%;\n  height: 100%;\n}\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before,\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* \@noflip */\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-checkbox__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before {\n  content: none;\n}"; }
};

export { MdcCheckbox$1 as mdc_checkbox };
