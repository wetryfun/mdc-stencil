import { MDCRipple } from "@material/ripple";
import { Component, ComponentInterface, h, Method, Prop } from "@stencil/core";
import { MdcButton as Button, MdcButtonProps } from ".";

@Component({
  tag: "mdc-button",
  styleUrl: "mdc-button.scss",
  shadow: false
})
export class MdcButton implements ComponentInterface {
  /**
   * Enables raised variant.
   */
  @Prop() raised: MdcButtonProps["raised"] = false;
  /**
   * Enables unelevated variant.
   */
  @Prop() unelevated: MdcButtonProps["unelevated"] = false;
  /**
   * Enables outlined variant.
   */
  @Prop() outlined: MdcButtonProps["outlined"] = false;
  /**
   * Enables dense variant.
   */
  @Prop() dense: MdcButtonProps["dense"] = false;
  /**
   * Icon to render within root element.
   */
  @Prop() icon: MdcButtonProps["icon"];
  /**
   * Icon to render on the right side of the element
   */
  @Prop() trailingIcon: MdcButtonProps["trailingIcon"];
  /**
   * Disables button if true.
   */
  @Prop() disabled: MdcButtonProps["disabled"] = false;
  /**
   * Sets a hyperlink & uses anchor tag instead of a button.
   */
  @Prop() href: MdcButtonProps["href"];
  @Prop() name: MdcButtonProps["name"];
  @Prop() type: MdcButtonProps["type"];
  @Prop() value: MdcButtonProps["value"];
  @Prop() mdcClass: MdcButtonProps["class"];

  private button: HTMLButtonElement | HTMLAnchorElement;
  private mdcRipple: MDCRipple;

  @Method()
  async layout() {
    this.mdcRipple.layout();
  }

  componentDidLoad() {
    this.mdcRipple = new MDCRipple(this.button);
  }

  componentDidUnload() {
    this.mdcRipple.destroy();
  }

  componentDidRender() {
    const { mdcRipple } = this;
    if (mdcRipple) {
      mdcRipple.layout();
    }
  }

  render() {
    const {
      raised,
      unelevated,
      outlined,
      dense,
      icon,
      trailingIcon,
      href,
      disabled,
      mdcClass,
      name,
      type,
      value
    } = this;
    return (
      <Button
        ref={el => (this.button = el)}
        {...{
          raised,
          unelevated,
          outlined,
          dense,
          icon,
          trailingIcon,
          href,
          disabled,
          class: mdcClass,
          name,
          type,
          value
        }}
      >
        <slot />
      </Button>
    );
  }
}
