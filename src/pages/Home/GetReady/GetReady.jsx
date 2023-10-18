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
        <Link to="/classes" className=" bg-emerald-700 rounded-full hover:bg-emerald-900 px-8 py-2 uppercase tracking-wider my-text">
          Join
        </Link>
      </div>
    </div>
  );
};

export default GetReady;
