import { FC } from "react";
import Menu, { MenuProps } from "./menu";
import SubMenu, { SubmenuProps } from "./submenu";
import MenuItem, { MenuItemProps } from "./menuItem";

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  Submenu: FC<SubmenuProps>;
};

const MenuComponent = Menu as IMenuComponent;

MenuComponent.Item = MenuItem;
MenuComponent.Submenu = SubMenu;

export default MenuComponent;
