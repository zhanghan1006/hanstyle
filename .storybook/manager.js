import { addons } from "@storybook/addons";
import hanstyleTheme from "./hanstyleTheme";
import "./titleAddon";

addons.setConfig({
  theme: hanstyleTheme,
});
