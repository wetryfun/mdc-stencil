import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { classNames } from '../utils';

export interface MdcChipProps
  extends JSXBase.InputHTMLAttributes<HTMLButtonElement> {
    selected?: boolean;
  }

export interface MdcChipSetProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  choice?: boolean;
  filter?: boolean;
  input?: boolean;
}

export interface MdcChipCheckmark
  extends JSXBase.HTMLAttributes<HTMLSpanElement> {}

export const MdcChipSet: FunctionalComponent<MdcChipSetProps> = (
  props,
  children
) => {
  const { class: className, choice, filter, input, ...rest } = {
    ...props
  };

  return (
    <div
      class={{
        'mdc-chip-set': true,
        'mdc-chip-set--choice': choice,
        'mdc-chip-set--filter': filter,
        'mdc-chip-set--input': input,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const MdcChip: FunctionalComponent<MdcChipProps> = (props, children) => {
  const { class: className, selected, ...rest } = {
    ...props
  };

  return [
    <button
      class={{
        'mdc-chip': true,
        'mdc-chip--selected': selected,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </button>
  ];
};

export const MdcChipCheckmark: FunctionalComponent<
  MdcChipCheckmark
> = props => {
  const { class: className, ...rest } = {
    ...props
  };

  return (
    <span
      class={{ 'mdc-chip__checkmark': true, ...classNames(className) }}
      {...rest}
    >
      <svg class='mdc-chip__checkmark-svg' viewBox='-2 -3 30 30'>
        <path
          class='mdc-chip__checkmark-path'
          fill='none'
          stroke='black'
          d='M1.73,12.91 8.1,19.28 22.79,4.59'
        />
      </svg>
    </span>
  );
};
