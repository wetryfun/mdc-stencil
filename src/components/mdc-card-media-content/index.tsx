import { FunctionalComponent, h } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { CSS_CLASSES } from "../mdc-card/constant";
import { classNames, MdcComponentProps } from "../utils";

export interface MdcCardMediaContentProps
  extends MdcComponentProps,
    JSXBase.HTMLAttributes<HTMLDivElement> {}

export const mdcCardMediaContent = ({
  class: className,
  ...rest
}: MdcCardMediaContentProps | any) => ({
  class: { [CSS_CLASSES.MEDIA_CONTENT]: true, ...classNames(className) },
  ...rest
});

/**
 * Wrapper element for card media content
 */
export const MdcCardMediaContent: FunctionalComponent<MdcCardMediaContentProps> = (
  props,
  children
) => {
  const { tag: Tag = "div", ...rest } = { ...props };
  return <Tag {...mdcCardMediaContent(rest)}>{children}</Tag>;
};
