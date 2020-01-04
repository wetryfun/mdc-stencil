import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { classNames } from '../utils';

export interface MdcCheckboxProps
  extends JSXBase.InputHTMLAttributes<HTMLDivElement> {
  inputRef?: JSXBase.InputHTMLAttributes<HTMLInputElement>['ref'];
  indeterminate?: boolean;
}

export const MdcCheckbox: FunctionalComponent<MdcCheckboxProps> = props => {
  const { class: className, ref, inputRef, ...rest } = {
    ...props
  };
  return (
    <div class={{ 'mdc-checkbox': true, ...classNames(className) }} ref={ref}>
      <input
        type='checkbox'
        class='mdc-checkbox__native-control'
        ref={inputRef}
        {...rest}
      />
      <div class='mdc-checkbox__background'>
        <svg class='mdc-checkbox__checkmark' viewBox='0 0 24 24'>
          <path
            class='mdc-checkbox__checkmark-path'
            fill='none'
            d='M1.73,12.91 8.1,19.28 22.79,4.59'
          />
        </svg>
        <div class='mdc-checkbox__mixedmark' />
      </div>
    </div>
  );
};
