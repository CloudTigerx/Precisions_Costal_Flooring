import React, { useState, useEffect } from 'react';
import './Materials.css';

const Materials = () => {
  const [materialsData, setMaterialsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Load pricing data from JSON
    const loadMaterials = async () => {
      try {
        const response = await fetch('/data/pricing-updated.json');
        const data = await response.json();
        setMaterialsData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading materials data:', error);
        setLoading(false);
      }
    };

    loadMaterials();
  }, []);

  if (loading) {
    return (
      <section id="materials" className="materials">
        <div className="materials-container">
          <div className="loading">Loading materials...</div>
        </div>
      </section>
    );
  }

  if (!materialsData) {
    return (
      <section id="materials" className="materials">
        <div className="materials-container">
          <div className="error">Unable to load materials data</div>
        </div>
      </section>
    );
  }

  // Flatten materials data for easier display
  const getAllMaterials = () => {
    const allMaterials = [];
    
    Object.entries(materialsData.materials).forEach(([categoryKey, category]) => {
      Object.entries(category).forEach(([typeKey, type]) => {
        Object.entries(type).forEach(([productKey, product]) => {
          allMaterials.push({
            ...product,
            categoryKey,
            typeKey,
            productKey,
            totalCost: product.pricePerSqFt + product.laborPerSqFt
          });
        });
      });
    });
    
    return allMaterials;
  };

  const allMaterials = getAllMaterials();

  // Filter materials based on selected category
  const filteredMaterials = selectedCategory === 'all' 
    ? allMaterials 
    : allMaterials.filter(material => material.categoryKey === selectedCategory);

  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(allMaterials.map(m => m.categoryKey))];

  return (
    <section id="materials" className="materials">
      <div className="materials-container">
        <div className="materials-header">
          <h2>Premium Flooring Materials</h2>
          <p>Professionally installed flooring options with transparent pricing - materials and labor included</p>
          <div className="updated-info">
            <span>Pricing Updated: {materialsData.lastUpdated}</span>
          </div>
        </div>

        <div className="materials-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All Materials' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="materials-grid">
          {filteredMaterials.map((material, index) => (
            <div key={`${material.categoryKey}-${material.productKey}`} className="material-card">
              <div className="material-image">
                {material.sampleImage ? (
                  <img 
                    src={material.sampleImage} 
                    alt={material.name}
                    onError={(e) => {
                      e.target.src = '/images/placeholder-material.jpg';
                    }}
                  />
                ) : (
                  <div className="image-placeholder">
                    <span className="material-icon">🪵</span>
                  </div>
                )}
                <div className="material-badge">
                  {material.categoryKey.toUpperCase()}
                </div>
              </div>
              
              <div className="material-content">
                <h3 className="material-name">{material.name}</h3>
                <p className="material-description">{material.description}</p>
                
                <div className="material-specs">
                  <div className="spec-item">
                    <span className="spec-label">SKU:</span>
                    <span className="spec-value">{material.sku}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Coverage:</span>
                    <span className="spec-value">{material.sqftPerBox} sq ft/box</span>
                  </div>
                </div>

                <div className="material-pricing">
                  <div className="price-breakdown">
                    <div className="price-item">
                      <span className="price-label">Material:</span>
                      <span className="price-value">${material.pricePerSqFt}/sq ft</span>
                    </div>
                    <div className="price-item">
                      <span className="price-label">Labor:</span>
                      <span className="price-value">${material.laborPerSqFt}/sq ft</span>
                    </div>
                  </div>
                  <div className="total-price">
                    <span className="total-label">Total Installed:</span>
                    <span className="total-value">${material.totalCost.toFixed(2)}/sq ft</span>
                  </div>
                </div>

                <div className="material-actions">
                  <a href="#contact" className="quote-btn-full">
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="materials-cta">
          <h3>Don't See What You're Looking For?</h3>
          <p>We source from multiple suppliers and can get almost any flooring material you need. Let us handle everything from sourcing to installation.</p>
          <a href="#contact" className="cta-button">Request Custom Quote</a>
        </div>
      </div>
    </section>
  );
};

export default Materials; 