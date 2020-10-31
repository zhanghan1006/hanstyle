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
import React, { createContext, useState, Children, cloneElement, } from "react";
import classNames from "classnames";
export var MenuContext = createContext({
    menuStyle: "plain",
    menuThemeColor: "orange",
    selectedIndex: [-1],
    changeSelectedIndex: function () { },
});
/**
 * A group of title that can be selected.
 * It will usually change the content of the page.
 *
 * ## How to Import
 * ~~~js
 * import { Menu } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export var Menu = function (props) {
    var _a;
    var className = props.className, children = props.children, menuInitIndex = props.menuInitIndex, menuStyle = props.menuStyle, menuThemeColor = props.menuThemeColor, restProps = __rest(props, ["className", "children", "menuInitIndex", "menuStyle", "menuThemeColor"]);
    var _b = useState(menuInitIndex), selectedIndex = _b[0], setSelectedIndex = _b[1];
    var classes = classNames(className, "menu", (_a = {},
        _a["menu-" + menuStyle] = menuStyle,
        _a["menu-" + menuThemeColor] = menuThemeColor,
        _a));
    var changeSelectedIndex = function (changeToIndex) {
        setSelectedIndex(changeToIndex);
    };
    var renderChildren = function () {
        return Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "MenuItem" || displayName === "Submenu") {
                return cloneElement(childElement, { menuItemIndex: [index] });
            }
            else {
                console.error("Warning: Menu has a child which is not a MenuItem or Submenu");
            }
        });
    };
    return (React.createElement("div", __assign({ className: classes }, restProps),
        React.createElement(MenuContext.Provider, { value: {
                menuStyle: menuStyle,
                menuThemeColor: menuThemeColor,
                selectedIndex: selectedIndex,
                changeSelectedIndex: changeSelectedIndex,
            } }, renderChildren())));
};
Menu.defaultProps = {
    menuInitIndex: [-1],
    menuStyle: "plain",
    menuThemeColor: "orange",
};
Menu.displayName = "Menu";
export default Menu;
// import React, { useState, createContext } from "react";
// import classNames from "classnames";
// import { MenuItemProps } from "./menuItem";
//
// type MenuMode = "horizontal" | "vertical";
// type selectCallback = (selectedIndex: string) => void;
//
// export interface MenuProps {
//   defaultIndex?: string;
//   className?: string;
//   mode?: MenuMode;
//   style?: React.CSSProperties;
//   onSelect?: selectCallback;
//   defaultOpenSubMenus?: string[];
// }
//
// interface IMenuContext {
//   index: string;
//   onSelect?: selectCallback;
//   mode?: MenuMode;
//   defaultOpenSubMenus?: string[];
// }
//
// export const MenuContext = createContext<IMenuContext>({ index: "0" });
// /**
//  * 这是我们的第一个 Menu 组件
//  * ## Menu header
//  * ~~~js
//  * import { Menu } from 'hanstyle'
//  * ~~~
//  * @param props
//  * @constructor
//  */
// export const Menu: React.FC<MenuProps> = (props) => {
//   const { className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus } = props;
//   const [currentActive, setActive] = useState(defaultIndex);
//   const classes = classNames("menu", className, {
//     "menu-vertical": mode === "vertical",
//     "menu-horizontal": mode !== "vertical",
//   });
//   const handleClick = (index: string) => {
//     setActive(index);
//     if (onSelect) {
//       onSelect(index);
//     }
//   };
//   const passedContext: IMenuContext = {
//     index: currentActive ? currentActive : "0",
//     onSelect: handleClick,
//     mode: mode,
//     defaultOpenSubMenus: defaultOpenSubMenus,
//   };
//   const renderChildren = () => {
//     return React.Children.map(children, (child, index) => {
//       const childElement = child as React.FunctionComponentElement<MenuItemProps>;
//       const { displayName } = childElement.type;
//       if (displayName === "MenuItem" || displayName === "SubMenu") {
//         return React.cloneElement(childElement, {
//           index: index.toString(),
//         });
//       } else {
//         console.error("Warning: Menu has a child which is not a MenuItem component");
//       }
//     });
//   };
//   return (
//     <ul className={classes} style={style} data-testid="test-menu">
//       <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
//     </ul>
//   );
// };
//
// Menu.defaultProps = {
//   defaultIndex: "0",
//   mode: "horizontal",
//   defaultOpenSubMenus: [],
// };
//
// export default Menu;
