import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const { user, isAuthenticated, login, logout } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [touched, setTouched] = useState({ email: false, password: false });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address (e.g., name@example.com).';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters in length.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (!validate()) {
      return;
    }

    login(email);
  };

  const handleDemoSignIn = () => {
    setEmail('diner@littlelemon.com');
    setPassword('Mediterranean123');
    login('diner@littlelemon.com', 'Alex Morgan');
  };

  return (
    <div className="login-page-wrapper">
      <div className="page-header-banner">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator" aria-hidden="true">/</span>
            <span aria-current="page">Account Login</span>
          </nav>
          <span className="section-eyebrow">Diner Portal</span>
          <h1 className="page-title">Little Lemon Account</h1>
          <p className="page-subtitle">
            Manage your table reservations, order history, and Lemon Club dining rewards.
          </p>
        </div>
      </div>

      <div className="container login-container">
        {isAuthenticated ? (
          <div className="account-profile-card">
            <div className="profile-badge-icon" aria-hidden="true">
              👤
            </div>
            <span className="profile-status-tag">Demo Session Active</span>
            <h2>Welcome back, {user.name}!</h2>
            <p className="profile-email">{user.email}</p>

            <div className="profile-details-grid">
              <div className="profile-item">
                <span className="profile-item-label">Membership Tier</span>
                <span className="profile-item-value">{user.tier}</span>
              </div>
              <div className="profile-item">
                <span className="profile-item-label">Member Since</span>
                <span className="profile-item-value">{user.memberSince}</span>
              </div>
              <div className="profile-item">
                <span className="profile-item-label">Favorite Dish</span>
                <span className="profile-item-value">{user.favoriteDish}</span>
              </div>
              <div className="profile-item">
                <span className="profile-item-label">Dining Points</span>
                <span className="profile-item-value">350 Lemon Points</span>
              </div>
            </div>

            <div className="profile-actions">
              <Link to="/reservations" className="btn btn-primary">
                Book a New Table
              </Link>
              <Link to="/order-online" className="btn btn-secondary">
                Order Delivery
              </Link>
              <button
                type="button"
                className="btn btn-outline signout-btn"
                onClick={logout}
              >
                Sign Out of Demo Account
              </button>
            </div>
          </div>
        ) : (
          <div className="login-card">
            <div className="login-card-header">
              <h2>Sign In to Your Account</h2>
              <p>Enter your details below to access your Little Lemon account.</p>
            </div>

            {/* Clear Demo Mode Disclaimer */}
            <div className="demo-auth-alert" role="note">
              <strong>Demo Mode Notice:</strong>
              <p>
                This authentication interface illustrates accessible form validation, error states, and local session management. <strong>No real credentials or passwords are transmitted to an external server.</strong>
              </p>
              <button
                type="button"
                className="quick-demo-btn"
                onClick={handleDemoSignIn}
              >
                Quick Sign-In as Demo Diner (Alex Morgan)
              </button>
            </div>

            <form onSubmit={handleSubmit} className="login-form" noValidate>
              {/* Email */}
              <div
                className={`form-group ${
                  touched.email && errors.email ? 'has-error' : ''
                }`}
              >
                <label htmlFor="login-email">
                  Email Address <span className="required-indicator">*</span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="login-email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, email: true }));
                      validate();
                    }}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    aria-required="true"
                    aria-invalid={touched.email && !!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </div>
                {touched.email && errors.email && (
                  <p id="email-error" className="error-message" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div
                className={`form-group ${
                  touched.password && errors.password ? 'has-error' : ''
                }`}
              >
                <label htmlFor="login-password">
                  Password <span className="required-indicator">*</span>
                </label>
                <div className="input-wrapper password-input-wrap">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="login-password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, password: true }));
                      validate();
                    }}
                    placeholder="Enter at least 6 characters"
                    autoComplete="current-password"
                    required
                    aria-required="true"
                    aria-invalid={touched.password && !!errors.password}
                    aria-describedby={errors.password ? 'password-error' : undefined}
                  />
                  <button
                    type="button"
                    className="toggle-password-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {touched.password && errors.password && (
                  <p id="password-error" className="error-message" role="alert">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="login-remember-row">
                <label className="checkbox-label" htmlFor="remember-me">
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember my email</span>
                </label>
                <a
                  href="#forgot"
                  className="forgot-password-link"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Demo Mode: In a production app, a password reset link would be sent to your email.');
                  }}
                >
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Sign In (Demo Mode)
              </button>
            </form>

            <div className="login-card-footer">
              <p>
                New to Little Lemon?{' '}
                <button
                  type="button"
                  className="link-button"
                  onClick={handleDemoSignIn}
                >
                  Create a Demo Account
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
