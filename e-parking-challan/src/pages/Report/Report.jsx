import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./Report.css";

export const Report = () => {
  const [formData, setFormData] = useState({
    numberPlate: "",
    amount: "",
    location: "",
    typeOfViolation: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const data = {
      numberPlate: formData.numberPlate,
      amount: formData.amount,
      location: formData.location,
      typeOfViolation: formData.typeOfViolation,
      description: formData.description,
    };

    try {
      const response = await axios.post("http://localhost:8080/dashboard/report", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Report created successfully:", response.data);
      navigate("/landing"); // Redirect to landing page after successful submission
    } catch (error) {
      console.error("Error creating report:", error);
      // Handle error state or display an error message to the user
    }
  };

  return (
    <div>
      <Navbar />
      <p className="welcome">
        <span className="home-container-header">Report Violation</span>
      </p>

      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="numberPlate">License Plate:</label>
          <input
            type="text"
            id="numberPlate"
            name="numberPlate"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            name="amount"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="typeOfViolation">Type of Violation:</label>
          <select
            id="typeOfViolation"
            name="typeOfViolation"
            value={formData.typeOfViolation}
            onChange={handleInputChange}
          >
            
            <option value="">Select violation type...</option>
            <option value="Illegal Parking">Illegal Parking</option>
            <option value="Blocking Driveway">Blocking Driveway</option>
            <option value="Expired Meter">Expired Meter</option>
            <option value="Double Parking">Double Parking</option>
            <option value="Parking in Handicap Zone">Parking in Handicap Zone</option>
            <option value="Parking in No Parking Zone">Parking in No Parking Zone</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location">Upload picture:</label>
          <input
            type="file"
            id="file"
            name="file"
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      <Footer />
    </div>
  );
};
