// src/components/Category.js
import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const Category = () => {
  const { categoryName } = useParams();

  const items = {
    women: ['Dress', 'Skirt', 'Blouse'],
    men: ['Shirt', 'Trousers', 'Jacket'],
  };

  return (
    <div>
      <h2>{categoryName} Items</h2>
      <ul>
        {items[categoryName].map((item, index) => (
          <li key={index}>
            <Link to={`/categories/${categoryName}/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
      {/* Nested route outlet */}
      <Outlet />
    </div>
  );
};

export default Category;
