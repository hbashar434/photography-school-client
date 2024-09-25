import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const GetReady = () => {
  return (
    <div className="shot">
      <div className="text-center">
        <h1 className="lg:text-4xl md:text-lg my-text font-bold">
          Unleash Your Photography Skills
        </h1>
        <p className="py-4 lg:text-2xl md:text-base my-text font-bold">
          Join Our Photography Course and Capture Moments Like a Pro
        </p>
        <Link
          to="/classes"
          className="hover:bg-gray-200 rounded-full bg-white px-8 py-2 uppercase tracking-wider text-gray-800 font-semibold"
        >
          Join
        </Link>
      </div>
    </div>
  );
};

export default GetReady;
