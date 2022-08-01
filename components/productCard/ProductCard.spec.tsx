import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ProductCard from './ProductCard';

const product = {
  id: 1212,
  name: 'Mango',
  category_id: 21,
  price: 1100,
  images: ['https://technext.github.io/ogani/img/product/product-6.jpg'],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis convallis purus. Donec dignissim eleifend sem, eu tempor libero ornare at. Phasellus condimentum semper efficitur. Suspendisse potenti. Praesent semper, orci ut vestibulum dictum, arcu nulla tincidunt tortor, et commodo odio mi quis orci. In luctus felis et dolor rhoncus, non interdum enim venenatis. Vestibulum consectetur, augue quis pellentesque dictum, ante dui tempor odio, eu finibus ex libero quis nulla. Nullam auctor elit in enim viverra, id viverra lectus euismod. Etiam et turpis neque. Aenean sollicitudin mauris eu ante malesuada volutpat. Praesent ipsum arcu, feugiat eu mi vitae, consectetur malesuada erat. Proin varius tincidunt mi, ut vestibulum nisl efficitur egestas.',
  score: 4.5,
};

describe('ProductCard component', () => {
  it('Should render the default component', () => {
    const mockFavorite = jest.fn();
    const mockCart = jest.fn();
    const { getByText } = render(<ProductCard onFavorite={mockFavorite} onCart={mockCart} product={product} />);
    const productName = getByText('Mango');
    expect(productName).toBeDefined();
  });

  it('Should call the event when favorite is selected', () => {
    const mockFavorite = jest.fn();
    const mockCart = jest.fn();
    const { getByTestId } = render(<ProductCard onFavorite={mockFavorite} onCart={mockCart} product={product} />);
    const button = getByTestId('custom-favorite');
    fireEvent.click(button);
    expect(mockFavorite).toHaveBeenCalledTimes(1);
  });

  it('Should call the event when cart is selected', () => {
    const mockFavorite = jest.fn();
    const mockCart = jest.fn();
    const { getByTestId } = render(<ProductCard onFavorite={mockFavorite} onCart={mockCart} product={product} />);
    const button = getByTestId('custom-cart');
    fireEvent.click(button);
    expect(mockCart).toHaveBeenCalledTimes(1);
  });
});
