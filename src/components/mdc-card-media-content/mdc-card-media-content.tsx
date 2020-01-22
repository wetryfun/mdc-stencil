import { Component, ComponentInterface, h, Host } from "@stencil/core";
import { mdcCardMediaContent } from ".";

/**
 * @slot - Card media contents
 */
@Component({
  tag: "mdc-card-media-content",
  shadow: false
})
export class MdcCardMediaContent implements ComponentInterface {
  render() {
    return (
      <Host {...mdcCardMediaContent(this)}>
          <slot />
      </Host>
    );
  }
}
