import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Jacksonville Flooring Co.</h3>
              <p>Professional flooring installation services in Jacksonville, NC. Specializing in precision glue-down hardwood, luxury vinyl plank, and laminate installations.</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Glue-Down Hardwood Installation</li>
              <li>Luxury Vinyl Plank (LVP)</li>
              <li>Laminate Flooring</li>
              <li>Demolition & Preparation</li>
              <li>Trim & Finishing Work</li>
              <li>Professional Measurements</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <strong>📞 Phone:</strong>
              <a href="tel:+1234567890">(123) 456-7890</a>
            </div>
            <div className="contact-item">
              <strong>✉️ Email:</strong>
              <a href="mailto:info@jacksonvilleflooringco.com">info@jacksonvilleflooringco.com</a>
            </div>
            <div className="contact-item">
              <strong>📍 Service Area:</strong>
              <span>Jacksonville, NC & Surrounding Areas</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Business Hours</h4>
            <div className="hours-list">
              <div className="hour-item">
                <span>Monday - Friday</span>
                <span>7:00 AM - 6:00 PM</span>
              </div>
              <div className="hour-item">
                <span>Saturday</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
              <div className="hour-item">
                <span>Sunday</span>
                <span>Emergency Only</span>
              </div>
            </div>
            <div className="quick-contact">
              <a href="#quote" className="footer-cta">Get Free Quote</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {currentYear} Jacksonville Flooring Co. All rights reserved.</p>
            <div className="legal-links">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Professional Installation</span>
              <span>•</span>
              <span>Quality Guaranteed</span>
            </div>
          </div>
          
          <div className="footer-credits">
            <p>Serving Jacksonville, NC with precision flooring installation since day one.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 