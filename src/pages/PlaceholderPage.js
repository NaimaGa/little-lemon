import React from 'react';
import { Link } from 'react-router-dom';

function PlaceholderPage({ title }) {
  return (
    <div className="placeholder-page-wrapper">
      <div className="placeholder-header-banner">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator" aria-hidden="true">/</span>
            <span aria-current="page">{title}</span>
          </nav>
          <h1 className="placeholder-title">{title}</h1>
          <p className="placeholder-subtitle">Little Lemon Mediterranean Restaurant • Chicago</p>
        </div>
      </div>

      <div className="container placeholder-content-container">
        <div className="placeholder-card">
          <div className="placeholder-icon-wrap" aria-hidden="true">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <h2>Content Coming Soon</h2>
          <p>
            We are diligently preparing the full online experience for <strong>{title}</strong>. In the meantime, our Chicago dining room is open every evening, and reservations are fully available.
          </p>
          <div className="placeholder-actions">
            <Link to="/" className="btn btn-primary" aria-label="Return to Homepage">
              Return to Home
            </Link>
            <Link to="/reservations" className="btn btn-secondary" aria-label="Reserve a Table at Little Lemon">
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderPage;
