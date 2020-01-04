import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { classNames, unique } from '../utils';

export interface MdcSwitchProps
  extends JSXBase.InputHTMLAttributes<HTMLDivElement> {
  inputRef?: JSXBase.InputHTMLAttributes<HTMLInputElement>['ref'];
}

export const MdcSwitch: FunctionalComponent<MdcSwitchProps> = props => {
  const {
    ref,
    inputRef,
    class: className,
    id = unique(),
    disabled,
    checked,
    ...rest
  } = {
    ...props
  };

  return [
    <div
      ref={ref}
      class={{
        'mdc-switch': true,
        'mdc-switch--disabled': disabled,
        'mdc-switch--checked': checked,
        ...classNames(className)
      }}
    >
      <div class='mdc-switch__track'></div>
      <div class='mdc-switch__thumb-underlay'>
        <div class='mdc-switch__thumb'>
          <input
            type='checkbox'
            class='mdc-switch__native-control'
            role='switch'
            {...{ id, disabled, checked, ref: inputRef, ...rest }}
          />
        </div>
      </div>
    </div>
  ];
};
