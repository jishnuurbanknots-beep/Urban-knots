import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

// SVG Arrow Right Icon
const ArrowRightIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="arrow-icon"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const CTA = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Simulate subscribe
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="cta-section" id="cta">
      <div className="cta-container">
        
        {/* Left Column: Heading and Description */}
        <div className="cta-content-column">
          <h2 className="cta-title">
            Ready to Build<br />Something Amazing?
          </h2>
          <p className="cta-description">
            Whether you're launching a startup, scaling your business, or refreshing your brand, we're<br />here to create meaningful experiences that leave a lasting impression.
          </p>
        </div>

        {/* Right Column: Actions (Button & Newsletter) */}
        <div className="cta-actions-column">
          {/* Main CTA Button */}
          <Link to="/contact" className="cta-main-btn">
            Let's Start Your Project
            <ArrowRightIcon />
          </Link>

          {/* Newsletter Box */}
          <div className="cta-newsletter-box">
            <h3 className="cta-newsletter-title">Newsletter</h3>
            <p className="cta-newsletter-subtitle">
              Stay updated with our latest<br />work and insights.
            </p>
            
            <form className="cta-newsletter-form" onSubmit={handleSubscribe}>
              <div className="cta-input-group">
                <input 
                  type="email" 
                  className="cta-email-input" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="cta-submit-btn" aria-label="Subscribe">
                  <ArrowRightIcon />
                </button>
              </div>
              {subscribed && (
                <p className="cta-success-message">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
