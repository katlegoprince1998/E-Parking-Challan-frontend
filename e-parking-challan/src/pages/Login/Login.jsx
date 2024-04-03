import React from "react";
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
                />
              </label>
              <label className="flex-col">
                Password{" "}
                <input
                  className="login-input"
                  type="password"
                  placeholder="******"
                  name="password"
                />
              </label>
              <label className="login-terms-condition">
                <input
                  type="checkbox"
                />{" "}
                Remember Me
              </label>
              <button className="login-primary-btn">Login</button>
              <span className="login-link">Create New Account</span>
            </form>
          </div>
        </section>
      </div>

    </>
  );
};
