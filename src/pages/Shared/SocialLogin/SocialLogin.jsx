import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import SaveUser from "../../../utilities/saveUser";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        SaveUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="my-btn w-full mt-2 flex justify-center items-center"
    >
      {" "}
      <FcGoogle size={20} className="pr-1" /> <span>Continue With Google</span>
    </button>
  );
};

export default SocialLogin;
