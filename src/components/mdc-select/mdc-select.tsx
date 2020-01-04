import { MDCSelect } from '@material/select';
import { Component, ComponentInterface, h, Method, Prop } from '@stencil/core';
import { MdcSelect as Select, MdcSelectProps } from '.';

@Component({
  tag: 'mdc-select',
  styleUrl: 'mdc-select.scss',
  shadow: false
})
export class MdcSelect implements ComponentInterface {
  @Prop() disabled: MdcSelectProps['disabled'];
  @Prop() required: MdcSelectProps['required'];
  @Prop() name: MdcSelectProps['name'];
  @Prop() label: MdcSelectProps['label'];
  @Prop() outlined: MdcSelectProps['outlined'];
  @Prop() selected: MdcSelectProps['selected'];

  private select: HTMLDivElement;
  private mdcSelect: MDCSelect;

  @Method()
  async layout() {
    if (this.mdcSelect) {
      this.mdcSelect.layout();
    }
  }

  @Method()
  async setValue(value: string) {
    this.mdcSelect.value = value;
  }

  @Method()
  async getValue() {
    return this.mdcSelect.value;
  }

  @Method()
  async setDisabled(disabled = true) {
    this.mdcSelect.disabled = disabled;
  }

  @Method()
  async getDisabled() {
    return this.mdcSelect.disabled;
  }

  @Method()
  async setValid(valid: boolean) {
    return (this.mdcSelect.valid = valid);
  }

  @Method()
  async getValid() {
    return this.mdcSelect.valid;
  }

  componentDidLoad() {
    this.mdcSelect = new MDCSelect(this.select);
  }

  componentDidUnload() {
    this.mdcSelect.destroy();
  }

  componentDidRender() {
    this.layout();
  }

  render() {
    const { disabled, required, name, label, outlined, selected } = this;
    return (
      <Select
        ref={el => (this.select = el)}
        {...{
          disabled,
          required,
          name,
          label,
          outlined,
          selected
        }}
      >
        <slot />
      </Select>
    );
  }
}
