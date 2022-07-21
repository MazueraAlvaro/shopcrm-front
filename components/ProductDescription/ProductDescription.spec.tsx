import React from 'react';

import { render } from '@testing-library/react';

import ProductDescription from './ProductDescription';

const ProductInform = {
  id: 1212,
  name: 'Mango',
  category_id: 21,
  price: 20000,
  images: ['https://technext.github.io/ogani/img/product/product-6.jpg'],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis convallis purus. Donec dignissim eleifend sem, eu tempor libero ornare at. Phasellus condimentum semper efficitur. Suspendisse potenti. Praesent semper, orci ut vestibulum dictum, arcu nulla tincidunt tortor, et commodo odio mi quis orci. In luctus felis et dolor rhoncus, non interdum enim venenatis. Vestibulum consectetur, augue quis pellentesque dictum, ante dui tempor odio, eu finibus ex libero quis nulla. Nullam auctor elit in enim viverra, id viverra lectus euismod. Etiam et turpis neque. Aenean sollicitudin mauris eu ante malesuada volutpat. Praesent ipsum arcu, feugiat eu mi vitae, consectetur malesuada erat. Proin varius tincidunt mi, ut vestibulum nisl efficitur egestas.',
  score: 4.5,
};

describe('ProductDescription Component', () => {
  it('Should render the default component', () => {
    const { getByText } = render(<ProductDescription ProductInfo={ProductInform} />);
    const span = getByText('Mango');
    expect(span).toBeDefined();
  });
  it('It should rate the product when the score is Integer', () => {
    const score = 3;
    ProductInform.score = score;
    const { getByTestId } = render(<ProductDescription ProductInfo={ProductInform} />);
    const div = getByTestId('rating-div');
    expect(div.childElementCount).toBe(score);
  });

  it('It should rate the product when the score is not Integer', () => {
    ProductInform.score = 4.5;
    const { getByTestId } = render(<ProductDescription ProductInfo={ProductInform} />);
    const div = getByTestId('rating-div');
    const halfStar = div.children.item(div.children.length - 1).className;
    expect(halfStar).toContain('fa-star-half-o');
    const fullStars = div.getElementsByClassName('fa-star');
    expect(fullStars.length).toBe(Math.floor(ProductInform.score));
  });
});
