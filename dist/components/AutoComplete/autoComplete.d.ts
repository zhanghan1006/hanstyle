import { FC, HTMLAttributes } from "react";
export interface AutoCompleteProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The initial value of the AutoComplete component when it is mounted.
     */
    autoCompleteInitValue?: string;
    /**
     * Width of the dropdown list in px.
     */
    autoCompleteListWidth?: number;
    /**
     * Height of the dropdown list in px.
     */
    autoCompleteListHeight?: number;
}
/**
 * Show relative information based on the current input value.
 *
 * Usually used for search box.
 *
 * ## How to Import
 * ~~~js
 * import { AutoComplete } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
