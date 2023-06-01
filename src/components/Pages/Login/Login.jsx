import React, { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import loginImg from "../../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [invalid, setInvalid] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const url = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((res) => {
        Swal.fire({
          title: "Login Successful",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(url, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };

  const handleValidateCaptcha = (event) => {
    const user_captcha_value = event.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero-content w-4/5 flex-col lg:flex-row justify-between">
        <div className="text-center md:w-2/5 lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card md:w-2/5 bg-base-200 px-8">
          <h4 className="text-4xl font-bold text-center my-4">Login</h4>
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text"
                placeholder="Type Email Here"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type Your Password"
                name="password"
                className="input input-bordered"
              />
            </div>
            <div>
              {" "}
              <LoadCanvasTemplate></LoadCanvasTemplate>{" "}
            </div>
            <div className="form-control mb-2">
              <input
                type="text"
                onBlur={handleValidateCaptcha}
                placeholder="Type Captcha Here"
                name="captcha"
                className="input input-bordered"
              />
            </div>
            <p className={`text-red-600 ${!invalid ? "hidden" : ""}`}>
              Invalid Captcha
            </p>
            <div className="form-control mt-6">
              <input
                disabled={invalid}
                className="btn btn-primary text-white bg-[#D1A054] border-0 bg-opacity-70"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center text-[#D1A054] mt-4">
            New here?{" "}
            <Link to="/register">
              <span className="font-bold">Create a New Account</span>
            </Link>{" "}
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
