import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";

type CardShape = "rectangular" | "rounded";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  cardShape?: CardShape;
}

export const Card: FC<CardProps> = (props) => {
  const { className, children, cardShape, ...restProps } = props;
  const classes = classNames(className, "card", {
    [`card-${cardShape}`]: cardShape,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  cardShape: "rounded",
};

export default Card;
