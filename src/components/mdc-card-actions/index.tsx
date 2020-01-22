import { FunctionalComponent, h } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { CSS_CLASSES } from "../mdc-card/constant";
import { classNames, MdcComponentProps } from "../utils";

export interface MdcCardActionsProps
  extends MdcComponentProps,
    JSXBase.HTMLAttributes<HTMLDivElement> {
  /**
   * 	Enables full bleed card actions row by removing all padding.
   */
  fullBleed?: boolean;
}

export const mdcCardActions = ({
  class: className,
  fullBleed,
  ...rest
}: MdcCardActionsProps | any) => ({
  class: {
    [CSS_CLASSES.ACTIONS]: true,
    [CSS_CLASSES.ACTIONS_FULL_BLEED]: fullBleed,
    ...classNames(className)
  },
  ...rest
});

/**
 * Acts as a container for `<MdcCardActionButtons>` and/or `<MdcCardActionIcons>`.
 * It should be used as the last child of the `<MdcCard>` component.
 */
export const MdcCardActions: FunctionalComponent<MdcCardActionsProps> = (
  props,
  children
) => {
  const { tag: Tag = "div", ...rest } = { ...props };
  return <Tag {...mdcCardActions(rest)}>{children}</Tag>;
};
