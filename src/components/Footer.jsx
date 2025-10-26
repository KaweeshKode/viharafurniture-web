import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid footer-main">
          {/* Logo: columns 1-3 */}
          <Link to="/" className="footer-logo col-4 md-col-3 lg-col-3">
            <img src="/logo.svg" alt="Vihara Furniture" />
          </Link>

          {/* Quick Links: columns 4-7 */}
          <div className="footer-section col-4 md-col-3 lg-col-4">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">&gt;Home</Link>
              </li>
              <li>
                <Link to="/store">&gt;Store</Link>
              </li>
              <li>
                <Link to="/packages">&gt;Packages</Link>
              </li>
              <li>
                <Link to="/about">&gt;About Us</Link>
              </li>
              <li>
                <Link to="/contact">&gt;Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact: columns 8-12 */}
          <div className="footer-section col-4 md-col-2 lg-col-5">
            <h3>Contact</h3>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <p>#41, Dutugamunu Street,</p>
                <p>Pamankada,</p>
                <p>Kohuwala</p>
                <p>Sri Lanka</p>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone />
              <div>
                <p>+0728326219</p>
                <p>+0748563926</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <p>viharafurniture@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            &gt;Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            &gt;Instagram
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            &gt;TikTok
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright - Vihara Furniture</p>
      </div>
    </footer>
  );
};

export default Footer;
