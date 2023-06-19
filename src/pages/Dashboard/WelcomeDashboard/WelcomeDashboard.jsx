import React from "react";
import Lottie from "lottie-react";
import welcome from "../../../assets/dashboard/welcome.json";
import hi from "../../../assets/dashboard/hi.json";
const WelcomeDashboard = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center my-bg-body">
      <Lottie className="h-60" animationData={welcome} loop={true} />
      <div className="md:flex">
        <Lottie className="h-32" animationData={hi} loop={true} />
        <h1 className="my-text-g text-2xl pt-12">Welcome to your dashboard!</h1>
      </div>
    </div>
  );
};

export default WelcomeDashboard;
