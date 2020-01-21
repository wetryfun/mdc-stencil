import { h, r as registerInstance, H as Host } from './core-ec54a9ee.js';
import { c as classNames } from './utils-3ab3a058.js';
import { C as CSS_CLASSES } from './constant-e5c4998a.js';

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
const mdcCardActions = (_a) => {
    var { class: className, fullBleed } = _a, rest = __rest(_a, ["class", "fullBleed"]);
    return (Object.assign({ class: Object.assign({ [CSS_CLASSES.ACTIONS]: true, [CSS_CLASSES.ACTIONS_FULL_BLEED]: fullBleed }, classNames(className)) }, rest));
};
/**
 * Acts as a container for `<MdcCardActionButtons>` and/or `<MdcCardActionIcons>`.
 * It should be used as the last child of the `<MdcCard>` component.
 */
const MdcCardActions = (props, children) => {
    return h("div", Object.assign({}, mdcCardActions(Object.assign({}, props))), children);
};

const MdcCardActions$1 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, Object.assign({}, mdcCardActions(this)), h("slot", null)));
    }
};

export { MdcCardActions$1 as mdc_card_actions };
