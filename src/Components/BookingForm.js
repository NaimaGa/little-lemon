import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const isFormValid = () => {
    return (
      date !== '' &&
      time !== '' &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== ''
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Table Reservation Form">
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
          aria-required="true"
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-required="true"
        >
          <option value="" disabled>Select a time</option>
          {availableTimes && availableTimes.length > 0 ? (
            availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))
          ) : (
            <option value="" disabled>No times available</option>
          )}
        </select>
        {(!availableTimes || availableTimes.length === 0) && (
          <p className="error-message">Unable to load available times. Please try again.</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value) || '')}
          required
          aria-required="true"
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-required="true"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button
        type="submit"
        className="btn btn-primary submit-btn"
        disabled={!isFormValid()}
        aria-label="On Click"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;