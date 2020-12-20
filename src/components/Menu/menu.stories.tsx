import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import Submenu from "./submenu";

export default {
  title: "Components/Menu",
  component: Menu,
  subcomponents: { MenuItem, Submenu },
  argTypes: {
    menuInitIndex: {},
    menuStyle: {},
    menuThemeColor: {
      control: {
        type: "select",
        options: [
          "blue",
          "purple",
          "pink",
          "red",
          "orange",
          "yellow",
          "green",
          "gray",
        ],
      },
    },
  },
} as Meta;

const Template: Story<MenuProps> = (args) => {
  const { children, ...restArgs } = args;
  return <Menu {...restArgs}>{children}</Menu>;
};

export const Default = Template.bind({});
Default.args = {
  children: [
    <MenuItem>Menu Item 1</MenuItem>,
    <MenuItem>Menu Item 2</MenuItem>,
    <MenuItem>Menu Item 3</MenuItem>,
    <MenuItem>Menu Item 4</MenuItem>,
    <MenuItem>Menu Item 5</MenuItem>,
  ],
};

export const InitialIndex = Template.bind({});
InitialIndex.args = {
  ...Default.args,
  menuInitIndex: [1],
};

export const BorderTop = Template.bind({});
BorderTop.args = {
  ...Default.args,
  menuStyle: "border-top",
};

export const BorderBottom = Template.bind({});
BorderBottom.args = {
  ...Default.args,
  menuStyle: "border-bottom",
};

export const BlueTheme = Template.bind({});
BlueTheme.args = {
  ...Default.args,
  menuThemeColor: "blue",
};

export const MenuItemDisabled = Template.bind({});
MenuItemDisabled.args = {
  ...Default.args,
  children: [
    <MenuItem>Normal</MenuItem>,
    <MenuItem>Normal</MenuItem>,
    <MenuItem menuItemDisabled={true}>Disabled</MenuItem>,
    <MenuItem>Normal</MenuItem>,
    <MenuItem>Normal</MenuItem>,
  ],
};

export const WithSubmenu = Template.bind({});
WithSubmenu.args = {
  ...Default.args,
  children: [
    <MenuItem>Menu Item 1</MenuItem>,
    <MenuItem>Menu Item 2</MenuItem>,
    <Submenu submenuTitle={"Submenu Title"}>
      <MenuItem>Submenu Item 1</MenuItem>
      <MenuItem>Submenu Item 2</MenuItem>
      <MenuItem>Submenu Item 3</MenuItem>
    </Submenu>,
    <MenuItem>Menu Item 3</MenuItem>,
    <MenuItem>Menu Item 4</MenuItem>,
  ],
};

export const SubmenuDisabled = Template.bind({});
SubmenuDisabled.args = {
  ...WithSubmenu.args,
  children: [
    <MenuItem>Menu Item 1</MenuItem>,
    <MenuItem>Menu Item 2</MenuItem>,
    <Submenu submenuTitle={"Disabled Submenu"} submenuDisabled={true}>
      <MenuItem>Submenu Item 1</MenuItem>
      <MenuItem>Submenu Item 2</MenuItem>
      <MenuItem>Submenu Item 3</MenuItem>
    </Submenu>,
    <MenuItem>Menu Item 3</MenuItem>,
    <MenuItem>Menu Item 4</MenuItem>,
  ],
};

export const SubmenuSelectable = Template.bind({});
SubmenuSelectable.args = {
  ...WithSubmenu.args,
  children: [
    <MenuItem>Menu Item 1</MenuItem>,
    <MenuItem>Menu Item 2</MenuItem>,
    <Submenu submenuTitle={"Selectable Submenu"} submenuSelectable={true}>
      <MenuItem>Submenu Item 1</MenuItem>
      <MenuItem>Submenu Item 2</MenuItem>
      <MenuItem>Submenu Item 3</MenuItem>
    </Submenu>,
    <MenuItem>Menu Item 3</MenuItem>,
    <MenuItem>Menu Item 4</MenuItem>,
  ],
};

export const SubmenuClickTrigger = Template.bind({});
SubmenuClickTrigger.args = {
  ...WithSubmenu.args,
  children: [
    <MenuItem>Menu Item 1</MenuItem>,
    <MenuItem>Menu Item 2</MenuItem>,
    <Submenu submenuTitle={"Selectable Submenu"} submenuTrigger={"click"}>
      <MenuItem>Submenu Item 1</MenuItem>
      <MenuItem>Submenu Item 2</MenuItem>
      <MenuItem>Submenu Item 3</MenuItem>
    </Submenu>,
    <MenuItem>Menu Item 3</MenuItem>,
    <MenuItem>Menu Item 4</MenuItem>,
  ],
};
