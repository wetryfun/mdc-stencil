import { h, r as registerInstance, H as Host } from './core-ec54a9ee.js';
import { c as classNames } from './utils-3ab3a058.js';

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
const MdcLayoutGrid = (props, children) => {
    const _a = Object.assign({}, props), { class: className } = _a, rest = __rest(_a, ["class"]);
    return (h("div", Object.assign({ class: Object.assign({ 'mdc-layout-grid': true }, classNames(className)) }, rest), children));
};
const MdcLayoutGridInner = (props, children) => {
    const _a = Object.assign({}, props), { class: className } = _a, rest = __rest(_a, ["class"]);
    return (h("div", Object.assign({ class: Object.assign({ 'mdc-layout-grid__inner': true }, classNames(className)) }, rest), children));
};

const MdcLayoutGrid$1 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: "mdc-layout-grid" }, h(MdcLayoutGridInner, null, h("slot", null))));
    }
    static get style() { return ":root {\n  --mdc-layout-grid-margin-desktop: 24px;\n  --mdc-layout-grid-gutter-desktop: 24px;\n  --mdc-layout-grid-column-width-desktop: 72px;\n  --mdc-layout-grid-margin-tablet: 16px;\n  --mdc-layout-grid-gutter-tablet: 16px;\n  --mdc-layout-grid-column-width-tablet: 72px;\n  --mdc-layout-grid-margin-phone: 16px;\n  --mdc-layout-grid-gutter-phone: 16px;\n  --mdc-layout-grid-column-width-phone: 72px;\n}\n\n\@media (min-width: 840px) {\n  .mdc-layout-grid {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 24px;\n    padding: var(--mdc-layout-grid-margin-desktop, 24px);\n  }\n}\n\@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-tablet, 16px);\n  }\n}\n\@media (max-width: 479px) {\n  .mdc-layout-grid {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-phone, 16px);\n  }\n}\n\n\@media (min-width: 840px) {\n  .mdc-layout-grid__inner {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    margin: -12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1);\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 24px;\n      grid-gap: var(--mdc-layout-grid-gutter-desktop, 24px);\n      grid-template-columns: repeat(12, minmax(0, 1fr));\n    }\n  }\n}\n\@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid__inner {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1);\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-tablet, 16px);\n      grid-template-columns: repeat(8, minmax(0, 1fr));\n    }\n  }\n}\n\@media (max-width: 479px) {\n  .mdc-layout-grid__inner {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1);\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      margin: 0;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-phone, 16px);\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n}\n\n\@media (min-width: 840px) {\n  .mdc-layout-grid__cell {\n    width: calc(33.3333333333% - 24px);\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2);\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-desktop {\n    width: calc(8.3333333333% - 24px);\n    width: calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-desktop {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-desktop {\n    width: calc(16.6666666667% - 24px);\n    width: calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-desktop {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-desktop {\n    width: calc(25% - 24px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-desktop {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-desktop {\n    width: calc(33.3333333333% - 24px);\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-desktop {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-desktop {\n    width: calc(41.6666666667% - 24px);\n    width: calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-desktop {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-desktop {\n    width: calc(50% - 24px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-desktop {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-desktop {\n    width: calc(58.3333333333% - 24px);\n    width: calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-desktop {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-desktop {\n    width: calc(66.6666666667% - 24px);\n    width: calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-desktop {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-desktop {\n    width: calc(75% - 24px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-desktop {\n      width: auto;\n      grid-column-end: span 9;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-desktop {\n    width: calc(83.3333333333% - 24px);\n    width: calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-desktop {\n      width: auto;\n      grid-column-end: span 10;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-desktop {\n    width: calc(91.6666666667% - 24px);\n    width: calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-desktop {\n      width: auto;\n      grid-column-end: span 11;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-desktop {\n    width: calc(100% - 24px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-desktop {\n      width: auto;\n      grid-column-end: span 12;\n    }\n  }\n}\n\@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid__cell {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2);\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-tablet {\n    width: calc(12.5% - 16px);\n    width: calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-tablet {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-tablet {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-tablet {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-tablet {\n    width: calc(37.5% - 16px);\n    width: calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-tablet {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-tablet {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-tablet {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-tablet {\n    width: calc(62.5% - 16px);\n    width: calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-tablet {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-tablet {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-tablet {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-tablet {\n    width: calc(87.5% - 16px);\n    width: calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-tablet {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n}\n\@media (max-width: 479px) {\n  .mdc-layout-grid__cell {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2);\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-phone {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-1,\n.mdc-layout-grid__cell--span-1-phone {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-phone {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-2,\n.mdc-layout-grid__cell--span-2-phone {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-phone {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-3,\n.mdc-layout-grid__cell--span-3-phone {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-4,\n.mdc-layout-grid__cell--span-4-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-5,\n.mdc-layout-grid__cell--span-5-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-6,\n.mdc-layout-grid__cell--span-6-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-7,\n.mdc-layout-grid__cell--span-7-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-8,\n.mdc-layout-grid__cell--span-8-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-9,\n.mdc-layout-grid__cell--span-9-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-10,\n.mdc-layout-grid__cell--span-10-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-11,\n.mdc-layout-grid__cell--span-11-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n\n  .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  \@supports (display: grid) {\n    .mdc-layout-grid__cell--span-12,\n.mdc-layout-grid__cell--span-12-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n}\n.mdc-layout-grid__cell--order-1 {\n  -ms-flex-order: 1;\n  order: 1;\n}\n.mdc-layout-grid__cell--order-2 {\n  -ms-flex-order: 2;\n  order: 2;\n}\n.mdc-layout-grid__cell--order-3 {\n  -ms-flex-order: 3;\n  order: 3;\n}\n.mdc-layout-grid__cell--order-4 {\n  -ms-flex-order: 4;\n  order: 4;\n}\n.mdc-layout-grid__cell--order-5 {\n  -ms-flex-order: 5;\n  order: 5;\n}\n.mdc-layout-grid__cell--order-6 {\n  -ms-flex-order: 6;\n  order: 6;\n}\n.mdc-layout-grid__cell--order-7 {\n  -ms-flex-order: 7;\n  order: 7;\n}\n.mdc-layout-grid__cell--order-8 {\n  -ms-flex-order: 8;\n  order: 8;\n}\n.mdc-layout-grid__cell--order-9 {\n  -ms-flex-order: 9;\n  order: 9;\n}\n.mdc-layout-grid__cell--order-10 {\n  -ms-flex-order: 10;\n  order: 10;\n}\n.mdc-layout-grid__cell--order-11 {\n  -ms-flex-order: 11;\n  order: 11;\n}\n.mdc-layout-grid__cell--order-12 {\n  -ms-flex-order: 12;\n  order: 12;\n}\n.mdc-layout-grid__cell--align-top {\n  -ms-flex-item-align: start;\n  align-self: flex-start;\n}\n\@supports (display: grid) {\n  .mdc-layout-grid__cell--align-top {\n    -ms-flex-item-align: start;\n    align-self: start;\n  }\n}\n.mdc-layout-grid__cell--align-middle {\n  -ms-flex-item-align: center;\n  align-self: center;\n}\n.mdc-layout-grid__cell--align-bottom {\n  -ms-flex-item-align: end;\n  align-self: flex-end;\n}\n\@supports (display: grid) {\n  .mdc-layout-grid__cell--align-bottom {\n    -ms-flex-item-align: end;\n    align-self: end;\n  }\n}\n\n\@media (min-width: 840px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 1176px;\n    width: calc( var(--mdc-layout-grid-column-width-desktop, 72px) * 12 + var(--mdc-layout-grid-gutter-desktop, 24px) * 11 + var(--mdc-layout-grid-margin-desktop, 24px) * 2 );\n  }\n}\n\@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 720px;\n    width: calc( var(--mdc-layout-grid-column-width-tablet, 72px) * 8 + var(--mdc-layout-grid-gutter-tablet, 16px) * 7 + var(--mdc-layout-grid-margin-tablet, 16px) * 2 );\n  }\n}\n\@media (max-width: 479px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 368px;\n    width: calc( var(--mdc-layout-grid-column-width-phone, 72px) * 4 + var(--mdc-layout-grid-gutter-phone, 16px) * 3 + var(--mdc-layout-grid-margin-phone, 16px) * 2 );\n  }\n}\n\n.mdc-layout-grid--align-left {\n  margin-right: auto;\n  margin-left: 0;\n}\n\n.mdc-layout-grid--align-right {\n  margin-right: 0;\n  margin-left: auto;\n}"; }
};

export { MdcLayoutGrid$1 as mdc_layout_grid };
