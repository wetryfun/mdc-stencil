import { JSXBase } from '@stencil/core/internal';

export type InputEvent<T extends EventTarget, E extends UIEvent = UIEvent> = {
  target: T;
} & E;

export interface MdcComponentProps {
  /**
   * The tag type to render (default 'div')
   */
  tag?: string;
}

export const classNames = (
  className: JSXBase.HTMLAttributes<HTMLElement>['class']
) => {
  return typeof className === 'string'
    ? {
        [className as string]: true
      }
    : (className as object);
};

export const unique = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);
