import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
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
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="social-links">
            <a
              href="https://www.facebook.com/share/17sPFNQY7r/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com/@vihara.furniture?_r=1&_t=ZS-91m6L7kpS8D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a href="mailto:viharafurniture11@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <div className="contact-info">
            <span>0757161759 / 0767536087</span>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar-container">
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
          <Link to="/booking" className="book-session-btn">
            Book a Session
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
