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
 * A container that contains some other components. They usually have some relationships.
 *
 * ## How to Import
 * ~~~js
 * import { Card } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export var Card = function (props) {
    var _a;
    var className = props.className, children = props.children, cardShape = props.cardShape, cardHoverShadow = props.cardHoverShadow, restProps = __rest(props, ["className", "children", "cardShape", "cardHoverShadow"]);
    var classes = classNames(className, "card", (_a = {},
        _a["card-" + cardShape] = cardShape,
        _a["card-hover-shadow"] = cardHoverShadow,
        _a));
    return (React.createElement("div", __assign({ className: classes }, restProps), children));
};
Card.defaultProps = {
    cardShape: "rounded",
    cardHoverShadow: true,
};
export default Card;
