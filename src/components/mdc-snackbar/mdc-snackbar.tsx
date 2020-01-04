import { MDCSnackbar } from '@material/snackbar';
import { Component, ComponentInterface, h, Method } from '@stencil/core';
import { MdcSnackbar as Snackbar } from './index';

@Component({
  tag: 'mdc-snackbar',
  styleUrl: 'mdc-snackbar.scss',
  shadow: false
})
export class MdcSnackbar implements ComponentInterface {
  private snackbar: HTMLDivElement;
  private mdcSnackbar: MDCSnackbar;

  @Method()
  async open() {
    this.mdcSnackbar.open();
  }

  @Method()
  async close(action: string) {
    this.mdcSnackbar.close(action);
  }

  @Method()
  async isOpen() {
    return this.mdcSnackbar.isOpen;
  }

  @Method()
  async getTimeoutMs() {
    return this.mdcSnackbar.timeoutMs;
  }

  @Method()
  async setTimeoutMs(ms: number) {
    this.mdcSnackbar.timeoutMs = ms;
  }

  @Method()
  async getCloseOnEscape() {
    return this.mdcSnackbar.closeOnEscape;
  }

  @Method()
  async setCloseOnEscape(closes: boolean) {
    this.mdcSnackbar.closeOnEscape = closes;
  }

  @Method()
  async getLabelText() {
    return this.mdcSnackbar.labelText;
  }

  @Method()
  async setLabelText(text: string) {
    this.mdcSnackbar.labelText = text;
  }

  @Method()
  async getActionButtonText() {
    return this.mdcSnackbar.actionButtonText;
  }

  @Method()
  async setActionButtonText(text: string) {
    this.mdcSnackbar.actionButtonText = text;
  }

  componentDidLoad() {
    this.mdcSnackbar = new MDCSnackbar(this.snackbar);
  }

  componentDidUnload() {
    this.mdcSnackbar.destroy();
  }

  render() {
    return (
      <Snackbar ref={el => (this.snackbar = el)}>
        <slot />
      </Snackbar>
    );
  }
}
