import React from "react";
declare type MenuMode = 'horizontal' | 'vertical';
declare type selectCallback = (selectedIndex: string) => void;
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: selectCallback;
    defaultOpenSubMenus?: string[];
}
interface IMenuContext {
    index: string;
    onSelect?: selectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
/**
 * 这是我们的第一个 Menu 组件
 * ## Menu header
 * ~~~js
 * import { Menu } from 'hanstyle'
 * ~~~
 * @param props
 * @constructor
 */
export declare const Menu: React.FC<MenuProps>;
export default Menu;
