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
import React, { Children, cloneElement, createContext, forwardRef, useState, } from "react";
import classNames from "classnames";
import Divider from "../Divider/divider";
export var ListContext = createContext({
    selectedIndex: -1,
    changeSelectedIndex: function () { },
    listInteractionLevel: "none",
});
/**
 * To show a group of relative content.
 *
 * ## How to Import
 * ~~~js
 * import { List } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;ul&gt; element.
 * @param props
 * @constructor
 */
export var List = forwardRef(function (props, ref) {
    var _a;
    var className = props.className, children = props.children, listBorderRadiusSize = props.listBorderRadiusSize, listBorderColor = props.listBorderColor, listDividerColor = props.listDividerColor, listShadowSize = props.listShadowSize, listThemeColor = props.listThemeColor, listInteractionLevel = props.listInteractionLevel, listInteractionStyle = props.listInteractionStyle, restProps = __rest(props, ["className", "children", "listBorderRadiusSize", "listBorderColor", "listDividerColor", "listShadowSize", "listThemeColor", "listInteractionLevel", "listInteractionStyle"]);
    var classes = classNames(className, "list", (_a = {},
        _a["list-border-radius-" + listBorderRadiusSize] = listBorderRadiusSize,
        _a["list-border-color-" + listBorderColor] = listBorderColor,
        _a["list-shadow-" + listShadowSize] = listShadowSize,
        _a["list-theme-color-" + listThemeColor] = listThemeColor,
        _a["list-interaction-" + listInteractionLevel] = listInteractionLevel,
        _a["list-interaction-style-" + listInteractionStyle] = listInteractionStyle,
        _a));
    var _b = useState(-1), selectedIndex = _b[0], setSelectedIndex = _b[1];
    var changeSelectedIndex = function (changeToIndex) {
        setSelectedIndex(changeToIndex);
    };
    return (React.createElement("ul", __assign({ ref: ref, className: classes }, restProps),
        React.createElement(ListContext.Provider, { value: {
                selectedIndex: selectedIndex,
                changeSelectedIndex: changeSelectedIndex,
                listInteractionLevel: listInteractionLevel,
            } }, Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "ListItem") {
                return index === 0 ? (cloneElement(childElement, { listItemIndex: index })) : (React.createElement(React.Fragment, null,
                    listDividerColor === "none" ? (React.createElement(React.Fragment, null)) : (React.createElement(Divider, { dividerStyle: "empty", dividerLineColor: listDividerColor })),
                    cloneElement(childElement, { listItemIndex: index })));
            }
            else {
                console.error("Warning: List has a child which is not a ListItem");
            }
        }))));
});
List.defaultProps = {
    listBorderRadiusSize: "none",
    listBorderColor: "gray-13",
    listDividerColor: "gray-13",
    listShadowSize: "none",
    listThemeColor: "gray-13",
    listInteractionLevel: "none",
    listInteractionStyle: "none",
};
List.displayName = "List";
export default List;
