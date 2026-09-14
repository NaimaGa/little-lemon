import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './Components/BookingForm';
import { initializeTimes, updateTimes } from './Components/Main';

// Mock course API on window object for testing environment
beforeEach(() => {
  window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00', '20:00']);
  window.submitAPI = jest.fn(() => true);
});

// Test 1: initializeTimes returns non-empty array of available booking times
test('initializeTimes returns a non-empty array of booking times', () => {
  const initialTimes = initializeTimes();
  expect(Array.isArray(initialTimes)).toBe(true);
  expect(initialTimes.length).toBeGreaterThan(0);
});

// Test 2: updateTimes returns updated booking times based on selected date
test('updateTimes returns available booking times for selected date', () => {
  const state = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', date: '2026-10-01' };
  const updatedTimes = updateTimes(state, action);
  expect(updatedTimes).toEqual(['17:00', '18:00', '19:00', '20:00']);
});

// Test 3: Renders Date Field in Booking Form
test('renders Date field label in BookingForm', () => {
  render(
    <BrowserRouter>
      <BookingForm availableTimes={['17:00']} dispatch={jest.fn()} submitForm={jest.fn()} />
    </BrowserRouter>
  );
  const dateLabel = screen.getByText(/Choose date/i);
  expect(dateLabel).toBeInTheDocument();
});

// Test 4: Verify HTML5 Validation Attributes
test('applies HTML5 validation attributes to inputs', () => {
  render(
    <BrowserRouter>
      <BookingForm availableTimes={['17:00']} dispatch={jest.fn()} submitForm={jest.fn()} />
    </BrowserRouter>
  );

  const dateInput = screen.getByLabelText(/Choose date/i);
  const timeSelect = screen.getByLabelText(/Choose time/i);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  const occasionSelect = screen.getByLabelText(/Occasion/i);

  expect(dateInput).toHaveAttribute('required');
  expect(timeSelect).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(occasionSelect).toHaveAttribute('required');
});

// Test 5: Submit button disabled on invalid form state
test('submit button is disabled when form inputs are invalid or missing', () => {
  render(
    <BrowserRouter>
      <BookingForm availableTimes={['17:00']} dispatch={jest.fn()} submitForm={jest.fn()} />
    </BrowserRouter>
  );

  const submitButton = screen.getByRole('button', { name: /On Click/i });
  expect(submitButton).toBeDisabled();
});

// Test 6 & 7: Form enables submission and submits valid data
test('enables submit button when valid and calls submitForm with form data', () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();

  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={['17:00', '18:00']}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    </BrowserRouter>
  );

  const dateInput = screen.getByLabelText(/Choose date/i);
  const timeSelect = screen.getByLabelText(/Choose time/i);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  const submitButton = screen.getByRole('button', { name: /On Click/i });

  fireEvent.change(dateInput, { target: { value: '2026-10-15' } });
  fireEvent.change(timeSelect, { target: { value: '17:00' } });
  fireEvent.change(guestsInput, { target: { value: '4' } });
  fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

  expect(submitButton).not.toBeDisabled();

  fireEvent.click(submitButton);

  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: '2026-10-15',
    time: '17:00',
    guests: 4,
    occasion: 'Anniversary',
  });
});