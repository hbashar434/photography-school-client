import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {});
  };
  const navItems = (
    <>
      <li className="mr-6 text-lg">
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li className="mr-6  text-lg">
        <ActiveLink to="/instructors">Instructors</ActiveLink>
      </li>
      <li className="mr-6  text-lg">
        <ActiveLink to="/classes">Classes</ActiveLink>
      </li>
      {user && (
        <li className="mr-6  text-lg">
          <ActiveLink to="/dashboard">Dashboard</ActiveLink>
        </li>
      )}
    </>
  );

  return (
    <div className="p-0 md:px-4 fixed z-10 container mx-auto bg-gray-800">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu size={24} color="#4E31AA" />
            </label>
            <ul
              tabIndex={0}
              className="menu-compact dropdown-content p-2 shadow bg-gray-800 rounded-box rounded-t-none w-48"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className=" hidden my-text text-base  md:text-3xl font-bold md:flex items-center"
          >
            {/* <img src="" alt="" className="w-8 lg:w-12 pr-1" /> */}
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
                <div className="w-6 md:w-8 rounded-full ring ring-purple-500 mr-4">
                  <img src={user?.photoURL} title={user.displayName} />
                </div>
              </div>
              <button className="my-btn" onClick={handleLogOut}>
                Log Out
              </button>
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
