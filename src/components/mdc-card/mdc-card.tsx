import { Component, ComponentInterface, h, Host, Prop } from "@stencil/core";
import { mdcCard, MdcCardProps } from ".";

@Component({
  tag: "mdc-card",
  styleUrl: "mdc-card.scss",
  shadow: false
})
export class MdcCard implements ComponentInterface {
  @Prop() outlined: MdcCardProps["outlined"];
  @Prop() mdcClass: MdcCardProps["class"];

  render() {
    return (
      <Host {...mdcCard(this)}>
        <slot />
      </Host>
    );
  }
}
