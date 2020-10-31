import { FC, ForwardRefExoticComponent, RefAttributes } from "react";
import Input, { InputProps } from "./input";
import InputContent, {
  IInputContentRef,
  InputContentProps,
} from "./inputContent";
import InputAffix, { InputAffixProps } from "./inputAffix";

export type IInputComponent = FC<InputProps> & {
  Content: ForwardRefExoticComponent<
    InputContentProps & RefAttributes<IInputContentRef>
  >;
  Affix: FC<InputAffixProps>;
};

const InputComponent = Input as IInputComponent;

InputComponent.Content = InputContent;
InputComponent.Affix = InputAffix;

export default InputComponent;
