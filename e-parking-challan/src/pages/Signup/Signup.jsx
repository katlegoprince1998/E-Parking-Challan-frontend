import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    paggeId: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password must match!");
    } else {
      // Passwords match, continue with form submission
      console.log("Form submitted successfully:", formData);
    }
  };

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
          <form className="login-form-container" onSubmit={handleSubmit}>
            <label className="flex-col">
              First Name{" "}
              <input
                type="text"
                placeholder="eparking"
                required
                className="login-input"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
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
                value={formData.lastName}
                onChange={handleChange}
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
                value={formData.paggeId}
                onChange={handleChange}
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
                value={formData.username}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label className="flex-col">
              Confirm Password{" "}
              <input
                type="password"
                placeholder="******"
                required
                className="login-input"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </label>
            <label className="login-terms-condition">
              <input type="checkbox" required />
              I accept all Terms & Conditions
            </label>
            <Link to="/login">
            <button type="submit" className="login-primary-btn">
              Create New Account
            </button>
            </Link>

            <Link to="/login">
              <span className="login-link">Already have an account</span>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};
