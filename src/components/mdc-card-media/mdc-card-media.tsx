import { Component, ComponentInterface, h, Host, Prop } from "@stencil/core";
import { mdcCardMedia, MdcCardMediaProps } from ".";

/**
 * @slot - Card media
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
        <slot />
      </Host>
    );
  }
}
