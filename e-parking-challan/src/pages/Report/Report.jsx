import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Report.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export const Report = () => {
  const [violationType, setViolationType] = useState(""); // State to track the selected violation type

  // Function to handle changes in the violation type dropdown
  const handleViolationTypeChange = (e) => {
    setViolationType(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <p className="welcome">
        <span className="home-container-header">Report Violation</span>
      </p>

      <form className="report-form">
        <div className="form-group">
          <label htmlFor="licensePlate">License Plate:</label>
          <input type="text" id="licensePlate" name="licensePlate" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" />
        </div>
        <div className="form-group">
          <label htmlFor="violationType">Type of Violation:</label>
          <select
            id="violationType"
            name="violationType"
            value={violationType} // Set the value of the select to the state
            onChange={handleViolationTypeChange} // Handle changes in the select
          >
            <option value="">Select violation type...</option>
            <option value="Illegal Parking">Illegal Parking</option>
            <option value="Blocking Driveway">Blocking Driveway</option>
            <option value="Expired Meter">Expired Meter</option>
            <option value="Double Parking">Double Parking</option>
            <option value="Parking in Handicap Zone">Parking in Handicap Zone</option>
            <option value="Parking in No Parking Zone">Parking in No Parking Zone</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="picture">Upload Picture:</label>
          <input type="file" id="picture" name="picture" accept="image/*" />
        </div>
        <Link to="/loginpage">
          <button type="submit">Submit</button>
        </Link>
      </form>

      <Footer />
    </div>
  );
};
