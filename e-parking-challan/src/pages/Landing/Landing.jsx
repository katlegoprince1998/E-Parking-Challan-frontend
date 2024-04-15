import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="welcome-container">
        <span className="home-container-header">Welcome, </span>
      </div>

      <div className="box-container">
        <div className="box red-box">
          <p className="box-content">4</p>
        </div>
        <div className="box green-box">
          <p className="box-content">Wrong Parking</p>
        </div>
      </div>

      <div className="box-labels">
        <p className="left-text">Recent Violations</p>
        <p className="right-text">Most Common Violation</p>
      </div>
      <Link to="/report">
        <button className="report-primary-btn report-container-btn">
          Report Violation
        </button>
      </Link>
      <Footer />
    </div>
  );
};
