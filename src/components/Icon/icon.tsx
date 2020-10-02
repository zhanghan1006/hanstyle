import React, { FC } from "react";
import classNames from "classnames";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

type IconThemeColor = "black" | "white" | "orange" | "blue" | "red";

export interface IconProps extends FontAwesomeIconProps {
  iconThemeColor?: IconThemeColor;
}

export const Icon: FC<IconProps> = (props) => {
  const { className, iconThemeColor, ...restProps } = props;
  const classes = classNames(className, "icon", {
    [`icon-${iconThemeColor}`]: iconThemeColor,
  });
  return <FontAwesomeIcon className={classes} {...restProps} />;
};

Icon.defaultProps = {
  iconThemeColor: "black",
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
