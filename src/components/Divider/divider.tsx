import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import { BaseColor, NeutralColor } from "../variables";

type DividerStyle = "empty" | "plain";
type DividerTextPosition = "left" | "center" | "right";
type DividerLineColor = BaseColor | NeutralColor;

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  dividerStyle?: DividerStyle;
  dividerTextPosition?: DividerTextPosition;
  dividerLineColor?: DividerLineColor;
}

/**
 * To divide the content and to make it easier to read.
 *
 * ## How to Import
 * ~~~js
 * import { Divider } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export const Divider: FC<DividerProps> = (props) => {
  const {
    className,
    children,
    dividerStyle,
    dividerTextPosition,
    dividerLineColor,
    ...restProps
  } = props;
  const classes = classNames(className, "divider", {
    [`divider-${dividerStyle}`]: dividerStyle,
    [`divider-${dividerTextPosition}`]:
      dividerStyle === "plain" && dividerTextPosition,
    [`divider-line-${dividerLineColor}`]: dividerLineColor,
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
  dividerLineColor: "gray-0",
};

export default Divider;
