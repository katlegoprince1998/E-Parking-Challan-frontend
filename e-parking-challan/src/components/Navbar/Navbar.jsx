import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>☰</div>
      <h1
        className="center-text"
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          paddingTop: ".02rem",
        }}
      >
        <span style={{ color: "#00A9FF" }}>E-Parking </span>
        Challan.
      </h1>
      {showMenu && (
        <div className="menu-links">
          <Link to="/landing" className="nav-link">Landing</Link>
          <Link to="/report" className="nav-link">Report</Link>
          <Link to="/history" className="nav-link">View History</Link>
          <Link to="/" className="nav-link">Logout</Link>
        </div>
      )}
    </nav>
  );
};


