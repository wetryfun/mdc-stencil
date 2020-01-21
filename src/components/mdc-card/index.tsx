import { FunctionalComponent, h } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { CSS_CLASSES } from './constant';
import { classNames } from "../utils";

export interface MdcCardProps extends JSXBase.HTMLAttributes<HTMLDivElement> {
  /**
   * Enables an outline on the card.
   */
  outlined?: boolean;
}

export const mdcCard = ({
  class: className,
  outlined,
  ...rest
}: MdcCardProps) => ({
  class: {
    [CSS_CLASSES.ROOT]: true,
    [CSS_CLASSES.OUTLINED]: outlined,
    ...classNames(className)
  },
  ...rest
});

/**
 * This is the container component for the entire card.
 * All other components listed in this documentation should be a child to this component.
 */
export const MdcCard: FunctionalComponent<MdcCardProps> = (props, children) => {
  return <div {...mdcCard({ ...props })}>{children}</div>;
};