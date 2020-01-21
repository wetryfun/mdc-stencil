import { h } from './core-ec54a9ee.js';
import { c as classNames } from './utils-3ab3a058.js';

const CSS_CLASSES = {
    ROOT: "mdc-button",
    ICON: "mdc-button__icon",
    LABEL: "mdc-button__label",
    RIPPLE: "mdc-button__ripple",
    DENSE: "mdc-button--dense",
    RAISED: "mdc-button--raised",
    OUTLINED: "mdc-button--outlined",
    UNELEVATED: "mdc-button--unelevated"
};

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
const mdcButton = (_a) => {
    var { class: className, raised, unelevated, outlined, dense, label, icon, trailingIcon } = _a, rest = __rest(_a, ["class", "raised", "unelevated", "outlined", "dense", "label", "icon", "trailingIcon"]);
    return (Object.assign({ class: Object.assign({ [CSS_CLASSES.ROOT]: true, [CSS_CLASSES.RAISED]: raised, [CSS_CLASSES.UNELEVATED]: unelevated, [CSS_CLASSES.OUTLINED]: outlined, [CSS_CLASSES.DENSE]: dense }, classNames(className)), "aria-label": label || icon }, rest));
};
/**
 * MDC Button functional component
 * @param props
 * @param children
 */
const MdcButton = (props, children) => {
    const { icon, trailingIcon, label } = Object.assign({}, props);
    return (h("button", Object.assign({}, mdcButton(Object.assign({}, props))),
        h("div", { class: CSS_CLASSES.RIPPLE }),
        icon && !trailingIcon && h(MdcButtonIcon, { icon: icon }),
        label && h("span", { class: CSS_CLASSES.LABEL }, label),
        icon && trailingIcon && h(MdcButtonIcon, { icon: icon }),
        children));
};
const MdcButtonIcon = ({ icon }) => h("span", { class: `material-icons ${CSS_CLASSES.ICON}` }, icon);

export { CSS_CLASSES as C, MdcButtonIcon as M, MdcButton as a, mdcButton as m };
