import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import SupportBar from './SupportBar';

describe('SupportBar component', () => {
  it('Should render the default component', () => {
    const { getByText } = render(<SupportBar telNumber='1234567891' />);
    const span = getByText('support 24/7 time');
    expect(span).toBeDefined();
  });
  it('Should show the number with the right format when its a correct number', () => {
    const { getByRole } = render(<SupportBar telNumber='1234567891' />);
    const h5 = getByRole('heading', { level: 5 });
    expect(h5.innerHTML).toBe('+57-123-456-7891');
  });
  it('Should show the default number when the number has less than 10 digits', () => {
    const { getByRole } = render(<SupportBar telNumber='123456789' />);
    const h5 = getByRole('heading', { level: 5 });
    expect(h5.innerHTML).toBe('+57-000-000-0000');
  });
  it('Should show the last ten digits with the right formta, when the number has more than 10 digits', () => {
    const { getByRole } = render(<SupportBar telNumber='12345678901' />);
    const h5 = getByRole('heading', { level: 5 });
    expect(h5.innerHTML).toBe('+57-234-567-8901');
  });
});
