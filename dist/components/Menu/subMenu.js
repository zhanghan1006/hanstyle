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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { Children, cloneElement, useContext, } from "react";
import classNames from "classnames";
import Dropdown from "../Dropdown/dropdown";
import MenuItem from "./menuItem";
import { MenuContext } from "./menu";
import DropdownButton from "../Dropdown/dropdownButton";
import DropdownList from "../Dropdown/dropdownList";
import ListItem from "../List/listItem";
export var Submenu = function (props) {
    var _a;
    var className = props.className, children = props.children, menuItemIndex = props.menuItemIndex, submenuTitle = props.submenuTitle, submenuDisabled = props.submenuDisabled, submenuSelectable = props.submenuSelectable, submenuTrigger = props.submenuTrigger, restProps = __rest(props, ["className", "children", "menuItemIndex", "submenuTitle", "submenuDisabled", "submenuSelectable", "submenuTrigger"]);
    var menuStyle = useContext(MenuContext).menuStyle;
    var classes = classNames(className, "submenu", (_a = {},
        _a["submenu-" + menuStyle] = menuStyle,
        _a));
    var renderChildren = function () {
        return Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "MenuItem") {
                var childIndex = __spreadArrays(menuItemIndex);
                childIndex.push(index);
                var indexedChild = cloneElement(childElement, {
                    menuItemIndex: childIndex,
                });
                return React.createElement(ListItem, null, indexedChild);
            }
            else {
                console.error("Warning: Submenu has a child which is not a MenuItem");
            }
        });
    };
    return (React.createElement(Dropdown, __assign({ className: classes, dropdownDisabled: submenuDisabled, dropdownTrigger: submenuTrigger }, restProps),
        React.createElement(DropdownButton, null,
            React.createElement(MenuItem, { menuItemIndex: menuItemIndex, menuItemSelectable: submenuSelectable }, submenuTitle)),
        React.createElement(DropdownList, { dropdownListInteractionLevel: "selectable", dropdownListBorderColor: "none", dropdownListBorderRadiusSize: "none", dropdownListDividerColor: "none", dropdownListShadowSize: "middle", dropdownListInteractionStyle: "lighten-shadow", dropdownListPlacement: "bottomRight", dropdownListExpandFrom: "top" }, renderChildren())));
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
