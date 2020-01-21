import { Component, ComponentInterface, h, Host } from "@stencil/core";
import { mdcCardActionIcons } from ".";

@Component({
  tag: "mdc-card-action-icons",
  shadow: false
})
export class MdcCardActionIcons implements ComponentInterface {
  render() {
    return (
      <Host {...mdcCardActionIcons(this)}>
        <slot />
      </Host>
    );
  }
}
