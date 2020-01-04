import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { classNames } from '../utils';

export interface MdcRadioProps
  extends JSXBase.InputHTMLAttributes<HTMLDivElement> {
  inputRef?: JSXBase.InputHTMLAttributes<HTMLInputElement>['ref'];
}

export const MdcRadio: FunctionalComponent<MdcRadioProps> = props => {
  const { class: className, ref, inputRef, ...rest } = { ...props };
  return (
    <div
      class={{
        'mdc-radio': true,
        ...classNames(className)
      }}
      ref={ref}
    >
      <input
        class='mdc-radio__native-control'
        type='radio'
        ref={inputRef}
        {...rest}
      />
      <div class='mdc-radio__background'>
        <div class='mdc-radio__outer-circle' />
        <div class='mdc-radio__inner-circle' />
      </div>
    </div>
  );
};
