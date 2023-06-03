import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()

  const handleLogOut = () => {
    logOut().then(() => Swal.fire("Log Out Successful"));
  };
  return (
    <div className="navbar bg-black fixed z-10 max-w-7xl bg-opacity-40 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Our Menu</NavLink>
            </li>
            <li>
              <NavLink to="/foods/salad">Our Foods</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-cart">
                <button className="btn gap-2 btn-ghost">
                  <FaShoppingCart></FaShoppingCart>
                  <div className="badge badge-secondary">
                    +{cart.length}
                  </div>
                </button>
              </NavLink>
            </li>
            {user ? (
              <button onClick={handleLogOut} className="btn btn-ghost">
                Log Out
              </button>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/foods/salad">Our Foods</NavLink>
          </li>
          <NavLink to="/dashboard/my-cart">
            <button className="btn gap-2 btn-ghost">
              <FaShoppingCart></FaShoppingCart>
              <div className="badge badge-secondary">+{cart.length}</div>
            </button>
          </NavLink>
          {user ? (
            <button onClick={handleLogOut} className="btn btn-ghost">
              Log Out
            </button>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Navbar;
