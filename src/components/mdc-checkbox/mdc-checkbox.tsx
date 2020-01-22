import { MDCCheckboxAdapter } from "@material/checkbox/adapter";
import { MDCCheckboxFoundation } from "@material/checkbox/foundation";
import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { MdcCheckbox as Checkbox, MdcCheckboxProps } from ".";
import { TypedEvent } from "../utils";

@Component({
  tag: "mdc-checkbox",
  styleUrl: "mdc-checkbox.scss",
  shadow: false
})
export class MdcCheckbox implements ComponentInterface {
  /**
   * Indicates whether the checkbox is checked ("on")
   */
  @Prop({ mutable: true })
  checked: MdcCheckboxProps["checked"] = false;
  /**
   * Indicates whether the checkbox is disabled
   */
  @Prop({ mutable: true })
  disabled: MdcCheckboxProps["disabled"] = false;
  /**
   * Indicates whether the checkbox is indeterminate
   */
  @Prop({ mutable: true })
  indeterminate: MdcCheckboxProps["indeterminate"] = false;
  /**
   * Checkbox name
   */
  @Prop() name: MdcCheckboxProps["name"];
  /**
   * Checkbox value
   */
  @Prop() value: MdcCheckboxProps["value"];
  /**
   * Checkbox id
   */
  @Prop() nativeControlId: string;

  private foundation: MDCCheckboxFoundation;
  private element: HTMLDivElement;
  private input: HTMLInputElement;
  private isConnected = false;

  connectedCallback() {
    this.isConnected = true;
  }

  disconnectedCallback() {
    this.isConnected = false;
  }

  componentDidLoad() {
    this.foundation = new MDCCheckboxFoundation(this.adapter());
    this.foundation.init();
  }

  componentDidUnload() {
    this.foundation.destroy();
  }

  handleChange(ev: TypedEvent<HTMLInputElement>) {
    const { indeterminate, checked } = ev.target;
    this.checked = checked;
    this.indeterminate = indeterminate;
    this.foundation.handleChange();
  }

  handleAnimationEnd() {
    this.foundation.handleAnimationEnd();
  }

  adapter(): MDCCheckboxAdapter {
    return {
      addClass: (className: string) => this.element.classList.add(className),
      removeClass: (className: string) =>
        this.element?.classList.remove(className),
      hasNativeControl: () => Boolean(this.input),
      isAttachedToDOM: () => this.isConnected,
      isChecked: () => this.checked,
      isIndeterminate: () => this.indeterminate,
      setNativeControlAttr: (attr, value) =>
        this.input.setAttribute(attr, value),
      setNativeControlDisabled: disabled => (this.input.disabled = disabled),
      removeNativeControlAttr: attr => this.input.removeAttribute(attr),
      forceLayout: () => this.element.offsetWidth
    };
  }

  render() {
    const {
      checked,
      disabled,
      value,
      name,
      indeterminate,
      nativeControlId: id
    } = this;
    return (
      <Checkbox
        ref={el => (this.element = el)}
        inputProps={{
          id,
          ref: el => (this.input = el),
          onChange: (e: TypedEvent<HTMLInputElement>) => this.handleChange(e)
        }}
        {...{
          disabled,
          indeterminate,
          checked,
          value,
          name
        }}
        onAnimationEnd={() => this.handleAnimationEnd()}
      />
    );
  }
}
