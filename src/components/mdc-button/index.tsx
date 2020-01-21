import { FunctionalComponent, h } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { classNames } from "../utils";
import CSS_CLASSES from "./constant";

export interface MdcButtonProps
  extends JSXBase.InputHTMLAttributes<HTMLButtonElement> {
  /**
   * Icon to display, and aria-label value when label is not defined..
   */
  icon?: string;
  /**
   * Label to display for the button, and aria-label.
   */
  label?: string;
  /**
   * Creates a contained button that is elevated above the surface.
   */
  raised?: boolean;
  /**
   * Creates a contained button that is flush with the surface.
   */
  unelevated?: boolean;
  /**
   * Creates an outlined button that is flush with the surface.
   */
  outlined?: boolean;
  /**
   * Makes the button text and container slightly smaller.
   */
  dense?: boolean;
  /**
   * Disabled buttons cannot be interacted with and have no visual interaction effect.
   */
  disabled?: boolean;
  /**
   * When true, icon will be displayed after label.
   */
  trailingIcon?: boolean;
}

export interface MdcButtonIconProps
  extends JSXBase.InputHTMLAttributes<HTMLSpanElement> {
  /**
   * Icon to display, and aria-label value when label is not defined..
   */
  icon?: string;
}

export const mdcButton = ({
  class: className,
  raised,
  unelevated,
  outlined,
  dense,
  label,
  icon,
  trailingIcon,
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
  "aria-label": label || icon,
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
  const { icon, trailingIcon, label } = {
    ...props
  };

  return (
    <button {...mdcButton({ ...props })}>
      <div class="mdc-button__ripple"></div>
      {!icon && !trailingIcon && <MdcButtonIcon icon={icon} />}
      {label && <span class={`${CSS_CLASSES.LABEL}`}>{label}</span>}
      {icon && trailingIcon && <MdcButtonIcon icon={icon} />}
      {children}
    </button>
  );
};

export const MdcButtonIcon: FunctionalComponent<MdcButtonIconProps> = ({
  icon
}) => <span class={`material-icons ${CSS_CLASSES.ICON}`}>{icon}</span>;
