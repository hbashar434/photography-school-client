import React from "react";
import { Outlet } from "react-router-dom";
import ActiveLink from "../pages/Shared/Navbar/ActiveLink";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const userSidebar = (
    <>
      <li className="md:text-lg">
        <ActiveLink to="/dashboard/selected">Selected Class</ActiveLink>
      </li>
      <li className="md:text-lg">
        <ActiveLink to="/dashboard/enrolled">Enrolled Classes</ActiveLink>
      </li>
      <li className="md:text-lg">
        <ActiveLink to="/dashboard/history">Payment History</ActiveLink>
      </li>
    </>
  );

  const adminSidebar = (
    <>
      <li className="md:text-lg">
        <ActiveLink to="/dashboard/allclasses">Manage Classes</ActiveLink>
      </li>
      <li className="md:text-lg">
        <ActiveLink to="/dashboard/allusers">Manage Users</ActiveLink>
      </li>
    </>
  );

  const instructorSidebar = (
    <>
      <li className="md:text-lg">
        <ActiveLink to="/dashboard/instructorclasses">My Classes</ActiveLink>
      </li>
      <li className="md:text-lg">
        <ActiveLink to="/dashboard/addclasses">Add a Class</ActiveLink>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden flex justify-end sticky top-0"
        >
          <GiHamburgerMenu size={40} color="#394867" />
        </label>
        <div className="md:w-full w-screen overflow-scroll md:overflow-hidden">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gray-800 text-base-content">
          <div className="p-4">
            <img
              src={user?.photoURL}
              alt="profile"
              className="rounded-full w-24"
            />
            <h2 className="text-2xl text-gray-200">{user?.displayName}</h2>
            <p className="text-lg text-gray-200">{user?.email}</p>
          </div>
          <div>
            {isAdmin
              ? adminSidebar
              : isInstructor
              ? instructorSidebar
              : userSidebar}
          </div>

          <div className="border-b border-gray-300 md:pt-24"></div>
          <li className="md:text-lg md:pt-20">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
