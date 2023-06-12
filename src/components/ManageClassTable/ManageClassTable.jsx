import React from "react";
import Swal from "sweetalert2";

const ManageClassTable = ({ index, course, refetch }) => {
  const {
    _id,
    image,
    name,
    instructorName,
    instructorEmail,
    availableSeats,
    price,
    status,
  } = course || {};

  const handleStatus = (id, updateStatus) => {
    fetch(
      `${
        import.meta.env.VITE_API_URL
      }/classstatus/${id}?status=${updateStatus}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class has been Approved!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <tr className="text-center text-xs">
      <td className="py-2 px-1 border hover:bg-gray-100 transition-colors duration-300">
        {index + 1}
      </td>
      <td className="border hover:bg-gray-100 transition-colors duration-300">
        <div className="grid justify-center items-center">
          <img src={image} className="w-24 h-12 rounded-lg" />
        </div>
      </td>
      <td className="py-2 px-1 border hover:bg-gray-100 transition-colors duration-300">
        {name}
      </td>
      <td className="py-2 px-1 border hover:bg-gray-100 transition-colors duration-300">
        {instructorName}
      </td>
      <td className="py-2 px-1 border hover:bg-gray-100 transition-colors duration-300">
        {instructorEmail}
      </td>
      <td className="py-2 px-1 border hover:bg-gray-100 transition-colors duration-300">
        ${price}
      </td>
      <td className="py-2 px-1 border hover:bg-gray-100 transition-colors duration-300">
        {availableSeats}
      </td>
      <td className="py-2 px-1 border">
        <button
          className={`bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 px-4 rounded ${
            status === "pending" ? "" : "btn-disabled my-btn-disabled"
          }`}
          onClick={() => handleStatus(_id, "approved")}
        >
          Approve
        </button>
      </td>
      <td className="py-2 px-1 border">
        <button
          className={`bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded ${
            status === "pending" ? "" : "btn-disabled my-btn-disabled"
          }`}
          onClick={() => handleStatus(_id, "denied")}
        >
          Deny
        </button>
      </td>
      <td className="py-2 px-1 border">
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
          Feedback
        </button>
      </td>
    </tr>
  );
};

export default ManageClassTable;
