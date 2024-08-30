import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        {/* Ensure correct links */}
        <Link to="/">Home</Link> | 
        <Link to="/categories/women">Women</Link> | 
        <Link to="/categories/men">Men</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
