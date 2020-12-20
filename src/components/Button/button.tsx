import React, { FC, ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import { BaseColor, BaseSize } from "../variables";

export type ButtonSize = BaseSize;
export type ButtonShape = "rectangular" | "rounded" | "elliptic" | "circle";
export type ButtonThemeColor = BaseColor;
export type ButtonType = "solid" | "hollow" | "inverse";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is the Button disabled?
   */
  buttonDisabled?: boolean;
  /**
   * How large is the Button?
   */
  buttonSize?: ButtonSize;
  /**
   * What is the shape of the Button?
   */
  buttonShape?: ButtonShape;
  /**
   * What is the theme color of the Button?
   */
  buttonThemeColor?: ButtonThemeColor;
  /**
   * What type of the Button to be used (including when interacting with the Button)?
   */
  buttonType?: ButtonType;
  // buttonZoom?: boolean; // (hover放大，active缩小)
}

/**
 * To perform an operation when clicked.
 *
 * ## How to Import
 * ~~~js
 * import { Button } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;button&gt; element.
 * @param props
 * @constructor
 */
export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    buttonDisabled,
    buttonSize,
    buttonShape,
    buttonThemeColor,
    buttonType,
    onClick,
    ...restProps
  } = props;
  const classes = classNames(className, "button", {
    disabled: buttonDisabled,
    [`button-${buttonSize}`]: buttonSize,
    [`button-${buttonShape}`]: buttonShape,
    [`button-${buttonThemeColor}`]: buttonThemeColor,
    [`button-${buttonType}`]: buttonType,
  });
  return (
    <button
      className={classes}
      onClick={buttonDisabled ? undefined : onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  buttonDisabled: false,
  buttonSize: "middle",
  buttonShape: "rounded",
  buttonThemeColor: "blue",
  buttonType: "solid",
};

Button.displayName = "Button";

export default Button;
