import React, { FC, ImgHTMLAttributes } from "react";
import classNames from "classnames";
import * as CSS from "csstype";

export interface ImageProps extends ImgHTMLAttributes<HTMLElement> {
  /**
   * The original image file.
   */
  src: string;
  /**
   * Stretch the original image to the size [width, height].
   * Note that stretch is applied before clip.
   */
  stretchSize?: [number, number]; // 宽高, (先拉伸)
  /**
   * Clip the stretched image (if stretched) to the size [top, right, bottom, left].
   * Note that clip is applied after stretch.
   */
  clipSize?: [number, number, number, number]; // 上右下左, (后裁切)
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
export const Image: FC<ImageProps> = (props) => {
  const {
    className,
    children,
    src,
    alt,
    stretchSize,
    clipSize,
    ...restProps
  } = props;
  const [stretchWidth, stretchHeight] = stretchSize ? stretchSize : [-1, -1];
  const [clipTop, clipRight, clipDown, clipLeft] = clipSize
    ? clipSize
    : [-1, -1, -1, -1];
  const classes = classNames(className, "image");
  const outerDivStyle: CSS.Properties =
    clipTop >= 0 && clipRight >= 0 && clipDown >= 0 && clipLeft >= 0
      ? {
          position: "relative",
        }
      : {};
  const innerDivStyle: CSS.Properties =
    clipTop >= 0 && clipRight >= 0 && clipDown >= 0 && clipLeft >= 0
      ? {
          position: "absolute",
          clip: `rect(${clipTop}px ${clipRight}px ${clipDown}px ${clipLeft}px)`,
          top: `${-clipTop}px`,
          left: `${-clipLeft}px`,
        }
      : {};
  const imgStyle: CSS.Properties =
    stretchWidth >= 0 && stretchHeight >= 0
      ? {
          position: "absolute",
          width: `${stretchWidth}px`,
          height: `${stretchHeight}px`,
        }
      : {};
  return (
    <div className={classes} style={outerDivStyle} {...restProps}>
      <div style={innerDivStyle}>
        <img src={src} alt={alt} style={imgStyle} />
      </div>
    </div>
  );
};

Image.defaultProps = {};

export default Image;
