import React, {
  Children,
  createContext,
  FC,
  FunctionComponentElement,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { DropdownButtonProps } from "./dropdownButton";
import { DropdownListProps } from "./dropdownList";
import { BaseColor, NeutralColor } from "../variables";

type ChangeIsOpen = (changeToOpen: boolean) => void;
type DropdownTrigger = "hover" | "click";
type DropdownThemeColor = BaseColor | NeutralColor;
type DropdownButtonSize = { width: number; height: number };

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

export const DropdownContext = createContext<IDropdownContext>({
  isOpen: false,
  changeIsOpen: () => {},
  dropdownDisabled: false,
  dropdownTrigger: "hover",
  dropdownButtonSize: { width: 0, height: 0 },
  dropdownThemeColor: "gray-13",
});

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
export const Dropdown: FC<DropdownProps> = (props) => {
  const {
    className,
    children,
    dropdownDisabled,
    dropdownTrigger,
    dropdownThemeColor,
    ...restProps
  } = props;
  const classes = classNames(className, "dropdown", {});
  const [isOpen, setIsOpen] = useState(false);
  const dropdownDivRef = useRef(null);
  let dropdownButtonSize = useRef({
    height: 0,
    width: 0,
  });
  const changeIsOpen = (changeToOpen: boolean) => {
    setIsOpen(changeToOpen);
  };
  const handleMouseLeave = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const handleClickOutside = (e: MouseEvent) => {
    if (isOpen && !(dropdownDivRef as any).current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });
  useEffect(() => {
    const dropdownButtonRef = (dropdownDivRef as any).current.getElementsByClassName(
      "dropdown-button"
    )[0];
    dropdownButtonSize.current = {
      width: dropdownButtonRef.offsetWidth,
      height: dropdownButtonRef.offsetHeight,
    };
  });
  const renderChildren = () => {
    let hasDropdownButton = false;
    let hasDropdownList = false;
    return Children.map(children, (child) => {
      const childElement = child as FunctionComponentElement<
        DropdownButtonProps | DropdownListProps
      >;
      const { displayName } = childElement.type;
      if (displayName === "DropdownButton") {
        if (!hasDropdownButton) {
          hasDropdownButton = true;
          return childElement;
        } else {
          console.error(
            "Warning: Dropdown has more than one DropdownButton children"
          );
        }
      } else if (displayName === "DropdownList") {
        if (!hasDropdownList) {
          hasDropdownList = true;
          return childElement;
        } else {
          console.error(
            "Warning: Dropdown has more than one DropdownList children"
          );
        }
      } else {
        console.error(
          "Warning: Dropdown has a child which is not a DropdownButton or DropdownList"
        );
      }
    });
  };
  return (
    <div
      className={classes}
      ref={dropdownDivRef}
      onMouseLeave={
        !dropdownDisabled && dropdownTrigger === "hover"
          ? handleMouseLeave
          : undefined
      }
      {...restProps}
    >
      <DropdownContext.Provider
        value={{
          isOpen: isOpen,
          changeIsOpen: changeIsOpen,
          dropdownDisabled: dropdownDisabled as boolean,
          dropdownTrigger: dropdownTrigger as DropdownTrigger,
          dropdownThemeColor: dropdownThemeColor as DropdownThemeColor,
          dropdownButtonSize: dropdownButtonSize.current,
        }}
      >
        {renderChildren()}
      </DropdownContext.Provider>
    </div>
  );
};

Dropdown.defaultProps = {
  dropdownDisabled: false,
  dropdownTrigger: "hover",
  dropdownThemeColor: "orange",
};

export default Dropdown;
