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
import React, { useRef } from "react";
import classNames from "classnames";
/**
 * A container that can expand to the original space of its children.
 *
 * Usually used when its children is using absolute position, which may cause layout issues.
 *
 * ## How to Import
 * ~~~js
 * import { Expander } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export var Expander = function (props) {
    var className = props.className, children = props.children, expanderHeight = props.expanderHeight, restProps = __rest(props, ["className", "children", "expanderHeight"]);
    var classes = classNames(className, "expander", {});
    var expanderDivRef = useRef(null);
    // useEffect(() => {
    //   // 遍历所有子节点 找出最大高度的子节点 作为expander的高度（实现可能有错）
    //   let s = [];
    //   const findChild = (x: Node) => {
    //     const c = x.childNodes;
    //     for (let i = 0; i < c.length; i++) {
    //       if (c[i].nodeType === 1) {
    //         s.push(c[i]);
    //       }
    //       if (c[i].childNodes) {
    //         findChild(c[i]);
    //       }
    //     }
    //   };
    //   findChild(expanderDivRef.current as any);
    // });
    var expanderDivStyle = { height: expanderHeight };
    return (React.createElement("div", __assign({ style: expanderDivStyle, className: classes, ref: expanderDivRef }, restProps), children));
};
Expander.defaultProps = {};
export default Expander;
