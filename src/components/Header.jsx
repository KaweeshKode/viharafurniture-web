import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Top bar aligned to grid */}
      <div className="top-bar">
        <div className="container">
          <div className="grid topbar-grid">
            <div className="col-4 md-col-4 lg-col-6 topbar-left">
              <div className="social-links">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a href="mailto:viharafurniture@gmail.com" aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </div>
            <div className="col-4 md-col-4 lg-col-6 topbar-right">
              <div className="contact-info">
                <span>+0728326219 / +0748563926</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar aligned to grid */}
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Vihara Furniture" />
        </Link>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              className={isActive("/") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/store"
              className={isActive("/store") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Store
            </Link>
          </li>
          <li>
            <Link
              to="/packages"
              className={isActive("/packages") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Packages
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={isActive("/about") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive("/contact") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link to="/contact" className="book-session-btn">
          Book a Session
        </Link>
      </nav>
    </header>
  );
};

export default Header;
