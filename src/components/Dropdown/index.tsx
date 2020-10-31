import { FC } from "react";
import Dropdown, { DropdownProps } from "./dropdown";
import DropdownButton, { DropdownButtonProps } from "./dropdownButton";
import DropdownList, { DropdownListProps } from "./dropdownList";

export type IDropdownComponent = FC<DropdownProps> & {
  Button: FC<DropdownButtonProps>;
  List: FC<DropdownListProps>;
};

const DropdownComponent = Dropdown as IDropdownComponent;

DropdownComponent.Button = DropdownButton;
DropdownComponent.List = DropdownList;

export default DropdownComponent;
