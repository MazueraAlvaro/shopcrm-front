import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import BreadCrumb from './BreadCrumb';

const pages = [
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
    name: 'Shopping Cart',
  },
];

describe('BreadCrumb component', () => {
  it('Should render the default component', () => {
    const mockClick = jest.fn();
    const { getByText } = render(<BreadCrumb onSelected={mockClick} pages={pages} />);
    const pageElement = getByText('Home');
    expect(pageElement).toBeDefined();
  });
  it('Should call the event when a page is selected', () => {
    const mockClick = jest.fn();
    const { getByText } = render(<BreadCrumb onSelected={mockClick} pages={pages} />);
    const categoryElement = getByText('Shop');
    fireEvent.click(categoryElement);
    expect(mockClick).toBeCalledWith({
      id: 1203,
      name: 'Shop',
    });
  });
});
