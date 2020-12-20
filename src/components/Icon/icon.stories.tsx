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
