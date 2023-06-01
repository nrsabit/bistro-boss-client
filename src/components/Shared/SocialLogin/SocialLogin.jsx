import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const url = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((data) => {
      const loggedInUser = {
        name: data.user.displayName,
        email: data.user.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loggedInUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Google SignUp Completed",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Google SignIn Completed",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          navigate(url)
        });
    });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-circle">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
