import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="w-full xl:container xl:mx-auto">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-50px)] pt-16 my-bg-body">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
