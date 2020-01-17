import { MDCRipple } from "@material/ripple";
import {
  Component,
  ComponentInterface,
  getElement,
  h,
  Host,
  Method
} from "@stencil/core";
import { mdcCardPrimaryContent } from ".";

@Component({
  tag: "mdc-card-primary-content",
  styleUrl: "mdc-card.scss",
  shadow: false
})
export class MdcCardPrimaryContent implements ComponentInterface {
  private mdcRipple: MDCRipple;

  @Method()
  async layout() {
    this.mdcRipple.layout();
  }

  componentDidLoad() {
    this.mdcRipple = new MDCRipple(getElement(this));
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
    return (
      <Host {...mdcCardPrimaryContent(this)}>
        <slot />
      </Host>
    );
  }
}
