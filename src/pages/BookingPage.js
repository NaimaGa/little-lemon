import React from 'react';
import BookingForm from '../Components/BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="booking-page-wrapper">
      <div className="booking-header-banner">
        <div className="container">
          <span className="section-eyebrow">Table Reservations</span>
          <h1 className="booking-page-title">Reserve a Table</h1>
          <p className="booking-page-subtitle">
            Experience our traditional Mediterranean recipes crafted fresh daily in Chicago.
          </p>
        </div>
      </div>

      <div className="container booking-page-container">
        <div className="booking-layout">
          {/* Reservation Form Column */}
          <div className="booking-main-col">
            <div className="booking-card">
              <div className="booking-card-header">
                <h2>Reservation Details</h2>
                <p>Please fill out the form below to reserve your table at Little Lemon.</p>
              </div>
              <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            </div>
          </div>

          {/* Dining Policy & Hours Aside Column */}
          <aside className="booking-sidebar-col" aria-label="Dining policies and information">
            <div className="booking-info-card">
              <h3>Dining Information</h3>
              <ul className="info-list">
                <li>
                  <strong>Seating Options:</strong> Warm dining room & covered Mediterranean patio.
                </li>
                <li>
                  <strong>Dinner Hours:</strong> Monday – Sunday, 17:00 – 22:00.
                </li>
                <li>
                  <strong>Grace Period:</strong> We hold reserved tables for up to 15 minutes past booking time.
                </li>
                <li>
                  <strong>Large Parties:</strong> For parties of 11 or more, please contact our events team at (312) 555-0199.
                </li>
                <li>
                  <strong>Dietary Needs:</strong> Vegetarian, vegan, and gluten-free options are proudly offered on our daily menu.
                </li>
              </ul>
            </div>

            <div className="booking-quote-card">
              <p className="quote-text">
                "We treat every table like our own family dining room."
              </p>
              <span className="quote-author">— Mario & Adrian, Owners</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
