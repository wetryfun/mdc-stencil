import { FunctionalComponent, h } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { classNames, MdcComponentProps } from "../utils";
import { CSS_CLASSES } from "../mdc-card/constant";

export interface MdcCardActionButtonsProps
  extends MdcComponentProps, JSXBase.HTMLAttributes<HTMLDivElement> {
}

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
  const { tag: Tag = "div", ...rest } = { ...props };
  return <Tag {...mdcCardActionButtons(rest)}>{children}</Tag>;
};
