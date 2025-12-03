import React from 'react';
import { Link } from 'react-router-dom';
import { FaStore, FaBox } from 'react-icons/fa';
import './DreamFurniture.css';

const DreamFurniture = () => {
  return (
    <section className="dream-furniture">
      <div className="dream-furniture-container">
        <h2 className="section-title">Meet Your Dream Furniture</h2>
        <div className="furniture-cards">
          <Link to="/store" className="furniture-card store-card">
            <h3><FaStore /> Go to Store</h3>
          </Link>
          <Link to="/packages" className="furniture-card packages-card">
            <h3><FaBox /> Explore Packages</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DreamFurniture;
