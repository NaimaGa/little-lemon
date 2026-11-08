import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders Little Lemon brand heading', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const brandElements = screen.getAllByText(/Little Lemon/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
