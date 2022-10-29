import { render, screen } from '@testing-library/react';
import BraidsByTifeh from './BraidsByTifeh';

test('renders learn react link', () => {
  render(<BraidsByTifeh />);
  const title = screen.getByText('Braids By Tifeh');
  expect(title).toBeInTheDocument();
});
