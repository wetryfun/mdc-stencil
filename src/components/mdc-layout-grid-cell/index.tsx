import { FunctionalComponent, h } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { CSS_CLASSES, DEVICE_TYPE } from "../mdc-layout-grid/constant";
import { classNames, MdcComponentProps } from "../utils";

export type TwelveColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type FourColumn = 1 | 2 | 3 | 4;
export type EightColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Alignment = "bottom" | "middle" | "top";

export interface MdcLayoutGridCellProps
  extends MdcComponentProps,
    JSXBase.HTMLAttributes<HTMLDivElement> {
  columns?: TwelveColumn;
  desktopColumns?: TwelveColumn;
  tabletColumns?: EightColumn;
  phoneColumns?: FourColumn;
  order?: TwelveColumn;
  align?: Alignment;
}

export const mdcLayoutGridCell = ({
  class: className,
  align,
  order,
  columns,
  desktopColumns,
  tabletColumns,
  phoneColumns,
  ...rest
}: MdcLayoutGridCellProps) => ({
  class: {
    [CSS_CLASSES.CELL]: true,
    [`${CSS_CLASSES.CELL_ALIGN}-${align}`]: !!align,
    [`${CSS_CLASSES.CELL_ORDER}-${order}`]: !!order,
    [`${CSS_CLASSES.CELL_SPAN}-${columns}`]: !!columns,
    [`${CSS_CLASSES.CELL_SPAN}-${desktopColumns}-${DEVICE_TYPE.DESKTOP}`]: !!desktopColumns,
    [`${CSS_CLASSES.CELL_SPAN}-${phoneColumns}-${DEVICE_TYPE.PHONE}`]: !!phoneColumns,
    [`${CSS_CLASSES.CELL_SPAN}-${tabletColumns}-${DEVICE_TYPE.TABLET}`]: !!tabletColumns,
    ...classNames(className)
  },
  ...rest
});

export const MdcLayoutGridCell: FunctionalComponent<MdcLayoutGridCellProps> = (
  props,
  children
) => {
  const { tag: Tag = "div", ...rest } = { ...props };
  return <Tag {...mdcLayoutGridCell(rest)}>{children}</Tag>;
};
