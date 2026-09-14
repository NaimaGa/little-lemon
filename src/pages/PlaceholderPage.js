import React from 'react';
import { Link } from 'react-router-dom';

function PlaceholderPage({ title }) {
  return (
    <div className="container placeholder-page">
      <h1>{title}</h1>
      <p>This page is currently under construction for Little Lemon.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
        Return to Home
      </Link>
    </div>
  );
}

export default PlaceholderPage;