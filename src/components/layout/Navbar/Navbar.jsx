import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${menuOpen ? 'navbar-menu-open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          Urban <span className="navbar-brand-light">Knots</span>
        </Link>

        {/* Hamburger Menu Toggle Button */}
        <button
          className={`navbar-toggle ${menuOpen ? 'navbar-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          aria-expanded={menuOpen}
        >
          <span className="navbar-hamburger-bar"></span>
          <span className="navbar-hamburger-bar"></span>
          <span className="navbar-hamburger-bar"></span>
        </button>

        <nav className={`navbar-nav ${menuOpen ? 'navbar-open' : ''}`}>

          <ul className="navbar-links">
            <li><NavLink to="/" onClick={closeMenu} end>Home</NavLink></li>
            <li><NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink></li>
            <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>

          {/* Mobile Action inside menu drawer */}
          <div className="navbar-mobile-action">
            <a href="https://wa.me/918129195151" target="_blank" rel="noopener noreferrer" className="navbar-btn-talk" onClick={closeMenu}>
              Let's Talk
              <span className="navbar-icon-circle">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </nav>

        {/* Desktop Action */}
        <div className="navbar-action">
          <a href="https://wa.me/918129195151" target="_blank" rel="noopener noreferrer" className="navbar-btn-talk">
            Let's Talk
            <span className="navbar-icon-circle">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
