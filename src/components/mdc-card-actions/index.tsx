import { JSXBase } from '@stencil/core/internal';
import { FunctionalComponent, h } from '@stencil/core';
import { CSS_CLASSES } from '../mdc-card/constant';
import { classNames } from '../utils';

export interface MdcCardActionsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
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
  return <div {...mdcCardActions({ ...props })}>{children}</div>;
};
