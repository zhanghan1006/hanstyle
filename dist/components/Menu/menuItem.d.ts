import { FC, HTMLAttributes } from "react";
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
export declare const MenuItem: FC<MenuItemProps>;
export default MenuItem;
