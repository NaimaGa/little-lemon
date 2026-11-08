import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <div className="confirmation-page-wrapper">
      <section className="confirmation-section container" aria-labelledby="confirmation-heading">
        <div className="confirmation-card">
          <div className="confirmation-icon-wrap" aria-hidden="true">
            <svg
              className="check-icon"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <span className="confirmation-badge">Reservation Successful</span>
          <h1 id="confirmation-heading">Booking Confirmed!</h1>
          <p className="confirmation-lead">
            Your table at Little Lemon has been successfully reserved.
          </p>
          <p className="confirmation-subtext">
            We have registered your booking in our reservation book and look forward to welcoming you to our Chicago dining room!
          </p>

          <div className="confirmation-tips">
            <div className="tip-item">
              <span className="tip-title">Location:</span>
              <span className="tip-text">123 Lemon Way, Chicago, IL 60601</span>
            </div>
            <div className="tip-item">
              <span className="tip-title">Arrival Reminder:</span>
              <span className="tip-text">Tables are held for 15 minutes past reservation time.</span>
            </div>
            <div className="tip-item">
              <span className="tip-title">Need Changes?</span>
              <span className="tip-text">Call us directly at (312) 555-0199 for adjustments.</span>
            </div>
          </div>

          <div className="confirmation-actions">
            <Link to="/" className="btn btn-primary" aria-label="Return to Little Lemon Homepage">
              Back to Home
            </Link>
            <Link to="/menu" className="btn btn-secondary" aria-label="View the Menu while waiting">
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConfirmedBooking;
