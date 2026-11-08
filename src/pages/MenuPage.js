import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuCategories, menuDishes } from '../data/menuData';
import { useCart } from '../context/CartContext';

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [addedItemNotice, setAddedItemNotice] = useState(null);

  const { addToCart, totalCount, subtotal } = useCart();

  const handleAddToCart = (dish) => {
    addToCart(dish, 1);
    setAddedItemNotice(dish.name);
    setTimeout(() => {
      setAddedItemNotice(null);
    }, 2500);
  };

  const filteredDishes = menuDishes.filter((dish) => {
    const matchesCategory =
      activeCategory === 'all' || dish.category === activeCategory;
    const matchesDietary =
      dietaryFilter === 'all' || dish.tags.includes(dietaryFilter);
    return matchesCategory && matchesDietary;
  });

  return (
    <div className="menu-page-wrapper">
      {/* Header Banner */}
      <div className="page-header-banner">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator" aria-hidden="true">/</span>
            <span aria-current="page">Menu</span>
          </nav>
          <span className="section-eyebrow">Handcrafted Mediterranean</span>
          <h1 className="page-title">Our Menu</h1>
          <p className="page-subtitle">
            All dishes are prepared to order with extra virgin olive oil, fragrant herbs, and the freshest seasonal ingredients.
          </p>
        </div>
      </div>

      <div className="container menu-page-content">
        {/* Floating Cart Indicator if items exist */}
        {totalCount > 0 && (
          <aside className="menu-cart-banner" aria-label="Current cart summary">
            <div className="cart-banner-info">
              <span className="cart-badge-icon" aria-hidden="true">🛒</span>
              <span>
                <strong>{totalCount} {totalCount === 1 ? 'item' : 'items'}</strong> in your cart (${subtotal.toFixed(2)})
              </span>
            </div>
            <Link to="/order-online" className="btn btn-primary btn-sm">
              View Cart & Checkout &rarr;
            </Link>
          </aside>
        )}

        {/* Temporary added notification */}
        {addedItemNotice && (
          <div className="toast-notification" role="status" aria-live="polite">
            <span className="toast-check" aria-hidden="true">✓</span>
            <span>Added <strong>{addedItemNotice}</strong> to your order!</span>
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="menu-controls" role="region" aria-label="Menu filters">
          <div className="category-tabs" role="tablist" aria-label="Menu categories">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dietary Select Filter */}
          <div className="dietary-filter">
            <label htmlFor="dietary-select">Dietary Filter:</label>
            <select
              id="dietary-select"
              value={dietaryFilter}
              onChange={(e) => setDietaryFilter(e.target.value)}
              className="dietary-select-input"
            >
              <option value="all">All Diets</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Gluten-Free">Gluten-Free</option>
            </select>
          </div>
        </div>

        {/* Dishes Grid */}
        <section aria-label="List of dishes" className="dishes-section">
          {filteredDishes.length === 0 ? (
            <div className="no-dishes-found">
              <p>No dishes match the selected dietary criteria in this category.</p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setActiveCategory('all');
                  setDietaryFilter('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="dishes-grid">
              {filteredDishes.map((dish) => (
                <article key={dish.id} className="menu-dish-card">
                  <div className="dish-img-wrap">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                    />
                    {dish.tags.length > 0 && (
                      <span className="dish-tag-badge">{dish.tags[0]}</span>
                    )}
                  </div>
                  <div className="dish-body">
                    <div className="dish-header">
                      <h2 className="dish-title">{dish.name}</h2>
                      <span className="dish-price">${dish.price.toFixed(2)}</span>
                    </div>
                    <span className="dish-calories">{dish.calories}</span>
                    <p className="dish-description">{dish.description}</p>
                    <div className="dish-footer">
                      <button
                        type="button"
                        className="btn btn-primary add-to-cart-btn"
                        onClick={() => handleAddToCart(dish)}
                        aria-label={`Add ${dish.name} to cart for $${dish.price.toFixed(2)}`}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Bottom Menu Notice */}
        <div className="menu-footer-notice">
          <p>
            * Prices are subject to local Chicago sales tax. Please inform your server or mention in order notes of any severe food allergies before ordering.
          </p>
          <div className="menu-footer-links">
            <Link to="/order-online" className="btn btn-primary">
              Order Online for Delivery or Pickup
            </Link>
            <Link to="/reservations" className="btn btn-secondary">
              Book a Dining Room Table
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
