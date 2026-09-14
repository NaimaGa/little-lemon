import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <section className="confirmation-section container">
      <div className="confirmation-card">
        <h1>Booking Confirmed!</h1>
        <p>Your table at Little Lemon has been successfully reserved.</p>
        <p>We look forward to hosting you soon!</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;