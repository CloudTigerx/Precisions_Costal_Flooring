import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Jacksonville Flooring Co.</h2>
            <span className="tagline">Professional Installation Since Day One</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </a>
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <a href="#quote" className="nav-link cta-button" onClick={() => setIsMenuOpen(false)}>
              Get Quote
            </a>
          </div>
          
          <div className="nav-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 