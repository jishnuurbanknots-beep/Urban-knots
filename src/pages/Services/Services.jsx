import React, { useState } from 'react';
import './Services.css';

// SVG Diagonal Arrow Icon
const DiagonalArrowIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="services-card-arrow-icon"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

// SVG Paper Plane Icon
const PaperPlaneIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="services-cta-badge-icon"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

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

const Services = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const servicesList = [
    {
      num: "01",
      title: "Brand Identity",
      desc: "Build a brand that's remembered, recognized, and trusted."
    },
    {
      num: "02",
      title: "Creative Design",
      desc: "Bold, purposeful designs that make your brand impossible to ignore."
    },
    {
      num: "03",
      title: "Packaging Design",
      desc: "Packaging that captures attention before the product does."
    },
    {
      num: "04",
      title: "Print Design",
      desc: "Print experiences that leave a lasting impression, on and off paper."
    },
    {
      num: "05",
      title: "Website Design, Development & UI/UX",
      desc: "Digital experiences that look beautiful and perform brilliantly."
    },
    {
      num: "06",
      title: "Digital Marketing",
      desc: "Smart strategies that turn attention into measurable growth."
    },
    {
      num: "07",
      title: "Video Editing & Motion Graphics",
      desc: "Compelling visuals that move people—and your brand."
    },
    {
      num: "08",
      title: "Videography & Photoshoot",
      desc: "Authentic visuals that tell your story with impact."
    }
  ];

  return (
    <>
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-container">
          <div className="services-hero-content">
            <span className="services-hero-tag">OUR SERVICES</span>
            <h1 className="services-hero-title">
              Creative Solutions <br />
              That <span className="services-title-accent">Drive Results</span>
            </h1>
            <p className="services-hero-desc">
              We combine creativity with strategy to deliver solutions that build brands, engage audiences, and accelerate growth for your business.
            </p>
          </div>
          
          <div className="services-hero-image-wrapper">
            <img 
              src="/images/hero/service-pic.png" 
              alt="Abstract purple fluid graphic" 
              className="services-hero-fluid-graphic"
            />
          </div>
        </div>
      </section>

      {/* All Services Grid List Section */}
      <section className="services-list-section">
        <div className="services-list-container">
          <span className="services-section-tag">WHAT WE DO</span>
          <h2 className="services-section-title">All Services</h2>
          <p className="services-section-desc">
            End-to-end creative and digital solutions designed to elevate your brand and achieve your business goals.
          </p>

          <div className="services-grid">
            {servicesList.map((service, index) => (
              <div key={index} className="services-card">
                <div className="services-card-header">
                  <h3 className="services-card-title">
                    <span className="services-card-num">{service.num}</span> {service.title}
                  </h3>
                  <div className="services-card-arrow">
                    <img src="/images/hero/Vector.png" alt="Arrow" className="services-card-arrow-icon" />
                  </div>
                </div>
                <p className="services-card-desc">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Have a project in mind CTA Banner */}
          <div className="services-cta-banner">
            <div className="services-cta-left">
              <div className="services-cta-badge">
                <img src="/images/hero/Vector-s.png" alt="Paper plane" className="services-cta-badge-icon" />
              </div>
              <div className="services-cta-text-wrapper">
                <h4 className="services-cta-title">Have a project in mind?</h4>
                <p className="services-cta-desc">Let's create something amazing together. Our team is ready <br /> to bring your ideas to life.</p>
              </div>
            </div>
            <div className="services-cta-right">
              <button className="services-cta-button">
                Start Your Project <img src="/images/hero/Vector-mind.png" alt="Arrow" className="services-cta-button-icon" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>

  <section className="services-cta-section" id="cta">
      <div className="services-cta-container" style={{ justifyContent: 'flex-end' }}>
        
        {/* Right Column: Actions (Button & Newsletter) */}
        <div className="services-cta-actions-column">
       
 
          {/* Newsletter Box */}
          <div className="services-newsletter-box">
            <h3 className="services-newsletter-title">Newsletter</h3>
            <p className="services-newsletter-subtitle">
              Stay updated with our latest <br /> work and insights.
            </p>
            
            <form className="services-newsletter-form" onSubmit={handleSubscribe}>
              <div className="services-input-group">
                <input 
                  type="email" 
                  className="services-email-input" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="services-submit-btn" aria-label="Subscribe">
                  <ArrowRightIcon />
                </button>
              </div>
              {subscribed && (
                <p className="services-success-message">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
</>
  );
};

export default Services;
