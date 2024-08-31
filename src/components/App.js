import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";
import Gromming from "./Gromming";
import Shirt from "./Shirt";
import Trouser from "./Trouser";
import Jewellery from "./Jewellery";
import Layout from "./Layout";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/women/" element={<Women />}>
              <Route path="gromming" element={<Gromming />} />
              <Route path="shirt" element={<Shirt />} />
              <Route path="trouser" element={<Trouser />} />
              <Route path="jewellery" element={<Jewellery />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
