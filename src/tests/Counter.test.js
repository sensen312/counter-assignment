import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter message', () => {
  render(<Counter />);
  const counterMsg = screen.getByText(/Counter/i);
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const countE = screen.getByTestId('count');
  expect(countE).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const incButton = screen.getByText('+');
  fireEvent.click(incButton);
  const countE = screen.getByTestId('count');
  expect(countE).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const decButton = screen.getByText('-');
  fireEvent.click(decButton);
  const countE = screen.getByTestId('count');
  expect(countE).toHaveTextContent('-1');
});
