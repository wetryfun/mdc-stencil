import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { classNames } from '../utils';

export interface MdcButtonProps
  extends JSXBase.InputHTMLAttributes<HTMLButtonElement> {
  raised?: boolean;
  unelevated?: boolean;
  outlined?: boolean;
  dense?: boolean;
}

export const MdcButton: FunctionalComponent<MdcButtonProps> = (
  props,
  children
) => {
  const { class: className, raised, unelevated, outlined, dense, ...rest } = {
    ...props
  };
  return (
    <button
      class={{
        'mdc-button': true,
        'mdc-button--raised': raised,
        'mdc-button--unelevated': unelevated,
        'mdc-button--outlined': outlined,
        'mdc-button--dense': dense,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
