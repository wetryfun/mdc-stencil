import { FunctionalComponent, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import { classNames } from '../utils';

export interface MdcLinearProgressProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  indeterminate?: boolean;
  reversed?: boolean;
  closed?: boolean;
}

export const MdcLinearProgress: FunctionalComponent<
  MdcLinearProgressProps
> = props => {
  const { class: className, indeterminate, reversed, closed, ...rest } = {
    ...props
  };
  return (
    <div
      role='progressbar'
      class={{
        'mdc-linear-progress': true,
        'mdc-linear-progress--indeterminate': indeterminate,
        'mdc-linear-progress--reversed': reversed,
        'mdc-linear-progress--closed': closed,
        ...classNames(className)
      }}
      {...rest}
    >
      <div class='mdc-linear-progress__buffering-dots' />
      <div class='mdc-linear-progress__buffer' />
      <div class='mdc-linear-progress__bar mdc-linear-progress__primary-bar'>
        <span class='mdc-linear-progress__bar-inner' />
      </div>
      <div class='mdc-linear-progress__bar mdc-linear-progress__secondary-bar'>
        <span class='mdc-linear-progress__bar-inner' />
      </div>
    </div>
  );
};
