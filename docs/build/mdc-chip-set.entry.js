import { h, r as registerInstance } from './core-ec54a9ee.js';
import { M as MDCRipple, b as MDCRippleFoundation } from './component-43330259.js';
import { _ as __extends, a as __assign, M as MDCFoundation, b as MDCComponent } from './component-04842584.js';
import './ponyfill-f805c928.js';
import { c as classNames } from './utils-3ab3a058.js';

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
var Direction;
(function (Direction) {
    Direction[Direction["RIGHT"] = 0] = "RIGHT";
    Direction[Direction["LEFT"] = 1] = "LEFT";
})(Direction || (Direction = {}));
var EventSource;
(function (EventSource) {
    EventSource[EventSource["PRIMARY"] = 0] = "PRIMARY";
    EventSource[EventSource["TRAILING"] = 1] = "TRAILING";
    EventSource[EventSource["NONE"] = 2] = "NONE";
})(EventSource || (EventSource = {}));
var strings = {
    ARIA_CHECKED: 'aria-checked',
    ARROW_DOWN_KEY: 'ArrowDown',
    ARROW_LEFT_KEY: 'ArrowLeft',
    ARROW_RIGHT_KEY: 'ArrowRight',
    ARROW_UP_KEY: 'ArrowUp',
    BACKSPACE_KEY: 'Backspace',
    CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
    DELETE_KEY: 'Delete',
    END_KEY: 'End',
    ENTER_KEY: 'Enter',
    ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
    HOME_KEY: 'Home',
    INTERACTION_EVENT: 'MDCChip:interaction',
    LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
    NAVIGATION_EVENT: 'MDCChip:navigation',
    PRIMARY_ACTION_SELECTOR: '.mdc-chip__primary-action',
    REMOVAL_EVENT: 'MDCChip:removal',
    SELECTION_EVENT: 'MDCChip:selection',
    SPACEBAR_KEY: ' ',
    TAB_INDEX: 'tabindex',
    TRAILING_ACTION_SELECTOR: '.mdc-chip__trailing-action',
    TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
    TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing',
};
var cssClasses = {
    CHECKMARK: 'mdc-chip__checkmark',
    CHIP_EXIT: 'mdc-chip--exit',
    DELETABLE: 'mdc-chip--deletable',
    HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
    LEADING_ICON: 'mdc-chip__icon--leading',
    PRIMARY_ACTION: 'mdc-chip__primary-action',
    SELECTED: 'mdc-chip--selected',
    TEXT: 'mdc-chip__text',
    TRAILING_ACTION: 'mdc-chip__trailing-action',
    TRAILING_ICON: 'mdc-chip__icon--trailing',
};
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
navigationKeys.add(strings.ARROW_LEFT_KEY);
navigationKeys.add(strings.ARROW_RIGHT_KEY);
navigationKeys.add(strings.ARROW_DOWN_KEY);
navigationKeys.add(strings.ARROW_UP_KEY);
navigationKeys.add(strings.END_KEY);
navigationKeys.add(strings.HOME_KEY);
var jumpChipKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
jumpChipKeys.add(strings.ARROW_UP_KEY);
jumpChipKeys.add(strings.ARROW_DOWN_KEY);
jumpChipKeys.add(strings.HOME_KEY);
jumpChipKeys.add(strings.END_KEY);

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
var emptyClientRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
};
var MDCChipFoundation = /** @class */ (function (_super) {
    __extends(MDCChipFoundation, _super);
    function MDCChipFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCChipFoundation.defaultAdapter, adapter)) || this;
        /**
         * Whether a trailing icon click should immediately trigger exit/removal of the chip.
         */
        _this.shouldRemoveOnTrailingIconClick_ = true;
        return _this;
    }
    Object.defineProperty(MDCChipFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                addClassToLeadingIcon: function () { return undefined; },
                eventTargetHasClass: function () { return false; },
                focusPrimaryAction: function () { return undefined; },
                focusTrailingAction: function () { return undefined; },
                getCheckmarkBoundingClientRect: function () { return emptyClientRect; },
                getComputedStyleValue: function () { return ''; },
                getRootBoundingClientRect: function () { return emptyClientRect; },
                hasClass: function () { return false; },
                hasLeadingIcon: function () { return false; },
                hasTrailingAction: function () { return false; },
                isRTL: function () { return false; },
                notifyInteraction: function () { return undefined; },
                notifyNavigation: function () { return undefined; },
                notifyRemoval: function () { return undefined; },
                notifySelection: function () { return undefined; },
                notifyTrailingIconInteraction: function () { return undefined; },
                removeClass: function () { return undefined; },
                removeClassFromLeadingIcon: function () { return undefined; },
                setPrimaryActionAttr: function () { return undefined; },
                setStyleProperty: function () { return undefined; },
                setTrailingActionAttr: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCChipFoundation.prototype.isSelected = function () {
        return this.adapter_.hasClass(cssClasses.SELECTED);
    };
    MDCChipFoundation.prototype.setSelected = function (selected) {
        this.setSelected_(selected);
        this.notifySelection_(selected);
    };
    MDCChipFoundation.prototype.setSelectedFromChipSet = function (selected, shouldNotifyClients) {
        this.setSelected_(selected);
        if (shouldNotifyClients) {
            this.notifyIgnoredSelection_(selected);
        }
    };
    MDCChipFoundation.prototype.getShouldRemoveOnTrailingIconClick = function () {
        return this.shouldRemoveOnTrailingIconClick_;
    };
    MDCChipFoundation.prototype.setShouldRemoveOnTrailingIconClick = function (shouldRemove) {
        this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
    };
    MDCChipFoundation.prototype.getDimensions = function () {
        var _this = this;
        var getRootRect = function () { return _this.adapter_.getRootBoundingClientRect(); };
        var getCheckmarkRect = function () { return _this.adapter_.getCheckmarkBoundingClientRect(); };
        // When a chip has a checkmark and not a leading icon, the bounding rect changes in size depending on the current
        // size of the checkmark.
        if (!this.adapter_.hasLeadingIcon()) {
            var checkmarkRect = getCheckmarkRect();
            if (checkmarkRect) {
                var rootRect = getRootRect();
                // Checkmark is a square, meaning the client rect's width and height are identical once the animation completes.
                // However, the checkbox is initially hidden by setting the width to 0.
                // To account for an initial width of 0, we use the checkbox's height instead (which equals the end-state width)
                // when adding it to the root client rect's width.
                return {
                    bottom: rootRect.bottom,
                    height: rootRect.height,
                    left: rootRect.left,
                    right: rootRect.right,
                    top: rootRect.top,
                    width: rootRect.width + checkmarkRect.height,
                };
            }
        }
        return getRootRect();
    };
    /**
     * Begins the exit animation which leads to removal of the chip.
     */
    MDCChipFoundation.prototype.beginExit = function () {
        this.adapter_.addClass(cssClasses.CHIP_EXIT);
    };
    /**
     * Handles an interaction event on the root element.
     */
    MDCChipFoundation.prototype.handleInteraction = function (evt) {
        if (this.shouldHandleInteraction_(evt)) {
            this.adapter_.notifyInteraction();
            this.focusPrimaryAction_();
        }
    };
    /**
     * Handles a transition end event on the root element.
     */
    MDCChipFoundation.prototype.handleTransitionEnd = function (evt) {
        var _this = this;
        // Handle transition end event on the chip when it is about to be removed.
        var shouldHandle = this.adapter_.eventTargetHasClass(evt.target, cssClasses.CHIP_EXIT);
        var widthIsAnimating = evt.propertyName === 'width';
        var opacityIsAnimating = evt.propertyName === 'opacity';
        if (shouldHandle && opacityIsAnimating) {
            // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
            var chipWidth_1 = this.adapter_.getComputedStyleValue('width');
            // On the next frame (once we get the computed width), explicitly set the chip's width
            // to its current pixel width, so we aren't transitioning out of 'auto'.
            requestAnimationFrame(function () {
                _this.adapter_.setStyleProperty('width', chipWidth_1);
                // To mitigate jitter, start transitioning padding and margin before width.
                _this.adapter_.setStyleProperty('padding', '0');
                _this.adapter_.setStyleProperty('margin', '0');
                // On the next frame (once width is explicitly set), transition width to 0.
                requestAnimationFrame(function () {
                    _this.adapter_.setStyleProperty('width', '0');
                });
            });
            return;
        }
        if (shouldHandle && widthIsAnimating) {
            this.removeFocus_();
            this.adapter_.notifyRemoval();
        }
        // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.
        if (!opacityIsAnimating) {
            return;
        }
        var shouldHideLeadingIcon = this.adapter_.eventTargetHasClass(evt.target, cssClasses.LEADING_ICON)
            && this.adapter_.hasClass(cssClasses.SELECTED);
        var shouldShowLeadingIcon = this.adapter_.eventTargetHasClass(evt.target, cssClasses.CHECKMARK)
            && !this.adapter_.hasClass(cssClasses.SELECTED);
        if (shouldHideLeadingIcon) {
            return this.adapter_.addClassToLeadingIcon(cssClasses.HIDDEN_LEADING_ICON);
        }
        if (shouldShowLeadingIcon) {
            return this.adapter_.removeClassFromLeadingIcon(cssClasses.HIDDEN_LEADING_ICON);
        }
    };
    /**
     * Handles an interaction event on the trailing icon element. This is used to
     * prevent the ripple from activating on interaction with the trailing icon.
     */
    MDCChipFoundation.prototype.handleTrailingIconInteraction = function (evt) {
        if (this.shouldHandleInteraction_(evt)) {
            this.adapter_.notifyTrailingIconInteraction();
            this.removeChip_(evt);
        }
    };
    /**
     * Handles a keydown event from the root element.
     */
    MDCChipFoundation.prototype.handleKeydown = function (evt) {
        if (this.shouldRemoveChip_(evt)) {
            return this.removeChip_(evt);
        }
        var key = evt.key;
        // Early exit if the key is not usable
        if (!navigationKeys.has(key)) {
            return;
        }
        // Prevent default behavior for movement keys which could include scrolling
        evt.preventDefault();
        this.focusNextAction_(evt);
    };
    MDCChipFoundation.prototype.removeFocus = function () {
        this.adapter_.setPrimaryActionAttr(strings.TAB_INDEX, '-1');
        this.adapter_.setTrailingActionAttr(strings.TAB_INDEX, '-1');
    };
    MDCChipFoundation.prototype.focusPrimaryAction = function () {
        this.focusPrimaryAction_();
    };
    MDCChipFoundation.prototype.focusTrailingAction = function () {
        if (!this.adapter_.hasTrailingAction()) {
            return this.focusPrimaryAction_();
        }
        this.focusTrailingAction_();
    };
    MDCChipFoundation.prototype.focusNextAction_ = function (evt) {
        var key = evt.key;
        var hasTrailingAction = this.adapter_.hasTrailingAction();
        var dir = this.getDirection_(key);
        var source = this.getEvtSource_(evt);
        // Early exit if the key should jump keys or the chip only has one action (i.e. no trailing action)
        if (jumpChipKeys.has(key) || !hasTrailingAction) {
            this.adapter_.notifyNavigation(key, source);
            return;
        }
        if (source === EventSource.PRIMARY && dir === Direction.RIGHT) {
            return this.focusTrailingAction_();
        }
        if (source === EventSource.TRAILING && dir === Direction.LEFT) {
            return this.focusPrimaryAction_();
        }
        this.adapter_.notifyNavigation(key, EventSource.NONE);
    };
    MDCChipFoundation.prototype.getEvtSource_ = function (evt) {
        if (this.adapter_.eventTargetHasClass(evt.target, cssClasses.PRIMARY_ACTION)) {
            return EventSource.PRIMARY;
        }
        if (this.adapter_.eventTargetHasClass(evt.target, cssClasses.TRAILING_ACTION)) {
            return EventSource.TRAILING;
        }
        return EventSource.NONE;
    };
    MDCChipFoundation.prototype.getDirection_ = function (key) {
        var isRTL = this.adapter_.isRTL();
        if (key === strings.ARROW_LEFT_KEY && !isRTL || key === strings.ARROW_RIGHT_KEY && isRTL) {
            return Direction.LEFT;
        }
        return Direction.RIGHT;
    };
    MDCChipFoundation.prototype.focusPrimaryAction_ = function () {
        this.adapter_.setPrimaryActionAttr(strings.TAB_INDEX, '0');
        this.adapter_.focusPrimaryAction();
        this.adapter_.setTrailingActionAttr(strings.TAB_INDEX, '-1');
    };
    MDCChipFoundation.prototype.focusTrailingAction_ = function () {
        this.adapter_.setTrailingActionAttr(strings.TAB_INDEX, '0');
        this.adapter_.focusTrailingAction();
        this.adapter_.setPrimaryActionAttr(strings.TAB_INDEX, '-1');
    };
    MDCChipFoundation.prototype.removeFocus_ = function () {
        this.adapter_.setTrailingActionAttr(strings.TAB_INDEX, '-1');
        this.adapter_.setPrimaryActionAttr(strings.TAB_INDEX, '-1');
    };
    MDCChipFoundation.prototype.removeChip_ = function (evt) {
        evt.stopPropagation();
        if (this.shouldRemoveOnTrailingIconClick_) {
            this.beginExit();
        }
    };
    MDCChipFoundation.prototype.shouldHandleInteraction_ = function (evt) {
        if (evt.type === 'click') {
            return true;
        }
        var keyEvt = evt;
        return keyEvt.key === strings.ENTER_KEY || keyEvt.key === strings.SPACEBAR_KEY;
    };
    MDCChipFoundation.prototype.shouldRemoveChip_ = function (evt) {
        var isDeletable = this.adapter_.hasClass(cssClasses.DELETABLE);
        return isDeletable && (evt.key === strings.BACKSPACE_KEY || evt.key === strings.DELETE_KEY);
    };
    MDCChipFoundation.prototype.setSelected_ = function (selected) {
        if (selected) {
            this.adapter_.addClass(cssClasses.SELECTED);
            this.adapter_.setPrimaryActionAttr(strings.ARIA_CHECKED, 'true');
        }
        else {
            this.adapter_.removeClass(cssClasses.SELECTED);
            this.adapter_.setPrimaryActionAttr(strings.ARIA_CHECKED, 'false');
        }
    };
    MDCChipFoundation.prototype.notifySelection_ = function (selected) {
        this.adapter_.notifySelection(selected, false);
    };
    MDCChipFoundation.prototype.notifyIgnoredSelection_ = function (selected) {
        this.adapter_.notifySelection(selected, true);
    };
    return MDCChipFoundation;
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
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCChip = /** @class */ (function (_super) {
    __extends(MDCChip, _super);
    function MDCChip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCChip.prototype, "selected", {
        /**
         * @return Whether the chip is selected.
         */
        get: function () {
            return this.foundation_.isSelected();
        },
        /**
         * Sets selected state on the chip.
         */
        set: function (selected) {
            this.foundation_.setSelected(selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "shouldRemoveOnTrailingIconClick", {
        /**
         * @return Whether a trailing icon click should trigger exit/removal of the chip.
         */
        get: function () {
            return this.foundation_.getShouldRemoveOnTrailingIconClick();
        },
        /**
         * Sets whether a trailing icon click should trigger exit/removal of the chip.
         */
        set: function (shouldRemove) {
            this.foundation_.setShouldRemoveOnTrailingIconClick(shouldRemove);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "ripple", {
        get: function () {
            return this.ripple_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "id", {
        get: function () {
            return this.root_.id;
        },
        enumerable: true,
        configurable: true
    });
    MDCChip.attachTo = function (root) {
        return new MDCChip(root);
    };
    MDCChip.prototype.initialize = function (rippleFactory) {
        var _this = this;
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new MDCRipple(el, foundation); }; }
        this.leadingIcon_ = this.root_.querySelector(strings.LEADING_ICON_SELECTOR);
        this.trailingIcon_ = this.root_.querySelector(strings.TRAILING_ICON_SELECTOR);
        this.checkmark_ = this.root_.querySelector(strings.CHECKMARK_SELECTOR);
        this.primaryAction_ = this.root_.querySelector(strings.PRIMARY_ACTION_SELECTOR);
        this.trailingAction_ = this.root_.querySelector(strings.TRAILING_ACTION_SELECTOR);
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var rippleAdapter = __assign({}, MDCRipple.createAdapter(this), { computeBoundingRect: function () { return _this.foundation_.getDimensions(); } });
        this.ripple_ = rippleFactory(this.root_, new MDCRippleFoundation(rippleAdapter));
    };
    MDCChip.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleInteraction_ = function (evt) { return _this.foundation_.handleInteraction(evt); };
        this.handleTransitionEnd_ = function (evt) { return _this.foundation_.handleTransitionEnd(evt); };
        this.handleTrailingIconInteraction_ = function (evt) {
            return _this.foundation_.handleTrailingIconInteraction(evt);
        };
        this.handleKeydown_ = function (evt) { return _this.foundation_.handleKeydown(evt); };
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.listen(evtType, _this.handleInteraction_);
        });
        this.listen('transitionend', this.handleTransitionEnd_);
        this.listen('keydown', this.handleKeydown_);
        if (this.trailingIcon_) {
            INTERACTION_EVENTS.forEach(function (evtType) {
                _this.trailingIcon_.addEventListener(evtType, _this.handleTrailingIconInteraction_);
            });
        }
    };
    MDCChip.prototype.destroy = function () {
        var _this = this;
        this.ripple_.destroy();
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.unlisten(evtType, _this.handleInteraction_);
        });
        this.unlisten('transitionend', this.handleTransitionEnd_);
        this.unlisten('keydown', this.handleKeydown_);
        if (this.trailingIcon_) {
            INTERACTION_EVENTS.forEach(function (evtType) {
                _this.trailingIcon_.removeEventListener(evtType, _this.handleTrailingIconInteraction_);
            });
        }
        _super.prototype.destroy.call(this);
    };
    /**
     * Begins the exit animation which leads to removal of the chip.
     */
    MDCChip.prototype.beginExit = function () {
        this.foundation_.beginExit();
    };
    MDCChip.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            addClassToLeadingIcon: function (className) {
                if (_this.leadingIcon_) {
                    _this.leadingIcon_.classList.add(className);
                }
            },
            eventTargetHasClass: function (target, className) { return target ? target.classList.contains(className) : false; },
            focusPrimaryAction: function () {
                if (_this.primaryAction_) {
                    _this.primaryAction_.focus();
                }
            },
            focusTrailingAction: function () {
                if (_this.trailingAction_) {
                    _this.trailingAction_.focus();
                }
            },
            getCheckmarkBoundingClientRect: function () { return _this.checkmark_ ? _this.checkmark_.getBoundingClientRect() : null; },
            getComputedStyleValue: function (propertyName) { return window.getComputedStyle(_this.root_).getPropertyValue(propertyName); },
            getRootBoundingClientRect: function () { return _this.root_.getBoundingClientRect(); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            hasLeadingIcon: function () { return !!_this.leadingIcon_; },
            hasTrailingAction: function () { return !!_this.trailingAction_; },
            isRTL: function () { return window.getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl'; },
            notifyInteraction: function () { return _this.emit(strings.INTERACTION_EVENT, { chipId: _this.id }, true /* shouldBubble */); },
            notifyNavigation: function (key, source) { return _this.emit(strings.NAVIGATION_EVENT, { chipId: _this.id, key: key, source: source }, true /* shouldBubble */); },
            notifyRemoval: function () {
                _this.emit(strings.REMOVAL_EVENT, { chipId: _this.id, root: _this.root_ }, true /* shouldBubble */);
            },
            notifySelection: function (selected, shouldIgnore) { return _this.emit(strings.SELECTION_EVENT, { chipId: _this.id, selected: selected, shouldIgnore: shouldIgnore }, true /* shouldBubble */); },
            notifyTrailingIconInteraction: function () { return _this.emit(strings.TRAILING_ICON_INTERACTION_EVENT, { chipId: _this.id }, true /* shouldBubble */); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            removeClassFromLeadingIcon: function (className) {
                if (_this.leadingIcon_) {
                    _this.leadingIcon_.classList.remove(className);
                }
            },
            setPrimaryActionAttr: function (attr, value) {
                if (_this.primaryAction_) {
                    _this.primaryAction_.setAttribute(attr, value);
                }
            },
            setStyleProperty: function (propertyName, value) { return _this.root_.style.setProperty(propertyName, value); },
            setTrailingActionAttr: function (attr, value) {
                if (_this.trailingAction_) {
                    _this.trailingAction_.setAttribute(attr, value);
                }
            },
        };
        return new MDCChipFoundation(adapter);
    };
    MDCChip.prototype.setSelectedFromChipSet = function (selected, shouldNotifyClients) {
        this.foundation_.setSelectedFromChipSet(selected, shouldNotifyClients);
    };
    MDCChip.prototype.focusPrimaryAction = function () {
        this.foundation_.focusPrimaryAction();
    };
    MDCChip.prototype.focusTrailingAction = function () {
        this.foundation_.focusTrailingAction();
    };
    MDCChip.prototype.removeFocus = function () {
        this.foundation_.removeFocus();
    };
    MDCChip.prototype.remove = function () {
        var parent = this.root_.parentNode;
        if (parent !== null) {
            parent.removeChild(this.root_);
        }
    };
    return MDCChip;
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
var strings$1 = {
    CHIP_SELECTOR: '.mdc-chip',
};
var cssClasses$1 = {
    CHOICE: 'mdc-chip-set--choice',
    FILTER: 'mdc-chip-set--filter',
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
var MDCChipSetFoundation = /** @class */ (function (_super) {
    __extends(MDCChipSetFoundation, _super);
    function MDCChipSetFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCChipSetFoundation.defaultAdapter, adapter)) || this;
        /**
         * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
         */
        _this.selectedChipIds_ = [];
        return _this;
    }
    Object.defineProperty(MDCChipSetFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipSetFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
        get: function () {
            return {
                focusChipPrimaryActionAtIndex: function () { return undefined; },
                focusChipTrailingActionAtIndex: function () { return undefined; },
                getChipListCount: function () { return -1; },
                getIndexOfChipById: function () { return -1; },
                hasClass: function () { return false; },
                isRTL: function () { return false; },
                removeChipAtIndex: function () { return undefined; },
                removeFocusFromChipAtIndex: function () { return undefined; },
                selectChipAtIndex: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns an array of the IDs of all selected chips.
     */
    MDCChipSetFoundation.prototype.getSelectedChipIds = function () {
        return this.selectedChipIds_.slice();
    };
    /**
     * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
     * Does not notify clients of the updated selection state.
     */
    MDCChipSetFoundation.prototype.select = function (chipId) {
        this.select_(chipId, false);
    };
    /**
     * Handles a chip interaction event
     */
    MDCChipSetFoundation.prototype.handleChipInteraction = function (chipId) {
        var index = this.adapter_.getIndexOfChipById(chipId);
        this.removeFocusFromChipsExcept_(index);
        if (this.adapter_.hasClass(cssClasses$1.CHOICE) || this.adapter_.hasClass(cssClasses$1.FILTER)) {
            this.toggleSelect_(chipId);
        }
    };
    /**
     * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
     */
    MDCChipSetFoundation.prototype.handleChipSelection = function (chipId, selected, shouldIgnore) {
        // Early exit if we should ignore the event
        if (shouldIgnore) {
            return;
        }
        var chipIsSelected = this.selectedChipIds_.indexOf(chipId) >= 0;
        if (selected && !chipIsSelected) {
            this.select(chipId);
        }
        else if (!selected && chipIsSelected) {
            this.deselect_(chipId);
        }
    };
    /**
     * Handles the event when a chip is removed.
     */
    MDCChipSetFoundation.prototype.handleChipRemoval = function (chipId) {
        var index = this.adapter_.getIndexOfChipById(chipId);
        this.deselectAndNotifyClients_(chipId);
        this.adapter_.removeChipAtIndex(index);
        var maxIndex = this.adapter_.getChipListCount() - 1;
        var nextIndex = Math.min(index, maxIndex);
        this.removeFocusFromChipsExcept_(nextIndex);
        // After removing a chip, we should focus the trailing action for the next chip.
        this.adapter_.focusChipTrailingActionAtIndex(nextIndex);
    };
    /**
     * Handles a chip navigation event.
     */
    MDCChipSetFoundation.prototype.handleChipNavigation = function (chipId, key, source) {
        var maxIndex = this.adapter_.getChipListCount() - 1;
        var index = this.adapter_.getIndexOfChipById(chipId);
        // Early exit if the index is out of range or the key is unusable
        if (index === -1 || !navigationKeys.has(key)) {
            return;
        }
        var isRTL = this.adapter_.isRTL();
        var shouldIncrement = key === strings.ARROW_RIGHT_KEY && !isRTL
            || key === strings.ARROW_LEFT_KEY && isRTL
            || key === strings.ARROW_DOWN_KEY;
        var isHome = key === strings.HOME_KEY;
        var isEnd = key === strings.END_KEY;
        if (shouldIncrement) {
            index++;
        }
        else if (isHome) {
            index = 0;
        }
        else if (isEnd) {
            index = maxIndex;
        }
        else {
            index--;
        }
        // Early exit if the index is out of bounds
        if (index < 0 || index > maxIndex) {
            return;
        }
        this.removeFocusFromChipsExcept_(index);
        this.focusChipAction_(index, key, source);
    };
    MDCChipSetFoundation.prototype.focusChipAction_ = function (index, key, source) {
        var shouldJumpChips = jumpChipKeys.has(key);
        if (shouldJumpChips && source === EventSource.PRIMARY) {
            return this.adapter_.focusChipPrimaryActionAtIndex(index);
        }
        if (shouldJumpChips && source === EventSource.TRAILING) {
            return this.adapter_.focusChipTrailingActionAtIndex(index);
        }
        var dir = this.getDirection_(key);
        if (dir === Direction.LEFT) {
            return this.adapter_.focusChipTrailingActionAtIndex(index);
        }
        if (dir === Direction.RIGHT) {
            return this.adapter_.focusChipPrimaryActionAtIndex(index);
        }
    };
    MDCChipSetFoundation.prototype.getDirection_ = function (key) {
        var isRTL = this.adapter_.isRTL();
        if (key === strings.ARROW_LEFT_KEY && !isRTL || key === strings.ARROW_RIGHT_KEY && isRTL) {
            return Direction.LEFT;
        }
        return Direction.RIGHT;
    };
    /**
     * Deselects the chip with the given id and optionally notifies clients.
     */
    MDCChipSetFoundation.prototype.deselect_ = function (chipId, shouldNotifyClients) {
        if (shouldNotifyClients === void 0) { shouldNotifyClients = false; }
        var index = this.selectedChipIds_.indexOf(chipId);
        if (index >= 0) {
            this.selectedChipIds_.splice(index, 1);
            var chipIndex = this.adapter_.getIndexOfChipById(chipId);
            this.adapter_.selectChipAtIndex(chipIndex, /** isSelected */ false, shouldNotifyClients);
        }
    };
    /**
     * Deselects the chip with the given id and notifies clients.
     */
    MDCChipSetFoundation.prototype.deselectAndNotifyClients_ = function (chipId) {
        this.deselect_(chipId, true);
    };
    /**
     * Toggles selection of the chip with the given id.
     */
    MDCChipSetFoundation.prototype.toggleSelect_ = function (chipId) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
            this.deselectAndNotifyClients_(chipId);
        }
        else {
            this.selectAndNotifyClients_(chipId);
        }
    };
    MDCChipSetFoundation.prototype.removeFocusFromChipsExcept_ = function (index) {
        var chipCount = this.adapter_.getChipListCount();
        for (var i = 0; i < chipCount; i++) {
            if (i !== index) {
                this.adapter_.removeFocusFromChipAtIndex(i);
            }
        }
    };
    MDCChipSetFoundation.prototype.selectAndNotifyClients_ = function (chipId) {
        this.select_(chipId, true);
    };
    MDCChipSetFoundation.prototype.select_ = function (chipId, shouldNotifyClients) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
            return;
        }
        if (this.adapter_.hasClass(cssClasses$1.CHOICE) && this.selectedChipIds_.length > 0) {
            var previouslySelectedChip = this.selectedChipIds_[0];
            var previouslySelectedIndex = this.adapter_.getIndexOfChipById(previouslySelectedChip);
            this.selectedChipIds_ = [];
            this.adapter_.selectChipAtIndex(previouslySelectedIndex, /** isSelected */ false, shouldNotifyClients);
        }
        this.selectedChipIds_.push(chipId);
        var index = this.adapter_.getIndexOfChipById(chipId);
        this.adapter_.selectChipAtIndex(index, /** isSelected */ true, shouldNotifyClients);
    };
    return MDCChipSetFoundation;
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
var _a = MDCChipFoundation.strings, INTERACTION_EVENT = _a.INTERACTION_EVENT, SELECTION_EVENT = _a.SELECTION_EVENT, REMOVAL_EVENT = _a.REMOVAL_EVENT, NAVIGATION_EVENT = _a.NAVIGATION_EVENT;
var CHIP_SELECTOR = MDCChipSetFoundation.strings.CHIP_SELECTOR;
var idCounter = 0;
var MDCChipSet = /** @class */ (function (_super) {
    __extends(MDCChipSet, _super);
    function MDCChipSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCChipSet.attachTo = function (root) {
        return new MDCChipSet(root);
    };
    Object.defineProperty(MDCChipSet.prototype, "chips", {
        get: function () {
            return this.chips_.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipSet.prototype, "selectedChipIds", {
        /**
         * @return An array of the IDs of all selected chips.
         */
        get: function () {
            return this.foundation_.getSelectedChipIds();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param chipFactory A function which creates a new MDCChip.
     */
    MDCChipSet.prototype.initialize = function (chipFactory) {
        if (chipFactory === void 0) { chipFactory = function (el) { return new MDCChip(el); }; }
        this.chipFactory_ = chipFactory;
        this.chips_ = this.instantiateChips_(this.chipFactory_);
    };
    MDCChipSet.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.chips_.forEach(function (chip) {
            if (chip.id && chip.selected) {
                _this.foundation_.select(chip.id);
            }
        });
        this.handleChipInteraction_ = function (evt) { return _this.foundation_.handleChipInteraction(evt.detail.chipId); };
        this.handleChipSelection_ = function (evt) {
            _this.foundation_.handleChipSelection(evt.detail.chipId, evt.detail.selected, evt.detail.shouldIgnore);
        };
        this.handleChipRemoval_ = function (evt) { return _this.foundation_.handleChipRemoval(evt.detail.chipId); };
        this.handleChipNavigation_ = function (evt) { return _this.foundation_.handleChipNavigation(evt.detail.chipId, evt.detail.key, evt.detail.source); };
        this.listen(INTERACTION_EVENT, this.handleChipInteraction_);
        this.listen(SELECTION_EVENT, this.handleChipSelection_);
        this.listen(REMOVAL_EVENT, this.handleChipRemoval_);
        this.listen(NAVIGATION_EVENT, this.handleChipNavigation_);
    };
    MDCChipSet.prototype.destroy = function () {
        this.chips_.forEach(function (chip) {
            chip.destroy();
        });
        this.unlisten(INTERACTION_EVENT, this.handleChipInteraction_);
        this.unlisten(SELECTION_EVENT, this.handleChipSelection_);
        this.unlisten(REMOVAL_EVENT, this.handleChipRemoval_);
        this.unlisten(NAVIGATION_EVENT, this.handleChipNavigation_);
        _super.prototype.destroy.call(this);
    };
    /**
     * Adds a new chip object to the chip set from the given chip element.
     */
    MDCChipSet.prototype.addChip = function (chipEl) {
        chipEl.id = chipEl.id || "mdc-chip-" + ++idCounter;
        this.chips_.push(this.chipFactory_(chipEl));
    };
    MDCChipSet.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            focusChipPrimaryActionAtIndex: function (index) {
                _this.chips_[index].focusPrimaryAction();
            },
            focusChipTrailingActionAtIndex: function (index) {
                _this.chips_[index].focusTrailingAction();
            },
            getChipListCount: function () { return _this.chips_.length; },
            getIndexOfChipById: function (chipId) {
                return _this.findChipIndex_(chipId);
            },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            isRTL: function () { return window.getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl'; },
            removeChipAtIndex: function (index) {
                if (index >= 0 && index < _this.chips_.length) {
                    _this.chips_[index].destroy();
                    _this.chips_[index].remove();
                    _this.chips_.splice(index, 1);
                }
            },
            removeFocusFromChipAtIndex: function (index) {
                _this.chips_[index].removeFocus();
            },
            selectChipAtIndex: function (index, selected, shouldNotifyClients) {
                if (index >= 0 && index < _this.chips_.length) {
                    _this.chips_[index].setSelectedFromChipSet(selected, shouldNotifyClients);
                }
            },
        };
        return new MDCChipSetFoundation(adapter);
    };
    /**
     * Instantiates chip components on all of the chip set's child chip elements.
     */
    MDCChipSet.prototype.instantiateChips_ = function (chipFactory) {
        var chipElements = [].slice.call(this.root_.querySelectorAll(CHIP_SELECTOR));
        return chipElements.map(function (el) {
            el.id = el.id || "mdc-chip-" + ++idCounter;
            return chipFactory(el);
        });
    };
    /**
     * Returns the index of the chip with the given id, or -1 if the chip does not exist.
     */
    MDCChipSet.prototype.findChipIndex_ = function (chipId) {
        for (var i = 0; i < this.chips_.length; i++) {
            if (this.chips_[i].id === chipId) {
                return i;
            }
        }
        return -1;
    };
    return MDCChipSet;
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
const MdcChipSet = (props, children) => {
    const _a = Object.assign({}, props), { class: className, choice, filter, input } = _a, rest = __rest(_a, ["class", "choice", "filter", "input"]);
    return (h("div", Object.assign({ class: Object.assign({ 'mdc-chip-set': true, 'mdc-chip-set--choice': choice, 'mdc-chip-set--filter': filter, 'mdc-chip-set--input': input }, classNames(className)) }, rest), children));
};
const MdcChip = (props, children) => {
    const _a = Object.assign({}, props), { class: className, selected } = _a, rest = __rest(_a, ["class", "selected"]);
    return [
        h("button", Object.assign({ class: Object.assign({ 'mdc-chip': true, 'mdc-chip--selected': selected }, classNames(className)) }, rest), children)
    ];
};
const MdcChipCheckmark = props => {
    const _a = Object.assign({}, props), { class: className } = _a, rest = __rest(_a, ["class"]);
    return (h("span", Object.assign({ class: Object.assign({ 'mdc-chip__checkmark': true }, classNames(className)) }, rest),
        h("svg", { class: 'mdc-chip__checkmark-svg', viewBox: '-2 -3 30 30' },
            h("path", { class: 'mdc-chip__checkmark-path', fill: 'none', stroke: 'black', d: 'M1.73,12.91 8.1,19.28 22.79,4.59' }))));
};

const MdcChipSet$1 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async addChip(chipEl) {
        this.mdcChipSet.addChip(chipEl);
    }
    componentDidLoad() {
        this.mdcChipSet = new MDCChipSet(this.chipSet);
    }
    componentDidUnload() {
        this.mdcChipSet.destroy();
    }
    render() {
        return (h(MdcChipSet, { ref: el => (this.chipSet = el) }, h("slot", null)));
    }
    static get style() { return ".mdc-chip__icon--leading {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mdc-chip__icon--trailing {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mdc-chip__icon--trailing:hover {\n  color: rgba(0, 0, 0, 0.62);\n}\n.mdc-chip__icon--trailing:focus {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden) {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n\n.mdc-chip__icon.mdc-chip__icon--trailing {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n\n.mdc-chip__icon--trailing {\n  /* \@noflip */\n  margin-left: 4px;\n  /* \@noflip */\n  margin-right: -4px;\n}\n[dir=rtl] .mdc-chip__icon--trailing, .mdc-chip__icon--trailing[dir=rtl] {\n  /* \@noflip */\n  margin-left: -4px;\n  /* \@noflip */\n  margin-right: 4px;\n}\n\n.mdc-touch-target-wrapper {\n  display: inline;\n}\n\n.mdc-chip {\n  border-radius: 16px;\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 400;\n  letter-spacing: 0.0178571429em;\n  text-decoration: inherit;\n  text-transform: inherit;\n  height: 32px;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 0 12px;\n  border-width: 0;\n  outline: none;\n  cursor: pointer;\n  -webkit-appearance: none;\n}\n.mdc-chip .mdc-chip__ripple {\n  border-radius: 16px;\n}\n.mdc-chip:hover {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mdc-chip.mdc-chip--selected .mdc-chip__checkmark,\n.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden) {\n  /* \@noflip */\n  margin-left: -4px;\n  /* \@noflip */\n  margin-right: 4px;\n}\n[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark, .mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],\n[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),\n.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl] {\n  /* \@noflip */\n  margin-left: 4px;\n  /* \@noflip */\n  margin-right: -4px;\n}\n.mdc-chip::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n.mdc-chip:hover {\n  color: #000;\n  /* \@alternate */\n  color: var(--mdc-theme-on-surface, #000);\n}\n.mdc-chip .mdc-chip__touch {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: 0;\n  height: 48px;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\n.mdc-chip--exit {\n  -webkit-transition: opacity 75ms cubic-bezier(0.4, 0, 0.2, 1), width 150ms cubic-bezier(0, 0, 0.2, 1), padding 100ms linear, margin 100ms linear;\n  transition: opacity 75ms cubic-bezier(0.4, 0, 0.2, 1), width 150ms cubic-bezier(0, 0, 0.2, 1), padding 100ms linear, margin 100ms linear;\n  opacity: 0;\n}\n\n.mdc-chip__text {\n  white-space: nowrap;\n}\n\n.mdc-chip__icon {\n  border-radius: 50%;\n  outline: none;\n  vertical-align: middle;\n}\n\n.mdc-chip__checkmark {\n  height: 20px;\n}\n\n.mdc-chip__checkmark-path {\n  -webkit-transition: stroke-dashoffset 150ms 50ms cubic-bezier(0.4, 0, 0.6, 1);\n  transition: stroke-dashoffset 150ms 50ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke-width: 2px;\n  stroke-dashoffset: 29.7833385;\n  stroke-dasharray: 29.7833385;\n}\n\n.mdc-chip__text:focus {\n  outline: none;\n}\n\n.mdc-chip--selected .mdc-chip__checkmark-path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-chip__icon--leading,\n.mdc-chip__icon--trailing {\n  position: relative;\n}\n\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected {\n  color: #6200ee;\n  /* \@alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading {\n  color: rgba(98, 0, 238, 0.54);\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover {\n  color: #6200ee;\n  /* \@alternate */\n  color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-chip-set--choice .mdc-chip .mdc-chip__checkmark-path {\n  stroke: #6200ee;\n  /* \@alternate */\n  stroke: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-chip-set--choice .mdc-chip--selected {\n  background-color: #fff;\n  /* \@alternate */\n  background-color: var(--mdc-theme-surface, #fff);\n}\n\n.mdc-chip__checkmark-svg {\n  width: 0;\n  height: 20px;\n  -webkit-transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-chip--selected .mdc-chip__checkmark-svg {\n  width: 20px;\n}\n\n.mdc-chip-set--filter .mdc-chip__icon--leading {\n  -webkit-transition: opacity 75ms linear;\n  transition: opacity 75ms linear;\n  -webkit-transition-delay: -50ms;\n  transition-delay: -50ms;\n  opacity: 1;\n}\n.mdc-chip-set--filter .mdc-chip__icon--leading + .mdc-chip__checkmark {\n  -webkit-transition: opacity 75ms linear;\n  transition: opacity 75ms linear;\n  -webkit-transition-delay: 80ms;\n  transition-delay: 80ms;\n  opacity: 0;\n}\n.mdc-chip-set--filter .mdc-chip__icon--leading + .mdc-chip__checkmark .mdc-chip__checkmark-svg {\n  -webkit-transition: width 0ms;\n  transition: width 0ms;\n}\n.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading {\n  opacity: 0;\n}\n.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading + .mdc-chip__checkmark {\n  width: 0;\n  opacity: 1;\n}\n.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading {\n  width: 0;\n  opacity: 0;\n}\n.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading + .mdc-chip__checkmark {\n  width: 20px;\n}\n\n\@-webkit-keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\@-webkit-keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n\@-webkit-keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n.mdc-chip {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.mdc-chip .mdc-chip__ripple::before,\n.mdc-chip .mdc-chip__ripple::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n.mdc-chip .mdc-chip__ripple::before {\n  -webkit-transition: opacity 15ms linear, background-color 15ms linear;\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n}\n.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple::before {\n  -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple::after {\n  top: 0;\n  /* \@noflip */\n  left: 0;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: center center;\n  transform-origin: center center;\n}\n.mdc-chip.mdc-ripple-upgraded--unbounded .mdc-chip__ripple::after {\n  top: var(--mdc-ripple-top, 0);\n  /* \@noflip */\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-chip.mdc-ripple-upgraded--foreground-activation .mdc-chip__ripple::after {\n  -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-chip.mdc-ripple-upgraded--foreground-deactivation .mdc-chip__ripple::after {\n  -webkit-animation: mdc-ripple-fg-opacity-out 150ms;\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-chip .mdc-chip__ripple::before,\n.mdc-chip .mdc-chip__ripple::after {\n  top: calc(50% - 100%);\n  /* \@noflip */\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-chip .mdc-chip__ripple::before, .mdc-chip .mdc-chip__ripple::after {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mdc-chip:hover .mdc-chip__ripple::before {\n  opacity: 0.04;\n}\n.mdc-chip.mdc-ripple-upgraded--background-focused .mdc-chip__ripple::before, .mdc-chip.mdc-ripple-upgraded:focus-within .mdc-chip__ripple::before, .mdc-chip:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple::before, .mdc-chip:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple::before {\n  -webkit-transition-duration: 75ms;\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-chip:not(.mdc-ripple-upgraded) .mdc-chip__ripple::after {\n  -webkit-transition: opacity 150ms linear;\n  transition: opacity 150ms linear;\n}\n.mdc-chip:not(.mdc-ripple-upgraded):active .mdc-chip__ripple::after {\n  -webkit-transition-duration: 75ms;\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-chip.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.12;\n}\n.mdc-chip .mdc-chip__ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::before {\n  opacity: 0.08;\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::after {\n  background-color: #6200ee;\n}\n\@supports not (-ms-ime-align: auto) {\n  .mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::after {\n    /* \@alternate */\n    background-color: var(--mdc-theme-primary, #6200ee);\n  }\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover .mdc-chip__ripple::before {\n  opacity: 0.12;\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded--background-focused .mdc-chip__ripple::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded:focus-within .mdc-chip__ripple::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple::before, .mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple::before {\n  -webkit-transition-duration: 75ms;\n  transition-duration: 75ms;\n  opacity: 0.2;\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded) .mdc-chip__ripple::after {\n  -webkit-transition: opacity 150ms linear;\n  transition: opacity 150ms linear;\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):active .mdc-chip__ripple::after {\n  -webkit-transition-duration: 75ms;\n  transition-duration: 75ms;\n  opacity: 0.2;\n}\n.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.2;\n}\n\n\@-webkit-keyframes mdc-chip-entry {\n  from {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n    opacity: 0.4;\n  }\n  to {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n\@keyframes mdc-chip-entry {\n  from {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n    opacity: 0.4;\n  }\n  to {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.mdc-chip-set {\n  padding: 4px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.mdc-chip-set .mdc-chip {\n  margin: 4px;\n}\n.mdc-chip-set .mdc-chip--touch {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.mdc-chip-set--input .mdc-chip {\n  -webkit-animation: mdc-chip-entry 100ms cubic-bezier(0, 0, 0.2, 1);\n  animation: mdc-chip-entry 100ms cubic-bezier(0, 0, 0.2, 1);\n}"; }
};

export { MdcChipSet$1 as mdc_chip_set };
