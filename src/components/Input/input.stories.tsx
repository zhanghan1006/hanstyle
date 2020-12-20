import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Input, { InputProps } from "./input";
import InputContent from "./inputContent";
import InputAffix from "./inputAffix";

export default {
  title: "Components/Input",
  component: Input,
  subcomponents: { InputContent, InputAffix },
  argTypes: {
    inputSize: {},
    inputThemeColor: {
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
    inputStyle: {
      control: {
        type: "select",
        options: ["luminous"],
      },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => {
  const { children, ...restArgs } = args;
  return <Input {...restArgs}>{children}</Input>;
};

export const Default = Template.bind({});
Default.args = {
  children: <InputContent />,
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  inputSize: "small",
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  inputSize: "large",
};

export const Blue = Template.bind({});
Blue.args = {
  ...Default.args,
  inputThemeColor: "blue",
};

export const InitialValue = Template.bind({});
InitialValue.args = {
  ...Default.args,
  children: (
    <InputContent inputContentInitValue={"This is the initial value."} />
  ),
};

export const Prefix = Template.bind({});
Prefix.args = {
  ...Default.args,
  children: [<InputAffix>https://</InputAffix>, <InputContent />],
};

export const Suffix = Template.bind({});
Suffix.args = {
  ...Default.args,
  children: [<InputContent />, <InputAffix>.com</InputAffix>],
};

export const PrefixAndSuffix = Template.bind({});
PrefixAndSuffix.args = {
  ...Default.args,
  children: [
    <InputAffix>https://</InputAffix>,
    <InputContent />,
    <InputAffix>.com</InputAffix>,
  ],
};
PrefixAndSuffix.storyName = "Prefix and Suffix";
