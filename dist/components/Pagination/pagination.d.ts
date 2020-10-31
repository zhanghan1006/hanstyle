import { FC, OlHTMLAttributes } from "react";
import { BaseColor, NeutralColor } from "../variables";
declare type PaginationStyle = "dot";
declare type PaginationThemeColor = BaseColor | NeutralColor;
export interface PaginationProps extends OlHTMLAttributes<HTMLOListElement> {
    /**
     * How many page do you have?
     */
    maxIndex: number;
    /**
     * Which index (start from 1) you want to show when Pagination component is mounted?
     */
    initIndex?: number;
    /**
     * This can be useful when you want to dynamically control the index of Pagination component
     * in another component. You can pass the target index to this prop.
     */
    inputIndex?: number;
    /**
     * What is the style of the Pagination?
     */
    paginationStyle?: PaginationStyle;
    /**
     * What is the theme color of the Pagination?
     */
    paginationThemeColor?: PaginationThemeColor;
    /**
     * The callback function when you click to change the index.
     * It runs before the changing of the index.
     * @param clickedIndex
     * @param indexBeforeChanged
     */
    onClickBeforeChangeIndex?: (clickedIndex: number, indexBeforeChanged: number) => void;
    /**
     * The callback function when you click to change the index.
     * It runs after the changing of the index.
     * @param clickedIndex
     */
    onClickAfterChangeIndex?: (clickedIndex: number) => void;
}
/**
 * To display and control which page you are currently in.
 *
 * ## How to Import
 * ~~~js
 * import { Pagination } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;ol&gt; element.
 * @param props
 * @constructor
 */
export declare const Pagination: FC<PaginationProps>;
export default Pagination;
