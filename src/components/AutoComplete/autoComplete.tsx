import React, {
  Children,
  CSSProperties,
  FC,
  FunctionComponentElement,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import Input from "../Input/input";
import InputContent, { IInputContentRef } from "../Input/inputContent";
import List from "../List/list";
import { CSSTransition } from "react-transition-group";
import { ListItemProps } from "../List/listItem";

export interface AutoCompleteProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The initial value of the AutoComplete component when it is mounted.
   */
  autoCompleteInitValue?: string;
  /**
   * Width of the dropdown list in px.
   */
  autoCompleteListWidth?: number;
  /**
   * Height of the dropdown list in px.
   */
  autoCompleteListHeight?: number;
}

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
export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    className,
    children,
    autoCompleteInitValue,
    autoCompleteListWidth,
    autoCompleteListHeight,
    ...restProps
  } = props;
  const classes = classNames(className, "auto-complete", {});
  const [isOpen, setIsOpen] = useState(false);
  const inputContentRef = useRef<IInputContentRef>(null);
  let inputHeight = useRef(0);
  const autoCompleteDivRef = useRef(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  const handleFocus = () => {
    setIsOpen(true);
  };
  const handleClickOutside = (e: MouseEvent) => {
    if (isOpen && !(autoCompleteDivRef as any).current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  const generateInlineStyle = () => {
    let inlineStyle: CSSProperties;
    inlineStyle = {
      position: "absolute",
      top: `${inputHeight.current + 5}px`,
      left: 0,
    };
    inlineStyle.width = `${autoCompleteListWidth}px`;
    inlineStyle.height = `${autoCompleteListHeight}px`;
    return inlineStyle;
  };
  const listInlineStyle = generateInlineStyle();
  const renderChildren = () => {
    return Children.map(children, (child) => {
      const childElement = child as FunctionComponentElement<ListItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "ListItem") {
        return childElement;
      } else {
        console.error(
          "Warning: AutoComplete has a child which is not a ListItem"
        );
      }
    });
  };
  useEffect(() => {
    const inputContentInputRef = inputContentRef.current!.getInputContentInputRef();
    inputHeight.current = (inputContentInputRef as any).current.offsetHeight;
  });
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });
  return (
    <div ref={autoCompleteDivRef} className={classes} {...restProps}>
      <Input>
        <InputContent
          ref={inputContentRef}
          inputContentInitValue={autoCompleteInitValue}
          inputContentOnChangeAfter={handleChange}
          onFocus={handleFocus}
        />
      </Input>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={`expand-from-top`}
        appear
        unmountOnExit={true}
      >
        <List
          style={listInlineStyle}
          className={classes}
          listBorderRadiusSize={"small"}
          listBorderColor={"none"}
          listDividerColor={"none"}
          listShadowSize={"middle"}
          listThemeColor={"orange"}
          listInteractionLevel={"clickable"}
          listInteractionStyle={"lighten-shadow"}
        >
          {renderChildren()}
        </List>
      </CSSTransition>
    </div>
  );
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
