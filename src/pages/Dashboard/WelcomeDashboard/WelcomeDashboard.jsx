import React from "react";
import Lottie from "lottie-react";
import welcome from "../../../assets/dashboard/welcome.json";
import hi from "../../../assets/dashboard/hi.json";
const WelcomeDashboard = () => {
  return (
    <div className="grid justify-center items-center md:py-20 py-8 px-4">
      <Lottie className="h-60" animationData={welcome} loop={true} />
      <div className="md:flex">
        <Lottie className="h-32" animationData={hi} loop={true} />
        <h1 className="my-text-g text-2xl pt-12">
          Welcome to the Photography School Dashboard!
        </h1>
      </div>
    </div>
  );
};

export default WelcomeDashboard;
