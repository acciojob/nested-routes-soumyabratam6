import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Women = () => {
  return (
    <div>
      <p>Women Items:</p>
      <ul>
        <li>
          <NavLink to="gromming">Gromming</NavLink>
        </li>
        <li>
          <NavLink to="Shirt">Shirt</NavLink>
        </li>
        <li>
          <NavLink to="trouser">Trouser</NavLink>
        </li>
        <li>
          <NavLink to="jewellery">Jewellery</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Women;
