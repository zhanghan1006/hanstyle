import { FC, HTMLAttributes } from "react";
declare type InputAffixType = "normal" | "select";
declare type InputAffixRelativePosition = "single" | "left" | "middle" | "right";
export interface InputAffixProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Which type of InputAffix do you want?
     */
    inputAffixType?: InputAffixType;
    /**
     * This is auto-generated. You do not need to set it manually.
     */
    inputAffixRelativePosition?: InputAffixRelativePosition;
}
export declare const InputAffix: FC<InputAffixProps>;
export default InputAffix;
