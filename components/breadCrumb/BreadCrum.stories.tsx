import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import BreadCrumb from './BreadCrumb';

export default {
  title: 'Header/BreadCrumb',
  component: BreadCrumb,
  argTypes: {
    onSelected: {
      action: 'onSelected',
    },
  },
} as ComponentMeta<typeof BreadCrumb>;

const Template: ComponentStory<typeof BreadCrumb> = function BreadCrumbTemplate(args) {
  return <BreadCrumb {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  pages: [
    {
      id: 1202,
      name: 'Home',
    },
    {
      id: 1203,
      name: 'Shop',
    },
    {
      id: 1204,
      name: 'Shopping cart',
    },
  ],
};
