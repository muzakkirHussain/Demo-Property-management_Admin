import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import "../Components/Navbar/Navbar.scss";

const Template = () => {
  return (
    <div className="template">
      <Navbar />

      <Outlet className="outLet" />
      {/* <Footer /> */}
    </div>
  );
};

export default Template;
