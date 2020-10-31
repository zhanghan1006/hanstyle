import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";

type InputAffixType = "normal" | "select";
type InputAffixRelativePosition = "single" | "left" | "middle" | "right";

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

export const InputAffix: FC<InputAffixProps> = (props) => {
  const {
    className,
    children,
    inputAffixType,
    inputAffixRelativePosition,
    ...restProps
  } = props;
  const classes = classNames(className, "input-affix", {
    [`input-affix-${inputAffixType}`]: inputAffixType,
    [`input-affix-relative-position-${inputAffixRelativePosition}`]: inputAffixRelativePosition,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

InputAffix.defaultProps = {
  inputAffixType: "normal",
  inputAffixRelativePosition: "right",
};

InputAffix.displayName = "InputAffix";

export default InputAffix;
