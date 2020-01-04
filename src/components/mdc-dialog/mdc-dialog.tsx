import { MDCDialog } from '@material/dialog';
import { Component, ComponentInterface, h, Method, Prop } from '@stencil/core';
import { MdcDialog as Dialog } from './index';

@Component({
  tag: 'mdc-dialog',
  styleUrl: 'mdc-dialog.scss',
  shadow: false
})
export class MdcDialog implements ComponentInterface {
  private dialog: HTMLDivElement;
  private mdcDialog: MDCDialog;

  @Prop() surface!: HTMLElement | HTMLElement[];

  @Method()
  async open() {
    this.mdcDialog.open();
  }

  @Method()
  async close(action: string) {
    this.mdcDialog.close(action);
  }

  @Method()
  async isOpen() {
    return this.mdcDialog.isOpen;
  }

  @Method()
  async layout() {
    if (this.mdcDialog) {
      this.mdcDialog.layout();
    }
  }

  componentDidLoad() {
    this.mdcDialog = new MDCDialog(this.dialog);
  }

  componentDidUnload() {
    this.mdcDialog.destroy();
  }

  componentDidRender() {
    this.layout();
  }

  render() {
    return <Dialog ref={el => (this.dialog = el)}>{this.surface}</Dialog>;
  }
}
