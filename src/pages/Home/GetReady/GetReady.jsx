import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const GetReady = () => {
  return (
    <div className="shot">
      <div className="text-center">
        <h1 className="lg:text-4xl md:text-lg text-white lg:text-[#CCCCCC] font-bold">
          Unleash Your Photography Skills
        </h1>
        <p className="py-4 lg:text-2xl md:text-base text-white font-bold">
          Join Our Photography Course and Capture Moments Like a Pro
        </p>
        <Link to="/classes" className="my-btn uppercase tracking-wider">
          Join
        </Link>
      </div>
    </div>
  );
};

export default GetReady;
