import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateModal = ({ isOpen, closeModal, classDetails }) => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { _id, name, image, availableSeats, price } = classDetails || {};
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("className", name);
    setValue("classImage", image);
    setValue("availableSeats", availableSeats);
    setValue("price", price);
  }, [setValue, name, image, availableSeats, price]);

  const onSubmit = (data) => {
    const { className, classImage, availableSeats, price } = data;
    const updatedCourse = {
      name: className,
      image: classImage,
      instructorName: user.displayName,
      instructorEmail: user.email,
      availableSeats: parseInt(availableSeats),
      price: parseFloat(price),
    };

    axiosSecure.patch(`/classes/${_id}`, updatedCourse).then((data) => {
      if (data.data.modifiedCount) {
        closeModal();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Course Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <form className="max-w-lg mx-auto px-4 pb-4">
                  <div>
                    <div>
                      <label
                        htmlFor="className"
                        className="block text-gray-400  my-1"
                      >
                        Class name
                      </label>
                      <input
                        type="text"
                        id="className"
                        name="className"
                        placeholder="Enter class name"
                        className="w-full border border-gray-300 rounded py-1 px-2 focus:outline-none focus:border-blue-500"
                        {...register("className", { required: true })}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="classImage"
                        className="block text-gray-400  my-1"
                      >
                        Class Image
                      </label>
                      <input
                        type="text"
                        id="classImage"
                        name="classImage"
                        placeholder="Enter class image URL"
                        className="w-full border border-gray-300 rounded py-1 px-2 focus:outline-none focus:border-blue-500"
                        {...register("classImage", { required: true })}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="availableSeats"
                        className="block text-gray-400  my-1"
                      >
                        Available seats
                      </label>
                      <input
                        type="text"
                        id="availableSeats"
                        name="availableSeats"
                        placeholder="Enter available seats"
                        className="w-full border border-gray-300 rounded py-1 px-2 focus:outline-none focus:border-blue-500"
                        {...register("availableSeats", { required: true })}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="price"
                        className="block text-gray-400  my-1"
                      >
                        Price
                      </label>
                      <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="Enter price"
                        className="w-full border border-gray-300 rounded py-1 px-2 focus:outline-none focus:border-blue-500"
                        {...register("price", { required: true })}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="instructorName"
                        className="block text-gray-400  my-1"
                      >
                        Instructor name
                      </label>
                      <input
                        type="text"
                        id="instructorName"
                        name="instructorName"
                        className="w-full border border-gray-300 rounded py-1 px-2 bg-gray-100 focus:outline-none focus:border-red-500"
                        value={user?.displayName}
                        readOnly
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="instructorEmail"
                        className="block text-gray-400  my-1"
                      >
                        Instructor email
                      </label>
                      <input
                        type="email"
                        id="instructorEmail"
                        name="instructorEmail"
                        className="w-full border border-gray-300 rounded py-1 px-2 bg-gray-100 focus:outline-none focus:border-red-500"
                        value={user?.email}
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
                      Update Class
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default UpdateModal;
