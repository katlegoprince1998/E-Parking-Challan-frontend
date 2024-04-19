import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";
import "./Login.css";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value: ${value}`);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  
    try {
      // Make sure the axios.post request is correctly formatted
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        formData
      );
      console.log("Login response:", response.data);
      // Handle the response accordingly
      // Assuming you receive the JWT after successful login
localStorage.setItem('token', response.data.jwt);

       // Navigate to login page upon successful registration
       navigate("/landing");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error
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
        <span style={{ color: "#00A9FF" }}>E-Parking </span>Challan.
      </h1>

      <div className="login-layout-container">
        <section>
          <div className="login-layout">
            <h1 className="center-text login-header">Login</h1>
            <form className="login-form-container" onSubmit={handleSubmit}>
              <label className="flex-col">
                Email{" "}
                <input
                  className="login-input"
                  type="email"
                  placeholder="E-Parking-Challan"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="flex-col">
                Password{" "}
                <input
                  className="login-input"
                  type="password"
                  placeholder="******"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
             
              <button type="submit" className="login-primary-btn">
                Login
              </button>
              <Link to="/signup" className="login-link">
                Create New Account
              </Link>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
