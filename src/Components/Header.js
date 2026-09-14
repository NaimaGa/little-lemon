import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo-container">
          <span className="logo-text">LITTLE LEMON</span>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;