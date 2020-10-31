import { FC, HTMLAttributes } from "react";
import { ListBorderColor, ListBorderRadiusSize, ListDividerColor, ListInteractionLevel, ListInteractionStyle, ListShadowSize, ListThemeColor } from "../List/list";
declare type DropdownListPlacement = "topLeft" | "topCenter" | "topRight" | "rightTop" | "rightCenter" | "rightBottom" | "bottomLeft" | "bottomCenter" | "bottomRight" | "leftTop" | "leftCenter" | "leftBottom";
declare type DropdownListExpandFrom = "top" | "right" | "bottom" | "left";
export interface DropdownListProps extends HTMLAttributes<HTMLUListElement> {
    /**
     * How large is the border radius of the whole list?
     */
    dropdownListBorderRadiusSize?: ListBorderRadiusSize;
    /**
     * What is the border color of the whole list?
     */
    dropdownListBorderColor?: ListBorderColor;
    /**
     * What is the color of the divider between ListItems?
     */
    dropdownListDividerColor?: ListDividerColor;
    /**
     * How large is the shadow of the whole list?
     */
    dropdownListShadowSize?: ListShadowSize;
    /**
     * What is the theme color of the list?
     * This will affect the style when a ListItem is hovered, clicked or selected.
     */
    dropdownListThemeColor?: ListThemeColor;
    /**
     * Which level of interaction do you want with the list?
     */
    dropdownListInteractionLevel?: ListInteractionLevel;
    /**
     * This affects the style of the ListItem you interact with.
     */
    dropdownListInteractionStyle?: ListInteractionStyle;
    /**
     * Width of the list.
     */
    dropdownListWidth?: number;
    /**
     * Height of the list.
     */
    dropdownListHeight?: number;
    /**
     * Where to display the dropdown list relative to the dropdown button?
     */
    dropdownListPlacement?: DropdownListPlacement;
    /**
     * From which direction should the dropdown list expand when you trigger it?
     */
    dropdownListExpandFrom?: DropdownListExpandFrom;
}
export declare const DropdownList: FC<DropdownListProps>;
export default DropdownList;
