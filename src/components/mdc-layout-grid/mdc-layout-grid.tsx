import { Component, ComponentInterface, h, Host, Prop } from "@stencil/core";
import { mdcLayoutGrid, MdcLayoutGridProps } from ".";

/**
 * @slot default - Grid contents
 */
@Component({
  tag: "mdc-layout-grid",
  styleUrl: "mdc-layout-grid.scss",
  shadow: false
})
export class MdcLayoutGrid implements ComponentInterface {
  /**
   * The grid is by default center aligned.
   * You can align left or right to change this behavior.
   * Note, this will have no effect when the grid already fills its container.
   */
  @Prop() align: MdcLayoutGridProps["align"];

  /**
   * You can designate each column to have a certain width by setting fixedColumnWidth.
   * The column width can be specified through css custom properties `--mdc-layout-grid-column-width-{screen_size}.`
   * The column width is set to 72px on all devices by default.
   */
  @Prop() fixedColumn: MdcLayoutGridProps["fixedColumnWidth"];

  render() {
    return (
      <Host {...mdcLayoutGrid(this)}>
        <slot />
      </Host>
    );
  }
}
