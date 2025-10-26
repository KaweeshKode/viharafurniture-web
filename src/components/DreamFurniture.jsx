import React from "react";
import { Link } from "react-router-dom";
import "./DreamFurniture.css";

const DreamFurniture = () => {
  return (
    <section className="dream-furniture">
      <div className="container">
        <div className="grid">
          {/* Title spans full grid */}
          <div className="col-4 md-col-8 lg-col-12">
            <h2 className="section-title">Meet Your Dream Furniture's</h2>
          </div>

          {/* Empty column 1 on desktop */}
          <div
            className="lg-col-1"
            style={{ gridColumn: "1 / 2", display: "none" }}
          ></div>

          {/* Go to Store: columns 2-6 on desktop (5 cols) */}
          <Link
            to="/store"
            className="furniture-card store-card col-4 md-col-4 lg-col-5 lg-col-start-2"
          >
            <h3>Go to Store</h3>
          </Link>

          {/* Explore Packages: columns 7-11 on desktop (5 cols) */}
          <Link
            to="/packages"
            className="furniture-card packages-card col-4 md-col-4 lg-col-5"
          >
            <h3>Explore Packages</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DreamFurniture;
