import { FC, HTMLAttributes } from "react";
import { BaseColor, NeutralColor } from "../variables";
declare type DividerStyle = "empty" | "plain";
declare type DividerTextPosition = "left" | "center" | "right";
declare type DividerLineColor = BaseColor | NeutralColor;
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
export declare const Divider: FC<DividerProps>;
export default Divider;
