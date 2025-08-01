import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/home.css'; // Make sure this has the updated CSS

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', searchTerm);
    // Add navigation or filtering logic here
  };

  return (
    <div className="home-hero">
      <div className="hero-content">
        <p className="subtitle">Sell & Buy New, Old and Used Stuffs on Campus</p>
        <h1 className="main-title">Campus Bazaar</h1>
        <form className="home-search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
