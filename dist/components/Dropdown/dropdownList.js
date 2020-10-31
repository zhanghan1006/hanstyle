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
import List from "../List/list";
import { DropdownContext } from "./dropdown";
import { CSSTransition } from "react-transition-group";
export var DropdownList = function (props) {
    var className = props.className, children = props.children, dropdownListBorderRadiusSize = props.dropdownListBorderRadiusSize, dropdownListBorderColor = props.dropdownListBorderColor, dropdownListDividerColor = props.dropdownListDividerColor, dropdownListShadowSize = props.dropdownListShadowSize, dropdownListThemeColor = props.dropdownListThemeColor, dropdownListInteractionLevel = props.dropdownListInteractionLevel, dropdownListInteractionStyle = props.dropdownListInteractionStyle, dropdownListWidth = props.dropdownListWidth, dropdownListHeight = props.dropdownListHeight, dropdownListPlacement = props.dropdownListPlacement, dropdownListExpandFrom = props.dropdownListExpandFrom, restProps = __rest(props, ["className", "children", "dropdownListBorderRadiusSize", "dropdownListBorderColor", "dropdownListDividerColor", "dropdownListShadowSize", "dropdownListThemeColor", "dropdownListInteractionLevel", "dropdownListInteractionStyle", "dropdownListWidth", "dropdownListHeight", "dropdownListPlacement", "dropdownListExpandFrom"]);
    var classes = classNames(className, "dropdown-list", {});
    var _a = useContext(DropdownContext), isOpen = _a.isOpen, dropdownDisabled = _a.dropdownDisabled, dropdownButtonSize = _a.dropdownButtonSize, dropdownThemeColor = _a.dropdownThemeColor;
    var generateInlineStyle = function () {
        var inlineStyle;
        switch (dropdownListPlacement) {
            case "topLeft":
                inlineStyle = {
                    position: "absolute",
                    right: 0,
                    bottom: dropdownButtonSize.height,
                };
                break;
            case "topCenter":
                inlineStyle = {
                    position: "absolute",
                    right: 0.5 * (dropdownButtonSize.width - dropdownListWidth),
                    bottom: dropdownButtonSize.height,
                };
                break;
            case "topRight":
                inlineStyle = {
                    position: "absolute",
                    bottom: dropdownButtonSize.height,
                    left: 0,
                };
                break;
            case "rightTop":
                inlineStyle = {
                    position: "absolute",
                    bottom: 0,
                    left: dropdownButtonSize.width,
                };
                break;
            case "rightCenter":
                inlineStyle = {
                    position: "absolute",
                    top: 0.5 * (dropdownButtonSize.height - dropdownListHeight),
                    left: dropdownButtonSize.width,
                };
                break;
            case "rightBottom":
                inlineStyle = {
                    position: "absolute",
                    top: 0,
                    left: dropdownButtonSize.width,
                };
                break;
            case "bottomLeft":
                inlineStyle = {
                    position: "absolute",
                    top: dropdownButtonSize.height,
                    right: 0,
                };
                break;
            case "bottomCenter":
                inlineStyle = {
                    position: "absolute",
                    top: dropdownButtonSize.height,
                    right: 0.5 * (dropdownButtonSize.width - dropdownListWidth),
                };
                break;
            case "bottomRight":
                inlineStyle = {
                    position: "absolute",
                    top: dropdownButtonSize.height,
                    left: 0,
                };
                break;
            case "leftTop":
                inlineStyle = {
                    position: "absolute",
                    right: dropdownButtonSize.width,
                    bottom: 0,
                };
                break;
            case "leftCenter":
                inlineStyle = {
                    position: "absolute",
                    top: 0.5 * (dropdownButtonSize.height - dropdownListHeight),
                    right: dropdownButtonSize.width,
                };
                break;
            case "leftBottom":
                inlineStyle = {
                    position: "absolute",
                    top: 0,
                    right: dropdownButtonSize.width,
                };
                break;
            default:
                inlineStyle = {
                    position: "absolute",
                    top: dropdownButtonSize.height,
                    right: 0.5 * (dropdownButtonSize.width - dropdownListWidth),
                };
                break;
        }
        inlineStyle.width = dropdownListWidth;
        inlineStyle.height = dropdownListHeight;
        return inlineStyle;
    };
    var dropdownListInlineStyle = generateInlineStyle();
    return !dropdownDisabled ? (React.createElement(CSSTransition, { in: isOpen, timeout: 300, classNames: "expand-from-" + dropdownListExpandFrom, appear: true, unmountOnExit: true },
        React.createElement(List, __assign({ style: dropdownListInlineStyle, className: classes, listBorderRadiusSize: dropdownListBorderRadiusSize, listBorderColor: dropdownListBorderColor, listDividerColor: dropdownListDividerColor, listShadowSize: dropdownListShadowSize, listThemeColor: dropdownListThemeColor ? dropdownListThemeColor : dropdownThemeColor, listInteractionLevel: dropdownListInteractionLevel, listInteractionStyle: dropdownListInteractionStyle }, restProps), children))) : (React.createElement(React.Fragment, null));
};
DropdownList.defaultProps = {
    dropdownListBorderRadiusSize: "none",
    dropdownListBorderColor: "none",
    dropdownListDividerColor: "none",
    dropdownListShadowSize: "middle",
    dropdownListInteractionLevel: "none",
    dropdownListInteractionStyle: "shadow",
    dropdownListPlacement: "bottomCenter",
    dropdownListExpandFrom: "top",
};
DropdownList.displayName = "DropdownList";
export default DropdownList;
