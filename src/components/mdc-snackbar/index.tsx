import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { classNames } from '../utils';

export interface MdcSnackbarProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  stacked?: boolean;
  leading?: boolean;
}

export interface MdcSnackbarLabelProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export interface MdcSnackbarActionsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcSnackbar: FunctionalComponent<MdcSnackbarProps> = (
  props,
  children
) => {
  const { class: className, stacked, leading, ...rest } = {
    ...props
  };
  return (
    <div
      class={{
        'mdc-snackbar': true,
        'mdc-snackbar--stacked': stacked,
        'mdc-snackbar--leading': leading,
        ...classNames(className)
      }}
      {...rest}
    >
      <div class='mdc-snackbar__surface'>{children}</div>
    </div>
  );
};

export const MdcSnackbarLabel: FunctionalComponent<MdcSnackbarLabelProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = {
    ...props
  };
  return (
    <div
      role='status'
      aria-live='polite'
      class={{
        'mdc-snackbar__label': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const MdcSnackbarActions: FunctionalComponent<
  MdcSnackbarActionsProps
> = (props, children) => {
  const { class: className, ...rest } = {
    ...props
  };
  return (
    <div
      class={{
        'mdc-snackbar__actions': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
