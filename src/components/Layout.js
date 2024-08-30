// src/components/Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/categories/women">Women</Link> | <Link to="/categories/men">Men</Link>
      </nav>
      <hr />
      {/* Outlet is a placeholder for nested routes */}
      <Outlet />
    </div>
  );
};

export default Layout;
