import React, { FC } from "react";
import classNames from "classnames";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { BaseColor } from "../variables";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(far);
library.add(fab);

export type IconThemeColor = BaseColor;

export interface IconProps extends FontAwesomeIconProps {
  /**
   * The icon you want to use.
   */
  icon: IconProp;
  /**
   * The theme color of the icon.
   */
  iconThemeColor?: IconThemeColor;
}

/**
 * To show an icon provided in Font Awesome.
 *
 * ## How to Import
 * ~~~js
 * import { Icon } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All the props in the FontAwesomeIconProps.
 * @param props
 * @constructor
 */
export const Icon: FC<IconProps> = (props) => {
  const { className, iconThemeColor, ...restProps } = props;
  const classes = classNames(className, "icon", {
    [`icon-theme-color-${iconThemeColor}`]: iconThemeColor,
  });
  return <FontAwesomeIcon className={classes} {...restProps} />;
};

Icon.defaultProps = {
  iconThemeColor: "gray",
};

export default Icon;

// import React from "react";
// import classNames from "classnames";
// import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
//
// export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
//
// export interface IconProps extends FontAwesomeIconProps {
//     theme?: ThemeProps;
// }
//
// const Icon: React.FC<IconProps> = (props) => {
//     const {className, theme, ...restProps} = props;
//     const classes = classNames('hanstyle-icon', className, {
//         [`icon-${theme}`]: theme
//     });
//     return (
//         <FontAwesomeIcon className={classes} {...restProps} />
//     );
// };
//
// export default Icon;
