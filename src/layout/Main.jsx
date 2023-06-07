import React from "react";
import Navbar from "../components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className=" max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-88px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
