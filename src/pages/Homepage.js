import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  const specials = [
    {
      id: 1,
      name: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy romaine, onions, olives, and feta cheese, garnished with crunchy garlic croutons.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Bruschetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from grandma’s recipe book, every single ingredient has been sourced and is as authentic as can be.',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const testimonials = [
    { id: 1, rating: '5/5', name: 'Sara M.', review: 'Wonderful Mediterranean dishes and incredible service!' },
    { id: 2, rating: '5/5', name: 'John D.', review: 'The reservation process was seamless and the Greek salad is outstanding.' },
    { id: 3, rating: '4.5/5', name: 'Elena R.', review: 'Authentic family feel with a warm atmosphere. Highly recommended.' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <Link to="/reservations" className="btn btn-primary" aria-label="Reserve a Table at Little Lemon">
              Reserve a Table
            </Link>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
              alt="Little Lemon food platter"
            />
          </div>
        </div>
      </section>

      {/* Highlights / Specials Section */}
      <section className="specials-section">
        <div className="container">
          <div className="specials-header">
            <h2>This Weeks Specials!</h2>
            <Link to="/menu" className="btn btn-primary">Online Menu</Link>
          </div>
          <div className="specials-grid">
            {specials.map((dish) => (
              <article key={dish.id} className="card">
                <img src={dish.image} alt={dish.name} />
                <div className="card-content">
                  <div className="card-title">
                    <h3>{dish.name}</h3>
                    <span className="price">{dish.price}</span>
                  </div>
                  <p>{dish.description}</p>
                  <Link to="/order-online" className="order-btn">Order Delivery &rarr;</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <article key={t.id} className="testimonial-card">
                <div className="rating">Rating: {t.rating}</div>
                <h4>{t.name}</h4>
                <p>"{t.review}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container about-container">
          <div className="about-content">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a warm and friendly environment.
              The restaurant features a locally sourced menu with daily specials crafted by owners Mario and Adrian.
            </p>
          </div>
          <div className="about-images">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80"
              alt="Little Lemon restaurant interior"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;