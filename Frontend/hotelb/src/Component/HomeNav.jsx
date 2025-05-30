import React from "react";
import "../css/home.css";
import { Heart, UserPlus, User } from "lucide-react";
import { DatePickerpick } from "../Component/Home/DatePicker";
import { useNavigate } from "react-router-dom";
import HomeDropdown from "./Home/HomeDropdown";

export const HomeNav = () => {
  const navigate = useNavigate();
  return (
    <div className="homeNavContainer w-full fixed p-4 backdrop-blur-md text-white top-0 bg-black bg-opacity-0  ">
      <div className="logo">
        <a
          href={"/view"}
          tabIndex={-1}
          className="select-none text-3xl  cursor-pointer fotn-pink"
        >
          BAAS
        </a>
      </div>
      <DatePickerpick />
      <HomeDropdown />
    </div>
  );
};

export default HomeNav;
