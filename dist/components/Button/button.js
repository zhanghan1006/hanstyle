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
import React from "react";
import classNames from "classnames";
/**
 * To perform an operation when clicked.
 *
 * ## How to Import
 * ~~~js
 * import { Button } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;button&gt; element.
 * @param props
 * @constructor
 */
export var Button = function (props) {
    var _a;
    var className = props.className, children = props.children, buttonDisabled = props.buttonDisabled, buttonSize = props.buttonSize, buttonShape = props.buttonShape, buttonThemeColor = props.buttonThemeColor, buttonType = props.buttonType, onClick = props.onClick, restProps = __rest(props, ["className", "children", "buttonDisabled", "buttonSize", "buttonShape", "buttonThemeColor", "buttonType", "onClick"]);
    var classes = classNames(className, "button", (_a = {
            disabled: buttonDisabled
        },
        _a["button-" + buttonSize] = buttonSize,
        _a["button-" + buttonShape] = buttonShape,
        _a["button-" + buttonThemeColor] = buttonThemeColor,
        _a["button-" + buttonType] = buttonType,
        _a));
    return (React.createElement("button", __assign({ className: classes, onClick: buttonDisabled ? undefined : onClick }, restProps), children));
};
Button.defaultProps = {
    buttonDisabled: false,
    buttonSize: "middle",
    buttonShape: "rounded",
    buttonThemeColor: "orange",
    buttonType: "solid",
};
Button.displayName = "Button";
export default Button;
