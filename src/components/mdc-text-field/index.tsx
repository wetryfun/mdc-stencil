import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { InputEvent, classNames, unique } from '../utils';

export interface MdcTextFieldProps
  extends JSXBase.InputHTMLAttributes<HTMLDivElement>,
    JSXBase.TextareaHTMLAttributes<HTMLDivElement> {
  inputRef?: JSXBase.InputHTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement
  >['ref'];
  onInput?: (ev: InputEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  textarea?: boolean;
  outlined?: boolean;
  withLeadingIcon?: boolean;
  withTrailingIcon?: boolean;
  label?: string | HTMLElement;
}

export const MdcTextField: FunctionalComponent<MdcTextFieldProps> = (
  props,
  children
) => {
  const {
    ref,
    inputRef,
    class: className,
    id = unique(),
    disabled,
    checked,
    value,
    fullWidth,
    textarea,
    outlined,
    withLeadingIcon,
    withTrailingIcon,
    placeholder,
    label,
    ...rest
  } = {
    ...props
  };

  return [
    <div
      ref={ref}
      class={{
        'mdc-text-field': true,
        'mdc-text-field--disabled': disabled,
        'mdc-text-field--fullwidth': fullWidth,
        'mdc-text-field--textarea': textarea,
        'mdc-text-field--outlined': outlined,
        'mdc-text-field--with-leading-icon': withLeadingIcon,
        'mdc-text-field--with-trailing-icon': withTrailingIcon,
        'mdc-text-field--no-label': !label,
        ...classNames(className)
      }}
    >
      {textarea ? (
        <textarea
          class='mdc-text-field__input'
          {...{
            id,
            disabled,
            value,
            placeholder,
            ref: inputRef,
            'aria-label': placeholder,
            ...rest
          }}
          {...rest}
        />
      ) : (
        <input
          type='text'
          class='mdc-text-field__input'
          {...{
            id,
            disabled,
            value,
            placeholder,
            ref: inputRef,
            'aria-label': placeholder,
            ...rest
          }}
          {...rest}
        />
      )}
      {textarea || outlined ? (
        <div class='mdc-notched-outline'>
          <div class='mdc-notched-outline__leading'></div>
          {label && (
            <div class='mdc-notched-outline__notch'>
              <label
                class={{
                  'mdc-floating-label': true,
                  'mdc-floating-label--float-above': !!value
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
                'mdc-floating-label--float-above': !!value
              }}
              htmlFor={id}
            >
              {label}
            </label>
          ),
          <div class='mdc-line-ripple' />
        ]
      )}
    </div>,
    children
  ];
};

export const MdcTextFieldHelperLine: FunctionalComponent<
  JSXBase.HTMLAttributes<HTMLDivElement>
> = (props, children) => {
  const { class: className, ...rest } = {
    ...props
  };
  return (
    <div
      class={{
        'mdc-text-field-helper-line': true,
        ...classNames(className)
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
