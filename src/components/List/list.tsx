import React, {
  Children,
  cloneElement,
  createContext,
  forwardRef,
  FunctionComponentElement,
  HTMLAttributes,
  useState,
} from "react";
import classNames from "classnames";
import { BaseColor, BaseSize } from "../variables";
import Divider from "../Divider/divider";
import { ListItemProps } from "./listItem";

export type ListBorderRadiusSize = "none" | BaseSize;
export type ListBorderColor = "none" | BaseColor;
export type ListDividerColor = "none" | BaseColor;
export type ListShadowSize = "none" | BaseSize;
export type ListThemeColor = BaseColor;
export type ListInteractionLevel =
  | "none"
  | "hoverable"
  | "clickable"
  | "selectable";
export type ListInteractionStyle =
  | "none"
  | "lighten"
  | "shadow"
  | "lighten-shadow";
type ChangeSelectedIndex = (changeToIndex: number) => void;

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

export const ListContext = createContext<IListContext>({
  selectedIndex: -1,
  changeSelectedIndex: () => {},
  listInteractionLevel: "none",
});

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
export const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  const {
    className,
    children,
    listBorderRadiusSize,
    listBorderColor,
    listDividerColor,
    listShadowSize,
    listThemeColor,
    listInteractionLevel,
    listInteractionStyle,
    ...restProps
  } = props;
  const classes = classNames(className, "list", {
    [`list-border-radius-${listBorderRadiusSize}`]: listBorderRadiusSize,
    [`list-border-color-${listBorderColor}`]: listBorderColor,
    [`list-shadow-${listShadowSize}`]: listShadowSize,
    [`list-theme-color-${listThemeColor}`]: listThemeColor,
    [`list-interaction-${listInteractionLevel}`]: listInteractionLevel,
    [`list-interaction-style-${listInteractionStyle}`]: listInteractionStyle,
  });
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const changeSelectedIndex = (changeToIndex: number) => {
    setSelectedIndex(changeToIndex);
  };
  return (
    <ul ref={ref} className={classes} {...restProps}>
      <ListContext.Provider
        value={{
          selectedIndex: selectedIndex,
          changeSelectedIndex: changeSelectedIndex,
          listInteractionLevel: listInteractionLevel as ListInteractionLevel,
        }}
      >
        {Children.map(children, (child, index) => {
          const childElement = child as FunctionComponentElement<ListItemProps>;
          const { displayName } = childElement.type;
          if (displayName === "ListItem") {
            return index === 0 ? (
              cloneElement(childElement, { listItemIndex: index })
            ) : (
              <>
                {listDividerColor === "none" ? (
                  <></>
                ) : (
                  <Divider
                    dividerStyle={"empty"}
                    dividerLineColor={listDividerColor}
                  />
                )}
                {cloneElement(childElement, { listItemIndex: index })}
              </>
            );
          } else {
            console.error("Warning: List has a child which is not a ListItem");
          }
        })}
      </ListContext.Provider>
    </ul>
  );
});

List.defaultProps = {
  listBorderRadiusSize: "none",
  listBorderColor: "gray",
  listDividerColor: "gray",
  listShadowSize: "none",
  listThemeColor: "blue",
  listInteractionLevel: "none",
  listInteractionStyle: "none",
};

List.displayName = "List";

export default List;
