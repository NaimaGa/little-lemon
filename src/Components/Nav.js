import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  let totalCount = 0;
  let user = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cart = useCart();
    totalCount = cart.totalCount;
  } catch (e) {
    // Fallback if rendered outside CartProvider
  }

  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const auth = useAuth();
    user = auth.user;
  } catch (e) {
    // Fallback if rendered outside AuthProvider
  }

  // Close mobile navigation drawer whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close navigation on Escape key for keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="main-nav" aria-label="Main Navigation">
      <button
        type="button"
        className={`mobile-menu-btn ${isMenuOpen ? 'is-active' : ''}`}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={toggleMenu}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <div
        className={`nav-backdrop ${isMenuOpen ? 'is-visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <ul
        id="primary-navigation"
        className={`nav-list ${isMenuOpen ? 'is-open' : ''}`}
      >
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            aria-label="Go to Homepage"
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            aria-label="Go to About page"
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            aria-label="Go to Menu page"
            onClick={closeMenu}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservations"
            className={({ isActive }) =>
              isActive ? 'nav-link active nav-link-cta' : 'nav-link nav-link-cta'
            }
            aria-label="Go to Table Reservations"
            onClick={closeMenu}
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/order-online"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            aria-label="Go to Order Online page"
            onClick={closeMenu}
          >
            <span>Order Online</span>
            {totalCount > 0 && (
              <span className="nav-cart-badge" aria-label={`${totalCount} items in cart`}>
                {totalCount}
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            aria-label="Go to Login page"
            onClick={closeMenu}
          >
            {user ? `Account (${user.name.split(' ')[0]})` : 'Login'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
