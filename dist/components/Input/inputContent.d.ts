import React, { InputHTMLAttributes } from "react";
declare type InputContentRelativePosition = "single" | "left" | "middle" | "right";
declare type GetInputValue = () => string;
declare type GetInputContentInputRef = () => React.MutableRefObject<null>;
export interface InputContentProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    /**
     * The initial value of the InputContent component when it is mounted.
     */
    inputContentInitValue?: string;
    /**
     * This is auto-generated. You do not need to set it manually.
     */
    inputContentRelativePosition?: InputContentRelativePosition;
    /**
     * The callback function when you change the value of the InputContent component.
     * It runs before the changing of the value.
     */
    inputContentOnChangeBefore?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * The callback function when you change the value of the InputContent component.
     * It runs after the changing of the value.
     */
    inputContentOnChangeAfter?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IInputContentRef {
    getInputValue: GetInputValue;
    getInputContentInputRef: GetInputContentInputRef;
}
export declare const InputContent: React.ForwardRefExoticComponent<InputContentProps & React.RefAttributes<IInputContentRef>>;
export default InputContent;
