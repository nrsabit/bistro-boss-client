import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import loginImg from '../../../assets/others/authentication2.png'

const Register = () => {
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
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type Your Password"
                name="password"
                className="input input-bordered"
              />
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
            Already registerd? <Link to="/login"><span className="font-bold">Go to log in</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
