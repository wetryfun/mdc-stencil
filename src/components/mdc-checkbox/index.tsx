import { FunctionalComponent, h } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { classNames, MdcComponentProps } from "../utils";
import { cssClasses } from "@material/checkbox/constants";

export interface MdcCheckboxProps
  extends MdcComponentProps,
    JSXBase.InputHTMLAttributes<HTMLDivElement> {
  /**
   * Input properties
   */
  inputProps?: JSXBase.InputHTMLAttributes<HTMLInputElement>;
  /**
   * Checkbox id
   */
  nativeControlId?: JSXBase.InputHTMLAttributes<HTMLInputElement>["id"];
  /**
   * Indicates whether the checkbox is indeterminate
   */
  indeterminate?: boolean;
}

export const mdcCheckbox = ({
  class: className,
  ...rest
}: MdcCheckboxProps) => ({
  class: { [cssClasses.ROOT]: true, ...classNames(className) },
  ...rest
});

export const MdcCheckbox: FunctionalComponent<MdcCheckboxProps> = props => {
  const {
    tag: Tag = "div",
    inputProps,
    checked,
    disabled,
    name,
    value,
    indeterminate,
    nativeControlId: id,
    ...rest
  } = {
    ...props
  };
  return (
    <Tag {...mdcCheckbox(rest)}>
      <input
        type="checkbox"
        class={cssClasses.NATIVE_CONTROL}
        aria-checked={String(!!checked)}
        aria-disabled={String(!!disabled)}
        {...{
          id,
          checked,
          disabled,
          name,
          value,
          indeterminate,
          ...inputProps
        }}
      />
      <div class={cssClasses.BACKGROUND}>
        <svg class={cssClasses.CHECKMARK} viewBox="0 0 24 24">
          <path
            class={cssClasses.CHECKMARK_PATH}
            fill="none"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          />
        </svg>
        <div class={cssClasses.MIXEDMARK} />
      </div>
      <div class="mdc-checkbox__ripple"></div>
    </Tag>
  );
};
