import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Vihara Furniture, Sri Lanka</p>
        <h1 className="hero-title">Imagine, Innovate, Inspire</h1>
        <Link to="/about" className="hero-btn">About Us &gt;</Link>
      </div>
      <div className="location-card">
        <div className="location-icon">
          <FaMapMarkerAlt />
        </div>
        <h3>Location</h3>
        <p>#41, Dutugamunu Street,</p>
        <p>Pamankada,</p>
        <p>Kohuwala</p>
        <p>Sri Lanka</p>
      </div>
    </section>
  );
};

export default Hero;
