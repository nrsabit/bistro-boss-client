import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../../assets/icon/bistro logo.png";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { BsCartFill } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import useCart from "../../../hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
          <img className="mt-8 w-40 mb-12" src={logo} alt="" />
          <li className="uppercase">
            <NavLink to="/dashboard/home">
              <AiFillHome></AiFillHome>Admin Home
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/reservations">
              <FaCalendarAlt></FaCalendarAlt>Reservations
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/payments">
              <GiWallet></GiWallet>Payment History
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/my-cart">
              <BsCartFill></BsCartFill>My Cart{" "}
              <div className="badge badge-secondary">+{cart.length}</div>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="uppercase">
            <NavLink to="/">
              <AiFillHome></AiFillHome>Home
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/menu">
              <AiOutlineMenu></AiOutlineMenu>Our Menu
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/foods/salad">
              <MdFastfood></MdFastfood>Our Foods
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
