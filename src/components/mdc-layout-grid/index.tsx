import { h, FunctionalComponent } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { classNames } from '../utils';

export interface MdcLayoutGridProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export interface MdcLayoutGridInnerProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcLayoutGrid: FunctionalComponent<MdcLayoutGridProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = { ...props };
  return (
    <div
      class={{ 'mdc-layout-grid': true, ...classNames(className) }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const MdcLayoutGridInner: FunctionalComponent<
  MdcLayoutGridInnerProps
> = (props, children) => {
  const { class: className, ...rest } = { ...props };

  return (
    <div
      class={{ 'mdc-layout-grid__inner': true, ...classNames(className) }}
      {...rest}
    >
      {children}
    </div>
  );
};
