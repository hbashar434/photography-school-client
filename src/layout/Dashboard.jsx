import React from "react";
import { Link, Outlet } from "react-router-dom";
import ActiveLink from "../pages/Shared/Navbar/ActiveLink";

const Dashboard = () => {
  const isAdmin = false;
  const isInstructor = true;

  const sidebar = (
    <>
      <li className="md:text-md">
        <ActiveLink to="selected">Selected Class</ActiveLink>
      </li>
      <li className="md:text-md">
        <ActiveLink to="enrolled">Enrolled Classes</ActiveLink>
      </li>
      <li className="md:text-md">
        <ActiveLink to="/history">Payment History</ActiveLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="flex">
        <div className="my-bg h-screen py-12 w-32 px-4 md:px-8 lg:w-72">
          <div className="text-white md:text-2xl font-semibold mb-8">
            Dashboard
          </div>
          <nav>
            <ul className="space-y-2">
              {sidebar}

              <li className="md:text-lg pt-80">
                <ActiveLink to="/">Home</ActiveLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-12 flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
