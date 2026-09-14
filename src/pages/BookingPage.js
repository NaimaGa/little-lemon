import React from 'react';
import BookingForm from '../Components/BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="booking-page-container container">
      <h1>Reserve a Table</h1>
      <p>Please fill out the form below to reserve your table at Little Lemon.</p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default BookingPage;