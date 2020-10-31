import { FC, HTMLAttributes } from "react";
declare type CardShape = "rectangular" | "rounded";
export interface CardProps extends HTMLAttributes<HTMLElement> {
    /**
     * Shape of the card
     */
    cardShape?: CardShape;
    /**
     * Do you want to display a shadow when hover on the card?
     */
    cardHoverShadow?: boolean;
}
/**
 * A container that contains some other components. They usually have some relationships.
 *
 * ## How to Import
 * ~~~js
 * import { Card } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export declare const Card: FC<CardProps>;
export default Card;
