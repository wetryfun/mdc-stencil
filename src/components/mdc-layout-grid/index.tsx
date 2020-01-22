import { h, FunctionalComponent } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { classNames } from "../utils";
import { CSS_CLASSES } from "./constant";

export interface MdcLayoutGridProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  align?: "left" | "right";
  fixedColumnWidth?: boolean;
  tag?: string;
}

export interface MdcLayoutGridInnerProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  tag?: string;
}

export const mdcLayoutGrid = ({
  class: className,
  align,
  fixedColumnWidth,
  ...rest
}: MdcLayoutGridProps) => ({
  class: {
    [CSS_CLASSES.ROOT]: true,
    [`${CSS_CLASSES.ALIGN}-${align}`]: !!align,
    [CSS_CLASSES.FIXED_COLUMN_WIDTH]: fixedColumnWidth,
    ...classNames(className)
  },
  ...rest
});

export const MdcLayoutGrid: FunctionalComponent<MdcLayoutGridProps> = (
  props,
  children
) => {
  const { tag: Tag = "div", ...rest } = { ...props };
  return <Tag {...mdcLayoutGrid(rest)}>{children}</Tag>;
};

export const mdcLayoutGridInner = ({
  class: className,
  ...rest
}: MdcLayoutGridProps) => ({
  class: {
    [CSS_CLASSES.INNER]: true,
    ...classNames(className)
  },
  ...rest
});

export const MdcLayoutGridInner: FunctionalComponent<MdcLayoutGridInnerProps> = (
  props,
  children
) => {
  const { tag: Tag = "div", ...rest } = { ...props };
  return <Tag {...mdcLayoutGridInner(rest)}>{children}</Tag>;
};
