import React from 'react';
// import './Bicycle.css';
import '../styles/Bicycle.css';

const Bicycle = () => {
  const bicycles = [
    {
      name: 'Hero Sprint',
      description: 'Perfect for city commuting and fitness rides.',
    },
    {
      name: 'Firefox RoadRunner',
      description: 'Lightweight frame and reliable gears. Great for students.',
    },
    {
      name: 'Btwin Rockrider',
      description: 'Mountain-ready bike with strong build and comfort.',
    },
  ];

  return (
    <div className="bicycle-page">
      <h1>Bicycles for Students</h1>
      <p className="subtitle">
        Find reliable and affordable bicycles for campus rides and daily travel.
      </p>
      <div className="bicycle-grid">
        {bicycles.map((bike, index) => (
          <div key={index} className="bicycle-card">
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bicycle;
