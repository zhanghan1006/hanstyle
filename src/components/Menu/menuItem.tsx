import React, { FC, HTMLAttributes, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * This is auto-generated. You do not need to set it manually.
   */
  menuItemIndex?: number[];
  /**
   * Controls whether the menu item is disabled.
   */
  menuItemDisabled?: boolean;
  /**
   * This is auto-generated. You do not need to set it manually.
   */
  menuItemSelectable?: boolean;
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  const {
    className,
    children,
    menuItemIndex,
    menuItemDisabled,
    menuItemSelectable,
    ...restProps
  } = props;
  const { selectedIndex, changeSelectedIndex } = useContext(MenuContext);
  const isChildrenSelected = () => {
    if (selectedIndex.length > menuItemIndex!.length) {
      let result = true;
      menuItemIndex!.map((value, index) => {
        if (value !== selectedIndex[index]) {
          result = false;
        }
        return undefined;
      });
      return result;
    }
    return false;
  };
  const classes = classNames(className, "menu-item", {
    selected:
      selectedIndex.toString() === menuItemIndex!.toString() ||
      isChildrenSelected(),
    disabled: menuItemDisabled,
  });
  const handleClick = () => {
    if (menuItemSelectable && selectedIndex !== menuItemIndex) {
      changeSelectedIndex(menuItemIndex!);
    }
  };
  return (
    <div
      className={classes}
      onClick={menuItemDisabled ? undefined : handleClick}
      {...restProps}
    >
      {children}
    </div>
  );
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
