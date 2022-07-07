import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Header/Footer',
  component: Footer,
  argTypes: {
    onSubmit: {
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = function FooterTemplate(args) {
  return <Footer {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  textButton: 'Ingresar E-mail',
};
