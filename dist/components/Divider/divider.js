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
 * To divide the content and to make it easier to read.
 *
 * ## How to Import
 * ~~~js
 * import { Divider } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export var Divider = function (props) {
    var _a;
    var className = props.className, children = props.children, dividerStyle = props.dividerStyle, dividerTextPosition = props.dividerTextPosition, dividerLineColor = props.dividerLineColor, restProps = __rest(props, ["className", "children", "dividerStyle", "dividerTextPosition", "dividerLineColor"]);
    var classes = classNames(className, "divider", (_a = {},
        _a["divider-" + dividerStyle] = dividerStyle,
        _a["divider-" + dividerTextPosition] = dividerStyle === "plain" && dividerTextPosition,
        _a["divider-line-" + dividerLineColor] = dividerLineColor,
        _a));
    if (dividerStyle === "empty") {
        return (React.createElement("div", __assign({ className: classes }, restProps),
            React.createElement("hr", null)));
    }
    else {
        return (React.createElement("div", __assign({ className: classes }, restProps),
            React.createElement("hr", null),
            React.createElement("p", null, children),
            React.createElement("hr", null)));
    }
};
Divider.defaultProps = {
    dividerStyle: "empty",
    dividerTextPosition: "left",
    dividerLineColor: "gray-0",
};
export default Divider;
