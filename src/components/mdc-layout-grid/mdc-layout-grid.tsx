import { Component, ComponentInterface, h, Host } from "@stencil/core";
import { MdcLayoutGridInner } from ".";

@Component({
  tag: "mdc-layout-grid",
  styleUrl: "mdc-layout-grid.scss",
  shadow: false
})
export class MdcLayoutGrid implements ComponentInterface {
  render() {
    return (
      <Host class="mdc-layout-grid">
        <MdcLayoutGridInner>
          <slot />
        </MdcLayoutGridInner>
      </Host>
    );
  }
}
