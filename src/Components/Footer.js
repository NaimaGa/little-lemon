import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-col footer-col-brand">
          <span className="footer-brand-title">LITTLE LEMON</span>
          <p className="footer-brand-desc">
            A family-owned Mediterranean restaurant located in Chicago, Illinois. Focused on traditional recipes served with a modern twist.
          </p>
          <div className="footer-hours">
            <strong>Dinner Service:</strong>
            <p>Monday – Sunday: 17:00 – 22:00</p>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order-online">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <address className="footer-contact">
            <p className="contact-address">
              123 Lemon Way<br />
              Chicago, IL 60601
            </p>
            <p className="contact-phone">
              <a href="tel:3125550199">(312) 555-0199</a>
            </p>
            <p className="contact-email">
              <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
            </p>
          </address>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Social Media</h4>
          <ul className="footer-links social-links">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Little Lemon on Facebook (opens in a new tab)"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Little Lemon on Instagram (opens in a new tab)"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Little Lemon on Twitter (opens in a new tab)"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.
          </p>
          <p className="capstone-credit">
            Meta Front-End Developer Capstone
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
