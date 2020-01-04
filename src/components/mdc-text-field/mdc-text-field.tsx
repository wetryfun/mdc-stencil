import { MDCTextField } from '@material/textfield';
import { Component, ComponentInterface, h, Method, Prop } from '@stencil/core';
import { MdcTextField as TextField, MdcTextFieldProps } from '.';

@Component({
  tag: 'mdc-text-field',
  styleUrl: 'mdc-text-field.scss',
  shadow: false
})
export class MdcTextField implements ComponentInterface {
  @Prop() disabled: MdcTextFieldProps['disabled'];
  @Prop() required: MdcTextFieldProps['required'];
  @Prop() type: MdcTextFieldProps['type'];
  @Prop() name: MdcTextFieldProps['name'];
  @Prop() value: MdcTextFieldProps['value'];
  @Prop() rows: MdcTextFieldProps['rows'];
  @Prop() cols: MdcTextFieldProps['cols'];
  @Prop() label: MdcTextFieldProps['label'];
  @Prop() fullWidth: MdcTextFieldProps['fullWidth'];
  @Prop() textarea: MdcTextFieldProps['textarea'];
  @Prop() outlined: MdcTextFieldProps['outlined'];
  @Prop() withLeadingIcon: MdcTextFieldProps['withLeadingIcon'];
  @Prop() withTrailingIcon: MdcTextFieldProps['withTrailingIcon'];
  @Prop() inputRef: MdcTextFieldProps['inputRef'];

  private textField: HTMLElement;
  private mdcTextField: MDCTextField;

  @Method()
  async layout() {
    if (this.mdcTextField) {
      this.mdcTextField.layout();
    }
  }

  @Method()
  async setValue(value: string) {
    this.mdcTextField.value = value;
  }

  @Method()
  async getValue() {
    return this.mdcTextField.value;
  }

  @Method()
  async setDisabled(disabled = true) {
    this.mdcTextField.disabled = disabled;
  }

  @Method()
  async getDisabled() {
    return this.mdcTextField.disabled;
  }

  @Method()
  async setValid(valid: boolean) {
    return (this.mdcTextField.valid = valid);
  }

  @Method()
  async getValid() {
    return this.mdcTextField.valid;
  }

  @Method()
  async focusNative() {
    this.mdcTextField.focus();
  }

  componentDidLoad() {
    this.mdcTextField = new MDCTextField(this.textField);
  }

  componentDidUnload() {
    this.mdcTextField.destroy();
  }

  componentDidRender() {
    this.layout();
  }


  render() {
    const {
      disabled,
      required,
      name,
      value,
      label,
      type,
      rows,
      cols,
      fullWidth,
      textarea,
      outlined,
      withLeadingIcon,
      withTrailingIcon,
      inputRef
    } = this;
    return (
      <TextField
        ref={el => (this.textField = el)}
        {...{
          disabled,
          required,
          name,
          value,
          label,
          type,
          rows,
          cols,
          fullWidth,
          textarea,
          outlined,
          withLeadingIcon,
          withTrailingIcon,
          inputRef
        }}
      >
        <slot />
      </TextField>
    );
  }
}
