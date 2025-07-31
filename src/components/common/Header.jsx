import React from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <FaMapMarkerAlt className="logo-icon" />
        <div className="logo-text">
          <span className="logo-title">Localists</span>
          <span className="logo-subtext">Find Local Professionals Fast</span>
        </div>
      </div>

      <div className="mobile-nav">
        <div className="dropdown">
          Our Services <span className="dropdown-arrow">▼</span>
        </div>
        <FaSearch className="search-icon" />
        <a href="#login" className="login-link">
          Login
        </a>
      </div>

      <nav className="desktop-nav">
        <a href="#requests">My requests</a>
        <div className="user-menu">
          <span className="user-initial">C</span>
          <span className="username">Chander</span>
          <span className="dropdown-icon">▼</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
