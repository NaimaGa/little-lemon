import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  // Calculate today's date formatted as YYYY-MM-DD for the min date attribute
  const today = new Date().toISOString().split('T')[0];

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
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
      guests: Number(guests),
      occasion,
    });
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Table Reservation Form"
      noValidate={false}
    >
      <div className="form-grid">
        {/* Date Field */}
        <div className={`form-group ${touched.date && !date ? 'has-error' : ''}`}>
          <label htmlFor="res-date">
            Choose date
            <span className="required-indicator" aria-hidden="true">*</span>
          </label>
          <div className="input-wrapper">
            <input
              type="date"
              id="res-date"
              name="date"
              value={date}
              min={today}
              onChange={handleDateChange}
              onBlur={() => handleBlur('date')}
              required
              aria-required="true"
              aria-describedby="date-help"
            />
          </div>
          <span id="date-help" className="form-help-text">
            Reserve up to 30 days in advance
          </span>
          {touched.date && !date && (
            <p className="error-message" role="alert">
              Please select a reservation date.
            </p>
          )}
        </div>

        {/* Time Field */}
        <div className={`form-group ${touched.time && !time ? 'has-error' : ''}`}>
          <label htmlFor="res-time">
            Choose time
            <span className="required-indicator" aria-hidden="true">*</span>
          </label>
          <div className="input-wrapper">
            <select
              id="res-time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              onBlur={() => handleBlur('time')}
              required
              aria-required="true"
              aria-describedby="time-help"
            >
              <option value="" disabled>
                Select a time slot
              </option>
              {availableTimes && availableTimes.length > 0 ? (
                availableTimes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  No times available
                </option>
              )}
            </select>
          </div>
          <span id="time-help" className="form-help-text">
            Dinner service: 17:00 – 22:00
          </span>
          {(!availableTimes || availableTimes.length === 0) && (
            <p className="error-message" role="alert">
              Unable to load available times. Please try again.
            </p>
          )}
          {touched.time && !time && availableTimes && availableTimes.length > 0 && (
            <p className="error-message" role="alert">
              Please select a dining time slot.
            </p>
          )}
        </div>

        {/* Guests Field */}
        <div
          className={`form-group ${
            touched.guests && (guests < 1 || guests > 10) ? 'has-error' : ''
          }`}
        >
          <label htmlFor="guests">
            Number of guests
            <span className="required-indicator" aria-hidden="true">*</span>
          </label>
          <div className="input-wrapper">
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
              value={guests}
              onChange={(e) => {
                const val = e.target.value === '' ? '' : parseInt(e.target.value, 10);
                setGuests(val);
              }}
              onBlur={() => handleBlur('guests')}
              required
              aria-required="true"
              aria-describedby="guests-help"
            />
          </div>
          <span id="guests-help" className="form-help-text">
            Between 1 and 10 guests (for 11+, please call)
          </span>
          {touched.guests && (guests < 1 || guests > 10 || guests === '') && (
            <p className="error-message" role="alert">
              Please enter a party size between 1 and 10.
            </p>
          )}
        </div>

        {/* Occasion Field */}
        <div className={`form-group ${touched.occasion && !occasion ? 'has-error' : ''}`}>
          <label htmlFor="occasion">
            Occasion
            <span className="required-indicator" aria-hidden="true">*</span>
          </label>
          <div className="input-wrapper">
            <select
              id="occasion"
              name="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              onBlur={() => handleBlur('occasion')}
              required
              aria-required="true"
              aria-describedby="occasion-help"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Date Night">Date Night</option>
              <option value="Business Meal">Business Meal</option>
              <option value="Casual Gathering">Casual Gathering</option>
            </select>
          </div>
          <span id="occasion-help" className="form-help-text">
            Helps us personalize your table setting
          </span>
          {touched.occasion && !occasion && (
            <p className="error-message" role="alert">
              Please select an occasion.
            </p>
          )}
        </div>
      </div>

      {/* Live Reservation Summary preview */}
      <div className="reservation-preview-box">
        <h3 className="preview-heading">Reservation Summary</h3>
        <div className="preview-details">
          <div className="preview-item">
            <span className="preview-label">Date:</span>
            <span className="preview-value">{date ? date : 'Not selected yet'}</span>
          </div>
          <div className="preview-item">
            <span className="preview-label">Time:</span>
            <span className="preview-value">{time ? time : 'Not selected yet'}</span>
          </div>
          <div className="preview-item">
            <span className="preview-label">Party Size:</span>
            <span className="preview-value">
              {guests ? `${guests} ${guests === 1 ? 'Guest' : 'Guests'}` : '1 Guest'}
            </span>
          </div>
          <div className="preview-item">
            <span className="preview-label">Occasion:</span>
            <span className="preview-value">{occasion || 'Birthday'}</span>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn-primary submit-btn"
          disabled={!isFormValid()}
          aria-label="On Click"
        >
          Make Your Reservation
        </button>
        {!isFormValid() && (
          <p className="form-validation-notice">
            Please fill in the required fields to confirm your table.
          </p>
        )}
      </div>
    </form>
  );
}

export default BookingForm;
