import React from "react";
import "./Signup.css";

export const Signup = () => {
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

        <section>
        <div className="login-layout">
          <h1 className="center-text login-header">Signup</h1>
          <form className="login-form-container" >
            <label className="flex-col">
              First Name{" "}
              <input
                type="text"
                placeholder="eparking"
                required
                className="login-input"
                name="firstName"
               
              />
            </label>
            <label className="flex-col">
              Last Name{" "}
              <input
                type="text"
                placeholder="challan"
                required
                className="login-input"
                name="lastName"
                
              />
            </label>
            <label className="flex-col">
              Pagge ID{" "}
              <input
                type="text"
                placeholder="D121537"
                required
                className="login-input"
                name="paggeId"
               
              />
            </label>
            <label className="flex-col">
              Username{" "}
              <input
                type="text"
                placeholder="eparkingchallan"
                required
                className="login-input"
                name="username"
                
              />
            </label>
            <label className="flex-col">
              Email Address{" "}
              <input
                type="email"
                placeholder="eparkingchallen@gmail.com"
                required
                className="login-input"
                name="email"
                
              />
            </label>
            <label className="flex-col">
              Password{" "}
              <input
                type="password"
                placeholder="******"
                required
                className="login-input"
                name="password"
                
                
              />
            </label>
            <label className="flex-col">
              Confirm Password{" "}
              <input
                type="password"
                placeholder="******"
                required
                className="login-input"
                name="confirmpassword"
              />
            </label>
            <label className="login-terms-condition">
              <input
                type="checkbox"
              />{" "}
              I accept all Terms & Conditions
            </label>
            <button type="submit" className="login-primary-btn">
              Create New Account
            </button>
            <span  className="login-link">
              Already have an account
            </span>
          </form>
        </div>
      </section>

 </>
    );
};