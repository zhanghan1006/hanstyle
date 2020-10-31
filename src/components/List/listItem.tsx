import React, { FC, HTMLAttributes, useContext } from "react";
import classNames from "classnames";
import { ListContext } from "./list";

type ListItemOnClick = (
  event: React.MouseEvent<HTMLLIElement, MouseEvent>
) => void;
type ListItemOnSelectBefore = (
  event: React.MouseEvent<HTMLLIElement, MouseEvent>
) => void;
type ListItemOnSelectAfter = (
  event: React.MouseEvent<HTMLLIElement, MouseEvent>
) => void;

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

export const ListItem: FC<ListItemProps> = (props) => {
  const {
    className,
    children,
    listItemIndex,
    listItemDisabled,
    listItemOnClick,
    listItemOnSelectBefore,
    listItemOnSelectAfter,
    ...restProps
  } = props;
  const {
    selectedIndex,
    changeSelectedIndex,
    listInteractionLevel,
  } = useContext(ListContext);
  const classes = classNames(className, "list-item", {
    selected: selectedIndex === listItemIndex,
    disabled: listItemDisabled,
  });
  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (listItemOnClick) {
      listItemOnClick(event);
    }
  };
  const handleSelect = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (listItemOnSelectBefore) {
      listItemOnSelectBefore(event);
    }
    changeSelectedIndex(listItemIndex as number);
    if (listItemOnSelectAfter) {
      listItemOnSelectAfter(event);
    }
  };
  return (
    <li
      className={classes}
      onClick={
        listItemDisabled
          ? undefined
          : listInteractionLevel === "selectable"
          ? (event) => {
              handleSelect(event);
            }
          : listInteractionLevel === "clickable"
          ? (event) => {
              handleClick(event);
            }
          : undefined
      }
      {...restProps}
    >
      {children}
    </li>
  );
};

ListItem.defaultProps = {
  listItemDisabled: false,
};

ListItem.displayName = "ListItem";

export default ListItem;
