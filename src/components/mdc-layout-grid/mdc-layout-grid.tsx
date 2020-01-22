import { Component, ComponentInterface, h, Host, Prop } from "@stencil/core";
import { mdcLayoutGrid, MdcLayoutGridInner, MdcLayoutGridProps } from ".";

@Component({
  tag: "mdc-layout-grid",
  styleUrl: "mdc-layout-grid.scss",
  shadow: false
})
export class MdcLayoutGrid implements ComponentInterface {
  @Prop() align: MdcLayoutGridProps["align"];
  @Prop() fixedColumn: MdcLayoutGridProps["fixedColumnWidth"];

  render() {
    return (
      <Host {...mdcLayoutGrid(this)}>
        <MdcLayoutGridInner>
          <slot />
        </MdcLayoutGridInner>
      </Host>
    );
  }
}
