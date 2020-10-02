import React, { FC, LiHTMLAttributes, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export type MenuItemIndex = Exclude<number, 0>;

export interface MenuItemProps extends LiHTMLAttributes<HTMLElement> {
  menuItemIndex: MenuItemIndex;
  menuItemDisabled?: boolean;
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  const {
    className,
    children,
    menuItemIndex,
    menuItemDisabled,
    ...restProps
  } = props;
  const menuContext = useContext(MenuContext);
  const {
    menuStyle,
    menuThemeColor,
    curIndex,
    handleMenuItemClick,
  } = menuContext;
  const classes = classNames(className, "menu-item", {
    [`menu-item-${menuStyle}`]: menuStyle,
    [`menu-item-${menuThemeColor}`]: menuThemeColor,
    "menu-item-selected": curIndex === menuItemIndex,
    "menu-item-disabled": menuItemDisabled,
  });
  const handleClick = () => {
    if (curIndex !== menuItemIndex && !menuItemDisabled) {
      handleMenuItemClick(menuItemIndex);
    }
  };
  return (
    <li className={classes} onClick={handleClick} {...restProps}>
      {children}
    </li>
  );
};

MenuItem.defaultProps = {
  menuItemDisabled: false,
};

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
