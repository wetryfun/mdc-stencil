import { JSXBase } from '@stencil/core/internal';
import { FunctionalComponent, h } from '@stencil/core';
import { CSS_CLASSES } from '../mdc-card/constant';
import { classNames, MdcComponentProps } from '../utils';

export interface MdcCardPrimaryContentProps
  extends MdcComponentProps, JSXBase.HTMLAttributes<HTMLDivElement> {}

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
    const { tag: Tag = "div", ...rest } = { ...props };
    return <Tag {...mdcCardPrimaryContent(rest)}>{children}</Tag>;
  };
  