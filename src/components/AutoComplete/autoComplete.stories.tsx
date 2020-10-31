import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import AutoComplete, { AutoCompleteProps } from "./autoComplete";
import ListItem from "../List/listItem";

export default {
  title: "Components/AutoComplete",
  component: AutoComplete,
  argTypes: {
    autoCompleteInitValue: {},
    autoCompleteListWidth: {},
    autoCompleteListHeight: {},
  },
} as Meta;

const Template: Story<AutoCompleteProps> = (args) => {
  const { children, ...restArgs } = args;
  return <AutoComplete {...restArgs}>{children}</AutoComplete>;
};

const generateRandomString = (stringLength: number) => {
  stringLength = stringLength || 8;
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const a = t.length;
  let n = "";
  for (let i = 0; i < stringLength; i++) {
    n += t.charAt(Math.floor(Math.random() * a));
  }
  return n;
};

export const Default = Template.bind({});
Default.args = {
  children: [
    <ListItem>{generateRandomString(4)}</ListItem>,
    <ListItem>{generateRandomString(8)}</ListItem>,
    <ListItem>{generateRandomString(12)}</ListItem>,
    <ListItem>{generateRandomString(16)}</ListItem>,
    <ListItem>{generateRandomString(20)}</ListItem>,
  ],
};

export const InitialValue = Template.bind({});
InitialValue.args = {
  ...Default.args,
  autoCompleteInitValue: "This is the initial value.",
};

export const ListSize = Template.bind({});
ListSize.args = {
  ...Default.args,
  autoCompleteInitValue: "Click Here",
  autoCompleteListWidth: 800,
  autoCompleteListHeight: 400,
};
