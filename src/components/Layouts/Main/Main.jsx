import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const isHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {isHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
