import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef(null);
  
  const heroImages = [
    '/hero-bg1.jpg',
    '/hero-bg2.jpg',
    '/hero-bg3.jpg',
    '/hero-bg4.jpg'
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, heroImages.length]);

  // Previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    clearInterval(intervalRef.current);
  };

  // Next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
    clearInterval(intervalRef.current);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Touch swipe handling
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 75) {
      nextImage(); // Swiped left
    }
    if (touchEnd - touchStart > 75) {
      prevImage(); // Swiped right
    }
  };

  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url('${heroImages[currentImage]}')` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">Vihara Furniture, Sri Lanka</p>
          <h1 className="hero-title">Imagine, Innovate, Inspire</h1>
          <Link to="/about" className="hero-btn">
            About Us
            <FaArrowRight />
          </Link>
        </div>
        <div className="location-card">
          <div className="location-card-header">
            <div className="location-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="location-card-content">
              <h3>Location</h3>
              <p>No.108/C/1,</p>
              <p>Aluthgama,</p>
              <p>Bogamuwa,</p>
              <p>Yakkala</p>
              <p>Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="carousel-arrow carousel-arrow-left" onClick={prevImage} aria-label="Previous image">
        <FaChevronLeft />
      </button>
      <button className="carousel-arrow carousel-arrow-right" onClick={nextImage} aria-label="Next image">
        <FaChevronRight />
      </button>

      {/* Dot Indicators */}
      <div className="carousel-dots">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
