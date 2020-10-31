import { FC } from "react";
import { DropdownProps } from "./dropdown";
import { DropdownButtonProps } from "./dropdownButton";
import { DropdownListProps } from "./dropdownList";
export declare type IDropdownComponent = FC<DropdownProps> & {
    Button: FC<DropdownButtonProps>;
    List: FC<DropdownListProps>;
};
declare const DropdownComponent: IDropdownComponent;
export default DropdownComponent;
