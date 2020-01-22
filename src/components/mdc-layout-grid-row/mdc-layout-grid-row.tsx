import { Component, ComponentInterface, h, Host } from "@stencil/core";
import { mdcLayoutGridRow } from ".";

@Component({
  tag: "mdc-layout-grid-row",
  shadow: false
})
export class MdcLayoutGridRow implements ComponentInterface {
  render() {
    return (
      <Host {...mdcLayoutGridRow(this)}>
        <slot />
      </Host>
    );
  }
}
