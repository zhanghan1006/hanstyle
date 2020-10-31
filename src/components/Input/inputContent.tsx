import React, {
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import classNames from "classnames";

type InputContentRelativePosition = "single" | "left" | "middle" | "right";
type GetInputValue = () => string;
type GetInputContentInputRef = () => React.MutableRefObject<null>;

export interface InputContentProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
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
  inputContentOnChangeBefore?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  /**
   * The callback function when you change the value of the InputContent component.
   * It runs after the changing of the value.
   */
  inputContentOnChangeAfter?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export interface IInputContentRef {
  getInputValue: GetInputValue;
  getInputContentInputRef: GetInputContentInputRef;
}

export const InputContent = forwardRef<IInputContentRef, InputContentProps>(
  (props, ref) => {
    const {
      className,
      children,
      style,
      type,
      inputContentInitValue,
      inputContentRelativePosition,
      inputContentOnChangeBefore,
      inputContentOnChangeAfter,
      ...restProps
    } = props;
    const classes = classNames(className, "input-content", {
      [`input-content-relative-position-${inputContentRelativePosition}`]: inputContentRelativePosition,
    });
    const inputContentInputRef = useRef(null);
    const [inputValue, setInputValue] = useState(inputContentInitValue!);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (inputContentOnChangeBefore) {
        inputContentOnChangeBefore(event);
      }
      setInputValue(event.target.value);
      if (inputContentOnChangeAfter) {
        inputContentOnChangeAfter(event);
      }
    };
    useImperativeHandle(ref, () => ({
      getInputValue: () => {
        return inputValue;
      },
      getInputContentInputRef: () => {
        return inputContentInputRef;
      },
    }));
    return (
      <input
        ref={inputContentInputRef}
        className={classes}
        value={inputValue}
        onChange={handleChange}
        {...restProps}
      />
    );
  }
);

InputContent.defaultProps = {
  inputContentInitValue: "",
  inputContentRelativePosition: "single",
};

InputContent.displayName = "InputContent";

export default InputContent;
