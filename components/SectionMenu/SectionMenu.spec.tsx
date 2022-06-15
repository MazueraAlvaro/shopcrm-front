import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import SectionMenu from './SectionMenu';

const categories = [
  {
    id: 1202,
    name: 'Frutas',
  },
  {
    id: 1203,
    name: 'Verduras',
  },
];

describe('SectionMenu component', () => {
  it('Should render the default component', () => {
    const mockClick = jest.fn();
    const { getByText } = render(<SectionMenu onSelected={mockClick} categories={categories} />);
    const categoryElement = getByText('Verduras');
    expect(categoryElement).toBeDefined();
  });
  it('Should call the event when a category is selected', () => {
    const mockClick = jest.fn();
    const { getByText } = render(<SectionMenu onSelected={mockClick} categories={categories} />);
    const categoryElement = getByText('Frutas');
    fireEvent.click(categoryElement);
    expect(mockClick).toBeCalledWith({
      id: 1202,
      name: 'Frutas',
    });
  });
});
