import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { menuDishes } from '../data/menuData';

function OrderOnlinePage() {
  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    calculateTotals,
  } = useCart();

  const [fulfillment, setFulfillment] = useState('delivery'); // 'delivery' or 'pickup'
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [pickupTime, setPickupTime] = useState('18:00');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const [submittedOrder, setSubmittedOrder] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const totals = calculateTotals(fulfillment);

  const validateForm = () => {
    const errors = {};
    if (!customerName.trim()) errors.name = 'Please provide your full name.';
    if (!customerEmail.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      errors.email = 'Please provide a valid email format.';
    }
    if (!customerPhone.trim()) {
      errors.phone = 'Please provide a contact phone number.';
    }
    if (fulfillment === 'delivery' && !deliveryAddress.trim()) {
      errors.address = 'Please provide a Chicago delivery address.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    if (!validateForm()) {
      return;
    }

    // Generate mock order record
    const mockOrder = {
      orderId: `LL-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      fulfillment,
      customerName,
      customerEmail,
      customerPhone,
      deliveryAddress: fulfillment === 'delivery' ? deliveryAddress : null,
      pickupTime: fulfillment === 'pickup' ? pickupTime : null,
      specialInstructions,
      items: [...cartItems],
      totals: { ...totals },
    };

    setSubmittedOrder(mockOrder);
    clearCart();
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // If order was placed, show the Demo Order Confirmation view
  if (submittedOrder) {
    return (
      <div className="order-online-page-wrapper">
        <div className="page-header-banner">
          <div className="container">
            <span className="section-eyebrow">Demo Order Receipt</span>
            <h1 className="page-title">Order Received!</h1>
            <p className="page-subtitle">
              Thank you, {submittedOrder.customerName}. Your mock order is being prepared in our Chicago kitchen!
            </p>
          </div>
        </div>

        <div className="container order-receipt-container">
          <div className="receipt-card">
            <div className="receipt-header">
              <div className="receipt-icon-wrap" aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="receipt-badge">Demo Mode • Simulation</span>
              <h2>Order #{submittedOrder.orderId}</h2>
              <p className="receipt-timestamp">
                Placed at {submittedOrder.createdAt} • Estimated time: 30–45 mins
              </p>
            </div>

            <div className="receipt-disclaimer-box">
              <strong>Notice:</strong> This is a portfolio demonstration. No payment was charged, and no real delivery will occur.
            </div>

            <div className="receipt-details-grid">
              <div className="receipt-col">
                <h3>Fulfillment Details</h3>
                <p>
                  <strong>Type:</strong>{' '}
                  {submittedOrder.fulfillment === 'delivery' ? 'Local Delivery' : 'Curbside Pickup'}
                </p>
                {submittedOrder.fulfillment === 'delivery' ? (
                  <p>
                    <strong>Deliver To:</strong> {submittedOrder.deliveryAddress}
                  </p>
                ) : (
                  <p>
                    <strong>Pickup Time:</strong> {submittedOrder.pickupTime} at 123 Lemon Way
                  </p>
                )}
                <p>
                  <strong>Contact:</strong> {submittedOrder.customerPhone} ({submittedOrder.customerEmail})
                </p>
                {submittedOrder.specialInstructions && (
                  <p>
                    <strong>Kitchen Notes:</strong> {submittedOrder.specialInstructions}
                  </p>
                )}
              </div>

              <div className="receipt-col">
                <h3>Items Summary</h3>
                <ul className="receipt-items-list">
                  {submittedOrder.items.map((item) => (
                    <li key={item.id} className="receipt-item-row">
                      <span>
                        {item.quantity}x {item.name}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>

                <div className="receipt-totals">
                  <div className="totals-row">
                    <span>Subtotal:</span>
                    <span>${submittedOrder.totals.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="totals-row">
                    <span>Estimated Tax (8.25%):</span>
                    <span>${submittedOrder.totals.tax.toFixed(2)}</span>
                  </div>
                  <div className="totals-row">
                    <span>
                      {submittedOrder.fulfillment === 'delivery'
                        ? 'Delivery Fee:'
                        : 'Pickup Fee:'}
                    </span>
                    <span>
                      {submittedOrder.totals.deliveryFee === 0
                        ? 'FREE'
                        : `$${submittedOrder.totals.deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="totals-row totals-grand">
                    <strong>Total:</strong>
                    <strong>${submittedOrder.totals.total.toFixed(2)}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="receipt-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setSubmittedOrder(null)}
              >
                Place Another Demo Order
              </button>
              <Link to="/" className="btn btn-secondary">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-online-page-wrapper">
      {/* Banner */}
      <div className="page-header-banner">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator" aria-hidden="true">/</span>
            <span aria-current="page">Order Online</span>
          </nav>
          <span className="section-eyebrow">Fresh & Direct</span>
          <h1 className="page-title">Order Online</h1>
          <p className="page-subtitle">
            Enjoy our handcrafted Mediterranean specialties delivered to your doorstep or ready for curbside pickup in Chicago.
          </p>
        </div>
      </div>

      <div className="container order-online-container">
        {/* Demo Mode Notice */}
        <div className="demo-notice-banner" role="note">
          <span className="demo-tag">Portfolio Demonstration</span>
          <p>
            This ordering flow simulates a real e-commerce ordering system with interactive quantity controls, live totals, and persistent state. <strong>No real payment or personal card details are ever requested or charged.</strong>
          </p>
        </div>

        <div className="order-layout-grid">
          {/* Left Column: Quick Dish Selection */}
          <div className="order-dishes-col">
            <div className="order-section-header">
              <h2>Select Dishes</h2>
              <Link to="/menu" className="browse-full-menu-link">
                View Full Menu &rarr;
              </Link>
            </div>

            <div className="order-dishes-list">
              {menuDishes.slice(0, 6).map((dish) => (
                <div key={dish.id} className="order-dish-item">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="order-dish-thumbnail"
                    loading="lazy"
                  />
                  <div className="order-dish-info">
                    <h3>{dish.name}</h3>
                    <p className="order-dish-desc">{dish.description}</p>
                    <span className="order-dish-price">${dish.price.toFixed(2)}</span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm add-quick-btn"
                    onClick={() => addToCart(dish, 1)}
                    aria-label={`Add ${dish.name} to order`}
                  >
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Cart & Checkout Form */}
          <div className="order-cart-col">
            <div className="cart-card">
              <div className="cart-header">
                <h2>Your Order Cart</h2>
                {cartItems.length > 0 && (
                  <button
                    type="button"
                    className="clear-cart-btn"
                    onClick={clearCart}
                    aria-label="Clear all items from cart"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Fulfillment Toggle */}
              <div className="fulfillment-toggle" role="group" aria-label="Fulfillment method">
                <button
                  type="button"
                  className={`fulfillment-btn ${fulfillment === 'delivery' ? 'active' : ''}`}
                  onClick={() => setFulfillment('delivery')}
                  aria-pressed={fulfillment === 'delivery'}
                >
                  Delivery ($3.99)
                </button>
                <button
                  type="button"
                  className={`fulfillment-btn ${fulfillment === 'pickup' ? 'active' : ''}`}
                  onClick={() => setFulfillment('pickup')}
                  aria-pressed={fulfillment === 'pickup'}
                >
                  Curbside Pickup (Free)
                </button>
              </div>

              {/* Cart Items List */}
              {cartItems.length === 0 ? (
                <div className="empty-cart-state">
                  <div className="empty-cart-icon" aria-hidden="true">🛒</div>
                  <p className="empty-cart-title">Your cart is currently empty</p>
                  <p className="empty-cart-sub">Select dishes from the menu to build your Mediterranean order.</p>
                </div>
              ) : (
                <div className="cart-items-wrapper">
                  <ul className="cart-items-list" aria-label="Items in cart">
                    {cartItems.map((item) => (
                      <li key={item.id} className="cart-item">
                        <div className="cart-item-header">
                          <span className="cart-item-name">{item.name}</span>
                          <span className="cart-item-total">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                        <div className="cart-item-controls">
                          <span className="cart-item-unit-price">
                            ${item.price.toFixed(2)} each
                          </span>
                          <div className="qty-control-group">
                            <button
                              type="button"
                              className="qty-btn"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              −
                            </button>
                            <span className="qty-value" aria-label={`Current quantity ${item.quantity}`}>
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              className="qty-btn"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              +
                            </button>
                            <button
                              type="button"
                              className="remove-item-btn"
                              onClick={() => removeFromCart(item.id)}
                              aria-label={`Remove ${item.name} from cart`}
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Totals Summary */}
                  <div className="cart-totals-breakdown">
                    <div className="totals-row">
                      <span>Subtotal:</span>
                      <span>${totals.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="totals-row">
                      <span>Estimated Tax (8.25%):</span>
                      <span>${totals.tax.toFixed(2)}</span>
                    </div>
                    <div className="totals-row">
                      <span>
                        {fulfillment === 'delivery' ? 'Delivery Fee:' : 'Pickup:'}
                      </span>
                      <span>
                        {totals.deliveryFee === 0 ? 'FREE' : `$${totals.deliveryFee.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="totals-row totals-grand">
                      <strong>Order Total:</strong>
                      <strong>${totals.total.toFixed(2)}</strong>
                    </div>
                  </div>

                  {/* Checkout Form */}
                  <form onSubmit={handlePlaceOrder} className="checkout-form" aria-label="Customer checkout form">
                    <h3 className="checkout-heading">Delivery & Contact Details</h3>

                    <div className="form-group">
                      <label htmlFor="customer-name">
                        Full Name <span className="required-indicator">*</span>
                      </label>
                      <input
                        type="text"
                        id="customer-name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Maria Sanchez"
                        required
                        aria-required="true"
                      />
                      {formErrors.name && (
                        <span className="error-message">{formErrors.name}</span>
                      )}
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="customer-email">
                          Email Address <span className="required-indicator">*</span>
                        </label>
                        <input
                          type="email"
                          id="customer-email"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          placeholder="maria@example.com"
                          required
                          aria-required="true"
                        />
                        {formErrors.email && (
                          <span className="error-message">{formErrors.email}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="customer-phone">
                          Phone Number <span className="required-indicator">*</span>
                        </label>
                        <input
                          type="tel"
                          id="customer-phone"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="(312) 555-0123"
                          required
                          aria-required="true"
                        />
                        {formErrors.phone && (
                          <span className="error-message">{formErrors.phone}</span>
                        )}
                      </div>
                    </div>

                    {fulfillment === 'delivery' ? (
                      <div className="form-group">
                        <label htmlFor="delivery-address">
                          Delivery Address (Chicago) <span className="required-indicator">*</span>
                        </label>
                        <input
                          type="text"
                          id="delivery-address"
                          value={deliveryAddress}
                          onChange={(e) => setDeliveryAddress(e.target.value)}
                          placeholder="456 Michigan Ave, Apt 4B, Chicago, IL"
                          required
                          aria-required="true"
                        />
                        {formErrors.address && (
                          <span className="error-message">{formErrors.address}</span>
                        )}
                      </div>
                    ) : (
                      <div className="form-group">
                        <label htmlFor="pickup-time">
                          Preferred Pickup Time (Today)
                        </label>
                        <select
                          id="pickup-time"
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                        >
                          <option value="17:30">17:30 (5:30 PM)</option>
                          <option value="18:00">18:00 (6:00 PM)</option>
                          <option value="18:30">18:30 (6:30 PM)</option>
                          <option value="19:00">19:00 (7:00 PM)</option>
                          <option value="19:30">19:30 (7:30 PM)</option>
                          <option value="20:00">20:00 (8:00 PM)</option>
                        </select>
                      </div>
                    )}

                    <div className="form-group">
                      <label htmlFor="special-notes">Kitchen Notes / Instructions</label>
                      <textarea
                        id="special-notes"
                        rows="2"
                        value={specialInstructions}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                        placeholder="Allergies, gate codes, or dressing on the side..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary submit-order-btn"
                      disabled={cartItems.length === 0}
                    >
                      Place Demo Order • ${totals.total.toFixed(2)}
                    </button>
                    <span className="form-subnote">
                      Demo Mode: No payment is collected. Order is saved locally.
                    </span>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderOnlinePage;
