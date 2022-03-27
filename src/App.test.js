import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header', () => {
  render(<App />);
  const element = screen.getByText("Forex Rates");
  expect(element).toBeInTheDocument();
});

test('renders USD EUR currency', () => {
  render(<App />);
  const element = screen.getByText("USD / EUR");
  expect(element).toBeInTheDocument();
});
