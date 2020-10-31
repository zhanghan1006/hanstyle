import { FC, HTMLAttributes } from "react";
export interface ExpanderProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Height of the expander.
     */
    expanderHeight?: number;
}
/**
 * A container that can expand to the original space of its children.
 *
 * Usually used when its children is using absolute position, which may cause layout issues.
 *
 * ## How to Import
 * ~~~js
 * import { Expander } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export declare const Expander: FC<ExpanderProps>;
export default Expander;
