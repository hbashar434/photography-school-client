import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="my-bg  p-12 pb-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center justify-center mb-4 md:mb-0">
          <img src={logo} alt="Photography School" className="h-12 w-12 mr-2" />
          <h2 className="text-white text-xl font-bold">ClickShot</h2>
        </div>
        <div className="text-white">
          <h3 className="text-white mb-2">Quick Class Enrollment</h3>
          <p>Register for our upcoming photography classes now!</p>
          <button className="bg-gray-300 hover:bg-white text-gray-900 rounded-full py-1 px-3 mt-3">
            <Link to="classes">Enroll Now</Link>
          </button>
        </div>
        <div className="text-white">
          <h3 className="text-white mb-2">Contact Information</h3>
          <p>Email: info@photographyschool.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 453 Oak Avenue, Springland, IK 12345</p>
        </div>
      </div>
      <div className="mt-12 md:text-center text-white">
        <p className="text-sm">
          &copy;{new Date().getFullYear()} Photography School. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
