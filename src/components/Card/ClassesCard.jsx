import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const ClassesCard = ({ cls }) => {
  const { _id, image, name, instructorName, availableSeats, price, enroll } =
    cls || {};
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const handleSelect = () => {
    const course = {
      classId: _id,
      image,
      name,
      instructorName,
      availableSeats,
      enroll,
      price,
      studentEmail: user?.email,
    };

    axiosSecure.post("/classlist", course).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Course added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="border-2 text-center">
      <div className="rounded hover:shadow-md p-4 group">
        <div className="h-48 rounded overflow-hidden">
          <img
            src={image}
            alt="Card"
            className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100"
          />
        </div>
        <div className="mt-4">
          <h2 className=" text-xl font-bold">{name}</h2>
          <p className=" text-lg">Instructor : {instructorName}</p>
          <p className=" text-lg">Available Seats : {availableSeats}</p>
          <p className=" text-lg">Price : {price}</p>
          <button className="mt-4 my-btn btn-wide" onClick={() => handleSelect()}>
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
