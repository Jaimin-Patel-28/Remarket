import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [showBooksDropdown, setShowBooksDropdown] = useState(false);
  const [showElectronicsDropdown, setShowElectronicsDropdown] = useState(false);
  const [showVehicleDropdown, setVehicleDropdown] = useState(false);
  const [showOtherDropdown, setOtherDropdown] = useState(false);

  const booksRef = useRef(null);
  const electronicsRef = useRef(null);
  const vehicleRef = useRef(null);
  const otherRef = useRef(null);


  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (booksRef.current && !booksRef.current.contains(event.target)) {
        setShowBooksDropdown(false);
      }
      if (electronicsRef.current && !electronicsRef.current.contains(event.target)) {
        setShowElectronicsDropdown(false);
      }
      if (vehicleRef.current && !vehicleRef.current.contains(event.target)) {
        setVehicleDropdown(false);
      }
      if (otherRef.current && !otherRef.current.contains(event.target)) {
        setOtherDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-home">Home</Link>

      {/* Books Dropdown */}
      <div className="dropdown" ref={booksRef}>
        <span
          className="dropdown-toggle"
          onClick={() => setShowBooksDropdown((prev) => !prev)}
        >
          Books ▾
        </span>

        {showBooksDropdown && (
          <ul className="dropdown-menu">
            {/* <li><Link to="/books/interview">Interview Preparation</Link></li>
            <li><Link to="/books/GeneralKnowledge">General Knowledge</Link></li>
            <li><Link to="/books/self-Improvement">Self-Improvement</Link></li>
            <li><Link to="/books/educational">Educational</Link></li> */}
            {/* <li><Link to="/books/GeneralKnowledge">GeneralKnowledge</Link></li> */}
            <li><Link to="/books/interview">Interview Preparation</Link></li>
            <li><Link to="/books/GeneralKnowledge">GeneralKnowledge</Link></li>
            <li><Link to="/books/self-Improvement">Self-Improvement</Link></li>
            {/* <li><Link to="/books/educational">Educational</Link></li> */}
            {/* <li><Link to="/books/GeneralKnowledge">GeneralKnowledge</Link></li> */}
            <li><Link to="/educational">Educational</Link></li>

          </ul>
        )}
      </div>

      {/* Electronics Dropdown */}
      <div className="dropdown" ref={electronicsRef}>
        <span
          className="dropdown-toggle"
          onClick={() => setShowElectronicsDropdown((prev) => !prev)}
        >
          Electronics & Gadgets ▾
        </span>

        {showElectronicsDropdown && (
          <ul className="dropdown-menu">
            {/* <li><Link to="/electronics/mobiles">Mobile Phones & Tablets</Link></li>
            <li><Link to="/electronics/laptops">Laptops</Link></li>
            <li><Link to="/electronics/accessories">Accessories</Link></li> */}
           <li><Link to="/electronics/mobile-phones">Mobile Phones & Tablets</Link></li>
           <li><Link to="/electronics/laptops">Laptops</Link></li>
           <li><Link to="/electronics/accessories">Accessories</Link></li>
          </ul>
        )}
      </div>

      <div className="dropdown" ref={vehicleRef}>
        <span
          className="dropdown-toggle"
          onClick={() =>setVehicleDropdown((prev) => !prev)}
        >
          Vehicles ▾
        </span>

        {showVehicleDropdown && (
          <ul className="dropdown-menu">
            {/* <li><Link to="/vehicles/motorcycle">Motorcycle</Link></li>
            <li><Link to="/vehicles/bicycle">Bicycle</Link></li> */}
            <li><Link to="/vehicles/motorcycle">Motorcycle</Link></li>
            <li><Link to="/vehicles/bicycle">Bicycle</Link></li>
          </ul>
        )}
      </div>

      <div className="dropdown" ref={otherRef}>
        <span
          className="dropdown-toggle"
          onClick={() =>setOtherDropdown((prev) => !prev)}
        >
          Other ▾
        </span>

        {showOtherDropdown && (
          <ul className="dropdown-menu">
            <li><Link to="/other/anyitems">Any Items</Link></li>
          </ul>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
