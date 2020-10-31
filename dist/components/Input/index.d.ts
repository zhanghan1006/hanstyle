import { FC, ForwardRefExoticComponent, RefAttributes } from "react";
import { InputProps } from "./input";
import { IInputContentRef, InputContentProps } from "./inputContent";
import { InputAffixProps } from "./inputAffix";
export declare type IInputComponent = FC<InputProps> & {
    Content: ForwardRefExoticComponent<InputContentProps & RefAttributes<IInputContentRef>>;
    Affix: FC<InputAffixProps>;
};
declare const InputComponent: IInputComponent;
export default InputComponent;
