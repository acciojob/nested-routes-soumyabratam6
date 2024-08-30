import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        
        {/* Ensure correct links */}
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories/women">Women</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
