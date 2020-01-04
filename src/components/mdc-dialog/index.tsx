import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { MdcButton, MdcButtonProps } from '../mdc-button';
import { classNames } from '../utils';

export interface MdcDialogProps extends JSXBase.HTMLAttributes<HTMLDivElement> {
  stacked?: boolean;
}

export interface MdcDialogContentProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export interface MdcDialogActionsProps
  extends JSXBase.HTMLAttributes<HTMLElement> {}

export interface MdcDialogButtonProps extends MdcButtonProps {
  action?: string;
  default?: boolean;
}

export const MdcDialog: FunctionalComponent<MdcDialogProps> = (
  props,
  children
) => {
  const { class: className, stacked, ...rest } = {
    ...props
  };
  return (
    <div
      class={{
        'mdc-dialog': true,
        'mdc-dialog--stacked': stacked,
        ...classNames(className)
      }}
      role='alertdialog'
      aria-modal='true'
      {...rest}
    >
      <div class='mdc-dialog__container'>
        <div class='mdc-dialog__surface'>{children}</div>
      </div>
      <div class='mdc-dialog__scrim'></div>
    </div>
  );
};

export const MdcDialogContent: FunctionalComponent<MdcDialogContentProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = {
    ...props
  };
  return (
    <div
      class={{
        'mdc-dialog__content': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const MdcDialogActions: FunctionalComponent<MdcDialogActionsProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = {
    ...props
  };
  return (
    <footer
      class={{
        'mdc-dialog__actions': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </footer>
  );
};

export const MdcDialogButton: FunctionalComponent<MdcDialogButtonProps> = (
  props,
  children
) => {
  const { class: className, action, default: isDefault, ...rest } = {
    ...props
  };
  return (
    <MdcButton
      class={{
        'mdc-dialog__button': true,
        ...classNames(className)
      }}
      data-mdc-dialog-action={action}
      data-mdc-dialog-button-default={isDefault}
      {...rest}
    >
      {children}
    </MdcButton>
  );
};
