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
 * To process and show an image.
 *
 * ## How to Import
 * ~~~js
 * import { Image } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;img&gt; element.
 * @param props
 * @constructor
 */
export var Image = function (props) {
    var className = props.className, children = props.children, src = props.src, alt = props.alt, stretchSize = props.stretchSize, clipSize = props.clipSize, restProps = __rest(props, ["className", "children", "src", "alt", "stretchSize", "clipSize"]);
    var _a = stretchSize ? stretchSize : [-1, -1], stretchWidth = _a[0], stretchHeight = _a[1];
    var _b = clipSize
        ? clipSize
        : [-1, -1, -1, -1], clipTop = _b[0], clipRight = _b[1], clipDown = _b[2], clipLeft = _b[3];
    var classes = classNames(className, "image");
    var outerDivStyle = clipTop >= 0 && clipRight >= 0 && clipDown >= 0 && clipLeft >= 0
        ? {
            position: "relative",
        }
        : {};
    var innerDivStyle = clipTop >= 0 && clipRight >= 0 && clipDown >= 0 && clipLeft >= 0
        ? {
            position: "absolute",
            clip: "rect(" + clipTop + "px " + clipRight + "px " + clipDown + "px " + clipLeft + "px)",
            top: -clipTop + "px",
            left: -clipLeft + "px",
        }
        : {};
    var imgStyle = stretchWidth >= 0 && stretchHeight >= 0
        ? {
            position: "absolute",
            width: stretchWidth + "px",
            height: stretchHeight + "px",
        }
        : {};
    return (React.createElement("div", __assign({ className: classes, style: outerDivStyle }, restProps),
        React.createElement("div", { style: innerDivStyle },
            React.createElement("img", { src: src, alt: alt, style: imgStyle }))));
};
Image.defaultProps = {};
export default Image;
