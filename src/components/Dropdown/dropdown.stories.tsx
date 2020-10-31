import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Dropdown, { DropdownProps } from "./dropdown";
import DropdownButton from "./dropdownButton";
import DropdownList from "./dropdownList";
import ListItem from "../List/listItem";
import Button from "../Button/button";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  subcomponents: { DropdownButton, DropdownList },
  argTypes: {
    dropdownDisabled: {},
    dropdownTrigger: {},
    dropdownThemeColor: {
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
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => {
  const { children, ...restArgs } = args;
  return <Dropdown {...restArgs}>{children}</Dropdown>;
};

export const Default = Template.bind({});
Default.args = {
  children: [
    <DropdownButton>
      <Button>Dropdown Button</Button>
    </DropdownButton>,
    <DropdownList>
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2</ListItem>
      <ListItem>List Item 3</ListItem>
      <ListItem>List Item 4</ListItem>
      <ListItem>List Item 5</ListItem>
    </DropdownList>,
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  dropdownDisabled: true,
};

export const ClickTrigger = Template.bind({});
ClickTrigger.args = {
  ...Default.args,
  dropdownTrigger: "click",
};

export const BlueTheme = Template.bind({});
BlueTheme.args = {
  ...Default.args,
  dropdownThemeColor: "blue",
};

export const ListSize = Template.bind({});
ListSize.args = {
  ...Default.args,
  children: [
    <DropdownButton>
      <Button>Dropdown Button</Button>
    </DropdownButton>,
    <DropdownList
      dropdownListWidth={400}
      dropdownListHeight={400}
      dropdownListPlacement={"bottomRight"}
    >
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2</ListItem>
      <ListItem>List Item 3</ListItem>
      <ListItem>List Item 4</ListItem>
      <ListItem>List Item 5</ListItem>
    </DropdownList>,
  ],
};

export const RightBottomList = Template.bind({});
RightBottomList.args = {
  ...Default.args,
  children: [
    <DropdownButton>
      <Button>Dropdown Button</Button>
    </DropdownButton>,
    <DropdownList dropdownListPlacement={"rightBottom"}>
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2</ListItem>
      <ListItem>List Item 3</ListItem>
      <ListItem>List Item 4</ListItem>
      <ListItem>List Item 5</ListItem>
    </DropdownList>,
  ],
};
