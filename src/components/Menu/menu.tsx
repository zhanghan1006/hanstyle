import React, {
  FC,
  HTMLAttributes,
  createContext,
  useState,
  Children,
  FunctionComponentElement,
  cloneElement,
} from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";
import { SubmenuProps } from "./submenu";
import { BaseColor } from "../variables";

type MenuStyle = "plain" | "border-top" | "border-bottom"; // "sliding"
type MenuThemeColor = BaseColor;
type ChangeSelectedIndex = (clickedIndex: number[]) => void;

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The initial selected index of the menu when it is mounted.
   */
  menuInitIndex?: number[];
  /**
   * The style of the menu, its menu item and its submenu.
   */
  menuStyle?: MenuStyle;
  /**
   * The theme color of the menu, its menu item and its submenu.
   */
  menuThemeColor?: MenuThemeColor;
}

interface IMenuContext {
  selectedIndex: number[];
  changeSelectedIndex: ChangeSelectedIndex;
}

export const MenuContext = createContext<IMenuContext>({
  selectedIndex: [-1],
  changeSelectedIndex: () => {},
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
export const Menu: FC<MenuProps> = (props) => {
  const {
    className,
    children,
    menuInitIndex,
    menuStyle,
    menuThemeColor,
    ...restProps
  } = props;
  const [selectedIndex, setSelectedIndex] = useState(menuInitIndex);
  const classes = classNames(className, "menu", {
    [`menu-${menuStyle}`]: menuStyle,
    [`menu-${menuThemeColor}`]: menuThemeColor,
  });
  const changeSelectedIndex = (changeToIndex: number[]) => {
    setSelectedIndex(changeToIndex);
  };
  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<
        MenuItemProps | SubmenuProps
      >;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "Submenu") {
        return cloneElement(childElement, { menuItemIndex: [index] });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem or Submenu"
        );
      }
    });
  };
  return (
    <div className={classes} {...restProps}>
      <MenuContext.Provider
        value={
          {
            selectedIndex: selectedIndex,
            changeSelectedIndex: changeSelectedIndex,
          } as IMenuContext
        }
      >
        {renderChildren()}
      </MenuContext.Provider>
    </div>
  );
};

Menu.defaultProps = {
  menuInitIndex: [-1],
  menuStyle: "plain",
  menuThemeColor: "blue",
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
