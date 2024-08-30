// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Categories from './Categories';
import Category from './Category';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout component as the main layout with a navigation bar */}
        <Route path="/" element={<Layout />}>
          {/* Index route */}
          <Route index element={<Categories />} />
          {/* Nested route for categories */}
          <Route path="categories/:categoryName" element={<Category />}>
            {/* Nested route for items within a category */}
            <Route path=":itemName" element={<ItemDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
