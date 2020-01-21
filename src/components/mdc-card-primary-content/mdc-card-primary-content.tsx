import { MDCRipple } from "@material/ripple";
import {
  Component,
  ComponentInterface,
  getElement,
  h,
  Host
} from "@stencil/core";
import { mdcCardPrimaryContent } from ".";

/**
 * @slot default - Primary content
 */
@Component({
  tag: "mdc-card-primary-content",
  shadow: false
})
export class MdcCardPrimaryContent implements ComponentInterface {
  private mdcRipple: MDCRipple;

  connectedCallback() {
    this.mdcRipple = new MDCRipple(getElement(this));
  }

  disconnectedCallback() {
    this.mdcRipple.destroy();
  }

  render() {
    return (
      <Host {...mdcCardPrimaryContent(this)}>
        <slot />
      </Host>
    );
  }
}
