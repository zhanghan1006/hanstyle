import { FC, ImgHTMLAttributes } from "react";
export interface ImageProps extends ImgHTMLAttributes<HTMLElement> {
    /**
     * The original image file.
     */
    src: string;
    /**
     * Stretch the original image to the size [width, height].
     * Note that stretch is applied before clip.
     */
    stretchSize?: [number, number];
    /**
     * Clip the stretched image (if stretched) to the size [top, right, bottom, left].
     * Note that clip is applied after stretch.
     */
    clipSize?: [number, number, number, number];
}
/**
 * To process and show an image.
 *
 * ## How to Import
 * ~~~js
 * import { Image } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;img&gt; element.
 * @param props
 * @constructor
 */
export declare const Image: FC<ImageProps>;
export default Image;
