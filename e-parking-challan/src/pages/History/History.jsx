import React, { useState, useEffect } from "react";
import "./History.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import axios from "axios";

export const History = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    fetchHistoryData(); // Fetch all data initially
  }, []); // Empty dependency array to run once on component mount

  const fetchHistoryData = () => {
    axios.get("http://localhost:8080/dashboard/violations")
      .then((response) => {
        setHistoryData(response.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching history data:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <p className="welcome">
        <span className="home-container-header">View History</span>
      </p>

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
          {historyData.map((report) => (
            <tr key={report.id}>
              <td>{report.numberPlate}</td>
              <td>{report.dayAndTime}</td>
              <td>{report.location}</td>
              <td>{report.typeOfViolation}</td>
              <td>{report.description}</td>
            </tr>
          ))}
          {historyData.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Footer />
    </div>
  );
};
