import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  it('Should render the default component', () => {
    const mockSubmit = jest.fn();
    const { getByText } = render(<SearchBar onSubmit={mockSubmit} textButton='buscar' />);
    const label = getByText('Todas las categorias');
    expect(label).toBeDefined();
  });

  it('Should render the textButton in UpperCase', () => {
    const mockSubmit = jest.fn();
    const textButton = 'buscar';
    const { getByRole } = render(<SearchBar onSubmit={mockSubmit} textButton={textButton} />);
    const button = getByRole('button');
    expect(button).toBeDefined();
    expect(button.innerHTML).toEqual(textButton.toUpperCase());
  });

  it('Should call onSubmit event and send the input text', () => {
    const mockSubmit = jest.fn();
    const textButton = 'buscar';
    const { getByRole } = render(<SearchBar onSubmit={mockSubmit} textButton={textButton} />);
    const button = getByRole('button');
    const inputText = getByRole('textbox');
    fireEvent.change(inputText, { target: { value: 'maracuya' } });
    fireEvent.click(button);
    expect(mockSubmit).toBeCalledWith({ search: 'maracuya' });
  });
});
