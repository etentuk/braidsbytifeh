import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders correctly', () => {
  render(<App />);
  const title = screen.getByText('Braids By Tifeh');
  expect(title).toBeInTheDocument();
});
