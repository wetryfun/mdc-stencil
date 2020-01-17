import { FunctionalComponent, h } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { classNames } from "../utils";

export const CSS_CLASSES = {
  ROOT: "mdc-button",
  ICON: "mdc-button__icon",
  LABEL: "mdc-button__label",
  DENSE: "mdc-button--dense",
  RAISED: "mdc-button--raised",
  OUTLINED: "mdc-button--outlined",
  UNELEVATED: "mdc-button--unelevated"
};

export interface MdcButtonProps
  extends JSXBase.InputHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  /**
   * Enables raised variant.
   */
  raised?: boolean;
  /**
   * Enables unelevated variant.
   */
  unelevated?: boolean;
  /**
   * Enables outlined variant.
   */
  outlined?: boolean;
  /**
   * Enables dense variant.
   */
  dense?: boolean;
  /**
   * Icon to render within root element.
   */
  icon?: HTMLOrSVGElement;
  /**
   * Icon to render on the right side of the element
   */
  trailingIcon?: HTMLOrSVGElement;
  /**
   * Sets a hyperlink & uses anchor tag instead of a button.
   */
  href?: HTMLAnchorElement["href"];
}

export const mdcButton = ({
  class: className,
  raised,
  unelevated,
  outlined,
  dense,
  icon,
  trailingIcon,
  href,
  ...rest
}: MdcButtonProps) => ({
  class: {
    [CSS_CLASSES.ROOT]: true,
    [CSS_CLASSES.RAISED]: raised,
    [CSS_CLASSES.UNELEVATED]: unelevated,
    [CSS_CLASSES.OUTLINED]: outlined,
    [CSS_CLASSES.DENSE]: dense,
    ...classNames(className)
  },
  href,
  ...rest
});

/**
 * MDC Button functional component
 * @param props
 * @param children
 */
export const MdcButton: FunctionalComponent<MdcButtonProps> = (
  props,
  children
) => {
  const { icon, trailingIcon, href } = {
    ...props
  };
  const Tag = href ? "a" : "button";

  return (
    <Tag {...mdcButton({ ...props })}>
      {!trailingIcon ? icon : null}
      {children}
      {trailingIcon ? trailingIcon : null}
    </Tag>
  );
};
