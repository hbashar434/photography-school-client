import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";
import SaveUser from "../../utilities/saveUser";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const password = watch("password");
  const { createUser, createProfile, setReload } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const createdUser = result.user;
        createProfile(data.name, data.photoURL)
          .then(() => {
            SaveUser(createdUser);
            setReload(new Date().getTime());
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <h2 className="my-text-g text-3xl pb-4">Please Register</h2>
      <div className="my-bg-g text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-2/3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-x-4 mb-1 mt-2">
            <div>
              <label
                className="block text-sm font-semibold mb-1 mt-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                {...register("name")}
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-1 mt-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 text-sm italic pt-1">
                  Email is required
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-red-500 text-sm italic pt-1">
                  Invalid email format
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-1 mt-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.password ? "border-red-500" : ""
                }`}
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm italic pt-1">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm italic pt-1">
                  Password should be at least 6 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 text-sm italic pt-1">
                  Password should contain at least one capital letter and one
                  special character
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-semibold mb-1 mt-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === password,
                })}
              />
              {errors.confirmPassword?.type === "required" && (
                <p className="text-red-500 text-xs italic pt-1">
                  Confirm Password is required
                </p>
              )}
              {errors.confirmPassword?.type === "validate" && (
                <p className="text-red-500 text-xs italic">
                  Passwords do not match
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-semibold mb-1 mt-2"
                htmlFor="photoURL"
              >
                Photo URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Photo URL"
                {...register("photoURL")}
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-1 mt-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("gender")}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-1 mt-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber")}
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-1 mt-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Address"
                {...register("address")}
              />
            </div>
            <label className="text-white pt-1">
              Already have an account?
              <Link
                to="/login"
                className="label-text-alt pl-1 text-lg my-text-g"
              >
                Please Login
              </Link>
            </label>
          </div>
          <button className="my-btn w-full" type="submit">
            Sign Up
          </button>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
