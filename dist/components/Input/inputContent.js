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
import React, { forwardRef, useImperativeHandle, useRef, useState, } from "react";
import classNames from "classnames";
export var InputContent = forwardRef(function (props, ref) {
    var _a;
    var className = props.className, children = props.children, style = props.style, type = props.type, inputContentInitValue = props.inputContentInitValue, inputContentRelativePosition = props.inputContentRelativePosition, inputContentOnChangeBefore = props.inputContentOnChangeBefore, inputContentOnChangeAfter = props.inputContentOnChangeAfter, restProps = __rest(props, ["className", "children", "style", "type", "inputContentInitValue", "inputContentRelativePosition", "inputContentOnChangeBefore", "inputContentOnChangeAfter"]);
    var classes = classNames(className, "input-content", (_a = {},
        _a["input-content-relative-position-" + inputContentRelativePosition] = inputContentRelativePosition,
        _a));
    var inputContentInputRef = useRef(null);
    var _b = useState(inputContentInitValue), inputValue = _b[0], setInputValue = _b[1];
    var handleChange = function (event) {
        if (inputContentOnChangeBefore) {
            inputContentOnChangeBefore(event);
        }
        setInputValue(event.target.value);
        if (inputContentOnChangeAfter) {
            inputContentOnChangeAfter(event);
        }
    };
    useImperativeHandle(ref, function () { return ({
        getInputValue: function () {
            return inputValue;
        },
        getInputContentInputRef: function () {
            return inputContentInputRef;
        },
    }); });
    return (React.createElement("input", __assign({ ref: inputContentInputRef, className: classes, value: inputValue, onChange: handleChange }, restProps)));
});
InputContent.defaultProps = {
    inputContentInitValue: "",
    inputContentRelativePosition: "single",
};
InputContent.displayName = "InputContent";
export default InputContent;
