import React, { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { useNavigate } from "react-router-dom";

const ClassesCard = ({ cls }) => {
  const navigate = useNavigate();
  const { _id, image, name, instructorName, enrolled, availableSeats, price } =
    cls || {};
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const [axiosSecure] = useAxiosSecure();
  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You have to log in first",
        showConfirmButton: false,
        timer: 1500,
      });
      return navigate("/login");
    }
    const course = {
      classId: _id,
      image,
      name,
      instructorName,
      availableSeats,
      enrolled,
      price,
      studentEmail: user?.email,
      payment: false,
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
    <div className="rounded-xl text-center my-text shadow-md">
      <div
        className={`rounded-xl hover:shadow-md pb-4 lg:p-2 lg:pr-4 group lg:flex justify-center items-center gap-6 ${
          availableSeats <= 0 ? "bg-[#C70039] dark:bg-slate-600" : "my-bg-g"
        }`}
      >
        <div className="h-48 lg:h-56 lg:w-72 xl:h-60 xl:w-96 rounded-t md:rounded overflow-hidden md:m-2">
          <img
            src={image}
            alt="image"
            className="object-cover rounded-t md:rounded-lg w-full h-full transform scale-100 transition-transform duration-300 group-hover:scale-125"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className=" text-lg">Instructor : {instructorName}</p>
          <p className=" text-lg">Available Seats : {availableSeats}</p>
          <p className="text-lg">Price : {price} $</p>
          <button
            className={`mt-4 md:btn-wide ${
              isAdmin || isInstructor || availableSeats == 0
                ? "btn-disabled my-btn-disabled"
                : "my-btn"
            }`}
            onClick={() => handleSelect()}
          >
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
