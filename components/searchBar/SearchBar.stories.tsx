import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from './SearchBar';

export default {
  title: 'Header/SearchBar',
  component: SearchBar,
  argTypes: {
    onSubmit: {
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = function SearchBarTemplate(args) {
  return <SearchBar {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  textButton: 'Buscar',
};
