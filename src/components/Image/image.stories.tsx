import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Image, { ImageProps } from "./image";
import Banner3 from "../../image/banner-3.jpg";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: {},
    stretchSize: {},
    clipSize: {},
  },
} as Meta;

const Template: Story<ImageProps> = (args) => {
  const { children, ...restArgs } = args;
  return <Image {...restArgs} />;
};

export const Default = Template.bind({});
Default.args = {
  src: Banner3,
};

export const Stretch = Template.bind({});
Stretch.args = {
  ...Default.args,
  stretchSize: [800, 200],
};

export const Clip = Template.bind({});
Clip.args = {
  ...Default.args,
  clipSize: [50, 600, 150, 200],
};

export const StretchAndClip = Template.bind({});
StretchAndClip.args = {
  ...Default.args,
  stretchSize: [800, 200],
  clipSize: [50, 600, 150, 200],
};
