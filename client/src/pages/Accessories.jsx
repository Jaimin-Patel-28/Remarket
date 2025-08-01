import React from 'react';
import '../styles/Accessories.css';

const accessories = [
  {
    id: 1,
    name: "Wireless Earbuds",
    description: "Bluetooth-enabled earbuds with noise cancellation.",
  },
  {
    id: 2,
    name: "Portable Charger",
    description: "10000mAh fast-charging power bank.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    description: "Adjustable ergonomic laptop stand for desk use.",
  },
];

const Accessories = () => {
  return (
    <div className="accessories-page">
      <h1>Electronics Accessories</h1>
      <p className="subtitle">Explore affordable electronic accessories tailored for students.</p>
      <div className="accessories-grid">
        {accessories.map(item => (
          <div className="accessory-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
