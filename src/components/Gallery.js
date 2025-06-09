import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    // List of expected gallery images
    const expectedImages = [
      { filename: 'project-01-living-room-hardwood.jpg', title: 'Living Room Hardwood', description: 'Red oak glue-down installation' },
      { filename: 'project-02-kitchen-lvp.jpg', title: 'Kitchen LVP', description: 'Waterproof luxury vinyl plank' },
      { filename: 'project-03-bedroom-laminate.jpg', title: 'Bedroom Laminate', description: 'High-quality laminate flooring' },
      { filename: 'project-04-office-hardwood.jpg', title: 'Home Office Hardwood', description: 'Maple hardwood installation' },
      { filename: 'project-05-bathroom-lvp.jpg', title: 'Bathroom LVP', description: 'Waterproof luxury vinyl' },
      { filename: 'project-06-basement-laminate.jpg', title: 'Basement Laminate', description: 'Moisture-resistant laminate' }
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
          <p>Take a look at some of our completed flooring installations in Jacksonville, NC</p>
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
              <h3>Gallery Coming Soon</h3>
              <p>We're preparing photos of our completed projects to showcase here.</p>
              <div className="upload-instructions">
                <h4>To add photos:</h4>
                <ol>
                  <li>Upload images to <code>/public/images/gallery/</code></li>
                  <li>Use naming format: <code>project-##-room-type-material.jpg</code></li>
                  <li>Examples: <code>project-01-living-room-hardwood.jpg</code></li>
                  <li>Refresh the page to see new photos</li>
                </ol>
              </div>
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