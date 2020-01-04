import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { classNames, unique } from '../utils';

export interface MdcSelectProps
  extends JSXBase.InputHTMLAttributes<HTMLDivElement> {
  selectRef?: JSXBase.InputHTMLAttributes<HTMLSelectElement>['ref'];
  outlined?: boolean;
  label?: string | HTMLElement;
  selected?: boolean;
}

export const MdcSelect: FunctionalComponent<MdcSelectProps> = (
  props,
  children
) => {
  const {
    ref,
    class: className,
    selectRef,
    disabled,
    outlined,
    selected,
    id = unique(),
    label,
    ...rest
  } = {
    ...props
  };
  return (
    <div
      class={{
        'mdc-select': true,
        'mdc-text-field--outlined': outlined,
        'mdc-select--disabled': disabled,
        ...classNames(className)
      }}
      ref={ref}
      {...rest}
    >
      <i class='mdc-select__dropdown-icon'></i>
      <select
        class='mdc-select__native-control'
        {...{ ref: selectRef, id, disabled, ...rest }}
      >
        {children}
      </select>
      {outlined ? (
        <div class='mdc-notched-outline'>
          <div class='mdc-notched-outline__leading'></div>
          {label && (
            <div class='mdc-notched-outline__notch'>
              <label
                class={{
                  'mdc-floating-label': true,
                  'mdc-floating-label--float-above': selected
                }}
                htmlFor={id}
              >
                {label}
              </label>
            </div>
          )}
          <div class='mdc-notched-outline__trailing'></div>
        </div>
      ) : (
        [
          label && (
            <label
              class={{
                'mdc-floating-label': true,
                'mdc-floating-label--float-above': selected
              }}
              htmlFor={id}
            >
              {label}
            </label>
          ),
          <div class='mdc-line-ripple' />
        ]
      )}
    </div>
  );
};
