import React from "react";
import { Link, NavLink } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Navbar = () => {
  const user = true;
  const navItems = (
    <>
      <li className="mr-6 text-lg">
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li className="mr-6  text-lg">
        <ActiveLink to="instructors">Instructors</ActiveLink>
      </li>
      <li className="mr-6  text-lg">
        <ActiveLink to="classes">Classes</ActiveLink>
      </li>
      {user && (
        <li className="mr-6  text-lg">
          <ActiveLink to="/dashboard">Dashboard</ActiveLink>
        </li>
      )}
    </>
  );

  return (
    <div className="p-0 md:px-4 ">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-compact dropdown-content mt-1 p-2 shadow my-bg-pink rounded-box w-32"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className=" hidden my-text text-base  md:text-3xl font-bold md:flex items-center"
          >
            <img src="" alt="" className="w-8 lg:w-12 pr-1" />
            ClickShot
          </Link>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex ml-10">
            <ul className="menu-horizontal px-1">{navItems}</ul>
          </div>
          {user ? (
            <div className="flex justify-center items-center">
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-1 mr-4">
                  <img src={user.photoURL} title={user.displayName} />
                </div>
              </div>
              <button className="my-btn">Log Out</button>
            </div>
          ) : (
            <Link to="/login" className="my-btn">
              Login Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
