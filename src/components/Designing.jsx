import React from 'react';
import { Link } from 'react-router-dom';
import './Designing.css';

const Designing = () => {
  return (
    <section className="designing">
      <h2 className="section-title">You Imagine, We Designing</h2>
      <div className="designing-content">
        <div className="designing-text">
          <p>
            In Sri Lanka First time we have introduced the consultations for
            you furniture designs and buying.
          </p>
        </div>
        <Link to="/contact" className="expert-card">
          <h3>Meet Our Expert</h3>
        </Link>
      </div>
    </section>
  );
};

export default Designing;
