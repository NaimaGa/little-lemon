import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>Little Lemon</h3>
          <p>A family-owned Mediterranean restaurant located in Chicago, Illinois.</p>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>123 Lemon Way, Chicago, IL 60601</p>
          <p>Phone: (312) 555-0199</p>
          <p>Email: info@littlelemon.com</p>
        </div>
        <div className="footer-col">
          <h4>Social Media</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;