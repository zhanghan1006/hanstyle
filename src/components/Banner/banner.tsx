import React, {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  ReactElement,
  useEffect,
  useState,
} from "react";
import classNames from "classnames";
import * as CSS from "csstype";
import Icon from "../Icon/icon";
import Button from "../Button/button";
import Pagination from "../Pagination/pagination";
import { BaseColor } from "../variables";

type BannerThemeColor = BaseColor;

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
export const Banner: FC<BannerProps> = (props) => {
  const {
    className,
    children,
    initIndex,
    autoPlayInterval,
    pauseOnHover,
    hideButton,
    bannerThemeColor,
    ...restProps
  } = props;
  const [curIndex, setCurIndex] = useState(initIndex as number);
  const [isHoverOnBanner, setIsHoverOnBanner] = useState(false);
  const [isHoverOnLeftButton, setIsHoverOnLeftButton] = useState(false);
  const [isHoverOnRightButton, setIsHoverOnRightButton] = useState(false);
  const [isActiveLeftButton, setIsActiveLeftButton] = useState(false);
  const [isActiveRightButton, setIsActiveRightButton] = useState(false);
  const numImage = Children.count(children);
  const classes = classNames(className, "banner", {});
  const handleClickLeftButton = () => {
    setCurIndex(((curIndex + numImage - 2) % numImage) + 1);
  };
  const handleClickRightButton = () => {
    setCurIndex((curIndex % numImage) + 1);
  };
  const handleClickPagination = (clickedIndex: number) => {
    setCurIndex(clickedIndex);
  };
  const handleMouseEnterBanner = () => {
    setIsHoverOnBanner(true);
  };
  const handleMouseLeaveBanner = () => {
    setIsHoverOnBanner(false);
  };
  const handleMouseEnterLeftButton = () => {
    setIsHoverOnLeftButton(true);
  };
  const handleMouseLeaveLeftButton = () => {
    setIsHoverOnLeftButton(false);
    setIsActiveLeftButton(false);
  };
  const handleMouseEnterRightButton = () => {
    setIsHoverOnRightButton(true);
  };
  const handleMouseLeaveRightButton = () => {
    setIsHoverOnRightButton(false);
    setIsActiveRightButton(false);
  };
  const handleMouseDownLeftButton = () => {
    setIsActiveLeftButton(true);
  };
  const handleMouseUpLeftButton = () => {
    setIsActiveLeftButton(false);
  };
  const handleMouseDownRightButton = () => {
    setIsActiveRightButton(true);
  };
  const handleMouseUpRightButton = () => {
    setIsActiveRightButton(false);
  };
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoPlayInterval) {
      if (pauseOnHover) {
        if (!isHoverOnBanner) {
          timer = setInterval(() => {
            setCurIndex((curIndex % numImage) + 1);
          }, autoPlayInterval);
        }
      } else {
        timer = setInterval(() => {
          setCurIndex((curIndex % numImage) + 1);
        }, autoPlayInterval);
      }
    }
    return () => {
      if (autoPlayInterval) {
        clearInterval(timer);
      }
    };
  });
  const imageSizes = Children.map(children, (child) => {
    const curChild = child as ReactElement;
    const width = curChild.props.clipSize[1] - curChild.props.clipSize[3];
    const height = curChild.props.clipSize[2] - curChild.props.clipSize[0];
    return { imageWidth: width, imageHeight: height };
  });
  const { imageWidth, imageHeight } = (imageSizes as {
    imageWidth: number;
    imageHeight: number;
  }[])[0];
  const images = Children.map(children, (child, index) => {
    const styles: CSS.Properties = {
      position: "absolute",
      left: `${(index - curIndex + 1) * imageWidth}px`,
    };
    return cloneElement(child as ReactElement, { style: styles });
  });
  const divStyle: CSS.Properties = {
    width: `${imageWidth}px`,
    height: `${imageHeight}px`,
  };
  const btnLeftStyle: CSS.Properties = {
    position: "absolute",
    top: `${0.5 * imageHeight - 24}px`,
    left: `${
      hideButton
        ? isHoverOnBanner
          ? 0.02 * imageWidth
          : -0.02 * imageWidth - 48
        : 0.02 * imageWidth
    }px`,
  };
  const btnRightStyle: CSS.Properties = {
    position: "absolute",
    top: `${0.5 * imageHeight - 24}px`,
    right: `${
      hideButton
        ? isHoverOnBanner
          ? 0.02 * imageWidth
          : -0.02 * imageWidth - 48
        : 0.02 * imageWidth
    }px`,
  };
  const paginationStyle: CSS.Properties = {
    position: "absolute",
    bottom: `${0.02 * imageHeight}px`,
    left: `${0.5 * imageWidth - 7.986 * numImage}px`,
  };
  return (
    <div
      style={divStyle}
      className={classes}
      onMouseEnter={handleMouseEnterBanner}
      onMouseLeave={handleMouseLeaveBanner}
      {...restProps}
    >
      {images}
      <Button
        style={btnLeftStyle}
        buttonShape="circle"
        buttonSize="large"
        buttonType="hollow"
        buttonThemeColor={bannerThemeColor}
        onClick={handleClickLeftButton}
        onMouseEnter={handleMouseEnterLeftButton}
        onMouseLeave={handleMouseLeaveLeftButton}
        onMouseDown={handleMouseDownLeftButton}
        onMouseUp={handleMouseUpLeftButton}
      >
        <Icon
          icon="angle-left"
          iconThemeColor={
            isActiveLeftButton
              ? bannerThemeColor
              : isHoverOnLeftButton
              ? bannerThemeColor
              : "gray"
          }
        />
      </Button>
      <Button
        style={btnRightStyle}
        buttonShape="circle"
        buttonSize="large"
        buttonType="hollow"
        buttonThemeColor={bannerThemeColor}
        onClick={handleClickRightButton}
        onMouseEnter={handleMouseEnterRightButton}
        onMouseLeave={handleMouseLeaveRightButton}
        onMouseDown={handleMouseDownRightButton}
        onMouseUp={handleMouseUpRightButton}
      >
        <Icon
          icon="angle-right"
          iconThemeColor={
            isActiveRightButton
              ? bannerThemeColor
              : isHoverOnRightButton
              ? bannerThemeColor
              : "gray"
          }
        />
      </Button>
      <Pagination
        style={paginationStyle}
        maxIndex={numImage}
        initIndex={initIndex}
        inputIndex={curIndex}
        paginationStyle="dot"
        onClickAfterChangeIndex={handleClickPagination}
      />
    </div>
  );
};

Banner.defaultProps = {
  initIndex: 1,
  autoPlayInterval: 3000,
  pauseOnHover: true,
  hideButton: true,
  bannerThemeColor: "blue",
};

export default Banner;
