import React, { useEffect, useState } from 'react';
import '../styles/InterviewPreparation.css'; // Make sure this file exists and is styled
import { Link } from 'react-router-dom';

const InterviewPreparation = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load all stored products from localStorage
    const stored = JSON.parse(localStorage.getItem('products')) || [];

    // Filter for Books > Interview Preparation
    const filtered = stored.filter(
      (p) =>
        p.category === 'Books' &&
        p.subcategory === 'Interview Preparation'
    );

    setProducts(filtered);
  }, []);

  return (
    <div className="category-page">
      <h2>Interview Preparation Books</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((item, idx) => (
            <div key={idx} className="product-card">
              {item.imagePreview && (
                <img src={item.imagePreview} alt={item.title} className="product-image" />
              )}
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>
              <p>{item.condition}</p>
              <p className="tags">{item.tags}</p>
              <Link to={`/product/${idx}`}>View</Link>
            </div>
          ))
        ) : (
          <p>No products posted yet in this category.</p>
        )}
      </div>
    </div>
  );
};

export default InterviewPreparation;
