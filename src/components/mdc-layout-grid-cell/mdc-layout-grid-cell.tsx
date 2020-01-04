import { Component, ComponentInterface, h, Prop, Host } from "@stencil/core";
import { MdcLayoutGridCellProps, MdcLayoutGridCellClassNames } from ".";

@Component({
  tag: "mdc-layout-grid-cell",
  styleUrl: "../mdc-layout-grid/mdc-layout-grid.scss",
  shadow: false
})
export class MdcLayoutGrid implements ComponentInterface {
  @Prop() span?: MdcLayoutGridCellProps["span"];

  @Prop() spanDesktop?: MdcLayoutGridCellProps["spanDesktop"];

  @Prop() spanTablet?: MdcLayoutGridCellProps["spanTablet"];

  @Prop() spanPhone?: MdcLayoutGridCellProps["spanPhone"];

  @Prop() align?: MdcLayoutGridCellProps["align"];

  render() {
    const { span, spanDesktop, spanPhone, spanTablet, align } = this;
    return (
      <Host
        class={MdcLayoutGridCellClassNames({
          span,
          spanDesktop,
          spanPhone,
          spanTablet,
          align
        })}
      >
        <slot />
      </Host>
    );
  }
}
