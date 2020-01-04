import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { classNames } from '../utils';

interface DividerProps {
  padded?: boolean;
  inset?: boolean;
}

export interface MdcListProps
  extends JSXBase.HTMLAttributes<HTMLUListElement> {
  nonInteractive?: boolean;
  dense?: boolean;
  avatarList?: boolean;
  twoLine?: boolean;
  role?: 'listbox' | 'radiogroup' | 'group';
  label?: string;
}

export interface MdcListDividerProps
  extends JSXBase.HTMLAttributes<HTMLHRElement>,
    DividerProps {}

export interface MdcListItemProps
  extends JSXBase.HTMLAttributes<HTMLLIElement> {
  role?: 'option' | 'radio' | 'checkbox';
  checked?: boolean;
  selected?: boolean;
  activated?: boolean;
  disabled?: boolean;
  current?: boolean;
}

export interface MdcListItemDividerProps
  extends JSXBase.HTMLAttributes<HTMLLIElement>,
    DividerProps {}

export const MdcList: FunctionalComponent<MdcListProps> = (props, children) => {
  const {
    class: className,
    nonInteractive,
    dense,
    avatarList,
    twoLine,
    label,
    ...rest
  } = {
    ...props
  };
  return (
    <ul
      class={{
        'mdc-list': true,
        'mdc-list--non-interactive': nonInteractive,
        'mdc-list--dense': dense,
        'mdc-list--avatar-list': avatarList,
        'mdc-list--two-line': twoLine,
        ...classNames(className)
      }}
      {...{ 'aria-label': label, ...rest }}
    >
      {children}
    </ul>
  );
};

export const MdcListDivider: FunctionalComponent<
  MdcListDividerProps
> = props => {
  const { class: className, padded, inset, ...rest } = {
    ...props
  };
  return (
    <hr
      class={{
        'mdc-list-divider': true,
        'mdc-list-divider--padded': padded,
        'mdc-list-divider--inset': inset,
        ...classNames(className)
      }}
      {...rest}
    />
  );
};

export const MdcListItem: FunctionalComponent<MdcListItemProps> = (
  props,
  children
) => {
  const {
    class: className,
    role,
    checked,
    disabled,
    selected,
    activated,
    current,
    ...rest
  } = {
    ...props
  };
  return (
    <li
      class={{
        'mdc-list-item': true,
        'mdc-list-item--disabled': disabled,
        'mdc-list-item--selected': selected,
        'mdc-list-item--activated': activated,
        ...classNames(className)
      }}
      {...{
        'aria-checked': checked !== undefined && String(checked),
        'aria-selected': selected,
        'aria-current': current,
        role,
        ...rest
      }}
    >
      {children}
    </li>
  );
};

export const MdcListItemDivider: FunctionalComponent<
  MdcListItemDividerProps
> = props => {
  const { class: className, padded, inset, ...rest } = {
    ...props
  };
  return (
    <li
      role='separator'
      class={{
        'mdc-list-divider': true,
        'mdc-list-divider--padded': padded,
        'mdc-list-divider--inset': inset,
        ...classNames(className)
      }}
      {...rest}
    />
  );
};
