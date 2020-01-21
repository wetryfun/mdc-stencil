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
const mdcCardMedia = (_a) => {
    var { class: className, size, imageUrl, style } = _a, rest = __rest(_a, ["class", "size", "imageUrl", "style"]);
    return (Object.assign({ class: Object.assign({ [CSS_CLASSES.MEDIA]: true, [CSS_CLASSES.MEDIA_SQUARE]: size === "square", [CSS_CLASSES.MEDIA_16_9]: size === "wide" }, classNames(className)), style: Object.assign({ backgroundImage: imageUrl && `url(${imageUrl})` }, style) }, rest));
};
/**
 * This component is a container for an image on the card.
 * Optionally, any children of the `<MdcCardMedia>` component is wrapped with an element with the className .mdc-card__media-content.
 * In order for your image to display, `MdcCardMedia` requires that you have an aspect ratio of either `square` or `wide`.
 */
const MdcCardMedia = (props, children) => {
    return (h("div", Object.assign({}, mdcCardMedia(Object.assign({}, props))),
        h(MdcCardMediaContent, null, children),
        "}"));
};
const mdcCardMediaContent = (_a) => {
    var { class: className } = _a, rest = __rest(_a, ["class"]);
    return (Object.assign({ class: Object.assign({ [CSS_CLASSES.MEDIA_CONTENT]: true }, classNames(className)) }, rest));
};
/**
 * Wrapper element for card media content
 */
const MdcCardMediaContent = (props, children) => {
    return h("div", Object.assign({}, mdcCardMediaContent(Object.assign({}, props))), children);
};

const MdcCardMedia$1 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, Object.assign({}, mdcCardMedia(this)), h(MdcCardMediaContent, null, h("slot", null))));
    }
};

export { MdcCardMedia$1 as mdc_card_media };
