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
      <h2>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Items</h2>
      <ul>
        {items[categoryName]?.map((item, index) => (
          <li key={index}>
            {/* Ensure the links are correctly generated */}
            <Link to={`/categories/${categoryName}/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Category;
