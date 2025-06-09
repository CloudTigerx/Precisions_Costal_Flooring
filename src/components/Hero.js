import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    // Try to load hero image from GitHub, fall back to placeholder
    const heroImagePath = '/images/hero/hero-main.jpg';
    const img = new Image();
    img.onload = () => setHeroImage(heroImagePath);
    img.onerror = () => setHeroImage(null); // Keep placeholder if image doesn't exist
    img.src = heroImagePath;
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Jacksonville's <span className="highlight">Premier</span> Flooring Installation Experts
            </h1>
            <p className="hero-subtitle">
              Specializing in precision glue-down hardwood, luxury vinyl plank, and laminate installations. 
              We deliver flawless results with attention to every detail, backed by years of hands-on expertise.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">5★</span>
                <span className="stat-label">Customer Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">24hr</span>
                <span className="stat-label">Quote Response</span>
              </div>
            </div>
            <div className="hero-cta">
              <a href="#quote" className="cta-primary">
                Get Free Estimate
              </a>
              <a href="#services" className="cta-secondary">
                View Our Work
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder" style={heroImage ? {
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            } : {}}>
              {!heroImage && (
                <div className="image-placeholder">
                  <div className="placeholder-icon">🏠</div>
                  <p>Professional Flooring Installation</p>
                  <small>Upload your hero image to /public/images/hero/hero-main.jpg</small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 