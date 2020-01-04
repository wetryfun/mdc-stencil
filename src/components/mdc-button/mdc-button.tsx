import { MDCRipple } from '@material/ripple';
import { Component, ComponentInterface, h, Method, Prop } from '@stencil/core';
import { MdcButton as Button, MdcButtonProps } from '.';

@Component({
  tag: 'mdc-button',
  styleUrl: 'mdc-button.scss',
  shadow: false
})
export class MdcButton implements ComponentInterface {
  @Prop() disabled: MdcButtonProps['disabled'];
  @Prop() name: MdcButtonProps['name'];
  @Prop() type: MdcButtonProps['type'];
  @Prop() value: MdcButtonProps['value'];
  @Prop() raised?: MdcButtonProps['raised'];
  @Prop() unelevated?: MdcButtonProps['unelevated'];
  @Prop() outlined?: MdcButtonProps['outlined'];
  @Prop() dense?: MdcButtonProps['dense'];

  private button: HTMLButtonElement;
  private mdcRipple: MDCRipple;

  @Method()
  async layout() {
    this.mdcRipple.layout();
  }

  componentDidLoad() {
    this.mdcRipple = new MDCRipple(this.button);
  }

  componentDidUnload() {
    this.mdcRipple.destroy();
  }

  componentDidRender() {
    const { mdcRipple } = this;
    if (mdcRipple) {
      mdcRipple.layout();
    }
  }

  render() {
    const {
      disabled,
      name,
      type,
      value,
      raised,
      unelevated,
      outlined,
      dense
    } = this;
    return (
      <Button
        ref={el => (this.button = el)}
        {...{
          disabled,
          name,
          type,
          value,
          raised,
          unelevated,
          outlined,
          dense
        }}
      >
        <slot />
      </Button>
    );
  }
}
