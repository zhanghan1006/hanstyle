import React, {
  Children,
  cloneElement,
  FC,
  FunctionComponentElement,
  HTMLAttributes,
  useContext,
} from "react";
import classNames from "classnames";
import Dropdown from "../Dropdown/dropdown";
import MenuItem, { MenuItemProps } from "./menuItem";
import { MenuContext } from "./menu";
import DropdownButton from "../Dropdown/dropdownButton";
import DropdownList from "../Dropdown/dropdownList";
import ListItem from "../List/listItem";

type SubmenuTrigger = "hover" | "click";

export interface SubmenuProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * This is auto-generated. You do not need to set it manually.
   */
  menuItemIndex?: number[];
  /**
   * The title of the submenu.
   */
  submenuTitle?: string;
  /**
   * Controls whether the submenu is disabled.
   */
  submenuDisabled?: boolean;
  /**
   * Controls whether the submenu (or say the submenu title) can be selected.
   */
  submenuSelectable?: boolean;
  /**
   * The way how to trigger or hide the submenu list.
   */
  submenuTrigger?: SubmenuTrigger;
}

export const Submenu: FC<SubmenuProps> = (props) => {
  const {
    className,
    children,
    menuItemIndex,
    submenuTitle,
    submenuDisabled,
    submenuSelectable,
    submenuTrigger,
    ...restProps
  } = props;
  const { menuStyle } = useContext(MenuContext);
  const classes = classNames(className, "submenu", {
    [`submenu-${menuStyle}`]: menuStyle,
  });
  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        let childIndex = [...(menuItemIndex as number[])];
        childIndex.push(index);
        const indexedChild = cloneElement(childElement, {
          menuItemIndex: childIndex,
        });
        return <ListItem>{indexedChild}</ListItem>;
      } else {
        console.error("Warning: Submenu has a child which is not a MenuItem");
      }
    });
  };
  return (
    <Dropdown
      className={classes}
      dropdownDisabled={submenuDisabled}
      dropdownTrigger={submenuTrigger}
      {...restProps}
    >
      <DropdownButton>
        <MenuItem
          menuItemIndex={menuItemIndex}
          menuItemSelectable={submenuSelectable}
        >
          {submenuTitle}
        </MenuItem>
      </DropdownButton>
      <DropdownList
        dropdownListInteractionLevel={"selectable"}
        dropdownListBorderColor={"none"}
        dropdownListBorderRadiusSize={"none"}
        dropdownListDividerColor={"none"}
        dropdownListShadowSize={"middle"}
        dropdownListInteractionStyle={"lighten-shadow"}
        dropdownListPlacement={"bottomRight"}
        dropdownListExpandFrom={"top"}
      >
        {renderChildren()}
      </DropdownList>
    </Dropdown>
  );
};

Submenu.defaultProps = {
  submenuTitle: "",
  submenuDisabled: false,
  submenuSelectable: false,
  submenuTrigger: "hover",
};

Submenu.displayName = "Submenu";

export default Submenu;

// import React, { useContext, useState, FunctionComponentElement } from "react";
// import classNames from "classnames";
// import {MenuContext} from "./menu";
// import {MenuItemProps} from "./menuItem"
// import Icon from "../Icon/icon";
// import { CSSTransition } from 'react-transition-group';
// // import Transition from "../Transition/transition";
//
// export interface SubMenuProps {
//     index?: string;
//     title: string;
//     className?: string;
// }
//
// const SubMenu: React.FC<SubMenuProps> = ({index, title, children, className}) => {
//     const context = useContext(MenuContext);
//     const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
//     const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false;
//     const [menuOpen, setOpen] = useState(isOpened);
//     const classes = classNames('menu-item submenu-item', className, {
//         'is-active': context.index === index,
//         'is-opened': menuOpen,
//         'is-vertical': context.mode === 'vertical'
//     });
//     const handleClick = (e: React.MouseEvent) => {
//         e.preventDefault();
//         setOpen(!menuOpen);
//     };
//     let timer: any;
//     const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
//         clearTimeout(timer);
//         e.preventDefault();
//         timer = setTimeout(() => {
//             setOpen(toggle);
//         }, 300);
//     };
//     const clickEvents = context.mode === 'vertical' ? {
//         onClick: handleClick
//     } : {};
//     const hoverEvents = context.mode !== 'vertical' ? {
//         onMouseEnter: (e: React.MouseEvent) => {handleMouse(e, true)},
//         onMouseLeave: (e: React.MouseEvent) => {handleMouse(e, false)}
//     } : {};
//     const renderChildren = () => {
//         const subMenuClasses = classNames('submenu', {
//             'menu-opened': menuOpen
//         });
//         const childrenComponent = React.Children.map(children, (child, i) => {
//             const childElement = child as FunctionComponentElement<MenuItemProps>;
//             if (childElement.type.displayName === 'MenuItem') {
//                 return React.cloneElement(childElement, {
//                     index: `${index}-${i}`
//                 });
//             } else {
//                 console.error('Warning: SubMenu has a child which is not a MenuItem component');
//             }
//         });
//         return (
//             <CSSTransition
//                 in={menuOpen}
//                 timeout={300}
//                 classNames="zoom-in-top"
//                 appear
//                 unmountOnExit
//             >
//                 <ul className={subMenuClasses}>
//                     {childrenComponent}
//                 </ul>
//             </CSSTransition>
//         );
//     };
//     return (
//         <li key={index} className={classes} {...hoverEvents}>
//             <div className="submenu-title" {...clickEvents}>
//                 {title}
//                 <Icon icon="angle-down" className="arrow-icon" />
//             </div>
//             {renderChildren()}
//         </li>
//     );
// };
//
// SubMenu.displayName = 'SubMenu';
// export default SubMenu;
