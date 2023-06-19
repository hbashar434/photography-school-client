import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ActiveLink from "../pages/Shared/Navbar/ActiveLink";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

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
    <div className="drawer lg:drawer-open container mx-auto text-center">
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
        <ul className="menu p-4 w-80 h-full my-bg-g2 text-base-content">
          <div className="p-4 flex flex-col justify-center items-center">
            <img
              src={user?.photoURL}
              alt="profile"
              className="rounded-full w-20"
            />
            <h2 className="text-2xl text-gray-200">{user?.displayName}</h2>
            <p className="text-lg text-gray-200">{user?.email}</p>
          </div>
          <div className="pl-8">
            {isAdmin
              ? adminSidebar
              : isInstructor
              ? instructorSidebar
              : userSidebar}
          </div>

          <div className="border-b border-gray-300 md:pt-8"></div>
          <li className="md:text-lg pt-2 pl-8">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          {/* <li className="md:text-lg pl-8">
            <ActiveLink to="/">Profile</ActiveLink>
          </li> */}
          <li className="md:text-lg pl-8 text-gray-200">
            <button onClick={handleLogOut}>Log Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
