import React from "react";

const EnrollTable = ({ index, course }) => {
  const { image, name, instructorName, price, payment } = course;

  return (
    <tr className="text-center">
      <td className="py-4 px-6 border hover:bg-gray-100 transition-colors duration-300">
        {index + 1}
      </td>
      <td className="border hover:bg-gray-100 transition-colors duration-300">
        <div className="grid justify-center items-center">
          <img src={image} className="w-28 h-16 rounded" />
        </div>
      </td>
      <td className="py-4 px-6 border hover:bg-gray-100 transition-colors duration-300">
        {name}
      </td>
      <td className="py-4 px-6 border hover:bg-gray-100 transition-colors duration-300">
        {instructorName}
      </td>
      <td className="py-4 px-6 border hover:bg-gray-100 transition-colors duration-300">
        ${price}
      </td>
      <td className="py-4 px-6 border">{payment === true && "Success"}</td>
    </tr>
  );
};

export default EnrollTable;
