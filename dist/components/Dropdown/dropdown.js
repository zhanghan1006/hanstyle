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
import React, { Children, createContext, useEffect, useRef, useState, } from "react";
import classNames from "classnames";
export var DropdownContext = createContext({
    isOpen: false,
    changeIsOpen: function () { },
    dropdownDisabled: false,
    dropdownTrigger: "hover",
    dropdownButtonSize: { width: 0, height: 0 },
    dropdownThemeColor: "gray-13",
});
/**
 * To show something you do not want to display on the screen all the time.
 *
 * ## How to Import
 * ~~~js
 * import { Dropdown } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export var Dropdown = function (props) {
    var className = props.className, children = props.children, dropdownDisabled = props.dropdownDisabled, dropdownTrigger = props.dropdownTrigger, dropdownThemeColor = props.dropdownThemeColor, restProps = __rest(props, ["className", "children", "dropdownDisabled", "dropdownTrigger", "dropdownThemeColor"]);
    var classes = classNames(className, "dropdown", {});
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var dropdownDivRef = useRef(null);
    var dropdownButtonSize = useRef({
        height: 0,
        width: 0,
    });
    var changeIsOpen = function (changeToOpen) {
        setIsOpen(changeToOpen);
    };
    var handleMouseLeave = function () {
        if (isOpen) {
            setIsOpen(false);
        }
    };
    var handleClickOutside = function (e) {
        if (isOpen && !dropdownDivRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };
    useEffect(function () {
        window.addEventListener("click", handleClickOutside);
        return function () {
            window.removeEventListener("click", handleClickOutside);
        };
    });
    useEffect(function () {
        var dropdownButtonRef = dropdownDivRef.current.getElementsByClassName("dropdown-button")[0];
        dropdownButtonSize.current = {
            width: dropdownButtonRef.offsetWidth,
            height: dropdownButtonRef.offsetHeight,
        };
    });
    var renderChildren = function () {
        var hasDropdownButton = false;
        var hasDropdownList = false;
        return Children.map(children, function (child) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "DropdownButton") {
                if (!hasDropdownButton) {
                    hasDropdownButton = true;
                    return childElement;
                }
                else {
                    console.error("Warning: Dropdown has more than one DropdownButton children");
                }
            }
            else if (displayName === "DropdownList") {
                if (!hasDropdownList) {
                    hasDropdownList = true;
                    return childElement;
                }
                else {
                    console.error("Warning: Dropdown has more than one DropdownList children");
                }
            }
            else {
                console.error("Warning: Dropdown has a child which is not a DropdownButton or DropdownList");
            }
        });
    };
    return (React.createElement("div", __assign({ className: classes, ref: dropdownDivRef, onMouseLeave: !dropdownDisabled && dropdownTrigger === "hover"
            ? handleMouseLeave
            : undefined }, restProps),
        React.createElement(DropdownContext.Provider, { value: {
                isOpen: isOpen,
                changeIsOpen: changeIsOpen,
                dropdownDisabled: dropdownDisabled,
                dropdownTrigger: dropdownTrigger,
                dropdownThemeColor: dropdownThemeColor,
                dropdownButtonSize: dropdownButtonSize.current,
            } }, renderChildren())));
};
Dropdown.defaultProps = {
    dropdownDisabled: false,
    dropdownTrigger: "hover",
    dropdownThemeColor: "orange",
};
export default Dropdown;
