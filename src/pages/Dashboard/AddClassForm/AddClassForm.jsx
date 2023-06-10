import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddClassForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const { className, classImage, availableSeats, price } = data;

    const newCourse = {
      name: className,
      image: classImage,
      instructorName: user.displayName,
      instructorEmail: user.email,
      availableSeats: parseInt(availableSeats),
      price: parseFloat(price),
      enrolled: 0,
      status: "pending",
      date: new Date(),
    };

    axiosSecure.post("/classes", newCourse).then((data) => {
      if (data.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Course Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <form className="max-w-lg mx-auto my-8 px-4">
      <div className="">
        <div>
          <label
            htmlFor="className"
            className="block text-gray-400 font-semibold mb-1 mt-2"
          >
            Class name
          </label>
          <input
            type="text"
            id="className"
            name="className"
            placeholder="Enter class name"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            {...register("className", { required: true })}
          />
        </div>

        <div>
          <label
            htmlFor="classImage"
            className="block text-gray-400 font-semibold mb-1 mt-2"
          >
            Class Image
          </label>
          <input
            type="text"
            id="classImage"
            name="classImage"
            placeholder="Enter class image URL"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            {...register("classImage", { required: true })}
          />
        </div>

        <div>
          <label
            htmlFor="availableSeats"
            className="block text-gray-400 font-semibold mb-1 mt-2"
          >
            Available seats
          </label>
          <input
            type="text"
            id="availableSeats"
            name="availableSeats"
            placeholder="Enter available seats"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            {...register("availableSeats", { required: true })}
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-gray-400 font-semibold mb-1 mt-2"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Enter price"
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            {...register("price", { required: true })}
          />
        </div>
        <div>
          <label
            htmlFor="instructorName"
            className="block text-gray-400 font-semibold mb-1 mt-2"
          >
            Instructor name
          </label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            className="w-full border border-gray-300 rounded py-2 px-3 bg-gray-100 focus:outline-none focus:border-red-500"
            value={user.displayName}
            readOnly
          />
        </div>

        <div>
          <label
            htmlFor="instructorEmail"
            className="block text-gray-400 font-semibold mb-1 mt-2"
          >
            Instructor email
          </label>
          <input
            type="email"
            id="instructorEmail"
            name="instructorEmail"
            className="w-full border border-gray-300 rounded py-2 px-3 bg-gray-100 focus:outline-none focus:border-red-500"
            value={user.email}
            readOnly
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          type="submit"
          className="my-btn w-full"
          onClick={handleSubmit(onSubmit)}
        >
          Add Class
        </button>
      </div>
    </form>
  );
};

export default AddClassForm;
