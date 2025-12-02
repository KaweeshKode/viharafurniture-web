import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">Vihara Furniture, Sri Lanka</p>
          <h1 className="hero-title">Imagine, Innovate, Inspire</h1>
          <Link to="/about" className="hero-btn">About Us &gt;</Link>
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
    </section>
  );
};

export default Hero;
