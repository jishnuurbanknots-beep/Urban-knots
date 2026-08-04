import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import footerGraphic from '../../../assets/images/Rectangle.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Decorative Overlapping Glass Spheres Graphic */}
      <div className="footer-graphic-container">
        <img
          src={footerGraphic}
          alt="Abstract purple 3D spheres background graphic"
          className="footer-fluid-graphic"
        />
      </div>

      <div className="footer-container">

        {/* Column 1: Branding and Social Links */}
        <div className="footer-column branding-col">
          <h2 className="footer-logo">
            Urban <span className="logo-thin">Knots</span>
          </h2>
          <p className="footer-branding-text">
            Creating meaningful brands through creativity, strategy, and innovation.
          </p>
          <div className="footer-social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <img src="/images/footer/insta.png" alt="Instagram" className="insta-icon-img" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <img src="/images/footer/in.png" alt="LinkedIn" className="in-icon-img" />
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Behance">
              <img src="/images/footer/be.png" alt="Behance" className="be-icon-img" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column links-col">
          <h3 className="footer-col-title">Quick Links</h3>
          <ul className="footer-links-list">
            <li><Link to="/#hero">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/#process">Process</Link></li>
            <li><Link to="/#testimonials-faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Column 3: Services Links */}
        <div className="footer-column links-col">
          <h3 className="footer-col-title">Services</h3>
          <ul className="footer-links-list">
            <li><Link to="/#services">Branding & Identity</Link></li>
            <li><Link to="/#services">Creative Design</Link></li>
            <li><Link to="/#services">Website Development</Link></li>
            <li><Link to="/#services">UI/UX Design</Link></li>
            <li><Link to="/#services">Digital Marketing</Link></li>
            <li><Link to="/#services">Video & Motion Graphics</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Links */}
        <div className="footer-column contact-col">
          <h3 className="footer-col-title">Contact</h3>
          <ul className="footer-contact-list">

            {/* Email Row */}
            <li className="contact-item">
              <span className="contact-icon-wrapper">
                <img src="/images/footer/mail.png" alt="Email" />
              </span>
              <a href="mailto:urbanknotsllp@gmail.com" className="contact-link-text">
                urbanknotsllp@gmail.com
              </a>
            </li>

            {/* Phone Row */}
            <li className="contact-item">
              <span className="contact-icon-wrapper">
                <img src="/images/footer/phone.png" alt="Phone" />
              </span>
              <span className="contact-link-text">
                +91 8129 195 151, +91 8281 919 151
              </span>
            </li>

            {/* Address Row */}
            <li className="contact-item">
              <span className="contact-icon-wrapper">
                <img src="/images/footer/location.png" alt="Location" />
              </span>
              <span className="contact-link-text">
                C-29, 3rd Floor, Malabar Gate,<br /> Ram Mohan Road, Kozhikode - 673004
              </span>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Bar: Copyright details */}
      <div className="footer-bottom-bar">
        <p className="copyright-text">
          &copy; 2026 Urban Knots. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
