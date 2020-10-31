import React, {
  Children,
  cloneElement,
  createContext,
  FC,
  FunctionComponentElement,
  HTMLAttributes,
} from "react";
import classNames from "classnames";
import { BaseColor, BaseSize, NeutralColor } from "../variables";
import { InputContentProps } from "./inputContent";
import { InputAffixProps } from "./inputAffix";

type InputStyle = "luminous";

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * How large is the Input component?
   */
  inputSize?: BaseSize;
  /**
   * What is the theme color of the Input component?
   */
  inputThemeColor?: BaseColor | NeutralColor;
  /**
   * What is the style of the Input component, especially when you interact with it?
   */
  inputStyle?: InputStyle;
}

interface IInputContext {
  inputSize: BaseSize;
  inputThemeColor: BaseColor | NeutralColor;
  inputStyle: InputStyle;
}

export const InputContext = createContext<IInputContext>({
  inputSize: "middle",
  inputThemeColor: "orange",
  inputStyle: "luminous",
});

/**
 * It allows user to input some text to give information to the application.
 *
 * ## How to Import
 * ~~~js
 * import { Input } from "hanstyle";
 * ~~~
 * ## Props
 * ### Input
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 *
 * ### InputContent
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;input&gt; element, except 'size'.
 *
 * ### InputAffix
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export const Input: FC<InputProps> = (props) => {
  const {
    className,
    children,
    inputSize,
    inputThemeColor,
    inputStyle,
    ...restProps
  } = props;
  const classes = classNames(className, "input", {
    [`input-size-${inputSize}`]: inputSize,
    [`input-theme-color-${inputThemeColor}`]: inputThemeColor,
    [`input-style-${inputStyle}`]: inputStyle,
  });
  const numChildren = Children.count(children); // 和index比较可以拿到首尾的子元素，只对这两个设置圆角
  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<
        InputContentProps | InputAffixProps
      >;
      const { displayName } = childElement.type;
      if (displayName === "InputContent") {
        if (numChildren === 1) {
          return cloneElement(childElement, {
            inputContentRelativePosition: "single",
          });
        } else {
          if (index === 0) {
            return cloneElement(childElement, {
              inputContentRelativePosition: "left",
            });
          } else if (index === numChildren - 1) {
            return cloneElement(childElement, {
              inputContentRelativePosition: "right",
            });
          } else {
            return cloneElement(childElement, {
              inputContentRelativePosition: "middle",
            });
          }
        }
      } else if (displayName === "InputAffix") {
        if (numChildren === 1) {
          return cloneElement(childElement, {
            inputAffixRelativePosition: "single",
          });
        } else {
          if (index === 0) {
            return cloneElement(childElement, {
              inputAffixRelativePosition: "left",
            });
          } else if (index === numChildren - 1) {
            return cloneElement(childElement, {
              inputAffixRelativePosition: "right",
            });
          } else {
            return cloneElement(childElement, {
              inputAffixRelativePosition: "middle",
            });
          }
        }
      } else {
        console.error(
          "Warning: Input has a child which is not a InputContent or InputAffix"
        );
      }
    });
  };
  return (
    <div className={classes} {...restProps}>
      <InputContext.Provider
        value={{
          inputSize: inputSize!,
          inputThemeColor: inputThemeColor!,
          inputStyle: inputStyle!,
        }}
      >
        {renderChildren()}
      </InputContext.Provider>
    </div>
  );
};

Input.defaultProps = {
  inputSize: "middle",
  inputThemeColor: "orange",
  inputStyle: "luminous",
};

Input.displayName = "Input";

export default Input;

// import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react'
// import classNames from 'classnames'
// import { IconProp } from '@fortawesome/fontawesome-svg-core'
// import Icon from '../Icon/icon'
// import {library} from "@fortawesome/fontawesome-svg-core";
// import {fas} from "@fortawesome/free-solid-svg-icons";
//
// library.add(fas);
//
// type InputSize = 'lg' | 'sm'
// export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size' > {
//   /**是否禁用 Input */
//   disabled?: boolean;
//   /**设置 input 大小，支持 lg 或者是 sm */
//   size?: InputSize;
//   /**添加图标，在右侧悬浮添加一个图标，用于提示 */
//   icon?: IconProp;
//   /**添加前缀 用于配置一些固定组合 */
//   prepend?: string | ReactElement;
//   /**添加后缀 用于配置一些固定组合 */
//   append?: string | ReactElement;
//   onChange? : (e: ChangeEvent<HTMLInputElement>) => void;
// }
//
// /**
//  * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
//  *
//  * ~~~js
//  * // 这样引用
//  * import { Input } from 'vikingship'
//  * ~~~
//  * 支持 HTMLInput 的所有基本属性
//  */
// export const Input: FC<InputProps> = (props) => {
//   const {
//     disabled,
//     size,
//     icon,
//     prepend,
//     append,
//     style,
//     ...restProps
//   } = props
//   const cnames = classNames('viking-input-wrapper', {
//     [`input-size-${size}`]: size,
//     'is-disabled': disabled,
//     'input-group': prepend || append,
//     'input-group-append': !!append,
//     'input-group-prepend': !!prepend
//   })
//   const fixControlledValue = (value: any) => {
//     if (typeof value === 'undefined' || value === null) {
//       return ''
//     }
//     return value
//   }
//   if('value' in props) {
//     delete restProps.defaultValue
//     restProps.value = fixControlledValue(props.value)
//   }
//   return (
//     <div className={cnames} style={style}>
//       {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
//       {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
//       <input
//         className="viking-input-inner"
//         disabled={disabled}
//         {...restProps}
//       />
//       {append && <div className="viking-input-group-append">{append}</div>}
//     </div>
//   )
// }
//
// export default Input;
