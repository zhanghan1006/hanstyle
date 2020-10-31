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
import React, { Children, useEffect, useRef, useState, } from "react";
import classNames from "classnames";
import Input from "../Input/input";
import InputContent from "../Input/inputContent";
import List from "../List/list";
import { CSSTransition } from "react-transition-group";
/**
 * Show relative information based on the current input value.
 *
 * Usually used for search box.
 *
 * ## How to Import
 * ~~~js
 * import { AutoComplete } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All attributes of the HTML &lt;div&gt; element.
 * @param props
 * @constructor
 */
export var AutoComplete = function (props) {
    var className = props.className, children = props.children, autoCompleteInitValue = props.autoCompleteInitValue, autoCompleteListWidth = props.autoCompleteListWidth, autoCompleteListHeight = props.autoCompleteListHeight, restProps = __rest(props, ["className", "children", "autoCompleteInitValue", "autoCompleteListWidth", "autoCompleteListHeight"]);
    var classes = classNames(className, "auto-complete", {});
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var inputContentRef = useRef(null);
    var inputHeight = useRef(0);
    var autoCompleteDivRef = useRef(null);
    var handleChange = function (event) {
        if (event.target.value === "") {
            setIsOpen(false);
        }
        else {
            setIsOpen(true);
        }
    };
    var handleFocus = function () {
        setIsOpen(true);
    };
    var handleClickOutside = function (e) {
        if (isOpen && !autoCompleteDivRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };
    var generateInlineStyle = function () {
        var inlineStyle;
        inlineStyle = {
            position: "absolute",
            top: inputHeight.current + 5 + "px",
            left: 0,
        };
        inlineStyle.width = autoCompleteListWidth + "px";
        inlineStyle.height = autoCompleteListHeight + "px";
        return inlineStyle;
    };
    var listInlineStyle = generateInlineStyle();
    var renderChildren = function () {
        return Children.map(children, function (child) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "ListItem") {
                return childElement;
            }
            else {
                console.error("Warning: AutoComplete has a child which is not a ListItem");
            }
        });
    };
    useEffect(function () {
        var inputContentInputRef = inputContentRef.current.getInputContentInputRef();
        inputHeight.current = inputContentInputRef.current.offsetHeight;
    });
    useEffect(function () {
        window.addEventListener("click", handleClickOutside);
        return function () {
            window.removeEventListener("click", handleClickOutside);
        };
    });
    return (React.createElement("div", __assign({ ref: autoCompleteDivRef, className: classes }, restProps),
        React.createElement(Input, null,
            React.createElement(InputContent, { ref: inputContentRef, inputContentInitValue: autoCompleteInitValue, inputContentOnChangeAfter: handleChange, onFocus: handleFocus })),
        React.createElement(CSSTransition, { in: isOpen, timeout: 300, classNames: "expand-from-top", appear: true, unmountOnExit: true },
            React.createElement(List, { style: listInlineStyle, className: classes, listBorderRadiusSize: "small", listBorderColor: "none", listDividerColor: "none", listShadowSize: "middle", listThemeColor: "orange", listInteractionLevel: "clickable", listInteractionStyle: "lighten-shadow" }, renderChildren()))));
};
AutoComplete.defaultProps = {
    autoCompleteInitValue: "",
    autoCompleteListWidth: 400,
    autoCompleteListHeight: 200,
};
AutoComplete.displayName = "AutoComplete";
export default AutoComplete;
// import React, { FC, useState, ChangeEvent, KeyboardEvent, ReactElement, useEffect, useRef } from 'react'
// import classNames from 'classnames'
// import Input, { InputProps } from '../Input/input'
// import Icon from '../Icon/icon'
// import { CSSTransition } from 'react-transition-group'
// import useDebounce from '../../hooks/useDebounce'
// import useClickOutside from '../../hooks/useClickOutside'
// interface DataSourceObject {
//   value: string;
// }
// export type DataSourceType<T = {}> = T & DataSourceObject
// export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
//   fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
//   onSelect?: (item: DataSourceType) => void;
//   renderOption?: (item: DataSourceType) => ReactElement;
// }
//
// export const AutoComplete: FC<AutoCompleteProps> = (props) => {
//   const {
//     fetchSuggestions,
//     onSelect,
//     value,
//     renderOption,
//     ...restProps
//   } = props
//
//   const [ inputValue, setInputValue ] = useState(value as string)
//   const [ suggestions, setSugestions ] = useState<DataSourceType[]>([])
//   const [ loading, setLoading ] = useState(false)
//   const [ showDropdown, setShowDropdown] = useState(false)
//   const [ highlightIndex, setHighlightIndex] = useState(-1)
//   const triggerSearch = useRef(false)
//   const componentRef = useRef<HTMLDivElement>(null)
//   const debouncedValue = useDebounce(inputValue, 300)
//   useClickOutside(componentRef, () => { setSugestions([])})
//   useEffect(() => {
//     if (debouncedValue && triggerSearch.current) {
//       setSugestions([])
//       const results = fetchSuggestions(debouncedValue)
//       if (results instanceof Promise) {
//         setLoading(true)
//         results.then(data => {
//           setLoading(false)
//           setSugestions(data)
//           if (data.length > 0) {
//             setShowDropdown(true)
//           }
//         })
//       } else {
//         setSugestions(results)
//         setShowDropdown(true)
//         if (results.length > 0) {
//           setShowDropdown(true)
//         }
//       }
//     } else {
//       setShowDropdown(false)
//     }
//     setHighlightIndex(-1)
//   }, [debouncedValue, fetchSuggestions])
//   const highlight = (index: number) => {
//     if (index < 0) index = 0
//     if (index >= suggestions.length) {
//       index = suggestions.length - 1
//     }
//     setHighlightIndex(index)
//   }
//   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
//     switch(e.keyCode) {
//       case 13:
//         if (suggestions[highlightIndex]) {
//           handleSelect(suggestions[highlightIndex])
//         }
//         break
//       case 38:
//         highlight(highlightIndex - 1)
//         break
//       case 40:
//         highlight(highlightIndex + 1)
//         break
//       case 27:
//         setShowDropdown(false)
//         break
//       default:
//         break
//     }
//   }
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value.trim()
//     setInputValue(value)
//     triggerSearch.current = true
//   }
//   const handleSelect = (item: DataSourceType) => {
//     setInputValue(item.value)
//     setShowDropdown(false)
//     if (onSelect) {
//       onSelect(item)
//     }
//     triggerSearch.current = false
//   }
//   const renderTemplate = (item: DataSourceType) => {
//     return renderOption ? renderOption(item) : item.value
//   }
//   const generateDropdown = () => {
//     return (
//       <CSSTransition
//         in={showDropdown || loading}
//         classNames="zoom-in-top"
//         timeout={300}
//         onExited={() => {setSugestions([])}}
//       >
//         <ul className="viking-suggestion-list">
//           { loading &&
//             <div className="suggstions-loading-icon">
//               <Icon icon="spinner" spin/>
//             </div>
//           }
//           {suggestions.map((item, index) => {
//             const cnames = classNames('suggestion-item', {
//               'is-active': index === highlightIndex
//             })
//             return (
//               <li key={index} className={cnames} onClick={() => handleSelect(item)}>
//                 {renderTemplate(item)}
//               </li>
//             )
//           })}
//         </ul>
//       </CSSTransition>
//     )
//   }
//   return (
//     <div className="viking-auto-complete" ref={componentRef}>
//       <Input
//         value={inputValue}
//         onChange={handleChange}
//         onKeyDown={handleKeyDown}
//         {...restProps}
//       />
//       {generateDropdown()}
//     </div>
//   )
// }
//
// export default AutoComplete;
//
