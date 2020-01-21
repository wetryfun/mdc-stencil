import { Component, ComponentInterface, h, Host } from "@stencil/core";
import { mdcCardActions } from ".";

@Component({
  tag: "mdc-card-actions",
  shadow: false
})
export class MdcCardActions implements ComponentInterface {
  render() {
    return (
      <Host {...mdcCardActions(this)}>
        <slot />
      </Host>
    );
  }
}
