import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import List, { ListProps } from "./list";
import ListItem from "./listItem";

export default {
  title: "Components/List",
  component: List,
  subcomponents: { ListItem },
  argTypes: {
    listBorderRadiusSize: {},
    listBorderColor: {
      control: {
        type: "select",
        options: [
          "none",
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
    listDividerColor: {
      control: {
        type: "select",
        options: [
          "none",
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
    listShadowSize: {},
    listThemeColor: {
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
    listInteractionLevel: {},
    listInteractionStyle: {},
  },
} as Meta;

const Template: Story<ListProps> = (args) => {
  const { children, ...restArgs } = args;
  return <List {...restArgs}>{children}</List>;
};

export const Default = Template.bind({});
Default.args = {
  children: [
    <ListItem>This is a ListItem.</ListItem>,
    <ListItem>This is a ListItem.</ListItem>,
    <ListItem>This is a ListItem.</ListItem>,
  ],
};

export const SmallBorderRadius = Template.bind({});
SmallBorderRadius.args = {
  ...Default.args,
  listBorderRadiusSize: "small",
};

export const MiddleBorderRadius = Template.bind({});
MiddleBorderRadius.args = {
  ...Default.args,
  listBorderRadiusSize: "middle",
};

export const LargeBorderRadius = Template.bind({});
LargeBorderRadius.args = {
  ...Default.args,
  listBorderRadiusSize: "large",
};

export const BlueBorder = Template.bind({});
BlueBorder.args = {
  ...Default.args,
  listBorderColor: "blue",
};

export const BlueDivider = Template.bind({});
BlueDivider.args = {
  ...Default.args,
  listDividerColor: "blue",
};

export const SmallShadow = Template.bind({});
SmallShadow.args = {
  ...Default.args,
  listShadowSize: "small",
};

export const MiddleShadow = Template.bind({});
MiddleShadow.args = {
  ...Default.args,
  listShadowSize: "middle",
};

export const LargeShadow = Template.bind({});
LargeShadow.args = {
  ...Default.args,
  listShadowSize: "large",
};

export const BlueTheme = Template.bind({});
BlueTheme.args = {
  ...Default.args,
  listThemeColor: "blue",
};

export const Hoverable = Template.bind({});
Hoverable.args = {
  ...Default.args,
  listInteractionLevel: "hoverable",
  listInteractionStyle: "shadow",
};

export const Clickable = Template.bind({});
Clickable.args = {
  ...Default.args,
  listInteractionLevel: "clickable",
  listInteractionStyle: "shadow",
};

export const Selectable = Template.bind({});
Selectable.args = {
  ...Default.args,
  listInteractionLevel: "selectable",
  listInteractionStyle: "shadow",
};

export const Lighten = Template.bind({});
Lighten.args = {
  ...Default.args,
  listInteractionLevel: "selectable",
  listInteractionStyle: "lighten",
};

export const LightenShadow = Template.bind({});
LightenShadow.args = {
  ...Default.args,
  listInteractionLevel: "selectable",
  listInteractionStyle: "lighten-shadow",
};

export const DisabledListItem = Template.bind({});
DisabledListItem.args = {
  ...Selectable.args,
  children: [
    <ListItem>This is a ListItem.</ListItem>,
    <ListItem listItemDisabled={true}>This is a disabled ListItem.</ListItem>,
    <ListItem>This is a ListItem.</ListItem>,
  ],
};
