//Content Management System (cms)
import React from "react";
import Bbutton from "../Component/back_button";
import NavBar from "../Component/NavBar";
import "../css/Cms.css";
import { Helmet } from "react-helmet";
import { Computer, User, Bed } from "lucide-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cms = () => {
  const title = "CMS";
  useState(() => {
    toast.success("Logged In", {
      position: "top-right",
      theme: "colored",
    });
  }),
    [];

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavBar />
      <ToastContainer />
      <div className="container">
        <div className="left_sidebar">
          Admin Pannel
          <ul style={{ margin: "20px" }}>
            <div className="User">
              <User />
              <li>Users</li>
            </div>
            <div className="BedRooms">
              <Bed />
              <li>Rooms</li>
            </div>
            <div className="Staff">
              <Computer />
              <li>Staff</li>
            </div>
          </ul>
        </div>
        <div className="content">
          <h1>Welcome to the Content Management System.</h1>
        </div>
      </div>
    </>
  );
};

export default Cms;
