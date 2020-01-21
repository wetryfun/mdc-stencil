import { FunctionalComponent, h } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { classNames } from "../utils";
import { CSS_CLASSES } from "../mdc-card/constant";

export interface MdcCardActionButtonsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const mdcCardActionButtons = ({
  class: className,
  ...rest
}: MdcCardActionButtonsProps | any) => ({
  class: { [CSS_CLASSES.ACTION_BUTTONS]: true, ...classNames(className) },
  ...rest
});

/**
 * It acts as a container for buttons of the card.
 * This component is a child of a `<MdcCardActions>` component.
 */
export const MdcCardActionButtons: FunctionalComponent<MdcCardActionButtonsProps> = (
  props,
  children
) => {
  return <div {...mdcCardActionButtons({ ...props })}>{children}</div>;
};
