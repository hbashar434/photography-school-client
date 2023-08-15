import React, { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="rounded text-center text-gray-100">
      <div
        className={`rounded hover:shadow-md p-4 group ${
          availableSeats <= 0 ? "bg-[#741111]" : "my-bg-g"
        }`}
      >
        <div className="h-48 rounded overflow-hidden">
          <img
            src={image}
            alt="image"
            className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="linear"
            data-aos-duration="1000"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-300 text-lg">Instructor : {instructorName}</p>
          <p className="text-gray-300 text-lg">
            Available Seats : {availableSeats}
          </p>
          <p className="text-gray-300 text-lg">Price : {price} $</p>
        </div>
        <button
          className={`mt-4 btn-wide ${
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
  );
};

export default ClassesCard;
