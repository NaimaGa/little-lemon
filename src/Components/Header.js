import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
  return (
    <header className="site-header" role="banner">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link" aria-label="Little Lemon Restaurant Home">
            <span className="logo-text">LITTLE LEMON</span>
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
