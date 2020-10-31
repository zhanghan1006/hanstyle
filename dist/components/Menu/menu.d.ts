import React, { FC, HTMLAttributes } from "react";
declare type MenuStyle = "plain" | "border-top" | "border-bottom";
declare type MenuThemeColor = "orange" | "blue" | "red";
declare type ChangeSelectedIndex = (clickedIndex: number[]) => void;
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
    menuStyle: MenuStyle;
    menuThemeColor: MenuThemeColor;
    selectedIndex: number[];
    changeSelectedIndex: ChangeSelectedIndex;
}
export declare const MenuContext: React.Context<IMenuContext>;
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
export declare const Menu: FC<MenuProps>;
export default Menu;
