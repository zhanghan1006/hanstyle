import { FC } from "react";
import { MenuProps } from "./menu";
import { SubmenuProps } from "./submenu";
import { MenuItemProps } from "./menuItem";
export declare type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    Submenu: FC<SubmenuProps>;
};
declare const MenuComponent: IMenuComponent;
export default MenuComponent;
