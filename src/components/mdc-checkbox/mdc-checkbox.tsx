import { h, Component, Prop, ComponentInterface, Method } from '@stencil/core';
import { MdcCheckbox as Checkbox, MdcCheckboxProps } from '.';
import { MDCCheckbox } from '@material/checkbox';

@Component({
  tag: 'mdc-checkbox',
  styleUrl: 'mdc-checkbox.scss',
  shadow: false
})
export class MdcCheckbox implements ComponentInterface {
  @Prop() checked: MdcCheckboxProps['checked'];
  @Prop() disabled: MdcCheckboxProps['disabled'];
  @Prop() indeterminate: MdcCheckboxProps['indeterminate'];
  @Prop() name: MdcCheckboxProps['name'];
  @Prop() value: MdcCheckboxProps['value'];

  private checkbox: HTMLElement;
  private mdcCheckbox: MDCCheckbox;

  @Method()
  async layout() {
    this.mdcCheckbox.ripple.layout();
  }

  componentDidLoad() {
    this.mdcCheckbox = new MDCCheckbox(this.checkbox);
  }

  componentDidUnload() {
    this.mdcCheckbox.destroy();
  }

  componentDidRender() {
    const { mdcCheckbox, checked, disabled, indeterminate } = this;
    if (mdcCheckbox) {
      mdcCheckbox.checked = checked;
      mdcCheckbox.disabled = disabled;
      mdcCheckbox.indeterminate = indeterminate;
      mdcCheckbox.ripple.layout();
    }
  }

  render() {
    const { checked, disabled, indeterminate, name, value } = this;
    return (
      <Checkbox
        ref={el => (this.checkbox = el)}
        {...{ checked, disabled, indeterminate, name, value }}
      >
        <slot />
      </Checkbox>
    );
  }
}
