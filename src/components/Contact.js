import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    sqft: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data - in production this would send to your backend
    console.log('Quote Request:', formData);
    alert('Thank you for your quote request! We\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      sqft: '',
      timeline: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get Your Free Estimate</h2>
          <p>Ready to transform your space? Contact Jacksonville Flooring Co. today for a detailed consultation and competitive quote.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>🏢 Business Information</h3>
              <div className="info-item">
                <strong>Jacksonville Flooring Co.</strong>
                <p>Professional Flooring Installation</p>
              </div>
              <div className="info-item">
                <strong>📍 Service Area</strong>
                <p>Jacksonville, NC and surrounding areas</p>
              </div>
              <div className="info-item">
                <strong>📞 Phone</strong>
                <p><a href="tel:+1234567890">(123) 456-7890</a></p>
              </div>
              <div className="info-item">
                <strong>✉️ Email</strong>
                <p><a href="mailto:info@jacksonvilleflooringco.com">info@jacksonvilleflooringco.com</a></p>
              </div>
            </div>
            
            <div className="service-hours">
              <h4>🕒 Business Hours</h4>
              <div className="hours-grid">
                <div>Monday - Friday</div>
                <div>7:00 AM - 6:00 PM</div>
                <div>Saturday</div>
                <div>8:00 AM - 4:00 PM</div>
                <div>Sunday</div>
                <div>Emergency Only</div>
              </div>
            </div>
            
            <div className="response-guarantee">
              <h4>⚡ Quick Response Guarantee</h4>
              <p>We respond to all quote requests within 24 hours. For urgent projects, we offer same-day consultations.</p>
            </div>
          </div>
          
          <div className="quote-form-container" id="quote">
            <form onSubmit={handleSubmit} className="quote-form">
              <h3>Request Your Free Quote</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select flooring type</option>
                    <option value="glue-down-hardwood">Glue-Down Hardwood</option>
                    <option value="luxury-vinyl-plank">Luxury Vinyl Plank (LVP)</option>
                    <option value="laminate">Laminate Flooring</option>
                    <option value="multiple">Multiple Types</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="sqft">Approximate Square Footage</label>
                  <input
                    type="number"
                    id="sqft"
                    name="sqft"
                    value={formData.sqft}
                    onChange={handleChange}
                    placeholder="e.g., 500"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="timeline">Preferred Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select timeline</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1-2weeks">1-2 weeks</option>
                  <option value="1month">Within 1 month</option>
                  <option value="2-3months">2-3 months</option>
                  <option value="flexible">Flexible timing</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your project, specific requirements, or any questions you have..."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Get My Free Quote
              </button>
              
              <p className="form-disclaimer">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 