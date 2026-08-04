import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  // Sample data for the brand logos strip
  const brandLogos = [
    { src: '/images/logo/trusted-one.png', width: 106, height: 54 },
    { src: '/images/logo/trusted-two.png', width: 90, height: 29 },
    { src: '/images/logo/trusted-three.png', width: 98, height: 26 },
    { src: '/images/logo/trusted-four.png', width: 85, height: 51 },
    { src: '/images/logo/trusted-five.png', width: 46, height: 46 },
    { src: '/images/logo/trusted-six.png', width: 67, height: 70 }
  ];

  return (
    <section className="hero-section" id="hero">
      <div className="hero-content-wrapper">
        
        {/* Left Column: Text Content */}
        <div className="hero-text-content">
          <h1 className="hero-heading">
            We Create <span className="highlight-purple">Brands</span>
            <br />
            people remember.
          </h1>
          
          <p className="hero-description">
            Urban Knots is a creative agency that transforms ideas into brands people connect with. From strategy and identity to digital experiences and marketing, we create work that doesn't just look good—it gets noticed, starts conversations, and drives growth.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=urbanknotsllp@gmail.com', '_blank')}>
              Let's Build Your Brand
              <ArrowRightIcon />
            </button>
            <Link to="/portfolio" className="btn btn-secondary">
              View Our Work
              <ArrowRightIcon />
            </Link>
          </div>
        </div>

        {/* Abstract Graphic */}
        <img 
          src="/images/hero/fluid-graphic.png" 
          alt="Abstract purple fluid graphic" 
          className="fluid-graphic"
        />
      </div>

      {/* Bottom Section: Trusted Brands */}
      <div className="trusted-brands-section">
        <div className="divider-line">
          <span>TRUSTED BY GROWING BRANDS</span>
        </div>
        
        <div className="brands-logo-strip">
          <div className="brands-logo-track">
            {brandLogos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="brand-logo-container">
                <img 
                  src={logo.src} 
                  alt={`Brand Logo ${index + 1}`} 
                  className="brand-logo-img" 
                  style={{ width: `${logo.width}px`, height: `${logo.height}px` }} 
                />
              </div>
            ))}
            {brandLogos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="brand-logo-container">
                <img 
                  src={logo.src} 
                  alt={`Brand Logo ${index + 1}`} 
                  className="brand-logo-img" 
                  style={{ width: `${logo.width}px`, height: `${logo.height}px` }} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable SVG Arrow Component
const ArrowRightIcon = () => (
  <svg 
    width="34" 
    height="34" 
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

export default Hero;
