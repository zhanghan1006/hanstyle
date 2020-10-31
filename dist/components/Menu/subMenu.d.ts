import { FC, HTMLAttributes } from "react";
declare type SubmenuTrigger = "hover" | "click";
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
export declare const Submenu: FC<SubmenuProps>;
export default Submenu;
