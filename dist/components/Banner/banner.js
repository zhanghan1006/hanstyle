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
import React, { Children, cloneElement, useEffect, useState, } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import Button from "../Button/button";
import Pagination from "../Pagination/pagination";
/**
 * To show a group of image in turn.
 *
 * ## How to Import
 * ~~~js
 * import { Banner } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export var Banner = function (props) {
    var className = props.className, children = props.children, initIndex = props.initIndex, autoPlayInterval = props.autoPlayInterval, pauseOnHover = props.pauseOnHover, hideButton = props.hideButton, bannerThemeColor = props.bannerThemeColor, restProps = __rest(props, ["className", "children", "initIndex", "autoPlayInterval", "pauseOnHover", "hideButton", "bannerThemeColor"]);
    var _a = useState(initIndex), curIndex = _a[0], setCurIndex = _a[1];
    var _b = useState(false), isHoverOnBanner = _b[0], setIsHoverOnBanner = _b[1];
    var _c = useState(false), isHoverOnLeftButton = _c[0], setIsHoverOnLeftButton = _c[1];
    var _d = useState(false), isHoverOnRightButton = _d[0], setIsHoverOnRightButton = _d[1];
    var _e = useState(false), isActiveLeftButton = _e[0], setIsActiveLeftButton = _e[1];
    var _f = useState(false), isActiveRightButton = _f[0], setIsActiveRightButton = _f[1];
    var numImage = Children.count(children);
    var classes = classNames(className, "banner", {});
    var handleClickLeftButton = function () {
        setCurIndex(((curIndex + numImage - 2) % numImage) + 1);
    };
    var handleClickRightButton = function () {
        setCurIndex((curIndex % numImage) + 1);
    };
    var handleClickPagination = function (clickedIndex) {
        setCurIndex(clickedIndex);
    };
    var handleMouseEnterBanner = function () {
        setIsHoverOnBanner(true);
    };
    var handleMouseLeaveBanner = function () {
        setIsHoverOnBanner(false);
    };
    var handleMouseEnterLeftButton = function () {
        setIsHoverOnLeftButton(true);
    };
    var handleMouseLeaveLeftButton = function () {
        setIsHoverOnLeftButton(false);
        setIsActiveLeftButton(false);
    };
    var handleMouseEnterRightButton = function () {
        setIsHoverOnRightButton(true);
    };
    var handleMouseLeaveRightButton = function () {
        setIsHoverOnRightButton(false);
        setIsActiveRightButton(false);
    };
    var handleMouseDownLeftButton = function () {
        setIsActiveLeftButton(true);
    };
    var handleMouseUpLeftButton = function () {
        setIsActiveLeftButton(false);
    };
    var handleMouseDownRightButton = function () {
        setIsActiveRightButton(true);
    };
    var handleMouseUpRightButton = function () {
        setIsActiveRightButton(false);
    };
    useEffect(function () {
        var timer;
        if (autoPlayInterval) {
            if (pauseOnHover) {
                if (!isHoverOnBanner) {
                    timer = setInterval(function () {
                        setCurIndex((curIndex % numImage) + 1);
                    }, autoPlayInterval);
                }
            }
            else {
                timer = setInterval(function () {
                    setCurIndex((curIndex % numImage) + 1);
                }, autoPlayInterval);
            }
        }
        return function () {
            if (autoPlayInterval) {
                clearInterval(timer);
            }
        };
    });
    var imageSizes = Children.map(children, function (child) {
        var curChild = child;
        var width = curChild.props.clipSize[1] - curChild.props.clipSize[3];
        var height = curChild.props.clipSize[2] - curChild.props.clipSize[0];
        return { imageWidth: width, imageHeight: height };
    });
    var _g = imageSizes[0], imageWidth = _g.imageWidth, imageHeight = _g.imageHeight;
    var images = Children.map(children, function (child, index) {
        var styles = {
            position: "absolute",
            left: (index - curIndex + 1) * imageWidth + "px",
        };
        return cloneElement(child, { style: styles });
    });
    var divStyle = {
        width: imageWidth + "px",
        height: imageHeight + "px",
    };
    var btnLeftStyle = {
        position: "absolute",
        top: 0.5 * imageHeight - 24 + "px",
        left: (hideButton
            ? isHoverOnBanner
                ? 0.02 * imageWidth
                : -0.02 * imageWidth - 48
            : 0.02 * imageWidth) + "px",
    };
    var btnRightStyle = {
        position: "absolute",
        top: 0.5 * imageHeight - 24 + "px",
        right: (hideButton
            ? isHoverOnBanner
                ? 0.02 * imageWidth
                : -0.02 * imageWidth - 48
            : 0.02 * imageWidth) + "px",
    };
    var paginationStyle = {
        position: "absolute",
        bottom: 0.02 * imageHeight + "px",
        left: 0.5 * imageWidth - 7.986 * numImage + "px",
    };
    return (React.createElement("div", __assign({ style: divStyle, className: classes, onMouseEnter: handleMouseEnterBanner, onMouseLeave: handleMouseLeaveBanner }, restProps),
        images,
        React.createElement(Button, { style: btnLeftStyle, buttonShape: "circle", buttonSize: "large", buttonType: "hollow", buttonThemeColor: bannerThemeColor, onClick: handleClickLeftButton, onMouseEnter: handleMouseEnterLeftButton, onMouseLeave: handleMouseLeaveLeftButton, onMouseDown: handleMouseDownLeftButton, onMouseUp: handleMouseUpLeftButton },
            React.createElement(Icon, { icon: "angle-left", iconThemeColor: isActiveLeftButton
                    ? bannerThemeColor
                    : isHoverOnLeftButton
                        ? bannerThemeColor
                        : "gray-0" })),
        React.createElement(Button, { style: btnRightStyle, buttonShape: "circle", buttonSize: "large", buttonType: "hollow", buttonThemeColor: bannerThemeColor, onClick: handleClickRightButton, onMouseEnter: handleMouseEnterRightButton, onMouseLeave: handleMouseLeaveRightButton, onMouseDown: handleMouseDownRightButton, onMouseUp: handleMouseUpRightButton },
            React.createElement(Icon, { icon: "angle-right", iconThemeColor: isActiveRightButton
                    ? bannerThemeColor
                    : isHoverOnRightButton
                        ? bannerThemeColor
                        : "gray-0" })),
        React.createElement(Pagination, { style: paginationStyle, maxIndex: numImage, initIndex: initIndex, inputIndex: curIndex, paginationStyle: "dot", onClickAfterChangeIndex: handleClickPagination })));
};
Banner.defaultProps = {
    initIndex: 1,
    autoPlayInterval: 3000,
    pauseOnHover: true,
    hideButton: true,
    bannerThemeColor: "orange",
};
export default Banner;
