import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component', () => {
  it('Should render the default component', () => {
    const mockSubmit = jest.fn();
    const { getByText } = render(<Footer onEnterText={mockSubmit} textButton='Ingresar E-mail' />);
    const label = getByText('Get E-mail updates about our latest shop and special offers.');
    expect(label).toBeDefined();
  });

  it('Should render the textButton in UpperCase', () => {
    const mockSubmit = jest.fn();
    const textButton = 'Ingresar E-mail';
    const { getByRole } = render(<Footer onEnterText={mockSubmit} textButton={textButton} />);
    const button = getByRole('button');
    expect(button).toBeDefined();
    expect(button.innerHTML).toEqual(textButton.toUpperCase());
  });
  it('Should call onEnterText event and send the input text', () => {
    const mockSubmit = jest.fn();
    const textButton = 'Ingresar E-mail';
    const { getByRole } = render(<Footer onEnterText={mockSubmit} textButton={textButton} />);
    const button = getByRole('button');
    const inputText = getByRole('textbox');
    fireEvent.change(inputText, { target: { value: 'example@hotmail.com' } });
    fireEvent.click(button);
    expect(mockSubmit).toBeCalledWith({ enterText: 'example@hotmail.com' });
  });
});
