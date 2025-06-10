import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    // List of actual uploaded gallery images
    const expectedImages = [
      { filename: 'project-01-completed-work.jpg', title: 'Professional Installation', description: 'Precision flooring installation with clean finish' },
      { filename: 'project-02-flooring-installation.jpg', title: 'Expert Craftsmanship', description: 'Quality installation process in progress' },
      { filename: 'project-03-hardwood-flooring.jpg', title: 'Hardwood Excellence', description: 'Beautiful hardwood flooring installation' },
      { filename: 'project-04-precision-installation.jpg', title: 'Precision Work', description: 'Detailed installation with perfect alignment' },
      { filename: 'project-05-luxury-vinyl.jpg', title: 'Luxury Vinyl Installation', description: 'High-end LVP installation project' },
      { filename: 'project-06-detail-work.jpg', title: 'Detail-Oriented Work', description: 'Close attention to every detail and finish' },
      { filename: 'project-07-professional-finish.jpg', title: 'Professional Finish', description: 'Clean, professional completion' },
      { filename: 'project-08-quality-installation.jpg', title: 'Quality Installation', description: 'Superior installation techniques' },
      { filename: 'project-09-completed-project.jpg', title: 'Completed Project', description: 'Another satisfied customer installation' }
    ];

    // Check which images actually exist
    const loadImages = async () => {
      const availableImages = [];
      
      for (const imageInfo of expectedImages) {
        const imagePath = `/images/gallery/${imageInfo.filename}`;
        try {
          const img = new Image();
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = imagePath;
          });
          availableImages.push({
            ...imageInfo,
            src: imagePath
          });
        } catch (error) {
          // Image doesn't exist, skip it
          console.log(`Gallery image not found: ${imageInfo.filename}`);
        }
      }
      
      setGalleryImages(availableImages);
    };

    loadImages();
  }, []);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Our Recent Work</h2>
          <p>Real photos from our completed flooring installations in Jacksonville, NC</p>
        </div>
        
        {galleryImages.length > 0 ? (
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <h4>{image.title}</h4>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery-placeholder">
            <div className="placeholder-content">
              <div className="placeholder-icon">📷</div>
              <h3>Loading Gallery...</h3>
              <p>Preparing photos of our completed projects.</p>
            </div>
          </div>
        )}
        
        <div className="gallery-cta">
          <h3>Ready to See Your Space Transformed?</h3>
          <p>Every project starts with a free consultation and detailed quote</p>
          <a href="#contact" className="cta-button">Schedule Your Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 