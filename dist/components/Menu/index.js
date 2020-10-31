import Menu from "./menu";
import SubMenu from "./submenu";
import MenuItem from "./menuItem";
var MenuComponent = Menu;
MenuComponent.Item = MenuItem;
MenuComponent.Submenu = SubMenu;
export default MenuComponent;
