import React, {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from "react";
import classNames from "classnames";

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    className?: string;
    /**设置 Button 的禁用*/
    disabled?: boolean;
    /**设置 Button 的尺寸*/
    size?: ButtonSize;
    /**设置 Button 的类型*/
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 这是我们的第一个 Button 组件
 * ## Button header
 * ~~~js
 * import { Button } from 'hanstyle'
 * ~~~
 * @param props
 * @constructor
 */
// 下面这个export一定要加
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        disabled,
        size,
        btnType,
        children,
        href,
        ...restProps
    } = props;
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
    });
    if (btnType === 'link' && href) {
        return (
            <a href={href}
               className={classes}
               {...restProps}
            >
                {children}
            </a>
        );
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        );
    }
};

Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}

export default Button;