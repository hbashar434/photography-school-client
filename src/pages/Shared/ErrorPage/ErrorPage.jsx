import React from "react";
import { Link } from "react-router-dom";
import error from "../../../assets/error/error.jpg";
const ErrorPage = () => {
  return (
    <div className="grid justify-center mt-20">
      <img className=" h-46 md:h-96" src={error} alt="error-image" />
      <Link to="/" className="text-center pt-8">
        <button className="my-btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
