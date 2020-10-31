import { FC, ButtonHTMLAttributes } from "react";
import { BaseColor, BaseSize, NeutralColor } from "../variables";
export declare type ButtonSize = BaseSize;
export declare type ButtonShape = "rectangular" | "rounded" | "elliptic" | "circle";
export declare type ButtonThemeColor = BaseColor | NeutralColor;
export declare type ButtonType = "solid" | "hollow" | "inverse";
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
export declare const Button: FC<ButtonProps>;
export default Button;
