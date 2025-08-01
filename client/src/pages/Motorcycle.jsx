import React from 'react';
// import './Motorcycle.css'; // Link to the CSS below
import '../styles/Motorcycle.css';


const Motorcycle = () => {
  const motorcycleData = [
    {
      id: 1,
      name: 'Yamaha R15 V4',
      description: 'Sporty motorcycle with powerful engine and sleek design.',
      price: '₹1,80,000'
    },
    {
      id: 2,
      name: 'Royal Enfield Classic 350',
      description: 'Iconic cruiser motorcycle with vintage style.',
      price: '₹2,15,000'
    },
    {
      id: 3,
      name: 'TVS Apache RTR 160',
      description: 'Performance street bike ideal for students.',
      price: '₹1,20,000'
    }
  ];

  return (
    <div className="motorcycle-page">
      <h1>Motorcycles</h1>
      <p className="subtitle">Browse the latest motorcycles listed for sale on CampusBazaar.</p>

      <div className="motorcycle-grid">
        {motorcycleData.map((bike) => (
          <div key={bike.id} className="motorcycle-card">
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <p><strong>{bike.price}</strong></p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Motorcycle;
