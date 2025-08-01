import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import InterviewPreparation from './pages/InterviewPreparation';
import GeneralKnowledge from './pages/GeneralKnowledge';
import SelfImprovement from './pages/SelfImprovement';
import Educational from './pages/Educational';
import MobilePhones from './pages/MobilePhones';
import Laptops from './pages/Laptops';
import Accessories from './pages/Accessories';
import Motorcycle from './pages/Motorcycle';
import Bicycle from './pages/Bicycle';
// import PostProduct from './pages/PostProduct';
import RoleSelector from './components/RoleSelector';

const App = () => {
  const [role, setRole] = useState(null);

  // Load saved role on app load
  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  // Persist role in localStorage
  useEffect(() => {
    if (role) {
      localStorage.setItem('role', role);
    }
  }, [role]);

  return (
    <>
      <Header />
      <Navbar />

      {!role ? (
        <RoleSelector onSelect={setRole} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/books/interview" element={<InterviewPreparation />} />
          <Route path="/books/GeneralKnowledge" element={<GeneralKnowledge />} />
          <Route path="/books/Self-Improvement" element={<SelfImprovement />} />
          <Route path="/Educational" element={<Educational />} />

          <Route path="/electronics/mobile-phones" element={<MobilePhones />} />
          <Route path="/electronics/laptops" element={<Laptops />} />
          <Route path="/electronics/accessories" element={<Accessories />} />

          <Route path="/vehicles/motorcycle" element={<Motorcycle />} />
          <Route path="/vehicles/bicycle" element={<Bicycle />} />

          {/* {role === 'seller' && <Route path="/post" element={<PostProduct />} />} */}
        </Routes>
      )}

      <Footer />
    </>
  );
};

export default App;
