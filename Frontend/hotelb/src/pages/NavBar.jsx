import React from "react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/");
  }
  return (
    <div className="navcont">
      <div className="logo text-gray-700" onClick={handleclick}>
        Hotel Booking
      </div>
      <li>
        <a className=" text-gray-700" href="/login">
          Login
        </a>
      </li>
      <li>
        <a className=" text-gray-700" href="/signup">
          Signup
        </a>
      </li>
      <li>
        <a className=" text-gray-700" href="/Cms">
          Cms
        </a>
      </li>
    </div>
  );
};

export default NavBar;
