import { Component, ComponentInterface, h, Host, Prop } from "@stencil/core";
import { mdcLayoutGridCell, MdcLayoutGridCellProps } from ".";

/**
 * @slot - Cell contents
 */
@Component({
  tag: "mdc-layout-grid-cell",
  shadow: false
})
export class MdcLayoutGrid implements ComponentInterface {
  @Prop() columns?: MdcLayoutGridCellProps["columns"];

  @Prop() desktopColumns?: MdcLayoutGridCellProps["desktopColumns"];

  @Prop() tabletColumns?: MdcLayoutGridCellProps["tabletColumns"];

  @Prop() phoneColumns?: MdcLayoutGridCellProps["phoneColumns"];

  @Prop() align?: MdcLayoutGridCellProps["align"];

  @Prop() order?: MdcLayoutGridCellProps["order"];

  render() {
    return (
      <Host {...mdcLayoutGridCell(this)}>
        <slot />
      </Host>
    );
  }
}
