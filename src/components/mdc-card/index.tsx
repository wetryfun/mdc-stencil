import { FunctionalComponent, h } from "@stencil/core";
import { JSXBase } from "@stencil/core/internal";
import { classNames } from "../utils";

export const CSS_CLASSES = {
  ROOT: "mdc-card",
  OUTLINED: "mdc-card--outlined",
  PRIMARY_ACTION: "mdc-card__primary-action",
  MEDIA: "mdc-card__media",
  MEDIA_SQUARE: "mdc-card__media--square",
  MEDIA_16_9: "mdc-card__media--16-9",
  MEDIA_CONTENT: "mdc-card__media-content",
  ACTIONS: "mdc-card__actions",
  ACTIONS_FULL_BLEED: "mdc-card__actions--full-bleed",
  ACTION_BUTTONS: "mdc-card__action-buttons",
  ACTION_ICONS: "mdc-card__action-icons",
  ACTION: "mdc-card__action",
  ACTION_BUTTON: "mdc-card__action--button",
  ACTION_ICON: "mdc-card__action--icon"
};

export interface MdcCardProps extends JSXBase.HTMLAttributes<HTMLDivElement> {
  /**
   * Enables an outline on the card.
   */
  outlined?: boolean;
}

export interface MdcCardPrimaryContentProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

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

export interface MdcCardMediaContentProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export interface MdcCardActionsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {
  /**
   * 	Enables full bleed card actions row by removing all padding.
   */
  fullBleed?: boolean;
}

export interface MdcCardActionButtonsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export interface MdcCardActionIconsProps
  extends JSXBase.HTMLAttributes<HTMLDivElement> {}

export const mdcCard = ({
  class: className,
  outlined,
  ...rest
}: MdcCardProps) => ({
  class: {
    [CSS_CLASSES.ROOT]: true,
    [CSS_CLASSES.OUTLINED]: outlined,
    ...classNames(className)
  },
  ...rest
});

/**
 * This is the container component for the entire card.
 * All other components listed in this documentation should be a child to this component.
 */
export const MdcCard: FunctionalComponent<MdcCardProps> = (props, children) => {
  return <div {...mdcCard({ ...props })}>{children}</div>;
};

export const mdcCardPrimaryContent = ({
  class: className,
  ...rest
}: MdcCardPrimaryContentProps | any) => ({
  class: { [CSS_CLASSES.PRIMARY_ACTION]: true, ...classNames(className) },
  ...rest
});

/**
 * This component is used as the container for primary tappable content.
 */
export const MdcCardPrimaryContent: FunctionalComponent<MdcCardPrimaryContentProps> = (
  props,
  children
) => {
  return <div {...mdcCardPrimaryContent({ ...props })}>{children}</div>;
};

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

export const mdcCardMediaContent = ({
  class: className,
  ...rest
}: MdcCardMediaContentProps) => ({
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

export const mdcCardActions = ({
  class: className,
  fullBleed,
  ...rest
}: MdcCardActionsProps) => ({
  class: {
    [CSS_CLASSES.ACTIONS]: true,
    [CSS_CLASSES.ACTIONS_FULL_BLEED]: fullBleed,
    ...classNames(className)
  },
  ...rest
});

/**
 * Acts as a container for `<MdcCardActionButtons>` and/or `<MdcCardActionIcons>`.
 * It should be used as the last child of the `<MdcCard>` component.
 */
export const MdcCardActions: FunctionalComponent<MdcCardActionsProps> = (
  props,
  children
) => {
  return <div {...mdcCardActions({ ...props })}>{children}</div>;
};

export const mdcCardActionButtons = ({
  class: className,
  ...rest
}: MdcCardActionButtonsProps) => ({
  class: { [CSS_CLASSES.ACTION_BUTTONS]: true, ...classNames(className) },
  ...rest
});

/**
 * It acts as a container for buttons of the card.
 * This component is a child of a `<MdcCardActions>` component.
 */
export const MdcCardActionButtons: FunctionalComponent<MdcCardActionButtonsProps> = (
  props,
  children
) => {
  return <div {...mdcCardActionButtons({ ...props })}>{children}</div>;
};

export const mdcCardActionIcons = ({
  class: className,
  ...rest
}: MdcCardActionIconsProps) => ({
  class: { [CSS_CLASSES.ACTION_ICONS]: true, ...classNames(className) },
  ...rest
});

/**
 * It acts as a container for icons of the card.
 * This component is a child of a `<MdcCardActions>` component.
 * It can be used by itself or used as a sibling directly after the `<MdcCardActionButtons>` component.
 */
export const MdcCardActionIcons: FunctionalComponent<MdcCardActionIconsProps> = (
  props,
  children
) => {
  return <div {...mdcCardActionIcons({ ...props })}>{children}</div>;
};
