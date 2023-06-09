import React from "react";
import { Outlet } from "react-router-dom";
import ActiveLink from "../pages/Shared/Navbar/ActiveLink";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const sidebar = (
    <>
      <li className="md:text-lg">
        <ActiveLink to="/dashboard/selected">Selected Class</ActiveLink>
      </li>
      <li className="md:text-lg">
        <ActiveLink to="/dashboard/enrolled">Enrolled Classes</ActiveLink>
      </li>
      <li className="md:text-lg">
        <ActiveLink to="dashboard/history">Payment History</ActiveLink>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <GiHamburgerMenu size={40} color="#394867" />
        </label>
        <div className="flex justify-center items-center">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gray-800 text-base-content">
          <div className="p-4">
            <img src={user?.photoURL} alt="profile" className="rounded-full" />
            <h2 className="text-2xl text-gray-200">{user?.displayName}</h2>
            <p className="text-lg text-gray-200">{user?.email}</p>
          </div>
          <div>{sidebar}</div>
          <div className="border-b border-gray-300 pt-24"></div>
          <li className="md:text-lg pt-20">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
