import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    setError("");
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError("User-not-found: email or password doesn't match");
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center py-14">
      <h2 className="my-text-g text-3xl pb-4">Please Login</h2>
      <div className="md:w-4/12 bg-slate-800 p-8 rounded shadow my-text">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              placeholder=" Email"
              type="email"
              id="email"
              className="shadow appearance-none border border-slate-600 rounded w-full py-2 px-3 text-gray-700 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 leading-tight focus:outline-none focus:shadow-outline"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <div className="mb-2 relative">
            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              className="shadow appearance-none border border-slate-600 rounded w-full py-2 px-3 text-gray-700 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 leading-tight focus:outline-none focus:shadow-outline"
              {...register("password", { required: "Password is required" })}
            />
            {showPassword ? (
              <AiOutlineEyeInvisible
                className="absolute top-[12px] right-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <AiOutlineEye
                className="absolute top-[12px] right-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          {<span className="text-red-500 text-sm mt-1">{error}</span>}
          <div>
            <p className="text-white text-sm md:text-base">
              Don&apos;t have an account?
              <Link to="/signup" className="underline underline-offset-4 pl-1">
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
