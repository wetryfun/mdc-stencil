import { Component, ComponentInterface, h, Host, Prop } from "@stencil/core";
import { mdcCard, MdcCardProps } from ".";

/**
 * @slot - Card contents
 */
@Component({
  tag: "mdc-card",
  styleUrl: "mdc-card.scss",
  shadow: false
})
export class MdcCard implements ComponentInterface {
  /**
   * Enables an outline on the card.
   */
  @Prop() outlined: MdcCardProps["outlined"] = false;

  render() {
    return (
      <Host {...mdcCard(this)}>
        <slot />
      </Host>
    );
  }
}
