import React from 'react';
import { Link } from 'react-router-dom';
import './DreamFurniture.css';

const DreamFurniture = () => {
  return (
    <section className="dream-furniture">
      <h2 className="section-title">Meet Your Dream Furniture's</h2>
      <div className="furniture-cards">
        <Link to="/store" className="furniture-card store-card">
          <h3>Go to Store</h3>
        </Link>
        <Link to="/packages" className="furniture-card packages-card">
          <h3>Explore Packages</h3>
        </Link>
      </div>
    </section>
  );
};

export default DreamFurniture;
