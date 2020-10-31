import React, { FC, HTMLAttributes } from "react";
declare type ListItemOnClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
declare type ListItemOnSelectBefore = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
declare type ListItemOnSelectAfter = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
    /**
     * This is auto-generated. You do not need to set it manually.
     */
    listItemIndex?: number;
    /**
     * Is the ListItem disabled?
     */
    listItemDisabled?: boolean;
    /**
     * The callback function when you click the ListItem
     */
    listItemOnClick?: ListItemOnClick;
    /**
     * The callback function when you select the ListItem.
     * It runs before the changing of the selected index.
     */
    listItemOnSelectBefore?: ListItemOnSelectBefore;
    /**
     * The callback function when you select the ListItem.
     * It runs after the changing of the selected index.
     */
    listItemOnSelectAfter?: ListItemOnSelectAfter;
}
export declare const ListItem: FC<ListItemProps>;
export default ListItem;
