import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const { signUp, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newUser = { email: data.email, name: data.name };
    signUp(data.email, data.password).then((res) => {
      updateUserProfile(data.name, data.photo).then(() => {
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Registered",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
      });
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero-content w-4/5 flex-col lg:flex-row-reverse justify-between">
        <div className="text-center md:w-2/5 lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card md:w-2/5 bg-base-200 px-8">
          <h4 className="text-4xl font-bold text-center my-4">Register</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Type Name Here"
                name="name"
                className="input input-bordered"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500 mt-2">Name is required</p>
              )}
              <p className="text-red-500">{errors.exam}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="Type Photo URL"
                name="photo"
                className="input input-bordered"
              />
              {errors.photo?.type === "required" && (
                <p className="text-red-500 mt-2">Photo is required</p>
              )}
              <p className="text-red-500">{errors.exam}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text"
                placeholder="Type Email Here"
                {...register("email", { required: true })}
                name="email"
                className="input input-bordered"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 mt-2">Email is required</p>
              )}
            </div>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type Your Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 mt-2">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 mt-2">
                  Password Must be 6 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 mt-2">
                  Password must contain one uppercase, one lowercase, one
                  special character and one number
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary text-white bg-[#D1A054] border-0 bg-opacity-70"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center text-[#D1A054] mt-4">
            Already registerd?{" "}
            <Link to="/login">
              <span className="font-bold">Go to log in</span>
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
