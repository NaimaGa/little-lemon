import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';
import OrderOnlinePage from '../pages/OrderOnlinePage';
import LoginPage from '../pages/LoginPage';

// Helper for fallback times if global API isn't present in testing/local environment
export const fetchAPI = (date) => {
  if (typeof window !== 'undefined' && window.fetchAPI) {
    return window.fetchAPI(date);
  }
  // Default course times fallback
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export const submitAPI = (formData) => {
  if (typeof window !== 'undefined' && window.submitAPI) {
    return window.submitAPI(formData);
  }
  return true;
};

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const selectedDate = new Date(action.date);
      return fetchAPI(selectedDate);
    }
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmed');
    } else {
      alert('Failed to submit booking. Please try again.');
    }
  };

  return (
    <main id="main-content" tabIndex="-1">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default Main;
