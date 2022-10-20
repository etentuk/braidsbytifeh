import React from 'react';
import { render, screen } from '@testing-library/react';
import BraidsByTifeh from './BraidsByTifeh';

test('renders learn react link', () => {
  render(<BraidsByTifeh />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
