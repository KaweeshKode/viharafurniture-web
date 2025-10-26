import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="grid hero-grid">
          {/* Empty columns 1-2 on desktop */}
          <div className="col-4 md-col-8 lg-col-8 lg-col-start-3">
            <div className="hero-content">
              <p className="hero-subtitle">Vihara Furniture, Sri Lanka</p>
              <h1 className="hero-title">Imagine, Innovate, Inspire</h1>
              <Link to="/about" className="hero-btn">
                About Us &gt;
              </Link>
            </div>
          </div>

          {/* Location card: columns 11-12 on desktop */}
          <div className="col-4 md-col-3 lg-col-2 lg-col-start-11 self-end">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
