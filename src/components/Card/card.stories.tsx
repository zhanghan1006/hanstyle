import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Card, { CardProps } from "./card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    cardShape: {},
    cardHoverShadow: {},
  },
} as Meta;

const Template: Story<CardProps> = (args) => {
  const { children, ...restArgs } = args;
  return <Card {...restArgs}>{children}</Card>;
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <p>Some other components here.</p>
      <br />
      <p>Some other components here.</p>
      <br />
      <p>Some other components here.</p>
      <br />
      <p>Some other components here.</p>
      <br />
      <p>Some other components here.</p>
    </>
  ),
};

export const Rectangular = Template.bind({});
Rectangular.args = {
  ...Default.args,
  cardShape: "rectangular",
};

export const NoHoverShadow = Template.bind({});
NoHoverShadow.args = {
  ...Default.args,
  cardHoverShadow: false,
};
