import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";

type CardShape = "rectangular" | "rounded";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /**
   * Shape of the card
   */
  cardShape?: CardShape;
  /**
   * Do you want to display a shadow when hover on the card?
   */
  cardHoverShadow?: boolean;
}

/**
 * A container that contains some other components. They usually have some relationships.
 *
 * ## How to Import
 * ~~~js
 * import { Card } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    cardShape,
    cardHoverShadow,
    ...restProps
  } = props;
  const classes = classNames(className, "card", {
    [`card-${cardShape}`]: cardShape,
    [`card-hover-shadow`]: cardHoverShadow,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  cardShape: "rounded",
  cardHoverShadow: true,
};

export default Card;
