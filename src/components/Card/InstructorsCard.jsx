import React from "react";

const InstructorsCard = ({ instructor }) => {
  const { image, name, email } = instructor || {};
  return (
    <div className="my-bg-g2 text-gray-100 hover:shadow-md rounded-lg p-4">
      <img
        src={image}
        alt="Profile"
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
