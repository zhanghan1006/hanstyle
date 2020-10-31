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
import { ListContext } from "./list";
export var ListItem = function (props) {
    var className = props.className, children = props.children, listItemIndex = props.listItemIndex, listItemDisabled = props.listItemDisabled, listItemOnClick = props.listItemOnClick, listItemOnSelectBefore = props.listItemOnSelectBefore, listItemOnSelectAfter = props.listItemOnSelectAfter, restProps = __rest(props, ["className", "children", "listItemIndex", "listItemDisabled", "listItemOnClick", "listItemOnSelectBefore", "listItemOnSelectAfter"]);
    var _a = useContext(ListContext), selectedIndex = _a.selectedIndex, changeSelectedIndex = _a.changeSelectedIndex, listInteractionLevel = _a.listInteractionLevel;
    var classes = classNames(className, "list-item", {
        selected: selectedIndex === listItemIndex,
        disabled: listItemDisabled,
    });
    var handleClick = function (event) {
        if (listItemOnClick) {
            listItemOnClick(event);
        }
    };
    var handleSelect = function (event) {
        if (listItemOnSelectBefore) {
            listItemOnSelectBefore(event);
        }
        changeSelectedIndex(listItemIndex);
        if (listItemOnSelectAfter) {
            listItemOnSelectAfter(event);
        }
    };
    return (React.createElement("li", __assign({ className: classes, onClick: listItemDisabled
            ? undefined
            : listInteractionLevel === "selectable"
                ? function (event) {
                    handleSelect(event);
                }
                : listInteractionLevel === "clickable"
                    ? function (event) {
                        handleClick(event);
                    }
                    : undefined }, restProps), children));
};
ListItem.defaultProps = {
    listItemDisabled: false,
};
ListItem.displayName = "ListItem";
export default ListItem;
