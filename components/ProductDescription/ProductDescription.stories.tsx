import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductDescription from './ProductDescription';

export default {
  title: 'Header/ProductDescription',
  component: ProductDescription,
  argTypes: {
    onSelected: {
      action: 'onSelected',
    },
  },
} as ComponentMeta<typeof ProductDescription>;

const Template: ComponentStory<typeof ProductDescription> = function ProductDescriptionTemplate(args) {
  return <ProductDescription {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  ProductInfo: {
    id: 1212,
    name: 'Derly',
    category_id: 21,
    price: 20000,
    images: ['https://technext.github.io/ogani/img/product/product-6.jpg'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis convallis purus. Donec dignissim eleifend sem, eu tempor libero ornare at. Phasellus condimentum semper efficitur. Suspendisse potenti. Praesent semper, orci ut vestibulum dictum, arcu nulla tincidunt tortor, et commodo odio mi quis orci. In luctus felis et dolor rhoncus, non interdum enim venenatis. Vestibulum consectetur, augue quis pellentesque dictum, ante dui tempor odio, eu finibus ex libero quis nulla. Nullam auctor elit in enim viverra, id viverra lectus euismod. Etiam et turpis neque. Aenean sollicitudin mauris eu ante malesuada volutpat. Praesent ipsum arcu, feugiat eu mi vitae, consectetur malesuada erat. Proin varius tincidunt mi, ut vestibulum nisl efficitur egestas.',
    score: 4.5,
  },
};
