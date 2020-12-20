import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Divider, { DividerProps } from "./divider";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    dividerStyle: {},
    dividerTextPosition: {},
    dividerLineColor: {
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

const Template: Story<DividerProps> = (args) => {
  const { children, ...restArgs } = args;
  return <Divider {...restArgs}>{children}</Divider>;
};

export const Default = Template.bind({});
Default.args = {
  children: "Plain Text",
};

export const PlainLeft = Template.bind({});
PlainLeft.args = {
  ...Default.args,
  dividerStyle: "plain",
  dividerTextPosition: "left",
  children: "Left",
};

export const PlainCenter = Template.bind({});
PlainCenter.args = {
  ...Default.args,
  dividerStyle: "plain",
  dividerTextPosition: "center",
  children: "Center",
};

export const PlainRight = Template.bind({});
PlainRight.args = {
  ...Default.args,
  dividerStyle: "plain",
  dividerTextPosition: "right",
  children: "Right",
};

export const Blue = Template.bind({});
Blue.args = {
  ...Default.args,
  dividerLineColor: "blue",
};
