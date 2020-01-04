import { MDCIconButtonToggle } from '@material/icon-button';
import { MDCRipple } from '@material/ripple';
import { Component, ComponentInterface, h, Method, Prop } from '@stencil/core';
import { MdcIconButton as IconButton, MdcIconButtonProps } from './index';

@Component({
  tag: 'mdc-icon-button',
  styleUrl: 'mdc-icon-button.scss',
  shadow: false
})
export class MdcIconButton implements ComponentInterface {
  @Prop() checked: MdcIconButtonProps['checked'];
  @Prop() disabled: MdcIconButtonProps['disabled'];
  @Prop() name: MdcIconButtonProps['name'];
  @Prop() value: MdcIconButtonProps['value'];
  @Prop() type: MdcIconButtonProps['type'];
  @Prop() toggle = false;
  @Prop() on: boolean;

  private button: HTMLButtonElement;
  private mdcIconButton: MDCIconButtonToggle | MDCRipple;

  @Method()
  async layout() {
    const { mdcIconButton, toggle } = this;
    if (mdcIconButton) {
      if (toggle) {
        const mdcIconButtonToggle = mdcIconButton as MDCIconButtonToggle;
        mdcIconButtonToggle.ripple.layout();
      } else {
        (mdcIconButton as MDCRipple).layout();
      }
    }
  }

  componentDidLoad() {
    const { toggle, button } = this;
    if (toggle) {
      this.mdcIconButton = new MDCIconButtonToggle(button);
    } else {
      const mdcIconButton = new MDCRipple(button);
      mdcIconButton.unbounded = true;
      this.mdcIconButton = mdcIconButton;
    }
  }

  componentDidUnload() {
    this.mdcIconButton.destroy();
  }

  componentDidRender() {
    this.layout();
  }

  render() {
    const { type, checked, disabled, name, value, on } = this;
    return (
      <IconButton
        ref={el => (this.button = el)}
        {...{ type, checked, disabled, name, value, on }}
      >
        <slot />
      </IconButton>
    );
  }
}
