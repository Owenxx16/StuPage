import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className="slideshow-wrapper">
      <div
        className="slideshow-slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} className="slide-image" alt={`Slide ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
