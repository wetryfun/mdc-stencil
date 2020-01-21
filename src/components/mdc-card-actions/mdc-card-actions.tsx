import { Component, ComponentInterface, h, Host } from "@stencil/core";
import { mdcCardActions } from ".";

@Component({
  tag: "mdc-card-actions",
  styleUrl: "../mdc-card/mdc-card.scss",
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
