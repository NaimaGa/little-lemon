import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import OrderOnlinePage from './pages/OrderOnlinePage';
import LoginPage from './pages/LoginPage';
import BookingForm from './Components/BookingForm';

// Helper to render within required providers
const renderWithProviders = (ui) => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>{ui}</CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('Completed Little Lemon Pages & Functionality', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // Test About Page
  test('renders AboutPage with heritage story and Mario & Adrian', () => {
    renderWithProviders(<AboutPage />);
    expect(screen.getByRole('heading', { name: /About Little Lemon/i })).toBeInTheDocument();
    expect(screen.getByText(/Brothers Mario & Adrian/i)).toBeInTheDocument();
    expect(screen.getByText(/30\+/i)).toBeInTheDocument();
  });

  // Test Menu Page
  test('renders MenuPage with dishes and category filtering', () => {
    renderWithProviders(<MenuPage />);
    expect(screen.getByRole('heading', { name: /Our Menu/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Greek Salad/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Bruschetta/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Lemon Dessert/i).length).toBeGreaterThan(0);

    // Filter to Drinks
    const drinksTab = screen.getByRole('tab', { name: /Drinks/i });
    fireEvent.click(drinksTab);
    expect(screen.getByText(/Fresh Mint Lemonade/i)).toBeInTheDocument();
  });

  // Test Order Online Page & Cart Controls
  test('OrderOnlinePage supports adding items, updating quantities, and demo order checkout', () => {
    renderWithProviders(<OrderOnlinePage />);

    expect(screen.getByRole('heading', { name: /Order Online/i })).toBeInTheDocument();
    expect(screen.getByText(/Your cart is currently empty/i)).toBeInTheDocument();

    // Add a dish to cart
    const addButtons = screen.getAllByRole('button', { name: /Add .* to order/i });
    fireEvent.click(addButtons[0]);

    // Cart is now populated
    expect(screen.queryByText(/Your cart is currently empty/i)).not.toBeInTheDocument();

    // Fill customer checkout details
    const nameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const phoneInput = screen.getByLabelText(/Phone Number/i);
    const addressInput = screen.getByLabelText(/Delivery Address/i);

    fireEvent.change(nameInput, { target: { value: 'Alex Morgan' } });
    fireEvent.change(emailInput, { target: { value: 'alex@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '(312) 555-0199' } });
    fireEvent.change(addressInput, { target: { value: '123 Chicago Ave, Apt 2' } });

    // Submit demo order
    const submitOrderBtn = screen.getByRole('button', { name: /Place Demo Order/i });
    expect(submitOrderBtn).not.toBeDisabled();
    fireEvent.click(submitOrderBtn);

    // Verify Demo Order Receipt
    expect(screen.getByRole('heading', { name: /Order Received!/i })).toBeInTheDocument();
    expect(screen.getByText(/Demo Mode • Simulation/i)).toBeInTheDocument();
  });

  // Test Login Page & Validation
  test('LoginPage validates email and password, and supports demo sign-in', () => {
    renderWithProviders(<LoginPage />);

    expect(screen.getByRole('heading', { name: /Little Lemon Account/i })).toBeInTheDocument();

    const submitBtn = screen.getByRole('button', { name: /Sign In \(Demo Mode\)/i });
    fireEvent.click(submitBtn);

    // Shows validation errors
    expect(screen.getByText(/Email address is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();

    // Quick demo login
    const quickDemoBtn = screen.getByRole('button', { name: /Quick Sign-In as Demo Diner/i });
    fireEvent.click(quickDemoBtn);

    // Profile card displays
    expect(screen.getByText(/Welcome back, Alex Morgan!/i)).toBeInTheDocument();
    expect(screen.getByText(/Demo Session Active/i)).toBeInTheDocument();
  });

  // Test Reservation form remains intact
  test('Reservation form still works as expected', () => {
    const mockSubmit = jest.fn();
    renderWithProviders(
      <BookingForm availableTimes={['18:00', '19:00']} dispatch={jest.fn()} submitForm={mockSubmit} />
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const submitBtn = screen.getByRole('button', { name: /On Click/i });

    expect(submitBtn).toBeDisabled();

    fireEvent.change(dateInput, { target: { value: '2026-11-15' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });

    expect(submitBtn).not.toBeDisabled();
    fireEvent.click(submitBtn);
    expect(mockSubmit).toHaveBeenCalled();
  });
});
