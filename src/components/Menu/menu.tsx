import React, { FC, HTMLAttributes, createContext, useState } from "react";
import classNames from "classnames";
import { MenuItemIndex } from "./menuItem";

type MenuStyle = "plain" | "border-top" | "border-bottom"; // "sliding"
type MenuThemeColor = "orange" | "blue" | "red";
type HandleMenuItemClick = (clickedIndex: MenuItemIndex) => void;

export interface MenuProps extends HTMLAttributes<HTMLElement> {
  menuStyle?: MenuStyle;
  menuThemeColor?: MenuThemeColor;
}

interface IMenuContext {
  menuStyle: MenuStyle;
  menuThemeColor: MenuThemeColor;
  curIndex: number;
  handleMenuItemClick: HandleMenuItemClick;
}

export const MenuContext = createContext<IMenuContext>({
  menuStyle: "plain",
  menuThemeColor: "orange",
  curIndex: 0,
  handleMenuItemClick: () => {},
});

export const Menu: FC<MenuProps> = (props) => {
  const {
    className,
    children,
    menuStyle,
    menuThemeColor,
    ...restProps
  } = props;
  const [curIndex, setCurIndex] = useState(0);
  const classes = classNames(className, "menu", {
    [`menu-${menuStyle}`]: menuStyle,
    [`menu-${menuThemeColor}`]: menuThemeColor,
  });
  const handleMenuItemClick = (clickedIndex: number) => {
    setCurIndex(clickedIndex);
  };
  return (
    <ul className={classes} {...restProps}>
      <MenuContext.Provider
        value={
          {
            menuStyle: menuStyle,
            menuThemeColor: menuThemeColor,
            curIndex: curIndex,
            handleMenuItemClick: handleMenuItemClick,
          } as IMenuContext
        }
      >
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  menuStyle: "plain",
  menuThemeColor: "orange",
};

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
