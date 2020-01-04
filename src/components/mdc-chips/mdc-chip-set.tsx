import { MDCChipSet } from '@material/chips';
import { Component, ComponentInterface, h, Method } from '@stencil/core';
import { MdcChipSet as ChipSet } from './index';

@Component({
  tag: 'mdc-chip-set',
  styleUrl: 'mdc-chips.scss',
  shadow: false
})
export class MdcChipSet implements ComponentInterface {
  private chipSet: HTMLDivElement;
  private mdcChipSet: MDCChipSet;

  @Method()
  async addChip(chipEl: HTMLElement) {
    this.mdcChipSet.addChip(chipEl);
  }

  componentDidLoad() {
    this.mdcChipSet = new MDCChipSet(this.chipSet);
  }

  componentDidUnload() {
    this.mdcChipSet.destroy();
  }

  render() {
    return (
      <ChipSet ref={el => (this.chipSet = el)}>
        <slot />
      </ChipSet>
    );
  }
}
