import React from "react";
import Swal from "sweetalert2";

const UserTable = ({ index, user, refetch }) => {
  const handleRole = (email, role) => {
    fetch(
      `${import.meta.env.VITE_API_URL}/users/role?email=${email}&role=${role}`,
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
            title: `${user.name} is an ${role} now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const { name, email, role } = user || {};
  return (
    <tr className="text-center">
      <td className="py-4 px-6 border hover:bg-gray-100 transition-colors duration-300">
        {index + 1}
      </td>
      <td className="py-4 px-6 border hover:bg-gray-100 transition-colors duration-300">
        {name}
      </td>
      <td className="py-4 px-6 border hover:bg-gray-100 transition-colors duration-300">
        {email}
      </td>
      <td className="py-4 px-6 border hover:bg-gray-100 transition-colors duration-300">
        {role === "admin"
          ? "Admin"
          : role === "instructor"
          ? "Instructor"
          : "Student"}
      </td>
      <td className="py-4 px-6 border">
        <button
          className={` py-2 px-4 rounded ${
            role === "instructor"
              ? "btn-disabled my-btn-disabled "
              : "bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
          }`}
          onClick={() => handleRole(email, "instructor")}
        >
          Instructor
        </button>
      </td>
      <td className="py-4 px-6 border">
        <button
          className={` py-2 px-4 rounded ${
            role === "admin"
              ? "btn-disabled text-gray-500"
              : "bg-pink-600 hover:bg-pink-700 text-white"
          }`}
          onClick={() => handleRole(email, "admin")}
        >
          Admin
        </button>
      </td>
    </tr>
  );
};

export default UserTable;
