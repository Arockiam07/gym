import React, { useState, useEffect } from 'react';

function GymGallery() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  // Container style change
  const containerStyle = {
    backgroundColor: '#000',
    padding: isMobile ? '20px 0 20px 20px' : '40px 10%',
    // Mobile-la Flex (Carousel), Desktop-la Masonry (Columns)
    display: isMobile ? 'flex' : 'block',
    overflowX: isMobile ? 'auto' : 'visible',
    columnCount: isMobile ? 'none' : 4,
    columnGap: '15px',
    scrollSnapType: isMobile ? 'x mandatory' : 'none',
    scrollbarWidth: 'none', // Firefox hide scrollbar
    WebkitOverflowScrolling: 'touch'
  };

  const imgWrapperStyle = {
    display: 'inline-block',
    // Mobile-la fixed width for carousel effect
    minWidth: isMobile ? '280px' : 'auto', 
    width: isMobile ? '280px' : '100%',
    marginRight: isMobile ? '15px' : '0',
    marginBottom: isMobile ? '0' : '15px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(255, 0, 0, 0.2)',
    cursor: 'pointer',
    scrollSnapAlign: 'start', // Carousel snapping
    transition: 'transform 0.3s ease',
    flexShrink: 0
  };

  const imgStyle = {
    width: '100%',
    height: isMobile ? '400px' : 'auto', // Mobile-la uniform height carousel
    display: 'block',
    objectFit: 'cover'
  };

  const images = [
    "https://i.pinimg.com/736x/1d/44/ec/1d44ecab1591013165637b637615d7a1.jpg",
    "https://i.pinimg.com/1200x/1e/05/0b/1e050bcc880ad6490e3cb135ed5b097b.jpg",
    "https://i.pinimg.com/1200x/7e/1f/5b/7e1f5b70fa4e9d22e0e11024c8c7a777.jpg",
    "https://i.pinimg.com/1200x/c0/17/60/c01760924cfc783be218da6d340289a3.jpg",
    "https://i.pinimg.com/1200x/4f/04/26/4f0426c5d01e7ff68d083a2c88e97722.jpg",
    "https://i.pinimg.com/736x/58/0b/47/580b478e686d5a3e68a15d3be64b6b01.jpg",
    "https://i.pinimg.com/1200x/76/16/22/761622051e28ed63b3f09c20bd199828.jpg",
    "https://i.pinimg.com/736x/5d/55/a6/5d55a6d4f4b66609f05344ead02228aa.jpg"
  ];

  return (
    <div style={{ backgroundColor: '#000', paddingBottom: isMobile ? '20px' : '0' }}>
      {isMobile && (
        <p style={{ color: '#888', paddingLeft: '20px', fontSize: '12px' }}>
          Swipe left to see more →
        </p>
      )}
      
      <section style={containerStyle} className="hide-scrollbar">
        {/* Style tag for hiding scrollbar visually */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        {images.map((src, index) => (
          <div 
            key={index} 
            style={imgWrapperStyle}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={src}
              alt={`Gym gallery ${index + 1}`}
              style={imgStyle}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default GymGallery;