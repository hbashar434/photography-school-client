import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center py-14">
      <h2 className="my-text-g text-3xl pb-4">Please Login</h2>
      <div className="w-4/12 bg-gray-700 p-8 rounded shadow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              placeholder=" Email"
              type="email"
              id="email"
              className={`w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-2 relative">
            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              className={`w-full px-3 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", { required: "Password is required" })}
            />
            {showPassword ? (
              <AiOutlineEyeInvisible
                className="absolute top-[14px] right-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <AiOutlineEye
                className="absolute top-[14px] right-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <p className="text-white">
              Don&apos;t have an account?
              <Link to="/signup" className="my-text-g pl-1">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="my-2">
            <button type="submit" className="w-full my-btn">
              Login
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center">
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
