import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="main-nav" aria-label="Main Navigation">
      <ul>
        <li>
          <Link to="/" aria-label="Go to Homepage">Home</Link>
        </li>
        <li>
          <Link to="/about" aria-label="Go to About page">About</Link>
        </li>
        <li>
          <Link to="/menu" aria-label="Go to Menu page">Menu</Link>
        </li>
        <li>
          <Link to="/reservations" aria-label="Go to Table Reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/order-online" aria-label="Go to Order Online page">Order Online</Link>
        </li>
        <li>
          <Link to="/login" aria-label="Go to Login page">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;