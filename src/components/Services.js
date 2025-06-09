import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🪵',
      title: 'Glue-Down Hardwood',
      description: 'Expert installation of solid hardwood floors using professional adhesive techniques. Precise cuts, perfect alignment, and lasting results.',
      features: ['Solid hardwood installation', 'Professional adhesive application', 'Precise measuring & cutting', 'Subfloor preparation']
    },
    {
      icon: '✨',
      title: 'Luxury Vinyl Plank (LVP)',
      description: 'High-end LVP installation with attention to detail. Waterproof, durable, and beautiful floors that last for decades.',
      features: ['Premium LVP installation', 'Waterproof applications', 'Click-lock systems', 'Pattern matching']
    },
    {
      icon: '🔧',
      title: 'Laminate Flooring',
      description: 'Professional laminate installation with seamless transitions and perfect underlayment. Cost-effective without compromising quality.',
      features: ['Floating floor systems', 'Underlayment installation', 'Transition strips', 'Expansion gaps']
    },
    {
      icon: '🏗️',
      title: 'Demolition & Prep',
      description: 'Complete removal of existing flooring and subfloor preparation. We handle the dirty work so your new floors go down perfectly.',
      features: ['Old flooring removal', 'Subfloor leveling', 'Moisture testing', 'Surface preparation']
    },
    {
      icon: '🎯',
      title: 'Trim & Finishing',
      description: 'Professional trim work including baseboards, quarter rounds, and transitions. The details that make installations look flawless.',
      features: ['Baseboard installation', 'Quarter round molding', 'Transition strips', 'Door trim adjustments']
    },
    {
      icon: '📏',
      title: 'Precise Measurements',
      description: 'Accurate measuring and material calculation to minimize waste and ensure perfect fits. No surprises, no shortcuts.',
      features: ['Detailed measurements', 'Material calculations', 'Waste minimization', 'Layout planning']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Expert Services</h2>
          <p>Specialized flooring installation with the precision and quality you deserve</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <h3>Ready to Transform Your Space?</h3>
          <p>Contact us today for a detailed consultation and free estimate</p>
          <a href="#contact" className="cta-button">Get Your Free Quote</a>
        </div>
      </div>
    </section>
  );
};

export default Services; 