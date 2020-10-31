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
import React, { useContext } from "react";
import classNames from "classnames";
import { DropdownContext } from "./dropdown";
export var DropdownButton = function (props) {
    var className = props.className, children = props.children, restProps = __rest(props, ["className", "children"]);
    var _a = useContext(DropdownContext), isOpen = _a.isOpen, changeIsOpen = _a.changeIsOpen, dropdownDisabled = _a.dropdownDisabled, dropdownTrigger = _a.dropdownTrigger;
    var classes = classNames(className, "dropdown-button", {});
    var handleClick = function () {
        changeIsOpen(!isOpen);
    };
    var handleMouseEnter = function () {
        if (!isOpen) {
            changeIsOpen(true);
        }
    };
    return (React.createElement("div", __assign({ className: classes, onClick: !dropdownDisabled && dropdownTrigger === "click"
            ? handleClick
            : undefined, onMouseEnter: !dropdownDisabled && dropdownTrigger === "hover"
            ? handleMouseEnter
            : undefined }, restProps), children));
};
DropdownButton.defaultProps = {};
DropdownButton.displayName = "DropdownButton";
export default DropdownButton;
