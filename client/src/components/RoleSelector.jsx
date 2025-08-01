import React from 'react';
import '../styles/RoleSelector.css';

const RoleSelector = ({ onSelect }) => {
  return (
    <div className='roleselector'>
      <h2>Select Your Role</h2>
      <button onClick={() => onSelect('buyer')}>I am a Buyer</button>
      <button onClick={() => onSelect('seller')}>
        I am a Seller
      </button>
    </div>
  );
};

export default RoleSelector;
