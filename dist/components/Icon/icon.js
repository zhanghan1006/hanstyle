var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas);
library.add(far);
library.add(fab);
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
export var Icon = function (props) {
    var _a;
    var className = props.className, iconThemeColor = props.iconThemeColor, restProps = __rest(props, ["className", "iconThemeColor"]);
    var classes = classNames(className, "icon", (_a = {},
        _a["icon-theme-color-" + iconThemeColor] = iconThemeColor,
        _a));
    return React.createElement(FontAwesomeIcon, __assign({ className: classes }, restProps));
};
Icon.defaultProps = {
    iconThemeColor: "gray-0",
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
