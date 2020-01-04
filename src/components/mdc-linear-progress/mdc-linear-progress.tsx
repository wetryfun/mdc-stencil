import { MDCLinearProgress } from '@material/linear-progress';
import { Component, ComponentInterface, h, Method } from '@stencil/core';
import { MdcLinearProgress as LinearProgress } from './index';

@Component({
  tag: 'mdc-linear-progress',
  styleUrl: 'mdc-linear-progress.scss',
  shadow: false
})
export class MdcLinearProgress implements ComponentInterface {
  private progress: HTMLDivElement;
  private mdcProgress: MDCLinearProgress;

  @Method()
  async getDeterminate() {
    return this.mdcProgress.determinate;
  }

  @Method()
  async setDeterminate(value: boolean) {
    this.mdcProgress.determinate = value;
  }

  @Method()
  async getProgress() {
    return this.mdcProgress.progress;
  }

  @Method()
  async setProgress(value: number) {
    this.mdcProgress.progress = value;
  }

  @Method()
  async getBuffer() {
    return this.mdcProgress.buffer;
  }

  @Method()
  async setBuffer(value: number) {
    this.mdcProgress.buffer = value;
  }

  @Method()
  async getReverse() {
    return this.mdcProgress.reverse;
  }

  @Method()
  async setReverse(value: boolean) {
    this.mdcProgress.reverse = value;
  }

  @Method()
  async open() {
    this.mdcProgress.open();
  }

  @Method()
  async close() {
    this.mdcProgress.close();
  }

  componentDidLoad() {
    this.mdcProgress = new MDCLinearProgress(this.progress);
  }

  componentDidUnload() {
    this.mdcProgress.destroy();
  }

  render() {
    return <LinearProgress ref={el => (this.progress = el)} />;
  }
}
