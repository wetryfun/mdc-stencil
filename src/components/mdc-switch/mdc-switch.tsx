import { h, Component, Prop, ComponentInterface, Method } from '@stencil/core';
import { MdcSwitch as Switch, MdcSwitchProps } from './index';
import { MDCSwitch } from '@material/switch';

@Component({
  tag: 'mdc-switch',
  styleUrl: 'mdc-switch.scss',
  shadow: false
})
export class MdcSwitch implements ComponentInterface {
  @Prop() name: MdcSwitchProps['name'];
  @Prop() disabled: MdcSwitchProps['disabled'];
  @Prop() checked: MdcSwitchProps['checked'];

  private switch: HTMLElement;
  private mdcSwitch: MDCSwitch;

  @Method()
  async setChecked(checked = true) {
    this.mdcSwitch.checked = checked;
  }

  @Method()
  async setDisabled(disabled = true) {
    this.mdcSwitch.disabled = disabled;
  }

  componentDidLoad() {
    this.mdcSwitch = new MDCSwitch(this.switch);
  }

  componentDidUnload() {
    this.mdcSwitch.destroy();
  }

  render() {
    const { name, checked, disabled } = this;
    return (
      <Switch
        ref={el => (this.switch = el)}
        {...{ name, checked, disabled }}
      />
    );
  }
}
