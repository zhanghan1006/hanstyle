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
import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
/**
 * To display and control which page you are currently in.
 *
 * ## How to Import
 * ~~~js
 * import { Pagination } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;ol&gt; element.
 * @param props
 * @constructor
 */
export var Pagination = function (props) {
    var _a;
    var className = props.className, maxIndex = props.maxIndex, initIndex = props.initIndex, inputIndex = props.inputIndex, paginationStyle = props.paginationStyle, paginationThemeColor = props.paginationThemeColor, onClickBeforeChangeIndex = props.onClickBeforeChangeIndex, onClickAfterChangeIndex = props.onClickAfterChangeIndex, restProps = __rest(props, ["className", "maxIndex", "initIndex", "inputIndex", "paginationStyle", "paginationThemeColor", "onClickBeforeChangeIndex", "onClickAfterChangeIndex"]);
    var _b = useState(initIndex), curIndex = _b[0], setCurIndex = _b[1];
    var _c = useState(initIndex), prevInputIndex = _c[0], setPrevInputIndex = _c[1];
    var handlePropsChange = function () {
        if (inputIndex && inputIndex !== prevInputIndex) {
            setCurIndex(inputIndex);
            setPrevInputIndex(inputIndex);
        }
    };
    var handleClick = function (i) {
        if (i !== curIndex) {
            if (onClickBeforeChangeIndex) {
                onClickBeforeChangeIndex(i, curIndex);
            }
            setCurIndex(i);
            if (onClickAfterChangeIndex) {
                onClickAfterChangeIndex(i);
            }
        }
    };
    var classes = classNames(className, "pagination", (_a = {},
        _a["pagination-" + paginationStyle] = paginationStyle,
        _a));
    handlePropsChange();
    var indicators = [];
    var _loop_1 = function (i) {
        indicators.push(React.createElement("li", { key: i, onClick: function () {
                handleClick(i);
            } },
            React.createElement(Icon, { icon: i === curIndex ? "circle" : ["far", "circle"], iconThemeColor: paginationThemeColor })));
    };
    for (var i = 1; i <= maxIndex; i++) {
        _loop_1(i);
    }
    return (React.createElement("ol", __assign({ className: classes }, restProps), indicators));
};
Pagination.defaultProps = {
    initIndex: 1,
    paginationStyle: "dot",
    paginationThemeColor: "gray-0",
};
export default Pagination;
