import { FC } from "react";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { BaseColor, NeutralColor } from "../variables";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export declare type IconThemeColor = BaseColor | NeutralColor;
export interface IconProps extends FontAwesomeIconProps {
    /**
     * The icon you want to use.
     */
    icon: IconProp;
    /**
     * The theme color of the icon.
     */
    iconThemeColor?: IconThemeColor;
}
/**
 * To show an icon provided in Font Awesome.
 *
 * ## How to Import
 * ~~~js
 * import { Icon } from "hanstyle";
 * ~~~
 * ## Props
 * - All the props listed in the props table.
 * - All the props in the FontAwesomeIconProps.
 * @param props
 * @constructor
 */
export declare const Icon: FC<IconProps>;
export default Icon;
