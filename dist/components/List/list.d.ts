import React, { HTMLAttributes } from "react";
import { BaseColor, BaseSize, NeutralColor } from "../variables";
export declare type ListBorderRadiusSize = "none" | BaseSize;
export declare type ListBorderColor = "none" | NeutralColor | BaseColor;
export declare type ListDividerColor = "none" | NeutralColor | BaseColor;
export declare type ListShadowSize = "none" | BaseSize;
export declare type ListThemeColor = NeutralColor | BaseColor;
export declare type ListInteractionLevel = "none" | "hoverable" | "clickable" | "selectable";
export declare type ListInteractionStyle = "none" | "lighten" | "shadow" | "lighten-shadow";
declare type ChangeSelectedIndex = (changeToIndex: number) => void;
export interface ListProps extends HTMLAttributes<HTMLUListElement> {
    /**
     * How large is the border radius of the whole list?
     */
    listBorderRadiusSize?: ListBorderRadiusSize;
    /**
     * What is the border color of the whole list?
     */
    listBorderColor?: ListBorderColor;
    /**
     * What is the color of the divider between ListItems?
     */
    listDividerColor?: ListDividerColor;
    /**
     * How large is the shadow of the whole list?
     */
    listShadowSize?: ListShadowSize;
    /**
     * What is the theme color of the list?
     * This will affect the style when a ListItem is hovered, clicked or selected.
     */
    listThemeColor?: ListThemeColor;
    /**
     * Which level of interaction do you want with the list?
     */
    listInteractionLevel?: ListInteractionLevel;
    /**
     * This affects the style of the ListItem you interact with.
     */
    listInteractionStyle?: ListInteractionStyle;
}
interface IListContext {
    selectedIndex: number;
    changeSelectedIndex: ChangeSelectedIndex;
    listInteractionLevel: ListInteractionLevel;
}
export declare const ListContext: React.Context<IListContext>;
/**
 * To show a group of relative content.
 *
 * ## How to Import
 * ~~~js
 * import { List } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;ul&gt; element.
 * @param props
 * @constructor
 */
export declare const List: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLUListElement>>;
export default List;
