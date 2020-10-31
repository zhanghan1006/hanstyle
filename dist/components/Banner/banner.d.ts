import { FC, HTMLAttributes } from "react";
import { BaseColor, NeutralColor } from "../variables";
declare type BannerThemeColor = BaseColor | NeutralColor;
export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Which image (start from 1) you want to display when the Banner is mounted?
     */
    initIndex?: number;
    /**
     * Do you want to autoplay the images in turn?
     */
    autoPlayInterval?: number;
    /**
     * Do you want to pause the autoplay, if enabled, when hover on the Banner?
     */
    pauseOnHover?: boolean;
    /**
     * Do you want to hide the flip buttons when your mouse is outside the Banner?
     */
    hideButton?: boolean;
    /**
     * What is the theme color of the Banner?
     */
    bannerThemeColor?: BannerThemeColor;
}
/**
 * To show a group of image in turn.
 *
 * ## How to Import
 * ~~~js
 * import { Banner } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export declare const Banner: FC<BannerProps>;
export default Banner;
