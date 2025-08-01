import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PostProduct.css';

const categoryOptions = {
  Books: ['Interview Preparation', 'General Knowledge', 'Self-Improvement', 'Educational'],
  Electronics: ['Mobile Phones & Tablets', 'Laptops', 'Accessories'],
  Gadgets: ['Smartwatches', 'VR Headsets', 'Drones'],
};

const priceTypes = ['Fixed', 'Negotiable'];

const PostProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    condition: 'New',
    warranty: 'No',
    title: '',
    adType: 'Sell',
    description: '',
    priceType: '',
    price: '',
    tags: '',
    name: '',
    mobile: '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submittedData = {
      ...formData,
      imagePreview,
      timestamp: new Date().toISOString(),
    };

    // Save product
    const existing = JSON.parse(localStorage.getItem('products')) || [];
    existing.push(submittedData);
    localStorage.setItem('products', JSON.stringify(existing));

    // Save current user
    localStorage.setItem('currentUser', JSON.stringify({
      name: formData.name,
      mobile: formData.mobile,
    }));

    alert('✅ Product Submitted!');

    // Reset form
    setFormData({
      category: '',
      subcategory: '',
      condition: 'New',
      warranty: 'No',
      title: '',
      adType: 'Sell',
      description: '',
      priceType: '',
      price: '',
      tags: '',
      name: '',
      mobile: '',
    });
    setImageFile(null);
    setImagePreview('');

    // Redirect
    const categoryPath = submittedData.category.toLowerCase().replace(/\s+/g, '-');
    const subcategoryPath = submittedData.subcategory.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${categoryPath}/${subcategoryPath}`);
  };

  return (
    <div className="post-container">
      <h2>Basic information</h2>
      <p>Select Suitable Category for your ad</p>

      {formData.category && formData.subcategory ? (
        <div className="breadcrumb">
          {formData.category} <span>/</span> {formData.subcategory}
          <button onClick={() => setFormData({ ...formData, category: '', subcategory: '' })}>Change</button>
        </div>
      ) : (
        <>
          <label>Category *</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select a category</option>
            {Object.keys(categoryOptions).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {formData.category && (
            <>
              <label>Subcategory *</label>
              <select name="subcategory" value={formData.subcategory} onChange={handleChange} required>
                <option value="">Select subcategory</option>
                {categoryOptions[formData.category].map((sub) => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </>
          )}
        </>
      )}

      {formData.category && formData.subcategory && (
        <form onSubmit={handleSubmit} className="post-form">
          <div className="row">
            <div>
              <label>Item Condition</label>
              <div className="toggle-group">
                <button type="button" className={formData.condition === 'New' ? 'active' : ''} onClick={() => handleToggle('condition', 'New')}>New</button>
                <button type="button" className={formData.condition === 'Used' ? 'active' : ''} onClick={() => handleToggle('condition', 'Used')}>Used</button>
              </div>
            </div>
            <div>
              <label>Warranty</label>
              <div className="toggle-group">
                <button type="button" className={formData.warranty === 'Yes' ? 'active' : ''} onClick={() => handleToggle('warranty', 'Yes')}>Yes</button>
                <button type="button" className={formData.warranty === 'No' ? 'active' : ''} onClick={() => handleToggle('warranty', 'No')}>No</button>
              </div>
            </div>
          </div>

          <label>Title *</label>
          <input type="text" name="title" maxLength="50" placeholder="Enter title" value={formData.title} onChange={handleChange} required />

          <label>Type of Ad</label>
          <div className="toggle-group">
            {['Buy', 'Sell', 'Rent'].map((type) => (
              <button type="button" key={type} className={formData.adType === type ? 'active' : ''} onClick={() => handleToggle('adType', type)}>{type}</button>
            ))}
          </div>

          <label>Ad Description</label>
          <textarea name="description" rows="4" placeholder="Enter long description" value={formData.description} onChange={handleChange} />

          <div className="row">
            <div>
              <label>Price Type</label>
              <select name="priceType" value={formData.priceType} onChange={handleChange}>
                <option value="">Select</option>
                {priceTypes.map((pt) => (
                  <option key={pt} value={pt}>{pt}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Price *</label>
              <input type="number" name="price" placeholder="₹" value={formData.price} onChange={handleChange} required />
            </div>
          </div>

          <label>Tags</label>
          <input type="text" name="tags" placeholder="Comma separated" value={formData.tags} onChange={handleChange} />

          <label>Upload Photos</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && <div className="image-preview"><img src={imagePreview} alt="Preview" /></div>}

          <h4>User information</h4>
          <div className="row">
            <div>
              <label>Your Name *</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label>Mobile Number *</label>
              <input type="text" name="mobile" required value={formData.mobile} onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}
    </div>
  );
};

export default PostProduct;
