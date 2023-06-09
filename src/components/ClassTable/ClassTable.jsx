import React from "react";

const ClassTable = ({ index, list }) => {
  const { image, name, instructorName, availableSeats, price } = list || {};

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
        {availableSeats}
      </td>
      <td className="py-4 px-6 border hover:bg-gray-100 transition-colors duration-300">
        ${price}
      </td>
      <td className="py-4 px-6 border">
        <button className=" bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 px-4 rounded">
          Pay
        </button>
      </td>
      <td className="py-4 px-6 border">
        <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ClassTable;
