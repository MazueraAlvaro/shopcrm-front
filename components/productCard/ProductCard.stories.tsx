import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductCard from './ProductCard';

export default {
  title: 'List/ProductCard',
  component: ProductCard,
  argTypes: {
    onFavorite: {
      action: 'clicked',
    },
    onCart: {
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = function ProductCardTemplate(args) {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat'>
      <ProductCard {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  product: {
    id: 1212,
    name: 'Mango',
    category_id: 21,
    price: 1100,
    images: ['https://technext.github.io/ogani/img/product/product-6.jpg'],
  },
};
