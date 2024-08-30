// src/components/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        <li><Link to="/categories/women">Women</Link></li>
        <li><Link to="/categories/men">Men</Link></li>
      </ul>
    </div>
  );
};

export default Categories;
