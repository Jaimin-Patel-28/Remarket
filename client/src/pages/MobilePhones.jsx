import React from "react";
import "../styles/MobilePhones.css";

const mobileDevices = [
  {
    title: "iPhone 13",
    description: "128GB, A15 Bionic chip, excellent camera quality.",
    link: "#"
  },
  {
    title: "Samsung Galaxy S21",
    description: "120Hz display, powerful performance, sleek design.",
    link: "#"
  },
  {
    title: "iPad Air (5th Gen)",
    description: "M1 chip, 10.9” Liquid Retina display.",
    link: "#"
  },
  {
    title: "Lenovo Tab M10",
    description: "Affordable tablet with long battery life and Dolby audio.",
    link: "#"
  }
];

const MobilePhones = () => {
  return (
    <div className="mobile-phones-page">
      <h1>Mobile Phones & Tablets</h1>
      <p className="subtitle">Explore a variety of smartphones and tablets perfect for learning, entertainment, and productivity.</p>
      <div className="device-grid">
        {mobileDevices.map((device, index) => (
          <div key={index} className="device-card">
            <h3>{device.title}</h3>
            <p>{device.description}</p>
            <button onClick={() => window.location.href = device.link}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobilePhones;
