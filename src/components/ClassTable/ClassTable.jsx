import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ClassTable = ({ index, list, refetch }) => {
  const { _id, image, name, instructorName, availableSeats, price } =
    list || {};

  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/classlist/${id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your file has been removed.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

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
        <button
          className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ClassTable;
