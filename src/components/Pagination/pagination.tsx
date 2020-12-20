import React, { FC, OlHTMLAttributes, useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import { BaseColor } from "../variables";

type PaginationStyle = "dot"; // "line"
type PaginationThemeColor = BaseColor;

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
  onClickBeforeChangeIndex?: (
    clickedIndex: number,
    indexBeforeChanged: number
  ) => void;
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
export const Pagination: FC<PaginationProps> = (props) => {
  const {
    className,
    maxIndex,
    initIndex,
    inputIndex,
    paginationStyle,
    paginationThemeColor,
    onClickBeforeChangeIndex,
    onClickAfterChangeIndex,
    ...restProps
  } = props;
  const [curIndex, setCurIndex] = useState(initIndex);
  const [prevInputIndex, setPrevInputIndex] = useState(initIndex);
  const handlePropsChange = () => {
    if (inputIndex && inputIndex !== prevInputIndex) {
      setCurIndex(inputIndex);
      setPrevInputIndex(inputIndex);
    }
  };
  const handleClick = (i: number) => {
    if (i !== curIndex) {
      if (onClickBeforeChangeIndex) {
        onClickBeforeChangeIndex(i, curIndex as number);
      }
      setCurIndex(i);
      if (onClickAfterChangeIndex) {
        onClickAfterChangeIndex(i);
      }
    }
  };
  const classes = classNames(className, "pagination", {
    [`pagination-${paginationStyle}`]: paginationStyle,
  });
  handlePropsChange();
  let indicators = [];
  for (let i = 1; i <= maxIndex; i++) {
    indicators.push(
      <li
        key={i}
        onClick={() => {
          handleClick(i);
        }}
      >
        <Icon
          icon={i === curIndex ? "circle" : ["far", "circle"]}
          iconThemeColor={paginationThemeColor}
        />
      </li>
    );
  }
  return (
    <ol className={classes} {...restProps}>
      {indicators}
    </ol>
  );
};

Pagination.defaultProps = {
  initIndex: 1,
  paginationStyle: "dot",
  paginationThemeColor: "gray",
};

export default Pagination;
