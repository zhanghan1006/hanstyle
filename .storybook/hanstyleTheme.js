import { create } from "@storybook/theming/create";
import Logo from "./Icon - Logo - MergedLarge.svg";

export default create({
  base: "light",

  colorPrimary: "red",
  colorSecondary: "dodgerblue",

  // UI
  appBg: "whitesmoke",
  appContentBg: "white",
  appBorderColor: "gainsboro",
  appBorderRadius: 10,

  // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: "silver",
  barSelectedColor: "dodgerblue",
  barBg: "white",

  // Form colors
  inputBg: "white",
  inputBorder: "gainsboro",
  // inputTextColor: "black",
  // inputBorderRadius: 4,

  // Brand
  brandTitle: "HanStyle",
  brandUrl: "/",
  brandImage: Logo,
});
