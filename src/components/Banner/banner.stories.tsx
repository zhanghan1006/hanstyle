import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Banner, { BannerProps } from "./banner";
import Image from "../Image/image";
import Banner1 from "../../image/banner-1.jpg";
import Banner2 from "../../image/banner-2.jpg";
import Banner3 from "../../image/banner-3.jpg";
import Banner4 from "../../image/banner-4.jpg";
import Banner5 from "../../image/banner-5.jpg";
import Banner6 from "../../image/banner-6.jpg";

export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {
    initIndex: {},
    autoPlayInterval: {},
    pauseOnHover: {},
    hideButton: {},
    bannerThemeColor: {
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

const Template: Story<BannerProps> = (args) => {
  const { children, ...restArgs } = args;
  return <Banner {...restArgs}>{children}</Banner>;
};

export const Default = Template.bind({});
Default.args = {
  children: [
    <Image
      src={Banner1}
      stretchSize={[960, 303]}
      clipSize={[0, 960, 303, 0]}
    />,
    <Image
      src={Banner2}
      stretchSize={[960, 303]}
      clipSize={[0, 960, 303, 0]}
    />,
    <Image
      src={Banner3}
      stretchSize={[960, 303]}
      clipSize={[0, 960, 303, 0]}
    />,
    <Image
      src={Banner4}
      stretchSize={[960, 303]}
      clipSize={[0, 960, 303, 0]}
    />,
    <Image
      src={Banner5}
      stretchSize={[960, 303]}
      clipSize={[0, 960, 303, 0]}
    />,
    <Image
      src={Banner6}
      stretchSize={[960, 303]}
      clipSize={[0, 960, 303, 0]}
    />,
  ],
};

export const InitialIndex = Template.bind({});
InitialIndex.args = {
  ...Default.args,
  initIndex: 2,
};

export const AutoPlayDisabled = Template.bind({});
AutoPlayDisabled.args = {
  ...Default.args,
  autoPlayInterval: 0,
};

export const FastAutoPlay = Template.bind({});
FastAutoPlay.args = {
  ...Default.args,
  autoPlayInterval: 1000,
};

export const NoPauseOnHover = Template.bind({});
NoPauseOnHover.args = {
  ...Default.args,
  pauseOnHover: false,
};

export const AlwaysShowButton = Template.bind({});
AlwaysShowButton.args = {
  ...Default.args,
  hideButton: false,
};

export const BlueTheme = Template.bind({});
BlueTheme.args = {
  ...Default.args,
  bannerThemeColor: "blue",
};
