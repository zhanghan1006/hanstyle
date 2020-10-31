import React, { CSSProperties, FC, HTMLAttributes, useRef } from "react";
import classNames from "classnames";

export interface ExpanderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Height of the expander.
   */
  expanderHeight?: number;
}

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
export const Expander: FC<ExpanderProps> = (props) => {
  const { className, children, expanderHeight, ...restProps } = props;
  const classes = classNames(className, "expander", {});
  const expanderDivRef = useRef(null);
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
  const expanderDivStyle: CSSProperties = { height: expanderHeight };
  return (
    <div
      style={expanderDivStyle}
      className={classes}
      ref={expanderDivRef}
      {...restProps}
    >
      {children}
    </div>
  );
};

Expander.defaultProps = {};

export default Expander;
