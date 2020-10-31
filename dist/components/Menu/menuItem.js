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
import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
export var MenuItem = function (props) {
    var _a;
    var className = props.className, children = props.children, menuItemIndex = props.menuItemIndex, menuItemDisabled = props.menuItemDisabled, menuItemSelectable = props.menuItemSelectable, restProps = __rest(props, ["className", "children", "menuItemIndex", "menuItemDisabled", "menuItemSelectable"]);
    var _b = useContext(MenuContext), menuStyle = _b.menuStyle, menuThemeColor = _b.menuThemeColor, selectedIndex = _b.selectedIndex, changeSelectedIndex = _b.changeSelectedIndex;
    var isChildrenSelected = function () {
        if (selectedIndex.length > menuItemIndex.length) {
            var result_1 = true;
            menuItemIndex.map(function (value, index) {
                if (value !== selectedIndex[index]) {
                    result_1 = false;
                }
                return undefined;
            });
            return result_1;
        }
        return false;
    };
    var classes = classNames(className, "menu-item", (_a = {},
        _a["menu-item-" + menuStyle] = menuStyle,
        _a["menu-item-" + menuThemeColor] = menuThemeColor,
        _a["menu-item-selected"] = selectedIndex.toString() === menuItemIndex.toString() ||
            isChildrenSelected(),
        _a["menu-item-disabled"] = menuItemDisabled,
        _a));
    var handleClick = function () {
        if (menuItemSelectable && selectedIndex !== menuItemIndex) {
            changeSelectedIndex(menuItemIndex);
        }
    };
    return (React.createElement("div", __assign({ className: classes, onClick: menuItemDisabled ? undefined : handleClick }, restProps), children));
};
MenuItem.defaultProps = {
    menuItemDisabled: false,
    menuItemSelectable: true,
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
// import React, {useContext} from "react";
// import classNames from "classnames";
// import {MenuContext} from "./menu";
//
// export interface MenuItemProps {
//     index?: string;
//     disabled?: boolean;
//     className?: string;
//     style?: React.CSSProperties;
// }
//
// const MenuItem: React.FC<MenuItemProps> = (props) => {
//     const {index, disabled, className, style, children} = props;
//     const context = useContext(MenuContext);
//     const classes = classNames('menu-item', className, {
//         'is-disabled': disabled,
//         'is-active': context.index === index
//     });
//     const handleClick = () => {
//         if (context.onSelect && !disabled && (typeof index === 'string')) {
//             context.onSelect(index);
//         }
//     };
//     return (
//         <li className={classes} style={style} onClick={handleClick}>
//             {children}
//         </li>
//     );
// };
//
// MenuItem.displayName = 'MenuItem';
// export default MenuItem;
