import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RoleSelector from './RoleSelector'; // Make sure this file exists
import '../styles/Header.css';

const Header = () => {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    if (savedRole) setRole(savedRole);
  }, []);

  useEffect(() => {
    if (role) localStorage.setItem('role', role);
  }, [role]);

  return (
    <header className="header">
      <div className="header-title">
        <h1>CampusBazaar</h1>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          placeholder="What Are You Looking For?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Role Selector */}
      <div className="role-box">
        <span className="role-label">
          Role: {role ? role.charAt(0).toUpperCase() + role.slice(1) : 'Not selected'}
        </span>
        <RoleSelector onSelect={setRole} />
      </div>

      <nav className="header-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {/* <Link to="/post">Add Item</Link> */}
      </nav>
    </header>
  );
};

export default Header;
