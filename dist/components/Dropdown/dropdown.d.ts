import React, { FC, HTMLAttributes } from "react";
import { BaseColor, NeutralColor } from "../variables";
declare type ChangeIsOpen = (changeToOpen: boolean) => void;
declare type DropdownTrigger = "hover" | "click";
declare type DropdownThemeColor = BaseColor | NeutralColor;
declare type DropdownButtonSize = {
    width: number;
    height: number;
};
export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Controls whether the dropdown is disabled.
     */
    dropdownDisabled?: boolean;
    /**
     * The way how to trigger or hide the dropdown list.
     */
    dropdownTrigger?: DropdownTrigger;
    /**
     * The theme color of the dropdown button and dropdown list.
     */
    dropdownThemeColor?: DropdownThemeColor;
}
interface IDropdownContext {
    isOpen: boolean;
    changeIsOpen: ChangeIsOpen;
    dropdownDisabled: boolean;
    dropdownTrigger: DropdownTrigger;
    dropdownButtonSize: DropdownButtonSize;
    dropdownThemeColor: DropdownThemeColor;
}
export declare const DropdownContext: React.Context<IDropdownContext>;
/**
 * To show something you do not want to display on the screen all the time.
 *
 * ## How to Import
 * ~~~js
 * import { Dropdown } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export declare const Dropdown: FC<DropdownProps>;
export default Dropdown;
