import React, { useState, useEffect } from 'react';
import './BackgroundSlideshow.css';
import aquaticDisplay from '../../assets/Aquatic life matter project display.jpg';
import louLineImage from '../../assets/Lou\'s Line.png';
import louworldImage from '../../assets/Louworld_1.png';

const BackgroundSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const projectImages = [
    aquaticDisplay,
    louLineImage,
    louworldImage
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercentage = scrollY / windowHeight;
      
      // Calculate which image should be shown based on scroll position
      const newIndex = Math.min(Math.floor(scrollPercentage), projectImages.length - 1);
      setCurrentImageIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projectImages.length]);

  return (
    <div className="background-slideshow">
      {/* Louworld image always visible */}
      <div
        className="background-image louworld-always-visible"
        style={{
          backgroundImage: `url(${louworldImage})`,
          zIndex: 10
        }}
      />
      {/* Other images based on scroll */}
      {projectImages.map((image, index) => (
        <div
          key={index}
          className={`background-image ${index === currentImageIndex ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${image})`,
            zIndex: projectImages.length - index
          }}
        />
      ))}
      <div className="background-overlay" />
    </div>
  );
};

export default BackgroundSlideshow;