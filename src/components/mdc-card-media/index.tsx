import { JSXBase } from '@stencil/core/internal';
import { FunctionalComponent, h } from '@stencil/core';
import { CSS_CLASSES } from '../mdc-card/constant';
import { classNames } from '../utils';

export interface MdcCardMediaProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  /**
   * Scales the height of the image.
   */
  size?: "square" | "wide";
  /**
   * Path to the image of the <CardMedia> component.
   */
  imageUrl?: string;
}

export const mdcCardMedia = ({
  class: className,
  size,
  imageUrl,
  style,
  ...rest
}: MdcCardMediaProps) => ({
  class: {
    [CSS_CLASSES.MEDIA]: true,
    [CSS_CLASSES.MEDIA_SQUARE]: size === "square",
    [CSS_CLASSES.MEDIA_16_9]: size === "wide",
    ...classNames(className)
  },
  style: { backgroundImage: imageUrl && `url(${imageUrl})`, ...style },
  ...rest
});

/**
 * This component is a container for an image on the card.
 * Optionally, any children of the `<MdcCardMedia>` component is wrapped with an element with the className .mdc-card__media-content.
 * In order for your image to display, `MdcCardMedia` requires that you have an aspect ratio of either `square` or `wide`.
 */
export const MdcCardMedia: FunctionalComponent<MdcCardMediaProps> = (
  props,
  children
) => {
  return (
    <div {...mdcCardMedia({ ...props })}>
      <MdcCardMediaContent>{children}</MdcCardMediaContent>}
    </div>
  );
};

export interface MdcCardMediaContentProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const mdcCardMediaContent = ({
  class: className,
  ...rest
}: MdcCardMediaContentProps | any) => ({
  class: { [CSS_CLASSES.MEDIA_CONTENT]: true, ...classNames(className) },
  ...rest
});

/**
 * Wrapper element for card media content
 */
export const MdcCardMediaContent: FunctionalComponent<MdcCardMediaContentProps> = (
  props,
  children
) => {
  return <div {...mdcCardMediaContent({ ...props })}>{children}</div>;
};
