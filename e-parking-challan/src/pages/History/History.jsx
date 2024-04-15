import React from "react";
import "./History.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export const History = () => {
  return (
    <div>
      <Navbar />
      <p className="welcome">
        <span className="home-container-header">View History</span>
      </p>

      <div className="history-search">
        <label htmlFor="dateTime">Date and Time:</label>
        <input type="datetime-local" id="dateTime" name="dateTime" />

        <label htmlFor="violationType">Type of Violation:</label>
        <select id="violationType" name="violationType">
          <option value="">Select violation type...</option>
          <option value="Illegal Parking">Illegal Parking</option>
          <option value="Blocking Driveway">Blocking Driveway</option>
          <option value="Expired Meter">Expired Meter</option>
          <option value="Double Parking">Double Parking</option>
          <option value="Parking in Handicap Zone">Parking in Handicap Zone</option>
          <option value="Parking in No Parking Zone">Parking in No Parking Zone</option>
          {/* Add more options as needed */}
        </select>

        <button className="search-button">Search</button>
      </div>

      <p className="history-table-title">History Table</p>

      <table className="history-table">
        <thead>
          <tr>
            <th>License Plate</th>
            <th>Date and Time</th>
            <th>Location</th>
            <th>Type of Violation</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows will be populated with historical data */}
          <tr>
            <td>ABC123</td>
            <td>2022-04-15T12:00</td>
            <td>Main Street</td>
            <td>Illegal Parking</td>
            <td>Car parked in no parking zone</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>

      <Footer />
    </div>
  );
};
