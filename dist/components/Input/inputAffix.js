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
export var InputAffix = function (props) {
    var _a;
    var className = props.className, children = props.children, inputAffixType = props.inputAffixType, inputAffixRelativePosition = props.inputAffixRelativePosition, restProps = __rest(props, ["className", "children", "inputAffixType", "inputAffixRelativePosition"]);
    var classes = classNames(className, "input-affix", (_a = {},
        _a["input-affix-" + inputAffixType] = inputAffixType,
        _a["input-affix-relative-position-" + inputAffixRelativePosition] = inputAffixRelativePosition,
        _a));
    return (React.createElement("div", __assign({ className: classes }, restProps), children));
};
InputAffix.defaultProps = {
    inputAffixType: "normal",
    inputAffixRelativePosition: "right",
};
InputAffix.displayName = "InputAffix";
export default InputAffix;
