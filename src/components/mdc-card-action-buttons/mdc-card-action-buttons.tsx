import { Component, ComponentInterface, h, Host } from "@stencil/core";
import { mdcCardActionButtons } from ".";

@Component({
  tag: "mdc-card-action-buttons",
  shadow: false
})
export class MdcCardActionButtons implements ComponentInterface {
  render() {
    return (
      <Host {...mdcCardActionButtons(this)}>
        <slot />
      </Host>
    );
  }
}