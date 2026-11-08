import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">Chicago • Established 1995</span>
          <h1 id="hero-title" className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-description">
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <div className="hero-actions">
            <Link
              to="/reservations"
              className="btn btn-primary"
              aria-label="Reserve a Table at Little Lemon"
            >
              Reserve a Table
            </Link>
            <Link
              to="/menu"
              className="btn btn-secondary"
              aria-label="View our food and drink menu"
            >
              View Menu
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80"
              alt="Little Lemon food platter"
              className="hero-img"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
