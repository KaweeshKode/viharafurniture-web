import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaHome, FaStore, FaBox, FaInfoCircle, FaEnvelopeOpen } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/" className="footer-logo">
          <img src="/full-logo.png" alt="Vihara Furniture" />
        </Link>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/"><FaHome /> Home</Link></li>
            <li><Link to="/store"><FaStore /> Store</Link></li>
            <li><Link to="/packages"><FaBox /> Packages</Link></li>
            <li><Link to="/about"><FaInfoCircle /> About Us</Link></li>
            <li><Link to="/contact"><FaEnvelopeOpen /> Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <div>
              <p>No.108/C/1, Aluthgama,</p>
              <p>Bogamuwa, Yakkala</p>
              <p>Sri Lanka</p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone />
            <div>
              <p>0757161759</p>
              <p>0767536087</p>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <p>viharafurniture11@gmail.com</p>
          </div>
        </div>
        
        <div className="footer-section footer-cta-section">
          <h3>Get Started</h3>
          <p className="cta-description">Ready to transform your space? Book a free consultation with our design experts.</p>
          <Link to="/booking" className="footer-book-btn">
            Book a Session
          </Link>
        </div>
      </div>
      
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://www.facebook.com/share/17sPFNQY7r/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF /> Facebook
          </a>
          <a href="https://www.tiktok.com/@vihara.furniture?_r=1&_t=ZS-91m6L7kpS8D" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok /> TikTok
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© Copyright {new Date().getFullYear()} - Vihara Furniture</p>
      </div>
    </footer>
  );
};

export default Footer;
