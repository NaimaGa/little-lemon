import React from 'react';

const testimonialsData = [
  {
    id: 1,
    rating: '5/5',
    stars: 5,
    name: 'Sara M.',
    role: 'Chicago Resident',
    review: 'Wonderful Mediterranean dishes and incredible service!',
    initials: 'SM',
  },
  {
    id: 2,
    rating: '5/5',
    stars: 5,
    name: 'John D.',
    role: 'Food Enthusiast',
    review: 'The reservation process was seamless and the Greek salad is outstanding.',
    initials: 'JD',
  },
  {
    id: 3,
    rating: '4.5/5',
    stars: 4.5,
    name: 'Elena R.',
    role: 'Local Patron',
    review: 'Authentic family feel with a warm atmosphere. Highly recommended.',
    initials: 'ER',
  },
];

function CustomersSay() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-eyebrow">Guest Experiences</span>
          <h2 id="testimonials-title">Testimonials</h2>
          <p className="testimonials-subtitle">
            What our dining guests love about Little Lemon.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((t) => (
            <article key={t.id} className="testimonial-card">
              <div className="testimonial-top">
                <div
                  className="rating-stars"
                  aria-label={`Rating: ${t.rating}`}
                >
                  <span className="stars-visual" aria-hidden="true">
                    {'★'.repeat(Math.floor(t.stars))}
                    {t.stars % 1 !== 0 ? '½' : ''}
                  </span>
                  <span className="rating-text">Rating: {t.rating}</span>
                </div>
              </div>
              <blockquote className="testimonial-quote">
                <p>"{t.review}"</p>
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar" aria-hidden="true">
                  {t.initials}
                </div>
                <div className="author-info">
                  <h3 className="author-name">{t.name}</h3>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
