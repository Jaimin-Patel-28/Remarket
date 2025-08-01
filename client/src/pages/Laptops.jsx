import React from "react";
import "../styles/Laptops.css";

const laptops = [
  {
    name: "Dell Inspiron 15",
    description: "i5 11th Gen, 8GB RAM, 512GB SSD. Perfect for students.",
  },
  {
    name: "HP Pavilion",
    description: "Ryzen 5, 16GB RAM, 1TB HDD. Lightweight and reliable.",
  },
  {
    name: "MacBook Air M1",
    description: "Fast performance, long battery life. 8GB/256GB variant.",
  },
];

const Laptops = () => {
  return (
    <div className="laptops-page">
      <h1>Laptops for Students</h1>
      <p className="subtitle">Browse quality laptops suitable for studies and everyday use.</p>
      <div className="laptop-grid">
        {laptops.map((laptop, index) => (
          <div className="laptop-card" key={index}>
            <h3>{laptop.name}</h3>
            <p>{laptop.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptops;
