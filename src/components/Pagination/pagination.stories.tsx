import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Pagination, { PaginationProps } from "./pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    maxIndex: {},
    initIndex: {},
    inputIndex: {
      control: {
        disable: true,
      },
    },
    paginationStyle: {
      control: {
        type: "select",
        options: ["dot"],
      },
    },
    paginationThemeColor: {
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
    onClickBeforeChangeIndex: {},
    onClickAfterChangeIndex: {},
  },
} as Meta;

const Template: Story<PaginationProps> = (args) => {
  const { children, ...restArgs } = args;
  return <Pagination {...restArgs}>{children}</Pagination>;
};

export const Default = Template.bind({});
Default.args = {
  maxIndex: 5,
};

export const InitialIndex = Template.bind({});
InitialIndex.args = {
  ...Default.args,
  initIndex: 2,
};

export const BlueTheme = Template.bind({});
BlueTheme.args = {
  ...Default.args,
  paginationThemeColor: "blue",
};
