import React from 'react';

function Chicago() {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="container about-container">
        <div className="about-content">
          <span className="section-eyebrow">Our Story</span>
          <h2 id="about-title" className="about-title">Little Lemon</h2>
          <h3 className="about-subtitle">Chicago</h3>
          <p className="about-lead">
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a warm and friendly environment.
            The restaurant features a locally sourced menu with daily specials crafted by owners Mario and Adrian.
          </p>
          <p className="about-body">
            Drawing inspiration from their Mediterranean upbringing, Mario and Adrian bring time-tested family recipes together with fresh, local Midwestern ingredients to create dishes that are comforting, vibrant, and unforgettable.
          </p>

          <div className="about-highlights">
            <div className="about-highlight-item">
              <span className="highlight-number">100%</span>
              <span className="highlight-label">Fresh & Locally Sourced</span>
            </div>
            <div className="about-highlight-item">
              <span className="highlight-number">30+</span>
              <span className="highlight-label">Years of Heritage</span>
            </div>
            <div className="about-highlight-item">
              <span className="highlight-number">Daily</span>
              <span className="highlight-label">Handcrafted Specials</span>
            </div>
          </div>
        </div>

        <div className="about-images-wrapper">
          <div className="about-image-card">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80"
              alt="Little Lemon restaurant interior"
              className="about-img"
              loading="lazy"
            />
            <div className="about-image-tag">
              <span className="tag-title">Mario & Adrian</span>
              <span className="tag-desc">Founders & Head Chefs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chicago;
