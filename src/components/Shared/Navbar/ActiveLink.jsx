import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "my-text-g text-xl" : "text-gray-800 font-medium"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
