import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SupportBar from './SupportBar';

export default {
  title: 'Header/SupportBar',
  component: SupportBar,
  argTypes: {
    onSelected: {
      action: 'onSelected',
    },
    telNumber: {
      control: {
        type: 'number',
      },
    },
  },
} as ComponentMeta<typeof SupportBar>;

const Template: ComponentStory<typeof SupportBar> = function SectionMenuTemplate(args) {
  return <SupportBar {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  telNumber: '3189776689',
};
