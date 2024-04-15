import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
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

      <div className="login-layout-container">
        <section>
          <div className="login-layout">
            <h1 className="center-text login-header">Login</h1>
            <form className="login-form-container">
              <label className="flex-col">
                Username{" "}
                <input
                  className="login-input"
                  type="text"
                  placeholder="E-Parking-Challan"
                  name="username"
                  pattern="[A-Za-z]{1,20}" // Allows only letters with a maximum length of 20
                  title="Username must be letters only with a maximum of 20 characters"
                  required // Marked as required
                />
              </label>
              <label className="flex-col">
                Password{" "}
                <input
                  className="login-input"
                  type="password"
                  placeholder="******"
                  name="password"
                  required // Marked as required
                />
              </label>
              <label className="login-terms-condition">
                <input
                  type="checkbox"
                />{" "}
                Remember Me
              </label>
              <Link to="/landing">
                <button className="login-primary-btn">Login</button>
              </Link>
              <Link to="/signup">
                <span className="login-link">Create New Account</span>
              </Link>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
