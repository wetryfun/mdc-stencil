import { FunctionalComponent, h } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { CSS_CLASSES } from "../mdc-card/constant";
import { classNames, MdcComponentProps } from "../utils";

export interface MdcCardActionIconsProps
  extends MdcComponentProps,
    JSXBase.HTMLAttributes<HTMLDivElement> {}

export const mdcCardActionIcons = ({
  class: className,
  ...rest
}: MdcCardActionIconsProps | any) => ({
  class: { [CSS_CLASSES.ACTION_ICONS]: true, ...classNames(className) },
  ...rest
});

/**
 * It acts as a container for icons of the card.
 * This component is a child of a `<MdcCardActions>` component.
 * It can be used by itself or used as a sibling directly after the `<MdcCardActionButtons>` component.
 */
export const MdcCardActionIcons: FunctionalComponent<MdcCardActionIconsProps> = (
  props,
  children
) => {
  const { tag: Tag = "div", ...rest } = { ...props };
  return <Tag {...mdcCardActionIcons(rest)}>{children}</Tag>;
};
