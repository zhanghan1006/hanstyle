import React, { FC, HTMLAttributes, useContext } from "react";
import classNames from "classnames";
import { DropdownContext } from "./dropdown";

export interface DropdownButtonProps extends HTMLAttributes<HTMLDivElement> {}

export const DropdownButton: FC<DropdownButtonProps> = (props) => {
  const { className, children, ...restProps } = props;
  const {
    isOpen,
    changeIsOpen,
    dropdownDisabled,
    dropdownTrigger,
  } = useContext(DropdownContext);
  const classes = classNames(className, "dropdown-button", {});
  const handleClick = () => {
    changeIsOpen(!isOpen);
  };
  const handleMouseEnter = () => {
    if (!isOpen) {
      changeIsOpen(true);
    }
  };
  return (
    <div
      className={classes}
      onClick={
        !dropdownDisabled && dropdownTrigger === "click"
          ? handleClick
          : undefined
      }
      onMouseEnter={
        !dropdownDisabled && dropdownTrigger === "hover"
          ? handleMouseEnter
          : undefined
      }
      {...restProps}
    >
      {children}
    </div>
  );
};

DropdownButton.defaultProps = {};

DropdownButton.displayName = "DropdownButton";

export default DropdownButton;
