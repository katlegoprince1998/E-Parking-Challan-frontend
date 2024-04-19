import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./Signup.css";
import axios from 'axios';

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    idNo: "",
    password: "",
  });

  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make POST request to backend endpoint
      const response = await axios.post('http://localhost:8080/auth/register', formData);

      // Handle successful response
      console.log('Registration successful:', response.data);

      // Navigate to login page upon successful registration
      navigate("/login");

    } catch (error) {
      // Handle error
      console.error('Registration failed:', error);
    }
  };

  return (
    <>
      <h1 className="center-text" style={{ fontSize: "3.5rem", textAlign: "center", paddingTop: ".1rem" }}>
        <span style={{ color: "#00A9FF" }}>E-Parking </span>Challan.
      </h1>

      <section>
        <div className="login-layout">
          <h1 className="center-text login-header">Signup</h1>
          <form className="login-form-container" onSubmit={handleSubmit}>
            <label className="flex-col">
              First Name{" "}
              <input
                type="text"
                placeholder="Firstname.."
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
                placeholder="Lastname.."
                required
                className="login-input"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            <label className="flex-col">
              Email{" "}
              <input
                type="text"
                placeholder="email@gmail.com"
                required
                className="login-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className="flex-col">
              Cell No{" "}
              <input
                type="text"
                placeholder="07962151..."
                required
                className="login-input"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label className="flex-col">
              Id No{" "}
              <input
                type="text"
                placeholder="8851515..."
                required
                className="login-input"
                name="idNo"
                value={formData.idNo}
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
            <button type="submit" className="login-primary-btn">
              Create New Account
            </button>
            <Link to="/login" className="login-link">Already have an account</Link>
            {/* Use Link component to navigate to the /login route */}
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
