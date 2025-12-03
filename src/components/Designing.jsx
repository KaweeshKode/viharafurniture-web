import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';
import './Designing.css';

const Designing = () => {
  return (
    <section className="designing">
      <div className="designing-container">
        <h2 className="section-title">You Imagine, We Design</h2>
        <div className="designing-content">
          <div className="designing-text">
            <p>
              For the first time in Sri Lanka, we have introduced personalized consultations for
              your furniture design and purchase. Our expert designers work closely with you to bring
              your vision to life, ensuring every piece perfectly matches your style and space requirements.
            </p>
          </div>
          <Link to="/booking" className="expert-card">
            <h3><FaUserTie /> Meet Our Expert</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Designing;
