import { Component, ComponentInterface, h, Host, Prop } from "@stencil/core";
import { mdcCardMedia, MdcCardMediaContent, MdcCardMediaProps } from ".";

/**
 * @slot - Card media contents
 */
@Component({
  tag: "mdc-card-media",
  shadow: false
})
export class MdcCardMedia implements ComponentInterface {
  @Prop() size: MdcCardMediaProps["size"];
  @Prop() imageUrl: MdcCardMediaProps["imageUrl"];

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
