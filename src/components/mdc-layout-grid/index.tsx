import { FunctionalComponent, h } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { classNames, MdcComponentProps } from "../utils";
import { CSS_CLASSES } from "./constant";

export type Alignment = "left" | "right";

export interface MdcLayoutGridProps
  extends MdcComponentProps,
    JSXBase.HTMLAttributes<HTMLDivElement> {
  /**
   * The grid is by default center aligned.
   * You can align left or right to change this behavior.
   * Note, this will have no effect when the grid already fills its container.
   */
  align?: Alignment;
  /**
   * You can designate each column to have a certain width by setting fixedColumnWidth.
   * The column width can be specified through css custom properties `--mdc-layout-grid-column-width-{screen_size}.`
   * The column width is set to 72px on all devices by default.
   */
  fixedColumnWidth?: boolean;
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
