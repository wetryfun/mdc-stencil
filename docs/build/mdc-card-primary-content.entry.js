import { h, r as registerInstance, c as getElement, H as Host } from './core-ec54a9ee.js';
import { M as MDCRipple } from './component-43330259.js';
import './component-04842584.js';
import './ponyfill-f805c928.js';
import './index-9b591ed0.js';
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
const mdcCardPrimaryContent = (_a) => {
    var { class: className } = _a, rest = __rest(_a, ["class"]);
    return (Object.assign({ class: Object.assign({ [CSS_CLASSES.PRIMARY_ACTION]: true }, classNames(className)) }, rest));
};
/**
 * This component is used as the container for primary tappable content.
 */
const MdcCardPrimaryContent = (props, children) => {
    return h("div", Object.assign({}, mdcCardPrimaryContent(Object.assign({}, props))), children);
};

const MdcCardPrimaryContent$1 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async layout() {
        const { mdcRipple } = this;
        if (mdcRipple) {
            mdcRipple.layout();
        }
    }
    componentDidLoad() {
        this.mdcRipple = new MDCRipple(getElement(this));
    }
    componentDidUnload() {
        const { mdcRipple } = this;
        if (mdcRipple) {
            mdcRipple.destroy();
        }
    }
    componentDidRender() {
        const { mdcRipple } = this;
        if (mdcRipple) {
            mdcRipple.layout();
        }
    }
    render() {
        return (h(Host, Object.assign({}, mdcCardPrimaryContent(this)), h("slot", null)));
    }
};

export { MdcCardPrimaryContent$1 as mdc_card_primary_content };
