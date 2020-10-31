var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Children, cloneElement, createContext, } from "react";
import classNames from "classnames";
export var InputContext = createContext({
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
export var Input = function (props) {
    var _a;
    var className = props.className, children = props.children, inputSize = props.inputSize, inputThemeColor = props.inputThemeColor, inputStyle = props.inputStyle, restProps = __rest(props, ["className", "children", "inputSize", "inputThemeColor", "inputStyle"]);
    var classes = classNames(className, "input", (_a = {},
        _a["input-size-" + inputSize] = inputSize,
        _a["input-theme-color-" + inputThemeColor] = inputThemeColor,
        _a["input-style-" + inputStyle] = inputStyle,
        _a));
    var numChildren = Children.count(children); // 和index比较可以拿到首尾的子元素，只对这两个设置圆角
    var renderChildren = function () {
        return Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "InputContent") {
                if (numChildren === 1) {
                    return cloneElement(childElement, {
                        inputContentRelativePosition: "single",
                    });
                }
                else {
                    if (index === 0) {
                        return cloneElement(childElement, {
                            inputContentRelativePosition: "left",
                        });
                    }
                    else if (index === numChildren - 1) {
                        return cloneElement(childElement, {
                            inputContentRelativePosition: "right",
                        });
                    }
                    else {
                        return cloneElement(childElement, {
                            inputContentRelativePosition: "middle",
                        });
                    }
                }
            }
            else if (displayName === "InputAffix") {
                if (numChildren === 1) {
                    return cloneElement(childElement, {
                        inputAffixRelativePosition: "single",
                    });
                }
                else {
                    if (index === 0) {
                        return cloneElement(childElement, {
                            inputAffixRelativePosition: "left",
                        });
                    }
                    else if (index === numChildren - 1) {
                        return cloneElement(childElement, {
                            inputAffixRelativePosition: "right",
                        });
                    }
                    else {
                        return cloneElement(childElement, {
                            inputAffixRelativePosition: "middle",
                        });
                    }
                }
            }
            else {
                console.error("Warning: Input has a child which is not a InputContent or InputAffix");
            }
        });
    };
    return (React.createElement("div", __assign({ className: classes }, restProps),
        React.createElement(InputContext.Provider, { value: {
                inputSize: inputSize,
                inputThemeColor: inputThemeColor,
                inputStyle: inputStyle,
            } }, renderChildren())));
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
