import { h, FunctionalComponent } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { classNames } from "../utils";

export interface MdcLayoutGridCellProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  span?: number;
  spanDesktop?: number;
  spanTablet?: number;
  spanPhone?: number;
  align?: "top" | "middle" | "bottom";
}

export const MdcLayoutGridCellClassNames = (props: MdcLayoutGridCellProps) => {
  const {
    class: className,
    align,
    span,
    spanDesktop,
    spanTablet,
    spanPhone
  } = { ...props };
  return {
    "mdc-layout-grid__cell": true,
    [`mdc-layout-grid__cell--span-${span}`]: span > 0,
    [`mdc-layout-grid__cell--span-${spanDesktop}-desktop`]: spanDesktop > 0,
    [`mdc-layout-grid__cell--span-${spanTablet}-tablet`]: spanTablet > 0,
    [`mdc-layout-grid__cell--span-${spanPhone}-phone`]: spanPhone > 0,
    [`mdc-layout-grid__cell--align-${align}`]: !!align,
    ...classNames(className)
  };
};

export const MdcLayoutGridCell: FunctionalComponent<MdcLayoutGridCellProps> = (
  props,
  children
) => {
  const {
    class: className,
    align,
    span,
    spanDesktop,
    spanTablet,
    spanPhone,
    ...rest
  } = { ...props };

  return (
    <div class={MdcLayoutGridCellClassNames(props)} {...rest}>
      {children}
    </div>
  );
};
