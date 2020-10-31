import React, { FC, HTMLAttributes } from "react";
import { BaseColor, BaseSize, NeutralColor } from "../variables";
declare type InputStyle = "luminous";
export interface InputProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * How large is the Input component?
     */
    inputSize?: BaseSize;
    /**
     * What is the theme color of the Input component?
     */
    inputThemeColor?: BaseColor | NeutralColor;
    /**
     * What is the style of the Input component, especially when you interact with it?
     */
    inputStyle?: InputStyle;
}
interface IInputContext {
    inputSize: BaseSize;
    inputThemeColor: BaseColor | NeutralColor;
    inputStyle: InputStyle;
}
export declare const InputContext: React.Context<IInputContext>;
/**
 * It allows user to input some text to give information to the application.
 *
 * ## How to Import
 * ~~~js
 * import { Input } from "hanstyle";
 * ~~~
 * ## Props
 * ### Input
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 *
 * ### InputContent
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;input&gt; element, except 'size'.
 *
 * ### InputAffix
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export declare const Input: FC<InputProps>;
export default Input;
