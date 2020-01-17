import { Component, ComponentInterface, h, Host, Prop } from "@stencil/core";
import { mdcCardMedia, MdcCardMediaContent, MdcCardMediaProps } from ".";

@Component({
  tag: "mdc-card-media",
  styleUrl: "mdc-card.scss",
  shadow: false
})
export class MdcCardMedia implements ComponentInterface {
  @Prop() size: MdcCardMediaProps["size"];
  @Prop() imageUrl: MdcCardMediaProps["imageUrl"];
  @Prop() mdcClass: MdcCardMediaProps["class"];

  render() {
    return (
      <Host {...mdcCardMedia(this)}>
        <MdcCardMediaContent>
          <slot />
        </MdcCardMediaContent>
      </Host>
    );
  }
}
