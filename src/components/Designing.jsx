import React from "react";
import { Link } from "react-router-dom";
import "./Designing.css";

const Designing = () => {
  return (
    <section className="designing">
      <div className="container">
        <div className="grid">
          {/* Title full width */}
          <div className="col-4 md-col-8 lg-col-12">
            <h2 className="section-title">You Imagine, We Designing</h2>
          </div>

          {/* Text: columns 2-6 on desktop (5 cols) */}
          <div className="designing-text col-4 md-col-4 lg-col-5 lg-col-start-2">
            <p>
              In Sri Lanka First time we have introduced the consultations for
              you furniture designs and buying.
            </p>
          </div>

          {/* Expert card: columns 7-11 on desktop (5 cols) */}
          <Link to="/contact" className="expert-card col-4 md-col-4 lg-col-5">
            <h3>Meet Our Expert</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Designing;
