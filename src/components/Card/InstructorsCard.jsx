import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InstructorsCard = ({ instructor }) => {
  const { image, name, email } = instructor || {};

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="my-bg-card text-gray-100 shadow-md rounded-md p-4">
      <img
        src={image}
        alt="Profile"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="w-4/12 rounded-full mx-auto mb-4"
      />
      <div className="text-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-300 text-sm">Email : {email}</p>
      </div>
    </div>
  );
};

export default InstructorsCard;
