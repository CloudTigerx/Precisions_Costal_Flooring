import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-tag">About Jacksonville Flooring Co.</div>
            <h2>Precision Flooring Installation You Can Trust</h2>
            <p className="about-intro">
              Jacksonville Flooring Co. has been serving the Jacksonville, NC community with 
              professional flooring installation services. We specialize in delivering 
              flawless results through meticulous attention to detail and uncompromising quality standards.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div>
                  <h4>Precision Installation</h4>
                  <p>Every cut is measured twice, every plank placed with care. Our lead technician brings years of hands-on experience to ensure perfect results.</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🛠️</div>
                <div>
                  <h4>Professional Equipment</h4>
                  <p>We use industry-leading tools and techniques for glue-down hardwood, LVP, and laminate installations. Quality tools, quality results.</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🏠</div>
                <div>
                  <h4>Local Jacksonville Expertise</h4>
                  <p>We understand the unique challenges of flooring installation in coastal North Carolina, from humidity considerations to local building requirements.</p>
                </div>
              </div>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">Clean</span>
                <span className="stat-label">Professional Work</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Tight</span>
                <span className="stat-label">Precise Cuts</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Polished</span>
                <span className="stat-label">Finished Results</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <div className="about-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">👨‍🔧</div>
                  <h4>Meet Our Lead Technician</h4>
                  <p>Expert in glue-down hardwood and LVP installation with a commitment to craftsmanship excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="credentials">
          <h3>Why Choose Jacksonville Flooring Co.?</h3>
          <div className="credentials-grid">
            <div className="credential-item">
              <span className="credential-icon">🛡️</span>
              <h4>Fully Insured</h4>
              <p>General liability insurance protects your property and our work</p>
            </div>
            <div className="credential-item">
              <span className="credential-icon">📋</span>
              <h4>Licensed & Bonded</h4>
              <p>All necessary permits and licensing for professional installation</p>
            </div>
            <div className="credential-item">
              <span className="credential-icon">🚛</span>
              <h4>Full-Service Setup</h4>
              <p>From materials procurement to cleanup, we handle every detail</p>
            </div>
            <div className="credential-item">
              <span className="credential-icon">⭐</span>
              <h4>Satisfaction Guaranteed</h4>
              <p>We stand behind our work with comprehensive quality assurance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 