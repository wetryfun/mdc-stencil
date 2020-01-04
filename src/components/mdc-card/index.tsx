import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { MdcButton, MdcButtonProps } from '../mdc-button';
import { classNames } from '../utils';

export interface MdcCardProps extends JSXBase.HTMLAttributes<HTMLDivElement> {
  outlined?: boolean;
}

export interface MdcCardPrimaryActionProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export interface MdcCardMediaProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  size?: 'square' | '16-9';
}

export interface MdcCardMediaContentProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export interface MdcCardActionsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  fullBleed?: boolean;
}

export interface MdcCardActionButtonsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export interface MdcCardActionIconsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const MdcCard: FunctionalComponent<MdcCardProps> = (props, children) => {
  const { class: className, outlined, ...rest } = { ...props };
  return (
    <div
      class={{
        'mdc-card': true,
        'mdc-card-outlined': outlined,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const MdcCardPrimaryAction: FunctionalComponent<
  MdcCardPrimaryActionProps
> = (props, children) => {
  const { class: className, ...rest } = { ...props };
  return (
    <div
      class={{ 'mdc-card__primary-action': true, ...classNames(className) }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const MdcCardMedia: FunctionalComponent<MdcCardMediaProps> = (
  props,
  children
) => {
  const { class: className, size, ...rest } = { ...props };
  return (
    <div
      class={{
        'mdc-card__media': true,
        'mdc-card__media--square': size === 'square',
        'mdc-card__media--16-9': size === '16-9',
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const MdcCardMediaContent: FunctionalComponent<
  MdcCardMediaContentProps
> = (props, children) => {
  const { class: className, ...rest } = { ...props };
  return (
    <div
      class={{ 'mdc-card__media-content': true, ...classNames(className) }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const MdcCardActions: FunctionalComponent<MdcCardActionsProps> = (
  props,
  children
) => {
  const { class: className, fullBleed, ...rest } = { ...props };
  return (
    <div
      class={{
        'mdc-card__actions': true,
        'mdc-card__actions--full-bleed': fullBleed,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const MdcCardActionButtons: FunctionalComponent<
  MdcCardActionButtonsProps
> = (props, children) => {
  const { class: className, ...rest } = { ...props };
  return (
    <div
      class={{ 'mdc-card__action-buttons': true, ...classNames(className) }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const MdcCardActionIcons: FunctionalComponent<
  MdcCardActionIconsProps
> = (props, children) => {
  const { class: className, ...rest } = { ...props };
  return (
    <div
      class={{ 'mdc-card__action-icons': true, ...classNames(className) }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const MdcCardActionButton: FunctionalComponent<MdcButtonProps> = (
  props,
  children
) => {
  const { class: className, ...rest } = { ...props };
  return (
    <MdcButton
      class={{
        'mdc-card__action mdc-card__action--button': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </MdcButton>
  );
};
