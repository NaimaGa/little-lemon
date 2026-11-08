import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="about-page-wrapper">
      {/* Banner */}
      <div className="page-header-banner">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator" aria-hidden="true">/</span>
            <span aria-current="page">About Us</span>
          </nav>
          <span className="section-eyebrow">Our Heritage</span>
          <h1 className="page-title">About Little Lemon</h1>
          <p className="page-subtitle">
            A family-owned Mediterranean bistro bringing traditional generational recipes and heartfelt hospitality to Chicago.
          </p>
        </div>
      </div>

      <div className="container about-page-content">
        {/* Founders Story Section */}
        <section className="about-story-section" aria-labelledby="story-heading">
          <div className="about-story-grid">
            <div className="about-story-text">
              <span className="section-eyebrow">The Founders</span>
              <h2 id="story-heading">Brothers Mario & Adrian</h2>
              <p className="lead-paragraph">
                Little Lemon was founded by brothers Mario and Adrian, who grew up cooking alongside their grandmother along the sun-drenched Mediterranean coastline.
              </p>
              <p>
                When they relocated to Chicago, they noticed something missing: authentic, unpretentious Mediterranean food that captures the warmth of an intimate family kitchen. Armed with handwritten family recipes and a passion for fresh, vibrant ingredients, they opened Little Lemon in 1995.
              </p>
              <p>
                Today, Mario leads the culinary team, crafting daily specials that honor classic cooking methods with modern culinary flair. Adrian manages front-of-house operations, ensuring that every guest who walks through our doors feels like an honored guest at their family table.
              </p>
            </div>
            <div className="about-story-image-wrap">
              <div className="framed-image-card">
                <img
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80"
                  alt="Little Lemon restaurant dining room interior"
                  className="about-story-img"
                  loading="lazy"
                />
                <div className="image-caption-badge">
                  <span className="caption-title">The Chicago Bistro</span>
                  <span className="caption-sub">123 Lemon Way • Est. 1995</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars of Philosophy */}
        <section className="about-philosophy-section" aria-labelledby="philosophy-heading">
          <div className="section-header-centered">
            <span className="section-eyebrow">How We Cook</span>
            <h2 id="philosophy-heading">Our Three Core Commitments</h2>
            <p className="section-subtext">
              We never cut corners. Every plate served reflects our devotion to quality, health, and authentic flavor.
            </p>
          </div>

          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="philosophy-icon-wrap" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Generational Recipes</h3>
              <p>
                From grandma's slow-simmered lemon sauces to hand-layered baklava and phyllo, our menu is rooted in recipes passed down through three generations.
              </p>
            </div>

            <div className="philosophy-card">
              <div className="philosophy-icon-wrap" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                </svg>
              </div>
              <h3>Local & Imported Balance</h3>
              <p>
                We source fresh vegetables, poultry, and dairy from organic Illinois farms, paired with cold-pressed extra virgin olive oil and oregano imported directly from Greece.
              </p>
            </div>

            <div className="philosophy-card">
              <div className="philosophy-icon-wrap" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Warm Chicago Hospitality</h3>
              <p>
                Whether celebrating a wedding anniversary or grabbing a quick weekday lunch, every diner is greeted with the warmth, generosity, and respect of Mediterranean culture.
              </p>
            </div>
          </div>
        </section>

        {/* Milestone Stats */}
        <section className="about-stats-banner" aria-label="Restaurant milestones">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">30+</span>
              <span className="stat-label">Years in Chicago</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">100%</span>
              <span className="stat-label">Fresh Daily Prep</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">12+</span>
              <span className="stat-label">Signature Dishes</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">5★</span>
              <span className="stat-label">Neighborhood Favorite</span>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="about-cta-section" aria-labelledby="cta-heading">
          <div className="about-cta-box">
            <h2 id="cta-heading">Join Us at the Table</h2>
            <p>
              Experience the authentic flavors of Little Lemon in person or order your favorite Mediterranean dishes for delivery.
            </p>
            <div className="about-cta-actions">
              <Link to="/reservations" className="btn btn-primary">
                Reserve a Table
              </Link>
              <Link to="/menu" className="btn btn-secondary">
                Explore the Menu
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
