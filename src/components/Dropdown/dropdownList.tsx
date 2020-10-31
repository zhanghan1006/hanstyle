import React, { CSSProperties, FC, HTMLAttributes, useContext } from "react";
import classNames from "classnames";
import List, {
  ListBorderColor,
  ListBorderRadiusSize,
  ListDividerColor,
  ListInteractionLevel,
  ListInteractionStyle,
  ListShadowSize,
  ListThemeColor,
} from "../List/list";
import { DropdownContext } from "./dropdown";
import { CSSTransition } from "react-transition-group";

type DropdownListPlacement =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "rightTop"
  | "rightCenter"
  | "rightBottom"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight"
  | "leftTop"
  | "leftCenter"
  | "leftBottom";
type DropdownListExpandFrom = "top" | "right" | "bottom" | "left";

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

export const DropdownList: FC<DropdownListProps> = (props) => {
  const {
    className,
    children,
    dropdownListBorderRadiusSize,
    dropdownListBorderColor,
    dropdownListDividerColor,
    dropdownListShadowSize,
    dropdownListThemeColor,
    dropdownListInteractionLevel,
    dropdownListInteractionStyle,
    dropdownListWidth,
    dropdownListHeight,
    dropdownListPlacement,
    dropdownListExpandFrom,
    ...restProps
  } = props;
  const classes = classNames(className, "dropdown-list", {});
  const {
    isOpen,
    dropdownDisabled,
    dropdownButtonSize,
    dropdownThemeColor,
  } = useContext(DropdownContext);
  const generateInlineStyle = () => {
    let inlineStyle: CSSProperties;
    switch (dropdownListPlacement) {
      case "topLeft":
        inlineStyle = {
          position: "absolute",
          right: 0,
          bottom: dropdownButtonSize.height,
        };
        break;
      case "topCenter":
        inlineStyle = {
          position: "absolute",
          right:
            0.5 * (dropdownButtonSize.width - (dropdownListWidth as number)),
          bottom: dropdownButtonSize.height,
        };
        break;
      case "topRight":
        inlineStyle = {
          position: "absolute",
          bottom: dropdownButtonSize.height,
          left: 0,
        };
        break;
      case "rightTop":
        inlineStyle = {
          position: "absolute",
          bottom: 0,
          left: dropdownButtonSize.width,
        };
        break;
      case "rightCenter":
        inlineStyle = {
          position: "absolute",
          top:
            0.5 * (dropdownButtonSize.height - (dropdownListHeight as number)),
          left: dropdownButtonSize.width,
        };
        break;
      case "rightBottom":
        inlineStyle = {
          position: "absolute",
          top: 0,
          left: dropdownButtonSize.width,
        };
        break;
      case "bottomLeft":
        inlineStyle = {
          position: "absolute",
          top: dropdownButtonSize.height,
          right: 0,
        };
        break;
      case "bottomCenter":
        inlineStyle = {
          position: "absolute",
          top: dropdownButtonSize.height,
          right:
            0.5 * (dropdownButtonSize.width - (dropdownListWidth as number)),
        };
        break;
      case "bottomRight":
        inlineStyle = {
          position: "absolute",
          top: dropdownButtonSize.height,
          left: 0,
        };
        break;
      case "leftTop":
        inlineStyle = {
          position: "absolute",
          right: dropdownButtonSize.width,
          bottom: 0,
        };
        break;
      case "leftCenter":
        inlineStyle = {
          position: "absolute",
          top:
            0.5 * (dropdownButtonSize.height - (dropdownListHeight as number)),
          right: dropdownButtonSize.width,
        };
        break;
      case "leftBottom":
        inlineStyle = {
          position: "absolute",
          top: 0,
          right: dropdownButtonSize.width,
        };
        break;
      default:
        inlineStyle = {
          position: "absolute",
          top: dropdownButtonSize.height,
          right:
            0.5 * (dropdownButtonSize.width - (dropdownListWidth as number)),
        };
        break;
    }
    inlineStyle.width = dropdownListWidth;
    inlineStyle.height = dropdownListHeight;
    return inlineStyle;
  };
  const dropdownListInlineStyle = generateInlineStyle();
  return !dropdownDisabled ? (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={`expand-from-${dropdownListExpandFrom}`}
      appear
      unmountOnExit={true}
    >
      <List
        style={dropdownListInlineStyle}
        className={classes}
        listBorderRadiusSize={dropdownListBorderRadiusSize}
        listBorderColor={dropdownListBorderColor}
        listDividerColor={dropdownListDividerColor}
        listShadowSize={dropdownListShadowSize}
        listThemeColor={
          dropdownListThemeColor ? dropdownListThemeColor : dropdownThemeColor
        }
        listInteractionLevel={dropdownListInteractionLevel}
        listInteractionStyle={dropdownListInteractionStyle}
        {...restProps}
      >
        {children}
      </List>
    </CSSTransition>
  ) : (
    <></>
  );
};

DropdownList.defaultProps = {
  dropdownListBorderRadiusSize: "none",
  dropdownListBorderColor: "none",
  dropdownListDividerColor: "none",
  dropdownListShadowSize: "middle",
  dropdownListInteractionLevel: "none",
  dropdownListInteractionStyle: "shadow",
  dropdownListPlacement: "bottomCenter",
  dropdownListExpandFrom: "top",
};

DropdownList.displayName = "DropdownList";

export default DropdownList;
