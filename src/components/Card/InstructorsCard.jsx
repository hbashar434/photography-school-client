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
    <div className="px-4 md:px-8 py-4 mt-16 my-bg-card rounded-lg shadow-lg dark:bg-gray-800 relative">
      <div className="flex justify-center -mt-16 lg:justify-end">
        <img
          className="object-cover w-6/12 border-2 border-blue-500 rounded-full dark:border-indigo-900"
          alt="avatar"
          src={image}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="linear"
          data-aos-duration="1000"
        />
      </div>
      <div className="my-4">
        <h2 className="mt-2 text-xl font-semibold text-white md:mt-0">
          {name}
        </h2>

        <div className="flex items-center mt-2 text-gray-200">
          <svg
            aria-label="email icon"
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
            />
          </svg>

          <h1 className="px-2 text-sm">{email}</h1>
        </div>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-2 rounded-b-lg bg-gradient-to-r from-green-900 via-blue-900 to-purple-900"></span>
    </div>
  );
};

export default InstructorsCard;
