import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import Button, { ButtonProps } from "./button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    buttonDisabled: {},
    buttonSize: {},
    buttonShape: {},
    buttonThemeColor: {
      control: {
        type: "select",
        options: [
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "cyan",
          "blue",
          "indigo",
          "purple",
          "pink",
          "gray-0",
          "gray-1",
          "gray-2",
          "gray-3",
          "gray-4",
          "gray-5",
          "gray-6",
          "gray-7",
          "gray-8",
          "gray-9",
          "gray-10",
          "gray-11",
          "gray-12",
          "gray-13",
          "gray-14",
          "gray-15",
        ],
      },
    },
    buttonType: {},
    onClick: { table: { disable: true } },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  const { children, ...restArgs } = args;
  return <Button {...restArgs}>{children}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
  onClick: action("onClick"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  buttonDisabled: true,
  children: "Disabled Button",
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  buttonSize: "small",
  children: "Small Button",
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  buttonSize: "large",
  children: "Large Button",
};

export const Rectangular = Template.bind({});
Rectangular.args = {
  ...Default.args,
  buttonShape: "rectangular",
  children: "Rectangular Button",
};

export const Elliptic = Template.bind({});
Elliptic.args = {
  ...Default.args,
  buttonShape: "elliptic",
  children: "Elliptic Button",
};

export const Circle = Template.bind({});
Circle.args = {
  ...Default.args,
  buttonShape: "circle",
  children: "A",
};

export const Blue = Template.bind({});
Blue.args = {
  ...Default.args,
  buttonThemeColor: "blue",
  children: "Blue Button",
};

export const Hollow = Template.bind({});
Hollow.args = {
  ...Default.args,
  buttonType: "hollow",
  children: "Hollow Button",
};

export const Inverse = Template.bind({});
Inverse.args = {
  ...Default.args,
  buttonType: "inverse",
  children: "Inverse Button",
};
