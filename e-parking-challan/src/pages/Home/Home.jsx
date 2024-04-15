import React from "react";
import { Link} from "react-router-dom";
import "./Home.css";
import homeImg1 from "../../images/landingpic.png";

export const Home = () => {
  return (
    <>
      <h1
        className="center-text"
        style={{
          fontSize: "3.5rem",
          textAlign: "center",
          paddingTop: ".1rem",
        }}
      >
        <span style={{ color: "#00A9FF" }}>E-Parking </span>
        Challan.
      </h1>

      <div className="home-container-layout">
        <div>
          <img src={homeImg1} className="home-image-banner" alt="banner" />
        </div>

        <div className="home-container-content">
          <p className="left-text margin">
            <span className="home-container-header">Park</span>
            <small className="home-container-small-header">RIGHT</small>
          </p>
          <p className="left-text margin">
            <span className="home-container-header">Pay</span>
            <small className="home-container-small-header">RIGHT</small>
          </p>
          <p className="left-text margin">
            <small className="home-container-small-header">
              E-PARKING CHALLAN'S
            </small>
            <span className="home-container-header">Promise</span>
          </p>
          <Link to="/signup">
          <button className="login-primary-btn home-container-btn" >
            Create account
          </button>
          </Link>
          
          <Link to="/login">
          <p className="home-container-login-link center-text orange-color">
            Already have an account ?
          </p>
          </Link>
        </div>
      </div>
    </>
  );
};


