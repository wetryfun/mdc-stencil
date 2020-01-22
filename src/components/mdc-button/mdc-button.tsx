import { MDCRipple } from "@material/ripple";
import {
  Component,
  ComponentInterface,
  getElement,
  h,
  Host,
  Prop
} from "@stencil/core";
import { mdcButton, MdcButtonIcon, MdcButtonProps } from ".";
import { CSS_CLASSES } from "./constant";

/**
 * @slot - Button contents
 */
@Component({
  tag: "mdc-button",
  styleUrl: "mdc-button.scss",
  shadow: false
})
export class MdcButton implements ComponentInterface {
  /**
   * Icon to display, and aria-label value when label is not defined.
   */
  @Prop() icon: MdcButtonProps["icon"] = "";
  /**
   * Label to display for the button, and aria-label.
   */
  @Prop() label: MdcButtonProps["label"] = "";
  /**
   * Creates a contained button that is elevated above the surface.
   */
  @Prop() raised: MdcButtonProps["raised"] = false;
  /**
   * Creates a contained button that is flush with the surface.
   */
  @Prop() unelevated: MdcButtonProps["unelevated"] = false;
  /**
   * Creates an outlined button that is flush with the surface.
   */
  @Prop() outlined: MdcButtonProps["outlined"] = false;
  /**
   * Makes the button text and container slightly smaller.
   */
  @Prop() dense: MdcButtonProps["dense"] = false;
  /**
   * Disabled buttons cannot be interacted with and have no visual interaction effect.
   */
  @Prop({ reflectToAttr: true }) disabled: MdcButtonProps["disabled"] = false;
  /**
   * When true, icon will be displayed after label.
   */
  @Prop() trailingIcon: MdcButtonProps["trailingIcon"] = false;

  private mdcRipple: MDCRipple;

  connectedCallback() {
    const { disabled } = this;
    const mdcRipple = new MDCRipple(getElement(this));
    mdcRipple.unbounded = true;
    mdcRipple.disabled = disabled;
    this.mdcRipple = mdcRipple;
  }

  disconnectedCallback() {
    this.mdcRipple.destroy();
  }

  render() {
    const { label, icon, trailingIcon } = this;
    return (
      <Host {...mdcButton(this)}>
        <div class="mdc-button__ripple"></div>
        {icon && !trailingIcon && <MdcButtonIcon icon={icon} />}
        {label && <span class={`${CSS_CLASSES.LABEL}`}>{label}</span>}
        {icon && trailingIcon && <MdcButtonIcon icon={icon} />}
        <slot />
      </Host>
    );
  }
}
