import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ProductCard from './ProductCard';

const product = {
  id: 1212,
  name: 'Mango',
  category_id: 21,
  price: 1100,
  images: ['https://technext.github.io/ogani/img/product/product-6.jpg'],
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
