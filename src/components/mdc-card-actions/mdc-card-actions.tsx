import { Component, ComponentInterface, h, Host } from "@stencil/core";
import { mdcCardActions } from ".";

/**
 * @slot - Card actions
 */
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
