import{h as t,r as i}from"./p-7815a306.js";import{M as n,b as e}from"./p-a10354f1.js";import{_ as r,a as c,M as o,b as s}from"./p-3a0a9a51.js";import"./p-c0a20e71.js";import{c as u}from"./p-aa1afb32.js";
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
 */var h,f;!function(t){t[t.RIGHT=0]="RIGHT",t[t.LEFT=1]="LEFT"}(h||(h={})),function(t){t[t.PRIMARY=0]="PRIMARY",t[t.TRAILING=1]="TRAILING",t[t.NONE=2]="NONE"}(f||(f={}));var a={ARIA_CHECKED:"aria-checked",ARROW_DOWN_KEY:"ArrowDown",ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",ARROW_UP_KEY:"ArrowUp",BACKSPACE_KEY:"Backspace",CHECKMARK_SELECTOR:".mdc-chip__checkmark",DELETE_KEY:"Delete",END_KEY:"End",ENTER_KEY:"Enter",ENTRY_ANIMATION_NAME:"mdc-chip-entry",HOME_KEY:"Home",INTERACTION_EVENT:"MDCChip:interaction",LEADING_ICON_SELECTOR:".mdc-chip__icon--leading",NAVIGATION_EVENT:"MDCChip:navigation",PRIMARY_ACTION_SELECTOR:".mdc-chip__primary-action",REMOVAL_EVENT:"MDCChip:removal",SELECTION_EVENT:"MDCChip:selection",SPACEBAR_KEY:" ",TAB_INDEX:"tabindex",TRAILING_ACTION_SELECTOR:".mdc-chip__trailing-action",TRAILING_ICON_INTERACTION_EVENT:"MDCChip:trailingIconInteraction",TRAILING_ICON_SELECTOR:".mdc-chip__icon--trailing"},l={CHECKMARK:"mdc-chip__checkmark",CHIP_EXIT:"mdc-chip--exit",DELETABLE:"mdc-chip--deletable",HIDDEN_LEADING_ICON:"mdc-chip__icon--leading-hidden",LEADING_ICON:"mdc-chip__icon--leading",PRIMARY_ACTION:"mdc-chip__primary-action",SELECTED:"mdc-chip--selected",TEXT:"mdc-chip__text",TRAILING_ACTION:"mdc-chip__trailing-action",TRAILING_ICON:"mdc-chip__icon--trailing"},d=new Set;d.add(a.ARROW_LEFT_KEY),d.add(a.ARROW_RIGHT_KEY),d.add(a.ARROW_DOWN_KEY),d.add(a.ARROW_UP_KEY),d.add(a.END_KEY),d.add(a.HOME_KEY);var m=new Set;m.add(a.ARROW_UP_KEY),m.add(a.ARROW_DOWN_KEY),m.add(a.HOME_KEY),m.add(a.END_KEY);
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
var p={bottom:0,height:0,left:0,right:0,top:0,width:0},C=function(t){function i(n){var e=t.call(this,c({},i.defaultAdapter,n))||this;return e.shouldRemoveOnTrailingIconClick_=!0,e}return r(i,t),Object.defineProperty(i,"strings",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(i,"cssClasses",{get:function(){return l},enumerable:!0,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},addClassToLeadingIcon:function(){},eventTargetHasClass:function(){return!1},focusPrimaryAction:function(){},focusTrailingAction:function(){},getCheckmarkBoundingClientRect:function(){return p},getComputedStyleValue:function(){return""},getRootBoundingClientRect:function(){return p},hasClass:function(){return!1},hasLeadingIcon:function(){return!1},hasTrailingAction:function(){return!1},isRTL:function(){return!1},notifyInteraction:function(){},notifyNavigation:function(){},notifyRemoval:function(){},notifySelection:function(){},notifyTrailingIconInteraction:function(){},removeClass:function(){},removeClassFromLeadingIcon:function(){},setPrimaryActionAttr:function(){},setStyleProperty:function(){},setTrailingActionAttr:function(){}}},enumerable:!0,configurable:!0}),i.prototype.isSelected=function(){return this.adapter_.hasClass(l.SELECTED)},i.prototype.setSelected=function(t){this.setSelected_(t),this.notifySelection_(t)},i.prototype.setSelectedFromChipSet=function(t,i){this.setSelected_(t),i&&this.notifyIgnoredSelection_(t)},i.prototype.getShouldRemoveOnTrailingIconClick=function(){return this.shouldRemoveOnTrailingIconClick_},i.prototype.setShouldRemoveOnTrailingIconClick=function(t){this.shouldRemoveOnTrailingIconClick_=t},i.prototype.getDimensions=function(){var t=this,i=function(){return t.adapter_.getRootBoundingClientRect()};if(!this.adapter_.hasLeadingIcon()){var n=t.adapter_.getCheckmarkBoundingClientRect();if(n){var e=i();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width+n.height}}}return i()},i.prototype.beginExit=function(){this.adapter_.addClass(l.CHIP_EXIT)},i.prototype.handleInteraction=function(t){this.shouldHandleInteraction_(t)&&(this.adapter_.notifyInteraction(),this.focusPrimaryAction_())},i.prototype.handleTransitionEnd=function(t){var i=this,n=this.adapter_.eventTargetHasClass(t.target,l.CHIP_EXIT),e="width"===t.propertyName,r="opacity"===t.propertyName;if(n&&r){var c=this.adapter_.getComputedStyleValue("width");requestAnimationFrame((function(){i.adapter_.setStyleProperty("width",c),i.adapter_.setStyleProperty("padding","0"),i.adapter_.setStyleProperty("margin","0"),requestAnimationFrame((function(){i.adapter_.setStyleProperty("width","0")}))}))}else if(n&&e&&(this.removeFocus_(),this.adapter_.notifyRemoval()),r){var o=this.adapter_.eventTargetHasClass(t.target,l.LEADING_ICON)&&this.adapter_.hasClass(l.SELECTED),s=this.adapter_.eventTargetHasClass(t.target,l.CHECKMARK)&&!this.adapter_.hasClass(l.SELECTED);return o?this.adapter_.addClassToLeadingIcon(l.HIDDEN_LEADING_ICON):s?this.adapter_.removeClassFromLeadingIcon(l.HIDDEN_LEADING_ICON):void 0}},i.prototype.handleTrailingIconInteraction=function(t){this.shouldHandleInteraction_(t)&&(this.adapter_.notifyTrailingIconInteraction(),this.removeChip_(t))},i.prototype.handleKeydown=function(t){if(this.shouldRemoveChip_(t))return this.removeChip_(t);d.has(t.key)&&(t.preventDefault(),this.focusNextAction_(t))},i.prototype.removeFocus=function(){this.adapter_.setPrimaryActionAttr(a.TAB_INDEX,"-1"),this.adapter_.setTrailingActionAttr(a.TAB_INDEX,"-1")},i.prototype.focusPrimaryAction=function(){this.focusPrimaryAction_()},i.prototype.focusTrailingAction=function(){if(!this.adapter_.hasTrailingAction())return this.focusPrimaryAction_();this.focusTrailingAction_()},i.prototype.focusNextAction_=function(t){var i=t.key,n=this.adapter_.hasTrailingAction(),e=this.getDirection_(i),r=this.getEvtSource_(t);if(!m.has(i)&&n)return r===f.PRIMARY&&e===h.RIGHT?this.focusTrailingAction_():r===f.TRAILING&&e===h.LEFT?this.focusPrimaryAction_():void this.adapter_.notifyNavigation(i,f.NONE);this.adapter_.notifyNavigation(i,r)},i.prototype.getEvtSource_=function(t){return this.adapter_.eventTargetHasClass(t.target,l.PRIMARY_ACTION)?f.PRIMARY:this.adapter_.eventTargetHasClass(t.target,l.TRAILING_ACTION)?f.TRAILING:f.NONE},i.prototype.getDirection_=function(t){var i=this.adapter_.isRTL();return t===a.ARROW_LEFT_KEY&&!i||t===a.ARROW_RIGHT_KEY&&i?h.LEFT:h.RIGHT},i.prototype.focusPrimaryAction_=function(){this.adapter_.setPrimaryActionAttr(a.TAB_INDEX,"0"),this.adapter_.focusPrimaryAction(),this.adapter_.setTrailingActionAttr(a.TAB_INDEX,"-1")},i.prototype.focusTrailingAction_=function(){this.adapter_.setTrailingActionAttr(a.TAB_INDEX,"0"),this.adapter_.focusTrailingAction(),this.adapter_.setPrimaryActionAttr(a.TAB_INDEX,"-1")},i.prototype.removeFocus_=function(){this.adapter_.setTrailingActionAttr(a.TAB_INDEX,"-1"),this.adapter_.setPrimaryActionAttr(a.TAB_INDEX,"-1")},i.prototype.removeChip_=function(t){t.stopPropagation(),this.shouldRemoveOnTrailingIconClick_&&this.beginExit()},i.prototype.shouldHandleInteraction_=function(t){return"click"===t.type||(t.key===a.ENTER_KEY||t.key===a.SPACEBAR_KEY)},i.prototype.shouldRemoveChip_=function(t){return this.adapter_.hasClass(l.DELETABLE)&&(t.key===a.BACKSPACE_KEY||t.key===a.DELETE_KEY)},i.prototype.setSelected_=function(t){t?(this.adapter_.addClass(l.SELECTED),this.adapter_.setPrimaryActionAttr(a.ARIA_CHECKED,"true")):(this.adapter_.removeClass(l.SELECTED),this.adapter_.setPrimaryActionAttr(a.ARIA_CHECKED,"false"))},i.prototype.notifySelection_=function(t){this.adapter_.notifySelection(t,!1)},i.prototype.notifyIgnoredSelection_=function(t){this.adapter_.notifySelection(t,!0)},i}(o),I=["click","keydown"],g=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return r(i,t),Object.defineProperty(i.prototype,"selected",{get:function(){return this.foundation_.isSelected()},set:function(t){this.foundation_.setSelected(t)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"shouldRemoveOnTrailingIconClick",{get:function(){return this.foundation_.getShouldRemoveOnTrailingIconClick()},set:function(t){this.foundation_.setShouldRemoveOnTrailingIconClick(t)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"id",{get:function(){return this.root_.id},enumerable:!0,configurable:!0}),i.attachTo=function(t){return new i(t)},i.prototype.initialize=function(t){var i=this;void 0===t&&(t=function(t,i){return new n(t,i)}),this.leadingIcon_=this.root_.querySelector(a.LEADING_ICON_SELECTOR),this.trailingIcon_=this.root_.querySelector(a.TRAILING_ICON_SELECTOR),this.checkmark_=this.root_.querySelector(a.CHECKMARK_SELECTOR),this.primaryAction_=this.root_.querySelector(a.PRIMARY_ACTION_SELECTOR),this.trailingAction_=this.root_.querySelector(a.TRAILING_ACTION_SELECTOR);var r=c({},n.createAdapter(this),{computeBoundingRect:function(){return i.foundation_.getDimensions()}});this.ripple_=t(this.root_,new e(r))},i.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction_=function(i){return t.foundation_.handleInteraction(i)},this.handleTransitionEnd_=function(i){return t.foundation_.handleTransitionEnd(i)},this.handleTrailingIconInteraction_=function(i){return t.foundation_.handleTrailingIconInteraction(i)},this.handleKeydown_=function(i){return t.foundation_.handleKeydown(i)},I.forEach((function(i){t.listen(i,t.handleInteraction_)})),this.listen("transitionend",this.handleTransitionEnd_),this.listen("keydown",this.handleKeydown_),this.trailingIcon_&&I.forEach((function(i){t.trailingIcon_.addEventListener(i,t.handleTrailingIconInteraction_)}))},i.prototype.destroy=function(){var i=this;this.ripple_.destroy(),I.forEach((function(t){i.unlisten(t,i.handleInteraction_)})),this.unlisten("transitionend",this.handleTransitionEnd_),this.unlisten("keydown",this.handleKeydown_),this.trailingIcon_&&I.forEach((function(t){i.trailingIcon_.removeEventListener(t,i.handleTrailingIconInteraction_)})),t.prototype.destroy.call(this)},i.prototype.beginExit=function(){this.foundation_.beginExit()},i.prototype.getDefaultFoundation=function(){var t=this;return new C({addClass:function(i){return t.root_.classList.add(i)},addClassToLeadingIcon:function(i){t.leadingIcon_&&t.leadingIcon_.classList.add(i)},eventTargetHasClass:function(t,i){return!!t&&t.classList.contains(i)},focusPrimaryAction:function(){t.primaryAction_&&t.primaryAction_.focus()},focusTrailingAction:function(){t.trailingAction_&&t.trailingAction_.focus()},getCheckmarkBoundingClientRect:function(){return t.checkmark_?t.checkmark_.getBoundingClientRect():null},getComputedStyleValue:function(i){return window.getComputedStyle(t.root_).getPropertyValue(i)},getRootBoundingClientRect:function(){return t.root_.getBoundingClientRect()},hasClass:function(i){return t.root_.classList.contains(i)},hasLeadingIcon:function(){return!!t.leadingIcon_},hasTrailingAction:function(){return!!t.trailingAction_},isRTL:function(){return"rtl"===window.getComputedStyle(t.root_).getPropertyValue("direction")},notifyInteraction:function(){return t.emit(a.INTERACTION_EVENT,{chipId:t.id},!0)},notifyNavigation:function(i,n){return t.emit(a.NAVIGATION_EVENT,{chipId:t.id,key:i,source:n},!0)},notifyRemoval:function(){t.emit(a.REMOVAL_EVENT,{chipId:t.id,root:t.root_},!0)},notifySelection:function(i,n){return t.emit(a.SELECTION_EVENT,{chipId:t.id,selected:i,shouldIgnore:n},!0)},notifyTrailingIconInteraction:function(){return t.emit(a.TRAILING_ICON_INTERACTION_EVENT,{chipId:t.id},!0)},removeClass:function(i){return t.root_.classList.remove(i)},removeClassFromLeadingIcon:function(i){t.leadingIcon_&&t.leadingIcon_.classList.remove(i)},setPrimaryActionAttr:function(i,n){t.primaryAction_&&t.primaryAction_.setAttribute(i,n)},setStyleProperty:function(i,n){return t.root_.style.setProperty(i,n)},setTrailingActionAttr:function(i,n){t.trailingAction_&&t.trailingAction_.setAttribute(i,n)}})},i.prototype.setSelectedFromChipSet=function(t,i){this.foundation_.setSelectedFromChipSet(t,i)},i.prototype.focusPrimaryAction=function(){this.foundation_.focusPrimaryAction()},i.prototype.focusTrailingAction=function(){this.foundation_.focusTrailingAction()},i.prototype.removeFocus=function(){this.foundation_.removeFocus()},i.prototype.remove=function(){var t=this.root_.parentNode;null!==t&&t.removeChild(this.root_)},i}(s),E={CHIP_SELECTOR:".mdc-chip"},A={CHOICE:"mdc-chip-set--choice",FILTER:"mdc-chip-set--filter"},_=function(t){function i(n){var e=t.call(this,c({},i.defaultAdapter,n))||this;return e.selectedChipIds_=[],e}return r(i,t),Object.defineProperty(i,"strings",{get:function(){return E},enumerable:!0,configurable:!0}),Object.defineProperty(i,"cssClasses",{get:function(){return A},enumerable:!0,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{focusChipPrimaryActionAtIndex:function(){},focusChipTrailingActionAtIndex:function(){},getChipListCount:function(){return-1},getIndexOfChipById:function(){return-1},hasClass:function(){return!1},isRTL:function(){return!1},removeChipAtIndex:function(){},removeFocusFromChipAtIndex:function(){},selectChipAtIndex:function(){}}},enumerable:!0,configurable:!0}),i.prototype.getSelectedChipIds=function(){return this.selectedChipIds_.slice()},i.prototype.select=function(t){this.select_(t,!1)},i.prototype.handleChipInteraction=function(t){var i=this.adapter_.getIndexOfChipById(t);this.removeFocusFromChipsExcept_(i),(this.adapter_.hasClass(A.CHOICE)||this.adapter_.hasClass(A.FILTER))&&this.toggleSelect_(t)},i.prototype.handleChipSelection=function(t,i,n){if(!n){var e=this.selectedChipIds_.indexOf(t)>=0;i&&!e?this.select(t):!i&&e&&this.deselect_(t)}},i.prototype.handleChipRemoval=function(t){var i=this.adapter_.getIndexOfChipById(t);this.deselectAndNotifyClients_(t),this.adapter_.removeChipAtIndex(i);var n=this.adapter_.getChipListCount()-1,e=Math.min(i,n);this.removeFocusFromChipsExcept_(e),this.adapter_.focusChipTrailingActionAtIndex(e)},i.prototype.handleChipNavigation=function(t,i,n){var e=this.adapter_.getChipListCount()-1,r=this.adapter_.getIndexOfChipById(t);if(-1!==r&&d.has(i)){var c=this.adapter_.isRTL();i===a.ARROW_RIGHT_KEY&&!c||i===a.ARROW_LEFT_KEY&&c||i===a.ARROW_DOWN_KEY?r++:i===a.HOME_KEY?r=0:i===a.END_KEY?r=e:r--,r<0||r>e||(this.removeFocusFromChipsExcept_(r),this.focusChipAction_(r,i,n))}},i.prototype.focusChipAction_=function(t,i,n){var e=m.has(i);if(e&&n===f.PRIMARY)return this.adapter_.focusChipPrimaryActionAtIndex(t);if(e&&n===f.TRAILING)return this.adapter_.focusChipTrailingActionAtIndex(t);var r=this.getDirection_(i);return r===h.LEFT?this.adapter_.focusChipTrailingActionAtIndex(t):r===h.RIGHT?this.adapter_.focusChipPrimaryActionAtIndex(t):void 0},i.prototype.getDirection_=function(t){var i=this.adapter_.isRTL();return t===a.ARROW_LEFT_KEY&&!i||t===a.ARROW_RIGHT_KEY&&i?h.LEFT:h.RIGHT},i.prototype.deselect_=function(t,i){void 0===i&&(i=!1);var n=this.selectedChipIds_.indexOf(t);if(n>=0){this.selectedChipIds_.splice(n,1);var e=this.adapter_.getIndexOfChipById(t);this.adapter_.selectChipAtIndex(e,!1,i)}},i.prototype.deselectAndNotifyClients_=function(t){this.deselect_(t,!0)},i.prototype.toggleSelect_=function(t){this.selectedChipIds_.indexOf(t)>=0?this.deselectAndNotifyClients_(t):this.selectAndNotifyClients_(t)},i.prototype.removeFocusFromChipsExcept_=function(t){for(var i=this.adapter_.getChipListCount(),n=0;n<i;n++)n!==t&&this.adapter_.removeFocusFromChipAtIndex(n)},i.prototype.selectAndNotifyClients_=function(t){this.select_(t,!0)},i.prototype.select_=function(t,i){if(!(this.selectedChipIds_.indexOf(t)>=0)){if(this.adapter_.hasClass(A.CHOICE)&&this.selectedChipIds_.length>0){var n=this.adapter_.getIndexOfChipById(this.selectedChipIds_[0]);this.selectedChipIds_=[],this.adapter_.selectChipAtIndex(n,!1,i)}this.selectedChipIds_.push(t);var e=this.adapter_.getIndexOfChipById(t);this.adapter_.selectChipAtIndex(e,!0,i)}},i}(o),v=C.strings,T=v.INTERACTION_EVENT,R=v.SELECTION_EVENT,O=v.REMOVAL_EVENT,b=v.NAVIGATION_EVENT,N=_.strings.CHIP_SELECTOR,L=0,y=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return r(i,t),i.attachTo=function(t){return new i(t)},Object.defineProperty(i.prototype,"chips",{get:function(){return this.chips_.slice()},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"selectedChipIds",{get:function(){return this.foundation_.getSelectedChipIds()},enumerable:!0,configurable:!0}),i.prototype.initialize=function(t){void 0===t&&(t=function(t){return new g(t)}),this.chipFactory_=t,this.chips_=this.instantiateChips_(this.chipFactory_)},i.prototype.initialSyncWithDOM=function(){var t=this;this.chips_.forEach((function(i){i.id&&i.selected&&t.foundation_.select(i.id)})),this.handleChipInteraction_=function(i){return t.foundation_.handleChipInteraction(i.detail.chipId)},this.handleChipSelection_=function(i){t.foundation_.handleChipSelection(i.detail.chipId,i.detail.selected,i.detail.shouldIgnore)},this.handleChipRemoval_=function(i){return t.foundation_.handleChipRemoval(i.detail.chipId)},this.handleChipNavigation_=function(i){return t.foundation_.handleChipNavigation(i.detail.chipId,i.detail.key,i.detail.source)},this.listen(T,this.handleChipInteraction_),this.listen(R,this.handleChipSelection_),this.listen(O,this.handleChipRemoval_),this.listen(b,this.handleChipNavigation_)},i.prototype.destroy=function(){this.chips_.forEach((function(t){t.destroy()})),this.unlisten(T,this.handleChipInteraction_),this.unlisten(R,this.handleChipSelection_),this.unlisten(O,this.handleChipRemoval_),this.unlisten(b,this.handleChipNavigation_),t.prototype.destroy.call(this)},i.prototype.addChip=function(t){t.id=t.id||"mdc-chip-"+ ++L,this.chips_.push(this.chipFactory_(t))},i.prototype.getDefaultFoundation=function(){var t=this;return new _({focusChipPrimaryActionAtIndex:function(i){t.chips_[i].focusPrimaryAction()},focusChipTrailingActionAtIndex:function(i){t.chips_[i].focusTrailingAction()},getChipListCount:function(){return t.chips_.length},getIndexOfChipById:function(i){return t.findChipIndex_(i)},hasClass:function(i){return t.root_.classList.contains(i)},isRTL:function(){return"rtl"===window.getComputedStyle(t.root_).getPropertyValue("direction")},removeChipAtIndex:function(i){i>=0&&i<t.chips_.length&&(t.chips_[i].destroy(),t.chips_[i].remove(),t.chips_.splice(i,1))},removeFocusFromChipAtIndex:function(i){t.chips_[i].removeFocus()},selectChipAtIndex:function(i,n,e){i>=0&&i<t.chips_.length&&t.chips_[i].setSelectedFromChipSet(n,e)}})},i.prototype.instantiateChips_=function(t){return[].slice.call(this.root_.querySelectorAll(N)).map((function(i){return i.id=i.id||"mdc-chip-"+ ++L,t(i)}))},i.prototype.findChipIndex_=function(t){for(var i=0;i<this.chips_.length;i++)if(this.chips_[i].id===t)return i;return-1},i}(s);const w=(i,n)=>{const e=Object.assign({},i),{class:r,choice:c,filter:o,input:s}=e,h=function(t,i){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&i.indexOf(e)<0&&(n[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(e=Object.getOwnPropertySymbols(t);r<e.length;r++)i.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(n[e[r]]=t[e[r]])}return n}(e,["class","choice","filter","input"]);return t("div",Object.assign({class:Object.assign({"mdc-chip-set":!0,"mdc-chip-set--choice":c,"mdc-chip-set--filter":o,"mdc-chip-set--input":s},u(r))},h),n)},j=class{constructor(t){i(this,t)}async addChip(t){this.mdcChipSet.addChip(t)}componentDidLoad(){this.mdcChipSet=new y(this.chipSet)}componentDidUnload(){this.mdcChipSet.destroy()}render(){return t(w,{ref:t=>this.chipSet=t},t("slot",null))}static get style(){return".mdc-chip__icon--leading,.mdc-chip__icon--trailing{color:rgba(0,0,0,.54)}.mdc-chip__icon--trailing:hover{color:rgba(0,0,0,.62)}.mdc-chip__icon--trailing:focus{color:rgba(0,0,0,.87)}.mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-chip__icon--trailing{margin-left:4px;margin-right:-4px}.mdc-chip__icon--trailing[dir=rtl],[dir=rtl] .mdc-chip__icon--trailing{margin-left:-4px;margin-right:4px}.mdc-touch-target-wrapper{display:inline}.mdc-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87);font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;height:32px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 12px;border-width:0;outline:none;cursor:pointer;-webkit-appearance:none}.mdc-chip,.mdc-chip .mdc-chip__ripple{border-radius:16px}.mdc-chip:hover{color:rgba(0,0,0,.87)}.mdc-chip.mdc-chip--selected .mdc-chip__checkmark,.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){margin-left:-4px;margin-right:4px}.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl],[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){margin-left:4px;margin-right:-4px}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip:hover{color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-chip .mdc-chip__touch{position:absolute;top:50%;right:0;left:0;height:48px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.mdc-chip--exit{-webkit-transition:opacity 75ms cubic-bezier(.4,0,.2,1),width .15s cubic-bezier(0,0,.2,1),padding .1s linear,margin .1s linear;transition:opacity 75ms cubic-bezier(.4,0,.2,1),width .15s cubic-bezier(0,0,.2,1),padding .1s linear,margin .1s linear;opacity:0}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:none;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{-webkit-transition:stroke-dashoffset .15s cubic-bezier(.4,0,.6,1) 50ms;transition:stroke-dashoffset .15s cubic-bezier(.4,0,.6,1) 50ms;stroke-width:2px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-chip__text:focus{outline:none}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{position:relative}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected{color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading{color:rgba(98,0,238,.54)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover{color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-chip-set--choice .mdc-chip .mdc-chip__checkmark-path{stroke:#6200ee;stroke:var(--mdc-theme-primary,#6200ee)}.mdc-chip-set--choice .mdc-chip--selected{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-chip__checkmark-svg{width:0;height:20px;-webkit-transition:width .15s cubic-bezier(.4,0,.2,1);transition:width .15s cubic-bezier(.4,0,.2,1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{-webkit-transition:opacity 75ms linear;transition:opacity 75ms linear;-webkit-transition-delay:-50ms;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{-webkit-transition:opacity 75ms linear;transition:opacity 75ms linear;-webkit-transition-delay:80ms;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{-webkit-transition:width 0ms;transition:width 0ms}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}\@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}\@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-chip{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-chip .mdc-chip__ripple:after,.mdc-chip .mdc-chip__ripple:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-chip .mdc-chip__ripple:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple:before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,1));transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple:after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-chip.mdc-ripple-upgraded--unbounded .mdc-chip__ripple:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-chip.mdc-ripple-upgraded--foreground-activation .mdc-chip__ripple:after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-chip.mdc-ripple-upgraded--foreground-deactivation .mdc-chip__ripple:after{-webkit-animation:mdc-ripple-fg-opacity-out .15s;animation:mdc-ripple-fg-opacity-out .15s;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-chip .mdc-chip__ripple:after,.mdc-chip .mdc-chip__ripple:before{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-chip .mdc-chip__ripple:after,.mdc-chip .mdc-chip__ripple:before{background-color:rgba(0,0,0,.87)}.mdc-chip:hover .mdc-chip__ripple:before{opacity:.04}.mdc-chip.mdc-ripple-upgraded--background-focused .mdc-chip__ripple:before,.mdc-chip.mdc-ripple-upgraded:focus-within .mdc-chip__ripple:before,.mdc-chip:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple:before,.mdc-chip:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-chip:not(.mdc-ripple-upgraded) .mdc-chip__ripple:after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-chip:not(.mdc-ripple-upgraded):active .mdc-chip__ripple:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-chip.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-chip .mdc-chip__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:before{opacity:.08}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:after,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:before{background-color:#6200ee}\@supports not (-ms-ime-align:auto){.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:after,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:before{background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover .mdc-chip__ripple:before{opacity:.12}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded--background-focused .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded:focus-within .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.2}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded) .mdc-chip__ripple:after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):active .mdc-chip__ripple:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.2}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.2}\@-webkit-keyframes mdc-chip-entry{0%{-webkit-transform:scale(.8);transform:scale(.8);opacity:.4}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}\@keyframes mdc-chip-entry{0%{-webkit-transform:scale(.8);transform:scale(.8);opacity:.4}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-sizing:border-box;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set .mdc-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-chip-set--input .mdc-chip{-webkit-animation:mdc-chip-entry .1s cubic-bezier(0,0,.2,1);animation:mdc-chip-entry .1s cubic-bezier(0,0,.2,1)}"}};export{j as mdc_chip_set};