import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Icon, { IconProps } from "./icon";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    icon: {},
    iconThemeColor: {
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

const Template: Story<IconProps> = (args) => {
  const { ...restArgs } = args;
  return <Icon {...restArgs} />;
};

export const Default = Template.bind({});
Default.args = {
  icon: ["fab", "apple"],
};

export const Google = Template.bind({});
Google.args = {
  ...Default.args,
  icon: ["fab", "google"],
};

export const BlueTheme = Template.bind({});
BlueTheme.args = {
  ...Default.args,
  iconThemeColor: "blue",
};
