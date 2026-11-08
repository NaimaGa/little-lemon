import React from 'react';
import { Link } from 'react-router-dom';

const specialsData = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy romaine, onions, olives, and feta cheese, garnished with crunchy garlic croutons.',
    image:
      'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80',
    tag: 'Seasonal',
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image:
      'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular',
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: '$5.00',
    description:
      'This comes straight from grandma’s recipe book, every single ingredient has been sourced and is as authentic as can be.',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    tag: 'Traditional',
  },
];

function Specials() {
  return (
    <section className="specials-section" aria-labelledby="specials-title">
      <div className="container">
        <div className="specials-header">
          <div className="specials-header-text">
            <span className="section-eyebrow">Chef's Highlights</span>
            <h2 id="specials-title">This Weeks Specials!</h2>
          </div>
          <Link to="/menu" className="btn btn-primary" aria-label="Browse full online menu">
            Online Menu
          </Link>
        </div>

        <div className="specials-grid">
          {specialsData.map((dish) => (
            <article key={dish.id} className="card">
              <div className="card-image-wrap">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                />
                <span className="card-badge">{dish.tag}</span>
              </div>
              <div className="card-content">
                <div className="card-title">
                  <h3>{dish.name}</h3>
                  <span className="price">{dish.price}</span>
                </div>
                <p className="card-desc">{dish.description}</p>
                <Link
                  to="/order-online"
                  className="order-btn"
                  aria-label={`Order ${dish.name} for delivery`}
                >
                  <span>Order Delivery</span>
                  <span className="order-arrow" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
