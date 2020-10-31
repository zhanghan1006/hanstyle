import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Expander, { ExpanderProps } from "./expander";

export default {
  title: "Components/Expander",
  component: Expander,
  argTypes: {
    expanderHeight: {},
  },
} as Meta;

const Template: Story<ExpanderProps> = (args) => {
  const { children, ...restArgs } = args;
  return <Expander {...restArgs}>{children}</Expander>;
};

export const Default = Template.bind({});
Default.args = {};

export const ExpanderHeight = Template.bind({});
ExpanderHeight.args = {
  ...Default.args,
  expanderHeight: 200,
};
