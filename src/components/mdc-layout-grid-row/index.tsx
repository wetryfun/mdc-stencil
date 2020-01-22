import { h, FunctionalComponent } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { classNames } from "../utils";
import { CSS_CLASSES } from "../mdc-layout-grid/constant";

export interface MdcLayoutGridRowProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  tag?: string;
}

export const mdcLayoutGridRow = ({
  class: className,
  ...rest
}: MdcLayoutGridRowProps | any) => ({
  class: {
    [CSS_CLASSES.INNER]: true,
    ...classNames(className)
  },
  ...rest
});

export const MdcLayoutGridRow: FunctionalComponent<MdcLayoutGridRowProps> = (
  props,
  children
) => {
  const { tag: Tag = "div", ...rest } = { ...props };
  return <Tag {...mdcLayoutGridRow(rest)}>{children}</Tag>;
};
