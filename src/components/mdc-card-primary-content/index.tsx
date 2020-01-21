import { JSXBase } from '@stencil/core/internal';
import { FunctionalComponent, h } from '@stencil/core';
import { CSS_CLASSES } from '../mdc-card/constant';
import { classNames } from '../utils';

export interface MdcCardPrimaryContentProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

  export const mdcCardPrimaryContent = ({
    class: className,
    ...rest
  }: MdcCardPrimaryContentProps | any) => ({
    class: { [CSS_CLASSES.PRIMARY_ACTION]: true, ...classNames(className) },
    ...rest
  });
  
  /**
   * This component is used as the container for primary tappable content.
   */
  export const MdcCardPrimaryContent: FunctionalComponent<MdcCardPrimaryContentProps> = (
    props,
    children
  ) => {
    return <div {...mdcCardPrimaryContent({ ...props })}>{children}</div>;
  };
  