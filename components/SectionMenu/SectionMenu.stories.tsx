import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SectionMenu from './SectionMenu';

export default {
  title: 'Header/SectionMenu',
  component: SectionMenu,
  argTypes: {
    onSelected: {
      action: 'onSelected',
    },
  },
} as ComponentMeta<typeof SectionMenu>;

const Template: ComponentStory<typeof SectionMenu> = function SectionMenuTemplate(args) {
  return <SectionMenu {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  categories: [
    {
      id: 1202,
      name: 'Frutas',
    },
    {
      id: 1203,
      name: 'Verduras',
    },
  ],
};
