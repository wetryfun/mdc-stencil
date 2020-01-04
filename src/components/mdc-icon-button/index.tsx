import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { classNames } from '../utils';

export interface MdcIconButtonProps
  extends JSXBase.InputHTMLAttributes<HTMLButtonElement> {
    on?: boolean;
}

export const MdcIconButton: FunctionalComponent<MdcIconButtonProps> = (
  props,
  children
) => {
  const { class: className, on, ...rest } = {
    ...props
  };
  return (
    <button
      class={{
        'mdc-icon-button': true,
        'mdc-icon-button--on': on,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
