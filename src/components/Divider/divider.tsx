import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";

type DividerStyle = "empty" | "plain";
type DividerTextPosition = "left" | "center" | "right";

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  dividerStyle?: DividerStyle;
  dividerTextPosition?: DividerTextPosition;
}

export const Divider: FC<DividerProps> = (props) => {
  const {
    className,
    children,
    dividerStyle,
    dividerTextPosition,
    ...restProps
  } = props;
  const classes = classNames(className, "divider", {
    [`divider-${dividerStyle}`]: dividerStyle,
    [`divider-${dividerTextPosition}`]:
      dividerStyle === "plain" && dividerTextPosition,
  });
  if (dividerStyle === "empty") {
    return (
      <div className={classes} {...restProps}>
        <hr />
      </div>
    );
  } else {
    return (
      <div className={classes} {...restProps}>
        <hr />
        <p>{children}</p>
        <hr />
      </div>
    );
  }
};

Divider.defaultProps = {
  dividerStyle: "empty",
  dividerTextPosition: "left",
};

export default Divider;
